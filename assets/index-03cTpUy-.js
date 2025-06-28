(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Rd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vf={exports:{}},pl={},Lf={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function X1(){if(lv)return je;lv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),T=Symbol.iterator;function E(F){return F===null||typeof F!="object"?null:(F=T&&F[T]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,M={};function O(F,Q,ye){this.props=F,this.context=Q,this.refs=M,this.updater=ye||b}O.prototype.isReactComponent={},O.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},O.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function $(){}$.prototype=O.prototype;function B(F,Q,ye){this.props=F,this.context=Q,this.refs=M,this.updater=ye||b}var K=B.prototype=new $;K.constructor=B,P(K,O.prototype),K.isPureReactComponent=!0;var J=Array.isArray,re=Object.prototype.hasOwnProperty,ee={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(F,Q,ye){var Ae,Pe={},De=null,Ve=null;if(Q!=null)for(Ae in Q.ref!==void 0&&(Ve=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)re.call(Q,Ae)&&!C.hasOwnProperty(Ae)&&(Pe[Ae]=Q[Ae]);var Ne=arguments.length-2;if(Ne===1)Pe.children=ye;else if(1<Ne){for(var Oe=Array(Ne),nt=0;nt<Ne;nt++)Oe[nt]=arguments[nt+2];Pe.children=Oe}if(F&&F.defaultProps)for(Ae in Ne=F.defaultProps,Ne)Pe[Ae]===void 0&&(Pe[Ae]=Ne[Ae]);return{$$typeof:n,type:F,key:De,ref:Ve,props:Pe,_owner:ee.current}}function x(F,Q){return{$$typeof:n,type:F.type,key:Q,ref:F.ref,props:F.props,_owner:F._owner}}function N(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function V(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(ye){return Q[ye]})}var j=/\/+/g;function k(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):Q.toString(36)}function tt(F,Q,ye,Ae,Pe){var De=typeof F;(De==="undefined"||De==="boolean")&&(F=null);var Ve=!1;if(F===null)Ve=!0;else switch(De){case"string":case"number":Ve=!0;break;case"object":switch(F.$$typeof){case n:case e:Ve=!0}}if(Ve)return Ve=F,Pe=Pe(Ve),F=Ae===""?"."+k(Ve,0):Ae,J(Pe)?(ye="",F!=null&&(ye=F.replace(j,"$&/")+"/"),tt(Pe,Q,ye,"",function(nt){return nt})):Pe!=null&&(N(Pe)&&(Pe=x(Pe,ye+(!Pe.key||Ve&&Ve.key===Pe.key?"":(""+Pe.key).replace(j,"$&/")+"/")+F)),Q.push(Pe)),1;if(Ve=0,Ae=Ae===""?".":Ae+":",J(F))for(var Ne=0;Ne<F.length;Ne++){De=F[Ne];var Oe=Ae+k(De,Ne);Ve+=tt(De,Q,ye,Oe,Pe)}else if(Oe=E(F),typeof Oe=="function")for(F=Oe.call(F),Ne=0;!(De=F.next()).done;)De=De.value,Oe=Ae+k(De,Ne++),Ve+=tt(De,Q,ye,Oe,Pe);else if(De==="object")throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ve}function ut(F,Q,ye){if(F==null)return F;var Ae=[],Pe=0;return tt(F,Ae,"","",function(De){return Q.call(ye,De,Pe++)}),Ae}function gt(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(ye){(F._status===0||F._status===-1)&&(F._status=1,F._result=ye)},function(ye){(F._status===0||F._status===-1)&&(F._status=2,F._result=ye)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var Ue={current:null},se={transition:null},pe={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:se,ReactCurrentOwner:ee};function ae(){throw Error("act(...) is not supported in production builds of React.")}return je.Children={map:ut,forEach:function(F,Q,ye){ut(F,function(){Q.apply(this,arguments)},ye)},count:function(F){var Q=0;return ut(F,function(){Q++}),Q},toArray:function(F){return ut(F,function(Q){return Q})||[]},only:function(F){if(!N(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},je.Component=O,je.Fragment=t,je.Profiler=o,je.PureComponent=B,je.StrictMode=i,je.Suspense=p,je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,je.act=ae,je.cloneElement=function(F,Q,ye){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Ae=P({},F.props),Pe=F.key,De=F.ref,Ve=F._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,Ve=ee.current),Q.key!==void 0&&(Pe=""+Q.key),F.type&&F.type.defaultProps)var Ne=F.type.defaultProps;for(Oe in Q)re.call(Q,Oe)&&!C.hasOwnProperty(Oe)&&(Ae[Oe]=Q[Oe]===void 0&&Ne!==void 0?Ne[Oe]:Q[Oe])}var Oe=arguments.length-2;if(Oe===1)Ae.children=ye;else if(1<Oe){Ne=Array(Oe);for(var nt=0;nt<Oe;nt++)Ne[nt]=arguments[nt+2];Ae.children=Ne}return{$$typeof:n,type:F.type,key:Pe,ref:De,props:Ae,_owner:Ve}},je.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},je.createElement=S,je.createFactory=function(F){var Q=S.bind(null,F);return Q.type=F,Q},je.createRef=function(){return{current:null}},je.forwardRef=function(F){return{$$typeof:h,render:F}},je.isValidElement=N,je.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:gt}},je.memo=function(F,Q){return{$$typeof:y,type:F,compare:Q===void 0?null:Q}},je.startTransition=function(F){var Q=se.transition;se.transition={};try{F()}finally{se.transition=Q}},je.unstable_act=ae,je.useCallback=function(F,Q){return Ue.current.useCallback(F,Q)},je.useContext=function(F){return Ue.current.useContext(F)},je.useDebugValue=function(){},je.useDeferredValue=function(F){return Ue.current.useDeferredValue(F)},je.useEffect=function(F,Q){return Ue.current.useEffect(F,Q)},je.useId=function(){return Ue.current.useId()},je.useImperativeHandle=function(F,Q,ye){return Ue.current.useImperativeHandle(F,Q,ye)},je.useInsertionEffect=function(F,Q){return Ue.current.useInsertionEffect(F,Q)},je.useLayoutEffect=function(F,Q){return Ue.current.useLayoutEffect(F,Q)},je.useMemo=function(F,Q){return Ue.current.useMemo(F,Q)},je.useReducer=function(F,Q,ye){return Ue.current.useReducer(F,Q,ye)},je.useRef=function(F){return Ue.current.useRef(F)},je.useState=function(F){return Ue.current.useState(F)},je.useSyncExternalStore=function(F,Q,ye){return Ue.current.useSyncExternalStore(F,Q,ye)},je.useTransition=function(){return Ue.current.useTransition()},je.version="18.3.1",je}var uv;function Hp(){return uv||(uv=1,Lf.exports=X1()),Lf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function J1(){if(cv)return pl;cv=1;var n=Hp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,y){var _,T={},E=null,b=null;y!==void 0&&(E=""+y),p.key!==void 0&&(E=""+p.key),p.ref!==void 0&&(b=p.ref);for(_ in p)i.call(p,_)&&!a.hasOwnProperty(_)&&(T[_]=p[_]);if(h&&h.defaultProps)for(_ in p=h.defaultProps,p)T[_]===void 0&&(T[_]=p[_]);return{$$typeof:e,type:h,key:E,ref:b,props:T,_owner:o.current}}return pl.Fragment=t,pl.jsx=c,pl.jsxs=c,pl}var dv;function Z1(){return dv||(dv=1,Vf.exports=J1()),Vf.exports}var R=Z1(),H=Hp();const mt=Rd(H);var Tc={},Mf={exports:{}},fn={},Ff={exports:{}},jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function eI(){return hv||(hv=1,function(n){function e(se,pe){var ae=se.length;se.push(pe);e:for(;0<ae;){var F=ae-1>>>1,Q=se[F];if(0<o(Q,pe))se[F]=pe,se[ae]=Q,ae=F;else break e}}function t(se){return se.length===0?null:se[0]}function i(se){if(se.length===0)return null;var pe=se[0],ae=se.pop();if(ae!==pe){se[0]=ae;e:for(var F=0,Q=se.length,ye=Q>>>1;F<ye;){var Ae=2*(F+1)-1,Pe=se[Ae],De=Ae+1,Ve=se[De];if(0>o(Pe,ae))De<Q&&0>o(Ve,Pe)?(se[F]=Ve,se[De]=ae,F=De):(se[F]=Pe,se[Ae]=ae,F=Ae);else if(De<Q&&0>o(Ve,ae))se[F]=Ve,se[De]=ae,F=De;else break e}}return pe}function o(se,pe){var ae=se.sortIndex-pe.sortIndex;return ae!==0?ae:se.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,h=c.now();n.unstable_now=function(){return c.now()-h}}var p=[],y=[],_=1,T=null,E=3,b=!1,P=!1,M=!1,O=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(se){for(var pe=t(y);pe!==null;){if(pe.callback===null)i(y);else if(pe.startTime<=se)i(y),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(y)}}function J(se){if(M=!1,K(se),!P)if(t(p)!==null)P=!0,gt(re);else{var pe=t(y);pe!==null&&Ue(J,pe.startTime-se)}}function re(se,pe){P=!1,M&&(M=!1,$(S),S=-1),b=!0;var ae=E;try{for(K(pe),T=t(p);T!==null&&(!(T.expirationTime>pe)||se&&!V());){var F=T.callback;if(typeof F=="function"){T.callback=null,E=T.priorityLevel;var Q=F(T.expirationTime<=pe);pe=n.unstable_now(),typeof Q=="function"?T.callback=Q:T===t(p)&&i(p),K(pe)}else i(p);T=t(p)}if(T!==null)var ye=!0;else{var Ae=t(y);Ae!==null&&Ue(J,Ae.startTime-pe),ye=!1}return ye}finally{T=null,E=ae,b=!1}}var ee=!1,C=null,S=-1,x=5,N=-1;function V(){return!(n.unstable_now()-N<x)}function j(){if(C!==null){var se=n.unstable_now();N=se;var pe=!0;try{pe=C(!0,se)}finally{pe?k():(ee=!1,C=null)}}else ee=!1}var k;if(typeof B=="function")k=function(){B(j)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ut=tt.port2;tt.port1.onmessage=j,k=function(){ut.postMessage(null)}}else k=function(){O(j,0)};function gt(se){C=se,ee||(ee=!0,k())}function Ue(se,pe){S=O(function(){se(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){P||b||(P=!0,gt(re))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(se){switch(E){case 1:case 2:case 3:var pe=3;break;default:pe=E}var ae=E;E=pe;try{return se()}finally{E=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,pe){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ae=E;E=se;try{return pe()}finally{E=ae}},n.unstable_scheduleCallback=function(se,pe,ae){var F=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?F+ae:F):ae=F,se){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ae+Q,se={id:_++,callback:pe,priorityLevel:se,startTime:ae,expirationTime:Q,sortIndex:-1},ae>F?(se.sortIndex=ae,e(y,se),t(p)===null&&se===t(y)&&(M?($(S),S=-1):M=!0,Ue(J,ae-F))):(se.sortIndex=Q,e(p,se),P||b||(P=!0,gt(re))),se},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(se){var pe=E;return function(){var ae=E;E=pe;try{return se.apply(this,arguments)}finally{E=ae}}}}(jf)),jf}var fv;function tI(){return fv||(fv=1,Ff.exports=eI()),Ff.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function nI(){if(pv)return fn;pv=1;var n=Hp(),e=tI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},T={};function E(r){return p.call(T,r)?!0:p.call(_,r)?!1:y.test(r)?T[r]=!0:(_[r]=!0,!1)}function b(r,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function P(r,s,l,d){if(s===null||typeof s>"u"||b(r,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(r,s,l,d,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){O[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];O[s]=new M(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){O[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){O[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){O[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){O[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){O[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){O[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){O[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function B(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace($,B);O[s]=new M(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace($,B);O[s]=new M(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace($,B);O[s]=new M(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){O[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),O.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){O[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function K(r,s,l,d){var f=O.hasOwnProperty(s)?O[s]:null;(f!==null?f.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(P(s,l,f,d)&&(l=null),d||f===null?E(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):f.mustUseProperty?r[f.propertyName]=l===null?f.type===3?!1:"":l:(s=f.attributeName,d=f.attributeNamespace,l===null?r.removeAttribute(s):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,d?r.setAttributeNS(d,s,l):r.setAttribute(s,l))))}var J=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),ee=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),V=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),ut=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),se=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=se&&r[se]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,F;function Q(r){if(F===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+r}var ye=!1;function Ae(r,s){if(!r||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(W){var d=W}Reflect.construct(r,[],s)}else{try{s.call()}catch(W){d=W}r.call(s.prototype)}else{try{throw Error()}catch(W){d=W}r()}}catch(W){if(W&&d&&typeof W.stack=="string"){for(var f=W.stack.split(`
`),g=d.stack.split(`
`),w=f.length-1,A=g.length-1;1<=w&&0<=A&&f[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(f[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||f[w]!==g[A]){var D=`
`+f[w].replace(" at new "," at ");return r.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",r.displayName)),D}while(1<=w&&0<=A);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?Q(r):""}function Pe(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case C:return"Fragment";case ee:return"Portal";case x:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case tt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case V:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case j:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ut:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case gt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Ve(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ne(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Oe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function nt(r){var s=Oe(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){d=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function le(r){r._valueTracker||(r._valueTracker=nt(r))}function _e(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return r&&(d=Oe(r)?r.checked?"true":"false":r.value),r=d,r!==l?(s.setValue(r),!0):!1}function Fe(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ee(r,s){var l=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function Je(r,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=Ne(s.value!=null?s.value:l),r._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function li(r,s){s=s.checked,s!=null&&K(r,"checked",s,!1)}function Ea(r,s){li(r,s);var l=Ne(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Qs(r,s.type,l):s.hasOwnProperty("defaultValue")&&Qs(r,s.type,Ne(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function au(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Qs(r,s,l){(s!=="number"||Fe(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var kr=Array.isArray;function br(r,s,l,d){if(r=r.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<r.length;l++)f=s.hasOwnProperty("$"+r[l].value),r[l].selected!==f&&(r[l].selected=f),f&&d&&(r[l].defaultSelected=!0)}else{for(l=""+Ne(l),s=null,f=0;f<r.length;f++){if(r[f].value===l){r[f].selected=!0,d&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function Ta(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ys(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(kr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:Ne(l)}}function Xs(r,s){var l=Ne(s.value),d=Ne(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),d!=null&&(r.defaultValue=""+d)}function Ia(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function xt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ct(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?xt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Nr,Sa=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,f){MSApp.execUnsafeLocalFunction(function(){return r(s,l,d,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Nr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ui(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},is=["Webkit","ms","Moz","O"];Object.keys(rs).forEach(function(r){is.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),rs[s]=rs[r]})});function xa(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||rs.hasOwnProperty(r)&&rs[r]?(""+s).trim():s+"px"}function Ca(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,f=xa(l,s[l],d);l==="float"&&(l="cssFloat"),d?r.setProperty(l,f):r[l]=f}}var Ra=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Aa(r,s){if(s){if(Ra[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Pa(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ss=null;function Js(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Zs=null,Rn=null,lr=null;function eo(r){if(r=Za(r)){if(typeof Zs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Mu(s),Zs(r.stateNode,r.type,s))}}function ur(r){Rn?lr?lr.push(r):lr=[r]:Rn=r}function ka(){if(Rn){var r=Rn,s=lr;if(lr=Rn=null,eo(r),s)for(r=0;r<s.length;r++)eo(s[r])}}function os(r,s){return r(s)}function ba(){}var Dr=!1;function Na(r,s,l){if(Dr)return r(s,l);Dr=!0;try{return os(r,s,l)}finally{Dr=!1,(Rn!==null||lr!==null)&&(ba(),ka())}}function yt(r,s){var l=r.stateNode;if(l===null)return null;var d=Mu(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var to=!1;if(h)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){to=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{to=!1}function as(r,s,l,d,f,g,w,A,D){var W=Array.prototype.slice.call(arguments,3);try{s.apply(l,W)}catch(te){this.onError(te)}}var ls=!1,no=null,zn=!1,Da=null,lh={onError:function(r){ls=!0,no=r}};function ro(r,s,l,d,f,g,w,A,D){ls=!1,no=null,as.apply(lh,arguments)}function lu(r,s,l,d,f,g,w,A,D){if(ro.apply(this,arguments),ls){if(ls){var W=no;ls=!1,no=null}else throw Error(t(198));zn||(zn=!0,Da=W)}}function Bn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function us(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function $n(r){if(Bn(r)!==r)throw Error(t(188))}function uu(r){var s=r.alternate;if(!s){if(s=Bn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,d=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(d=f.return,d!==null){l=d;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return $n(f),r;if(g===d)return $n(f),s;g=g.sibling}throw Error(t(188))}if(l.return!==d.return)l=f,d=g;else{for(var w=!1,A=f.child;A;){if(A===l){w=!0,l=f,d=g;break}if(A===d){w=!0,d=f,l=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===l){w=!0,l=g,d=f;break}if(A===d){w=!0,d=g,l=f;break}A=A.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function Oa(r){return r=uu(r),r!==null?io(r):null}function io(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=io(r);if(s!==null)return s;r=r.sibling}return null}var so=e.unstable_scheduleCallback,Va=e.unstable_cancelCallback,cu=e.unstable_shouldYield,uh=e.unstable_requestPaint,Ze=e.unstable_now,du=e.unstable_getCurrentPriorityLevel,cs=e.unstable_ImmediatePriority,ci=e.unstable_UserBlockingPriority,An=e.unstable_NormalPriority,La=e.unstable_LowPriority,hu=e.unstable_IdlePriority,ds=null,vn=null;function fu(r){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(ds,r,void 0,(r.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:mu,Ma=Math.log,pu=Math.LN2;function mu(r){return r>>>=0,r===0?32:31-(Ma(r)/pu|0)|0}var oo=64,ao=4194304;function di(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function hs(r,s){var l=r.pendingLanes;if(l===0)return 0;var d=0,f=r.suspendedLanes,g=r.pingedLanes,w=l&268435455;if(w!==0){var A=w&~f;A!==0?d=di(A):(g&=w,g!==0&&(d=di(g)))}else w=l&~f,w!==0?d=di(w):g!==0&&(d=di(g));if(d===0)return 0;if(s!==0&&s!==d&&(s&f)===0&&(f=d&-d,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)l=31-tn(s),f=1<<l,d|=r[l],s&=~f;return d}function ch(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Or(r,s){for(var l=r.suspendedLanes,d=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-tn(g),A=1<<w,D=f[w];D===-1?((A&l)===0||(A&d)!==0)&&(f[w]=ch(A,s)):D<=s&&(r.expiredLanes|=A),g&=~A}}function _n(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function fs(){var r=oo;return oo<<=1,(oo&4194240)===0&&(oo=64),r}function hi(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function fi(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-tn(s),r[s]=l}function Xe(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<l;){var f=31-tn(l),g=1<<f;s[f]=0,d[f]=-1,r[f]=-1,l&=~g}}function pi(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var d=31-tn(l),f=1<<d;f&s|r[d]&s&&(r[d]|=s),l&=~f}}var $e=0;function mi(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var gu,lo,yu,vu,_u,Fa=!1,cr=[],jt=null,qn=null,Hn=null,gi=new Map,Pn=new Map,dr=[],dh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(r,s){switch(r){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":gi.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pn.delete(s.pointerId)}}function on(r,s,l,d,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Za(s),s!==null&&lo(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function hh(r,s,l,d,f){switch(s){case"focusin":return jt=on(jt,r,s,l,d,f),!0;case"dragenter":return qn=on(qn,r,s,l,d,f),!0;case"mouseover":return Hn=on(Hn,r,s,l,d,f),!0;case"pointerover":var g=f.pointerId;return gi.set(g,on(gi.get(g)||null,r,s,l,d,f)),!0;case"gotpointercapture":return g=f.pointerId,Pn.set(g,on(Pn.get(g)||null,r,s,l,d,f)),!0}return!1}function Eu(r){var s=vs(r.target);if(s!==null){var l=Bn(s);if(l!==null){if(s=l.tag,s===13){if(s=us(l),s!==null){r.blockedOn=s,_u(r.priority,function(){yu(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Vr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=uo(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var d=new l.constructor(l.type,l);ss=d,l.target.dispatchEvent(d),ss=null}else return s=Za(l),s!==null&&lo(s),r.blockedOn=l,!1;s.shift()}return!0}function ps(r,s,l){Vr(r)&&l.delete(s)}function Tu(){Fa=!1,jt!==null&&Vr(jt)&&(jt=null),qn!==null&&Vr(qn)&&(qn=null),Hn!==null&&Vr(Hn)&&(Hn=null),gi.forEach(ps),Pn.forEach(ps)}function Wn(r,s){r.blockedOn===s&&(r.blockedOn=null,Fa||(Fa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tu)))}function Gn(r){function s(f){return Wn(f,r)}if(0<cr.length){Wn(cr[0],r);for(var l=1;l<cr.length;l++){var d=cr[l];d.blockedOn===r&&(d.blockedOn=null)}}for(jt!==null&&Wn(jt,r),qn!==null&&Wn(qn,r),Hn!==null&&Wn(Hn,r),gi.forEach(s),Pn.forEach(s),l=0;l<dr.length;l++)d=dr[l],d.blockedOn===r&&(d.blockedOn=null);for(;0<dr.length&&(l=dr[0],l.blockedOn===null);)Eu(l),l.blockedOn===null&&dr.shift()}var Lr=J.ReactCurrentBatchConfig,yi=!0;function at(r,s,l,d){var f=$e,g=Lr.transition;Lr.transition=null;try{$e=1,ja(r,s,l,d)}finally{$e=f,Lr.transition=g}}function fh(r,s,l,d){var f=$e,g=Lr.transition;Lr.transition=null;try{$e=4,ja(r,s,l,d)}finally{$e=f,Lr.transition=g}}function ja(r,s,l,d){if(yi){var f=uo(r,s,l,d);if(f===null)Sh(r,s,d,ms,l),wu(r,d);else if(hh(f,r,s,l,d))d.stopPropagation();else if(wu(r,d),s&4&&-1<dh.indexOf(r)){for(;f!==null;){var g=Za(f);if(g!==null&&gu(g),g=uo(r,s,l,d),g===null&&Sh(r,s,d,ms,l),g===f)break;f=g}f!==null&&d.stopPropagation()}else Sh(r,s,d,null,l)}}var ms=null;function uo(r,s,l,d){if(ms=null,r=Js(d),r=vs(r),r!==null)if(s=Bn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=us(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return ms=r,null}function Ua(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(du()){case cs:return 1;case ci:return 4;case An:case La:return 16;case hu:return 536870912;default:return 16}default:return 16}}var wn=null,co=null,an=null;function za(){if(an)return an;var r,s=co,l=s.length,d,f="value"in wn?wn.value:wn.textContent,g=f.length;for(r=0;r<l&&s[r]===f[r];r++);var w=l-r;for(d=1;d<=w&&s[l-d]===f[g-d];d++);return an=f.slice(r,1<d?1-d:void 0)}function ho(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function hr(){return!0}function Ba(){return!1}function Ut(r){function s(l,d,f,g,w){this._reactName=l,this._targetInst=f,this.type=d,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(l=r[A],this[A]=l?l(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?hr:Ba,this.isPropagationStopped=Ba,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),s}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Ut(Kn),fr=ae({},Kn,{view:0,detail:0}),ph=Ut(fr),po,Mr,vi,gs=ae({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==vi&&(vi&&r.type==="mousemove"?(po=r.screenX-vi.screenX,Mr=r.screenY-vi.screenY):Mr=po=0,vi=r),po)},movementY:function(r){return"movementY"in r?r.movementY:Mr}}),mo=Ut(gs),$a=ae({},gs,{dataTransfer:0}),Iu=Ut($a),go=ae({},fr,{relatedTarget:0}),yo=Ut(go),Su=ae({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fr=Ut(Su),xu=ae({},Kn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Cu=Ut(xu),Ru=ae({},Kn,{data:0}),qa=Ut(Ru),vo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Au={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Au[r])?!!s[r]:!1}function pr(){return Pu}var u=ae({},fr,{key:function(r){if(r.key){var s=vo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=ho(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?nn[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(r){return r.type==="keypress"?ho(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ho(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Ut(u),v=ae({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Ut(v),U=ae({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr}),G=Ut(U),oe=ae({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ye=Ut(oe),Rt=ae({},gs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),qe=Ut(Rt),Dt=[9,13,27,32],wt=h&&"CompositionEvent"in window,kn=null;h&&"documentMode"in document&&(kn=document.documentMode);var En=h&&"TextEvent"in window&&!kn,ys=h&&(!wt||kn&&8<kn&&11>=kn),_o=" ",ng=!1;function rg(r,s){switch(r){case"keyup":return Dt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var wo=!1;function KT(r,s){switch(r){case"compositionend":return ig(s);case"keypress":return s.which!==32?null:(ng=!0,_o);case"textInput":return r=s.data,r===_o&&ng?null:r;default:return null}}function QT(r,s){if(wo)return r==="compositionend"||!wt&&rg(r,s)?(r=za(),an=co=wn=null,wo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ys&&s.locale!=="ko"?null:s.data;default:return null}}var YT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!YT[r.type]:s==="textarea"}function og(r,s,l,d){ur(d),s=Ou(s,"onChange"),0<s.length&&(l=new fo("onChange","change",null,l,d),r.push({event:l,listeners:s}))}var Ha=null,Wa=null;function XT(r){Sg(r,0)}function ku(r){var s=xo(r);if(_e(s))return r}function JT(r,s){if(r==="change")return s}var ag=!1;if(h){var mh;if(h){var gh="oninput"in document;if(!gh){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),gh=typeof lg.oninput=="function"}mh=gh}else mh=!1;ag=mh&&(!document.documentMode||9<document.documentMode)}function ug(){Ha&&(Ha.detachEvent("onpropertychange",cg),Wa=Ha=null)}function cg(r){if(r.propertyName==="value"&&ku(Wa)){var s=[];og(s,Wa,r,Js(r)),Na(XT,s)}}function ZT(r,s,l){r==="focusin"?(ug(),Ha=s,Wa=l,Ha.attachEvent("onpropertychange",cg)):r==="focusout"&&ug()}function e1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ku(Wa)}function t1(r,s){if(r==="click")return ku(s)}function n1(r,s){if(r==="input"||r==="change")return ku(s)}function r1(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Qn=typeof Object.is=="function"?Object.is:r1;function Ga(r,s){if(Qn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var f=l[d];if(!p.call(s,f)||!Qn(r[f],s[f]))return!1}return!0}function dg(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function hg(r,s){var l=dg(r);r=0;for(var d;l;){if(l.nodeType===3){if(d=r+l.textContent.length,r<=s&&d>=s)return{node:l,offset:s-r};r=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=dg(l)}}function fg(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?fg(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function pg(){for(var r=window,s=Fe();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=Fe(r.document)}return s}function yh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function i1(r){var s=pg(),l=r.focusedElem,d=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&fg(l.ownerDocument.documentElement,l)){if(d!==null&&yh(l)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=l.textContent.length,g=Math.min(d.start,f);d=d.end===void 0?g:Math.min(d.end,f),!r.extend&&g>d&&(f=d,d=g,g=f),f=hg(l,g);var w=hg(l,d);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>d?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var s1=h&&"documentMode"in document&&11>=document.documentMode,Eo=null,vh=null,Ka=null,_h=!1;function mg(r,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;_h||Eo==null||Eo!==Fe(d)||(d=Eo,"selectionStart"in d&&yh(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ka&&Ga(Ka,d)||(Ka=d,d=Ou(vh,"onSelect"),0<d.length&&(s=new fo("onSelect","select",null,s,l),r.push({event:s,listeners:d}),s.target=Eo)))}function bu(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var To={animationend:bu("Animation","AnimationEnd"),animationiteration:bu("Animation","AnimationIteration"),animationstart:bu("Animation","AnimationStart"),transitionend:bu("Transition","TransitionEnd")},wh={},gg={};h&&(gg=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function Nu(r){if(wh[r])return wh[r];if(!To[r])return r;var s=To[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in gg)return wh[r]=s[l];return r}var yg=Nu("animationend"),vg=Nu("animationiteration"),_g=Nu("animationstart"),wg=Nu("transitionend"),Eg=new Map,Tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _i(r,s){Eg.set(r,s),a(s,[r])}for(var Eh=0;Eh<Tg.length;Eh++){var Th=Tg[Eh],o1=Th.toLowerCase(),a1=Th[0].toUpperCase()+Th.slice(1);_i(o1,"on"+a1)}_i(yg,"onAnimationEnd"),_i(vg,"onAnimationIteration"),_i(_g,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(wg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function Ig(r,s,l){var d=r.type||"unknown-event";r.currentTarget=l,lu(d,s,void 0,r),r.currentTarget=null}function Sg(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var d=r[l],f=d.event;d=d.listeners;e:{var g=void 0;if(s)for(var w=d.length-1;0<=w;w--){var A=d[w],D=A.instance,W=A.currentTarget;if(A=A.listener,D!==g&&f.isPropagationStopped())break e;Ig(f,A,W),g=D}else for(w=0;w<d.length;w++){if(A=d[w],D=A.instance,W=A.currentTarget,A=A.listener,D!==g&&f.isPropagationStopped())break e;Ig(f,A,W),g=D}}}if(zn)throw r=Da,zn=!1,Da=null,r}function rt(r,s){var l=s[kh];l===void 0&&(l=s[kh]=new Set);var d=r+"__bubble";l.has(d)||(xg(s,r,2,!1),l.add(d))}function Ih(r,s,l){var d=0;s&&(d|=4),xg(l,r,d,s)}var Du="_reactListening"+Math.random().toString(36).slice(2);function Ya(r){if(!r[Du]){r[Du]=!0,i.forEach(function(l){l!=="selectionchange"&&(l1.has(l)||Ih(l,!1,r),Ih(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Du]||(s[Du]=!0,Ih("selectionchange",!1,s))}}function xg(r,s,l,d){switch(Ua(s)){case 1:var f=at;break;case 4:f=fh;break;default:f=ja}l=f.bind(null,s,l,r),f=void 0,!to||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),d?f!==void 0?r.addEventListener(s,l,{capture:!0,passive:f}):r.addEventListener(s,l,!0):f!==void 0?r.addEventListener(s,l,{passive:f}):r.addEventListener(s,l,!1)}function Sh(r,s,l,d,f){var g=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var A=d.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(w===4)for(w=d.return;w!==null;){var D=w.tag;if((D===3||D===4)&&(D=w.stateNode.containerInfo,D===f||D.nodeType===8&&D.parentNode===f))return;w=w.return}for(;A!==null;){if(w=vs(A),w===null)return;if(D=w.tag,D===5||D===6){d=g=w;continue e}A=A.parentNode}}d=d.return}Na(function(){var W=g,te=Js(l),ne=[];e:{var Z=Eg.get(r);if(Z!==void 0){var ue=fo,me=r;switch(r){case"keypress":if(ho(l)===0)break e;case"keydown":case"keyup":ue=m;break;case"focusin":me="focus",ue=yo;break;case"focusout":me="blur",ue=yo;break;case"beforeblur":case"afterblur":ue=yo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Iu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=G;break;case yg:case vg:case _g:ue=Fr;break;case wg:ue=Ye;break;case"scroll":ue=ph;break;case"wheel":ue=qe;break;case"copy":case"cut":case"paste":ue=Cu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=I}var ge=(s&4)!==0,vt=!ge&&r==="scroll",z=ge?Z!==null?Z+"Capture":null:Z;ge=[];for(var L=W,q;L!==null;){q=L;var ie=q.stateNode;if(q.tag===5&&ie!==null&&(q=ie,z!==null&&(ie=yt(L,z),ie!=null&&ge.push(Xa(L,ie,q)))),vt)break;L=L.return}0<ge.length&&(Z=new ue(Z,me,null,l,te),ne.push({event:Z,listeners:ge}))}}if((s&7)===0){e:{if(Z=r==="mouseover"||r==="pointerover",ue=r==="mouseout"||r==="pointerout",Z&&l!==ss&&(me=l.relatedTarget||l.fromElement)&&(vs(me)||me[jr]))break e;if((ue||Z)&&(Z=te.window===te?te:(Z=te.ownerDocument)?Z.defaultView||Z.parentWindow:window,ue?(me=l.relatedTarget||l.toElement,ue=W,me=me?vs(me):null,me!==null&&(vt=Bn(me),me!==vt||me.tag!==5&&me.tag!==6)&&(me=null)):(ue=null,me=W),ue!==me)){if(ge=mo,ie="onMouseLeave",z="onMouseEnter",L="mouse",(r==="pointerout"||r==="pointerover")&&(ge=I,ie="onPointerLeave",z="onPointerEnter",L="pointer"),vt=ue==null?Z:xo(ue),q=me==null?Z:xo(me),Z=new ge(ie,L+"leave",ue,l,te),Z.target=vt,Z.relatedTarget=q,ie=null,vs(te)===W&&(ge=new ge(z,L+"enter",me,l,te),ge.target=q,ge.relatedTarget=vt,ie=ge),vt=ie,ue&&me)t:{for(ge=ue,z=me,L=0,q=ge;q;q=Io(q))L++;for(q=0,ie=z;ie;ie=Io(ie))q++;for(;0<L-q;)ge=Io(ge),L--;for(;0<q-L;)z=Io(z),q--;for(;L--;){if(ge===z||z!==null&&ge===z.alternate)break t;ge=Io(ge),z=Io(z)}ge=null}else ge=null;ue!==null&&Cg(ne,Z,ue,ge,!1),me!==null&&vt!==null&&Cg(ne,vt,me,ge,!0)}}e:{if(Z=W?xo(W):window,ue=Z.nodeName&&Z.nodeName.toLowerCase(),ue==="select"||ue==="input"&&Z.type==="file")var we=JT;else if(sg(Z))if(ag)we=n1;else{we=e1;var Ie=ZT}else(ue=Z.nodeName)&&ue.toLowerCase()==="input"&&(Z.type==="checkbox"||Z.type==="radio")&&(we=t1);if(we&&(we=we(r,W))){og(ne,we,l,te);break e}Ie&&Ie(r,Z,W),r==="focusout"&&(Ie=Z._wrapperState)&&Ie.controlled&&Z.type==="number"&&Qs(Z,"number",Z.value)}switch(Ie=W?xo(W):window,r){case"focusin":(sg(Ie)||Ie.contentEditable==="true")&&(Eo=Ie,vh=W,Ka=null);break;case"focusout":Ka=vh=Eo=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,mg(ne,l,te);break;case"selectionchange":if(s1)break;case"keydown":case"keyup":mg(ne,l,te)}var Se;if(wt)e:{switch(r){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else wo?rg(r,l)&&(Re="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&(ys&&l.locale!=="ko"&&(wo||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&wo&&(Se=za()):(wn=te,co="value"in wn?wn.value:wn.textContent,wo=!0)),Ie=Ou(W,Re),0<Ie.length&&(Re=new qa(Re,r,null,l,te),ne.push({event:Re,listeners:Ie}),Se?Re.data=Se:(Se=ig(l),Se!==null&&(Re.data=Se)))),(Se=En?KT(r,l):QT(r,l))&&(W=Ou(W,"onBeforeInput"),0<W.length&&(te=new qa("onBeforeInput","beforeinput",null,l,te),ne.push({event:te,listeners:W}),te.data=Se))}Sg(ne,s)})}function Xa(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Ou(r,s){for(var l=s+"Capture",d=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=yt(r,l),g!=null&&d.unshift(Xa(r,g,f)),g=yt(r,s),g!=null&&d.push(Xa(r,g,f))),r=r.return}return d}function Io(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Cg(r,s,l,d,f){for(var g=s._reactName,w=[];l!==null&&l!==d;){var A=l,D=A.alternate,W=A.stateNode;if(D!==null&&D===d)break;A.tag===5&&W!==null&&(A=W,f?(D=yt(l,g),D!=null&&w.unshift(Xa(l,D,A))):f||(D=yt(l,g),D!=null&&w.push(Xa(l,D,A)))),l=l.return}w.length!==0&&r.push({event:s,listeners:w})}var u1=/\r\n?/g,c1=/\u0000|\uFFFD/g;function Rg(r){return(typeof r=="string"?r:""+r).replace(u1,`
`).replace(c1,"")}function Vu(r,s,l){if(s=Rg(s),Rg(r)!==s&&l)throw Error(t(425))}function Lu(){}var xh=null,Ch=null;function Rh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ah=typeof setTimeout=="function"?setTimeout:void 0,d1=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,h1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(r){return Ag.resolve(null).then(r).catch(f1)}:Ah;function f1(r){setTimeout(function(){throw r})}function Ph(r,s){var l=s,d=0;do{var f=l.nextSibling;if(r.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(d===0){r.removeChild(f),Gn(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=f}while(l);Gn(s)}function wi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Pg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var So=Math.random().toString(36).slice(2),mr="__reactFiber$"+So,Ja="__reactProps$"+So,jr="__reactContainer$"+So,kh="__reactEvents$"+So,p1="__reactListeners$"+So,m1="__reactHandles$"+So;function vs(r){var s=r[mr];if(s)return s;for(var l=r.parentNode;l;){if(s=l[jr]||l[mr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=Pg(r);r!==null;){if(l=r[mr])return l;r=Pg(r)}return s}r=l,l=r.parentNode}return null}function Za(r){return r=r[mr]||r[jr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function xo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Mu(r){return r[Ja]||null}var bh=[],Co=-1;function Ei(r){return{current:r}}function it(r){0>Co||(r.current=bh[Co],bh[Co]=null,Co--)}function et(r,s){Co++,bh[Co]=r.current,r.current=s}var Ti={},Wt=Ei(Ti),ln=Ei(!1),_s=Ti;function Ro(r,s){var l=r.type.contextTypes;if(!l)return Ti;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in l)f[g]=s[g];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function un(r){return r=r.childContextTypes,r!=null}function Fu(){it(ln),it(Wt)}function kg(r,s,l){if(Wt.current!==Ti)throw Error(t(168));et(Wt,s),et(ln,l)}function bg(r,s,l){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var f in d)if(!(f in s))throw Error(t(108,Ve(r)||"Unknown",f));return ae({},l,d)}function ju(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Ti,_s=Wt.current,et(Wt,r),et(ln,ln.current),!0}function Ng(r,s,l){var d=r.stateNode;if(!d)throw Error(t(169));l?(r=bg(r,s,_s),d.__reactInternalMemoizedMergedChildContext=r,it(ln),it(Wt),et(Wt,r)):it(ln),et(ln,l)}var Ur=null,Uu=!1,Nh=!1;function Dg(r){Ur===null?Ur=[r]:Ur.push(r)}function g1(r){Uu=!0,Dg(r)}function Ii(){if(!Nh&&Ur!==null){Nh=!0;var r=0,s=$e;try{var l=Ur;for($e=1;r<l.length;r++){var d=l[r];do d=d(!0);while(d!==null)}Ur=null,Uu=!1}catch(f){throw Ur!==null&&(Ur=Ur.slice(r+1)),so(cs,Ii),f}finally{$e=s,Nh=!1}}return null}var Ao=[],Po=0,zu=null,Bu=0,bn=[],Nn=0,ws=null,zr=1,Br="";function Es(r,s){Ao[Po++]=Bu,Ao[Po++]=zu,zu=r,Bu=s}function Og(r,s,l){bn[Nn++]=zr,bn[Nn++]=Br,bn[Nn++]=ws,ws=r;var d=zr;r=Br;var f=32-tn(d)-1;d&=~(1<<f),l+=1;var g=32-tn(s)+f;if(30<g){var w=f-f%5;g=(d&(1<<w)-1).toString(32),d>>=w,f-=w,zr=1<<32-tn(s)+f|l<<f|d,Br=g+r}else zr=1<<g|l<<f|d,Br=r}function Dh(r){r.return!==null&&(Es(r,1),Og(r,1,0))}function Oh(r){for(;r===zu;)zu=Ao[--Po],Ao[Po]=null,Bu=Ao[--Po],Ao[Po]=null;for(;r===ws;)ws=bn[--Nn],bn[Nn]=null,Br=bn[--Nn],bn[Nn]=null,zr=bn[--Nn],bn[Nn]=null}var Tn=null,In=null,lt=!1,Yn=null;function Vg(r,s){var l=Ln(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function Lg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,Tn=r,In=wi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,Tn=r,In=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ws!==null?{id:zr,overflow:Br}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Ln(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,Tn=r,In=null,!0):!1;default:return!1}}function Vh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Lh(r){if(lt){var s=In;if(s){var l=s;if(!Lg(r,s)){if(Vh(r))throw Error(t(418));s=wi(l.nextSibling);var d=Tn;s&&Lg(r,s)?Vg(d,l):(r.flags=r.flags&-4097|2,lt=!1,Tn=r)}}else{if(Vh(r))throw Error(t(418));r.flags=r.flags&-4097|2,lt=!1,Tn=r}}}function Mg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Tn=r}function $u(r){if(r!==Tn)return!1;if(!lt)return Mg(r),lt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Rh(r.type,r.memoizedProps)),s&&(s=In)){if(Vh(r))throw Fg(),Error(t(418));for(;s;)Vg(r,s),s=wi(s.nextSibling)}if(Mg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){In=wi(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}In=null}}else In=Tn?wi(r.stateNode.nextSibling):null;return!0}function Fg(){for(var r=In;r;)r=wi(r.nextSibling)}function ko(){In=Tn=null,lt=!1}function Mh(r){Yn===null?Yn=[r]:Yn.push(r)}var y1=J.ReactCurrentBatchConfig;function el(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,r));var f=d,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var A=f.refs;w===null?delete A[g]:A[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function qu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function jg(r){var s=r._init;return s(r._payload)}function Ug(r){function s(z,L){if(r){var q=z.deletions;q===null?(z.deletions=[L],z.flags|=16):q.push(L)}}function l(z,L){if(!r)return null;for(;L!==null;)s(z,L),L=L.sibling;return null}function d(z,L){for(z=new Map;L!==null;)L.key!==null?z.set(L.key,L):z.set(L.index,L),L=L.sibling;return z}function f(z,L){return z=bi(z,L),z.index=0,z.sibling=null,z}function g(z,L,q){return z.index=q,r?(q=z.alternate,q!==null?(q=q.index,q<L?(z.flags|=2,L):q):(z.flags|=2,L)):(z.flags|=1048576,L)}function w(z){return r&&z.alternate===null&&(z.flags|=2),z}function A(z,L,q,ie){return L===null||L.tag!==6?(L=Pf(q,z.mode,ie),L.return=z,L):(L=f(L,q),L.return=z,L)}function D(z,L,q,ie){var we=q.type;return we===C?te(z,L,q.props.children,ie,q.key):L!==null&&(L.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===gt&&jg(we)===L.type)?(ie=f(L,q.props),ie.ref=el(z,L,q),ie.return=z,ie):(ie=pc(q.type,q.key,q.props,null,z.mode,ie),ie.ref=el(z,L,q),ie.return=z,ie)}function W(z,L,q,ie){return L===null||L.tag!==4||L.stateNode.containerInfo!==q.containerInfo||L.stateNode.implementation!==q.implementation?(L=kf(q,z.mode,ie),L.return=z,L):(L=f(L,q.children||[]),L.return=z,L)}function te(z,L,q,ie,we){return L===null||L.tag!==7?(L=Ps(q,z.mode,ie,we),L.return=z,L):(L=f(L,q),L.return=z,L)}function ne(z,L,q){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Pf(""+L,z.mode,q),L.return=z,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case re:return q=pc(L.type,L.key,L.props,null,z.mode,q),q.ref=el(z,null,L),q.return=z,q;case ee:return L=kf(L,z.mode,q),L.return=z,L;case gt:var ie=L._init;return ne(z,ie(L._payload),q)}if(kr(L)||pe(L))return L=Ps(L,z.mode,q,null),L.return=z,L;qu(z,L)}return null}function Z(z,L,q,ie){var we=L!==null?L.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return we!==null?null:A(z,L,""+q,ie);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case re:return q.key===we?D(z,L,q,ie):null;case ee:return q.key===we?W(z,L,q,ie):null;case gt:return we=q._init,Z(z,L,we(q._payload),ie)}if(kr(q)||pe(q))return we!==null?null:te(z,L,q,ie,null);qu(z,q)}return null}function ue(z,L,q,ie,we){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return z=z.get(q)||null,A(L,z,""+ie,we);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case re:return z=z.get(ie.key===null?q:ie.key)||null,D(L,z,ie,we);case ee:return z=z.get(ie.key===null?q:ie.key)||null,W(L,z,ie,we);case gt:var Ie=ie._init;return ue(z,L,q,Ie(ie._payload),we)}if(kr(ie)||pe(ie))return z=z.get(q)||null,te(L,z,ie,we,null);qu(L,ie)}return null}function me(z,L,q,ie){for(var we=null,Ie=null,Se=L,Re=L=0,Lt=null;Se!==null&&Re<q.length;Re++){Se.index>Re?(Lt=Se,Se=null):Lt=Se.sibling;var Ge=Z(z,Se,q[Re],ie);if(Ge===null){Se===null&&(Se=Lt);break}r&&Se&&Ge.alternate===null&&s(z,Se),L=g(Ge,L,Re),Ie===null?we=Ge:Ie.sibling=Ge,Ie=Ge,Se=Lt}if(Re===q.length)return l(z,Se),lt&&Es(z,Re),we;if(Se===null){for(;Re<q.length;Re++)Se=ne(z,q[Re],ie),Se!==null&&(L=g(Se,L,Re),Ie===null?we=Se:Ie.sibling=Se,Ie=Se);return lt&&Es(z,Re),we}for(Se=d(z,Se);Re<q.length;Re++)Lt=ue(Se,z,Re,q[Re],ie),Lt!==null&&(r&&Lt.alternate!==null&&Se.delete(Lt.key===null?Re:Lt.key),L=g(Lt,L,Re),Ie===null?we=Lt:Ie.sibling=Lt,Ie=Lt);return r&&Se.forEach(function(Ni){return s(z,Ni)}),lt&&Es(z,Re),we}function ge(z,L,q,ie){var we=pe(q);if(typeof we!="function")throw Error(t(150));if(q=we.call(q),q==null)throw Error(t(151));for(var Ie=we=null,Se=L,Re=L=0,Lt=null,Ge=q.next();Se!==null&&!Ge.done;Re++,Ge=q.next()){Se.index>Re?(Lt=Se,Se=null):Lt=Se.sibling;var Ni=Z(z,Se,Ge.value,ie);if(Ni===null){Se===null&&(Se=Lt);break}r&&Se&&Ni.alternate===null&&s(z,Se),L=g(Ni,L,Re),Ie===null?we=Ni:Ie.sibling=Ni,Ie=Ni,Se=Lt}if(Ge.done)return l(z,Se),lt&&Es(z,Re),we;if(Se===null){for(;!Ge.done;Re++,Ge=q.next())Ge=ne(z,Ge.value,ie),Ge!==null&&(L=g(Ge,L,Re),Ie===null?we=Ge:Ie.sibling=Ge,Ie=Ge);return lt&&Es(z,Re),we}for(Se=d(z,Se);!Ge.done;Re++,Ge=q.next())Ge=ue(Se,z,Re,Ge.value,ie),Ge!==null&&(r&&Ge.alternate!==null&&Se.delete(Ge.key===null?Re:Ge.key),L=g(Ge,L,Re),Ie===null?we=Ge:Ie.sibling=Ge,Ie=Ge);return r&&Se.forEach(function(Y1){return s(z,Y1)}),lt&&Es(z,Re),we}function vt(z,L,q,ie){if(typeof q=="object"&&q!==null&&q.type===C&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case re:e:{for(var we=q.key,Ie=L;Ie!==null;){if(Ie.key===we){if(we=q.type,we===C){if(Ie.tag===7){l(z,Ie.sibling),L=f(Ie,q.props.children),L.return=z,z=L;break e}}else if(Ie.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===gt&&jg(we)===Ie.type){l(z,Ie.sibling),L=f(Ie,q.props),L.ref=el(z,Ie,q),L.return=z,z=L;break e}l(z,Ie);break}else s(z,Ie);Ie=Ie.sibling}q.type===C?(L=Ps(q.props.children,z.mode,ie,q.key),L.return=z,z=L):(ie=pc(q.type,q.key,q.props,null,z.mode,ie),ie.ref=el(z,L,q),ie.return=z,z=ie)}return w(z);case ee:e:{for(Ie=q.key;L!==null;){if(L.key===Ie)if(L.tag===4&&L.stateNode.containerInfo===q.containerInfo&&L.stateNode.implementation===q.implementation){l(z,L.sibling),L=f(L,q.children||[]),L.return=z,z=L;break e}else{l(z,L);break}else s(z,L);L=L.sibling}L=kf(q,z.mode,ie),L.return=z,z=L}return w(z);case gt:return Ie=q._init,vt(z,L,Ie(q._payload),ie)}if(kr(q))return me(z,L,q,ie);if(pe(q))return ge(z,L,q,ie);qu(z,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,L!==null&&L.tag===6?(l(z,L.sibling),L=f(L,q),L.return=z,z=L):(l(z,L),L=Pf(q,z.mode,ie),L.return=z,z=L),w(z)):l(z,L)}return vt}var bo=Ug(!0),zg=Ug(!1),Hu=Ei(null),Wu=null,No=null,Fh=null;function jh(){Fh=No=Wu=null}function Uh(r){var s=Hu.current;it(Hu),r._currentValue=s}function zh(r,s,l){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===l)break;r=r.return}}function Do(r,s){Wu=r,Fh=No=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(cn=!0),r.firstContext=null)}function Dn(r){var s=r._currentValue;if(Fh!==r)if(r={context:r,memoizedValue:s,next:null},No===null){if(Wu===null)throw Error(t(308));No=r,Wu.dependencies={lanes:0,firstContext:r}}else No=No.next=r;return s}var Ts=null;function Bh(r){Ts===null?Ts=[r]:Ts.push(r)}function Bg(r,s,l,d){var f=s.interleaved;return f===null?(l.next=l,Bh(s)):(l.next=f.next,f.next=l),s.interleaved=l,$r(r,d)}function $r(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Si=!1;function $h(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $g(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function qr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function xi(r,s,l){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(We&2)!==0){var f=d.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),d.pending=s,$r(r,l)}return f=d.interleaved,f===null?(s.next=s,Bh(d)):(s.next=f.next,f.next=s),d.interleaved=s,$r(r,l)}function Gu(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,l|=d,s.lanes=l,pi(r,l)}}function qg(r,s){var l=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?f=g=w:g=g.next=w,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:d.shared,effects:d.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Ku(r,s,l,d){var f=r.updateQueue;Si=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var D=A,W=D.next;D.next=null,w===null?g=W:w.next=W,w=D;var te=r.alternate;te!==null&&(te=te.updateQueue,A=te.lastBaseUpdate,A!==w&&(A===null?te.firstBaseUpdate=W:A.next=W,te.lastBaseUpdate=D))}if(g!==null){var ne=f.baseState;w=0,te=W=D=null,A=g;do{var Z=A.lane,ue=A.eventTime;if((d&Z)===Z){te!==null&&(te=te.next={eventTime:ue,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var me=r,ge=A;switch(Z=s,ue=l,ge.tag){case 1:if(me=ge.payload,typeof me=="function"){ne=me.call(ue,ne,Z);break e}ne=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ge.payload,Z=typeof me=="function"?me.call(ue,ne,Z):me,Z==null)break e;ne=ae({},ne,Z);break e;case 2:Si=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Z=f.effects,Z===null?f.effects=[A]:Z.push(A))}else ue={eventTime:ue,lane:Z,tag:A.tag,payload:A.payload,callback:A.callback,next:null},te===null?(W=te=ue,D=ne):te=te.next=ue,w|=Z;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Z=A,A=Z.next,Z.next=null,f.lastBaseUpdate=Z,f.shared.pending=null}}while(!0);if(te===null&&(D=ne),f.baseState=D,f.firstBaseUpdate=W,f.lastBaseUpdate=te,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);xs|=w,r.lanes=w,r.memoizedState=ne}}function Hg(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],f=d.callback;if(f!==null){if(d.callback=null,d=l,typeof f!="function")throw Error(t(191,f));f.call(d)}}}var tl={},gr=Ei(tl),nl=Ei(tl),rl=Ei(tl);function Is(r){if(r===tl)throw Error(t(174));return r}function qh(r,s){switch(et(rl,s),et(nl,r),et(gr,tl),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ct(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Ct(s,r)}it(gr),et(gr,s)}function Oo(){it(gr),it(nl),it(rl)}function Wg(r){Is(rl.current);var s=Is(gr.current),l=Ct(s,r.type);s!==l&&(et(nl,r),et(gr,l))}function Hh(r){nl.current===r&&(it(gr),it(nl))}var ct=Ei(0);function Qu(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Wh=[];function Gh(){for(var r=0;r<Wh.length;r++)Wh[r]._workInProgressVersionPrimary=null;Wh.length=0}var Yu=J.ReactCurrentDispatcher,Kh=J.ReactCurrentBatchConfig,Ss=0,dt=null,At=null,Ot=null,Xu=!1,il=!1,sl=0,v1=0;function Gt(){throw Error(t(321))}function Qh(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Qn(r[l],s[l]))return!1;return!0}function Yh(r,s,l,d,f,g){if(Ss=g,dt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Yu.current=r===null||r.memoizedState===null?T1:I1,r=l(d,f),il){g=0;do{if(il=!1,sl=0,25<=g)throw Error(t(301));g+=1,Ot=At=null,s.updateQueue=null,Yu.current=S1,r=l(d,f)}while(il)}if(Yu.current=ec,s=At!==null&&At.next!==null,Ss=0,Ot=At=dt=null,Xu=!1,s)throw Error(t(300));return r}function Xh(){var r=sl!==0;return sl=0,r}function yr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?dt.memoizedState=Ot=r:Ot=Ot.next=r,Ot}function On(){if(At===null){var r=dt.alternate;r=r!==null?r.memoizedState:null}else r=At.next;var s=Ot===null?dt.memoizedState:Ot.next;if(s!==null)Ot=s,At=r;else{if(r===null)throw Error(t(310));At=r,r={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Ot===null?dt.memoizedState=Ot=r:Ot=Ot.next=r}return Ot}function ol(r,s){return typeof s=="function"?s(r):s}function Jh(r){var s=On(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var d=At,f=d.baseQueue,g=l.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}d.baseQueue=f=g,l.pending=null}if(f!==null){g=f.next,d=d.baseState;var A=w=null,D=null,W=g;do{var te=W.lane;if((Ss&te)===te)D!==null&&(D=D.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),d=W.hasEagerState?W.eagerState:r(d,W.action);else{var ne={lane:te,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};D===null?(A=D=ne,w=d):D=D.next=ne,dt.lanes|=te,xs|=te}W=W.next}while(W!==null&&W!==g);D===null?w=d:D.next=A,Qn(d,s.memoizedState)||(cn=!0),s.memoizedState=d,s.baseState=w,s.baseQueue=D,l.lastRenderedState=d}if(r=l.interleaved,r!==null){f=r;do g=f.lane,dt.lanes|=g,xs|=g,f=f.next;while(f!==r)}else f===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Zh(r){var s=On(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var d=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);Qn(g,s.memoizedState)||(cn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,d]}function Gg(){}function Kg(r,s){var l=dt,d=On(),f=s(),g=!Qn(d.memoizedState,f);if(g&&(d.memoizedState=f,cn=!0),d=d.queue,ef(Xg.bind(null,l,d,r),[r]),d.getSnapshot!==s||g||Ot!==null&&Ot.memoizedState.tag&1){if(l.flags|=2048,al(9,Yg.bind(null,l,d,f,s),void 0,null),Vt===null)throw Error(t(349));(Ss&30)!==0||Qg(l,s,f)}return f}function Qg(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=dt.updateQueue,s===null?(s={lastEffect:null,stores:null},dt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function Yg(r,s,l,d){s.value=l,s.getSnapshot=d,Jg(s)&&Zg(r)}function Xg(r,s,l){return l(function(){Jg(s)&&Zg(r)})}function Jg(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Qn(r,l)}catch{return!0}}function Zg(r){var s=$r(r,1);s!==null&&er(s,r,1,-1)}function ey(r){var s=yr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:r},s.queue=r,r=r.dispatch=E1.bind(null,dt,r),[s.memoizedState,r]}function al(r,s,l,d){return r={tag:r,create:s,destroy:l,deps:d,next:null},s=dt.updateQueue,s===null?(s={lastEffect:null,stores:null},dt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(d=l.next,l.next=r,r.next=d,s.lastEffect=r)),r}function ty(){return On().memoizedState}function Ju(r,s,l,d){var f=yr();dt.flags|=r,f.memoizedState=al(1|s,l,void 0,d===void 0?null:d)}function Zu(r,s,l,d){var f=On();d=d===void 0?null:d;var g=void 0;if(At!==null){var w=At.memoizedState;if(g=w.destroy,d!==null&&Qh(d,w.deps)){f.memoizedState=al(s,l,g,d);return}}dt.flags|=r,f.memoizedState=al(1|s,l,g,d)}function ny(r,s){return Ju(8390656,8,r,s)}function ef(r,s){return Zu(2048,8,r,s)}function ry(r,s){return Zu(4,2,r,s)}function iy(r,s){return Zu(4,4,r,s)}function sy(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function oy(r,s,l){return l=l!=null?l.concat([r]):null,Zu(4,4,sy.bind(null,s,r),l)}function tf(){}function ay(r,s){var l=On();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Qh(s,d[1])?d[0]:(l.memoizedState=[r,s],r)}function ly(r,s){var l=On();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Qh(s,d[1])?d[0]:(r=r(),l.memoizedState=[r,s],r)}function uy(r,s,l){return(Ss&21)===0?(r.baseState&&(r.baseState=!1,cn=!0),r.memoizedState=l):(Qn(l,s)||(l=fs(),dt.lanes|=l,xs|=l,r.baseState=!0),s)}function _1(r,s){var l=$e;$e=l!==0&&4>l?l:4,r(!0);var d=Kh.transition;Kh.transition={};try{r(!1),s()}finally{$e=l,Kh.transition=d}}function cy(){return On().memoizedState}function w1(r,s,l){var d=Pi(r);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},dy(r))hy(s,l);else if(l=Bg(r,s,l,d),l!==null){var f=sn();er(l,r,d,f),fy(l,s,d)}}function E1(r,s,l){var d=Pi(r),f={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(dy(r))hy(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,A=g(w,l);if(f.hasEagerState=!0,f.eagerState=A,Qn(A,w)){var D=s.interleaved;D===null?(f.next=f,Bh(s)):(f.next=D.next,D.next=f),s.interleaved=f;return}}catch{}finally{}l=Bg(r,s,f,d),l!==null&&(f=sn(),er(l,r,d,f),fy(l,s,d))}}function dy(r){var s=r.alternate;return r===dt||s!==null&&s===dt}function hy(r,s){il=Xu=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function fy(r,s,l){if((l&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,l|=d,s.lanes=l,pi(r,l)}}var ec={readContext:Dn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},T1={readContext:Dn,useCallback:function(r,s){return yr().memoizedState=[r,s===void 0?null:s],r},useContext:Dn,useEffect:ny,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Ju(4194308,4,sy.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Ju(4194308,4,r,s)},useInsertionEffect:function(r,s){return Ju(4,2,r,s)},useMemo:function(r,s){var l=yr();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var d=yr();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=w1.bind(null,dt,r),[d.memoizedState,r]},useRef:function(r){var s=yr();return r={current:r},s.memoizedState=r},useState:ey,useDebugValue:tf,useDeferredValue:function(r){return yr().memoizedState=r},useTransition:function(){var r=ey(!1),s=r[0];return r=_1.bind(null,r[1]),yr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var d=dt,f=yr();if(lt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Vt===null)throw Error(t(349));(Ss&30)!==0||Qg(d,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,ny(Xg.bind(null,d,g,r),[r]),d.flags|=2048,al(9,Yg.bind(null,d,g,l,s),void 0,null),l},useId:function(){var r=yr(),s=Vt.identifierPrefix;if(lt){var l=Br,d=zr;l=(d&~(1<<32-tn(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=sl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=v1++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},I1={readContext:Dn,useCallback:ay,useContext:Dn,useEffect:ef,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:iy,useMemo:ly,useReducer:Jh,useRef:ty,useState:function(){return Jh(ol)},useDebugValue:tf,useDeferredValue:function(r){var s=On();return uy(s,At.memoizedState,r)},useTransition:function(){var r=Jh(ol)[0],s=On().memoizedState;return[r,s]},useMutableSource:Gg,useSyncExternalStore:Kg,useId:cy,unstable_isNewReconciler:!1},S1={readContext:Dn,useCallback:ay,useContext:Dn,useEffect:ef,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:iy,useMemo:ly,useReducer:Zh,useRef:ty,useState:function(){return Zh(ol)},useDebugValue:tf,useDeferredValue:function(r){var s=On();return At===null?s.memoizedState=r:uy(s,At.memoizedState,r)},useTransition:function(){var r=Zh(ol)[0],s=On().memoizedState;return[r,s]},useMutableSource:Gg,useSyncExternalStore:Kg,useId:cy,unstable_isNewReconciler:!1};function Xn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function nf(r,s,l,d){s=r.memoizedState,l=l(d,s),l=l==null?s:ae({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var tc={isMounted:function(r){return(r=r._reactInternals)?Bn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var d=sn(),f=Pi(r),g=qr(d,f);g.payload=s,l!=null&&(g.callback=l),s=xi(r,g,f),s!==null&&(er(s,r,f,d),Gu(s,r,f))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var d=sn(),f=Pi(r),g=qr(d,f);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=xi(r,g,f),s!==null&&(er(s,r,f,d),Gu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=sn(),d=Pi(r),f=qr(l,d);f.tag=2,s!=null&&(f.callback=s),s=xi(r,f,d),s!==null&&(er(s,r,d,l),Gu(s,r,d))}};function py(r,s,l,d,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,g,w):s.prototype&&s.prototype.isPureReactComponent?!Ga(l,d)||!Ga(f,g):!0}function my(r,s,l){var d=!1,f=Ti,g=s.contextType;return typeof g=="object"&&g!==null?g=Dn(g):(f=un(s)?_s:Wt.current,d=s.contextTypes,g=(d=d!=null)?Ro(r,f):Ti),s=new s(l,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=tc,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function gy(r,s,l,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==r&&tc.enqueueReplaceState(s,s.state,null)}function rf(r,s,l,d){var f=r.stateNode;f.props=l,f.state=r.memoizedState,f.refs={},$h(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=Dn(g):(g=un(s)?_s:Wt.current,f.context=Ro(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(nf(r,s,g,l),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&tc.enqueueReplaceState(f,f.state,null),Ku(r,l,f,d),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function Vo(r,s){try{var l="",d=s;do l+=Pe(d),d=d.return;while(d);var f=l}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function sf(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function of(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var x1=typeof WeakMap=="function"?WeakMap:Map;function yy(r,s,l){l=qr(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){lc||(lc=!0,Ef=d),of(r,s)},l}function vy(r,s,l){l=qr(-1,l),l.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var f=s.value;l.payload=function(){return d(f)},l.callback=function(){of(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){of(r,s),typeof d!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function _y(r,s,l){var d=r.pingCache;if(d===null){d=r.pingCache=new x1;var f=new Set;d.set(s,f)}else f=d.get(s),f===void 0&&(f=new Set,d.set(s,f));f.has(l)||(f.add(l),r=j1.bind(null,r,s,l),s.then(r,r))}function wy(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ey(r,s,l,d,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=qr(-1,1),s.tag=2,xi(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var C1=J.ReactCurrentOwner,cn=!1;function rn(r,s,l,d){s.child=r===null?zg(s,null,l,d):bo(s,r.child,l,d)}function Ty(r,s,l,d,f){l=l.render;var g=s.ref;return Do(s,f),d=Yh(r,s,l,d,g,f),l=Xh(),r!==null&&!cn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Hr(r,s,f)):(lt&&l&&Dh(s),s.flags|=1,rn(r,s,d,f),s.child)}function Iy(r,s,l,d,f){if(r===null){var g=l.type;return typeof g=="function"&&!Af(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,Sy(r,s,g,d,f)):(r=pc(l.type,null,d,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var w=g.memoizedProps;if(l=l.compare,l=l!==null?l:Ga,l(w,d)&&r.ref===s.ref)return Hr(r,s,f)}return s.flags|=1,r=bi(g,d),r.ref=s.ref,r.return=s,s.child=r}function Sy(r,s,l,d,f){if(r!==null){var g=r.memoizedProps;if(Ga(g,d)&&r.ref===s.ref)if(cn=!1,s.pendingProps=d=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(cn=!0);else return s.lanes=r.lanes,Hr(r,s,f)}return af(r,s,l,d,f)}function xy(r,s,l){var d=s.pendingProps,f=d.children,g=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Mo,Sn),Sn|=l;else{if((l&1073741824)===0)return r=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,et(Mo,Sn),Sn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=g!==null?g.baseLanes:l,et(Mo,Sn),Sn|=d}else g!==null?(d=g.baseLanes|l,s.memoizedState=null):d=l,et(Mo,Sn),Sn|=d;return rn(r,s,f,l),s.child}function Cy(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function af(r,s,l,d,f){var g=un(l)?_s:Wt.current;return g=Ro(s,g),Do(s,f),l=Yh(r,s,l,d,g,f),d=Xh(),r!==null&&!cn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Hr(r,s,f)):(lt&&d&&Dh(s),s.flags|=1,rn(r,s,l,f),s.child)}function Ry(r,s,l,d,f){if(un(l)){var g=!0;ju(s)}else g=!1;if(Do(s,f),s.stateNode===null)rc(r,s),my(s,l,d),rf(s,l,d,f),d=!0;else if(r===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var D=w.context,W=l.contextType;typeof W=="object"&&W!==null?W=Dn(W):(W=un(l)?_s:Wt.current,W=Ro(s,W));var te=l.getDerivedStateFromProps,ne=typeof te=="function"||typeof w.getSnapshotBeforeUpdate=="function";ne||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==d||D!==W)&&gy(s,w,d,W),Si=!1;var Z=s.memoizedState;w.state=Z,Ku(s,d,w,f),D=s.memoizedState,A!==d||Z!==D||ln.current||Si?(typeof te=="function"&&(nf(s,l,te,d),D=s.memoizedState),(A=Si||py(s,l,A,d,Z,D,W))?(ne||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=D),w.props=d,w.state=D,w.context=W,d=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{w=s.stateNode,$g(r,s),A=s.memoizedProps,W=s.type===s.elementType?A:Xn(s.type,A),w.props=W,ne=s.pendingProps,Z=w.context,D=l.contextType,typeof D=="object"&&D!==null?D=Dn(D):(D=un(l)?_s:Wt.current,D=Ro(s,D));var ue=l.getDerivedStateFromProps;(te=typeof ue=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==ne||Z!==D)&&gy(s,w,d,D),Si=!1,Z=s.memoizedState,w.state=Z,Ku(s,d,w,f);var me=s.memoizedState;A!==ne||Z!==me||ln.current||Si?(typeof ue=="function"&&(nf(s,l,ue,d),me=s.memoizedState),(W=Si||py(s,l,W,d,Z,me,D)||!1)?(te||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,me,D),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,me,D)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=me),w.props=d,w.state=me,w.context=D,d=W):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),d=!1)}return lf(r,s,l,d,g,f)}function lf(r,s,l,d,f,g){Cy(r,s);var w=(s.flags&128)!==0;if(!d&&!w)return f&&Ng(s,l,!1),Hr(r,s,g);d=s.stateNode,C1.current=s;var A=w&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&w?(s.child=bo(s,r.child,null,g),s.child=bo(s,null,A,g)):rn(r,s,A,g),s.memoizedState=d.state,f&&Ng(s,l,!0),s.child}function Ay(r){var s=r.stateNode;s.pendingContext?kg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&kg(r,s.context,!1),qh(r,s.containerInfo)}function Py(r,s,l,d,f){return ko(),Mh(f),s.flags|=256,rn(r,s,l,d),s.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function cf(r){return{baseLanes:r,cachePool:null,transitions:null}}function ky(r,s,l){var d=s.pendingProps,f=ct.current,g=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),et(ct,f&1),r===null)return Lh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=d.children,r=d.fallback,g?(d=s.mode,g=s.child,w={mode:"hidden",children:w},(d&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=mc(w,d,0,null),r=Ps(r,d,l,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=cf(l),s.memoizedState=uf,r):df(s,w));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return R1(r,s,w,d,A,f,l);if(g){g=d.fallback,w=s.mode,f=r.child,A=f.sibling;var D={mode:"hidden",children:d.children};return(w&1)===0&&s.child!==f?(d=s.child,d.childLanes=0,d.pendingProps=D,s.deletions=null):(d=bi(f,D),d.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=bi(A,g):(g=Ps(g,w,l,null),g.flags|=2),g.return=s,d.return=s,d.sibling=g,s.child=d,d=g,g=s.child,w=r.child.memoizedState,w=w===null?cf(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~l,s.memoizedState=uf,d}return g=r.child,r=g.sibling,d=bi(g,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=d,s.memoizedState=null,d}function df(r,s){return s=mc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function nc(r,s,l,d){return d!==null&&Mh(d),bo(s,r.child,null,l),r=df(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function R1(r,s,l,d,f,g,w){if(l)return s.flags&256?(s.flags&=-257,d=sf(Error(t(422))),nc(r,s,w,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=d.fallback,f=s.mode,d=mc({mode:"visible",children:d.children},f,0,null),g=Ps(g,f,w,null),g.flags|=2,d.return=s,g.return=s,d.sibling=g,s.child=d,(s.mode&1)!==0&&bo(s,r.child,null,w),s.child.memoizedState=cf(w),s.memoizedState=uf,g);if((s.mode&1)===0)return nc(r,s,w,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var A=d.dgst;return d=A,g=Error(t(419)),d=sf(g,d,void 0),nc(r,s,w,d)}if(A=(w&r.childLanes)!==0,cn||A){if(d=Vt,d!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,$r(r,f),er(d,r,f,-1))}return Rf(),d=sf(Error(t(421))),nc(r,s,w,d)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=U1.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,In=wi(f.nextSibling),Tn=s,lt=!0,Yn=null,r!==null&&(bn[Nn++]=zr,bn[Nn++]=Br,bn[Nn++]=ws,zr=r.id,Br=r.overflow,ws=s),s=df(s,d.children),s.flags|=4096,s)}function by(r,s,l){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),zh(r.return,s,l)}function hf(r,s,l,d,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=l,g.tailMode=f)}function Ny(r,s,l){var d=s.pendingProps,f=d.revealOrder,g=d.tail;if(rn(r,s,d.children,l),d=ct.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&by(r,l,s);else if(r.tag===19)by(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(et(ct,d),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(l=s.child,f=null;l!==null;)r=l.alternate,r!==null&&Qu(r)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),hf(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Qu(r)===null){s.child=f;break}r=f.sibling,f.sibling=l,l=f,f=r}hf(s,!0,l,null,g);break;case"together":hf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function rc(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Hr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),xs|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=bi(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=bi(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function A1(r,s,l){switch(s.tag){case 3:Ay(s),ko();break;case 5:Wg(s);break;case 1:un(s.type)&&ju(s);break;case 4:qh(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,f=s.memoizedProps.value;et(Hu,d._currentValue),d._currentValue=f;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(et(ct,ct.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?ky(r,s,l):(et(ct,ct.current&1),r=Hr(r,s,l),r!==null?r.sibling:null);et(ct,ct.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(r.flags&128)!==0){if(d)return Ny(r,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),et(ct,ct.current),d)break;return null;case 22:case 23:return s.lanes=0,xy(r,s,l)}return Hr(r,s,l)}var Dy,ff,Oy,Vy;Dy=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},ff=function(){},Oy=function(r,s,l,d){var f=r.memoizedProps;if(f!==d){r=s.stateNode,Is(gr.current);var g=null;switch(l){case"input":f=Ee(r,f),d=Ee(r,d),g=[];break;case"select":f=ae({},f,{value:void 0}),d=ae({},d,{value:void 0}),g=[];break;case"textarea":f=Ta(r,f),d=Ta(r,d),g=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=Lu)}Aa(l,d);var w;l=null;for(W in f)if(!d.hasOwnProperty(W)&&f.hasOwnProperty(W)&&f[W]!=null)if(W==="style"){var A=f[W];for(w in A)A.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(o.hasOwnProperty(W)?g||(g=[]):(g=g||[]).push(W,null));for(W in d){var D=d[W];if(A=f!=null?f[W]:void 0,d.hasOwnProperty(W)&&D!==A&&(D!=null||A!=null))if(W==="style")if(A){for(w in A)!A.hasOwnProperty(w)||D&&D.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in D)D.hasOwnProperty(w)&&A[w]!==D[w]&&(l||(l={}),l[w]=D[w])}else l||(g||(g=[]),g.push(W,l)),l=D;else W==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,A=A?A.__html:void 0,D!=null&&A!==D&&(g=g||[]).push(W,D)):W==="children"?typeof D!="string"&&typeof D!="number"||(g=g||[]).push(W,""+D):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(o.hasOwnProperty(W)?(D!=null&&W==="onScroll"&&rt("scroll",r),g||A===D||(g=[])):(g=g||[]).push(W,D))}l&&(g=g||[]).push("style",l);var W=g;(s.updateQueue=W)&&(s.flags|=4)}},Vy=function(r,s,l,d){l!==d&&(s.flags|=4)};function ll(r,s){if(!lt)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Kt(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,d=0;if(s)for(var f=r.child;f!==null;)l|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)l|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=d,r.childLanes=l,s}function P1(r,s,l){var d=s.pendingProps;switch(Oh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(s),null;case 1:return un(s.type)&&Fu(),Kt(s),null;case 3:return d=s.stateNode,Oo(),it(ln),it(Wt),Gh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&($u(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Yn!==null&&(Sf(Yn),Yn=null))),ff(r,s),Kt(s),null;case 5:Hh(s);var f=Is(rl.current);if(l=s.type,r!==null&&s.stateNode!=null)Oy(r,s,l,d,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Kt(s),null}if(r=Is(gr.current),$u(s)){d=s.stateNode,l=s.type;var g=s.memoizedProps;switch(d[mr]=s,d[Ja]=g,r=(s.mode&1)!==0,l){case"dialog":rt("cancel",d),rt("close",d);break;case"iframe":case"object":case"embed":rt("load",d);break;case"video":case"audio":for(f=0;f<Qa.length;f++)rt(Qa[f],d);break;case"source":rt("error",d);break;case"img":case"image":case"link":rt("error",d),rt("load",d);break;case"details":rt("toggle",d);break;case"input":Je(d,g),rt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!g.multiple},rt("invalid",d);break;case"textarea":Ys(d,g),rt("invalid",d)}Aa(l,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?d.textContent!==A&&(g.suppressHydrationWarning!==!0&&Vu(d.textContent,A,r),f=["children",A]):typeof A=="number"&&d.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&Vu(d.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&rt("scroll",d)}switch(l){case"input":le(d),au(d,g,!0);break;case"textarea":le(d),Ia(d);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(d.onclick=Lu)}d=f,s.updateQueue=d,d!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=xt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=w.createElement(l,{is:d.is}):(r=w.createElement(l),l==="select"&&(w=r,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):r=w.createElementNS(r,l),r[mr]=s,r[Ja]=d,Dy(r,s,!1,!1),s.stateNode=r;e:{switch(w=Pa(l,d),l){case"dialog":rt("cancel",r),rt("close",r),f=d;break;case"iframe":case"object":case"embed":rt("load",r),f=d;break;case"video":case"audio":for(f=0;f<Qa.length;f++)rt(Qa[f],r);f=d;break;case"source":rt("error",r),f=d;break;case"img":case"image":case"link":rt("error",r),rt("load",r),f=d;break;case"details":rt("toggle",r),f=d;break;case"input":Je(r,d),f=Ee(r,d),rt("invalid",r);break;case"option":f=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},f=ae({},d,{value:void 0}),rt("invalid",r);break;case"textarea":Ys(r,d),f=Ta(r,d),rt("invalid",r);break;default:f=d}Aa(l,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var D=A[g];g==="style"?Ca(r,D):g==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&Sa(r,D)):g==="children"?typeof D=="string"?(l!=="textarea"||D!=="")&&ui(r,D):typeof D=="number"&&ui(r,""+D):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?D!=null&&g==="onScroll"&&rt("scroll",r):D!=null&&K(r,g,D,w))}switch(l){case"input":le(r),au(r,d,!1);break;case"textarea":le(r),Ia(r);break;case"option":d.value!=null&&r.setAttribute("value",""+Ne(d.value));break;case"select":r.multiple=!!d.multiple,g=d.value,g!=null?br(r,!!d.multiple,g,!1):d.defaultValue!=null&&br(r,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Lu)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Kt(s),null;case 6:if(r&&s.stateNode!=null)Vy(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=Is(rl.current),Is(gr.current),$u(s)){if(d=s.stateNode,l=s.memoizedProps,d[mr]=s,(g=d.nodeValue!==l)&&(r=Tn,r!==null))switch(r.tag){case 3:Vu(d.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Vu(d.nodeValue,l,(r.mode&1)!==0)}g&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[mr]=s,s.stateNode=d}return Kt(s),null;case 13:if(it(ct),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(lt&&In!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Fg(),ko(),s.flags|=98560,g=!1;else if(g=$u(s),d!==null&&d.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[mr]=s}else ko(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Kt(s),g=!1}else Yn!==null&&(Sf(Yn),Yn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(ct.current&1)!==0?Pt===0&&(Pt=3):Rf())),s.updateQueue!==null&&(s.flags|=4),Kt(s),null);case 4:return Oo(),ff(r,s),r===null&&Ya(s.stateNode.containerInfo),Kt(s),null;case 10:return Uh(s.type._context),Kt(s),null;case 17:return un(s.type)&&Fu(),Kt(s),null;case 19:if(it(ct),g=s.memoizedState,g===null)return Kt(s),null;if(d=(s.flags&128)!==0,w=g.rendering,w===null)if(d)ll(g,!1);else{if(Pt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=Qu(r),w!==null){for(s.flags|=128,ll(g,!1),d=w.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)g=l,r=d,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return et(ct,ct.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ze()>Fo&&(s.flags|=128,d=!0,ll(g,!1),s.lanes=4194304)}else{if(!d)if(r=Qu(w),r!==null){if(s.flags|=128,d=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),ll(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!lt)return Kt(s),null}else 2*Ze()-g.renderingStartTime>Fo&&l!==1073741824&&(s.flags|=128,d=!0,ll(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(l=g.last,l!==null?l.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ze(),s.sibling=null,l=ct.current,et(ct,d?l&1|2:l&1),s):(Kt(s),null);case 22:case 23:return Cf(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(Sn&1073741824)!==0&&(Kt(s),s.subtreeFlags&6&&(s.flags|=8192)):Kt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function k1(r,s){switch(Oh(s),s.tag){case 1:return un(s.type)&&Fu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Oo(),it(ln),it(Wt),Gh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Hh(s),null;case 13:if(it(ct),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ko()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return it(ct),null;case 4:return Oo(),null;case 10:return Uh(s.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var ic=!1,Qt=!1,b1=typeof WeakSet=="function"?WeakSet:Set,he=null;function Lo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){pt(r,s,d)}else l.current=null}function pf(r,s,l){try{l()}catch(d){pt(r,s,d)}}var Ly=!1;function N1(r,s){if(xh=yi,r=pg(),yh(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var f=d.anchorOffset,g=d.focusNode;d=d.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var w=0,A=-1,D=-1,W=0,te=0,ne=r,Z=null;t:for(;;){for(var ue;ne!==l||f!==0&&ne.nodeType!==3||(A=w+f),ne!==g||d!==0&&ne.nodeType!==3||(D=w+d),ne.nodeType===3&&(w+=ne.nodeValue.length),(ue=ne.firstChild)!==null;)Z=ne,ne=ue;for(;;){if(ne===r)break t;if(Z===l&&++W===f&&(A=w),Z===g&&++te===d&&(D=w),(ue=ne.nextSibling)!==null)break;ne=Z,Z=ne.parentNode}ne=ue}l=A===-1||D===-1?null:{start:A,end:D}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ch={focusedElem:r,selectionRange:l},yi=!1,he=s;he!==null;)if(s=he,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,he=r;else for(;he!==null;){s=he;try{var me=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ge=me.memoizedProps,vt=me.memoizedState,z=s.stateNode,L=z.getSnapshotBeforeUpdate(s.elementType===s.type?ge:Xn(s.type,ge),vt);z.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var q=s.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ie){pt(s,s.return,ie)}if(r=s.sibling,r!==null){r.return=s.return,he=r;break}he=s.return}return me=Ly,Ly=!1,me}function ul(r,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&pf(s,l,g)}f=f.next}while(f!==d)}}function sc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function mf(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function My(r){var s=r.alternate;s!==null&&(r.alternate=null,My(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[mr],delete s[Ja],delete s[kh],delete s[p1],delete s[m1])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Fy(r){return r.tag===5||r.tag===3||r.tag===4}function jy(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Fy(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function gf(r,s,l){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Lu));else if(d!==4&&(r=r.child,r!==null))for(gf(r,s,l),r=r.sibling;r!==null;)gf(r,s,l),r=r.sibling}function yf(r,s,l){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(yf(r,s,l),r=r.sibling;r!==null;)yf(r,s,l),r=r.sibling}var zt=null,Jn=!1;function Ci(r,s,l){for(l=l.child;l!==null;)Uy(r,s,l),l=l.sibling}function Uy(r,s,l){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(ds,l)}catch{}switch(l.tag){case 5:Qt||Lo(l,s);case 6:var d=zt,f=Jn;zt=null,Ci(r,s,l),zt=d,Jn=f,zt!==null&&(Jn?(r=zt,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):zt.removeChild(l.stateNode));break;case 18:zt!==null&&(Jn?(r=zt,l=l.stateNode,r.nodeType===8?Ph(r.parentNode,l):r.nodeType===1&&Ph(r,l),Gn(r)):Ph(zt,l.stateNode));break;case 4:d=zt,f=Jn,zt=l.stateNode.containerInfo,Jn=!0,Ci(r,s,l),zt=d,Jn=f;break;case 0:case 11:case 14:case 15:if(!Qt&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&pf(l,s,w),f=f.next}while(f!==d)}Ci(r,s,l);break;case 1:if(!Qt&&(Lo(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(A){pt(l,s,A)}Ci(r,s,l);break;case 21:Ci(r,s,l);break;case 22:l.mode&1?(Qt=(d=Qt)||l.memoizedState!==null,Ci(r,s,l),Qt=d):Ci(r,s,l);break;default:Ci(r,s,l)}}function zy(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new b1),s.forEach(function(d){var f=z1.bind(null,r,d);l.has(d)||(l.add(d),d.then(f,f))})}}function Zn(r,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var f=l[d];try{var g=r,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:zt=A.stateNode,Jn=!1;break e;case 3:zt=A.stateNode.containerInfo,Jn=!0;break e;case 4:zt=A.stateNode.containerInfo,Jn=!0;break e}A=A.return}if(zt===null)throw Error(t(160));Uy(g,w,f),zt=null,Jn=!1;var D=f.alternate;D!==null&&(D.return=null),f.return=null}catch(W){pt(f,s,W)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)By(s,r),s=s.sibling}function By(r,s){var l=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Zn(s,r),vr(r),d&4){try{ul(3,r,r.return),sc(3,r)}catch(ge){pt(r,r.return,ge)}try{ul(5,r,r.return)}catch(ge){pt(r,r.return,ge)}}break;case 1:Zn(s,r),vr(r),d&512&&l!==null&&Lo(l,l.return);break;case 5:if(Zn(s,r),vr(r),d&512&&l!==null&&Lo(l,l.return),r.flags&32){var f=r.stateNode;try{ui(f,"")}catch(ge){pt(r,r.return,ge)}}if(d&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=l!==null?l.memoizedProps:g,A=r.type,D=r.updateQueue;if(r.updateQueue=null,D!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&li(f,g),Pa(A,w);var W=Pa(A,g);for(w=0;w<D.length;w+=2){var te=D[w],ne=D[w+1];te==="style"?Ca(f,ne):te==="dangerouslySetInnerHTML"?Sa(f,ne):te==="children"?ui(f,ne):K(f,te,ne,W)}switch(A){case"input":Ea(f,g);break;case"textarea":Xs(f,g);break;case"select":var Z=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ue=g.value;ue!=null?br(f,!!g.multiple,ue,!1):Z!==!!g.multiple&&(g.defaultValue!=null?br(f,!!g.multiple,g.defaultValue,!0):br(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ja]=g}catch(ge){pt(r,r.return,ge)}}break;case 6:if(Zn(s,r),vr(r),d&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ge){pt(r,r.return,ge)}}break;case 3:if(Zn(s,r),vr(r),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Gn(s.containerInfo)}catch(ge){pt(r,r.return,ge)}break;case 4:Zn(s,r),vr(r);break;case 13:Zn(s,r),vr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(wf=Ze())),d&4&&zy(r);break;case 22:if(te=l!==null&&l.memoizedState!==null,r.mode&1?(Qt=(W=Qt)||te,Zn(s,r),Qt=W):Zn(s,r),vr(r),d&8192){if(W=r.memoizedState!==null,(r.stateNode.isHidden=W)&&!te&&(r.mode&1)!==0)for(he=r,te=r.child;te!==null;){for(ne=he=te;he!==null;){switch(Z=he,ue=Z.child,Z.tag){case 0:case 11:case 14:case 15:ul(4,Z,Z.return);break;case 1:Lo(Z,Z.return);var me=Z.stateNode;if(typeof me.componentWillUnmount=="function"){d=Z,l=Z.return;try{s=d,me.props=s.memoizedProps,me.state=s.memoizedState,me.componentWillUnmount()}catch(ge){pt(d,l,ge)}}break;case 5:Lo(Z,Z.return);break;case 22:if(Z.memoizedState!==null){Hy(ne);continue}}ue!==null?(ue.return=Z,he=ue):Hy(ne)}te=te.sibling}e:for(te=null,ne=r;;){if(ne.tag===5){if(te===null){te=ne;try{f=ne.stateNode,W?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=ne.stateNode,D=ne.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null,A.style.display=xa("display",w))}catch(ge){pt(r,r.return,ge)}}}else if(ne.tag===6){if(te===null)try{ne.stateNode.nodeValue=W?"":ne.memoizedProps}catch(ge){pt(r,r.return,ge)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===r)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===r)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===r)break e;te===ne&&(te=null),ne=ne.return}te===ne&&(te=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:Zn(s,r),vr(r),d&4&&zy(r);break;case 21:break;default:Zn(s,r),vr(r)}}function vr(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(Fy(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(ui(f,""),d.flags&=-33);var g=jy(r);yf(r,g,f);break;case 3:case 4:var w=d.stateNode.containerInfo,A=jy(r);gf(r,A,w);break;default:throw Error(t(161))}}catch(D){pt(r,r.return,D)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function D1(r,s,l){he=r,$y(r)}function $y(r,s,l){for(var d=(r.mode&1)!==0;he!==null;){var f=he,g=f.child;if(f.tag===22&&d){var w=f.memoizedState!==null||ic;if(!w){var A=f.alternate,D=A!==null&&A.memoizedState!==null||Qt;A=ic;var W=Qt;if(ic=w,(Qt=D)&&!W)for(he=f;he!==null;)w=he,D=w.child,w.tag===22&&w.memoizedState!==null?Wy(f):D!==null?(D.return=w,he=D):Wy(f);for(;g!==null;)he=g,$y(g),g=g.sibling;he=f,ic=A,Qt=W}qy(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,he=g):qy(r)}}function qy(r){for(;he!==null;){var s=he;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Qt||sc(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Qt)if(l===null)d.componentDidMount();else{var f=s.elementType===s.type?l.memoizedProps:Xn(s.type,l.memoizedProps);d.componentDidUpdate(f,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Hg(s,g,d);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Hg(s,w,l)}break;case 5:var A=s.stateNode;if(l===null&&s.flags&4){l=A;var D=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&l.focus();break;case"img":D.src&&(l.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var W=s.alternate;if(W!==null){var te=W.memoizedState;if(te!==null){var ne=te.dehydrated;ne!==null&&Gn(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Qt||s.flags&512&&mf(s)}catch(Z){pt(s,s.return,Z)}}if(s===r){he=null;break}if(l=s.sibling,l!==null){l.return=s.return,he=l;break}he=s.return}}function Hy(r){for(;he!==null;){var s=he;if(s===r){he=null;break}var l=s.sibling;if(l!==null){l.return=s.return,he=l;break}he=s.return}}function Wy(r){for(;he!==null;){var s=he;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{sc(4,s)}catch(D){pt(s,l,D)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var f=s.return;try{d.componentDidMount()}catch(D){pt(s,f,D)}}var g=s.return;try{mf(s)}catch(D){pt(s,g,D)}break;case 5:var w=s.return;try{mf(s)}catch(D){pt(s,w,D)}}}catch(D){pt(s,s.return,D)}if(s===r){he=null;break}var A=s.sibling;if(A!==null){A.return=s.return,he=A;break}he=s.return}}var O1=Math.ceil,oc=J.ReactCurrentDispatcher,vf=J.ReactCurrentOwner,Vn=J.ReactCurrentBatchConfig,We=0,Vt=null,Et=null,Bt=0,Sn=0,Mo=Ei(0),Pt=0,cl=null,xs=0,ac=0,_f=0,dl=null,dn=null,wf=0,Fo=1/0,Wr=null,lc=!1,Ef=null,Ri=null,uc=!1,Ai=null,cc=0,hl=0,Tf=null,dc=-1,hc=0;function sn(){return(We&6)!==0?Ze():dc!==-1?dc:dc=Ze()}function Pi(r){return(r.mode&1)===0?1:(We&2)!==0&&Bt!==0?Bt&-Bt:y1.transition!==null?(hc===0&&(hc=fs()),hc):(r=$e,r!==0||(r=window.event,r=r===void 0?16:Ua(r.type)),r)}function er(r,s,l,d){if(50<hl)throw hl=0,Tf=null,Error(t(185));fi(r,l,d),((We&2)===0||r!==Vt)&&(r===Vt&&((We&2)===0&&(ac|=l),Pt===4&&ki(r,Bt)),hn(r,d),l===1&&We===0&&(s.mode&1)===0&&(Fo=Ze()+500,Uu&&Ii()))}function hn(r,s){var l=r.callbackNode;Or(r,s);var d=hs(r,r===Vt?Bt:0);if(d===0)l!==null&&Va(l),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(l!=null&&Va(l),s===1)r.tag===0?g1(Ky.bind(null,r)):Dg(Ky.bind(null,r)),h1(function(){(We&6)===0&&Ii()}),l=null;else{switch(mi(d)){case 1:l=cs;break;case 4:l=ci;break;case 16:l=An;break;case 536870912:l=hu;break;default:l=An}l=nv(l,Gy.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function Gy(r,s){if(dc=-1,hc=0,(We&6)!==0)throw Error(t(327));var l=r.callbackNode;if(jo()&&r.callbackNode!==l)return null;var d=hs(r,r===Vt?Bt:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=fc(r,d);else{s=d;var f=We;We|=2;var g=Yy();(Vt!==r||Bt!==s)&&(Wr=null,Fo=Ze()+500,Rs(r,s));do try{M1();break}catch(A){Qy(r,A)}while(!0);jh(),oc.current=g,We=f,Et!==null?s=0:(Vt=null,Bt=0,s=Pt)}if(s!==0){if(s===2&&(f=_n(r),f!==0&&(d=f,s=If(r,f))),s===1)throw l=cl,Rs(r,0),ki(r,d),hn(r,Ze()),l;if(s===6)ki(r,d);else{if(f=r.current.alternate,(d&30)===0&&!V1(f)&&(s=fc(r,d),s===2&&(g=_n(r),g!==0&&(d=g,s=If(r,g))),s===1))throw l=cl,Rs(r,0),ki(r,d),hn(r,Ze()),l;switch(r.finishedWork=f,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:As(r,dn,Wr);break;case 3:if(ki(r,d),(d&130023424)===d&&(s=wf+500-Ze(),10<s)){if(hs(r,0)!==0)break;if(f=r.suspendedLanes,(f&d)!==d){sn(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Ah(As.bind(null,r,dn,Wr),s);break}As(r,dn,Wr);break;case 4:if(ki(r,d),(d&4194240)===d)break;for(s=r.eventTimes,f=-1;0<d;){var w=31-tn(d);g=1<<w,w=s[w],w>f&&(f=w),d&=~g}if(d=f,d=Ze()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*O1(d/1960))-d,10<d){r.timeoutHandle=Ah(As.bind(null,r,dn,Wr),d);break}As(r,dn,Wr);break;case 5:As(r,dn,Wr);break;default:throw Error(t(329))}}}return hn(r,Ze()),r.callbackNode===l?Gy.bind(null,r):null}function If(r,s){var l=dl;return r.current.memoizedState.isDehydrated&&(Rs(r,s).flags|=256),r=fc(r,s),r!==2&&(s=dn,dn=l,s!==null&&Sf(s)),r}function Sf(r){dn===null?dn=r:dn.push.apply(dn,r)}function V1(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var f=l[d],g=f.getSnapshot;f=f.value;try{if(!Qn(g(),f))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ki(r,s){for(s&=~_f,s&=~ac,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-tn(s),d=1<<l;r[l]=-1,s&=~d}}function Ky(r){if((We&6)!==0)throw Error(t(327));jo();var s=hs(r,0);if((s&1)===0)return hn(r,Ze()),null;var l=fc(r,s);if(r.tag!==0&&l===2){var d=_n(r);d!==0&&(s=d,l=If(r,d))}if(l===1)throw l=cl,Rs(r,0),ki(r,s),hn(r,Ze()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,As(r,dn,Wr),hn(r,Ze()),null}function xf(r,s){var l=We;We|=1;try{return r(s)}finally{We=l,We===0&&(Fo=Ze()+500,Uu&&Ii())}}function Cs(r){Ai!==null&&Ai.tag===0&&(We&6)===0&&jo();var s=We;We|=1;var l=Vn.transition,d=$e;try{if(Vn.transition=null,$e=1,r)return r()}finally{$e=d,Vn.transition=l,We=s,(We&6)===0&&Ii()}}function Cf(){Sn=Mo.current,it(Mo)}function Rs(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,d1(l)),Et!==null)for(l=Et.return;l!==null;){var d=l;switch(Oh(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Fu();break;case 3:Oo(),it(ln),it(Wt),Gh();break;case 5:Hh(d);break;case 4:Oo();break;case 13:it(ct);break;case 19:it(ct);break;case 10:Uh(d.type._context);break;case 22:case 23:Cf()}l=l.return}if(Vt=r,Et=r=bi(r.current,null),Bt=Sn=s,Pt=0,cl=null,_f=ac=xs=0,dn=dl=null,Ts!==null){for(s=0;s<Ts.length;s++)if(l=Ts[s],d=l.interleaved,d!==null){l.interleaved=null;var f=d.next,g=l.pending;if(g!==null){var w=g.next;g.next=f,d.next=w}l.pending=d}Ts=null}return r}function Qy(r,s){do{var l=Et;try{if(jh(),Yu.current=ec,Xu){for(var d=dt.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}Xu=!1}if(Ss=0,Ot=At=dt=null,il=!1,sl=0,vf.current=null,l===null||l.return===null){Pt=1,cl=s,Et=null;break}e:{var g=r,w=l.return,A=l,D=s;if(s=Bt,A.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var W=D,te=A,ne=te.tag;if((te.mode&1)===0&&(ne===0||ne===11||ne===15)){var Z=te.alternate;Z?(te.updateQueue=Z.updateQueue,te.memoizedState=Z.memoizedState,te.lanes=Z.lanes):(te.updateQueue=null,te.memoizedState=null)}var ue=wy(w);if(ue!==null){ue.flags&=-257,Ey(ue,w,A,g,s),ue.mode&1&&_y(g,W,s),s=ue,D=W;var me=s.updateQueue;if(me===null){var ge=new Set;ge.add(D),s.updateQueue=ge}else me.add(D);break e}else{if((s&1)===0){_y(g,W,s),Rf();break e}D=Error(t(426))}}else if(lt&&A.mode&1){var vt=wy(w);if(vt!==null){(vt.flags&65536)===0&&(vt.flags|=256),Ey(vt,w,A,g,s),Mh(Vo(D,A));break e}}g=D=Vo(D,A),Pt!==4&&(Pt=2),dl===null?dl=[g]:dl.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var z=yy(g,D,s);qg(g,z);break e;case 1:A=D;var L=g.type,q=g.stateNode;if((g.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(Ri===null||!Ri.has(q)))){g.flags|=65536,s&=-s,g.lanes|=s;var ie=vy(g,A,s);qg(g,ie);break e}}g=g.return}while(g!==null)}Jy(l)}catch(we){s=we,Et===l&&l!==null&&(Et=l=l.return);continue}break}while(!0)}function Yy(){var r=oc.current;return oc.current=ec,r===null?ec:r}function Rf(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Vt===null||(xs&268435455)===0&&(ac&268435455)===0||ki(Vt,Bt)}function fc(r,s){var l=We;We|=2;var d=Yy();(Vt!==r||Bt!==s)&&(Wr=null,Rs(r,s));do try{L1();break}catch(f){Qy(r,f)}while(!0);if(jh(),We=l,oc.current=d,Et!==null)throw Error(t(261));return Vt=null,Bt=0,Pt}function L1(){for(;Et!==null;)Xy(Et)}function M1(){for(;Et!==null&&!cu();)Xy(Et)}function Xy(r){var s=tv(r.alternate,r,Sn);r.memoizedProps=r.pendingProps,s===null?Jy(r):Et=s,vf.current=null}function Jy(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=P1(l,s,Sn),l!==null){Et=l;return}}else{if(l=k1(l,s),l!==null){l.flags&=32767,Et=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Pt=6,Et=null;return}}if(s=s.sibling,s!==null){Et=s;return}Et=s=r}while(s!==null);Pt===0&&(Pt=5)}function As(r,s,l){var d=$e,f=Vn.transition;try{Vn.transition=null,$e=1,F1(r,s,l,d)}finally{Vn.transition=f,$e=d}return null}function F1(r,s,l,d){do jo();while(Ai!==null);if((We&6)!==0)throw Error(t(327));l=r.finishedWork;var f=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=l.lanes|l.childLanes;if(Xe(r,g),r===Vt&&(Et=Vt=null,Bt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||uc||(uc=!0,nv(An,function(){return jo(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=Vn.transition,Vn.transition=null;var w=$e;$e=1;var A=We;We|=4,vf.current=null,N1(r,l),By(l,r),i1(Ch),yi=!!xh,Ch=xh=null,r.current=l,D1(l),uh(),We=A,$e=w,Vn.transition=g}else r.current=l;if(uc&&(uc=!1,Ai=r,cc=f),g=r.pendingLanes,g===0&&(Ri=null),fu(l.stateNode),hn(r,Ze()),s!==null)for(d=r.onRecoverableError,l=0;l<s.length;l++)f=s[l],d(f.value,{componentStack:f.stack,digest:f.digest});if(lc)throw lc=!1,r=Ef,Ef=null,r;return(cc&1)!==0&&r.tag!==0&&jo(),g=r.pendingLanes,(g&1)!==0?r===Tf?hl++:(hl=0,Tf=r):hl=0,Ii(),null}function jo(){if(Ai!==null){var r=mi(cc),s=Vn.transition,l=$e;try{if(Vn.transition=null,$e=16>r?16:r,Ai===null)var d=!1;else{if(r=Ai,Ai=null,cc=0,(We&6)!==0)throw Error(t(331));var f=We;for(We|=4,he=r.current;he!==null;){var g=he,w=g.child;if((he.flags&16)!==0){var A=g.deletions;if(A!==null){for(var D=0;D<A.length;D++){var W=A[D];for(he=W;he!==null;){var te=he;switch(te.tag){case 0:case 11:case 15:ul(8,te,g)}var ne=te.child;if(ne!==null)ne.return=te,he=ne;else for(;he!==null;){te=he;var Z=te.sibling,ue=te.return;if(My(te),te===W){he=null;break}if(Z!==null){Z.return=ue,he=Z;break}he=ue}}}var me=g.alternate;if(me!==null){var ge=me.child;if(ge!==null){me.child=null;do{var vt=ge.sibling;ge.sibling=null,ge=vt}while(ge!==null)}}he=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,he=w;else e:for(;he!==null;){if(g=he,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ul(9,g,g.return)}var z=g.sibling;if(z!==null){z.return=g.return,he=z;break e}he=g.return}}var L=r.current;for(he=L;he!==null;){w=he;var q=w.child;if((w.subtreeFlags&2064)!==0&&q!==null)q.return=w,he=q;else e:for(w=L;he!==null;){if(A=he,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:sc(9,A)}}catch(we){pt(A,A.return,we)}if(A===w){he=null;break e}var ie=A.sibling;if(ie!==null){ie.return=A.return,he=ie;break e}he=A.return}}if(We=f,Ii(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(ds,r)}catch{}d=!0}return d}finally{$e=l,Vn.transition=s}}return!1}function Zy(r,s,l){s=Vo(l,s),s=yy(r,s,1),r=xi(r,s,1),s=sn(),r!==null&&(fi(r,1,s),hn(r,s))}function pt(r,s,l){if(r.tag===3)Zy(r,r,l);else for(;s!==null;){if(s.tag===3){Zy(s,r,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ri===null||!Ri.has(d))){r=Vo(l,r),r=vy(s,r,1),s=xi(s,r,1),r=sn(),s!==null&&(fi(s,1,r),hn(s,r));break}}s=s.return}}function j1(r,s,l){var d=r.pingCache;d!==null&&d.delete(s),s=sn(),r.pingedLanes|=r.suspendedLanes&l,Vt===r&&(Bt&l)===l&&(Pt===4||Pt===3&&(Bt&130023424)===Bt&&500>Ze()-wf?Rs(r,0):_f|=l),hn(r,s)}function ev(r,s){s===0&&((r.mode&1)===0?s=1:(s=ao,ao<<=1,(ao&130023424)===0&&(ao=4194304)));var l=sn();r=$r(r,s),r!==null&&(fi(r,s,l),hn(r,l))}function U1(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),ev(r,l)}function z1(r,s){var l=0;switch(r.tag){case 13:var d=r.stateNode,f=r.memoizedState;f!==null&&(l=f.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),ev(r,l)}var tv;tv=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||ln.current)cn=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return cn=!1,A1(r,s,l);cn=(r.flags&131072)!==0}else cn=!1,lt&&(s.flags&1048576)!==0&&Og(s,Bu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;rc(r,s),r=s.pendingProps;var f=Ro(s,Wt.current);Do(s,l),f=Yh(null,s,d,r,f,l);var g=Xh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,un(d)?(g=!0,ju(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,$h(s),f.updater=tc,s.stateNode=f,f._reactInternals=s,rf(s,d,r,l),s=lf(null,s,d,!0,g,l)):(s.tag=0,lt&&g&&Dh(s),rn(null,s,f,l),s=s.child),s;case 16:d=s.elementType;e:{switch(rc(r,s),r=s.pendingProps,f=d._init,d=f(d._payload),s.type=d,f=s.tag=$1(d),r=Xn(d,r),f){case 0:s=af(null,s,d,r,l);break e;case 1:s=Ry(null,s,d,r,l);break e;case 11:s=Ty(null,s,d,r,l);break e;case 14:s=Iy(null,s,d,Xn(d.type,r),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Xn(d,f),af(r,s,d,f,l);case 1:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Xn(d,f),Ry(r,s,d,f,l);case 3:e:{if(Ay(s),r===null)throw Error(t(387));d=s.pendingProps,g=s.memoizedState,f=g.element,$g(r,s),Ku(s,d,null,l);var w=s.memoizedState;if(d=w.element,g.isDehydrated)if(g={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=Vo(Error(t(423)),s),s=Py(r,s,d,l,f);break e}else if(d!==f){f=Vo(Error(t(424)),s),s=Py(r,s,d,l,f);break e}else for(In=wi(s.stateNode.containerInfo.firstChild),Tn=s,lt=!0,Yn=null,l=zg(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ko(),d===f){s=Hr(r,s,l);break e}rn(r,s,d,l)}s=s.child}return s;case 5:return Wg(s),r===null&&Lh(s),d=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,Rh(d,f)?w=null:g!==null&&Rh(d,g)&&(s.flags|=32),Cy(r,s),rn(r,s,w,l),s.child;case 6:return r===null&&Lh(s),null;case 13:return ky(r,s,l);case 4:return qh(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=bo(s,null,d,l):rn(r,s,d,l),s.child;case 11:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Xn(d,f),Ty(r,s,d,f,l);case 7:return rn(r,s,s.pendingProps,l),s.child;case 8:return rn(r,s,s.pendingProps.children,l),s.child;case 12:return rn(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,et(Hu,d._currentValue),d._currentValue=w,g!==null)if(Qn(g.value,w)){if(g.children===f.children&&!ln.current){s=Hr(r,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var D=A.firstContext;D!==null;){if(D.context===d){if(g.tag===1){D=qr(-1,l&-l),D.tag=2;var W=g.updateQueue;if(W!==null){W=W.shared;var te=W.pending;te===null?D.next=D:(D.next=te.next,te.next=D),W.pending=D}}g.lanes|=l,D=g.alternate,D!==null&&(D.lanes|=l),zh(g.return,l,s),A.lanes|=l;break}D=D.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=l,A=w.alternate,A!==null&&(A.lanes|=l),zh(w,l,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}rn(r,s,f.children,l),s=s.child}return s;case 9:return f=s.type,d=s.pendingProps.children,Do(s,l),f=Dn(f),d=d(f),s.flags|=1,rn(r,s,d,l),s.child;case 14:return d=s.type,f=Xn(d,s.pendingProps),f=Xn(d.type,f),Iy(r,s,d,f,l);case 15:return Sy(r,s,s.type,s.pendingProps,l);case 17:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Xn(d,f),rc(r,s),s.tag=1,un(d)?(r=!0,ju(s)):r=!1,Do(s,l),my(s,d,f),rf(s,d,f,l),lf(null,s,d,!0,r,l);case 19:return Ny(r,s,l);case 22:return xy(r,s,l)}throw Error(t(156,s.tag))};function nv(r,s){return so(r,s)}function B1(r,s,l,d){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(r,s,l,d){return new B1(r,s,l,d)}function Af(r){return r=r.prototype,!(!r||!r.isReactComponent)}function $1(r){if(typeof r=="function")return Af(r)?1:0;if(r!=null){if(r=r.$$typeof,r===j)return 11;if(r===ut)return 14}return 2}function bi(r,s){var l=r.alternate;return l===null?(l=Ln(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function pc(r,s,l,d,f,g){var w=2;if(d=r,typeof r=="function")Af(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case C:return Ps(l.children,f,g,s);case S:w=8,f|=8;break;case x:return r=Ln(12,l,s,f|2),r.elementType=x,r.lanes=g,r;case k:return r=Ln(13,l,s,f),r.elementType=k,r.lanes=g,r;case tt:return r=Ln(19,l,s,f),r.elementType=tt,r.lanes=g,r;case Ue:return mc(l,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:w=10;break e;case V:w=9;break e;case j:w=11;break e;case ut:w=14;break e;case gt:w=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Ln(w,l,s,f),s.elementType=r,s.type=d,s.lanes=g,s}function Ps(r,s,l,d){return r=Ln(7,r,d,s),r.lanes=l,r}function mc(r,s,l,d){return r=Ln(22,r,d,s),r.elementType=Ue,r.lanes=l,r.stateNode={isHidden:!1},r}function Pf(r,s,l){return r=Ln(6,r,null,s),r.lanes=l,r}function kf(r,s,l){return s=Ln(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function q1(r,s,l,d,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hi(0),this.expirationTimes=hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bf(r,s,l,d,f,g,w,A,D){return r=new q1(r,s,l,A,D),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Ln(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},$h(g),r}function H1(r,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:d==null?null:""+d,children:r,containerInfo:s,implementation:l}}function rv(r){if(!r)return Ti;r=r._reactInternals;e:{if(Bn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(un(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(un(l))return bg(r,l,s)}return s}function iv(r,s,l,d,f,g,w,A,D){return r=bf(l,d,!0,r,f,g,w,A,D),r.context=rv(null),l=r.current,d=sn(),f=Pi(l),g=qr(d,f),g.callback=s??null,xi(l,g,f),r.current.lanes=f,fi(r,f,d),hn(r,d),r}function gc(r,s,l,d){var f=s.current,g=sn(),w=Pi(f);return l=rv(l),s.context===null?s.context=l:s.pendingContext=l,s=qr(g,w),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=xi(f,s,w),r!==null&&(er(r,f,w,g),Gu(r,f,w)),w}function yc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function sv(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function Nf(r,s){sv(r,s),(r=r.alternate)&&sv(r,s)}function W1(){return null}var ov=typeof reportError=="function"?reportError:function(r){console.error(r)};function Df(r){this._internalRoot=r}vc.prototype.render=Df.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));gc(r,s,null,null)},vc.prototype.unmount=Df.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Cs(function(){gc(null,r,null,null)}),s[jr]=null}};function vc(r){this._internalRoot=r}vc.prototype.unstable_scheduleHydration=function(r){if(r){var s=vu();r={blockedOn:null,target:r,priority:s};for(var l=0;l<dr.length&&s!==0&&s<dr[l].priority;l++);dr.splice(l,0,r),l===0&&Eu(r)}};function Of(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function _c(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function av(){}function G1(r,s,l,d,f){if(f){if(typeof d=="function"){var g=d;d=function(){var W=yc(w);g.call(W)}}var w=iv(s,d,r,0,null,!1,!1,"",av);return r._reactRootContainer=w,r[jr]=w.current,Ya(r.nodeType===8?r.parentNode:r),Cs(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof d=="function"){var A=d;d=function(){var W=yc(D);A.call(W)}}var D=bf(r,0,!1,null,null,!1,!1,"",av);return r._reactRootContainer=D,r[jr]=D.current,Ya(r.nodeType===8?r.parentNode:r),Cs(function(){gc(s,D,l,d)}),D}function wc(r,s,l,d,f){var g=l._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var A=f;f=function(){var D=yc(w);A.call(D)}}gc(s,w,r,f)}else w=G1(l,s,r,f,d);return yc(w)}gu=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=di(s.pendingLanes);l!==0&&(pi(s,l|1),hn(s,Ze()),(We&6)===0&&(Fo=Ze()+500,Ii()))}break;case 13:Cs(function(){var d=$r(r,1);if(d!==null){var f=sn();er(d,r,1,f)}}),Nf(r,1)}},lo=function(r){if(r.tag===13){var s=$r(r,134217728);if(s!==null){var l=sn();er(s,r,134217728,l)}Nf(r,134217728)}},yu=function(r){if(r.tag===13){var s=Pi(r),l=$r(r,s);if(l!==null){var d=sn();er(l,r,s,d)}Nf(r,s)}},vu=function(){return $e},_u=function(r,s){var l=$e;try{return $e=r,s()}finally{$e=l}},Zs=function(r,s,l){switch(s){case"input":if(Ea(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==r&&d.form===r.form){var f=Mu(d);if(!f)throw Error(t(90));_e(d),Ea(d,f)}}}break;case"textarea":Xs(r,l);break;case"select":s=l.value,s!=null&&br(r,!!l.multiple,s,!1)}},os=xf,ba=Cs;var K1={usingClientEntryPoint:!1,Events:[Za,xo,Mu,ur,ka,xf]},fl={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q1={bundleType:fl.bundleType,version:fl.version,rendererPackageName:fl.rendererPackageName,rendererConfig:fl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Oa(r),r===null?null:r.stateNode},findFiberByHostInstance:fl.findFiberByHostInstance||W1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{ds=Ec.inject(Q1),vn=Ec}catch{}}return fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K1,fn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(s))throw Error(t(200));return H1(r,s,null,l)},fn.createRoot=function(r,s){if(!Of(r))throw Error(t(299));var l=!1,d="",f=ov;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=bf(r,1,!1,null,null,l,!1,d,f),r[jr]=s.current,Ya(r.nodeType===8?r.parentNode:r),new Df(s)},fn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Oa(s),r=r===null?null:r.stateNode,r},fn.flushSync=function(r){return Cs(r)},fn.hydrate=function(r,s,l){if(!_c(s))throw Error(t(200));return wc(null,r,s,!0,l)},fn.hydrateRoot=function(r,s,l){if(!Of(r))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,f=!1,g="",w=ov;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=iv(s,null,r,1,l??null,f,!1,g,w),r[jr]=s.current,Ya(r),d)for(r=0;r<d.length;r++)l=d[r],f=l._getVersion,f=f(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,f]:s.mutableSourceEagerHydrationData.push(l,f);return new vc(s)},fn.render=function(r,s,l){if(!_c(s))throw Error(t(200));return wc(null,r,s,!1,l)},fn.unmountComponentAtNode=function(r){if(!_c(r))throw Error(t(40));return r._reactRootContainer?(Cs(function(){wc(null,null,r,!1,function(){r._reactRootContainer=null,r[jr]=null})}),!0):!1},fn.unstable_batchedUpdates=xf,fn.unstable_renderSubtreeIntoContainer=function(r,s,l,d){if(!_c(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return wc(r,s,l,!1,d)},fn.version="18.3.1-next-f1338f8080-20240426",fn}var mv;function S0(){if(mv)return Mf.exports;mv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Mf.exports=nI(),Mf.exports}var gv;function rI(){if(gv)return Tc;gv=1;var n=S0();return Tc.createRoot=n.createRoot,Tc.hydrateRoot=n.hydrateRoot,Tc}var iI=rI();const sI=Rd(iI);var ml={},yv;function oI(){if(yv)return ml;yv=1,Object.defineProperty(ml,"__esModule",{value:!0}),ml.parse=c,ml.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function c(E,b){const P=new a,M=E.length;if(M<2)return P;const O=(b==null?void 0:b.decode)||_;let $=0;do{const B=E.indexOf("=",$);if(B===-1)break;const K=E.indexOf(";",$),J=K===-1?M:K;if(B>J){$=E.lastIndexOf(";",B-1)+1;continue}const re=h(E,$,B),ee=p(E,B,re),C=E.slice(re,ee);if(P[C]===void 0){let S=h(E,B+1,J),x=p(E,J,S);const N=O(E.slice(S,x));P[C]=N}$=J+1}while($<M);return P}function h(E,b,P){do{const M=E.charCodeAt(b);if(M!==32&&M!==9)return b}while(++b<P);return P}function p(E,b,P){for(;b>P;){const M=E.charCodeAt(--b);if(M!==32&&M!==9)return b+1}return P}function y(E,b,P){const M=(P==null?void 0:P.encode)||encodeURIComponent;if(!n.test(E))throw new TypeError(`argument name is invalid: ${E}`);const O=M(b);if(!e.test(O))throw new TypeError(`argument val is invalid: ${b}`);let $=E+"="+O;if(!P)return $;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);$+="; Max-Age="+P.maxAge}if(P.domain){if(!t.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);$+="; Domain="+P.domain}if(P.path){if(!i.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);$+="; Path="+P.path}if(P.expires){if(!T(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);$+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&($+="; HttpOnly"),P.secure&&($+="; Secure"),P.partitioned&&($+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return $}function _(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function T(E){return o.call(E)==="[object Date]"}return ml}oI();var vv="popstate";function aI(n={}){function e(o,a){let{pathname:c="/",search:h="",hash:p=""}=$s(o.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),up("",{pathname:c,search:h,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(o,a){let c=o.document.querySelector("base"),h="";if(c&&c.getAttribute("href")){let p=o.location.href,y=p.indexOf("#");h=y===-1?p:p.slice(0,y)}return h+"#"+(typeof a=="string"?a:Dl(a))}function i(o,a){sr(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return uI(e,t,i,n)}function ht(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function sr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lI(){return Math.random().toString(36).substring(2,10)}function _v(n,e){return{usr:n.state,key:n.key,idx:e}}function up(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?$s(e):e,state:t,key:e&&e.key||i||lI()}}function Dl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function $s(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function uI(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,h="POP",p=null,y=_();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function _(){return(c.state||{idx:null}).idx}function T(){h="POP";let O=_(),$=O==null?null:O-y;y=O,p&&p({action:h,location:M.location,delta:$})}function E(O,$){h="PUSH";let B=up(M.location,O,$);t&&t(B,O),y=_()+1;let K=_v(B,y),J=M.createHref(B);try{c.pushState(K,"",J)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;o.location.assign(J)}a&&p&&p({action:h,location:M.location,delta:1})}function b(O,$){h="REPLACE";let B=up(M.location,O,$);t&&t(B,O),y=_();let K=_v(B,y),J=M.createHref(B);c.replaceState(K,"",J),a&&p&&p({action:h,location:M.location,delta:0})}function P(O){return cI(O)}let M={get action(){return h},get location(){return n(o,c)},listen(O){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(vv,T),p=O,()=>{o.removeEventListener(vv,T),p=null}},createHref(O){return e(o,O)},createURL:P,encodeLocation(O){let $=P(O);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:E,replace:b,go(O){return c.go(O)}};return M}function cI(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),ht(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:Dl(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function x0(n,e,t="/"){return dI(n,e,t,!1)}function dI(n,e,t,i){let o=typeof e=="string"?$s(e):e,a=ti(o.pathname||"/",t);if(a==null)return null;let c=C0(n);hI(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let y=II(a);h=EI(c[p],y,i)}return h}function C0(n,e=[],t=[],i=""){let o=(a,c,h)=>{let p={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(ht(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Xr([i,p.relativePath]),_=t.concat(p);a.children&&a.children.length>0&&(ht(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),C0(a.children,e,_,y)),!(a.path==null&&!a.index)&&e.push({path:y,score:_I(y,a.index),routesMeta:_})};return n.forEach((a,c)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))o(a,c);else for(let p of R0(a.path))o(a,c,p)}),e}function R0(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=R0(i.join("/")),h=[];return h.push(...c.map(p=>p===""?a:[a,p].join("/"))),o&&h.push(...c),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function hI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:wI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var fI=/^:[\w-]+$/,pI=3,mI=2,gI=1,yI=10,vI=-2,wv=n=>n==="*";function _I(n,e){let t=n.split("/"),i=t.length;return t.some(wv)&&(i+=vI),e&&(i+=mI),t.filter(o=>!wv(o)).reduce((o,a)=>o+(fI.test(a)?pI:a===""?gI:yI),i)}function wI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function EI(n,e,t=!1){let{routesMeta:i}=n,o={},a="/",c=[];for(let h=0;h<i.length;++h){let p=i[h],y=h===i.length-1,_=a==="/"?e:e.slice(a.length)||"/",T=Jc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},_),E=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=Jc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Xr([a,T.pathname]),pathnameBase:RI(Xr([a,T.pathnameBase])),route:E}),T.pathnameBase!=="/"&&(a=Xr([a,T.pathnameBase]))}return c}function Jc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=TI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((y,{paramName:_,isOptional:T},E)=>{if(_==="*"){let P=h[E]||"";c=a.slice(0,a.length-P.length).replace(/(.)\/+$/,"$1")}const b=h[E];return T&&!b?y[_]=void 0:y[_]=(b||"").replace(/%2F/g,"/"),y},{}),pathname:a,pathnameBase:c,pattern:n}}function TI(n,e=!1,t=!0){sr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(i.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function II(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return sr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function ti(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function SI(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?$s(n):n;return{pathname:t?t.startsWith("/")?t:xI(t,e):e,search:AI(i),hash:PI(o)}}function xI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Uf(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function CI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function A0(n){let e=CI(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function P0(n,e,t,i=!1){let o;typeof n=="string"?o=$s(n):(o={...n},ht(!o.pathname||!o.pathname.includes("?"),Uf("?","pathname","search",o)),ht(!o.pathname||!o.pathname.includes("#"),Uf("#","pathname","hash",o)),ht(!o.search||!o.search.includes("#"),Uf("#","search","hash",o)));let a=n===""||o.pathname==="",c=a?"/":o.pathname,h;if(c==null)h=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let E=c.split("/");for(;E[0]==="..";)E.shift(),T-=1;o.pathname=E.join("/")}h=T>=0?e[T]:"/"}let p=SI(o,h),y=c&&c!=="/"&&c.endsWith("/"),_=(a||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||_)&&(p.pathname+="/"),p}var Xr=n=>n.join("/").replace(/\/\/+/g,"/"),RI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),AI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,PI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function kI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var k0=["POST","PUT","PATCH","DELETE"];new Set(k0);var bI=["GET",...k0];new Set(bI);var ha=H.createContext(null);ha.displayName="DataRouter";var Ad=H.createContext(null);Ad.displayName="DataRouterState";var b0=H.createContext({isTransitioning:!1});b0.displayName="ViewTransition";var NI=H.createContext(new Map);NI.displayName="Fetchers";var DI=H.createContext(null);DI.displayName="Await";var Ar=H.createContext(null);Ar.displayName="Navigation";var Hl=H.createContext(null);Hl.displayName="Location";var Pr=H.createContext({outlet:null,matches:[],isDataRoute:!1});Pr.displayName="Route";var Wp=H.createContext(null);Wp.displayName="RouteError";function OI(n,{relative:e}={}){ht(Wl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=H.useContext(Ar),{hash:o,pathname:a,search:c}=Gl(n,{relative:e}),h=a;return t!=="/"&&(h=a==="/"?t:Xr([t,a])),i.createHref({pathname:h,search:c,hash:o})}function Wl(){return H.useContext(Hl)!=null}function qs(){return ht(Wl(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Hl).location}var N0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function D0(n){H.useContext(Ar).static||H.useLayoutEffect(n)}function Xi(){let{isDataRoute:n}=H.useContext(Pr);return n?KI():VI()}function VI(){ht(Wl(),"useNavigate() may be used only in the context of a <Router> component.");let n=H.useContext(ha),{basename:e,navigator:t}=H.useContext(Ar),{matches:i}=H.useContext(Pr),{pathname:o}=qs(),a=JSON.stringify(A0(i)),c=H.useRef(!1);return D0(()=>{c.current=!0}),H.useCallback((p,y={})=>{if(sr(c.current,N0),!c.current)return;if(typeof p=="number"){t.go(p);return}let _=P0(p,JSON.parse(a),o,y.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Xr([e,_.pathname])),(y.replace?t.replace:t.push)(_,y.state,y)},[e,t,a,o,n])}H.createContext(null);function LI(){let{matches:n}=H.useContext(Pr),e=n[n.length-1];return e?e.params:{}}function Gl(n,{relative:e}={}){let{matches:t}=H.useContext(Pr),{pathname:i}=qs(),o=JSON.stringify(A0(t));return H.useMemo(()=>P0(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function MI(n,e){return O0(n,e)}function O0(n,e,t,i){var $;ht(Wl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=H.useContext(Ar),{matches:a}=H.useContext(Pr),c=a[a.length-1],h=c?c.params:{},p=c?c.pathname:"/",y=c?c.pathnameBase:"/",_=c&&c.route;{let B=_&&_.path||"";V0(p,!_||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let T=qs(),E;if(e){let B=typeof e=="string"?$s(e):e;ht(y==="/"||(($=B.pathname)==null?void 0:$.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${B.pathname}" was given in the \`location\` prop.`),E=B}else E=T;let b=E.pathname||"/",P=b;if(y!=="/"){let B=y.replace(/^\//,"").split("/");P="/"+b.replace(/^\//,"").split("/").slice(B.length).join("/")}let M=x0(n,{pathname:P});sr(_||M!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),sr(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=BI(M&&M.map(B=>Object.assign({},B,{params:Object.assign({},h,B.params),pathname:Xr([y,o.encodeLocation?o.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?y:Xr([y,o.encodeLocation?o.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),a,t,i);return e&&O?H.createElement(Hl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},O):O}function FI(){let n=GI(),e=kI(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:a},"ErrorBoundary")," or"," ",H.createElement("code",{style:a},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,c)}var jI=H.createElement(FI,null),UI=class extends H.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?H.createElement(Pr.Provider,{value:this.props.routeContext},H.createElement(Wp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zI({routeContext:n,match:e,children:t}){let i=H.useContext(ha);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(Pr.Provider,{value:n},t)}function BI(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=t==null?void 0:t.errors;if(a!=null){let p=o.findIndex(y=>y.route.id&&(a==null?void 0:a[y.route.id])!==void 0);ht(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,h=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=p),y.route.id){let{loaderData:_,errors:T}=t,E=y.route.loader&&!_.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||E){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,y,_)=>{let T,E=!1,b=null,P=null;t&&(T=a&&y.route.id?a[y.route.id]:void 0,b=y.route.errorElement||jI,c&&(h<0&&_===0?(V0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,P=null):h===_&&(E=!0,P=y.route.hydrateFallbackElement||null)));let M=e.concat(o.slice(0,_+1)),O=()=>{let $;return T?$=b:E?$=P:y.route.Component?$=H.createElement(y.route.Component,null):y.route.element?$=y.route.element:$=p,H.createElement(zI,{match:y,routeContext:{outlet:p,matches:M,isDataRoute:t!=null},children:$})};return t&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?H.createElement(UI,{location:t.location,revalidation:t.revalidation,component:b,error:T,children:O(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):O()},null)}function Gp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $I(n){let e=H.useContext(ha);return ht(e,Gp(n)),e}function qI(n){let e=H.useContext(Ad);return ht(e,Gp(n)),e}function HI(n){let e=H.useContext(Pr);return ht(e,Gp(n)),e}function Kp(n){let e=HI(n),t=e.matches[e.matches.length-1];return ht(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function WI(){return Kp("useRouteId")}function GI(){var i;let n=H.useContext(Wp),e=qI("useRouteError"),t=Kp("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function KI(){let{router:n}=$I("useNavigate"),e=Kp("useNavigate"),t=H.useRef(!1);return D0(()=>{t.current=!0}),H.useCallback(async(o,a={})=>{sr(t.current,N0),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var Ev={};function V0(n,e,t){!e&&!Ev[n]&&(Ev[n]=!0,sr(!1,t))}H.memo(QI);function QI({routes:n,future:e,state:t}){return O0(n,void 0,t,e)}function Gr(n){ht(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function YI({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1}){ht(!Wl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),h=H.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof t=="string"&&(t=$s(t));let{pathname:p="/",search:y="",hash:_="",state:T=null,key:E="default"}=t,b=H.useMemo(()=>{let P=ti(p,c);return P==null?null:{location:{pathname:P,search:y,hash:_,state:T,key:E},navigationType:i}},[c,p,y,_,T,E,i]);return sr(b!=null,`<Router basename="${c}"> is not able to match the URL "${p}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:H.createElement(Ar.Provider,{value:h},H.createElement(Hl.Provider,{children:e,value:b}))}function XI({children:n,location:e}){return MI(cp(n),e)}function cp(n,e=[]){let t=[];return H.Children.forEach(n,(i,o)=>{if(!H.isValidElement(i))return;let a=[...e,o];if(i.type===H.Fragment){t.push.apply(t,cp(i.props.children,a));return}ht(i.type===Gr,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ht(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=cp(i.props.children,a)),t.push(c)}),t}var Vc="get",Lc="application/x-www-form-urlencoded";function Pd(n){return n!=null&&typeof n.tagName=="string"}function JI(n){return Pd(n)&&n.tagName.toLowerCase()==="button"}function ZI(n){return Pd(n)&&n.tagName.toLowerCase()==="form"}function eS(n){return Pd(n)&&n.tagName.toLowerCase()==="input"}function tS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function nS(n,e){return n.button===0&&(!e||e==="_self")&&!tS(n)}var Ic=null;function rS(){if(Ic===null)try{new FormData(document.createElement("form"),0),Ic=!1}catch{Ic=!0}return Ic}var iS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zf(n){return n!=null&&!iS.has(n)?(sr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lc}"`),null):n}function sS(n,e){let t,i,o,a,c;if(ZI(n)){let h=n.getAttribute("action");i=h?ti(h,e):null,t=n.getAttribute("method")||Vc,o=zf(n.getAttribute("enctype"))||Lc,a=new FormData(n)}else if(JI(n)||eS(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(i=p?ti(p,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||Vc,o=zf(n.getAttribute("formenctype"))||zf(h.getAttribute("enctype"))||Lc,a=new FormData(h,n),!rS()){let{name:y,type:_,value:T}=n;if(_==="image"){let E=y?`${y}.`:"";a.append(`${E}x`,"0"),a.append(`${E}y`,"0")}else y&&a.append(y,T)}}else{if(Pd(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Vc,i=null,o=Lc,c=n}return a&&o==="text/plain"&&(c=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:c}}function Qp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function oS(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function aS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function lS(n,e,t){let i=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await oS(a,t);return c.links?c.links():[]}return[]}));return hS(i.flat(1).filter(aS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Tv(n,e,t,i,o,a){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,h=(p,y)=>{var _;return t[y].pathname!==p.pathname||((_=t[y].route.path)==null?void 0:_.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,y)=>c(p,y)||h(p,y)):a==="data"?e.filter((p,y)=>{var T;let _=i.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,y)||h(p,y))return!0;if(p.route.shouldRevalidate){let E=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function uS(n,e,{includeHydrateFallback:t}={}){return cS(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function cS(n){return[...new Set(n)]}function dS(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function hS(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let a=JSON.stringify(dS(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fS=new Set([100,101,204,205]);function pS(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&ti(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function L0(){let n=H.useContext(ha);return Qp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function mS(){let n=H.useContext(Ad);return Qp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Yp=H.createContext(void 0);Yp.displayName="FrameworkContext";function M0(){let n=H.useContext(Yp);return Qp(n,"You must render this element inside a <HydratedRouter> element"),n}function gS(n,e){let t=H.useContext(Yp),[i,o]=H.useState(!1),[a,c]=H.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:y,onMouseLeave:_,onTouchStart:T}=e,E=H.useRef(null);H.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let M=$=>{$.forEach(B=>{c(B.isIntersecting)})},O=new IntersectionObserver(M,{threshold:.5});return E.current&&O.observe(E.current),()=>{O.disconnect()}}},[n]),H.useEffect(()=>{if(i){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[i]);let b=()=>{o(!0)},P=()=>{o(!1),c(!1)};return t?n!=="intent"?[a,E,{}]:[a,E,{onFocus:gl(h,b),onBlur:gl(p,P),onMouseEnter:gl(y,b),onMouseLeave:gl(_,P),onTouchStart:gl(T,b)}]:[!1,E,{}]}function gl(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function yS({page:n,...e}){let{router:t}=L0(),i=H.useMemo(()=>x0(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?H.createElement(_S,{page:n,matches:i,...e}):null}function vS(n){let{manifest:e,routeModules:t}=M0(),[i,o]=H.useState([]);return H.useEffect(()=>{let a=!1;return lS(n,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[n,e,t]),i}function _S({page:n,matches:e,...t}){let i=qs(),{manifest:o,routeModules:a}=M0(),{basename:c}=L0(),{loaderData:h,matches:p}=mS(),y=H.useMemo(()=>Tv(n,e,p,o,i,"data"),[n,e,p,o,i]),_=H.useMemo(()=>Tv(n,e,p,o,i,"assets"),[n,e,p,o,i]),T=H.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let P=new Set,M=!1;if(e.forEach($=>{var K;let B=o.routes[$.route.id];!B||!B.hasLoader||(!y.some(J=>J.route.id===$.route.id)&&$.route.id in h&&((K=a[$.route.id])!=null&&K.shouldRevalidate)||B.hasClientLoader?M=!0:P.add($.route.id))}),P.size===0)return[];let O=pS(n,c);return M&&P.size>0&&O.searchParams.set("_routes",e.filter($=>P.has($.route.id)).map($=>$.route.id).join(",")),[O.pathname+O.search]},[c,h,i,o,y,e,n,a]),E=H.useMemo(()=>uS(_,o),[_,o]),b=vS(_);return H.createElement(H.Fragment,null,T.map(P=>H.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),E.map(P=>H.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),b.map(({key:P,link:M})=>H.createElement("link",{key:P,...M})))}function wS(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var F0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{F0&&(window.__reactRouterVersion="7.6.3")}catch{}function ES({basename:n,children:e,window:t}){let i=H.useRef();i.current==null&&(i.current=aI({window:t,v5Compat:!0}));let o=i.current,[a,c]=H.useState({action:o.action,location:o.location}),h=H.useCallback(p=>{H.startTransition(()=>c(p))},[c]);return H.useLayoutEffect(()=>o.listen(h),[o,h]),H.createElement(YI,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:o})}var j0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kd=H.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:c,state:h,target:p,to:y,preventScrollReset:_,viewTransition:T,...E},b){let{basename:P}=H.useContext(Ar),M=typeof y=="string"&&j0.test(y),O,$=!1;if(typeof y=="string"&&M&&(O=y,F0))try{let x=new URL(window.location.href),N=y.startsWith("//")?new URL(x.protocol+y):new URL(y),V=ti(N.pathname,P);N.origin===x.origin&&V!=null?y=V+N.search+N.hash:$=!0}catch{sr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=OI(y,{relative:o}),[K,J,re]=gS(i,E),ee=xS(y,{replace:c,state:h,target:p,preventScrollReset:_,relative:o,viewTransition:T});function C(x){e&&e(x),x.defaultPrevented||ee(x)}let S=H.createElement("a",{...E,...re,href:O||B,onClick:$||a?e:C,ref:wS(b,J),target:p,"data-discover":!M&&t==="render"?"true":void 0});return K&&!M?H.createElement(H.Fragment,null,S,H.createElement(yS,{page:B})):S});kd.displayName="Link";var TS=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:c,viewTransition:h,children:p,...y},_){let T=Gl(c,{relative:y.relative}),E=qs(),b=H.useContext(Ad),{navigator:P,basename:M}=H.useContext(Ar),O=b!=null&&kS(T)&&h===!0,$=P.encodeLocation?P.encodeLocation(T).pathname:T.pathname,B=E.pathname,K=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;t||(B=B.toLowerCase(),K=K?K.toLowerCase():null,$=$.toLowerCase()),K&&M&&(K=ti(K,M)||K);const J=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let re=B===$||!o&&B.startsWith($)&&B.charAt(J)==="/",ee=K!=null&&(K===$||!o&&K.startsWith($)&&K.charAt($.length)==="/"),C={isActive:re,isPending:ee,isTransitioning:O},S=re?e:void 0,x;typeof i=="function"?x=i(C):x=[i,re?"active":null,ee?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let N=typeof a=="function"?a(C):a;return H.createElement(kd,{...y,"aria-current":S,className:x,ref:_,style:N,to:c,viewTransition:h},typeof p=="function"?p(C):p)});TS.displayName="NavLink";var IS=H.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:c=Vc,action:h,onSubmit:p,relative:y,preventScrollReset:_,viewTransition:T,...E},b)=>{let P=AS(),M=PS(h,{relative:y}),O=c.toLowerCase()==="get"?"get":"post",$=typeof h=="string"&&j0.test(h),B=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let J=K.nativeEvent.submitter,re=(J==null?void 0:J.getAttribute("formmethod"))||c;P(J||K.currentTarget,{fetcherKey:e,method:re,navigate:t,replace:o,state:a,relative:y,preventScrollReset:_,viewTransition:T})};return H.createElement("form",{ref:b,method:O,action:M,onSubmit:i?p:B,...E,"data-discover":!$&&n==="render"?"true":void 0})});IS.displayName="Form";function SS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U0(n){let e=H.useContext(ha);return ht(e,SS(n)),e}function xS(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:a,viewTransition:c}={}){let h=Xi(),p=qs(),y=Gl(n,{relative:a});return H.useCallback(_=>{if(nS(_,e)){_.preventDefault();let T=t!==void 0?t:Dl(p)===Dl(y);h(n,{replace:T,state:i,preventScrollReset:o,relative:a,viewTransition:c})}},[p,h,y,t,i,e,n,o,a,c])}var CS=0,RS=()=>`__${String(++CS)}__`;function AS(){let{router:n}=U0("useSubmit"),{basename:e}=H.useContext(Ar),t=WI();return H.useCallback(async(i,o={})=>{let{action:a,method:c,encType:h,formData:p,body:y}=sS(i,e);if(o.navigate===!1){let _=o.fetcherKey||RS();await n.fetch(_,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await n.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function PS(n,{relative:e}={}){let{basename:t}=H.useContext(Ar),i=H.useContext(Pr);ht(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Gl(n||".",{relative:e})},c=qs();if(n==null){a.search=c.search;let h=new URLSearchParams(a.search),p=h.getAll("index");if(p.some(_=>_==="")){h.delete("index"),p.filter(T=>T).forEach(T=>h.append("index",T));let _=h.toString();a.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Xr([t,a.pathname])),Dl(a)}function kS(n,e={}){let t=H.useContext(b0);ht(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=U0("useViewTransitionState"),o=Gl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=ti(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=ti(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Jc(o.pathname,c)!=null||Jc(o.pathname,a)!=null}[...fS];var bS=S0();const NS=Rd(bS),DS=()=>{};var Iv={};/**
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
 */const z0=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},OS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],h=n[t++],p=((o&7)<<18|(a&63)<<12|(c&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},B0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,h=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,_=a>>2,T=(a&3)<<4|h>>4;let E=(h&15)<<2|y>>6,b=y&63;p||(b=64,c||(E=64)),i.push(t[_],t[T],t[E],t[b])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(z0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):OS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||h==null||y==null||T==null)throw new VS;const E=a<<2|h>>4;if(i.push(E),y!==64){const b=h<<4&240|y>>2;if(i.push(b),T!==64){const P=y<<6&192|T;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class VS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LS=function(n){const e=z0(n);return B0.encodeByteArray(e,!0)},Zc=function(n){return LS(n).replace(/\./g,"")},$0=function(n){try{return B0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function MS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FS=()=>MS().__FIREBASE_DEFAULTS__,jS=()=>{if(typeof process>"u"||typeof Iv>"u")return;const n=Iv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},US=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$0(n[1]);return e&&JSON.parse(e)},bd=()=>{try{return DS()||FS()||jS()||US()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},q0=n=>{var e,t;return(t=(e=bd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zS=n=>{const e=q0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},H0=()=>{var n;return(n=bd())===null||n===void 0?void 0:n.config},W0=n=>{var e;return(e=bd())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class BS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function fa(n){return n.endsWith(".cloudworkstations.dev")}async function G0(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function $S(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zc(JSON.stringify(t)),Zc(JSON.stringify(c)),""].join(".")}const Cl={};function qS(){const n={prod:[],emulator:[]};for(const e of Object.keys(Cl))Cl[e]?n.emulator.push(e):n.prod.push(e);return n}function HS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Sv=!1;function K0(n,e){if(typeof window>"u"||typeof document>"u"||!fa(window.location.host)||Cl[n]===e||Cl[n]||Sv)return;Cl[n]=e;function t(E){return`__firebase__banner__${E}`}const i="__firebase__banner",a=qS().prod.length>0;function c(){const E=document.getElementById(i);E&&E.remove()}function h(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function p(E,b){E.setAttribute("width","24"),E.setAttribute("id",b),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function y(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Sv=!0,c()},E}function _(E,b){E.setAttribute("id",b),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function T(){const E=HS(i),b=t("text"),P=document.getElementById(b)||document.createElement("span"),M=t("learnmore"),O=document.getElementById(M)||document.createElement("a"),$=t("preprendIcon"),B=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const K=E.element;h(K),_(O,M);const J=y();p(B,$),K.append(B,P,O,J),document.body.appendChild(K)}a?(P.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function GS(){var n;const e=(n=bd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function YS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XS(){const n=en();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function JS(){return!GS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZS(){try{return typeof indexedDB=="object"}catch{return!1}}function ex(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const tx="FirebaseError";class ai extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=tx,Object.setPrototypeOf(this,ai.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kl.prototype.create)}}class Kl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?nx(a,i):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new ai(o,h,i)}}function nx(n,e){return n.replace(rx,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const rx=/\{\$([^}]+)}/g;function ix(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ls(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],c=e[o];if(xv(a)&&xv(c)){if(!Ls(a,c))return!1}else if(a!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function xv(n){return n!==null&&typeof n=="object"}/**
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
 */function Ql(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function yl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,a]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function vl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function sx(n,e){const t=new ox(n,e);return t.subscribe.bind(t)}class ox{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");ax(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Bf),o.error===void 0&&(o.error=Bf),o.complete===void 0&&(o.complete=Bf);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ax(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bf(){}/**
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
 */function Nt(n){return n&&n._delegate?n._delegate:n}class Ms{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ks="[DEFAULT]";/**
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
 */class lx{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new BS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cx(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);i===h&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ux(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ux(n){return n===ks?void 0:n}function cx(n){return n.instantiationMode==="EAGER"}/**
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
 */class dx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lx(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ze;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ze||(ze={}));const hx={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},fx=ze.INFO,px={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},mx=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=px[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xp{constructor(e){this.name=e,this._logLevel=fx,this._logHandler=mx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const gx=(n,e)=>e.some(t=>n instanceof t);let Cv,Rv;function yx(){return Cv||(Cv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vx(){return Rv||(Rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q0=new WeakMap,dp=new WeakMap,Y0=new WeakMap,$f=new WeakMap,Jp=new WeakMap;function _x(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Ui(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Q0.set(t,n)}).catch(()=>{}),Jp.set(e,n),e}function wx(n){if(dp.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});dp.set(n,e)}let hp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Y0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ui(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ex(n){hp=n(hp)}function Tx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(qf(this),e,...t);return Y0.set(i,e.sort?e.sort():[e]),Ui(i)}:vx().includes(n)?function(...e){return n.apply(qf(this),e),Ui(Q0.get(this))}:function(...e){return Ui(n.apply(qf(this),e))}}function Ix(n){return typeof n=="function"?Tx(n):(n instanceof IDBTransaction&&wx(n),gx(n,yx())?new Proxy(n,hp):n)}function Ui(n){if(n instanceof IDBRequest)return _x(n);if($f.has(n))return $f.get(n);const e=Ix(n);return e!==n&&($f.set(n,e),Jp.set(e,n)),e}const qf=n=>Jp.get(n);function Sx(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),h=Ui(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ui(c.result),p.oldVersion,p.newVersion,Ui(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),h}const xx=["get","getKey","getAll","getAllKeys","count"],Cx=["put","add","delete","clear"],Hf=new Map;function Av(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hf.get(e))return Hf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=Cx.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||xx.includes(t)))return;const a=async function(c,...h){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(h.shift())),(await Promise.all([y[t](...h),o&&p.done]))[0]};return Hf.set(e,a),a}Ex(n=>({...n,get:(e,t,i)=>Av(e,t)||n.get(e,t,i),has:(e,t)=>!!Av(e,t)||n.has(e,t)}));/**
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
 */class Rx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ax(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ax(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fp="@firebase/app",Pv="0.13.1";/**
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
 */const ni=new Xp("@firebase/app"),Px="@firebase/app-compat",kx="@firebase/analytics-compat",bx="@firebase/analytics",Nx="@firebase/app-check-compat",Dx="@firebase/app-check",Ox="@firebase/auth",Vx="@firebase/auth-compat",Lx="@firebase/database",Mx="@firebase/data-connect",Fx="@firebase/database-compat",jx="@firebase/functions",Ux="@firebase/functions-compat",zx="@firebase/installations",Bx="@firebase/installations-compat",$x="@firebase/messaging",qx="@firebase/messaging-compat",Hx="@firebase/performance",Wx="@firebase/performance-compat",Gx="@firebase/remote-config",Kx="@firebase/remote-config-compat",Qx="@firebase/storage",Yx="@firebase/storage-compat",Xx="@firebase/firestore",Jx="@firebase/ai",Zx="@firebase/firestore-compat",eC="firebase",tC="11.9.0";/**
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
 */const pp="[DEFAULT]",nC={[fp]:"fire-core",[Px]:"fire-core-compat",[bx]:"fire-analytics",[kx]:"fire-analytics-compat",[Dx]:"fire-app-check",[Nx]:"fire-app-check-compat",[Ox]:"fire-auth",[Vx]:"fire-auth-compat",[Lx]:"fire-rtdb",[Mx]:"fire-data-connect",[Fx]:"fire-rtdb-compat",[jx]:"fire-fn",[Ux]:"fire-fn-compat",[zx]:"fire-iid",[Bx]:"fire-iid-compat",[$x]:"fire-fcm",[qx]:"fire-fcm-compat",[Hx]:"fire-perf",[Wx]:"fire-perf-compat",[Gx]:"fire-rc",[Kx]:"fire-rc-compat",[Qx]:"fire-gcs",[Yx]:"fire-gcs-compat",[Xx]:"fire-fst",[Zx]:"fire-fst-compat",[Jx]:"fire-vertex","fire-js":"fire-js",[eC]:"fire-js-all"};/**
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
 */const ed=new Map,rC=new Map,mp=new Map;function kv(n,e){try{n.container.addComponent(e)}catch(t){ni.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zo(n){const e=n.name;if(mp.has(e))return ni.debug(`There were multiple attempts to register component ${e}.`),!1;mp.set(e,n);for(const t of ed.values())kv(t,n);for(const t of rC.values())kv(t,n);return!0}function Zp(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Mn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const iC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zi=new Kl("app","Firebase",iC);/**
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
 */class sC{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ms("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zi.create("app-deleted",{appName:this._name})}}/**
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
 */const pa=tC;function X0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:pp,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw zi.create("bad-app-name",{appName:String(o)});if(t||(t=H0()),!t)throw zi.create("no-options");const a=ed.get(o);if(a){if(Ls(t,a.options)&&Ls(i,a.config))return a;throw zi.create("duplicate-app",{appName:o})}const c=new dx(o);for(const p of mp.values())c.addComponent(p);const h=new sC(t,i,c);return ed.set(o,h),h}function J0(n=pp){const e=ed.get(n);if(!e&&n===pp&&H0())return X0();if(!e)throw zi.create("no-app",{appName:n});return e}function Bi(n,e,t){var i;let o=(i=nC[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const h=[`Unable to register library "${o}" with version "${e}":`];a&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ni.warn(h.join(" "));return}Zo(new Ms(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const oC="firebase-heartbeat-database",aC=1,Ol="firebase-heartbeat-store";let Wf=null;function Z0(){return Wf||(Wf=Sx(oC,aC,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ol)}catch(t){console.warn(t)}}}}).catch(n=>{throw zi.create("idb-open",{originalErrorMessage:n.message})})),Wf}async function lC(n){try{const t=(await Z0()).transaction(Ol),i=await t.objectStore(Ol).get(ew(n));return await t.done,i}catch(e){if(e instanceof ai)ni.warn(e.message);else{const t=zi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ni.warn(t.message)}}}async function bv(n,e){try{const i=(await Z0()).transaction(Ol,"readwrite");await i.objectStore(Ol).put(e,ew(n)),await i.done}catch(t){if(t instanceof ai)ni.warn(t.message);else{const i=zi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ni.warn(i.message)}}}function ew(n){return`${n.name}!${n.options.appId}`}/**
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
 */const uC=1024,cC=30;class dC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fC(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Nv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>cC){const c=pC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ni.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Nv(),{heartbeatsToSend:i,unsentEntries:o}=hC(this._heartbeatsCache.heartbeats),a=Zc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return ni.warn(t),""}}}function Nv(){return new Date().toISOString().substring(0,10)}function hC(n,e=uC){const t=[];let i=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),Dv(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Dv(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class fC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZS()?ex().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Dv(n){return Zc(JSON.stringify({version:2,heartbeats:n})).length}function pC(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function mC(n){Zo(new Ms("platform-logger",e=>new Rx(e),"PRIVATE")),Zo(new Ms("heartbeat",e=>new dC(e),"PRIVATE")),Bi(fp,Pv,n),Bi(fp,Pv,"esm2017"),Bi("fire-js","")}mC("");var Ov=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $i,tw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,S){function x(){}x.prototype=S.prototype,C.D=S.prototype,C.prototype=new x,C.prototype.constructor=C,C.C=function(N,V,j){for(var k=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)k[tt-2]=arguments[tt];return S.prototype[V].apply(N,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,S,x){x||(x=0);var N=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)N[V]=S.charCodeAt(x++)|S.charCodeAt(x++)<<8|S.charCodeAt(x++)<<16|S.charCodeAt(x++)<<24;else for(V=0;16>V;++V)N[V]=S[x++]|S[x++]<<8|S[x++]<<16|S[x++]<<24;S=C.g[0],x=C.g[1],V=C.g[2];var j=C.g[3],k=S+(j^x&(V^j))+N[0]+3614090360&4294967295;S=x+(k<<7&4294967295|k>>>25),k=j+(V^S&(x^V))+N[1]+3905402710&4294967295,j=S+(k<<12&4294967295|k>>>20),k=V+(x^j&(S^x))+N[2]+606105819&4294967295,V=j+(k<<17&4294967295|k>>>15),k=x+(S^V&(j^S))+N[3]+3250441966&4294967295,x=V+(k<<22&4294967295|k>>>10),k=S+(j^x&(V^j))+N[4]+4118548399&4294967295,S=x+(k<<7&4294967295|k>>>25),k=j+(V^S&(x^V))+N[5]+1200080426&4294967295,j=S+(k<<12&4294967295|k>>>20),k=V+(x^j&(S^x))+N[6]+2821735955&4294967295,V=j+(k<<17&4294967295|k>>>15),k=x+(S^V&(j^S))+N[7]+4249261313&4294967295,x=V+(k<<22&4294967295|k>>>10),k=S+(j^x&(V^j))+N[8]+1770035416&4294967295,S=x+(k<<7&4294967295|k>>>25),k=j+(V^S&(x^V))+N[9]+2336552879&4294967295,j=S+(k<<12&4294967295|k>>>20),k=V+(x^j&(S^x))+N[10]+4294925233&4294967295,V=j+(k<<17&4294967295|k>>>15),k=x+(S^V&(j^S))+N[11]+2304563134&4294967295,x=V+(k<<22&4294967295|k>>>10),k=S+(j^x&(V^j))+N[12]+1804603682&4294967295,S=x+(k<<7&4294967295|k>>>25),k=j+(V^S&(x^V))+N[13]+4254626195&4294967295,j=S+(k<<12&4294967295|k>>>20),k=V+(x^j&(S^x))+N[14]+2792965006&4294967295,V=j+(k<<17&4294967295|k>>>15),k=x+(S^V&(j^S))+N[15]+1236535329&4294967295,x=V+(k<<22&4294967295|k>>>10),k=S+(V^j&(x^V))+N[1]+4129170786&4294967295,S=x+(k<<5&4294967295|k>>>27),k=j+(x^V&(S^x))+N[6]+3225465664&4294967295,j=S+(k<<9&4294967295|k>>>23),k=V+(S^x&(j^S))+N[11]+643717713&4294967295,V=j+(k<<14&4294967295|k>>>18),k=x+(j^S&(V^j))+N[0]+3921069994&4294967295,x=V+(k<<20&4294967295|k>>>12),k=S+(V^j&(x^V))+N[5]+3593408605&4294967295,S=x+(k<<5&4294967295|k>>>27),k=j+(x^V&(S^x))+N[10]+38016083&4294967295,j=S+(k<<9&4294967295|k>>>23),k=V+(S^x&(j^S))+N[15]+3634488961&4294967295,V=j+(k<<14&4294967295|k>>>18),k=x+(j^S&(V^j))+N[4]+3889429448&4294967295,x=V+(k<<20&4294967295|k>>>12),k=S+(V^j&(x^V))+N[9]+568446438&4294967295,S=x+(k<<5&4294967295|k>>>27),k=j+(x^V&(S^x))+N[14]+3275163606&4294967295,j=S+(k<<9&4294967295|k>>>23),k=V+(S^x&(j^S))+N[3]+4107603335&4294967295,V=j+(k<<14&4294967295|k>>>18),k=x+(j^S&(V^j))+N[8]+1163531501&4294967295,x=V+(k<<20&4294967295|k>>>12),k=S+(V^j&(x^V))+N[13]+2850285829&4294967295,S=x+(k<<5&4294967295|k>>>27),k=j+(x^V&(S^x))+N[2]+4243563512&4294967295,j=S+(k<<9&4294967295|k>>>23),k=V+(S^x&(j^S))+N[7]+1735328473&4294967295,V=j+(k<<14&4294967295|k>>>18),k=x+(j^S&(V^j))+N[12]+2368359562&4294967295,x=V+(k<<20&4294967295|k>>>12),k=S+(x^V^j)+N[5]+4294588738&4294967295,S=x+(k<<4&4294967295|k>>>28),k=j+(S^x^V)+N[8]+2272392833&4294967295,j=S+(k<<11&4294967295|k>>>21),k=V+(j^S^x)+N[11]+1839030562&4294967295,V=j+(k<<16&4294967295|k>>>16),k=x+(V^j^S)+N[14]+4259657740&4294967295,x=V+(k<<23&4294967295|k>>>9),k=S+(x^V^j)+N[1]+2763975236&4294967295,S=x+(k<<4&4294967295|k>>>28),k=j+(S^x^V)+N[4]+1272893353&4294967295,j=S+(k<<11&4294967295|k>>>21),k=V+(j^S^x)+N[7]+4139469664&4294967295,V=j+(k<<16&4294967295|k>>>16),k=x+(V^j^S)+N[10]+3200236656&4294967295,x=V+(k<<23&4294967295|k>>>9),k=S+(x^V^j)+N[13]+681279174&4294967295,S=x+(k<<4&4294967295|k>>>28),k=j+(S^x^V)+N[0]+3936430074&4294967295,j=S+(k<<11&4294967295|k>>>21),k=V+(j^S^x)+N[3]+3572445317&4294967295,V=j+(k<<16&4294967295|k>>>16),k=x+(V^j^S)+N[6]+76029189&4294967295,x=V+(k<<23&4294967295|k>>>9),k=S+(x^V^j)+N[9]+3654602809&4294967295,S=x+(k<<4&4294967295|k>>>28),k=j+(S^x^V)+N[12]+3873151461&4294967295,j=S+(k<<11&4294967295|k>>>21),k=V+(j^S^x)+N[15]+530742520&4294967295,V=j+(k<<16&4294967295|k>>>16),k=x+(V^j^S)+N[2]+3299628645&4294967295,x=V+(k<<23&4294967295|k>>>9),k=S+(V^(x|~j))+N[0]+4096336452&4294967295,S=x+(k<<6&4294967295|k>>>26),k=j+(x^(S|~V))+N[7]+1126891415&4294967295,j=S+(k<<10&4294967295|k>>>22),k=V+(S^(j|~x))+N[14]+2878612391&4294967295,V=j+(k<<15&4294967295|k>>>17),k=x+(j^(V|~S))+N[5]+4237533241&4294967295,x=V+(k<<21&4294967295|k>>>11),k=S+(V^(x|~j))+N[12]+1700485571&4294967295,S=x+(k<<6&4294967295|k>>>26),k=j+(x^(S|~V))+N[3]+2399980690&4294967295,j=S+(k<<10&4294967295|k>>>22),k=V+(S^(j|~x))+N[10]+4293915773&4294967295,V=j+(k<<15&4294967295|k>>>17),k=x+(j^(V|~S))+N[1]+2240044497&4294967295,x=V+(k<<21&4294967295|k>>>11),k=S+(V^(x|~j))+N[8]+1873313359&4294967295,S=x+(k<<6&4294967295|k>>>26),k=j+(x^(S|~V))+N[15]+4264355552&4294967295,j=S+(k<<10&4294967295|k>>>22),k=V+(S^(j|~x))+N[6]+2734768916&4294967295,V=j+(k<<15&4294967295|k>>>17),k=x+(j^(V|~S))+N[13]+1309151649&4294967295,x=V+(k<<21&4294967295|k>>>11),k=S+(V^(x|~j))+N[4]+4149444226&4294967295,S=x+(k<<6&4294967295|k>>>26),k=j+(x^(S|~V))+N[11]+3174756917&4294967295,j=S+(k<<10&4294967295|k>>>22),k=V+(S^(j|~x))+N[2]+718787259&4294967295,V=j+(k<<15&4294967295|k>>>17),k=x+(j^(V|~S))+N[9]+3951481745&4294967295,C.g[0]=C.g[0]+S&4294967295,C.g[1]=C.g[1]+(V+(k<<21&4294967295|k>>>11))&4294967295,C.g[2]=C.g[2]+V&4294967295,C.g[3]=C.g[3]+j&4294967295}i.prototype.u=function(C,S){S===void 0&&(S=C.length);for(var x=S-this.blockSize,N=this.B,V=this.h,j=0;j<S;){if(V==0)for(;j<=x;)o(this,C,j),j+=this.blockSize;if(typeof C=="string"){for(;j<S;)if(N[V++]=C.charCodeAt(j++),V==this.blockSize){o(this,N),V=0;break}}else for(;j<S;)if(N[V++]=C[j++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=S},i.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var S=1;S<C.length-8;++S)C[S]=0;var x=8*this.o;for(S=C.length-8;S<C.length;++S)C[S]=x&255,x/=256;for(this.u(C),C=Array(16),S=x=0;4>S;++S)for(var N=0;32>N;N+=8)C[x++]=this.g[S]>>>N&255;return C};function a(C,S){var x=h;return Object.prototype.hasOwnProperty.call(x,C)?x[C]:x[C]=S(C)}function c(C,S){this.h=S;for(var x=[],N=!0,V=C.length-1;0<=V;V--){var j=C[V]|0;N&&j==S||(x[V]=j,N=!1)}this.g=x}var h={};function p(C){return-128<=C&&128>C?a(C,function(S){return new c([S|0],0>S?-1:0)}):new c([C|0],0>C?-1:0)}function y(C){if(isNaN(C)||!isFinite(C))return T;if(0>C)return O(y(-C));for(var S=[],x=1,N=0;C>=x;N++)S[N]=C/x|0,x*=4294967296;return new c(S,0)}function _(C,S){if(C.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(C.charAt(0)=="-")return O(_(C.substring(1),S));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=y(Math.pow(S,8)),N=T,V=0;V<C.length;V+=8){var j=Math.min(8,C.length-V),k=parseInt(C.substring(V,V+j),S);8>j?(j=y(Math.pow(S,j)),N=N.j(j).add(y(k))):(N=N.j(x),N=N.add(y(k)))}return N}var T=p(0),E=p(1),b=p(16777216);n=c.prototype,n.m=function(){if(M(this))return-O(this).m();for(var C=0,S=1,x=0;x<this.g.length;x++){var N=this.i(x);C+=(0<=N?N:4294967296+N)*S,S*=4294967296}return C},n.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(P(this))return"0";if(M(this))return"-"+O(this).toString(C);for(var S=y(Math.pow(C,6)),x=this,N="";;){var V=J(x,S).g;x=$(x,V.j(S));var j=((0<x.g.length?x.g[0]:x.h)>>>0).toString(C);if(x=V,P(x))return j+N;for(;6>j.length;)j="0"+j;N=j+N}},n.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function P(C){if(C.h!=0)return!1;for(var S=0;S<C.g.length;S++)if(C.g[S]!=0)return!1;return!0}function M(C){return C.h==-1}n.l=function(C){return C=$(this,C),M(C)?-1:P(C)?0:1};function O(C){for(var S=C.g.length,x=[],N=0;N<S;N++)x[N]=~C.g[N];return new c(x,~C.h).add(E)}n.abs=function(){return M(this)?O(this):this},n.add=function(C){for(var S=Math.max(this.g.length,C.g.length),x=[],N=0,V=0;V<=S;V++){var j=N+(this.i(V)&65535)+(C.i(V)&65535),k=(j>>>16)+(this.i(V)>>>16)+(C.i(V)>>>16);N=k>>>16,j&=65535,k&=65535,x[V]=k<<16|j}return new c(x,x[x.length-1]&-2147483648?-1:0)};function $(C,S){return C.add(O(S))}n.j=function(C){if(P(this)||P(C))return T;if(M(this))return M(C)?O(this).j(O(C)):O(O(this).j(C));if(M(C))return O(this.j(O(C)));if(0>this.l(b)&&0>C.l(b))return y(this.m()*C.m());for(var S=this.g.length+C.g.length,x=[],N=0;N<2*S;N++)x[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<C.g.length;V++){var j=this.i(N)>>>16,k=this.i(N)&65535,tt=C.i(V)>>>16,ut=C.i(V)&65535;x[2*N+2*V]+=k*ut,B(x,2*N+2*V),x[2*N+2*V+1]+=j*ut,B(x,2*N+2*V+1),x[2*N+2*V+1]+=k*tt,B(x,2*N+2*V+1),x[2*N+2*V+2]+=j*tt,B(x,2*N+2*V+2)}for(N=0;N<S;N++)x[N]=x[2*N+1]<<16|x[2*N];for(N=S;N<2*S;N++)x[N]=0;return new c(x,0)};function B(C,S){for(;(C[S]&65535)!=C[S];)C[S+1]+=C[S]>>>16,C[S]&=65535,S++}function K(C,S){this.g=C,this.h=S}function J(C,S){if(P(S))throw Error("division by zero");if(P(C))return new K(T,T);if(M(C))return S=J(O(C),S),new K(O(S.g),O(S.h));if(M(S))return S=J(C,O(S)),new K(O(S.g),S.h);if(30<C.g.length){if(M(C)||M(S))throw Error("slowDivide_ only works with positive integers.");for(var x=E,N=S;0>=N.l(C);)x=re(x),N=re(N);var V=ee(x,1),j=ee(N,1);for(N=ee(N,2),x=ee(x,2);!P(N);){var k=j.add(N);0>=k.l(C)&&(V=V.add(x),j=k),N=ee(N,1),x=ee(x,1)}return S=$(C,V.j(S)),new K(V,S)}for(V=T;0<=C.l(S);){for(x=Math.max(1,Math.floor(C.m()/S.m())),N=Math.ceil(Math.log(x)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),j=y(x),k=j.j(S);M(k)||0<k.l(C);)x-=N,j=y(x),k=j.j(S);P(j)&&(j=E),V=V.add(j),C=$(C,k)}return new K(V,C)}n.A=function(C){return J(this,C).h},n.and=function(C){for(var S=Math.max(this.g.length,C.g.length),x=[],N=0;N<S;N++)x[N]=this.i(N)&C.i(N);return new c(x,this.h&C.h)},n.or=function(C){for(var S=Math.max(this.g.length,C.g.length),x=[],N=0;N<S;N++)x[N]=this.i(N)|C.i(N);return new c(x,this.h|C.h)},n.xor=function(C){for(var S=Math.max(this.g.length,C.g.length),x=[],N=0;N<S;N++)x[N]=this.i(N)^C.i(N);return new c(x,this.h^C.h)};function re(C){for(var S=C.g.length+1,x=[],N=0;N<S;N++)x[N]=C.i(N)<<1|C.i(N-1)>>>31;return new c(x,C.h)}function ee(C,S){var x=S>>5;S%=32;for(var N=C.g.length-x,V=[],j=0;j<N;j++)V[j]=0<S?C.i(j+x)>>>S|C.i(j+x+1)<<32-S:C.i(j+x);return new c(V,C.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,tw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=_,$i=c}).apply(typeof Ov<"u"?Ov:typeof self<"u"?self:typeof window<"u"?window:{});var Sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nw,_l,rw,Mc,gp,iw,sw,ow;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sc=="object"&&Sc];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var I=0;I<u.length-1;I++){var U=u[I];if(!(U in v))break e;v=v[U]}u=u[u.length-1],I=v[u],m=m(I),m!=I&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function a(u,m){u instanceof String&&(u+="");var v=0,I=!1,U={next:function(){if(!I&&v<u.length){var G=v++;return{value:m(G,u[G]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return a(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function T(u,m,v){if(!u)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function E(u,m,v){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:T,E.apply(null,arguments)}function b(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),u.apply(this,I)}}function P(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(I,U,G){for(var oe=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)oe[Ye-2]=arguments[Ye];return m.prototype[U].apply(I,oe)}}function M(u){const m=u.length;if(0<m){const v=Array(m);for(let I=0;I<m;I++)v[I]=u[I];return v}return[]}function O(u,m){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(p(I)){const U=u.length||0,G=I.length||0;u.length=U+G;for(let oe=0;oe<G;oe++)u[U+oe]=I[oe]}else u.push(I)}}class ${constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function B(u){return/^[\s\xa0]*$/.test(u)}function K(){var u=h.navigator;return u&&(u=u.userAgent)?u:""}function J(u){return J[" "](u),u}J[" "]=function(){};var re=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ee(u,m,v){for(const I in u)m.call(v,u[I],I,u)}function C(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function S(u){const m={};for(const v in u)m[v]=u[v];return m}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let v,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(v in I)u[v]=I[v];for(let G=0;G<x.length;G++)v=x[G],Object.prototype.hasOwnProperty.call(I,v)&&(u[v]=I[v])}}function V(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function j(u){h.setTimeout(()=>{throw u},0)}function k(){var u=pe;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class tt{constructor(){this.h=this.g=null}add(m,v){const I=ut.get();I.set(m,v),this.h?this.h.next=I:this.g=I,this.h=I}}var ut=new $(()=>new gt,u=>u.reset());class gt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,se=!1,pe=new tt,ae=()=>{const u=h.Promise.resolve(void 0);Ue=()=>{u.then(F)}};var F=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(v){j(v)}var m=ut;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}se=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};h.addEventListener("test",v,m),h.removeEventListener("test",v,m)}catch{}return u}();function Pe(u,m){if(ye.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,I=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(re){e:{try{J(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Pe.aa.h.call(this)}}P(Pe,ye);var De={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function Oe(u,m,v,I,U){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!I,this.ha=U,this.key=++Ne,this.da=this.fa=!1}function nt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function le(u){this.src=u,this.g={},this.h=0}le.prototype.add=function(u,m,v,I,U){var G=u.toString();u=this.g[G],u||(u=this.g[G]=[],this.h++);var oe=Fe(u,m,I,U);return-1<oe?(m=u[oe],v||(m.fa=!1)):(m=new Oe(m,this.src,G,!!I,U),m.fa=v,u.push(m)),m};function _e(u,m){var v=m.type;if(v in u.g){var I=u.g[v],U=Array.prototype.indexOf.call(I,m,void 0),G;(G=0<=U)&&Array.prototype.splice.call(I,U,1),G&&(nt(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Fe(u,m,v,I){for(var U=0;U<u.length;++U){var G=u[U];if(!G.da&&G.listener==m&&G.capture==!!v&&G.ha==I)return U}return-1}var Ee="closure_lm_"+(1e6*Math.random()|0),Je={};function li(u,m,v,I,U){if(Array.isArray(m)){for(var G=0;G<m.length;G++)li(u,m[G],v,I,U);return null}return v=Ia(v),u&&u[Ve]?u.K(m,v,y(I)?!!I.capture:!1,U):Ea(u,m,v,!1,I,U)}function Ea(u,m,v,I,U,G){if(!m)throw Error("Invalid event type");var oe=y(U)?!!U.capture:!!U,Ye=Ys(u);if(Ye||(u[Ee]=Ye=new le(u)),v=Ye.add(m,v,I,oe,G),v.proxy)return v;if(I=au(),v.proxy=I,I.src=u,I.listener=v,u.addEventListener)Ae||(U=oe),U===void 0&&(U=!1),u.addEventListener(m.toString(),I,U);else if(u.attachEvent)u.attachEvent(br(m.toString()),I);else if(u.addListener&&u.removeListener)u.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function au(){function u(v){return m.call(u.src,u.listener,v)}const m=Ta;return u}function Qs(u,m,v,I,U){if(Array.isArray(m))for(var G=0;G<m.length;G++)Qs(u,m[G],v,I,U);else I=y(I)?!!I.capture:!!I,v=Ia(v),u&&u[Ve]?(u=u.i,m=String(m).toString(),m in u.g&&(G=u.g[m],v=Fe(G,v,I,U),-1<v&&(nt(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ys(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Fe(m,v,I,U)),(v=-1<u?m[u]:null)&&kr(v))}function kr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ve])_e(m.i,u);else{var v=u.type,I=u.proxy;m.removeEventListener?m.removeEventListener(v,I,u.capture):m.detachEvent?m.detachEvent(br(v),I):m.addListener&&m.removeListener&&m.removeListener(I),(v=Ys(m))?(_e(v,u),v.h==0&&(v.src=null,m[Ee]=null)):nt(u)}}}function br(u){return u in Je?Je[u]:Je[u]="on"+u}function Ta(u,m){if(u.da)u=!0;else{m=new Pe(m,this);var v=u.listener,I=u.ha||u.src;u.fa&&kr(u),u=v.call(I,m)}return u}function Ys(u){return u=u[Ee],u instanceof le?u:null}var Xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ia(u){return typeof u=="function"?u:(u[Xs]||(u[Xs]=function(m){return u.handleEvent(m)}),u[Xs])}function xt(){Q.call(this),this.i=new le(this),this.M=this,this.F=null}P(xt,Q),xt.prototype[Ve]=!0,xt.prototype.removeEventListener=function(u,m,v,I){Qs(this,u,m,v,I)};function Ct(u,m){var v,I=u.F;if(I)for(v=[];I;I=I.F)v.push(I);if(u=u.M,I=m.type||m,typeof m=="string")m=new ye(m,u);else if(m instanceof ye)m.target=m.target||u;else{var U=m;m=new ye(I,u),N(m,U)}if(U=!0,v)for(var G=v.length-1;0<=G;G--){var oe=m.g=v[G];U=Nr(oe,I,!0,m)&&U}if(oe=m.g=u,U=Nr(oe,I,!0,m)&&U,U=Nr(oe,I,!1,m)&&U,v)for(G=0;G<v.length;G++)oe=m.g=v[G],U=Nr(oe,I,!1,m)&&U}xt.prototype.N=function(){if(xt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],I=0;I<v.length;I++)nt(v[I]);delete u.g[m],u.h--}}this.F=null},xt.prototype.K=function(u,m,v,I){return this.i.add(String(u),m,!1,v,I)},xt.prototype.L=function(u,m,v,I){return this.i.add(String(u),m,!0,v,I)};function Nr(u,m,v,I){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,G=0;G<m.length;++G){var oe=m[G];if(oe&&!oe.da&&oe.capture==v){var Ye=oe.listener,Rt=oe.ha||oe.src;oe.fa&&_e(u.i,oe),U=Ye.call(Rt,I)!==!1&&U}}return U&&!I.defaultPrevented}function Sa(u,m,v){if(typeof u=="function")v&&(u=E(u,v));else if(u&&typeof u.handleEvent=="function")u=E(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:h.setTimeout(u,m||0)}function ui(u){u.g=Sa(()=>{u.g=null,u.i&&(u.i=!1,ui(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class rs extends Q{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ui(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function is(u){Q.call(this),this.h=u,this.g={}}P(is,Q);var xa=[];function Ca(u){ee(u.g,function(m,v){this.g.hasOwnProperty(v)&&kr(m)},u),u.g={}}is.prototype.N=function(){is.aa.N.call(this),Ca(this)},is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ra=h.JSON.stringify,Aa=h.JSON.parse,Pa=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function ss(){}ss.prototype.h=null;function Js(u){return u.h||(u.h=u.i())}function Zs(){}var Rn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lr(){ye.call(this,"d")}P(lr,ye);function eo(){ye.call(this,"c")}P(eo,ye);var ur={},ka=null;function os(){return ka=ka||new xt}ur.La="serverreachability";function ba(u){ye.call(this,ur.La,u)}P(ba,ye);function Dr(u){const m=os();Ct(m,new ba(m))}ur.STAT_EVENT="statevent";function Na(u,m){ye.call(this,ur.STAT_EVENT,u),this.stat=m}P(Na,ye);function yt(u){const m=os();Ct(m,new Na(m,u))}ur.Ma="timingevent";function to(u,m){ye.call(this,ur.Ma,u),this.size=m}P(to,ye);function Un(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function as(){this.g=!0}as.prototype.xa=function(){this.g=!1};function ls(u,m,v,I,U,G){u.info(function(){if(u.g)if(G)for(var oe="",Ye=G.split("&"),Rt=0;Rt<Ye.length;Rt++){var qe=Ye[Rt].split("=");if(1<qe.length){var Dt=qe[0];qe=qe[1];var wt=Dt.split("_");oe=2<=wt.length&&wt[1]=="type"?oe+(Dt+"="+qe+"&"):oe+(Dt+"=redacted&")}}else oe=null;else oe=G;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+m+`
`+v+`
`+oe})}function no(u,m,v,I,U,G,oe){u.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+m+`
`+v+`
`+G+" "+oe})}function zn(u,m,v,I){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+lh(u,v)+(I?" "+I:"")})}function Da(u,m){u.info(function(){return"TIMEOUT: "+m})}as.prototype.info=function(){};function lh(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var I=v[u];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var G=U[0];if(G!="noop"&&G!="stop"&&G!="close")for(var oe=1;oe<U.length;oe++)U[oe]=""}}}}return Ra(v)}catch{return m}}var ro={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},lu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bn;function us(){}P(us,ss),us.prototype.g=function(){return new XMLHttpRequest},us.prototype.i=function(){return{}},Bn=new us;function $n(u,m,v,I){this.j=u,this.i=m,this.l=v,this.R=I||1,this.U=new is(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uu}function uu(){this.i=null,this.g="",this.h=!1}var Oa={},io={};function so(u,m,v){u.L=1,u.v=pi(_n(m)),u.m=v,u.P=!0,Va(u,null)}function Va(u,m){u.F=Date.now(),Ze(u),u.A=_n(u.v);var v=u.A,I=u.R;Array.isArray(I)||(I=[String(I)]),gi(v.i,"t",I),u.C=0,v=u.j.J,u.h=new uu,u.g=Ru(u.j,v?m:null,!u.m),0<u.O&&(u.M=new rs(E(u.Y,u,u.g),u.O)),m=u.U,v=u.g,I=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(xa[0]=U.toString()),U=xa);for(var G=0;G<U.length;G++){var oe=li(v,U[G],I||m.handleEvent,!1,m.h||m);if(!oe)break;m.g[oe.key]=oe}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Dr(),ls(u.i,u.u,u.A,u.l,u.R,u.m)}$n.prototype.ca=function(u){u=u.target;const m=this.M;m&&an(u)==3?m.j():this.Y(u)},$n.prototype.Y=function(u){try{if(u==this.g)e:{const wt=an(this.g);var m=this.g.Ba();const kn=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||za(this.g)))){this.J||wt!=4||m==7||(m==8||0>=kn?Dr(3):Dr(2)),cs(this);var v=this.g.Z();this.X=v;t:if(cu(this)){var I=za(this.g);u="";var U=I.length,G=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),ci(this);var oe="";break t}this.h.i=new h.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(I[m],{stream:!(G&&m==U-1)});I.length=0,this.h.g+=u,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,no(this.i,this.u,this.A,this.l,this.R,wt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ye,Rt=this.g;if((Ye=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Ye)){var qe=Ye;break t}}qe=null}if(v=qe)zn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,La(this,v);else{this.o=!1,this.s=3,yt(12),An(this),ci(this);break e}}if(this.P){v=!0;let En;for(;!this.J&&this.C<oe.length;)if(En=uh(this,oe),En==io){wt==4&&(this.s=4,yt(14),v=!1),zn(this.i,this.l,null,"[Incomplete Response]");break}else if(En==Oa){this.s=4,yt(15),zn(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else zn(this.i,this.l,En,null),La(this,En);if(cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||oe.length!=0||this.h.h||(this.s=1,yt(16),v=!1),this.o=this.o&&v,!v)zn(this.i,this.l,oe,"[Invalid Chunked Response]"),An(this),ci(this);else if(0<oe.length&&!this.W){this.W=!0;var Dt=this.j;Dt.g==this&&Dt.ba&&!Dt.M&&(Dt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),$a(Dt),Dt.M=!0,yt(11))}}else zn(this.i,this.l,oe,null),La(this,oe);wt==4&&An(this),this.o&&!this.J&&(wt==4?yo(this.j,this):(this.o=!1,Ze(this)))}else ho(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),An(this),ci(this)}}}catch{}finally{}};function cu(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function uh(u,m){var v=u.C,I=m.indexOf(`
`,v);return I==-1?io:(v=Number(m.substring(v,I)),isNaN(v)?Oa:(I+=1,I+v>m.length?io:(m=m.slice(I,I+v),u.C=I+v,m)))}$n.prototype.cancel=function(){this.J=!0,An(this)};function Ze(u){u.S=Date.now()+u.I,du(u,u.I)}function du(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Un(E(u.ba,u),m)}function cs(u){u.B&&(h.clearTimeout(u.B),u.B=null)}$n.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Da(this.i,this.A),this.L!=2&&(Dr(),yt(17)),An(this),this.s=2,ci(this)):du(this,this.S-u)};function ci(u){u.j.G==0||u.J||yo(u.j,u)}function An(u){cs(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Ca(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function La(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||tn(v.h,u))){if(!u.K&&tn(v.h,u)&&v.G==3){try{var I=v.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)go(v),Kn(v);else break e;mo(v),yt(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Un(E(v.Za,v),6e3));if(1>=fu(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Fr(v,11)}else if((u.K||v.g==u)&&go(v),!B(m))for(U=v.Da.g.parse(m),m=0;m<U.length;m++){let qe=U[m];if(v.T=qe[0],qe=qe[1],v.G==2)if(qe[0]=="c"){v.K=qe[1],v.ia=qe[2];const Dt=qe[3];Dt!=null&&(v.la=Dt,v.j.info("VER="+v.la));const wt=qe[4];wt!=null&&(v.Aa=wt,v.j.info("SVER="+v.Aa));const kn=qe[5];kn!=null&&typeof kn=="number"&&0<kn&&(I=1.5*kn,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const En=u.g;if(En){const ys=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ys){var G=I.h;G.g||ys.indexOf("spdy")==-1&&ys.indexOf("quic")==-1&&ys.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Ma(G,G.h),G.h=null))}if(I.D){const _o=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;_o&&(I.ya=_o,Xe(I.I,I.D,_o))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var oe=u;if(I.qa=Cu(I,I.J?I.ia:null,I.W),oe.K){pu(I.h,oe);var Ye=oe,Rt=I.L;Rt&&(Ye.I=Rt),Ye.B&&(cs(Ye),Ze(Ye)),I.g=oe}else gs(I);0<v.i.length&&fr(v)}else qe[0]!="stop"&&qe[0]!="close"||Fr(v,7);else v.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?Fr(v,7):Ut(v):qe[0]!="noop"&&v.l&&v.l.ta(qe),v.v=0)}}Dr(4)}catch{}}var hu=class{constructor(u,m){this.g=u,this.map=m}};function ds(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function fu(u){return u.h?1:u.g?u.g.size:0}function tn(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ma(u,m){u.g?u.g.add(m):u.h=m}function pu(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ds.prototype.cancel=function(){if(this.i=mu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function mu(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return M(u.i)}function oo(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,I=0;I<v;I++)m.push(u[I]);return m}m=[],v=0;for(I in u)m[v++]=u[I];return m}function ao(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const I in u)m[v++]=I;return m}}}function di(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=ao(u),I=oo(u),U=I.length,G=0;G<U;G++)m.call(void 0,I[G],v&&v[G],u)}var hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ch(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var I=u[v].indexOf("="),U=null;if(0<=I){var G=u[v].substring(0,I);U=u[v].substring(I+1)}else G=u[v];m(G,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Or(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Or){this.h=u.h,fs(this,u.j),this.o=u.o,this.g=u.g,hi(this,u.s),this.l=u.l;var m=u.i,v=new cr;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),fi(this,v),this.m=u.m}else u&&(m=String(u).match(hs))?(this.h=!1,fs(this,m[1]||"",!0),this.o=$e(m[2]||""),this.g=$e(m[3]||"",!0),hi(this,m[4]),this.l=$e(m[5]||"",!0),fi(this,m[6]||"",!0),this.m=$e(m[7]||"")):(this.h=!1,this.i=new cr(null,this.h))}Or.prototype.toString=function(){var u=[],m=this.j;m&&u.push(mi(m,lo,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(mi(m,lo,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(mi(v,v.charAt(0)=="/"?vu:yu,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",mi(v,Fa)),u.join("")};function _n(u){return new Or(u)}function fs(u,m,v){u.j=v?$e(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function hi(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function fi(u,m,v){m instanceof cr?(u.i=m,dr(u.i,u.h)):(v||(m=mi(m,_u)),u.i=new cr(m,u.h))}function Xe(u,m,v){u.i.set(m,v)}function pi(u){return Xe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function $e(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function mi(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,gu),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function gu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var lo=/[#\/\?@]/g,yu=/[#\?:]/g,vu=/[#\?]/g,_u=/[#\?@]/g,Fa=/#/g;function cr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function jt(u){u.g||(u.g=new Map,u.h=0,u.i&&ch(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=cr.prototype,n.add=function(u,m){jt(this),this.i=null,u=Pn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function qn(u,m){jt(u),m=Pn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Hn(u,m){return jt(u),m=Pn(u,m),u.g.has(m)}n.forEach=function(u,m){jt(this),this.g.forEach(function(v,I){v.forEach(function(U){u.call(m,U,I,this)},this)},this)},n.na=function(){jt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let I=0;I<m.length;I++){const U=u[I];for(let G=0;G<U.length;G++)v.push(m[I])}return v},n.V=function(u){jt(this);let m=[];if(typeof u=="string")Hn(this,u)&&(m=m.concat(this.g.get(Pn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return jt(this),this.i=null,u=Pn(this,u),Hn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function gi(u,m,v){qn(u,m),0<v.length&&(u.i=null,u.g.set(Pn(u,m),M(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var I=m[v];const G=encodeURIComponent(String(I)),oe=this.V(I);for(I=0;I<oe.length;I++){var U=G;oe[I]!==""&&(U+="="+encodeURIComponent(String(oe[I]))),u.push(U)}}return this.i=u.join("&")};function Pn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function dr(u,m){m&&!u.j&&(jt(u),u.i=null,u.g.forEach(function(v,I){var U=I.toLowerCase();I!=U&&(qn(this,I),gi(this,U,v))},u)),u.j=m}function dh(u,m){const v=new as;if(h.Image){const I=new Image;I.onload=b(on,v,"TestLoadImage: loaded",!0,m,I),I.onerror=b(on,v,"TestLoadImage: error",!1,m,I),I.onabort=b(on,v,"TestLoadImage: abort",!1,m,I),I.ontimeout=b(on,v,"TestLoadImage: timeout",!1,m,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=u}else m(!1)}function wu(u,m){const v=new as,I=new AbortController,U=setTimeout(()=>{I.abort(),on(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:I.signal}).then(G=>{clearTimeout(U),G.ok?on(v,"TestPingServer: ok",!0,m):on(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),on(v,"TestPingServer: error",!1,m)})}function on(u,m,v,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(v)}catch{}}function hh(){this.g=new Pa}function Eu(u,m,v){const I=v||"";try{di(u,function(U,G){let oe=U;y(U)&&(oe=Ra(U)),m.push(I+G+"="+encodeURIComponent(oe))})}catch(U){throw m.push(I+"type="+encodeURIComponent("_badmap")),U}}function Vr(u){this.l=u.Ub||null,this.j=u.eb||!1}P(Vr,ss),Vr.prototype.g=function(){return new ps(this.l,this.j)},Vr.prototype.i=function(u){return function(){return u}}({});function ps(u,m){xt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ps,xt),n=ps.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Gn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||h).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Gn(this)),this.g&&(this.readyState=3,Gn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Wn(this):Gn(this),this.readyState==3&&Tu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Wn(this))},n.Qa=function(u){this.g&&(this.response=u,Wn(this))},n.ga=function(){this.g&&Wn(this)};function Wn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Gn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Gn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Lr(u){let m="";return ee(u,function(v,I){m+=I,m+=":",m+=v,m+=`\r
`}),m}function yi(u,m,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=Lr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Xe(u,m,v))}function at(u){xt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(at,xt);var fh=/^https?$/i,ja=["POST","PUT"];n=at.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bn.g(),this.v=this.o?Js(this.o):Js(Bn),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(G){ms(this,G);return}if(u=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)v.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const G of I.keys())v.set(G,I.get(G));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),U=h.FormData&&u instanceof h.FormData,!(0<=Array.prototype.indexOf.call(ja,m,void 0))||I||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,oe]of v)this.g.setRequestHeader(G,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{co(this),this.u=!0,this.g.send(u),this.u=!1}catch(G){ms(this,G)}};function ms(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,uo(u),wn(u)}function uo(u){u.A||(u.A=!0,Ct(u,"complete"),Ct(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ct(this,"complete"),Ct(this,"abort"),wn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wn(this,!0)),at.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ua(this):this.bb())},n.bb=function(){Ua(this)};function Ua(u){if(u.h&&typeof c<"u"&&(!u.v[1]||an(u)!=4||u.Z()!=2)){if(u.u&&an(u)==4)Sa(u.Ea,0,u);else if(Ct(u,"readystatechange"),an(u)==4){u.h=!1;try{const oe=u.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var I;if(I=oe===0){var U=String(u.D).match(hs)[1]||null;!U&&h.self&&h.self.location&&(U=h.self.location.protocol.slice(0,-1)),I=!fh.test(U?U.toLowerCase():"")}v=I}if(v)Ct(u,"complete"),Ct(u,"success");else{u.m=6;try{var G=2<an(u)?u.g.statusText:""}catch{G=""}u.l=G+" ["+u.Z()+"]",uo(u)}}finally{wn(u)}}}}function wn(u,m){if(u.g){co(u);const v=u.g,I=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Ct(u,"ready");try{v.onreadystatechange=I}catch{}}}function co(u){u.I&&(h.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function an(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Aa(m)}};function za(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ho(u){const m={};u=(u.g&&2<=an(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<u.length;I++){if(B(u[I]))continue;var v=V(u[I]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=m[U]||[];m[U]=G,G.push(v)}C(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hr(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function Ba(u){this.Aa=0,this.i=[],this.j=new as,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hr("baseRetryDelayMs",5e3,u),this.cb=hr("retryDelaySeedMs",1e4,u),this.Wa=hr("forwardChannelMaxRetries",2,u),this.wa=hr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ds(u&&u.concurrentRequestLimit),this.Da=new hh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ba.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,I){yt(0),this.W=u,this.H=m||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=Cu(this,null,this.W),fr(this)};function Ut(u){if(fo(u),u.G==3){var m=u.U++,v=_n(u.I);if(Xe(v,"SID",u.K),Xe(v,"RID",m),Xe(v,"TYPE","terminate"),Mr(u,v),m=new $n(u,u.j,m),m.L=2,m.v=pi(_n(v)),v=!1,h.navigator&&h.navigator.sendBeacon)try{v=h.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&h.Image&&(new Image().src=m.v,v=!0),v||(m.g=Ru(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ze(m)}xu(u)}function Kn(u){u.g&&($a(u),u.g.cancel(),u.g=null)}function fo(u){Kn(u),u.u&&(h.clearTimeout(u.u),u.u=null),go(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&h.clearTimeout(u.s),u.s=null)}function fr(u){if(!vn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Ue||ae(),se||(Ue(),se=!0),pe.add(m,u),u.B=0}}function ph(u,m){return fu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Un(E(u.Ga,u,m),Su(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new $n(this,this.j,u);let G=this.o;if(this.S&&(G?(G=S(G),N(G,this.S)):G=this.S),this.m!==null||this.O||(U.H=G,G=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=vi(this,U,m),v=_n(this.I),Xe(v,"RID",u),Xe(v,"CVER",22),this.D&&Xe(v,"X-HTTP-Session-Id",this.D),Mr(this,v),G&&(this.O?m="headers="+encodeURIComponent(String(Lr(G)))+"&"+m:this.m&&yi(v,this.m,G)),Ma(this.h,U),this.Ua&&Xe(v,"TYPE","init"),this.P?(Xe(v,"$req",m),Xe(v,"SID","null"),U.T=!0,so(U,v,null)):so(U,v,m),this.G=2}}else this.G==3&&(u?po(this,u):this.i.length==0||vn(this.h)||po(this))};function po(u,m){var v;m?v=m.l:v=u.U++;const I=_n(u.I);Xe(I,"SID",u.K),Xe(I,"RID",v),Xe(I,"AID",u.T),Mr(u,I),u.m&&u.o&&yi(I,u.m,u.o),v=new $n(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=vi(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ma(u.h,v),so(v,I,m)}function Mr(u,m){u.H&&ee(u.H,function(v,I){Xe(m,I,v)}),u.l&&di({},function(v,I){Xe(m,I,v)})}function vi(u,m,v){v=Math.min(u.i.length,v);var I=u.l?E(u.l.Na,u.l,u):null;e:{var U=u.i;let G=-1;for(;;){const oe=["count="+v];G==-1?0<v?(G=U[0].g,oe.push("ofs="+G)):G=0:oe.push("ofs="+G);let Ye=!0;for(let Rt=0;Rt<v;Rt++){let qe=U[Rt].g;const Dt=U[Rt].map;if(qe-=G,0>qe)G=Math.max(0,U[Rt].g-100),Ye=!1;else try{Eu(Dt,oe,"req"+qe+"_")}catch{I&&I(Dt)}}if(Ye){I=oe.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,I}function gs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Ue||ae(),se||(Ue(),se=!0),pe.add(m,u),u.v=0}}function mo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Un(E(u.Fa,u),Su(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Iu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Un(E(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Kn(this),Iu(this))};function $a(u){u.A!=null&&(h.clearTimeout(u.A),u.A=null)}function Iu(u){u.g=new $n(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=_n(u.qa);Xe(m,"RID","rpc"),Xe(m,"SID",u.K),Xe(m,"AID",u.T),Xe(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Xe(m,"TO",u.ja),Xe(m,"TYPE","xmlhttp"),Mr(u,m),u.m&&u.o&&yi(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=pi(_n(m)),v.m=null,v.P=!0,Va(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Kn(this),mo(this),yt(19))};function go(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function yo(u,m){var v=null;if(u.g==m){go(u),$a(u),u.g=null;var I=2}else if(tn(u.h,m))v=m.D,pu(u.h,m),I=1;else return;if(u.G!=0){if(m.o)if(I==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;I=os(),Ct(I,new to(I,v)),fr(u)}else gs(u);else if(U=m.s,U==3||U==0&&0<m.X||!(I==1&&ph(u,m)||I==2&&mo(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),U){case 1:Fr(u,5);break;case 4:Fr(u,10);break;case 3:Fr(u,6);break;default:Fr(u,2)}}}function Su(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function Fr(u,m){if(u.j.info("Error code "+m),m==2){var v=E(u.fb,u),I=u.Xa;const U=!I;I=new Or(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||fs(I,"https"),pi(I),U?dh(I.toString(),v):wu(I.toString(),v)}else yt(2);u.G=0,u.l&&u.l.sa(m),xu(u),fo(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function xu(u){if(u.G=0,u.ka=[],u.l){const m=mu(u.h);(m.length!=0||u.i.length!=0)&&(O(u.ka,m),O(u.ka,u.i),u.h.i.length=0,M(u.i),u.i.length=0),u.l.ra()}}function Cu(u,m,v){var I=v instanceof Or?_n(v):new Or(v);if(I.g!="")m&&(I.g=m+"."+I.g),hi(I,I.s);else{var U=h.location;I=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var G=new Or(null);I&&fs(G,I),m&&(G.g=m),U&&hi(G,U),v&&(G.l=v),I=G}return v=u.D,m=u.ya,v&&m&&Xe(I,v,m),Xe(I,"VER",u.la),Mr(u,I),I}function Ru(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new at(new Vr({eb:v})):new at(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qa(){}n=qa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vo(){}vo.prototype.g=function(u,m){return new nn(u,m)};function nn(u,m){xt.call(this),this.g=new Ba(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!B(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!B(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new pr(this)}P(nn,xt),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){Ut(this.g)},nn.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=Ra(u),u=v);m.i.push(new hu(m.Ya++,u)),m.G==3&&fr(m)},nn.prototype.N=function(){this.g.l=null,delete this.j,Ut(this.g),delete this.g,nn.aa.N.call(this)};function Au(u){lr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}P(Au,lr);function Pu(){eo.call(this),this.status=1}P(Pu,eo);function pr(u){this.g=u}P(pr,qa),pr.prototype.ua=function(){Ct(this.g,"a")},pr.prototype.ta=function(u){Ct(this.g,new Au(u))},pr.prototype.sa=function(u){Ct(this.g,new Pu)},pr.prototype.ra=function(){Ct(this.g,"b")},vo.prototype.createWebChannel=vo.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,ow=function(){return new vo},sw=function(){return os()},iw=ur,gp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ro.NO_ERROR=0,ro.TIMEOUT=8,ro.HTTP_ERROR=6,Mc=ro,lu.COMPLETE="complete",rw=lu,Zs.EventType=Rn,Rn.OPEN="a",Rn.CLOSE="b",Rn.ERROR="c",Rn.MESSAGE="d",xt.prototype.listen=xt.prototype.K,_l=Zs,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,nw=at}).apply(typeof Sc<"u"?Sc:typeof self<"u"?self:typeof window<"u"?window:{});const Vv="@firebase/firestore",Lv="4.7.17";/**
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
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
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
 */let ma="11.9.0";/**
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
 */const Fs=new Xp("@firebase/firestore");function zo(){return Fs.logLevel}function de(n,...e){if(Fs.logLevel<=ze.DEBUG){const t=e.map(em);Fs.debug(`Firestore (${ma}): ${n}`,...t)}}function ri(n,...e){if(Fs.logLevel<=ze.ERROR){const t=e.map(em);Fs.error(`Firestore (${ma}): ${n}`,...t)}}function ea(n,...e){if(Fs.logLevel<=ze.WARN){const t=e.map(em);Fs.warn(`Firestore (${ma}): ${n}`,...t)}}function em(n){if(typeof n=="string")return n;try{/**
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
 */function Ce(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,aw(n,i,t)}function aw(n,e,t){let i=`FIRESTORE (${ma}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw ri(i),new Error(i)}function Qe(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||aw(e,o,i)}function be(n,e){return n}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends ai{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class lw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xt.UNAUTHENTICATED))}shutdown(){}}class yC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vC{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Qe(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let a=new Jr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Jr,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=a;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},h=p=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>h(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?h(p):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Jr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Qe(typeof i.accessToken=="string",31837,{l:i}),new lw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class _C{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wC{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new _C(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Qe(this.o===void 0,3512);const i=a=>{a.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,de("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};const o=a=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Mv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Mv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function TC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function uw(){return new TextEncoder}/**
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
 */class cw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=TC(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%62))}return i}}function Me(n,e){return n<e?-1:n>e?1:0}function yp(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Me(i,o);{const a=uw(),c=IC(a.encode(Fv(n,t)),a.encode(Fv(e,t)));return c!==0?c:Me(i,o)}}t+=i>65535?2:1}return Me(n.length,e.length)}function Fv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function IC(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Me(n[t],e[t]);return Me(n.length,e.length)}function ta(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */const jv=-62135596800,Uv=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(e){return kt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Uv);return new kt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jv)throw new fe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uv}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-jv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new kt(0,0))}static max(){return new ke(new kt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const zv="__name__";class _r{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ce(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ce(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return _r.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _r?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=_r.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Me(e.length,t.length)}static compareSegments(e,t){const i=_r.isNumericId(e),o=_r.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?_r.extractNumericId(e).compare(_r.extractNumericId(t)):yp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $i.fromString(e.substring(4,e.length-2))}}class ot extends _r{construct(e,t,i){return new ot(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new fe(X.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new ot(t)}static emptyPath(){return new ot([])}}const SC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends _r{construct(e,t,i){return new qt(e,t,i)}static isValidIdentifier(e){return SC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zv}static keyField(){return new qt([zv])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new fe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new fe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new fe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else h==="`"?(c=!c,o++):h!=="."||c?(i+=h,o++):(a(),o++)}if(a(),c)throw new fe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qt(t)}static emptyPath(){return new qt([])}}/**
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
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(ot.fromString(e))}static fromName(e){return new Te(ot.fromString(e).popFirst(5))}static empty(){return new Te(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ot.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new ot(e.slice()))}}/**
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
 */const Vl=-1;function xC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=ke.fromTimestamp(i===1e9?new kt(t+1,0):new kt(t,i));return new Hi(o,Te.empty(),e)}function CC(n){return new Hi(n.readTime,n.key,Vl)}class Hi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Hi(ke.min(),Te.empty(),Vl)}static max(){return new Hi(ke.max(),Te.empty(),Vl)}}function RC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(n.documentKey,e.documentKey),t!==0?t:Me(n.largestBatchId,e.largestBatchId))}/**
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
 */const AC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ga(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==AC)throw n;de("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(t){return Y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Y.reject(t)}static resolve(e){return new Y((t,i)=>{t(e)})}static reject(e){return new Y((t,i)=>{i(e)})}static waitFor(e){return new Y((t,i)=>{let o=0,a=0,c=!1;e.forEach(h=>{++o,h.next(()=>{++a,c&&a===o&&t()},p=>i(p))}),c=!0,a===o&&t()})}static or(e){let t=Y.resolve(!1);for(const i of e)t=t.next(o=>o?Y.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,a)=>{i.push(t.call(this,o,a))}),this.waitFor(i)}static mapArray(e,t){return new Y((i,o)=>{const a=e.length,c=new Array(a);let h=0;for(let p=0;p<a;p++){const y=p;t(e[y]).next(_=>{c[y]=_,++h,h===a&&i(c)},_=>o(_))}})}static doWhile(e,t){return new Y((i,o)=>{const a=()=>{e()===!0?t().next(()=>{a()},o):i()};a()})}}function kC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ya(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Nd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>t.writeSequenceNumber(i))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Nd.le=-1;/**
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
 */const tm=-1;function Dd(n){return n==null}function td(n){return n===0&&1/n==-1/0}function bC(n){return typeof n=="number"&&Number.isInteger(n)&&!td(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const dw="";function NC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Bv(e)),e=DC(n.get(t),e);return Bv(e)}function DC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case dw:t+="";break;default:t+=a}}return t}function Bv(n){return n+dw+""}/**
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
 */function $v(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ji(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ft{constructor(e,t){this.comparator=e,this.root=t||$t.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$t.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$t.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xc(this.root,e,this.comparator,!1)}getReverseIterator(){return new xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xc(this.root,e,this.comparator,!0)}}class xc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $t{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??$t.RED,this.left=o??$t.EMPTY,this.right=a??$t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new $t(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return $t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return $t.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ce(27949);return e+(this.isRed()?0:1)}}$t.EMPTY=null,$t.RED=!0,$t.BLACK=!1;$t.EMPTY=new class{constructor(){this.size=0}get key(){throw Ce(57766)}get value(){throw Ce(16141)}get color(){throw Ce(16727)}get left(){throw Ce(29726)}get right(){throw Ce(36894)}copy(e,t,i,o,a){return this}insert(e,t,i){return new $t(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qv(this.data.getIterator())}getIteratorFrom(e){return new qv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new bt(this.comparator);return t.data=e,t}}class qv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Cn{constructor(e){this.fields=e,e.sort(qt.comparator)}static empty(){return new Cn([])}unionWith(e){let t=new bt(qt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Cn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ta(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class fw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new fw("Invalid base64 string: "+a):a}}(e);return new Ht(t)}static fromUint8Array(e){const t=function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a}(e);return new Ht(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const OC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wi(n){if(Qe(!!n,39018),typeof n=="string"){let e=0;const t=OC.exec(n);if(Qe(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_t(n.seconds),nanos:_t(n.nanos)}}function _t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gi(n){return typeof n=="string"?Ht.fromBase64String(n):Ht.fromUint8Array(n)}/**
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
 */const pw="server_timestamp",mw="__type__",gw="__previous_value__",yw="__local_write_time__";function nm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[mw])===null||t===void 0?void 0:t.stringValue)===pw}function Od(n){const e=n.mapValue.fields[gw];return nm(e)?Od(e):e}function Ll(n){const e=Wi(n.mapValue.fields[yw].timestampValue);return new kt(e.seconds,e.nanos)}/**
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
 */class VC{constructor(e,t,i,o,a,c,h,p,y,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=_}}const nd="(default)";class Ml{constructor(e,t){this.projectId=e,this.database=t||nd}static empty(){return new Ml("","")}get isDefaultDatabase(){return this.database===nd}isEqual(e){return e instanceof Ml&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vw="__type__",LC="__max__",Cc={mapValue:{}},_w="__vector__",rd="value";function Ki(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?nm(n)?4:FC(n)?9007199254740991:MC(n)?10:11:Ce(28295,{value:n})}function Rr(n,e){if(n===e)return!0;const t=Ki(n);if(t!==Ki(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ll(n).isEqual(Ll(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=Wi(o.timestampValue),h=Wi(a.timestampValue);return c.seconds===h.seconds&&c.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return Gi(o.bytesValue).isEqual(Gi(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return _t(o.geoPointValue.latitude)===_t(a.geoPointValue.latitude)&&_t(o.geoPointValue.longitude)===_t(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return _t(o.integerValue)===_t(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=_t(o.doubleValue),h=_t(a.doubleValue);return c===h?td(c)===td(h):isNaN(c)&&isNaN(h)}return!1}(n,e);case 9:return ta(n.arrayValue.values||[],e.arrayValue.values||[],Rr);case 10:case 11:return function(o,a){const c=o.mapValue.fields||{},h=a.mapValue.fields||{};if($v(c)!==$v(h))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(h[p]===void 0||!Rr(c[p],h[p])))return!1;return!0}(n,e);default:return Ce(52216,{left:n})}}function Fl(n,e){return(n.values||[]).find(t=>Rr(t,e))!==void 0}function na(n,e){if(n===e)return 0;const t=Ki(n),i=Ki(e);if(t!==i)return Me(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(n.booleanValue,e.booleanValue);case 2:return function(a,c){const h=_t(a.integerValue||a.doubleValue),p=_t(c.integerValue||c.doubleValue);return h<p?-1:h>p?1:h===p?0:isNaN(h)?isNaN(p)?0:-1:1}(n,e);case 3:return Hv(n.timestampValue,e.timestampValue);case 4:return Hv(Ll(n),Ll(e));case 5:return yp(n.stringValue,e.stringValue);case 6:return function(a,c){const h=Gi(a),p=Gi(c);return h.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(a,c){const h=a.split("/"),p=c.split("/");for(let y=0;y<h.length&&y<p.length;y++){const _=Me(h[y],p[y]);if(_!==0)return _}return Me(h.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,c){const h=Me(_t(a.latitude),_t(c.latitude));return h!==0?h:Me(_t(a.longitude),_t(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Wv(n.arrayValue,e.arrayValue);case 10:return function(a,c){var h,p,y,_;const T=a.fields||{},E=c.fields||{},b=(h=T[rd])===null||h===void 0?void 0:h.arrayValue,P=(p=E[rd])===null||p===void 0?void 0:p.arrayValue,M=Me(((y=b==null?void 0:b.values)===null||y===void 0?void 0:y.length)||0,((_=P==null?void 0:P.values)===null||_===void 0?void 0:_.length)||0);return M!==0?M:Wv(b,P)}(n.mapValue,e.mapValue);case 11:return function(a,c){if(a===Cc.mapValue&&c===Cc.mapValue)return 0;if(a===Cc.mapValue)return 1;if(c===Cc.mapValue)return-1;const h=a.fields||{},p=Object.keys(h),y=c.fields||{},_=Object.keys(y);p.sort(),_.sort();for(let T=0;T<p.length&&T<_.length;++T){const E=yp(p[T],_[T]);if(E!==0)return E;const b=na(h[p[T]],y[_[T]]);if(b!==0)return b}return Me(p.length,_.length)}(n.mapValue,e.mapValue);default:throw Ce(23264,{Pe:t})}}function Hv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Me(n,e);const t=Wi(n),i=Wi(e),o=Me(t.seconds,i.seconds);return o!==0?o:Me(t.nanos,i.nanos)}function Wv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=na(t[o],i[o]);if(a)return a}return Me(t.length,i.length)}function ra(n){return vp(n)}function vp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Wi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Gi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Te.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=vp(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const c of i)a?a=!1:o+=",",o+=`${c}:${vp(t.fields[c])}`;return o+"}"}(n.mapValue):Ce(61005,{value:n})}function Fc(n){switch(Ki(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Od(n);return e?16+Fc(e):16;case 5:return 2*n.stringValue.length;case 6:return Gi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,a)=>o+Fc(a),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Ji(i.fields,(a,c)=>{o+=a.length+Fc(c)}),o}(n.mapValue);default:throw Ce(13486,{value:n})}}function Gv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function _p(n){return!!n&&"integerValue"in n}function rm(n){return!!n&&"arrayValue"in n}function Kv(n){return!!n&&"nullValue"in n}function Qv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function jc(n){return!!n&&"mapValue"in n}function MC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[vw])===null||t===void 0?void 0:t.stringValue)===_w}function Rl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ji(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Rl(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function FC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===LC}/**
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
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!jc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rl(t)}setAll(e){let t=qt.emptyPath(),i={},o=[];e.forEach((c,h)=>{if(!t.isImmediateParentOf(h)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=h.popLast()}c?i[h.lastSegment()]=Rl(c):o.push(h.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());jc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];jc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ji(t,(o,a)=>e[o]=a);for(const o of i)delete e[o]}clone(){return new mn(Rl(this.value))}}function ww(n){const e=[];return Ji(n.fields,(t,i)=>{const o=new qt([t]);if(jc(i)){const a=ww(i.mapValue).fields;if(a.length===0)e.push(o);else for(const c of a)e.push(o.child(c))}else e.push(o)}),new Cn(e)}/**
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
 */class Jt{constructor(e,t,i,o,a,c,h){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=c,this.documentState=h}static newInvalidDocument(e){return new Jt(e,0,ke.min(),ke.min(),ke.min(),mn.empty(),0)}static newFoundDocument(e,t,i,o){return new Jt(e,1,t,ke.min(),i,o,0)}static newNoDocument(e,t){return new Jt(e,2,t,ke.min(),ke.min(),mn.empty(),0)}static newUnknownDocument(e,t){return new Jt(e,3,t,ke.min(),ke.min(),mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class id{constructor(e,t){this.position=e,this.inclusive=t}}function Yv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],c=n.position[o];if(a.field.isKeyField()?i=Te.comparator(Te.fromName(c.referenceValue),t.key):i=na(c,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function Xv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class sd{constructor(e,t="asc"){this.field=e,this.dir=t}}function jC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ew{}class St extends Ew{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new zC(e,t,i):t==="array-contains"?new qC(e,i):t==="in"?new HC(e,i):t==="not-in"?new WC(e,i):t==="array-contains-any"?new GC(e,i):new St(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new BC(e,i):new $C(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(na(t,this.value)):t!==null&&Ki(this.value)===Ki(t)&&this.matchesComparison(na(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class or extends Ew{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new or(e,t)}matches(e){return Tw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Tw(n){return n.op==="and"}function Iw(n){return UC(n)&&Tw(n)}function UC(n){for(const e of n.filters)if(e instanceof or)return!1;return!0}function wp(n){if(n instanceof St)return n.field.canonicalString()+n.op.toString()+ra(n.value);if(Iw(n))return n.filters.map(e=>wp(e)).join(",");{const e=n.filters.map(t=>wp(t)).join(",");return`${n.op}(${e})`}}function Sw(n,e){return n instanceof St?function(i,o){return o instanceof St&&i.op===o.op&&i.field.isEqual(o.field)&&Rr(i.value,o.value)}(n,e):n instanceof or?function(i,o){return o instanceof or&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((a,c,h)=>a&&Sw(c,o.filters[h]),!0):!1}(n,e):void Ce(19439)}function xw(n){return n instanceof St?function(t){return`${t.field.canonicalString()} ${t.op} ${ra(t.value)}`}(n):n instanceof or?function(t){return t.op.toString()+" {"+t.getFilters().map(xw).join(" ,")+"}"}(n):"Filter"}class zC extends St{constructor(e,t,i){super(e,t,i),this.key=Te.fromName(i.referenceValue)}matches(e){const t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}}class BC extends St{constructor(e,t){super(e,"in",t),this.keys=Cw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $C extends St{constructor(e,t){super(e,"not-in",t),this.keys=Cw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Cw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Te.fromName(i.referenceValue))}class qC extends St{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rm(t)&&Fl(t.arrayValue,this.value)}}class HC extends St{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fl(this.value.arrayValue,t)}}class WC extends St{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fl(this.value.arrayValue,t)}}class GC extends St{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rm(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Fl(this.value.arrayValue,i))}}/**
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
 */class KC{constructor(e,t=null,i=[],o=[],a=null,c=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=c,this.endAt=h,this.Ie=null}}function Jv(n,e=null,t=[],i=[],o=null,a=null,c=null){return new KC(n,e,t,i,o,a,c)}function im(n){const e=be(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>wp(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),Dd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>ra(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>ra(i)).join(",")),e.Ie=t}return e.Ie}function sm(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!jC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Sw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xv(n.startAt,e.startAt)&&Xv(n.endAt,e.endAt)}function Ep(n){return Te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Yl{constructor(e,t=null,i=[],o=[],a=null,c="F",h=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=c,this.startAt=h,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function QC(n,e,t,i,o,a,c,h){return new Yl(n,e,t,i,o,a,c,h)}function Vd(n){return new Yl(n)}function Zv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Rw(n){return n.collectionGroup!==null}function Al(n){const e=be(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ee.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let h=new bt(qt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(h=h.add(y.field))})}),h})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ee.push(new sd(a,i))}),t.has(qt.keyField().canonicalString())||e.Ee.push(new sd(qt.keyField(),i))}return e.Ee}function Ir(n){const e=be(n);return e.de||(e.de=YC(e,Al(n))),e.de}function YC(n,e){if(n.limitType==="F")return Jv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new sd(o.field,a)});const t=n.endAt?new id(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new id(n.startAt.position,n.startAt.inclusive):null;return Jv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Tp(n,e){const t=n.filters.concat([e]);return new Yl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ip(n,e,t){return new Yl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ld(n,e){return sm(Ir(n),Ir(e))&&n.limitType===e.limitType}function Aw(n){return`${im(Ir(n))}|lt:${n.limitType}`}function Bo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>xw(o)).join(", ")}]`),Dd(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>ra(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>ra(o)).join(",")),`Target(${i})`}(Ir(n))}; limitType=${n.limitType})`}function Md(n,e){return e.isFoundDocument()&&function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):Te.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(n,e)&&function(i,o){for(const a of Al(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,h,p){const y=Yv(c,h,p);return c.inclusive?y<=0:y<0}(i.startAt,Al(i),o)||i.endAt&&!function(c,h,p){const y=Yv(c,h,p);return c.inclusive?y>=0:y>0}(i.endAt,Al(i),o))}(n,e)}function XC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pw(n){return(e,t)=>{let i=!1;for(const o of Al(n)){const a=JC(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function JC(n,e,t){const i=n.field.isKeyField()?Te.comparator(e.key,t.key):function(a,c,h){const p=c.data.field(a),y=h.data.field(a);return p!==null&&y!==null?na(p,y):Ce(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ce(19790,{direction:n.dir})}}/**
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
 */class Hs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ji(this.inner,(t,i)=>{for(const[o,a]of i)e(o,a)})}isEmpty(){return hw(this.inner)}size(){return this.innerSize}}/**
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
 */const ZC=new ft(Te.comparator);function ii(){return ZC}const kw=new ft(Te.comparator);function wl(...n){let e=kw;for(const t of n)e=e.insert(t.key,t);return e}function bw(n){let e=kw;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function bs(){return Pl()}function Nw(){return Pl()}function Pl(){return new Hs(n=>n.toString(),(n,e)=>n.isEqual(e))}const eR=new ft(Te.comparator),tR=new bt(Te.comparator);function Be(...n){let e=tR;for(const t of n)e=e.add(t);return e}const nR=new bt(Me);function rR(){return nR}/**
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
 */function om(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:td(e)?"-0":e}}function Dw(n){return{integerValue:""+n}}function iR(n,e){return bC(e)?Dw(e):om(n,e)}/**
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
 */class Fd{constructor(){this._=void 0}}function sR(n,e,t){return n instanceof od?function(o,a){const c={fields:{[mw]:{stringValue:pw},[yw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&nm(a)&&(a=Od(a)),a&&(c.fields[gw]=a),{mapValue:c}}(t,e):n instanceof jl?Vw(n,e):n instanceof Ul?Lw(n,e):function(o,a){const c=Ow(o,a),h=e_(c)+e_(o.Re);return _p(c)&&_p(o.Re)?Dw(h):om(o.serializer,h)}(n,e)}function oR(n,e,t){return n instanceof jl?Vw(n,e):n instanceof Ul?Lw(n,e):t}function Ow(n,e){return n instanceof ad?function(i){return _p(i)||function(a){return!!a&&"doubleValue"in a}(i)}(e)?e:{integerValue:0}:null}class od extends Fd{}class jl extends Fd{constructor(e){super(),this.elements=e}}function Vw(n,e){const t=Mw(e);for(const i of n.elements)t.some(o=>Rr(o,i))||t.push(i);return{arrayValue:{values:t}}}class Ul extends Fd{constructor(e){super(),this.elements=e}}function Lw(n,e){let t=Mw(e);for(const i of n.elements)t=t.filter(o=>!Rr(o,i));return{arrayValue:{values:t}}}class ad extends Fd{constructor(e,t){super(),this.serializer=e,this.Re=t}}function e_(n){return _t(n.integerValue||n.doubleValue)}function Mw(n){return rm(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function aR(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof jl&&o instanceof jl||i instanceof Ul&&o instanceof Ul?ta(i.elements,o.elements,Rr):i instanceof ad&&o instanceof ad?Rr(i.Re,o.Re):i instanceof od&&o instanceof od}(n.transform,e.transform)}class lR{constructor(e,t){this.version=e,this.transformResults=t}}class Fn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class jd{}function Fw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new am(n.key,Fn.none()):new Xl(n.key,n.data,Fn.none());{const t=n.data,i=mn.empty();let o=new bt(qt.comparator);for(let a of e.fields)if(!o.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?i.delete(a):i.set(a,c),o=o.add(a)}return new Zi(n.key,i,new Cn(o.toArray()),Fn.none())}}function uR(n,e,t){n instanceof Xl?function(o,a,c){const h=o.value.clone(),p=n_(o.fieldTransforms,a,c.transformResults);h.setAll(p),a.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(n,e,t):n instanceof Zi?function(o,a,c){if(!Uc(o.precondition,a))return void a.convertToUnknownDocument(c.version);const h=n_(o.fieldTransforms,a,c.transformResults),p=a.data;p.setAll(jw(o)),p.setAll(h),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function kl(n,e,t,i){return n instanceof Xl?function(a,c,h,p){if(!Uc(a.precondition,c))return h;const y=a.value.clone(),_=r_(a.fieldTransforms,p,c);return y.setAll(_),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Zi?function(a,c,h,p){if(!Uc(a.precondition,c))return h;const y=r_(a.fieldTransforms,p,c),_=c.data;return _.setAll(jw(a)),_.setAll(y),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(a,c,h){return Uc(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):h}(n,e,t)}function cR(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=Ow(i.transform,o||null);a!=null&&(t===null&&(t=mn.empty()),t.set(i.field,a))}return t||null}function t_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&ta(i,o,(a,c)=>aR(a,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xl extends jd{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Zi extends jd{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function jw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function n_(n,e,t){const i=new Map;Qe(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let o=0;o<t.length;o++){const a=n[o],c=a.transform,h=e.data.field(a.field);i.set(a.field,oR(c,h,t[o]))}return i}function r_(n,e,t){const i=new Map;for(const o of n){const a=o.transform,c=t.data.field(o.field);i.set(o.field,sR(a,c,e))}return i}class am extends jd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dR extends jd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hR{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&uR(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=kl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=kl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Nw();return this.mutations.forEach(o=>{const a=e.get(o.key),c=a.overlayedDocument;let h=this.applyToLocalView(c,a.mutatedFields);h=t.has(o.key)?null:h;const p=Fw(c,h);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(ke.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Be())}isEqual(e){return this.batchId===e.batchId&&ta(this.mutations,e.mutations,(t,i)=>t_(t,i))&&ta(this.baseMutations,e.baseMutations,(t,i)=>t_(t,i))}}class lm{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Qe(e.mutations.length===i.length,58842,{fe:e.mutations.length,ge:i.length});let o=function(){return eR}();const a=e.mutations;for(let c=0;c<a.length;c++)o=o.insert(a[c].key,i[c].version);return new lm(e,t,i,o)}}/**
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
 */class fR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Tt,He;function mR(n){switch(n){case X.OK:return Ce(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return Ce(15467,{code:n})}}function Uw(n){if(n===void 0)return ri("GRPC error has no .code"),X.UNKNOWN;switch(n){case Tt.OK:return X.OK;case Tt.CANCELLED:return X.CANCELLED;case Tt.UNKNOWN:return X.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return X.INTERNAL;case Tt.UNAVAILABLE:return X.UNAVAILABLE;case Tt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Tt.NOT_FOUND:return X.NOT_FOUND;case Tt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Tt.ABORTED:return X.ABORTED;case Tt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Tt.DATA_LOSS:return X.DATA_LOSS;default:return Ce(39323,{code:n})}}(He=Tt||(Tt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const gR=new $i([4294967295,4294967295],0);function i_(n){const e=uw().encode(n),t=new tw;return t.update(e),new Uint8Array(t.digest())}function s_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new $i([t,i],0),new $i([o,a],0)]}class um{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new El(`Invalid padding: ${t}`);if(i<0)throw new El(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new El(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new El(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=$i.fromNumber(this.pe)}we(e,t,i){let o=e.add(t.multiply($i.fromNumber(i)));return o.compare(gR)===1&&(o=new $i([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=i_(e),[i,o]=s_(t);for(let a=0;a<this.hashCount;a++){const c=this.we(i,o,a);if(!this.be(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new um(a,o,t);return i.forEach(h=>c.insert(h)),c}insert(e){if(this.pe===0)return;const t=i_(e),[i,o]=s_(t);for(let a=0;a<this.hashCount;a++){const c=this.we(i,o,a);this.Se(c)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class El extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ud{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Jl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Ud(ke.min(),o,new ft(Me),ii(),Be())}}class Jl{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Jl(i,t,Be(),Be(),Be())}}/**
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
 */class zc{constructor(e,t,i,o){this.De=e,this.removedTargetIds=t,this.key=i,this.ve=o}}class zw{constructor(e,t){this.targetId=e,this.Ce=t}}class Bw{constructor(e,t,i=Ht.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class o_{constructor(){this.Fe=0,this.Me=a_(),this.xe=Ht.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Be(),t=Be(),i=Be();return this.Me.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ce(38017,{changeType:a})}}),new Jl(this.xe,this.Oe,e,t,i)}Qe(){this.Ne=!1,this.Me=a_()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Qe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class yR{constructor(e){this.ze=e,this.je=new Map,this.He=ii(),this.Je=Rc(),this.Ye=Rc(),this.Ze=new ft(Me)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const i=this.rt(t);switch(e.state){case 0:this.it(t)&&i.ke(e.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(e.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(t);break;case 3:this.it(t)&&(i.Ge(),i.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),i.ke(e.resumeToken));break;default:Ce(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((i,o)=>{this.it(o)&&t(o)})}ot(e){const t=e.targetId,i=e.Ce.count,o=this._t(t);if(o){const a=o.target;if(Ep(a))if(i===0){const c=new Te(a.path);this.tt(t,c,Jt.newNoDocument(c,ke.min()))}else Qe(i===1,20013,{expectedCount:i});else{const c=this.ut(t);if(c!==i){const h=this.ct(e),p=h?this.lt(h,e,c):1;if(p!==0){this.st(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let c,h;try{c=Gi(i).toUint8Array()}catch(p){if(p instanceof fw)return ea("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{h=new um(c,o,a)}catch(p){return ea(p instanceof El?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return h.pe===0?null:h}lt(e,t,i){return t.Ce.count===i-this.Tt(e,t.targetId)?0:2}Tt(e,t){const i=this.ze.getRemoteKeysForTarget(t);let o=0;return i.forEach(a=>{const c=this.ze.Pt(),h=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.tt(t,a,null),o++)}),o}It(e){const t=new Map;this.je.forEach((a,c)=>{const h=this._t(c);if(h){if(a.current&&Ep(h.target)){const p=new Te(h.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,Jt.newNoDocument(p,e))}a.Le&&(t.set(c,a.qe()),a.Qe())}});let i=Be();this.Ye.forEach((a,c)=>{let h=!0;c.forEachWhile(p=>{const y=this._t(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(i=i.add(a))}),this.He.forEach((a,c)=>c.setReadTime(e));const o=new Ud(e,t,this.Ze,this.He,i);return this.He=ii(),this.Je=Rc(),this.Ye=Rc(),this.Ze=new ft(Me),o}et(e,t){if(!this.it(e))return;const i=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,i),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,i){if(!this.it(e))return;const o=this.rt(e);this.dt(e,t)?o.$e(t,1):o.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),i&&(this.He=this.He.insert(t,i))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new o_,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new bt(Me),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new bt(Me),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new o_),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Rc(){return new ft(Te.comparator)}function a_(){return new ft(Te.comparator)}const vR={asc:"ASCENDING",desc:"DESCENDING"},_R={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wR={and:"AND",or:"OR"};class ER{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sp(n,e){return n.useProto3Json||Dd(e)?e:{value:e}}function ld(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $w(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function TR(n,e){return ld(n,e.toTimestamp())}function Sr(n){return Qe(!!n,49232),ke.fromTimestamp(function(t){const i=Wi(t);return new kt(i.seconds,i.nanos)}(n))}function cm(n,e){return xp(n,e).canonicalString()}function xp(n,e){const t=function(o){return new ot(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function qw(n){const e=ot.fromString(n);return Qe(Qw(e),10190,{key:e.toString()}),e}function Cp(n,e){return cm(n.databaseId,e.path)}function Gf(n,e){const t=qw(e);if(t.get(1)!==n.databaseId.projectId)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Te(Ww(t))}function Hw(n,e){return cm(n.databaseId,e)}function IR(n){const e=qw(n);return e.length===4?ot.emptyPath():Ww(e)}function Rp(n){return new ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ww(n){return Qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function l_(n,e,t){return{name:Cp(n,e),fields:t.value.mapValue.fields}}function SR(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ce(39313,{state:y})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(y,_){return y.useProto3Json?(Qe(_===void 0||typeof _=="string",58123),Ht.fromBase64String(_||"")):(Qe(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Ht.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,h=c&&function(y){const _=y.code===void 0?X.UNKNOWN:Uw(y.code);return new fe(_,y.message||"")}(c);t=new Bw(i,o,a,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Gf(n,i.document.name),a=Sr(i.document.updateTime),c=i.document.createTime?Sr(i.document.createTime):ke.min(),h=new mn({mapValue:{fields:i.document.fields}}),p=Jt.newFoundDocument(o,a,c,h),y=i.targetIds||[],_=i.removedTargetIds||[];t=new zc(y,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Gf(n,i.document),a=i.readTime?Sr(i.readTime):ke.min(),c=Jt.newNoDocument(o,a),h=i.removedTargetIds||[];t=new zc([],h,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Gf(n,i.document),a=i.removedTargetIds||[];t=new zc([],a,o,null)}else{if(!("filter"in e))return Ce(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,c=new pR(o,a),h=i.targetId;t=new zw(h,c)}}return t}function xR(n,e){let t;if(e instanceof Xl)t={update:l_(n,e.key,e.value)};else if(e instanceof am)t={delete:Cp(n,e.key)};else if(e instanceof Zi)t={update:l_(n,e.key,e.data),updateMask:OR(e.fieldMask)};else{if(!(e instanceof dR))return Ce(16599,{ft:e.type});t={verify:Cp(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(a,c){const h=c.transform;if(h instanceof od)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof jl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Ul)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof ad)return{fieldPath:c.field.canonicalString(),increment:h.Re};throw Ce(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:TR(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ce(27497)}(n,e.precondition)),t}function CR(n,e){return n&&n.length>0?(Qe(e!==void 0,14353),n.map(t=>function(o,a){let c=o.updateTime?Sr(o.updateTime):Sr(a);return c.isEqual(ke.min())&&(c=Sr(a)),new lR(c,o.transformResults||[])}(t,e))):[]}function RR(n,e){return{documents:[Hw(n,e.path)]}}function AR(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Hw(n,o);const a=function(y){if(y.length!==0)return Kw(or.create(y,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const c=function(y){if(y.length!==0)return y.map(_=>function(E){return{field:$o(E.field),direction:bR(E.dir)}}(_))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const h=Sp(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{gt:t,parent:o}}function PR(n){let e=IR(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Qe(i===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let a=[];t.where&&(a=function(T){const E=Gw(T);return E instanceof or&&Iw(E)?E.getFilters():[E]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(E=>function(P){return new sd(qo(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(E))}(t.orderBy));let h=null;t.limit&&(h=function(T){let E;return E=typeof T=="object"?T.value:T,Dd(E)?null:E}(t.limit));let p=null;t.startAt&&(p=function(T){const E=!!T.before,b=T.values||[];return new id(b,E)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const E=!T.before,b=T.values||[];return new id(b,E)}(t.endAt)),QC(e,o,c,a,h,"F",p,y)}function kR(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ce(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Gw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=qo(t.unaryFilter.field);return St.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=qo(t.unaryFilter.field);return St.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=qo(t.unaryFilter.field);return St.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=qo(t.unaryFilter.field);return St.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ce(61313);default:return Ce(60726)}}(n):n.fieldFilter!==void 0?function(t){return St.create(qo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ce(58110);default:return Ce(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return or.create(t.compositeFilter.filters.map(i=>Gw(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ce(1026)}}(t.compositeFilter.op))}(n):Ce(30097,{filter:n})}function bR(n){return vR[n]}function NR(n){return _R[n]}function DR(n){return wR[n]}function $o(n){return{fieldPath:n.canonicalString()}}function qo(n){return qt.fromServerFormat(n.fieldPath)}function Kw(n){return n instanceof St?function(t){if(t.op==="=="){if(Qv(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NAN"}};if(Kv(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qv(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NAN"}};if(Kv(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$o(t.field),op:NR(t.op),value:t.value}}}(n):n instanceof or?function(t){const i=t.getFilters().map(o=>Kw(o));return i.length===1?i[0]:{compositeFilter:{op:DR(t.op),filters:i}}}(n):Ce(54877,{filter:n})}function OR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ji{constructor(e,t,i,o,a=ke.min(),c=ke.min(),h=Ht.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=h,this.expectedCount=p}withSequenceNumber(e){return new ji(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ji(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VR{constructor(e){this.wt=e}}function LR(n){const e=PR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ip(e,e.limit,"L"):e}/**
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
 */class MR{constructor(){this.Cn=new FR}addToCollectionParentIndex(e,t){return this.Cn.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(Hi.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(Hi.min())}updateCollectionGroup(e,t,i){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}}class FR{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new bt(ot.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new bt(ot.comparator)).toArray()}}/**
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
 */const u_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yw=41943040;class pn{static withCacheSize(e){return new pn(e,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */pn.DEFAULT_COLLECTION_PERCENTILE=10,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pn.DEFAULT=new pn(Yw,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pn.DISABLED=new pn(-1,0,0);/**
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
 */class ia{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ia(0)}static lr(){return new ia(-1)}}/**
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
 */const c_="LruGarbageCollector",jR=1048576;function d_([n,e],[t,i]){const o=Me(n,t);return o===0?Me(e,i):o}class UR{constructor(e){this.Er=e,this.buffer=new bt(d_),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();d_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){de(c_,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ya(t)?de(c_,"Ignoring IndexedDB error during garbage collection: ",t):await ga(t)}await this.mr(3e5)})}}class BR{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return Y.resolve(Nd.le);const i=new UR(t);return this.gr.forEachTarget(e,o=>i.Rr(o.sequenceNumber)).next(()=>this.gr.yr(e,o=>i.Rr(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.gr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(u_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),u_):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let i,o,a,c,h,p,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,h=Date.now(),this.removeTargets(e,i,t))).next(T=>(a=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),zo()<=ze.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${o} in `+(h-c)+`ms
	Removed ${a} targets in `+(p-h)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-_}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:T})))}}function $R(n,e){return new BR(n,e)}/**
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
 */class qR{constructor(){this.changes=new Hs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Y.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class WR{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&kl(i.mutation,o,Cn.empty(),kt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Be()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Be()){const o=bs();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(a=>{let c=wl();return a.forEach((h,p)=>{c=c.insert(h,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=bs();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Be()))}populateOverlays(e,t,i){const o=[];return i.forEach(a=>{t.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((c,h)=>{t.set(c,h)})})}computeViews(e,t,i,o){let a=ii();const c=Pl(),h=function(){return Pl()}();return t.forEach((p,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof Zi)?a=a.insert(y.key,y):_!==void 0?(c.set(y.key,_.mutation.getFieldMask()),kl(_.mutation,y,_.mutation.getFieldMask(),kt.now())):c.set(y.key,Cn.empty())}),this.recalculateAndSaveOverlays(e,a).next(p=>(p.forEach((y,_)=>c.set(y,_)),t.forEach((y,_)=>{var T;return h.set(y,new HR(_,(T=c.get(y))!==null&&T!==void 0?T:null))}),h))}recalculateAndSaveOverlays(e,t){const i=Pl();let o=new ft((c,h)=>c-h),a=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const h of c)h.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let _=i.get(p)||Cn.empty();_=h.applyToLocalView(y,_),i.set(p,_);const T=(o.get(h.batchId)||Be()).add(p);o=o.insert(h.batchId,T)})}).next(()=>{const c=[],h=o.getReverseIterator();for(;h.hasNext();){const p=h.getNext(),y=p.key,_=p.value,T=Nw();_.forEach(E=>{if(!a.has(E)){const b=Fw(t.get(E),i.get(E));b!==null&&T.set(E,b),a=a.add(E)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return Y.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return Te.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Rw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(a=>{const c=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):Y.resolve(bs());let h=Vl,p=a;return c.next(y=>Y.forEach(y,(_,T)=>(h<T.largestBatchId&&(h=T.largestBatchId),a.get(_)?Y.resolve():this.remoteDocumentCache.getEntry(e,_).next(E=>{p=p.insert(_,E)}))).next(()=>this.populateOverlays(e,y,a)).next(()=>this.computeViews(e,p,y,Be())).next(_=>({batchId:h,changes:bw(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next(i=>{let o=wl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let c=wl();return this.indexManager.getCollectionParents(e,a).next(h=>Y.forEach(h,p=>{const y=function(T,E){return new Yl(E,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(_=>{_.forEach((T,E)=>{c=c.insert(T,E)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o))).next(c=>{a.forEach((p,y)=>{const _=y.getKey();c.get(_)===null&&(c=c.insert(_,Jt.newInvalidDocument(_)))});let h=wl();return c.forEach((p,y)=>{const _=a.get(p);_!==void 0&&kl(_.mutation,y,Cn.empty(),kt.now()),Md(t,y)&&(h=h.insert(p,y))}),h})}}/**
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
 */class GR{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return Y.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Sr(o.createTime)}}(t)),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(o){return{name:o.name,query:LR(o.bundledQuery),readTime:Sr(o.readTime)}}(t)),Y.resolve()}}/**
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
 */class KR{constructor(){this.overlays=new ft(Te.comparator),this.Qr=new Map}getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const i=bs();return Y.forEach(t,o=>this.getOverlay(e,o).next(a=>{a!==null&&i.set(o,a)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,a)=>{this.St(e,t,a)}),Y.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Qr.get(i);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.Qr.delete(i)),Y.resolve()}getOverlaysForCollection(e,t,i){const o=bs(),a=t.length+1,c=new Te(t.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){const p=h.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===a&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Y.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new ft((y,_)=>y-_);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=a.get(y.largestBatchId);_===null&&(_=bs(),a=a.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const h=bs(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,_)=>h.set(y,_)),!(h.size()>=o)););return Y.resolve(h)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Qr.get(o.largestBatchId).delete(i.key);this.Qr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new fR(t,i));let a=this.Qr.get(t);a===void 0&&(a=Be(),this.Qr.set(t,a)),this.Qr.set(t,a.add(i.key))}}/**
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
 */class QR{constructor(){this.sessionToken=Ht.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Y.resolve()}}/**
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
 */class dm{constructor(){this.$r=new bt(Mt.Ur),this.Kr=new bt(Mt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const i=new Mt(e,t);this.$r=this.$r.add(i),this.Kr=this.Kr.add(i)}Gr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.zr(new Mt(e,t))}jr(e,t){e.forEach(i=>this.removeReference(i,t))}Hr(e){const t=new Te(new ot([])),i=new Mt(t,e),o=new Mt(t,e+1),a=[];return this.Kr.forEachInRange([i,o],c=>{this.zr(c),a.push(c.key)}),a}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Te(new ot([])),i=new Mt(t,e),o=new Mt(t,e+1);let a=Be();return this.Kr.forEachInRange([i,o],c=>{a=a.add(c.key)}),a}containsKey(e){const t=new Mt(e,0),i=this.$r.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Mt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Te.comparator(e.key,t.key)||Me(e.Zr,t.Zr)}static Wr(e,t){return Me(e.Zr,t.Zr)||Te.comparator(e.key,t.key)}}/**
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
 */class YR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new bt(Mt.Ur)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new hR(a,t,i,o);this.mutationQueue.push(c);for(const h of o)this.Xr=this.Xr.add(new Mt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return Y.resolve(c)}lookupMutationBatch(e,t){return Y.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ti(i),a=o<0?0:o;return Y.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?tm:this.nr-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Mt(t,0),o=new Mt(t,Number.POSITIVE_INFINITY),a=[];return this.Xr.forEachInRange([i,o],c=>{const h=this.ei(c.Zr);a.push(h)}),Y.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new bt(Me);return t.forEach(o=>{const a=new Mt(o,0),c=new Mt(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([a,c],h=>{i=i.add(h.Zr)})}),Y.resolve(this.ni(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;Te.isDocumentKey(a)||(a=a.child(""));const c=new Mt(new Te(a),0);let h=new bt(Me);return this.Xr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(h=h.add(p.Zr)),!0)},c),Y.resolve(this.ni(h))}ni(e){const t=[];return e.forEach(i=>{const o=this.ei(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Qe(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Xr;return Y.forEach(t.mutations,o=>{const a=new Mt(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Xr=i})}sr(e){}containsKey(e,t){const i=new Mt(t,0),o=this.Xr.firstAfterOrEqual(i);return Y.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class XR{constructor(e){this.ii=e,this.docs=function(){return new ft(Te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,c=this.ii(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Y.resolve(i?i.document.mutableCopy():Jt.newInvalidDocument(t))}getEntries(e,t){let i=ii();return t.forEach(o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():Jt.newInvalidDocument(o))}),Y.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=ii();const c=t.path,h=new Te(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(h);for(;p.hasNext();){const{key:y,value:{document:_}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||RC(CC(_),i)<=0||(o.has(_.key)||Md(t,_))&&(a=a.insert(_.key,_.mutableCopy()))}return Y.resolve(a)}getAllFromCollectionGroup(e,t,i,o){Ce(9500)}si(e,t){return Y.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new JR(this)}getSize(e){return Y.resolve(this.size)}}class JR extends qR{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.Br.addEntry(e,o)):this.Br.removeEntry(i)}),Y.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class ZR{constructor(e){this.persistence=e,this.oi=new Hs(t=>im(t),sm),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this._i=0,this.ai=new dm,this.targetCount=0,this.ui=ia.cr()}forEachTarget(e,t){return this.oi.forEach((i,o)=>t(o)),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this._i&&(this._i=t),Y.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ia(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.Tr(t),Y.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.oi.forEach((c,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.oi.delete(c),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)}),Y.waitFor(a).next(()=>o)}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const i=this.oi.get(t)||null;return Y.resolve(i)}addMatchingKeys(e,t,i){return this.ai.Gr(t,i),Y.resolve()}removeMatchingKeys(e,t,i){this.ai.jr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach(c=>{a.push(o.markPotentiallyOrphaned(e,c))}),Y.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ai.Yr(t);return Y.resolve(i)}containsKey(e,t){return Y.resolve(this.ai.containsKey(t))}}/**
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
 */class Xw{constructor(e,t){this.ci={},this.overlays={},this.li=new Nd(0),this.hi=!1,this.hi=!0,this.Pi=new QR,this.referenceDelegate=e(this),this.Ti=new ZR(this),this.indexManager=new MR,this.remoteDocumentCache=function(o){return new XR(o)}(i=>this.referenceDelegate.Ii(i)),this.serializer=new VR(t),this.Ei=new GR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new KR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ci[e.toKey()];return i||(i=new YR(t,this.referenceDelegate),this.ci[e.toKey()]=i),i}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,i){de("MemoryPersistence","Starting transaction:",e);const o=new eA(this.li.next());return this.referenceDelegate.di(),i(o).next(a=>this.referenceDelegate.Ai(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Ri(e,t){return Y.or(Object.values(this.ci).map(i=>()=>i.containsKey(e,t)))}}class eA extends PC{constructor(e){super(),this.currentSequenceNumber=e}}class hm{constructor(e){this.persistence=e,this.Vi=new dm,this.mi=null}static fi(e){return new hm(e)}get gi(){if(this.mi)return this.mi;throw Ce(60996)}addReference(e,t,i){return this.Vi.addReference(i,t),this.gi.delete(i.toString()),Y.resolve()}removeReference(e,t,i){return this.Vi.removeReference(i,t),this.gi.add(i.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),Y.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(o=>this.gi.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(a=>this.gi.add(a.toString()))}).next(()=>i.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.gi,i=>{const o=Te.fromPath(i);return this.pi(e,o).next(a=>{a||t.removeEntry(o,ke.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(i=>{i?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return Y.or([()=>Y.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class ud{constructor(e,t){this.persistence=e,this.yi=new Hs(i=>NC(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=$R(this,t)}static fi(e,t){return new ud(e,t)}di(){}Ai(e){return Y.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}br(e){let t=0;return this.yr(e,i=>{t++}).next(()=>t)}yr(e,t){return Y.forEach(this.yi,(i,o)=>this.Dr(e,i,o).next(a=>a?Y.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.si(e,c=>this.Dr(e,c,t).next(h=>{h||(i++,a.removeEntry(c,ke.min()))})).next(()=>a.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),Y.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),Y.resolve()}removeReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),Y.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),Y.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fc(e.data.value)),t}Dr(e,t,i){return Y.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.yi.get(t);return Y.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class fm{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.ds=i,this.As=o}static Rs(e,t){let i=Be(),o=Be();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new fm(e,t.fromCache,i,o)}}/**
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
 */class tA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class nA{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return JS()?8:kC(en())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.ws(e,t).next(c=>{a.result=c}).next(()=>{if(!a.result)return this.bs(e,t,o,i).next(c=>{a.result=c})}).next(()=>{if(a.result)return;const c=new tA;return this.Ss(e,t,c).next(h=>{if(a.result=h,this.fs)return this.Ds(e,t,c,h.size)})}).next(()=>a.result)}Ds(e,t,i,o){return i.documentReadCount<this.gs?(zo()<=ze.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",Bo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),Y.resolve()):(zo()<=ze.DEBUG&&de("QueryEngine","Query:",Bo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ps*o?(zo()<=ze.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",Bo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ir(t))):Y.resolve())}ws(e,t){if(Zv(t))return Y.resolve(null);let i=Ir(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Ip(t,null,"F"),i=Ir(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const c=Be(...a);return this.ys.getDocuments(e,c).next(h=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.vs(t,h);return this.Cs(t,y,c,p.readTime)?this.ws(e,Ip(t,null,"F")):this.Fs(e,y,t,p)}))})))}bs(e,t,i,o){return Zv(t)||o.isEqual(ke.min())?Y.resolve(null):this.ys.getDocuments(e,i).next(a=>{const c=this.vs(t,a);return this.Cs(t,c,i,o)?Y.resolve(null):(zo()<=ze.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Bo(t)),this.Fs(e,c,t,xC(o,Vl)).next(h=>h))})}vs(e,t){let i=new bt(Pw(e));return t.forEach((o,a)=>{Md(e,a)&&(i=i.add(a))}),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}Ss(e,t,i){return zo()<=ze.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",Bo(t)),this.ys.getDocumentsMatchingQuery(e,t,Hi.min(),i)}Fs(e,t,i,o){return this.ys.getDocumentsMatchingQuery(e,i,o).next(a=>(t.forEach(c=>{a=a.insert(c.key,c)}),a))}}/**
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
 */const pm="LocalStore",rA=3e8;class iA{constructor(e,t,i,o){this.persistence=e,this.Ms=t,this.serializer=o,this.xs=new ft(Me),this.Os=new Hs(a=>im(a),sm),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(i)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WR(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function sA(n,e,t,i){return new iA(n,e,t,i)}async function Jw(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(a=>(o=a,t.Ls(e),t.mutationQueue.getAllMutationBatches(i))).next(a=>{const c=[],h=[];let p=Be();for(const y of o){c.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}for(const y of a){h.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(i,p).next(y=>({ks:y,removedBatchIds:c,addedBatchIds:h}))})})}function oA(n,e){const t=be(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),a=t.Bs.newChangeBuffer({trackRemovals:!0});return function(h,p,y,_){const T=y.batch,E=T.keys();let b=Y.resolve();return E.forEach(P=>{b=b.next(()=>_.getEntry(p,P)).next(M=>{const O=y.docVersions.get(P);Qe(O!==null,48541),M.version.compareTo(O)<0&&(T.applyToRemoteDocument(M,y),M.isValidDocument()&&(M.setReadTime(y.commitVersion),_.addEntry(M)))})}),b.next(()=>h.mutationQueue.removeMutationBatch(p,T))}(t,i,e,a).next(()=>a.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let p=Be();for(let y=0;y<h.mutationResults.length;++y)h.mutationResults[y].transformResults.length>0&&(p=p.add(h.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Zw(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function aA(n,e){const t=be(n),i=e.snapshotVersion;let o=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});o=t.xs;const h=[];e.targetChanges.forEach((_,T)=>{const E=o.get(T);if(!E)return;h.push(t.Ti.removeMatchingKeys(a,_.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(a,_.addedDocuments,T)));let b=E.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(T)!==null?b=b.withResumeToken(Ht.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):_.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(_.resumeToken,i)),o=o.insert(T,b),function(M,O,$){return M.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=rA?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(E,b,_)&&h.push(t.Ti.updateTargetData(a,b))});let p=ii(),y=Be();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,_))}),h.push(lA(a,c,e.documentUpdates).next(_=>{p=_.qs,y=_.Qs})),!i.isEqual(ke.min())){const _=t.Ti.getLastRemoteSnapshotVersion(a).next(T=>t.Ti.setTargetsMetadata(a,a.currentSequenceNumber,i));h.push(_)}return Y.waitFor(h).next(()=>c.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,p,y)).next(()=>p)}).then(a=>(t.xs=o,a))}function lA(n,e,t){let i=Be(),o=Be();return t.forEach(a=>i=i.add(a)),e.getEntries(n,i).next(a=>{let c=ii();return t.forEach((h,p)=>{const y=a.get(h);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(h)),p.isNoDocument()&&p.version.isEqual(ke.min())?(e.removeEntry(h,p.readTime),c=c.insert(h,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(h,p)):de(pm,"Ignoring outdated watch update for ",h,". Current version:",y.version," Watch version:",p.version)}),{qs:c,Qs:o}})}function uA(n,e){const t=be(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=tm),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function cA(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Ti.getTargetData(i,e).next(a=>a?(o=a,Y.resolve(o)):t.Ti.allocateTargetId(i).next(c=>(o=new ji(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ti.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.xs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.xs=t.xs.insert(i.targetId,i),t.Os.set(e,i.targetId)),i})}async function Ap(n,e,t){const i=be(n),o=i.xs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!ya(c))throw c;de(pm,`Failed to update sequence numbers for target ${e}: ${c}`)}i.xs=i.xs.remove(e),i.Os.delete(o.target)}function h_(n,e,t){const i=be(n);let o=ke.min(),a=Be();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,_){const T=be(p),E=T.Os.get(_);return E!==void 0?Y.resolve(T.xs.get(E)):T.Ti.getTargetData(y,_)}(i,c,Ir(e)).next(h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,i.Ti.getMatchingKeysForTargetId(c,h.targetId).next(p=>{a=p})}).next(()=>i.Ms.getDocumentsMatchingQuery(c,e,t?o:ke.min(),t?a:Be())).next(h=>(dA(i,XC(e),h),{documents:h,$s:a})))}function dA(n,e,t){let i=n.Ns.get(e)||ke.min();t.forEach((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),n.Ns.set(e,i)}class f_{constructor(){this.activeTargetIds=rR()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hA{constructor(){this.xo=new f_,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,i){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new f_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fA{No(e){}shutdown(){}}/**
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
 */const p_="ConnectivityMonitor";class m_{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){de(p_,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){de(p_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ac=null;function Pp(){return Ac===null?Ac=function(){return 268435456+Math.round(2147483648*Math.random())}():Ac++,"0x"+Ac.toString(16)}/**
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
 */const Kf="RestConnection",pA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mA{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${i}/databases/${o}`,this.Go=this.databaseId.database===nd?`project_id=${i}`:`project_id=${i}&database_id=${o}`}zo(e,t,i,o,a){const c=Pp(),h=this.jo(e,t.toUriEncodedString());de(Kf,`Sending RPC '${e}' ${c}:`,h,i);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,o,a);const{host:y}=new URL(h),_=fa(y);return this.Jo(e,h,p,i,_).then(T=>(de(Kf,`Received RPC '${e}' ${c}: `,T),T),T=>{throw ea(Kf,`RPC '${e}' ${c} failed with error: `,T,"url: ",h,"request:",i),T})}Yo(e,t,i,o,a,c){return this.zo(e,t,i,o,a)}Ho(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ma}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}jo(e,t){const i=pA[e];return`${this.Ko}/v1/${t}:${i}`}terminate(){}}/**
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
 */class gA{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Yt="WebChannelConnection";class yA extends mA{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,a){const c=Pp();return new Promise((h,p)=>{const y=new nw;y.setWithCredentials(!0),y.listenOnce(rw.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Mc.NO_ERROR:const T=y.getResponseJson();de(Yt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),h(T);break;case Mc.TIMEOUT:de(Yt,`RPC '${e}' ${c} timed out`),p(new fe(X.DEADLINE_EXCEEDED,"Request time out"));break;case Mc.HTTP_ERROR:const E=y.getStatus();if(de(Yt,`RPC '${e}' ${c} failed with status:`,E,"response text:",y.getResponseText()),E>0){let b=y.getResponseJson();Array.isArray(b)&&(b=b[0]);const P=b==null?void 0:b.error;if(P&&P.status&&P.message){const M=function($){const B=$.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(B)>=0?B:X.UNKNOWN}(P.status);p(new fe(M,P.message))}else p(new fe(X.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new fe(X.UNAVAILABLE,"Connection failed."));break;default:Ce(9055,{h_:e,streamId:c,P_:y.getLastErrorCode(),T_:y.getLastError()})}}finally{de(Yt,`RPC '${e}' ${c} completed.`)}});const _=JSON.stringify(o);de(Yt,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",_,i,15)})}I_(e,t,i){const o=Pp(),a=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=ow(),h=sw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const _=a.join("");de(Yt,`Creating RPC '${e}' stream ${o}: ${_}`,p);const T=c.createWebChannel(_,p);this.E_(T);let E=!1,b=!1;const P=new gA({Zo:O=>{b?de(Yt,`Not sending because RPC '${e}' stream ${o} is closed:`,O):(E||(de(Yt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),E=!0),de(Yt,`RPC '${e}' stream ${o} sending:`,O),T.send(O))},Xo:()=>T.close()}),M=(O,$,B)=>{O.listen($,K=>{try{B(K)}catch(J){setTimeout(()=>{throw J},0)}})};return M(T,_l.EventType.OPEN,()=>{b||(de(Yt,`RPC '${e}' stream ${o} transport opened.`),P.__())}),M(T,_l.EventType.CLOSE,()=>{b||(b=!0,de(Yt,`RPC '${e}' stream ${o} transport closed`),P.u_(),this.d_(T))}),M(T,_l.EventType.ERROR,O=>{b||(b=!0,ea(Yt,`RPC '${e}' stream ${o} transport errored. Name:`,O.name,"Message:",O.message),P.u_(new fe(X.UNAVAILABLE,"The operation could not be completed")))}),M(T,_l.EventType.MESSAGE,O=>{var $;if(!b){const B=O.data[0];Qe(!!B,16349);const K=B,J=(K==null?void 0:K.error)||(($=K[0])===null||$===void 0?void 0:$.error);if(J){de(Yt,`RPC '${e}' stream ${o} received error:`,J);const re=J.status;let ee=function(x){const N=Tt[x];if(N!==void 0)return Uw(N)}(re),C=J.message;ee===void 0&&(ee=X.INTERNAL,C="Unknown error status: "+re+" with message "+J.message),b=!0,P.u_(new fe(ee,C)),T.close()}else de(Yt,`RPC '${e}' stream ${o} received:`,B),P.c_(B)}}),M(h,iw.STAT_EVENT,O=>{O.stat===gp.PROXY?de(Yt,`RPC '${e}' stream ${o} detected buffering proxy`):O.stat===gp.NOPROXY&&de(Yt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Qf(){return typeof document<"u"?document:null}/**
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
 */function zd(n){return new ER(n,!0)}/**
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
 */class eE{constructor(e,t,i=1e3,o=1.5,a=6e4){this.xi=e,this.timerId=t,this.A_=i,this.R_=o,this.V_=a,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),i=Math.max(0,Date.now()-this.g_),o=Math.max(0,t-i);o>0&&de("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const g_="PersistentStream";class tE{constructor(e,t,i,o,a,c,h,p){this.xi=e,this.S_=i,this.D_=o,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=p,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new eE(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(ri(t.toString()),ri("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.v_===t&&this.z_(i,o)},i=>{e(()=>{const o=new fe(X.UNKNOWN,"Fetching auth token failed: "+i.message);return this.j_(o)})})}z_(e,t){const i=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{i(()=>this.listener.e_())}),this.stream.n_(()=>{i(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{i(()=>this.j_(o))}),this.stream.onMessage(o=>{i(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return de(g_,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(de(g_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vA extends tE{constructor(e,t,i,o,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=SR(this.serializer,e),i=function(a){if(!("targetChange"in a))return ke.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?ke.min():c.readTime?Sr(c.readTime):ke.min()}(e);return this.listener.Y_(t,i)}Z_(e){const t={};t.database=Rp(this.serializer),t.addTarget=function(a,c){let h;const p=c.target;if(h=Ep(p)?{documents:RR(a,p)}:{query:AR(a,p).gt},h.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){h.resumeToken=$w(a,c.resumeToken);const y=Sp(a,c.expectedCount);y!==null&&(h.expectedCount=y)}else if(c.snapshotVersion.compareTo(ke.min())>0){h.readTime=ld(a,c.snapshotVersion.toTimestamp());const y=Sp(a,c.expectedCount);y!==null&&(h.expectedCount=y)}return h}(this.serializer,e);const i=kR(this.serializer,e);i&&(t.labels=i),this.Q_(t)}X_(e){const t={};t.database=Rp(this.serializer),t.removeTarget=e,this.Q_(t)}}class _A extends tE{constructor(e,t,i,o,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=CR(e.writeResults,e.commitTime),i=Sr(e.commitTime);return this.listener.ra(i,t)}ia(){const e={};e.database=Rp(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>xR(this.serializer,i))};this.Q_(t)}}/**
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
 */class wA{}class EA extends wA{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,i,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.zo(e,xp(t,i),o,a,c)).catch(a=>{throw a.name==="FirebaseError"?(a.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new fe(X.UNKNOWN,a.toString())})}Yo(e,t,i,o,a){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,h])=>this.connection.Yo(e,xp(t,i),o,c,h,a)).catch(c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new fe(X.UNKNOWN,c.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class TA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(ri(t),this.ua=!1):de("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const js="RemoteStore";class IA{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=a,this.Ra.No(c=>{i.enqueueAndForget(async()=>{Ws(this)&&(de(js,"Restarting streams for network reachability change."),await async function(p){const y=be(p);y.da.add(4),await Zl(y),y.Va.set("Unknown"),y.da.delete(4),await Bd(y)}(this))})}),this.Va=new TA(i,o)}}async function Bd(n){if(Ws(n))for(const e of n.Aa)await e(!0)}async function Zl(n){for(const e of n.Aa)await e(!1)}function nE(n,e){const t=be(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),vm(t)?ym(t):va(t).N_()&&gm(t,e))}function mm(n,e){const t=be(n),i=va(t);t.Ea.delete(e),i.N_()&&rE(t,e),t.Ea.size===0&&(i.N_()?i.k_():Ws(t)&&t.Va.set("Unknown"))}function gm(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}va(n).Z_(e)}function rE(n,e){n.ma.Ke(e),va(n).X_(e)}function ym(n){n.ma=new yR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),va(n).start(),n.Va.ca()}function vm(n){return Ws(n)&&!va(n).O_()&&n.Ea.size>0}function Ws(n){return be(n).da.size===0}function iE(n){n.ma=void 0}async function SA(n){n.Va.set("Online")}async function xA(n){n.Ea.forEach((e,t)=>{gm(n,e)})}async function CA(n,e){iE(n),vm(n)?(n.Va.Pa(e),ym(n)):n.Va.set("Unknown")}async function RA(n,e,t){if(n.Va.set("Online"),e instanceof Bw&&e.state===2&&e.cause)try{await async function(o,a){const c=a.cause;for(const h of a.targetIds)o.Ea.has(h)&&(await o.remoteSyncer.rejectListen(h,c),o.Ea.delete(h),o.ma.removeTarget(h))}(n,e)}catch(i){de(js,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await cd(n,i)}else if(e instanceof zc?n.ma.Xe(e):e instanceof zw?n.ma.ot(e):n.ma.nt(e),!t.isEqual(ke.min()))try{const i=await Zw(n.localStore);t.compareTo(i)>=0&&await function(a,c){const h=a.ma.It(c);return h.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const _=a.Ea.get(y);_&&a.Ea.set(y,_.withResumeToken(p.resumeToken,c))}}),h.targetMismatches.forEach((p,y)=>{const _=a.Ea.get(p);if(!_)return;a.Ea.set(p,_.withResumeToken(Ht.EMPTY_BYTE_STRING,_.snapshotVersion)),rE(a,p);const T=new ji(_.target,p,y,_.sequenceNumber);gm(a,T)}),a.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(i){de(js,"Failed to raise snapshot:",i),await cd(n,i)}}async function cd(n,e,t){if(!ya(e))throw e;n.da.add(1),await Zl(n),n.Va.set("Offline"),t||(t=()=>Zw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{de(js,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Bd(n)})}function sE(n,e){return e().catch(t=>cd(n,t,e))}async function $d(n){const e=be(n),t=Qi(e);let i=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:tm;for(;AA(e);)try{const o=await uA(e.localStore,i);if(o===null){e.Ia.length===0&&t.k_();break}i=o.batchId,PA(e,o)}catch(o){await cd(e,o)}oE(e)&&aE(e)}function AA(n){return Ws(n)&&n.Ia.length<10}function PA(n,e){n.Ia.push(e);const t=Qi(n);t.N_()&&t.ea&&t.ta(e.mutations)}function oE(n){return Ws(n)&&!Qi(n).O_()&&n.Ia.length>0}function aE(n){Qi(n).start()}async function kA(n){Qi(n).ia()}async function bA(n){const e=Qi(n);for(const t of n.Ia)e.ta(t.mutations)}async function NA(n,e,t){const i=n.Ia.shift(),o=lm.from(i,e,t);await sE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await $d(n)}async function DA(n,e){e&&Qi(n).ea&&await async function(i,o){if(function(c){return mR(c)&&c!==X.ABORTED}(o.code)){const a=i.Ia.shift();Qi(i).L_(),await sE(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o)),await $d(i)}}(n,e),oE(n)&&aE(n)}async function y_(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),de(js,"RemoteStore received new credentials");const i=Ws(t);t.da.add(3),await Zl(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Bd(t)}async function OA(n,e){const t=be(n);e?(t.da.delete(2),await Bd(t)):e||(t.da.add(2),await Zl(t),t.Va.set("Unknown"))}function va(n){return n.fa||(n.fa=function(t,i,o){const a=be(t);return a.oa(),new vA(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{e_:SA.bind(null,n),n_:xA.bind(null,n),i_:CA.bind(null,n),Y_:RA.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),vm(n)?ym(n):n.Va.set("Unknown")):(await n.fa.stop(),iE(n))})),n.fa}function Qi(n){return n.ga||(n.ga=function(t,i,o){const a=be(t);return a.oa(),new _A(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:kA.bind(null,n),i_:DA.bind(null,n),na:bA.bind(null,n),ra:NA.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await $d(n)):(await n.ga.stop(),n.Ia.length>0&&(de(js,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
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
 */class _m{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new Jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const c=Date.now()+i,h=new _m(e,t,c,o,a);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wm(n,e){if(ri("AsyncQueue",`${e}: ${n}`),ya(n))return new fe(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ko{static emptySet(e){return new Ko(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Te.comparator(t.key,i.key):(t,i)=>Te.comparator(t.key,i.key),this.keyedMap=wl(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ko)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ko;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class v_{constructor(){this.pa=new ft(Te.comparator)}track(e){const t=e.doc.key,i=this.pa.get(t);i?e.type!==0&&i.type===3?this.pa=this.pa.insert(t,e):e.type===3&&i.type!==1?this.pa=this.pa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.pa=this.pa.remove(t):e.type===1&&i.type===2?this.pa=this.pa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):Ce(63341,{Vt:e,ya:i}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,i)=>{e.push(i)}),e}}class sa{constructor(e,t,i,o,a,c,h,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=h,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,a){const c=[];return t.forEach(h=>{c.push({type:0,doc:h})}),new sa(e,t,Ko.emptySet(t),c,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ld(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class VA{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class LA{constructor(){this.queries=__(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=be(t),a=o.queries;o.queries=__(),a.forEach((c,h)=>{for(const p of h.Sa)p.onError(i)})})(this,new fe(X.ABORTED,"Firestore shutting down"))}}function __(){return new Hs(n=>Aw(n),Ld)}async function Em(n,e){const t=be(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.Da()&&e.va()&&(i=2):(a=new VA,i=e.va()?0:1);try{switch(i){case 0:a.ba=await t.onListen(o,!0);break;case 1:a.ba=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const h=wm(c,`Initialization of query '${Bo(e.query)}' failed`);return void e.onError(h)}t.queries.set(o,a),a.Sa.push(e),e.Fa(t.onlineState),a.ba&&e.Ma(a.ba)&&Im(t)}async function Tm(n,e){const t=be(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const c=a.Sa.indexOf(e);c>=0&&(a.Sa.splice(c,1),a.Sa.length===0?o=e.va()?0:1:!a.Da()&&e.va()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function MA(n,e){const t=be(n);let i=!1;for(const o of e){const a=o.query,c=t.queries.get(a);if(c){for(const h of c.Sa)h.Ma(o)&&(i=!0);c.ba=o}}i&&Im(t)}function FA(n,e,t){const i=be(n),o=i.queries.get(e);if(o)for(const a of o.Sa)a.onError(t);i.queries.delete(e)}function Im(n){n.Ca.forEach(e=>{e.next()})}var kp,w_;(w_=kp||(kp={})).xa="default",w_.Cache="cache";class Sm{constructor(e,t,i){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=i||{}}Ma(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new sa(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const i=t!=="Offline";return(!this.options.Qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=sa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==kp.Cache}}/**
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
 */class lE{constructor(e){this.key=e}}class uE{constructor(e){this.key=e}}class jA{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Be(),this.mutatedKeys=Be(),this.Za=Pw(e),this.Xa=new Ko(this.Za)}get eu(){return this.Ha}tu(e,t){const i=t?t.nu:new v_,o=t?t.Xa:this.Xa;let a=t?t.mutatedKeys:this.mutatedKeys,c=o,h=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((_,T)=>{const E=o.get(_),b=Md(this.query,T)?T:null,P=!!E&&this.mutatedKeys.has(E.key),M=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let O=!1;E&&b?E.data.isEqual(b.data)?P!==M&&(i.track({type:3,doc:b}),O=!0):this.ru(E,b)||(i.track({type:2,doc:b}),O=!0,(p&&this.Za(b,p)>0||y&&this.Za(b,y)<0)&&(h=!0)):!E&&b?(i.track({type:0,doc:b}),O=!0):E&&!b&&(i.track({type:1,doc:E}),O=!0,(p||y)&&(h=!0)),O&&(b?(c=c.add(b),a=M?a.add(_):a.delete(_)):(c=c.delete(_),a=a.delete(_)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),a=a.delete(_.key),i.track({type:1,doc:_})}return{Xa:c,nu:i,Cs:h,mutatedKeys:a}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const c=e.nu.wa();c.sort((_,T)=>function(b,P){const M=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ce(20277,{Vt:O})}};return M(b)-M(P)}(_.type,T.type)||this.Za(_.doc,T.doc)),this.iu(i),o=o!=null&&o;const h=t&&!o?this.su():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Ja;return this.Ja=p,c.length!==0||y?{snapshot:new sa(this.query,e.Xa,a,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ou:h}:{ou:h}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new v_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Be(),this.Xa.forEach(i=>{this._u(i.key)&&(this.Ya=this.Ya.add(i.key))});const t=[];return e.forEach(i=>{this.Ya.has(i)||t.push(new uE(i))}),this.Ya.forEach(i=>{e.has(i)||t.push(new lE(i))}),t}au(e){this.Ha=e.$s,this.Ya=Be();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return sa.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const xm="SyncEngine";class UA{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class zA{constructor(e){this.key=e,this.cu=!1}}class BA{constructor(e,t,i,o,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.lu={},this.hu=new Hs(h=>Aw(h),Ld),this.Pu=new Map,this.Tu=new Set,this.Iu=new ft(Te.comparator),this.Eu=new Map,this.du=new dm,this.Au={},this.Ru=new Map,this.Vu=ia.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function $A(n,e,t=!0){const i=mE(n);let o;const a=i.hu.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.uu()):o=await cE(i,e,t,!0),o}async function qA(n,e){const t=mE(n);await cE(t,e,!0,!1)}async function cE(n,e,t,i){const o=await cA(n.localStore,Ir(e)),a=o.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let h;return i&&(h=await HA(n,e,a,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&nE(n.remoteStore,o),h}async function HA(n,e,t,i,o){n.fu=(T,E,b)=>async function(M,O,$,B){let K=O.view.tu($);K.Cs&&(K=await h_(M.localStore,O.query,!1).then(({documents:C})=>O.view.tu(C,K)));const J=B&&B.targetChanges.get(O.targetId),re=B&&B.targetMismatches.get(O.targetId)!=null,ee=O.view.applyChanges(K,M.isPrimaryClient,J,re);return T_(M,O.targetId,ee.ou),ee.snapshot}(n,T,E,b);const a=await h_(n.localStore,e,!0),c=new jA(e,a.$s),h=c.tu(a.documents),p=Jl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(h,n.isPrimaryClient,p);T_(n,t,y.ou);const _=new UA(e,t,c);return n.hu.set(e,_),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),y.snapshot}async function WA(n,e,t){const i=be(n),o=i.hu.get(e),a=i.Pu.get(o.targetId);if(a.length>1)return i.Pu.set(o.targetId,a.filter(c=>!Ld(c,e))),void i.hu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Ap(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&mm(i.remoteStore,o.targetId),bp(i,o.targetId)}).catch(ga)):(bp(i,o.targetId),await Ap(i.localStore,o.targetId,!0))}async function GA(n,e){const t=be(n),i=t.hu.get(e),o=t.Pu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),mm(t.remoteStore,i.targetId))}async function KA(n,e,t){const i=tP(n);try{const o=await function(c,h){const p=be(c),y=kt.now(),_=h.reduce((b,P)=>b.add(P.key),Be());let T,E;return p.persistence.runTransaction("Locally write mutations","readwrite",b=>{let P=ii(),M=Be();return p.Bs.getEntries(b,_).next(O=>{P=O,P.forEach(($,B)=>{B.isValidDocument()||(M=M.add($))})}).next(()=>p.localDocuments.getOverlayedDocuments(b,P)).next(O=>{T=O;const $=[];for(const B of h){const K=cR(B,T.get(B.key).overlayedDocument);K!=null&&$.push(new Zi(B.key,K,ww(K.value.mapValue),Fn.exists(!0)))}return p.mutationQueue.addMutationBatch(b,y,$,h)}).next(O=>{E=O;const $=O.applyToLocalDocumentSet(T,M);return p.documentOverlayCache.saveOverlays(b,O.batchId,$)})}).then(()=>({batchId:E.batchId,changes:bw(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,h,p){let y=c.Au[c.currentUser.toKey()];y||(y=new ft(Me)),y=y.insert(h,p),c.Au[c.currentUser.toKey()]=y}(i,o.batchId,t),await eu(i,o.changes),await $d(i.remoteStore)}catch(o){const a=wm(o,"Failed to persist write");t.reject(a)}}async function dE(n,e){const t=be(n);try{const i=await aA(t.localStore,e);e.targetChanges.forEach((o,a)=>{const c=t.Eu.get(a);c&&(Qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.cu=!0:o.modifiedDocuments.size>0?Qe(c.cu,14607):o.removedDocuments.size>0&&(Qe(c.cu,42227),c.cu=!1))}),await eu(t,i,e)}catch(i){await ga(i)}}function E_(n,e,t){const i=be(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.hu.forEach((a,c)=>{const h=c.view.Fa(e);h.snapshot&&o.push(h.snapshot)}),function(c,h){const p=be(c);p.onlineState=h;let y=!1;p.queries.forEach((_,T)=>{for(const E of T.Sa)E.Fa(h)&&(y=!0)}),y&&Im(p)}(i.eventManager,e),o.length&&i.lu.Y_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function QA(n,e,t){const i=be(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),a=o&&o.key;if(a){let c=new ft(Te.comparator);c=c.insert(a,Jt.newNoDocument(a,ke.min()));const h=Be().add(a),p=new Ud(ke.min(),new Map,new ft(Me),c,h);await dE(i,p),i.Iu=i.Iu.remove(a),i.Eu.delete(e),Cm(i)}else await Ap(i.localStore,e,!1).then(()=>bp(i,e,t)).catch(ga)}async function YA(n,e){const t=be(n),i=e.batch.batchId;try{const o=await oA(t.localStore,e);fE(t,i,null),hE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await eu(t,o)}catch(o){await ga(o)}}async function XA(n,e,t){const i=be(n);try{const o=await function(c,h){const p=be(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let _;return p.mutationQueue.lookupMutationBatch(y,h).next(T=>(Qe(T!==null,37113),_=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,_,h)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_)).next(()=>p.localDocuments.getDocuments(y,_))})}(i.localStore,e);fE(i,e,t),hE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await eu(i,o)}catch(o){await ga(o)}}function hE(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function fE(n,e,t){const i=be(n);let o=i.Au[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.Au[i.currentUser.toKey()]=o}}function bp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Pu.get(e))n.hu.delete(i),t&&n.lu.gu(i,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(i=>{n.du.containsKey(i)||pE(n,i)})}function pE(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(mm(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),Cm(n))}function T_(n,e,t){for(const i of t)i instanceof lE?(n.du.addReference(i.key,e),JA(n,i)):i instanceof uE?(de(xm,"Document no longer in limbo: "+i.key),n.du.removeReference(i.key,e),n.du.containsKey(i.key)||pE(n,i.key)):Ce(19791,{pu:i})}function JA(n,e){const t=e.key,i=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(i)||(de(xm,"New document in limbo: "+t),n.Tu.add(i),Cm(n))}function Cm(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new Te(ot.fromString(e)),i=n.Vu.next();n.Eu.set(i,new zA(t)),n.Iu=n.Iu.insert(t,i),nE(n.remoteStore,new ji(Ir(Vd(t.path)),i,"TargetPurposeLimboResolution",Nd.le))}}async function eu(n,e,t){const i=be(n),o=[],a=[],c=[];i.hu.isEmpty()||(i.hu.forEach((h,p)=>{c.push(i.fu(p,e,t).then(y=>{var _;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=fm.Rs(p.targetId,y);a.push(T)}}))}),await Promise.all(c),i.lu.Y_(o),await async function(p,y){const _=be(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>Y.forEach(y,E=>Y.forEach(E.ds,b=>_.persistence.referenceDelegate.addReference(T,E.targetId,b)).next(()=>Y.forEach(E.As,b=>_.persistence.referenceDelegate.removeReference(T,E.targetId,b)))))}catch(T){if(!ya(T))throw T;de(pm,"Failed to update sequence numbers: "+T)}for(const T of y){const E=T.targetId;if(!T.fromCache){const b=_.xs.get(E),P=b.snapshotVersion,M=b.withLastLimboFreeSnapshotVersion(P);_.xs=_.xs.insert(E,M)}}}(i.localStore,a))}async function ZA(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){de(xm,"User change. New user:",e.toKey());const i=await Jw(t.localStore,e);t.currentUser=e,function(a,c){a.Ru.forEach(h=>{h.forEach(p=>{p.reject(new fe(X.CANCELLED,c))})}),a.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await eu(t,i.ks)}}function eP(n,e){const t=be(n),i=t.Eu.get(e);if(i&&i.cu)return Be().add(i.key);{let o=Be();const a=t.Pu.get(e);if(!a)return o;for(const c of a){const h=t.hu.get(c);o=o.unionWith(h.view.eu)}return o}}function mE(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QA.bind(null,e),e.lu.Y_=MA.bind(null,e.eventManager),e.lu.gu=FA.bind(null,e.eventManager),e}function tP(n){const e=be(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XA.bind(null,e),e}class dd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return sA(this.persistence,new nA,e.initialUser,this.serializer)}Su(e){return new Xw(hm.fi,this.serializer)}bu(e){return new hA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dd.provider={build:()=>new dd};class nP extends dd{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){Qe(this.persistence.referenceDelegate instanceof ud,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new zR(i,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?pn.withCacheSize(this.cacheSizeBytes):pn.DEFAULT;return new Xw(i=>ud.fi(i,t),this.serializer)}}class Np{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>E_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZA.bind(null,this.syncEngine),await OA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LA}()}createDatastore(e){const t=zd(e.databaseInfo.databaseId),i=function(a){return new yA(a)}(e.databaseInfo);return function(a,c,h,p){return new EA(a,c,h,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,a,c,h){return new IA(i,o,a,c,h)}(this.localStore,this.datastore,e.asyncQueue,t=>E_(this.syncEngine,t,0),function(){return m_.C()?new m_:new fA}())}createSyncEngine(e,t){return function(o,a,c,h,p,y,_){const T=new BA(o,a,c,h,p,y);return _&&(T.mu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const a=be(o);de(js,"RemoteStore shutting down."),a.da.add(5),await Zl(a),a.Ra.shutdown(),a.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Np.provider={build:()=>new Np};/**
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
 */class Rm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):ri("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Yi="FirestoreClient";class rP{constructor(e,t,i,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Xt.UNAUTHENTICATED,this.clientId=cw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async c=>{de(Yi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(de(Yi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=wm(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Yf(n,e){n.asyncQueue.verifyOperationInProgress(),de(Yi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await Jw(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function I_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await iP(n);de(Yi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>y_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>y_(e.remoteStore,o)),n._onlineComponents=e}async function iP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){de(Yi,"Using user provided OfflineComponentProvider");try{await Yf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ea("Error using user provided cache. Falling back to memory cache: "+t),await Yf(n,new dd)}}else de(Yi,"Using default OfflineComponentProvider"),await Yf(n,new nP(void 0));return n._offlineComponents}async function gE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(de(Yi,"Using user provided OnlineComponentProvider"),await I_(n,n._uninitializedComponentsProvider._online)):(de(Yi,"Using default OnlineComponentProvider"),await I_(n,new Np))),n._onlineComponents}function sP(n){return gE(n).then(e=>e.syncEngine)}async function hd(n){const e=await gE(n),t=e.eventManager;return t.onListen=$A.bind(null,e.syncEngine),t.onUnlisten=WA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=GA.bind(null,e.syncEngine),t}function oP(n,e,t={}){const i=new Jr;return n.asyncQueue.enqueueAndForget(async()=>function(a,c,h,p,y){const _=new Rm({next:E=>{_.xu(),c.enqueueAndForget(()=>Tm(a,T));const b=E.docs.has(h);!b&&E.fromCache?y.reject(new fe(X.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&E.fromCache&&p&&p.source==="server"?y.reject(new fe(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(E)},error:E=>y.reject(E)}),T=new Sm(Vd(h.path),_,{includeMetadataChanges:!0,Qa:!0});return Em(a,T)}(await hd(n),n.asyncQueue,e,t,i)),i.promise}function aP(n,e,t={}){const i=new Jr;return n.asyncQueue.enqueueAndForget(async()=>function(a,c,h,p,y){const _=new Rm({next:E=>{_.xu(),c.enqueueAndForget(()=>Tm(a,T)),E.fromCache&&p.source==="server"?y.reject(new fe(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(E)},error:E=>y.reject(E)}),T=new Sm(h,_,{includeMetadataChanges:!0,Qa:!0});return Em(a,T)}(await hd(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function yE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const S_=new Map;/**
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
 */function vE(n,e,t){if(!t)throw new fe(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function lP(n,e,t,i){if(e===!0&&i===!0)throw new fe(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function x_(n){if(!Te.isDocumentKey(n))throw new fe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function C_(n){if(Te.isDocumentKey(n))throw new fe(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ce(12329,{type:typeof n})}function yn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qd(n);throw new fe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const _E="firestore.googleapis.com",R_=!0;class A_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_E,this.ssl=R_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:R_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jR)throw new fe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hd{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new A_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new A_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new gC;switch(i.type){case"firstParty":return new wC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new fe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=S_.get(t);i&&(de("ComponentProvider","Removing Datastore"),S_.delete(t),i.terminate())}(this),Promise.resolve()}}function uP(n,e,t,i={}){var o;n=yn(n,Hd);const a=fa(e),c=n._getSettings(),h=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;a&&(G0(`https://${p}`),K0("Firestore",!0)),c.host!==_E&&c.host!==p&&ea("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},c),{host:p,ssl:a,emulatorOptions:i});if(!Ls(y,h)&&(n._setSettings(y),i.mockUserToken)){let _,T;if(typeof i.mockUserToken=="string")_=i.mockUserToken,T=Xt.MOCK_USER;else{_=$S(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const E=i.mockUserToken.sub||i.mockUserToken.user_id;if(!E)throw new fe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Xt(E)}n._authCredentials=new yC(new lw(_,T))}}/**
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
 */class Gs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Gs(this.firestore,e,this._query)}}class Zt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class qi extends Gs{constructor(e,t,i){super(e,t,Vd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new Te(e))}withConverter(e){return new qi(this.firestore,e,this._path)}}function zl(n,e,...t){if(n=Nt(n),vE("collection","path",e),n instanceof Hd){const i=ot.fromString(e,...t);return C_(i),new qi(n,null,i)}{if(!(n instanceof Zt||n instanceof qi))throw new fe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ot.fromString(e,...t));return C_(i),new qi(n.firestore,null,i)}}function Us(n,e,...t){if(n=Nt(n),arguments.length===1&&(e=cw.newId()),vE("doc","path",e),n instanceof Hd){const i=ot.fromString(e,...t);return x_(i),new Zt(n,null,new Te(i))}{if(!(n instanceof Zt||n instanceof qi))throw new fe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ot.fromString(e,...t));return x_(i),new Zt(n.firestore,n instanceof qi?n.converter:null,new Te(i))}}/**
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
 */const P_="AsyncQueue";class k_{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new eE(this,"async_queue_retry"),this.rc=()=>{const i=Qf();i&&de(P_,"Visibility state changed to "+i.visibilityState),this.x_.b_()},this.sc=e;const t=Qf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Qf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Jr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!ya(e))throw e;de(P_,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(i=>{throw this.Xu=i,this.ec=!1,ri("INTERNAL UNHANDLED ERROR: ",b_(i)),i}).then(i=>(this.ec=!1,i))));return this.sc=t,t}enqueueAfterDelay(e,t,i){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const o=_m.createAndSchedule(this,e,t,i,a=>this.uc(a));return this.Zu.push(o),o}oc(){this.Xu&&Ce(47125,{cc:b_(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function b_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function N_(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of i)if(a in o&&typeof o[a]=="function")return!0;return!1}(n,["next","error","complete"])}class si extends Hd{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new k_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new k_(e),this._firestoreClient=void 0,await e}}}function cP(n,e){const t=typeof n=="object"?n:J0(),i=typeof n=="string"?n:nd,o=Zp(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=zS("firestore");a&&uP(o,...a)}return o}function Wd(n){if(n._terminated)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||dP(n),n._firestoreClient}function dP(n){var e,t,i;const o=n._freezeSettings(),a=function(h,p,y,_){return new VC(h,p,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,yE(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new rP(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class oa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oa(Ht.fromBase64String(e))}catch(t){throw new fe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new oa(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Am{constructor(e){this._methodName=e}}/**
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
 */class Pm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
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
 */class km{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const hP=/^__.*__$/;class fP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Zi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xl(e,this.data,t,this.fieldTransforms)}}class wE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Zi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function EE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ce(40011,{Ic:n})}}class bm{constructor(e,t,i,o,a,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.Ec(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new bm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:i,Rc:!1});return o.Vc(e),o}mc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:i,Rc:!1});return o.Ec(),o}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return fd(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(EE(this.Ic)&&hP.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class pP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||zd(e)}bc(e,t,i,o=!1){return new bm({Ic:e,methodName:t,wc:i,path:qt.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kd(n){const e=n._freezeSettings(),t=zd(n._databaseId);return new pP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function TE(n,e,t,i,o,a={}){const c=n.bc(a.merge||a.mergeFields?2:0,e,t,o);Nm("Data must be an object, but it was:",c,i);const h=IE(i,c);let p,y;if(a.merge)p=new Cn(c.fieldMask),y=c.fieldTransforms;else if(a.mergeFields){const _=[];for(const T of a.mergeFields){const E=Dp(e,T,t);if(!c.contains(E))throw new fe(X.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);xE(_,E)||_.push(E)}p=new Cn(_),y=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=c.fieldTransforms;return new fP(new mn(h),p,y)}class Qd extends Am{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qd}}function mP(n,e,t,i){const o=n.bc(1,e,t);Nm("Data must be an object, but it was:",o,i);const a=[],c=mn.empty();Ji(i,(p,y)=>{const _=Dm(e,p,t);y=Nt(y);const T=o.mc(_);if(y instanceof Qd)a.push(_);else{const E=tu(y,T);E!=null&&(a.push(_),c.set(_,E))}});const h=new Cn(a);return new wE(c,h,o.fieldTransforms)}function gP(n,e,t,i,o,a){const c=n.bc(1,e,t),h=[Dp(e,i,t)],p=[o];if(a.length%2!=0)throw new fe(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<a.length;E+=2)h.push(Dp(e,a[E])),p.push(a[E+1]);const y=[],_=mn.empty();for(let E=h.length-1;E>=0;--E)if(!xE(y,h[E])){const b=h[E];let P=p[E];P=Nt(P);const M=c.mc(b);if(P instanceof Qd)y.push(b);else{const O=tu(P,M);O!=null&&(y.push(b),_.set(b,O))}}const T=new Cn(y);return new wE(_,T,c.fieldTransforms)}function yP(n,e,t,i=!1){return tu(t,n.bc(i?4:3,e))}function tu(n,e){if(SE(n=Nt(n)))return Nm("Unsupported field value:",e,n),IE(n,e);if(n instanceof Am)return function(i,o){if(!EE(o.Ic))throw o.gc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(i,o){const a=[];let c=0;for(const h of i){let p=tu(h,o.fc(c));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),c++}return{arrayValue:{values:a}}}(n,e)}return function(i,o){if((i=Nt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return iR(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=kt.fromDate(i);return{timestampValue:ld(o.serializer,a)}}if(i instanceof kt){const a=new kt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ld(o.serializer,a)}}if(i instanceof Pm)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof oa)return{bytesValue:$w(o.serializer,i._byteString)};if(i instanceof Zt){const a=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw o.gc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:cm(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof km)return function(c,h){return{mapValue:{fields:{[vw]:{stringValue:_w},[rd]:{arrayValue:{values:c.toArray().map(y=>{if(typeof y!="number")throw h.gc("VectorValues must only contain numeric values.");return om(h.serializer,y)})}}}}}}(i,o);throw o.gc(`Unsupported field value: ${qd(i)}`)}(n,e)}function IE(n,e){const t={};return hw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ji(n,(i,o)=>{const a=tu(o,e.Ac(i));a!=null&&(t[i]=a)}),{mapValue:{fields:t}}}function SE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof kt||n instanceof Pm||n instanceof oa||n instanceof Zt||n instanceof Am||n instanceof km)}function Nm(n,e,t){if(!SE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=qd(t);throw i==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+i)}}function Dp(n,e,t){if((e=Nt(e))instanceof Gd)return e._internalPath;if(typeof e=="string")return Dm(n,e);throw fd("Field path arguments must be of type string or ",n,!1,void 0,t)}const vP=new RegExp("[~\\*/\\[\\]]");function Dm(n,e,t){if(e.search(vP)>=0)throw fd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Gd(...e.split("."))._internalPath}catch{throw fd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fd(n,e,t,i,o){const a=i&&!i.isEmpty(),c=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let p="";return(a||c)&&(p+=" (found",a&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new fe(X.INVALID_ARGUMENT,h+n+p)}function xE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class CE{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _P(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Om("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _P extends CE{data(){return super.data()}}function Om(n,e){return typeof e=="string"?Dm(n,e):e instanceof Gd?e._internalPath:e._delegate._internalPath}/**
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
 */function RE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new fe(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vm{}class wP extends Vm{}function pd(n,e,...t){let i=[];e instanceof Vm&&i.push(e),i=i.concat(t),function(a){const c=a.filter(p=>p instanceof Lm).length,h=a.filter(p=>p instanceof Yd).length;if(c>1||c>0&&h>0)throw new fe(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class Yd extends wP{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Yd(e,t,i)}_apply(e){const t=this._parse(e);return AE(e._query,t),new Gs(e.firestore,e.converter,Tp(e._query,t))}_parse(e){const t=Kd(e.firestore);return function(a,c,h,p,y,_,T){let E;if(y.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new fe(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){V_(T,_);const P=[];for(const M of T)P.push(O_(p,a,M));E={arrayValue:{values:P}}}else E=O_(p,a,T)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||V_(T,_),E=yP(h,c,T,_==="in"||_==="not-in");return St.create(y,_,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function D_(n,e,t){const i=e,o=Om("where",n);return Yd._create(o,i,t)}class Lm extends Vm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Lm(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:or.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,a){let c=o;const h=a.getFlattenedFilters();for(const p of h)AE(c,p),c=Tp(c,p)}(e._query,t),new Gs(e.firestore,e.converter,Tp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function O_(n,e,t){if(typeof(t=Nt(t))=="string"){if(t==="")throw new fe(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rw(e)&&t.indexOf("/")!==-1)throw new fe(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(ot.fromString(t));if(!Te.isDocumentKey(i))throw new fe(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Gv(n,new Te(i))}if(t instanceof Zt)return Gv(n,t._key);throw new fe(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qd(t)}.`)}function V_(n,e){if(!Array.isArray(n)||n.length===0)throw new fe(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AE(n,e){const t=function(o,a){for(const c of o)for(const h of c.getFlattenedFilters())if(a.indexOf(h.op)>=0)return h.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new fe(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new fe(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class EP{convertValue(e,t="none"){switch(Ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ji(e,(o,a)=>{i[o]=this.convertValue(a,t)}),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[rd].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>_t(c.doubleValue));return new km(a)}convertGeoPoint(e){return new Pm(_t(e.latitude),_t(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Od(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ll(e));default:return null}}convertTimestamp(e){const t=Wi(e);return new kt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ot.fromString(e);Qe(Qw(i),9688,{name:e});const o=new Ml(i.get(1),i.get(3)),a=new Te(i.popFirst(5));return o.isEqual(t)||ri(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function PE(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class Tl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kE extends CE{constructor(e,t,i,o,a,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Om("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Bc extends kE{data(e={}){return super.data(e)}}class bE{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Tl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Bc(this._firestore,this._userDataWriter,i.key,i,new Tl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(h=>{const p=new Bc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new Tl(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);return h.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(h=>a||h.type!==3).map(h=>{const p=new Bc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new Tl(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return h.type!==0&&(y=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),_=c.indexOf(h.doc.key)),{type:TP(h.type),doc:p,oldIndex:y,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function TP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ce(61501,{type:n})}}/**
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
 */function Xd(n){n=yn(n,Zt);const e=yn(n.firestore,si);return oP(Wd(e),n._key).then(t=>DE(e,n,t))}class Mm extends EP{constructor(e){super(),this.firestore=e}convertBytes(e){return new oa(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,t)}}function IP(n){n=yn(n,Gs);const e=yn(n.firestore,si),t=Wd(e),i=new Mm(e);return RE(n._query),aP(t,n._query).then(o=>new bE(e,i,n,o))}function SP(n,e,t){n=yn(n,Zt);const i=yn(n.firestore,si),o=PE(n.converter,e);return Jd(i,[TE(Kd(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Fn.none())])}function xP(n,e,t,...i){n=yn(n,Zt);const o=yn(n.firestore,si),a=Kd(o);let c;return c=typeof(e=Nt(e))=="string"||e instanceof Gd?gP(a,"updateDoc",n._key,e,t,i):mP(a,"updateDoc",n._key,e),Jd(o,[c.toMutation(n._key,Fn.exists(!0))])}function CP(n){return Jd(yn(n.firestore,si),[new am(n._key,Fn.none())])}function NE(n,e){const t=yn(n.firestore,si),i=Us(n),o=PE(n.converter,e);return Jd(t,[TE(Kd(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Fn.exists(!1))]).then(()=>i)}function Fm(n,...e){var t,i,o;n=Nt(n);let a={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||N_(e[c])||(a=e[c],c++);const h={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(N_(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,y,_;if(n instanceof Zt)y=yn(n.firestore,si),_=Vd(n._key.path),p={next:T=>{e[c]&&e[c](DE(y,n,T))},error:e[c+1],complete:e[c+2]};else{const T=yn(n,Gs);y=yn(T.firestore,si),_=T._query;const E=new Mm(y);p={next:b=>{e[c]&&e[c](new bE(y,E,T,b))},error:e[c+1],complete:e[c+2]},RE(n._query)}return function(E,b,P,M){const O=new Rm(M),$=new Sm(b,O,P);return E.asyncQueue.enqueueAndForget(async()=>Em(await hd(E),$)),()=>{O.xu(),E.asyncQueue.enqueueAndForget(async()=>Tm(await hd(E),$))}}(Wd(y),_,h,p)}function Jd(n,e){return function(i,o){const a=new Jr;return i.asyncQueue.enqueueAndForget(async()=>KA(await sP(i),o,a)),a.promise}(Wd(n),e)}function DE(n,e,t){const i=t.docs.get(e._key),o=new Mm(n);return new kE(n,o,e._key,i,new Tl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){ma=o})(pa),Zo(new Ms("firestore",(i,{instanceIdentifier:o,options:a})=>{const c=i.getProvider("app").getImmediate(),h=new si(new vC(i.getProvider("auth-internal")),new EC(c,i.getProvider("app-check-internal")),function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new fe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ml(y.options.projectId,_)}(c,o),c);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),Bi(Vv,Lv,e),Bi(Vv,Lv,"esm2017")})();var RP="firebase",AP="11.9.1";/**
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
 */Bi(RP,AP,"app");function jm(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function OE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PP=OE,VE=new Kl("auth","Firebase",OE());/**
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
 */const md=new Xp("@firebase/auth");function kP(n,...e){md.logLevel<=ze.WARN&&md.warn(`Auth (${pa}): ${n}`,...e)}function $c(n,...e){md.logLevel<=ze.ERROR&&md.error(`Auth (${pa}): ${n}`,...e)}/**
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
 */function ar(n,...e){throw Um(n,...e)}function xr(n,...e){return Um(n,...e)}function LE(n,e,t){const i=Object.assign(Object.assign({},PP()),{[e]:t});return new Kl("auth","Firebase",i).create(e,{appName:n.name})}function Zr(n){return LE(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Um(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return VE.create(n,...e)}function xe(n,e,...t){if(!n)throw Um(e,...t)}function Qr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $c(e),new Error(e)}function oi(n,e){n||Qr(e)}/**
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
 */function Op(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function bP(){return L_()==="http:"||L_()==="https:"}function L_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function NP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bP()||QS()||"connection"in navigator)?navigator.onLine:!0}function DP(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class nu{constructor(e,t){this.shortDelay=e,this.longDelay=t,oi(t>e,"Short delay should be less than long delay!"),this.isMobile=WS()||YS()}get(){return NP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zm(n,e){oi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ME{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LP=new nu(3e4,6e4);function es(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ts(n,e,t,i,o={}){return FE(n,o,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const h=Ql(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},a);return KS()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&fa(n.emulatorConfig.host)&&(y.credentials="include"),ME.fetch()(await jE(n,n.config.apiHost,t,h),y)})}async function FE(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},OP),e);try{const o=new FP(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Pc(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const h=a.ok?c.errorMessage:c.error.message,[p,y]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Pc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Pc(n,"user-disabled",c);const _=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw LE(n,_,y);ar(n,_)}}catch(o){if(o instanceof ai)throw o;ar(n,"network-request-failed",{message:String(o)})}}async function ru(n,e,t,i,o={}){const a=await ts(n,e,t,i,o);return"mfaPendingCredential"in a&&ar(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function jE(n,e,t,i){const o=`${e}${t}?${i}`,a=n,c=a.config.emulator?zm(n.config,o):`${n.config.apiScheme}://${o}`;return VP.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function MP(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class FP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(xr(this.auth,"network-request-failed")),LP.get())})}}function Pc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=xr(n,e,i);return o.customData._tokenResponse=t,o}function M_(n){return n!==void 0&&n.enterprise!==void 0}class jP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return MP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function UP(n,e){return ts(n,"GET","/v2/recaptchaConfig",es(n,e))}/**
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
 */async function zP(n,e){return ts(n,"POST","/v1/accounts:delete",e)}async function gd(n,e){return ts(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function bl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BP(n,e=!1){const t=Nt(n),i=await t.getIdToken(e),o=Bm(i);xe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:bl(Xf(o.auth_time)),issuedAtTime:bl(Xf(o.iat)),expirationTime:bl(Xf(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Xf(n){return Number(n)*1e3}function Bm(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return $c("JWT malformed, contained fewer than 3 sections"),null;try{const o=$0(t);return o?JSON.parse(o):($c("Failed to decode base64 JWT payload"),null)}catch(o){return $c("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function F_(n){const e=Bm(n);return xe(e,"internal-error"),xe(typeof e.exp<"u","internal-error"),xe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ai&&$P(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function $P({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class qP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bl(this.lastLoginAt),this.creationTime=bl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yd(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Bl(n,gd(t,{idToken:i}));xe(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?UE(a.providerUserInfo):[],h=WP(n.providerData,c),p=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),_=p?y:!1,T={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Vp(a.createdAt,a.lastLoginAt),isAnonymous:_};Object.assign(n,T)}async function HP(n){const e=Nt(n);await yd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WP(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function UE(n){return n.map(e=>{var{providerId:t}=e,i=jm(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function GP(n,e){const t=await FE(n,{},async()=>{const i=Ql({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=await jE(n,o,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:h,body:i};return n.emulatorConfig&&fa(n.emulatorConfig.host)&&(p.credentials="include"),ME.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function KP(n,e){return ts(n,"POST","/v2/accounts:revokeToken",es(n,e))}/**
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
 */class Qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){xe(e.idToken,"internal-error"),xe(typeof e.idToken<"u","internal-error"),xe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):F_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){xe(e.length!==0,"internal-error");const t=F_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(xe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await GP(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,c=new Qo;return i&&(xe(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(xe(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(xe(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qo,this.toJSON())}_performRefresh(){return Qr("not implemented")}}/**
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
 */function Di(n,e){xe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=jm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Vp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Bl(this,this.stsTokenManager.getToken(this.auth,e));return xe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return BP(this,e)}reload(){return HP(this)}_assign(e){this!==e&&(xe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){xe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await yd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(Zr(this.auth));const e=await this.getIdToken();return await Bl(this,zP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,c,h,p,y,_;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,E=(o=t.email)!==null&&o!==void 0?o:void 0,b=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,P=(c=t.photoURL)!==null&&c!==void 0?c:void 0,M=(h=t.tenantId)!==null&&h!==void 0?h:void 0,O=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,$=(y=t.createdAt)!==null&&y!==void 0?y:void 0,B=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:K,emailVerified:J,isAnonymous:re,providerData:ee,stsTokenManager:C}=t;xe(K&&C,e,"internal-error");const S=Qo.fromJSON(this.name,C);xe(typeof K=="string",e,"internal-error"),Di(T,e.name),Di(E,e.name),xe(typeof J=="boolean",e,"internal-error"),xe(typeof re=="boolean",e,"internal-error"),Di(b,e.name),Di(P,e.name),Di(M,e.name),Di(O,e.name),Di($,e.name),Di(B,e.name);const x=new nr({uid:K,auth:e,email:E,emailVerified:J,displayName:T,isAnonymous:re,photoURL:P,phoneNumber:b,tenantId:M,stsTokenManager:S,createdAt:$,lastLoginAt:B});return ee&&Array.isArray(ee)&&(x.providerData=ee.map(N=>Object.assign({},N))),O&&(x._redirectEventId=O),x}static async _fromIdTokenResponse(e,t,i=!1){const o=new Qo;o.updateFromServerResponse(t);const a=new nr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await yd(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];xe(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?UE(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),h=new Qo;h.updateFromIdToken(i);const p=new nr({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Vp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,y),p}}/**
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
 */const j_=new Map;function Yr(n){oi(n instanceof Function,"Expected a class definition");let e=j_.get(n);return e?(oi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,j_.set(n,e),e)}/**
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
 */class zE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zE.type="NONE";const U_=zE;/**
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
 */function qc(n,e,t){return`firebase:${n}:${e}:${t}`}class Yo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=qc(this.userKey,o.apiKey,a),this.fullPersistenceKey=qc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await gd(this.auth,{idToken:e}).catch(()=>{});return t?nr._fromGetAccountInfoResponse(this.auth,t,e):null}return nr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Yo(Yr(U_),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=o[0]||Yr(U_);const c=qc(i,e.config.apiKey,e.name);let h=null;for(const y of t)try{const _=await y._get(c);if(_){let T;if(typeof _=="string"){const E=await gd(e,{idToken:_}).catch(()=>{});if(!E)break;T=await nr._fromGetAccountInfoResponse(e,E,_)}else T=nr._fromJSON(e,_);y!==a&&(h=T),a=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new Yo(a,e,i):(a=p[0],h&&await a._set(c,h.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(c)}catch{}})),new Yo(a,e,i))}}/**
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
 */function z_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(HE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(BE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(GE(e))return"Blackberry";if(KE(e))return"Webos";if($E(e))return"Safari";if((e.includes("chrome/")||qE(e))&&!e.includes("edge/"))return"Chrome";if(WE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function BE(n=en()){return/firefox\//i.test(n)}function $E(n=en()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qE(n=en()){return/crios\//i.test(n)}function HE(n=en()){return/iemobile/i.test(n)}function WE(n=en()){return/android/i.test(n)}function GE(n=en()){return/blackberry/i.test(n)}function KE(n=en()){return/webos/i.test(n)}function $m(n=en()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function QP(n=en()){var e;return $m(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YP(){return XS()&&document.documentMode===10}function QE(n=en()){return $m(n)||WE(n)||KE(n)||GE(n)||/windows phone/i.test(n)||HE(n)}/**
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
 */function YE(n,e=[]){let t;switch(n){case"Browser":t=z_(en());break;case"Worker":t=`${z_(en())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${pa}/${i}`}/**
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
 */class XP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,h)=>{try{const p=e(a);c(p)}catch(p){h(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function JP(n,e={}){return ts(n,"GET","/v2/passwordPolicy",es(n,e))}/**
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
 */const ZP=6;class ek{constructor(e){var t,i,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:ZP,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class tk{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new B_(this),this.idTokenSubscription=new B_(this),this.beforeStateQueue=new XP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Yr(t)),this._initializationPromise=this.queue(async()=>{var i,o,a;if(!this._deleted&&(this.persistenceManager=await Yo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gd(this,{idToken:e}),i=await nr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Mn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return xe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await yd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(Zr(this));const t=e?Nt(e):null;return t&&xe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&xe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(Zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(Zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JP(this),t=new ek(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Kl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await KP(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Yr(e)||this._popupRedirectResolver;xe(t,this,"argument-error"),this.redirectPersistenceManager=await Yo.create(this,[Yr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(xe(h,this,"internal-error"),h.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return xe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=YE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kP(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ks(n){return Nt(n)}class B_{constructor(e){this.auth=e,this.observer=null,this.addObserver=sx(t=>this.observer=t)}get next(){return xe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nk(n){Zd=n}function XE(n){return Zd.loadJS(n)}function rk(){return Zd.recaptchaEnterpriseScript}function ik(){return Zd.gapiScript}function sk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class ok{constructor(){this.enterprise=new ak}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ak{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const lk="recaptcha-enterprise",JE="NO_RECAPTCHA";class uk{constructor(e){this.type=lk,this.auth=Ks(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,h)=>{UP(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const y=new jP(p);return a.tenantId==null?a._agentRecaptchaConfig=y:a._tenantRecaptchaConfigs[a.tenantId]=y,c(y.siteKey)}}).catch(p=>{h(p)})})}function o(a,c,h){const p=window.grecaptcha;M_(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(y=>{c(y)}).catch(()=>{c(JE)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ok().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{i(this.auth).then(h=>{if(!t&&M_(window.grecaptcha))o(h,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=rk();p.length!==0&&(p+=h),XE(p).then(()=>{o(h,a,c)}).catch(y=>{c(y)})}}).catch(h=>{c(h)})})}}async function $_(n,e,t,i=!1,o=!1){const a=new uk(n);let c;if(o)c=JE;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,y=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return i?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Lp(n,e,t,i,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await $_(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await $_(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(c)})}/**
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
 */function ck(n,e){const t=Zp(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Ls(a,e??{}))return o;ar(o,"already-initialized")}return t.initialize({options:e})}function dk(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Yr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function hk(n,e,t){const i=Ks(n);xe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=ZE(e),{host:c,port:h}=fk(e),p=h===null?"":`:${h}`,y={url:`${a}//${c}${p}/`},_=Object.freeze({host:c,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){xe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),xe(Ls(y,i.config.emulator)&&Ls(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,fa(c)?(G0(`${a}//${c}${p}`),K0("Auth",!0)):pk()}function ZE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function fk(n){const e=ZE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:q_(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:q_(c)}}}function q_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function pk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class qm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qr("not implemented")}_getIdTokenResponse(e){return Qr("not implemented")}_linkToIdToken(e,t){return Qr("not implemented")}_getReauthenticationResolver(e){return Qr("not implemented")}}async function mk(n,e){return ts(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function gk(n,e){return ru(n,"POST","/v1/accounts:signInWithPassword",es(n,e))}/**
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
 */async function yk(n,e){return ru(n,"POST","/v1/accounts:signInWithEmailLink",es(n,e))}async function vk(n,e){return ru(n,"POST","/v1/accounts:signInWithEmailLink",es(n,e))}/**
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
 */class $l extends qm{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new $l(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new $l(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lp(e,t,"signInWithPassword",gk);case"emailLink":return yk(e,{email:this._email,oobCode:this._password});default:ar(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lp(e,i,"signUpPassword",mk);case"emailLink":return vk(e,{idToken:t,email:this._email,oobCode:this._password});default:ar(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xo(n,e){return ru(n,"POST","/v1/accounts:signInWithIdp",es(n,e))}/**
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
 */const _k="http://localhost";class zs extends qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ar("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=jm(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new zs(i,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Xo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Xo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xo(e,t)}buildRequest(){const e={requestUri:_k,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ql(t)}return e}}/**
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
 */function wk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ek(n){const e=yl(vl(n)).link,t=e?yl(vl(e)).deep_link_id:null,i=yl(vl(n)).deep_link_id;return(i?yl(vl(i)).link:null)||i||t||e||n}class Hm{constructor(e){var t,i,o,a,c,h;const p=yl(vl(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(i=p.oobCode)!==null&&i!==void 0?i:null,T=wk((o=p.mode)!==null&&o!==void 0?o:null);xe(y&&_&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=_,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=Ek(e);try{return new Hm(t)}catch{return null}}}/**
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
 */class _a{constructor(){this.providerId=_a.PROVIDER_ID}static credential(e,t){return $l._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Hm.parseLink(t);return xe(i,"argument-error"),$l._fromEmailAndCode(e,i.code,i.tenantId)}}_a.PROVIDER_ID="password";_a.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_a.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class eT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class iu extends eT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vi extends iu{constructor(){super("facebook.com")}static credential(e){return zs._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vi.credential(e.oauthAccessToken)}catch{return null}}}Vi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vi.PROVIDER_ID="facebook.com";/**
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
 */class Li extends iu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return zs._fromParams({providerId:Li.PROVIDER_ID,signInMethod:Li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Li.credentialFromTaggedObject(e)}static credentialFromError(e){return Li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Li.credential(t,i)}catch{return null}}}Li.GOOGLE_SIGN_IN_METHOD="google.com";Li.PROVIDER_ID="google.com";/**
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
 */class Mi extends iu{constructor(){super("github.com")}static credential(e){return zs._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mi.credential(e.oauthAccessToken)}catch{return null}}}Mi.GITHUB_SIGN_IN_METHOD="github.com";Mi.PROVIDER_ID="github.com";/**
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
 */class Fi extends iu{constructor(){super("twitter.com")}static credential(e,t){return zs._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Fi.credential(t,i)}catch{return null}}}Fi.TWITTER_SIGN_IN_METHOD="twitter.com";Fi.PROVIDER_ID="twitter.com";/**
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
 */async function Tk(n,e){return ru(n,"POST","/v1/accounts:signUp",es(n,e))}/**
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
 */class Bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await nr._fromIdTokenResponse(e,i,o),c=H_(i);return new Bs({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=H_(i);return new Bs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function H_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class vd extends ai{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,vd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new vd(e,t,i,o)}}function tT(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?vd._fromErrorAndOperation(n,a,e,i):a})}async function Ik(n,e,t=!1){const i=await Bl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Bs._forOperation(n,"link",i)}/**
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
 */async function Sk(n,e,t=!1){const{auth:i}=n;if(Mn(i.app))return Promise.reject(Zr(i));const o="reauthenticate";try{const a=await Bl(n,tT(i,o,e,n),t);xe(a.idToken,i,"internal-error");const c=Bm(a.idToken);xe(c,i,"internal-error");const{sub:h}=c;return xe(n.uid===h,i,"user-mismatch"),Bs._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&ar(i,"user-mismatch"),a}}/**
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
 */async function nT(n,e,t=!1){if(Mn(n.app))return Promise.reject(Zr(n));const i="signIn",o=await tT(n,i,e),a=await Bs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}async function xk(n,e){return nT(Ks(n),e)}/**
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
 */async function rT(n){const e=Ks(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ck(n,e,t){if(Mn(n.app))return Promise.reject(Zr(n));const i=Ks(n),c=await Lp(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Tk).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&rT(n),p}),h=await Bs._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(h.user),h}function Rk(n,e,t){return Mn(n.app)?Promise.reject(Zr(n)):xk(Nt(n),_a.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&rT(n),i})}function Ak(n,e,t,i){return Nt(n).onIdTokenChanged(e,t,i)}function Pk(n,e,t){return Nt(n).beforeAuthStateChanged(e,t)}function kk(n,e,t,i){return Nt(n).onAuthStateChanged(e,t,i)}function bk(n){return Nt(n).signOut()}const _d="__sak";/**
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
 */class iT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_d,"1"),this.storage.removeItem(_d),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Nk=1e3,Dk=10;class sT extends iT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=QE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);YP()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Dk):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sT.type="LOCAL";const Ok=sT;/**
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
 */class oT extends iT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oT.type="SESSION";const aT=oT;/**
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
 */function Vk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class eh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new eh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(c).map(async y=>y(t.origin,a)),p=await Vk(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eh.receivers=[];/**
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
 */function Wm(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Lk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((h,p)=>{const y=Wm("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const E=T;if(E.data.eventId===y)switch(E.data.status){case"ack":clearTimeout(_),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(E.data.response);break;default:clearTimeout(_),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Cr(){return window}function Mk(n){Cr().location.href=n}/**
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
 */function lT(){return typeof Cr().WorkerGlobalScope<"u"&&typeof Cr().importScripts=="function"}async function Fk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Uk(){return lT()?self:null}/**
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
 */const uT="firebaseLocalStorageDb",zk=1,wd="firebaseLocalStorage",cT="fbase_key";class su{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function th(n,e){return n.transaction([wd],e?"readwrite":"readonly").objectStore(wd)}function Bk(){const n=indexedDB.deleteDatabase(uT);return new su(n).toPromise()}function Mp(){const n=indexedDB.open(uT,zk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(wd,{keyPath:cT})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(wd)?e(i):(i.close(),await Bk(),e(await Mp()))})})}async function W_(n,e,t){const i=th(n,!0).put({[cT]:e,value:t});return new su(i).toPromise()}async function $k(n,e){const t=th(n,!1).get(e),i=await new su(t).toPromise();return i===void 0?null:i.value}function G_(n,e){const t=th(n,!0).delete(e);return new su(t).toPromise()}const qk=800,Hk=3;class dT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Hk)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eh._getInstance(Uk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Fk(),!this.activeServiceWorker)return;this.sender=new Lk(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mp();return await W_(e,_d,"1"),await G_(e,_d),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>W_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>$k(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>G_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=th(o,!1).getAll();return new su(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dT.type="LOCAL";const Wk=dT;new nu(3e4,6e4);/**
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
 */function Gk(n,e){return e?Yr(e):(xe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Gm extends qm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Kk(n){return nT(n.auth,new Gm(n),n.bypassAuthState)}function Qk(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),Sk(t,new Gm(n),n.bypassAuthState)}async function Yk(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),Ik(t,new Gm(n),n.bypassAuthState)}/**
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
 */class hT{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kk;case"linkViaPopup":case"linkViaRedirect":return Yk;case"reauthViaPopup":case"reauthViaRedirect":return Qk;default:ar(this.auth,"internal-error")}}resolve(e){oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Xk=new nu(2e3,1e4);class Ho extends hT{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,Ho.currentPopupAction&&Ho.currentPopupAction.cancel(),Ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return xe(e,this.auth,"internal-error"),e}async onExecution(){oi(this.filter.length===1,"Popup operations only handle one event");const e=Wm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Xk.get())};e()}}Ho.currentPopupAction=null;/**
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
 */const Jk="pendingRedirect",Hc=new Map;class Zk extends hT{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Hc.get(this.auth._key());if(!e){try{const i=await eb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Hc.set(this.auth._key(),e)}return this.bypassAuthState||Hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eb(n,e){const t=rb(e),i=nb(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function tb(n,e){Hc.set(n._key(),e)}function nb(n){return Yr(n._redirectPersistence)}function rb(n){return qc(Jk,n.config.apiKey,n.name)}async function ib(n,e,t=!1){if(Mn(n.app))return Promise.reject(Zr(n));const i=Ks(n),o=Gk(i,e),c=await new Zk(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const sb=10*60*1e3;class ob{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ab(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!fT(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(xr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sb&&this.cachedEventUids.clear(),this.cachedEventUids.has(K_(e))}saveEventToCache(e){this.cachedEventUids.add(K_(e)),this.lastProcessedEventTime=Date.now()}}function K_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ab(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fT(n);default:return!1}}/**
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
 */async function lb(n,e={}){return ts(n,"GET","/v1/projects",e)}/**
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
 */const ub=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cb=/^https?/;async function db(n){if(n.config.emulator)return;const{authorizedDomains:e}=await lb(n);for(const t of e)try{if(hb(t))return}catch{}ar(n,"unauthorized-domain")}function hb(n){const e=Op(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!cb.test(t))return!1;if(ub.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const fb=new nu(3e4,6e4);function Q_(){const n=Cr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function pb(n){return new Promise((e,t)=>{var i,o,a;function c(){Q_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Q_(),t(xr(n,"network-request-failed"))},timeout:fb.get()})}if(!((o=(i=Cr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=Cr().gapi)===null||a===void 0)&&a.load)c();else{const h=sk("iframefcb");return Cr()[h]=()=>{gapi.load?c():t(xr(n,"network-request-failed"))},XE(`${ik()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw Wc=null,e})}let Wc=null;function mb(n){return Wc=Wc||pb(n),Wc}/**
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
 */const gb=new nu(5e3,15e3),yb="__/auth/iframe",vb="emulator/auth/iframe",_b={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Eb(n){const e=n.config;xe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zm(e,vb):`https://${n.config.authDomain}/${yb}`,i={apiKey:e.apiKey,appName:n.name,v:pa},o=wb.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Ql(i).slice(1)}`}async function Tb(n){const e=await mb(n),t=Cr().gapi;return xe(t,n,"internal-error"),e.open({where:document.body,url:Eb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_b,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const c=xr(n,"network-request-failed"),h=Cr().setTimeout(()=>{a(c)},gb.get());function p(){Cr().clearTimeout(h),o(i)}i.ping(p).then(p,()=>{a(c)})}))}/**
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
 */const Ib={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sb=500,xb=600,Cb="_blank",Rb="http://localhost";class Y_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ab(n,e,t,i=Sb,o=xb){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const p=Object.assign(Object.assign({},Ib),{width:i.toString(),height:o.toString(),top:a,left:c}),y=en().toLowerCase();t&&(h=qE(y)?Cb:t),BE(y)&&(e=e||Rb,p.scrollbars="yes");const _=Object.entries(p).reduce((E,[b,P])=>`${E}${b}=${P},`,"");if(QP(y)&&h!=="_self")return Pb(e||"",h),new Y_(null);const T=window.open(e||"",h,_);xe(T,n,"popup-blocked");try{T.focus()}catch{}return new Y_(T)}function Pb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const kb="__/auth/handler",bb="emulator/auth/handler",Nb=encodeURIComponent("fac");async function X_(n,e,t,i,o,a){xe(n.config.authDomain,n,"auth-domain-config-required"),xe(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:pa,eventId:o};if(e instanceof eT){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",ix(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,T]of Object.entries({}))c[_]=T}if(e instanceof iu){const _=e.getScopes().filter(T=>T!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const _ of Object.keys(h))h[_]===void 0&&delete h[_];const p=await n._getAppCheckToken(),y=p?`#${Nb}=${encodeURIComponent(p)}`:"";return`${Db(n)}?${Ql(h).slice(1)}${y}`}function Db({config:n}){return n.emulator?zm(n,bb):`https://${n.authDomain}/${kb}`}/**
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
 */const Jf="webStorageSupport";class Ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aT,this._completeRedirectFn=ib,this._overrideRedirectResult=tb}async _openPopup(e,t,i,o){var a;oi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await X_(e,t,i,Op(),o);return Ab(e,c,Wm())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await X_(e,t,i,Op(),o);return Mk(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(oi(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Tb(e),i=new ob(e);return t.register("authEvent",o=>(xe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jf,{type:Jf},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[Jf];c!==void 0&&t(!!c),ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=db(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return QE()||$E()||$m()}}const Vb=Ob;var J_="@firebase/auth",Z_="1.10.7";/**
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
 */class Lb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){xe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Mb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fb(n){Zo(new Ms("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=i.options;xe(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YE(n)},y=new tk(i,o,a,p);return dk(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Zo(new Ms("auth-internal",e=>{const t=Ks(e.getProvider("auth").getImmediate());return(i=>new Lb(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bi(J_,Z_,Mb(n)),Bi(J_,Z_,"esm2017")}/**
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
 */const jb=5*60,Ub=W0("authIdTokenMaxAge")||jb;let e0=null;const zb=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Ub)return;const o=t==null?void 0:t.token;e0!==o&&(e0=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Bb(n=J0()){const e=Zp(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ck(n,{popupRedirectResolver:Vb,persistence:[Wk,Ok,aT]}),i=W0("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=zb(a.toString());Pk(t,c,()=>c(t.currentUser)),Ak(t,h=>c(h))}}const o=q0("auth");return o&&hk(t,`http://${o}`),t}function $b(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}nk({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=xr("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",$b().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fb("Browser");const qb={apiKey:"AIzaSyAvO_vAOJ8P6e_4XLmm_WfioinO43D-TKo",authDomain:"profangelsanroman-2d392.firebaseapp.com",projectId:"profangelsanroman-2d392",storageBucket:"profangelsanroman-2d392.firebasestorage.app",messagingSenderId:"1022958173798",appId:"1:1022958173798:web:0c9ea3c8b1593c2dd4b7a7",measurementId:"G-Y5WG2WVWGF"},pT=X0(qb),Ed=Bb(pT),rr=cP(pT),mT=H.createContext(null),ns=()=>{const n=H.useContext(mT);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n};function Hb(){const{user:n,loading:e}=ns(),[t,i]=H.useState([]),[o,a]=H.useState(!0),[c,h]=H.useState(null),[p,y]=H.useState(0),[_,T]=H.useState(0);H.useEffect(()=>{if(e||!n){!e&&!n&&(h("No hay usuario autenticado para cargar las rutinas."),a(!1));return}a(!0),h(null);const B=zl(rr,`users/${n.uid}/routines`),K=pd(B),J=Fm(K,re=>{try{const ee=re.docs.map(x=>({id:x.id,...x.data()}));i(ee),console.log(`[useRoutines] Rutinas del usuario ${n.uid} cargadas/actualizadas:`,ee);const C=ee.length,S=ee.filter(x=>x.exercises&&x.exercises.length>0&&x.exercises.every(N=>N.completed)).length;y(C),T(S),h(null)}catch(ee){console.error("[useRoutines] Error al obtener las rutinas del usuario:",ee),h("Error al cargar tus rutinas. Intenta de nuevo.")}finally{a(!1)}},re=>{console.error("[useRoutines] Error en la suscripción a las rutinas:",re),h("No se pudieron cargar las rutinas. Posiblemente problemas de permisos de lectura."),a(!1)});return()=>J()},[n,e]);const E=async(B,K,J)=>{if(!n){console.error("No user authenticated to update exercise progress.");return}try{const re=Us(rr,`users/${n.uid}/routines`,B),ee=await Xd(re);if(!ee.exists()){console.error("Rutina no encontrada para actualizar el ejercicio.");return}const S=ee.data().exercises.map(x=>x.id===K?{...x,...J}:x);await xP(re,{exercises:S}),console.log(`Progreso del ejercicio ${K} en rutina ${B} actualizado:`,J)}catch(re){console.error("Error al actualizar el progreso del ejercicio:",re),h("Error al guardar tu progreso. Intenta de nuevo.")}};return{routines:t,loading:o,error:!!c,totalActivedRoutines:p,completedActivedRoutines:_,toggleRoutineCompleted:(B,K)=>{console.log(`[useRoutines] Toggle rutina ${B} completada a ${K} (pendiente de implementar a nivel de rutina).`)},toggleExerciseCompleted:(B,K)=>{const J=t.find(ee=>ee.id===B);if(!J)return;const re=J.exercises.find(ee=>ee.id===K);re&&E(B,K,{completed:!re.completed})},updateExerciseKilos:(B,K,J)=>{E(B,K,{kilos:Number(J)||0})},editExerciseInRoutine:(B,K,J)=>{console.log(`[useRoutines] Edit ejercicio ${K} en rutina ${B} con ${JSON.stringify(J)} (pendiente de implementar en Firestore, ahora se usa updateExerciseProgress).`)},deleteExerciseFromRoutine:(B,K)=>{console.log(`[useRoutines] Delete ejercicio ${K} de rutina ${B} (pendiente de implementar en Firestore).`)}}}var Zf={exports:{}},ep,t0;function Wb(){if(t0)return ep;t0=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ep=n,ep}var tp,n0;function Gb(){if(n0)return tp;n0=1;var n=Wb();function e(){}function t(){}return t.resetWarningCache=e,tp=function(){function i(c,h,p,y,_,T){if(T!==n){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}i.isRequired=i;function o(){return i}var a={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return a.PropTypes=a,a},tp}var r0;function Kb(){return r0||(r0=1,Zf.exports=Gb()()),Zf.exports}var Qb=Kb();const ve=Rd(Qb);var gn=function(){return gn=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},gn.apply(this,arguments)};function Td(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}var st="-ms-",Nl="-moz-",Ke="-webkit-",gT="comm",nh="rule",Km="decl",Yb="@import",yT="@keyframes",Xb="@layer",vT=Math.abs,Qm=String.fromCharCode,Fp=Object.assign;function Jb(n,e){return Ft(n,0)^45?(((e<<2^Ft(n,0))<<2^Ft(n,1))<<2^Ft(n,2))<<2^Ft(n,3):0}function _T(n){return n.trim()}function Kr(n,e){return(n=e.exec(n))?n[0]:n}function Le(n,e,t){return n.replace(e,t)}function Gc(n,e,t){return n.indexOf(e,t)}function Ft(n,e){return n.charCodeAt(e)|0}function aa(n,e,t){return n.slice(e,t)}function Er(n){return n.length}function wT(n){return n.length}function Il(n,e){return e.push(n),n}function Zb(n,e){return n.map(e).join("")}function i0(n,e){return n.filter(function(t){return!Kr(t,e)})}var rh=1,la=1,ET=0,jn=0,It=0,wa="";function ih(n,e,t,i,o,a,c,h){return{value:n,root:e,parent:t,type:i,props:o,children:a,line:rh,column:la,length:c,return:"",siblings:h}}function Oi(n,e){return Fp(ih("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Uo(n){for(;n.root;)n=Oi(n.root,{children:[n]});Il(n,n.siblings)}function eN(){return It}function tN(){return It=jn>0?Ft(wa,--jn):0,la--,It===10&&(la=1,rh--),It}function ir(){return It=jn<ET?Ft(wa,jn++):0,la++,It===10&&(la=1,rh++),It}function Os(){return Ft(wa,jn)}function Kc(){return jn}function sh(n,e){return aa(wa,n,e)}function jp(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nN(n){return rh=la=1,ET=Er(wa=n),jn=0,[]}function rN(n){return wa="",n}function np(n){return _T(sh(jn-1,Up(n===91?n+2:n===40?n+1:n)))}function iN(n){for(;(It=Os())&&It<33;)ir();return jp(n)>2||jp(It)>3?"":" "}function sN(n,e){for(;--e&&ir()&&!(It<48||It>102||It>57&&It<65||It>70&&It<97););return sh(n,Kc()+(e<6&&Os()==32&&ir()==32))}function Up(n){for(;ir();)switch(It){case n:return jn;case 34:case 39:n!==34&&n!==39&&Up(It);break;case 40:n===41&&Up(n);break;case 92:ir();break}return jn}function oN(n,e){for(;ir()&&n+It!==57;)if(n+It===84&&Os()===47)break;return"/*"+sh(e,jn-1)+"*"+Qm(n===47?n:ir())}function aN(n){for(;!jp(Os());)ir();return sh(n,jn)}function lN(n){return rN(Qc("",null,null,null,[""],n=nN(n),0,[0],n))}function Qc(n,e,t,i,o,a,c,h,p){for(var y=0,_=0,T=c,E=0,b=0,P=0,M=1,O=1,$=1,B=0,K="",J=o,re=a,ee=i,C=K;O;)switch(P=B,B=ir()){case 40:if(P!=108&&Ft(C,T-1)==58){Gc(C+=Le(np(B),"&","&\f"),"&\f",vT(y?h[y-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:C+=np(B);break;case 9:case 10:case 13:case 32:C+=iN(P);break;case 92:C+=sN(Kc()-1,7);continue;case 47:switch(Os()){case 42:case 47:Il(uN(oN(ir(),Kc()),e,t,p),p);break;default:C+="/"}break;case 123*M:h[y++]=Er(C)*$;case 125*M:case 59:case 0:switch(B){case 0:case 125:O=0;case 59+_:$==-1&&(C=Le(C,/\f/g,"")),b>0&&Er(C)-T&&Il(b>32?o0(C+";",i,t,T-1,p):o0(Le(C," ","")+";",i,t,T-2,p),p);break;case 59:C+=";";default:if(Il(ee=s0(C,e,t,y,_,o,h,K,J=[],re=[],T,a),a),B===123)if(_===0)Qc(C,e,ee,ee,J,a,T,h,re);else switch(E===99&&Ft(C,3)===110?100:E){case 100:case 108:case 109:case 115:Qc(n,ee,ee,i&&Il(s0(n,ee,ee,0,0,o,h,K,o,J=[],T,re),re),o,re,T,h,i?J:re);break;default:Qc(C,ee,ee,ee,[""],re,0,h,re)}}y=_=b=0,M=$=1,K=C="",T=c;break;case 58:T=1+Er(C),b=P;default:if(M<1){if(B==123)--M;else if(B==125&&M++==0&&tN()==125)continue}switch(C+=Qm(B),B*M){case 38:$=_>0?1:(C+="\f",-1);break;case 44:h[y++]=(Er(C)-1)*$,$=1;break;case 64:Os()===45&&(C+=np(ir())),E=Os(),_=T=Er(K=C+=aN(Kc())),B++;break;case 45:P===45&&Er(C)==2&&(M=0)}}return a}function s0(n,e,t,i,o,a,c,h,p,y,_,T){for(var E=o-1,b=o===0?a:[""],P=wT(b),M=0,O=0,$=0;M<i;++M)for(var B=0,K=aa(n,E+1,E=vT(O=c[M])),J=n;B<P;++B)(J=_T(O>0?b[B]+" "+K:Le(K,/&\f/g,b[B])))&&(p[$++]=J);return ih(n,e,t,o===0?nh:h,p,y,_,T)}function uN(n,e,t,i){return ih(n,e,t,gT,Qm(eN()),aa(n,2,-2),0,i)}function o0(n,e,t,i,o){return ih(n,e,t,Km,aa(n,0,i),aa(n,i+1,-1),i,o)}function TT(n,e,t){switch(Jb(n,e)){case 5103:return Ke+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ke+n+n;case 4789:return Nl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ke+n+Nl+n+st+n+n;case 5936:switch(Ft(n,e+11)){case 114:return Ke+n+st+Le(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ke+n+st+Le(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ke+n+st+Le(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ke+n+st+n+n;case 6165:return Ke+n+st+"flex-"+n+n;case 5187:return Ke+n+Le(n,/(\w+).+(:[^]+)/,Ke+"box-$1$2"+st+"flex-$1$2")+n;case 5443:return Ke+n+st+"flex-item-"+Le(n,/flex-|-self/g,"")+(Kr(n,/flex-|baseline/)?"":st+"grid-row-"+Le(n,/flex-|-self/g,""))+n;case 4675:return Ke+n+st+"flex-line-pack"+Le(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ke+n+st+Le(n,"shrink","negative")+n;case 5292:return Ke+n+st+Le(n,"basis","preferred-size")+n;case 6060:return Ke+"box-"+Le(n,"-grow","")+Ke+n+st+Le(n,"grow","positive")+n;case 4554:return Ke+Le(n,/([^-])(transform)/g,"$1"+Ke+"$2")+n;case 6187:return Le(Le(Le(n,/(zoom-|grab)/,Ke+"$1"),/(image-set)/,Ke+"$1"),n,"")+n;case 5495:case 3959:return Le(n,/(image-set\([^]*)/,Ke+"$1$`$1");case 4968:return Le(Le(n,/(.+:)(flex-)?(.*)/,Ke+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ke+n+n;case 4200:if(!Kr(n,/flex-|baseline/))return st+"grid-column-align"+aa(n,e)+n;break;case 2592:case 3360:return st+Le(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,o){return e=o,Kr(i.props,/grid-\w+-end/)})?~Gc(n+(t=t[e].value),"span",0)?n:st+Le(n,"-start","")+n+st+"grid-row-span:"+(~Gc(t,"span",0)?Kr(t,/\d+/):+Kr(t,/\d+/)-+Kr(n,/\d+/))+";":st+Le(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return Kr(i.props,/grid-\w+-start/)})?n:st+Le(Le(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Le(n,/(.+)-inline(.+)/,Ke+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Er(n)-1-e>6)switch(Ft(n,e+1)){case 109:if(Ft(n,e+4)!==45)break;case 102:return Le(n,/(.+:)(.+)-([^]+)/,"$1"+Ke+"$2-$3$1"+Nl+(Ft(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Gc(n,"stretch",0)?TT(Le(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Le(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,a,c,h,p,y){return st+o+":"+a+y+(c?st+o+"-span:"+(h?p:+p-+a)+y:"")+n});case 4949:if(Ft(n,e+6)===121)return Le(n,":",":"+Ke)+n;break;case 6444:switch(Ft(n,Ft(n,14)===45?18:11)){case 120:return Le(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ke+(Ft(n,14)===45?"inline-":"")+"box$3$1"+Ke+"$2$3$1"+st+"$2box$3")+n;case 100:return Le(n,":",":"+st)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(n,"scroll-","scroll-snap-")+n}return n}function Id(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function cN(n,e,t,i){switch(n.type){case Xb:if(n.children.length)break;case Yb:case Km:return n.return=n.return||n.value;case gT:return"";case yT:return n.return=n.value+"{"+Id(n.children,i)+"}";case nh:if(!Er(n.value=n.props.join(",")))return""}return Er(t=Id(n.children,i))?n.return=n.value+"{"+t+"}":""}function dN(n){var e=wT(n);return function(t,i,o,a){for(var c="",h=0;h<e;h++)c+=n[h](t,i,o,a)||"";return c}}function hN(n){return function(e){e.root||(e=e.return)&&n(e)}}function fN(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case Km:n.return=TT(n.value,n.length,t);return;case yT:return Id([Oi(n,{value:Le(n.value,"@","@"+Ke)})],i);case nh:if(n.length)return Zb(t=n.props,function(o){switch(Kr(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Uo(Oi(n,{props:[Le(o,/:(read-\w+)/,":"+Nl+"$1")]})),Uo(Oi(n,{props:[o]})),Fp(n,{props:i0(t,i)});break;case"::placeholder":Uo(Oi(n,{props:[Le(o,/:(plac\w+)/,":"+Ke+"input-$1")]})),Uo(Oi(n,{props:[Le(o,/:(plac\w+)/,":"+Nl+"$1")]})),Uo(Oi(n,{props:[Le(o,/:(plac\w+)/,st+"input-$1")]})),Uo(Oi(n,{props:[o]})),Fp(n,{props:i0(t,i)});break}return""})}}var pN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xn={},ua=typeof process<"u"&&xn!==void 0&&(xn.REACT_APP_SC_ATTR||xn.SC_ATTR)||"data-styled",IT="active",ST="data-styled-version",oh="6.1.19",Ym=`/*!sc*/
`,Sd=typeof window<"u"&&typeof document<"u",mN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xn!==void 0&&xn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xn.REACT_APP_SC_DISABLE_SPEEDY!==""?xn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xn!==void 0&&xn.SC_DISABLE_SPEEDY!==void 0&&xn.SC_DISABLE_SPEEDY!==""&&xn.SC_DISABLE_SPEEDY!=="false"&&xn.SC_DISABLE_SPEEDY),ah=Object.freeze([]),ca=Object.freeze({});function gN(n,e,t){return t===void 0&&(t=ca),n.theme!==t.theme&&n.theme||e||t.theme}var xT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),yN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vN=/(^-|-$)/g;function a0(n){return n.replace(yN,"-").replace(vN,"")}var _N=/(a)(d)/gi,kc=52,l0=function(n){return String.fromCharCode(n+(n>25?39:97))};function zp(n){var e,t="";for(e=Math.abs(n);e>kc;e=e/kc|0)t=l0(e%kc)+t;return(l0(e%kc)+t).replace(_N,"$1-$2")}var rp,CT=5381,Wo=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},RT=function(n){return Wo(CT,n)};function wN(n){return zp(RT(n)>>>0)}function EN(n){return n.displayName||n.name||"Component"}function ip(n){return typeof n=="string"&&!0}var AT=typeof Symbol=="function"&&Symbol.for,PT=AT?Symbol.for("react.memo"):60115,TN=AT?Symbol.for("react.forward_ref"):60112,IN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},SN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xN=((rp={})[TN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rp[PT]=kT,rp);function u0(n){return("type"in(e=n)&&e.type.$$typeof)===PT?kT:"$$typeof"in n?xN[n.$$typeof]:IN;var e}var CN=Object.defineProperty,RN=Object.getOwnPropertyNames,c0=Object.getOwnPropertySymbols,AN=Object.getOwnPropertyDescriptor,PN=Object.getPrototypeOf,d0=Object.prototype;function bT(n,e,t){if(typeof e!="string"){if(d0){var i=PN(e);i&&i!==d0&&bT(n,i,t)}var o=RN(e);c0&&(o=o.concat(c0(e)));for(var a=u0(n),c=u0(e),h=0;h<o.length;++h){var p=o[h];if(!(p in SN||t&&t[p]||c&&p in c||a&&p in a)){var y=AN(e,p);try{CN(n,p,y)}catch{}}}}return n}function da(n){return typeof n=="function"}function Xm(n){return typeof n=="object"&&"styledComponentId"in n}function Ns(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function h0(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function ql(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Bp(n,e,t){if(t===void 0&&(t=!1),!t&&!ql(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=Bp(n[i],e[i]);else if(ql(e))for(var i in e)n[i]=Bp(n[i],e[i]);return n}function Jm(n,e){Object.defineProperty(n,"toString",{value:e})}function ou(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var kN=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;e>=a;)if((a<<=1)<0)throw ou(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var c=o;c<a;c++)this.groupSizes[c]=0}for(var h=this.indexOfGroup(e+1),p=(c=0,t.length);c<p;c++)this.tag.insertRule(h,t[c])&&(this.groupSizes[e]++,h++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),o=i+t;this.groupSizes[e]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],o=this.indexOfGroup(e),a=o+i,c=o;c<a;c++)t+="".concat(this.tag.getRule(c)).concat(Ym);return t},n}(),Yc=new Map,xd=new Map,Xc=1,bc=function(n){if(Yc.has(n))return Yc.get(n);for(;xd.has(Xc);)Xc++;var e=Xc++;return Yc.set(n,e),xd.set(e,n),e},bN=function(n,e){Xc=e+1,Yc.set(n,e),xd.set(e,n)},NN="style[".concat(ua,"][").concat(ST,'="').concat(oh,'"]'),DN=new RegExp("^".concat(ua,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ON=function(n,e,t){for(var i,o=t.split(","),a=0,c=o.length;a<c;a++)(i=o[a])&&n.registerName(e,i)},VN=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(Ym),o=[],a=0,c=i.length;a<c;a++){var h=i[a].trim();if(h){var p=h.match(DN);if(p){var y=0|parseInt(p[1],10),_=p[2];y!==0&&(bN(_,y),ON(n,_,p[3]),n.getTag().insertRules(y,o)),o.length=0}else o.push(h)}}},f0=function(n){for(var e=document.querySelectorAll(NN),t=0,i=e.length;t<i;t++){var o=e[t];o&&o.getAttribute(ua)!==IT&&(VN(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function LN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var NT=function(n){var e=document.head,t=n||e,i=document.createElement("style"),o=function(h){var p=Array.from(h.querySelectorAll("style[".concat(ua,"]")));return p[p.length-1]}(t),a=o!==void 0?o.nextSibling:null;i.setAttribute(ua,IT),i.setAttribute(ST,oh);var c=LN();return c&&i.setAttribute("nonce",c),t.insertBefore(i,a),i},MN=function(){function n(e){this.element=NT(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,o=0,a=i.length;o<a;o++){var c=i[o];if(c.ownerNode===t)return c}throw ou(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),FN=function(){function n(e){this.element=NT(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),jN=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),p0=Sd,UN={isServer:!Sd,useCSSOMInjection:!mN},DT=function(){function n(e,t,i){e===void 0&&(e=ca),t===void 0&&(t={});var o=this;this.options=gn(gn({},UN),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Sd&&p0&&(p0=!1,f0(this)),Jm(this,function(){return function(a){for(var c=a.getTag(),h=c.length,p="",y=function(T){var E=function($){return xd.get($)}(T);if(E===void 0)return"continue";var b=a.names.get(E),P=c.getGroup(T);if(b===void 0||!b.size||P.length===0)return"continue";var M="".concat(ua,".g").concat(T,'[id="').concat(E,'"]'),O="";b!==void 0&&b.forEach(function($){$.length>0&&(O+="".concat($,","))}),p+="".concat(P).concat(M,'{content:"').concat(O,'"}').concat(Ym)},_=0;_<h;_++)y(_);return p}(o)})}return n.registerId=function(e){return bc(e)},n.prototype.rehydrate=function(){!this.server&&Sd&&f0(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(gn(gn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,o=t.target;return t.isServer?new jN(o):i?new MN(o):new FN(o)}(this.options),new kN(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(bc(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(bc(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(bc(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),zN=/&/g,BN=/^\s*\/\/.*$/gm;function OT(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=OT(t.children,e)),t})}function $N(n){var e,t,i,o=ca,a=o.options,c=a===void 0?ca:a,h=o.plugins,p=h===void 0?ah:h,y=function(E,b,P){return P.startsWith(t)&&P.endsWith(t)&&P.replaceAll(t,"").length>0?".".concat(e):E},_=p.slice();_.push(function(E){E.type===nh&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(zN,t).replace(i,y))}),c.prefix&&_.push(fN),_.push(cN);var T=function(E,b,P,M){b===void 0&&(b=""),P===void 0&&(P=""),M===void 0&&(M="&"),e=M,t=b,i=new RegExp("\\".concat(t,"\\b"),"g");var O=E.replace(BN,""),$=lN(P||b?"".concat(P," ").concat(b," { ").concat(O," }"):O);c.namespace&&($=OT($,c.namespace));var B=[];return Id($,dN(_.concat(hN(function(K){return B.push(K)})))),B};return T.hash=p.length?p.reduce(function(E,b){return b.name||ou(15),Wo(E,b.name)},CT).toString():"",T}var qN=new DT,$p=$N(),VT=mt.createContext({shouldForwardProp:void 0,styleSheet:qN,stylis:$p});VT.Consumer;mt.createContext(void 0);function m0(){return H.useContext(VT)}var HN=function(){function n(e,t){var i=this;this.inject=function(o,a){a===void 0&&(a=$p);var c=i.name+a.hash;o.hasNameForId(i.id,c)||o.insertRules(i.id,c,a(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Jm(this,function(){throw ou(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=$p),this.name+e.hash},n}(),WN=function(n){return n>="A"&&n<="Z"};function g0(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;WN(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var LT=function(n){return n==null||n===!1||n===""},MT=function(n){var e,t,i=[];for(var o in n){var a=n[o];n.hasOwnProperty(o)&&!LT(a)&&(Array.isArray(a)&&a.isCss||da(a)?i.push("".concat(g0(o),":"),a,";"):ql(a)?i.push.apply(i,Td(Td(["".concat(o," {")],MT(a),!1),["}"],!1)):i.push("".concat(g0(o),": ").concat((e=o,(t=a)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in pN||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function Vs(n,e,t,i){if(LT(n))return[];if(Xm(n))return[".".concat(n.styledComponentId)];if(da(n)){if(!da(a=n)||a.prototype&&a.prototype.isReactComponent||!e)return[n];var o=n(e);return Vs(o,e,t,i)}var a;return n instanceof HN?t?(n.inject(t,i),[n.getName(i)]):[n]:ql(n)?MT(n):Array.isArray(n)?Array.prototype.concat.apply(ah,n.map(function(c){return Vs(c,e,t,i)})):[n.toString()]}function GN(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(da(t)&&!Xm(t))return!1}return!0}var KN=RT(oh),QN=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&GN(e),this.componentId=t,this.baseHash=Wo(KN,t),this.baseStyle=i,DT.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=Ns(o,this.staticRulesId);else{var a=h0(Vs(this.rules,e,t,i)),c=zp(Wo(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,c)){var h=i(a,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,h)}o=Ns(o,c),this.staticRulesId=c}else{for(var p=Wo(this.baseHash,i.hash),y="",_=0;_<this.rules.length;_++){var T=this.rules[_];if(typeof T=="string")y+=T;else if(T){var E=h0(Vs(T,e,t,i));p=Wo(p,E+_),y+=E}}if(y){var b=zp(p>>>0);t.hasNameForId(this.componentId,b)||t.insertRules(this.componentId,b,i(y,".".concat(b),void 0,this.componentId)),o=Ns(o,b)}}return o},n}(),FT=mt.createContext(void 0);FT.Consumer;var sp={};function YN(n,e,t){var i=Xm(n),o=n,a=!ip(n),c=e.attrs,h=c===void 0?ah:c,p=e.componentId,y=p===void 0?function(J,re){var ee=typeof J!="string"?"sc":a0(J);sp[ee]=(sp[ee]||0)+1;var C="".concat(ee,"-").concat(wN(oh+ee+sp[ee]));return re?"".concat(re,"-").concat(C):C}(e.displayName,e.parentComponentId):p,_=e.displayName,T=_===void 0?function(J){return ip(J)?"styled.".concat(J):"Styled(".concat(EN(J),")")}(n):_,E=e.displayName&&e.componentId?"".concat(a0(e.displayName),"-").concat(e.componentId):e.componentId||y,b=i&&o.attrs?o.attrs.concat(h).filter(Boolean):h,P=e.shouldForwardProp;if(i&&o.shouldForwardProp){var M=o.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;P=function(J,re){return M(J,re)&&O(J,re)}}else P=M}var $=new QN(t,E,i?o.componentStyle:void 0);function B(J,re){return function(ee,C,S){var x=ee.attrs,N=ee.componentStyle,V=ee.defaultProps,j=ee.foldedComponentIds,k=ee.styledComponentId,tt=ee.target,ut=mt.useContext(FT),gt=m0(),Ue=ee.shouldForwardProp||gt.shouldForwardProp,se=gN(C,ut,V)||ca,pe=function(Pe,De,Ve){for(var Ne,Oe=gn(gn({},De),{className:void 0,theme:Ve}),nt=0;nt<Pe.length;nt+=1){var le=da(Ne=Pe[nt])?Ne(Oe):Ne;for(var _e in le)Oe[_e]=_e==="className"?Ns(Oe[_e],le[_e]):_e==="style"?gn(gn({},Oe[_e]),le[_e]):le[_e]}return De.className&&(Oe.className=Ns(Oe.className,De.className)),Oe}(x,C,se),ae=pe.as||tt,F={};for(var Q in pe)pe[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&pe.theme===se||(Q==="forwardedAs"?F.as=pe.forwardedAs:Ue&&!Ue(Q,ae)||(F[Q]=pe[Q]));var ye=function(Pe,De){var Ve=m0(),Ne=Pe.generateAndInjectStyles(De,Ve.styleSheet,Ve.stylis);return Ne}(N,pe),Ae=Ns(j,k);return ye&&(Ae+=" "+ye),pe.className&&(Ae+=" "+pe.className),F[ip(ae)&&!xT.has(ae)?"class":"className"]=Ae,S&&(F.ref=S),H.createElement(ae,F)}(K,J,re)}B.displayName=T;var K=mt.forwardRef(B);return K.attrs=b,K.componentStyle=$,K.displayName=T,K.shouldForwardProp=P,K.foldedComponentIds=i?Ns(o.foldedComponentIds,o.styledComponentId):"",K.styledComponentId=E,K.target=i?o.target:n,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=i?function(re){for(var ee=[],C=1;C<arguments.length;C++)ee[C-1]=arguments[C];for(var S=0,x=ee;S<x.length;S++)Bp(re,x[S],!0);return re}({},o.defaultProps,J):J}}),Jm(K,function(){return".".concat(K.styledComponentId)}),a&&bT(K,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function y0(n,e){for(var t=[n[0]],i=0,o=e.length;i<o;i+=1)t.push(e[i],n[i+1]);return t}var v0=function(n){return Object.assign(n,{isCss:!0})};function XN(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(da(n)||ql(n))return v0(Vs(y0(ah,Td([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?Vs(i):v0(Vs(y0(i,e)))}function qp(n,e,t){if(t===void 0&&(t=ca),!e)throw ou(1,e);var i=function(o){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];return n(e,t,XN.apply(void 0,Td([o],a,!1)))};return i.attrs=function(o){return qp(n,e,gn(gn({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return qp(n,e,gn(gn({},t),o))},i}var jT=function(n){return qp(YN,n)},ce=jT;xT.forEach(function(n){ce[n]=jT(n)});const JN=ce.div.withConfig({shouldForwardProp:n=>!["flexDirection"].includes(n)})`
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  /* Flex-direction ahora es dinámico, por defecto es 'column' */
  flex-direction: ${n=>n.$flexDirection||"column"}; 
  align-items: center; /* Se mantiene para centrar horizontalmente si el item es más chico que el contenedor */
  gap: 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
`,ZN=ce.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  flex-grow: 1;
`;ce.input`
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
`;const eD=ce.button`
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
`;function ei({children:n,flexDirection:e,...t}){return R.jsx(JN,{$flexDirection:e,...t,children:n})}ei.propTypes={children:ve.node,flexDirection:ve.oneOf(["row","column","row-reverse","column-reverse"])};const UT=({isOpen:n})=>R.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{transition:"transform 0.3s ease-in-out",transform:n?"rotate(90deg)":"rotate(0deg)"},children:R.jsx("polyline",{points:"9 18 15 12 9 6"})});UT.propTypes={isOpen:ve.bool.isRequired};function Cd({title:n,children:e,defaultOpen:t=!1}){const[i,o]=H.useState(t),a=()=>{o(!i)};return R.jsxs(ei,{style:{marginBottom:"12px"},children:[R.jsxs("div",{onClick:a,style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",cursor:"pointer",paddingBottom:i?"10px":"0",borderBottom:i?"1px solid #eee":"none",marginBottom:i?"10px":"0"},children:[R.jsx(ZN,{style:{margin:0,flexGrow:1,textAlign:"left"},children:n}),R.jsxs(eD,{type:"button",children:[" ",R.jsx(UT,{isOpen:i})]})]}),i&&R.jsx("div",{style:{width:"100%"},children:e})]})}Cd.propTypes={title:ve.string.isRequired,children:ve.node.isRequired,defaultOpen:ve.bool};const tD=ce.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0; /* Ya no hay padding aquí, el Navbar lo maneja */
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif; /* Tipografía a Roboto! */
  color: #1a1a1a; /* Color de texto general */
`;ce.input`
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
`;const Jo=ce.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin: 0px;
  padding: 10px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-top: 20px;
  }
`,nD=ce.a`
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
`,Sl=ce.div`
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
`;ce.header`
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
`;ce.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  span {
    color: #e74c3c; /* Un color de acento */
  }
`;ce.input`
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
`;const rD=ce.section`
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 12px;
  padding: 15px;
`,iD=ce.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,tr=ce.p`
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
`,sD=ce.button`
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
`,zT=ce.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  /* Eliminado: box-shadow: 0 4px 15px rgba(0,0,0,0.1); */ /* ¡CAMBIO CLAVE AQUÍ! */
`,Ds=ce.label`
  font-size: 1rem;
  color: #333;
  font-weight: 600;
`,wr=ce.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,BT=ce.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
`,Go=ce.button.withConfig({shouldForwardProp:n=>!["primary","secondary"].includes(n)})`
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
`,oD=n=>{if(n<60)return`${n} Segundos`;{const e=Math.floor(n/60),t=n%60,i=t<10?`0${t}`:t;return`${e}:${i} Minutos`}},$T=({routines:n,loading:e,error:t,toggleExerciseCompleted:i,updateExerciseKilos:o})=>{const[a,c]=mt.useState(null),h=p=>{c(y=>y===p?null:p)};return e?R.jsx(Jo,{children:"Cargando rutinas..."}):t?R.jsx(Jo,{style:{color:"#e74c3c"},children:"¡Uups! Hubo un error al cargar tus rutinas. Por favor, intentá de nuevo."}):!e&&n.length===0?R.jsx(Jo,{children:"¡No tienes rutinas asignadas aún!"}):R.jsxs("section",{className:"RoutineList-container",style:{width:"100%"},children:[R.jsx("h3",{style:{marginBottom:"15px",textAlign:"center"},children:"Tus Rutinas Asignadas:"}),R.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:n.map(p=>{const y=p.exercises?p.exercises.length:0,_=p.exercises?p.exercises.filter(E=>E.completed).length:0,T=y>0?Math.round(_/y*100):0;return R.jsx(Cd,{title:p.name,defaultOpen:p.id===a,onClickTitle:()=>h(p.id),children:R.jsxs("div",{style:{padding:"5px 0"},children:[R.jsxs("p",{style:{fontSize:"0.9rem",color:"#777",marginBottom:"8px"},children:["Creada el: ",p.createdAt&&new Date(p.createdAt.toDate()).toLocaleDateString("es-AR")]}),R.jsxs("p",{style:{fontSize:"0.9rem",color:"#777",marginBottom:"8px"},children:["Descanso entre ejercicios: ",p.restTime||0," segundos"]}),R.jsxs("p",{style:{fontSize:"0.9rem",color:"#777",marginBottom:"15px"},children:["RIR General: ",p.rir||0]}),R.jsxs("p",{style:{fontSize:"1rem",color:"#007bff",fontWeight:"bold",marginBottom:"15px"},children:["Progreso: ",T,"% Completado"]}),R.jsx("h5",{style:{marginBottom:"10px",color:"#2c3e50"},children:"Ejercicios de la rutina:"}),R.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:p.exercises.map(E=>R.jsxs(ei,{style:{padding:"10px 15px",border:"1px solid #eee",display:"flex",flexDirection:"column",gap:"8px"},children:[R.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[R.jsx("h6",{style:{margin:0,color:"#333",fontSize:"1rem"},children:E.name}),R.jsx("input",{type:"checkbox",checked:E.completed||!1,onChange:()=>i(p.id,E.id),style:{transform:"scale(1.2)"}})]}),R.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px",fontSize:"0.9rem",color:"#555"},children:[R.jsxs("p",{style:{margin:0},children:["Series: ",E.sets||0]}),E.type==="timed"?R.jsxs("p",{style:{margin:0},children:["Tiempo: ",oD(E.time||0)]}):R.jsxs(R.Fragment,{children:[R.jsxs("p",{style:{margin:0},children:["Repeticiones: ",E.reps||0]}),R.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"5px"},children:[R.jsx(Ds,{style:{margin:0,fontWeight:"normal",fontSize:"0.9rem"},children:"Kilos:"}),R.jsx(wr,{type:"number",min:"0",placeholder:"Kilos",value:E.kilos===0?"":E.kilos,onChange:b=>o(p.id,E.id,b.target.value),style:{width:"70px",textAlign:"center",padding:"5px"}})]})]})]})]},E.id))})]})},p.id)})})]})};$T.propTypes={routines:ve.arrayOf(ve.shape({id:ve.string.isRequired,name:ve.string.isRequired,createdAt:ve.any,restTime:ve.number,rir:ve.number,exercises:ve.arrayOf(ve.shape({id:ve.number.isRequired,name:ve.string.isRequired,type:ve.string,sets:ve.number,reps:ve.number,time:ve.number,kilos:ve.number,completed:ve.bool})).isRequired})).isRequired,loading:ve.bool.isRequired,error:ve.bool.isRequired,toggleExerciseCompleted:ve.func.isRequired,updateExerciseKilos:ve.func.isRequired};const Zm="/tucu/assets/logo-sdMuk5q7.jpg",aD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+0lEQVR4nO2avS9kYRSHH5GImpD4zP4RVApCJUG0m+0Fy2wpIlH4D4gCu9lCqRDNri10i3+Bteh8VCuMhDAy8iZHIpPgrvsezuU8ya+5mY/7zHvmvueeGXAcx3GcZmAU+AVsA+eSbTk2AjS9hY+pAZgHCkDxidwAS8AHMko/kE8gWpozoI+M8UVW7H9l7692jgyt7E0K2fvS5le68Zll/Fh512OY7xFl7/IVw1tPQUG4IJVjjpyC7F0+Y5BVReEfGOSvonDoyMyRVxQOr22OonLMUXxvwnlF2VMM8kdReAuDrL63bWlEUXgIgzQptZbXVlvLwDcF4TmMj3TOIl+d6zBOd6TSDgOAXjJCLsKIJ0w5M0XfM8s7lHEPGaUGmJYrbZJVXczCdzYJjXIT/1O6prxkS5qKYctbj+M4jvMWKAdagQFgBliT6eMxcCE5kmNrsl+Hx7bIczNBreypK8BJitbyH7AMDErzYooK4JNMPK6V7odDw/JR3uvVqAYmgEMFyYdyAIwDVS8pWiE/eKcp2bQJ7z0GVGrLtgP7ryhaml2gTUO0DJhSmlmlTTinSTnHaLKzBsSeykIs6VEDMkkTRsWp2TMgkjQ7MYQvDIgkTfh3X2o2DYgkze8Ywp1KHVTsXMm2GYUuYAO4NCBWmnBO60BHLFnHcRzHcVDhFpGw1GEF+nhKAAAAAElFTkSuQmCC",lD=ce.nav`
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
`,uD=ce.img`
  max-width: 50px; /* Tamaño del logo para móviles en el navbar */
  height: auto;
  display: block;

  @media (min-width: 768px) {
    max-width: 120px; /* Aumenta el tamaño en pantallas grandes */
    margin-bottom: 0; /* Elimina el margen en desktop */
  }
`,cD=ce.button`
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
`;ce.div`
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
`;ce.div`
  padding: 8px 12px;
  color: white;
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #556c80;
  }
`;const dD=ce.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1; /* Permite que ocupe el espacio disponible en el centro */

  @media (min-width: 768px) {
    justify-content: center;
  }
`,_0=ce.h2`
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
`,w0=ce.div`
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
`,op=ce.h1`
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
`,hD=ce.input`
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
`;function Tr({type:n="student",loading:e,totalActivedRoutines:t=0,completedActivedRoutines:i=0,searchValue:o="",setSearchValue:a=()=>{},studentName:c="",isCoachDashboard:h=!1}){const{user:p,role:y,userName:_}=ns(),T=Xi(),E=()=>{T("/profile")},b=()=>{T(y==="coach"?"/coach":"/home")},P=_||(p&&p.email?p.email.split("@")[0]:"Usuario");let M;return n==="coach"&&h?M=R.jsxs(R.Fragment,{children:[R.jsx(op,{children:"Panel del Coach"}),R.jsx(hD,{placeholder:"Buscar alumnos...",value:o,onChange:O=>a(O.target.value)})]}):n==="coach"?M=R.jsx(op,{children:"Panel del Coach"}):n==="studentRoutinesPage"?M=R.jsxs(R.Fragment,{children:[R.jsx(op,{children:"Panel del Coach"}),R.jsxs(_0,{style:{fontSize:"0.8rem",marginTop:"5px"},children:["Rutinas de ",R.jsx("span",{children:c})]})]}):M=R.jsxs(R.Fragment,{children:[R.jsxs(_0,{children:["¡Hola, ",R.jsx("span",{children:P}),"!"]}),t>0?R.jsxs(w0,{$totalActivedRoutines:t,$completedActivedRoutines:i,children:["Has completado ",R.jsx("span",{children:i})," de ",R.jsx("span",{children:t})," rutinas."]}):R.jsx(w0,{style:{color:"#bdc3c7"},children:"Aún no tienes rutinas asignadas."})]}),R.jsxs(lD,{$loading:e,children:[R.jsx(uD,{src:Zm,alt:"Logo Prof Angel San Roman",onClick:b,style:{cursor:"pointer"},onError:O=>{O.target.onerror=null,O.target.src="https://placehold.co/90x90/CCCCCC/000000?text=Logo"}}),R.jsx(dD,{children:M}),R.jsx(cD,{onClick:E,style:{cursor:"pointer"},children:R.jsx("img",{src:aD,alt:"Ícono de Perfil",style:{width:"40px",height:"auto"},onError:O=>{O.target.onerror=null,O.target.src="https://placehold.co/24x24/CCCCCC/000000?text=👤"}})})]})}Tr.propTypes={type:ve.oneOf(["student","coach","studentRoutinesPage"]),loading:ve.bool.isRequired,totalActivedRoutines:ve.number,completedActivedRoutines:ve.number,searchValue:ve.string,setSearchValue:ve.func,studentName:ve.string,isCoachDashboard:ve.bool,totalStudentsCount:ve.number};const fD="/tucu/assets/whatsapp-dfEOmlNJ.webp";function pD(){const{user:n,loading:e}=ns(),{routines:t,loading:i,error:o,totalActivedRoutines:a,completedActivedRoutines:c,toggleExerciseCompleted:h,updateExerciseKilos:p}=Hb(),y=e||i,_=n&&n.email?n.email.split("@")[0]:"Alumno",T=!y&&!o&&t.length===0;return R.jsxs(tD,{children:[R.jsx(Tr,{userName:_,loading:y,type:"student",totalActivedRoutines:a,completedActivedRoutines:c,isCoachDashboard:!1}),R.jsxs(ei,{style:{marginTop:"20px",width:"90%"},children:[y&&R.jsx(Jo,{children:"Cargando tus rutinas..."}),o&&R.jsx(Jo,{children:"¡Uups! Hubo un error al cargar tus rutinas."}),T&&R.jsxs(R.Fragment,{children:[R.jsx(Jo,{children:"Aún no tienes rutinas creadas. Pídele al profe que te cree una rutina."}),R.jsx(nD,{href:"https://wa.me/XXXXXXXXXX?text=Hola%20Profe,%20me%20podrías%20crear%20una%20rutina%3F",target:"_blank",rel:"noopener noreferrer",children:R.jsx("img",{src:fD,alt:"Enviar mensaje por WhatsApp",onError:E=>{E.target.onerror=null,E.target.src="https://placehold.co/60x60/CCCCCC/000000?text=WA"}})})]}),!y&&!o&&t.length>0&&R.jsx($T,{routines:t,loading:i,error:o,toggleExerciseCompleted:h,updateExerciseKilos:p})]})]})}function qT(n,e){const[t,i]=H.useState([]),[o,a]=H.useState(!0),[c,h]=H.useState(null),[p,y]=H.useState(""),[_,T]=H.useState(null),[E,b]=H.useState(null),P=H.useRef(null),M=()=>{a(!0),h(null),i([]),P.current&&P.current();try{const re=zl(rr,"users"),ee=pd(re,D_("role","==","student"));P.current=Fm(ee,C=>{const S=C.docs.map(x=>({id:x.id,...x.data()}));i(S),a(!1)},C=>{console.error("Error fetching students from Firestore:",C),h("Error al cargar la lista de alumnos."),a(!1)})}catch(re){console.error("Failed to setup students listener:",re),h("Error al iniciar la escucha de alumnos."),a(!1)}};H.useEffect(()=>(!e&&n?M():!e&&!n&&a(!1),()=>{P.current&&P.current()}),[n,e]);const O=async(re,ee)=>{b(null);try{const C=zl(rr,"users"),S=pd(C,D_("email","==",ee));if(!(await IP(S)).empty){b("El correo electrónico ya está registrado. Por favor, usa otro.");return}await NE(C,{name:re,email:ee,role:"student",createdAt:new Date}),console.log("Alumno añadido con éxito.")}catch(C){console.error("Error al añadir nuevo alumno:",C),b("Error al intentar crear el alumno. Por favor, intentá de nuevo.")}},$=re=>{T(re)},B=t.filter(re=>re.name.toLowerCase().includes(p.toLowerCase())||re.email.toLowerCase().includes(p.toLowerCase()));return{states:{loading:o,error:c,searchedStudents:B,searchValue:p,selectedStudentId:_,addStudentError:E},statesUpdaters:{setSearchValue:y,addStudent:O,selectStudent:$,sincronizeStudents:M,setAddStudentError:b}}}const mD=ce.div`
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
`,gD=ce.div`
  background: white; /* Fondo blanco del modal en sí */
  padding: 30px;
  border-radius: 10px;
  width: 90%; /* Ancho responsivo */
  max-width: 500px; /* Ancho máximo para no desbordar */
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); /* Sombra para destacarlo */
  display: flex;
  flex-direction: column;
  position: relative; /* Para poder posicionar elementos internos (como un botón de cerrar) */
`;ce.button`
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
`;function eg({children:n}){const e=document.getElementById("modal-root");return e?NS.createPortal(R.jsx(mD,{children:R.jsx(gD,{children:n})}),e):(console.error("El elemento con id 'modal-root' no se encontró en el DOM. Asegurate de agregarlo a public/index.html"),null)}eg.propTypes={children:ve.node.isRequired};const yD=ce.li.withConfig({shouldForwardProp:n=>!["isSelected"].includes(n)})`
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
`,vD=ce.p`
  font-size: 1.3rem; /* Tamaño de fuente un poco más grande */
  font-weight: bold; /* Negrita */
  color: #333; /* Color de texto oscuro */
  flex-grow: 1; /* Para que ocupe el espacio disponible */
  margin: 0; /* Eliminar margen por defecto de p */
`,_D=ce.p`
  font-size: 0.9rem;
  color: #777;
  margin: 0;
  /* Podrías querer que solo se muestre en ciertas condiciones */
`,wD=ce.button`
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
`;function HT({student:n,onSelectStudent:e,isSelected:t=!1}){const{id:i,name:o,email:a}=n;return R.jsxs(yD,{onClick:()=>e(i),$isSelected:t,children:[R.jsxs("div",{children:[" ",R.jsx(vD,{children:o}),a&&R.jsx(_D,{children:a})," "]}),R.jsx(wD,{children:"Ver Rutinas"})]})}HT.propTypes={student:ve.shape({id:ve.string.isRequired,name:ve.string.isRequired,email:ve.string}).isRequired,onSelectStudent:ve.func.isRequired,isSelected:ve.bool};function WT({students:n=[],loading:e,error:t=null,searchText:i="",onSelectStudent:o,selectedStudentId:a=null,onRetrySync:c}){return e?R.jsx(tr,{children:"Cargando alumnos..."}):t?R.jsxs(tr,{children:["¡Uups! Hubo un error al cargar los alumnos.",R.jsx("button",{onClick:c,style:{backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"5px",padding:"8px 15px",marginTop:"10px",cursor:"pointer",fontSize:"0.9rem"},children:"Reintentar"})]}):n.length===0?i?R.jsxs(tr,{children:["¡No hay resultados para: ",i,"!"]}):R.jsx(tr,{children:"¡No tenés alumnos todavía! Presioná + para crear uno."}):R.jsx(iD,{children:n.map(h=>R.jsx(HT,{student:h,onSelectStudent:()=>o(h.id),isSelected:h.id===a},h.id))})}WT.propTypes={students:ve.arrayOf(ve.shape({id:ve.string.isRequired,name:ve.string.isRequired,email:ve.string.isRequired})).isRequired,loading:ve.bool.isRequired,error:ve.oneOfType([ve.object,ve.string,ve.oneOf([null])]),searchText:ve.string,onSelectStudent:ve.func.isRequired,selectedStudentId:ve.string,onRetrySync:ve.func.isRequired};const ED=ce.div`
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
`,TD=ce.div`
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
`,ID=ce.img`
  margin: 0 auto;
  width: 150px; /* ¡CAMBIO CLAVE AQUÍ! Ancho deseado de 240px */
  max-width: 100%; /* Asegura que el logo se achique en pantallas pequeñas si es necesario */
  height: auto;
  display: block; /* Asegura que el margin auto funcione */

  /* Las media queries para max-width anteriores se vuelven menos relevantes con 'width: 240px' y 'max-width: 100%'
     porque el logo intentará mantener 240px, pero nunca superará el ancho de su contenedor.
  */
`,SD=ce.h1`
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
`,xD=ce.p`
  font-size: 1rem; /* Tamaño de subtítulo para móviles */
  color: #7f8c8d;
  margin-bottom: 15px; /* Margen ajustado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 1.1rem; /* Vuelve al tamaño original */
    margin-bottom: 20px;
  }
`,CD=ce.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacio entre campos ajustado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    gap: 18px; /* Vuelve al gap original */
  }
`,E0=ce.label`
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
`,T0=ce.input`
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
`,RD=ce.button`
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
`,tg=ce.p`
  color: #e74c3c; /* ¡Rojo para mensajes de error, ya estaba así y es consistente! */
  font-size: 0.85rem; /* Tamaño de error para móviles */
  margin-top: -8px; /* Margen ajustado */
  text-align: left;

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 0.9rem; /* Vuelve al tamaño original */
    margin-top: -10px;
  }
`,AD=ce.p`
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
`;function PD(){const n=Xi(),{user:e,loading:t}=ns(),{states:i,statesUpdaters:o}=qT(e,t),{loading:a,error:c,searchedStudents:h,searchValue:p,selectedStudentId:y,addStudentError:_}=i,{setSearchValue:T,addStudent:E,selectStudent:b,sincronizeStudents:P,setAddStudentError:M}=o,[O,$]=mt.useState(!1),[B,K]=mt.useState(""),[J,re]=mt.useState(""),ee=x=>{b(x),n(`/coach/students/${x}/routines`)},C=async x=>{x.preventDefault(),M(null),B.trim()&&J.trim()&&(await E(B.trim(),J.trim()),setTimeout(()=>{i.addStudentError||($(!1),K(""),re(""))},0))},S=()=>{$(!1),K(""),re(""),M(null)};return R.jsxs(Sl,{children:[R.jsx(Tr,{type:"coach",loading:a,searchValue:p,setSearchValue:T,isCoachDashboard:!0}),R.jsx(rD,{children:R.jsx(WT,{students:h,loading:a,error:c,searchText:p,onSelectStudent:ee,selectedStudentId:y,onRetrySync:P})}),R.jsx(sD,{onClick:()=>$(!0),children:"+"}),!!O&&R.jsx(eg,{children:R.jsxs(zT,{onSubmit:C,children:[R.jsx("h2",{children:"Crear Nuevo Alumno"}),_&&R.jsx(tg,{children:_}),R.jsx(Ds,{htmlFor:"studentName",children:"Nombre del Alumno:"}),R.jsx(wr,{id:"studentName",type:"text",placeholder:"Ej. Juan Pérez",value:B,onChange:x=>K(x.target.value),required:!0}),R.jsx(Ds,{htmlFor:"studentEmail",children:"Email del Alumno:"}),R.jsx(wr,{id:"studentEmail",type:"email",placeholder:"Ej. juan@mail.com",value:J,onChange:x=>re(x.target.value),required:!0}),R.jsxs(BT,{children:[R.jsx(Go,{type:"submit",primary:!0,children:"Crear"}),R.jsx(Go,{type:"button",secondary:!0,onClick:S,children:"Cancelar"})]})]})})]})}const I0=[{id:1,name:"Sentadilla",category:"Piernas",description:"Ejercicio fundamental para piernas y glúteos.",type:"reps_sets"},{id:2,name:"Press de Banca",category:"Pecho",description:"Ejercicio de fuerza para pecho, hombros y tríceps.",type:"reps_sets"},{id:3,name:"Peso Muerto",category:"Espalda",description:"Ejercicio compuesto para toda la cadena posterior.",type:"reps_sets"},{id:4,name:"Dominadas",category:"Espalda",description:"Ejercicio de peso corporal para espalda y bíceps.",type:"reps_sets"},{id:5,name:"Press Militar",category:"Hombros",description:"Ejercicio de fuerza para los hombros.",type:"reps_sets"},{id:6,name:"Remo con Barra",category:"Espalda",description:"Ejercicio para la espalda media.",type:"reps_sets"},{id:7,name:"Curl de Bíceps",category:"Brazos",description:"Ejercicio de aislamiento para los bíceps.",type:"reps_sets"},{id:8,name:"Extensiones de Tríceps (Banco)",category:"Brazos",description:"Ejercicio de aislamiento para los tríceps en banco.",type:"reps_sets"},{id:9,name:"Zancadas",category:"Piernas",description:"Ejercicio unilateral para piernas y glúteos.",type:"reps_sets"},{id:10,name:"Fondos (Paralelas)",category:"Pecho / Tríceps",description:"Ejercicio de peso corporal para pecho y tríceps.",type:"reps_sets"},{id:11,name:"Plancha",category:"Core",description:"Ejercicio isométrico para fortalecer el core.",type:"timed"},{id:12,name:"Elevaciones Laterales",category:"Hombros",description:"Ejercicio de aislamiento para la parte lateral del hombro.",type:"reps_sets"},{id:13,name:"Prensa de Piernas",category:"Piernas",description:"Ejercicio de máquina para piernas.",type:"reps_sets"},{id:14,name:"Flexiones (Push-ups)",category:"Pecho",description:"Ejercicio de peso corporal para pecho y tríceps.",type:"reps_sets"},{id:15,name:"Crunches",category:"Core",description:"Ejercicio para los abdominales superiores.",type:"reps_sets"},{id:16,name:"Ejercicio Escalera",category:"Calentamiento",description:"Entrada en calor dinámica.",type:"timed"},{id:17,name:"Hip Thrust",category:"Glúteos",description:"Ejercicio potente para glúteos.",type:"reps_sets"},{id:18,name:"Sentadilla Búlgara",category:"Piernas",description:"Ejercicio unilateral de piernas.",type:"reps_sets"},{id:19,name:"Peso Muerto a 1 Pie",category:"Piernas / Espalda",description:"Ejercicio de equilibrio y fuerza de cadena posterior.",type:"reps_sets"},{id:20,name:"Barquito Isométrico",category:"Core",description:"Isométrico para abdomen bajo.",type:"timed"},{id:21,name:"Extensiones de Brazo en Banco",category:"Brazos",description:"Ejercicio para tríceps tumbado en banco.",type:"reps_sets"},{id:22,name:"Pecho Plano con Mancuerna",category:"Pecho",description:"Variante del press de banca con mancuernas.",type:"reps_sets"},{id:23,name:"Empuje en Polea (Tríceps)",category:"Tríceps",description:"Extensión de tríceps en polea alta.",type:"reps_sets"},{id:24,name:"Plancha Lateral",category:"Core",description:"Isométrico para oblicuos.",type:"timed"},{id:25,name:"Rueda Abdominal",category:"Core",description:"Fortalecimiento de core con rueda.",type:"reps_sets"},{id:26,name:"Oblicuos con Tensor Isométrico",category:"Core",description:"Isométrico para oblicuos con tensor.",type:"timed"},{id:27,name:"Estocadas con Salto",category:"Piernas / Cardio",description:"Estocadas dinámicas con salto.",type:"reps_sets"},{id:28,name:"Sentadillas con Salto",category:"Piernas / Cardio",description:"Sentadilla explosiva con salto.",type:"reps_sets"},{id:29,name:"Camillas de Isquios",category:"Piernas",description:"Aislamiento para isquiotibiales.",type:"reps_sets"},{id:30,name:"Sentadilla Isométrica",category:"Piernas",description:"Mantener posición de sentadilla contra la pared.",type:"timed"},{id:31,name:"Sillón de Cuádriceps",category:"Piernas",description:"Aislamiento para cuádriceps en máquina.",type:"reps_sets"},{id:32,name:"Aductores (Máquina)",category:"Piernas",description:"Aislamiento de aductores en máquina.",type:"reps_sets"},{id:33,name:"Glúteo Medio (Máquina/Banda)",category:"Glúteos",description:"Aislamiento de glúteo medio.",type:"reps_sets"},{id:34,name:"Pantorrillas (Elevación)",category:"Piernas",description:"Elevaciones para gemelos.",type:"reps_sets"},{id:35,name:"Remo en Máquina (Remo Bajo)",category:"Espalda",description:"Ejercicio de espalda en máquina de remo.",type:"reps_sets"},{id:36,name:"Plancha Brazo Adelante",category:"Core",description:"Variante de plancha con brazo extendido.",type:"timed"},{id:37,name:"Oblicuos con Movimiento (Russian Twist)",category:"Core",description:"Movimiento de torsión para oblicuos.",type:"reps_sets"},{id:38,name:"Subir al Cajón (Step-up)",category:"Piernas",description:"Ejercicio funcional para piernas.",type:"reps_sets"},{id:39,name:"Búlgara Isométrica",category:"Piernas",description:"Mantener posición de sentadilla búlgara.",type:"timed"},{id:40,name:"Patada de Glúteos en Polea",category:"Glúteos",description:"Aislamiento para glúteos en polea.",type:"reps_sets"},{id:41,name:"Vuelos Combinados (Hombros)",category:"Hombros",description:"Combinación de elevaciones laterales y frontales.",type:"reps_sets"},{id:42,name:"Bíceps con Mancuernas",category:"Brazos",description:"Curl de bíceps con mancuernas.",type:"reps_sets"},{id:43,name:"Tríceps en Polea",category:"Brazos",description:"Extensiones de tríceps en polea.",type:"reps_sets"},{id:44,name:"Puente de Glúteos (Glute Bridge)",category:"Glúteos",description:"Ejercicio para activar glúteos y cadena posterior.",type:"reps_sets"},{id:45,name:"Skipping",category:"Calentamiento",description:"Entrada en calor dinámica, elevación de rodillas.",type:"timed"},{id:46,name:"Elíptica",category:"Cardio",description:"Ejercicio cardiovascular en elíptica.",type:"timed"}];function kD(){var nt;const{studentId:n}=LI(),e=Xi(),[t,i]=H.useState(null),[o,a]=H.useState(!0),[c,h]=H.useState(null),[p,y]=H.useState(!1),[_,T]=H.useState(""),[E,b]=H.useState(0),[P,M]=H.useState(0),[O,$]=H.useState([]),[B,K]=H.useState(!1),[J,re]=H.useState(null),[ee,C]=H.useState([]),[S,x]=H.useState(""),[N,V]=H.useState(null),[j,k]=H.useState([]),[tt,ut]=H.useState(!0),[gt,Ue]=H.useState(null);H.useEffect(()=>{(async()=>{if(!n){h("ID del alumno no proporcionado."),a(!1);return}a(!0),h(null),i(null);try{const _e=Us(rr,"users",n),Fe=await Xd(_e);Fe.exists()&&Fe.data().role==="student"?i({id:Fe.id,...Fe.data()}):h("No se encontró al alumno o el ID no corresponde a un alumno.")}catch(_e){console.error("Error al cargar la información del alumno:",_e),h("Error al cargar la información del alumno.")}finally{a(!1)}})()},[n,e]),H.useEffect(()=>{if(!n){Ue("ID del alumno no proporcionado para cargar rutinas."),ut(!1);return}ut(!0),Ue(null);const le=zl(rr,`users/${n}/routines`),_e=pd(le),Fe=Fm(_e,Ee=>{try{const Je=Ee.docs.map(li=>({id:li.id,...li.data()}));k(Je),console.log("Rutinas del alumno cargadas/actualizadas:",Je)}catch(Je){console.error("Error al obtener las rutinas del alumno en tiempo real:",Je),Ue("Error al cargar las rutinas del alumno.")}finally{ut(!1)}},Ee=>{console.error("Error en la suscripción a las rutinas:",Ee),Ue("No se pudieron cargar las rutinas. Posiblemente problemas de permisos."),ut(!1)});return()=>Fe()},[n]),H.useEffect(()=>{if(p&&O.length===0){K(!0),re(null);try{$(I0),console.log("Ejercicios cargados desde JSON local:",I0)}catch(le){console.error("Error al cargar ejercicios desde JSON local:",le),re("Error al cargar los ejercicios locales.")}finally{K(!1)}}},[p,O.length]);const se=le=>{C(_e=>_e.some(Ee=>Ee.id===le.id)?_e.filter(Ee=>Ee.id!==le.id):[..._e,{id:le.id,name:le.name,type:le.type||"reps_sets",sets:0,reps:0,time:0,kilos:0,completed:!1}])},pe=(le,_e)=>{C(Fe=>Fe.map(Ee=>Ee.id===le?{...Ee,reps:Number(_e)||0}:Ee))},ae=(le,_e)=>{C(Fe=>Fe.map(Ee=>Ee.id===le?{...Ee,sets:Number(_e)||0}:Ee))},F=(le,_e)=>{C(Fe=>Fe.map(Ee=>Ee.id===le?{...Ee,time:Number(_e)||0}:Ee))},Q=async le=>{if(le.preventDefault(),V(null),!_.trim()){V("El nombre de la rutina no puede estar vacío.");return}if(ee.length===0){V("Debes seleccionar al menos un ejercicio para la rutina.");return}if(E<=0){V("El tiempo de descanso debe ser mayor a 0 segundos.");return}if(P<0||P>10){V("El RIR debe estar entre 0 y 10.");return}if(ee.some(Fe=>Fe.sets<=0?!0:Fe.type==="timed"?Fe.time<=0:Fe.reps<=0)){V("Todos los ejercicios seleccionados deben tener al menos 1 serie y 1 repetición/segundo.");return}try{const Fe=zl(rr,`users/${n}/routines`);await NE(Fe,{name:_.trim(),exercises:ee.map(Ee=>{const Je={id:Ee.id,name:Ee.name,type:Ee.type,sets:Ee.sets,completed:!1};return Ee.type==="timed"?Je.time=Ee.time:(Je.reps=Ee.reps,Je.kilos=0),Je}),restTime:Number(E),rir:Number(P),createdAt:new Date}),console.log("Rutina creada con éxito para el alumno:",n),y(!1),T(""),C([]),b(0),M(0),V(null)}catch(Fe){console.error("Error al crear la rutina:",Fe),V("Error al guardar la rutina. Por favor, intentá de nuevo. Verifica permisos en Firestore.")}},ye=()=>{y(!1),T(""),C([]),b(0),M(0),V(null),re(null),x("")},Ae=async le=>{console.log(`Editar rutina con ID: ${le}`),alert("Funcionalidad de edición no implementada aún.")},Pe=async le=>{if(window.confirm("¿Estás seguro de que quieres eliminar esta rutina?"))try{const _e=Us(rr,`users/${n}/routines`,le);await CP(_e),console.log(`Rutina con ID ${le} eliminada con éxito.`)}catch(_e){console.error("Error al eliminar la rutina:",_e),alert("Error al eliminar la rutina. Verifica los permisos.")}},Ve=O.filter(le=>le.name.toLowerCase().includes(S.toLowerCase())).reduce((le,_e)=>{const Fe=_e.category||"Otros";return le[Fe]||(le[Fe]=[]),le[Fe].push(_e),le},{}),Ne="studentRoutinesPage",Oe=(t==null?void 0:t.name)||((nt=t==null?void 0:t.email)==null?void 0:nt.split("@")[0])||"Este Alumno";return o||tt?R.jsxs(Sl,{children:[R.jsx(Tr,{loading:!0,type:Ne,studentName:Oe,isCoachDashboard:!1})," ",R.jsx(tr,{children:"Cargando información del alumno y sus rutinas..."})]}):c?R.jsxs(Sl,{children:[R.jsx(Tr,{loading:!1,type:Ne,studentName:Oe,isCoachDashboard:!1})," ",R.jsxs(tr,{children:[c," ",R.jsx("br",{}),R.jsx("button",{onClick:()=>e("/coach"),children:"Volver al panel principal"})]})]}):gt&&j.length===0?R.jsxs(Sl,{children:[R.jsx(Tr,{loading:!1,type:Ne,studentName:Oe,isCoachDashboard:!1})," ",R.jsxs(ei,{style:{maxWidth:"600px",marginTop:"20px",padding:"20px"},children:[R.jsxs("h2",{style:{textAlign:"center",color:"#2c3e50",marginBottom:"15px"},children:["Rutinas de ",Oe]}),R.jsx(tr,{style:{marginTop:"0",fontSize:"0.9rem",color:"#e74c3c"},children:gt}),R.jsx("button",{onClick:()=>y(!0),style:{backgroundColor:"#2ecc71",color:"white",border:"none",borderRadius:"8px",padding:"10px 20px",fontSize:"1rem",fontWeight:"bold",cursor:"pointer",marginTop:"20px",width:"fit-content",alignSelf:"center",boxShadow:"0 4px 8px rgba(46, 204, 113, 0.2)",transition:"background-color 0.2s ease, transform 0.2s ease"},children:"Crear Nueva Rutina"})]})]}):R.jsxs(Sl,{children:[R.jsx(Tr,{loading:!1,type:Ne,studentName:Oe,isCoachDashboard:!1})," ",R.jsxs(ei,{style:{maxWidth:"600px",marginTop:"20px",padding:"20px"},children:[j.length===0?R.jsx(tr,{style:{marginTop:"0",fontSize:"0.9rem",color:"#555"},children:"Este alumno aún no tiene rutinas creadas."}):R.jsxs("div",{style:{width:"100%"},children:[R.jsx("h3",{children:"Rutinas Asignadas:"}),j.map(le=>R.jsx(Cd,{title:le.name,defaultOpen:!1,children:R.jsxs("div",{style:{padding:"5px 0"},children:[R.jsxs("p",{style:{fontSize:"0.9rem",color:"#777",marginBottom:"8px"},children:["Creada el: ",le.createdAt&&new Date(le.createdAt.toDate()).toLocaleDateString("es-AR")]}),R.jsxs("p",{style:{fontSize:"0.9rem",color:"#777",marginBottom:"8px"},children:["Descanso entre ejercicios: ",le.restTime||0," segundos"]}),R.jsxs("p",{style:{fontSize:"0.9rem",color:"#777",marginBottom:"15px"},children:["RIR General: ",le.rir||0]}),R.jsx("h5",{children:"Ejercicios de la rutina:"}),R.jsx("ul",{style:{listStyle:"disc",paddingLeft:"20px",margin:0},children:le.exercises.map(_e=>R.jsxs("li",{style:{fontSize:"0.9rem",color:"#555",marginBottom:"4px"},children:[_e.name,_e.type==="timed"?` (${_e.sets||0} Series, ${_e.time||0} Segundos)`:` (${_e.sets||0} Series, ${_e.reps||0} Reps, ${_e.kilos||0} Kg)`]},_e.id))}),R.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",marginTop:"15px"},children:[R.jsx(Go,{type:"button",onClick:()=>Ae(le.id),style:{backgroundColor:"#3498db",padding:"8px 12px",fontSize:"0.85rem"},children:"Editar"}),R.jsx(Go,{type:"button",onClick:()=>Pe(le.id),style:{backgroundColor:"#e74c3c",padding:"8px 12px",fontSize:"0.85rem"},children:"Eliminar"})]})]})},le.id))]}),R.jsx("button",{onClick:()=>y(!0),style:{backgroundColor:"#2ecc71",color:"white",border:"none",borderRadius:"8px",padding:"10px 20px",fontSize:"1rem",fontWeight:"bold",cursor:"pointer",marginTop:"20px",width:"fit-content",alignSelf:"center",boxShadow:"0 4px 8px rgba(46, 204, 113, 0.2)",transition:"background-color 0.2s ease, transform 0.2s ease"},children:"Crear Nueva Rutina"})]}),!!p&&R.jsx(eg,{children:R.jsxs(zT,{onSubmit:Q,style:{maxWidth:"500px",margin:"auto"},children:[R.jsxs("h2",{children:["Crear Nueva Rutina para ",Oe]}),N&&R.jsx(tg,{children:N}),R.jsx(Ds,{htmlFor:"routineName",children:"Nombre de la Rutina:"}),R.jsx(wr,{id:"routineName",name:"routineName",type:"text",placeholder:"Ej. Rutina de Fuerza Lunes",value:_,onChange:le=>T(le.target.value),required:!0}),R.jsx(Ds,{htmlFor:"restTime",children:"Tiempo de Descanso (segundos):"}),R.jsx(wr,{id:"restTime",name:"restTime",type:"number",min:"1",placeholder:"Ej. 60",value:E===0?"":E,onChange:le=>b(Number(le.target.value)||0),required:!0}),R.jsx(Ds,{htmlFor:"rir",children:"RIR (Repeticiones en Reserva) de la rutina (0-10):"}),R.jsx(wr,{id:"rir",name:"rir",type:"number",min:"0",max:"10",placeholder:"Ej. 2",value:P===0?"":P,onChange:le=>M(Number(le.target.value)||0),required:!0}),R.jsx("h3",{children:"Seleccionar Ejercicios:"}),R.jsx(wr,{type:"text",placeholder:"Buscar ejercicio...",value:S,onChange:le=>x(le.target.value),style:{marginBottom:"15px"}}),B&&R.jsx(tr,{style:{fontSize:"0.9rem",margin:"5px 0"},children:"Cargando ejercicios..."}),J&&R.jsx(tr,{style:{fontSize:"0.9rem",margin:"5px 0",color:"#e74c3c"},children:J}),R.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"1px solid #eee",borderRadius:"8px",padding:"10px",backgroundColor:"#fdfdfd"},children:Object.keys(Ve).length>0?Object.keys(Ve).map(le=>R.jsx(Cd,{title:le,defaultOpen:!1,children:Ve[le].map(_e=>{const Fe=ee.some(Je=>Je.id===_e.id),Ee=ee.find(Je=>Je.id===_e.id);return R.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px",padding:"5px 0",borderBottom:"1px dashed #f0f0f0"},children:[R.jsxs("div",{style:{display:"flex",alignItems:"center",flexGrow:1},children:[R.jsx("input",{type:"checkbox",id:`exercise-${_e.id}`,checked:Fe,onChange:()=>se(_e),style:{marginRight:"10px"}}),R.jsx(Ds,{htmlFor:`exercise-${_e.id}`,style:{margin:0,fontWeight:"normal",cursor:"pointer"},children:_e.name})]}),Fe&&R.jsxs("div",{style:{display:"flex",gap:"8px",marginLeft:"10px"},children:[R.jsx(wr,{type:"number",min:"1",placeholder:"Series",value:(Ee==null?void 0:Ee.sets)===0?"":Ee==null?void 0:Ee.sets,onChange:Je=>ae(_e.id,Je.target.value),style:{width:"50px",textAlign:"center"}}),_e.type==="timed"?R.jsx(wr,{type:"number",min:"1",placeholder:"Tiempo (seg)",value:(Ee==null?void 0:Ee.time)===0?"":Ee==null?void 0:Ee.time,onChange:Je=>F(_e.id,Je.target.value),style:{width:"80px",textAlign:"center"}}):R.jsx(wr,{type:"number",min:"1",placeholder:"Reps",value:(Ee==null?void 0:Ee.reps)===0?"":Ee==null?void 0:Ee.reps,onChange:Je=>pe(_e.id,Je.target.value),style:{width:"50px",textAlign:"center"}})]})]},_e.id)})},le)):!B&&!J&&R.jsx(tr,{style:{fontSize:"0.9rem",margin:"auto",color:"#777"},children:S?"No se encontraron ejercicios con esa búsqueda.":'No se encontraron ejercicios en el archivo local. Revisa "src/data/exercises.json".'})}),ee.length>0&&R.jsxs("div",{style:{marginTop:"15px",padding:"10px",borderTop:"1px solid #eee"},children:[R.jsx("h4",{children:"Ejercicios Seleccionados:"}),R.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:ee.map(le=>R.jsxs("li",{style:{fontSize:"0.9rem",color:"#555",marginBottom:"5px"},children:["- ",le.name,le.type==="timed"?` (${le.sets||0} Series, ${le.time||0} Segundos)`:` (${le.sets||0} Series, ${le.reps||0} Reps)`]},le.id))})]}),R.jsxs(BT,{children:[R.jsx(Go,{type:"submit",$primary:!0,children:"Guardar Rutina"}),R.jsx(Go,{type:"button",$secondary:!0,onClick:ye,children:"Cancelar"})]})]})})]})}const bD=ce.div`
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
`,ND=ce.div`
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
`,DD=ce.img`
  margin: 0 auto; /* Centra el logo horizontalmente */
  width: 150px; /* Ancho deseado de 240px */
  max-width: 100%; /* Asegura que el logo se achique en pantallas pequeñas si es necesario */
  height: auto;
  display: block; /* Asegura que el margin auto funcione */
`,OD=ce.h1`
  font-size: 2rem; /* Tamaño de título para móviles */
  margin: 0; /* ¡CAMBIO CLAVE AQUÍ! Margin 0 para el h1 */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 2.5rem; /* Vuelve al tamaño original */
    margin: 0; /* Aseguramos margin 0 también en desktop */
  }
`,VD=ce.p`
  font-size: 1rem; /* Tamaño de subtítulo para móviles */
  color: #7f8c8d;
  margin: 10px; /* ¡CAMBIO CLAVE AQUÍ! Margin 10px para el p */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 1.1rem; /* Vuelve al tamaño original */
    margin: 10px; /* Aseguramos margin 10px también en desktop */
  }
`,LD=ce.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacio entre campos ajustado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    gap: 18px; /* Vuelve al gap original */
  }
`,Nc=ce.label`
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
`,Dc=ce.input`
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
`,MD=ce.button`
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
`,FD=ce.p`
  color: #e74c3c; /* ¡Rojo para mensajes de error, ya estaba así y es consistente! */
  font-size: 0.85rem; /* Tamaño de error para móviles */
  margin-top: -8px; /* Margen ajustado */
  text-align: left;

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 0.9rem; /* Vuelve al tamaño original */
    margin-top: -10px;
  }
`,jD=ce.p` /* ¡Exportado! */
  color: #28a745; /* Verde para mensajes de éxito */
  font-size: 0.85rem;
  margin-top: -8px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin-top: -10px;
  }
`,UD=ce.p`
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
`;function zD(){const n=Xi(),[e,t]=mt.useState(""),[i,o]=mt.useState(""),[a,c]=mt.useState(""),[h,p]=mt.useState(""),[y,_]=mt.useState(""),[T,E]=mt.useState(""),[b,P]=mt.useState(!1),M=async O=>{if(O.preventDefault(),_(""),E(""),a!==h){_("Las contraseñas no coinciden.");return}if(a.length<6){_("La contraseña debe tener al menos 6 caracteres.");return}P(!0);try{const B=(await Ck(Ed,i,a)).user;await SP(Us(rr,"users",B.uid),{uid:B.uid,name:e,email:i,role:"student",createdAt:new Date}),E("¡Registro exitoso! Redirigiendo a la página principal..."),setTimeout(()=>{n("/home")},1500)}catch($){let B="Error al registrarse. Por favor, intentá de nuevo.";switch($.code){case"auth/email-already-in-use":B="Este email ya está registrado. ¿Ya tenés una cuenta?";break;case"auth/weak-password":B="La contraseña es demasiado débil. Elegí una más segura.";break;case"auth/invalid-email":B="El formato del email no es válido.";break;default:console.error("Firebase registration error:",$);break}_(B)}finally{P(!1)}};return R.jsx(bD,{children:R.jsxs(ND,{children:[R.jsx(DD,{src:Zm,alt:"Logo Prof Angel San Roman",onError:O=>{O.target.onerror=null,O.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error"}}),R.jsxs("div",{children:[R.jsx(OD,{children:"Registrate"}),R.jsx(VD,{children:"Creá tu cuenta de alumno para empezar."})]}),R.jsxs(LD,{onSubmit:M,children:[R.jsx(Nc,{htmlFor:"name",children:"Nombre Completo"}),R.jsx(Dc,{id:"name",type:"text",placeholder:"Ej. Sofía Giménez",value:e,onChange:O=>t(O.target.value),required:!0}),R.jsx(Nc,{htmlFor:"email",children:"Email"}),R.jsx(Dc,{id:"email",type:"email",placeholder:"ejemplo@mail.com",value:i,onChange:O=>o(O.target.value),required:!0}),R.jsx(Nc,{htmlFor:"password",children:"Contraseña"}),R.jsx(Dc,{id:"password",type:"password",placeholder:"••••••••",value:a,onChange:O=>c(O.target.value),required:!0}),R.jsx(Nc,{htmlFor:"confirmPassword",children:"Confirmar Contraseña"}),R.jsx(Dc,{id:"confirmPassword",type:"password",placeholder:"••••••••",value:h,onChange:O=>p(O.target.value),required:!0}),y&&R.jsx(FD,{children:y}),T&&R.jsx(jD,{children:T}),R.jsx(MD,{type:"submit",disabled:b,children:b?"Registrando...":"Registrarme"})]}),R.jsxs(UD,{children:["¿Ya tenés una cuenta? ",R.jsx(kd,{to:"/login",children:"Iniciá sesión aquí"})]})]})})}function BD(){const n=Xi(),[e,t]=mt.useState(""),[i,o]=mt.useState(""),[a,c]=mt.useState(""),[h,p]=mt.useState(!1),y=async _=>{if(_.preventDefault(),c(""),!e||!i){c("Por favor, ingresa tu email y contraseña.");return}p(!0);try{const E=(await Rk(Ed,e,i)).user,b=Us(rr,"users",E.uid),P=await Xd(b);let M="student";P.exists()&&(M=P.data().role||"student"),n(M==="coach"?"/coach":"/home")}catch(T){let E="Error al iniciar sesión. Verificá tus credenciales.";switch(T.code){case"auth/invalid-email":E="El formato del email no es válido.";break;case"auth/user-disabled":E="Tu cuenta ha sido deshabilitada.";break;case"auth/user-not-found":case"auth/wrong-password":E="Email o contraseña incorrectos.";break;case"auth/too-many-requests":E="Demasiados intentos fallidos. Intentá más tarde.";break;default:console.error("Firebase login error:",T);break}c(E)}finally{p(!1)}};return R.jsx(ED,{children:R.jsxs(TD,{children:[R.jsx(ID,{src:Zm,alt:"Logo Prof Angel San Roman",onError:_=>{_.target.onerror=null,_.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error"}}),R.jsxs("div",{children:[R.jsx(SD,{children:"Iniciar Sesión"}),R.jsx(xD,{children:"Ingresá con tu email y contraseña."})]}),R.jsxs(CD,{onSubmit:y,children:[R.jsx(E0,{htmlFor:"email",children:"Email"}),R.jsx(T0,{id:"email",type:"email",placeholder:"ejemplo@mail.com",value:e,onChange:_=>t(_.target.value),required:!0}),R.jsx(E0,{htmlFor:"password",children:"Contraseña"}),R.jsx(T0,{id:"password",type:"password",placeholder:"••••••••",value:i,onChange:_=>o(_.target.value),required:!0}),a&&R.jsx(tg,{children:a}),R.jsx(RD,{type:"submit",disabled:h,children:h?"Iniciando sesión...":"Iniciar Sesión"})]}),R.jsxs(AD,{children:["¿No tenés cuenta? ",R.jsx(kd,{to:"/register",children:"Registrate aquí"})]})]})})}const $D=ce.button`
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
`;function qD(){const{logout:n,loading:e}=ns();return R.jsx($D,{onClick:n,disabled:e,children:"Cerrar Sesión"})}const ap=ce.div`
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
`;ce.header`
  width: 100%;
  max-width: 900px; /* Ancho máximo para el header */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-top: 0; /* Se pega al navbar */
  box-sizing: border-box;
`;const lp=ce.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #1a1a1a; /* Color de texto general */
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,HD=ce.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left; /* Alinea el texto a la izquierda dentro de la Card */

  @media (min-width: 768px) {
    padding: 15px;
  }
`,Oc=ce.p`
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
`,WD=ce.div`
  margin-top: 25px; /* Espacio superior para el botón de cerrar sesión */
  width: 100%;
  display: flex;
  justify-content: center; /* Centra el botón */
`;function GD(){const{user:n,userName:e,loading:t,role:i}=ns(),{states:o}=qT(n,t),{loading:a,searchedStudents:c}=o,h=i==="coach"?c.length:0,p=t||i==="coach"&&a;if(p)return R.jsxs(ap,{children:[R.jsx(Tr,{loading:!0,type:i||"student",isCoachDashboard:!1}),R.jsx(ei,{style:{maxWidth:"600px",marginTop:"20px",padding:"20px"},children:R.jsx(lp,{style:{color:"#1a1a1a"},children:"Cargando Perfil..."})})]});if(!n)return R.jsxs(ap,{children:[R.jsx(Tr,{loading:!1,type:i||"student",isCoachDashboard:!1}),R.jsxs(ei,{style:{maxWidth:"600px",marginTop:"20px",padding:"20px"},children:[R.jsx(lp,{style:{color:"#1a1a1a"},children:"Acceso Denegado"}),R.jsx("p",{style:{textAlign:"center",color:"#555",marginTop:"10px"},children:"Necesitas iniciar sesión para ver esta página."})]})]});const y=e||(n&&n.email?n.email.split("@")[0]:"Usuario"),_=n?n.email:"No disponible",T=n.metadata.creationTime?new Date(n.metadata.creationTime).toLocaleDateString("es-AR",{year:"2-digit",month:"2-digit",day:"2-digit"}):"No disponible";return R.jsxs(ap,{children:[R.jsx(Tr,{loading:p,type:i,isCoachDashboard:!1}),R.jsxs(ei,{style:{maxWidth:"600px",marginTop:"20px",padding:"20px"},children:[R.jsx(lp,{style:{marginBottom:"20px"},children:"Mi Perfil"}),R.jsxs(HD,{children:[R.jsxs(Oc,{children:[R.jsx("strong",{children:"Nombre:"})," ",y]}),R.jsxs(Oc,{children:[R.jsx("strong",{children:"Email:"})," ",_]}),R.jsxs(Oc,{children:[R.jsx("strong",{children:"Activo desde:"})," ",T]}),i==="coach"&&R.jsxs(Oc,{children:[R.jsx("strong",{children:"Total de Alumnos:"})," ",h]})]}),R.jsx(WD,{children:R.jsx(qD,{})})]})]})}const GT=({children:n})=>{const[e,t]=H.useState(null),[i,o]=H.useState(null),[a,c]=H.useState(!0),[h,p]=H.useState(null),[y,_]=H.useState(null);H.useEffect(()=>{const b=kk(Ed,async P=>{if(c(!0),p(null),_(null),P)try{const M=Us(rr,"users",P.uid),O=await Xd(M);if(O.exists()){const $=O.data();t(P),o($.role||"student"),$.name?_($.name):_(P.email?P.email.split("@")[0]:"Usuario")}else console.warn("Documento de usuario no encontrado en Firestore para UID:",P.uid),t(P),o("unknown"),_(P.email?P.email.split("@")[0]:"Usuario")}catch(M){console.error("Error al obtener el rol o nombre del usuario desde Firestore:",M),p("Error al cargar la información del usuario."),t(P),o(null),_(null)}else t(null),o(null),_(null);c(!1)});return()=>b()},[]);const E={user:e,role:i,loading:a,error:h,logout:async()=>{p(null);try{await bk(Ed)}catch(b){console.error("Error al cerrar sesión:",b),p("Error al cerrar sesión.")}},userName:y};return R.jsxs(mT.Provider,{value:E,children:[!a&&n,a&&R.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.5rem"},children:"Cargando sesión..."})]})};GT.propTypes={children:ve.node.isRequired};function xl({children:n,allowedRoles:e=[]}){const{user:t,role:i,loading:o,error:a}=ns(),c=Xi();return H.useEffect(()=>{if(!o){if(a||!t){console.log("No user or auth error, redirecting to login."),c("/login");return}e&&!e.includes(i)&&(console.warn(`User with role '${i}' is not allowed to access this route. Redirecting.`),c(i==="coach"?"/coach":"/"))}},[t,i,o,a,e,c]),o||a||!t||e&&!e.includes(i)?null:n}xl.propTypes={children:ve.node.isRequired,allowedRoles:ve.arrayOf(ve.string)};function KD(){const{user:n,loading:e,role:t}=ns(),i=Xi();return mt.useEffect(()=>{e||i(n?t==="coach"?"/coach":"/home":"/login")},[n,e,t,i]),e?R.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.5rem"},children:"Cargando aplicación..."}):null}function QD(){return R.jsx(GT,{children:R.jsx(ES,{children:R.jsxs(XI,{children:[R.jsx(Gr,{path:"/",element:R.jsx(KD,{})}),R.jsx(Gr,{path:"/register",element:R.jsx(zD,{})}),R.jsx(Gr,{path:"/login",element:R.jsx(BD,{})}),R.jsx(Gr,{path:"/home",element:R.jsx(xl,{allowedRoles:["student","coach"],children:R.jsx(pD,{})})}),R.jsx(Gr,{path:"/coach",element:R.jsx(xl,{allowedRoles:["coach"],children:R.jsx(PD,{})})}),R.jsx(Gr,{path:"/coach/students/:studentId/routines",element:R.jsx(xl,{allowedRoles:["coach"],children:R.jsx(kD,{})})}),R.jsx(Gr,{path:"/profile",element:R.jsx(xl,{allowedRoles:["student","coach"],children:R.jsx(GD,{})})}),R.jsx(Gr,{path:"*",element:R.jsx("div",{children:"404 - Página no encontrada o no tenés permisos."})})]})})})}sI.createRoot(document.getElementById("root")).render(R.jsx(mt.StrictMode,{children:R.jsx(QD,{})}));
