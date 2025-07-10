(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Ld(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hf={exports:{}},Tl={},Wf={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function TS(){if(xv)return Le;xv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function w(U){return U===null||typeof U!="object"?null:(U=E&&U[E]||U["@@iterator"],typeof U=="function"?U:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,V={};function N(U,K,ye){this.props=U,this.context=K,this.refs=V,this.updater=ye||C}N.prototype.isReactComponent={},N.prototype.setState=function(U,K){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,K,"setState")},N.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function M(){}M.prototype=N.prototype;function z(U,K,ye){this.props=U,this.context=K,this.refs=V,this.updater=ye||C}var G=z.prototype=new M;G.constructor=z,R(G,N.prototype),G.isPureReactComponent=!0;var J=Array.isArray,te=Object.prototype.hasOwnProperty,Y={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function A(U,K,ye){var Re,be={},Ne=null,je=null;if(K!=null)for(Re in K.ref!==void 0&&(je=K.ref),K.key!==void 0&&(Ne=""+K.key),K)te.call(K,Re)&&!P.hasOwnProperty(Re)&&(be[Re]=K[Re]);var Me=arguments.length-2;if(Me===1)be.children=ye;else if(1<Me){for(var Be=Array(Me),ut=0;ut<Me;ut++)Be[ut]=arguments[ut+2];be.children=Be}if(U&&U.defaultProps)for(Re in Me=U.defaultProps,Me)be[Re]===void 0&&(be[Re]=Me[Re]);return{$$typeof:n,type:U,key:Ne,ref:je,props:be,_owner:Y.current}}function I(U,K){return{$$typeof:n,type:U.type,key:K,ref:U.ref,props:U.props,_owner:U._owner}}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function O(U){var K={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ye){return K[ye]})}var F=/\/+/g;function k(U,K){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):K.toString(36)}function _e(U,K,ye,Re,be){var Ne=typeof U;(Ne==="undefined"||Ne==="boolean")&&(U=null);var je=!1;if(U===null)je=!0;else switch(Ne){case"string":case"number":je=!0;break;case"object":switch(U.$$typeof){case n:case e:je=!0}}if(je)return je=U,be=be(je),U=Re===""?"."+k(je,0):Re,J(be)?(ye="",U!=null&&(ye=U.replace(F,"$&/")+"/"),_e(be,K,ye,"",function(ut){return ut})):be!=null&&(D(be)&&(be=I(be,ye+(!be.key||je&&je.key===be.key?"":(""+be.key).replace(F,"$&/")+"/")+U)),K.push(be)),1;if(je=0,Re=Re===""?".":Re+":",J(U))for(var Me=0;Me<U.length;Me++){Ne=U[Me];var Be=Re+k(Ne,Me);je+=_e(Ne,K,ye,Be,be)}else if(Be=w(U),typeof Be=="function")for(U=Be.call(U),Me=0;!(Ne=U.next()).done;)Ne=Ne.value,Be=Re+k(Ne,Me++),je+=_e(Ne,K,ye,Be,be);else if(Ne==="object")throw K=String(U),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return je}function Oe(U,K,ye){if(U==null)return U;var Re=[],be=0;return _e(U,Re,"","",function(Ne){return K.call(ye,Ne,be++)}),Re}function de(U){if(U._status===-1){var K=U._result;K=K(),K.then(function(ye){(U._status===0||U._status===-1)&&(U._status=1,U._result=ye)},function(ye){(U._status===0||U._status===-1)&&(U._status=2,U._result=ye)}),U._status===-1&&(U._status=0,U._result=K)}if(U._status===1)return U._result.default;throw U._result}var ge={current:null},X={transition:null},ae={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:X,ReactCurrentOwner:Y};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:Oe,forEach:function(U,K,ye){Oe(U,function(){K.apply(this,arguments)},ye)},count:function(U){var K=0;return Oe(U,function(){K++}),K},toArray:function(U){return Oe(U,function(K){return K})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Le.Component=N,Le.Fragment=t,Le.Profiler=o,Le.PureComponent=z,Le.StrictMode=i,Le.Suspense=f,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,Le.act=ue,Le.cloneElement=function(U,K,ye){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Re=R({},U.props),be=U.key,Ne=U.ref,je=U._owner;if(K!=null){if(K.ref!==void 0&&(Ne=K.ref,je=Y.current),K.key!==void 0&&(be=""+K.key),U.type&&U.type.defaultProps)var Me=U.type.defaultProps;for(Be in K)te.call(K,Be)&&!P.hasOwnProperty(Be)&&(Re[Be]=K[Be]===void 0&&Me!==void 0?Me[Be]:K[Be])}var Be=arguments.length-2;if(Be===1)Re.children=ye;else if(1<Be){Me=Array(Be);for(var ut=0;ut<Be;ut++)Me[ut]=arguments[ut+2];Re.children=Me}return{$$typeof:n,type:U.type,key:be,ref:Ne,props:Re,_owner:je}},Le.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},Le.createElement=A,Le.createFactory=function(U){var K=A.bind(null,U);return K.type=U,K},Le.createRef=function(){return{current:null}},Le.forwardRef=function(U){return{$$typeof:h,render:U}},Le.isValidElement=D,Le.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:de}},Le.memo=function(U,K){return{$$typeof:m,type:U,compare:K===void 0?null:K}},Le.startTransition=function(U){var K=X.transition;X.transition={};try{U()}finally{X.transition=K}},Le.unstable_act=ue,Le.useCallback=function(U,K){return ge.current.useCallback(U,K)},Le.useContext=function(U){return ge.current.useContext(U)},Le.useDebugValue=function(){},Le.useDeferredValue=function(U){return ge.current.useDeferredValue(U)},Le.useEffect=function(U,K){return ge.current.useEffect(U,K)},Le.useId=function(){return ge.current.useId()},Le.useImperativeHandle=function(U,K,ye){return ge.current.useImperativeHandle(U,K,ye)},Le.useInsertionEffect=function(U,K){return ge.current.useInsertionEffect(U,K)},Le.useLayoutEffect=function(U,K){return ge.current.useLayoutEffect(U,K)},Le.useMemo=function(U,K){return ge.current.useMemo(U,K)},Le.useReducer=function(U,K,ye){return ge.current.useReducer(U,K,ye)},Le.useRef=function(U){return ge.current.useRef(U)},Le.useState=function(U){return ge.current.useState(U)},Le.useSyncExternalStore=function(U,K,ye){return ge.current.useSyncExternalStore(U,K,ye)},Le.useTransition=function(){return ge.current.useTransition()},Le.version="18.3.1",Le}var Iv;function lm(){return Iv||(Iv=1,Wf.exports=TS()),Wf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function SS(){if(Av)return Tl;Av=1;var n=lm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(h,f,m){var _,E={},w=null,C=null;m!==void 0&&(w=""+m),f.key!==void 0&&(w=""+f.key),f.ref!==void 0&&(C=f.ref);for(_ in f)i.call(f,_)&&!a.hasOwnProperty(_)&&(E[_]=f[_]);if(h&&h.defaultProps)for(_ in f=h.defaultProps,f)E[_]===void 0&&(E[_]=f[_]);return{$$typeof:e,type:h,key:w,ref:C,props:E,_owner:o.current}}return Tl.Fragment=t,Tl.jsx=c,Tl.jsxs=c,Tl}var Cv;function xS(){return Cv||(Cv=1,Hf.exports=SS()),Hf.exports}var S=xS(),B=lm();const dt=Ld(B);var bc={},Gf={exports:{}},hn={},Kf={exports:{}},Qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function IS(){return Rv||(Rv=1,function(n){function e(X,ae){var ue=X.length;X.push(ae);e:for(;0<ue;){var U=ue-1>>>1,K=X[U];if(0<o(K,ae))X[U]=ae,X[ue]=K,ue=U;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var ae=X[0],ue=X.pop();if(ue!==ae){X[0]=ue;e:for(var U=0,K=X.length,ye=K>>>1;U<ye;){var Re=2*(U+1)-1,be=X[Re],Ne=Re+1,je=X[Ne];if(0>o(be,ue))Ne<K&&0>o(je,be)?(X[U]=je,X[Ne]=ue,U=Ne):(X[U]=be,X[Re]=ue,U=Re);else if(Ne<K&&0>o(je,ue))X[U]=je,X[Ne]=ue,U=Ne;else break e}}return ae}function o(X,ae){var ue=X.sortIndex-ae.sortIndex;return ue!==0?ue:X.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,h=c.now();n.unstable_now=function(){return c.now()-h}}var f=[],m=[],_=1,E=null,w=3,C=!1,R=!1,V=!1,N=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(X){for(var ae=t(m);ae!==null;){if(ae.callback===null)i(m);else if(ae.startTime<=X)i(m),ae.sortIndex=ae.expirationTime,e(f,ae);else break;ae=t(m)}}function J(X){if(V=!1,G(X),!R)if(t(f)!==null)R=!0,de(te);else{var ae=t(m);ae!==null&&ge(J,ae.startTime-X)}}function te(X,ae){R=!1,V&&(V=!1,M(A),A=-1),C=!0;var ue=w;try{for(G(ae),E=t(f);E!==null&&(!(E.expirationTime>ae)||X&&!O());){var U=E.callback;if(typeof U=="function"){E.callback=null,w=E.priorityLevel;var K=U(E.expirationTime<=ae);ae=n.unstable_now(),typeof K=="function"?E.callback=K:E===t(f)&&i(f),G(ae)}else i(f);E=t(f)}if(E!==null)var ye=!0;else{var Re=t(m);Re!==null&&ge(J,Re.startTime-ae),ye=!1}return ye}finally{E=null,w=ue,C=!1}}var Y=!1,P=null,A=-1,I=5,D=-1;function O(){return!(n.unstable_now()-D<I)}function F(){if(P!==null){var X=n.unstable_now();D=X;var ae=!0;try{ae=P(!0,X)}finally{ae?k():(Y=!1,P=null)}}else Y=!1}var k;if(typeof z=="function")k=function(){z(F)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Oe=_e.port2;_e.port1.onmessage=F,k=function(){Oe.postMessage(null)}}else k=function(){N(F,0)};function de(X){P=X,Y||(Y=!0,k())}function ge(X,ae){A=N(function(){X(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){R||C||(R=!0,de(te))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(X){switch(w){case 1:case 2:case 3:var ae=3;break;default:ae=w}var ue=w;w=ae;try{return X()}finally{w=ue}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,ae){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ue=w;w=X;try{return ae()}finally{w=ue}},n.unstable_scheduleCallback=function(X,ae,ue){var U=n.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?U+ue:U):ue=U,X){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ue+K,X={id:_++,callback:ae,priorityLevel:X,startTime:ue,expirationTime:K,sortIndex:-1},ue>U?(X.sortIndex=ue,e(m,X),t(f)===null&&X===t(m)&&(V?(M(A),A=-1):V=!0,ge(J,ue-U))):(X.sortIndex=K,e(f,X),R||C||(R=!0,de(te))),X},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(X){var ae=w;return function(){var ue=w;w=ae;try{return X.apply(this,arguments)}finally{w=ue}}}}(Qf)),Qf}var Pv;function AS(){return Pv||(Pv=1,Kf.exports=IS()),Kf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function CS(){if(kv)return hn;kv=1;var n=lm(),e=AS();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function w(r){return f.call(E,r)?!0:f.call(_,r)?!1:m.test(r)?E[r]=!0:(_[r]=!0,!1)}function C(r,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function R(r,s,l,d){if(s===null||typeof s>"u"||C(r,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function V(r,s,l,d,p,y,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=y,this.removeEmptyString=T}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){N[r]=new V(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];N[s]=new V(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){N[r]=new V(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){N[r]=new V(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){N[r]=new V(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){N[r]=new V(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){N[r]=new V(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){N[r]=new V(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){N[r]=new V(r,5,!1,r.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(M,z);N[s]=new V(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(M,z);N[s]=new V(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(M,z);N[s]=new V(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){N[r]=new V(r,1,!1,r.toLowerCase(),null,!1,!1)}),N.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){N[r]=new V(r,1,!1,r.toLowerCase(),null,!0,!0)});function G(r,s,l,d){var p=N.hasOwnProperty(s)?N[s]:null;(p!==null?p.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(R(s,l,p,d)&&(l=null),d||p===null?w(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):p.mustUseProperty?r[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,d=p.attributeNamespace,l===null?r.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?r.setAttributeNS(d,s,l):r.setAttribute(s,l))))}var J=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,te=Symbol.for("react.element"),Y=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),O=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),X=Symbol.iterator;function ae(r){return r===null||typeof r!="object"?null:(r=X&&r[X]||r["@@iterator"],typeof r=="function"?r:null)}var ue=Object.assign,U;function K(r){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+r}var ye=!1;function Re(r,s){if(!r||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(W){var d=W}Reflect.construct(r,[],s)}else{try{s.call()}catch(W){d=W}r.call(s.prototype)}else{try{throw Error()}catch(W){d=W}r()}}catch(W){if(W&&d&&typeof W.stack=="string"){for(var p=W.stack.split(`
`),y=d.stack.split(`
`),T=p.length-1,b=y.length-1;1<=T&&0<=b&&p[T]!==y[b];)b--;for(;1<=T&&0<=b;T--,b--)if(p[T]!==y[b]){if(T!==1||b!==1)do if(T--,b--,0>b||p[T]!==y[b]){var L=`
`+p[T].replace(" at new "," at ");return r.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",r.displayName)),L}while(1<=T&&0<=b);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?K(r):""}function be(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function Ne(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case Y:return"Portal";case I:return"Profiler";case A:return"StrictMode";case k:return"Suspense";case _e:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case D:return(r._context.displayName||"Context")+".Provider";case F:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Oe:return s=r.displayName||null,s!==null?s:Ne(r.type)||"Memo";case de:s=r._payload,r=r._init;try{return Ne(r(s))}catch{}}return null}function je(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Me(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Be(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ut(r){var s=Be(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){d=""+T,y.call(this,T)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function rn(r){r._valueTracker||(r._valueTracker=ut(r))}function Jt(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return r&&(d=Be(r)?r.checked?"true":"false":r.value),r=d,r!==l?(s.setValue(r),!0):!1}function ci(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function as(r,s){var l=s.checked;return ue({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function eo(r,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=Me(s.value!=null?s.value:l),r._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ra(r,s){s=s.checked,s!=null&&G(r,"checked",s,!1)}function Pa(r,s){Ra(r,s);var l=Me(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?to(r,s.type,l):s.hasOwnProperty("defaultValue")&&to(r,s.type,Me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function gu(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function to(r,s,l){(s!=="number"||ci(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var kr=Array.isArray;function br(r,s,l,d){if(r=r.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<r.length;l++)p=s.hasOwnProperty("$"+r[l].value),r[l].selected!==p&&(r[l].selected=p),p&&d&&(r[l].defaultSelected=!0)}else{for(l=""+Me(l),s=null,p=0;p<r.length;p++){if(r[p].value===l){r[p].selected=!0,d&&(r[p].defaultSelected=!0);return}s!==null||r[p].disabled||(s=r[p])}s!==null&&(s.selected=!0)}}function ka(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function no(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(kr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:Me(l)}}function ro(r,s){var l=Me(s.value),d=Me(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),d!=null&&(r.defaultValue=""+d)}function ba(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function wt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Et(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?wt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Nr,Na=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,p){MSApp.execUnsafeLocalFunction(function(){return r(s,l,d,p)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Nr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function di(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},us=["Webkit","ms","Moz","O"];Object.keys(ls).forEach(function(r){us.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),ls[s]=ls[r]})});function Da(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||ls.hasOwnProperty(r)&&ls[r]?(""+s).trim():s+"px"}function Oa(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=Da(l,s[l],d);l==="float"&&(l="cssFloat"),d?r.setProperty(l,p):r[l]=p}}var Va=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(r,s){if(s){if(Va[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ma(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cs=null;function io(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var so=null,An=null,ar=null;function oo(r){if(r=al(r)){if(typeof so!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Wu(s),so(r.stateNode,r.type,s))}}function lr(r){An?ar?ar.push(r):ar=[r]:An=r}function ja(){if(An){var r=An,s=ar;if(ar=An=null,oo(r),s)for(r=0;r<s.length;r++)oo(s[r])}}function ds(r,s){return r(s)}function Fa(){}var Dr=!1;function Ua(r,s,l){if(Dr)return r(s,l);Dr=!0;try{return ds(r,s,l)}finally{Dr=!1,(An!==null||ar!==null)&&(Fa(),ja())}}function ht(r,s){var l=r.stateNode;if(l===null)return null;var d=Wu(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var ao=!1;if(h)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){ao=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{ao=!1}function hs(r,s,l,d,p,y,T,b,L){var W=Array.prototype.slice.call(arguments,3);try{s.apply(l,W)}catch(re){this.onError(re)}}var fs=!1,lo=null,Un=!1,za=null,vh={onError:function(r){fs=!0,lo=r}};function uo(r,s,l,d,p,y,T,b,L){fs=!1,lo=null,hs.apply(vh,arguments)}function yu(r,s,l,d,p,y,T,b,L){if(uo.apply(this,arguments),fs){if(fs){var W=lo;fs=!1,lo=null}else throw Error(t(198));Un||(Un=!0,za=W)}}function zn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function ps(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Bn(r){if(zn(r)!==r)throw Error(t(188))}function vu(r){var s=r.alternate;if(!s){if(s=zn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,d=s;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return Bn(p),r;if(y===d)return Bn(p),s;y=y.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=y;else{for(var T=!1,b=p.child;b;){if(b===l){T=!0,l=p,d=y;break}if(b===d){T=!0,d=p,l=y;break}b=b.sibling}if(!T){for(b=y.child;b;){if(b===l){T=!0,l=y,d=p;break}if(b===d){T=!0,d=y,l=p;break}b=b.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function Ba(r){return r=vu(r),r!==null?co(r):null}function co(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=co(r);if(s!==null)return s;r=r.sibling}return null}var ho=e.unstable_scheduleCallback,$a=e.unstable_cancelCallback,_u=e.unstable_shouldYield,_h=e.unstable_requestPaint,Xe=e.unstable_now,wu=e.unstable_getCurrentPriorityLevel,ms=e.unstable_ImmediatePriority,hi=e.unstable_UserBlockingPriority,Cn=e.unstable_NormalPriority,qa=e.unstable_LowPriority,Eu=e.unstable_IdlePriority,gs=null,yn=null;function Tu(r){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(gs,r,void 0,(r.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:xu,Ha=Math.log,Su=Math.LN2;function xu(r){return r>>>=0,r===0?32:31-(Ha(r)/Su|0)|0}var fo=64,po=4194304;function fi(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function ys(r,s){var l=r.pendingLanes;if(l===0)return 0;var d=0,p=r.suspendedLanes,y=r.pingedLanes,T=l&268435455;if(T!==0){var b=T&~p;b!==0?d=fi(b):(y&=T,y!==0&&(d=fi(y)))}else T=l&~p,T!==0?d=fi(T):y!==0&&(d=fi(y));if(d===0)return 0;if(s!==0&&s!==d&&(s&p)===0&&(p=d&-d,y=s&-s,p>=y||p===16&&(y&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)l=31-Zt(s),p=1<<l,d|=r[l],s&=~p;return d}function wh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Or(r,s){for(var l=r.suspendedLanes,d=r.pingedLanes,p=r.expirationTimes,y=r.pendingLanes;0<y;){var T=31-Zt(y),b=1<<T,L=p[T];L===-1?((b&l)===0||(b&d)!==0)&&(p[T]=wh(b,s)):L<=s&&(r.expiredLanes|=b),y&=~b}}function vn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function vs(){var r=fo;return fo<<=1,(fo&4194240)===0&&(fo=64),r}function pi(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function mi(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Zt(s),r[s]=l}function Ye(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<l;){var p=31-Zt(l),y=1<<p;s[p]=0,d[p]=-1,r[p]=-1,l&=~y}}function gi(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var d=31-Zt(l),p=1<<d;p&s|r[d]&s&&(r[d]|=s),l&=~p}}var ze=0;function yi(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Iu,mo,Au,Cu,Ru,Wa=!1,ur=[],Ot=null,$n=null,qn=null,vi=new Map,Rn=new Map,cr=[],Eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(r,s){switch(r){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":vi.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(s.pointerId)}}function sn(r,s,l,d,p,y){return r===null||r.nativeEvent!==y?(r={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:y,targetContainers:[p]},s!==null&&(s=al(s),s!==null&&mo(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),r)}function Th(r,s,l,d,p){switch(s){case"focusin":return Ot=sn(Ot,r,s,l,d,p),!0;case"dragenter":return $n=sn($n,r,s,l,d,p),!0;case"mouseover":return qn=sn(qn,r,s,l,d,p),!0;case"pointerover":var y=p.pointerId;return vi.set(y,sn(vi.get(y)||null,r,s,l,d,p)),!0;case"gotpointercapture":return y=p.pointerId,Rn.set(y,sn(Rn.get(y)||null,r,s,l,d,p)),!0}return!1}function ku(r){var s=Ss(r.target);if(s!==null){var l=zn(s);if(l!==null){if(s=l.tag,s===13){if(s=ps(l),s!==null){r.blockedOn=s,Ru(r.priority,function(){Au(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Vr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=go(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var d=new l.constructor(l.type,l);cs=d,l.target.dispatchEvent(d),cs=null}else return s=al(l),s!==null&&mo(s),r.blockedOn=l,!1;s.shift()}return!0}function _s(r,s,l){Vr(r)&&l.delete(s)}function bu(){Wa=!1,Ot!==null&&Vr(Ot)&&(Ot=null),$n!==null&&Vr($n)&&($n=null),qn!==null&&Vr(qn)&&(qn=null),vi.forEach(_s),Rn.forEach(_s)}function Hn(r,s){r.blockedOn===s&&(r.blockedOn=null,Wa||(Wa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bu)))}function Wn(r){function s(p){return Hn(p,r)}if(0<ur.length){Hn(ur[0],r);for(var l=1;l<ur.length;l++){var d=ur[l];d.blockedOn===r&&(d.blockedOn=null)}}for(Ot!==null&&Hn(Ot,r),$n!==null&&Hn($n,r),qn!==null&&Hn(qn,r),vi.forEach(s),Rn.forEach(s),l=0;l<cr.length;l++)d=cr[l],d.blockedOn===r&&(d.blockedOn=null);for(;0<cr.length&&(l=cr[0],l.blockedOn===null);)ku(l),l.blockedOn===null&&cr.shift()}var Lr=J.ReactCurrentBatchConfig,_i=!0;function rt(r,s,l,d){var p=ze,y=Lr.transition;Lr.transition=null;try{ze=1,Ga(r,s,l,d)}finally{ze=p,Lr.transition=y}}function Sh(r,s,l,d){var p=ze,y=Lr.transition;Lr.transition=null;try{ze=4,Ga(r,s,l,d)}finally{ze=p,Lr.transition=y}}function Ga(r,s,l,d){if(_i){var p=go(r,s,l,d);if(p===null)Oh(r,s,d,ws,l),Pu(r,d);else if(Th(p,r,s,l,d))d.stopPropagation();else if(Pu(r,d),s&4&&-1<Eh.indexOf(r)){for(;p!==null;){var y=al(p);if(y!==null&&Iu(y),y=go(r,s,l,d),y===null&&Oh(r,s,d,ws,l),y===p)break;p=y}p!==null&&d.stopPropagation()}else Oh(r,s,d,null,l)}}var ws=null;function go(r,s,l,d){if(ws=null,r=io(d),r=Ss(r),r!==null)if(s=zn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=ps(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return ws=r,null}function Ka(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wu()){case ms:return 1;case hi:return 4;case Cn:case qa:return 16;case Eu:return 536870912;default:return 16}default:return 16}}var _n=null,yo=null,on=null;function Qa(){if(on)return on;var r,s=yo,l=s.length,d,p="value"in _n?_n.value:_n.textContent,y=p.length;for(r=0;r<l&&s[r]===p[r];r++);var T=l-r;for(d=1;d<=T&&s[l-d]===p[y-d];d++);return on=p.slice(r,1<d?1-d:void 0)}function vo(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function dr(){return!0}function Ya(){return!1}function Vt(r){function s(l,d,p,y,T){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=y,this.target=T,this.currentTarget=null;for(var b in r)r.hasOwnProperty(b)&&(l=r[b],this[b]=l?l(y):y[b]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?dr:Ya,this.isPropagationStopped=Ya,this}return ue(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),s}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_o=Vt(Gn),hr=ue({},Gn,{view:0,detail:0}),xh=Vt(hr),wo,Mr,wi,Es=ue({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==wi&&(wi&&r.type==="mousemove"?(wo=r.screenX-wi.screenX,Mr=r.screenY-wi.screenY):Mr=wo=0,wi=r),wo)},movementY:function(r){return"movementY"in r?r.movementY:Mr}}),Eo=Vt(Es),Xa=ue({},Es,{dataTransfer:0}),Nu=Vt(Xa),To=ue({},hr,{relatedTarget:0}),So=Vt(To),Du=ue({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),jr=Vt(Du),Ou=ue({},Gn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Vu=Vt(Ou),Lu=ue({},Gn,{data:0}),Ja=Vt(Lu),xo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},en={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ju(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Mu[r])?!!s[r]:!1}function fr(){return ju}var u=ue({},hr,{key:function(r){if(r.key){var s=xo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=vo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?en[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fr,charCode:function(r){return r.type==="keypress"?vo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?vo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),g=Vt(u),v=ue({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x=Vt(v),$=ue({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fr}),Q=Vt($),ce=ue({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qe=Vt(ce),Tt=ue({},Es,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),$e=Vt(Tt),Rt=[9,13,27,32],mt=h&&"CompositionEvent"in window,Pn=null;h&&"documentMode"in document&&(Pn=document.documentMode);var wn=h&&"TextEvent"in window&&!Pn,Ts=h&&(!mt||Pn&&8<Pn&&11>=Pn),Io=" ",vg=!1;function _g(r,s){switch(r){case"keyup":return Rt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ao=!1;function _T(r,s){switch(r){case"compositionend":return wg(s);case"keypress":return s.which!==32?null:(vg=!0,Io);case"textInput":return r=s.data,r===Io&&vg?null:r;default:return null}}function wT(r,s){if(Ao)return r==="compositionend"||!mt&&_g(r,s)?(r=Qa(),on=yo=_n=null,Ao=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ts&&s.locale!=="ko"?null:s.data;default:return null}}var ET={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eg(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!ET[r.type]:s==="textarea"}function Tg(r,s,l,d){lr(d),s=$u(s,"onChange"),0<s.length&&(l=new _o("onChange","change",null,l,d),r.push({event:l,listeners:s}))}var Za=null,el=null;function TT(r){Ug(r,0)}function Fu(r){var s=bo(r);if(Jt(s))return r}function ST(r,s){if(r==="change")return s}var Sg=!1;if(h){var Ih;if(h){var Ah="oninput"in document;if(!Ah){var xg=document.createElement("div");xg.setAttribute("oninput","return;"),Ah=typeof xg.oninput=="function"}Ih=Ah}else Ih=!1;Sg=Ih&&(!document.documentMode||9<document.documentMode)}function Ig(){Za&&(Za.detachEvent("onpropertychange",Ag),el=Za=null)}function Ag(r){if(r.propertyName==="value"&&Fu(el)){var s=[];Tg(s,el,r,io(r)),Ua(TT,s)}}function xT(r,s,l){r==="focusin"?(Ig(),Za=s,el=l,Za.attachEvent("onpropertychange",Ag)):r==="focusout"&&Ig()}function IT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Fu(el)}function AT(r,s){if(r==="click")return Fu(s)}function CT(r,s){if(r==="input"||r==="change")return Fu(s)}function RT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Kn=typeof Object.is=="function"?Object.is:RT;function tl(r,s){if(Kn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!f.call(s,p)||!Kn(r[p],s[p]))return!1}return!0}function Cg(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Rg(r,s){var l=Cg(r);r=0;for(var d;l;){if(l.nodeType===3){if(d=r+l.textContent.length,r<=s&&d>=s)return{node:l,offset:s-r};r=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Cg(l)}}function Pg(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Pg(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function kg(){for(var r=window,s=ci();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=ci(r.document)}return s}function Ch(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function PT(r){var s=kg(),l=r.focusedElem,d=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&Pg(l.ownerDocument.documentElement,l)){if(d!==null&&Ch(l)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var p=l.textContent.length,y=Math.min(d.start,p);d=d.end===void 0?y:Math.min(d.end,p),!r.extend&&y>d&&(p=d,d=y,y=p),p=Rg(l,y);var T=Rg(l,d);p&&T&&(r.rangeCount!==1||r.anchorNode!==p.node||r.anchorOffset!==p.offset||r.focusNode!==T.node||r.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),r.removeAllRanges(),y>d?(r.addRange(s),r.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var kT=h&&"documentMode"in document&&11>=document.documentMode,Co=null,Rh=null,nl=null,Ph=!1;function bg(r,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ph||Co==null||Co!==ci(d)||(d=Co,"selectionStart"in d&&Ch(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),nl&&tl(nl,d)||(nl=d,d=$u(Rh,"onSelect"),0<d.length&&(s=new _o("onSelect","select",null,s,l),r.push({event:s,listeners:d}),s.target=Co)))}function Uu(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var Ro={animationend:Uu("Animation","AnimationEnd"),animationiteration:Uu("Animation","AnimationIteration"),animationstart:Uu("Animation","AnimationStart"),transitionend:Uu("Transition","TransitionEnd")},kh={},Ng={};h&&(Ng=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function zu(r){if(kh[r])return kh[r];if(!Ro[r])return r;var s=Ro[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Ng)return kh[r]=s[l];return r}var Dg=zu("animationend"),Og=zu("animationiteration"),Vg=zu("animationstart"),Lg=zu("transitionend"),Mg=new Map,jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ei(r,s){Mg.set(r,s),a(s,[r])}for(var bh=0;bh<jg.length;bh++){var Nh=jg[bh],bT=Nh.toLowerCase(),NT=Nh[0].toUpperCase()+Nh.slice(1);Ei(bT,"on"+NT)}Ei(Dg,"onAnimationEnd"),Ei(Og,"onAnimationIteration"),Ei(Vg,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Lg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DT=new Set("cancel close invalid load scroll toggle".split(" ").concat(rl));function Fg(r,s,l){var d=r.type||"unknown-event";r.currentTarget=l,yu(d,s,void 0,r),r.currentTarget=null}function Ug(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var d=r[l],p=d.event;d=d.listeners;e:{var y=void 0;if(s)for(var T=d.length-1;0<=T;T--){var b=d[T],L=b.instance,W=b.currentTarget;if(b=b.listener,L!==y&&p.isPropagationStopped())break e;Fg(p,b,W),y=L}else for(T=0;T<d.length;T++){if(b=d[T],L=b.instance,W=b.currentTarget,b=b.listener,L!==y&&p.isPropagationStopped())break e;Fg(p,b,W),y=L}}}if(Un)throw r=za,Un=!1,za=null,r}function Ze(r,s){var l=s[Uh];l===void 0&&(l=s[Uh]=new Set);var d=r+"__bubble";l.has(d)||(zg(s,r,2,!1),l.add(d))}function Dh(r,s,l){var d=0;s&&(d|=4),zg(l,r,d,s)}var Bu="_reactListening"+Math.random().toString(36).slice(2);function il(r){if(!r[Bu]){r[Bu]=!0,i.forEach(function(l){l!=="selectionchange"&&(DT.has(l)||Dh(l,!1,r),Dh(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Bu]||(s[Bu]=!0,Dh("selectionchange",!1,s))}}function zg(r,s,l,d){switch(Ka(s)){case 1:var p=rt;break;case 4:p=Sh;break;default:p=Ga}l=p.bind(null,s,l,r),p=void 0,!ao||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),d?p!==void 0?r.addEventListener(s,l,{capture:!0,passive:p}):r.addEventListener(s,l,!0):p!==void 0?r.addEventListener(s,l,{passive:p}):r.addEventListener(s,l,!1)}function Oh(r,s,l,d,p){var y=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var b=d.stateNode.containerInfo;if(b===p||b.nodeType===8&&b.parentNode===p)break;if(T===4)for(T=d.return;T!==null;){var L=T.tag;if((L===3||L===4)&&(L=T.stateNode.containerInfo,L===p||L.nodeType===8&&L.parentNode===p))return;T=T.return}for(;b!==null;){if(T=Ss(b),T===null)return;if(L=T.tag,L===5||L===6){d=y=T;continue e}b=b.parentNode}}d=d.return}Ua(function(){var W=y,re=io(l),se=[];e:{var ne=Mg.get(r);if(ne!==void 0){var he=_o,ve=r;switch(r){case"keypress":if(vo(l)===0)break e;case"keydown":case"keyup":he=g;break;case"focusin":ve="focus",he=So;break;case"focusout":ve="blur",he=So;break;case"beforeblur":case"afterblur":he=So;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Nu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=Q;break;case Dg:case Og:case Vg:he=jr;break;case Lg:he=Qe;break;case"scroll":he=xh;break;case"wheel":he=$e;break;case"copy":case"cut":case"paste":he=Vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=x}var we=(s&4)!==0,ft=!we&&r==="scroll",q=we?ne!==null?ne+"Capture":null:ne;we=[];for(var j=W,H;j!==null;){H=j;var oe=H.stateNode;if(H.tag===5&&oe!==null&&(H=oe,q!==null&&(oe=ht(j,q),oe!=null&&we.push(sl(j,oe,H)))),ft)break;j=j.return}0<we.length&&(ne=new he(ne,ve,null,l,re),se.push({event:ne,listeners:we}))}}if((s&7)===0){e:{if(ne=r==="mouseover"||r==="pointerover",he=r==="mouseout"||r==="pointerout",ne&&l!==cs&&(ve=l.relatedTarget||l.fromElement)&&(Ss(ve)||ve[Fr]))break e;if((he||ne)&&(ne=re.window===re?re:(ne=re.ownerDocument)?ne.defaultView||ne.parentWindow:window,he?(ve=l.relatedTarget||l.toElement,he=W,ve=ve?Ss(ve):null,ve!==null&&(ft=zn(ve),ve!==ft||ve.tag!==5&&ve.tag!==6)&&(ve=null)):(he=null,ve=W),he!==ve)){if(we=Eo,oe="onMouseLeave",q="onMouseEnter",j="mouse",(r==="pointerout"||r==="pointerover")&&(we=x,oe="onPointerLeave",q="onPointerEnter",j="pointer"),ft=he==null?ne:bo(he),H=ve==null?ne:bo(ve),ne=new we(oe,j+"leave",he,l,re),ne.target=ft,ne.relatedTarget=H,oe=null,Ss(re)===W&&(we=new we(q,j+"enter",ve,l,re),we.target=H,we.relatedTarget=ft,oe=we),ft=oe,he&&ve)t:{for(we=he,q=ve,j=0,H=we;H;H=Po(H))j++;for(H=0,oe=q;oe;oe=Po(oe))H++;for(;0<j-H;)we=Po(we),j--;for(;0<H-j;)q=Po(q),H--;for(;j--;){if(we===q||q!==null&&we===q.alternate)break t;we=Po(we),q=Po(q)}we=null}else we=null;he!==null&&Bg(se,ne,he,we,!1),ve!==null&&ft!==null&&Bg(se,ft,ve,we,!0)}}e:{if(ne=W?bo(W):window,he=ne.nodeName&&ne.nodeName.toLowerCase(),he==="select"||he==="input"&&ne.type==="file")var Ee=ST;else if(Eg(ne))if(Sg)Ee=CT;else{Ee=IT;var Se=xT}else(he=ne.nodeName)&&he.toLowerCase()==="input"&&(ne.type==="checkbox"||ne.type==="radio")&&(Ee=AT);if(Ee&&(Ee=Ee(r,W))){Tg(se,Ee,l,re);break e}Se&&Se(r,ne,W),r==="focusout"&&(Se=ne._wrapperState)&&Se.controlled&&ne.type==="number"&&to(ne,"number",ne.value)}switch(Se=W?bo(W):window,r){case"focusin":(Eg(Se)||Se.contentEditable==="true")&&(Co=Se,Rh=W,nl=null);break;case"focusout":nl=Rh=Co=null;break;case"mousedown":Ph=!0;break;case"contextmenu":case"mouseup":case"dragend":Ph=!1,bg(se,l,re);break;case"selectionchange":if(kT)break;case"keydown":case"keyup":bg(se,l,re)}var xe;if(mt)e:{switch(r){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Ao?_g(r,l)&&(Ce="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Ce="onCompositionStart");Ce&&(Ts&&l.locale!=="ko"&&(Ao||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ao&&(xe=Qa()):(_n=re,yo="value"in _n?_n.value:_n.textContent,Ao=!0)),Se=$u(W,Ce),0<Se.length&&(Ce=new Ja(Ce,r,null,l,re),se.push({event:Ce,listeners:Se}),xe?Ce.data=xe:(xe=wg(l),xe!==null&&(Ce.data=xe)))),(xe=wn?_T(r,l):wT(r,l))&&(W=$u(W,"onBeforeInput"),0<W.length&&(re=new Ja("onBeforeInput","beforeinput",null,l,re),se.push({event:re,listeners:W}),re.data=xe))}Ug(se,s)})}function sl(r,s,l){return{instance:r,listener:s,currentTarget:l}}function $u(r,s){for(var l=s+"Capture",d=[];r!==null;){var p=r,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=ht(r,l),y!=null&&d.unshift(sl(r,y,p)),y=ht(r,s),y!=null&&d.push(sl(r,y,p))),r=r.return}return d}function Po(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Bg(r,s,l,d,p){for(var y=s._reactName,T=[];l!==null&&l!==d;){var b=l,L=b.alternate,W=b.stateNode;if(L!==null&&L===d)break;b.tag===5&&W!==null&&(b=W,p?(L=ht(l,y),L!=null&&T.unshift(sl(l,L,b))):p||(L=ht(l,y),L!=null&&T.push(sl(l,L,b)))),l=l.return}T.length!==0&&r.push({event:s,listeners:T})}var OT=/\r\n?/g,VT=/\u0000|\uFFFD/g;function $g(r){return(typeof r=="string"?r:""+r).replace(OT,`
`).replace(VT,"")}function qu(r,s,l){if(s=$g(s),$g(r)!==s&&l)throw Error(t(425))}function Hu(){}var Vh=null,Lh=null;function Mh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,LT=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,MT=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(r){return qg.resolve(null).then(r).catch(jT)}:jh;function jT(r){setTimeout(function(){throw r})}function Fh(r,s){var l=s,d=0;do{var p=l.nextSibling;if(r.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){r.removeChild(p),Wn(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Wn(s)}function Ti(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Hg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var ko=Math.random().toString(36).slice(2),pr="__reactFiber$"+ko,ol="__reactProps$"+ko,Fr="__reactContainer$"+ko,Uh="__reactEvents$"+ko,FT="__reactListeners$"+ko,UT="__reactHandles$"+ko;function Ss(r){var s=r[pr];if(s)return s;for(var l=r.parentNode;l;){if(s=l[Fr]||l[pr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=Hg(r);r!==null;){if(l=r[pr])return l;r=Hg(r)}return s}r=l,l=r.parentNode}return null}function al(r){return r=r[pr]||r[Fr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function bo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Wu(r){return r[ol]||null}var zh=[],No=-1;function Si(r){return{current:r}}function et(r){0>No||(r.current=zh[No],zh[No]=null,No--)}function Je(r,s){No++,zh[No]=r.current,r.current=s}var xi={},Bt=Si(xi),an=Si(!1),xs=xi;function Do(r,s){var l=r.type.contextTypes;if(!l)return xi;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=s[y];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=p),p}function ln(r){return r=r.childContextTypes,r!=null}function Gu(){et(an),et(Bt)}function Wg(r,s,l){if(Bt.current!==xi)throw Error(t(168));Je(Bt,s),Je(an,l)}function Gg(r,s,l){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in s))throw Error(t(108,je(r)||"Unknown",p));return ue({},l,d)}function Ku(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||xi,xs=Bt.current,Je(Bt,r),Je(an,an.current),!0}function Kg(r,s,l){var d=r.stateNode;if(!d)throw Error(t(169));l?(r=Gg(r,s,xs),d.__reactInternalMemoizedMergedChildContext=r,et(an),et(Bt),Je(Bt,r)):et(an),Je(an,l)}var Ur=null,Qu=!1,Bh=!1;function Qg(r){Ur===null?Ur=[r]:Ur.push(r)}function zT(r){Qu=!0,Qg(r)}function Ii(){if(!Bh&&Ur!==null){Bh=!0;var r=0,s=ze;try{var l=Ur;for(ze=1;r<l.length;r++){var d=l[r];do d=d(!0);while(d!==null)}Ur=null,Qu=!1}catch(p){throw Ur!==null&&(Ur=Ur.slice(r+1)),ho(ms,Ii),p}finally{ze=s,Bh=!1}}return null}var Oo=[],Vo=0,Yu=null,Xu=0,kn=[],bn=0,Is=null,zr=1,Br="";function As(r,s){Oo[Vo++]=Xu,Oo[Vo++]=Yu,Yu=r,Xu=s}function Yg(r,s,l){kn[bn++]=zr,kn[bn++]=Br,kn[bn++]=Is,Is=r;var d=zr;r=Br;var p=32-Zt(d)-1;d&=~(1<<p),l+=1;var y=32-Zt(s)+p;if(30<y){var T=p-p%5;y=(d&(1<<T)-1).toString(32),d>>=T,p-=T,zr=1<<32-Zt(s)+p|l<<p|d,Br=y+r}else zr=1<<y|l<<p|d,Br=r}function $h(r){r.return!==null&&(As(r,1),Yg(r,1,0))}function qh(r){for(;r===Yu;)Yu=Oo[--Vo],Oo[Vo]=null,Xu=Oo[--Vo],Oo[Vo]=null;for(;r===Is;)Is=kn[--bn],kn[bn]=null,Br=kn[--bn],kn[bn]=null,zr=kn[--bn],kn[bn]=null}var En=null,Tn=null,it=!1,Qn=null;function Xg(r,s){var l=Vn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function Jg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,En=r,Tn=Ti(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,En=r,Tn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Is!==null?{id:zr,overflow:Br}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Vn(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,En=r,Tn=null,!0):!1;default:return!1}}function Hh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Wh(r){if(it){var s=Tn;if(s){var l=s;if(!Jg(r,s)){if(Hh(r))throw Error(t(418));s=Ti(l.nextSibling);var d=En;s&&Jg(r,s)?Xg(d,l):(r.flags=r.flags&-4097|2,it=!1,En=r)}}else{if(Hh(r))throw Error(t(418));r.flags=r.flags&-4097|2,it=!1,En=r}}}function Zg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;En=r}function Ju(r){if(r!==En)return!1;if(!it)return Zg(r),it=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Mh(r.type,r.memoizedProps)),s&&(s=Tn)){if(Hh(r))throw ey(),Error(t(418));for(;s;)Xg(r,s),s=Ti(s.nextSibling)}if(Zg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){Tn=Ti(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}Tn=null}}else Tn=En?Ti(r.stateNode.nextSibling):null;return!0}function ey(){for(var r=Tn;r;)r=Ti(r.nextSibling)}function Lo(){Tn=En=null,it=!1}function Gh(r){Qn===null?Qn=[r]:Qn.push(r)}var BT=J.ReactCurrentBatchConfig;function ll(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,r));var p=d,y=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(T){var b=p.refs;T===null?delete b[y]:b[y]=T},s._stringRef=y,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Zu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function ty(r){var s=r._init;return s(r._payload)}function ny(r){function s(q,j){if(r){var H=q.deletions;H===null?(q.deletions=[j],q.flags|=16):H.push(j)}}function l(q,j){if(!r)return null;for(;j!==null;)s(q,j),j=j.sibling;return null}function d(q,j){for(q=new Map;j!==null;)j.key!==null?q.set(j.key,j):q.set(j.index,j),j=j.sibling;return q}function p(q,j){return q=Di(q,j),q.index=0,q.sibling=null,q}function y(q,j,H){return q.index=H,r?(H=q.alternate,H!==null?(H=H.index,H<j?(q.flags|=2,j):H):(q.flags|=2,j)):(q.flags|=1048576,j)}function T(q){return r&&q.alternate===null&&(q.flags|=2),q}function b(q,j,H,oe){return j===null||j.tag!==6?(j=Ff(H,q.mode,oe),j.return=q,j):(j=p(j,H),j.return=q,j)}function L(q,j,H,oe){var Ee=H.type;return Ee===P?re(q,j,H.props.children,oe,H.key):j!==null&&(j.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===de&&ty(Ee)===j.type)?(oe=p(j,H.props),oe.ref=ll(q,j,H),oe.return=q,oe):(oe=Sc(H.type,H.key,H.props,null,q.mode,oe),oe.ref=ll(q,j,H),oe.return=q,oe)}function W(q,j,H,oe){return j===null||j.tag!==4||j.stateNode.containerInfo!==H.containerInfo||j.stateNode.implementation!==H.implementation?(j=Uf(H,q.mode,oe),j.return=q,j):(j=p(j,H.children||[]),j.return=q,j)}function re(q,j,H,oe,Ee){return j===null||j.tag!==7?(j=Os(H,q.mode,oe,Ee),j.return=q,j):(j=p(j,H),j.return=q,j)}function se(q,j,H){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Ff(""+j,q.mode,H),j.return=q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case te:return H=Sc(j.type,j.key,j.props,null,q.mode,H),H.ref=ll(q,null,j),H.return=q,H;case Y:return j=Uf(j,q.mode,H),j.return=q,j;case de:var oe=j._init;return se(q,oe(j._payload),H)}if(kr(j)||ae(j))return j=Os(j,q.mode,H,null),j.return=q,j;Zu(q,j)}return null}function ne(q,j,H,oe){var Ee=j!==null?j.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return Ee!==null?null:b(q,j,""+H,oe);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case te:return H.key===Ee?L(q,j,H,oe):null;case Y:return H.key===Ee?W(q,j,H,oe):null;case de:return Ee=H._init,ne(q,j,Ee(H._payload),oe)}if(kr(H)||ae(H))return Ee!==null?null:re(q,j,H,oe,null);Zu(q,H)}return null}function he(q,j,H,oe,Ee){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return q=q.get(H)||null,b(j,q,""+oe,Ee);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case te:return q=q.get(oe.key===null?H:oe.key)||null,L(j,q,oe,Ee);case Y:return q=q.get(oe.key===null?H:oe.key)||null,W(j,q,oe,Ee);case de:var Se=oe._init;return he(q,j,H,Se(oe._payload),Ee)}if(kr(oe)||ae(oe))return q=q.get(H)||null,re(j,q,oe,Ee,null);Zu(j,oe)}return null}function ve(q,j,H,oe){for(var Ee=null,Se=null,xe=j,Ce=j=0,bt=null;xe!==null&&Ce<H.length;Ce++){xe.index>Ce?(bt=xe,xe=null):bt=xe.sibling;var We=ne(q,xe,H[Ce],oe);if(We===null){xe===null&&(xe=bt);break}r&&xe&&We.alternate===null&&s(q,xe),j=y(We,j,Ce),Se===null?Ee=We:Se.sibling=We,Se=We,xe=bt}if(Ce===H.length)return l(q,xe),it&&As(q,Ce),Ee;if(xe===null){for(;Ce<H.length;Ce++)xe=se(q,H[Ce],oe),xe!==null&&(j=y(xe,j,Ce),Se===null?Ee=xe:Se.sibling=xe,Se=xe);return it&&As(q,Ce),Ee}for(xe=d(q,xe);Ce<H.length;Ce++)bt=he(xe,q,Ce,H[Ce],oe),bt!==null&&(r&&bt.alternate!==null&&xe.delete(bt.key===null?Ce:bt.key),j=y(bt,j,Ce),Se===null?Ee=bt:Se.sibling=bt,Se=bt);return r&&xe.forEach(function(Oi){return s(q,Oi)}),it&&As(q,Ce),Ee}function we(q,j,H,oe){var Ee=ae(H);if(typeof Ee!="function")throw Error(t(150));if(H=Ee.call(H),H==null)throw Error(t(151));for(var Se=Ee=null,xe=j,Ce=j=0,bt=null,We=H.next();xe!==null&&!We.done;Ce++,We=H.next()){xe.index>Ce?(bt=xe,xe=null):bt=xe.sibling;var Oi=ne(q,xe,We.value,oe);if(Oi===null){xe===null&&(xe=bt);break}r&&xe&&Oi.alternate===null&&s(q,xe),j=y(Oi,j,Ce),Se===null?Ee=Oi:Se.sibling=Oi,Se=Oi,xe=bt}if(We.done)return l(q,xe),it&&As(q,Ce),Ee;if(xe===null){for(;!We.done;Ce++,We=H.next())We=se(q,We.value,oe),We!==null&&(j=y(We,j,Ce),Se===null?Ee=We:Se.sibling=We,Se=We);return it&&As(q,Ce),Ee}for(xe=d(q,xe);!We.done;Ce++,We=H.next())We=he(xe,q,Ce,We.value,oe),We!==null&&(r&&We.alternate!==null&&xe.delete(We.key===null?Ce:We.key),j=y(We,j,Ce),Se===null?Ee=We:Se.sibling=We,Se=We);return r&&xe.forEach(function(ES){return s(q,ES)}),it&&As(q,Ce),Ee}function ft(q,j,H,oe){if(typeof H=="object"&&H!==null&&H.type===P&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case te:e:{for(var Ee=H.key,Se=j;Se!==null;){if(Se.key===Ee){if(Ee=H.type,Ee===P){if(Se.tag===7){l(q,Se.sibling),j=p(Se,H.props.children),j.return=q,q=j;break e}}else if(Se.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===de&&ty(Ee)===Se.type){l(q,Se.sibling),j=p(Se,H.props),j.ref=ll(q,Se,H),j.return=q,q=j;break e}l(q,Se);break}else s(q,Se);Se=Se.sibling}H.type===P?(j=Os(H.props.children,q.mode,oe,H.key),j.return=q,q=j):(oe=Sc(H.type,H.key,H.props,null,q.mode,oe),oe.ref=ll(q,j,H),oe.return=q,q=oe)}return T(q);case Y:e:{for(Se=H.key;j!==null;){if(j.key===Se)if(j.tag===4&&j.stateNode.containerInfo===H.containerInfo&&j.stateNode.implementation===H.implementation){l(q,j.sibling),j=p(j,H.children||[]),j.return=q,q=j;break e}else{l(q,j);break}else s(q,j);j=j.sibling}j=Uf(H,q.mode,oe),j.return=q,q=j}return T(q);case de:return Se=H._init,ft(q,j,Se(H._payload),oe)}if(kr(H))return ve(q,j,H,oe);if(ae(H))return we(q,j,H,oe);Zu(q,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,j!==null&&j.tag===6?(l(q,j.sibling),j=p(j,H),j.return=q,q=j):(l(q,j),j=Ff(H,q.mode,oe),j.return=q,q=j),T(q)):l(q,j)}return ft}var Mo=ny(!0),ry=ny(!1),ec=Si(null),tc=null,jo=null,Kh=null;function Qh(){Kh=jo=tc=null}function Yh(r){var s=ec.current;et(ec),r._currentValue=s}function Xh(r,s,l){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===l)break;r=r.return}}function Fo(r,s){tc=r,Kh=jo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(un=!0),r.firstContext=null)}function Nn(r){var s=r._currentValue;if(Kh!==r)if(r={context:r,memoizedValue:s,next:null},jo===null){if(tc===null)throw Error(t(308));jo=r,tc.dependencies={lanes:0,firstContext:r}}else jo=jo.next=r;return s}var Cs=null;function Jh(r){Cs===null?Cs=[r]:Cs.push(r)}function iy(r,s,l,d){var p=s.interleaved;return p===null?(l.next=l,Jh(s)):(l.next=p.next,p.next=l),s.interleaved=l,$r(r,d)}function $r(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Ai=!1;function Zh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sy(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function qr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ci(r,s,l){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(He&2)!==0){var p=d.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),d.pending=s,$r(r,l)}return p=d.interleaved,p===null?(s.next=s,Jh(d)):(s.next=p.next,p.next=s),d.interleaved=s,$r(r,l)}function nc(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,l|=d,s.lanes=l,gi(r,l)}}function oy(r,s){var l=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=T:y=y.next=T,l=l.next}while(l!==null);y===null?p=y=s:y=y.next=s}else p=y=s;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:d.shared,effects:d.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function rc(r,s,l,d){var p=r.updateQueue;Ai=!1;var y=p.firstBaseUpdate,T=p.lastBaseUpdate,b=p.shared.pending;if(b!==null){p.shared.pending=null;var L=b,W=L.next;L.next=null,T===null?y=W:T.next=W,T=L;var re=r.alternate;re!==null&&(re=re.updateQueue,b=re.lastBaseUpdate,b!==T&&(b===null?re.firstBaseUpdate=W:b.next=W,re.lastBaseUpdate=L))}if(y!==null){var se=p.baseState;T=0,re=W=L=null,b=y;do{var ne=b.lane,he=b.eventTime;if((d&ne)===ne){re!==null&&(re=re.next={eventTime:he,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var ve=r,we=b;switch(ne=s,he=l,we.tag){case 1:if(ve=we.payload,typeof ve=="function"){se=ve.call(he,se,ne);break e}se=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=we.payload,ne=typeof ve=="function"?ve.call(he,se,ne):ve,ne==null)break e;se=ue({},se,ne);break e;case 2:Ai=!0}}b.callback!==null&&b.lane!==0&&(r.flags|=64,ne=p.effects,ne===null?p.effects=[b]:ne.push(b))}else he={eventTime:he,lane:ne,tag:b.tag,payload:b.payload,callback:b.callback,next:null},re===null?(W=re=he,L=se):re=re.next=he,T|=ne;if(b=b.next,b===null){if(b=p.shared.pending,b===null)break;ne=b,b=ne.next,ne.next=null,p.lastBaseUpdate=ne,p.shared.pending=null}}while(!0);if(re===null&&(L=se),p.baseState=L,p.firstBaseUpdate=W,p.lastBaseUpdate=re,s=p.shared.interleaved,s!==null){p=s;do T|=p.lane,p=p.next;while(p!==s)}else y===null&&(p.shared.lanes=0);ks|=T,r.lanes=T,r.memoizedState=se}}function ay(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var ul={},mr=Si(ul),cl=Si(ul),dl=Si(ul);function Rs(r){if(r===ul)throw Error(t(174));return r}function ef(r,s){switch(Je(dl,s),Je(cl,r),Je(mr,ul),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Et(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Et(s,r)}et(mr),Je(mr,s)}function Uo(){et(mr),et(cl),et(dl)}function ly(r){Rs(dl.current);var s=Rs(mr.current),l=Et(s,r.type);s!==l&&(Je(cl,r),Je(mr,l))}function tf(r){cl.current===r&&(et(mr),et(cl))}var st=Si(0);function ic(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var nf=[];function rf(){for(var r=0;r<nf.length;r++)nf[r]._workInProgressVersionPrimary=null;nf.length=0}var sc=J.ReactCurrentDispatcher,sf=J.ReactCurrentBatchConfig,Ps=0,ot=null,St=null,Pt=null,oc=!1,hl=!1,fl=0,$T=0;function $t(){throw Error(t(321))}function of(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Kn(r[l],s[l]))return!1;return!0}function af(r,s,l,d,p,y){if(Ps=y,ot=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,sc.current=r===null||r.memoizedState===null?GT:KT,r=l(d,p),hl){y=0;do{if(hl=!1,fl=0,25<=y)throw Error(t(301));y+=1,Pt=St=null,s.updateQueue=null,sc.current=QT,r=l(d,p)}while(hl)}if(sc.current=uc,s=St!==null&&St.next!==null,Ps=0,Pt=St=ot=null,oc=!1,s)throw Error(t(300));return r}function lf(){var r=fl!==0;return fl=0,r}function gr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ot.memoizedState=Pt=r:Pt=Pt.next=r,Pt}function Dn(){if(St===null){var r=ot.alternate;r=r!==null?r.memoizedState:null}else r=St.next;var s=Pt===null?ot.memoizedState:Pt.next;if(s!==null)Pt=s,St=r;else{if(r===null)throw Error(t(310));St=r,r={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Pt===null?ot.memoizedState=Pt=r:Pt=Pt.next=r}return Pt}function pl(r,s){return typeof s=="function"?s(r):s}function uf(r){var s=Dn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var d=St,p=d.baseQueue,y=l.pending;if(y!==null){if(p!==null){var T=p.next;p.next=y.next,y.next=T}d.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,d=d.baseState;var b=T=null,L=null,W=y;do{var re=W.lane;if((Ps&re)===re)L!==null&&(L=L.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),d=W.hasEagerState?W.eagerState:r(d,W.action);else{var se={lane:re,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};L===null?(b=L=se,T=d):L=L.next=se,ot.lanes|=re,ks|=re}W=W.next}while(W!==null&&W!==y);L===null?T=d:L.next=b,Kn(d,s.memoizedState)||(un=!0),s.memoizedState=d,s.baseState=T,s.baseQueue=L,l.lastRenderedState=d}if(r=l.interleaved,r!==null){p=r;do y=p.lane,ot.lanes|=y,ks|=y,p=p.next;while(p!==r)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function cf(r){var s=Dn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var d=l.dispatch,p=l.pending,y=s.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do y=r(y,T.action),T=T.next;while(T!==p);Kn(y,s.memoizedState)||(un=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),l.lastRenderedState=y}return[y,d]}function uy(){}function cy(r,s){var l=ot,d=Dn(),p=s(),y=!Kn(d.memoizedState,p);if(y&&(d.memoizedState=p,un=!0),d=d.queue,df(fy.bind(null,l,d,r),[r]),d.getSnapshot!==s||y||Pt!==null&&Pt.memoizedState.tag&1){if(l.flags|=2048,ml(9,hy.bind(null,l,d,p,s),void 0,null),kt===null)throw Error(t(349));(Ps&30)!==0||dy(l,s,p)}return p}function dy(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=ot.updateQueue,s===null?(s={lastEffect:null,stores:null},ot.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function hy(r,s,l,d){s.value=l,s.getSnapshot=d,py(s)&&my(r)}function fy(r,s,l){return l(function(){py(s)&&my(r)})}function py(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Kn(r,l)}catch{return!0}}function my(r){var s=$r(r,1);s!==null&&Zn(s,r,1,-1)}function gy(r){var s=gr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:r},s.queue=r,r=r.dispatch=WT.bind(null,ot,r),[s.memoizedState,r]}function ml(r,s,l,d){return r={tag:r,create:s,destroy:l,deps:d,next:null},s=ot.updateQueue,s===null?(s={lastEffect:null,stores:null},ot.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(d=l.next,l.next=r,r.next=d,s.lastEffect=r)),r}function yy(){return Dn().memoizedState}function ac(r,s,l,d){var p=gr();ot.flags|=r,p.memoizedState=ml(1|s,l,void 0,d===void 0?null:d)}function lc(r,s,l,d){var p=Dn();d=d===void 0?null:d;var y=void 0;if(St!==null){var T=St.memoizedState;if(y=T.destroy,d!==null&&of(d,T.deps)){p.memoizedState=ml(s,l,y,d);return}}ot.flags|=r,p.memoizedState=ml(1|s,l,y,d)}function vy(r,s){return ac(8390656,8,r,s)}function df(r,s){return lc(2048,8,r,s)}function _y(r,s){return lc(4,2,r,s)}function wy(r,s){return lc(4,4,r,s)}function Ey(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Ty(r,s,l){return l=l!=null?l.concat([r]):null,lc(4,4,Ey.bind(null,s,r),l)}function hf(){}function Sy(r,s){var l=Dn();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&of(s,d[1])?d[0]:(l.memoizedState=[r,s],r)}function xy(r,s){var l=Dn();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&of(s,d[1])?d[0]:(r=r(),l.memoizedState=[r,s],r)}function Iy(r,s,l){return(Ps&21)===0?(r.baseState&&(r.baseState=!1,un=!0),r.memoizedState=l):(Kn(l,s)||(l=vs(),ot.lanes|=l,ks|=l,r.baseState=!0),s)}function qT(r,s){var l=ze;ze=l!==0&&4>l?l:4,r(!0);var d=sf.transition;sf.transition={};try{r(!1),s()}finally{ze=l,sf.transition=d}}function Ay(){return Dn().memoizedState}function HT(r,s,l){var d=bi(r);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Cy(r))Ry(s,l);else if(l=iy(r,s,l,d),l!==null){var p=nn();Zn(l,r,d,p),Py(l,s,d)}}function WT(r,s,l){var d=bi(r),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Cy(r))Ry(s,p);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var T=s.lastRenderedState,b=y(T,l);if(p.hasEagerState=!0,p.eagerState=b,Kn(b,T)){var L=s.interleaved;L===null?(p.next=p,Jh(s)):(p.next=L.next,L.next=p),s.interleaved=p;return}}catch{}finally{}l=iy(r,s,p,d),l!==null&&(p=nn(),Zn(l,r,d,p),Py(l,s,d))}}function Cy(r){var s=r.alternate;return r===ot||s!==null&&s===ot}function Ry(r,s){hl=oc=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function Py(r,s,l){if((l&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,l|=d,s.lanes=l,gi(r,l)}}var uc={readContext:Nn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},GT={readContext:Nn,useCallback:function(r,s){return gr().memoizedState=[r,s===void 0?null:s],r},useContext:Nn,useEffect:vy,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,ac(4194308,4,Ey.bind(null,s,r),l)},useLayoutEffect:function(r,s){return ac(4194308,4,r,s)},useInsertionEffect:function(r,s){return ac(4,2,r,s)},useMemo:function(r,s){var l=gr();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var d=gr();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=HT.bind(null,ot,r),[d.memoizedState,r]},useRef:function(r){var s=gr();return r={current:r},s.memoizedState=r},useState:gy,useDebugValue:hf,useDeferredValue:function(r){return gr().memoizedState=r},useTransition:function(){var r=gy(!1),s=r[0];return r=qT.bind(null,r[1]),gr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var d=ot,p=gr();if(it){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),kt===null)throw Error(t(349));(Ps&30)!==0||dy(d,s,l)}p.memoizedState=l;var y={value:l,getSnapshot:s};return p.queue=y,vy(fy.bind(null,d,y,r),[r]),d.flags|=2048,ml(9,hy.bind(null,d,y,l,s),void 0,null),l},useId:function(){var r=gr(),s=kt.identifierPrefix;if(it){var l=Br,d=zr;l=(d&~(1<<32-Zt(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=fl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=$T++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},KT={readContext:Nn,useCallback:Sy,useContext:Nn,useEffect:df,useImperativeHandle:Ty,useInsertionEffect:_y,useLayoutEffect:wy,useMemo:xy,useReducer:uf,useRef:yy,useState:function(){return uf(pl)},useDebugValue:hf,useDeferredValue:function(r){var s=Dn();return Iy(s,St.memoizedState,r)},useTransition:function(){var r=uf(pl)[0],s=Dn().memoizedState;return[r,s]},useMutableSource:uy,useSyncExternalStore:cy,useId:Ay,unstable_isNewReconciler:!1},QT={readContext:Nn,useCallback:Sy,useContext:Nn,useEffect:df,useImperativeHandle:Ty,useInsertionEffect:_y,useLayoutEffect:wy,useMemo:xy,useReducer:cf,useRef:yy,useState:function(){return cf(pl)},useDebugValue:hf,useDeferredValue:function(r){var s=Dn();return St===null?s.memoizedState=r:Iy(s,St.memoizedState,r)},useTransition:function(){var r=cf(pl)[0],s=Dn().memoizedState;return[r,s]},useMutableSource:uy,useSyncExternalStore:cy,useId:Ay,unstable_isNewReconciler:!1};function Yn(r,s){if(r&&r.defaultProps){s=ue({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function ff(r,s,l,d){s=r.memoizedState,l=l(d,s),l=l==null?s:ue({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var cc={isMounted:function(r){return(r=r._reactInternals)?zn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var d=nn(),p=bi(r),y=qr(d,p);y.payload=s,l!=null&&(y.callback=l),s=Ci(r,y,p),s!==null&&(Zn(s,r,p,d),nc(s,r,p))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var d=nn(),p=bi(r),y=qr(d,p);y.tag=1,y.payload=s,l!=null&&(y.callback=l),s=Ci(r,y,p),s!==null&&(Zn(s,r,p,d),nc(s,r,p))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=nn(),d=bi(r),p=qr(l,d);p.tag=2,s!=null&&(p.callback=s),s=Ci(r,p,d),s!==null&&(Zn(s,r,d,l),nc(s,r,d))}};function ky(r,s,l,d,p,y,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,y,T):s.prototype&&s.prototype.isPureReactComponent?!tl(l,d)||!tl(p,y):!0}function by(r,s,l){var d=!1,p=xi,y=s.contextType;return typeof y=="object"&&y!==null?y=Nn(y):(p=ln(s)?xs:Bt.current,d=s.contextTypes,y=(d=d!=null)?Do(r,p):xi),s=new s(l,y),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=cc,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=p,r.__reactInternalMemoizedMaskedChildContext=y),s}function Ny(r,s,l,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==r&&cc.enqueueReplaceState(s,s.state,null)}function pf(r,s,l,d){var p=r.stateNode;p.props=l,p.state=r.memoizedState,p.refs={},Zh(r);var y=s.contextType;typeof y=="object"&&y!==null?p.context=Nn(y):(y=ln(s)?xs:Bt.current,p.context=Do(r,y)),p.state=r.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(ff(r,s,y,l),p.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&cc.enqueueReplaceState(p,p.state,null),rc(r,l,p,d),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308)}function zo(r,s){try{var l="",d=s;do l+=be(d),d=d.return;while(d);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:s,stack:p,digest:null}}function mf(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function gf(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var YT=typeof WeakMap=="function"?WeakMap:Map;function Dy(r,s,l){l=qr(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){yc||(yc=!0,bf=d),gf(r,s)},l}function Oy(r,s,l){l=qr(-1,l),l.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;l.payload=function(){return d(p)},l.callback=function(){gf(r,s)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){gf(r,s),typeof d!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),l}function Vy(r,s,l){var d=r.pingCache;if(d===null){d=r.pingCache=new YT;var p=new Set;d.set(s,p)}else p=d.get(s),p===void 0&&(p=new Set,d.set(s,p));p.has(l)||(p.add(l),r=cS.bind(null,r,s,l),s.then(r,r))}function Ly(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function My(r,s,l,d,p){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=qr(-1,1),s.tag=2,Ci(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=p,r)}var XT=J.ReactCurrentOwner,un=!1;function tn(r,s,l,d){s.child=r===null?ry(s,null,l,d):Mo(s,r.child,l,d)}function jy(r,s,l,d,p){l=l.render;var y=s.ref;return Fo(s,p),d=af(r,s,l,d,y,p),l=lf(),r!==null&&!un?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,Hr(r,s,p)):(it&&l&&$h(s),s.flags|=1,tn(r,s,d,p),s.child)}function Fy(r,s,l,d,p){if(r===null){var y=l.type;return typeof y=="function"&&!jf(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=y,Uy(r,s,y,d,p)):(r=Sc(l.type,null,d,s,s.mode,p),r.ref=s.ref,r.return=s,s.child=r)}if(y=r.child,(r.lanes&p)===0){var T=y.memoizedProps;if(l=l.compare,l=l!==null?l:tl,l(T,d)&&r.ref===s.ref)return Hr(r,s,p)}return s.flags|=1,r=Di(y,d),r.ref=s.ref,r.return=s,s.child=r}function Uy(r,s,l,d,p){if(r!==null){var y=r.memoizedProps;if(tl(y,d)&&r.ref===s.ref)if(un=!1,s.pendingProps=d=y,(r.lanes&p)!==0)(r.flags&131072)!==0&&(un=!0);else return s.lanes=r.lanes,Hr(r,s,p)}return yf(r,s,l,d,p)}function zy(r,s,l){var d=s.pendingProps,p=d.children,y=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je($o,Sn),Sn|=l;else{if((l&1073741824)===0)return r=y!==null?y.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Je($o,Sn),Sn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=y!==null?y.baseLanes:l,Je($o,Sn),Sn|=d}else y!==null?(d=y.baseLanes|l,s.memoizedState=null):d=l,Je($o,Sn),Sn|=d;return tn(r,s,p,l),s.child}function By(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function yf(r,s,l,d,p){var y=ln(l)?xs:Bt.current;return y=Do(s,y),Fo(s,p),l=af(r,s,l,d,y,p),d=lf(),r!==null&&!un?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,Hr(r,s,p)):(it&&d&&$h(s),s.flags|=1,tn(r,s,l,p),s.child)}function $y(r,s,l,d,p){if(ln(l)){var y=!0;Ku(s)}else y=!1;if(Fo(s,p),s.stateNode===null)hc(r,s),by(s,l,d),pf(s,l,d,p),d=!0;else if(r===null){var T=s.stateNode,b=s.memoizedProps;T.props=b;var L=T.context,W=l.contextType;typeof W=="object"&&W!==null?W=Nn(W):(W=ln(l)?xs:Bt.current,W=Do(s,W));var re=l.getDerivedStateFromProps,se=typeof re=="function"||typeof T.getSnapshotBeforeUpdate=="function";se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(b!==d||L!==W)&&Ny(s,T,d,W),Ai=!1;var ne=s.memoizedState;T.state=ne,rc(s,d,T,p),L=s.memoizedState,b!==d||ne!==L||an.current||Ai?(typeof re=="function"&&(ff(s,l,re,d),L=s.memoizedState),(b=Ai||ky(s,l,b,d,ne,L,W))?(se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=L),T.props=d,T.state=L,T.context=W,d=b):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{T=s.stateNode,sy(r,s),b=s.memoizedProps,W=s.type===s.elementType?b:Yn(s.type,b),T.props=W,se=s.pendingProps,ne=T.context,L=l.contextType,typeof L=="object"&&L!==null?L=Nn(L):(L=ln(l)?xs:Bt.current,L=Do(s,L));var he=l.getDerivedStateFromProps;(re=typeof he=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(b!==se||ne!==L)&&Ny(s,T,d,L),Ai=!1,ne=s.memoizedState,T.state=ne,rc(s,d,T,p);var ve=s.memoizedState;b!==se||ne!==ve||an.current||Ai?(typeof he=="function"&&(ff(s,l,he,d),ve=s.memoizedState),(W=Ai||ky(s,l,W,d,ne,ve,L)||!1)?(re||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,ve,L),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,ve,L)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||b===r.memoizedProps&&ne===r.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&ne===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=ve),T.props=d,T.state=ve,T.context=L,d=W):(typeof T.componentDidUpdate!="function"||b===r.memoizedProps&&ne===r.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&ne===r.memoizedState||(s.flags|=1024),d=!1)}return vf(r,s,l,d,y,p)}function vf(r,s,l,d,p,y){By(r,s);var T=(s.flags&128)!==0;if(!d&&!T)return p&&Kg(s,l,!1),Hr(r,s,y);d=s.stateNode,XT.current=s;var b=T&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&T?(s.child=Mo(s,r.child,null,y),s.child=Mo(s,null,b,y)):tn(r,s,b,y),s.memoizedState=d.state,p&&Kg(s,l,!0),s.child}function qy(r){var s=r.stateNode;s.pendingContext?Wg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Wg(r,s.context,!1),ef(r,s.containerInfo)}function Hy(r,s,l,d,p){return Lo(),Gh(p),s.flags|=256,tn(r,s,l,d),s.child}var _f={dehydrated:null,treeContext:null,retryLane:0};function wf(r){return{baseLanes:r,cachePool:null,transitions:null}}function Wy(r,s,l){var d=s.pendingProps,p=st.current,y=!1,T=(s.flags&128)!==0,b;if((b=T)||(b=r!==null&&r.memoizedState===null?!1:(p&2)!==0),b?(y=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(p|=1),Je(st,p&1),r===null)return Wh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=d.children,r=d.fallback,y?(d=s.mode,y=s.child,T={mode:"hidden",children:T},(d&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=T):y=xc(T,d,0,null),r=Os(r,d,l,null),y.return=s,r.return=s,y.sibling=r,s.child=y,s.child.memoizedState=wf(l),s.memoizedState=_f,r):Ef(s,T));if(p=r.memoizedState,p!==null&&(b=p.dehydrated,b!==null))return JT(r,s,T,d,b,p,l);if(y){y=d.fallback,T=s.mode,p=r.child,b=p.sibling;var L={mode:"hidden",children:d.children};return(T&1)===0&&s.child!==p?(d=s.child,d.childLanes=0,d.pendingProps=L,s.deletions=null):(d=Di(p,L),d.subtreeFlags=p.subtreeFlags&14680064),b!==null?y=Di(b,y):(y=Os(y,T,l,null),y.flags|=2),y.return=s,d.return=s,d.sibling=y,s.child=d,d=y,y=s.child,T=r.child.memoizedState,T=T===null?wf(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},y.memoizedState=T,y.childLanes=r.childLanes&~l,s.memoizedState=_f,d}return y=r.child,r=y.sibling,d=Di(y,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=d,s.memoizedState=null,d}function Ef(r,s){return s=xc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function dc(r,s,l,d){return d!==null&&Gh(d),Mo(s,r.child,null,l),r=Ef(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function JT(r,s,l,d,p,y,T){if(l)return s.flags&256?(s.flags&=-257,d=mf(Error(t(422))),dc(r,s,T,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(y=d.fallback,p=s.mode,d=xc({mode:"visible",children:d.children},p,0,null),y=Os(y,p,T,null),y.flags|=2,d.return=s,y.return=s,d.sibling=y,s.child=d,(s.mode&1)!==0&&Mo(s,r.child,null,T),s.child.memoizedState=wf(T),s.memoizedState=_f,y);if((s.mode&1)===0)return dc(r,s,T,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var b=d.dgst;return d=b,y=Error(t(419)),d=mf(y,d,void 0),dc(r,s,T,d)}if(b=(T&r.childLanes)!==0,un||b){if(d=kt,d!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|T))!==0?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,$r(r,p),Zn(d,r,p,-1))}return Mf(),d=mf(Error(t(421))),dc(r,s,T,d)}return p.data==="$?"?(s.flags|=128,s.child=r.child,s=dS.bind(null,r),p._reactRetry=s,null):(r=y.treeContext,Tn=Ti(p.nextSibling),En=s,it=!0,Qn=null,r!==null&&(kn[bn++]=zr,kn[bn++]=Br,kn[bn++]=Is,zr=r.id,Br=r.overflow,Is=s),s=Ef(s,d.children),s.flags|=4096,s)}function Gy(r,s,l){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),Xh(r.return,s,l)}function Tf(r,s,l,d,p){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=d,y.tail=l,y.tailMode=p)}function Ky(r,s,l){var d=s.pendingProps,p=d.revealOrder,y=d.tail;if(tn(r,s,d.children,l),d=st.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Gy(r,l,s);else if(r.tag===19)Gy(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(Je(st,d),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)r=l.alternate,r!==null&&ic(r)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Tf(s,!1,p,l,y);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(r=p.alternate,r!==null&&ic(r)===null){s.child=p;break}r=p.sibling,p.sibling=l,l=p,p=r}Tf(s,!0,l,null,y);break;case"together":Tf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function hc(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Hr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),ks|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Di(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Di(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function ZT(r,s,l){switch(s.tag){case 3:qy(s),Lo();break;case 5:ly(s);break;case 1:ln(s.type)&&Ku(s);break;case 4:ef(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,p=s.memoizedProps.value;Je(ec,d._currentValue),d._currentValue=p;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Je(st,st.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Wy(r,s,l):(Je(st,st.current&1),r=Hr(r,s,l),r!==null?r.sibling:null);Je(st,st.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(r.flags&128)!==0){if(d)return Ky(r,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Je(st,st.current),d)break;return null;case 22:case 23:return s.lanes=0,zy(r,s,l)}return Hr(r,s,l)}var Qy,Sf,Yy,Xy;Qy=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Sf=function(){},Yy=function(r,s,l,d){var p=r.memoizedProps;if(p!==d){r=s.stateNode,Rs(mr.current);var y=null;switch(l){case"input":p=as(r,p),d=as(r,d),y=[];break;case"select":p=ue({},p,{value:void 0}),d=ue({},d,{value:void 0}),y=[];break;case"textarea":p=ka(r,p),d=ka(r,d),y=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=Hu)}La(l,d);var T;l=null;for(W in p)if(!d.hasOwnProperty(W)&&p.hasOwnProperty(W)&&p[W]!=null)if(W==="style"){var b=p[W];for(T in b)b.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(o.hasOwnProperty(W)?y||(y=[]):(y=y||[]).push(W,null));for(W in d){var L=d[W];if(b=p!=null?p[W]:void 0,d.hasOwnProperty(W)&&L!==b&&(L!=null||b!=null))if(W==="style")if(b){for(T in b)!b.hasOwnProperty(T)||L&&L.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in L)L.hasOwnProperty(T)&&b[T]!==L[T]&&(l||(l={}),l[T]=L[T])}else l||(y||(y=[]),y.push(W,l)),l=L;else W==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,b=b?b.__html:void 0,L!=null&&b!==L&&(y=y||[]).push(W,L)):W==="children"?typeof L!="string"&&typeof L!="number"||(y=y||[]).push(W,""+L):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(o.hasOwnProperty(W)?(L!=null&&W==="onScroll"&&Ze("scroll",r),y||b===L||(y=[])):(y=y||[]).push(W,L))}l&&(y=y||[]).push("style",l);var W=y;(s.updateQueue=W)&&(s.flags|=4)}},Xy=function(r,s,l,d){l!==d&&(s.flags|=4)};function gl(r,s){if(!it)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function qt(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,d=0;if(s)for(var p=r.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=r,p=p.sibling;else for(p=r.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=r,p=p.sibling;return r.subtreeFlags|=d,r.childLanes=l,s}function eS(r,s,l){var d=s.pendingProps;switch(qh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(s),null;case 1:return ln(s.type)&&Gu(),qt(s),null;case 3:return d=s.stateNode,Uo(),et(an),et(Bt),rf(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(Ju(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Qn!==null&&(Of(Qn),Qn=null))),Sf(r,s),qt(s),null;case 5:tf(s);var p=Rs(dl.current);if(l=s.type,r!==null&&s.stateNode!=null)Yy(r,s,l,d,p),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return qt(s),null}if(r=Rs(mr.current),Ju(s)){d=s.stateNode,l=s.type;var y=s.memoizedProps;switch(d[pr]=s,d[ol]=y,r=(s.mode&1)!==0,l){case"dialog":Ze("cancel",d),Ze("close",d);break;case"iframe":case"object":case"embed":Ze("load",d);break;case"video":case"audio":for(p=0;p<rl.length;p++)Ze(rl[p],d);break;case"source":Ze("error",d);break;case"img":case"image":case"link":Ze("error",d),Ze("load",d);break;case"details":Ze("toggle",d);break;case"input":eo(d,y),Ze("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!y.multiple},Ze("invalid",d);break;case"textarea":no(d,y),Ze("invalid",d)}La(l,y),p=null;for(var T in y)if(y.hasOwnProperty(T)){var b=y[T];T==="children"?typeof b=="string"?d.textContent!==b&&(y.suppressHydrationWarning!==!0&&qu(d.textContent,b,r),p=["children",b]):typeof b=="number"&&d.textContent!==""+b&&(y.suppressHydrationWarning!==!0&&qu(d.textContent,b,r),p=["children",""+b]):o.hasOwnProperty(T)&&b!=null&&T==="onScroll"&&Ze("scroll",d)}switch(l){case"input":rn(d),gu(d,y,!0);break;case"textarea":rn(d),ba(d);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(d.onclick=Hu)}d=p,s.updateQueue=d,d!==null&&(s.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=wt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=T.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=T.createElement(l,{is:d.is}):(r=T.createElement(l),l==="select"&&(T=r,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):r=T.createElementNS(r,l),r[pr]=s,r[ol]=d,Qy(r,s,!1,!1),s.stateNode=r;e:{switch(T=Ma(l,d),l){case"dialog":Ze("cancel",r),Ze("close",r),p=d;break;case"iframe":case"object":case"embed":Ze("load",r),p=d;break;case"video":case"audio":for(p=0;p<rl.length;p++)Ze(rl[p],r);p=d;break;case"source":Ze("error",r),p=d;break;case"img":case"image":case"link":Ze("error",r),Ze("load",r),p=d;break;case"details":Ze("toggle",r),p=d;break;case"input":eo(r,d),p=as(r,d),Ze("invalid",r);break;case"option":p=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},p=ue({},d,{value:void 0}),Ze("invalid",r);break;case"textarea":no(r,d),p=ka(r,d),Ze("invalid",r);break;default:p=d}La(l,p),b=p;for(y in b)if(b.hasOwnProperty(y)){var L=b[y];y==="style"?Oa(r,L):y==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,L!=null&&Na(r,L)):y==="children"?typeof L=="string"?(l!=="textarea"||L!=="")&&di(r,L):typeof L=="number"&&di(r,""+L):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?L!=null&&y==="onScroll"&&Ze("scroll",r):L!=null&&G(r,y,L,T))}switch(l){case"input":rn(r),gu(r,d,!1);break;case"textarea":rn(r),ba(r);break;case"option":d.value!=null&&r.setAttribute("value",""+Me(d.value));break;case"select":r.multiple=!!d.multiple,y=d.value,y!=null?br(r,!!d.multiple,y,!1):d.defaultValue!=null&&br(r,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(r.onclick=Hu)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return qt(s),null;case 6:if(r&&s.stateNode!=null)Xy(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=Rs(dl.current),Rs(mr.current),Ju(s)){if(d=s.stateNode,l=s.memoizedProps,d[pr]=s,(y=d.nodeValue!==l)&&(r=En,r!==null))switch(r.tag){case 3:qu(d.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&qu(d.nodeValue,l,(r.mode&1)!==0)}y&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[pr]=s,s.stateNode=d}return qt(s),null;case 13:if(et(st),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(it&&Tn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)ey(),Lo(),s.flags|=98560,y=!1;else if(y=Ju(s),d!==null&&d.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[pr]=s}else Lo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;qt(s),y=!1}else Qn!==null&&(Of(Qn),Qn=null),y=!0;if(!y)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(st.current&1)!==0?xt===0&&(xt=3):Mf())),s.updateQueue!==null&&(s.flags|=4),qt(s),null);case 4:return Uo(),Sf(r,s),r===null&&il(s.stateNode.containerInfo),qt(s),null;case 10:return Yh(s.type._context),qt(s),null;case 17:return ln(s.type)&&Gu(),qt(s),null;case 19:if(et(st),y=s.memoizedState,y===null)return qt(s),null;if(d=(s.flags&128)!==0,T=y.rendering,T===null)if(d)gl(y,!1);else{if(xt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(T=ic(r),T!==null){for(s.flags|=128,gl(y,!1),d=T.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)y=l,r=d,y.flags&=14680066,T=y.alternate,T===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=T.childLanes,y.lanes=T.lanes,y.child=T.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=T.memoizedProps,y.memoizedState=T.memoizedState,y.updateQueue=T.updateQueue,y.type=T.type,r=T.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Je(st,st.current&1|2),s.child}r=r.sibling}y.tail!==null&&Xe()>qo&&(s.flags|=128,d=!0,gl(y,!1),s.lanes=4194304)}else{if(!d)if(r=ic(T),r!==null){if(s.flags|=128,d=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),gl(y,!0),y.tail===null&&y.tailMode==="hidden"&&!T.alternate&&!it)return qt(s),null}else 2*Xe()-y.renderingStartTime>qo&&l!==1073741824&&(s.flags|=128,d=!0,gl(y,!1),s.lanes=4194304);y.isBackwards?(T.sibling=s.child,s.child=T):(l=y.last,l!==null?l.sibling=T:s.child=T,y.last=T)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=Xe(),s.sibling=null,l=st.current,Je(st,d?l&1|2:l&1),s):(qt(s),null);case 22:case 23:return Lf(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(Sn&1073741824)!==0&&(qt(s),s.subtreeFlags&6&&(s.flags|=8192)):qt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function tS(r,s){switch(qh(s),s.tag){case 1:return ln(s.type)&&Gu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Uo(),et(an),et(Bt),rf(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return tf(s),null;case 13:if(et(st),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Lo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return et(st),null;case 4:return Uo(),null;case 10:return Yh(s.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var fc=!1,Ht=!1,nS=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Bo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){ct(r,s,d)}else l.current=null}function xf(r,s,l){try{l()}catch(d){ct(r,s,d)}}var Jy=!1;function rS(r,s){if(Vh=_i,r=kg(),Ch(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,y=d.focusNode;d=d.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var T=0,b=-1,L=-1,W=0,re=0,se=r,ne=null;t:for(;;){for(var he;se!==l||p!==0&&se.nodeType!==3||(b=T+p),se!==y||d!==0&&se.nodeType!==3||(L=T+d),se.nodeType===3&&(T+=se.nodeValue.length),(he=se.firstChild)!==null;)ne=se,se=he;for(;;){if(se===r)break t;if(ne===l&&++W===p&&(b=T),ne===y&&++re===d&&(L=T),(he=se.nextSibling)!==null)break;se=ne,ne=se.parentNode}se=he}l=b===-1||L===-1?null:{start:b,end:L}}else l=null}l=l||{start:0,end:0}}else l=null;for(Lh={focusedElem:r,selectionRange:l},_i=!1,pe=s;pe!==null;)if(s=pe,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,pe=r;else for(;pe!==null;){s=pe;try{var ve=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ve!==null){var we=ve.memoizedProps,ft=ve.memoizedState,q=s.stateNode,j=q.getSnapshotBeforeUpdate(s.elementType===s.type?we:Yn(s.type,we),ft);q.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var H=s.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(oe){ct(s,s.return,oe)}if(r=s.sibling,r!==null){r.return=s.return,pe=r;break}pe=s.return}return ve=Jy,Jy=!1,ve}function yl(r,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&r)===r){var y=p.destroy;p.destroy=void 0,y!==void 0&&xf(s,l,y)}p=p.next}while(p!==d)}}function pc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function If(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function Zy(r){var s=r.alternate;s!==null&&(r.alternate=null,Zy(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[pr],delete s[ol],delete s[Uh],delete s[FT],delete s[UT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ev(r){return r.tag===5||r.tag===3||r.tag===4}function tv(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||ev(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Af(r,s,l){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Hu));else if(d!==4&&(r=r.child,r!==null))for(Af(r,s,l),r=r.sibling;r!==null;)Af(r,s,l),r=r.sibling}function Cf(r,s,l){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(Cf(r,s,l),r=r.sibling;r!==null;)Cf(r,s,l),r=r.sibling}var Lt=null,Xn=!1;function Ri(r,s,l){for(l=l.child;l!==null;)nv(r,s,l),l=l.sibling}function nv(r,s,l){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(gs,l)}catch{}switch(l.tag){case 5:Ht||Bo(l,s);case 6:var d=Lt,p=Xn;Lt=null,Ri(r,s,l),Lt=d,Xn=p,Lt!==null&&(Xn?(r=Lt,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Lt.removeChild(l.stateNode));break;case 18:Lt!==null&&(Xn?(r=Lt,l=l.stateNode,r.nodeType===8?Fh(r.parentNode,l):r.nodeType===1&&Fh(r,l),Wn(r)):Fh(Lt,l.stateNode));break;case 4:d=Lt,p=Xn,Lt=l.stateNode.containerInfo,Xn=!0,Ri(r,s,l),Lt=d,Xn=p;break;case 0:case 11:case 14:case 15:if(!Ht&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var y=p,T=y.destroy;y=y.tag,T!==void 0&&((y&2)!==0||(y&4)!==0)&&xf(l,s,T),p=p.next}while(p!==d)}Ri(r,s,l);break;case 1:if(!Ht&&(Bo(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(b){ct(l,s,b)}Ri(r,s,l);break;case 21:Ri(r,s,l);break;case 22:l.mode&1?(Ht=(d=Ht)||l.memoizedState!==null,Ri(r,s,l),Ht=d):Ri(r,s,l);break;default:Ri(r,s,l)}}function rv(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new nS),s.forEach(function(d){var p=hS.bind(null,r,d);l.has(d)||(l.add(d),d.then(p,p))})}}function Jn(r,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var y=r,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 5:Lt=b.stateNode,Xn=!1;break e;case 3:Lt=b.stateNode.containerInfo,Xn=!0;break e;case 4:Lt=b.stateNode.containerInfo,Xn=!0;break e}b=b.return}if(Lt===null)throw Error(t(160));nv(y,T,p),Lt=null,Xn=!1;var L=p.alternate;L!==null&&(L.return=null),p.return=null}catch(W){ct(p,s,W)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)iv(s,r),s=s.sibling}function iv(r,s){var l=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Jn(s,r),yr(r),d&4){try{yl(3,r,r.return),pc(3,r)}catch(we){ct(r,r.return,we)}try{yl(5,r,r.return)}catch(we){ct(r,r.return,we)}}break;case 1:Jn(s,r),yr(r),d&512&&l!==null&&Bo(l,l.return);break;case 5:if(Jn(s,r),yr(r),d&512&&l!==null&&Bo(l,l.return),r.flags&32){var p=r.stateNode;try{di(p,"")}catch(we){ct(r,r.return,we)}}if(d&4&&(p=r.stateNode,p!=null)){var y=r.memoizedProps,T=l!==null?l.memoizedProps:y,b=r.type,L=r.updateQueue;if(r.updateQueue=null,L!==null)try{b==="input"&&y.type==="radio"&&y.name!=null&&Ra(p,y),Ma(b,T);var W=Ma(b,y);for(T=0;T<L.length;T+=2){var re=L[T],se=L[T+1];re==="style"?Oa(p,se):re==="dangerouslySetInnerHTML"?Na(p,se):re==="children"?di(p,se):G(p,re,se,W)}switch(b){case"input":Pa(p,y);break;case"textarea":ro(p,y);break;case"select":var ne=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var he=y.value;he!=null?br(p,!!y.multiple,he,!1):ne!==!!y.multiple&&(y.defaultValue!=null?br(p,!!y.multiple,y.defaultValue,!0):br(p,!!y.multiple,y.multiple?[]:"",!1))}p[ol]=y}catch(we){ct(r,r.return,we)}}break;case 6:if(Jn(s,r),yr(r),d&4){if(r.stateNode===null)throw Error(t(162));p=r.stateNode,y=r.memoizedProps;try{p.nodeValue=y}catch(we){ct(r,r.return,we)}}break;case 3:if(Jn(s,r),yr(r),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Wn(s.containerInfo)}catch(we){ct(r,r.return,we)}break;case 4:Jn(s,r),yr(r);break;case 13:Jn(s,r),yr(r),p=r.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(kf=Xe())),d&4&&rv(r);break;case 22:if(re=l!==null&&l.memoizedState!==null,r.mode&1?(Ht=(W=Ht)||re,Jn(s,r),Ht=W):Jn(s,r),yr(r),d&8192){if(W=r.memoizedState!==null,(r.stateNode.isHidden=W)&&!re&&(r.mode&1)!==0)for(pe=r,re=r.child;re!==null;){for(se=pe=re;pe!==null;){switch(ne=pe,he=ne.child,ne.tag){case 0:case 11:case 14:case 15:yl(4,ne,ne.return);break;case 1:Bo(ne,ne.return);var ve=ne.stateNode;if(typeof ve.componentWillUnmount=="function"){d=ne,l=ne.return;try{s=d,ve.props=s.memoizedProps,ve.state=s.memoizedState,ve.componentWillUnmount()}catch(we){ct(d,l,we)}}break;case 5:Bo(ne,ne.return);break;case 22:if(ne.memoizedState!==null){av(se);continue}}he!==null?(he.return=ne,pe=he):av(se)}re=re.sibling}e:for(re=null,se=r;;){if(se.tag===5){if(re===null){re=se;try{p=se.stateNode,W?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(b=se.stateNode,L=se.memoizedProps.style,T=L!=null&&L.hasOwnProperty("display")?L.display:null,b.style.display=Da("display",T))}catch(we){ct(r,r.return,we)}}}else if(se.tag===6){if(re===null)try{se.stateNode.nodeValue=W?"":se.memoizedProps}catch(we){ct(r,r.return,we)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===r)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===r)break e;for(;se.sibling===null;){if(se.return===null||se.return===r)break e;re===se&&(re=null),se=se.return}re===se&&(re=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:Jn(s,r),yr(r),d&4&&rv(r);break;case 21:break;default:Jn(s,r),yr(r)}}function yr(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(ev(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(di(p,""),d.flags&=-33);var y=tv(r);Cf(r,y,p);break;case 3:case 4:var T=d.stateNode.containerInfo,b=tv(r);Af(r,b,T);break;default:throw Error(t(161))}}catch(L){ct(r,r.return,L)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function iS(r,s,l){pe=r,sv(r)}function sv(r,s,l){for(var d=(r.mode&1)!==0;pe!==null;){var p=pe,y=p.child;if(p.tag===22&&d){var T=p.memoizedState!==null||fc;if(!T){var b=p.alternate,L=b!==null&&b.memoizedState!==null||Ht;b=fc;var W=Ht;if(fc=T,(Ht=L)&&!W)for(pe=p;pe!==null;)T=pe,L=T.child,T.tag===22&&T.memoizedState!==null?lv(p):L!==null?(L.return=T,pe=L):lv(p);for(;y!==null;)pe=y,sv(y),y=y.sibling;pe=p,fc=b,Ht=W}ov(r)}else(p.subtreeFlags&8772)!==0&&y!==null?(y.return=p,pe=y):ov(r)}}function ov(r){for(;pe!==null;){var s=pe;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ht||pc(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Ht)if(l===null)d.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Yn(s.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&ay(s,y,d);break;case 3:var T=s.updateQueue;if(T!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}ay(s,T,l)}break;case 5:var b=s.stateNode;if(l===null&&s.flags&4){l=b;var L=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":L.autoFocus&&l.focus();break;case"img":L.src&&(l.src=L.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var W=s.alternate;if(W!==null){var re=W.memoizedState;if(re!==null){var se=re.dehydrated;se!==null&&Wn(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ht||s.flags&512&&If(s)}catch(ne){ct(s,s.return,ne)}}if(s===r){pe=null;break}if(l=s.sibling,l!==null){l.return=s.return,pe=l;break}pe=s.return}}function av(r){for(;pe!==null;){var s=pe;if(s===r){pe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,pe=l;break}pe=s.return}}function lv(r){for(;pe!==null;){var s=pe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{pc(4,s)}catch(L){ct(s,l,L)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var p=s.return;try{d.componentDidMount()}catch(L){ct(s,p,L)}}var y=s.return;try{If(s)}catch(L){ct(s,y,L)}break;case 5:var T=s.return;try{If(s)}catch(L){ct(s,T,L)}}}catch(L){ct(s,s.return,L)}if(s===r){pe=null;break}var b=s.sibling;if(b!==null){b.return=s.return,pe=b;break}pe=s.return}}var sS=Math.ceil,mc=J.ReactCurrentDispatcher,Rf=J.ReactCurrentOwner,On=J.ReactCurrentBatchConfig,He=0,kt=null,gt=null,Mt=0,Sn=0,$o=Si(0),xt=0,vl=null,ks=0,gc=0,Pf=0,_l=null,cn=null,kf=0,qo=1/0,Wr=null,yc=!1,bf=null,Pi=null,vc=!1,ki=null,_c=0,wl=0,Nf=null,wc=-1,Ec=0;function nn(){return(He&6)!==0?Xe():wc!==-1?wc:wc=Xe()}function bi(r){return(r.mode&1)===0?1:(He&2)!==0&&Mt!==0?Mt&-Mt:BT.transition!==null?(Ec===0&&(Ec=vs()),Ec):(r=ze,r!==0||(r=window.event,r=r===void 0?16:Ka(r.type)),r)}function Zn(r,s,l,d){if(50<wl)throw wl=0,Nf=null,Error(t(185));mi(r,l,d),((He&2)===0||r!==kt)&&(r===kt&&((He&2)===0&&(gc|=l),xt===4&&Ni(r,Mt)),dn(r,d),l===1&&He===0&&(s.mode&1)===0&&(qo=Xe()+500,Qu&&Ii()))}function dn(r,s){var l=r.callbackNode;Or(r,s);var d=ys(r,r===kt?Mt:0);if(d===0)l!==null&&$a(l),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(l!=null&&$a(l),s===1)r.tag===0?zT(cv.bind(null,r)):Qg(cv.bind(null,r)),MT(function(){(He&6)===0&&Ii()}),l=null;else{switch(yi(d)){case 1:l=ms;break;case 4:l=hi;break;case 16:l=Cn;break;case 536870912:l=Eu;break;default:l=Cn}l=vv(l,uv.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function uv(r,s){if(wc=-1,Ec=0,(He&6)!==0)throw Error(t(327));var l=r.callbackNode;if(Ho()&&r.callbackNode!==l)return null;var d=ys(r,r===kt?Mt:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=Tc(r,d);else{s=d;var p=He;He|=2;var y=hv();(kt!==r||Mt!==s)&&(Wr=null,qo=Xe()+500,Ns(r,s));do try{lS();break}catch(b){dv(r,b)}while(!0);Qh(),mc.current=y,He=p,gt!==null?s=0:(kt=null,Mt=0,s=xt)}if(s!==0){if(s===2&&(p=vn(r),p!==0&&(d=p,s=Df(r,p))),s===1)throw l=vl,Ns(r,0),Ni(r,d),dn(r,Xe()),l;if(s===6)Ni(r,d);else{if(p=r.current.alternate,(d&30)===0&&!oS(p)&&(s=Tc(r,d),s===2&&(y=vn(r),y!==0&&(d=y,s=Df(r,y))),s===1))throw l=vl,Ns(r,0),Ni(r,d),dn(r,Xe()),l;switch(r.finishedWork=p,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:Ds(r,cn,Wr);break;case 3:if(Ni(r,d),(d&130023424)===d&&(s=kf+500-Xe(),10<s)){if(ys(r,0)!==0)break;if(p=r.suspendedLanes,(p&d)!==d){nn(),r.pingedLanes|=r.suspendedLanes&p;break}r.timeoutHandle=jh(Ds.bind(null,r,cn,Wr),s);break}Ds(r,cn,Wr);break;case 4:if(Ni(r,d),(d&4194240)===d)break;for(s=r.eventTimes,p=-1;0<d;){var T=31-Zt(d);y=1<<T,T=s[T],T>p&&(p=T),d&=~y}if(d=p,d=Xe()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*sS(d/1960))-d,10<d){r.timeoutHandle=jh(Ds.bind(null,r,cn,Wr),d);break}Ds(r,cn,Wr);break;case 5:Ds(r,cn,Wr);break;default:throw Error(t(329))}}}return dn(r,Xe()),r.callbackNode===l?uv.bind(null,r):null}function Df(r,s){var l=_l;return r.current.memoizedState.isDehydrated&&(Ns(r,s).flags|=256),r=Tc(r,s),r!==2&&(s=cn,cn=l,s!==null&&Of(s)),r}function Of(r){cn===null?cn=r:cn.push.apply(cn,r)}function oS(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],y=p.getSnapshot;p=p.value;try{if(!Kn(y(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ni(r,s){for(s&=~Pf,s&=~gc,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-Zt(s),d=1<<l;r[l]=-1,s&=~d}}function cv(r){if((He&6)!==0)throw Error(t(327));Ho();var s=ys(r,0);if((s&1)===0)return dn(r,Xe()),null;var l=Tc(r,s);if(r.tag!==0&&l===2){var d=vn(r);d!==0&&(s=d,l=Df(r,d))}if(l===1)throw l=vl,Ns(r,0),Ni(r,s),dn(r,Xe()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ds(r,cn,Wr),dn(r,Xe()),null}function Vf(r,s){var l=He;He|=1;try{return r(s)}finally{He=l,He===0&&(qo=Xe()+500,Qu&&Ii())}}function bs(r){ki!==null&&ki.tag===0&&(He&6)===0&&Ho();var s=He;He|=1;var l=On.transition,d=ze;try{if(On.transition=null,ze=1,r)return r()}finally{ze=d,On.transition=l,He=s,(He&6)===0&&Ii()}}function Lf(){Sn=$o.current,et($o)}function Ns(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,LT(l)),gt!==null)for(l=gt.return;l!==null;){var d=l;switch(qh(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Gu();break;case 3:Uo(),et(an),et(Bt),rf();break;case 5:tf(d);break;case 4:Uo();break;case 13:et(st);break;case 19:et(st);break;case 10:Yh(d.type._context);break;case 22:case 23:Lf()}l=l.return}if(kt=r,gt=r=Di(r.current,null),Mt=Sn=s,xt=0,vl=null,Pf=gc=ks=0,cn=_l=null,Cs!==null){for(s=0;s<Cs.length;s++)if(l=Cs[s],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,y=l.pending;if(y!==null){var T=y.next;y.next=p,d.next=T}l.pending=d}Cs=null}return r}function dv(r,s){do{var l=gt;try{if(Qh(),sc.current=uc,oc){for(var d=ot.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}oc=!1}if(Ps=0,Pt=St=ot=null,hl=!1,fl=0,Rf.current=null,l===null||l.return===null){xt=1,vl=s,gt=null;break}e:{var y=r,T=l.return,b=l,L=s;if(s=Mt,b.flags|=32768,L!==null&&typeof L=="object"&&typeof L.then=="function"){var W=L,re=b,se=re.tag;if((re.mode&1)===0&&(se===0||se===11||se===15)){var ne=re.alternate;ne?(re.updateQueue=ne.updateQueue,re.memoizedState=ne.memoizedState,re.lanes=ne.lanes):(re.updateQueue=null,re.memoizedState=null)}var he=Ly(T);if(he!==null){he.flags&=-257,My(he,T,b,y,s),he.mode&1&&Vy(y,W,s),s=he,L=W;var ve=s.updateQueue;if(ve===null){var we=new Set;we.add(L),s.updateQueue=we}else ve.add(L);break e}else{if((s&1)===0){Vy(y,W,s),Mf();break e}L=Error(t(426))}}else if(it&&b.mode&1){var ft=Ly(T);if(ft!==null){(ft.flags&65536)===0&&(ft.flags|=256),My(ft,T,b,y,s),Gh(zo(L,b));break e}}y=L=zo(L,b),xt!==4&&(xt=2),_l===null?_l=[y]:_l.push(y),y=T;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var q=Dy(y,L,s);oy(y,q);break e;case 1:b=L;var j=y.type,H=y.stateNode;if((y.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(Pi===null||!Pi.has(H)))){y.flags|=65536,s&=-s,y.lanes|=s;var oe=Oy(y,b,s);oy(y,oe);break e}}y=y.return}while(y!==null)}pv(l)}catch(Ee){s=Ee,gt===l&&l!==null&&(gt=l=l.return);continue}break}while(!0)}function hv(){var r=mc.current;return mc.current=uc,r===null?uc:r}function Mf(){(xt===0||xt===3||xt===2)&&(xt=4),kt===null||(ks&268435455)===0&&(gc&268435455)===0||Ni(kt,Mt)}function Tc(r,s){var l=He;He|=2;var d=hv();(kt!==r||Mt!==s)&&(Wr=null,Ns(r,s));do try{aS();break}catch(p){dv(r,p)}while(!0);if(Qh(),He=l,mc.current=d,gt!==null)throw Error(t(261));return kt=null,Mt=0,xt}function aS(){for(;gt!==null;)fv(gt)}function lS(){for(;gt!==null&&!_u();)fv(gt)}function fv(r){var s=yv(r.alternate,r,Sn);r.memoizedProps=r.pendingProps,s===null?pv(r):gt=s,Rf.current=null}function pv(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=eS(l,s,Sn),l!==null){gt=l;return}}else{if(l=tS(l,s),l!==null){l.flags&=32767,gt=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{xt=6,gt=null;return}}if(s=s.sibling,s!==null){gt=s;return}gt=s=r}while(s!==null);xt===0&&(xt=5)}function Ds(r,s,l){var d=ze,p=On.transition;try{On.transition=null,ze=1,uS(r,s,l,d)}finally{On.transition=p,ze=d}return null}function uS(r,s,l,d){do Ho();while(ki!==null);if((He&6)!==0)throw Error(t(327));l=r.finishedWork;var p=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=l.lanes|l.childLanes;if(Ye(r,y),r===kt&&(gt=kt=null,Mt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||vc||(vc=!0,vv(Cn,function(){return Ho(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=On.transition,On.transition=null;var T=ze;ze=1;var b=He;He|=4,Rf.current=null,rS(r,l),iv(l,r),PT(Lh),_i=!!Vh,Lh=Vh=null,r.current=l,iS(l),_h(),He=b,ze=T,On.transition=y}else r.current=l;if(vc&&(vc=!1,ki=r,_c=p),y=r.pendingLanes,y===0&&(Pi=null),Tu(l.stateNode),dn(r,Xe()),s!==null)for(d=r.onRecoverableError,l=0;l<s.length;l++)p=s[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(yc)throw yc=!1,r=bf,bf=null,r;return(_c&1)!==0&&r.tag!==0&&Ho(),y=r.pendingLanes,(y&1)!==0?r===Nf?wl++:(wl=0,Nf=r):wl=0,Ii(),null}function Ho(){if(ki!==null){var r=yi(_c),s=On.transition,l=ze;try{if(On.transition=null,ze=16>r?16:r,ki===null)var d=!1;else{if(r=ki,ki=null,_c=0,(He&6)!==0)throw Error(t(331));var p=He;for(He|=4,pe=r.current;pe!==null;){var y=pe,T=y.child;if((pe.flags&16)!==0){var b=y.deletions;if(b!==null){for(var L=0;L<b.length;L++){var W=b[L];for(pe=W;pe!==null;){var re=pe;switch(re.tag){case 0:case 11:case 15:yl(8,re,y)}var se=re.child;if(se!==null)se.return=re,pe=se;else for(;pe!==null;){re=pe;var ne=re.sibling,he=re.return;if(Zy(re),re===W){pe=null;break}if(ne!==null){ne.return=he,pe=ne;break}pe=he}}}var ve=y.alternate;if(ve!==null){var we=ve.child;if(we!==null){ve.child=null;do{var ft=we.sibling;we.sibling=null,we=ft}while(we!==null)}}pe=y}}if((y.subtreeFlags&2064)!==0&&T!==null)T.return=y,pe=T;else e:for(;pe!==null;){if(y=pe,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:yl(9,y,y.return)}var q=y.sibling;if(q!==null){q.return=y.return,pe=q;break e}pe=y.return}}var j=r.current;for(pe=j;pe!==null;){T=pe;var H=T.child;if((T.subtreeFlags&2064)!==0&&H!==null)H.return=T,pe=H;else e:for(T=j;pe!==null;){if(b=pe,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:pc(9,b)}}catch(Ee){ct(b,b.return,Ee)}if(b===T){pe=null;break e}var oe=b.sibling;if(oe!==null){oe.return=b.return,pe=oe;break e}pe=b.return}}if(He=p,Ii(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(gs,r)}catch{}d=!0}return d}finally{ze=l,On.transition=s}}return!1}function mv(r,s,l){s=zo(l,s),s=Dy(r,s,1),r=Ci(r,s,1),s=nn(),r!==null&&(mi(r,1,s),dn(r,s))}function ct(r,s,l){if(r.tag===3)mv(r,r,l);else for(;s!==null;){if(s.tag===3){mv(s,r,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Pi===null||!Pi.has(d))){r=zo(l,r),r=Oy(s,r,1),s=Ci(s,r,1),r=nn(),s!==null&&(mi(s,1,r),dn(s,r));break}}s=s.return}}function cS(r,s,l){var d=r.pingCache;d!==null&&d.delete(s),s=nn(),r.pingedLanes|=r.suspendedLanes&l,kt===r&&(Mt&l)===l&&(xt===4||xt===3&&(Mt&130023424)===Mt&&500>Xe()-kf?Ns(r,0):Pf|=l),dn(r,s)}function gv(r,s){s===0&&((r.mode&1)===0?s=1:(s=po,po<<=1,(po&130023424)===0&&(po=4194304)));var l=nn();r=$r(r,s),r!==null&&(mi(r,s,l),dn(r,l))}function dS(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),gv(r,l)}function hS(r,s){var l=0;switch(r.tag){case 13:var d=r.stateNode,p=r.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),gv(r,l)}var yv;yv=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||an.current)un=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return un=!1,ZT(r,s,l);un=(r.flags&131072)!==0}else un=!1,it&&(s.flags&1048576)!==0&&Yg(s,Xu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;hc(r,s),r=s.pendingProps;var p=Do(s,Bt.current);Fo(s,l),p=af(null,s,d,r,p,l);var y=lf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,ln(d)?(y=!0,Ku(s)):y=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Zh(s),p.updater=cc,s.stateNode=p,p._reactInternals=s,pf(s,d,r,l),s=vf(null,s,d,!0,y,l)):(s.tag=0,it&&y&&$h(s),tn(null,s,p,l),s=s.child),s;case 16:d=s.elementType;e:{switch(hc(r,s),r=s.pendingProps,p=d._init,d=p(d._payload),s.type=d,p=s.tag=pS(d),r=Yn(d,r),p){case 0:s=yf(null,s,d,r,l);break e;case 1:s=$y(null,s,d,r,l);break e;case 11:s=jy(null,s,d,r,l);break e;case 14:s=Fy(null,s,d,Yn(d.type,r),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Yn(d,p),yf(r,s,d,p,l);case 1:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Yn(d,p),$y(r,s,d,p,l);case 3:e:{if(qy(s),r===null)throw Error(t(387));d=s.pendingProps,y=s.memoizedState,p=y.element,sy(r,s),rc(s,d,null,l);var T=s.memoizedState;if(d=T.element,y.isDehydrated)if(y={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){p=zo(Error(t(423)),s),s=Hy(r,s,d,l,p);break e}else if(d!==p){p=zo(Error(t(424)),s),s=Hy(r,s,d,l,p);break e}else for(Tn=Ti(s.stateNode.containerInfo.firstChild),En=s,it=!0,Qn=null,l=ry(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Lo(),d===p){s=Hr(r,s,l);break e}tn(r,s,d,l)}s=s.child}return s;case 5:return ly(s),r===null&&Wh(s),d=s.type,p=s.pendingProps,y=r!==null?r.memoizedProps:null,T=p.children,Mh(d,p)?T=null:y!==null&&Mh(d,y)&&(s.flags|=32),By(r,s),tn(r,s,T,l),s.child;case 6:return r===null&&Wh(s),null;case 13:return Wy(r,s,l);case 4:return ef(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=Mo(s,null,d,l):tn(r,s,d,l),s.child;case 11:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Yn(d,p),jy(r,s,d,p,l);case 7:return tn(r,s,s.pendingProps,l),s.child;case 8:return tn(r,s,s.pendingProps.children,l),s.child;case 12:return tn(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,p=s.pendingProps,y=s.memoizedProps,T=p.value,Je(ec,d._currentValue),d._currentValue=T,y!==null)if(Kn(y.value,T)){if(y.children===p.children&&!an.current){s=Hr(r,s,l);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var b=y.dependencies;if(b!==null){T=y.child;for(var L=b.firstContext;L!==null;){if(L.context===d){if(y.tag===1){L=qr(-1,l&-l),L.tag=2;var W=y.updateQueue;if(W!==null){W=W.shared;var re=W.pending;re===null?L.next=L:(L.next=re.next,re.next=L),W.pending=L}}y.lanes|=l,L=y.alternate,L!==null&&(L.lanes|=l),Xh(y.return,l,s),b.lanes|=l;break}L=L.next}}else if(y.tag===10)T=y.type===s.type?null:y.child;else if(y.tag===18){if(T=y.return,T===null)throw Error(t(341));T.lanes|=l,b=T.alternate,b!==null&&(b.lanes|=l),Xh(T,l,s),T=y.sibling}else T=y.child;if(T!==null)T.return=y;else for(T=y;T!==null;){if(T===s){T=null;break}if(y=T.sibling,y!==null){y.return=T.return,T=y;break}T=T.return}y=T}tn(r,s,p.children,l),s=s.child}return s;case 9:return p=s.type,d=s.pendingProps.children,Fo(s,l),p=Nn(p),d=d(p),s.flags|=1,tn(r,s,d,l),s.child;case 14:return d=s.type,p=Yn(d,s.pendingProps),p=Yn(d.type,p),Fy(r,s,d,p,l);case 15:return Uy(r,s,s.type,s.pendingProps,l);case 17:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Yn(d,p),hc(r,s),s.tag=1,ln(d)?(r=!0,Ku(s)):r=!1,Fo(s,l),by(s,d,p),pf(s,d,p,l),vf(null,s,d,!0,r,l);case 19:return Ky(r,s,l);case 22:return zy(r,s,l)}throw Error(t(156,s.tag))};function vv(r,s){return ho(r,s)}function fS(r,s,l,d){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(r,s,l,d){return new fS(r,s,l,d)}function jf(r){return r=r.prototype,!(!r||!r.isReactComponent)}function pS(r){if(typeof r=="function")return jf(r)?1:0;if(r!=null){if(r=r.$$typeof,r===F)return 11;if(r===Oe)return 14}return 2}function Di(r,s){var l=r.alternate;return l===null?(l=Vn(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function Sc(r,s,l,d,p,y){var T=2;if(d=r,typeof r=="function")jf(r)&&(T=1);else if(typeof r=="string")T=5;else e:switch(r){case P:return Os(l.children,p,y,s);case A:T=8,p|=8;break;case I:return r=Vn(12,l,s,p|2),r.elementType=I,r.lanes=y,r;case k:return r=Vn(13,l,s,p),r.elementType=k,r.lanes=y,r;case _e:return r=Vn(19,l,s,p),r.elementType=_e,r.lanes=y,r;case ge:return xc(l,p,y,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:T=10;break e;case O:T=9;break e;case F:T=11;break e;case Oe:T=14;break e;case de:T=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Vn(T,l,s,p),s.elementType=r,s.type=d,s.lanes=y,s}function Os(r,s,l,d){return r=Vn(7,r,d,s),r.lanes=l,r}function xc(r,s,l,d){return r=Vn(22,r,d,s),r.elementType=ge,r.lanes=l,r.stateNode={isHidden:!1},r}function Ff(r,s,l){return r=Vn(6,r,null,s),r.lanes=l,r}function Uf(r,s,l){return s=Vn(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function mS(r,s,l,d,p){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pi(0),this.expirationTimes=pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function zf(r,s,l,d,p,y,T,b,L){return r=new mS(r,s,l,b,L),s===1?(s=1,y===!0&&(s|=8)):s=0,y=Vn(3,null,null,s),r.current=y,y.stateNode=r,y.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(y),r}function gS(r,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:d==null?null:""+d,children:r,containerInfo:s,implementation:l}}function _v(r){if(!r)return xi;r=r._reactInternals;e:{if(zn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(ln(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(ln(l))return Gg(r,l,s)}return s}function wv(r,s,l,d,p,y,T,b,L){return r=zf(l,d,!0,r,p,y,T,b,L),r.context=_v(null),l=r.current,d=nn(),p=bi(l),y=qr(d,p),y.callback=s??null,Ci(l,y,p),r.current.lanes=p,mi(r,p,d),dn(r,d),r}function Ic(r,s,l,d){var p=s.current,y=nn(),T=bi(p);return l=_v(l),s.context===null?s.context=l:s.pendingContext=l,s=qr(y,T),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=Ci(p,s,T),r!==null&&(Zn(r,p,T,y),nc(r,p,T)),T}function Ac(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Ev(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function Bf(r,s){Ev(r,s),(r=r.alternate)&&Ev(r,s)}function yS(){return null}var Tv=typeof reportError=="function"?reportError:function(r){console.error(r)};function $f(r){this._internalRoot=r}Cc.prototype.render=$f.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Ic(r,s,null,null)},Cc.prototype.unmount=$f.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;bs(function(){Ic(null,r,null,null)}),s[Fr]=null}};function Cc(r){this._internalRoot=r}Cc.prototype.unstable_scheduleHydration=function(r){if(r){var s=Cu();r={blockedOn:null,target:r,priority:s};for(var l=0;l<cr.length&&s!==0&&s<cr[l].priority;l++);cr.splice(l,0,r),l===0&&ku(r)}};function qf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Rc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Sv(){}function vS(r,s,l,d,p){if(p){if(typeof d=="function"){var y=d;d=function(){var W=Ac(T);y.call(W)}}var T=wv(s,d,r,0,null,!1,!1,"",Sv);return r._reactRootContainer=T,r[Fr]=T.current,il(r.nodeType===8?r.parentNode:r),bs(),T}for(;p=r.lastChild;)r.removeChild(p);if(typeof d=="function"){var b=d;d=function(){var W=Ac(L);b.call(W)}}var L=zf(r,0,!1,null,null,!1,!1,"",Sv);return r._reactRootContainer=L,r[Fr]=L.current,il(r.nodeType===8?r.parentNode:r),bs(function(){Ic(s,L,l,d)}),L}function Pc(r,s,l,d,p){var y=l._reactRootContainer;if(y){var T=y;if(typeof p=="function"){var b=p;p=function(){var L=Ac(T);b.call(L)}}Ic(s,T,r,p)}else T=vS(l,s,r,p,d);return Ac(T)}Iu=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=fi(s.pendingLanes);l!==0&&(gi(s,l|1),dn(s,Xe()),(He&6)===0&&(qo=Xe()+500,Ii()))}break;case 13:bs(function(){var d=$r(r,1);if(d!==null){var p=nn();Zn(d,r,1,p)}}),Bf(r,1)}},mo=function(r){if(r.tag===13){var s=$r(r,134217728);if(s!==null){var l=nn();Zn(s,r,134217728,l)}Bf(r,134217728)}},Au=function(r){if(r.tag===13){var s=bi(r),l=$r(r,s);if(l!==null){var d=nn();Zn(l,r,s,d)}Bf(r,s)}},Cu=function(){return ze},Ru=function(r,s){var l=ze;try{return ze=r,s()}finally{ze=l}},so=function(r,s,l){switch(s){case"input":if(Pa(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==r&&d.form===r.form){var p=Wu(d);if(!p)throw Error(t(90));Jt(d),Pa(d,p)}}}break;case"textarea":ro(r,l);break;case"select":s=l.value,s!=null&&br(r,!!l.multiple,s,!1)}},ds=Vf,Fa=bs;var _S={usingClientEntryPoint:!1,Events:[al,bo,Wu,lr,ja,Vf]},El={findFiberByHostInstance:Ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wS={bundleType:El.bundleType,version:El.version,rendererPackageName:El.rendererPackageName,rendererConfig:El.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ba(r),r===null?null:r.stateNode},findFiberByHostInstance:El.findFiberByHostInstance||yS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{gs=kc.inject(wS),yn=kc}catch{}}return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_S,hn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qf(s))throw Error(t(200));return gS(r,s,null,l)},hn.createRoot=function(r,s){if(!qf(r))throw Error(t(299));var l=!1,d="",p=Tv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=zf(r,1,!1,null,null,l,!1,d,p),r[Fr]=s.current,il(r.nodeType===8?r.parentNode:r),new $f(s)},hn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ba(s),r=r===null?null:r.stateNode,r},hn.flushSync=function(r){return bs(r)},hn.hydrate=function(r,s,l){if(!Rc(s))throw Error(t(200));return Pc(null,r,s,!0,l)},hn.hydrateRoot=function(r,s,l){if(!qf(r))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,y="",T=Tv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),s=wv(s,null,r,1,l??null,p,!1,y,T),r[Fr]=s.current,il(r),d)for(r=0;r<d.length;r++)l=d[r],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Cc(s)},hn.render=function(r,s,l){if(!Rc(s))throw Error(t(200));return Pc(null,r,s,!1,l)},hn.unmountComponentAtNode=function(r){if(!Rc(r))throw Error(t(40));return r._reactRootContainer?(bs(function(){Pc(null,null,r,!1,function(){r._reactRootContainer=null,r[Fr]=null})}),!0):!1},hn.unstable_batchedUpdates=Vf,hn.unstable_renderSubtreeIntoContainer=function(r,s,l,d){if(!Rc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Pc(r,s,l,!1,d)},hn.version="18.3.1-next-f1338f8080-20240426",hn}var bv;function $0(){if(bv)return Gf.exports;bv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Gf.exports=CS(),Gf.exports}var Nv;function RS(){if(Nv)return bc;Nv=1;var n=$0();return bc.createRoot=n.createRoot,bc.hydrateRoot=n.hydrateRoot,bc}var PS=RS();const kS=Ld(PS);var Sl={},Dv;function bS(){if(Dv)return Sl;Dv=1,Object.defineProperty(Sl,"__esModule",{value:!0}),Sl.parse=c,Sl.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,C){const R=new a,V=w.length;if(V<2)return R;const N=(C==null?void 0:C.decode)||_;let M=0;do{const z=w.indexOf("=",M);if(z===-1)break;const G=w.indexOf(";",M),J=G===-1?V:G;if(z>J){M=w.lastIndexOf(";",z-1)+1;continue}const te=h(w,M,z),Y=f(w,z,te),P=w.slice(te,Y);if(R[P]===void 0){let A=h(w,z+1,J),I=f(w,J,A);const D=N(w.slice(A,I));R[P]=D}M=J+1}while(M<V);return R}function h(w,C,R){do{const V=w.charCodeAt(C);if(V!==32&&V!==9)return C}while(++C<R);return R}function f(w,C,R){for(;C>R;){const V=w.charCodeAt(--C);if(V!==32&&V!==9)return C+1}return R}function m(w,C,R){const V=(R==null?void 0:R.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const N=V(C);if(!e.test(N))throw new TypeError(`argument val is invalid: ${C}`);let M=w+"="+N;if(!R)return M;if(R.maxAge!==void 0){if(!Number.isInteger(R.maxAge))throw new TypeError(`option maxAge is invalid: ${R.maxAge}`);M+="; Max-Age="+R.maxAge}if(R.domain){if(!t.test(R.domain))throw new TypeError(`option domain is invalid: ${R.domain}`);M+="; Domain="+R.domain}if(R.path){if(!i.test(R.path))throw new TypeError(`option path is invalid: ${R.path}`);M+="; Path="+R.path}if(R.expires){if(!E(R.expires)||!Number.isFinite(R.expires.valueOf()))throw new TypeError(`option expires is invalid: ${R.expires}`);M+="; Expires="+R.expires.toUTCString()}if(R.httpOnly&&(M+="; HttpOnly"),R.secure&&(M+="; Secure"),R.partitioned&&(M+="; Partitioned"),R.priority)switch(typeof R.priority=="string"?R.priority.toLowerCase():void 0){case"low":M+="; Priority=Low";break;case"medium":M+="; Priority=Medium";break;case"high":M+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${R.priority}`)}if(R.sameSite)switch(typeof R.sameSite=="string"?R.sameSite.toLowerCase():R.sameSite){case!0:case"strict":M+="; SameSite=Strict";break;case"lax":M+="; SameSite=Lax";break;case"none":M+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${R.sameSite}`)}return M}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function E(w){return o.call(w)==="[object Date]"}return Sl}bS();var Ov="popstate";function NS(n={}){function e(o,a){let{pathname:c="/",search:h="",hash:f=""}=Ks(o.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),wp("",{pathname:c,search:h,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(o,a){let c=o.document.querySelector("base"),h="";if(c&&c.getAttribute("href")){let f=o.location.href,m=f.indexOf("#");h=m===-1?f:f.slice(0,m)}return h+"#"+(typeof a=="string"?a:Bl(a))}function i(o,a){ir(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return OS(e,t,i,n)}function at(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ir(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DS(){return Math.random().toString(36).substring(2,10)}function Vv(n,e){return{usr:n.state,key:n.key,idx:e}}function wp(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Ks(e):e,state:t,key:e&&e.key||i||DS()}}function Bl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Ks(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function OS(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,h="POP",f=null,m=_();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function _(){return(c.state||{idx:null}).idx}function E(){h="POP";let N=_(),M=N==null?null:N-m;m=N,f&&f({action:h,location:V.location,delta:M})}function w(N,M){h="PUSH";let z=wp(V.location,N,M);t&&t(z,N),m=_()+1;let G=Vv(z,m),J=V.createHref(z);try{c.pushState(G,"",J)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;o.location.assign(J)}a&&f&&f({action:h,location:V.location,delta:1})}function C(N,M){h="REPLACE";let z=wp(V.location,N,M);t&&t(z,N),m=_();let G=Vv(z,m),J=V.createHref(z);c.replaceState(G,"",J),a&&f&&f({action:h,location:V.location,delta:0})}function R(N){return VS(N)}let V={get action(){return h},get location(){return n(o,c)},listen(N){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Ov,E),f=N,()=>{o.removeEventListener(Ov,E),f=null}},createHref(N){return e(o,N)},createURL:R,encodeLocation(N){let M=R(N);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:w,replace:C,go(N){return c.go(N)}};return V}function VS(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),at(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:Bl(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function q0(n,e,t="/"){return LS(n,e,t,!1)}function LS(n,e,t,i){let o=typeof e=="string"?Ks(e):e,a=ri(o.pathname||"/",t);if(a==null)return null;let c=H0(n);MS(c);let h=null;for(let f=0;h==null&&f<c.length;++f){let m=KS(a);h=WS(c[f],m,i)}return h}function H0(n,e=[],t=[],i=""){let o=(a,c,h)=>{let f={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};f.relativePath.startsWith("/")&&(at(f.relativePath.startsWith(i),`Absolute route path "${f.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(i.length));let m=Jr([i,f.relativePath]),_=t.concat(f);a.children&&a.children.length>0&&(at(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),H0(a.children,e,_,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:qS(m,a.index),routesMeta:_})};return n.forEach((a,c)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))o(a,c);else for(let f of W0(a.path))o(a,c,f)}),e}function W0(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=W0(i.join("/")),h=[];return h.push(...c.map(f=>f===""?a:[a,f].join("/"))),o&&h.push(...c),h.map(f=>n.startsWith("/")&&f===""?"/":f)}function MS(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:HS(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var jS=/^:[\w-]+$/,FS=3,US=2,zS=1,BS=10,$S=-2,Lv=n=>n==="*";function qS(n,e){let t=n.split("/"),i=t.length;return t.some(Lv)&&(i+=$S),e&&(i+=US),t.filter(o=>!Lv(o)).reduce((o,a)=>o+(jS.test(a)?FS:a===""?zS:BS),i)}function HS(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function WS(n,e,t=!1){let{routesMeta:i}=n,o={},a="/",c=[];for(let h=0;h<i.length;++h){let f=i[h],m=h===i.length-1,_=a==="/"?e:e.slice(a.length)||"/",E=ad({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},_),w=f.route;if(!E&&m&&t&&!i[i.length-1].route.index&&(E=ad({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},_)),!E)return null;Object.assign(o,E.params),c.push({params:o,pathname:Jr([a,E.pathname]),pathnameBase:JS(Jr([a,E.pathnameBase])),route:w}),E.pathnameBase!=="/"&&(a=Jr([a,E.pathnameBase]))}return c}function ad(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=GS(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((m,{paramName:_,isOptional:E},w)=>{if(_==="*"){let R=h[w]||"";c=a.slice(0,a.length-R.length).replace(/(.)\/+$/,"$1")}const C=h[w];return E&&!C?m[_]=void 0:m[_]=(C||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:c,pattern:n}}function GS(n,e=!1,t=!0){ir(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,f)=>(i.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function KS(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ir(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function ri(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function QS(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Ks(n):n;return{pathname:t?t.startsWith("/")?t:YS(t,e):e,search:ZS(i),hash:ex(o)}}function YS(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Yf(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function XS(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function G0(n){let e=XS(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function K0(n,e,t,i=!1){let o;typeof n=="string"?o=Ks(n):(o={...n},at(!o.pathname||!o.pathname.includes("?"),Yf("?","pathname","search",o)),at(!o.pathname||!o.pathname.includes("#"),Yf("#","pathname","hash",o)),at(!o.search||!o.search.includes("#"),Yf("#","search","hash",o)));let a=n===""||o.pathname==="",c=a?"/":o.pathname,h;if(c==null)h=t;else{let E=e.length-1;if(!i&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),E-=1;o.pathname=w.join("/")}h=E>=0?e[E]:"/"}let f=QS(o,h),m=c&&c!=="/"&&c.endsWith("/"),_=(a||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||_)&&(f.pathname+="/"),f}var Jr=n=>n.join("/").replace(/\/\/+/g,"/"),JS=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),ZS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,ex=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function tx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Q0=["POST","PUT","PATCH","DELETE"];new Set(Q0);var nx=["GET",...Q0];new Set(nx);var _a=B.createContext(null);_a.displayName="DataRouter";var Md=B.createContext(null);Md.displayName="DataRouterState";var Y0=B.createContext({isTransitioning:!1});Y0.displayName="ViewTransition";var rx=B.createContext(new Map);rx.displayName="Fetchers";var ix=B.createContext(null);ix.displayName="Await";var Cr=B.createContext(null);Cr.displayName="Navigation";var eu=B.createContext(null);eu.displayName="Location";var Rr=B.createContext({outlet:null,matches:[],isDataRoute:!1});Rr.displayName="Route";var um=B.createContext(null);um.displayName="RouteError";function sx(n,{relative:e}={}){at(tu(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=B.useContext(Cr),{hash:o,pathname:a,search:c}=nu(n,{relative:e}),h=a;return t!=="/"&&(h=a==="/"?t:Jr([t,a])),i.createHref({pathname:h,search:c,hash:o})}function tu(){return B.useContext(eu)!=null}function Qs(){return at(tu(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(eu).location}var X0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function J0(n){B.useContext(Cr).static||B.useLayoutEffect(n)}function ns(){let{isDataRoute:n}=B.useContext(Rr);return n?_x():ox()}function ox(){at(tu(),"useNavigate() may be used only in the context of a <Router> component.");let n=B.useContext(_a),{basename:e,navigator:t}=B.useContext(Cr),{matches:i}=B.useContext(Rr),{pathname:o}=Qs(),a=JSON.stringify(G0(i)),c=B.useRef(!1);return J0(()=>{c.current=!0}),B.useCallback((f,m={})=>{if(ir(c.current,X0),!c.current)return;if(typeof f=="number"){t.go(f);return}let _=K0(f,JSON.parse(a),o,m.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Jr([e,_.pathname])),(m.replace?t.replace:t.push)(_,m.state,m)},[e,t,a,o,n])}B.createContext(null);function ax(){let{matches:n}=B.useContext(Rr),e=n[n.length-1];return e?e.params:{}}function nu(n,{relative:e}={}){let{matches:t}=B.useContext(Rr),{pathname:i}=Qs(),o=JSON.stringify(G0(t));return B.useMemo(()=>K0(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function lx(n,e){return Z0(n,e)}function Z0(n,e,t,i){var M;at(tu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=B.useContext(Cr),{matches:a}=B.useContext(Rr),c=a[a.length-1],h=c?c.params:{},f=c?c.pathname:"/",m=c?c.pathnameBase:"/",_=c&&c.route;{let z=_&&_.path||"";ew(f,!_||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let E=Qs(),w;if(e){let z=typeof e=="string"?Ks(e):e;at(m==="/"||((M=z.pathname)==null?void 0:M.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${z.pathname}" was given in the \`location\` prop.`),w=z}else w=E;let C=w.pathname||"/",R=C;if(m!=="/"){let z=m.replace(/^\//,"").split("/");R="/"+C.replace(/^\//,"").split("/").slice(z.length).join("/")}let V=q0(n,{pathname:R});ir(_||V!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),ir(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=fx(V&&V.map(z=>Object.assign({},z,{params:Object.assign({},h,z.params),pathname:Jr([m,o.encodeLocation?o.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?m:Jr([m,o.encodeLocation?o.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),a,t,i);return e&&N?B.createElement(eu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},N):N}function ux(){let n=vx(),e=tx(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:a},"ErrorBoundary")," or"," ",B.createElement("code",{style:a},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),t?B.createElement("pre",{style:o},t):null,c)}var cx=B.createElement(ux,null),dx=class extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?B.createElement(Rr.Provider,{value:this.props.routeContext},B.createElement(um.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function hx({routeContext:n,match:e,children:t}){let i=B.useContext(_a);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(Rr.Provider,{value:n},t)}function fx(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=t==null?void 0:t.errors;if(a!=null){let f=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);at(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,h=-1;if(t)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:_,errors:E}=t,w=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!E||E[m.route.id]===void 0);if(m.route.lazy||w){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,m,_)=>{let E,w=!1,C=null,R=null;t&&(E=a&&m.route.id?a[m.route.id]:void 0,C=m.route.errorElement||cx,c&&(h<0&&_===0?(ew("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,R=null):h===_&&(w=!0,R=m.route.hydrateFallbackElement||null)));let V=e.concat(o.slice(0,_+1)),N=()=>{let M;return E?M=C:w?M=R:m.route.Component?M=B.createElement(m.route.Component,null):m.route.element?M=m.route.element:M=f,B.createElement(hx,{match:m,routeContext:{outlet:f,matches:V,isDataRoute:t!=null},children:M})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?B.createElement(dx,{location:t.location,revalidation:t.revalidation,component:C,error:E,children:N(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):N()},null)}function cm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function px(n){let e=B.useContext(_a);return at(e,cm(n)),e}function mx(n){let e=B.useContext(Md);return at(e,cm(n)),e}function gx(n){let e=B.useContext(Rr);return at(e,cm(n)),e}function dm(n){let e=gx(n),t=e.matches[e.matches.length-1];return at(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function yx(){return dm("useRouteId")}function vx(){var i;let n=B.useContext(um),e=mx("useRouteError"),t=dm("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function _x(){let{router:n}=px("useNavigate"),e=dm("useNavigate"),t=B.useRef(!1);return J0(()=>{t.current=!0}),B.useCallback(async(o,a={})=>{ir(t.current,X0),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var Mv={};function ew(n,e,t){!e&&!Mv[n]&&(Mv[n]=!0,ir(!1,t))}B.memo(wx);function wx({routes:n,future:e,state:t}){return Z0(n,void 0,t,e)}function Kr(n){at(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ex({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1}){at(!tu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),h=B.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof t=="string"&&(t=Ks(t));let{pathname:f="/",search:m="",hash:_="",state:E=null,key:w="default"}=t,C=B.useMemo(()=>{let R=ri(f,c);return R==null?null:{location:{pathname:R,search:m,hash:_,state:E,key:w},navigationType:i}},[c,f,m,_,E,w,i]);return ir(C!=null,`<Router basename="${c}"> is not able to match the URL "${f}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:B.createElement(Cr.Provider,{value:h},B.createElement(eu.Provider,{children:e,value:C}))}function Tx({children:n,location:e}){return lx(Ep(n),e)}function Ep(n,e=[]){let t=[];return B.Children.forEach(n,(i,o)=>{if(!B.isValidElement(i))return;let a=[...e,o];if(i.type===B.Fragment){t.push.apply(t,Ep(i.props.children,a));return}at(i.type===Kr,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),at(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Ep(i.props.children,a)),t.push(c)}),t}var qc="get",Hc="application/x-www-form-urlencoded";function jd(n){return n!=null&&typeof n.tagName=="string"}function Sx(n){return jd(n)&&n.tagName.toLowerCase()==="button"}function xx(n){return jd(n)&&n.tagName.toLowerCase()==="form"}function Ix(n){return jd(n)&&n.tagName.toLowerCase()==="input"}function Ax(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Cx(n,e){return n.button===0&&(!e||e==="_self")&&!Ax(n)}var Nc=null;function Rx(){if(Nc===null)try{new FormData(document.createElement("form"),0),Nc=!1}catch{Nc=!0}return Nc}var Px=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xf(n){return n!=null&&!Px.has(n)?(ir(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hc}"`),null):n}function kx(n,e){let t,i,o,a,c;if(xx(n)){let h=n.getAttribute("action");i=h?ri(h,e):null,t=n.getAttribute("method")||qc,o=Xf(n.getAttribute("enctype"))||Hc,a=new FormData(n)}else if(Sx(n)||Ix(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||h.getAttribute("action");if(i=f?ri(f,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||qc,o=Xf(n.getAttribute("formenctype"))||Xf(h.getAttribute("enctype"))||Hc,a=new FormData(h,n),!Rx()){let{name:m,type:_,value:E}=n;if(_==="image"){let w=m?`${m}.`:"";a.append(`${w}x`,"0"),a.append(`${w}y`,"0")}else m&&a.append(m,E)}}else{if(jd(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=qc,i=null,o=Hc,c=n}return a&&o==="text/plain"&&(c=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:c}}function hm(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function bx(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Nx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Dx(n,e,t){let i=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await bx(a,t);return c.links?c.links():[]}return[]}));return Mx(i.flat(1).filter(Nx).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function jv(n,e,t,i,o,a){let c=(f,m)=>t[m]?f.route.id!==t[m].route.id:!0,h=(f,m)=>{var _;return t[m].pathname!==f.pathname||((_=t[m].route.path)==null?void 0:_.endsWith("*"))&&t[m].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,m)=>c(f,m)||h(f,m)):a==="data"?e.filter((f,m)=>{var E;let _=i.routes[f.route.id];if(!_||!_.hasLoader)return!1;if(c(f,m)||h(f,m))return!0;if(f.route.shouldRevalidate){let w=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Ox(n,e,{includeHydrateFallback:t}={}){return Vx(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function Vx(n){return[...new Set(n)]}function Lx(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function Mx(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let a=JSON.stringify(Lx(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jx=new Set([100,101,204,205]);function Fx(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&ri(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function tw(){let n=B.useContext(_a);return hm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Ux(){let n=B.useContext(Md);return hm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var fm=B.createContext(void 0);fm.displayName="FrameworkContext";function nw(){let n=B.useContext(fm);return hm(n,"You must render this element inside a <HydratedRouter> element"),n}function zx(n,e){let t=B.useContext(fm),[i,o]=B.useState(!1),[a,c]=B.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:m,onMouseLeave:_,onTouchStart:E}=e,w=B.useRef(null);B.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let V=M=>{M.forEach(z=>{c(z.isIntersecting)})},N=new IntersectionObserver(V,{threshold:.5});return w.current&&N.observe(w.current),()=>{N.disconnect()}}},[n]),B.useEffect(()=>{if(i){let V=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(V)}}},[i]);let C=()=>{o(!0)},R=()=>{o(!1),c(!1)};return t?n!=="intent"?[a,w,{}]:[a,w,{onFocus:xl(h,C),onBlur:xl(f,R),onMouseEnter:xl(m,C),onMouseLeave:xl(_,R),onTouchStart:xl(E,C)}]:[!1,w,{}]}function xl(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function Bx({page:n,...e}){let{router:t}=tw(),i=B.useMemo(()=>q0(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?B.createElement(qx,{page:n,matches:i,...e}):null}function $x(n){let{manifest:e,routeModules:t}=nw(),[i,o]=B.useState([]);return B.useEffect(()=>{let a=!1;return Dx(n,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[n,e,t]),i}function qx({page:n,matches:e,...t}){let i=Qs(),{manifest:o,routeModules:a}=nw(),{basename:c}=tw(),{loaderData:h,matches:f}=Ux(),m=B.useMemo(()=>jv(n,e,f,o,i,"data"),[n,e,f,o,i]),_=B.useMemo(()=>jv(n,e,f,o,i,"assets"),[n,e,f,o,i]),E=B.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let R=new Set,V=!1;if(e.forEach(M=>{var G;let z=o.routes[M.route.id];!z||!z.hasLoader||(!m.some(J=>J.route.id===M.route.id)&&M.route.id in h&&((G=a[M.route.id])!=null&&G.shouldRevalidate)||z.hasClientLoader?V=!0:R.add(M.route.id))}),R.size===0)return[];let N=Fx(n,c);return V&&R.size>0&&N.searchParams.set("_routes",e.filter(M=>R.has(M.route.id)).map(M=>M.route.id).join(",")),[N.pathname+N.search]},[c,h,i,o,m,e,n,a]),w=B.useMemo(()=>Ox(_,o),[_,o]),C=$x(_);return B.createElement(B.Fragment,null,E.map(R=>B.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...t})),w.map(R=>B.createElement("link",{key:R,rel:"modulepreload",href:R,...t})),C.map(({key:R,link:V})=>B.createElement("link",{key:R,...V})))}function Hx(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var rw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{rw&&(window.__reactRouterVersion="7.6.3")}catch{}function Wx({basename:n,children:e,window:t}){let i=B.useRef();i.current==null&&(i.current=NS({window:t,v5Compat:!0}));let o=i.current,[a,c]=B.useState({action:o.action,location:o.location}),h=B.useCallback(f=>{B.startTransition(()=>c(f))},[c]);return B.useLayoutEffect(()=>o.listen(h),[o,h]),B.createElement(Ex,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:o})}var iw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fd=B.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:c,state:h,target:f,to:m,preventScrollReset:_,viewTransition:E,...w},C){let{basename:R}=B.useContext(Cr),V=typeof m=="string"&&iw.test(m),N,M=!1;if(typeof m=="string"&&V&&(N=m,rw))try{let I=new URL(window.location.href),D=m.startsWith("//")?new URL(I.protocol+m):new URL(m),O=ri(D.pathname,R);D.origin===I.origin&&O!=null?m=O+D.search+D.hash:M=!0}catch{ir(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=sx(m,{relative:o}),[G,J,te]=zx(i,w),Y=Yx(m,{replace:c,state:h,target:f,preventScrollReset:_,relative:o,viewTransition:E});function P(I){e&&e(I),I.defaultPrevented||Y(I)}let A=B.createElement("a",{...w,...te,href:N||z,onClick:M||a?e:P,ref:Hx(C,J),target:f,"data-discover":!V&&t==="render"?"true":void 0});return G&&!V?B.createElement(B.Fragment,null,A,B.createElement(Bx,{page:z})):A});Fd.displayName="Link";var Gx=B.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:c,viewTransition:h,children:f,...m},_){let E=nu(c,{relative:m.relative}),w=Qs(),C=B.useContext(Md),{navigator:R,basename:V}=B.useContext(Cr),N=C!=null&&tI(E)&&h===!0,M=R.encodeLocation?R.encodeLocation(E).pathname:E.pathname,z=w.pathname,G=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;t||(z=z.toLowerCase(),G=G?G.toLowerCase():null,M=M.toLowerCase()),G&&V&&(G=ri(G,V)||G);const J=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let te=z===M||!o&&z.startsWith(M)&&z.charAt(J)==="/",Y=G!=null&&(G===M||!o&&G.startsWith(M)&&G.charAt(M.length)==="/"),P={isActive:te,isPending:Y,isTransitioning:N},A=te?e:void 0,I;typeof i=="function"?I=i(P):I=[i,te?"active":null,Y?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(P):a;return B.createElement(Fd,{...m,"aria-current":A,className:I,ref:_,style:D,to:c,viewTransition:h},typeof f=="function"?f(P):f)});Gx.displayName="NavLink";var Kx=B.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:c=qc,action:h,onSubmit:f,relative:m,preventScrollReset:_,viewTransition:E,...w},C)=>{let R=Zx(),V=eI(h,{relative:m}),N=c.toLowerCase()==="get"?"get":"post",M=typeof h=="string"&&iw.test(h),z=G=>{if(f&&f(G),G.defaultPrevented)return;G.preventDefault();let J=G.nativeEvent.submitter,te=(J==null?void 0:J.getAttribute("formmethod"))||c;R(J||G.currentTarget,{fetcherKey:e,method:te,navigate:t,replace:o,state:a,relative:m,preventScrollReset:_,viewTransition:E})};return B.createElement("form",{ref:C,method:N,action:V,onSubmit:i?f:z,...w,"data-discover":!M&&n==="render"?"true":void 0})});Kx.displayName="Form";function Qx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sw(n){let e=B.useContext(_a);return at(e,Qx(n)),e}function Yx(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:a,viewTransition:c}={}){let h=ns(),f=Qs(),m=nu(n,{relative:a});return B.useCallback(_=>{if(Cx(_,e)){_.preventDefault();let E=t!==void 0?t:Bl(f)===Bl(m);h(n,{replace:E,state:i,preventScrollReset:o,relative:a,viewTransition:c})}},[f,h,m,t,i,e,n,o,a,c])}var Xx=0,Jx=()=>`__${String(++Xx)}__`;function Zx(){let{router:n}=sw("useSubmit"),{basename:e}=B.useContext(Cr),t=yx();return B.useCallback(async(i,o={})=>{let{action:a,method:c,encType:h,formData:f,body:m}=kx(i,e);if(o.navigate===!1){let _=o.fetcherKey||Jx();await n.fetch(_,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await n.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function eI(n,{relative:e}={}){let{basename:t}=B.useContext(Cr),i=B.useContext(Rr);at(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...nu(n||".",{relative:e})},c=Qs();if(n==null){a.search=c.search;let h=new URLSearchParams(a.search),f=h.getAll("index");if(f.some(_=>_==="")){h.delete("index"),f.filter(E=>E).forEach(E=>h.append("index",E));let _=h.toString();a.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Jr([t,a.pathname])),Bl(a)}function tI(n,e={}){let t=B.useContext(Y0);at(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=sw("useViewTransitionState"),o=nu(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=ri(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=ri(t.nextLocation.pathname,i)||t.nextLocation.pathname;return ad(o.pathname,c)!=null||ad(o.pathname,a)!=null}[...jx];var nI=$0();const rI=Ld(nI),iI=()=>{};var Fv={};/**
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
 */const ow=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},sI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],h=n[t++],f=((o&7)<<18|(a&63)<<12|(c&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(f>>10)),e[i++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},aw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,h=c?n[o+1]:0,f=o+2<n.length,m=f?n[o+2]:0,_=a>>2,E=(a&3)<<4|h>>4;let w=(h&15)<<2|m>>6,C=m&63;f||(C=64,c||(w=64)),i.push(t[_],t[E],t[w],t[C])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ow(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const m=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||h==null||m==null||E==null)throw new oI;const w=a<<2|h>>4;if(i.push(w),m!==64){const C=h<<4&240|m>>2;if(i.push(C),E!==64){const R=m<<6&192|E;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class oI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aI=function(n){const e=ow(n);return aw.encodeByteArray(e,!0)},ld=function(n){return aI(n).replace(/\./g,"")},lw=function(n){try{return aw.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uI=()=>lI().__FIREBASE_DEFAULTS__,cI=()=>{if(typeof process>"u"||typeof Fv>"u")return;const n=Fv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},dI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&lw(n[1]);return e&&JSON.parse(e)},Ud=()=>{try{return iI()||uI()||cI()||dI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},uw=n=>{var e,t;return(t=(e=Ud())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hI=n=>{const e=uw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},cw=()=>{var n;return(n=Ud())===null||n===void 0?void 0:n.config},dw=n=>{var e;return(e=Ud())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class fI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function wa(n){return n.endsWith(".cloudworkstations.dev")}async function hw(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function pI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ld(JSON.stringify(t)),ld(JSON.stringify(c)),""].join(".")}const Vl={};function mI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Vl))Vl[e]?n.emulator.push(e):n.prod.push(e);return n}function gI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Uv=!1;function fw(n,e){if(typeof window>"u"||typeof document>"u"||!wa(window.location.host)||Vl[n]===e||Vl[n]||Uv)return;Vl[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",a=mI().prod.length>0;function c(){const w=document.getElementById(i);w&&w.remove()}function h(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function f(w,C){w.setAttribute("width","24"),w.setAttribute("id",C),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function m(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Uv=!0,c()},w}function _(w,C){w.setAttribute("id",C),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function E(){const w=gI(i),C=t("text"),R=document.getElementById(C)||document.createElement("span"),V=t("learnmore"),N=document.getElementById(V)||document.createElement("a"),M=t("preprendIcon"),z=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const G=w.element;h(G),_(N,V);const J=m();f(z,M),G.append(z,R,N,J),document.body.appendChild(G)}a?(R.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function vI(){var n;const e=(n=Ud())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _I(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function EI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TI(){const n=Xt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function SI(){return!vI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xI(){try{return typeof indexedDB=="object"}catch{return!1}}function II(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const AI="FirebaseError";class ui extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=AI,Object.setPrototypeOf(this,ui.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ru.prototype.create)}}class ru{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?CI(a,i):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new ui(o,h,i)}}function CI(n,e){return n.replace(RI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const RI=/\{\$([^}]+)}/g;function PI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Us(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],c=e[o];if(zv(a)&&zv(c)){if(!Us(a,c))return!1}else if(a!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function zv(n){return n!==null&&typeof n=="object"}/**
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
 */function iu(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Al(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,a]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function Cl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function kI(n,e){const t=new bI(n,e);return t.subscribe.bind(t)}class bI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");NI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Jf),o.error===void 0&&(o.error=Jf),o.complete===void 0&&(o.complete=Jf);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Jf(){}/**
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
 */function Ct(n){return n&&n._delegate?n._delegate:n}class zs{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vs="[DEFAULT]";/**
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
 */class DI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new fI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VI(e))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=Vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vs){return this.instances.has(e)}getOptions(e=Vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);i===h&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:OI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Vs){return this.component?this.component.multipleInstances?e:Vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OI(n){return n===Vs?void 0:n}function VI(n){return n.instantiationMode==="EAGER"}/**
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
 */class LI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new DI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Fe||(Fe={}));const MI={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},jI=Fe.INFO,FI={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},UI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=FI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pm{constructor(e){this.name=e,this._logLevel=jI,this._logHandler=UI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const zI=(n,e)=>e.some(t=>n instanceof t);let Bv,$v;function BI(){return Bv||(Bv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $I(){return $v||($v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pw=new WeakMap,Tp=new WeakMap,mw=new WeakMap,Zf=new WeakMap,mm=new WeakMap;function qI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t($i(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&pw.set(t,n)}).catch(()=>{}),mm.set(e,n),e}function HI(n){if(Tp.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Tp.set(n,e)}let Sp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $i(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function WI(n){Sp=n(Sp)}function GI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ep(this),e,...t);return mw.set(i,e.sort?e.sort():[e]),$i(i)}:$I().includes(n)?function(...e){return n.apply(ep(this),e),$i(pw.get(this))}:function(...e){return $i(n.apply(ep(this),e))}}function KI(n){return typeof n=="function"?GI(n):(n instanceof IDBTransaction&&HI(n),zI(n,BI())?new Proxy(n,Sp):n)}function $i(n){if(n instanceof IDBRequest)return qI(n);if(Zf.has(n))return Zf.get(n);const e=KI(n);return e!==n&&(Zf.set(n,e),mm.set(e,n)),e}const ep=n=>mm.get(n);function QI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),h=$i(c);return i&&c.addEventListener("upgradeneeded",f=>{i($i(c.result),f.oldVersion,f.newVersion,$i(c.transaction),f)}),t&&c.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const YI=["get","getKey","getAll","getAllKeys","count"],XI=["put","add","delete","clear"],tp=new Map;function qv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tp.get(e))return tp.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=XI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||YI.includes(t)))return;const a=async function(c,...h){const f=this.transaction(c,o?"readwrite":"readonly");let m=f.store;return i&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),o&&f.done]))[0]};return tp.set(e,a),a}WI(n=>({...n,get:(e,t,i)=>qv(e,t)||n.get(e,t,i),has:(e,t)=>!!qv(e,t)||n.has(e,t)}));/**
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
 */class JI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ZI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ZI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xp="@firebase/app",Hv="0.13.1";/**
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
 */const ii=new pm("@firebase/app"),eA="@firebase/app-compat",tA="@firebase/analytics-compat",nA="@firebase/analytics",rA="@firebase/app-check-compat",iA="@firebase/app-check",sA="@firebase/auth",oA="@firebase/auth-compat",aA="@firebase/database",lA="@firebase/data-connect",uA="@firebase/database-compat",cA="@firebase/functions",dA="@firebase/functions-compat",hA="@firebase/installations",fA="@firebase/installations-compat",pA="@firebase/messaging",mA="@firebase/messaging-compat",gA="@firebase/performance",yA="@firebase/performance-compat",vA="@firebase/remote-config",_A="@firebase/remote-config-compat",wA="@firebase/storage",EA="@firebase/storage-compat",TA="@firebase/firestore",SA="@firebase/ai",xA="@firebase/firestore-compat",IA="firebase",AA="11.9.0";/**
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
 */const Ip="[DEFAULT]",CA={[xp]:"fire-core",[eA]:"fire-core-compat",[nA]:"fire-analytics",[tA]:"fire-analytics-compat",[iA]:"fire-app-check",[rA]:"fire-app-check-compat",[sA]:"fire-auth",[oA]:"fire-auth-compat",[aA]:"fire-rtdb",[lA]:"fire-data-connect",[uA]:"fire-rtdb-compat",[cA]:"fire-fn",[dA]:"fire-fn-compat",[hA]:"fire-iid",[fA]:"fire-iid-compat",[pA]:"fire-fcm",[mA]:"fire-fcm-compat",[gA]:"fire-perf",[yA]:"fire-perf-compat",[vA]:"fire-rc",[_A]:"fire-rc-compat",[wA]:"fire-gcs",[EA]:"fire-gcs-compat",[TA]:"fire-fst",[xA]:"fire-fst-compat",[SA]:"fire-vertex","fire-js":"fire-js",[IA]:"fire-js-all"};/**
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
 */const ud=new Map,RA=new Map,Ap=new Map;function Wv(n,e){try{n.container.addComponent(e)}catch(t){ii.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ia(n){const e=n.name;if(Ap.has(e))return ii.debug(`There were multiple attempts to register component ${e}.`),!1;Ap.set(e,n);for(const t of ud.values())Wv(t,n);for(const t of RA.values())Wv(t,n);return!0}function gm(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ln(n){return n==null?!1:n.settings!==void 0}/**
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
 */const PA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qi=new ru("app","Firebase",PA);/**
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
 */class kA{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new zs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ea=AA;function gw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ip,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw qi.create("bad-app-name",{appName:String(o)});if(t||(t=cw()),!t)throw qi.create("no-options");const a=ud.get(o);if(a){if(Us(t,a.options)&&Us(i,a.config))return a;throw qi.create("duplicate-app",{appName:o})}const c=new LI(o);for(const f of Ap.values())c.addComponent(f);const h=new kA(t,i,c);return ud.set(o,h),h}function yw(n=Ip){const e=ud.get(n);if(!e&&n===Ip&&cw())return gw();if(!e)throw qi.create("no-app",{appName:n});return e}function Hi(n,e,t){var i;let o=(i=CA[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const h=[`Unable to register library "${o}" with version "${e}":`];a&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ii.warn(h.join(" "));return}ia(new zs(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const bA="firebase-heartbeat-database",NA=1,$l="firebase-heartbeat-store";let np=null;function vw(){return np||(np=QI(bA,NA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($l)}catch(t){console.warn(t)}}}}).catch(n=>{throw qi.create("idb-open",{originalErrorMessage:n.message})})),np}async function DA(n){try{const t=(await vw()).transaction($l),i=await t.objectStore($l).get(_w(n));return await t.done,i}catch(e){if(e instanceof ui)ii.warn(e.message);else{const t=qi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ii.warn(t.message)}}}async function Gv(n,e){try{const i=(await vw()).transaction($l,"readwrite");await i.objectStore($l).put(e,_w(n)),await i.done}catch(t){if(t instanceof ui)ii.warn(t.message);else{const i=qi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ii.warn(i.message)}}}function _w(n){return`${n.name}!${n.options.appId}`}/**
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
 */const OA=1024,VA=30;class LA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Kv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>VA){const c=FA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ii.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Kv(),{heartbeatsToSend:i,unsentEntries:o}=MA(this._heartbeatsCache.heartbeats),a=ld(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return ii.warn(t),""}}}function Kv(){return new Date().toISOString().substring(0,10)}function MA(n,e=OA){const t=[];let i=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),Qv(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Qv(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class jA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xI()?II().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await DA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Gv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Gv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Qv(n){return ld(JSON.stringify({version:2,heartbeats:n})).length}function FA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function UA(n){ia(new zs("platform-logger",e=>new JI(e),"PRIVATE")),ia(new zs("heartbeat",e=>new LA(e),"PRIVATE")),Hi(xp,Hv,n),Hi(xp,Hv,"esm2017"),Hi("fire-js","")}UA("");var Yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wi,ww;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,A){function I(){}I.prototype=A.prototype,P.D=A.prototype,P.prototype=new I,P.prototype.constructor=P,P.C=function(D,O,F){for(var k=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)k[_e-2]=arguments[_e];return A.prototype[O].apply(D,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,A,I){I||(I=0);var D=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)D[O]=A.charCodeAt(I++)|A.charCodeAt(I++)<<8|A.charCodeAt(I++)<<16|A.charCodeAt(I++)<<24;else for(O=0;16>O;++O)D[O]=A[I++]|A[I++]<<8|A[I++]<<16|A[I++]<<24;A=P.g[0],I=P.g[1],O=P.g[2];var F=P.g[3],k=A+(F^I&(O^F))+D[0]+3614090360&4294967295;A=I+(k<<7&4294967295|k>>>25),k=F+(O^A&(I^O))+D[1]+3905402710&4294967295,F=A+(k<<12&4294967295|k>>>20),k=O+(I^F&(A^I))+D[2]+606105819&4294967295,O=F+(k<<17&4294967295|k>>>15),k=I+(A^O&(F^A))+D[3]+3250441966&4294967295,I=O+(k<<22&4294967295|k>>>10),k=A+(F^I&(O^F))+D[4]+4118548399&4294967295,A=I+(k<<7&4294967295|k>>>25),k=F+(O^A&(I^O))+D[5]+1200080426&4294967295,F=A+(k<<12&4294967295|k>>>20),k=O+(I^F&(A^I))+D[6]+2821735955&4294967295,O=F+(k<<17&4294967295|k>>>15),k=I+(A^O&(F^A))+D[7]+4249261313&4294967295,I=O+(k<<22&4294967295|k>>>10),k=A+(F^I&(O^F))+D[8]+1770035416&4294967295,A=I+(k<<7&4294967295|k>>>25),k=F+(O^A&(I^O))+D[9]+2336552879&4294967295,F=A+(k<<12&4294967295|k>>>20),k=O+(I^F&(A^I))+D[10]+4294925233&4294967295,O=F+(k<<17&4294967295|k>>>15),k=I+(A^O&(F^A))+D[11]+2304563134&4294967295,I=O+(k<<22&4294967295|k>>>10),k=A+(F^I&(O^F))+D[12]+1804603682&4294967295,A=I+(k<<7&4294967295|k>>>25),k=F+(O^A&(I^O))+D[13]+4254626195&4294967295,F=A+(k<<12&4294967295|k>>>20),k=O+(I^F&(A^I))+D[14]+2792965006&4294967295,O=F+(k<<17&4294967295|k>>>15),k=I+(A^O&(F^A))+D[15]+1236535329&4294967295,I=O+(k<<22&4294967295|k>>>10),k=A+(O^F&(I^O))+D[1]+4129170786&4294967295,A=I+(k<<5&4294967295|k>>>27),k=F+(I^O&(A^I))+D[6]+3225465664&4294967295,F=A+(k<<9&4294967295|k>>>23),k=O+(A^I&(F^A))+D[11]+643717713&4294967295,O=F+(k<<14&4294967295|k>>>18),k=I+(F^A&(O^F))+D[0]+3921069994&4294967295,I=O+(k<<20&4294967295|k>>>12),k=A+(O^F&(I^O))+D[5]+3593408605&4294967295,A=I+(k<<5&4294967295|k>>>27),k=F+(I^O&(A^I))+D[10]+38016083&4294967295,F=A+(k<<9&4294967295|k>>>23),k=O+(A^I&(F^A))+D[15]+3634488961&4294967295,O=F+(k<<14&4294967295|k>>>18),k=I+(F^A&(O^F))+D[4]+3889429448&4294967295,I=O+(k<<20&4294967295|k>>>12),k=A+(O^F&(I^O))+D[9]+568446438&4294967295,A=I+(k<<5&4294967295|k>>>27),k=F+(I^O&(A^I))+D[14]+3275163606&4294967295,F=A+(k<<9&4294967295|k>>>23),k=O+(A^I&(F^A))+D[3]+4107603335&4294967295,O=F+(k<<14&4294967295|k>>>18),k=I+(F^A&(O^F))+D[8]+1163531501&4294967295,I=O+(k<<20&4294967295|k>>>12),k=A+(O^F&(I^O))+D[13]+2850285829&4294967295,A=I+(k<<5&4294967295|k>>>27),k=F+(I^O&(A^I))+D[2]+4243563512&4294967295,F=A+(k<<9&4294967295|k>>>23),k=O+(A^I&(F^A))+D[7]+1735328473&4294967295,O=F+(k<<14&4294967295|k>>>18),k=I+(F^A&(O^F))+D[12]+2368359562&4294967295,I=O+(k<<20&4294967295|k>>>12),k=A+(I^O^F)+D[5]+4294588738&4294967295,A=I+(k<<4&4294967295|k>>>28),k=F+(A^I^O)+D[8]+2272392833&4294967295,F=A+(k<<11&4294967295|k>>>21),k=O+(F^A^I)+D[11]+1839030562&4294967295,O=F+(k<<16&4294967295|k>>>16),k=I+(O^F^A)+D[14]+4259657740&4294967295,I=O+(k<<23&4294967295|k>>>9),k=A+(I^O^F)+D[1]+2763975236&4294967295,A=I+(k<<4&4294967295|k>>>28),k=F+(A^I^O)+D[4]+1272893353&4294967295,F=A+(k<<11&4294967295|k>>>21),k=O+(F^A^I)+D[7]+4139469664&4294967295,O=F+(k<<16&4294967295|k>>>16),k=I+(O^F^A)+D[10]+3200236656&4294967295,I=O+(k<<23&4294967295|k>>>9),k=A+(I^O^F)+D[13]+681279174&4294967295,A=I+(k<<4&4294967295|k>>>28),k=F+(A^I^O)+D[0]+3936430074&4294967295,F=A+(k<<11&4294967295|k>>>21),k=O+(F^A^I)+D[3]+3572445317&4294967295,O=F+(k<<16&4294967295|k>>>16),k=I+(O^F^A)+D[6]+76029189&4294967295,I=O+(k<<23&4294967295|k>>>9),k=A+(I^O^F)+D[9]+3654602809&4294967295,A=I+(k<<4&4294967295|k>>>28),k=F+(A^I^O)+D[12]+3873151461&4294967295,F=A+(k<<11&4294967295|k>>>21),k=O+(F^A^I)+D[15]+530742520&4294967295,O=F+(k<<16&4294967295|k>>>16),k=I+(O^F^A)+D[2]+3299628645&4294967295,I=O+(k<<23&4294967295|k>>>9),k=A+(O^(I|~F))+D[0]+4096336452&4294967295,A=I+(k<<6&4294967295|k>>>26),k=F+(I^(A|~O))+D[7]+1126891415&4294967295,F=A+(k<<10&4294967295|k>>>22),k=O+(A^(F|~I))+D[14]+2878612391&4294967295,O=F+(k<<15&4294967295|k>>>17),k=I+(F^(O|~A))+D[5]+4237533241&4294967295,I=O+(k<<21&4294967295|k>>>11),k=A+(O^(I|~F))+D[12]+1700485571&4294967295,A=I+(k<<6&4294967295|k>>>26),k=F+(I^(A|~O))+D[3]+2399980690&4294967295,F=A+(k<<10&4294967295|k>>>22),k=O+(A^(F|~I))+D[10]+4293915773&4294967295,O=F+(k<<15&4294967295|k>>>17),k=I+(F^(O|~A))+D[1]+2240044497&4294967295,I=O+(k<<21&4294967295|k>>>11),k=A+(O^(I|~F))+D[8]+1873313359&4294967295,A=I+(k<<6&4294967295|k>>>26),k=F+(I^(A|~O))+D[15]+4264355552&4294967295,F=A+(k<<10&4294967295|k>>>22),k=O+(A^(F|~I))+D[6]+2734768916&4294967295,O=F+(k<<15&4294967295|k>>>17),k=I+(F^(O|~A))+D[13]+1309151649&4294967295,I=O+(k<<21&4294967295|k>>>11),k=A+(O^(I|~F))+D[4]+4149444226&4294967295,A=I+(k<<6&4294967295|k>>>26),k=F+(I^(A|~O))+D[11]+3174756917&4294967295,F=A+(k<<10&4294967295|k>>>22),k=O+(A^(F|~I))+D[2]+718787259&4294967295,O=F+(k<<15&4294967295|k>>>17),k=I+(F^(O|~A))+D[9]+3951481745&4294967295,P.g[0]=P.g[0]+A&4294967295,P.g[1]=P.g[1]+(O+(k<<21&4294967295|k>>>11))&4294967295,P.g[2]=P.g[2]+O&4294967295,P.g[3]=P.g[3]+F&4294967295}i.prototype.u=function(P,A){A===void 0&&(A=P.length);for(var I=A-this.blockSize,D=this.B,O=this.h,F=0;F<A;){if(O==0)for(;F<=I;)o(this,P,F),F+=this.blockSize;if(typeof P=="string"){for(;F<A;)if(D[O++]=P.charCodeAt(F++),O==this.blockSize){o(this,D),O=0;break}}else for(;F<A;)if(D[O++]=P[F++],O==this.blockSize){o(this,D),O=0;break}}this.h=O,this.o+=A},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var A=1;A<P.length-8;++A)P[A]=0;var I=8*this.o;for(A=P.length-8;A<P.length;++A)P[A]=I&255,I/=256;for(this.u(P),P=Array(16),A=I=0;4>A;++A)for(var D=0;32>D;D+=8)P[I++]=this.g[A]>>>D&255;return P};function a(P,A){var I=h;return Object.prototype.hasOwnProperty.call(I,P)?I[P]:I[P]=A(P)}function c(P,A){this.h=A;for(var I=[],D=!0,O=P.length-1;0<=O;O--){var F=P[O]|0;D&&F==A||(I[O]=F,D=!1)}this.g=I}var h={};function f(P){return-128<=P&&128>P?a(P,function(A){return new c([A|0],0>A?-1:0)}):new c([P|0],0>P?-1:0)}function m(P){if(isNaN(P)||!isFinite(P))return E;if(0>P)return N(m(-P));for(var A=[],I=1,D=0;P>=I;D++)A[D]=P/I|0,I*=4294967296;return new c(A,0)}function _(P,A){if(P.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P.charAt(0)=="-")return N(_(P.substring(1),A));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=m(Math.pow(A,8)),D=E,O=0;O<P.length;O+=8){var F=Math.min(8,P.length-O),k=parseInt(P.substring(O,O+F),A);8>F?(F=m(Math.pow(A,F)),D=D.j(F).add(m(k))):(D=D.j(I),D=D.add(m(k)))}return D}var E=f(0),w=f(1),C=f(16777216);n=c.prototype,n.m=function(){if(V(this))return-N(this).m();for(var P=0,A=1,I=0;I<this.g.length;I++){var D=this.i(I);P+=(0<=D?D:4294967296+D)*A,A*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(R(this))return"0";if(V(this))return"-"+N(this).toString(P);for(var A=m(Math.pow(P,6)),I=this,D="";;){var O=J(I,A).g;I=M(I,O.j(A));var F=((0<I.g.length?I.g[0]:I.h)>>>0).toString(P);if(I=O,R(I))return F+D;for(;6>F.length;)F="0"+F;D=F+D}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function R(P){if(P.h!=0)return!1;for(var A=0;A<P.g.length;A++)if(P.g[A]!=0)return!1;return!0}function V(P){return P.h==-1}n.l=function(P){return P=M(this,P),V(P)?-1:R(P)?0:1};function N(P){for(var A=P.g.length,I=[],D=0;D<A;D++)I[D]=~P.g[D];return new c(I,~P.h).add(w)}n.abs=function(){return V(this)?N(this):this},n.add=function(P){for(var A=Math.max(this.g.length,P.g.length),I=[],D=0,O=0;O<=A;O++){var F=D+(this.i(O)&65535)+(P.i(O)&65535),k=(F>>>16)+(this.i(O)>>>16)+(P.i(O)>>>16);D=k>>>16,F&=65535,k&=65535,I[O]=k<<16|F}return new c(I,I[I.length-1]&-2147483648?-1:0)};function M(P,A){return P.add(N(A))}n.j=function(P){if(R(this)||R(P))return E;if(V(this))return V(P)?N(this).j(N(P)):N(N(this).j(P));if(V(P))return N(this.j(N(P)));if(0>this.l(C)&&0>P.l(C))return m(this.m()*P.m());for(var A=this.g.length+P.g.length,I=[],D=0;D<2*A;D++)I[D]=0;for(D=0;D<this.g.length;D++)for(var O=0;O<P.g.length;O++){var F=this.i(D)>>>16,k=this.i(D)&65535,_e=P.i(O)>>>16,Oe=P.i(O)&65535;I[2*D+2*O]+=k*Oe,z(I,2*D+2*O),I[2*D+2*O+1]+=F*Oe,z(I,2*D+2*O+1),I[2*D+2*O+1]+=k*_e,z(I,2*D+2*O+1),I[2*D+2*O+2]+=F*_e,z(I,2*D+2*O+2)}for(D=0;D<A;D++)I[D]=I[2*D+1]<<16|I[2*D];for(D=A;D<2*A;D++)I[D]=0;return new c(I,0)};function z(P,A){for(;(P[A]&65535)!=P[A];)P[A+1]+=P[A]>>>16,P[A]&=65535,A++}function G(P,A){this.g=P,this.h=A}function J(P,A){if(R(A))throw Error("division by zero");if(R(P))return new G(E,E);if(V(P))return A=J(N(P),A),new G(N(A.g),N(A.h));if(V(A))return A=J(P,N(A)),new G(N(A.g),A.h);if(30<P.g.length){if(V(P)||V(A))throw Error("slowDivide_ only works with positive integers.");for(var I=w,D=A;0>=D.l(P);)I=te(I),D=te(D);var O=Y(I,1),F=Y(D,1);for(D=Y(D,2),I=Y(I,2);!R(D);){var k=F.add(D);0>=k.l(P)&&(O=O.add(I),F=k),D=Y(D,1),I=Y(I,1)}return A=M(P,O.j(A)),new G(O,A)}for(O=E;0<=P.l(A);){for(I=Math.max(1,Math.floor(P.m()/A.m())),D=Math.ceil(Math.log(I)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),F=m(I),k=F.j(A);V(k)||0<k.l(P);)I-=D,F=m(I),k=F.j(A);R(F)&&(F=w),O=O.add(F),P=M(P,k)}return new G(O,P)}n.A=function(P){return J(this,P).h},n.and=function(P){for(var A=Math.max(this.g.length,P.g.length),I=[],D=0;D<A;D++)I[D]=this.i(D)&P.i(D);return new c(I,this.h&P.h)},n.or=function(P){for(var A=Math.max(this.g.length,P.g.length),I=[],D=0;D<A;D++)I[D]=this.i(D)|P.i(D);return new c(I,this.h|P.h)},n.xor=function(P){for(var A=Math.max(this.g.length,P.g.length),I=[],D=0;D<A;D++)I[D]=this.i(D)^P.i(D);return new c(I,this.h^P.h)};function te(P){for(var A=P.g.length+1,I=[],D=0;D<A;D++)I[D]=P.i(D)<<1|P.i(D-1)>>>31;return new c(I,P.h)}function Y(P,A){var I=A>>5;A%=32;for(var D=P.g.length-I,O=[],F=0;F<D;F++)O[F]=0<A?P.i(F+I)>>>A|P.i(F+I+1)<<32-A:P.i(F+I);return new c(O,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,ww=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=_,Wi=c}).apply(typeof Yv<"u"?Yv:typeof self<"u"?self:typeof window<"u"?window:{});var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ew,Rl,Tw,Wc,Cp,Sw,xw,Iw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,g,v){return u==Array.prototype||u==Object.prototype||(u[g]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dc=="object"&&Dc];for(var g=0;g<u.length;++g){var v=u[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,g){if(g)e:{var v=i;u=u.split(".");for(var x=0;x<u.length-1;x++){var $=u[x];if(!($ in v))break e;v=v[$]}u=u[u.length-1],x=v[u],g=g(x),g!=x&&g!=null&&e(v,u,{configurable:!0,writable:!0,value:g})}}function a(u,g){u instanceof String&&(u+="");var v=0,x=!1,$={next:function(){if(!x&&v<u.length){var Q=v++;return{value:g(Q,u[Q]),done:!1}}return x=!0,{done:!0,value:void 0}}};return $[Symbol.iterator]=function(){return $},$}o("Array.prototype.values",function(u){return u||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function f(u){var g=typeof u;return g=g!="object"?g:u?Array.isArray(u)?"array":g:"null",g=="array"||g=="object"&&typeof u.length=="number"}function m(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function _(u,g,v){return u.call.apply(u.bind,arguments)}function E(u,g,v){if(!u)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var $=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply($,x),u.apply(g,$)}}return function(){return u.apply(g,arguments)}}function w(u,g,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:E,w.apply(null,arguments)}function C(u,g){var v=Array.prototype.slice.call(arguments,1);return function(){var x=v.slice();return x.push.apply(x,arguments),u.apply(this,x)}}function R(u,g){function v(){}v.prototype=g.prototype,u.aa=g.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(x,$,Q){for(var ce=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)ce[Qe-2]=arguments[Qe];return g.prototype[$].apply(x,ce)}}function V(u){const g=u.length;if(0<g){const v=Array(g);for(let x=0;x<g;x++)v[x]=u[x];return v}return[]}function N(u,g){for(let v=1;v<arguments.length;v++){const x=arguments[v];if(f(x)){const $=u.length||0,Q=x.length||0;u.length=$+Q;for(let ce=0;ce<Q;ce++)u[$+ce]=x[ce]}else u.push(x)}}class M{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function z(u){return/^[\s\xa0]*$/.test(u)}function G(){var u=h.navigator;return u&&(u=u.userAgent)?u:""}function J(u){return J[" "](u),u}J[" "]=function(){};var te=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function Y(u,g,v){for(const x in u)g.call(v,u[x],x,u)}function P(u,g){for(const v in u)g.call(void 0,u[v],v,u)}function A(u){const g={};for(const v in u)g[v]=u[v];return g}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(u,g){let v,x;for(let $=1;$<arguments.length;$++){x=arguments[$];for(v in x)u[v]=x[v];for(let Q=0;Q<I.length;Q++)v=I[Q],Object.prototype.hasOwnProperty.call(x,v)&&(u[v]=x[v])}}function O(u){var g=1;u=u.split(":");const v=[];for(;0<g&&u.length;)v.push(u.shift()),g--;return u.length&&v.push(u.join(":")),v}function F(u){h.setTimeout(()=>{throw u},0)}function k(){var u=ae;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class _e{constructor(){this.h=this.g=null}add(g,v){const x=Oe.get();x.set(g,v),this.h?this.h.next=x:this.g=x,this.h=x}}var Oe=new M(()=>new de,u=>u.reset());class de{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,X=!1,ae=new _e,ue=()=>{const u=h.Promise.resolve(void 0);ge=()=>{u.then(U)}};var U=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(v){F(v)}var g=Oe;g.j(u),100>g.h&&(g.h++,u.next=g.g,g.g=u)}X=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};h.addEventListener("test",v,g),h.removeEventListener("test",v,g)}catch{}return u}();function be(u,g){if(ye.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,x=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget){if(te){e:{try{J(g.nodeName);var $=!0;break e}catch{}$=!1}$||(g=null)}}else v=="mouseover"?g=u.fromElement:v=="mouseout"&&(g=u.toElement);this.relatedTarget=g,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&be.aa.h.call(this)}}R(be,ye);var Ne={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(u,g,v,x,$){this.listener=u,this.proxy=null,this.src=g,this.type=v,this.capture=!!x,this.ha=$,this.key=++Me,this.da=this.fa=!1}function ut(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function rn(u){this.src=u,this.g={},this.h=0}rn.prototype.add=function(u,g,v,x,$){var Q=u.toString();u=this.g[Q],u||(u=this.g[Q]=[],this.h++);var ce=ci(u,g,x,$);return-1<ce?(g=u[ce],v||(g.fa=!1)):(g=new Be(g,this.src,Q,!!x,$),g.fa=v,u.push(g)),g};function Jt(u,g){var v=g.type;if(v in u.g){var x=u.g[v],$=Array.prototype.indexOf.call(x,g,void 0),Q;(Q=0<=$)&&Array.prototype.splice.call(x,$,1),Q&&(ut(g),u.g[v].length==0&&(delete u.g[v],u.h--))}}function ci(u,g,v,x){for(var $=0;$<u.length;++$){var Q=u[$];if(!Q.da&&Q.listener==g&&Q.capture==!!v&&Q.ha==x)return $}return-1}var as="closure_lm_"+(1e6*Math.random()|0),eo={};function Ra(u,g,v,x,$){if(Array.isArray(g)){for(var Q=0;Q<g.length;Q++)Ra(u,g[Q],v,x,$);return null}return v=ba(v),u&&u[je]?u.K(g,v,m(x)?!!x.capture:!1,$):Pa(u,g,v,!1,x,$)}function Pa(u,g,v,x,$,Q){if(!g)throw Error("Invalid event type");var ce=m($)?!!$.capture:!!$,Qe=no(u);if(Qe||(u[as]=Qe=new rn(u)),v=Qe.add(g,v,x,ce,Q),v.proxy)return v;if(x=gu(),v.proxy=x,x.src=u,x.listener=v,u.addEventListener)Re||($=ce),$===void 0&&($=!1),u.addEventListener(g.toString(),x,$);else if(u.attachEvent)u.attachEvent(br(g.toString()),x);else if(u.addListener&&u.removeListener)u.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return v}function gu(){function u(v){return g.call(u.src,u.listener,v)}const g=ka;return u}function to(u,g,v,x,$){if(Array.isArray(g))for(var Q=0;Q<g.length;Q++)to(u,g[Q],v,x,$);else x=m(x)?!!x.capture:!!x,v=ba(v),u&&u[je]?(u=u.i,g=String(g).toString(),g in u.g&&(Q=u.g[g],v=ci(Q,v,x,$),-1<v&&(ut(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete u.g[g],u.h--)))):u&&(u=no(u))&&(g=u.g[g.toString()],u=-1,g&&(u=ci(g,v,x,$)),(v=-1<u?g[u]:null)&&kr(v))}function kr(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[je])Jt(g.i,u);else{var v=u.type,x=u.proxy;g.removeEventListener?g.removeEventListener(v,x,u.capture):g.detachEvent?g.detachEvent(br(v),x):g.addListener&&g.removeListener&&g.removeListener(x),(v=no(g))?(Jt(v,u),v.h==0&&(v.src=null,g[as]=null)):ut(u)}}}function br(u){return u in eo?eo[u]:eo[u]="on"+u}function ka(u,g){if(u.da)u=!0;else{g=new be(g,this);var v=u.listener,x=u.ha||u.src;u.fa&&kr(u),u=v.call(x,g)}return u}function no(u){return u=u[as],u instanceof rn?u:null}var ro="__closure_events_fn_"+(1e9*Math.random()>>>0);function ba(u){return typeof u=="function"?u:(u[ro]||(u[ro]=function(g){return u.handleEvent(g)}),u[ro])}function wt(){K.call(this),this.i=new rn(this),this.M=this,this.F=null}R(wt,K),wt.prototype[je]=!0,wt.prototype.removeEventListener=function(u,g,v,x){to(this,u,g,v,x)};function Et(u,g){var v,x=u.F;if(x)for(v=[];x;x=x.F)v.push(x);if(u=u.M,x=g.type||g,typeof g=="string")g=new ye(g,u);else if(g instanceof ye)g.target=g.target||u;else{var $=g;g=new ye(x,u),D(g,$)}if($=!0,v)for(var Q=v.length-1;0<=Q;Q--){var ce=g.g=v[Q];$=Nr(ce,x,!0,g)&&$}if(ce=g.g=u,$=Nr(ce,x,!0,g)&&$,$=Nr(ce,x,!1,g)&&$,v)for(Q=0;Q<v.length;Q++)ce=g.g=v[Q],$=Nr(ce,x,!1,g)&&$}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var u=this.i,g;for(g in u.g){for(var v=u.g[g],x=0;x<v.length;x++)ut(v[x]);delete u.g[g],u.h--}}this.F=null},wt.prototype.K=function(u,g,v,x){return this.i.add(String(u),g,!1,v,x)},wt.prototype.L=function(u,g,v,x){return this.i.add(String(u),g,!0,v,x)};function Nr(u,g,v,x){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();for(var $=!0,Q=0;Q<g.length;++Q){var ce=g[Q];if(ce&&!ce.da&&ce.capture==v){var Qe=ce.listener,Tt=ce.ha||ce.src;ce.fa&&Jt(u.i,ce),$=Qe.call(Tt,x)!==!1&&$}}return $&&!x.defaultPrevented}function Na(u,g,v){if(typeof u=="function")v&&(u=w(u,v));else if(u&&typeof u.handleEvent=="function")u=w(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:h.setTimeout(u,g||0)}function di(u){u.g=Na(()=>{u.g=null,u.i&&(u.i=!1,di(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class ls extends K{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:di(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(u){K.call(this),this.h=u,this.g={}}R(us,K);var Da=[];function Oa(u){Y(u.g,function(g,v){this.g.hasOwnProperty(v)&&kr(g)},u),u.g={}}us.prototype.N=function(){us.aa.N.call(this),Oa(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Va=h.JSON.stringify,La=h.JSON.parse,Ma=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function cs(){}cs.prototype.h=null;function io(u){return u.h||(u.h=u.i())}function so(){}var An={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ar(){ye.call(this,"d")}R(ar,ye);function oo(){ye.call(this,"c")}R(oo,ye);var lr={},ja=null;function ds(){return ja=ja||new wt}lr.La="serverreachability";function Fa(u){ye.call(this,lr.La,u)}R(Fa,ye);function Dr(u){const g=ds();Et(g,new Fa(g))}lr.STAT_EVENT="statevent";function Ua(u,g){ye.call(this,lr.STAT_EVENT,u),this.stat=g}R(Ua,ye);function ht(u){const g=ds();Et(g,new Ua(g,u))}lr.Ma="timingevent";function ao(u,g){ye.call(this,lr.Ma,u),this.size=g}R(ao,ye);function Fn(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},g)}function hs(){this.g=!0}hs.prototype.xa=function(){this.g=!1};function fs(u,g,v,x,$,Q){u.info(function(){if(u.g)if(Q)for(var ce="",Qe=Q.split("&"),Tt=0;Tt<Qe.length;Tt++){var $e=Qe[Tt].split("=");if(1<$e.length){var Rt=$e[0];$e=$e[1];var mt=Rt.split("_");ce=2<=mt.length&&mt[1]=="type"?ce+(Rt+"="+$e+"&"):ce+(Rt+"=redacted&")}}else ce=null;else ce=Q;return"XMLHTTP REQ ("+x+") [attempt "+$+"]: "+g+`
`+v+`
`+ce})}function lo(u,g,v,x,$,Q,ce){u.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+$+"]: "+g+`
`+v+`
`+Q+" "+ce})}function Un(u,g,v,x){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+vh(u,v)+(x?" "+x:"")})}function za(u,g){u.info(function(){return"TIMEOUT: "+g})}hs.prototype.info=function(){};function vh(u,g){if(!u.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var x=v[u];if(!(2>x.length)){var $=x[1];if(Array.isArray($)&&!(1>$.length)){var Q=$[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ce=1;ce<$.length;ce++)$[ce]=""}}}}return Va(v)}catch{return g}}var uo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zn;function ps(){}R(ps,cs),ps.prototype.g=function(){return new XMLHttpRequest},ps.prototype.i=function(){return{}},zn=new ps;function Bn(u,g,v,x){this.j=u,this.i=g,this.l=v,this.R=x||1,this.U=new us(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vu}function vu(){this.i=null,this.g="",this.h=!1}var Ba={},co={};function ho(u,g,v){u.L=1,u.v=gi(vn(g)),u.m=v,u.P=!0,$a(u,null)}function $a(u,g){u.F=Date.now(),Xe(u),u.A=vn(u.v);var v=u.A,x=u.R;Array.isArray(x)||(x=[String(x)]),vi(v.i,"t",x),u.C=0,v=u.j.J,u.h=new vu,u.g=Lu(u.j,v?g:null,!u.m),0<u.O&&(u.M=new ls(w(u.Y,u,u.g),u.O)),g=u.U,v=u.g,x=u.ca;var $="readystatechange";Array.isArray($)||($&&(Da[0]=$.toString()),$=Da);for(var Q=0;Q<$.length;Q++){var ce=Ra(v,$[Q],x||g.handleEvent,!1,g.h||g);if(!ce)break;g.g[ce.key]=ce}g=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,g)):(u.u="GET",u.g.ea(u.A,u.u,null,g)),Dr(),fs(u.i,u.u,u.A,u.l,u.R,u.m)}Bn.prototype.ca=function(u){u=u.target;const g=this.M;g&&on(u)==3?g.j():this.Y(u)},Bn.prototype.Y=function(u){try{if(u==this.g)e:{const mt=on(this.g);var g=this.g.Ba();const Pn=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Qa(this.g)))){this.J||mt!=4||g==7||(g==8||0>=Pn?Dr(3):Dr(2)),ms(this);var v=this.g.Z();this.X=v;t:if(_u(this)){var x=Qa(this.g);u="";var $=x.length,Q=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),hi(this);var ce="";break t}this.h.i=new h.TextDecoder}for(g=0;g<$;g++)this.h.h=!0,u+=this.h.i.decode(x[g],{stream:!(Q&&g==$-1)});x.length=0,this.h.g+=u,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=v==200,lo(this.i,this.u,this.A,this.l,this.R,mt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,Tt=this.g;if((Qe=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Qe)){var $e=Qe;break t}}$e=null}if(v=$e)Un(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qa(this,v);else{this.o=!1,this.s=3,ht(12),Cn(this),hi(this);break e}}if(this.P){v=!0;let wn;for(;!this.J&&this.C<ce.length;)if(wn=_h(this,ce),wn==co){mt==4&&(this.s=4,ht(14),v=!1),Un(this.i,this.l,null,"[Incomplete Response]");break}else if(wn==Ba){this.s=4,ht(15),Un(this.i,this.l,ce,"[Invalid Chunk]"),v=!1;break}else Un(this.i,this.l,wn,null),qa(this,wn);if(_u(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||ce.length!=0||this.h.h||(this.s=1,ht(16),v=!1),this.o=this.o&&v,!v)Un(this.i,this.l,ce,"[Invalid Chunked Response]"),Cn(this),hi(this);else if(0<ce.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),Xa(Rt),Rt.M=!0,ht(11))}}else Un(this.i,this.l,ce,null),qa(this,ce);mt==4&&Cn(this),this.o&&!this.J&&(mt==4?So(this.j,this):(this.o=!1,Xe(this)))}else vo(this.g),v==400&&0<ce.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Cn(this),hi(this)}}}catch{}finally{}};function _u(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function _h(u,g){var v=u.C,x=g.indexOf(`
`,v);return x==-1?co:(v=Number(g.substring(v,x)),isNaN(v)?Ba:(x+=1,x+v>g.length?co:(g=g.slice(x,x+v),u.C=x+v,g)))}Bn.prototype.cancel=function(){this.J=!0,Cn(this)};function Xe(u){u.S=Date.now()+u.I,wu(u,u.I)}function wu(u,g){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Fn(w(u.ba,u),g)}function ms(u){u.B&&(h.clearTimeout(u.B),u.B=null)}Bn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(za(this.i,this.A),this.L!=2&&(Dr(),ht(17)),Cn(this),this.s=2,hi(this)):wu(this,this.S-u)};function hi(u){u.j.G==0||u.J||So(u.j,u)}function Cn(u){ms(u);var g=u.M;g&&typeof g.ma=="function"&&g.ma(),u.M=null,Oa(u.U),u.g&&(g=u.g,u.g=null,g.abort(),g.ma())}function qa(u,g){try{var v=u.j;if(v.G!=0&&(v.g==u||Zt(v.h,u))){if(!u.K&&Zt(v.h,u)&&v.G==3){try{var x=v.Da.g.parse(g)}catch{x=null}if(Array.isArray(x)&&x.length==3){var $=x;if($[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)To(v),Gn(v);else break e;Eo(v),ht(18)}}else v.za=$[1],0<v.za-v.T&&37500>$[2]&&v.F&&v.v==0&&!v.C&&(v.C=Fn(w(v.Za,v),6e3));if(1>=Tu(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else jr(v,11)}else if((u.K||v.g==u)&&To(v),!z(g))for($=v.Da.g.parse(g),g=0;g<$.length;g++){let $e=$[g];if(v.T=$e[0],$e=$e[1],v.G==2)if($e[0]=="c"){v.K=$e[1],v.ia=$e[2];const Rt=$e[3];Rt!=null&&(v.la=Rt,v.j.info("VER="+v.la));const mt=$e[4];mt!=null&&(v.Aa=mt,v.j.info("SVER="+v.Aa));const Pn=$e[5];Pn!=null&&typeof Pn=="number"&&0<Pn&&(x=1.5*Pn,v.L=x,v.j.info("backChannelRequestTimeoutMs_="+x)),x=v;const wn=u.g;if(wn){const Ts=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ts){var Q=x.h;Q.g||Ts.indexOf("spdy")==-1&&Ts.indexOf("quic")==-1&&Ts.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(Ha(Q,Q.h),Q.h=null))}if(x.D){const Io=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Io&&(x.ya=Io,Ye(x.I,x.D,Io))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),x=v;var ce=u;if(x.qa=Vu(x,x.J?x.ia:null,x.W),ce.K){Su(x.h,ce);var Qe=ce,Tt=x.L;Tt&&(Qe.I=Tt),Qe.B&&(ms(Qe),Xe(Qe)),x.g=ce}else Es(x);0<v.i.length&&hr(v)}else $e[0]!="stop"&&$e[0]!="close"||jr(v,7);else v.G==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?jr(v,7):Vt(v):$e[0]!="noop"&&v.l&&v.l.ta($e),v.v=0)}}Dr(4)}catch{}}var Eu=class{constructor(u,g){this.g=u,this.map=g}};function gs(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Tu(u){return u.h?1:u.g?u.g.size:0}function Zt(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function Ha(u,g){u.g?u.g.add(g):u.h=g}function Su(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}gs.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function xu(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const v of u.g.values())g=g.concat(v.D);return g}return V(u.i)}function fo(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(f(u)){for(var g=[],v=u.length,x=0;x<v;x++)g.push(u[x]);return g}g=[],v=0;for(x in u)g[v++]=u[x];return g}function po(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(f(u)||typeof u=="string"){var g=[];u=u.length;for(var v=0;v<u;v++)g.push(v);return g}g=[],v=0;for(const x in u)g[v++]=x;return g}}}function fi(u,g){if(u.forEach&&typeof u.forEach=="function")u.forEach(g,void 0);else if(f(u)||typeof u=="string")Array.prototype.forEach.call(u,g,void 0);else for(var v=po(u),x=fo(u),$=x.length,Q=0;Q<$;Q++)g.call(void 0,x[Q],v&&v[Q],u)}var ys=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wh(u,g){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var x=u[v].indexOf("="),$=null;if(0<=x){var Q=u[v].substring(0,x);$=u[v].substring(x+1)}else Q=u[v];g(Q,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function Or(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Or){this.h=u.h,vs(this,u.j),this.o=u.o,this.g=u.g,pi(this,u.s),this.l=u.l;var g=u.i,v=new ur;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),mi(this,v),this.m=u.m}else u&&(g=String(u).match(ys))?(this.h=!1,vs(this,g[1]||"",!0),this.o=ze(g[2]||""),this.g=ze(g[3]||"",!0),pi(this,g[4]),this.l=ze(g[5]||"",!0),mi(this,g[6]||"",!0),this.m=ze(g[7]||"")):(this.h=!1,this.i=new ur(null,this.h))}Or.prototype.toString=function(){var u=[],g=this.j;g&&u.push(yi(g,mo,!0),":");var v=this.g;return(v||g=="file")&&(u.push("//"),(g=this.o)&&u.push(yi(g,mo,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(yi(v,v.charAt(0)=="/"?Cu:Au,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",yi(v,Wa)),u.join("")};function vn(u){return new Or(u)}function vs(u,g,v){u.j=v?ze(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function pi(u,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);u.s=g}else u.s=null}function mi(u,g,v){g instanceof ur?(u.i=g,cr(u.i,u.h)):(v||(g=yi(g,Ru)),u.i=new ur(g,u.h))}function Ye(u,g,v){u.i.set(g,v)}function gi(u){return Ye(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ze(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function yi(u,g,v){return typeof u=="string"?(u=encodeURI(u).replace(g,Iu),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Iu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var mo=/[#\/\?@]/g,Au=/[#\?:]/g,Cu=/[#\?]/g,Ru=/[#\?@]/g,Wa=/#/g;function ur(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function Ot(u){u.g||(u.g=new Map,u.h=0,u.i&&wh(u.i,function(g,v){u.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=ur.prototype,n.add=function(u,g){Ot(this),this.i=null,u=Rn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(g),this.h+=1,this};function $n(u,g){Ot(u),g=Rn(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function qn(u,g){return Ot(u),g=Rn(u,g),u.g.has(g)}n.forEach=function(u,g){Ot(this),this.g.forEach(function(v,x){v.forEach(function($){u.call(g,$,x,this)},this)},this)},n.na=function(){Ot(this);const u=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let x=0;x<g.length;x++){const $=u[x];for(let Q=0;Q<$.length;Q++)v.push(g[x])}return v},n.V=function(u){Ot(this);let g=[];if(typeof u=="string")qn(this,u)&&(g=g.concat(this.g.get(Rn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)g=g.concat(u[v])}return g},n.set=function(u,g){return Ot(this),this.i=null,u=Rn(this,u),qn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},n.get=function(u,g){return u?(u=this.V(u),0<u.length?String(u[0]):g):g};function vi(u,g,v){$n(u,g),0<v.length&&(u.i=null,u.g.set(Rn(u,g),V(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var x=g[v];const Q=encodeURIComponent(String(x)),ce=this.V(x);for(x=0;x<ce.length;x++){var $=Q;ce[x]!==""&&($+="="+encodeURIComponent(String(ce[x]))),u.push($)}}return this.i=u.join("&")};function Rn(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function cr(u,g){g&&!u.j&&(Ot(u),u.i=null,u.g.forEach(function(v,x){var $=x.toLowerCase();x!=$&&($n(this,x),vi(this,$,v))},u)),u.j=g}function Eh(u,g){const v=new hs;if(h.Image){const x=new Image;x.onload=C(sn,v,"TestLoadImage: loaded",!0,g,x),x.onerror=C(sn,v,"TestLoadImage: error",!1,g,x),x.onabort=C(sn,v,"TestLoadImage: abort",!1,g,x),x.ontimeout=C(sn,v,"TestLoadImage: timeout",!1,g,x),h.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=u}else g(!1)}function Pu(u,g){const v=new hs,x=new AbortController,$=setTimeout(()=>{x.abort(),sn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:x.signal}).then(Q=>{clearTimeout($),Q.ok?sn(v,"TestPingServer: ok",!0,g):sn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout($),sn(v,"TestPingServer: error",!1,g)})}function sn(u,g,v,x,$){try{$&&($.onload=null,$.onerror=null,$.onabort=null,$.ontimeout=null),x(v)}catch{}}function Th(){this.g=new Ma}function ku(u,g,v){const x=v||"";try{fi(u,function($,Q){let ce=$;m($)&&(ce=Va($)),g.push(x+Q+"="+encodeURIComponent(ce))})}catch($){throw g.push(x+"type="+encodeURIComponent("_badmap")),$}}function Vr(u){this.l=u.Ub||null,this.j=u.eb||!1}R(Vr,cs),Vr.prototype.g=function(){return new _s(this.l,this.j)},Vr.prototype.i=function(u){return function(){return u}}({});function _s(u,g){wt.call(this),this.D=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(_s,wt),n=_s.prototype,n.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=g,this.readyState=1,Wn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(g.body=u),(this.D||h).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function bu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?Hn(this):Wn(this),this.readyState==3&&bu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Hn(this))},n.Qa=function(u){this.g&&(this.response=u,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Wn(u)}n.setRequestHeader=function(u,g){this.u.append(u,g)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=g.next();return u.join(`\r
`)};function Wn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Lr(u){let g="";return Y(u,function(v,x){g+=x,g+=":",g+=v,g+=`\r
`}),g}function _i(u,g,v){e:{for(x in v){var x=!1;break e}x=!0}x||(v=Lr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Ye(u,g,v))}function rt(u){wt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(rt,wt);var Sh=/^https?$/i,Ga=["POST","PUT"];n=rt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,g,v,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zn.g(),this.v=this.o?io(this.o):io(zn),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(Q){ws(this,Q);return}if(u=v||"",v=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var $ in x)v.set($,x[$]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const Q of x.keys())v.set(Q,x.get(Q));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),$=h.FormData&&u instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Ga,g,void 0))||x||$||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ce]of v)this.g.setRequestHeader(Q,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yo(this),this.u=!0,this.g.send(u),this.u=!1}catch(Q){ws(this,Q)}};function ws(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.m=5,go(u),_n(u)}function go(u){u.A||(u.A=!0,Et(u,"complete"),Et(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Et(this,"complete"),Et(this,"abort"),_n(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_n(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ka(this):this.bb())},n.bb=function(){Ka(this)};function Ka(u){if(u.h&&typeof c<"u"&&(!u.v[1]||on(u)!=4||u.Z()!=2)){if(u.u&&on(u)==4)Na(u.Ea,0,u);else if(Et(u,"readystatechange"),on(u)==4){u.h=!1;try{const ce=u.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var x;if(x=ce===0){var $=String(u.D).match(ys)[1]||null;!$&&h.self&&h.self.location&&($=h.self.location.protocol.slice(0,-1)),x=!Sh.test($?$.toLowerCase():"")}v=x}if(v)Et(u,"complete"),Et(u,"success");else{u.m=6;try{var Q=2<on(u)?u.g.statusText:""}catch{Q=""}u.l=Q+" ["+u.Z()+"]",go(u)}}finally{_n(u)}}}}function _n(u,g){if(u.g){yo(u);const v=u.g,x=u.v[0]?()=>{}:null;u.g=null,u.v=null,g||Et(u,"ready");try{v.onreadystatechange=x}catch{}}}function yo(u){u.I&&(h.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function on(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),La(g)}};function Qa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function vo(u){const g={};u=(u.g&&2<=on(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<u.length;x++){if(z(u[x]))continue;var v=O(u[x]);const $=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=g[$]||[];g[$]=Q,Q.push(v)}P(g,function(x){return x.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function dr(u,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||g}function Ya(u){this.Aa=0,this.i=[],this.j=new hs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=dr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=dr("baseRetryDelayMs",5e3,u),this.cb=dr("retryDelaySeedMs",1e4,u),this.Wa=dr("forwardChannelMaxRetries",2,u),this.wa=dr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new gs(u&&u.concurrentRequestLimit),this.Da=new Th,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ya.prototype,n.la=8,n.G=1,n.connect=function(u,g,v,x){ht(0),this.W=u,this.H=g||{},v&&x!==void 0&&(this.H.OSID=v,this.H.OAID=x),this.F=this.X,this.I=Vu(this,null,this.W),hr(this)};function Vt(u){if(_o(u),u.G==3){var g=u.U++,v=vn(u.I);if(Ye(v,"SID",u.K),Ye(v,"RID",g),Ye(v,"TYPE","terminate"),Mr(u,v),g=new Bn(u,u.j,g),g.L=2,g.v=gi(vn(v)),v=!1,h.navigator&&h.navigator.sendBeacon)try{v=h.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&h.Image&&(new Image().src=g.v,v=!0),v||(g.g=Lu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Xe(g)}Ou(u)}function Gn(u){u.g&&(Xa(u),u.g.cancel(),u.g=null)}function _o(u){Gn(u),u.u&&(h.clearTimeout(u.u),u.u=null),To(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&h.clearTimeout(u.s),u.s=null)}function hr(u){if(!yn(u.h)&&!u.s){u.s=!0;var g=u.Ga;ge||ue(),X||(ge(),X=!0),ae.add(g,u),u.B=0}}function xh(u,g){return Tu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=g.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Fn(w(u.Ga,u,g),Du(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const $=new Bn(this,this.j,u);let Q=this.o;if(this.S&&(Q?(Q=A(Q),D(Q,this.S)):Q=this.S),this.m!==null||this.O||($.H=Q,Q=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var x=this.i[v];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(g+=x,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=wi(this,$,g),v=vn(this.I),Ye(v,"RID",u),Ye(v,"CVER",22),this.D&&Ye(v,"X-HTTP-Session-Id",this.D),Mr(this,v),Q&&(this.O?g="headers="+encodeURIComponent(String(Lr(Q)))+"&"+g:this.m&&_i(v,this.m,Q)),Ha(this.h,$),this.Ua&&Ye(v,"TYPE","init"),this.P?(Ye(v,"$req",g),Ye(v,"SID","null"),$.T=!0,ho($,v,null)):ho($,v,g),this.G=2}}else this.G==3&&(u?wo(this,u):this.i.length==0||yn(this.h)||wo(this))};function wo(u,g){var v;g?v=g.l:v=u.U++;const x=vn(u.I);Ye(x,"SID",u.K),Ye(x,"RID",v),Ye(x,"AID",u.T),Mr(u,x),u.m&&u.o&&_i(x,u.m,u.o),v=new Bn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),g&&(u.i=g.D.concat(u.i)),g=wi(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ha(u.h,v),ho(v,x,g)}function Mr(u,g){u.H&&Y(u.H,function(v,x){Ye(g,x,v)}),u.l&&fi({},function(v,x){Ye(g,x,v)})}function wi(u,g,v){v=Math.min(u.i.length,v);var x=u.l?w(u.l.Na,u.l,u):null;e:{var $=u.i;let Q=-1;for(;;){const ce=["count="+v];Q==-1?0<v?(Q=$[0].g,ce.push("ofs="+Q)):Q=0:ce.push("ofs="+Q);let Qe=!0;for(let Tt=0;Tt<v;Tt++){let $e=$[Tt].g;const Rt=$[Tt].map;if($e-=Q,0>$e)Q=Math.max(0,$[Tt].g-100),Qe=!1;else try{ku(Rt,ce,"req"+$e+"_")}catch{x&&x(Rt)}}if(Qe){x=ce.join("&");break e}}}return u=u.i.splice(0,v),g.D=u,x}function Es(u){if(!u.g&&!u.u){u.Y=1;var g=u.Fa;ge||ue(),X||(ge(),X=!0),ae.add(g,u),u.v=0}}function Eo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Fn(w(u.Fa,u),Du(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Nu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Fn(w(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),Gn(this),Nu(this))};function Xa(u){u.A!=null&&(h.clearTimeout(u.A),u.A=null)}function Nu(u){u.g=new Bn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var g=vn(u.qa);Ye(g,"RID","rpc"),Ye(g,"SID",u.K),Ye(g,"AID",u.T),Ye(g,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ye(g,"TO",u.ja),Ye(g,"TYPE","xmlhttp"),Mr(u,g),u.m&&u.o&&_i(g,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=gi(vn(g)),v.m=null,v.P=!0,$a(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Gn(this),Eo(this),ht(19))};function To(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function So(u,g){var v=null;if(u.g==g){To(u),Xa(u),u.g=null;var x=2}else if(Zt(u.h,g))v=g.D,Su(u.h,g),x=1;else return;if(u.G!=0){if(g.o)if(x==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var $=u.B;x=ds(),Et(x,new ao(x,v)),hr(u)}else Es(u);else if($=g.s,$==3||$==0&&0<g.X||!(x==1&&xh(u,g)||x==2&&Eo(u)))switch(v&&0<v.length&&(g=u.h,g.i=g.i.concat(v)),$){case 1:jr(u,5);break;case 4:jr(u,10);break;case 3:jr(u,6);break;default:jr(u,2)}}}function Du(u,g){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*g}function jr(u,g){if(u.j.info("Error code "+g),g==2){var v=w(u.fb,u),x=u.Xa;const $=!x;x=new Or(x||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||vs(x,"https"),gi(x),$?Eh(x.toString(),v):Pu(x.toString(),v)}else ht(2);u.G=0,u.l&&u.l.sa(g),Ou(u),_o(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Ou(u){if(u.G=0,u.ka=[],u.l){const g=xu(u.h);(g.length!=0||u.i.length!=0)&&(N(u.ka,g),N(u.ka,u.i),u.h.i.length=0,V(u.i),u.i.length=0),u.l.ra()}}function Vu(u,g,v){var x=v instanceof Or?vn(v):new Or(v);if(x.g!="")g&&(x.g=g+"."+x.g),pi(x,x.s);else{var $=h.location;x=$.protocol,g=g?g+"."+$.hostname:$.hostname,$=+$.port;var Q=new Or(null);x&&vs(Q,x),g&&(Q.g=g),$&&pi(Q,$),v&&(Q.l=v),x=Q}return v=u.D,g=u.ya,v&&g&&Ye(x,v,g),Ye(x,"VER",u.la),Mr(u,x),x}function Lu(u,g,v){if(g&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Ca&&!u.pa?new rt(new Vr({eb:v})):new rt(u.pa),g.Ha(u.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ja(){}n=Ja.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xo(){}xo.prototype.g=function(u,g){return new en(u,g)};function en(u,g){wt.call(this),this.g=new Ya(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(u?u["X-WebChannel-Client-Profile"]=g.va:u={"X-WebChannel-Client-Profile":g.va}),this.g.S=u,(u=g&&g.Sb)&&!z(u)&&(this.g.m=u),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!z(g)&&(this.g.D=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new fr(this)}R(en,wt),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){Vt(this.g)},en.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=Va(u),u=v);g.i.push(new Eu(g.Ya++,u)),g.G==3&&hr(g)},en.prototype.N=function(){this.g.l=null,delete this.j,Vt(this.g),delete this.g,en.aa.N.call(this)};function Mu(u){ar.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){e:{for(const v in g){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}R(Mu,ar);function ju(){oo.call(this),this.status=1}R(ju,oo);function fr(u){this.g=u}R(fr,Ja),fr.prototype.ua=function(){Et(this.g,"a")},fr.prototype.ta=function(u){Et(this.g,new Mu(u))},fr.prototype.sa=function(u){Et(this.g,new ju)},fr.prototype.ra=function(){Et(this.g,"b")},xo.prototype.createWebChannel=xo.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,Iw=function(){return new xo},xw=function(){return ds()},Sw=lr,Cp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},uo.NO_ERROR=0,uo.TIMEOUT=8,uo.HTTP_ERROR=6,Wc=uo,yu.COMPLETE="complete",Tw=yu,so.EventType=An,An.OPEN="a",An.CLOSE="b",An.ERROR="c",An.MESSAGE="d",wt.prototype.listen=wt.prototype.K,Rl=so,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,Ew=rt}).apply(typeof Dc<"u"?Dc:typeof self<"u"?self:typeof window<"u"?window:{});const Xv="@firebase/firestore",Jv="4.7.17";/**
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
 */class Gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gt.UNAUTHENTICATED=new Gt(null),Gt.GOOGLE_CREDENTIALS=new Gt("google-credentials-uid"),Gt.FIRST_PARTY=new Gt("first-party-uid"),Gt.MOCK_USER=new Gt("mock-user");/**
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
 */let Ta="11.9.0";/**
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
 */const Bs=new pm("@firebase/firestore");function Go(){return Bs.logLevel}function fe(n,...e){if(Bs.logLevel<=Fe.DEBUG){const t=e.map(ym);Bs.debug(`Firestore (${Ta}): ${n}`,...t)}}function si(n,...e){if(Bs.logLevel<=Fe.ERROR){const t=e.map(ym);Bs.error(`Firestore (${Ta}): ${n}`,...t)}}function sa(n,...e){if(Bs.logLevel<=Fe.WARN){const t=e.map(ym);Bs.warn(`Firestore (${Ta}): ${n}`,...t)}}function ym(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Ae(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Aw(n,i,t)}function Aw(n,e,t){let i=`FIRESTORE (${Ta}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw si(i),new Error(i)}function Ke(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Aw(e,o,i)}function ke(n,e){return n}/**
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
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends ui{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Cw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Gt.UNAUTHENTICATED))}shutdown(){}}class BA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class $A{constructor(e){this.t=e,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0,42304);let i=this.i;const o=f=>this.i!==i?(i=this.i,t(f)):Promise.resolve();let a=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Zr,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await o(this.currentUser)})},h=f=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Zr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ke(typeof i.accessToken=="string",31837,{l:i}),new Cw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new Gt(e)}}class qA{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class HA{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new qA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ln(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0,3512);const i=a=>{a.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,fe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};const o=a=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Zv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Zv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function GA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Rw(){return new TextEncoder}/**
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
 */class Pw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=GA(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%62))}return i}}function Ve(n,e){return n<e?-1:n>e?1:0}function Rp(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ve(i,o);{const a=Rw(),c=KA(a.encode(e_(n,t)),a.encode(e_(e,t)));return c!==0?c:Ve(i,o)}}t+=i>65535?2:1}return Ve(n.length,e.length)}function e_(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function KA(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ve(n[t],e[t]);return Ve(n.length,e.length)}function oa(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */const t_=-62135596800,n_=1e6;class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*n_);return new It(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new me(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new me(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<t_)throw new me(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/n_}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-t_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Pe{static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new It(0,0))}static max(){return new Pe(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const r_="__name__";class vr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ae(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=vr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Ve(e.length,t.length)}static compareSegments(e,t){const i=vr.isNumericId(e),o=vr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?vr.extractNumericId(e).compare(vr.extractNumericId(t)):Rp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wi.fromString(e.substring(4,e.length-2))}}class nt extends vr{construct(e,t,i){return new nt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new me(ee.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new nt(t)}static emptyPath(){return new nt([])}}const QA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends vr{construct(e,t,i){return new Ut(e,t,i)}static isValidIdentifier(e){return QA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===r_}static keyField(){return new Ut([r_])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new me(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new me(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new me(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=f,o+=2}else h==="`"?(c=!c,o++):h!=="."||c?(i+=h,o++):(a(),o++)}if(a(),c)throw new me(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(t)}static emptyPath(){return new Ut([])}}/**
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
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(nt.fromString(e))}static fromName(e){return new Te(nt.fromString(e).popFirst(5))}static empty(){return new Te(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new nt(e.slice()))}}/**
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
 */const ql=-1;function YA(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Pe.fromTimestamp(i===1e9?new It(t+1,0):new It(t,i));return new Qi(o,Te.empty(),e)}function XA(n){return new Qi(n.readTime,n.key,ql)}class Qi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Qi(Pe.min(),Te.empty(),ql)}static max(){return new Qi(Pe.max(),Te.empty(),ql)}}function JA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(n.documentKey,e.documentKey),t!==0?t:Ve(n.largestBatchId,e.largestBatchId))}/**
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
 */const ZA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Sa(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==ZA)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,i)=>{t(e)})}static reject(e){return new Z((t,i)=>{i(e)})}static waitFor(e){return new Z((t,i)=>{let o=0,a=0,c=!1;e.forEach(h=>{++o,h.next(()=>{++a,c&&a===o&&t()},f=>i(f))}),c=!0,a===o&&t()})}static or(e){let t=Z.resolve(!1);for(const i of e)t=t.next(o=>o?Z.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,a)=>{i.push(t.call(this,o,a))}),this.waitFor(i)}static mapArray(e,t){return new Z((i,o)=>{const a=e.length,c=new Array(a);let h=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next(_=>{c[m]=_,++h,h===a&&i(c)},_=>o(_))}})}static doWhile(e,t){return new Z((i,o)=>{const a=()=>{e()===!0?t().next(()=>{a()},o):i()};a()})}}function tC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function xa(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class zd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>t.writeSequenceNumber(i))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}zd.le=-1;/**
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
 */const vm=-1;function Bd(n){return n==null}function cd(n){return n===0&&1/n==-1/0}function nC(n){return typeof n=="number"&&Number.isInteger(n)&&!cd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const kw="";function rC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=i_(e)),e=iC(n.get(t),e);return i_(e)}function iC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case kw:t+="";break;default:t+=a}}return t}function i_(n){return n+kw+""}/**
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
 */function s_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function rs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class lt{constructor(e,t){this.comparator=e,this.root=t||Ft.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oc(this.root,e,this.comparator,!0)}}class Oc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??Ft.RED,this.left=o??Ft.EMPTY,this.right=a??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new Ft(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ft.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,i,o,a){return this}insert(e,t,i){return new Ft(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class At{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new o_(this.data.getIterator())}getIteratorFrom(e){return new o_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new At(this.comparator);return t.data=e,t}}class o_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new In([])}unionWith(e){let t=new At(Ut.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new In(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return oa(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Nw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class zt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Nw("Invalid base64 string: "+a):a}}(e);return new zt(t)}static fromUint8Array(e){const t=function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a}(e);return new zt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zt.EMPTY_BYTE_STRING=new zt("");const sC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yi(n){if(Ke(!!n,39018),typeof n=="string"){let e=0;const t=sC.exec(n);if(Ke(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:pt(n.seconds),nanos:pt(n.nanos)}}function pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xi(n){return typeof n=="string"?zt.fromBase64String(n):zt.fromUint8Array(n)}/**
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
 */const Dw="server_timestamp",Ow="__type__",Vw="__previous_value__",Lw="__local_write_time__";function _m(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ow])===null||t===void 0?void 0:t.stringValue)===Dw}function $d(n){const e=n.mapValue.fields[Vw];return _m(e)?$d(e):e}function Hl(n){const e=Yi(n.mapValue.fields[Lw].timestampValue);return new It(e.seconds,e.nanos)}/**
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
 */class oC{constructor(e,t,i,o,a,c,h,f,m,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=_}}const dd="(default)";class Wl{constructor(e,t){this.projectId=e,this.database=t||dd}static empty(){return new Wl("","")}get isDefaultDatabase(){return this.database===dd}isEqual(e){return e instanceof Wl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Mw="__type__",aC="__max__",Vc={mapValue:{}},jw="__vector__",hd="value";function Ji(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_m(n)?4:uC(n)?9007199254740991:lC(n)?10:11:Ae(28295,{value:n})}function Ar(n,e){if(n===e)return!0;const t=Ji(n);if(t!==Ji(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hl(n).isEqual(Hl(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=Yi(o.timestampValue),h=Yi(a.timestampValue);return c.seconds===h.seconds&&c.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return Xi(o.bytesValue).isEqual(Xi(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return pt(o.geoPointValue.latitude)===pt(a.geoPointValue.latitude)&&pt(o.geoPointValue.longitude)===pt(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return pt(o.integerValue)===pt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=pt(o.doubleValue),h=pt(a.doubleValue);return c===h?cd(c)===cd(h):isNaN(c)&&isNaN(h)}return!1}(n,e);case 9:return oa(n.arrayValue.values||[],e.arrayValue.values||[],Ar);case 10:case 11:return function(o,a){const c=o.mapValue.fields||{},h=a.mapValue.fields||{};if(s_(c)!==s_(h))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(h[f]===void 0||!Ar(c[f],h[f])))return!1;return!0}(n,e);default:return Ae(52216,{left:n})}}function Gl(n,e){return(n.values||[]).find(t=>Ar(t,e))!==void 0}function aa(n,e){if(n===e)return 0;const t=Ji(n),i=Ji(e);if(t!==i)return Ve(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(n.booleanValue,e.booleanValue);case 2:return function(a,c){const h=pt(a.integerValue||a.doubleValue),f=pt(c.integerValue||c.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,e);case 3:return a_(n.timestampValue,e.timestampValue);case 4:return a_(Hl(n),Hl(e));case 5:return Rp(n.stringValue,e.stringValue);case 6:return function(a,c){const h=Xi(a),f=Xi(c);return h.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,c){const h=a.split("/"),f=c.split("/");for(let m=0;m<h.length&&m<f.length;m++){const _=Ve(h[m],f[m]);if(_!==0)return _}return Ve(h.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,c){const h=Ve(pt(a.latitude),pt(c.latitude));return h!==0?h:Ve(pt(a.longitude),pt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return l_(n.arrayValue,e.arrayValue);case 10:return function(a,c){var h,f,m,_;const E=a.fields||{},w=c.fields||{},C=(h=E[hd])===null||h===void 0?void 0:h.arrayValue,R=(f=w[hd])===null||f===void 0?void 0:f.arrayValue,V=Ve(((m=C==null?void 0:C.values)===null||m===void 0?void 0:m.length)||0,((_=R==null?void 0:R.values)===null||_===void 0?void 0:_.length)||0);return V!==0?V:l_(C,R)}(n.mapValue,e.mapValue);case 11:return function(a,c){if(a===Vc.mapValue&&c===Vc.mapValue)return 0;if(a===Vc.mapValue)return 1;if(c===Vc.mapValue)return-1;const h=a.fields||{},f=Object.keys(h),m=c.fields||{},_=Object.keys(m);f.sort(),_.sort();for(let E=0;E<f.length&&E<_.length;++E){const w=Rp(f[E],_[E]);if(w!==0)return w;const C=aa(h[f[E]],m[_[E]]);if(C!==0)return C}return Ve(f.length,_.length)}(n.mapValue,e.mapValue);default:throw Ae(23264,{Pe:t})}}function a_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ve(n,e);const t=Yi(n),i=Yi(e),o=Ve(t.seconds,i.seconds);return o!==0?o:Ve(t.nanos,i.nanos)}function l_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=aa(t[o],i[o]);if(a)return a}return Ve(t.length,i.length)}function la(n){return Pp(n)}function Pp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Yi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Te.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=Pp(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const c of i)a?a=!1:o+=",",o+=`${c}:${Pp(t.fields[c])}`;return o+"}"}(n.mapValue):Ae(61005,{value:n})}function Gc(n){switch(Ji(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$d(n);return e?16+Gc(e):16;case 5:return 2*n.stringValue.length;case 6:return Xi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,a)=>o+Gc(a),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return rs(i.fields,(a,c)=>{o+=a.length+Gc(c)}),o}(n.mapValue);default:throw Ae(13486,{value:n})}}function u_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function kp(n){return!!n&&"integerValue"in n}function wm(n){return!!n&&"arrayValue"in n}function c_(n){return!!n&&"nullValue"in n}function d_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kc(n){return!!n&&"mapValue"in n}function lC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mw])===null||t===void 0?void 0:t.stringValue)===jw}function Ll(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return rs(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ll(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ll(n.arrayValue.values[t]);return e}return Object.assign({},n)}function uC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===aC}/**
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
 */class pn{constructor(e){this.value=e}static empty(){return new pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Kc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ll(t)}setAll(e){let t=Ut.emptyPath(),i={},o=[];e.forEach((c,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,i,o),i={},o=[],t=h.popLast()}c?i[h.lastSegment()]=Ll(c):o.push(h.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());Kc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Kc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){rs(t,(o,a)=>e[o]=a);for(const o of i)delete e[o]}clone(){return new pn(Ll(this.value))}}function Fw(n){const e=[];return rs(n.fields,(t,i)=>{const o=new Ut([t]);if(Kc(i)){const a=Fw(i.mapValue).fields;if(a.length===0)e.push(o);else for(const c of a)e.push(o.child(c))}else e.push(o)}),new In(e)}/**
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
 */class Kt{constructor(e,t,i,o,a,c,h){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=c,this.documentState=h}static newInvalidDocument(e){return new Kt(e,0,Pe.min(),Pe.min(),Pe.min(),pn.empty(),0)}static newFoundDocument(e,t,i,o){return new Kt(e,1,t,Pe.min(),i,o,0)}static newNoDocument(e,t){return new Kt(e,2,t,Pe.min(),Pe.min(),pn.empty(),0)}static newUnknownDocument(e,t){return new Kt(e,3,t,Pe.min(),Pe.min(),pn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fd{constructor(e,t){this.position=e,this.inclusive=t}}function h_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],c=n.position[o];if(a.field.isKeyField()?i=Te.comparator(Te.fromName(c.referenceValue),t.key):i=aa(c,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function f_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ar(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class pd{constructor(e,t="asc"){this.field=e,this.dir=t}}function cC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Uw{}class _t extends Uw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new hC(e,t,i):t==="array-contains"?new mC(e,i):t==="in"?new gC(e,i):t==="not-in"?new yC(e,i):t==="array-contains-any"?new vC(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new fC(e,i):new pC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(aa(t,this.value)):t!==null&&Ji(this.value)===Ji(t)&&this.matchesComparison(aa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sr extends Uw{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new sr(e,t)}matches(e){return zw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function zw(n){return n.op==="and"}function Bw(n){return dC(n)&&zw(n)}function dC(n){for(const e of n.filters)if(e instanceof sr)return!1;return!0}function bp(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+la(n.value);if(Bw(n))return n.filters.map(e=>bp(e)).join(",");{const e=n.filters.map(t=>bp(t)).join(",");return`${n.op}(${e})`}}function $w(n,e){return n instanceof _t?function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&Ar(i.value,o.value)}(n,e):n instanceof sr?function(i,o){return o instanceof sr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((a,c,h)=>a&&$w(c,o.filters[h]),!0):!1}(n,e):void Ae(19439)}function qw(n){return n instanceof _t?function(t){return`${t.field.canonicalString()} ${t.op} ${la(t.value)}`}(n):n instanceof sr?function(t){return t.op.toString()+" {"+t.getFilters().map(qw).join(" ,")+"}"}(n):"Filter"}class hC extends _t{constructor(e,t,i){super(e,t,i),this.key=Te.fromName(i.referenceValue)}matches(e){const t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}}class fC extends _t{constructor(e,t){super(e,"in",t),this.keys=Hw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class pC extends _t{constructor(e,t){super(e,"not-in",t),this.keys=Hw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Te.fromName(i.referenceValue))}class mC extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wm(t)&&Gl(t.arrayValue,this.value)}}class gC extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gl(this.value.arrayValue,t)}}class yC extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Gl(this.value.arrayValue,t)}}class vC extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wm(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Gl(this.value.arrayValue,i))}}/**
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
 */class _C{constructor(e,t=null,i=[],o=[],a=null,c=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=c,this.endAt=h,this.Ie=null}}function p_(n,e=null,t=[],i=[],o=null,a=null,c=null){return new _C(n,e,t,i,o,a,c)}function Em(n){const e=ke(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>bp(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),Bd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>la(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>la(i)).join(",")),e.Ie=t}return e.Ie}function Tm(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!cC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$w(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!f_(n.startAt,e.startAt)&&f_(n.endAt,e.endAt)}function Np(n){return Te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class su{constructor(e,t=null,i=[],o=[],a=null,c="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=c,this.startAt=h,this.endAt=f,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function wC(n,e,t,i,o,a,c,h){return new su(n,e,t,i,o,a,c,h)}function qd(n){return new su(n)}function m_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ww(n){return n.collectionGroup!==null}function Ml(n){const e=ke(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ee.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let h=new At(Ut.comparator);return c.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(h=h.add(m.field))})}),h})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ee.push(new pd(a,i))}),t.has(Ut.keyField().canonicalString())||e.Ee.push(new pd(Ut.keyField(),i))}return e.Ee}function Tr(n){const e=ke(n);return e.de||(e.de=EC(e,Ml(n))),e.de}function EC(n,e){if(n.limitType==="F")return p_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new pd(o.field,a)});const t=n.endAt?new fd(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new fd(n.startAt.position,n.startAt.inclusive):null;return p_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Dp(n,e){const t=n.filters.concat([e]);return new su(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Op(n,e,t){return new su(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hd(n,e){return Tm(Tr(n),Tr(e))&&n.limitType===e.limitType}function Gw(n){return`${Em(Tr(n))}|lt:${n.limitType}`}function Ko(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>qw(o)).join(", ")}]`),Bd(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>la(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>la(o)).join(",")),`Target(${i})`}(Tr(n))}; limitType=${n.limitType})`}function Wd(n,e){return e.isFoundDocument()&&function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):Te.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(n,e)&&function(i,o){for(const a of Ml(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,h,f){const m=h_(c,h,f);return c.inclusive?m<=0:m<0}(i.startAt,Ml(i),o)||i.endAt&&!function(c,h,f){const m=h_(c,h,f);return c.inclusive?m>=0:m>0}(i.endAt,Ml(i),o))}(n,e)}function TC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kw(n){return(e,t)=>{let i=!1;for(const o of Ml(n)){const a=SC(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function SC(n,e,t){const i=n.field.isKeyField()?Te.comparator(e.key,t.key):function(a,c,h){const f=c.data.field(a),m=h.data.field(a);return f!==null&&m!==null?aa(f,m):Ae(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ae(19790,{direction:n.dir})}}/**
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
 */class Ys{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,(t,i)=>{for(const[o,a]of i)e(o,a)})}isEmpty(){return bw(this.inner)}size(){return this.innerSize}}/**
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
 */const xC=new lt(Te.comparator);function oi(){return xC}const Qw=new lt(Te.comparator);function Pl(...n){let e=Qw;for(const t of n)e=e.insert(t.key,t);return e}function Yw(n){let e=Qw;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Ls(){return jl()}function Xw(){return jl()}function jl(){return new Ys(n=>n.toString(),(n,e)=>n.isEqual(e))}const IC=new lt(Te.comparator),AC=new At(Te.comparator);function Ue(...n){let e=AC;for(const t of n)e=e.add(t);return e}const CC=new At(Ve);function RC(){return CC}/**
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
 */function Sm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cd(e)?"-0":e}}function Jw(n){return{integerValue:""+n}}function PC(n,e){return nC(e)?Jw(e):Sm(n,e)}/**
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
 */class Gd{constructor(){this._=void 0}}function kC(n,e,t){return n instanceof md?function(o,a){const c={fields:{[Ow]:{stringValue:Dw},[Lw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&_m(a)&&(a=$d(a)),a&&(c.fields[Vw]=a),{mapValue:c}}(t,e):n instanceof Kl?eE(n,e):n instanceof Ql?tE(n,e):function(o,a){const c=Zw(o,a),h=g_(c)+g_(o.Re);return kp(c)&&kp(o.Re)?Jw(h):Sm(o.serializer,h)}(n,e)}function bC(n,e,t){return n instanceof Kl?eE(n,e):n instanceof Ql?tE(n,e):t}function Zw(n,e){return n instanceof gd?function(i){return kp(i)||function(a){return!!a&&"doubleValue"in a}(i)}(e)?e:{integerValue:0}:null}class md extends Gd{}class Kl extends Gd{constructor(e){super(),this.elements=e}}function eE(n,e){const t=nE(e);for(const i of n.elements)t.some(o=>Ar(o,i))||t.push(i);return{arrayValue:{values:t}}}class Ql extends Gd{constructor(e){super(),this.elements=e}}function tE(n,e){let t=nE(e);for(const i of n.elements)t=t.filter(o=>!Ar(o,i));return{arrayValue:{values:t}}}class gd extends Gd{constructor(e,t){super(),this.serializer=e,this.Re=t}}function g_(n){return pt(n.integerValue||n.doubleValue)}function nE(n){return wm(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function NC(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof Kl&&o instanceof Kl||i instanceof Ql&&o instanceof Ql?oa(i.elements,o.elements,Ar):i instanceof gd&&o instanceof gd?Ar(i.Re,o.Re):i instanceof md&&o instanceof md}(n.transform,e.transform)}class DC{constructor(e,t){this.version=e,this.transformResults=t}}class Mn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Kd{}function rE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xm(n.key,Mn.none()):new ou(n.key,n.data,Mn.none());{const t=n.data,i=pn.empty();let o=new At(Ut.comparator);for(let a of e.fields)if(!o.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?i.delete(a):i.set(a,c),o=o.add(a)}return new is(n.key,i,new In(o.toArray()),Mn.none())}}function OC(n,e,t){n instanceof ou?function(o,a,c){const h=o.value.clone(),f=v_(o.fieldTransforms,a,c.transformResults);h.setAll(f),a.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(n,e,t):n instanceof is?function(o,a,c){if(!Qc(o.precondition,a))return void a.convertToUnknownDocument(c.version);const h=v_(o.fieldTransforms,a,c.transformResults),f=a.data;f.setAll(iE(o)),f.setAll(h),a.convertToFoundDocument(c.version,f).setHasCommittedMutations()}(n,e,t):function(o,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Fl(n,e,t,i){return n instanceof ou?function(a,c,h,f){if(!Qc(a.precondition,c))return h;const m=a.value.clone(),_=__(a.fieldTransforms,f,c);return m.setAll(_),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null}(n,e,t,i):n instanceof is?function(a,c,h,f){if(!Qc(a.precondition,c))return h;const m=__(a.fieldTransforms,f,c),_=c.data;return _.setAll(iE(a)),_.setAll(m),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(E=>E.field))}(n,e,t,i):function(a,c,h){return Qc(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):h}(n,e,t)}function VC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=Zw(i.transform,o||null);a!=null&&(t===null&&(t=pn.empty()),t.set(i.field,a))}return t||null}function y_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&oa(i,o,(a,c)=>NC(a,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ou extends Kd{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class is extends Kd{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function iE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function v_(n,e,t){const i=new Map;Ke(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let o=0;o<t.length;o++){const a=n[o],c=a.transform,h=e.data.field(a.field);i.set(a.field,bC(c,h,t[o]))}return i}function __(n,e,t){const i=new Map;for(const o of n){const a=o.transform,c=t.data.field(o.field);i.set(o.field,kC(a,c,e))}return i}class xm extends Kd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LC extends Kd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class MC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&OC(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Fl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Fl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Xw();return this.mutations.forEach(o=>{const a=e.get(o.key),c=a.overlayedDocument;let h=this.applyToLocalView(c,a.mutatedFields);h=t.has(o.key)?null:h;const f=rE(c,h);f!==null&&i.set(o.key,f),c.isValidDocument()||c.convertToNoDocument(Pe.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ue())}isEqual(e){return this.batchId===e.batchId&&oa(this.mutations,e.mutations,(t,i)=>y_(t,i))&&oa(this.baseMutations,e.baseMutations,(t,i)=>y_(t,i))}}class Im{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ke(e.mutations.length===i.length,58842,{fe:e.mutations.length,ge:i.length});let o=function(){return IC}();const a=e.mutations;for(let c=0;c<a.length;c++)o=o.insert(a[c].key,i[c].version);return new Im(e,t,i,o)}}/**
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
 */class jC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var yt,qe;function UC(n){switch(n){case ee.OK:return Ae(64938);case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function sE(n){if(n===void 0)return si("GRPC error has no .code"),ee.UNKNOWN;switch(n){case yt.OK:return ee.OK;case yt.CANCELLED:return ee.CANCELLED;case yt.UNKNOWN:return ee.UNKNOWN;case yt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case yt.INTERNAL:return ee.INTERNAL;case yt.UNAVAILABLE:return ee.UNAVAILABLE;case yt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case yt.NOT_FOUND:return ee.NOT_FOUND;case yt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case yt.ABORTED:return ee.ABORTED;case yt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case yt.DATA_LOSS:return ee.DATA_LOSS;default:return Ae(39323,{code:n})}}(qe=yt||(yt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const zC=new Wi([4294967295,4294967295],0);function w_(n){const e=Rw().encode(n),t=new ww;return t.update(e),new Uint8Array(t.digest())}function E_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Wi([t,i],0),new Wi([o,a],0)]}class Am{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new kl(`Invalid padding: ${t}`);if(i<0)throw new kl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new kl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new kl(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Wi.fromNumber(this.pe)}we(e,t,i){let o=e.add(t.multiply(Wi.fromNumber(i)));return o.compare(zC)===1&&(o=new Wi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=w_(e),[i,o]=E_(t);for(let a=0;a<this.hashCount;a++){const c=this.we(i,o,a);if(!this.be(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new Am(a,o,t);return i.forEach(h=>c.insert(h)),c}insert(e){if(this.pe===0)return;const t=w_(e),[i,o]=E_(t);for(let a=0;a<this.hashCount;a++){const c=this.we(i,o,a);this.Se(c)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class kl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qd{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,au.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Qd(Pe.min(),o,new lt(Ve),oi(),Ue())}}class au{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new au(i,t,Ue(),Ue(),Ue())}}/**
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
 */class Yc{constructor(e,t,i,o){this.De=e,this.removedTargetIds=t,this.key=i,this.ve=o}}class oE{constructor(e,t){this.targetId=e,this.Ce=t}}class aE{constructor(e,t,i=zt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class T_{constructor(){this.Fe=0,this.Me=S_(),this.xe=zt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ue(),t=Ue(),i=Ue();return this.Me.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ae(38017,{changeType:a})}}),new au(this.xe,this.Oe,e,t,i)}Qe(){this.Ne=!1,this.Me=S_()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ke(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class BC{constructor(e){this.ze=e,this.je=new Map,this.He=oi(),this.Je=Lc(),this.Ye=Lc(),this.Ze=new lt(Ve)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const i=this.rt(t);switch(e.state){case 0:this.it(t)&&i.ke(e.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(e.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(t);break;case 3:this.it(t)&&(i.Ge(),i.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),i.ke(e.resumeToken));break;default:Ae(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((i,o)=>{this.it(o)&&t(o)})}ot(e){const t=e.targetId,i=e.Ce.count,o=this._t(t);if(o){const a=o.target;if(Np(a))if(i===0){const c=new Te(a.path);this.tt(t,c,Kt.newNoDocument(c,Pe.min()))}else Ke(i===1,20013,{expectedCount:i});else{const c=this.ut(t);if(c!==i){const h=this.ct(e),f=h?this.lt(h,e,c):1;if(f!==0){this.st(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,m)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let c,h;try{c=Xi(i).toUint8Array()}catch(f){if(f instanceof Nw)return sa("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new Am(c,o,a)}catch(f){return sa(f instanceof kl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.pe===0?null:h}lt(e,t,i){return t.Ce.count===i-this.Tt(e,t.targetId)?0:2}Tt(e,t){const i=this.ze.getRemoteKeysForTarget(t);let o=0;return i.forEach(a=>{const c=this.ze.Pt(),h=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.tt(t,a,null),o++)}),o}It(e){const t=new Map;this.je.forEach((a,c)=>{const h=this._t(c);if(h){if(a.current&&Np(h.target)){const f=new Te(h.target.path);this.Et(f).has(c)||this.dt(c,f)||this.tt(c,f,Kt.newNoDocument(f,e))}a.Le&&(t.set(c,a.qe()),a.Qe())}});let i=Ue();this.Ye.forEach((a,c)=>{let h=!0;c.forEachWhile(f=>{const m=this._t(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(i=i.add(a))}),this.He.forEach((a,c)=>c.setReadTime(e));const o=new Qd(e,t,this.Ze,this.He,i);return this.He=oi(),this.Je=Lc(),this.Ye=Lc(),this.Ze=new lt(Ve),o}et(e,t){if(!this.it(e))return;const i=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,i),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,i){if(!this.it(e))return;const o=this.rt(e);this.dt(e,t)?o.$e(t,1):o.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),i&&(this.He=this.He.insert(t,i))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new T_,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new At(Ve),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new At(Ve),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new T_),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Lc(){return new lt(Te.comparator)}function S_(){return new lt(Te.comparator)}const $C={asc:"ASCENDING",desc:"DESCENDING"},qC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HC={and:"AND",or:"OR"};class WC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vp(n,e){return n.useProto3Json||Bd(e)?e:{value:e}}function yd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function GC(n,e){return yd(n,e.toTimestamp())}function Sr(n){return Ke(!!n,49232),Pe.fromTimestamp(function(t){const i=Yi(t);return new It(i.seconds,i.nanos)}(n))}function Cm(n,e){return Lp(n,e).canonicalString()}function Lp(n,e){const t=function(o){return new nt(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function uE(n){const e=nt.fromString(n);return Ke(pE(e),10190,{key:e.toString()}),e}function Mp(n,e){return Cm(n.databaseId,e.path)}function rp(n,e){const t=uE(e);if(t.get(1)!==n.databaseId.projectId)throw new me(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new me(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Te(dE(t))}function cE(n,e){return Cm(n.databaseId,e)}function KC(n){const e=uE(n);return e.length===4?nt.emptyPath():dE(e)}function jp(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dE(n){return Ke(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function x_(n,e,t){return{name:Mp(n,e),fields:t.value.mapValue.fields}}function QC(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ae(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(m,_){return m.useProto3Json?(Ke(_===void 0||typeof _=="string",58123),zt.fromBase64String(_||"")):(Ke(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),zt.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,h=c&&function(m){const _=m.code===void 0?ee.UNKNOWN:sE(m.code);return new me(_,m.message||"")}(c);t=new aE(i,o,a,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=rp(n,i.document.name),a=Sr(i.document.updateTime),c=i.document.createTime?Sr(i.document.createTime):Pe.min(),h=new pn({mapValue:{fields:i.document.fields}}),f=Kt.newFoundDocument(o,a,c,h),m=i.targetIds||[],_=i.removedTargetIds||[];t=new Yc(m,_,f.key,f)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=rp(n,i.document),a=i.readTime?Sr(i.readTime):Pe.min(),c=Kt.newNoDocument(o,a),h=i.removedTargetIds||[];t=new Yc([],h,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=rp(n,i.document),a=i.removedTargetIds||[];t=new Yc([],a,o,null)}else{if(!("filter"in e))return Ae(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,c=new FC(o,a),h=i.targetId;t=new oE(h,c)}}return t}function YC(n,e){let t;if(e instanceof ou)t={update:x_(n,e.key,e.value)};else if(e instanceof xm)t={delete:Mp(n,e.key)};else if(e instanceof is)t={update:x_(n,e.key,e.data),updateMask:sR(e.fieldMask)};else{if(!(e instanceof LC))return Ae(16599,{ft:e.type});t={verify:Mp(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(a,c){const h=c.transform;if(h instanceof md)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Kl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Ql)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof gd)return{fieldPath:c.field.canonicalString(),increment:h.Re};throw Ae(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:GC(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ae(27497)}(n,e.precondition)),t}function XC(n,e){return n&&n.length>0?(Ke(e!==void 0,14353),n.map(t=>function(o,a){let c=o.updateTime?Sr(o.updateTime):Sr(a);return c.isEqual(Pe.min())&&(c=Sr(a)),new DC(c,o.transformResults||[])}(t,e))):[]}function JC(n,e){return{documents:[cE(n,e.path)]}}function ZC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=cE(n,o);const a=function(m){if(m.length!==0)return fE(sr.create(m,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const c=function(m){if(m.length!==0)return m.map(_=>function(w){return{field:Qo(w.field),direction:nR(w.dir)}}(_))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const h=Vp(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{gt:t,parent:o}}function eR(n){let e=KC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ke(i===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let a=[];t.where&&(a=function(E){const w=hE(E);return w instanceof sr&&Bw(w)?w.getFilters():[w]}(t.where));let c=[];t.orderBy&&(c=function(E){return E.map(w=>function(R){return new pd(Yo(R.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(w))}(t.orderBy));let h=null;t.limit&&(h=function(E){let w;return w=typeof E=="object"?E.value:E,Bd(w)?null:w}(t.limit));let f=null;t.startAt&&(f=function(E){const w=!!E.before,C=E.values||[];return new fd(C,w)}(t.startAt));let m=null;return t.endAt&&(m=function(E){const w=!E.before,C=E.values||[];return new fd(C,w)}(t.endAt)),wC(e,o,c,a,h,"F",f,m)}function tR(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Yo(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Yo(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Yo(t.unaryFilter.field);return _t.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Yo(t.unaryFilter.field);return _t.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}}(n):n.fieldFilter!==void 0?function(t){return _t.create(Yo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return sr.create(t.compositeFilter.filters.map(i=>hE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}}(t.compositeFilter.op))}(n):Ae(30097,{filter:n})}function nR(n){return $C[n]}function rR(n){return qC[n]}function iR(n){return HC[n]}function Qo(n){return{fieldPath:n.canonicalString()}}function Yo(n){return Ut.fromServerFormat(n.fieldPath)}function fE(n){return n instanceof _t?function(t){if(t.op==="=="){if(d_(t.value))return{unaryFilter:{field:Qo(t.field),op:"IS_NAN"}};if(c_(t.value))return{unaryFilter:{field:Qo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(d_(t.value))return{unaryFilter:{field:Qo(t.field),op:"IS_NOT_NAN"}};if(c_(t.value))return{unaryFilter:{field:Qo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qo(t.field),op:rR(t.op),value:t.value}}}(n):n instanceof sr?function(t){const i=t.getFilters().map(o=>fE(o));return i.length===1?i[0]:{compositeFilter:{op:iR(t.op),filters:i}}}(n):Ae(54877,{filter:n})}function sR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class zi{constructor(e,t,i,o,a=Pe.min(),c=Pe.min(),h=zt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new zi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class oR{constructor(e){this.wt=e}}function aR(n){const e=eR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Op(e,e.limit,"L"):e}/**
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
 */class lR{constructor(){this.Cn=new uR}addToCollectionParentIndex(e,t){return this.Cn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Qi.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Qi.min())}updateCollectionGroup(e,t,i){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class uR{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new At(nt.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new At(nt.comparator)).toArray()}}/**
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
 */const I_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mE=41943040;class fn{static withCacheSize(e){return new fn(e,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */fn.DEFAULT_COLLECTION_PERCENTILE=10,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fn.DEFAULT=new fn(mE,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fn.DISABLED=new fn(-1,0,0);/**
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
 */class ua{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ua(0)}static lr(){return new ua(-1)}}/**
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
 */const A_="LruGarbageCollector",cR=1048576;function C_([n,e],[t,i]){const o=Ve(n,t);return o===0?Ve(e,i):o}class dR{constructor(e){this.Er=e,this.buffer=new At(C_),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();C_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){fe(A_,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xa(t)?fe(A_,"Ignoring IndexedDB error during garbage collection: ",t):await Sa(t)}await this.mr(3e5)})}}class fR{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(zd.le);const i=new dR(t);return this.gr.forEachTarget(e,o=>i.Rr(o.sequenceNumber)).next(()=>this.gr.yr(e,o=>i.Rr(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.gr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(I_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),I_):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let i,o,a,c,h,f,m;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,c=Date.now(),this.nthSequenceNumber(e,o))).next(E=>(i=E,h=Date.now(),this.removeTargets(e,i,t))).next(E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,i))).next(E=>(m=Date.now(),Go()<=Fe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${o} in `+(h-c)+`ms
	Removed ${a} targets in `+(f-h)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-_}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:E})))}}function pR(n,e){return new fR(n,e)}/**
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
 */class mR{constructor(){this.changes=new Ys(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Kt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Z.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class yR{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Fl(i.mutation,o,In.empty(),It.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ue()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ue()){const o=Ls();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(a=>{let c=Pl();return a.forEach((h,f)=>{c=c.insert(h,f.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Ls();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ue()))}populateOverlays(e,t,i){const o=[];return i.forEach(a=>{t.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((c,h)=>{t.set(c,h)})})}computeViews(e,t,i,o){let a=oi();const c=jl(),h=function(){return jl()}();return t.forEach((f,m)=>{const _=i.get(m.key);o.has(m.key)&&(_===void 0||_.mutation instanceof is)?a=a.insert(m.key,m):_!==void 0?(c.set(m.key,_.mutation.getFieldMask()),Fl(_.mutation,m,_.mutation.getFieldMask(),It.now())):c.set(m.key,In.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((m,_)=>c.set(m,_)),t.forEach((m,_)=>{var E;return h.set(m,new gR(_,(E=c.get(m))!==null&&E!==void 0?E:null))}),h))}recalculateAndSaveOverlays(e,t){const i=jl();let o=new lt((c,h)=>c-h),a=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const h of c)h.keys().forEach(f=>{const m=t.get(f);if(m===null)return;let _=i.get(f)||In.empty();_=h.applyToLocalView(m,_),i.set(f,_);const E=(o.get(h.batchId)||Ue()).add(f);o=o.insert(h.batchId,E)})}).next(()=>{const c=[],h=o.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),m=f.key,_=f.value,E=Xw();_.forEach(w=>{if(!a.has(w)){const C=rE(t.get(w),i.get(w));C!==null&&E.set(w,C),a=a.add(w)}}),c.push(this.documentOverlayCache.saveOverlays(e,m,E))}return Z.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return Te.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ww(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(a=>{const c=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):Z.resolve(Ls());let h=ql,f=a;return c.next(m=>Z.forEach(m,(_,E)=>(h<E.largestBatchId&&(h=E.largestBatchId),a.get(_)?Z.resolve():this.remoteDocumentCache.getEntry(e,_).next(w=>{f=f.insert(_,w)}))).next(()=>this.populateOverlays(e,m,a)).next(()=>this.computeViews(e,f,m,Ue())).next(_=>({batchId:h,changes:Yw(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next(i=>{let o=Pl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let c=Pl();return this.indexManager.getCollectionParents(e,a).next(h=>Z.forEach(h,f=>{const m=function(E,w){return new su(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,i,o).next(_=>{_.forEach((E,w)=>{c=c.insert(E,w)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o))).next(c=>{a.forEach((f,m)=>{const _=m.getKey();c.get(_)===null&&(c=c.insert(_,Kt.newInvalidDocument(_)))});let h=Pl();return c.forEach((f,m)=>{const _=a.get(f);_!==void 0&&Fl(_.mutation,m,In.empty(),It.now()),Wd(t,m)&&(h=h.insert(f,m))}),h})}}/**
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
 */class vR{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return Z.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Sr(o.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(o){return{name:o.name,query:aR(o.bundledQuery),readTime:Sr(o.readTime)}}(t)),Z.resolve()}}/**
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
 */class _R{constructor(){this.overlays=new lt(Te.comparator),this.Qr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ls();return Z.forEach(t,o=>this.getOverlay(e,o).next(a=>{a!==null&&i.set(o,a)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,a)=>{this.St(e,t,a)}),Z.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Qr.get(i);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.Qr.delete(i)),Z.resolve()}getOverlaysForCollection(e,t,i){const o=Ls(),a=t.length+1,c=new Te(t.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){const f=h.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>i&&o.set(f.getKey(),f)}return Z.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new lt((m,_)=>m-_);const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>i){let _=a.get(m.largestBatchId);_===null&&(_=Ls(),a=a.insert(m.largestBatchId,_)),_.set(m.getKey(),m)}}const h=Ls(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,_)=>h.set(m,_)),!(h.size()>=o)););return Z.resolve(h)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Qr.get(o.largestBatchId).delete(i.key);this.Qr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new jC(t,i));let a=this.Qr.get(t);a===void 0&&(a=Ue(),this.Qr.set(t,a)),this.Qr.set(t,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class wR{constructor(){this.sessionToken=zt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
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
 */class Rm{constructor(){this.$r=new At(Nt.Ur),this.Kr=new At(Nt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const i=new Nt(e,t);this.$r=this.$r.add(i),this.Kr=this.Kr.add(i)}Gr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.zr(new Nt(e,t))}jr(e,t){e.forEach(i=>this.removeReference(i,t))}Hr(e){const t=new Te(new nt([])),i=new Nt(t,e),o=new Nt(t,e+1),a=[];return this.Kr.forEachInRange([i,o],c=>{this.zr(c),a.push(c.key)}),a}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Te(new nt([])),i=new Nt(t,e),o=new Nt(t,e+1);let a=Ue();return this.Kr.forEachInRange([i,o],c=>{a=a.add(c.key)}),a}containsKey(e){const t=new Nt(e,0),i=this.$r.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Nt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Te.comparator(e.key,t.key)||Ve(e.Zr,t.Zr)}static Wr(e,t){return Ve(e.Zr,t.Zr)||Te.comparator(e.key,t.key)}}/**
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
 */class ER{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new At(Nt.Ur)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new MC(a,t,i,o);this.mutationQueue.push(c);for(const h of o)this.Xr=this.Xr.add(new Nt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ti(i),a=o<0?0:o;return Z.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?vm:this.nr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Nt(t,0),o=new Nt(t,Number.POSITIVE_INFINITY),a=[];return this.Xr.forEachInRange([i,o],c=>{const h=this.ei(c.Zr);a.push(h)}),Z.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new At(Ve);return t.forEach(o=>{const a=new Nt(o,0),c=new Nt(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([a,c],h=>{i=i.add(h.Zr)})}),Z.resolve(this.ni(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;Te.isDocumentKey(a)||(a=a.child(""));const c=new Nt(new Te(a),0);let h=new At(Ve);return this.Xr.forEachWhile(f=>{const m=f.key.path;return!!i.isPrefixOf(m)&&(m.length===o&&(h=h.add(f.Zr)),!0)},c),Z.resolve(this.ni(h))}ni(e){const t=[];return e.forEach(i=>{const o=this.ei(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ke(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Xr;return Z.forEach(t.mutations,o=>{const a=new Nt(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Xr=i})}sr(e){}containsKey(e,t){const i=new Nt(t,0),o=this.Xr.firstAfterOrEqual(i);return Z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class TR{constructor(e){this.ii=e,this.docs=function(){return new lt(Te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,c=this.ii(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Z.resolve(i?i.document.mutableCopy():Kt.newInvalidDocument(t))}getEntries(e,t){let i=oi();return t.forEach(o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():Kt.newInvalidDocument(o))}),Z.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=oi();const c=t.path,h=new Te(c.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:m,value:{document:_}}=f.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||JA(XA(_),i)<=0||(o.has(_.key)||Wd(t,_))&&(a=a.insert(_.key,_.mutableCopy()))}return Z.resolve(a)}getAllFromCollectionGroup(e,t,i,o){Ae(9500)}si(e,t){return Z.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new SR(this)}getSize(e){return Z.resolve(this.size)}}class SR extends mR{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.Br.addEntry(e,o)):this.Br.removeEntry(i)}),Z.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class xR{constructor(e){this.persistence=e,this.oi=new Ys(t=>Em(t),Tm),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this._i=0,this.ai=new Rm,this.targetCount=0,this.ui=ua.cr()}forEachTarget(e,t){return this.oi.forEach((i,o)=>t(o)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this._i&&(this._i=t),Z.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ua(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Tr(t),Z.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.oi.forEach((c,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.oi.delete(c),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)}),Z.waitFor(a).next(()=>o)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const i=this.oi.get(t)||null;return Z.resolve(i)}addMatchingKeys(e,t,i){return this.ai.Gr(t,i),Z.resolve()}removeMatchingKeys(e,t,i){this.ai.jr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach(c=>{a.push(o.markPotentiallyOrphaned(e,c))}),Z.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ai.Yr(t);return Z.resolve(i)}containsKey(e,t){return Z.resolve(this.ai.containsKey(t))}}/**
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
 */class gE{constructor(e,t){this.ci={},this.overlays={},this.li=new zd(0),this.hi=!1,this.hi=!0,this.Pi=new wR,this.referenceDelegate=e(this),this.Ti=new xR(this),this.indexManager=new lR,this.remoteDocumentCache=function(o){return new TR(o)}(i=>this.referenceDelegate.Ii(i)),this.serializer=new oR(t),this.Ei=new vR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _R,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ci[e.toKey()];return i||(i=new ER(t,this.referenceDelegate),this.ci[e.toKey()]=i),i}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,i){fe("MemoryPersistence","Starting transaction:",e);const o=new IR(this.li.next());return this.referenceDelegate.di(),i(o).next(a=>this.referenceDelegate.Ai(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Ri(e,t){return Z.or(Object.values(this.ci).map(i=>()=>i.containsKey(e,t)))}}class IR extends eC{constructor(e){super(),this.currentSequenceNumber=e}}class Pm{constructor(e){this.persistence=e,this.Vi=new Rm,this.mi=null}static fi(e){return new Pm(e)}get gi(){if(this.mi)return this.mi;throw Ae(60996)}addReference(e,t,i){return this.Vi.addReference(i,t),this.gi.delete(i.toString()),Z.resolve()}removeReference(e,t,i){return this.Vi.removeReference(i,t),this.gi.add(i.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(o=>this.gi.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(a=>this.gi.add(a.toString()))}).next(()=>i.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.gi,i=>{const o=Te.fromPath(i);return this.pi(e,o).next(a=>{a||t.removeEntry(o,Pe.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(i=>{i?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return Z.or([()=>Z.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class vd{constructor(e,t){this.persistence=e,this.yi=new Ys(i=>rC(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=pR(this,t)}static fi(e,t){return new vd(e,t)}di(){}Ai(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}br(e){let t=0;return this.yr(e,i=>{t++}).next(()=>t)}yr(e,t){return Z.forEach(this.yi,(i,o)=>this.Dr(e,i,o).next(a=>a?Z.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.si(e,c=>this.Dr(e,c,t).next(h=>{h||(i++,a.removeEntry(c,Pe.min()))})).next(()=>a.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),Z.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gc(e.data.value)),t}Dr(e,t,i){return Z.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.yi.get(t);return Z.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class km{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.ds=i,this.As=o}static Rs(e,t){let i=Ue(),o=Ue();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new km(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class AR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class CR{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return SI()?8:tC(Xt())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.ws(e,t).next(c=>{a.result=c}).next(()=>{if(!a.result)return this.bs(e,t,o,i).next(c=>{a.result=c})}).next(()=>{if(a.result)return;const c=new AR;return this.Ss(e,t,c).next(h=>{if(a.result=h,this.fs)return this.Ds(e,t,c,h.size)})}).next(()=>a.result)}Ds(e,t,i,o){return i.documentReadCount<this.gs?(Go()<=Fe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Ko(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),Z.resolve()):(Go()<=Fe.DEBUG&&fe("QueryEngine","Query:",Ko(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ps*o?(Go()<=Fe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Ko(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tr(t))):Z.resolve())}ws(e,t){if(m_(t))return Z.resolve(null);let i=Tr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Op(t,null,"F"),i=Tr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const c=Ue(...a);return this.ys.getDocuments(e,c).next(h=>this.indexManager.getMinOffset(e,i).next(f=>{const m=this.vs(t,h);return this.Cs(t,m,c,f.readTime)?this.ws(e,Op(t,null,"F")):this.Fs(e,m,t,f)}))})))}bs(e,t,i,o){return m_(t)||o.isEqual(Pe.min())?Z.resolve(null):this.ys.getDocuments(e,i).next(a=>{const c=this.vs(t,a);return this.Cs(t,c,i,o)?Z.resolve(null):(Go()<=Fe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ko(t)),this.Fs(e,c,t,YA(o,ql)).next(h=>h))})}vs(e,t){let i=new At(Kw(e));return t.forEach((o,a)=>{Wd(e,a)&&(i=i.add(a))}),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}Ss(e,t,i){return Go()<=Fe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Ko(t)),this.ys.getDocumentsMatchingQuery(e,t,Qi.min(),i)}Fs(e,t,i,o){return this.ys.getDocumentsMatchingQuery(e,i,o).next(a=>(t.forEach(c=>{a=a.insert(c.key,c)}),a))}}/**
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
 */const bm="LocalStore",RR=3e8;class PR{constructor(e,t,i,o){this.persistence=e,this.Ms=t,this.serializer=o,this.xs=new lt(Ve),this.Os=new Ys(a=>Em(a),Tm),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(i)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yR(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function kR(n,e,t,i){return new PR(n,e,t,i)}async function yE(n,e){const t=ke(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(a=>(o=a,t.Ls(e),t.mutationQueue.getAllMutationBatches(i))).next(a=>{const c=[],h=[];let f=Ue();for(const m of o){c.push(m.batchId);for(const _ of m.mutations)f=f.add(_.key)}for(const m of a){h.push(m.batchId);for(const _ of m.mutations)f=f.add(_.key)}return t.localDocuments.getDocuments(i,f).next(m=>({ks:m,removedBatchIds:c,addedBatchIds:h}))})})}function bR(n,e){const t=ke(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),a=t.Bs.newChangeBuffer({trackRemovals:!0});return function(h,f,m,_){const E=m.batch,w=E.keys();let C=Z.resolve();return w.forEach(R=>{C=C.next(()=>_.getEntry(f,R)).next(V=>{const N=m.docVersions.get(R);Ke(N!==null,48541),V.version.compareTo(N)<0&&(E.applyToRemoteDocument(V,m),V.isValidDocument()&&(V.setReadTime(m.commitVersion),_.addEntry(V)))})}),C.next(()=>h.mutationQueue.removeMutationBatch(f,E))}(t,i,e,a).next(()=>a.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let f=Ue();for(let m=0;m<h.mutationResults.length;++m)h.mutationResults[m].transformResults.length>0&&(f=f.add(h.batch.mutations[m].key));return f}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function vE(n){const e=ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function NR(n,e){const t=ke(n),i=e.snapshotVersion;let o=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});o=t.xs;const h=[];e.targetChanges.forEach((_,E)=>{const w=o.get(E);if(!w)return;h.push(t.Ti.removeMatchingKeys(a,_.removedDocuments,E).next(()=>t.Ti.addMatchingKeys(a,_.addedDocuments,E)));let C=w.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?C=C.withResumeToken(zt.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):_.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(_.resumeToken,i)),o=o.insert(E,C),function(V,N,M){return V.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=RR?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(w,C,_)&&h.push(t.Ti.updateTargetData(a,C))});let f=oi(),m=Ue();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,_))}),h.push(DR(a,c,e.documentUpdates).next(_=>{f=_.qs,m=_.Qs})),!i.isEqual(Pe.min())){const _=t.Ti.getLastRemoteSnapshotVersion(a).next(E=>t.Ti.setTargetsMetadata(a,a.currentSequenceNumber,i));h.push(_)}return Z.waitFor(h).next(()=>c.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,m)).next(()=>f)}).then(a=>(t.xs=o,a))}function DR(n,e,t){let i=Ue(),o=Ue();return t.forEach(a=>i=i.add(a)),e.getEntries(n,i).next(a=>{let c=oi();return t.forEach((h,f)=>{const m=a.get(h);f.isFoundDocument()!==m.isFoundDocument()&&(o=o.add(h)),f.isNoDocument()&&f.version.isEqual(Pe.min())?(e.removeEntry(h,f.readTime),c=c.insert(h,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),c=c.insert(h,f)):fe(bm,"Ignoring outdated watch update for ",h,". Current version:",m.version," Watch version:",f.version)}),{qs:c,Qs:o}})}function OR(n,e){const t=ke(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=vm),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function VR(n,e){const t=ke(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Ti.getTargetData(i,e).next(a=>a?(o=a,Z.resolve(o)):t.Ti.allocateTargetId(i).next(c=>(o=new zi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ti.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.xs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.xs=t.xs.insert(i.targetId,i),t.Os.set(e,i.targetId)),i})}async function Fp(n,e,t){const i=ke(n),o=i.xs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!xa(c))throw c;fe(bm,`Failed to update sequence numbers for target ${e}: ${c}`)}i.xs=i.xs.remove(e),i.Os.delete(o.target)}function R_(n,e,t){const i=ke(n);let o=Pe.min(),a=Ue();return i.persistence.runTransaction("Execute query","readwrite",c=>function(f,m,_){const E=ke(f),w=E.Os.get(_);return w!==void 0?Z.resolve(E.xs.get(w)):E.Ti.getTargetData(m,_)}(i,c,Tr(e)).next(h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,i.Ti.getMatchingKeysForTargetId(c,h.targetId).next(f=>{a=f})}).next(()=>i.Ms.getDocumentsMatchingQuery(c,e,t?o:Pe.min(),t?a:Ue())).next(h=>(LR(i,TC(e),h),{documents:h,$s:a})))}function LR(n,e,t){let i=n.Ns.get(e)||Pe.min();t.forEach((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),n.Ns.set(e,i)}class P_{constructor(){this.activeTargetIds=RC()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MR{constructor(){this.xo=new P_,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,i){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new P_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jR{No(e){}shutdown(){}}/**
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
 */const k_="ConnectivityMonitor";class b_{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){fe(k_,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){fe(k_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Mc=null;function Up(){return Mc===null?Mc=function(){return 268435456+Math.round(2147483648*Math.random())}():Mc++,"0x"+Mc.toString(16)}/**
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
 */const ip="RestConnection",FR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UR{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${i}/databases/${o}`,this.Go=this.databaseId.database===dd?`project_id=${i}`:`project_id=${i}&database_id=${o}`}zo(e,t,i,o,a){const c=Up(),h=this.jo(e,t.toUriEncodedString());fe(ip,`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(f,o,a);const{host:m}=new URL(h),_=wa(m);return this.Jo(e,h,f,i,_).then(E=>(fe(ip,`Received RPC '${e}' ${c}: `,E),E),E=>{throw sa(ip,`RPC '${e}' ${c} failed with error: `,E,"url: ",h,"request:",i),E})}Yo(e,t,i,o,a,c){return this.zo(e,t,i,o,a)}Ho(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ta}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}jo(e,t){const i=FR[e];return`${this.Ko}/v1/${t}:${i}`}terminate(){}}/**
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
 */class zR{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Wt="WebChannelConnection";class BR extends UR{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,a){const c=Up();return new Promise((h,f)=>{const m=new Ew;m.setWithCredentials(!0),m.listenOnce(Tw.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Wc.NO_ERROR:const E=m.getResponseJson();fe(Wt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),h(E);break;case Wc.TIMEOUT:fe(Wt,`RPC '${e}' ${c} timed out`),f(new me(ee.DEADLINE_EXCEEDED,"Request time out"));break;case Wc.HTTP_ERROR:const w=m.getStatus();if(fe(Wt,`RPC '${e}' ${c} failed with status:`,w,"response text:",m.getResponseText()),w>0){let C=m.getResponseJson();Array.isArray(C)&&(C=C[0]);const R=C==null?void 0:C.error;if(R&&R.status&&R.message){const V=function(M){const z=M.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(z)>=0?z:ee.UNKNOWN}(R.status);f(new me(V,R.message))}else f(new me(ee.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new me(ee.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{h_:e,streamId:c,P_:m.getLastErrorCode(),T_:m.getLastError()})}}finally{fe(Wt,`RPC '${e}' ${c} completed.`)}});const _=JSON.stringify(o);fe(Wt,`RPC '${e}' ${c} sending request:`,o),m.send(t,"POST",_,i,15)})}I_(e,t,i){const o=Up(),a=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Iw(),h=xw(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Ho(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const _=a.join("");fe(Wt,`Creating RPC '${e}' stream ${o}: ${_}`,f);const E=c.createWebChannel(_,f);this.E_(E);let w=!1,C=!1;const R=new zR({Zo:N=>{C?fe(Wt,`Not sending because RPC '${e}' stream ${o} is closed:`,N):(w||(fe(Wt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),w=!0),fe(Wt,`RPC '${e}' stream ${o} sending:`,N),E.send(N))},Xo:()=>E.close()}),V=(N,M,z)=>{N.listen(M,G=>{try{z(G)}catch(J){setTimeout(()=>{throw J},0)}})};return V(E,Rl.EventType.OPEN,()=>{C||(fe(Wt,`RPC '${e}' stream ${o} transport opened.`),R.__())}),V(E,Rl.EventType.CLOSE,()=>{C||(C=!0,fe(Wt,`RPC '${e}' stream ${o} transport closed`),R.u_(),this.d_(E))}),V(E,Rl.EventType.ERROR,N=>{C||(C=!0,sa(Wt,`RPC '${e}' stream ${o} transport errored. Name:`,N.name,"Message:",N.message),R.u_(new me(ee.UNAVAILABLE,"The operation could not be completed")))}),V(E,Rl.EventType.MESSAGE,N=>{var M;if(!C){const z=N.data[0];Ke(!!z,16349);const G=z,J=(G==null?void 0:G.error)||((M=G[0])===null||M===void 0?void 0:M.error);if(J){fe(Wt,`RPC '${e}' stream ${o} received error:`,J);const te=J.status;let Y=function(I){const D=yt[I];if(D!==void 0)return sE(D)}(te),P=J.message;Y===void 0&&(Y=ee.INTERNAL,P="Unknown error status: "+te+" with message "+J.message),C=!0,R.u_(new me(Y,P)),E.close()}else fe(Wt,`RPC '${e}' stream ${o} received:`,z),R.c_(z)}}),V(h,Sw.STAT_EVENT,N=>{N.stat===Cp.PROXY?fe(Wt,`RPC '${e}' stream ${o} detected buffering proxy`):N.stat===Cp.NOPROXY&&fe(Wt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function sp(){return typeof document<"u"?document:null}/**
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
 */function Yd(n){return new WC(n,!0)}/**
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
 */class _E{constructor(e,t,i=1e3,o=1.5,a=6e4){this.xi=e,this.timerId=t,this.A_=i,this.R_=o,this.V_=a,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),i=Math.max(0,Date.now()-this.g_),o=Math.max(0,t-i);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const N_="PersistentStream";class wE{constructor(e,t,i,o,a,c,h,f){this.xi=e,this.S_=i,this.D_=o,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new _E(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(si(t.toString()),si("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.v_===t&&this.z_(i,o)},i=>{e(()=>{const o=new me(ee.UNKNOWN,"Fetching auth token failed: "+i.message);return this.j_(o)})})}z_(e,t){const i=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{i(()=>this.listener.e_())}),this.stream.n_(()=>{i(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{i(()=>this.j_(o))}),this.stream.onMessage(o=>{i(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return fe(N_,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(fe(N_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $R extends wE{constructor(e,t,i,o,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=QC(this.serializer,e),i=function(a){if(!("targetChange"in a))return Pe.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?Pe.min():c.readTime?Sr(c.readTime):Pe.min()}(e);return this.listener.Y_(t,i)}Z_(e){const t={};t.database=jp(this.serializer),t.addTarget=function(a,c){let h;const f=c.target;if(h=Np(f)?{documents:JC(a,f)}:{query:ZC(a,f).gt},h.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){h.resumeToken=lE(a,c.resumeToken);const m=Vp(a,c.expectedCount);m!==null&&(h.expectedCount=m)}else if(c.snapshotVersion.compareTo(Pe.min())>0){h.readTime=yd(a,c.snapshotVersion.toTimestamp());const m=Vp(a,c.expectedCount);m!==null&&(h.expectedCount=m)}return h}(this.serializer,e);const i=tR(this.serializer,e);i&&(t.labels=i),this.Q_(t)}X_(e){const t={};t.database=jp(this.serializer),t.removeTarget=e,this.Q_(t)}}class qR extends wE{constructor(e,t,i,o,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=XC(e.writeResults,e.commitTime),i=Sr(e.commitTime);return this.listener.ra(i,t)}ia(){const e={};e.database=jp(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>YC(this.serializer,i))};this.Q_(t)}}/**
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
 */class HR{}class WR extends HR{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new me(ee.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,i,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.zo(e,Lp(t,i),o,a,c)).catch(a=>{throw a.name==="FirebaseError"?(a.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new me(ee.UNKNOWN,a.toString())})}Yo(e,t,i,o,a){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,h])=>this.connection.Yo(e,Lp(t,i),o,c,h,a)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new me(ee.UNKNOWN,c.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class GR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(si(t),this.ua=!1):fe("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const $s="RemoteStore";class KR{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=a,this.Ra.No(c=>{i.enqueueAndForget(async()=>{Xs(this)&&(fe($s,"Restarting streams for network reachability change."),await async function(f){const m=ke(f);m.da.add(4),await lu(m),m.Va.set("Unknown"),m.da.delete(4),await Xd(m)}(this))})}),this.Va=new GR(i,o)}}async function Xd(n){if(Xs(n))for(const e of n.Aa)await e(!0)}async function lu(n){for(const e of n.Aa)await e(!1)}function EE(n,e){const t=ke(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Vm(t)?Om(t):Ia(t).N_()&&Dm(t,e))}function Nm(n,e){const t=ke(n),i=Ia(t);t.Ea.delete(e),i.N_()&&TE(t,e),t.Ea.size===0&&(i.N_()?i.k_():Xs(t)&&t.Va.set("Unknown"))}function Dm(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ia(n).Z_(e)}function TE(n,e){n.ma.Ke(e),Ia(n).X_(e)}function Om(n){n.ma=new BC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Ia(n).start(),n.Va.ca()}function Vm(n){return Xs(n)&&!Ia(n).O_()&&n.Ea.size>0}function Xs(n){return ke(n).da.size===0}function SE(n){n.ma=void 0}async function QR(n){n.Va.set("Online")}async function YR(n){n.Ea.forEach((e,t)=>{Dm(n,e)})}async function XR(n,e){SE(n),Vm(n)?(n.Va.Pa(e),Om(n)):n.Va.set("Unknown")}async function JR(n,e,t){if(n.Va.set("Online"),e instanceof aE&&e.state===2&&e.cause)try{await async function(o,a){const c=a.cause;for(const h of a.targetIds)o.Ea.has(h)&&(await o.remoteSyncer.rejectListen(h,c),o.Ea.delete(h),o.ma.removeTarget(h))}(n,e)}catch(i){fe($s,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await _d(n,i)}else if(e instanceof Yc?n.ma.Xe(e):e instanceof oE?n.ma.ot(e):n.ma.nt(e),!t.isEqual(Pe.min()))try{const i=await vE(n.localStore);t.compareTo(i)>=0&&await function(a,c){const h=a.ma.It(c);return h.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const _=a.Ea.get(m);_&&a.Ea.set(m,_.withResumeToken(f.resumeToken,c))}}),h.targetMismatches.forEach((f,m)=>{const _=a.Ea.get(f);if(!_)return;a.Ea.set(f,_.withResumeToken(zt.EMPTY_BYTE_STRING,_.snapshotVersion)),TE(a,f);const E=new zi(_.target,f,m,_.sequenceNumber);Dm(a,E)}),a.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(i){fe($s,"Failed to raise snapshot:",i),await _d(n,i)}}async function _d(n,e,t){if(!xa(e))throw e;n.da.add(1),await lu(n),n.Va.set("Offline"),t||(t=()=>vE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{fe($s,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Xd(n)})}function xE(n,e){return e().catch(t=>_d(n,t,e))}async function Jd(n){const e=ke(n),t=Zi(e);let i=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:vm;for(;ZR(e);)try{const o=await OR(e.localStore,i);if(o===null){e.Ia.length===0&&t.k_();break}i=o.batchId,eP(e,o)}catch(o){await _d(e,o)}IE(e)&&AE(e)}function ZR(n){return Xs(n)&&n.Ia.length<10}function eP(n,e){n.Ia.push(e);const t=Zi(n);t.N_()&&t.ea&&t.ta(e.mutations)}function IE(n){return Xs(n)&&!Zi(n).O_()&&n.Ia.length>0}function AE(n){Zi(n).start()}async function tP(n){Zi(n).ia()}async function nP(n){const e=Zi(n);for(const t of n.Ia)e.ta(t.mutations)}async function rP(n,e,t){const i=n.Ia.shift(),o=Im.from(i,e,t);await xE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Jd(n)}async function iP(n,e){e&&Zi(n).ea&&await async function(i,o){if(function(c){return UC(c)&&c!==ee.ABORTED}(o.code)){const a=i.Ia.shift();Zi(i).L_(),await xE(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o)),await Jd(i)}}(n,e),IE(n)&&AE(n)}async function D_(n,e){const t=ke(n);t.asyncQueue.verifyOperationInProgress(),fe($s,"RemoteStore received new credentials");const i=Xs(t);t.da.add(3),await lu(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Xd(t)}async function sP(n,e){const t=ke(n);e?(t.da.delete(2),await Xd(t)):e||(t.da.add(2),await lu(t),t.Va.set("Unknown"))}function Ia(n){return n.fa||(n.fa=function(t,i,o){const a=ke(t);return a.oa(),new $R(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{e_:QR.bind(null,n),n_:YR.bind(null,n),i_:XR.bind(null,n),Y_:JR.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),Vm(n)?Om(n):n.Va.set("Unknown")):(await n.fa.stop(),SE(n))})),n.fa}function Zi(n){return n.ga||(n.ga=function(t,i,o){const a=ke(t);return a.oa(),new qR(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:tP.bind(null,n),i_:iP.bind(null,n),na:nP.bind(null,n),ra:rP.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await Jd(n)):(await n.ga.stop(),n.Ia.length>0&&(fe($s,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
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
 */class Lm{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const c=Date.now()+i,h=new Lm(e,t,c,o,a);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mm(n,e){if(si("AsyncQueue",`${e}: ${n}`),xa(n))return new me(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Zo{static emptySet(e){return new Zo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Te.comparator(t.key,i.key):(t,i)=>Te.comparator(t.key,i.key),this.keyedMap=Pl(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Zo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class O_{constructor(){this.pa=new lt(Te.comparator)}track(e){const t=e.doc.key,i=this.pa.get(t);i?e.type!==0&&i.type===3?this.pa=this.pa.insert(t,e):e.type===3&&i.type!==1?this.pa=this.pa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.pa=this.pa.remove(t):e.type===1&&i.type===2?this.pa=this.pa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):Ae(63341,{Vt:e,ya:i}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,i)=>{e.push(i)}),e}}class ca{constructor(e,t,i,o,a,c,h,f,m){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,i,o,a){const c=[];return t.forEach(h=>{c.push({type:0,doc:h})}),new ca(e,t,Zo.emptySet(t),c,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class oP{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class aP{constructor(){this.queries=V_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=ke(t),a=o.queries;o.queries=V_(),a.forEach((c,h)=>{for(const f of h.Sa)f.onError(i)})})(this,new me(ee.ABORTED,"Firestore shutting down"))}}function V_(){return new Ys(n=>Gw(n),Hd)}async function jm(n,e){const t=ke(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.Da()&&e.va()&&(i=2):(a=new oP,i=e.va()?0:1);try{switch(i){case 0:a.ba=await t.onListen(o,!0);break;case 1:a.ba=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const h=Mm(c,`Initialization of query '${Ko(e.query)}' failed`);return void e.onError(h)}t.queries.set(o,a),a.Sa.push(e),e.Fa(t.onlineState),a.ba&&e.Ma(a.ba)&&Um(t)}async function Fm(n,e){const t=ke(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const c=a.Sa.indexOf(e);c>=0&&(a.Sa.splice(c,1),a.Sa.length===0?o=e.va()?0:1:!a.Da()&&e.va()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function lP(n,e){const t=ke(n);let i=!1;for(const o of e){const a=o.query,c=t.queries.get(a);if(c){for(const h of c.Sa)h.Ma(o)&&(i=!0);c.ba=o}}i&&Um(t)}function uP(n,e,t){const i=ke(n),o=i.queries.get(e);if(o)for(const a of o.Sa)a.onError(t);i.queries.delete(e)}function Um(n){n.Ca.forEach(e=>{e.next()})}var zp,L_;(L_=zp||(zp={})).xa="default",L_.Cache="cache";class zm{constructor(e,t,i){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=i||{}}Ma(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new ca(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const i=t!=="Offline";return(!this.options.Qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=ca.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==zp.Cache}}/**
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
 */class CE{constructor(e){this.key=e}}class RE{constructor(e){this.key=e}}class cP{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ue(),this.mutatedKeys=Ue(),this.Za=Kw(e),this.Xa=new Zo(this.Za)}get eu(){return this.Ha}tu(e,t){const i=t?t.nu:new O_,o=t?t.Xa:this.Xa;let a=t?t.mutatedKeys:this.mutatedKeys,c=o,h=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,m=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((_,E)=>{const w=o.get(_),C=Wd(this.query,E)?E:null,R=!!w&&this.mutatedKeys.has(w.key),V=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let N=!1;w&&C?w.data.isEqual(C.data)?R!==V&&(i.track({type:3,doc:C}),N=!0):this.ru(w,C)||(i.track({type:2,doc:C}),N=!0,(f&&this.Za(C,f)>0||m&&this.Za(C,m)<0)&&(h=!0)):!w&&C?(i.track({type:0,doc:C}),N=!0):w&&!C&&(i.track({type:1,doc:w}),N=!0,(f||m)&&(h=!0)),N&&(C?(c=c.add(C),a=V?a.add(_):a.delete(_)):(c=c.delete(_),a=a.delete(_)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),a=a.delete(_.key),i.track({type:1,doc:_})}return{Xa:c,nu:i,Cs:h,mutatedKeys:a}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const c=e.nu.wa();c.sort((_,E)=>function(C,R){const V=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Vt:N})}};return V(C)-V(R)}(_.type,E.type)||this.Za(_.doc,E.doc)),this.iu(i),o=o!=null&&o;const h=t&&!o?this.su():[],f=this.Ya.size===0&&this.current&&!o?1:0,m=f!==this.Ja;return this.Ja=f,c.length!==0||m?{snapshot:new ca(this.query,e.Xa,a,c,e.mutatedKeys,f===0,m,!1,!!i&&i.resumeToken.approximateByteSize()>0),ou:h}:{ou:h}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new O_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Ue(),this.Xa.forEach(i=>{this._u(i.key)&&(this.Ya=this.Ya.add(i.key))});const t=[];return e.forEach(i=>{this.Ya.has(i)||t.push(new RE(i))}),this.Ya.forEach(i=>{e.has(i)||t.push(new CE(i))}),t}au(e){this.Ha=e.$s,this.Ya=Ue();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return ca.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Bm="SyncEngine";class dP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class hP{constructor(e){this.key=e,this.cu=!1}}class fP{constructor(e,t,i,o,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.lu={},this.hu=new Ys(h=>Gw(h),Hd),this.Pu=new Map,this.Tu=new Set,this.Iu=new lt(Te.comparator),this.Eu=new Map,this.du=new Rm,this.Au={},this.Ru=new Map,this.Vu=ua.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function pP(n,e,t=!0){const i=OE(n);let o;const a=i.hu.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.uu()):o=await PE(i,e,t,!0),o}async function mP(n,e){const t=OE(n);await PE(t,e,!0,!1)}async function PE(n,e,t,i){const o=await VR(n.localStore,Tr(e)),a=o.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let h;return i&&(h=await gP(n,e,a,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&EE(n.remoteStore,o),h}async function gP(n,e,t,i,o){n.fu=(E,w,C)=>async function(V,N,M,z){let G=N.view.tu(M);G.Cs&&(G=await R_(V.localStore,N.query,!1).then(({documents:P})=>N.view.tu(P,G)));const J=z&&z.targetChanges.get(N.targetId),te=z&&z.targetMismatches.get(N.targetId)!=null,Y=N.view.applyChanges(G,V.isPrimaryClient,J,te);return j_(V,N.targetId,Y.ou),Y.snapshot}(n,E,w,C);const a=await R_(n.localStore,e,!0),c=new cP(e,a.$s),h=c.tu(a.documents),f=au.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),m=c.applyChanges(h,n.isPrimaryClient,f);j_(n,t,m.ou);const _=new dP(e,t,c);return n.hu.set(e,_),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),m.snapshot}async function yP(n,e,t){const i=ke(n),o=i.hu.get(e),a=i.Pu.get(o.targetId);if(a.length>1)return i.Pu.set(o.targetId,a.filter(c=>!Hd(c,e))),void i.hu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Fp(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Nm(i.remoteStore,o.targetId),Bp(i,o.targetId)}).catch(Sa)):(Bp(i,o.targetId),await Fp(i.localStore,o.targetId,!0))}async function vP(n,e){const t=ke(n),i=t.hu.get(e),o=t.Pu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Nm(t.remoteStore,i.targetId))}async function _P(n,e,t){const i=AP(n);try{const o=await function(c,h){const f=ke(c),m=It.now(),_=h.reduce((C,R)=>C.add(R.key),Ue());let E,w;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let R=oi(),V=Ue();return f.Bs.getEntries(C,_).next(N=>{R=N,R.forEach((M,z)=>{z.isValidDocument()||(V=V.add(M))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,R)).next(N=>{E=N;const M=[];for(const z of h){const G=VC(z,E.get(z.key).overlayedDocument);G!=null&&M.push(new is(z.key,G,Fw(G.value.mapValue),Mn.exists(!0)))}return f.mutationQueue.addMutationBatch(C,m,M,h)}).next(N=>{w=N;const M=N.applyToLocalDocumentSet(E,V);return f.documentOverlayCache.saveOverlays(C,N.batchId,M)})}).then(()=>({batchId:w.batchId,changes:Yw(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,h,f){let m=c.Au[c.currentUser.toKey()];m||(m=new lt(Ve)),m=m.insert(h,f),c.Au[c.currentUser.toKey()]=m}(i,o.batchId,t),await uu(i,o.changes),await Jd(i.remoteStore)}catch(o){const a=Mm(o,"Failed to persist write");t.reject(a)}}async function kE(n,e){const t=ke(n);try{const i=await NR(t.localStore,e);e.targetChanges.forEach((o,a)=>{const c=t.Eu.get(a);c&&(Ke(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.cu=!0:o.modifiedDocuments.size>0?Ke(c.cu,14607):o.removedDocuments.size>0&&(Ke(c.cu,42227),c.cu=!1))}),await uu(t,i,e)}catch(i){await Sa(i)}}function M_(n,e,t){const i=ke(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.hu.forEach((a,c)=>{const h=c.view.Fa(e);h.snapshot&&o.push(h.snapshot)}),function(c,h){const f=ke(c);f.onlineState=h;let m=!1;f.queries.forEach((_,E)=>{for(const w of E.Sa)w.Fa(h)&&(m=!0)}),m&&Um(f)}(i.eventManager,e),o.length&&i.lu.Y_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function wP(n,e,t){const i=ke(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),a=o&&o.key;if(a){let c=new lt(Te.comparator);c=c.insert(a,Kt.newNoDocument(a,Pe.min()));const h=Ue().add(a),f=new Qd(Pe.min(),new Map,new lt(Ve),c,h);await kE(i,f),i.Iu=i.Iu.remove(a),i.Eu.delete(e),$m(i)}else await Fp(i.localStore,e,!1).then(()=>Bp(i,e,t)).catch(Sa)}async function EP(n,e){const t=ke(n),i=e.batch.batchId;try{const o=await bR(t.localStore,e);NE(t,i,null),bE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await uu(t,o)}catch(o){await Sa(o)}}async function TP(n,e,t){const i=ke(n);try{const o=await function(c,h){const f=ke(c);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let _;return f.mutationQueue.lookupMutationBatch(m,h).next(E=>(Ke(E!==null,37113),_=E.keys(),f.mutationQueue.removeMutationBatch(m,E))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,_,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,_)).next(()=>f.localDocuments.getDocuments(m,_))})}(i.localStore,e);NE(i,e,t),bE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await uu(i,o)}catch(o){await Sa(o)}}function bE(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function NE(n,e,t){const i=ke(n);let o=i.Au[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.Au[i.currentUser.toKey()]=o}}function Bp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Pu.get(e))n.hu.delete(i),t&&n.lu.gu(i,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(i=>{n.du.containsKey(i)||DE(n,i)})}function DE(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(Nm(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),$m(n))}function j_(n,e,t){for(const i of t)i instanceof CE?(n.du.addReference(i.key,e),SP(n,i)):i instanceof RE?(fe(Bm,"Document no longer in limbo: "+i.key),n.du.removeReference(i.key,e),n.du.containsKey(i.key)||DE(n,i.key)):Ae(19791,{pu:i})}function SP(n,e){const t=e.key,i=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(i)||(fe(Bm,"New document in limbo: "+t),n.Tu.add(i),$m(n))}function $m(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new Te(nt.fromString(e)),i=n.Vu.next();n.Eu.set(i,new hP(t)),n.Iu=n.Iu.insert(t,i),EE(n.remoteStore,new zi(Tr(qd(t.path)),i,"TargetPurposeLimboResolution",zd.le))}}async function uu(n,e,t){const i=ke(n),o=[],a=[],c=[];i.hu.isEmpty()||(i.hu.forEach((h,f)=>{c.push(i.fu(f,e,t).then(m=>{var _;if((m||t)&&i.isPrimaryClient){const E=m?!m.fromCache:(_=t==null?void 0:t.targetChanges.get(f.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){o.push(m);const E=km.Rs(f.targetId,m);a.push(E)}}))}),await Promise.all(c),i.lu.Y_(o),await async function(f,m){const _=ke(f);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>Z.forEach(m,w=>Z.forEach(w.ds,C=>_.persistence.referenceDelegate.addReference(E,w.targetId,C)).next(()=>Z.forEach(w.As,C=>_.persistence.referenceDelegate.removeReference(E,w.targetId,C)))))}catch(E){if(!xa(E))throw E;fe(bm,"Failed to update sequence numbers: "+E)}for(const E of m){const w=E.targetId;if(!E.fromCache){const C=_.xs.get(w),R=C.snapshotVersion,V=C.withLastLimboFreeSnapshotVersion(R);_.xs=_.xs.insert(w,V)}}}(i.localStore,a))}async function xP(n,e){const t=ke(n);if(!t.currentUser.isEqual(e)){fe(Bm,"User change. New user:",e.toKey());const i=await yE(t.localStore,e);t.currentUser=e,function(a,c){a.Ru.forEach(h=>{h.forEach(f=>{f.reject(new me(ee.CANCELLED,c))})}),a.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await uu(t,i.ks)}}function IP(n,e){const t=ke(n),i=t.Eu.get(e);if(i&&i.cu)return Ue().add(i.key);{let o=Ue();const a=t.Pu.get(e);if(!a)return o;for(const c of a){const h=t.hu.get(c);o=o.unionWith(h.view.eu)}return o}}function OE(n){const e=ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=kE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wP.bind(null,e),e.lu.Y_=lP.bind(null,e.eventManager),e.lu.gu=uP.bind(null,e.eventManager),e}function AP(n){const e=ke(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TP.bind(null,e),e}class wd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return kR(this.persistence,new CR,e.initialUser,this.serializer)}Su(e){return new gE(Pm.fi,this.serializer)}bu(e){return new MR}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wd.provider={build:()=>new wd};class CP extends wd{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){Ke(this.persistence.referenceDelegate instanceof vd,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new hR(i,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?fn.withCacheSize(this.cacheSizeBytes):fn.DEFAULT;return new gE(i=>vd.fi(i,t),this.serializer)}}class $p{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>M_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=xP.bind(null,this.syncEngine),await sP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aP}()}createDatastore(e){const t=Yd(e.databaseInfo.databaseId),i=function(a){return new BR(a)}(e.databaseInfo);return function(a,c,h,f){return new WR(a,c,h,f)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,a,c,h){return new KR(i,o,a,c,h)}(this.localStore,this.datastore,e.asyncQueue,t=>M_(this.syncEngine,t,0),function(){return b_.C()?new b_:new jR}())}createSyncEngine(e,t){return function(o,a,c,h,f,m,_){const E=new fP(o,a,c,h,f,m);return _&&(E.mu=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const a=ke(o);fe($s,"RemoteStore shutting down."),a.da.add(5),await lu(a),a.Ra.shutdown(),a.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$p.provider={build:()=>new $p};/**
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
 */class qm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):si("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const es="FirestoreClient";class RP{constructor(e,t,i,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Gt.UNAUTHENTICATED,this.clientId=Pw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async c=>{fe(es,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(fe(es,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Mm(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function op(n,e){n.asyncQueue.verifyOperationInProgress(),fe(es,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await yE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function F_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await PP(n);fe(es,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>D_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>D_(e.remoteStore,o)),n._onlineComponents=e}async function PP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe(es,"Using user provided OfflineComponentProvider");try{await op(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;sa("Error using user provided cache. Falling back to memory cache: "+t),await op(n,new wd)}}else fe(es,"Using default OfflineComponentProvider"),await op(n,new CP(void 0));return n._offlineComponents}async function VE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe(es,"Using user provided OnlineComponentProvider"),await F_(n,n._uninitializedComponentsProvider._online)):(fe(es,"Using default OnlineComponentProvider"),await F_(n,new $p))),n._onlineComponents}function kP(n){return VE(n).then(e=>e.syncEngine)}async function Ed(n){const e=await VE(n),t=e.eventManager;return t.onListen=pP.bind(null,e.syncEngine),t.onUnlisten=yP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vP.bind(null,e.syncEngine),t}function bP(n,e,t={}){const i=new Zr;return n.asyncQueue.enqueueAndForget(async()=>function(a,c,h,f,m){const _=new qm({next:w=>{_.xu(),c.enqueueAndForget(()=>Fm(a,E));const C=w.docs.has(h);!C&&w.fromCache?m.reject(new me(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&w.fromCache&&f&&f.source==="server"?m.reject(new me(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),E=new zm(qd(h.path),_,{includeMetadataChanges:!0,Qa:!0});return jm(a,E)}(await Ed(n),n.asyncQueue,e,t,i)),i.promise}function NP(n,e,t={}){const i=new Zr;return n.asyncQueue.enqueueAndForget(async()=>function(a,c,h,f,m){const _=new qm({next:w=>{_.xu(),c.enqueueAndForget(()=>Fm(a,E)),w.fromCache&&f.source==="server"?m.reject(new me(ee.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(w)},error:w=>m.reject(w)}),E=new zm(h,_,{includeMetadataChanges:!0,Qa:!0});return jm(a,E)}(await Ed(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function LE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const U_=new Map;/**
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
 */function ME(n,e,t){if(!t)throw new me(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function DP(n,e,t,i){if(e===!0&&i===!0)throw new me(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function z_(n){if(!Te.isDocumentKey(n))throw new me(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function B_(n){if(Te.isDocumentKey(n))throw new me(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function gn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new me(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zd(n);throw new me(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const jE="firestore.googleapis.com",$_=!0;class q_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new me(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jE,this.ssl=$_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:$_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cR)throw new me(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=LE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new me(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new me(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new me(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new q_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new q_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new zA;switch(i.type){case"firstParty":return new HA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new me(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=U_.get(t);i&&(fe("ComponentProvider","Removing Datastore"),U_.delete(t),i.terminate())}(this),Promise.resolve()}}function OP(n,e,t,i={}){var o;n=gn(n,eh);const a=wa(e),c=n._getSettings(),h=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(hw(`https://${f}`),fw("Firestore",!0)),c.host!==jE&&c.host!==f&&sa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},c),{host:f,ssl:a,emulatorOptions:i});if(!Us(m,h)&&(n._setSettings(m),i.mockUserToken)){let _,E;if(typeof i.mockUserToken=="string")_=i.mockUserToken,E=Gt.MOCK_USER;else{_=pI(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new me(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Gt(w)}n._authCredentials=new BA(new Cw(_,E))}}/**
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
 */class Js{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Js(this.firestore,e,this._query)}}class Yt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class Gi extends Js{constructor(e,t,i){super(e,t,qd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new Te(e))}withConverter(e){return new Gi(this.firestore,e,this._path)}}function da(n,e,...t){if(n=Ct(n),ME("collection","path",e),n instanceof eh){const i=nt.fromString(e,...t);return B_(i),new Gi(n,null,i)}{if(!(n instanceof Yt||n instanceof Gi))throw new me(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(nt.fromString(e,...t));return B_(i),new Gi(n.firestore,null,i)}}function nr(n,e,...t){if(n=Ct(n),arguments.length===1&&(e=Pw.newId()),ME("doc","path",e),n instanceof eh){const i=nt.fromString(e,...t);return z_(i),new Yt(n,null,new Te(i))}{if(!(n instanceof Yt||n instanceof Gi))throw new me(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(nt.fromString(e,...t));return z_(i),new Yt(n.firestore,n instanceof Gi?n.converter:null,new Te(i))}}/**
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
 */const H_="AsyncQueue";class W_{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new _E(this,"async_queue_retry"),this.rc=()=>{const i=sp();i&&fe(H_,"Visibility state changed to "+i.visibilityState),this.x_.b_()},this.sc=e;const t=sp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=sp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Zr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!xa(e))throw e;fe(H_,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(i=>{throw this.Xu=i,this.ec=!1,si("INTERNAL UNHANDLED ERROR: ",G_(i)),i}).then(i=>(this.ec=!1,i))));return this.sc=t,t}enqueueAfterDelay(e,t,i){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const o=Lm.createAndSchedule(this,e,t,i,a=>this.uc(a));return this.Zu.push(o),o}oc(){this.Xu&&Ae(47125,{cc:G_(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function G_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function K_(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of i)if(a in o&&typeof o[a]=="function")return!0;return!1}(n,["next","error","complete"])}class ai extends eh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new W_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new W_(e),this._firestoreClient=void 0,await e}}}function VP(n,e){const t=typeof n=="object"?n:yw(),i=typeof n=="string"?n:dd,o=gm(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=hI("firestore");a&&OP(o,...a)}return o}function th(n){if(n._terminated)throw new me(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||LP(n),n._firestoreClient}function LP(n){var e,t,i;const o=n._freezeSettings(),a=function(h,f,m,_){return new oC(h,f,m,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,LE(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new RP(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class ha{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ha(zt.fromBase64String(e))}catch(t){throw new me(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ha(zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class nh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new me(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hm{constructor(e){this._methodName=e}}/**
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
 */class Wm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new me(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new me(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Gm{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const MP=/^__.*__$/;class jP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,t,this.fieldTransforms):new ou(e,this.data,t,this.fieldTransforms)}}class FE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function UE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ic:n})}}class Km{constructor(e,t,i,o,a,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.Ec(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Km(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:i,Rc:!1});return o.Vc(e),o}mc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:i,Rc:!1});return o.Ec(),o}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Td(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(UE(this.Ic)&&MP.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class FP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Yd(e)}bc(e,t,i,o=!1){return new Km({Ic:e,methodName:t,wc:i,path:Ut.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rh(n){const e=n._freezeSettings(),t=Yd(n._databaseId);return new FP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zE(n,e,t,i,o,a={}){const c=n.bc(a.merge||a.mergeFields?2:0,e,t,o);Qm("Data must be an object, but it was:",c,i);const h=BE(i,c);let f,m;if(a.merge)f=new In(c.fieldMask),m=c.fieldTransforms;else if(a.mergeFields){const _=[];for(const E of a.mergeFields){const w=qp(e,E,t);if(!c.contains(w))throw new me(ee.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);qE(_,w)||_.push(w)}f=new In(_),m=c.fieldTransforms.filter(E=>f.covers(E.field))}else f=null,m=c.fieldTransforms;return new jP(new pn(h),f,m)}class ih extends Hm{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ih}}function UP(n,e,t,i){const o=n.bc(1,e,t);Qm("Data must be an object, but it was:",o,i);const a=[],c=pn.empty();rs(i,(f,m)=>{const _=Ym(e,f,t);m=Ct(m);const E=o.mc(_);if(m instanceof ih)a.push(_);else{const w=cu(m,E);w!=null&&(a.push(_),c.set(_,w))}});const h=new In(a);return new FE(c,h,o.fieldTransforms)}function zP(n,e,t,i,o,a){const c=n.bc(1,e,t),h=[qp(e,i,t)],f=[o];if(a.length%2!=0)throw new me(ee.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<a.length;w+=2)h.push(qp(e,a[w])),f.push(a[w+1]);const m=[],_=pn.empty();for(let w=h.length-1;w>=0;--w)if(!qE(m,h[w])){const C=h[w];let R=f[w];R=Ct(R);const V=c.mc(C);if(R instanceof ih)m.push(C);else{const N=cu(R,V);N!=null&&(m.push(C),_.set(C,N))}}const E=new In(m);return new FE(_,E,c.fieldTransforms)}function BP(n,e,t,i=!1){return cu(t,n.bc(i?4:3,e))}function cu(n,e){if($E(n=Ct(n)))return Qm("Unsupported field value:",e,n),BE(n,e);if(n instanceof Hm)return function(i,o){if(!UE(o.Ic))throw o.gc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(i,o){const a=[];let c=0;for(const h of i){let f=cu(h,o.fc(c));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),c++}return{arrayValue:{values:a}}}(n,e)}return function(i,o){if((i=Ct(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return PC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=It.fromDate(i);return{timestampValue:yd(o.serializer,a)}}if(i instanceof It){const a=new It(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:yd(o.serializer,a)}}if(i instanceof Wm)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ha)return{bytesValue:lE(o.serializer,i._byteString)};if(i instanceof Yt){const a=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw o.gc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Cm(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Gm)return function(c,h){return{mapValue:{fields:{[Mw]:{stringValue:jw},[hd]:{arrayValue:{values:c.toArray().map(m=>{if(typeof m!="number")throw h.gc("VectorValues must only contain numeric values.");return Sm(h.serializer,m)})}}}}}}(i,o);throw o.gc(`Unsupported field value: ${Zd(i)}`)}(n,e)}function BE(n,e){const t={};return bw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(n,(i,o)=>{const a=cu(o,e.Ac(i));a!=null&&(t[i]=a)}),{mapValue:{fields:t}}}function $E(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof It||n instanceof Wm||n instanceof ha||n instanceof Yt||n instanceof Hm||n instanceof Gm)}function Qm(n,e,t){if(!$E(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Zd(t);throw i==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+i)}}function qp(n,e,t){if((e=Ct(e))instanceof nh)return e._internalPath;if(typeof e=="string")return Ym(n,e);throw Td("Field path arguments must be of type string or ",n,!1,void 0,t)}const $P=new RegExp("[~\\*/\\[\\]]");function Ym(n,e,t){if(e.search($P)>=0)throw Td(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nh(...e.split("."))._internalPath}catch{throw Td(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Td(n,e,t,i,o){const a=i&&!i.isEmpty(),c=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(a||c)&&(f+=" (found",a&&(f+=` in field ${i}`),c&&(f+=` in document ${o}`),f+=")"),new me(ee.INVALID_ARGUMENT,h+n+f)}function qE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class HE{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qP extends HE{data(){return super.data()}}function Xm(n,e){return typeof e=="string"?Ym(n,e):e instanceof nh?e._internalPath:e._delegate._internalPath}/**
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
 */function WE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new me(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jm{}class HP extends Jm{}function fa(n,e,...t){let i=[];e instanceof Jm&&i.push(e),i=i.concat(t),function(a){const c=a.filter(f=>f instanceof Zm).length,h=a.filter(f=>f instanceof sh).length;if(c>1||c>0&&h>0)throw new me(ee.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class sh extends HP{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new sh(e,t,i)}_apply(e){const t=this._parse(e);return GE(e._query,t),new Js(e.firestore,e.converter,Dp(e._query,t))}_parse(e){const t=rh(e.firestore);return function(a,c,h,f,m,_,E){let w;if(m.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new me(ee.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){Y_(E,_);const R=[];for(const V of E)R.push(Q_(f,a,V));w={arrayValue:{values:R}}}else w=Q_(f,a,E)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||Y_(E,_),w=BP(h,c,E,_==="in"||_==="not-in");return _t.create(m,_,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ki(n,e,t){const i=e,o=Xm("where",n);return sh._create(o,i,t)}class Zm extends Jm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Zm(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:sr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,a){let c=o;const h=a.getFlattenedFilters();for(const f of h)GE(c,f),c=Dp(c,f)}(e._query,t),new Js(e.firestore,e.converter,Dp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Q_(n,e,t){if(typeof(t=Ct(t))=="string"){if(t==="")throw new me(ee.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ww(e)&&t.indexOf("/")!==-1)throw new me(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(nt.fromString(t));if(!Te.isDocumentKey(i))throw new me(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return u_(n,new Te(i))}if(t instanceof Yt)return u_(n,t._key);throw new me(ee.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zd(t)}.`)}function Y_(n,e){if(!Array.isArray(n)||n.length===0)throw new me(ee.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function GE(n,e){const t=function(o,a){for(const c of o)for(const h of c.getFlattenedFilters())if(a.indexOf(h.op)>=0)return h.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new me(ee.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new me(ee.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class WP{convertValue(e,t="none"){switch(Ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return rs(e,(o,a)=>{i[o]=this.convertValue(a,t)}),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[hd].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>pt(c.doubleValue));return new Gm(a)}convertGeoPoint(e){return new Wm(pt(e.latitude),pt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=$d(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Hl(e));default:return null}}convertTimestamp(e){const t=Yi(e);return new It(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=nt.fromString(e);Ke(pE(i),9688,{name:e});const o=new Wl(i.get(1),i.get(3)),a=new Te(i.popFirst(5));return o.isEqual(t)||si(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function KE(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class bl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class QE extends HE{constructor(e,t,i,o,a,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Xm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Xc extends QE{data(e={}){return super.data(e)}}class YE{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new bl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Xc(this._firestore,this._userDataWriter,i.key,i,new bl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new me(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(h=>{const f=new Xc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new bl(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(h=>a||h.type!==3).map(h=>{const f=new Xc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new bl(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);let m=-1,_=-1;return h.type!==0&&(m=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),_=c.indexOf(h.doc.key)),{type:GP(h.type),doc:f,oldIndex:m,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function GP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:n})}}/**
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
 */function qs(n){n=gn(n,Yt);const e=gn(n.firestore,ai);return bP(th(e),n._key).then(t=>JE(e,n,t))}class eg extends WP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ha(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,t)}}function tg(n){n=gn(n,Js);const e=gn(n.firestore,ai),t=th(e),i=new eg(e);return WE(n._query),NP(t,n._query).then(o=>new YE(e,i,n,o))}function Sd(n,e,t){n=gn(n,Yt);const i=gn(n.firestore,ai),o=KE(n.converter,e,t);return oh(i,[zE(rh(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Mn.none())])}function XE(n,e,t,...i){n=gn(n,Yt);const o=gn(n.firestore,ai),a=rh(o);let c;return c=typeof(e=Ct(e))=="string"||e instanceof nh?zP(a,"updateDoc",n._key,e,t,i):UP(a,"updateDoc",n._key,e),oh(o,[c.toMutation(n._key,Mn.exists(!0))])}function KP(n){return oh(gn(n.firestore,ai),[new xm(n._key,Mn.none())])}function QP(n,e){const t=gn(n.firestore,ai),i=nr(n),o=KE(n.converter,e);return oh(t,[zE(rh(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Mn.exists(!1))]).then(()=>i)}function ng(n,...e){var t,i,o;n=Ct(n);let a={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||K_(e[c])||(a=e[c],c++);const h={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(K_(e[c])){const E=e[c];e[c]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[c+1]=(i=E.error)===null||i===void 0?void 0:i.bind(E),e[c+2]=(o=E.complete)===null||o===void 0?void 0:o.bind(E)}let f,m,_;if(n instanceof Yt)m=gn(n.firestore,ai),_=qd(n._key.path),f={next:E=>{e[c]&&e[c](JE(m,n,E))},error:e[c+1],complete:e[c+2]};else{const E=gn(n,Js);m=gn(E.firestore,ai),_=E._query;const w=new eg(m);f={next:C=>{e[c]&&e[c](new YE(m,w,E,C))},error:e[c+1],complete:e[c+2]},WE(n._query)}return function(w,C,R,V){const N=new qm(V),M=new zm(C,N,R);return w.asyncQueue.enqueueAndForget(async()=>jm(await Ed(w),M)),()=>{N.xu(),w.asyncQueue.enqueueAndForget(async()=>Fm(await Ed(w),M))}}(th(m),_,h,f)}function oh(n,e){return function(i,o){const a=new Zr;return i.asyncQueue.enqueueAndForget(async()=>_P(await kP(i),o,a)),a.promise}(th(n),e)}function JE(n,e,t){const i=t.docs.get(e._key),o=new eg(n);return new QE(n,o,e._key,i,new bl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Ta=o})(Ea),ia(new zs("firestore",(i,{instanceIdentifier:o,options:a})=>{const c=i.getProvider("app").getImmediate(),h=new ai(new $A(i.getProvider("auth-internal")),new WA(c,i.getProvider("app-check-internal")),function(m,_){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new me(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wl(m.options.projectId,_)}(c,o),c);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),Hi(Xv,Jv,e),Hi(Xv,Jv,"esm2017")})();var YP="firebase",XP="11.9.1";/**
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
 */Hi(YP,XP,"app");function rg(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function ZE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JP=ZE,e1=new ru("auth","Firebase",ZE());/**
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
 */const xd=new pm("@firebase/auth");function ZP(n,...e){xd.logLevel<=Fe.WARN&&xd.warn(`Auth (${Ea}): ${n}`,...e)}function Jc(n,...e){xd.logLevel<=Fe.ERROR&&xd.error(`Auth (${Ea}): ${n}`,...e)}/**
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
 */function or(n,...e){throw ig(n,...e)}function xr(n,...e){return ig(n,...e)}function t1(n,e,t){const i=Object.assign(Object.assign({},JP()),{[e]:t});return new ru("auth","Firebase",i).create(e,{appName:n.name})}function ei(n){return t1(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ig(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return e1.create(n,...e)}function Ie(n,e,...t){if(!n)throw ig(e,...t)}function Yr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Jc(e),new Error(e)}function li(n,e){n||Yr(e)}/**
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
 */function Hp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ek(){return X_()==="http:"||X_()==="https:"}function X_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function tk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ek()||wI()||"connection"in navigator)?navigator.onLine:!0}function nk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class du{constructor(e,t){this.shortDelay=e,this.longDelay=t,li(t>e,"Short delay should be less than long delay!"),this.isMobile=yI()||EI()}get(){return tk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sg(n,e){li(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class n1{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ik=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sk=new du(3e4,6e4);function ss(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function os(n,e,t,i,o={}){return r1(n,o,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const h=iu(Object.assign({key:n.config.apiKey},c)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return _I()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&wa(n.emulatorConfig.host)&&(m.credentials="include"),n1.fetch()(await i1(n,n.config.apiHost,t,h),m)})}async function r1(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},rk),e);try{const o=new ak(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw jc(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const h=a.ok?c.errorMessage:c.error.message,[f,m]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw jc(n,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw jc(n,"email-already-in-use",c);if(f==="USER_DISABLED")throw jc(n,"user-disabled",c);const _=i[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw t1(n,_,m);or(n,_)}}catch(o){if(o instanceof ui)throw o;or(n,"network-request-failed",{message:String(o)})}}async function hu(n,e,t,i,o={}){const a=await os(n,e,t,i,o);return"mfaPendingCredential"in a&&or(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function i1(n,e,t,i){const o=`${e}${t}?${i}`,a=n,c=a.config.emulator?sg(n.config,o):`${n.config.apiScheme}://${o}`;return ik.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function ok(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ak{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(xr(this.auth,"network-request-failed")),sk.get())})}}function jc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=xr(n,e,i);return o.customData._tokenResponse=t,o}function J_(n){return n!==void 0&&n.enterprise!==void 0}class lk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ok(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uk(n,e){return os(n,"GET","/v2/recaptchaConfig",ss(n,e))}/**
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
 */async function ck(n,e){return os(n,"POST","/v1/accounts:delete",e)}async function Id(n,e){return os(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ul(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dk(n,e=!1){const t=Ct(n),i=await t.getIdToken(e),o=og(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:Ul(ap(o.auth_time)),issuedAtTime:Ul(ap(o.iat)),expirationTime:Ul(ap(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function ap(n){return Number(n)*1e3}function og(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Jc("JWT malformed, contained fewer than 3 sections"),null;try{const o=lw(t);return o?JSON.parse(o):(Jc("Failed to decode base64 JWT payload"),null)}catch(o){return Jc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Z_(n){const e=og(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ui&&hk(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function hk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class fk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ul(this.lastLoginAt),this.creationTime=Ul(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ad(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Yl(n,Id(t,{idToken:i}));Ie(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?s1(a.providerUserInfo):[],h=mk(n.providerData,c),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),_=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Wp(a.createdAt,a.lastLoginAt),isAnonymous:_};Object.assign(n,E)}async function pk(n){const e=Ct(n);await Ad(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mk(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function s1(n){return n.map(e=>{var{providerId:t}=e,i=rg(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function gk(n,e){const t=await r1(n,{},async()=>{const i=iu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=await i1(n,o,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:h,body:i};return n.emulatorConfig&&wa(n.emulatorConfig.host)&&(f.credentials="include"),n1.fetch()(c,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yk(n,e){return os(n,"POST","/v2/accounts:revokeToken",ss(n,e))}/**
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
 */class ea{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Z_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=Z_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await gk(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,c=new ea;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(Ie(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ea,this.toJSON())}_performRefresh(){return Yr("not implemented")}}/**
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
 */function Vi(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=rg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Wp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Yl(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dk(this,e)}reload(){return pk(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ad(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(ei(this.auth));const e=await this.getIdToken();return await Yl(this,ck(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,c,h,f,m,_;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(o=t.email)!==null&&o!==void 0?o:void 0,C=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,R=(c=t.photoURL)!==null&&c!==void 0?c:void 0,V=(h=t.tenantId)!==null&&h!==void 0?h:void 0,N=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,M=(m=t.createdAt)!==null&&m!==void 0?m:void 0,z=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:G,emailVerified:J,isAnonymous:te,providerData:Y,stsTokenManager:P}=t;Ie(G&&P,e,"internal-error");const A=ea.fromJSON(this.name,P);Ie(typeof G=="string",e,"internal-error"),Vi(E,e.name),Vi(w,e.name),Ie(typeof J=="boolean",e,"internal-error"),Ie(typeof te=="boolean",e,"internal-error"),Vi(C,e.name),Vi(R,e.name),Vi(V,e.name),Vi(N,e.name),Vi(M,e.name),Vi(z,e.name);const I=new er({uid:G,auth:e,email:w,emailVerified:J,displayName:E,isAnonymous:te,photoURL:R,phoneNumber:C,tenantId:V,stsTokenManager:A,createdAt:M,lastLoginAt:z});return Y&&Array.isArray(Y)&&(I.providerData=Y.map(D=>Object.assign({},D))),N&&(I._redirectEventId=N),I}static async _fromIdTokenResponse(e,t,i=!1){const o=new ea;o.updateFromServerResponse(t);const a=new er({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Ad(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?s1(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),h=new ea;h.updateFromIdToken(i);const f=new er({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Wp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
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
 */const e0=new Map;function Xr(n){li(n instanceof Function,"Expected a class definition");let e=e0.get(n);return e?(li(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,e0.set(n,e),e)}/**
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
 */class o1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}o1.type="NONE";const t0=o1;/**
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
 */function Zc(n,e,t){return`firebase:${n}:${e}:${t}`}class ta{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=Zc(this.userKey,o.apiKey,a),this.fullPersistenceKey=Zc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Id(this.auth,{idToken:e}).catch(()=>{});return t?er._fromGetAccountInfoResponse(this.auth,t,e):null}return er._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ta(Xr(t0),e,i);const o=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=o[0]||Xr(t0);const c=Zc(i,e.config.apiKey,e.name);let h=null;for(const m of t)try{const _=await m._get(c);if(_){let E;if(typeof _=="string"){const w=await Id(e,{idToken:_}).catch(()=>{});if(!w)break;E=await er._fromGetAccountInfoResponse(e,w,_)}else E=er._fromJSON(e,_);m!==a&&(h=E),a=m;break}}catch{}const f=o.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new ta(a,e,i):(a=f[0],h&&await a._set(c,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(c)}catch{}})),new ta(a,e,i))}}/**
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
 */function n0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(h1(e))return"Blackberry";if(f1(e))return"Webos";if(l1(e))return"Safari";if((e.includes("chrome/")||u1(e))&&!e.includes("edge/"))return"Chrome";if(d1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function a1(n=Xt()){return/firefox\//i.test(n)}function l1(n=Xt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u1(n=Xt()){return/crios\//i.test(n)}function c1(n=Xt()){return/iemobile/i.test(n)}function d1(n=Xt()){return/android/i.test(n)}function h1(n=Xt()){return/blackberry/i.test(n)}function f1(n=Xt()){return/webos/i.test(n)}function ag(n=Xt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vk(n=Xt()){var e;return ag(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _k(){return TI()&&document.documentMode===10}function p1(n=Xt()){return ag(n)||d1(n)||f1(n)||h1(n)||/windows phone/i.test(n)||c1(n)}/**
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
 */function m1(n,e=[]){let t;switch(n){case"Browser":t=n0(Xt());break;case"Worker":t=`${n0(Xt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ea}/${i}`}/**
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
 */class wk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,h)=>{try{const f=e(a);c(f)}catch(f){h(f)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Ek(n,e={}){return os(n,"GET","/v2/passwordPolicy",ss(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Tk=6;class Sk{constructor(e){var t,i,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Tk,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,c,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(i=f.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(c=f.containsNumericCharacter)!==null&&c!==void 0?c:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class xk{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new r0(this),this.idTokenSubscription=new r0(this),this.beforeStateQueue=new wk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xr(t)),this._initializationPromise=this.queue(async()=>{var i,o,a;if(!this._deleted&&(this.persistenceManager=await ta.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Id(this,{idToken:e}),i=await er._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ln(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===h)&&(f!=null&&f.user)&&(o=f.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ad(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(ei(this));const t=e?Ct(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(ei(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(ei(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ek(this),t=new Sk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ru("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await yk(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await ta.create(this,[Xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(h,this,"internal-error"),h.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,i,o);return()=>{c=!0,f()}}else{const f=e.addObserver(t);return()=>{c=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ZP(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zs(n){return Ct(n)}class r0{constructor(e){this.auth=e,this.observer=null,this.addObserver=kI(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ik(n){ah=n}function g1(n){return ah.loadJS(n)}function Ak(){return ah.recaptchaEnterpriseScript}function Ck(){return ah.gapiScript}function Rk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Pk{constructor(){this.enterprise=new kk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class kk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const bk="recaptcha-enterprise",y1="NO_RECAPTCHA";class Nk{constructor(e){this.type=bk,this.auth=Zs(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,h)=>{uk(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new lk(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,c(m.siteKey)}}).catch(f=>{h(f)})})}function o(a,c,h){const f=window.grecaptcha;J_(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{c(m)}).catch(()=>{c(y1)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Pk().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{i(this.auth).then(h=>{if(!t&&J_(window.grecaptcha))o(h,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let f=Ak();f.length!==0&&(f+=h),g1(f).then(()=>{o(h,a,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function i0(n,e,t,i=!1,o=!1){const a=new Nk(n);let c;if(o)c=y1;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return i?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Gp(n,e,t,i,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await i0(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await i0(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(c)})}/**
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
 */function Dk(n,e){const t=gm(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Us(a,e??{}))return o;or(o,"already-initialized")}return t.initialize({options:e})}function Ok(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Xr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Vk(n,e,t){const i=Zs(n);Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=v1(e),{host:c,port:h}=Lk(e),f=h===null?"":`:${h}`,m={url:`${a}//${c}${f}/`},_=Object.freeze({host:c,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ie(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ie(Us(m,i.config.emulator)&&Us(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=m,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,wa(c)?(hw(`${a}//${c}${f}`),fw("Auth",!0)):Mk()}function v1(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Lk(n){const e=v1(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:s0(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:s0(c)}}}function s0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Mk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class lg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yr("not implemented")}_getIdTokenResponse(e){return Yr("not implemented")}_linkToIdToken(e,t){return Yr("not implemented")}_getReauthenticationResolver(e){return Yr("not implemented")}}async function jk(n,e){return os(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Fk(n,e){return hu(n,"POST","/v1/accounts:signInWithPassword",ss(n,e))}/**
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
 */async function Uk(n,e){return hu(n,"POST","/v1/accounts:signInWithEmailLink",ss(n,e))}async function zk(n,e){return hu(n,"POST","/v1/accounts:signInWithEmailLink",ss(n,e))}/**
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
 */class Xl extends lg{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Xl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Xl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gp(e,t,"signInWithPassword",Fk);case"emailLink":return Uk(e,{email:this._email,oobCode:this._password});default:or(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gp(e,i,"signUpPassword",jk);case"emailLink":return zk(e,{idToken:t,email:this._email,oobCode:this._password});default:or(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function na(n,e){return hu(n,"POST","/v1/accounts:signInWithIdp",ss(n,e))}/**
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
 */const Bk="http://localhost";class Hs extends lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):or("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=rg(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Hs(i,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return na(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,na(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,na(e,t)}buildRequest(){const e={requestUri:Bk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=iu(t)}return e}}/**
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
 */function $k(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qk(n){const e=Al(Cl(n)).link,t=e?Al(Cl(e)).deep_link_id:null,i=Al(Cl(n)).deep_link_id;return(i?Al(Cl(i)).link:null)||i||t||e||n}class ug{constructor(e){var t,i,o,a,c,h;const f=Al(Cl(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,_=(i=f.oobCode)!==null&&i!==void 0?i:null,E=$k((o=f.mode)!==null&&o!==void 0?o:null);Ie(m&&_&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=_,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=f.lang)!==null&&c!==void 0?c:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=qk(e);try{return new ug(t)}catch{return null}}}/**
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
 */class Aa{constructor(){this.providerId=Aa.PROVIDER_ID}static credential(e,t){return Xl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ug.parseLink(t);return Ie(i,"argument-error"),Xl._fromEmailAndCode(e,i.code,i.tenantId)}}Aa.PROVIDER_ID="password";Aa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Aa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fu extends _1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mi extends fu{constructor(){super("facebook.com")}static credential(e){return Hs._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mi.credential(e.oauthAccessToken)}catch{return null}}}Mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mi.PROVIDER_ID="facebook.com";/**
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
 */class ji extends fu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Hs._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ji.credential(t,i)}catch{return null}}}ji.GOOGLE_SIGN_IN_METHOD="google.com";ji.PROVIDER_ID="google.com";/**
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
 */class Fi extends fu{constructor(){super("github.com")}static credential(e){return Hs._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fi.credential(e.oauthAccessToken)}catch{return null}}}Fi.GITHUB_SIGN_IN_METHOD="github.com";Fi.PROVIDER_ID="github.com";/**
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
 */class Ui extends fu{constructor(){super("twitter.com")}static credential(e,t){return Hs._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ui.credential(t,i)}catch{return null}}}Ui.TWITTER_SIGN_IN_METHOD="twitter.com";Ui.PROVIDER_ID="twitter.com";/**
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
 */async function Hk(n,e){return hu(n,"POST","/v1/accounts:signUp",ss(n,e))}/**
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
 */class Ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await er._fromIdTokenResponse(e,i,o),c=o0(i);return new Ws({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=o0(i);return new Ws({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function o0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Cd extends ui{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Cd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Cd(e,t,i,o)}}function w1(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Cd._fromErrorAndOperation(n,a,e,i):a})}async function Wk(n,e,t=!1){const i=await Yl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ws._forOperation(n,"link",i)}/**
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
 */async function Gk(n,e,t=!1){const{auth:i}=n;if(Ln(i.app))return Promise.reject(ei(i));const o="reauthenticate";try{const a=await Yl(n,w1(i,o,e,n),t);Ie(a.idToken,i,"internal-error");const c=og(a.idToken);Ie(c,i,"internal-error");const{sub:h}=c;return Ie(n.uid===h,i,"user-mismatch"),Ws._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&or(i,"user-mismatch"),a}}/**
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
 */async function E1(n,e,t=!1){if(Ln(n.app))return Promise.reject(ei(n));const i="signIn",o=await w1(n,i,e),a=await Ws._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}async function Kk(n,e){return E1(Zs(n),e)}/**
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
 */async function T1(n){const e=Zs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Qk(n,e,t){if(Ln(n.app))return Promise.reject(ei(n));const i=Zs(n),c=await Gp(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hk).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&T1(n),f}),h=await Ws._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(h.user),h}function Yk(n,e,t){return Ln(n.app)?Promise.reject(ei(n)):Kk(Ct(n),Aa.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&T1(n),i})}function Xk(n,e,t,i){return Ct(n).onIdTokenChanged(e,t,i)}function Jk(n,e,t){return Ct(n).beforeAuthStateChanged(e,t)}function Zk(n,e,t,i){return Ct(n).onAuthStateChanged(e,t,i)}function eb(n){return Ct(n).signOut()}const Rd="__sak";/**
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
 */class S1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Rd,"1"),this.storage.removeItem(Rd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tb=1e3,nb=10;class x1 extends S1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,f)=>{this.notifyListeners(c,f)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);_k()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,nb):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},tb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}x1.type="LOCAL";const rb=x1;/**
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
 */class I1 extends S1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}I1.type="SESSION";const A1=I1;/**
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
 */function ib(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new lh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(c).map(async m=>m(t.origin,a)),f=await ib(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
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
 */function cg(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class sb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((h,f)=>{const m=cg("",20);o.port1.start();const _=setTimeout(()=>{f(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const w=E;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(_),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(w.data.response);break;default:clearTimeout(_),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Ir(){return window}function ob(n){Ir().location.href=n}/**
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
 */function C1(){return typeof Ir().WorkerGlobalScope<"u"&&typeof Ir().importScripts=="function"}async function ab(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ub(){return C1()?self:null}/**
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
 */const R1="firebaseLocalStorageDb",cb=1,Pd="firebaseLocalStorage",P1="fbase_key";class pu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uh(n,e){return n.transaction([Pd],e?"readwrite":"readonly").objectStore(Pd)}function db(){const n=indexedDB.deleteDatabase(R1);return new pu(n).toPromise()}function Kp(){const n=indexedDB.open(R1,cb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Pd,{keyPath:P1})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Pd)?e(i):(i.close(),await db(),e(await Kp()))})})}async function a0(n,e,t){const i=uh(n,!0).put({[P1]:e,value:t});return new pu(i).toPromise()}async function hb(n,e){const t=uh(n,!1).get(e),i=await new pu(t).toPromise();return i===void 0?null:i.value}function l0(n,e){const t=uh(n,!0).delete(e);return new pu(t).toPromise()}const fb=800,pb=3;class k1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>pb)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(ub()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ab(),!this.activeServiceWorker)return;this.sender=new sb(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kp();return await a0(e,Rd,"1"),await l0(e,Rd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>a0(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>hb(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>l0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=uh(o,!1).getAll();return new pu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k1.type="LOCAL";const mb=k1;new du(3e4,6e4);/**
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
 */function gb(n,e){return e?Xr(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class dg extends lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return na(e,this._buildIdpRequest())}_linkToIdToken(e,t){return na(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return na(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yb(n){return E1(n.auth,new dg(n),n.bypassAuthState)}function vb(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),Gk(t,new dg(n),n.bypassAuthState)}async function _b(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),Wk(t,new dg(n),n.bypassAuthState)}/**
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
 */class b1{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:c,type:h}=e;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yb;case"linkViaPopup":case"linkViaRedirect":return _b;case"reauthViaPopup":case"reauthViaRedirect":return vb;default:or(this.auth,"internal-error")}}resolve(e){li(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){li(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wb=new du(2e3,1e4);class Xo extends b1{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,Xo.currentPopupAction&&Xo.currentPopupAction.cancel(),Xo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){li(this.filter.length===1,"Popup operations only handle one event");const e=cg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wb.get())};e()}}Xo.currentPopupAction=null;/**
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
 */const Eb="pendingRedirect",ed=new Map;class Tb extends b1{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ed.get(this.auth._key());if(!e){try{const i=await Sb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ed.set(this.auth._key(),e)}return this.bypassAuthState||ed.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sb(n,e){const t=Ab(e),i=Ib(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function xb(n,e){ed.set(n._key(),e)}function Ib(n){return Xr(n._redirectPersistence)}function Ab(n){return Zc(Eb,n.config.apiKey,n.name)}async function Cb(n,e,t=!1){if(Ln(n.app))return Promise.reject(ei(n));const i=Zs(n),o=gb(i,e),c=await new Tb(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const Rb=10*60*1e3;class Pb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!N1(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(xr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rb&&this.cachedEventUids.clear(),this.cachedEventUids.has(u0(e))}saveEventToCache(e){this.cachedEventUids.add(u0(e)),this.lastProcessedEventTime=Date.now()}}function u0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function N1({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return N1(n);default:return!1}}/**
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
 */async function bb(n,e={}){return os(n,"GET","/v1/projects",e)}/**
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
 */const Nb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Db=/^https?/;async function Ob(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bb(n);for(const t of e)try{if(Vb(t))return}catch{}or(n,"unauthorized-domain")}function Vb(n){const e=Hp(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!Db.test(t))return!1;if(Nb.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const Lb=new du(3e4,6e4);function c0(){const n=Ir().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Mb(n){return new Promise((e,t)=>{var i,o,a;function c(){c0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{c0(),t(xr(n,"network-request-failed"))},timeout:Lb.get()})}if(!((o=(i=Ir().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=Ir().gapi)===null||a===void 0)&&a.load)c();else{const h=Rk("iframefcb");return Ir()[h]=()=>{gapi.load?c():t(xr(n,"network-request-failed"))},g1(`${Ck()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw td=null,e})}let td=null;function jb(n){return td=td||Mb(n),td}/**
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
 */const Fb=new du(5e3,15e3),Ub="__/auth/iframe",zb="emulator/auth/iframe",Bb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$b=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qb(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?sg(e,zb):`https://${n.config.authDomain}/${Ub}`,i={apiKey:e.apiKey,appName:n.name,v:Ea},o=$b.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${iu(i).slice(1)}`}async function Hb(n){const e=await jb(n),t=Ir().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:qb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bb,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const c=xr(n,"network-request-failed"),h=Ir().setTimeout(()=>{a(c)},Fb.get());function f(){Ir().clearTimeout(h),o(i)}i.ping(f).then(f,()=>{a(c)})}))}/**
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
 */const Wb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gb=500,Kb=600,Qb="_blank",Yb="http://localhost";class d0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xb(n,e,t,i=Gb,o=Kb){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const f=Object.assign(Object.assign({},Wb),{width:i.toString(),height:o.toString(),top:a,left:c}),m=Xt().toLowerCase();t&&(h=u1(m)?Qb:t),a1(m)&&(e=e||Yb,f.scrollbars="yes");const _=Object.entries(f).reduce((w,[C,R])=>`${w}${C}=${R},`,"");if(vk(m)&&h!=="_self")return Jb(e||"",h),new d0(null);const E=window.open(e||"",h,_);Ie(E,n,"popup-blocked");try{E.focus()}catch{}return new d0(E)}function Jb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Zb="__/auth/handler",eN="emulator/auth/handler",tN=encodeURIComponent("fac");async function h0(n,e,t,i,o,a){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ea,eventId:o};if(e instanceof _1){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",PI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,E]of Object.entries({}))c[_]=E}if(e instanceof fu){const _=e.getScopes().filter(E=>E!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const _ of Object.keys(h))h[_]===void 0&&delete h[_];const f=await n._getAppCheckToken(),m=f?`#${tN}=${encodeURIComponent(f)}`:"";return`${nN(n)}?${iu(h).slice(1)}${m}`}function nN({config:n}){return n.emulator?sg(n,eN):`https://${n.authDomain}/${Zb}`}/**
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
 */const lp="webStorageSupport";class rN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A1,this._completeRedirectFn=Cb,this._overrideRedirectResult=xb}async _openPopup(e,t,i,o){var a;li((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await h0(e,t,i,Hp(),o);return Xb(e,c,cg())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await h0(e,t,i,Hp(),o);return ob(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(li(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Hb(e),i=new Pb(e);return t.register("authEvent",o=>(Ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lp,{type:lp},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[lp];c!==void 0&&t(!!c),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ob(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return p1()||l1()||ag()}}const iN=rN;var f0="@firebase/auth",p0="1.10.7";/**
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
 */class sN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oN(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aN(n){ia(new zs("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=i.options;Ie(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const f={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m1(n)},m=new xk(i,o,a,f);return Ok(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ia(new zs("auth-internal",e=>{const t=Zs(e.getProvider("auth").getImmediate());return(i=>new sN(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hi(f0,p0,oN(n)),Hi(f0,p0,"esm2017")}/**
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
 */const lN=5*60,uN=dw("authIdTokenMaxAge")||lN;let m0=null;const cN=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>uN)return;const o=t==null?void 0:t.token;m0!==o&&(m0=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function dN(n=yw()){const e=gm(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Dk(n,{popupRedirectResolver:iN,persistence:[mb,rb,A1]}),i=dw("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=cN(a.toString());Jk(t,c,()=>c(t.currentUser)),Xk(t,h=>c(h))}}const o=uw("auth");return o&&Vk(t,`http://${o}`),t}function hN(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ik({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=xr("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",hN().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aN("Browser");const fN={apiKey:"AIzaSyAvO_vAOJ8P6e_4XLmm_WfioinO43D-TKo",authDomain:"profangelsanroman-2d392.firebaseapp.com",projectId:"profangelsanroman-2d392",storageBucket:"profangelsanroman-2d392.firebasestorage.app",messagingSenderId:"1022958173798",appId:"1:1022958173798:web:0c9ea3c8b1593c2dd4b7a7",measurementId:"G-Y5WG2WVWGF"},D1=gw(fN),kd=dN(D1),Qt=VP(D1),O1=B.createContext(null),Pr=()=>{const n=B.useContext(O1);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n};function pN(){const{user:n,loading:e}=Pr(),[t,i]=B.useState([]),[o,a]=B.useState(!0),[c,h]=B.useState(null),[f,m]=B.useState(0),[_,E]=B.useState(0);B.useEffect(()=>{if(e||!n){!e&&!n&&(h("No hay usuario autenticado para cargar las rutinas."),a(!1));return}a(!0),h(null);const z=da(Qt,`users/${n.uid}/routines`),G=fa(z),J=ng(G,te=>{try{const Y=te.docs.map(I=>({id:I.id,...I.data()}));i(Y),console.log(`[useRoutines] Rutinas del usuario ${n.uid} cargadas/actualizadas:`,Y);const P=Y.length,A=Y.filter(I=>I.exercises&&I.exercises.length>0&&I.exercises.every(D=>D.completed)).length;m(P),E(A),h(null)}catch(Y){console.error("[useRoutines] Error al obtener las rutinas del usuario:",Y),h("Error al cargar tus rutinas. Intenta de nuevo.")}finally{a(!1)}},te=>{console.error("[useRoutines] Error en la suscripción a las rutinas:",te),h("No se pudieron cargar las rutinas. Posiblemente problemas de permisos de lectura."),a(!1)});return()=>J()},[n,e]);const w=async(z,G,J)=>{if(!n){console.error("No user authenticated to update exercise progress.");return}try{const te=nr(Qt,`users/${n.uid}/routines`,z),Y=await qs(te);if(!Y.exists()){console.error("Rutina no encontrada para actualizar el ejercicio.");return}const A=Y.data().exercises.map(I=>I.id===G?{...I,...J}:I);await XE(te,{exercises:A}),console.log(`Progreso del ejercicio ${G} en rutina ${z} actualizado:`,J)}catch(te){console.error("Error al actualizar el progreso del ejercicio:",te),h("Error al guardar tu progreso. Intenta de nuevo.")}};return{routines:t,loading:o,error:!!c,totalActivedRoutines:f,completedActivedRoutines:_,toggleRoutineCompleted:(z,G)=>{console.log(`[useRoutines] Toggle rutina ${z} completada a ${G} (pendiente de implementar a nivel de rutina).`)},toggleExerciseCompleted:(z,G)=>{const J=t.find(Y=>Y.id===z);if(!J)return;const te=J.exercises.find(Y=>Y.id===G);te&&w(z,G,{completed:!te.completed})},updateExerciseKilos:(z,G,J)=>{w(z,G,{kilos:Number(J)||0})},editExerciseInRoutine:(z,G,J)=>{console.log(`[useRoutines] Edit ejercicio ${G} en rutina ${z} con ${JSON.stringify(J)} (pendiente de implementar en Firestore, ahora se usa updateExerciseProgress).`)},deleteExerciseFromRoutine:(z,G)=>{console.log(`[useRoutines] Delete ejercicio ${G} de rutina ${z} (pendiente de implementar en Firestore).`)}}}var up={exports:{}},cp,g0;function mN(){if(g0)return cp;g0=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return cp=n,cp}var dp,y0;function gN(){if(y0)return dp;y0=1;var n=mN();function e(){}function t(){}return t.resetWarningCache=e,dp=function(){function i(c,h,f,m,_,E){if(E!==n){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}i.isRequired=i;function o(){return i}var a={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return a.PropTypes=a,a},dp}var v0;function yN(){return v0||(v0=1,up.exports=gN()()),up.exports}var vN=yN();const le=Ld(vN);var mn=function(){return mn=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},mn.apply(this,arguments)};function bd(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}var tt="-ms-",zl="-moz-",Ge="-webkit-",V1="comm",ch="rule",hg="decl",_N="@import",L1="@keyframes",wN="@layer",M1=Math.abs,fg=String.fromCharCode,Qp=Object.assign;function EN(n,e){return Dt(n,0)^45?(((e<<2^Dt(n,0))<<2^Dt(n,1))<<2^Dt(n,2))<<2^Dt(n,3):0}function j1(n){return n.trim()}function Qr(n,e){return(n=e.exec(n))?n[0]:n}function De(n,e,t){return n.replace(e,t)}function nd(n,e,t){return n.indexOf(e,t)}function Dt(n,e){return n.charCodeAt(e)|0}function pa(n,e,t){return n.slice(e,t)}function _r(n){return n.length}function F1(n){return n.length}function Nl(n,e){return e.push(n),n}function TN(n,e){return n.map(e).join("")}function _0(n,e){return n.filter(function(t){return!Qr(t,e)})}var dh=1,ma=1,U1=0,jn=0,vt=0,Ca="";function hh(n,e,t,i,o,a,c,h){return{value:n,root:e,parent:t,type:i,props:o,children:a,line:dh,column:ma,length:c,return:"",siblings:h}}function Li(n,e){return Qp(hh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Wo(n){for(;n.root;)n=Li(n.root,{children:[n]});Nl(n,n.siblings)}function SN(){return vt}function xN(){return vt=jn>0?Dt(Ca,--jn):0,ma--,vt===10&&(ma=1,dh--),vt}function rr(){return vt=jn<U1?Dt(Ca,jn++):0,ma++,vt===10&&(ma=1,dh++),vt}function js(){return Dt(Ca,jn)}function rd(){return jn}function fh(n,e){return pa(Ca,n,e)}function Yp(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function IN(n){return dh=ma=1,U1=_r(Ca=n),jn=0,[]}function AN(n){return Ca="",n}function hp(n){return j1(fh(jn-1,Xp(n===91?n+2:n===40?n+1:n)))}function CN(n){for(;(vt=js())&&vt<33;)rr();return Yp(n)>2||Yp(vt)>3?"":" "}function RN(n,e){for(;--e&&rr()&&!(vt<48||vt>102||vt>57&&vt<65||vt>70&&vt<97););return fh(n,rd()+(e<6&&js()==32&&rr()==32))}function Xp(n){for(;rr();)switch(vt){case n:return jn;case 34:case 39:n!==34&&n!==39&&Xp(vt);break;case 40:n===41&&Xp(n);break;case 92:rr();break}return jn}function PN(n,e){for(;rr()&&n+vt!==57;)if(n+vt===84&&js()===47)break;return"/*"+fh(e,jn-1)+"*"+fg(n===47?n:rr())}function kN(n){for(;!Yp(js());)rr();return fh(n,jn)}function bN(n){return AN(id("",null,null,null,[""],n=IN(n),0,[0],n))}function id(n,e,t,i,o,a,c,h,f){for(var m=0,_=0,E=c,w=0,C=0,R=0,V=1,N=1,M=1,z=0,G="",J=o,te=a,Y=i,P=G;N;)switch(R=z,z=rr()){case 40:if(R!=108&&Dt(P,E-1)==58){nd(P+=De(hp(z),"&","&\f"),"&\f",M1(m?h[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:P+=hp(z);break;case 9:case 10:case 13:case 32:P+=CN(R);break;case 92:P+=RN(rd()-1,7);continue;case 47:switch(js()){case 42:case 47:Nl(NN(PN(rr(),rd()),e,t,f),f);break;default:P+="/"}break;case 123*V:h[m++]=_r(P)*M;case 125*V:case 59:case 0:switch(z){case 0:case 125:N=0;case 59+_:M==-1&&(P=De(P,/\f/g,"")),C>0&&_r(P)-E&&Nl(C>32?E0(P+";",i,t,E-1,f):E0(De(P," ","")+";",i,t,E-2,f),f);break;case 59:P+=";";default:if(Nl(Y=w0(P,e,t,m,_,o,h,G,J=[],te=[],E,a),a),z===123)if(_===0)id(P,e,Y,Y,J,a,E,h,te);else switch(w===99&&Dt(P,3)===110?100:w){case 100:case 108:case 109:case 115:id(n,Y,Y,i&&Nl(w0(n,Y,Y,0,0,o,h,G,o,J=[],E,te),te),o,te,E,h,i?J:te);break;default:id(P,Y,Y,Y,[""],te,0,h,te)}}m=_=C=0,V=M=1,G=P="",E=c;break;case 58:E=1+_r(P),C=R;default:if(V<1){if(z==123)--V;else if(z==125&&V++==0&&xN()==125)continue}switch(P+=fg(z),z*V){case 38:M=_>0?1:(P+="\f",-1);break;case 44:h[m++]=(_r(P)-1)*M,M=1;break;case 64:js()===45&&(P+=hp(rr())),w=js(),_=E=_r(G=P+=kN(rd())),z++;break;case 45:R===45&&_r(P)==2&&(V=0)}}return a}function w0(n,e,t,i,o,a,c,h,f,m,_,E){for(var w=o-1,C=o===0?a:[""],R=F1(C),V=0,N=0,M=0;V<i;++V)for(var z=0,G=pa(n,w+1,w=M1(N=c[V])),J=n;z<R;++z)(J=j1(N>0?C[z]+" "+G:De(G,/&\f/g,C[z])))&&(f[M++]=J);return hh(n,e,t,o===0?ch:h,f,m,_,E)}function NN(n,e,t,i){return hh(n,e,t,V1,fg(SN()),pa(n,2,-2),0,i)}function E0(n,e,t,i,o){return hh(n,e,t,hg,pa(n,0,i),pa(n,i+1,-1),i,o)}function z1(n,e,t){switch(EN(n,e)){case 5103:return Ge+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ge+n+n;case 4789:return zl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ge+n+zl+n+tt+n+n;case 5936:switch(Dt(n,e+11)){case 114:return Ge+n+tt+De(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ge+n+tt+De(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ge+n+tt+De(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ge+n+tt+n+n;case 6165:return Ge+n+tt+"flex-"+n+n;case 5187:return Ge+n+De(n,/(\w+).+(:[^]+)/,Ge+"box-$1$2"+tt+"flex-$1$2")+n;case 5443:return Ge+n+tt+"flex-item-"+De(n,/flex-|-self/g,"")+(Qr(n,/flex-|baseline/)?"":tt+"grid-row-"+De(n,/flex-|-self/g,""))+n;case 4675:return Ge+n+tt+"flex-line-pack"+De(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ge+n+tt+De(n,"shrink","negative")+n;case 5292:return Ge+n+tt+De(n,"basis","preferred-size")+n;case 6060:return Ge+"box-"+De(n,"-grow","")+Ge+n+tt+De(n,"grow","positive")+n;case 4554:return Ge+De(n,/([^-])(transform)/g,"$1"+Ge+"$2")+n;case 6187:return De(De(De(n,/(zoom-|grab)/,Ge+"$1"),/(image-set)/,Ge+"$1"),n,"")+n;case 5495:case 3959:return De(n,/(image-set\([^]*)/,Ge+"$1$`$1");case 4968:return De(De(n,/(.+:)(flex-)?(.*)/,Ge+"box-pack:$3"+tt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ge+n+n;case 4200:if(!Qr(n,/flex-|baseline/))return tt+"grid-column-align"+pa(n,e)+n;break;case 2592:case 3360:return tt+De(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,o){return e=o,Qr(i.props,/grid-\w+-end/)})?~nd(n+(t=t[e].value),"span",0)?n:tt+De(n,"-start","")+n+tt+"grid-row-span:"+(~nd(t,"span",0)?Qr(t,/\d+/):+Qr(t,/\d+/)-+Qr(n,/\d+/))+";":tt+De(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return Qr(i.props,/grid-\w+-start/)})?n:tt+De(De(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return De(n,/(.+)-inline(.+)/,Ge+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_r(n)-1-e>6)switch(Dt(n,e+1)){case 109:if(Dt(n,e+4)!==45)break;case 102:return De(n,/(.+:)(.+)-([^]+)/,"$1"+Ge+"$2-$3$1"+zl+(Dt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~nd(n,"stretch",0)?z1(De(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return De(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,a,c,h,f,m){return tt+o+":"+a+m+(c?tt+o+"-span:"+(h?f:+f-+a)+m:"")+n});case 4949:if(Dt(n,e+6)===121)return De(n,":",":"+Ge)+n;break;case 6444:switch(Dt(n,Dt(n,14)===45?18:11)){case 120:return De(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ge+(Dt(n,14)===45?"inline-":"")+"box$3$1"+Ge+"$2$3$1"+tt+"$2box$3")+n;case 100:return De(n,":",":"+tt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return De(n,"scroll-","scroll-snap-")+n}return n}function Nd(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function DN(n,e,t,i){switch(n.type){case wN:if(n.children.length)break;case _N:case hg:return n.return=n.return||n.value;case V1:return"";case L1:return n.return=n.value+"{"+Nd(n.children,i)+"}";case ch:if(!_r(n.value=n.props.join(",")))return""}return _r(t=Nd(n.children,i))?n.return=n.value+"{"+t+"}":""}function ON(n){var e=F1(n);return function(t,i,o,a){for(var c="",h=0;h<e;h++)c+=n[h](t,i,o,a)||"";return c}}function VN(n){return function(e){e.root||(e=e.return)&&n(e)}}function LN(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case hg:n.return=z1(n.value,n.length,t);return;case L1:return Nd([Li(n,{value:De(n.value,"@","@"+Ge)})],i);case ch:if(n.length)return TN(t=n.props,function(o){switch(Qr(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wo(Li(n,{props:[De(o,/:(read-\w+)/,":"+zl+"$1")]})),Wo(Li(n,{props:[o]})),Qp(n,{props:_0(t,i)});break;case"::placeholder":Wo(Li(n,{props:[De(o,/:(plac\w+)/,":"+Ge+"input-$1")]})),Wo(Li(n,{props:[De(o,/:(plac\w+)/,":"+zl+"$1")]})),Wo(Li(n,{props:[De(o,/:(plac\w+)/,tt+"input-$1")]})),Wo(Li(n,{props:[o]})),Qp(n,{props:_0(t,i)});break}return""})}}var MN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xn={},ga=typeof process<"u"&&xn!==void 0&&(xn.REACT_APP_SC_ATTR||xn.SC_ATTR)||"data-styled",B1="active",$1="data-styled-version",ph="6.1.19",pg=`/*!sc*/
`,Dd=typeof window<"u"&&typeof document<"u",jN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xn!==void 0&&xn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xn.REACT_APP_SC_DISABLE_SPEEDY!==""?xn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xn!==void 0&&xn.SC_DISABLE_SPEEDY!==void 0&&xn.SC_DISABLE_SPEEDY!==""&&xn.SC_DISABLE_SPEEDY!=="false"&&xn.SC_DISABLE_SPEEDY),mh=Object.freeze([]),ya=Object.freeze({});function FN(n,e,t){return t===void 0&&(t=ya),n.theme!==t.theme&&n.theme||e||t.theme}var q1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),UN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zN=/(^-|-$)/g;function T0(n){return n.replace(UN,"-").replace(zN,"")}var BN=/(a)(d)/gi,Fc=52,S0=function(n){return String.fromCharCode(n+(n>25?39:97))};function Jp(n){var e,t="";for(e=Math.abs(n);e>Fc;e=e/Fc|0)t=S0(e%Fc)+t;return(S0(e%Fc)+t).replace(BN,"$1-$2")}var fp,H1=5381,Jo=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},W1=function(n){return Jo(H1,n)};function $N(n){return Jp(W1(n)>>>0)}function qN(n){return n.displayName||n.name||"Component"}function pp(n){return typeof n=="string"&&!0}var G1=typeof Symbol=="function"&&Symbol.for,K1=G1?Symbol.for("react.memo"):60115,HN=G1?Symbol.for("react.forward_ref"):60112,WN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},GN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Q1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},KN=((fp={})[HN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fp[K1]=Q1,fp);function x0(n){return("type"in(e=n)&&e.type.$$typeof)===K1?Q1:"$$typeof"in n?KN[n.$$typeof]:WN;var e}var QN=Object.defineProperty,YN=Object.getOwnPropertyNames,I0=Object.getOwnPropertySymbols,XN=Object.getOwnPropertyDescriptor,JN=Object.getPrototypeOf,A0=Object.prototype;function Y1(n,e,t){if(typeof e!="string"){if(A0){var i=JN(e);i&&i!==A0&&Y1(n,i,t)}var o=YN(e);I0&&(o=o.concat(I0(e)));for(var a=x0(n),c=x0(e),h=0;h<o.length;++h){var f=o[h];if(!(f in GN||t&&t[f]||c&&f in c||a&&f in a)){var m=XN(e,f);try{QN(n,f,m)}catch{}}}}return n}function va(n){return typeof n=="function"}function mg(n){return typeof n=="object"&&"styledComponentId"in n}function Ms(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function C0(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function Jl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Zp(n,e,t){if(t===void 0&&(t=!1),!t&&!Jl(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=Zp(n[i],e[i]);else if(Jl(e))for(var i in e)n[i]=Zp(n[i],e[i]);return n}function gg(n,e){Object.defineProperty(n,"toString",{value:e})}function mu(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ZN=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;e>=a;)if((a<<=1)<0)throw mu(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var c=o;c<a;c++)this.groupSizes[c]=0}for(var h=this.indexOfGroup(e+1),f=(c=0,t.length);c<f;c++)this.tag.insertRule(h,t[c])&&(this.groupSizes[e]++,h++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),o=i+t;this.groupSizes[e]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],o=this.indexOfGroup(e),a=o+i,c=o;c<a;c++)t+="".concat(this.tag.getRule(c)).concat(pg);return t},n}(),sd=new Map,Od=new Map,od=1,Uc=function(n){if(sd.has(n))return sd.get(n);for(;Od.has(od);)od++;var e=od++;return sd.set(n,e),Od.set(e,n),e},e2=function(n,e){od=e+1,sd.set(n,e),Od.set(e,n)},t2="style[".concat(ga,"][").concat($1,'="').concat(ph,'"]'),n2=new RegExp("^".concat(ga,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),r2=function(n,e,t){for(var i,o=t.split(","),a=0,c=o.length;a<c;a++)(i=o[a])&&n.registerName(e,i)},i2=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(pg),o=[],a=0,c=i.length;a<c;a++){var h=i[a].trim();if(h){var f=h.match(n2);if(f){var m=0|parseInt(f[1],10),_=f[2];m!==0&&(e2(_,m),r2(n,_,f[3]),n.getTag().insertRules(m,o)),o.length=0}else o.push(h)}}},R0=function(n){for(var e=document.querySelectorAll(t2),t=0,i=e.length;t<i;t++){var o=e[t];o&&o.getAttribute(ga)!==B1&&(i2(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function s2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var X1=function(n){var e=document.head,t=n||e,i=document.createElement("style"),o=function(h){var f=Array.from(h.querySelectorAll("style[".concat(ga,"]")));return f[f.length-1]}(t),a=o!==void 0?o.nextSibling:null;i.setAttribute(ga,B1),i.setAttribute($1,ph);var c=s2();return c&&i.setAttribute("nonce",c),t.insertBefore(i,a),i},o2=function(){function n(e){this.element=X1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,o=0,a=i.length;o<a;o++){var c=i[o];if(c.ownerNode===t)return c}throw mu(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),a2=function(){function n(e){this.element=X1(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),l2=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),P0=Dd,u2={isServer:!Dd,useCSSOMInjection:!jN},J1=function(){function n(e,t,i){e===void 0&&(e=ya),t===void 0&&(t={});var o=this;this.options=mn(mn({},u2),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Dd&&P0&&(P0=!1,R0(this)),gg(this,function(){return function(a){for(var c=a.getTag(),h=c.length,f="",m=function(E){var w=function(M){return Od.get(M)}(E);if(w===void 0)return"continue";var C=a.names.get(w),R=c.getGroup(E);if(C===void 0||!C.size||R.length===0)return"continue";var V="".concat(ga,".g").concat(E,'[id="').concat(w,'"]'),N="";C!==void 0&&C.forEach(function(M){M.length>0&&(N+="".concat(M,","))}),f+="".concat(R).concat(V,'{content:"').concat(N,'"}').concat(pg)},_=0;_<h;_++)m(_);return f}(o)})}return n.registerId=function(e){return Uc(e)},n.prototype.rehydrate=function(){!this.server&&Dd&&R0(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(mn(mn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,o=t.target;return t.isServer?new l2(o):i?new o2(o):new a2(o)}(this.options),new ZN(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Uc(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(Uc(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Uc(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),c2=/&/g,d2=/^\s*\/\/.*$/gm;function Z1(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Z1(t.children,e)),t})}function h2(n){var e,t,i,o=ya,a=o.options,c=a===void 0?ya:a,h=o.plugins,f=h===void 0?mh:h,m=function(w,C,R){return R.startsWith(t)&&R.endsWith(t)&&R.replaceAll(t,"").length>0?".".concat(e):w},_=f.slice();_.push(function(w){w.type===ch&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(c2,t).replace(i,m))}),c.prefix&&_.push(LN),_.push(DN);var E=function(w,C,R,V){C===void 0&&(C=""),R===void 0&&(R=""),V===void 0&&(V="&"),e=V,t=C,i=new RegExp("\\".concat(t,"\\b"),"g");var N=w.replace(d2,""),M=bN(R||C?"".concat(R," ").concat(C," { ").concat(N," }"):N);c.namespace&&(M=Z1(M,c.namespace));var z=[];return Nd(M,ON(_.concat(VN(function(G){return z.push(G)})))),z};return E.hash=f.length?f.reduce(function(w,C){return C.name||mu(15),Jo(w,C.name)},H1).toString():"",E}var f2=new J1,em=h2(),eT=dt.createContext({shouldForwardProp:void 0,styleSheet:f2,stylis:em});eT.Consumer;dt.createContext(void 0);function k0(){return B.useContext(eT)}var p2=function(){function n(e,t){var i=this;this.inject=function(o,a){a===void 0&&(a=em);var c=i.name+a.hash;o.hasNameForId(i.id,c)||o.insertRules(i.id,c,a(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,gg(this,function(){throw mu(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=em),this.name+e.hash},n}(),m2=function(n){return n>="A"&&n<="Z"};function b0(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;m2(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var tT=function(n){return n==null||n===!1||n===""},nT=function(n){var e,t,i=[];for(var o in n){var a=n[o];n.hasOwnProperty(o)&&!tT(a)&&(Array.isArray(a)&&a.isCss||va(a)?i.push("".concat(b0(o),":"),a,";"):Jl(a)?i.push.apply(i,bd(bd(["".concat(o," {")],nT(a),!1),["}"],!1)):i.push("".concat(b0(o),": ").concat((e=o,(t=a)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in MN||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function Fs(n,e,t,i){if(tT(n))return[];if(mg(n))return[".".concat(n.styledComponentId)];if(va(n)){if(!va(a=n)||a.prototype&&a.prototype.isReactComponent||!e)return[n];var o=n(e);return Fs(o,e,t,i)}var a;return n instanceof p2?t?(n.inject(t,i),[n.getName(i)]):[n]:Jl(n)?nT(n):Array.isArray(n)?Array.prototype.concat.apply(mh,n.map(function(c){return Fs(c,e,t,i)})):[n.toString()]}function g2(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(va(t)&&!mg(t))return!1}return!0}var y2=W1(ph),v2=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&g2(e),this.componentId=t,this.baseHash=Jo(y2,t),this.baseStyle=i,J1.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=Ms(o,this.staticRulesId);else{var a=C0(Fs(this.rules,e,t,i)),c=Jp(Jo(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,c)){var h=i(a,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,h)}o=Ms(o,c),this.staticRulesId=c}else{for(var f=Jo(this.baseHash,i.hash),m="",_=0;_<this.rules.length;_++){var E=this.rules[_];if(typeof E=="string")m+=E;else if(E){var w=C0(Fs(E,e,t,i));f=Jo(f,w+_),m+=w}}if(m){var C=Jp(f>>>0);t.hasNameForId(this.componentId,C)||t.insertRules(this.componentId,C,i(m,".".concat(C),void 0,this.componentId)),o=Ms(o,C)}}return o},n}(),rT=dt.createContext(void 0);rT.Consumer;var mp={};function _2(n,e,t){var i=mg(n),o=n,a=!pp(n),c=e.attrs,h=c===void 0?mh:c,f=e.componentId,m=f===void 0?function(J,te){var Y=typeof J!="string"?"sc":T0(J);mp[Y]=(mp[Y]||0)+1;var P="".concat(Y,"-").concat($N(ph+Y+mp[Y]));return te?"".concat(te,"-").concat(P):P}(e.displayName,e.parentComponentId):f,_=e.displayName,E=_===void 0?function(J){return pp(J)?"styled.".concat(J):"Styled(".concat(qN(J),")")}(n):_,w=e.displayName&&e.componentId?"".concat(T0(e.displayName),"-").concat(e.componentId):e.componentId||m,C=i&&o.attrs?o.attrs.concat(h).filter(Boolean):h,R=e.shouldForwardProp;if(i&&o.shouldForwardProp){var V=o.shouldForwardProp;if(e.shouldForwardProp){var N=e.shouldForwardProp;R=function(J,te){return V(J,te)&&N(J,te)}}else R=V}var M=new v2(t,w,i?o.componentStyle:void 0);function z(J,te){return function(Y,P,A){var I=Y.attrs,D=Y.componentStyle,O=Y.defaultProps,F=Y.foldedComponentIds,k=Y.styledComponentId,_e=Y.target,Oe=dt.useContext(rT),de=k0(),ge=Y.shouldForwardProp||de.shouldForwardProp,X=FN(P,Oe,O)||ya,ae=function(be,Ne,je){for(var Me,Be=mn(mn({},Ne),{className:void 0,theme:je}),ut=0;ut<be.length;ut+=1){var rn=va(Me=be[ut])?Me(Be):Me;for(var Jt in rn)Be[Jt]=Jt==="className"?Ms(Be[Jt],rn[Jt]):Jt==="style"?mn(mn({},Be[Jt]),rn[Jt]):rn[Jt]}return Ne.className&&(Be.className=Ms(Be.className,Ne.className)),Be}(I,P,X),ue=ae.as||_e,U={};for(var K in ae)ae[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&ae.theme===X||(K==="forwardedAs"?U.as=ae.forwardedAs:ge&&!ge(K,ue)||(U[K]=ae[K]));var ye=function(be,Ne){var je=k0(),Me=be.generateAndInjectStyles(Ne,je.styleSheet,je.stylis);return Me}(D,ae),Re=Ms(F,k);return ye&&(Re+=" "+ye),ae.className&&(Re+=" "+ae.className),U[pp(ue)&&!q1.has(ue)?"class":"className"]=Re,A&&(U.ref=A),B.createElement(ue,U)}(G,J,te)}z.displayName=E;var G=dt.forwardRef(z);return G.attrs=C,G.componentStyle=M,G.displayName=E,G.shouldForwardProp=R,G.foldedComponentIds=i?Ms(o.foldedComponentIds,o.styledComponentId):"",G.styledComponentId=w,G.target=i?o.target:n,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=i?function(te){for(var Y=[],P=1;P<arguments.length;P++)Y[P-1]=arguments[P];for(var A=0,I=Y;A<I.length;A++)Zp(te,I[A],!0);return te}({},o.defaultProps,J):J}}),gg(G,function(){return".".concat(G.styledComponentId)}),a&&Y1(G,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function N0(n,e){for(var t=[n[0]],i=0,o=e.length;i<o;i+=1)t.push(e[i],n[i+1]);return t}var D0=function(n){return Object.assign(n,{isCss:!0})};function w2(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(va(n)||Jl(n))return D0(Fs(N0(mh,bd([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?Fs(i):D0(Fs(N0(i,e)))}function tm(n,e,t){if(t===void 0&&(t=ya),!e)throw mu(1,e);var i=function(o){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];return n(e,t,w2.apply(void 0,bd([o],a,!1)))};return i.attrs=function(o){return tm(n,e,mn(mn({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return tm(n,e,mn(mn({},t),o))},i}var iT=function(n){return tm(_2,n)},ie=iT;q1.forEach(function(n){ie[n]=iT(n)});const E2=ie.div.withConfig({shouldForwardProp:n=>!["flexDirection"].includes(n)})`
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: ${n=>n.$flexDirection||"column"}; 
  align-items: center;
`,T2=ie.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  flex-grow: 1;
`;ie.input`
  width: 60px;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  &:focus {
    outline: none;
    border-color: #000000;
  }
`;const S2=ie.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  &:hover {
    color: #007bff;
  }
`;function ti({children:n,flexDirection:e,...t}){return S.jsx(E2,{$flexDirection:e,...t,children:n})}ti.propTypes={children:le.node,flexDirection:le.oneOf(["row","column","row-reverse","column-reverse"])};const sT=({isOpen:n})=>S.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{transition:"transform 0.3s ease-in-out",transform:n?"rotate(90deg)":"rotate(0deg)"},children:S.jsx("polyline",{points:"9 18 15 12 9 6"})});sT.propTypes={isOpen:le.bool.isRequired};function Zl({title:n,children:e,defaultOpen:t=!1}){const[i,o]=B.useState(t),a=()=>{o(!i)};return S.jsxs(ti,{style:{marginBottom:"12px"},children:[S.jsxs("div",{onClick:a,style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",cursor:"pointer",paddingBottom:i?"10px":"0",borderBottom:i?"1px solid #eee":"none",marginBottom:i?"10px":"0"},children:[S.jsx(T2,{style:{margin:0,flexGrow:1,textAlign:"left"},children:n}),S.jsxs(S2,{type:"button",children:[" ",S.jsx(sT,{isOpen:i})]})]}),i&&S.jsx("div",{style:{width:"100%"},children:e})]})}Zl.propTypes={title:le.string.isRequired,children:le.node.isRequired,defaultOpen:le.bool};const x2=ie.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0; /* Ya no hay padding aquí, el Navbar lo maneja */
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif; /* Tipografía a Roboto! */
  color: #1a1a1a; /* Color de texto general */
`;ie.input`
  width: 90%;
  max-width: 400px;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  @media (min-width: 768px) {
    padding: 12px 15px;
    font-size: 1rem;
  }
`;const ra=ie.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin: 0px;
  padding: 10px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-top: 20px;
  }
`,I2=ie.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: transparent;
  /* Eliminado: border-radius: 50%; */
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  /* Eliminado: box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Mantenemos el hover para una mejor UX */
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Mantenemos el active para una mejor UX */
  }

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`,Dl=ie.div`
  color: #1a1a1a; /* Negro profundo para el texto principal */
  font-family: 'Roboto Condensed', 'Arial Narrow', sans-serif; /* Fuente imprenta, compacta, tipo gym */
  min-height: 100vh; /* Ocupa al menos toda la altura de la ventana */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido horizontalmente */
  box-sizing: border-box; /* Incluye padding y borde en el ancho/alto total */

  /* Media Queries para responsividad */
  @media (min-width: 768px) {
    padding: 30px 50px; /* Más espacio en pantallas más grandes */
  }

  @media (min-width: 1024px) {
    padding: 40px 80px; /* Aún más espacio en escritorios */
  }
`;ie.header`
  width: 100%;
  max-width: 900px;
  padding: 20px;
  background-color: #fff; /* Fondo blanco para el header */
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  /* Consumimos la prop $loading para aplicar estilos condicionales */
  ${n=>n.$loading&&`
    opacity: 0.6; /* Por ejemplo, para indicar que está cargando */
    pointer-events: none; /* Deshabilita interacciones mientras carga */
    cursor: progress; /* Cambia el cursor para indicar carga */
  `}
`;ie.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  span {
    color: #e74c3c; /* Un color de acento */
  }
`;ie.input`
  width: 90%;
  max-width: 400px;
  padding: 12px 15px;
  border: 2px solid #bdc3c7; /* Borde gris claro */
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #ecf0f1; /* Fondo suave para el input */
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: #95a5a6;
    font-weight: 500;
  }

  &:focus {
    outline: none;
    border-color: #e74c3c; /* Borde rojo al enfocar, a juego con los números */
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.3); /* Sombra de enfoque sutil */
  }
`;const A2=ie.section`
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 12px;
  padding: 15px;
`,C2=ie.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Bi=ie.p`
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  margin: auto; /* Margin auto para centrar horizontal y verticalmente el mensaje! */
  display: flex; /* Display flex para que flex-direction column funcione! */
  flex-direction: column; /* Para apilar contenido interno (como un botón) si lo hubiera! */
  padding: 10px; /* Mantenemos el padding */

  /* Estilo para un botón directamente dentro de StyledAppMessage (ej. botón de "Reintentar") */
  > button { /* Selecciona un elemento <button> directo dentro de StyledAppMessage */
    width: 100px; /* Ancho del botón */
    margin: auto; /* Centra el botón horizontalmente */
    margin-top: 15px; /* Un poco de margen superior para separarlo del texto */
    padding: 8px 15px;
    border-radius: 5px;
    background-color: #007bff; /* Color azul para el botón */
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #0056b3; /* Azul más oscuro al pasar el mouse */
    }
  }
`,R2=ie.button`
  background-color: #007bff; /* Verde vivo para el botón de crear, energía */
  color: white;
  border: none;
  border-radius: 50%; /* Redondo */
  width: 60px;
  height: 60px;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(46, 204, 113, 0.3);
  transition: all 0.2s ease-in-out;
  position: fixed; /* Lo fijamos en la pantalla */
  bottom: 30px;
  right: 30px;
  z-index: 1000; /* Para que esté por encima de todo */

  &:hover {
    background-color: #27ae60; /* Verde más oscuro al pasar el mouse */
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(46, 204, 113, 0.4);
  }

  &:active {
    background-color: #229954; /* Aún más oscuro al clickear */
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(46, 204, 113, 0.3);
  }
`,P2=ie.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  /* Eliminado: box-shadow: 0 4px 15px rgba(0,0,0,0.1); */ /* ¡CAMBIO CLAVE AQUÍ! */
`,nm=ie.label`
  font-size: 1rem;
  color: #333;
  font-weight: 600;
`,rm=ie.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,k2=ie.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
`,Vd=ie.button.withConfig({shouldForwardProp:n=>!["primary","secondary"].includes(n)})`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;

  ${n=>n.$primary&&` /* ¡USAMOS $primary! */
    background-color: #2ecc71;
    color: white;
    &:hover {
      background-color: #27ae60;
    }
  `}

  ${n=>n.$secondary&&` /* ¡USAMOS $secondary! */
    background-color: #e74c3c;
    color: white;
    &:hover {
      background-color: #c0392b;
    }
  `}
`,b2=n=>{if(n<60)return`${n} Segundos`;{const e=Math.floor(n/60),t=n%60,i=t<10?`0${t}`:t;return`${e}:${i} Minutos`}},oT=({routines:n,loading:e,error:t,toggleExerciseCompleted:i,updateExerciseKilos:o})=>{const[a,c]=dt.useState(null),h=f=>{c(m=>m===f?null:f)};return e?S.jsx(ra,{children:"Cargando rutinas..."}):t?S.jsx(ra,{style:{color:"#e74c3c"},children:"¡Uups! Hubo un error al cargar tus rutinas. Por favor, intentá de nuevo."}):!e&&n.length===0?S.jsx(ra,{children:"¡No tienes rutinas asignadas aún!"}):S.jsxs("section",{className:"RoutineList-container",style:{width:"100%"},children:[S.jsx("h3",{style:{marginBottom:"15px",textAlign:"center"},children:"Tus Rutinas Asignadas:"}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:n.map(f=>{const m=f.exercises?f.exercises.length:0,_=f.exercises?f.exercises.filter(w=>w.completed).length:0,E=m>0?Math.round(_/m*100):0;return S.jsx(Zl,{title:f.name,defaultOpen:f.id===a,onClickTitle:()=>h(f.id),children:S.jsxs("div",{style:{padding:"5px 0"},children:[S.jsxs("p",{style:{fontSize:"0.9rem",color:"#777",marginBottom:"8px"},children:["Creada el: ",f.createdAt&&new Date(f.createdAt.toDate()).toLocaleDateString("es-AR")]}),S.jsxs("p",{style:{fontSize:"0.9rem",color:"#777",marginBottom:"8px"},children:["Descanso entre ejercicios: ",f.restTime||0," segundos"]}),S.jsxs("p",{style:{fontSize:"0.9rem",color:"#777",marginBottom:"15px"},children:["RIR General: ",f.rir||0]}),S.jsxs("p",{style:{fontSize:"1rem",color:"#007bff",fontWeight:"bold",marginBottom:"15px"},children:["Progreso: ",E,"% Completado"]}),S.jsx("h5",{style:{marginBottom:"10px",color:"#2c3e50"},children:"Ejercicios de la rutina:"}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:f.exercises.map(w=>S.jsxs(ti,{style:{padding:"10px 15px",border:"1px solid #eee",display:"flex",flexDirection:"column",gap:"8px"},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[S.jsx("h6",{style:{margin:0,color:"#333",fontSize:"1rem"},children:w.name}),S.jsx("input",{type:"checkbox",checked:w.completed||!1,onChange:()=>i(f.id,w.id),style:{transform:"scale(1.2)"}})]}),S.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px",fontSize:"0.9rem",color:"#555"},children:[S.jsxs("p",{style:{margin:0},children:["Series: ",w.sets||0]}),w.type==="timed"?S.jsxs("p",{style:{margin:0},children:["Tiempo: ",b2(w.time||0)]}):S.jsxs(S.Fragment,{children:[S.jsxs("p",{style:{margin:0},children:["Repeticiones: ",w.reps||0]}),S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"5px"},children:[S.jsx(nm,{style:{margin:0,fontWeight:"normal",fontSize:"0.9rem"},children:"Kilos:"}),S.jsx(rm,{type:"number",min:"0",placeholder:"Kilos",value:w.kilos===0?"":w.kilos,onChange:C=>o(f.id,w.id,C.target.value),style:{width:"70px",textAlign:"center",padding:"5px"}})]})]})]})]},w.id))})]})},f.id)})})]})};oT.propTypes={routines:le.arrayOf(le.shape({id:le.string.isRequired,name:le.string.isRequired,createdAt:le.any,restTime:le.number,rir:le.number,exercises:le.arrayOf(le.shape({id:le.number.isRequired,name:le.string.isRequired,type:le.string,sets:le.number,reps:le.number,time:le.number,kilos:le.number,completed:le.bool})).isRequired})).isRequired,loading:le.bool.isRequired,error:le.bool.isRequired,toggleExerciseCompleted:le.func.isRequired,updateExerciseKilos:le.func.isRequired};const yg="/tucu/assets/logo-sdMuk5q7.jpg",N2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+0lEQVR4nO2avS9kYRSHH5GImpD4zP4RVApCJUG0m+0Fy2wpIlH4D4gCu9lCqRDNri10i3+Bteh8VCuMhDAy8iZHIpPgrvsezuU8ya+5mY/7zHvmvueeGXAcx3GcZmAU+AVsA+eSbTk2AjS9hY+pAZgHCkDxidwAS8AHMko/kE8gWpozoI+M8UVW7H9l7692jgyt7E0K2fvS5le68Zll/Fh512OY7xFl7/IVw1tPQUG4IJVjjpyC7F0+Y5BVReEfGOSvonDoyMyRVxQOr22OonLMUXxvwnlF2VMM8kdReAuDrL63bWlEUXgIgzQptZbXVlvLwDcF4TmMj3TOIl+d6zBOd6TSDgOAXjJCLsKIJ0w5M0XfM8s7lHEPGaUGmJYrbZJVXczCdzYJjXIT/1O6prxkS5qKYctbj+M4jvMWKAdagQFgBliT6eMxcCE5kmNrsl+Hx7bIczNBreypK8BJitbyH7AMDErzYooK4JNMPK6V7odDw/JR3uvVqAYmgEMFyYdyAIwDVS8pWiE/eKcp2bQJ7z0GVGrLtgP7ryhaml2gTUO0DJhSmlmlTTinSTnHaLKzBsSeykIs6VEDMkkTRsWp2TMgkjQ7MYQvDIgkTfh3X2o2DYgkze8Ywp1KHVTsXMm2GYUuYAO4NCBWmnBO60BHLFnHcRzHcVDhFpGw1GEF+nhKAAAAAElFTkSuQmCC",D2=ie.nav`
  width: 100%;
  padding: 10px 15px; /* Padding para móviles */
  display: flex;
  justify-content: space-between; /* Espacio entre ítems en la fila (mobile y desktop) */
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  background: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;

  /* Media Queries para tablets y escritorio */
  @media (min-width: 768px) {
    flex-direction: row; /* En desktop, se alinean en fila */
    justify-content: space-between; /* Espacio entre logo y el resto */
    padding: 10px 30px;
  }

  ${n=>n.$loading&&`
    opacity: 0.6;
    pointer-events: none;
    cursor: progress;
  `}
`,O2=ie.img`
  max-width: 50px; /* Tamaño del logo para móviles en el navbar */
  height: auto;
  display: block;

  @media (min-width: 768px) {
    max-width: 120px; /* Aumenta el tamaño en pantallas grandes */
    margin-bottom: 0; /* Elimina el margen en desktop */
  }
`,V2=ie.button`
  padding: 0;
  background-color: transparent;
  border: none;
  transition: background-color 0.2s ease-in-out;
  
  height: 50px; /* MODIFICADO a 50px */
  display: flex; /* Para centrar la imagen */
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 768px) {
    height: 50px; /* Mantener la altura consistente en desktop */
  }
`;ie.div`
  position: absolute;
  top: auto;
  right: 15px;
  background-color: #34495e;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1001;
  min-width: 150px;
  text-align: center;
  animation: fadeIn 0.3s ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 767px) {
    top: 70px; /* Ajusta según la altura del navbar en móvil si es necesario */
  }

  @media (min-width: 768px) {
    top: 60px;
    right: 30px;
  }
`;ie.div`
  padding: 8px 12px;
  color: white;
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #556c80;
  }
`;const L2=ie.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1; /* Permite que ocupe el espacio disponible en el centro */

  @media (min-width: 768px) {
    justify-content: center;
  }
`,O0=ie.h2`
  font-size: 1rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  
  span {
    color: #007bff;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
    max-width: none;
  }
`,V0=ie.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: #bdc3c7; /* Se mantiene gris claro para el contador, para contraste si el fondo es blanco */
  text-align: center;
  white-space: nowrap;

  span {
    font-weight: 700;
    color: #007bff;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,gp=ie.h1`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 20px);

  @media (min-width: 768px) {
    font-size: 2rem;
    max-width: none;
  }
`,M2=ie.input`
  width: 80%;
  max-width: 300px;
  padding: 8px 12px;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.3);
  }

  @media (min-width: 768px) {
    width: auto;
    max-width: 400px;
    font-size: 1rem;
  }
`;function Er({type:n="student",loading:e,totalActivedRoutines:t=0,completedActivedRoutines:i=0,searchValue:o="",setSearchValue:a=()=>{},studentName:c="",isCoachDashboard:h=!1,totalStudentsCount:f=0}){const{user:m,role:_,userName:E}=Pr(),w=ns();console.log("Navbar props: type=",n,"isCoachDashboard=",h,"role=",_);const C=()=>{w("/profile")},R=()=>{w(_==="coach"?"/coach":"/home")},V=E||(m&&m.email?m.email.split("@")[0]:"Usuario");let N;return n==="coach"&&h?N=S.jsxs(S.Fragment,{children:[S.jsx(gp,{children:"Panel del Profe"}),S.jsx(M2,{placeholder:"Buscar alumnos...",value:o,onChange:M=>a(M.target.value)})]}):n==="coach"?N=S.jsx(gp,{children:"Panel del Profe"}):n==="studentRoutinesPage"?N=S.jsxs(S.Fragment,{children:[S.jsx(gp,{children:"Panel del Profe"}),S.jsxs(O0,{style:{fontSize:"0.8rem",marginTop:"5px"},children:["Rutinas de ",S.jsx("span",{children:c})]})]}):N=S.jsxs(S.Fragment,{children:[S.jsxs(O0,{children:["¡Hola, ",S.jsx("span",{children:V}),"!"]}),t>0?S.jsxs(V0,{$totalActivedRoutines:t,$completedActivedRoutines:i,children:["Has completado ",S.jsx("span",{children:i})," de ",S.jsx("span",{children:t})," rutinas."]}):S.jsx(V0,{style:{color:"#bdc3c7"},children:"Aún no tienes rutinas asignadas."})]}),S.jsxs(D2,{$loading:e,children:[S.jsx(O2,{src:yg,alt:"Logo Prof Angel San Roman",onClick:R,style:{cursor:"pointer"},onError:M=>{M.target.onerror=null,M.target.src="https://placehold.co/90x90/CCCCCC/000000?text=Logo"}}),S.jsx(L2,{children:N}),S.jsx(V2,{onClick:C,style:{cursor:"pointer"},children:S.jsx("img",{src:N2,alt:"Ícono de Perfil",style:{width:"40px",height:"auto"},onError:M=>{M.target.onerror=null,M.target.src="https://placehold.co/24x24/CCCCCC/000000?text=👤"}})})]})}Er.propTypes={type:le.oneOf(["student","coach","studentRoutinesPage"]),loading:le.bool.isRequired,totalActivedRoutines:le.number,completedActivedRoutines:le.number,searchValue:le.string,setSearchValue:le.func,studentName:le.string,isCoachDashboard:le.bool,totalStudentsCount:le.number};const j2="/tucu/assets/whatsapp-dfEOmlNJ.webp";function F2(){const{user:n,loading:e}=Pr(),{routines:t,loading:i,error:o,totalActivedRoutines:a,completedActivedRoutines:c,toggleExerciseCompleted:h,updateExerciseKilos:f}=pN(),m=e||i,_=n&&n.email?n.email.split("@")[0]:"Alumno",E=!m&&!o&&t.length===0;return S.jsxs(x2,{children:[S.jsx(Er,{userName:_,loading:m,type:"student",totalActivedRoutines:a,completedActivedRoutines:c,isCoachDashboard:!1}),S.jsxs(ti,{style:{marginTop:"20px",width:"90%"},children:[m&&S.jsx(ra,{children:"Cargando tus rutinas..."}),o&&S.jsx(ra,{children:"¡Uups! Hubo un error al cargar tus rutinas."}),E&&S.jsxs(S.Fragment,{children:[S.jsx(ra,{children:"Aún no tienes rutinas creadas. Pídele al profe que te cree una rutina."}),S.jsx(I2,{href:"https://wa.me/XXXXXXXXXX?text=Hola%20Profe,%20me%20podrías%20crear%20una%20rutina%3F",target:"_blank",rel:"noopener noreferrer",children:S.jsx("img",{src:j2,alt:"Enviar mensaje por WhatsApp",onError:w=>{w.target.onerror=null,w.target.src="https://placehold.co/60x60/CCCCCC/000000?text=WA"}})})]}),!m&&!o&&t.length>0&&S.jsx(oT,{routines:t,loading:i,error:o,toggleExerciseCompleted:h,updateExerciseKilos:f})]})]})}function aT(n,e){const[t,i]=B.useState([]),[o,a]=B.useState(!0),[c,h]=B.useState(null),[f,m]=B.useState(""),[_,E]=B.useState(null),[w,C]=B.useState(null),R=B.useRef(null),V=()=>{a(!0),h(null),i([]),R.current&&R.current();try{const te=da(Qt,"users"),Y=fa(te,Ki("role","==","student"));R.current=ng(Y,P=>{const A=P.docs.map(I=>({id:I.id,...I.data()}));i(A),a(!1)},P=>{console.error("Error fetching students from Firestore:",P),h("Error al cargar la lista de alumnos."),a(!1)})}catch(te){console.error("Failed to setup students listener:",te),h("Error al iniciar la escucha de alumnos."),a(!1)}};B.useEffect(()=>(!e&&n?V():!e&&!n&&a(!1),()=>{R.current&&R.current()}),[n,e]);const N=async(te,Y)=>{C(null);try{const P=da(Qt,"users"),A=fa(P,Ki("email","==",Y));if(!(await tg(A)).empty){C("El correo electrónico ya está registrado. Por favor, usa otro.");return}await QP(P,{name:te,email:Y,role:"student",createdAt:new Date}),console.log("Alumno añadido con éxito.")}catch(P){console.error("Error al añadir nuevo alumno:",P),C("Error al intentar crear el alumno. Por favor, intentá de nuevo.")}},M=te=>{E(te)},z=t.filter(te=>te.name.toLowerCase().includes(f.toLowerCase())||te.email.toLowerCase().includes(f.toLowerCase()));return{states:{loading:o,error:c,searchedStudents:z,searchValue:f,selectedStudentId:_,addStudentError:w},statesUpdaters:{setSearchValue:m,addStudent:N,selectStudent:M,sincronizeStudents:V,setAddStudentError:C}}}const U2=ie.div`
  overflow: overlay;
  background: rgba(32, 35, 41, .8); /* Fondo semitransparente oscuro */
  position: fixed; /* Fijo en la ventana */
  top: -10px; /* Cubre toda la pantalla */
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex; /* Para centrar el contenido */
  justify-content: center;
  align-items: center;
  color: black;
  z-index: 1000; /* Asegura que esté por encima de casi todo */
`,z2=ie.div`
  background: white; /* Fondo blanco del modal en sí */
  padding: 30px;
  border-radius: 10px;
  width: 90%; /* Ancho responsivo */
  max-width: 500px; /* Ancho máximo para no desbordar */
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); /* Sombra para destacarlo */
  display: flex;
  flex-direction: column;
  position: relative; /* Para poder posicionar elementos internos (como un botón de cerrar) */
`;ie.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #777;
  &:hover {
    color: #333;
  }
`;function lT({children:n}){const e=document.getElementById("modal-root");return e?rI.createPortal(S.jsx(U2,{children:S.jsx(z2,{children:n})}),e):(console.error("El elemento con id 'modal-root' no se encontró en el DOM. Asegurate de agregarlo a public/index.html"),null)}lT.propTypes={children:le.node.isRequired};const B2=ie.li.withConfig({shouldForwardProp:n=>!["isSelected"].includes(n)})`
  background-color: #fff; /* Fondo blanco */
  border-radius: 12px; /* Bordes redondeados */
  padding: 16px; /* Espaciado interno */
  margin-bottom: 12px; /* Margen inferior para separar los items */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  display: flex; /* Para organizar el contenido horizontalmente */
  justify-content: space-between;
  align-items: center; /* Centrar verticalmente */
  gap: 12px; /* Espacio entre los elementos */
  cursor: pointer; /* Indicar que es clickeable */
  transition: all 0.2s ease-in-out; /* Transición suave para cualquier cambio */

  &:hover {
    transform: translateY(-2px); /* Efecto al pasar el mouse */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15); /* Sombra más pronunciada */
  }

  /* Si quieres un borde distintivo cuando está seleccionado (pasas la prop $isSelected) */
  ${n=>n.$isSelected&&` /* ¡CAMBIO CLAVE AQUÍ! Usamos $isSelected */
    border: 2px solid #e74c3c; /* Borde rojo para el seleccionado */
  `}
`,$2=ie.p`
  font-size: 1.3rem; /* Tamaño de fuente un poco más grande */
  font-weight: bold; /* Negrita */
  color: #333; /* Color de texto oscuro */
  flex-grow: 1; /* Para que ocupe el espacio disponible */
  margin: 0; /* Eliminar margen por defecto de p */
`,q2=ie.p`
  font-size: 0.9rem;
  color: #777;
  margin: 0;
  /* Podrías querer que solo se muestre en ciertas condiciones */
`,H2=ie.button`
  width: 80px;
  background-color: #3498db; /* Azul para el botón de acción */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2980b9; /* Azul más oscuro al pasar el mouse */
  }
`;function uT({student:n,onSelectStudent:e,isSelected:t=!1}){const{id:i,name:o,email:a}=n;return S.jsxs(B2,{onClick:()=>e(i),$isSelected:t,children:[S.jsxs("div",{children:[" ",S.jsx($2,{children:o}),a&&S.jsx(q2,{children:a})," "]}),S.jsx(H2,{children:"Ver Rutinas"})]})}uT.propTypes={student:le.shape({id:le.string.isRequired,name:le.string.isRequired,email:le.string}).isRequired,onSelectStudent:le.func.isRequired,isSelected:le.bool};function cT({students:n=[],loading:e,error:t=null,searchText:i="",onSelectStudent:o,selectedStudentId:a=null,onRetrySync:c}){return e?S.jsx(Bi,{children:"Cargando alumnos..."}):t?S.jsxs(Bi,{children:["¡Uups! Hubo un error al cargar los alumnos.",S.jsx("button",{onClick:c,style:{backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"5px",padding:"8px 15px",marginTop:"10px",cursor:"pointer",fontSize:"0.9rem"},children:"Reintentar"})]}):n.length===0?i?S.jsxs(Bi,{children:["¡No hay resultados para: ",i,"!"]}):S.jsx(Bi,{children:"¡No tenés alumnos todavía! Presioná + para crear uno."}):S.jsx(C2,{children:n.map(h=>S.jsx(uT,{student:h,onSelectStudent:()=>o(h.id),isSelected:h.id===a},h.id))})}cT.propTypes={students:le.arrayOf(le.shape({id:le.string.isRequired,name:le.string.isRequired,email:le.string.isRequired})).isRequired,loading:le.bool.isRequired,error:le.oneOfType([le.object,le.string,le.oneOf([null])]),searchText:le.string,onSelectStudent:le.func.isRequired,selectedStudentId:le.string,onRetrySync:le.func.isRequired};const W2=ie.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa; /* Fondo claro general */
  padding: 15px; /* Padding más pequeño para móviles */
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif; /* Tipografía a Roboto */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 20px; /* Aumenta el padding en pantallas más grandes */
  }
`,G2=ie.div`
  background-color: #ffffff;
  padding: 25px 20px; /* Padding ajustado para móviles */
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); /* Sombra más suave en móviles */
  width: 100%; /* Ocupa todo el ancho disponible en móviles */
  max-width: 380px; /* Ancho máximo para el formulario en móviles */
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacio entre elementos reducido para móviles */
  text-align: center;

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 35px 30px; /* Vuelve al padding original en tablets+ */
    max-width: 450px; /* Aumenta el ancho máximo */
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1); /* Sombra más pronunciada */
    gap: 20px; /* Vuelve al gap original */
  }
`,K2=ie.img`
  margin: 0 auto;
  width: 150px; /* ¡CAMBIO CLAVE AQUÍ! Ancho deseado de 240px */
  max-width: 100%; /* Asegura que el logo se achique en pantallas pequeñas si es necesario */
  height: auto;
  display: block; /* Asegura que el margin auto funcione */

  /* Las media queries para max-width anteriores se vuelven menos relevantes con 'width: 240px' y 'max-width: 100%'
     porque el logo intentará mantener 240px, pero nunca superará el ancho de su contenedor.
  */
`,Q2=ie.h1`
  font-size: 2rem; /* Tamaño de título para móviles */
  margin-bottom: 8px; /* Margen ajustado */
  span {
    color: #007bff; /* Un color de acento diferente para el login, quizás azul */
    font-weight: 700;
  }

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 2.5rem; /* Vuelve al tamaño original */
    margin-bottom: 10px;
  }
`,Y2=ie.p`
  font-size: 1rem; /* Tamaño de subtítulo para móviles */
  color: #7f8c8d;
  margin-bottom: 15px; /* Margen ajustado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 1.1rem; /* Vuelve al tamaño original */
    margin-bottom: 20px;
  }
`,X2=ie.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacio entre campos ajustado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    gap: 18px; /* Vuelve al gap original */
  }
`,L0=ie.label`
  font-size: 0.9rem; /* Tamaño de label para móviles */
  color: #333;
  font-weight: 600;
  text-align: left; /* Alineado a la izquierda */
  margin-bottom: 2px; /* Margen ajustado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 0.95rem; /* Vuelve al tamaño original */
    margin-bottom: 4px;
  }
`,M0=ie.input`
  width: 100%;
  padding: 10px 12px; /* Padding ajustado */
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 0.95rem; /* Tamaño de fuente para móviles */
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #007bff; /* Borde de enfoque azul */
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 12px 15px; /* Vuelve al padding original */
    font-size: 1rem; /* Vuelve al tamaño original */
  }
`,J2=ie.button`
  background-color: #007bff; /* Azul para el botón principal de login */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 18px; /* Padding ajustado */
  font-size: 1rem; /* Tamaño de fuente para móviles */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  box-shadow: 0 3px 10px rgba(0, 123, 255, 0.3); /* Sombra más suave */
  margin-top: 10px; /* Margen ajustado */

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 123, 255, 0.3);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 14px 20px; /* Vuelve al padding original */
    font-size: 1.1rem; /* Vuelve al tamaño original */
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3); /* Vuelve a la sombra original */
    margin-top: 15px; /* Vuelve al margen original */
  }
`,dT=ie.p`
  color: #e74c3c; /* ¡Rojo para mensajes de error, ya estaba así y es consistente! */
  font-size: 0.85rem; /* Tamaño de error para móviles */
  margin-top: -8px; /* Margen ajustado */
  text-align: left;

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 0.9rem; /* Vuelve al tamaño original */
    margin-top: -10px;
  }
`,Z2=ie.p`
  font-size: 0.9rem; /* Tamaño de link para móviles */
  color: #7f8c8d;
  margin-top: 10px; /* Margen ajustado */
  a {
    color: #e74c3c; /* Color de acento para enlaces como 'Registrate' */
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 0.95rem; /* Vuelve al tamaño original */
    margin-top: 15px;
  }
`;function eD(){const n=ns(),{user:e,loading:t}=Pr(),{states:i,statesUpdaters:o}=aT(e,t),{loading:a,error:c,searchedStudents:h,searchValue:f,selectedStudentId:m,addStudentError:_}=i,{setSearchValue:E,addStudent:w,selectStudent:C,sincronizeStudents:R,setAddStudentError:V}=o,[N,M]=dt.useState(!1),[z,G]=dt.useState(""),[J,te]=dt.useState(""),Y=I=>{C(I),n(`/coach/students/${I}/routines`)},P=async I=>{I.preventDefault(),V(null),z.trim()&&J.trim()&&(await w(z.trim(),J.trim()),setTimeout(()=>{i.addStudentError||(M(!1),G(""),te(""))},0))},A=()=>{M(!1),G(""),te(""),V(null)};return S.jsxs(Dl,{children:[S.jsx(Er,{type:"coach",loading:a,searchValue:f,setSearchValue:E,isCoachDashboard:!0}),S.jsx(A2,{children:S.jsx(cT,{students:h,loading:a,error:c,searchText:f,onSelectStudent:Y,selectedStudentId:m,onRetrySync:R})}),S.jsx(R2,{onClick:()=>M(!0),children:"+"}),!!N&&S.jsx(lT,{children:S.jsxs(P2,{onSubmit:P,children:[S.jsx("h2",{children:"Crear Nuevo Alumno"}),_&&S.jsx(dT,{children:_}),S.jsx(nm,{htmlFor:"studentName",children:"Nombre del Alumno:"}),S.jsx(rm,{id:"studentName",type:"text",placeholder:"Ej. Juan Pérez",value:z,onChange:I=>G(I.target.value),required:!0}),S.jsx(nm,{htmlFor:"studentEmail",children:"Email del Alumno:"}),S.jsx(rm,{id:"studentEmail",type:"email",placeholder:"Ej. juan@mail.com",value:J,onChange:I=>te(I.target.value),required:!0}),S.jsxs(k2,{children:[S.jsx(Vd,{type:"submit",primary:!0,children:"Crear"}),S.jsx(Vd,{type:"button",secondary:!0,onClick:A,children:"Cancelar"})]})]})})]})}const jt=[];for(let n=0;n<256;++n)jt.push((n+256).toString(16).slice(1));function tD(n,e=0){return(jt[n[e+0]]+jt[n[e+1]]+jt[n[e+2]]+jt[n[e+3]]+"-"+jt[n[e+4]]+jt[n[e+5]]+"-"+jt[n[e+6]]+jt[n[e+7]]+"-"+jt[n[e+8]]+jt[n[e+9]]+"-"+jt[n[e+10]]+jt[n[e+11]]+jt[n[e+12]]+jt[n[e+13]]+jt[n[e+14]]+jt[n[e+15]]).toLowerCase()}let yp;const nD=new Uint8Array(16);function rD(){if(!yp){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");yp=crypto.getRandomValues.bind(crypto)}return yp(nD)}const iD=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),j0={randomUUID:iD};function Gr(n,e,t){var o;if(j0.randomUUID&&!n)return j0.randomUUID();n=n||{};const i=n.random??((o=n.rng)==null?void 0:o.call(n))??rD();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,tD(i)}const im=n=>{if(n===null||typeof n!="object")return n;if(Array.isArray(n))return n.map(t=>im(t));const e={};for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)){const i=n[t];i!==void 0&&(e[t]=im(i))}return e},F0={name:"",objective:"",dueDate:"",stage:"",status:"draft",createdAt:null,updatedAt:null,assignedBy:""},Il={name:"",restTime:"",rir:"",warmUp:"",exercises:[]},sD=(n,e=null,t,i=null)=>{const[o,a]=B.useState(1),[c,h]=B.useState({...F0,id:Gr(),createdAt:new Date}),[f,m]=B.useState([{...Il,id:Gr()}]),[_,E]=B.useState(0),[w,C]=B.useState(!1),[R,V]=B.useState(null),N=B.useRef(e),M=B.useRef(null),z=Array.isArray(f)&&f.length>0&&f[_]?f[_]:{...Il,id:Gr()},G=B.useCallback(I=>{console.log("[useRoutineGroupForm] setCurrentRoutine received newRoutine:",JSON.stringify(I,null,2)),m(D=>{const O=Array.isArray(D)?[...D]:[];return _>=0&&_<O.length?O[_]=I:(console.warn("[useRoutineGroupForm] setCurrentRoutine: currentRoutineIndex fuera de límites. Agregando rutina al final."),O.push(I),E(O.length-1)),console.log("[useRoutineGroupForm] setRoutines called with:",JSON.stringify(O,null,2)),O})},[_]),J=B.useCallback(()=>{a(1),h({...F0,id:Gr(),createdAt:new Date}),m([{...Il,id:Gr()}]),E(0),N.current=null,V(null),console.log("[useRoutineGroupForm] Formulario reseteado.")},[]),te=B.useCallback(async()=>{if(!n||!e||!t){console.log("[useRoutineGroupForm] loadDraft: Faltan studentId, initialDraftGroupId o coachId. No se carga."),J();return}C(!0),V(null);try{const I=nr(Qt,`artifacts/profangelsanroman-2d392/users/${n}/routineGroups`,e),D=await qs(I);if(D.exists()){const O=D.data();if(console.log("[useRoutineGroupForm] Borrador encontrado:",O),console.log("[useRoutineGroupForm] Estado del documento:",O.status),O.assignedBy===t&&(O.status==="draft"||O.status==="active")){h({id:O.id,name:O.name||"",objective:O.objective||"",dueDate:O.dueDate||"",stage:O.stage||"",status:O.status,createdAt:O.createdAt&&typeof O.createdAt.toDate=="function"?O.createdAt.toDate():new Date,updatedAt:O.updatedAt&&typeof O.updatedAt.toDate=="function"?O.updatedAt.toDate():new Date,assignedBy:O.assignedBy});const F=(O.routines||[]).map(k=>({...k,id:k.id||Gr(),name:k.name||"",restTime:k.restTime===void 0||k.restTime===null?"":k.restTime,rir:k.rir===void 0||k.rir===null?"":k.rir,warmUp:k.warmUp===void 0||k.warmUp===null?"":k.warmUp,exercises:(k.exercises||[]).map(_e=>({..._e,id:_e.id||Gr(),name:_e.name||"",type:_e.type||"reps_sets",sets:_e.sets===void 0||_e.sets===null?0:_e.sets,reps:_e.reps===void 0||_e.reps===null?0:_e.reps,time:_e.time===void 0||_e.time===null?0:_e.time,kilos:_e.kilos===void 0||_e.kilos===null?0:_e.kilos,completed:_e.completed===void 0||_e.completed===null?!1:_e.completed,order:_e.order===void 0||_e.order===null?0:_e.order}))}));m(F.length>0?F:[{...Il,id:Gr()}]),E(0),N.current=e,a(1),console.log("[useRoutineGroupForm] Borrador/Grupo activo cargado en estados.")}else console.log("[useRoutineGroupForm] Documento encontrado, pero no es un borrador/grupo activo válido para este profe. Reseteando formulario."),J()}else console.log("[useRoutineGroupForm] No se encontró documento con el initialDraftGroupId. Reseteando formulario."),J()}catch(I){console.error("[useRoutineGroupForm] Error al cargar borrador:",I),V("Error al cargar el borrador."),J()}finally{C(!1)}},[n,e,t,J]),Y=B.useCallback(async(I=!1)=>{if(!t||!n||!c.id){console.log("[useRoutineGroupForm] saveDraft: Faltan coachId, studentId o groupData.id. No se guarda borrador.");return}const D=f.filter(F=>F.name.trim()||F.restTime!==""&&F.restTime!==0||F.rir!==""&&F.rir!==0||F.warmUp.trim()||F.exercises.length>0),O=c.name.trim()||c.objective.trim()||c.dueDate||c.stage;if(!e&&!O&&D.length===0){console.log("[useRoutineGroupForm] saveDraft: Nuevo grupo y todo el contenido (grupo + rutinas) está vacío. Omitiendo guardado de borrador.");return}M.current&&clearTimeout(M.current),M.current=setTimeout(async()=>{C(!0),V(null);try{const F={...c,updatedAt:new Date,assignedBy:t,routines:D.map(Oe=>({id:Oe.id,name:Oe.name||"",restTime:Oe.restTime===void 0||Oe.restTime===null?"":Oe.restTime,rir:Oe.rir===void 0||Oe.rir===null?"":Oe.rir,warmUp:Oe.warmUp||"",exercises:(Oe.exercises||[]).map(de=>({id:de.id,name:de.name||"",type:de.type||"reps_sets",sets:de.sets===void 0||de.sets===null?0:de.sets,reps:de.reps===void 0||de.reps===null?0:de.reps,time:de.time===void 0||de.time===null?0:de.time,kilos:de.kilos===void 0||de.kilos===null?0:de.kilos,completed:de.completed===void 0||de.completed===null?!1:de.completed,order:de.order===void 0||de.order===null?0:de.order}))}))},k=im(F),_e=nr(Qt,`artifacts/profangelsanroman-2d392/users/${n}/routineGroups`,c.id);await Sd(_e,k,{merge:!0}),console.log("[useRoutineGroupForm] Borrador guardado exitosamente:",c.id),N.current=c.id}catch(F){console.error("[useRoutineGroupForm] Error al guardar borrador:",F),V("Error al guardar el borrador.")}finally{C(!1)}},I?0:2e3)},[n,c,f,t,e]);return B.useEffect(()=>{c.id&&t&&!i&&(console.log("[useRoutineGroupForm] useEffect: groupData o routines cambiaron. Llamando saveDraft."),Y())},[c,f,t,Y,i]),{stage:o,setStage:a,groupData:c,setGroupData:h,routines:f,setRoutines:m,currentRoutineIndex:_,setCurrentRoutineIndex:E,currentRoutine:z,setCurrentRoutine:G,goToNextStage:()=>{o===1?a(2):o===2?a(3):o===3?a(4):o===4&&(m(I=>[...I,{...Il,id:Gr()}]),E(f.length),a(2)),console.log("[useRoutineGroupForm] Avanzando a la siguiente etapa:",o+1)},goToPreviousStage:()=>{o===2?a(1):o===3?a(2):o===4&&a(3),console.log("[useRoutineGroupForm] Volviendo a la etapa anterior:",o-1)},resetForm:J,saveDraft:Y,loadDraft:te,isSaving:w,saveError:R}},oD=[{id:1,name:"Sentadilla",category:"Piernas",description:"Ejercicio fundamental para piernas y glúteos.",type:"reps_sets"},{id:2,name:"Press de Banca",category:"Pecho",description:"Ejercicio de fuerza para pecho, hombros y tríceps.",type:"reps_sets"},{id:3,name:"Peso Muerto",category:"Espalda",description:"Ejercicio compuesto para toda la cadena posterior.",type:"reps_sets"},{id:4,name:"Dominadas",category:"Espalda",description:"Ejercicio de peso corporal para espalda y bíceps.",type:"reps_sets"},{id:5,name:"Press Militar",category:"Hombros",description:"Ejercicio de fuerza para los hombros.",type:"reps_sets"},{id:6,name:"Remo con Barra",category:"Espalda",description:"Ejercicio para la espalda media.",type:"reps_sets"},{id:7,name:"Curl de Bíceps",category:"Brazos",description:"Ejercicio de aislamiento para los bíceps.",type:"reps_sets"},{id:8,name:"Extensiones de Tríceps (Banco)",category:"Brazos",description:"Ejercicio de aislamiento para los tríceps en banco.",type:"reps_sets"},{id:9,name:"Zancadas",category:"Piernas",description:"Ejercicio unilateral para piernas y glúteos.",type:"reps_sets"},{id:10,name:"Fondos (Paralelas)",category:"Pecho / Tríceps",description:"Ejercicio de peso corporal para pecho y tríceps.",type:"reps_sets"},{id:11,name:"Plancha",category:"Core",description:"Ejercicio isométrico para fortalecer el core.",type:"timed"},{id:12,name:"Elevaciones Laterales",category:"Hombros",description:"Ejercicio de aislamiento para la parte lateral del hombro.",type:"reps_sets"},{id:13,name:"Prensa de Piernas",category:"Piernas",description:"Ejercicio de máquina para piernas.",type:"reps_sets"},{id:14,name:"Flexiones (Push-ups)",category:"Pecho",description:"Ejercicio de peso corporal para pecho y tríceps.",type:"reps_sets"},{id:15,name:"Crunches",category:"Core",description:"Ejercicio para los abdominales superiores.",type:"reps_sets"},{id:16,name:"Ejercicio Escalera",category:"Calentamiento",description:"Entrada en calor dinámica.",type:"timed"},{id:17,name:"Hip Thrust",category:"Glúteos",description:"Ejercicio potente para glúteos.",type:"reps_sets"},{id:18,name:"Sentadilla Búlgara",category:"Piernas",description:"Ejercicio unilateral de piernas.",type:"reps_sets"},{id:19,name:"Peso Muerto a 1 Pie",category:"Piernas / Espalda",description:"Ejercicio de equilibrio y fuerza de cadena posterior.",type:"reps_sets"},{id:20,name:"Barquito Isométrico",category:"Core",description:"Isométrico para abdomen bajo.",type:"timed"},{id:21,name:"Extensiones de Brazo en Banco",category:"Brazos",description:"Ejercicio para tríceps tumbado en banco.",type:"reps_sets"},{id:22,name:"Pecho Plano con Mancuerna",category:"Pecho",description:"Variante del press de banca con mancuernas.",type:"reps_sets"},{id:23,name:"Empuje en Polea (Tríceps)",category:"Tríceps",description:"Extensión de tríceps en polea alta.",type:"reps_sets"},{id:24,name:"Plancha Lateral",category:"Core",description:"Isométrico para oblicuos.",type:"timed"},{id:25,name:"Rueda Abdominal",category:"Core",description:"Fortalecimiento de core con rueda.",type:"reps_sets"},{id:26,name:"Oblicuos con Tensor Isométrico",category:"Core",description:"Isométrico para oblicuos con tensor.",type:"timed"},{id:27,name:"Estocadas con Salto",category:"Piernas / Cardio",description:"Estocadas dinámicas con salto.",type:"reps_sets"},{id:28,name:"Sentadillas con Salto",category:"Piernas / Cardio",description:"Sentadilla explosiva con salto.",type:"reps_sets"},{id:29,name:"Camillas de Isquios",category:"Piernas",description:"Aislamiento para isquiotibiales.",type:"reps_sets"},{id:30,name:"Sentadilla Isométrica",category:"Piernas",description:"Mantener posición de sentadilla contra la pared.",type:"timed"},{id:31,name:"Sillón de Cuádriceps",category:"Piernas",description:"Aislamiento para cuádriceps en máquina.",type:"reps_sets"},{id:32,name:"Aductores (Máquina)",category:"Piernas",description:"Aislamiento de aductores en máquina.",type:"reps_sets"},{id:33,name:"Glúteo Medio (Máquina/Banda)",category:"Glúteos",description:"Aislamiento de glúteo medio.",type:"reps_sets"},{id:34,name:"Pantorrillas (Elevación)",category:"Piernas",description:"Elevaciones para gemelos.",type:"reps_sets"},{id:35,name:"Remo en Máquina (Remo Bajo)",category:"Espalda",description:"Ejercicio de espalda en máquina de remo.",type:"reps_sets"},{id:36,name:"Plancha Brazo Adelante",category:"Core",description:"Variante de plancha con brazo extendido.",type:"timed"},{id:37,name:"Oblicuos con Movimiento (Russian Twist)",category:"Core",description:"Movimiento de torsión para oblicuos.",type:"reps_sets"},{id:38,name:"Subir al Cajón (Step-up)",category:"Piernas",description:"Ejercicio funcional para piernas.",type:"reps_sets"},{id:39,name:"Búlgara Isométrica",category:"Piernas",description:"Mantener posición de sentadilla búlgara.",type:"timed"},{id:40,name:"Patada de Glúteos en Polea",category:"Glúteos",description:"Aislamiento para glúteos en polea.",type:"reps_sets"},{id:41,name:"Vuelos Combinados (Hombros)",category:"Hombros",description:"Combinación de elevaciones laterales y frontales.",type:"reps_sets"},{id:42,name:"Bíceps con Mancuernas",category:"Brazos",description:"Curl de bíceps con mancuernas.",type:"reps_sets"},{id:43,name:"Tríceps en Polea",category:"Brazos",description:"Extensiones de tríceps en polea.",type:"reps_sets"},{id:44,name:"Puente de Glúteos (Glute Bridge)",category:"Glúteos",description:"Ejercicio para activar glúteos y cadena posterior.",type:"reps_sets"},{id:45,name:"Skipping",category:"Calentamiento",description:"Entrada en calor dinámica, elevación de rodillas.",type:"timed"},{id:46,name:"Elíptica",category:"Cardio",description:"Ejercicio cardiovascular en elíptica.",type:"timed"}],aD=ie.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75); /* Fondo oscuro semitransparente */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* ¡CAMBIO CLAVE AQUÍ! Aumentamos el z-index para que esté por encima de todo */
  padding: 15px; /* Padding más pequeño para móviles */
  box-sizing: border-box;
`,lD=ie.div`
  padding: 15px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px; /* Ancho máximo para el modal */
  height: 80vh;
  display: flex;
  flex-direction: column;
  position: relative; /* Para el spinner de carga */
  overflow: hidden; /* Asegura que el contenido no se desborde del borde redondeado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    max-width: 700px; /* Un poco más ancho en desktop */
    height: 80vh; /* Un poco menos alto en desktop */
  }
`,uD=ie.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
`,cD=ie.h2`
  font-weight: 700;
  margin: 0;
`,dD=ie.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #7f8c8d;
  font-size: 1.8rem;
  padding: 5px;
  border-radius: 50%;
`,gh=ie.div`
  flex-grow: 1;
  gap: 10px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow-y: auto;
`,tr=ie.label`
  display: block;
  font-size: 0.95rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 8px;
`,ni=ie.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`,hT=ie.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px 12px;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;
  resize: vertical; /* Permite redimensionar verticalmente */

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`,hD=ie.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;
  appearance: none; /* Elimina el estilo por defecto del select */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237f8c8d'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E"); /* Icono de flecha personalizado */
  background-repeat: no-repeat;
  background-position: right 10px center;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`,yh=ie.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`,Gs=ie.button`
  background-color: ${n=>n.$primary?"#3498db":"#bdc3c7"};
  color: white;
  border: none;
  border-radius: 50%; /* Botones redondos */
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
  }
`,fD=ie.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(46, 204, 113, 0.2);
  transition: all 0.2s ease-in-out;

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(46, 204, 113, 0.2);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
  }
`;ie.button`
  background-color: #2ecc71; /* Verde para añadir */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0 2px 5px rgba(46, 204, 113, 0.2);

`;const pD=ie.button`
  background: none;
  border: none;
  color: #e74c3c; /* Rojo para eliminar */
  cursor: pointer;
  font-size: 1.2rem;
  padding: 5px;
  border-radius: 50%;

`,fT=ie.li`
  padding: 12px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  cursor: grab; /* Indica que es arrastrable */

  &:active {
    cursor: grabbing;
  }
`,mD=ie.ul`
  list-style: none;
  height: 30vh;
  padding: 0;
  margin: 0 0 10px;
  flex-grow: 1;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background-color: #f8f8f8;
`,pT=ie.h3`
  margin: 0;
`,sm=ie.h4`
  font-size: 1.1rem;
  margin: 0;
`,mT=ie.p`
  font-size: 0.95rem;
  color: #555;
  margin: 0;
  padding-bottom: 10px;
`;ie.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  z-index: 10; /* Para que esté por encima del contenido del modal */
`;const wr=ie.p.withConfig({shouldForwardProp:n=>!["isVisible"].includes(n)})`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
  /* Controlamos la visibilidad con CSS */
  display: ${n=>n.$isVisible?"block":"none"};
`;ie.p`
  color: #2ecc71;
  font-size: 0.9rem;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
`;const U0=ie.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 10px;

  ${ni} {
    width: 80px; /* Ancho fijo para inputs de series/reps/tiempo */
    text-align: center;
  }
`;ie.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;

  &:last-child {
    border-bottom: none;
  }
`;ie.div`
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px;
  background-color: #fdfdfd;
`;ie.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
`;ie.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;ie.li`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 5px;
`;const ts=({direction:n})=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{transform:n==="left"?"rotate(180deg)":"none"},children:S.jsx("path",{strokeLinecap:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})});ts.propTypes={direction:le.oneOf(["left","right"]).isRequired};const gT=({groupData:n,setGroupData:e,goToNextStage:t,studentId:i,draftGroupId:o,isEditingIndividualRoutine:a,setGroupNameConflictError:c,groupNameConflictError:h})=>{const[f,m]=B.useState({});B.useEffect(()=>{const w=async()=>{if(!n.name.trim()||!n.stage.trim()||a||!i){c(null);return}const R=da(Qt,`artifacts/profangelsanroman-2d392/users/${i}/routineGroups`),V=fa(R,Ki("stage","==",n.stage),Ki("name","==",n.name),Ki("status","==","active")),N=await tg(V),M=new Date,z=N.docs.find(G=>{const J=G.data(),te=J.dueDate?new Date(J.dueDate):null;return G.id!==o&&(!te||te>=M)});c(z?"Ya existe un grupo de rutinas activo con este nombre y etapa para este alumno.":null)},C=setTimeout(()=>{w()},500);return()=>clearTimeout(C)},[n.name,n.stage,i,o,a,c]);const _=()=>{const w={};return n.name.trim()||(w.name="El nombre del grupo es obligatorio."),n.objective.trim()||(w.objective="El objetivo es obligatorio."),n.dueDate||(w.dueDate="La fecha de vencimiento es obligatoria."),n.stage||(w.stage="La etapa de entrenamiento es obligatoria."),h&&(w.groupNameConflict=h),m(w),Object.keys(w).length===0},E=()=>{_()&&t()};return S.jsxs(gh,{children:[S.jsxs("div",{style:{marginBottom:"18px"},children:[S.jsx(tr,{htmlFor:"stage",children:"Etapa de Entrenamiento"}),S.jsxs(hD,{id:"stage",value:n.stage,onChange:w=>e({...n,stage:w.target.value}),children:[S.jsx("option",{value:"",children:"Selecciona una etapa"}),S.jsx("option",{value:"adaptacion",children:"Adaptación"}),S.jsx("option",{value:"volumen",children:"Volumen"}),S.jsx("option",{value:"definicion",children:"Definición"}),S.jsx("option",{value:"fuerza",children:"Fuerza"}),S.jsx("option",{value:"mantenimiento",children:"Mantenimiento"})]}),f.stage&&S.jsx(wr,{$isVisible:!!f.stage,children:f.stage})]}),S.jsxs("div",{style:{marginBottom:"18px"},children:[S.jsx(tr,{htmlFor:"groupName",children:"Nombre del Grupo"}),S.jsx(ni,{type:"text",id:"groupName",value:n.name,onChange:w=>e({...n,name:w.target.value}),placeholder:"Ej: Fase 1 - Adaptación"}),f.name&&S.jsx(wr,{$isVisible:!!f.name,children:f.name}),h&&S.jsx(wr,{$isVisible:!0,children:h})," "]}),S.jsxs("div",{style:{marginBottom:"18px"},children:[S.jsx(tr,{htmlFor:"groupObjective",children:"Objetivo (breve descripción)"}),S.jsx(hT,{id:"groupObjective",value:n.objective,onChange:w=>e({...n,objective:w.target.value}),placeholder:"Ej: Fortalecer base muscular y mejorar técnica."}),f.objective&&S.jsx(wr,{$isVisible:!!f.objective,children:f.objective})]}),S.jsxs("div",{style:{marginBottom:"18px"},children:[S.jsx(tr,{htmlFor:"dueDate",children:"Fecha de Vencimiento"}),S.jsx(ni,{type:"date",id:"dueDate",value:n.dueDate,onChange:w=>e({...n,dueDate:w.target.value})}),f.dueDate&&S.jsx(wr,{$isVisible:!!f.dueDate,children:f.dueDate})]}),S.jsx(yh,{style:{justifyContent:"flex-end"},children:S.jsx(Gs,{onClick:E,$primary:!0,children:S.jsx(ts,{direction:"right"})})})]})};gT.propTypes={groupData:le.object.isRequired,setGroupData:le.func.isRequired,goToNextStage:le.func.isRequired,studentId:le.string.isRequired,draftGroupId:le.string,isEditingIndividualRoutine:le.bool.isRequired,setGroupNameConflictError:le.func.isRequired,groupNameConflictError:le.string};const om=({currentRoutine:n,setCurrentRoutine:e,goToNextStage:t,goToPreviousStage:i,onClose:o})=>{const[a,c]=B.useState({}),h=()=>{const m={};return n.name.trim()||(m.name="El nombre de la rutina es obligatorio."),(n.restTime===""||isNaN(n.restTime)||n.restTime<0)&&(m.restTime="El tiempo de descanso debe ser un número positivo."),(n.rir===""||isNaN(n.rir)||n.rir<0)&&(m.rir="El RIR debe ser un número positivo o cero."),(!n.warmUp||!n.warmUp.trim())&&(m.warmUp="El calentamiento es obligatorio."),c(m),Object.keys(m).length===0},f=()=>{h()&&t()};return S.jsxs(gh,{children:[S.jsxs("div",{style:{marginBottom:"18px"},children:[S.jsx(tr,{htmlFor:"routineName",children:"Nombre de la Rutina"}),S.jsx(ni,{type:"text",id:"routineName",value:n.name,onChange:m=>e({...n,name:m.target.value}),placeholder:"Ej: Rutina de Piernas"}),a.name&&S.jsx(wr,{$isVisible:!!a.name,children:a.name})]}),S.jsxs("div",{style:{marginBottom:"18px"},children:[S.jsx(tr,{htmlFor:"restTime",children:"Tiempo de Descanso (segundos)"}),S.jsx(ni,{type:"number",id:"restTime",value:n.restTime,onChange:m=>e({...n,restTime:Number(m.target.value)}),placeholder:"Ej: 60"}),a.restTime&&S.jsx(wr,{$isVisible:!!a.restTime,children:a.restTime})]}),S.jsxs("div",{style:{marginBottom:"18px"},children:[S.jsx(tr,{htmlFor:"rir",children:"RIR (Repeticiones en Reserva)"}),S.jsx(ni,{type:"number",id:"rir",value:n.rir,onChange:m=>e({...n,rir:Number(m.target.value)}),placeholder:"Ej: 2"}),a.rir&&S.jsx(wr,{$isVisible:!!a.rir,children:a.rir})]}),S.jsxs("div",{style:{marginBottom:"18px"},children:[S.jsx(tr,{htmlFor:"warmUp",children:"Entrada en calor"}),S.jsx(hT,{id:"warmUp",value:n.warmUp,onChange:m=>e({...n,warmUp:m.target.value}),placeholder:"Ej: 5 minutos de cardio ligero, movilidad articular."}),a.warmUp&&S.jsx(wr,{$isVisible:!!a.warmUp,children:a.warmUp})]}),S.jsxs(yh,{children:[S.jsx(Gs,{onClick:i,children:S.jsx(ts,{direction:"left"})}),S.jsx(Gs,{onClick:f,$primary:!0,children:S.jsx(ts,{direction:"right"})})]})]})};om.propTypes={currentRoutine:le.object.isRequired,setCurrentRoutine:le.func.isRequired,goToNextStage:le.func.isRequired,goToPreviousStage:le.func.isRequired,onClose:le.func.isRequired};const am=({currentRoutine:n,setCurrentRoutine:e,goToNextStage:t,goToPreviousStage:i,onClose:o,editingRoutineData:a})=>{const[c,h]=B.useState(""),f=n||{},m=f.exercises||[];B.useEffect(()=>{console.count("Stage3AddExercises Render"),console.log("[Stage3AddExercises] currentRoutine object:",JSON.stringify(f,null,2)),console.log("[Stage3AddExercises] exercisesInRoutine derived:",JSON.stringify(m,null,2))},[f]);const _=N=>{e(M=>{const z=M.exercises||[],G=z.some(Y=>Y.id===N.id);let J;if(G)J=z.filter(Y=>Y.id!==N.id);else{const Y=((a==null?void 0:a.exercises)||[]).find(A=>A.id===N.id),P={id:N.id,name:N.name,type:N.type||"reps_sets",sets:(Y==null?void 0:Y.sets)!==void 0?Y.sets:0,reps:(Y==null?void 0:Y.reps)!==void 0?Y.reps:0,time:(Y==null?void 0:Y.time)!==void 0?Y.time:0,kilos:(Y==null?void 0:Y.kilos)!==void 0?Y.kilos:0,completed:(Y==null?void 0:Y.completed)!==void 0?Y.completed:!1};J=[...z,P]}const te=J.map((Y,P)=>({...Y,order:P}));return{...M,exercises:te}})},E=(N,M)=>{N.dataTransfer.setData("exerciseIndex",M)},w=N=>{N.preventDefault()},C=(N,M)=>{const z=N.dataTransfer.getData("exerciseIndex"),G=m[z],J=[...m];J.splice(z,1),J.splice(M,0,G);const te=J.map((P,A)=>({...P,order:A})),Y={...f,exercises:te};e(Y)},V=oD.filter(N=>N.name.toLowerCase().includes(c.toLowerCase())).reduce((N,M)=>{const z=M.category||"Otros";return N[z]||(N[z]=[]),N[z].push(M),N},{});return S.jsxs(gh,{children:[S.jsx(pT,{children:f.name}),S.jsxs(mT,{children:["Descanso: ",f.restTime,"s | RIR: ",f.rir," | Calentamiento: ",f.warmUp]}),S.jsx(sm,{children:"Seleccionar Ejercicios:"}),S.jsx(ni,{type:"text",value:c,onChange:N=>h(N.target.value),placeholder:"Buscar ejercicio...",style:{marginBottom:"15px"}}),Object.keys(V).length===0&&c?S.jsx("p",{style:{fontSize:"0.9rem",color:"#777",textAlign:"center",margin:"20px 0"},children:"No se encontraron ejercicios con esa búsqueda."}):Object.keys(V).length===0&&!c?S.jsx("p",{style:{fontSize:"0.9rem",color:"#777",textAlign:"center",margin:"20px 0"},children:"No hay ejercicios disponibles para seleccionar."}):Object.keys(V).map(N=>S.jsx(Zl,{title:N,defaultOpen:!1,children:V[N].map(M=>{const z=m.some(G=>G.id===M.id);return S.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px",padding:"5px 0",borderBottom:"1px dashed #f0f0f0"},children:S.jsxs("div",{style:{display:"flex",alignItems:"center",flexGrow:1},children:[S.jsx("input",{type:"checkbox",id:`select-exercise-${M.id}`,checked:z,onChange:()=>_(M),style:{marginRight:"10px"}}),S.jsx(tr,{htmlFor:`select-exercise-${M.id}`,style:{margin:0,fontWeight:"normal",cursor:"pointer"},children:M.name})]})},M.id)})},N)),S.jsx(sm,{children:"Ejercicios en la Rutina:"}),m.length===0?S.jsx("p",{style:{fontSize:"0.9rem",color:"#777",textAlign:"center",margin:"20px 0"},children:"Selecciona ejercicios de la lista de arriba."}):m.sort((N,M)=>N.order-M.order).map((N,M)=>S.jsxs(fT,{draggable:!0,onDragStart:z=>E(z,M),onDragOver:w,onDrop:z=>C(z,M),children:[S.jsxs("span",{children:[M+1,". ",N.name]}),S.jsx(pD,{onClick:()=>_(N),children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},N.id)),S.jsxs(yh,{children:[S.jsx(Gs,{onClick:i,children:S.jsx(ts,{direction:"left"})}),S.jsx(Gs,{onClick:t,$primary:!0,children:S.jsx(ts,{direction:"right"})})]})]})};am.propTypes={currentRoutine:le.object.isRequired,setCurrentRoutine:le.func.isRequired,goToNextStage:le.func.isRequired,goToPreviousStage:le.func.isRequired,onClose:le.func.isRequired,editingRoutineData:le.object};const z0=({currentRoutine:n,setCurrentRoutine:e,goToPreviousStage:t,onSaveRoutineGroup:i,onAddAnotherRoutine:o,onClose:a,isEditingIndividualRoutine:c})=>{const h=n.exercises||[],f=(E,w)=>{e(C=>({...C,exercises:(C.exercises||[]).map(R=>R.id===E?{...R,sets:Number(w)||0}:R)}))},m=(E,w)=>{e(C=>({...C,exercises:(C.exercises||[]).map(R=>R.id===E?{...R,reps:Number(w)||0}:R)}))},_=(E,w)=>{e(C=>({...C,exercises:(C.exercises||[]).map(R=>R.id===E?{...R,time:Number(w)||0}:R)}))};return S.jsxs(gh,{children:[S.jsxs(pT,{children:["Series y Repeticiones: ",n.name]}),S.jsxs(mT,{children:["Descanso: ",n.restTime,"s | RIR: ",n.rir," | Calentamiento: ",n.warmUp]}),S.jsx(mD,{style:{border:"none",padding:"0",backgroundColor:"transparent"},children:h.length===0?S.jsx("p",{style:{fontSize:"0.9rem",color:"#777",textAlign:"center",margin:"20px 0"},children:"No hay ejercicios para configurar. Vuelve a la etapa anterior para añadir."}):h.sort((E,w)=>E.order-w.order).map((E,w)=>S.jsxs(fT,{style:{flexDirection:"column",alignItems:"flex-start",cursor:"default"},children:[S.jsxs(sm,{style:{marginTop:"0",marginBottom:"10px"},children:[w+1,". ",E.name]}),S.jsxs(U0,{children:[S.jsx(tr,{htmlFor:`sets-${E.id}`,style:{marginBottom:"0"},children:"Series:"}),S.jsx(ni,{type:"number",min:"0",id:`sets-${E.id}`,value:E.sets===0?"":E.sets,onChange:C=>f(E.id,C.target.value),placeholder:"Ej: 3"})]}),S.jsxs(U0,{style:{marginTop:"10px"},children:[S.jsx(tr,{htmlFor:`value-${E.id}`,style:{marginBottom:"0"},children:E.type==="timed"?"Tiempo (seg):":"Repeticiones:"}),S.jsx(ni,{type:"number",min:"0",id:`value-${E.id}`,value:E.type==="timed"?E.time===0?"":E.time:E.reps===0?"":E.reps,onChange:C=>E.type==="timed"?_(E.id,C.target.value):m(E.id,C.target.value),placeholder:E.type==="timed"?"Ej: 45":"Ej: 8-12"})]})]},E.id))}),S.jsxs(yh,{children:[S.jsx(Gs,{onClick:t,children:S.jsx(ts,{direction:"left"})}),S.jsx(fD,{onClick:i,children:c?"Guardar Rutina":"Guardar Grupo"}),!c&&S.jsx(Gs,{onClick:o,$primary:!0,children:S.jsx(ts,{direction:"right"})})]})]})},yT=({isOpen:n,onClose:e,studentId:t,draftGroupId:i=null,editingRoutineData:o=null})=>{const{user:a}=Pr(),[c,h]=B.useState(null),{stage:f,groupData:m,setGroupData:_,routines:E,currentRoutine:w,setCurrentRoutine:C,goToNextStage:R,goToPreviousStage:V,resetForm:N,saveDraft:M,loadDraft:z,isSaving:G,saveError:J,setStage:te,setRoutines:Y,setCurrentRoutineIndex:P}=sD(t,i,a==null?void 0:a.uid,o),A=!!o&&!!o.id;console.log("[RoutineGroupCreationModal] currentRoutine from hook:",JSON.stringify(w,null,2)),B.useEffect(()=>{if(!n){N(),h(null);return}A?(console.log("[RoutineGroupCreationModal] Abriendo para editar rutina individual:",o),_(F=>({...F,id:i})),Y([o]),P(0),te(2)):i?(console.log("[RoutineGroupCreationModal] Abriendo para editar grupo (borrador):",i),z()):(console.log("[RoutineGroupCreationModal] Abriendo para crear nuevo grupo."),N())},[n,i,o,z,N,te,Y,P,_]),B.useEffect(()=>{const F=()=>{a&&(m.name||E.length>0)};return window.addEventListener("beforeunload",F),()=>{window.removeEventListener("beforeunload",F)}},[m,E,M,a]);const I=()=>{a&&M(!0),e()},D=async()=>{if(!a){alert("No hay usuario autenticado para guardar la rutina.");return}if(!m.name||!m.objective||!m.dueDate||!m.stage){alert("Por favor, completa todos los detalles del grupo de rutinas.");return}if(E.length===0){alert("Debes agregar al menos una rutina al grupo.");return}if(w&&(!w.exercises||w.exercises.length===0)){alert("La rutina actual no tiene ejercicios.");return}if(E.some(k=>(k.exercises||[]).some(_e=>_e.sets<=0?!0:_e.type==="timed"?_e.time<=0:_e.reps<=0))){alert("Por favor, asigna al menos 1 serie y 1 repetición/segundo a todos los ejercicios de cada rutina.");return}if(w&&(!w.warmUp||!w.warmUp.trim())){alert("Por favor, agrega una descripción para el calentamiento de la rutina actual.");return}try{const k=da(Qt,`artifacts/profangelsanroman-2d392/users/${t}/routineGroups`);if(!A&&!i){const Oe=fa(k,Ki("stage","==",m.stage),Ki("name","==",m.name),Ki("status","==","active")),de=await tg(Oe),ge=new Date;if(de.docs.find(ae=>{const ue=ae.data(),U=ue.dueDate?new Date(ue.dueDate):null;return ae.id!==m.id&&(!U||U>=ge)})){alert("Este alumno ya tiene un grupo de rutinas activo con la misma etapa y nombre. Por favor, elige otro nombre o etapa, o espera a que el grupo actual venza.");return}}const _e=nr(Qt,`artifacts/profangelsanroman-2d392/users/${t}/routineGroups`,m.id);if(A){const Oe=await qs(_e);if(!Oe.exists()){alert("Error: El grupo de rutinas padre no existe.");return}const de=Oe.data(),ge=(de.routines||[]).map(ue=>ue.id===w.id?w:ue),X={...de,updatedAt:new Date,routines:ge},ae=cleanObjectForFirestore(X);await Sd(_e,ae,{merge:!0}),alert("¡Rutina individual guardada exitosamente!")}else{const Oe={...m,status:"active",createdAt:m.createdAt||new Date,updatedAt:new Date,assignedBy:a.uid,routines:E.map(ge=>({id:ge.id,name:ge.name,restTime:ge.restTime||0,rir:ge.rir||0,warmUp:ge.warmUp||"",exercises:(ge.exercises||[]).map(X=>({id:X.id,name:X.name,type:X.type||"reps_sets",sets:X.sets||0,reps:X.reps||0,time:X.time||0,kilos:X.kilos===void 0?0:X.kilos,completed:X.completed===void 0?!1:X.completed,order:X.order===void 0?0:X.order}))}))},de=cleanObjectForFirestore(Oe);await Sd(_e,de,{merge:!0}),alert("¡Grupo de rutinas guardado exitosamente!")}N(),e()}catch(k){console.error("Error al guardar el grupo/rutina:",k),alert("Error al guardar el grupo/rutina: "+k.message)}},O=async()=>{R()};return n?S.jsx(aD,{children:S.jsxs(lD,{children:[S.jsxs(uD,{children:[S.jsx(cD,{children:A?"Editar Rutina":f===1&&"Nuevo grupo de rutinas"||f===2&&"Detalles de rutina"||f===3&&"Añadir Ejercicios"||f===4&&"Series y Reps"}),S.jsx(dD,{onClick:I,children:"X"})]}),G&&S.jsx("div",{style:{position:"absolute",inset:0,backgroundColor:"rgba(255, 255, 255, 0.9)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"12px",zIndex:10},children:S.jsx("p",{style:{color:"#3498db",fontSize:"1.2rem",fontWeight:"bold"},children:"Guardando borrador..."})}),J&&S.jsx(wr,{$isVisible:!0,children:J}),A?S.jsxs(S.Fragment,{children:[f===2&&S.jsx(om,{currentRoutine:w,setCurrentRoutine:C,goToNextStage:R,goToPreviousStage:V,onClose:I}),f===3&&S.jsx(am,{currentRoutine:w,setCurrentRoutine:C,goToNextStage:R,goToPreviousStage:V,onClose:I,editingRoutineData:o}),f===4&&S.jsx(z0,{currentRoutine:w,setCurrentRoutine:C,goToPreviousStage:V,onSaveRoutineGroup:D,onAddAnotherRoutine:O,onClose:I,isEditingIndividualRoutine:A})]}):S.jsxs(S.Fragment,{children:[f===1&&S.jsx(gT,{groupData:m,setGroupData:_,goToNextStage:R,studentId:t,draftGroupId:i,isEditingIndividualRoutine:A,setGroupNameConflictError:h,groupNameConflictError:c}),f===2&&S.jsx(om,{currentRoutine:w,setCurrentRoutine:C,goToNextStage:R,goToPreviousStage:V,onClose:I}),f===3&&S.jsx(am,{currentRoutine:w,setCurrentRoutine:C,goToNextStage:R,goToPreviousStage:V,onClose:I,editingRoutineData:o}),f===4&&S.jsx(z0,{currentRoutine:w,setCurrentRoutine:C,goToPreviousStage:V,onSaveRoutineGroup:D,onAddAnotherRoutine:O,onClose:I,isEditingIndividualRoutine:A})]})]})}):null};yT.propTypes={isOpen:le.bool.isRequired,onClose:le.func.isRequired,studentId:le.string.isRequired,draftGroupId:le.string,editingRoutineData:le.object};const gD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwUlEQVR4nO2YO04DMRCG3UABoYKCBiIugGiAihZR0PE6AJyAK3AHKrgA1BQUaIus//FGLlJEogACFFRAFUjES0Ej2chabVJFyizyJ7nx7krfjMfWrJWKRCKRSGTEJElS0VpXm83muCoTaZouAbgC8ENEPQDvRHRqrZ1R0gGw4YR7BeMmy7JpJVmeiLp95P04UWWQB3CvtV5uNBqTAI6D+Tdxe6JP5lf98zRNp8Jn9Xp9TpWgbK6zLJt176wE89+8Kkqo/BMRfYVB8EpwOQUldKmE1nyLz3xjzHYuiL/hTqfFUbsrY8x6LvOPxpgF/5yItgB85uQ/tNabYjMfvqO1rrpy8gF0+TslPfNMrVabB3AnLvNRflT8t8w/RHkpmed+ptTyRHQb5YdJzLykft4Ys1ZwzrfE9TbW2gkiahe0vfe+QRMrz7je3Uu/5P9peSXEyjMAzgO5Q7eRO31+RmSc82H58A2BE3zlWzSeLwpCnDwDYDcQPOI5DoJXAsCz2LIpKh8AFxyE2wc98fJJklQGXP/50RYpzwDYGXBrcManE+8RJRUA+4F4h8uJ94Ro6RBr7RiAAyLaE3NLFolEIhE1RH4Bf5Rqn5ZHb04AAAAASUVORK5CYII=",yD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA60lEQVR4nO2VQQ7BQBSGJ+EauAgnQO05AWsSLsAJOAGbbtk3Men7X7rjBNygy0qTku4tzHuDhH7J7Nr35ZtM8oypeBFmHgAIzKchohuA7C3DAQTlcAB3x5MRUV9SYwWyp6ec9S3x0bn8vyCi1MM1p85iAGcP4pOk+ODhce0l4o2H4rVEvPBQPJeIRx6Kh85iZu54KG47i621Ta04SZKGszgMwxqAXCHOoyiqGwkArgrxxUghxbJQLQcAO0XxVlO8UoiXmuKJQjwWi+M47knFzNzViFtEVAgeVlH+azQQ0cxlN5ffMvNUJa34CR4FFHB9AYVL/wAAAABJRU5ErkJggg==",B0=n=>{if(n==null||isNaN(n))return"N/A";if(n<60)return`${n} Segundos`;{const e=Math.floor(n/60),t=n%60,i=t<10?`0${t}`:t;return`${e}:${i} Minutos`}};function vD(){var Oe;const{studentId:n}=ax(),e=ns(),{user:t,userName:i}=Pr(),[o,a]=B.useState(null),[c,h]=B.useState(!0),[f,m]=B.useState(null),[_,E]=B.useState([]),[w,C]=B.useState(!0),[R,V]=B.useState(null),[N,M]=B.useState(!1),[z,G]=B.useState(null),[J,te]=B.useState(null);B.useEffect(()=>{(async()=>{if(!n){m("ID del alumno no proporcionado."),h(!1);return}h(!0),m(null),a(null);try{const ge=nr(Qt,"users",n),X=await qs(ge);X.exists()&&X.data().role==="student"?a({id:X.id,...X.data()}):m("No se encontró al alumno o el ID no corresponde a un alumno.")}catch(ge){console.error("Error al cargar la información del alumno:",ge),m("Error al cargar la información del alumno.")}finally{h(!1)}})()},[n,e]),B.useEffect(()=>{if(!n||!(t!=null&&t.uid)){V("ID del alumno o del profe no proporcionado para cargar grupos de rutinas."),C(!1);return}C(!0),V(null);const de=da(Qt,`artifacts/profangelsanroman-2d392/users/${n}/routineGroups`),ge=fa(de),X=ng(ge,ae=>{try{const U=ae.docs.map(K=>({id:K.id,...K.data()})).filter(K=>K.status==="active"||K.status==="draft"&&K.assignedBy===t.uid);E(U),console.log("Grupos de rutinas del alumno cargados/actualizados:",U)}catch(ue){console.error("Error al obtener los grupos de rutinas del alumno en tiempo real:",ue),V("Error al cargar los grupos de rutinas del alumno.")}finally{C(!1)}},ae=>{console.error("Error en la suscripción a los grupos de rutinas:",ae),V("No se pudieron cargar los grupos de rutinas. Posiblemente problemas de permisos."),C(!1)});return()=>X()},[n,t==null?void 0:t.uid]);const Y=B.useMemo(()=>_.reduce((de,ge)=>{const X=ge.stage||"Sin Etapa";return de[X]||(de[X]=[]),de[X].push(ge),de},{}),[_]),P=()=>{G(null),te(null),M(!0)},A=()=>{M(!1),G(null),te(null)},I=de=>{G(de),te(null),M(!0)},D=(de,ge)=>{console.log(`Editando rutina individual: ${ge.name} (ID: ${ge.id}) del grupo: ${de}`),G(de),te(ge),M(!0)},O=async(de,ge)=>{if(!t){console.error("No hay usuario autenticado para eliminar la rutina.");return}if(window.confirm("¿Estás seguro de que quieres eliminar esta rutina individual?"))try{const X=nr(Qt,`artifacts/profangelsanroman-2d392/users/${n}/routineGroups`,de),ae=await qs(X);if(ae.exists()){const K=(ae.data().routines||[]).filter(ye=>ye.id!==ge);await XE(X,{routines:K}),console.log(`Rutina con ID ${ge} eliminada del grupo ${de} con éxito.`)}else console.warn(`Grupo de rutinas con ID ${de} no encontrado para eliminar la rutina.`)}catch(X){console.error("Error al eliminar la rutina individual:",X)}},F=async de=>{if(!t){console.error("No hay usuario autenticado.");return}if(window.confirm("¿Estás seguro de que quieres eliminar este grupo de rutinas (incluyendo borradores)?"))try{const ge=nr(Qt,`artifacts/profangelsanroman-2d392/users/${n}/routineGroups`,de);await KP(ge),console.log(`Grupo de rutinas con ID ${de} eliminado con éxito.`)}catch(ge){console.error("Error al eliminar el grupo de rutinas:",ge)}},k="studentRoutinesPage",_e=(o==null?void 0:o.name)||((Oe=o==null?void 0:o.email)==null?void 0:Oe.split("@")[0])||"Este Alumno";return c||w?S.jsxs(Dl,{children:[S.jsx(Er,{loading:!0,type:k,studentName:_e,isCoachDashboard:!1,userName:i}),S.jsx(Bi,{children:"Cargando información del alumno y sus grupos de rutinas..."})]}):f?S.jsxs(Dl,{children:[S.jsx(Er,{loading:!1,type:k,studentName:_e,isCoachDashboard:!1,userName:i}),S.jsxs(Bi,{children:[f," ",S.jsx("br",{}),S.jsx("button",{onClick:()=>e("/coach"),children:"Volver al panel principal"})]})]}):R&&_.length===0?S.jsxs(Dl,{children:[S.jsx(Er,{loading:!1,type:k,studentName:_e,isCoachDashboard:!1,userName:i}),S.jsxs(ti,{style:{width:"100%",marginTop:"20px",padding:"0 0 20px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"},children:[S.jsx(Bi,{style:{marginTop:"0",fontSize:"0.9rem",color:"#e74c3c"},children:R}),S.jsx("button",{onClick:P,style:{backgroundColor:"#2ecc71",color:"white",border:"none",borderRadius:"8px",padding:"10px 20px",fontSize:"1rem",fontWeight:"bold",cursor:"pointer",marginTop:"20px",width:"fit-content",alignSelf:"center",boxShadow:"0 4px 8px rgba(46, 204, 113, 0.2)",transition:"background-color 0.2s ease, transform 0.2s ease"},children:"Crear Nuevo Grupo de Rutinas"})]})]}):S.jsxs(Dl,{children:[S.jsx(Er,{loading:!1,type:k,studentName:_e,isCoachDashboard:!1,userName:i}),S.jsxs(ti,{style:{width:"100%",marginTop:"20px",padding:"0 0 20px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"},children:[S.jsx("h2",{style:{textAlign:"center",color:"#2c3e50",margin:"0"},children:S.jsxs("p",{className:"text-gray-600 text-sm mt-2",children:["Objetivo: ",(o==null?void 0:o.objective)||"No definido"]})}),Object.keys(Y).length===0?S.jsx(Bi,{style:{marginTop:"0",fontSize:"0.9rem",color:"#555"},children:"Este alumno aún no tiene grupos de rutinas asignados."}):S.jsx("div",{style:{width:"100%"},children:Object.entries(Y).map(([de,ge])=>S.jsx(Zl,{style:{boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"},title:`Etapa: ${de.charAt(0).toUpperCase()+de.slice(1)}`,defaultOpen:!0,children:S.jsx("div",{className:"space-y-4 p-2",children:ge.map(X=>S.jsxs("div",{className:"border border-gray-200 rounded-md p-4 shadow-sm bg-gray-50",children:[S.jsxs("h4",{style:{display:"flex",alignItems:"center",gap:"10px",margin:"0",justifyContent:"space-between"},className:"font-bold text-lg mb-2",children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",margin:"0"},children:[X.name,S.jsx("span",{style:{color:"gray"},children:X.status==="draft"&&S.jsx("p",{className:"text-orange-500 text-sm font-semibold",children:"Borrador"})})]}),S.jsxs("div",{style:{display:"flex",gap:"10px"},children:[S.jsx("img",{src:gD,alt:"Editar Grupo",style:{width:"24px",height:"24px",cursor:"pointer"},onClick:()=>I(X.id)}),S.jsx("img",{src:yD,alt:"Eliminar Grupo",style:{width:"24px",height:"24px",cursor:"pointer"},onClick:()=>F(X.id)})]})]}),S.jsxs("p",{style:{margin:"0"},className:"text-gray-700 text-sm mb-1",children:["Objetivo del grupo: ",X.objective]}),S.jsxs("p",{className:"text-gray-700 text-sm mb-2",children:["Vencimiento: ",X.dueDate]}),S.jsx("h4",{className:"font-semibold text-md mt-4 mb-2",children:"Rutinas en este Grupo:"}),X.routines&&X.routines.length>0?S.jsx("div",{className:"space-y-2",children:X.routines.map((ae,ue)=>{const U=ae.id||`routine-${X.id}-${ue}`;return S.jsx(Zl,{title:ae.name,defaultOpen:!1,children:S.jsxs("div",{style:{padding:"5px 0"},children:[S.jsxs("p",{style:{fontSize:"0.9rem",color:"#777",marginBottom:"8px"},children:["Descanso: ",B0(ae.restTime)," | RIR: ",ae.rir||0]}),S.jsxs("p",{style:{fontSize:"0.9rem",color:"#777",marginBottom:"15px"},children:["Calentamiento: ",ae.warmUp||"No especificado"]}),S.jsx("h5",{style:{marginBottom:"10px",color:"#2c3e50"},children:"Ejercicios:"}),ae.exercises&&ae.exercises.length>0?S.jsx("ul",{style:{listStyle:"none",padding:"0",margin:"0"},children:ae.exercises.map((K,ye)=>{const Re=K.id||`ex-${ae.id}-${ye}`;return S.jsxs("li",{style:{fontSize:"0.9rem",color:"#555",marginBottom:"4px"},children:[ye+1,". ",K.name,K.type==="timed"?` (${K.sets||0} Series, ${B0(K.time)} de trabajo)`:` (${K.sets||0} Series, ${K.reps||0} Reps, ${K.kilos||0} Kg)`]},Re)})}):S.jsx("p",{className:"text-gray-600 text-sm",children:"No hay ejercicios en esta rutina."}),S.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"15px"},children:[S.jsx(Vd,{type:"button",onClick:()=>D(X.id,ae),style:{backgroundColor:"#3498db",padding:"8px 12px",fontSize:"0.85rem"},children:"Editar Rutina"}),S.jsx(Vd,{type:"button",onClick:()=>O(X.id,ae.id),style:{backgroundColor:"#e74c3c",padding:"8px 12px",fontSize:"0.85rem"},children:"Eliminar Rutina"})]})]})},U)})}):S.jsx("p",{className:"text-gray-600 text-sm",children:"No hay rutinas en este grupo aún."})]},X.id))})},de))}),S.jsx("button",{onClick:P,style:{backgroundColor:"#2ecc71",color:"white",border:"none",borderRadius:"8px",padding:"10px 20px",fontSize:"1rem",fontWeight:"bold",cursor:"pointer",marginTop:"20px",width:"fit-content",alignSelf:"center",boxShadow:"0 4px 8px rgba(46, 204, 113, 0.2)",transition:"background-color 0.2s ease, transform 0.2s ease"},children:"Crear nuevo grupo de rutinas"})]}),S.jsx(yT,{isOpen:N,onClose:A,studentId:n,draftGroupId:z,editingRoutineData:J})]})}const _D=ie.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa; /* Fondo claro general */
  padding: 15px; /* Padding más pequeño para móviles */
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif; /* Tipografía a Roboto */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 20px; /* Aumenta el padding en pantallas más grandes */
  }
`,wD=ie.div`
  background-color: #ffffff;
  padding: 25px 20px; /* Padding ajustado para móviles */
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); /* Sombra más suave en móviles */
  width: 100%; /* Ocupa todo el ancho disponible en móviles */
  max-width: 380px; /* Ancho máximo para el formulario en móviles */
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacio entre elementos reducido para móviles */
  text-align: center;

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 35px 30px; /* Vuelve al padding original en tablets+ */
    max-width: 450px; /* Aumenta el ancho máximo */
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1); /* Sombra más pronunciada */
    gap: 20px; /* Vuelve al gap original */
  }
`,ED=ie.img`
  margin: 0 auto; /* Centra el logo horizontalmente */
  width: 150px; /* Ancho deseado de 240px */
  max-width: 100%; /* Asegura que el logo se achique en pantallas pequeñas si es necesario */
  height: auto;
  display: block; /* Asegura que el margin auto funcione */
`,TD=ie.h1`
  font-size: 2rem; /* Tamaño de título para móviles */
  margin: 0; /* ¡CAMBIO CLAVE AQUÍ! Margin 0 para el h1 */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 2.5rem; /* Vuelve al tamaño original */
    margin: 0; /* Aseguramos margin 0 también en desktop */
  }
`,SD=ie.p`
  font-size: 1rem; /* Tamaño de subtítulo para móviles */
  color: #7f8c8d;
  margin: 10px; /* ¡CAMBIO CLAVE AQUÍ! Margin 10px para el p */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 1.1rem; /* Vuelve al tamaño original */
    margin: 10px; /* Aseguramos margin 10px también en desktop */
  }
`,xD=ie.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacio entre campos ajustado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    gap: 18px; /* Vuelve al gap original */
  }
`,zc=ie.label`
  font-size: 0.9rem; /* Tamaño de label para móviles */
  color: #333; /* Color oscuro */
  font-weight: 600;
  text-align: left;
  margin-bottom: 2px; /* Margen ajustado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 0.95rem; /* Vuelve al tamaño original */
    margin-bottom: 4px;
  }
`,Bc=ie.input`
  width: 100%;
  padding: 10px 12px; /* Padding ajustado */
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 0.95rem; /* Tamaño de fuente para móviles */
  color: #333; /* Color oscuro para el texto del input */
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #e74c3c; /* Borde de enfoque con color de acento */
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
  }

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 12px 15px; /* Vuelve al padding original */
    font-size: 1rem; /* Vuelve al tamaño original */
  }
`,ID=ie.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 18px; /* Padding ajustado */
  font-size: 1rem; /* Tamaño de fuente para móviles */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  box-shadow: 0 3px 10px rgba(46, 204, 113, 0.3); /* Sombra más suave */
  margin-top: 10px; /* Margen ajustado */

  &:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(46, 204, 113, 0.3);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 14px 20px; /* Vuelve al padding original */
    font-size: 1.1rem; /* Vuelve al tamaño original */
    box-shadow: 0 4px 12px rgba(46, 204, 113, 0.3); /* Vuelve a la sombra original */
    margin-top: 15px; /* Vuelve al margen original */
  }
`,AD=ie.p`
  color: #e74c3c; /* ¡Rojo para mensajes de error, ya estaba así y es consistente! */
  font-size: 0.85rem; /* Tamaño de error para móviles */
  margin-top: -8px; /* Margen ajustado */
  text-align: left;

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 0.9rem; /* Vuelve al tamaño original */
    margin-top: -10px;
  }
`,CD=ie.p` /* ¡Exportado! */
  color: #28a745; /* Verde para mensajes de éxito */
  font-size: 0.85rem;
  margin-top: -8px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin-top: -10px;
  }
`,RD=ie.p`
  font-size: 0.9rem; /* Tamaño de link para móviles */
  color: #7f8c8d;
  margin-top: 10px; /* Margen ajustado */
  a {
    color: #3498db; /* Azul para enlaces */
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 0.95rem; /* Vuelve al tamaño original */
    margin-top: 15px;
  }
`;function PD(){const n=ns(),[e,t]=dt.useState(""),[i,o]=dt.useState(""),[a,c]=dt.useState(""),[h,f]=dt.useState(""),[m,_]=dt.useState(""),[E,w]=dt.useState(""),[C,R]=dt.useState(!1),V=async N=>{if(N.preventDefault(),_(""),w(""),a!==h){_("Las contraseñas no coinciden.");return}if(a.length<6){_("La contraseña debe tener al menos 6 caracteres.");return}R(!0);try{const z=(await Qk(kd,i,a)).user;await Sd(nr(Qt,"users",z.uid),{uid:z.uid,name:e,email:i,role:"student",createdAt:new Date}),w("¡Registro exitoso! Redirigiendo a la página principal..."),setTimeout(()=>{n("/home")},1500)}catch(M){let z="Error al registrarse. Por favor, intentá de nuevo.";switch(M.code){case"auth/email-already-in-use":z="Este email ya está registrado. ¿Ya tenés una cuenta?";break;case"auth/weak-password":z="La contraseña es demasiado débil. Elegí una más segura.";break;case"auth/invalid-email":z="El formato del email no es válido.";break;default:console.error("Firebase registration error:",M);break}_(z)}finally{R(!1)}};return S.jsx(_D,{children:S.jsxs(wD,{children:[S.jsx(ED,{src:yg,alt:"Logo Prof Angel San Roman",onError:N=>{N.target.onerror=null,N.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error"}}),S.jsxs("div",{children:[S.jsx(TD,{children:"Registrate"}),S.jsx(SD,{children:"Creá tu cuenta de alumno para empezar."})]}),S.jsxs(xD,{onSubmit:V,children:[S.jsx(zc,{htmlFor:"name",children:"Nombre Completo"}),S.jsx(Bc,{id:"name",type:"text",placeholder:"Ej. Sofía Giménez",value:e,onChange:N=>t(N.target.value),required:!0}),S.jsx(zc,{htmlFor:"email",children:"Email"}),S.jsx(Bc,{id:"email",type:"email",placeholder:"ejemplo@mail.com",value:i,onChange:N=>o(N.target.value),required:!0}),S.jsx(zc,{htmlFor:"password",children:"Contraseña"}),S.jsx(Bc,{id:"password",type:"password",placeholder:"••••••••",value:a,onChange:N=>c(N.target.value),required:!0}),S.jsx(zc,{htmlFor:"confirmPassword",children:"Confirmar Contraseña"}),S.jsx(Bc,{id:"confirmPassword",type:"password",placeholder:"••••••••",value:h,onChange:N=>f(N.target.value),required:!0}),m&&S.jsx(AD,{children:m}),E&&S.jsx(CD,{children:E}),S.jsx(ID,{type:"submit",disabled:C,children:C?"Registrando...":"Registrarme"})]}),S.jsxs(RD,{children:["¿Ya tenés una cuenta? ",S.jsx(Fd,{to:"/login",children:"Iniciá sesión aquí"})]})]})})}function kD(){const n=ns(),[e,t]=dt.useState(""),[i,o]=dt.useState(""),[a,c]=dt.useState(""),[h,f]=dt.useState(!1),m=async _=>{if(_.preventDefault(),c(""),!e||!i){c("Por favor, ingresa tu email y contraseña.");return}f(!0);try{const w=(await Yk(kd,e,i)).user,C=nr(Qt,"users",w.uid),R=await qs(C);let V="student";R.exists()&&(V=R.data().role||"student"),n(V==="coach"?"/coach":"/home")}catch(E){let w="Error al iniciar sesión. Verificá tus credenciales.";switch(E.code){case"auth/invalid-email":w="El formato del email no es válido.";break;case"auth/user-disabled":w="Tu cuenta ha sido deshabilitada.";break;case"auth/user-not-found":case"auth/wrong-password":w="Email o contraseña incorrectos.";break;case"auth/too-many-requests":w="Demasiados intentos fallidos. Intentá más tarde.";break;default:console.error("Firebase login error:",E);break}c(w)}finally{f(!1)}};return S.jsx(W2,{children:S.jsxs(G2,{children:[S.jsx(K2,{src:yg,alt:"Logo Prof Angel San Roman",onError:_=>{_.target.onerror=null,_.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error"}}),S.jsxs("div",{children:[S.jsx(Q2,{children:"Iniciar Sesión"}),S.jsx(Y2,{children:"Ingresá con tu email y contraseña."})]}),S.jsxs(X2,{onSubmit:m,children:[S.jsx(L0,{htmlFor:"email",children:"Email"}),S.jsx(M0,{id:"email",type:"email",placeholder:"ejemplo@mail.com",value:e,onChange:_=>t(_.target.value),required:!0}),S.jsx(L0,{htmlFor:"password",children:"Contraseña"}),S.jsx(M0,{id:"password",type:"password",placeholder:"••••••••",value:i,onChange:_=>o(_.target.value),required:!0}),a&&S.jsx(dT,{children:a}),S.jsx(J2,{type:"submit",disabled:h,children:h?"Iniciando sesión...":"Iniciar Sesión"})]}),S.jsxs(Z2,{children:["¿No tenés cuenta? ",S.jsx(Fd,{to:"/register",children:"Registrate aquí"})]})]})})}const bD=ie.button`
  background-color: #e74c3c; /* Rojo de acento */
  color: white;
  border: none;
  border-radius: 5px; /* Ligeramente redondeado */
  padding: 8px 12px; /* Más compacto */
  font-size: 0.9rem;
  cursor: pointer;
  width: 100%; /* Ocupa todo el ancho del dropdown */
  text-align: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #c0392b; /* Rojo más oscuro al hover */
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;function ND(){const{logout:n,loading:e}=Pr();return S.jsx(bD,{onClick:n,disabled:e,children:"Cerrar Sesión"})}const vp=ie.div`
  color: #1a1a1a; /* Color de texto general */
  font-family: 'Roboto', sans-serif; /* Consistencia en la tipografía */
  min-height: 100vh;
  padding: 0; /* No padding aquí, el contenido lo maneja */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido horizontalmente */
  box-sizing: border-box;

  /* Media Queries para responsividad */
  @media (min-width: 768px) {
    padding: 0;
  }
`;ie.header`
  width: 100%;
  max-width: 900px; /* Ancho máximo para el header */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-top: 0; /* Se pega al navbar */
  box-sizing: border-box;
`;const _p=ie.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #1a1a1a; /* Color de texto general */
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,DD=ie.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left; /* Alinea el texto a la izquierda dentro de la Card */

  @media (min-width: 768px) {
    padding: 15px;
  }
`,$c=ie.p`
  font-size: 1rem;
  margin: 0;
  color: #333;

  strong {
    color: #2c3e50;
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,OD=ie.div`
  margin-top: 25px; /* Espacio superior para el botón de cerrar sesión */
  width: 100%;
  display: flex;
  justify-content: center; /* Centra el botón */
`;function VD(){const{user:n,userName:e,loading:t,role:i}=Pr(),{states:o}=aT(n,t),{loading:a,searchedStudents:c}=o,h=i==="coach"?c.length:0,f=t||i==="coach"&&a;if(f)return S.jsxs(vp,{children:[S.jsx(Er,{loading:!0,type:i||"student",isCoachDashboard:!1}),S.jsx(ti,{style:{maxWidth:"600px",marginTop:"20px",padding:"20px"},children:S.jsx(_p,{style:{color:"#1a1a1a"},children:"Cargando Perfil..."})})]});if(!n)return S.jsxs(vp,{children:[S.jsx(Er,{loading:!1,type:i||"student",isCoachDashboard:!1}),S.jsxs(ti,{style:{maxWidth:"600px",marginTop:"20px",padding:"20px"},children:[S.jsx(_p,{style:{color:"#1a1a1a"},children:"Acceso Denegado"}),S.jsx("p",{style:{textAlign:"center",color:"#555",marginTop:"10px"},children:"Necesitas iniciar sesión para ver esta página."})]})]});const m=e||(n&&n.email?n.email.split("@")[0]:"Usuario"),_=n?n.email:"No disponible",E=n.metadata.creationTime?new Date(n.metadata.creationTime).toLocaleDateString("es-AR",{year:"2-digit",month:"2-digit",day:"2-digit"}):"No disponible";return S.jsxs(vp,{children:[S.jsx(Er,{loading:f,type:i,isCoachDashboard:!1}),S.jsxs(ti,{style:{maxWidth:"600px",marginTop:"20px",padding:"20px"},children:[S.jsx(_p,{style:{marginBottom:"20px"},children:"Mi Perfil"}),S.jsxs(DD,{children:[S.jsxs($c,{children:[S.jsx("strong",{children:"Nombre:"})," ",m]}),S.jsxs($c,{children:[S.jsx("strong",{children:"Email:"})," ",_]}),S.jsxs($c,{children:[S.jsx("strong",{children:"Activo desde:"})," ",E]}),i==="coach"&&S.jsxs($c,{children:[S.jsx("strong",{children:"Total de Alumnos:"})," ",h]})]}),S.jsx(OD,{children:S.jsx(ND,{})})]})]})}const vT=({children:n})=>{const[e,t]=B.useState(null),[i,o]=B.useState(null),[a,c]=B.useState(!0),[h,f]=B.useState(null),[m,_]=B.useState(null);B.useEffect(()=>{const C=Zk(kd,async R=>{if(c(!0),f(null),_(null),R)try{const V=nr(Qt,"users",R.uid),N=await qs(V);if(N.exists()){const M=N.data();t(R),o(M.role||"student"),M.name?_(M.name):_(R.email?R.email.split("@")[0]:"Usuario")}else console.warn("Documento de usuario no encontrado en Firestore para UID:",R.uid),t(R),o("unknown"),_(R.email?R.email.split("@")[0]:"Usuario")}catch(V){console.error("Error al obtener el rol o nombre del usuario desde Firestore:",V),f("Error al cargar la información del usuario."),t(R),o(null),_(null)}else t(null),o(null),_(null);c(!1)});return()=>C()},[]);const w={user:e,role:i,loading:a,error:h,logout:async()=>{f(null);try{await eb(kd)}catch(C){console.error("Error al cerrar sesión:",C),f("Error al cerrar sesión.")}},userName:m};return S.jsxs(O1.Provider,{value:w,children:[!a&&n,a&&S.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.5rem"},children:"Cargando sesión..."})]})};vT.propTypes={children:le.node.isRequired};function Ol({children:n,allowedRoles:e=[]}){const{user:t,role:i,loading:o,error:a}=Pr(),c=ns();return B.useEffect(()=>{if(!o){if(a||!t){console.log("No user or auth error, redirecting to login."),c("/login");return}e&&!e.includes(i)&&(console.warn(`User with role '${i}' is not allowed to access this route. Redirecting.`),c(i==="coach"?"/coach":"/"))}},[t,i,o,a,e,c]),o||a||!t||e&&!e.includes(i)?null:n}Ol.propTypes={children:le.node.isRequired,allowedRoles:le.arrayOf(le.string)};function LD(){const{user:n,loading:e,role:t}=Pr(),i=ns();return dt.useEffect(()=>{e||i(n?t==="coach"?"/coach":"/home":"/login")},[n,e,t,i]),e?S.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.5rem"},children:"Cargando aplicación..."}):null}function MD(){return S.jsx(vT,{children:S.jsx(Wx,{children:S.jsxs(Tx,{children:[S.jsx(Kr,{path:"/",element:S.jsx(LD,{})}),S.jsx(Kr,{path:"/register",element:S.jsx(PD,{})}),S.jsx(Kr,{path:"/login",element:S.jsx(kD,{})}),S.jsx(Kr,{path:"/home",element:S.jsx(Ol,{allowedRoles:["student","coach"],children:S.jsx(F2,{})})}),S.jsx(Kr,{path:"/coach",element:S.jsx(Ol,{allowedRoles:["coach"],children:S.jsx(eD,{})})}),S.jsx(Kr,{path:"/coach/students/:studentId/routines",element:S.jsx(Ol,{allowedRoles:["coach"],children:S.jsx(vD,{})})}),S.jsx(Kr,{path:"/profile",element:S.jsx(Ol,{allowedRoles:["student","coach"],children:S.jsx(VD,{})})}),S.jsx(Kr,{path:"*",element:S.jsx("div",{children:"404 - Página no encontrada o no tenés permisos."})})]})})})}kS.createRoot(document.getElementById("root")).render(S.jsx(dt.StrictMode,{children:S.jsx(MD,{})}));
