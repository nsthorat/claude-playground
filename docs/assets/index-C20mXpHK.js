(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Od={exports:{}},$o={};var _v;function aM(){if(_v)return $o;_v=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return $o.Fragment=e,$o.jsx=i,$o.jsxs=i,$o}var xv;function rM(){return xv||(xv=1,Od.exports=aM()),Od.exports}var Q=rM(),Pd={exports:{}},lt={};var yv;function sM(){if(yv)return lt;yv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function _(I,ee,fe){this.props=I,this.context=ee,this.refs=S,this.updater=fe||E}_.prototype.isReactComponent={},_.prototype.setState=function(I,ee){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ee,"setState")},_.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function D(){}D.prototype=_.prototype;function U(I,ee,fe){this.props=I,this.context=ee,this.refs=S,this.updater=fe||E}var N=U.prototype=new D;N.constructor=U,A(N,_.prototype),N.isPureReactComponent=!0;var L=Array.isArray;function z(){}var O={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function T(I,ee,fe){var Ee=fe.ref;return{$$typeof:r,type:I,key:ee,ref:Ee!==void 0?Ee:null,props:fe}}function w(I,ee){return T(I.type,ee,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function q(I){var ee={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(fe){return ee[fe]})}var J=/\/+/g;function te(I,ee){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):ee.toString(36)}function re(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(z,z):(I.status="pending",I.then(function(ee){I.status==="pending"&&(I.status="fulfilled",I.value=ee)},function(ee){I.status==="pending"&&(I.status="rejected",I.reason=ee)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function P(I,ee,fe,Ee,Ne){var se=typeof I;(se==="undefined"||se==="boolean")&&(I=null);var ue=!1;if(I===null)ue=!0;else switch(se){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(I.$$typeof){case r:case e:ue=!0;break;case v:return ue=I._init,P(ue(I._payload),ee,fe,Ee,Ne)}}if(ue)return Ne=Ne(I),ue=Ee===""?"."+te(I,0):Ee,L(Ne)?(fe="",ue!=null&&(fe=ue.replace(J,"$&/")+"/"),P(Ne,ee,fe,"",function(He){return He})):Ne!=null&&(H(Ne)&&(Ne=w(Ne,fe+(Ne.key==null||I&&I.key===Ne.key?"":(""+Ne.key).replace(J,"$&/")+"/")+ue)),ee.push(Ne)),1;ue=0;var De=Ee===""?".":Ee+":";if(L(I))for(var ke=0;ke<I.length;ke++)Ee=I[ke],se=De+te(Ee,ke),ue+=P(Ee,ee,fe,se,Ne);else if(ke=M(I),typeof ke=="function")for(I=ke.call(I),ke=0;!(Ee=I.next()).done;)Ee=Ee.value,se=De+te(Ee,ke++),ue+=P(Ee,ee,fe,se,Ne);else if(se==="object"){if(typeof I.then=="function")return P(re(I),ee,fe,Ee,Ne);throw ee=String(I),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ue}function G(I,ee,fe){if(I==null)return I;var Ee=[],Ne=0;return P(I,Ee,"","",function(se){return ee.call(fe,se,Ne++)}),Ee}function X(I){if(I._status===-1){var ee=I._result;ee=ee(),ee.then(function(fe){(I._status===0||I._status===-1)&&(I._status=1,I._result=fe)},function(fe){(I._status===0||I._status===-1)&&(I._status=2,I._result=fe)}),I._status===-1&&(I._status=0,I._result=ee)}if(I._status===1)return I._result.default;throw I._result}var Se=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},xe={map:G,forEach:function(I,ee,fe){G(I,function(){ee.apply(this,arguments)},fe)},count:function(I){var ee=0;return G(I,function(){ee++}),ee},toArray:function(I){return G(I,function(ee){return ee})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return lt.Activity=g,lt.Children=xe,lt.Component=_,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=U,lt.StrictMode=s,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,lt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},lt.cache=function(I){return function(){return I.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(I,ee,fe){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ee=A({},I.props),Ne=I.key;if(ee!=null)for(se in ee.key!==void 0&&(Ne=""+ee.key),ee)!B.call(ee,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&ee.ref===void 0||(Ee[se]=ee[se]);var se=arguments.length-2;if(se===1)Ee.children=fe;else if(1<se){for(var ue=Array(se),De=0;De<se;De++)ue[De]=arguments[De+2];Ee.children=ue}return T(I.type,Ne,Ee)},lt.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},lt.createElement=function(I,ee,fe){var Ee,Ne={},se=null;if(ee!=null)for(Ee in ee.key!==void 0&&(se=""+ee.key),ee)B.call(ee,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Ne[Ee]=ee[Ee]);var ue=arguments.length-2;if(ue===1)Ne.children=fe;else if(1<ue){for(var De=Array(ue),ke=0;ke<ue;ke++)De[ke]=arguments[ke+2];Ne.children=De}if(I&&I.defaultProps)for(Ee in ue=I.defaultProps,ue)Ne[Ee]===void 0&&(Ne[Ee]=ue[Ee]);return T(I,se,Ne)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(I){return{$$typeof:h,render:I}},lt.isValidElement=H,lt.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:X}},lt.memo=function(I,ee){return{$$typeof:p,type:I,compare:ee===void 0?null:ee}},lt.startTransition=function(I){var ee=O.T,fe={};O.T=fe;try{var Ee=I(),Ne=O.S;Ne!==null&&Ne(fe,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(z,Se)}catch(se){Se(se)}finally{ee!==null&&fe.types!==null&&(ee.types=fe.types),O.T=ee}},lt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},lt.use=function(I){return O.H.use(I)},lt.useActionState=function(I,ee,fe){return O.H.useActionState(I,ee,fe)},lt.useCallback=function(I,ee){return O.H.useCallback(I,ee)},lt.useContext=function(I){return O.H.useContext(I)},lt.useDebugValue=function(){},lt.useDeferredValue=function(I,ee){return O.H.useDeferredValue(I,ee)},lt.useEffect=function(I,ee){return O.H.useEffect(I,ee)},lt.useEffectEvent=function(I){return O.H.useEffectEvent(I)},lt.useId=function(){return O.H.useId()},lt.useImperativeHandle=function(I,ee,fe){return O.H.useImperativeHandle(I,ee,fe)},lt.useInsertionEffect=function(I,ee){return O.H.useInsertionEffect(I,ee)},lt.useLayoutEffect=function(I,ee){return O.H.useLayoutEffect(I,ee)},lt.useMemo=function(I,ee){return O.H.useMemo(I,ee)},lt.useOptimistic=function(I,ee){return O.H.useOptimistic(I,ee)},lt.useReducer=function(I,ee,fe){return O.H.useReducer(I,ee,fe)},lt.useRef=function(I){return O.H.useRef(I)},lt.useState=function(I){return O.H.useState(I)},lt.useSyncExternalStore=function(I,ee,fe){return O.H.useSyncExternalStore(I,ee,fe)},lt.useTransition=function(){return O.H.useTransition()},lt.version="19.2.3",lt}var Sv;function Sp(){return Sv||(Sv=1,Pd.exports=sM()),Pd.exports}var ie=Sp(),zd={exports:{}},el={},Id={exports:{}},Fd={};var Mv;function oM(){return Mv||(Mv=1,(function(r){function e(P,G){var X=P.length;P.push(G);e:for(;0<X;){var Se=X-1>>>1,xe=P[Se];if(0<l(xe,G))P[Se]=G,P[X]=xe,X=Se;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var G=P[0],X=P.pop();if(X!==G){P[0]=X;e:for(var Se=0,xe=P.length,I=xe>>>1;Se<I;){var ee=2*(Se+1)-1,fe=P[ee],Ee=ee+1,Ne=P[Ee];if(0>l(fe,X))Ee<xe&&0>l(Ne,fe)?(P[Se]=Ne,P[Ee]=X,Se=Ee):(P[Se]=fe,P[ee]=X,Se=ee);else if(Ee<xe&&0>l(Ne,X))P[Se]=Ne,P[Ee]=X,Se=Ee;else break e}}return G}function l(P,G){var X=P.sortIndex-G.sortIndex;return X!==0?X:P.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,g=null,x=3,M=!1,E=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(P){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=P)s(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function L(P){if(A=!1,N(P),!E)if(i(m)!==null)E=!0,z||(z=!0,q());else{var G=i(p);G!==null&&re(L,G.startTime-P)}}var z=!1,O=-1,B=5,T=-1;function w(){return S?!0:!(r.unstable_now()-T<B)}function H(){if(S=!1,z){var P=r.unstable_now();T=P;var G=!0;try{e:{E=!1,A&&(A=!1,D(O),O=-1),M=!0;var X=x;try{t:{for(N(P),g=i(m);g!==null&&!(g.expirationTime>P&&w());){var Se=g.callback;if(typeof Se=="function"){g.callback=null,x=g.priorityLevel;var xe=Se(g.expirationTime<=P);if(P=r.unstable_now(),typeof xe=="function"){g.callback=xe,N(P),G=!0;break t}g===i(m)&&s(m),N(P)}else s(m);g=i(m)}if(g!==null)G=!0;else{var I=i(p);I!==null&&re(L,I.startTime-P),G=!1}}break e}finally{g=null,x=X,M=!1}G=void 0}}finally{G?q():z=!1}}}var q;if(typeof U=="function")q=function(){U(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,te=J.port2;J.port1.onmessage=H,q=function(){te.postMessage(null)}}else q=function(){_(H,0)};function re(P,G){O=_(function(){P(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var X=x;x=G;try{return P()}finally{x=X}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var X=x;x=P;try{return G()}finally{x=X}},r.unstable_scheduleCallback=function(P,G,X){var Se=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Se+X:Se):X=Se,P){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=X+xe,P={id:v++,callback:G,priorityLevel:P,startTime:X,expirationTime:xe,sortIndex:-1},X>Se?(P.sortIndex=X,e(p,P),i(m)===null&&P===i(p)&&(A?(D(O),O=-1):A=!0,re(L,X-Se))):(P.sortIndex=xe,e(m,P),E||M||(E=!0,z||(z=!0,q()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var G=x;return function(){var X=x;x=G;try{return P.apply(this,arguments)}finally{x=X}}}})(Fd)),Fd}var bv;function lM(){return bv||(bv=1,Id.exports=oM()),Id.exports}var Bd={exports:{}},zn={};var Ev;function cM(){if(Ev)return zn;Ev=1;var r=Sp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},zn.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},zn.useFormStatus=function(){return f.H.useHostTransitionStatus()},zn.version="19.2.3",zn}var Tv;function uM(){if(Tv)return Bd.exports;Tv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Bd.exports=cM(),Bd.exports}var Av;function fM(){if(Av)return el;Av=1;var r=lM(),e=Sp(),i=uM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=d;break}if(R===o){y=!0,o=u,a=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===a){y=!0,a=d,o=u;break}if(R===o){y=!0,o=d,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var J=Symbol.for("react.client.reference");function te(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===J?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case L:return"Suspense";case z:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:te(t.type)||"Memo";case B:n=t._payload,t=t._init;try{return te(t(n))}catch{}}return null}var re=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},Se=[],xe=-1;function I(t){return{current:t}}function ee(t){0>xe||(t.current=Se[xe],Se[xe]=null,xe--)}function fe(t,n){xe++,Se[xe]=t.current,t.current=n}var Ee=I(null),Ne=I(null),se=I(null),ue=I(null);function De(t,n){switch(fe(se,n),fe(Ne,t),fe(Ee,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?G0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=G0(n),t=V0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Ee),fe(Ee,t)}function ke(){ee(Ee),ee(Ne),ee(se)}function He(t){t.memoizedState!==null&&fe(ue,t);var n=Ee.current,a=V0(n,t.type);n!==a&&(fe(Ne,t),fe(Ee,a))}function dt(t){Ne.current===t&&(ee(Ee),ee(Ne)),ue.current===t&&(ee(ue),Zo._currentValue=X)}var jt,St;function _t(t){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",St=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+t+St}var Nt=!1;function ut(t,n){if(!t||Nt)return"";Nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(he){var le=he}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(he){le=he}t.call(_e.prototype)}}else{try{throw Error()}catch(he){le=he}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(he){if(he&&le&&typeof he.stack=="string")return[he.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var V=y.split(`
`),ae=R.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ae.length)for(o=V.length-1,u=ae.length-1;1<=o&&0<=u&&V[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ae[u]){var me=`
`+V[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{Nt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function an(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return _t("Activity");default:return""}}function k(t){try{var n="",a=null;do n+=an(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $t=Object.prototype.hasOwnProperty,At=r.unstable_scheduleCallback,It=r.unstable_cancelCallback,Qe=r.unstable_shouldYield,F=r.unstable_requestPaint,b=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,ge=r.unstable_ImmediatePriority,Me=r.unstable_UserBlockingPriority,pe=r.unstable_NormalPriority,$e=r.unstable_LowPriority,Ue=r.unstable_IdlePriority,je=r.log,rt=r.unstable_setDisableYieldValue,Ae=null,Re=null;function Ge(t){if(typeof je=="function"&&rt(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ae,t)}catch{}}var Fe=Math.clz32?Math.clz32:Y,Le=Math.log,ht=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(Le(t)/ht|0)|0}var Pe=256,Ce=262144,Be=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Te(o):(y&=R,y!==0?u=Te(y):a||(a=R&~t,a!==0&&(u=Te(a))))):(R=o&~d,R!==0?u=Te(R):y!==0?u=Te(y):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function st(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var t=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Pn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ri(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,V=t.expirationTimes,ae=t.hiddenUpdates;for(a=y&~a;0<a;){var me=31-Fe(a),_e=1<<me;R[me]=0,V[me]=-1;var le=ae[me];if(le!==null)for(ae[me]=null,me=0;me<le.length;me++){var he=le[me];he!==null&&(he.lane&=-536870913)}a&=~_e}o!==0&&Rl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function Rl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function so(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Qr(t,n){var a=n&-n;return a=(a&42)!==0?1:oo(a),(a&(t.suspendedLanes|n))!==0?0:a}function oo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Jr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function lo(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:fv(t.type))}function Bi(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var fi=Math.random().toString(36).slice(2),fn="__reactFiber$"+fi,En="__reactProps$"+fi,Ci="__reactContainer$"+fi,$r="__reactEvents$"+fi,es="__reactListeners$"+fi,Cl="__reactHandles$"+fi,co="__reactResources$"+fi,gr="__reactMarker$"+fi;function uo(t){delete t[fn],delete t[En],delete t[$r],delete t[es],delete t[Cl]}function Oa(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ci]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Z0(t);t!==null;){if(a=t[fn])return a;t=Z0(t)}return n}t=a,a=t.parentNode}return null}function Pa(t){if(t=t[fn]||t[Ci]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function vr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function za(t){var n=t[co];return n||(n=t[co]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(t){t[gr]=!0}var Z=new Set,de={};function oe(t,n){$(t,n),$(t+"Capture",n)}function $(t,n){for(de[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ve={},ze={};function Xe(t){return $t.call(ze,t)?!0:$t.call(Ve,t)?!1:Oe.test(t)?ze[t]=!0:(Ve[t]=!0,!1)}function Ze(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function nt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function en(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Kt(t){if(!t._valueTracker){var n=Ot(t)?"checked":"value";t._valueTracker=en(t,n,""+t[n])}}function Ft(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ot(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pt=/[\n"\\]/g;function ot(t){return t.replace(Pt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(t,n,a,o,u,d,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+it(n)):t.value!==""+it(n)&&(t.value=""+it(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?An(t,y,it(n)):a!=null?An(t,y,it(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+it(R):t.removeAttribute("name")}function $i(t,n,a,o,u,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Kt(t);return}a=a!=null?""+it(a):"",n=n!=null?""+it(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Kt(t)}function An(t,n,a){n==="number"&&et(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function di(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+it(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ht(t,n,a){if(n!=null&&(n=""+it(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+it(a):""}function Rn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(re(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=it(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Kt(t)}function vn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Cn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ts(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&wn(t,d,n[d])}function wi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ey=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ty=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(t){return ty.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var Du=null;function Uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ns=null,is=null;function Hp(t){var n=Pa(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Tn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(s(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ft(o)}break e;case"textarea":Ht(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&di(t,!!a.multiple,n,!1)}}}var Lu=!1;function Gp(t,n,a){if(Lu)return t(n,a);Lu=!0;try{var o=t(n);return o}finally{if(Lu=!1,(ns!==null||is!==null)&&(gc(),ns&&(n=ns,t=is,is=ns=null,Hp(n),t)))for(n=0;n<t.length;n++)Hp(t[n])}}function fo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(ta)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Nu=!1}var Ia=null,Ou=null,Dl=null;function Vp(){if(Dl)return Dl;var t,n=Ou,a=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return Dl=u.slice(t,1<o?1-o:void 0)}function Ul(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function kp(){return!1}function Xn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ll:kp,this.isPropagationStopped=kp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),n}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Xn(_r),po=g({},_r,{view:0,detail:0}),ny=Xn(po),Pu,zu,mo,Ol=g({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(Pu=t.screenX-mo.screenX,zu=t.screenY-mo.screenY):zu=Pu=0,mo=t),Pu)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Xp=Xn(Ol),iy=g({},Ol,{dataTransfer:0}),ay=Xn(iy),ry=g({},po,{relatedTarget:0}),Iu=Xn(ry),sy=g({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),oy=Xn(sy),ly=g({},_r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cy=Xn(ly),uy=g({},_r,{data:0}),Wp=Xn(uy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function py(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=hy[t])?!!n[t]:!1}function Fu(){return py}var my=g({},po,{key:function(t){if(t.key){var n=fy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gy=Xn(my),vy=g({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=Xn(vy),_y=g({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),xy=Xn(_y),yy=g({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=Xn(yy),My=g({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),by=Xn(My),Ey=g({},_r,{newState:0,oldState:0}),Ty=Xn(Ey),Ay=[9,13,27,32],Bu=ta&&"CompositionEvent"in window,go=null;ta&&"documentMode"in document&&(go=document.documentMode);var Ry=ta&&"TextEvent"in window&&!go,Yp=ta&&(!Bu||go&&8<go&&11>=go),jp=" ",Zp=!1;function Kp(t,n){switch(t){case"keyup":return Ay.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function Cy(t,n){switch(t){case"compositionend":return Qp(n);case"keypress":return n.which!==32?null:(Zp=!0,jp);case"textInput":return t=n.data,t===jp&&Zp?null:t;default:return null}}function wy(t,n){if(as)return t==="compositionend"||!Bu&&Kp(t,n)?(t=Vp(),Dl=Ou=Ia=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yp&&n.locale!=="ko"?null:n.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Dy[t.type]:n==="textarea"}function $p(t,n,a,o){ns?is?is.push(o):is=[o]:ns=o,n=bc(n,"onChange"),0<n.length&&(a=new Nl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var vo=null,_o=null;function Uy(t){P0(t,0)}function Pl(t){var n=vr(t);if(Ft(n))return t}function em(t,n){if(t==="change")return n}var tm=!1;if(ta){var Hu;if(ta){var Gu="oninput"in document;if(!Gu){var nm=document.createElement("div");nm.setAttribute("oninput","return;"),Gu=typeof nm.oninput=="function"}Hu=Gu}else Hu=!1;tm=Hu&&(!document.documentMode||9<document.documentMode)}function im(){vo&&(vo.detachEvent("onpropertychange",am),_o=vo=null)}function am(t){if(t.propertyName==="value"&&Pl(_o)){var n=[];$p(n,_o,t,Uu(t)),Gp(Uy,n)}}function Ly(t,n,a){t==="focusin"?(im(),vo=n,_o=a,vo.attachEvent("onpropertychange",am)):t==="focusout"&&im()}function Ny(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(_o)}function Oy(t,n){if(t==="click")return Pl(n)}function Py(t,n){if(t==="input"||t==="change")return Pl(n)}function zy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:zy;function xo(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!$t.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sm(t,n){var a=rm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rm(a)}}function om(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?om(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function lm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=et(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=et(t.document)}return n}function Vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Iy=ta&&"documentMode"in document&&11>=document.documentMode,rs=null,ku=null,yo=null,Xu=!1;function cm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xu||rs==null||rs!==et(o)||(o=rs,"selectionStart"in o&&Vu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yo&&xo(yo,o)||(yo=o,o=bc(ku,"onSelect"),0<o.length&&(n=new Nl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=rs)))}function xr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ss={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},Wu={},um={};ta&&(um=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function yr(t){if(Wu[t])return Wu[t];if(!ss[t])return t;var n=ss[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in um)return Wu[t]=n[a];return t}var fm=yr("animationend"),dm=yr("animationiteration"),hm=yr("animationstart"),Fy=yr("transitionrun"),By=yr("transitionstart"),Hy=yr("transitioncancel"),pm=yr("transitionend"),mm=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function Di(t,n){mm.set(t,n),oe(n,[t])}var zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],os=0,Yu=0;function Il(){for(var t=os,n=Yu=os=0;n<t;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var d=hi[n];if(hi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&gm(a,u,d)}}function Fl(t,n,a,o){hi[os++]=t,hi[os++]=n,hi[os++]=a,hi[os++]=o,Yu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function ju(t,n,a,o){return Fl(t,n,a,o),Bl(t)}function Sr(t,n){return Fl(t,null,null,n),Bl(t)}function gm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Bl(t){if(50<Vo)throw Vo=0,ad=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ls={};function Gy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,o){return new Gy(t,n,a,o)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function vm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Hl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Zu(t)&&(y=1);else if(typeof t=="string")y=qS(t,a,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case T:return t=ei(31,a,n,u),t.elementType=T,t.lanes=d,t;case A:return Mr(a.children,u,d,n);case S:y=8,u|=24;break;case _:return t=ei(12,a,n,u|2),t.elementType=_,t.lanes=d,t;case L:return t=ei(13,a,n,u),t.elementType=L,t.lanes=d,t;case z:return t=ei(19,a,n,u),t.elementType=z,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:y=10;break e;case D:y=9;break e;case N:y=11;break e;case O:y=14;break e;case B:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ei(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Mr(t,n,a,o){return t=ei(7,t,o,n),t.lanes=a,t}function Ku(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function _m(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function Qu(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var xm=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=xm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:k(n)},xm.set(t,n),n)}return{value:t,source:n,stack:k(n)}}var cs=[],us=0,Gl=null,So=0,mi=[],gi=0,Fa=null,Hi=1,Gi="";function ia(t,n){cs[us++]=So,cs[us++]=Gl,Gl=t,So=n}function ym(t,n,a){mi[gi++]=Hi,mi[gi++]=Gi,mi[gi++]=Fa,Fa=t;var o=Hi;t=Gi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var d=32-Fe(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Hi=1<<32-Fe(n)+u|a<<u|o,Gi=d+t}else Hi=1<<d|a<<u|o,Gi=t}function Ju(t){t.return!==null&&(ia(t,1),ym(t,1,0))}function $u(t){for(;t===Gl;)Gl=cs[--us],cs[us]=null,So=cs[--us],cs[us]=null;for(;t===Fa;)Fa=mi[--gi],mi[gi]=null,Gi=mi[--gi],mi[gi]=null,Hi=mi[--gi],mi[gi]=null}function Sm(t,n){mi[gi++]=Hi,mi[gi++]=Gi,mi[gi++]=Fa,Hi=n.id,Gi=n.overflow,Fa=t}var Dn=null,Qt=null,Et=!1,Ba=null,vi=!1,ef=Error(s(519));function Ha(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mo(pi(n,t)),ef}function Mm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[fn]=t,n[En]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<Xo.length;a++)yt(Xo[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),$i(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||B0(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Ha(t,!0)}function bm(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Dn=Dn.return}}function fs(t){if(t!==Dn)return!1;if(!Et)return bm(t),Et=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||xd(t.type,t.memoizedProps)),a=!a),a&&Qt&&Ha(t),bm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qt=j0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qt=j0(t)}else n===27?(n=Qt,er(t.type)?(t=Ed,Ed=null,Qt=t):Qt=n):Qt=Dn?xi(t.stateNode.nextSibling):null;return!0}function br(){Qt=Dn=null,Et=!1}function tf(){var t=Ba;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Ba=null),t}function Mo(t){Ba===null?Ba=[t]:Ba.push(t)}var nf=I(null),Er=null,aa=null;function Ga(t,n,a){fe(nf,n._currentValue),n._currentValue=a}function ra(t){t._currentValue=nf.current,ee(nf)}function af(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function rf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var V=0;V<n.length;V++)if(R.context===n[V]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),af(d.return,a,t),o||(y=null);break e}d=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),af(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function ds(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;$n(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===ue.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Zo):t=[Zo])}u=u.return}t!==null&&rf(n,t,a,o),n.flags|=262144}function Vl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Tr(t){Er=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return Em(Er,t)}function kl(t,n){return Er===null&&Tr(t),Em(t,n)}function Em(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(t===null)throw Error(s(308));aa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else aa=aa.next=n;return a}var Vy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ky=r.unstable_scheduleCallback,Xy=r.unstable_NormalPriority,dn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new Vy,data:new Map,refCount:0}}function bo(t){t.refCount--,t.refCount===0&&ky(Xy,function(){t.controller.abort()})}var Eo=null,of=0,hs=0,ps=null;function Wy(t,n){if(Eo===null){var a=Eo=[];of=0,hs=ud(),ps={status:"pending",value:void 0,then:function(o){a.push(o)}}}return of++,n.then(Tm,Tm),n}function Tm(){if(--of===0&&Eo!==null){ps!==null&&(ps.status="fulfilled");var t=Eo;Eo=null,hs=0,ps=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function qy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Am=P.S;P.S=function(t,n){c0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Wy(t,n),Am!==null&&Am(t,n)};var Ar=I(null);function lf(){var t=Ar.current;return t!==null?t:Zt.pooledCache}function Xl(t,n){n===null?fe(Ar,Ar.current):fe(Ar,n.pool)}function Rm(){var t=lf();return t===null?null:{parent:dn._currentValue,pool:t}}var ms=Error(s(460)),cf=Error(s(474)),Wl=Error(s(542)),ql={then:function(){}};function Cm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Um(t),t;default:if(typeof n.status=="string")n.then(ea,ea);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Um(t),t}throw Cr=n,ms}}function Rr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cr=a,ms):a}}var Cr=null;function Dm(){if(Cr===null)throw Error(s(459));var t=Cr;return Cr=null,t}function Um(t){if(t===ms||t===Wl)throw Error(s(483))}var gs=null,To=0;function Yl(t){var n=To;return To+=1,gs===null&&(gs=[]),wm(gs,t,n)}function Ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function jl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Lm(t){function n(K,W){if(t){var ne=K.deletions;ne===null?(K.deletions=[W],K.flags|=16):ne.push(W)}}function a(K,W){if(!t)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function o(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=na(K,W),K.index=0,K.sibling=null,K}function d(K,W,ne){return K.index=ne,t?(ne=K.alternate,ne!==null?(ne=ne.index,ne<W?(K.flags|=67108866,W):ne):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function y(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,W,ne,ve){return W===null||W.tag!==6?(W=Ku(ne,K.mode,ve),W.return=K,W):(W=u(W,ne),W.return=K,W)}function V(K,W,ne,ve){var tt=ne.type;return tt===A?me(K,W,ne.props.children,ve,ne.key):W!==null&&(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===B&&Rr(tt)===W.type)?(W=u(W,ne.props),Ao(W,ne),W.return=K,W):(W=Hl(ne.type,ne.key,ne.props,null,K.mode,ve),Ao(W,ne),W.return=K,W)}function ae(K,W,ne,ve){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Qu(ne,K.mode,ve),W.return=K,W):(W=u(W,ne.children||[]),W.return=K,W)}function me(K,W,ne,ve,tt){return W===null||W.tag!==7?(W=Mr(ne,K.mode,ve,tt),W.return=K,W):(W=u(W,ne),W.return=K,W)}function _e(K,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Ku(""+W,K.mode,ne),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return ne=Hl(W.type,W.key,W.props,null,K.mode,ne),Ao(ne,W),ne.return=K,ne;case E:return W=Qu(W,K.mode,ne),W.return=K,W;case B:return W=Rr(W),_e(K,W,ne)}if(re(W)||q(W))return W=Mr(W,K.mode,ne,null),W.return=K,W;if(typeof W.then=="function")return _e(K,Yl(W),ne);if(W.$$typeof===U)return _e(K,kl(K,W),ne);jl(K,W)}return null}function le(K,W,ne,ve){var tt=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return tt!==null?null:R(K,W,""+ne,ve);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:return ne.key===tt?V(K,W,ne,ve):null;case E:return ne.key===tt?ae(K,W,ne,ve):null;case B:return ne=Rr(ne),le(K,W,ne,ve)}if(re(ne)||q(ne))return tt!==null?null:me(K,W,ne,ve,null);if(typeof ne.then=="function")return le(K,W,Yl(ne),ve);if(ne.$$typeof===U)return le(K,W,kl(K,ne),ve);jl(K,ne)}return null}function he(K,W,ne,ve,tt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return K=K.get(ne)||null,R(W,K,""+ve,tt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return K=K.get(ve.key===null?ne:ve.key)||null,V(W,K,ve,tt);case E:return K=K.get(ve.key===null?ne:ve.key)||null,ae(W,K,ve,tt);case B:return ve=Rr(ve),he(K,W,ne,ve,tt)}if(re(ve)||q(ve))return K=K.get(ne)||null,me(W,K,ve,tt,null);if(typeof ve.then=="function")return he(K,W,ne,Yl(ve),tt);if(ve.$$typeof===U)return he(K,W,ne,kl(W,ve),tt);jl(W,ve)}return null}function We(K,W,ne,ve){for(var tt=null,Dt=null,Je=W,pt=W=0,bt=null;Je!==null&&pt<ne.length;pt++){Je.index>pt?(bt=Je,Je=null):bt=Je.sibling;var Ut=le(K,Je,ne[pt],ve);if(Ut===null){Je===null&&(Je=bt);break}t&&Je&&Ut.alternate===null&&n(K,Je),W=d(Ut,W,pt),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut,Je=bt}if(pt===ne.length)return a(K,Je),Et&&ia(K,pt),tt;if(Je===null){for(;pt<ne.length;pt++)Je=_e(K,ne[pt],ve),Je!==null&&(W=d(Je,W,pt),Dt===null?tt=Je:Dt.sibling=Je,Dt=Je);return Et&&ia(K,pt),tt}for(Je=o(Je);pt<ne.length;pt++)bt=he(Je,K,pt,ne[pt],ve),bt!==null&&(t&&bt.alternate!==null&&Je.delete(bt.key===null?pt:bt.key),W=d(bt,W,pt),Dt===null?tt=bt:Dt.sibling=bt,Dt=bt);return t&&Je.forEach(function(rr){return n(K,rr)}),Et&&ia(K,pt),tt}function at(K,W,ne,ve){if(ne==null)throw Error(s(151));for(var tt=null,Dt=null,Je=W,pt=W=0,bt=null,Ut=ne.next();Je!==null&&!Ut.done;pt++,Ut=ne.next()){Je.index>pt?(bt=Je,Je=null):bt=Je.sibling;var rr=le(K,Je,Ut.value,ve);if(rr===null){Je===null&&(Je=bt);break}t&&Je&&rr.alternate===null&&n(K,Je),W=d(rr,W,pt),Dt===null?tt=rr:Dt.sibling=rr,Dt=rr,Je=bt}if(Ut.done)return a(K,Je),Et&&ia(K,pt),tt;if(Je===null){for(;!Ut.done;pt++,Ut=ne.next())Ut=_e(K,Ut.value,ve),Ut!==null&&(W=d(Ut,W,pt),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut);return Et&&ia(K,pt),tt}for(Je=o(Je);!Ut.done;pt++,Ut=ne.next())Ut=he(Je,K,pt,Ut.value,ve),Ut!==null&&(t&&Ut.alternate!==null&&Je.delete(Ut.key===null?pt:Ut.key),W=d(Ut,W,pt),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut);return t&&Je.forEach(function(iM){return n(K,iM)}),Et&&ia(K,pt),tt}function Yt(K,W,ne,ve){if(typeof ne=="object"&&ne!==null&&ne.type===A&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:e:{for(var tt=ne.key;W!==null;){if(W.key===tt){if(tt=ne.type,tt===A){if(W.tag===7){a(K,W.sibling),ve=u(W,ne.props.children),ve.return=K,K=ve;break e}}else if(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===B&&Rr(tt)===W.type){a(K,W.sibling),ve=u(W,ne.props),Ao(ve,ne),ve.return=K,K=ve;break e}a(K,W);break}else n(K,W);W=W.sibling}ne.type===A?(ve=Mr(ne.props.children,K.mode,ve,ne.key),ve.return=K,K=ve):(ve=Hl(ne.type,ne.key,ne.props,null,K.mode,ve),Ao(ve,ne),ve.return=K,K=ve)}return y(K);case E:e:{for(tt=ne.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){a(K,W.sibling),ve=u(W,ne.children||[]),ve.return=K,K=ve;break e}else{a(K,W);break}else n(K,W);W=W.sibling}ve=Qu(ne,K.mode,ve),ve.return=K,K=ve}return y(K);case B:return ne=Rr(ne),Yt(K,W,ne,ve)}if(re(ne))return We(K,W,ne,ve);if(q(ne)){if(tt=q(ne),typeof tt!="function")throw Error(s(150));return ne=tt.call(ne),at(K,W,ne,ve)}if(typeof ne.then=="function")return Yt(K,W,Yl(ne),ve);if(ne.$$typeof===U)return Yt(K,W,kl(K,ne),ve);jl(K,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,W!==null&&W.tag===6?(a(K,W.sibling),ve=u(W,ne),ve.return=K,K=ve):(a(K,W),ve=Ku(ne,K.mode,ve),ve.return=K,K=ve),y(K)):a(K,W)}return function(K,W,ne,ve){try{To=0;var tt=Yt(K,W,ne,ve);return gs=null,tt}catch(Je){if(Je===ms||Je===Wl)throw Je;var Dt=ei(29,Je,null,K.mode);return Dt.lanes=ve,Dt.return=K,Dt}}}var wr=Lm(!0),Nm=Lm(!1),Va=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Bl(t),gm(t,null,a),n}return Fl(t,o,n,a),Bl(t)}function Ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,so(t,a)}}function df(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var hf=!1;function Co(){if(hf){var t=ps;if(t!==null)throw t}}function wo(t,n,a,o){hf=!1;var u=t.updateQueue;Va=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,ae=V.next;V.next=null,y===null?d=ae:y.next=ae,y=V;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==y&&(R===null?me.firstBaseUpdate=ae:R.next=ae,me.lastBaseUpdate=V))}if(d!==null){var _e=u.baseState;y=0,me=ae=V=null,R=d;do{var le=R.lane&-536870913,he=le!==R.lane;if(he?(Mt&le)===le:(o&le)===le){le!==0&&le===hs&&(hf=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=t,at=R;le=n;var Yt=a;switch(at.tag){case 1:if(We=at.payload,typeof We=="function"){_e=We.call(Yt,_e,le);break e}_e=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=at.payload,le=typeof We=="function"?We.call(Yt,_e,le):We,le==null)break e;_e=g({},_e,le);break e;case 2:Va=!0}}le=R.callback,le!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[le]:he.push(le))}else he={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(ae=me=he,V=_e):me=me.next=he,y|=le;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;he=R,R=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);me===null&&(V=_e),u.baseState=V,u.firstBaseUpdate=ae,u.lastBaseUpdate=me,d===null&&(u.shared.lanes=0),Za|=y,t.lanes=y,t.memoizedState=_e}}function Om(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Pm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Om(a[t],n)}var vs=I(null),Zl=I(0);function zm(t,n){t=pa,fe(Zl,t),fe(vs,n),pa=t|n.baseLanes}function pf(){fe(Zl,pa),fe(vs,vs.current)}function mf(){pa=Zl.current,ee(vs),ee(Zl)}var ti=I(null),_i=null;function Wa(t){var n=t.alternate;fe(on,on.current&1),fe(ti,t),_i===null&&(n===null||vs.current!==null||n.memoizedState!==null)&&(_i=t)}function gf(t){fe(on,on.current),fe(ti,t),_i===null&&(_i=t)}function Im(t){t.tag===22?(fe(on,on.current),fe(ti,t),_i===null&&(_i=t)):qa()}function qa(){fe(on,on.current),fe(ti,ti.current)}function ni(t){ee(ti),_i===t&&(_i=null),ee(on)}var on=I(0);function Kl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Md(a)||bd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,ft=null,Wt=null,hn=null,Ql=!1,_s=!1,Dr=!1,Jl=0,Do=0,xs=null,Yy=0;function rn(){throw Error(s(321))}function vf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function _f(t,n,a,o,u,d){return sa=d,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?yg:Nf,Dr=!1,d=a(o,u),Dr=!1,_s&&(d=Bm(n,a,o,u)),Fm(t),d}function Fm(t){P.H=No;var n=Wt!==null&&Wt.next!==null;if(sa=0,hn=Wt=ft=null,Ql=!1,Do=0,xs=null,n)throw Error(s(300));t===null||pn||(t=t.dependencies,t!==null&&Vl(t)&&(pn=!0))}function Bm(t,n,a,o){ft=t;var u=0;do{if(_s&&(xs=null),Do=0,_s=!1,25<=u)throw Error(s(301));if(u+=1,hn=Wt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=Sg,d=n(a,o)}while(_s);return d}function jy(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Uo(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(ft.flags|=1024),n}function xf(){var t=Jl!==0;return Jl=0,t}function yf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Sf(t){if(Ql){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ql=!1}sa=0,hn=Wt=ft=null,_s=!1,Do=Jl=0,xs=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ft.memoizedState=hn=t:hn=hn.next=t,hn}function ln(){if(Wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=hn===null?ft.memoizedState:hn.next;if(n!==null)hn=n,Wt=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},hn===null?ft.memoizedState=hn=t:hn=hn.next=t}return hn}function $l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(t){var n=Do;return Do+=1,xs===null&&(xs=[]),t=wm(xs,t,n),n=ft,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?yg:Nf),t}function ec(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Uo(t);if(t.$$typeof===U)return Un(t)}throw Error(s(438,String(t)))}function Mf(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=$l(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function oa(t,n){return typeof n=="function"?n(t):n}function tc(t){var n=ln();return bf(n,Wt,t)}function bf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=y=null,V=null,ae=n,me=!1;do{var _e=ae.lane&-536870913;if(_e!==ae.lane?(Mt&_e)===_e:(sa&_e)===_e){var le=ae.revertLane;if(le===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),_e===hs&&(me=!0);else if((sa&le)===le){ae=ae.next,le===hs&&(me=!0);continue}else _e={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(R=V=_e,y=d):V=V.next=_e,ft.lanes|=le,Za|=le;_e=ae.action,Dr&&a(d,_e),d=ae.hasEagerState?ae.eagerState:a(d,_e)}else le={lane:_e,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(R=V=le,y=d):V=V.next=le,ft.lanes|=_e,Za|=_e;ae=ae.next}while(ae!==null&&ae!==n);if(V===null?y=d:V.next=R,!$n(d,t.memoizedState)&&(pn=!0,me&&(a=ps,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ef(t){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);$n(d,n.memoizedState)||(pn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Hm(t,n,a){var o=ft,u=ln(),d=Et;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!$n((Wt||u).memoizedState,a);if(y&&(u.memoizedState=a,pn=!0),u=u.queue,Rf(km.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,ys(9,{destroy:void 0},Vm.bind(null,o,u,a,n),null),Zt===null)throw Error(s(349));d||(sa&127)!==0||Gm(o,n,a)}return a}function Gm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=$l(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Vm(t,n,a,o){n.value=a,n.getSnapshot=o,Xm(n)&&Wm(t)}function km(t,n,a){return a(function(){Xm(n)&&Wm(t)})}function Xm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function Wm(t){var n=Sr(t,2);n!==null&&Zn(n,t,2)}function Tf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Dr){Ge(!0);try{a()}finally{Ge(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},n}function qm(t,n,a,o){return t.baseState=a,bf(t,Wt,typeof o=="function"?o:oa)}function Zy(t,n,a,o,u){if(ac(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Ym(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Ym(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=P.T,y={};P.T=y;try{var R=a(u,o),V=P.S;V!==null&&V(y,R),jm(t,n,R)}catch(ae){Af(t,n,ae)}finally{d!==null&&y.types!==null&&(d.types=y.types),P.T=d}}else try{d=a(u,o),jm(t,n,d)}catch(ae){Af(t,n,ae)}}function jm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Zm(t,n,o)},function(o){return Af(t,n,o)}):Zm(t,n,a)}function Zm(t,n,a){n.status="fulfilled",n.value=a,Km(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ym(t,a)))}function Af(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Km(n),n=n.next;while(n!==o)}t.action=null}function Km(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Qm(t,n){return n}function Jm(t,n){if(Et){var a=Zt.formState;if(a!==null){e:{var o=ft;if(Et){if(Qt){t:{for(var u=Qt,d=vi;u.nodeType!==8;){if(!d){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qt=xi(u.nextSibling),o=u.data==="F!";break e}}Ha(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qm,lastRenderedState:n},a.queue=o,a=vg.bind(null,ft,o),o.dispatch=a,o=Tf(!1),d=Lf.bind(null,ft,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Zy.bind(null,ft,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function $m(t){var n=ln();return eg(n,Wt,t)}function eg(t,n,a){if(n=bf(t,n,Qm)[0],t=tc(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Uo(n)}catch(y){throw y===ms?Wl:y}else o=n;n=ln();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,ys(9,{destroy:void 0},Ky.bind(null,u,a),null)),[o,d,t]}function Ky(t,n){t.action=n}function tg(t){var n=ln(),a=Wt;if(a!==null)return eg(n,a,t);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ys(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=$l(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function ng(){return ln().memoizedState}function nc(t,n,a,o){var u=Hn();ft.flags|=t,u.memoizedState=ys(1|n,{destroy:void 0},a,o===void 0?null:o)}function ic(t,n,a,o){var u=ln();o=o===void 0?null:o;var d=u.memoizedState.inst;Wt!==null&&o!==null&&vf(o,Wt.memoizedState.deps)?u.memoizedState=ys(n,d,a,o):(ft.flags|=t,u.memoizedState=ys(1|n,d,a,o))}function ig(t,n){nc(8390656,8,t,n)}function Rf(t,n){ic(2048,8,t,n)}function Qy(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=$l(),ft.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function ag(t){var n=ln().memoizedState;return Qy({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function rg(t,n){return ic(4,2,t,n)}function sg(t,n){return ic(4,4,t,n)}function og(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function lg(t,n,a){a=a!=null?a.concat([t]):null,ic(4,4,og.bind(null,n,t),a)}function Cf(){}function cg(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&vf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function ug(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&vf(n,o[1]))return o[0];if(o=t(),Dr){Ge(!0);try{t()}finally{Ge(!1)}}return a.memoizedState=[o,n],o}function wf(t,n,a){return a===void 0||(sa&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=f0(),ft.lanes|=t,Za|=t,a)}function fg(t,n,a,o){return $n(a,n)?a:vs.current!==null?(t=wf(t,a,o),$n(t,n)||(pn=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(Mt&261930)===0?(pn=!0,t.memoizedState=a):(t=f0(),ft.lanes|=t,Za|=t,n)}function dg(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var y=P.T,R={};P.T=R,Lf(t,!1,n,a);try{var V=u(),ae=P.S;if(ae!==null&&ae(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var me=qy(V,o);Lo(t,n,me,ri(t))}else Lo(t,n,o,ri(t))}catch(_e){Lo(t,n,{then:function(){},status:"rejected",reason:_e},ri())}finally{G.p=d,y!==null&&R.types!==null&&(y.types=R.types),P.T=y}}function Jy(){}function Df(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=hg(t).queue;dg(t,u,n,X,a===null?Jy:function(){return pg(t),a(o)})}function hg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function pg(t){var n=hg(t);n.next===null&&(n=t.alternate.memoizedState),Lo(t,n.next.queue,{},ri())}function Uf(){return Un(Zo)}function mg(){return ln().memoizedState}function gg(){return ln().memoizedState}function $y(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=ka(a);var o=Xa(n,t,a);o!==null&&(Zn(o,n,a),Ro(o,n,a)),n={cache:sf()},t.payload=n;return}n=n.return}}function eS(t,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ac(t)?_g(n,a):(a=ju(t,n,a,o),a!==null&&(Zn(a,t,o),xg(a,n,o)))}function vg(t,n,a){var o=ri();Lo(t,n,a,o)}function Lo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ac(t))_g(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,R=d(y,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,y))return Fl(t,n,u,0),Zt===null&&Il(),!1}catch{}if(a=ju(t,n,u,o),a!==null)return Zn(a,t,o),xg(a,n,o),!0}return!1}function Lf(t,n,a,o){if(o={lane:2,revertLane:ud(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ac(t)){if(n)throw Error(s(479))}else n=ju(t,a,o,2),n!==null&&Zn(n,t,2)}function ac(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function _g(t,n){_s=Ql=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function xg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,so(t,a)}}var No={readContext:Un,use:ec,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};No.useEffectEvent=rn;var yg={readContext:Un,use:ec,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:ig,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,nc(4194308,4,og.bind(null,n,t),a)},useLayoutEffect:function(t,n){return nc(4194308,4,t,n)},useInsertionEffect:function(t,n){nc(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(Dr){Ge(!0);try{t()}finally{Ge(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Dr){Ge(!0);try{a(n)}finally{Ge(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=eS.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Tf(t);var n=t.queue,a=vg.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Cf,useDeferredValue:function(t,n){var a=Hn();return wf(a,t,n)},useTransition:function(){var t=Tf(!1);return t=dg.bind(null,ft,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ft,u=Hn();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Zt===null)throw Error(s(349));(Mt&127)!==0||Gm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,ig(km.bind(null,o,d,t),[t]),o.flags|=2048,ys(9,{destroy:void 0},Vm.bind(null,o,d,a,n),null),a},useId:function(){var t=Hn(),n=Zt.identifierPrefix;if(Et){var a=Gi,o=Hi;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Jl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Yy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Uf,useFormState:Jm,useActionState:Jm,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Lf.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:Mf,useCacheRefresh:function(){return Hn().memoizedState=$y.bind(null,ft)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Nf={readContext:Un,use:ec,useCallback:cg,useContext:Un,useEffect:Rf,useImperativeHandle:lg,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:tc,useRef:ng,useState:function(){return tc(oa)},useDebugValue:Cf,useDeferredValue:function(t,n){var a=ln();return fg(a,Wt.memoizedState,t,n)},useTransition:function(){var t=tc(oa)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Uo(t),n]},useSyncExternalStore:Hm,useId:mg,useHostTransitionStatus:Uf,useFormState:$m,useActionState:$m,useOptimistic:function(t,n){var a=ln();return qm(a,Wt,t,n)},useMemoCache:Mf,useCacheRefresh:gg};Nf.useEffectEvent=ag;var Sg={readContext:Un,use:ec,useCallback:cg,useContext:Un,useEffect:Rf,useImperativeHandle:lg,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:Ef,useRef:ng,useState:function(){return Ef(oa)},useDebugValue:Cf,useDeferredValue:function(t,n){var a=ln();return Wt===null?wf(a,t,n):fg(a,Wt.memoizedState,t,n)},useTransition:function(){var t=Ef(oa)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Uo(t),n]},useSyncExternalStore:Hm,useId:mg,useHostTransitionStatus:Uf,useFormState:tg,useActionState:tg,useOptimistic:function(t,n){var a=ln();return Wt!==null?qm(a,Wt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:gg};Sg.useEffectEvent=ag;function Of(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Pf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ri(),u=ka(o);u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,o),n!==null&&(Zn(n,t,o),Ro(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ri(),u=ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,o),n!==null&&(Zn(n,t,o),Ro(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),o=ka(a);o.tag=2,n!=null&&(o.callback=n),n=Xa(t,o,a),n!==null&&(Zn(n,t,a),Ro(n,t,a))}};function Mg(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!xo(a,o)||!xo(u,d):!0}function bg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Pf.enqueueReplaceState(n,n.state,null)}function Ur(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Eg(t){zl(t)}function Tg(t){console.error(t)}function Ag(t){zl(t)}function rc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Rg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function zf(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){rc(t,n)},a}function Cg(t){return t=ka(t),t.tag=3,t}function wg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){Rg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Rg(n,a,o),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function tS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ds(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?vc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),od(t,o,u)),!1;case 22:return a.flags|=65536,o===ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),od(t,o,u)),!1}throw Error(s(435,a.tag))}return od(t,o,u),vc(),!1}if(Et)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ef&&(t=Error(s(422),{cause:o}),Mo(pi(t,a)))):(o!==ef&&(n=Error(s(423),{cause:o}),Mo(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=pi(o,a),u=zf(t.stateNode,o,u),df(t,u),sn!==4&&(sn=2)),!1;var d=Error(s(520),{cause:o});if(d=pi(d,a),Go===null?Go=[d]:Go.push(d),sn!==4&&(sn=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=zf(a.stateNode,o,t),df(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ka===null||!Ka.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Cg(u),wg(u,t,a,o),df(a,u),!1}a=a.return}while(a!==null);return!1}var If=Error(s(461)),pn=!1;function Ln(t,n,a,o){n.child=t===null?Nm(n,null,a,o):wr(n,t.child,a,o)}function Dg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Tr(n),o=_f(t,n,a,y,d,u),R=xf(),t!==null&&!pn?(yf(t,n,u),la(t,n,u)):(Et&&R&&Ju(n),n.flags|=1,Ln(t,n,o,u),n.child)}function Ug(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Zu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Lg(t,n,d,o,u)):(t=Hl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Wf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:xo,a(y,o)&&t.ref===n.ref)return la(t,n,u)}return n.flags|=1,t=na(d,o),t.ref=n.ref,t.return=n,n.child=t}function Lg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(xo(d,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=d,Wf(t,u))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,la(t,n,u)}return Ff(t,n,a,o,u)}function Ng(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Og(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Xl(n,d!==null?d.cachePool:null),d!==null?zm(n,d):pf(),Im(n);else return o=n.lanes=536870912,Og(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Xl(n,d.cachePool),zm(n,d),qa(),n.memoizedState=null):(t!==null&&Xl(n,null),pf(),qa());return Ln(t,n,u,a),n.child}function Oo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Og(t,n,a,o,u){var d=lf();return d=d===null?null:{parent:dn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Xl(n,null),pf(),Im(n),t!==null&&ds(t,n,o,!0),n.childLanes=u,null}function sc(t,n){return n=lc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Pg(t,n,a){return wr(n,t.child,null,a),t=sc(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function nS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=sc(n,o),n.lanes=536870912,Oo(null,t);if(gf(n),(t=Qt)?(t=Y0(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=_m(t),a.return=n,n.child=a,Dn=n,Qt=null)):t=null,t===null)throw Ha(n);return n.lanes=536870912,null}return sc(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(gf(n),u)if(n.flags&256)n.flags&=-257,n=Pg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||ds(t,n,a,!1),u=(a&t.childLanes)!==0,pn||u){if(o=Zt,o!==null&&(y=Qr(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,Sr(t,y),Zn(o,t,y),If;vc(),n=Pg(t,n,a)}else t=d.treeContext,Qt=xi(y.nextSibling),Dn=n,Et=!0,Ba=null,vi=!1,t!==null&&Sm(n,t),n=sc(n,o),n.flags|=4096;return n}return t=na(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function oc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ff(t,n,a,o,u){return Tr(n),a=_f(t,n,a,o,void 0,u),o=xf(),t!==null&&!pn?(yf(t,n,u),la(t,n,u)):(Et&&o&&Ju(n),n.flags|=1,Ln(t,n,a,u),n.child)}function zg(t,n,a,o,u,d){return Tr(n),n.updateQueue=null,a=Bm(n,o,a,u),Fm(t),o=xf(),t!==null&&!pn?(yf(t,n,d),la(t,n,d)):(Et&&o&&Ju(n),n.flags|=1,Ln(t,n,a,d),n.child)}function Ig(t,n,a,o,u){if(Tr(n),n.stateNode===null){var d=ls,y=a.contextType;typeof y=="object"&&y!==null&&(d=Un(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Pf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},uf(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?Un(y):ls,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Of(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Pf.enqueueReplaceState(d,d.state,null),wo(n,o,d,u),Co(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,V=Ur(a,R);d.props=V;var ae=d.context,me=a.contextType;y=ls,typeof me=="object"&&me!==null&&(y=Un(me));var _e=a.getDerivedStateFromProps;me=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ae!==y)&&bg(n,d,o,y),Va=!1;var le=n.memoizedState;d.state=le,wo(n,o,d,u),Co(),ae=n.memoizedState,R||le!==ae||Va?(typeof _e=="function"&&(Of(n,a,_e,o),ae=n.memoizedState),(V=Va||Mg(n,a,V,o,le,ae,y))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),d.props=o,d.state=ae,d.context=y,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,ff(t,n),y=n.memoizedProps,me=Ur(a,y),d.props=me,_e=n.pendingProps,le=d.context,ae=a.contextType,V=ls,typeof ae=="object"&&ae!==null&&(V=Un(ae)),R=a.getDerivedStateFromProps,(ae=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==_e||le!==V)&&bg(n,d,o,V),Va=!1,le=n.memoizedState,d.state=le,wo(n,o,d,u),Co();var he=n.memoizedState;y!==_e||le!==he||Va||t!==null&&t.dependencies!==null&&Vl(t.dependencies)?(typeof R=="function"&&(Of(n,a,R,o),he=n.memoizedState),(me=Va||Mg(n,a,me,o,le,he,V)||t!==null&&t.dependencies!==null&&Vl(t.dependencies))?(ae||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,he,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,he,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),d.props=o,d.state=he,d.context=V,o=me):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,oc(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=wr(n,t.child,null,u),n.child=wr(n,null,a,u)):Ln(t,n,a,u),n.memoizedState=d.state,t=n.child):t=la(t,n,u),t}function Fg(t,n,a,o){return br(),n.flags|=256,Ln(t,n,a,o),n.child}var Bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(t){return{baseLanes:t,cachePool:Rm()}}function Gf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function Bg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(u?Wa(n):qa(),(t=Qt)?(t=Y0(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=_m(t),a.return=n,n.child=a,Dn=n,Qt=null)):t=null,t===null)throw Ha(n);return bd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(qa(),u=n.mode,R=lc({mode:"hidden",children:R},u),o=Mr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Hf(a),o.childLanes=Gf(t,y,a),n.memoizedState=Bf,Oo(null,o)):(Wa(n),Vf(n,R))}var V=t.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(d)n.flags&256?(Wa(n),n.flags&=-257,n=kf(t,n,a)):n.memoizedState!==null?(qa(),n.child=t.child,n.flags|=128,n=null):(qa(),R=o.fallback,u=n.mode,o=lc({mode:"visible",children:o.children},u),R=Mr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,wr(n,t.child,null,a),o=n.child,o.memoizedState=Hf(a),o.childLanes=Gf(t,y,a),n.memoizedState=Bf,n=Oo(null,o));else if(Wa(n),bd(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ae=y.dgst;y=ae,o=Error(s(419)),o.stack="",o.digest=y,Mo({value:o,source:null,stack:null}),n=kf(t,n,a)}else if(pn||ds(t,n,a,!1),y=(a&t.childLanes)!==0,pn||y){if(y=Zt,y!==null&&(o=Qr(y,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Sr(t,o),Zn(y,t,o),If;Md(R)||vc(),n=kf(t,n,a)}else Md(R)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,Qt=xi(R.nextSibling),Dn=n,Et=!0,Ba=null,vi=!1,t!==null&&Sm(n,t),n=Vf(n,o.children),n.flags|=4096);return n}return u?(qa(),R=o.fallback,u=n.mode,V=t.child,ae=V.sibling,o=na(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ae!==null?R=na(ae,R):(R=Mr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Oo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Hf(a):(u=R.cachePool,u!==null?(V=dn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Rm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Gf(t,y,a),n.memoizedState=Bf,Oo(t.child,o)):(Wa(n),a=t.child,t=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Vf(t,n){return n=lc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function lc(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function kf(t,n,a){return wr(n,t.child,null,a),t=Vf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Hg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),af(t.return,n,a)}function Xf(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function Gg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=on.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,fe(on,y),Ln(t,n,o,a),o=Et?So:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hg(t,a,n);else if(t.tag===19)Hg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Kl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Xf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Kl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Xf(n,!0,a,null,d,o);break;case"together":Xf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ds(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=na(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=na(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Vl(t)))}function iS(t,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Ga(n,dn,t.memoizedState.cache),br();break;case 27:case 5:He(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,gf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Bg(t,n,a):(Wa(n),t=la(t,n,a),t!==null?t.sibling:null);Wa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ds(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Gg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),fe(on,on.current),o)break;return null;case 22:return n.lanes=0,Ng(t,n,a,n.pendingProps);case 24:Ga(n,dn,t.memoizedState.cache)}return la(t,n,a)}function Vg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Wf(t,a)&&(n.flags&128)===0)return pn=!1,iS(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Et&&(n.flags&1048576)!==0&&ym(n,So,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Rr(n.elementType),n.type=t,typeof t=="function")Zu(t)?(o=Ur(t,o),n.tag=1,n=Ig(null,n,t,o,a)):(n.tag=0,n=Ff(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=Dg(null,n,t,o,a);break e}else if(u===O){n.tag=14,n=Ug(null,n,t,o,a);break e}}throw n=te(t)||t,Error(s(306,n,""))}}return n;case 0:return Ff(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ur(o,n.pendingProps),Ig(t,n,o,u,a);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,ff(t,n),wo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ga(n,dn,o),o!==d.cache&&rf(n,[dn],a,!0),Co(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Fg(t,n,o,a);break e}else if(o!==u){u=pi(Error(s(424)),n),Mo(u),n=Fg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Qt=xi(t.firstChild),Dn=n,Et=!0,Ba=null,vi=!0,a=Nm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(br(),o===u){n=la(t,n,a);break e}Ln(t,n,o,a)}n=n.child}return n;case 26:return oc(t,n),t===null?(a=$0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,t=n.pendingProps,o=Ec(se.current).createElement(a),o[fn]=n,o[En]=t,Nn(o,a,t),C(o),n.stateNode=o):n.memoizedState=$0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&Et&&(o=n.stateNode=K0(n.type,n.pendingProps,se.current),Dn=n,vi=!0,u=Qt,er(n.type)?(Ed=u,Qt=xi(o.firstChild)):Qt=u),Ln(t,n,n.pendingProps.children,a),oc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((u=o=Qt)&&(o=NS(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Dn=n,Qt=xi(o.firstChild),vi=!1,u=!0):u=!1),u||Ha(n)),He(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,xd(u,d)?o=null:y!==null&&xd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=_f(t,n,jy,null,null,a),Zo._currentValue=u),oc(t,n),Ln(t,n,o,a),n.child;case 6:return t===null&&Et&&((t=a=Qt)&&(a=OS(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Dn=n,Qt=null,t=!0):t=!1),t||Ha(n)),null;case 13:return Bg(t,n,a);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=wr(n,null,o,a):Ln(t,n,o,a),n.child;case 11:return Dg(t,n,n.type,n.pendingProps,a);case 7:return Ln(t,n,n.pendingProps,a),n.child;case 8:return Ln(t,n,n.pendingProps.children,a),n.child;case 12:return Ln(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),Ln(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Tr(n),u=Un(u),o=o(u),n.flags|=1,Ln(t,n,o,a),n.child;case 14:return Ug(t,n,n.type,n.pendingProps,a);case 15:return Lg(t,n,n.type,n.pendingProps,a);case 19:return Gg(t,n,a);case 31:return nS(t,n,a);case 22:return Ng(t,n,a,n.pendingProps);case 24:return Tr(n),o=Un(dn),t===null?(u=lf(),u===null&&(u=Zt,d=sf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},uf(n),Ga(n,dn,u)):((t.lanes&a)!==0&&(ff(t,n),wo(n,null,null,a),Co()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,dn,o)):(o=d.cache,Ga(n,dn,o),o!==u.cache&&rf(n,[dn],a,!0))),Ln(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ca(t){t.flags|=4}function qf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(m0())t.flags|=8192;else throw Cr=ql,cf}else t.flags&=-16777217}function kg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!av(n))if(m0())t.flags|=8192;else throw Cr=ql,cf}function cc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Bt():536870912,t.lanes|=n,Es|=n)}function Po(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function aS(t,n,a){var o=n.pendingProps;switch($u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(dn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fs(n)?ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tf())),Jt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ca(n),d!==null?(Jt(n),kg(n,d)):(Jt(n),qf(n,u,null,o,a))):d?d!==t.memoizedState?(ca(n),Jt(n),kg(n,d)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ca(n),Jt(n),qf(n,u,t,o,a)),null;case 27:if(dt(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Jt(n),null}t=Ee.current,fs(n)?Mm(n):(t=K0(u,o,a),n.stateNode=t,ca(n))}return Jt(n),null;case 5:if(dt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Jt(n),null}if(d=Ee.current,fs(n))Mm(n);else{var y=Ec(se.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[fn]=n,d[En]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(Nn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ca(n)}}return Jt(n),qf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=se.current,fs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||B0(t.nodeValue,a)),t||Ha(n,!0)}else t=Ec(t).createTextNode(o),t[fn]=n,n.stateNode=t}return Jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=fs(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[fn]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else a=tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=fs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),cc(n,n.updateQueue),Jt(n),null);case 4:return ke(),t===null&&pd(n.stateNode.containerInfo),Jt(n),null;case 10:return ra(n.type),Jt(n),null;case 19:if(ee(on),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Po(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Kl(t),d!==null){for(n.flags|=128,Po(o,!1),t=d.updateQueue,n.updateQueue=t,cc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)vm(a,t),a=a.sibling;return fe(on,on.current&1|2),Et&&ia(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>pc&&(n.flags|=128,u=!0,Po(o,!1),n.lanes=4194304)}else{if(!u)if(t=Kl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,cc(n,t),Po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Et)return Jt(n),null}else 2*b()-o.renderingStartTime>pc&&a!==536870912&&(n.flags|=128,u=!0,Po(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=on.current,fe(on,u?a&1|2:a&1),Et&&ia(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return ni(n),mf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&cc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ee(Ar),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(dn),Jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function rS(t,n){switch($u(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra(dn),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ee(on),null;case 4:return ke(),null;case 10:return ra(n.type),null;case 22:case 23:return ni(n),mf(),t!==null&&ee(Ar),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra(dn),null;case 25:return null;default:return null}}function Xg(t,n){switch($u(n),n.tag){case 3:ra(dn),ke();break;case 26:case 27:case 5:dt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:ee(on);break;case 10:ra(n.type);break;case 22:case 23:ni(n),mf(),t!==null&&ee(Ar);break;case 24:ra(dn)}}function zo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Vt(n,n.return,R)}}function Ya(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var V=a,ae=R;try{ae()}catch(me){Vt(u,V,me)}}}o=o.next}while(o!==d)}}catch(me){Vt(n,n.return,me)}}function Wg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Pm(n,a)}catch(o){Vt(t,t.return,o)}}}function qg(t,n,a){a.props=Ur(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function Io(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Vt(t,n,u)}}function Vi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(t,n,u)}else a.current=null}function Yg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(t,t.return,u)}}function Yf(t,n,a){try{var o=t.stateNode;RS(o,t.type,a,n),o[En]=n}catch(u){Vt(t,t.return,u)}}function jg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&er(t.type)||t.tag===4}function jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&er(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&er(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Zf(t,n,a),t=t.sibling;t!==null;)Zf(t,n,a),t=t.sibling}function uc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&er(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(uc(t,n,a),t=t.sibling;t!==null;)uc(t,n,a),t=t.sibling}function Zg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[fn]=t,n[En]=a}catch(d){Vt(t,t.return,d)}}var ua=!1,mn=!1,Kf=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function sS(t,n){if(t=t.containerInfo,vd=Uc,t=lm(t),Vu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,R=-1,V=-1,ae=0,me=0,_e=t,le=null;t:for(;;){for(var he;_e!==a||u!==0&&_e.nodeType!==3||(R=y+u),_e!==d||o!==0&&_e.nodeType!==3||(V=y+o),_e.nodeType===3&&(y+=_e.nodeValue.length),(he=_e.firstChild)!==null;)le=_e,_e=he;for(;;){if(_e===t)break t;if(le===a&&++ae===u&&(R=y),le===d&&++me===o&&(V=y),(he=_e.nextSibling)!==null)break;_e=le,le=_e.parentNode}_e=he}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(_d={focusedElem:t,selectionRange:a},Uc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var We=Ur(a.type,u);t=o.getSnapshotBeforeUpdate(We,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(at){Vt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Sd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function Qg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(t,a),o&4&&zo(5,a);break;case 1:if(da(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Vt(a,a.return,y)}else{var u=Ur(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Vt(a,a.return,y)}}o&64&&Wg(a),o&512&&Io(a,a.return);break;case 3:if(da(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pm(t,n)}catch(y){Vt(a,a.return,y)}}break;case 27:n===null&&o&4&&Zg(a);case 26:case 5:da(t,a),n===null&&o&4&&Yg(a),o&512&&Io(a,a.return);break;case 12:da(t,a);break;case 31:da(t,a),o&4&&e0(t,a);break;case 13:da(t,a),o&4&&t0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=mS.bind(null,a),PS(t,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){n=n!==null&&n.memoizedState!==null||mn,u=ua;var d=mn;ua=o,(mn=n)&&!d?ha(t,a,(a.subtreeFlags&8772)!==0):da(t,a),ua=u,mn=d}break;case 30:break;default:da(t,a)}}function Jg(t){var n=t.alternate;n!==null&&(t.alternate=null,Jg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&uo(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Wn=!1;function fa(t,n,a){for(a=a.child;a!==null;)$g(t,n,a),a=a.sibling}function $g(t,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:mn||Vi(a,n),fa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||Vi(a,n);var o=tn,u=Wn;er(a.type)&&(tn=a.stateNode,Wn=!1),fa(t,n,a),qo(a.stateNode),tn=o,Wn=u;break;case 5:mn||Vi(a,n);case 6:if(o=tn,u=Wn,tn=null,fa(t,n,a),tn=o,Wn=u,tn!==null)if(Wn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(d){Vt(a,n,d)}else try{tn.removeChild(a.stateNode)}catch(d){Vt(a,n,d)}break;case 18:tn!==null&&(Wn?(t=tn,W0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ls(t)):W0(tn,a.stateNode));break;case 4:o=tn,u=Wn,tn=a.stateNode.containerInfo,Wn=!0,fa(t,n,a),tn=o,Wn=u;break;case 0:case 11:case 14:case 15:Ya(2,a,n),mn||Ya(4,a,n),fa(t,n,a);break;case 1:mn||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&qg(a,n,o)),fa(t,n,a);break;case 21:fa(t,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,fa(t,n,a),mn=o;break;default:fa(t,n,a)}}function e0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ls(t)}catch(a){Vt(n,n.return,a)}}}function t0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ls(t)}catch(a){Vt(n,n.return,a)}}function oS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Kg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Kg),n;default:throw Error(s(435,t.tag))}}function fc(t,n){var a=oS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=gS.bind(null,t,o);o.then(u,u)}})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(er(R.type)){tn=R.stateNode,Wn=!1;break e}break;case 5:tn=R.stateNode,Wn=!1;break e;case 3:case 4:tn=R.stateNode.containerInfo,Wn=!0;break e}R=R.return}if(tn===null)throw Error(s(160));$g(d,y,u),tn=null,Wn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)n0(n,t),n=n.sibling}var Ui=null;function n0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),o&4&&(Ya(3,t,t.return),zo(3,t),Ya(5,t,t.return));break;case 1:qn(n,t),Yn(t),o&512&&(mn||a===null||Vi(a,a.return)),o&64&&ua&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ui;if(qn(n,t),Yn(t),o&512&&(mn||a===null||Vi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[gr]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Nn(d,o,a),d[fn]=t,C(d),o=d;break e;case"link":var y=nv("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}d=u.createElement(o),Nn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=nv("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}d=u.createElement(o),Nn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[fn]=t,C(d),o=d}t.stateNode=o}else iv(u,t.type,t.stateNode);else t.stateNode=tv(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?iv(u,t.type,t.stateNode):tv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),o&512&&(mn||a===null||Vi(a,a.return)),a!==null&&o&4&&Yf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),o&512&&(mn||a===null||Vi(a,a.return)),t.flags&32){u=t.stateNode;try{vn(u,"")}catch(We){Vt(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Yf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Kf=!0);break;case 6:if(qn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){Vt(t,t.return,We)}}break;case 3:if(Rc=null,u=Ui,Ui=Tc(n.containerInfo),qn(n,t),Ui=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ls(n.containerInfo)}catch(We){Vt(t,t.return,We)}Kf&&(Kf=!1,i0(t));break;case 4:o=Ui,Ui=Tc(t.stateNode.containerInfo),qn(n,t),Yn(t),Ui=o;break;case 12:qn(n,t),Yn(t);break;case 31:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,fc(t,o)));break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hc=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,fc(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ae=ua,me=mn;if(ua=ae||u,mn=me||V,qn(n,t),mn=me,ua=ae,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||ua||mn||Lr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=V.stateNode;var _e=V.memoizedProps.style,le=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(We){Vt(V,V.return,We)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(We){Vt(V,V.return,We)}}}else if(n.tag===18){if(a===null){V=n;try{var he=V.stateNode;u?q0(he,!0):q0(V.stateNode,!1)}catch(We){Vt(V,V.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,fc(t,a))));break;case 19:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,fc(t,o)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(jg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=jf(t);uc(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(vn(y,""),a.flags&=-33);var R=jf(t);uc(t,R,y);break;case 3:case 4:var V=a.stateNode.containerInfo,ae=jf(t);Zf(t,ae,V);break;default:throw Error(s(161))}}catch(me){Vt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function i0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;i0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qg(t,n.alternate,n),n=n.sibling}function Lr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ya(4,n,n.return),Lr(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&qg(n,n.return,a),Lr(n);break;case 27:qo(n.stateNode);case 26:case 5:Vi(n,n.return),Lr(n);break;case 22:n.memoizedState===null&&Lr(n);break;case 30:Lr(n);break;default:Lr(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:ha(u,d,a),zo(4,d);break;case 1:if(ha(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){Vt(o,o.return,ae)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Om(V[u],R)}catch(ae){Vt(o,o.return,ae)}}a&&y&64&&Wg(d),Io(d,d.return);break;case 27:Zg(d);case 26:case 5:ha(u,d,a),a&&o===null&&y&4&&Yg(d),Io(d,d.return);break;case 12:ha(u,d,a);break;case 31:ha(u,d,a),a&&y&4&&e0(u,d);break;case 13:ha(u,d,a),a&&y&4&&t0(u,d);break;case 22:d.memoizedState===null&&ha(u,d,a),Io(d,d.return);break;case 30:break;default:ha(u,d,a)}n=n.sibling}}function Qf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&bo(a))}function Jf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&bo(t))}function Li(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)a0(t,n,a,o),n=n.sibling}function a0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(t,n,a,o),u&2048&&zo(9,n);break;case 1:Li(t,n,a,o);break;case 3:Li(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&bo(t)));break;case 12:if(u&2048){Li(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Vt(n,n.return,V)}}else Li(t,n,a,o);break;case 31:Li(t,n,a,o);break;case 13:Li(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Li(t,n,a,o):Fo(t,n):d._visibility&2?Li(t,n,a,o):(d._visibility|=2,Ss(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Qf(y,n);break;case 24:Li(t,n,a,o),u&2048&&Jf(n.alternate,n);break;default:Li(t,n,a,o)}}function Ss(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,R=a,V=o,ae=y.flags;switch(y.tag){case 0:case 11:case 15:Ss(d,y,R,V,u),zo(8,y);break;case 23:break;case 22:var me=y.stateNode;y.memoizedState!==null?me._visibility&2?Ss(d,y,R,V,u):Fo(d,y):(me._visibility|=2,Ss(d,y,R,V,u)),u&&ae&2048&&Qf(y.alternate,y);break;case 24:Ss(d,y,R,V,u),u&&ae&2048&&Jf(y.alternate,y);break;default:Ss(d,y,R,V,u)}n=n.sibling}}function Fo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Fo(a,o),u&2048&&Qf(o.alternate,o);break;case 24:Fo(a,o),u&2048&&Jf(o.alternate,o);break;default:Fo(a,o)}n=n.sibling}}var Bo=8192;function Ms(t,n,a){if(t.subtreeFlags&Bo)for(t=t.child;t!==null;)r0(t,n,a),t=t.sibling}function r0(t,n,a){switch(t.tag){case 26:Ms(t,n,a),t.flags&Bo&&t.memoizedState!==null&&YS(a,Ui,t.memoizedState,t.memoizedProps);break;case 5:Ms(t,n,a);break;case 3:case 4:var o=Ui;Ui=Tc(t.stateNode.containerInfo),Ms(t,n,a),Ui=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Bo,Bo=16777216,Ms(t,n,a),Bo=o):Ms(t,n,a));break;default:Ms(t,n,a)}}function s0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ho(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,l0(o,t)}s0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)o0(t),t=t.sibling}function o0(t){switch(t.tag){case 0:case 11:case 15:Ho(t),t.flags&2048&&Ya(9,t,t.return);break;case 3:Ho(t);break;case 12:Ho(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,dc(t)):Ho(t);break;default:Ho(t)}}function dc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,l0(o,t)}s0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ya(8,n,n.return),dc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,dc(n));break;default:dc(n)}t=t.sibling}}function l0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:bo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if(Jg(o),o===a){Mn=null;break e}if(u!==null){u.return=d,Mn=u;break e}Mn=d}}}var lS={getCacheForType:function(t){var n=Un(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Un(dn).controller.signal}},cS=typeof WeakMap=="function"?WeakMap:Map,zt=0,Zt=null,xt=null,Mt=0,Gt=0,ii=null,ja=!1,bs=!1,$f=!1,pa=0,sn=0,Za=0,Nr=0,ed=0,ai=0,Es=0,Go=null,jn=null,td=!1,hc=0,c0=0,pc=1/0,mc=null,Ka=null,_n=0,Qa=null,Ts=null,ma=0,nd=0,id=null,u0=null,Vo=0,ad=null;function ri(){return(zt&2)!==0&&Mt!==0?Mt&-Mt:P.T!==null?ud():lo()}function f0(){if(ai===0)if((Mt&536870912)===0||Et){var t=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),ai=t}else ai=536870912;return t=ti.current,t!==null&&(t.flags|=32),ai}function Zn(t,n,a){(t===Zt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(As(t,0),Ja(t,Mt,ai,!1)),Pn(t,a),((zt&2)===0||t!==Zt)&&(t===Zt&&((zt&2)===0&&(Nr|=a),sn===4&&Ja(t,Mt,ai,!1)),ki(t))}function d0(t,n,a){if((zt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?dS(t,n):sd(t,n,!0),d=o;do{if(u===0){bs&&!o&&Ja(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!uS(a)){u=sd(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=Go;var V=R.current.memoizedState.isDehydrated;if(V&&(As(R,y).flags|=256),y=sd(R,y,!1),y!==2){if($f&&!V){R.errorRecoveryDisabledLanes|=d,Nr|=d,u=4;break e}d=jn,jn=u,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){As(t,0),Ja(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ja(o,n,ai,!ja);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=hc+300-b(),10<u)){if(Ja(o,n,ai,!ja),ye(o,0,!0)!==0)break e;ma=n,o.timeoutHandle=k0(h0.bind(null,o,a,jn,mc,td,n,ai,Nr,Es,ja,d,"Throttled",-0,0),u);break e}h0(o,a,jn,mc,td,n,ai,Nr,Es,ja,d,null,-0,0)}}break}while(!0);ki(t)}function h0(t,n,a,o,u,d,y,R,V,ae,me,_e,le,he){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},r0(n,d,_e);var We=(d&62914560)===d?hc-b():(d&4194048)===d?c0-b():0;if(We=jS(_e,We),We!==null){ma=d,t.cancelPendingCommit=We(S0.bind(null,t,n,d,a,o,u,y,R,V,me,_e,null,le,he)),Ja(t,d,y,!ae);return}}S0(t,n,d,a,o,u,y,R,V)}function uS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(t,n,a,o){n&=~ed,n&=~Nr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Fe(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&Rl(t,a,n)}function gc(){return(zt&6)===0?(ko(0),!1):!0}function rd(){if(xt!==null){if(Gt===0)var t=xt.return;else t=xt,aa=Er=null,Sf(t),gs=null,To=0,t=xt;for(;t!==null;)Xg(t.alternate,t),t=t.return;xt=null}}function As(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,DS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ma=0,rd(),Zt=t,xt=a=na(t.current,null),Mt=n,Gt=0,ii=null,ja=!1,bs=we(t,n),$f=!1,Es=ai=ed=Nr=Za=sn=0,jn=Go=null,td=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),d=1<<u;n|=t[u],o&=~d}return pa=n,Il(),a}function p0(t,n){ft=null,P.H=No,n===ms||n===Wl?(n=Dm(),Gt=3):n===cf?(n=Dm(),Gt=4):Gt=n===If?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,xt===null&&(sn=1,rc(t,pi(n,t.current)))}function m0(){var t=ti.current;return t===null?!0:(Mt&4194048)===Mt?_i===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===_i:!1}function g0(){var t=P.H;return P.H=No,t===null?No:t}function v0(){var t=P.A;return P.A=lS,t}function vc(){sn=4,ja||(Mt&4194048)!==Mt&&ti.current!==null||(bs=!0),(Za&134217727)===0&&(Nr&134217727)===0||Zt===null||Ja(Zt,Mt,ai,!1)}function sd(t,n,a){var o=zt;zt|=2;var u=g0(),d=v0();(Zt!==t||Mt!==n)&&(mc=null,As(t,n)),n=!1;var y=sn;e:do try{if(Gt!==0&&xt!==null){var R=xt,V=ii;switch(Gt){case 8:rd(),y=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var ae=Gt;if(Gt=0,ii=null,Rs(t,R,V,ae),a&&bs){y=0;break e}break;default:ae=Gt,Gt=0,ii=null,Rs(t,R,V,ae)}}fS(),y=sn;break}catch(me){p0(t,me)}while(!0);return n&&t.shellSuspendCounter++,aa=Er=null,zt=o,P.H=u,P.A=d,xt===null&&(Zt=null,Mt=0,Il()),y}function fS(){for(;xt!==null;)_0(xt)}function dS(t,n){var a=zt;zt|=2;var o=g0(),u=v0();Zt!==t||Mt!==n?(mc=null,pc=b()+500,As(t,n)):bs=we(t,n);e:do try{if(Gt!==0&&xt!==null){n=xt;var d=ii;t:switch(Gt){case 1:Gt=0,ii=null,Rs(t,n,d,1);break;case 2:case 9:if(Cm(d)){Gt=0,ii=null,x0(n);break}n=function(){Gt!==2&&Gt!==9||Zt!==t||(Gt=7),ki(t)},d.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Cm(d)?(Gt=0,ii=null,x0(n)):(Gt=0,ii=null,Rs(t,n,d,7));break;case 5:var y=null;switch(xt.tag){case 26:y=xt.memoizedState;case 5:case 27:var R=xt;if(y?av(y):R.stateNode.complete){Gt=0,ii=null;var V=R.sibling;if(V!==null)xt=V;else{var ae=R.return;ae!==null?(xt=ae,_c(ae)):xt=null}break t}}Gt=0,ii=null,Rs(t,n,d,5);break;case 6:Gt=0,ii=null,Rs(t,n,d,6);break;case 8:rd(),sn=6;break e;default:throw Error(s(462))}}hS();break}catch(me){p0(t,me)}while(!0);return aa=Er=null,P.H=o,P.A=u,zt=a,xt!==null?0:(Zt=null,Mt=0,Il(),sn)}function hS(){for(;xt!==null&&!Qe();)_0(xt)}function _0(t){var n=Vg(t.alternate,t,pa);t.memoizedProps=t.pendingProps,n===null?_c(t):xt=n}function x0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=zg(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=zg(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:Sf(n);default:Xg(a,n),n=xt=vm(n,pa),n=Vg(a,n,pa)}t.memoizedProps=t.pendingProps,n===null?_c(t):xt=n}function Rs(t,n,a,o){aa=Er=null,Sf(n),gs=null,To=0;var u=n.return;try{if(tS(t,u,n,a,Mt)){sn=1,rc(t,pi(a,t.current)),xt=null;return}}catch(d){if(u!==null)throw xt=u,d;sn=1,rc(t,pi(a,t.current)),xt=null;return}n.flags&32768?(Et||o===1?t=!0:bs||(Mt&536870912)!==0?t=!1:(ja=t=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),y0(n,t)):_c(n)}function _c(t){var n=t;do{if((n.flags&32768)!==0){y0(n,ja);return}t=n.return;var a=aS(n.alternate,n,pa);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);sn===0&&(sn=5)}function y0(t,n){do{var a=rS(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);sn=6,xt=null}function S0(t,n,a,o,u,d,y,R,V){t.cancelPendingCommit=null;do xc();while(_n!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Yu,Ri(t,a,d,y,R,V),t===Zt&&(xt=Zt=null,Mt=0),Ts=n,Qa=t,ma=a,nd=d,id=u,u0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vS(pe,function(){return A0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=G.p,G.p=2,y=zt,zt|=4;try{sS(t,n,a)}finally{zt=y,G.p=u,P.T=o}}_n=1,M0(),b0(),E0()}}function M0(){if(_n===1){_n=0;var t=Qa,n=Ts,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=zt;zt|=4;try{n0(n,t);var d=_d,y=lm(t.containerInfo),R=d.focusedElem,V=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&om(R.ownerDocument.documentElement,R)){if(V!==null&&Vu(R)){var ae=V.start,me=V.end;if(me===void 0&&(me=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(me,R.value.length);else{var _e=R.ownerDocument||document,le=_e&&_e.defaultView||window;if(le.getSelection){var he=le.getSelection(),We=R.textContent.length,at=Math.min(V.start,We),Yt=V.end===void 0?at:Math.min(V.end,We);!he.extend&&at>Yt&&(y=Yt,Yt=at,at=y);var K=sm(R,at),W=sm(R,Yt);if(K&&W&&(he.rangeCount!==1||he.anchorNode!==K.node||he.anchorOffset!==K.offset||he.focusNode!==W.node||he.focusOffset!==W.offset)){var ne=_e.createRange();ne.setStart(K.node,K.offset),he.removeAllRanges(),at>Yt?(he.addRange(ne),he.extend(W.node,W.offset)):(ne.setEnd(W.node,W.offset),he.addRange(ne))}}}}for(_e=[],he=R;he=he.parentNode;)he.nodeType===1&&_e.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_e.length;R++){var ve=_e[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Uc=!!vd,_d=vd=null}finally{zt=u,G.p=o,P.T=a}}t.current=n,_n=2}}function b0(){if(_n===2){_n=0;var t=Qa,n=Ts,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=zt;zt|=4;try{Qg(t,n.alternate,n)}finally{zt=u,G.p=o,P.T=a}}_n=3}}function E0(){if(_n===4||_n===3){_n=0,F();var t=Qa,n=Ts,a=ma,o=u0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,Ts=Qa=null,T0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ka=null),Jr(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=G.p,G.p=2,P.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];d(R.value,{componentStack:R.stack})}}finally{P.T=n,G.p=u}}(ma&3)!==0&&xc(),ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===ad?Vo++:(Vo=0,ad=t):Vo=0,ko(0)}}function T0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,bo(n)))}function xc(){return M0(),b0(),E0(),A0()}function A0(){if(_n!==5)return!1;var t=Qa,n=nd;nd=0;var a=Jr(ma),o=P.T,u=G.p;try{G.p=32>a?32:a,P.T=null,a=id,id=null;var d=Qa,y=ma;if(_n=0,Ts=Qa=null,ma=0,(zt&6)!==0)throw Error(s(331));var R=zt;if(zt|=4,o0(d.current),a0(d,d.current,y,a),zt=R,ko(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ae,d)}catch{}return!0}finally{G.p=u,P.T=o,T0(t,n)}}function R0(t,n,a){n=pi(a,n),n=zf(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(Pn(t,2),ki(t))}function Vt(t,n,a){if(t.tag===3)R0(t,t,a);else for(;n!==null;){if(n.tag===3){R0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ka===null||!Ka.has(o))){t=pi(a,t),a=Cg(2),o=Xa(n,a,2),o!==null&&(wg(a,o,n,t),Pn(o,2),ki(o));break}}n=n.return}}function od(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new cS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||($f=!0,u.add(a),t=pS.bind(null,t,n,a),n.then(t,t))}function pS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Zt===t&&(Mt&a)===a&&(sn===4||sn===3&&(Mt&62914560)===Mt&&300>b()-hc?(zt&2)===0&&As(t,0):ed|=a,Es===Mt&&(Es=0)),ki(t)}function C0(t,n){n===0&&(n=Bt()),t=Sr(t,n),t!==null&&(Pn(t,n),ki(t))}function mS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),C0(t,a)}function gS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),C0(t,a)}function vS(t,n){return At(t,n)}var yc=null,Cs=null,ld=!1,Sc=!1,cd=!1,$a=0;function ki(t){t!==Cs&&t.next===null&&(Cs===null?yc=Cs=t:Cs=Cs.next=t),Sc=!0,ld||(ld=!0,xS())}function ko(t,n){if(!cd&&Sc){cd=!0;do for(var a=!1,o=yc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Fe(42|t)+1)-1,d&=u&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,L0(o,d))}else d=Mt,d=ye(o,o===Zt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||we(o,d)||(a=!0,L0(o,d));o=o.next}while(a);cd=!1}}function _S(){w0()}function w0(){Sc=ld=!1;var t=0;$a!==0&&wS()&&(t=$a);for(var n=b(),a=null,o=yc;o!==null;){var u=o.next,d=D0(o,n);d===0?(o.next=null,a===null?yc=u:a.next=u,u===null&&(Cs=a)):(a=o,(t!==0||(d&3)!==0)&&(Sc=!0)),o=u}_n!==0&&_n!==5||ko(t),$a!==0&&($a=0)}function D0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Fe(d),R=1<<y,V=u[y];V===-1?((R&a)===0||(R&o)!==0)&&(u[y]=st(R,n)):V<=n&&(t.expiredLanes|=R),d&=~R}if(n=Zt,a=Mt,a=ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&It(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&It(o),Jr(a)){case 2:case 8:a=Me;break;case 32:a=pe;break;case 268435456:a=Ue;break;default:a=pe}return o=U0.bind(null,t),a=At(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&It(o),t.callbackPriority=2,t.callbackNode=null,2}function U0(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(xc()&&t.callbackNode!==a)return null;var o=Mt;return o=ye(t,t===Zt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(d0(t,o,n),D0(t,b()),t.callbackNode!=null&&t.callbackNode===a?U0.bind(null,t):null)}function L0(t,n){if(xc())return null;d0(t,n,!0)}function xS(){US(function(){(zt&6)!==0?At(ge,_S):w0()})}function ud(){if($a===0){var t=hs;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),$a=t}return $a}function N0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wl(""+t)}function O0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function yS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=N0((u[En]||null).action),y=o.submitter;y&&(n=(n=y[En]||null)?N0(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var R=new Nl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var V=y?O0(u,y):new FormData(u);Df(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(R.preventDefault(),V=y?O0(u,y):new FormData(u),Df(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var fd=0;fd<qu.length;fd++){var dd=qu[fd],SS=dd.toLowerCase(),MS=dd[0].toUpperCase()+dd.slice(1);Di(SS,"on"+MS)}Di(fm,"onAnimationEnd"),Di(dm,"onAnimationIteration"),Di(hm,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(Fy,"onTransitionRun"),Di(By,"onTransitionStart"),Di(Hy,"onTransitionCancel"),Di(pm,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function P0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],V=R.instance,ae=R.currentTarget;if(R=R.listener,V!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ae;try{d(u)}catch(me){zl(me)}u.currentTarget=null,d=V}else for(y=0;y<o.length;y++){if(R=o[y],V=R.instance,ae=R.currentTarget,R=R.listener,V!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ae;try{d(u)}catch(me){zl(me)}u.currentTarget=null,d=V}}}}function yt(t,n){var a=n[$r];a===void 0&&(a=n[$r]=new Set);var o=t+"__bubble";a.has(o)||(z0(n,t,2,!1),a.add(o))}function hd(t,n,a){var o=0;n&&(o|=4),z0(a,t,o,n)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function pd(t){if(!t[Mc]){t[Mc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(bS.has(a)||hd(a,!1,t),hd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Mc]||(n[Mc]=!0,hd("selectionchange",!1,n))}}function z0(t,n,a,o){switch(fv(n)){case 2:var u=QS;break;case 8:u=JS;break;default:u=wd}a=u.bind(null,n,a,t),u=void 0,!Nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function md(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Oa(R),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){o=d=y;continue e}R=R.parentNode}}o=o.return}Gp(function(){var ae=d,me=Uu(a),_e=[];e:{var le=mm.get(t);if(le!==void 0){var he=Nl,We=t;switch(t){case"keypress":if(Ul(a)===0)break e;case"keydown":case"keyup":he=gy;break;case"focusin":We="focus",he=Iu;break;case"focusout":We="blur",he=Iu;break;case"beforeblur":case"afterblur":he=Iu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=xy;break;case fm:case dm:case hm:he=oy;break;case pm:he=Sy;break;case"scroll":case"scrollend":he=ny;break;case"wheel":he=by;break;case"copy":case"cut":case"paste":he=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=qp;break;case"toggle":case"beforetoggle":he=Ty}var at=(n&4)!==0,Yt=!at&&(t==="scroll"||t==="scrollend"),K=at?le!==null?le+"Capture":null:le;at=[];for(var W=ae,ne;W!==null;){var ve=W;if(ne=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ne===null||K===null||(ve=fo(W,K),ve!=null&&at.push(Wo(W,ve,ne))),Yt)break;W=W.return}0<at.length&&(le=new he(le,We,null,a,me),_e.push({event:le,listeners:at}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",le&&a!==Du&&(We=a.relatedTarget||a.fromElement)&&(Oa(We)||We[Ci]))break e;if((he||le)&&(le=me.window===me?me:(le=me.ownerDocument)?le.defaultView||le.parentWindow:window,he?(We=a.relatedTarget||a.toElement,he=ae,We=We?Oa(We):null,We!==null&&(Yt=c(We),at=We.tag,We!==Yt||at!==5&&at!==27&&at!==6)&&(We=null)):(he=null,We=ae),he!==We)){if(at=Xp,ve="onMouseLeave",K="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(at=qp,ve="onPointerLeave",K="onPointerEnter",W="pointer"),Yt=he==null?le:vr(he),ne=We==null?le:vr(We),le=new at(ve,W+"leave",he,a,me),le.target=Yt,le.relatedTarget=ne,ve=null,Oa(me)===ae&&(at=new at(K,W+"enter",We,a,me),at.target=ne,at.relatedTarget=Yt,ve=at),Yt=ve,he&&We)t:{for(at=ES,K=he,W=We,ne=0,ve=K;ve;ve=at(ve))ne++;ve=0;for(var tt=W;tt;tt=at(tt))ve++;for(;0<ne-ve;)K=at(K),ne--;for(;0<ve-ne;)W=at(W),ve--;for(;ne--;){if(K===W||W!==null&&K===W.alternate){at=K;break t}K=at(K),W=at(W)}at=null}else at=null;he!==null&&I0(_e,le,he,at,!1),We!==null&&Yt!==null&&I0(_e,Yt,We,at,!0)}}e:{if(le=ae?vr(ae):window,he=le.nodeName&&le.nodeName.toLowerCase(),he==="select"||he==="input"&&le.type==="file")var Dt=em;else if(Jp(le))if(tm)Dt=Py;else{Dt=Ny;var Je=Ly}else he=le.nodeName,!he||he.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ae&&wi(ae.elementType)&&(Dt=em):Dt=Oy;if(Dt&&(Dt=Dt(t,ae))){$p(_e,Dt,a,me);break e}Je&&Je(t,le,ae),t==="focusout"&&ae&&le.type==="number"&&ae.memoizedProps.value!=null&&An(le,"number",le.value)}switch(Je=ae?vr(ae):window,t){case"focusin":(Jp(Je)||Je.contentEditable==="true")&&(rs=Je,ku=ae,yo=null);break;case"focusout":yo=ku=rs=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,cm(_e,a,me);break;case"selectionchange":if(Iy)break;case"keydown":case"keyup":cm(_e,a,me)}var pt;if(Bu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else as?Kp(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(Yp&&a.locale!=="ko"&&(as||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&as&&(pt=Vp()):(Ia=me,Ou="value"in Ia?Ia.value:Ia.textContent,as=!0)),Je=bc(ae,bt),0<Je.length&&(bt=new Wp(bt,t,null,a,me),_e.push({event:bt,listeners:Je}),pt?bt.data=pt:(pt=Qp(a),pt!==null&&(bt.data=pt)))),(pt=Ry?Cy(t,a):wy(t,a))&&(bt=bc(ae,"onBeforeInput"),0<bt.length&&(Je=new Wp("onBeforeInput","beforeinput",null,a,me),_e.push({event:Je,listeners:bt}),Je.data=pt)),yS(_e,t,ae,a,me)}P0(_e,n)})}function Wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function bc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=fo(t,a),u!=null&&o.unshift(Wo(t,u,d)),u=fo(t,n),u!=null&&o.push(Wo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function ES(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function I0(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var R=a,V=R.alternate,ae=R.stateNode;if(R=R.tag,V!==null&&V===o)break;R!==5&&R!==26&&R!==27||ae===null||(V=ae,u?(ae=fo(a,d),ae!=null&&y.unshift(Wo(a,ae,V))):u||(ae=fo(a,d),ae!=null&&y.push(Wo(a,ae,V)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var TS=/\r\n?/g,AS=/\u0000|\uFFFD/g;function F0(t){return(typeof t=="string"?t:""+t).replace(TS,`
`).replace(AS,"")}function B0(t,n){return n=F0(n),F0(t)===n}function qt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||vn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&vn(t,""+o);break;case"className":nt(t,"class",o);break;case"tabIndex":nt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(t,a,o);break;case"style":ts(t,o,d);break;case"data":if(n!=="object"){nt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=wl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=wl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ea);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=wl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Ze(t,"popover",o);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ey.get(a)||a,Ze(t,a,o))}}function gd(t,n,a,o,u,d){switch(a){case"style":ts(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?vn(t,o):(typeof o=="number"||typeof o=="bigint")&&vn(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!de.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[En]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ze(t,a,o)}}}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,d,y,a,null)}}u&&qt(t,n,"srcSet",a.srcSet,a,null),o&&qt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var R=d=y=u=null,V=null,ae=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":y=me;break;case"checked":V=me;break;case"defaultChecked":ae=me;break;case"value":d=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:qt(t,n,o,me,a,null)}}$i(t,d,R,V,ae,y,u,!1);return;case"select":yt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:qt(t,n,u,R,a,null)}n=d,a=y,t.multiple=!!o,n!=null?di(t,!!o,n,!1):a!=null&&di(t,!!o,a,!0);return;case"textarea":yt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:qt(t,n,y,R,a,null)}Rn(t,o,u,d);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":qt(t,n,V,o,a,null));return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<Xo.length;o++)yt(Xo[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(o=a[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,ae,o,a,null)}return;default:if(wi(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&gd(t,n,me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&qt(t,n,R,o,a,null))}function RS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,R=null,V=null,ae=null,me=null;for(he in a){var _e=a[he];if(a.hasOwnProperty(he)&&_e!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":V=_e;default:o.hasOwnProperty(he)||qt(t,n,he,null,o,_e)}}for(var le in o){var he=o[le];if(_e=a[le],o.hasOwnProperty(le)&&(he!=null||_e!=null))switch(le){case"type":d=he;break;case"name":u=he;break;case"checked":ae=he;break;case"defaultChecked":me=he;break;case"value":y=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:he!==_e&&qt(t,n,le,he,o,_e)}}Tn(t,y,R,V,ae,me,d,u);return;case"select":he=y=R=le=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":he=V;default:o.hasOwnProperty(d)||qt(t,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":le=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==V&&qt(t,n,u,d,o,V)}n=R,a=y,o=he,le!=null?di(t,!!a,le,!1):!!o!=!!a&&(n!=null?di(t,!!a,n,!0):di(t,!!a,a?[]:"",!1));return;case"textarea":he=le=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qt(t,n,R,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":le=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&qt(t,n,y,u,o,d)}Ht(t,le,he);return;case"option":for(var We in a)le=a[We],a.hasOwnProperty(We)&&le!=null&&!o.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:qt(t,n,We,null,o,le));for(V in o)le=o[V],he=a[V],o.hasOwnProperty(V)&&le!==he&&(le!=null||he!=null)&&(V==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":qt(t,n,V,le,o,he));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)le=a[at],a.hasOwnProperty(at)&&le!=null&&!o.hasOwnProperty(at)&&qt(t,n,at,null,o,le);for(ae in o)if(le=o[ae],he=a[ae],o.hasOwnProperty(ae)&&le!==he&&(le!=null||he!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:qt(t,n,ae,le,o,he)}return;default:if(wi(n)){for(var Yt in a)le=a[Yt],a.hasOwnProperty(Yt)&&le!==void 0&&!o.hasOwnProperty(Yt)&&gd(t,n,Yt,void 0,o,le);for(me in o)le=o[me],he=a[me],!o.hasOwnProperty(me)||le===he||le===void 0&&he===void 0||gd(t,n,me,le,o,he);return}}for(var K in a)le=a[K],a.hasOwnProperty(K)&&le!=null&&!o.hasOwnProperty(K)&&qt(t,n,K,null,o,le);for(_e in o)le=o[_e],he=a[_e],!o.hasOwnProperty(_e)||le===he||le==null&&he==null||qt(t,n,_e,le,o,he)}function H0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,R=u.duration;if(d&&R&&H0(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ae=V.startTime;if(ae>R)break;var me=V.transferSize,_e=V.initiatorType;me&&H0(_e)&&(V=V.responseEnd,y+=me*(V<R?1:(R-ae)/(V-ae)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var vd=null,_d=null;function Ec(t){return t.nodeType===9?t:t.ownerDocument}function G0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function V0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function xd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yd=null;function wS(){var t=window.event;return t&&t.type==="popstate"?t===yd?!1:(yd=t,!0):(yd=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,X0=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof X0<"u"?function(t){return X0.resolve(null).then(t).catch(LS)}:k0;function LS(t){setTimeout(function(){throw t})}function er(t){return t==="head"}function W0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ls(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")qo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,qo(a);for(var d=a.firstChild;d;){var y=d.nextSibling,R=d.nodeName;d[gr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&qo(t.ownerDocument.body);a=u}while(a);Ls(n)}function q0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sd(a),uo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function NS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[gr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function OS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function Y0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xi(t.nextSibling),t===null))return null;return t}function Md(t){return t.data==="$?"||t.data==="$~"}function bd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function PS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ed=null;function j0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return xi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Z0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function K0(t,n,a){switch(n=Ec(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function qo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);uo(t)}var yi=new Map,Q0=new Set;function Tc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ga=G.d;G.d={f:zS,r:IS,D:FS,C:BS,L:HS,m:GS,X:kS,S:VS,M:XS};function zS(){var t=ga.f(),n=gc();return t||n}function IS(t){var n=Pa(t);n!==null&&n.tag===5&&n.type==="form"?pg(n):ga.r(t)}var ws=typeof document>"u"?null:document;function J0(t,n,a){var o=ws;if(o&&typeof n=="string"&&n){var u=ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Q0.has(u)||(Q0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",t),C(n),o.head.appendChild(n)))}}function FS(t){ga.D(t),J0("dns-prefetch",t,null)}function BS(t,n){ga.C(t,n),J0("preconnect",t,n)}function HS(t,n,a){ga.L(t,n,a);var o=ws;if(o&&t&&n){var u='link[rel="preload"][as="'+ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ot(a.imageSizes)+'"]')):u+='[href="'+ot(t)+'"]';var d=u;switch(n){case"style":d=Ds(t);break;case"script":d=Us(t)}yi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Yo(d))||n==="script"&&o.querySelector(jo(d))||(n=o.createElement("link"),Nn(n,"link",t),C(n),o.head.appendChild(n)))}}function GS(t,n){ga.m(t,n);var a=ws;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ot(o)+'"][href="'+ot(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Us(t)}if(!yi.has(d)&&(t=g({rel:"modulepreload",href:t},n),yi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jo(d)))return}o=a.createElement("link"),Nn(o,"link",t),C(o),a.head.appendChild(o)}}}function VS(t,n,a){ga.S(t,n,a);var o=ws;if(o&&t){var u=za(o).hoistableStyles,d=Ds(t);n=n||"default";var y=u.get(d);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Yo(d)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(d))&&Td(t,a);var V=y=o.createElement("link");C(V),Nn(V,"link",t),V._p=new Promise(function(ae,me){V.onload=ae,V.onerror=me}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ac(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(d,y)}}}function kS(t,n){ga.X(t,n);var a=ws;if(a&&t){var o=za(a).hoistableScripts,u=Us(t),d=o.get(u);d||(d=a.querySelector(jo(u)),d||(t=g({src:t,async:!0},n),(n=yi.get(u))&&Ad(t,n),d=a.createElement("script"),C(d),Nn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function XS(t,n){ga.M(t,n);var a=ws;if(a&&t){var o=za(a).hoistableScripts,u=Us(t),d=o.get(u);d||(d=a.querySelector(jo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&Ad(t,n),d=a.createElement("script"),C(d),Nn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function $0(t,n,a,o){var u=(u=se.current)?Tc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ds(a.href),a=za(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ds(a.href);var d=za(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Yo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),yi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,a),d||WS(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Us(a),a=za(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ds(t){return'href="'+ot(t)+'"'}function Yo(t){return'link[rel="stylesheet"]['+t+"]"}function ev(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function WS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",a),C(n),t.head.appendChild(n))}function Us(t){return'[src="'+ot(t)+'"]'}function jo(t){return"script[async]"+t}function tv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ot(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),C(o),Nn(o,"style",u),Ac(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ds(a.href);var d=t.querySelector(Yo(u));if(d)return n.state.loading|=4,n.instance=d,C(d),d;o=ev(a),(u=yi.get(u))&&Td(o,u),d=(t.ownerDocument||t).createElement("link"),C(d);var y=d;return y._p=new Promise(function(R,V){y.onload=R,y.onerror=V}),Nn(d,"link",o),n.state.loading|=4,Ac(d,a.precedence,t),n.instance=d;case"script":return d=Us(a.src),(u=t.querySelector(jo(d)))?(n.instance=u,C(u),u):(o=a,(u=yi.get(d))&&(o=g({},a),Ad(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),C(u),Nn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ac(o,a.precedence,t));return n.instance}function Ac(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Rc=null;function nv(t,n,a){if(Rc===null){var o=new Map,u=Rc=new Map;u.set(a,o)}else u=Rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[gr]||d[fn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(d):o.set(y,[d])}}return o}function iv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function qS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function av(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function YS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ds(o.href),d=n.querySelector(Yo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Cc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,C(d);return}d=n.ownerDocument||n,o=ev(o),(u=yi.get(u))&&Td(o,u),d=d.createElement("link"),C(d);var y=d;y._p=new Promise(function(R,V){y.onload=R,y.onerror=V}),Nn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Cc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Rd=0;function jS(t,n){return t.stylesheets&&t.count===0&&Dc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Dc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Rd===0&&(Rd=62500*CS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Dc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Rd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Dc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wc=null;function Dc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wc=new Map,n.forEach(ZS,t),wc=null,Cc.call(t))}function ZS(t,n){if(!(n.state.loading&4)){var a=wc.get(t);if(a)var o=a.get(null);else{a=new Map,wc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=Cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Zo={$$typeof:U,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function KS(t,n,a,o,u,d,y,R,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function rv(t,n,a,o,u,d,y,R,V,ae,me,_e){return t=new KS(t,n,a,y,V,ae,me,_e,R),n=1,d===!0&&(n|=24),d=ei(3,null,null,n),t.current=d,d.stateNode=t,n=sf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},uf(d),t}function sv(t){return t?(t=ls,t):ls}function ov(t,n,a,o,u,d){u=sv(u),o.context===null?o.context=u:o.pendingContext=u,o=ka(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Xa(t,o,n),a!==null&&(Zn(a,t,n),Ro(a,t,n))}function lv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Cd(t,n){lv(t,n),(t=t.alternate)&&lv(t,n)}function cv(t){if(t.tag===13||t.tag===31){var n=Sr(t,67108864);n!==null&&Zn(n,t,67108864),Cd(t,67108864)}}function uv(t){if(t.tag===13||t.tag===31){var n=ri();n=oo(n);var a=Sr(t,n);a!==null&&Zn(a,t,n),Cd(t,n)}}var Uc=!0;function QS(t,n,a,o){var u=P.T;P.T=null;var d=G.p;try{G.p=2,wd(t,n,a,o)}finally{G.p=d,P.T=u}}function JS(t,n,a,o){var u=P.T;P.T=null;var d=G.p;try{G.p=8,wd(t,n,a,o)}finally{G.p=d,P.T=u}}function wd(t,n,a,o){if(Uc){var u=Dd(o);if(u===null)md(t,n,o,Lc,a),dv(t,o);else if(eM(u,t,n,a,o))o.stopPropagation();else if(dv(t,o),n&4&&-1<$S.indexOf(t)){for(;u!==null;){var d=Pa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Te(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var V=1<<31-Fe(y);R.entanglements[1]|=V,y&=~V}ki(d),(zt&6)===0&&(pc=b()+500,ko(0))}}break;case 31:case 13:R=Sr(d,2),R!==null&&Zn(R,d,2),gc(),Cd(d,2)}if(d=Dd(o),d===null&&md(t,n,o,Lc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else md(t,n,o,null,a)}}function Dd(t){return t=Uu(t),Ud(t)}var Lc=null;function Ud(t){if(Lc=null,t=Oa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Lc=t,null}function fv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case ge:return 2;case Me:return 8;case pe:case $e:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Ld=!1,tr=null,nr=null,ir=null,Ko=new Map,Qo=new Map,ar=[],$S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dv(t,n){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(n.pointerId)}}function Jo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Pa(n),n!==null&&cv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function eM(t,n,a,o,u){switch(n){case"focusin":return tr=Jo(tr,t,n,a,o,u),!0;case"dragenter":return nr=Jo(nr,t,n,a,o,u),!0;case"mouseover":return ir=Jo(ir,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Ko.set(d,Jo(Ko.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Qo.set(d,Jo(Qo.get(d)||null,t,n,a,o,u)),!0}return!1}function hv(t){var n=Oa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Bi(t.priority,function(){uv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Bi(t.priority,function(){uv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Dd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Du=o,a.target.dispatchEvent(o),Du=null}else return n=Pa(a),n!==null&&cv(n),t.blockedOn=a,!1;n.shift()}return!0}function pv(t,n,a){Nc(t)&&a.delete(n)}function tM(){Ld=!1,tr!==null&&Nc(tr)&&(tr=null),nr!==null&&Nc(nr)&&(nr=null),ir!==null&&Nc(ir)&&(ir=null),Ko.forEach(pv),Qo.forEach(pv)}function Oc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ld||(Ld=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,tM)))}var Pc=null;function mv(t){Pc!==t&&(Pc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pc===t&&(Pc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Ud(o||a)===null)continue;break}var d=Pa(a);d!==null&&(t.splice(n,3),n-=3,Df(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ls(t){function n(V){return Oc(V,t)}tr!==null&&Oc(tr,t),nr!==null&&Oc(nr,t),ir!==null&&Oc(ir,t),Ko.forEach(n),Qo.forEach(n);for(var a=0;a<ar.length;a++){var o=ar[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)hv(a),a.blockedOn===null&&ar.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[En]||null;if(typeof d=="function")y||mv(a);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[En]||null)R=y.formAction;else if(Ud(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),mv(a)}}}function gv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Nd(t){this._internalRoot=t}zc.prototype.render=Nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ri();ov(a,o,t,n,null,null)},zc.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ov(t.current,2,null,t,null,null),gc(),n[Ci]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var n=lo();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ar.length&&n!==0&&n<ar[a].priority;a++);ar.splice(a,0,t),a===0&&hv(t)}};var vv=e.version;if(vv!=="19.2.3")throw Error(s(527,vv,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var nM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{Ae=Ic.inject(nM),Re=Ic}catch{}}return el.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Eg,d=Tg,y=Ag;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=rv(t,1,!1,null,null,a,o,null,u,d,y,gv),t[Ci]=n.current,pd(t),new Nd(n)},el.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=Eg,y=Tg,R=Ag,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=rv(t,1,!0,n,a??null,o,u,V,d,y,R,gv),n.context=sv(null),a=n.current,o=ri(),o=oo(o),u=ka(o),u.callback=null,Xa(a,u,o),a=o,n.current.lanes=a,Pn(n,a),ki(n),t[Ci]=n.current,pd(t),new zc(n)},el.version="19.2.3",el}var Rv;function dM(){if(Rv)return zd.exports;Rv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),zd.exports=fM(),zd.exports}var hM=dM();var Cv="popstate";function pM(r={}){function e(l,c){let{pathname:f="/",search:h="",hash:m=""}=Zr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Mh("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:hl(c))}function s(l,c){Ti(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return gM(e,i,s,r)}function nn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ti(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mM(){return Math.random().toString(36).substring(2,10)}function wv(r,e){return{usr:r.state,key:r.key,idx:e}}function Mh(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Zr(e):e,state:i,key:e&&e.key||s||mM()}}function hl({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Zr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function gM(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){h="POP";let S=v(),_=S==null?null:S-p;p=S,m&&m({action:h,location:A.location,delta:_})}function x(S,_){h="PUSH";let D=Mh(A.location,S,_);i&&i(D,S),p=v()+1;let U=wv(D,p),N=A.createHref(D);try{f.pushState(U,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;l.location.assign(N)}c&&m&&m({action:h,location:A.location,delta:1})}function M(S,_){h="REPLACE";let D=Mh(A.location,S,_);i&&i(D,S),p=v();let U=wv(D,p),N=A.createHref(D);f.replaceState(U,"",N),c&&m&&m({action:h,location:A.location,delta:0})}function E(S){return vM(S)}let A={get action(){return h},get location(){return r(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Cv,g),m=S,()=>{l.removeEventListener(Cv,g),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(S){return f.go(S)}};return A}function vM(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),nn(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:hl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function z_(r,e,i="/"){return _M(r,e,i,!1)}function _M(r,e,i,s){let l=typeof e=="string"?Zr(e):e,c=wa(l.pathname||"/",i);if(c==null)return null;let f=I_(r);xM(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=DM(c);h=CM(f[m],p,s)}return h}function I_(r,e=[],i=[],s="",l=!1){let c=(f,h,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&m)return;nn(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let g=Aa([s,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(nn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),I_(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:AM(g,f.index),routesMeta:x})};return r.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of F_(f.path))c(f,h,!0,m)}),e}function F_(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=F_(s.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function xM(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:RM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var yM=/^:[\w-]+$/,SM=3,MM=2,bM=1,EM=10,TM=-2,Dv=r=>r==="*";function AM(r,e){let i=r.split("/"),s=i.length;return i.some(Dv)&&(s+=TM),e&&(s+=MM),i.filter(l=>!Dv(l)).reduce((l,c)=>l+(yM.test(c)?SM:c===""?bM:EM),s)}function RM(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function CM(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=_u({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=_u({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:Aa([c,g.pathname]),pathnameBase:OM(Aa([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=Aa([c,g.pathnameBase]))}return f}function _u(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=wM(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let E=h[x]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[x];return g&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function wM(r,e=!1,i=!0){Ti(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(s.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function DM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ti(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function wa(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var B_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,UM=r=>B_.test(r);function LM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Zr(r):r,c;if(i)if(UM(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Ti(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=Uv(i.substring(1),"/"):c=Uv(i,e)}else c=e;return{pathname:c,search:PM(s),hash:zM(l)}}function Uv(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Hd(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function NM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function H_(r){let e=NM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function G_(r,e,i,s=!1){let l;typeof r=="string"?l=Zr(r):(l={...r},nn(!l.pathname||!l.pathname.includes("?"),Hd("?","pathname","search",l)),nn(!l.pathname||!l.pathname.includes("#"),Hd("#","pathname","hash",l)),nn(!l.search||!l.search.includes("#"),Hd("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}h=g>=0?e[g]:"/"}let m=LM(l,h),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var Aa=r=>r.join("/").replace(/\/\/+/g,"/"),OM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),PM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,zM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,IM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function FM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function BM(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var V_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function k_(r,e){let i=r;if(typeof i!="string"||!B_.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(V_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=wa(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{Ti(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var X_=["POST","PUT","PATCH","DELETE"];new Set(X_);var HM=["GET",...X_];new Set(HM);var to=ie.createContext(null);to.displayName="DataRouter";var bu=ie.createContext(null);bu.displayName="DataRouterState";var GM=ie.createContext(!1),W_=ie.createContext({isTransitioning:!1});W_.displayName="ViewTransition";var VM=ie.createContext(new Map);VM.displayName="Fetchers";var kM=ie.createContext(null);kM.displayName="Await";var Ai=ie.createContext(null);Ai.displayName="Navigation";var _l=ie.createContext(null);_l.displayName="Location";var Na=ie.createContext({outlet:null,matches:[],isDataRoute:!1});Na.displayName="Route";var Mp=ie.createContext(null);Mp.displayName="RouteError";var q_="REACT_ROUTER_ERROR",XM="REDIRECT",WM="ROUTE_ERROR_RESPONSE";function qM(r){if(r.startsWith(`${q_}:${XM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function YM(r){if(r.startsWith(`${q_}:${WM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new IM(e.status,e.statusText,e.data)}catch{}}function jM(r,{relative:e}={}){nn(xl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=ie.useContext(Ai),{hash:l,pathname:c,search:f}=yl(r,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:Aa([i,c])),s.createHref({pathname:h,search:f,hash:l})}function xl(){return ie.useContext(_l)!=null}function Kr(){return nn(xl(),"useLocation() may be used only in the context of a <Router> component."),ie.useContext(_l).location}var Y_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function j_(r){ie.useContext(Ai).static||ie.useLayoutEffect(r)}function ZM(){let{isDataRoute:r}=ie.useContext(Na);return r?lb():KM()}function KM(){nn(xl(),"useNavigate() may be used only in the context of a <Router> component.");let r=ie.useContext(to),{basename:e,navigator:i}=ie.useContext(Ai),{matches:s}=ie.useContext(Na),{pathname:l}=Kr(),c=JSON.stringify(H_(s)),f=ie.useRef(!1);return j_(()=>{f.current=!0}),ie.useCallback((m,p={})=>{if(Ti(f.current,Y_),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=G_(m,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Aa([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,r])}ie.createContext(null);function yl(r,{relative:e}={}){let{matches:i}=ie.useContext(Na),{pathname:s}=Kr(),l=JSON.stringify(H_(i));return ie.useMemo(()=>G_(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function QM(r,e){return Z_(r,e)}function Z_(r,e,i,s,l){nn(xl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ie.useContext(Ai),{matches:f}=ie.useContext(Na),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",v=h?h.pathnameBase:"/",g=h&&h.route;{let D=g&&g.path||"";Q_(p,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=Kr(),M;if(e){let D=typeof e=="string"?Zr(e):e;nn(v==="/"||D.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${D.pathname}" was given in the \`location\` prop.`),M=D}else M=x;let E=M.pathname||"/",A=E;if(v!=="/"){let D=v.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let S=z_(r,{pathname:A});Ti(g||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ti(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=nb(S&&S.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:Aa([v,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?v:Aa([v,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,i,s,l);return e&&_?ie.createElement(_l.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function JM(){let r=ob(),e=FM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=ie.createElement(ie.Fragment,null,ie.createElement("p",null,"💿 Hey developer 👋"),ie.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ie.createElement("code",{style:c},"ErrorBoundary")," or"," ",ie.createElement("code",{style:c},"errorElement")," prop on your route.")),ie.createElement(ie.Fragment,null,ie.createElement("h2",null,"Unexpected Application Error!"),ie.createElement("h3",{style:{fontStyle:"italic"}},e),i?ie.createElement("pre",{style:l},i):null,f)}var $M=ie.createElement(JM,null),K_=class extends ie.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=YM(r.digest);i&&(r=i)}let e=r!==void 0?ie.createElement(Na.Provider,{value:this.props.routeContext},ie.createElement(Mp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ie.createElement(eb,{error:r},e):e}};K_.contextType=GM;var Gd=new WeakMap;function eb({children:r,error:e}){let{basename:i}=ie.useContext(Ai);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=qM(e.digest);if(s){let l=Gd.get(e);if(l)throw l;let c=k_(s.location,i);if(V_&&!Gd.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Gd.set(e,f),f}return ie.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function tb({routeContext:r,match:e,children:i}){let s=ie.useContext(to);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ie.createElement(Na.Provider,{value:r},i)}function nb(r,e=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);nn(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,m=-1;if(i)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:x,errors:M}=i,E=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&s?(v,g)=>{s(v,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:BM(i.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,x)=>{let M,E=!1,A=null,S=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,A=g.route.errorElement||$M,h&&(m<0&&x===0?(Q_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):m===x&&(E=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,x+1)),D=()=>{let U;return M?U=A:E?U=S:g.route.Component?U=ie.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=v,ie.createElement(tb,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:i!=null},children:U})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?ie.createElement(K_,{location:i.location,revalidation:i.revalidation,component:A,error:M,children:D(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):D()},null)}function bp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ib(r){let e=ie.useContext(to);return nn(e,bp(r)),e}function ab(r){let e=ie.useContext(bu);return nn(e,bp(r)),e}function rb(r){let e=ie.useContext(Na);return nn(e,bp(r)),e}function Ep(r){let e=rb(r),i=e.matches[e.matches.length-1];return nn(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function sb(){return Ep("useRouteId")}function ob(){let r=ie.useContext(Mp),e=ab("useRouteError"),i=Ep("useRouteError");return r!==void 0?r:e.errors?.[i]}function lb(){let{router:r}=ib("useNavigate"),e=Ep("useNavigate"),i=ie.useRef(!1);return j_(()=>{i.current=!0}),ie.useCallback(async(l,c={})=>{Ti(i.current,Y_),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var Lv={};function Q_(r,e,i){!e&&!Lv[r]&&(Lv[r]=!0,Ti(!1,i))}ie.memo(cb);function cb({routes:r,future:e,state:i,onError:s}){return Z_(r,void 0,i,s,e)}function cu(r){nn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ub({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){nn(!xl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),m=ie.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Zr(i));let{pathname:p="/",search:v="",hash:g="",state:x=null,key:M="default"}=i,E=ie.useMemo(()=>{let A=wa(p,h);return A==null?null:{location:{pathname:A,search:v,hash:g,state:x,key:M},navigationType:s}},[h,p,v,g,x,M,s]);return Ti(E!=null,`<Router basename="${h}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:ie.createElement(Ai.Provider,{value:m},ie.createElement(_l.Provider,{children:e,value:E}))}function fb({children:r,location:e}){return QM(bh(r),e)}function bh(r,e=[]){let i=[];return ie.Children.forEach(r,(s,l)=>{if(!ie.isValidElement(s))return;let c=[...e,l];if(s.type===ie.Fragment){i.push.apply(i,bh(s.props.children,c));return}nn(s.type===cu,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nn(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=bh(s.props.children,c)),i.push(f)}),i}var uu="get",fu="application/x-www-form-urlencoded";function Eu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function db(r){return Eu(r)&&r.tagName.toLowerCase()==="button"}function hb(r){return Eu(r)&&r.tagName.toLowerCase()==="form"}function pb(r){return Eu(r)&&r.tagName.toLowerCase()==="input"}function mb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function gb(r,e){return r.button===0&&(!e||e==="_self")&&!mb(r)}var Fc=null;function vb(){if(Fc===null)try{new FormData(document.createElement("form"),0),Fc=!1}catch{Fc=!0}return Fc}var _b=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vd(r){return r!=null&&!_b.has(r)?(Ti(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fu}"`),null):r}function xb(r,e){let i,s,l,c,f;if(hb(r)){let h=r.getAttribute("action");s=h?wa(h,e):null,i=r.getAttribute("method")||uu,l=Vd(r.getAttribute("enctype"))||fu,c=new FormData(r)}else if(db(r)||pb(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||h.getAttribute("action");if(s=m?wa(m,e):null,i=r.getAttribute("formmethod")||h.getAttribute("method")||uu,l=Vd(r.getAttribute("formenctype"))||Vd(h.getAttribute("enctype"))||fu,c=new FormData(h,r),!vb()){let{name:p,type:v,value:g}=r;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(Eu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=uu,s=null,l=fu,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Tp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function yb(r,e,i){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${i}`:e&&wa(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function Sb(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Mb(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function bb(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await Sb(c,i);return f.links?f.links():[]}return[]}));return Rb(s.flat(1).filter(Mb).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Nv(r,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let v=s.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Eb(r,e,{includeHydrateFallback:i}={}){return Tb(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function Tb(r){return[...new Set(r)]}function Ab(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function Rb(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(Ab(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function J_(){let r=ie.useContext(to);return Tp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Cb(){let r=ie.useContext(bu);return Tp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ap=ie.createContext(void 0);Ap.displayName="FrameworkContext";function $_(){let r=ie.useContext(Ap);return Tp(r,"You must render this element inside a <HydratedRouter> element"),r}function wb(r,e){let i=ie.useContext(Ap),[s,l]=ie.useState(!1),[c,f]=ie.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,x=ie.useRef(null);ie.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let A=_=>{_.forEach(D=>{f(D.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[r]),ie.useEffect(()=>{if(s){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,x,{}]:[c,x,{onFocus:tl(h,M),onBlur:tl(m,E),onMouseEnter:tl(p,M),onMouseLeave:tl(v,E),onTouchStart:tl(g,M)}]:[!1,x,{}]}function tl(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function Db({page:r,...e}){let{router:i}=J_(),s=ie.useMemo(()=>z_(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?ie.createElement(Lb,{page:r,matches:s,...e}):null}function Ub(r){let{manifest:e,routeModules:i}=$_(),[s,l]=ie.useState([]);return ie.useEffect(()=>{let c=!1;return bb(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function Lb({page:r,matches:e,...i}){let s=Kr(),{manifest:l,routeModules:c}=$_(),{basename:f}=J_(),{loaderData:h,matches:m}=Cb(),p=ie.useMemo(()=>Nv(r,e,m,l,s,"data"),[r,e,m,l,s]),v=ie.useMemo(()=>Nv(r,e,m,l,s,"assets"),[r,e,m,l,s]),g=ie.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,A=!1;if(e.forEach(_=>{let D=l.routes[_.route.id];!D||!D.hasLoader||(!p.some(U=>U.route.id===_.route.id)&&_.route.id in h&&c[_.route.id]?.shouldRevalidate||D.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let S=yb(r,f,"data");return A&&E.size>0&&S.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,h,s,l,p,e,r,c]),x=ie.useMemo(()=>Eb(v,l),[v,l]),M=Ub(v);return ie.createElement(ie.Fragment,null,g.map(E=>ie.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>ie.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:A})=>ie.createElement("link",{key:E,nonce:i.nonce,...A})))}function Nb(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Ob=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ob&&(window.__reactRouterVersion="7.11.0")}catch{}function Pb({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=ie.useRef();l.current==null&&(l.current=pM({window:s,v5Compat:!0}));let c=l.current,[f,h]=ie.useState({action:c.action,location:c.location}),m=ie.useCallback(p=>{i===!1?h(p):ie.startTransition(()=>h(p))},[i]);return ie.useLayoutEffect(()=>c.listen(m),[c,m]),ie.createElement(ub,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sl=ie.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},E){let{basename:A,unstable_useTransitions:S}=ie.useContext(Ai),_=typeof p=="string"&&ex.test(p),D=k_(p,A);p=D.to;let U=jM(p,{relative:l}),[N,L,z]=wb(s,M),O=Bb(p,{replace:f,state:h,target:m,preventScrollReset:v,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:S});function B(w){e&&e(w),w.defaultPrevented||O(w)}let T=ie.createElement("a",{...M,...z,href:D.absoluteURL||U,onClick:D.isExternal||c?e:B,ref:Nb(E,L),target:m,"data-discover":!_&&i==="render"?"true":void 0});return N&&!_?ie.createElement(ie.Fragment,null,T,ie.createElement(Db,{page:U})):T});Sl.displayName="Link";var zb=ie.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},v){let g=yl(f,{relative:p.relative}),x=Kr(),M=ie.useContext(bu),{navigator:E,basename:A}=ie.useContext(Ai),S=M!=null&&Xb(g)&&h===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,D=x.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(D=D.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&A&&(U=wa(U,A)||U);const N=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let L=D===_||!l&&D.startsWith(_)&&D.charAt(N)==="/",z=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),O={isActive:L,isPending:z,isTransitioning:S},B=L?e:void 0,T;typeof s=="function"?T=s(O):T=[s,L?"active":null,z?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let w=typeof c=="function"?c(O):c;return ie.createElement(Sl,{...p,"aria-current":B,className:T,ref:v,style:w,to:f,viewTransition:h},typeof m=="function"?m(O):m)});zb.displayName="NavLink";var Ib=ie.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=uu,action:h,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},E)=>{let{unstable_useTransitions:A}=ie.useContext(Ai),S=Vb(),_=kb(h,{relative:p}),D=f.toLowerCase()==="get"?"get":"post",U=typeof h=="string"&&ex.test(h),N=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let z=L.nativeEvent.submitter,O=z?.getAttribute("formmethod")||f,B=()=>S(z||L.currentTarget,{fetcherKey:e,method:O,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x});A&&i!==!1?ie.startTransition(()=>B()):B()};return ie.createElement("form",{ref:E,method:D,action:_,onSubmit:s?m:N,...M,"data-discover":!U&&r==="render"?"true":void 0})});Ib.displayName="Form";function Fb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tx(r){let e=ie.useContext(to);return nn(e,Fb(r)),e}function Bb(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let p=ZM(),v=Kr(),g=yl(r,{relative:c});return ie.useCallback(x=>{if(gb(x,e)){x.preventDefault();let M=i!==void 0?i:hl(v)===hl(g),E=()=>p(r,{replace:M,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});m?ie.startTransition(()=>E()):E()}},[v,p,g,i,s,e,r,l,c,f,h,m])}var Hb=0,Gb=()=>`__${String(++Hb)}__`;function Vb(){let{router:r}=tx("useSubmit"),{basename:e}=ie.useContext(Ai),i=sb(),s=r.fetch,l=r.navigate;return ie.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:v,body:g}=xb(c,e);if(f.navigate===!1){let x=f.fetcherKey||Gb();await s(x,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function kb(r,{relative:e}={}){let{basename:i}=ie.useContext(Ai),s=ie.useContext(Na);nn(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...yl(r||".",{relative:e})},f=Kr();if(r==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let v=h.toString();c.search=v?`?${v}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Aa([i,c.pathname])),hl(c)}function Xb(r,{relative:e}={}){let i=ie.useContext(W_);nn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=tx("useViewTransitionState"),l=yl(r,{relative:e});if(!i.isTransitioning)return!1;let c=wa(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=wa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return _u(l.pathname,f)!=null||_u(l.pathname,c)!=null}function nx(r){var e,i,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var l=r.length;for(e=0;e<l;e++)r[e]&&(i=nx(r[e]))&&(s&&(s+=" "),s+=i)}else for(i in r)r[i]&&(s&&(s+=" "),s+=i);return s}function Wb(){for(var r,e,i=0,s="",l=arguments.length;i<l;i++)(r=arguments[i])&&(e=nx(r))&&(s&&(s+=" "),s+=e);return s}const qb=(r,e)=>{const i=new Array(r.length+e.length);for(let s=0;s<r.length;s++)i[s]=r[s];for(let s=0;s<e.length;s++)i[r.length+s]=e[s];return i},Yb=(r,e)=>({classGroupId:r,validator:e}),ix=(r=new Map,e=null,i)=>({nextPart:r,validators:e,classGroupId:i}),xu="-",Ov=[],jb="arbitrary..",Zb=r=>{const e=Qb(r),{conflictingClassGroups:i,conflictingClassGroupModifiers:s}=r;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return Kb(f);const h=f.split(xu),m=h[0]===""&&h.length>1?1:0;return ax(h,m,e)},getConflictingClassGroupIds:(f,h)=>{if(h){const m=s[f],p=i[f];return m?p?qb(p,m):m:p||Ov}return i[f]||Ov}}},ax=(r,e,i)=>{if(r.length-e===0)return i.classGroupId;const l=r[e],c=i.nextPart.get(l);if(c){const p=ax(r,e+1,c);if(p)return p}const f=i.validators;if(f===null)return;const h=e===0?r.join(xu):r.slice(e).join(xu),m=f.length;for(let p=0;p<m;p++){const v=f[p];if(v.validator(h))return v.classGroupId}},Kb=r=>r.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=r.slice(1,-1),i=e.indexOf(":"),s=e.slice(0,i);return s?jb+s:void 0})(),Qb=r=>{const{theme:e,classGroups:i}=r;return Jb(i,e)},Jb=(r,e)=>{const i=ix();for(const s in r){const l=r[s];Rp(l,i,s,e)}return i},Rp=(r,e,i,s)=>{const l=r.length;for(let c=0;c<l;c++){const f=r[c];$b(f,e,i,s)}},$b=(r,e,i,s)=>{if(typeof r=="string"){eE(r,e,i);return}if(typeof r=="function"){tE(r,e,i,s);return}nE(r,e,i,s)},eE=(r,e,i)=>{const s=r===""?e:rx(e,r);s.classGroupId=i},tE=(r,e,i,s)=>{if(iE(r)){Rp(r(s),e,i,s);return}e.validators===null&&(e.validators=[]),e.validators.push(Yb(i,r))},nE=(r,e,i,s)=>{const l=Object.entries(r),c=l.length;for(let f=0;f<c;f++){const[h,m]=l[f];Rp(m,rx(e,h),i,s)}},rx=(r,e)=>{let i=r;const s=e.split(xu),l=s.length;for(let c=0;c<l;c++){const f=s[c];let h=i.nextPart.get(f);h||(h=ix(),i.nextPart.set(f,h)),i=h}return i},iE=r=>"isThemeGetter"in r&&r.isThemeGetter===!0,aE=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,i=Object.create(null),s=Object.create(null);const l=(c,f)=>{i[c]=f,e++,e>r&&(e=0,s=i,i=Object.create(null))};return{get(c){let f=i[c];if(f!==void 0)return f;if((f=s[c])!==void 0)return l(c,f),f},set(c,f){c in i?i[c]=f:l(c,f)}}},Eh="!",Pv=":",rE=[],zv=(r,e,i,s,l)=>({modifiers:r,hasImportantModifier:e,baseClassName:i,maybePostfixModifierPosition:s,isExternal:l}),sE=r=>{const{prefix:e,experimentalParseClassName:i}=r;let s=l=>{const c=[];let f=0,h=0,m=0,p;const v=l.length;for(let A=0;A<v;A++){const S=l[A];if(f===0&&h===0){if(S===Pv){c.push(l.slice(m,A)),m=A+1;continue}if(S==="/"){p=A;continue}}S==="["?f++:S==="]"?f--:S==="("?h++:S===")"&&h--}const g=c.length===0?l:l.slice(m);let x=g,M=!1;g.endsWith(Eh)?(x=g.slice(0,-1),M=!0):g.startsWith(Eh)&&(x=g.slice(1),M=!0);const E=p&&p>m?p-m:void 0;return zv(c,M,x,E)};if(e){const l=e+Pv,c=s;s=f=>f.startsWith(l)?c(f.slice(l.length)):zv(rE,!1,f,void 0,!0)}if(i){const l=s;s=c=>i({className:c,parseClassName:l})}return s},oE=r=>{const e=new Map;return r.orderSensitiveModifiers.forEach((i,s)=>{e.set(i,1e6+s)}),i=>{const s=[];let l=[];for(let c=0;c<i.length;c++){const f=i[c],h=f[0]==="[",m=e.has(f);h||m?(l.length>0&&(l.sort(),s.push(...l),l=[]),s.push(f)):l.push(f)}return l.length>0&&(l.sort(),s.push(...l)),s}},lE=r=>({cache:aE(r.cacheSize),parseClassName:sE(r),sortModifiers:oE(r),...Zb(r)}),cE=/\s+/,uE=(r,e)=>{const{parseClassName:i,getClassGroupId:s,getConflictingClassGroupIds:l,sortModifiers:c}=e,f=[],h=r.trim().split(cE);let m="";for(let p=h.length-1;p>=0;p-=1){const v=h[p],{isExternal:g,modifiers:x,hasImportantModifier:M,baseClassName:E,maybePostfixModifierPosition:A}=i(v);if(g){m=v+(m.length>0?" "+m:m);continue}let S=!!A,_=s(S?E.substring(0,A):E);if(!_){if(!S){m=v+(m.length>0?" "+m:m);continue}if(_=s(E),!_){m=v+(m.length>0?" "+m:m);continue}S=!1}const D=x.length===0?"":x.length===1?x[0]:c(x).join(":"),U=M?D+Eh:D,N=U+_;if(f.indexOf(N)>-1)continue;f.push(N);const L=l(_,S);for(let z=0;z<L.length;++z){const O=L[z];f.push(U+O)}m=v+(m.length>0?" "+m:m)}return m},fE=(...r)=>{let e=0,i,s,l="";for(;e<r.length;)(i=r[e++])&&(s=sx(i))&&(l&&(l+=" "),l+=s);return l},sx=r=>{if(typeof r=="string")return r;let e,i="";for(let s=0;s<r.length;s++)r[s]&&(e=sx(r[s]))&&(i&&(i+=" "),i+=e);return i},dE=(r,...e)=>{let i,s,l,c;const f=m=>{const p=e.reduce((v,g)=>g(v),r());return i=lE(p),s=i.cache.get,l=i.cache.set,c=h,h(m)},h=m=>{const p=s(m);if(p)return p;const v=uE(m,i);return l(m,v),v};return c=f,(...m)=>c(fE(...m))},hE=[],xn=r=>{const e=i=>i[r]||hE;return e.isThemeGetter=!0,e},ox=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,lx=/^\((?:(\w[\w-]*):)?(.+)\)$/i,pE=/^\d+\/\d+$/,mE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,gE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,_E=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ns=r=>pE.test(r),vt=r=>!!r&&!Number.isNaN(Number(r)),sr=r=>!!r&&Number.isInteger(Number(r)),kd=r=>r.endsWith("%")&&vt(r.slice(0,-1)),va=r=>mE.test(r),yE=()=>!0,SE=r=>gE.test(r)&&!vE.test(r),cx=()=>!1,ME=r=>_E.test(r),bE=r=>xE.test(r),EE=r=>!qe(r)&&!Ye(r),TE=r=>no(r,dx,cx),qe=r=>ox.test(r),Or=r=>no(r,hx,SE),Xd=r=>no(r,DE,vt),Iv=r=>no(r,ux,cx),AE=r=>no(r,fx,bE),Bc=r=>no(r,px,ME),Ye=r=>lx.test(r),nl=r=>io(r,hx),RE=r=>io(r,UE),Fv=r=>io(r,ux),CE=r=>io(r,dx),wE=r=>io(r,fx),Hc=r=>io(r,px,!0),no=(r,e,i)=>{const s=ox.exec(r);return s?s[1]?e(s[1]):i(s[2]):!1},io=(r,e,i=!1)=>{const s=lx.exec(r);return s?s[1]?e(s[1]):i:!1},ux=r=>r==="position"||r==="percentage",fx=r=>r==="image"||r==="url",dx=r=>r==="length"||r==="size"||r==="bg-size",hx=r=>r==="length",DE=r=>r==="number",UE=r=>r==="family-name",px=r=>r==="shadow",LE=()=>{const r=xn("color"),e=xn("font"),i=xn("text"),s=xn("font-weight"),l=xn("tracking"),c=xn("leading"),f=xn("breakpoint"),h=xn("container"),m=xn("spacing"),p=xn("radius"),v=xn("shadow"),g=xn("inset-shadow"),x=xn("text-shadow"),M=xn("drop-shadow"),E=xn("blur"),A=xn("perspective"),S=xn("aspect"),_=xn("ease"),D=xn("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],L=()=>[...N(),Ye,qe],z=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],B=()=>[Ye,qe,m],T=()=>[Ns,"full","auto",...B()],w=()=>[sr,"none","subgrid",Ye,qe],H=()=>["auto",{span:["full",sr,Ye,qe]},sr,Ye,qe],q=()=>[sr,"auto",Ye,qe],J=()=>["auto","min","max","fr",Ye,qe],te=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],re=()=>["start","end","center","stretch","center-safe","end-safe"],P=()=>["auto",...B()],G=()=>[Ns,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...B()],X=()=>[r,Ye,qe],Se=()=>[...N(),Fv,Iv,{position:[Ye,qe]}],xe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],I=()=>["auto","cover","contain",CE,TE,{size:[Ye,qe]}],ee=()=>[kd,nl,Or],fe=()=>["","none","full",p,Ye,qe],Ee=()=>["",vt,nl,Or],Ne=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ue=()=>[vt,kd,Fv,Iv],De=()=>["","none",E,Ye,qe],ke=()=>["none",vt,Ye,qe],He=()=>["none",vt,Ye,qe],dt=()=>[vt,Ye,qe],jt=()=>[Ns,"full",...B()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[va],breakpoint:[va],color:[yE],container:[va],"drop-shadow":[va],ease:["in","out","in-out"],font:[EE],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[va],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[va],shadow:[va],spacing:["px",vt],text:[va],"text-shadow":[va],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ns,qe,Ye,S]}],container:["container"],columns:[{columns:[vt,qe,Ye,h]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:L()}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{start:T()}],end:[{end:T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:["visible","invisible","collapse"],z:[{z:[sr,"auto",Ye,qe]}],basis:[{basis:[Ns,"full","auto",h,...B()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[vt,Ns,"auto","initial","none",qe]}],grow:[{grow:["",vt,Ye,qe]}],shrink:[{shrink:["",vt,Ye,qe]}],order:[{order:[sr,"first","last","none",Ye,qe]}],"grid-cols":[{"grid-cols":w()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":w()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":J()}],"auto-rows":[{"auto-rows":J()}],gap:[{gap:B()}],"gap-x":[{"gap-x":B()}],"gap-y":[{"gap-y":B()}],"justify-content":[{justify:[...te(),"normal"]}],"justify-items":[{"justify-items":[...re(),"normal"]}],"justify-self":[{"justify-self":["auto",...re()]}],"align-content":[{content:["normal",...te()]}],"align-items":[{items:[...re(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...re(),{baseline:["","last"]}]}],"place-content":[{"place-content":te()}],"place-items":[{"place-items":[...re(),"baseline"]}],"place-self":[{"place-self":["auto",...re()]}],p:[{p:B()}],px:[{px:B()}],py:[{py:B()}],ps:[{ps:B()}],pe:[{pe:B()}],pt:[{pt:B()}],pr:[{pr:B()}],pb:[{pb:B()}],pl:[{pl:B()}],m:[{m:P()}],mx:[{mx:P()}],my:[{my:P()}],ms:[{ms:P()}],me:[{me:P()}],mt:[{mt:P()}],mr:[{mr:P()}],mb:[{mb:P()}],ml:[{ml:P()}],"space-x":[{"space-x":B()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":B()}],"space-y-reverse":["space-y-reverse"],size:[{size:G()}],w:[{w:[h,"screen",...G()]}],"min-w":[{"min-w":[h,"screen","none",...G()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[f]},...G()]}],h:[{h:["screen","lh",...G()]}],"min-h":[{"min-h":["screen","lh","none",...G()]}],"max-h":[{"max-h":["screen","lh",...G()]}],"font-size":[{text:["base",i,nl,Or]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,Ye,Xd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",kd,qe]}],"font-family":[{font:[RE,qe,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,Ye,qe]}],"line-clamp":[{"line-clamp":[vt,"none",Ye,Xd]}],leading:[{leading:[c,...B()]}],"list-image":[{"list-image":["none",Ye,qe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Ye,qe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:X()}],"text-color":[{text:X()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ne(),"wavy"]}],"text-decoration-thickness":[{decoration:[vt,"from-font","auto",Ye,Or]}],"text-decoration-color":[{decoration:X()}],"underline-offset":[{"underline-offset":[vt,"auto",Ye,qe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ye,qe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ye,qe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Se()}],"bg-repeat":[{bg:xe()}],"bg-size":[{bg:I()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},sr,Ye,qe],radial:["",Ye,qe],conic:[sr,Ye,qe]},wE,AE]}],"bg-color":[{bg:X()}],"gradient-from-pos":[{from:ee()}],"gradient-via-pos":[{via:ee()}],"gradient-to-pos":[{to:ee()}],"gradient-from":[{from:X()}],"gradient-via":[{via:X()}],"gradient-to":[{to:X()}],rounded:[{rounded:fe()}],"rounded-s":[{"rounded-s":fe()}],"rounded-e":[{"rounded-e":fe()}],"rounded-t":[{"rounded-t":fe()}],"rounded-r":[{"rounded-r":fe()}],"rounded-b":[{"rounded-b":fe()}],"rounded-l":[{"rounded-l":fe()}],"rounded-ss":[{"rounded-ss":fe()}],"rounded-se":[{"rounded-se":fe()}],"rounded-ee":[{"rounded-ee":fe()}],"rounded-es":[{"rounded-es":fe()}],"rounded-tl":[{"rounded-tl":fe()}],"rounded-tr":[{"rounded-tr":fe()}],"rounded-br":[{"rounded-br":fe()}],"rounded-bl":[{"rounded-bl":fe()}],"border-w":[{border:Ee()}],"border-w-x":[{"border-x":Ee()}],"border-w-y":[{"border-y":Ee()}],"border-w-s":[{"border-s":Ee()}],"border-w-e":[{"border-e":Ee()}],"border-w-t":[{"border-t":Ee()}],"border-w-r":[{"border-r":Ee()}],"border-w-b":[{"border-b":Ee()}],"border-w-l":[{"border-l":Ee()}],"divide-x":[{"divide-x":Ee()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ee()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ne(),"hidden","none"]}],"divide-style":[{divide:[...Ne(),"hidden","none"]}],"border-color":[{border:X()}],"border-color-x":[{"border-x":X()}],"border-color-y":[{"border-y":X()}],"border-color-s":[{"border-s":X()}],"border-color-e":[{"border-e":X()}],"border-color-t":[{"border-t":X()}],"border-color-r":[{"border-r":X()}],"border-color-b":[{"border-b":X()}],"border-color-l":[{"border-l":X()}],"divide-color":[{divide:X()}],"outline-style":[{outline:[...Ne(),"none","hidden"]}],"outline-offset":[{"outline-offset":[vt,Ye,qe]}],"outline-w":[{outline:["",vt,nl,Or]}],"outline-color":[{outline:X()}],shadow:[{shadow:["","none",v,Hc,Bc]}],"shadow-color":[{shadow:X()}],"inset-shadow":[{"inset-shadow":["none",g,Hc,Bc]}],"inset-shadow-color":[{"inset-shadow":X()}],"ring-w":[{ring:Ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:X()}],"ring-offset-w":[{"ring-offset":[vt,Or]}],"ring-offset-color":[{"ring-offset":X()}],"inset-ring-w":[{"inset-ring":Ee()}],"inset-ring-color":[{"inset-ring":X()}],"text-shadow":[{"text-shadow":["none",x,Hc,Bc]}],"text-shadow-color":[{"text-shadow":X()}],opacity:[{opacity:[vt,Ye,qe]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[vt]}],"mask-image-linear-from-pos":[{"mask-linear-from":ue()}],"mask-image-linear-to-pos":[{"mask-linear-to":ue()}],"mask-image-linear-from-color":[{"mask-linear-from":X()}],"mask-image-linear-to-color":[{"mask-linear-to":X()}],"mask-image-t-from-pos":[{"mask-t-from":ue()}],"mask-image-t-to-pos":[{"mask-t-to":ue()}],"mask-image-t-from-color":[{"mask-t-from":X()}],"mask-image-t-to-color":[{"mask-t-to":X()}],"mask-image-r-from-pos":[{"mask-r-from":ue()}],"mask-image-r-to-pos":[{"mask-r-to":ue()}],"mask-image-r-from-color":[{"mask-r-from":X()}],"mask-image-r-to-color":[{"mask-r-to":X()}],"mask-image-b-from-pos":[{"mask-b-from":ue()}],"mask-image-b-to-pos":[{"mask-b-to":ue()}],"mask-image-b-from-color":[{"mask-b-from":X()}],"mask-image-b-to-color":[{"mask-b-to":X()}],"mask-image-l-from-pos":[{"mask-l-from":ue()}],"mask-image-l-to-pos":[{"mask-l-to":ue()}],"mask-image-l-from-color":[{"mask-l-from":X()}],"mask-image-l-to-color":[{"mask-l-to":X()}],"mask-image-x-from-pos":[{"mask-x-from":ue()}],"mask-image-x-to-pos":[{"mask-x-to":ue()}],"mask-image-x-from-color":[{"mask-x-from":X()}],"mask-image-x-to-color":[{"mask-x-to":X()}],"mask-image-y-from-pos":[{"mask-y-from":ue()}],"mask-image-y-to-pos":[{"mask-y-to":ue()}],"mask-image-y-from-color":[{"mask-y-from":X()}],"mask-image-y-to-color":[{"mask-y-to":X()}],"mask-image-radial":[{"mask-radial":[Ye,qe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ue()}],"mask-image-radial-to-pos":[{"mask-radial-to":ue()}],"mask-image-radial-from-color":[{"mask-radial-from":X()}],"mask-image-radial-to-color":[{"mask-radial-to":X()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":N()}],"mask-image-conic-pos":[{"mask-conic":[vt]}],"mask-image-conic-from-pos":[{"mask-conic-from":ue()}],"mask-image-conic-to-pos":[{"mask-conic-to":ue()}],"mask-image-conic-from-color":[{"mask-conic-from":X()}],"mask-image-conic-to-color":[{"mask-conic-to":X()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Se()}],"mask-repeat":[{mask:xe()}],"mask-size":[{mask:I()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Ye,qe]}],filter:[{filter:["","none",Ye,qe]}],blur:[{blur:De()}],brightness:[{brightness:[vt,Ye,qe]}],contrast:[{contrast:[vt,Ye,qe]}],"drop-shadow":[{"drop-shadow":["","none",M,Hc,Bc]}],"drop-shadow-color":[{"drop-shadow":X()}],grayscale:[{grayscale:["",vt,Ye,qe]}],"hue-rotate":[{"hue-rotate":[vt,Ye,qe]}],invert:[{invert:["",vt,Ye,qe]}],saturate:[{saturate:[vt,Ye,qe]}],sepia:[{sepia:["",vt,Ye,qe]}],"backdrop-filter":[{"backdrop-filter":["","none",Ye,qe]}],"backdrop-blur":[{"backdrop-blur":De()}],"backdrop-brightness":[{"backdrop-brightness":[vt,Ye,qe]}],"backdrop-contrast":[{"backdrop-contrast":[vt,Ye,qe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",vt,Ye,qe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[vt,Ye,qe]}],"backdrop-invert":[{"backdrop-invert":["",vt,Ye,qe]}],"backdrop-opacity":[{"backdrop-opacity":[vt,Ye,qe]}],"backdrop-saturate":[{"backdrop-saturate":[vt,Ye,qe]}],"backdrop-sepia":[{"backdrop-sepia":["",vt,Ye,qe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":B()}],"border-spacing-x":[{"border-spacing-x":B()}],"border-spacing-y":[{"border-spacing-y":B()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Ye,qe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[vt,"initial",Ye,qe]}],ease:[{ease:["linear","initial",_,Ye,qe]}],delay:[{delay:[vt,Ye,qe]}],animate:[{animate:["none",D,Ye,qe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,Ye,qe]}],"perspective-origin":[{"perspective-origin":L()}],rotate:[{rotate:ke()}],"rotate-x":[{"rotate-x":ke()}],"rotate-y":[{"rotate-y":ke()}],"rotate-z":[{"rotate-z":ke()}],scale:[{scale:He()}],"scale-x":[{"scale-x":He()}],"scale-y":[{"scale-y":He()}],"scale-z":[{"scale-z":He()}],"scale-3d":["scale-3d"],skew:[{skew:dt()}],"skew-x":[{"skew-x":dt()}],"skew-y":[{"skew-y":dt()}],transform:[{transform:[Ye,qe,"","none","gpu","cpu"]}],"transform-origin":[{origin:L()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:jt()}],"translate-x":[{"translate-x":jt()}],"translate-y":[{"translate-y":jt()}],"translate-z":[{"translate-z":jt()}],"translate-none":["translate-none"],accent:[{accent:X()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:X()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ye,qe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ye,qe]}],fill:[{fill:["none",...X()]}],"stroke-w":[{stroke:[vt,nl,Or,Xd]}],stroke:[{stroke:["none",...X()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},NE=dE(LE);function Yr(...r){return NE(Wb(r))}function OE({children:r,className:e,gradientSize:i=200,gradientColor:s="#00d4ff",gradientOpacity:l=.15}){const c=ie.useRef(null),[f,h]=ie.useState({x:0,y:0}),[m,p]=ie.useState(0),v=ie.useCallback(M=>{if(!c.current)return;const E=c.current.getBoundingClientRect();h({x:M.clientX-E.left,y:M.clientY-E.top})},[]),g=ie.useCallback(()=>{p(1)},[]),x=ie.useCallback(()=>{p(0)},[]);return Q.jsxs("div",{ref:c,onMouseMove:v,onMouseEnter:g,onMouseLeave:x,className:Yr("relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card transition-all duration-300","hover:border-border-accent hover:bg-bg-card-hover",e),children:[Q.jsx("div",{className:"pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",style:{opacity:m,background:`radial-gradient(${i}px circle at ${f.x}px ${f.y}px, ${s}${Math.round(l*255).toString(16).padStart(2,"0")}, transparent 40%)`}}),Q.jsx("div",{className:"relative z-10",children:r})]})}const PE=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zE=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),Bv=r=>{const e=zE(r);return e.charAt(0).toUpperCase()+e.slice(1)},mx=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),IE=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var FE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const BE=ie.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...h},m)=>ie.createElement("svg",{ref:m,...FE,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:mx("lucide",l),...!c&&!IE(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,v])=>ie.createElement(p,v)),...Array.isArray(c)?c:[c]]));const Fi=(r,e)=>{const i=ie.forwardRef(({className:s,...l},c)=>ie.createElement(BE,{ref:c,iconNode:e,className:mx(`lucide-${PE(Bv(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Bv(r),i};const HE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],gx=Fi("arrow-left",HE);const GE=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],VE=Fi("clock",GE);const kE=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],XE=Fi("dna",kE);const WE=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],qE=Fi("file-text",WE);const YE=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],jE=Fi("gamepad-2",YE);const ZE=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],KE=Fi("mic-off",ZE);const QE=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],JE=Fi("mic",QE);const $E=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],vx=Fi("music",$E);const e1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],t1=Fi("palette",e1);const n1=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],i1=Fi("smartphone",n1);const a1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],r1=Fi("sparkles",a1),s1=[{id:"sensors",title:"Sensor Diagnostics",description:"Test iOS web sensor APIs including motion, orientation, geolocation, and camera.",icon:Q.jsx(i1,{className:"w-8 h-8"}),path:"/sensors",status:"available",gradient:"from-accent-cyan/20 to-accent-purple/20",size:"large"},{id:"colors",title:"Color Picker",description:"EyeDropper API demo",icon:Q.jsx(t1,{className:"w-6 h-6"}),path:"/colors",status:"coming-soon",gradient:"from-accent-green/20 to-accent-cyan/20",size:"small"},{id:"audio",title:"Audio Visualizer",description:"3D audio visualizations with Galaxy & DNA modes",icon:Q.jsx(vx,{className:"w-6 h-6"}),path:"/audio",status:"available",gradient:"from-accent-purple/20 to-accent-red/20",size:"small"},{id:"timer",title:"Timer",description:"Precision timing APIs",icon:Q.jsx(VE,{className:"w-6 h-6"}),path:"/timer",status:"coming-soon",gradient:"from-accent-yellow/20 to-accent-green/20",size:"small"},{id:"clipboard",title:"Clipboard",description:"Clipboard API demo",icon:Q.jsx(qE,{className:"w-6 h-6"}),path:"/clipboard",status:"coming-soon",gradient:"from-accent-cyan/20 to-accent-green/20",size:"small"},{id:"gamepad",title:"Gamepad",description:"Gamepad API tester",icon:Q.jsx(jE,{className:"w-6 h-6"}),path:"/gamepad",status:"coming-soon",gradient:"from-accent-red/20 to-accent-yellow/20",size:"small"}];function o1({app:r,index:e}){const i=r.status==="available",s=Q.jsx(OE,{className:Yr("group cursor-pointer",r.size==="large"?"col-span-2 row-span-2":"",!i&&"opacity-60 cursor-not-allowed"),gradientColor:r.gradient.includes("cyan")?"#00d4ff":"#aa66ff",children:Q.jsxs("div",{className:Yr("p-6 h-full flex flex-col",r.size==="large"?"min-h-[200px]":"min-h-[120px]"),style:{animation:`fadeInUp 0.5s ease-out ${e*.1}s both`},children:[Q.jsx("div",{className:Yr("w-12 h-12 rounded-xl flex items-center justify-center mb-4","bg-gradient-to-br",r.gradient,"text-text-primary","group-hover:scale-110 transition-transform duration-300"),children:r.icon}),Q.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors",children:r.title}),Q.jsx("p",{className:"text-sm text-text-secondary flex-1",children:r.description}),!i&&Q.jsx("span",{className:"mt-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-text-muted/20 text-text-muted w-fit",children:"Coming Soon"}),i&&Q.jsx("span",{className:"mt-3 inline-flex items-center text-xs font-medium text-accent-cyan group-hover:translate-x-1 transition-transform",children:"Open →"})]})});return i?Q.jsx(Sl,{to:r.path,className:"contents",children:s}):s}function l1(){return Q.jsx("div",{className:"min-h-screen p-4 md:p-8",children:Q.jsxs("div",{className:"max-w-4xl mx-auto",children:[Q.jsxs("header",{className:"text-center mb-12",style:{animation:"fadeInUp 0.6s ease-out"},children:[Q.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-4",children:"Nikhil's Apps"}),Q.jsx("p",{className:"text-text-secondary text-lg",children:"A collection of mini apps and experiments"})]}),Q.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:s1.map((r,e)=>Q.jsx(o1,{app:r,index:e},r.id))}),Q.jsx("footer",{className:"text-center mt-12 text-text-muted text-sm",style:{animation:"fadeInUp 0.6s ease-out 0.8s both"},children:Q.jsx("p",{className:"font-mono",children:"Built with React + Vite + Tailwind"})})]})})}const be={container:{padding:"16px",paddingBottom:"48px",maxWidth:"600px",margin:"0 auto"},backLink:{display:"inline-flex",alignItems:"center",gap:"8px",color:"var(--color-text-secondary)",textDecoration:"none",fontSize:"0.875rem",marginBottom:"16px",transition:"color 0.2s"},header:{textAlign:"center",marginBottom:"32px",animation:"fadeInUp 0.6s ease-out"},title:{fontSize:"clamp(1.75rem, 6vw, 2.5rem)",fontWeight:700,margin:0,background:"linear-gradient(135deg, #00d4ff, #aa66ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"-0.02em"},subtitle:{color:"var(--color-text-secondary)",fontSize:"0.9rem",marginTop:"8px",fontWeight:300},section:{marginBottom:"24px"},sectionTitle:{fontSize:"0.7rem",fontWeight:600,color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"12px",paddingLeft:"4px"},card:{background:"var(--color-bg-card)",borderRadius:"16px",padding:"20px",border:"1px solid var(--color-border-subtle)",marginBottom:"12px",transition:"all 0.2s ease"},cardHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},cardTitle:{fontSize:"1rem",fontWeight:600,margin:0,display:"flex",alignItems:"center",gap:"10px"},statusBadge:{padding:"4px 10px",borderRadius:"20px",fontSize:"0.7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},dataGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px",marginTop:"12px"},dataItem:{background:"var(--color-bg-secondary)",borderRadius:"8px",padding:"10px",textAlign:"center"},dataLabel:{fontSize:"0.65rem",color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},dataValue:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.85rem",fontWeight:700,color:"var(--color-accent-cyan)"},button:{width:"100%",padding:"14px 20px",borderRadius:"12px",border:"none",background:"linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(170, 102, 255, 0.15))",color:"var(--color-text-primary)",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",transition:"all 0.2s ease",fontFamily:"inherit",marginTop:"8px"},icon:{fontSize:"1.25rem"},description:{fontSize:"0.8rem",color:"var(--color-text-secondary)",lineHeight:1.5},unavailableNote:{fontSize:"0.75rem",color:"var(--color-text-muted)",fontStyle:"italic",marginTop:"8px"}},_a=r=>{const e={unknown:{bg:"rgba(85, 85, 102, 0.3)",color:"#888"},checking:{bg:"rgba(255, 204, 0, 0.2)",color:"#ffcc00"},available:{bg:"rgba(0, 255, 136, 0.15)",color:"#00ff88"},unavailable:{bg:"rgba(255, 68, 102, 0.15)",color:"#ff4466"},granted:{bg:"rgba(0, 255, 136, 0.15)",color:"#00ff88"},denied:{bg:"rgba(255, 68, 102, 0.15)",color:"#ff4466"},prompt:{bg:"rgba(0, 212, 255, 0.15)",color:"#00d4ff"}};return{...be.statusBadge,background:e[r].bg,color:e[r].color}},Xi=(r,e=1)=>r===null?"—":r.toFixed(e);function c1(){const[r,e]=ie.useState("unknown"),[i,s]=ie.useState("unknown"),[l,c]=ie.useState("unknown"),[f,h]=ie.useState("unknown"),[m,p]=ie.useState("unknown"),[v,g]=ie.useState("unknown"),[x,M]=ie.useState("unknown"),[E,A]=ie.useState("unknown"),[S,_]=ie.useState("unknown"),[D,U]=ie.useState({motion:{acceleration:{x:null,y:null,z:null},rotationRate:{alpha:null,beta:null,gamma:null}},orientation:{alpha:null,beta:null,gamma:null,compass:null},geolocation:{latitude:null,longitude:null,accuracy:null},touch:{force:null,touches:0}});ie.useEffect(()=>{g("vibrate"in navigator?"available":"unavailable"),M("bluetooth"in navigator?"available":"unavailable"),A("NDEFReader"in window?"available":"unavailable"),_("getBattery"in navigator?"available":"unavailable"),p("ontouchstart"in window?"available":"unavailable"),"DeviceMotionEvent"in window?e("prompt"):e("unavailable"),"DeviceOrientationEvent"in window?s("prompt"):s("unavailable"),"geolocation"in navigator?c("prompt"):c("unavailable"),"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices?h("prompt"):h("unavailable")},[]),ie.useEffect(()=>{const T=H=>{const q=H.touches[0];U(J=>({...J,touch:{force:q?.force??null,touches:H.touches.length}}))},w=()=>{U(H=>({...H,touch:{force:null,touches:0}}))};return window.addEventListener("touchstart",T,{passive:!0}),window.addEventListener("touchmove",T,{passive:!0}),window.addEventListener("touchend",w,{passive:!0}),()=>{window.removeEventListener("touchstart",T),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",w)}},[]);const N=ie.useCallback(async()=>{e("checking");try{typeof DeviceMotionEvent.requestPermission=="function"?await DeviceMotionEvent.requestPermission()==="granted"?(e("granted"),window.addEventListener("devicemotion",w=>{U(H=>({...H,motion:{acceleration:{x:w.acceleration?.x??null,y:w.acceleration?.y??null,z:w.acceleration?.z??null},rotationRate:{alpha:w.rotationRate?.alpha??null,beta:w.rotationRate?.beta??null,gamma:w.rotationRate?.gamma??null}}}))})):e("denied"):(e("granted"),window.addEventListener("devicemotion",T=>{U(w=>({...w,motion:{acceleration:{x:T.acceleration?.x??null,y:T.acceleration?.y??null,z:T.acceleration?.z??null},rotationRate:{alpha:T.rotationRate?.alpha??null,beta:T.rotationRate?.beta??null,gamma:T.rotationRate?.gamma??null}}}))}))}catch{e("denied")}},[]),L=ie.useCallback(async()=>{s("checking");try{typeof DeviceOrientationEvent.requestPermission=="function"?await DeviceOrientationEvent.requestPermission()==="granted"?(s("granted"),window.addEventListener("deviceorientation",w=>{U(H=>({...H,orientation:{alpha:w.alpha,beta:w.beta,gamma:w.gamma,compass:w.webkitCompassHeading??null}}))})):s("denied"):(s("granted"),window.addEventListener("deviceorientation",T=>{U(w=>({...w,orientation:{alpha:T.alpha,beta:T.beta,gamma:T.gamma,compass:T.webkitCompassHeading??null}}))}))}catch{s("denied")}},[]),z=ie.useCallback(()=>{c("checking"),navigator.geolocation.getCurrentPosition(T=>{c("granted"),U(w=>({...w,geolocation:{latitude:T.coords.latitude,longitude:T.coords.longitude,accuracy:T.coords.accuracy}}))},()=>{c("denied")},{enableHighAccuracy:!0})},[]),O=ie.useCallback(async()=>{h("checking");try{const T=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});h("granted"),T.getTracks().forEach(w=>w.stop())}catch{h("denied")}},[]),B=T=>({animation:`fadeInUp 0.5s ease-out ${T*.08}s both`});return Q.jsxs("div",{style:be.container,children:[Q.jsxs(Sl,{to:"/",style:be.backLink,className:"hover:text-accent-cyan",children:[Q.jsx(gx,{className:"w-4 h-4"}),"Back to Home"]}),Q.jsxs("header",{style:be.header,children:[Q.jsx("h1",{style:be.title,children:"Sensor Diagnostics"}),Q.jsx("p",{style:be.subtitle,children:"iOS Web API Compatibility Test"})]}),Q.jsxs("section",{style:{...be.section,...B(0)},children:[Q.jsx("h2",{style:be.sectionTitle,children:"Requires Permission"}),Q.jsxs("div",{style:{...be.card,...B(1)},children:[Q.jsxs("div",{style:be.cardHeader,children:[Q.jsxs("h3",{style:be.cardTitle,children:[Q.jsx("span",{style:be.icon,children:"📱"}),"Motion (Accelerometer)"]}),Q.jsx("span",{style:_a(r),children:r})]}),Q.jsx("p",{style:be.description,children:"Device acceleration and rotation rate from gyroscope."}),r==="granted"&&Q.jsxs("div",{style:be.dataGrid,children:[Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Accel X"}),Q.jsx("div",{style:be.dataValue,children:Xi(D.motion.acceleration.x)})]}),Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Accel Y"}),Q.jsx("div",{style:be.dataValue,children:Xi(D.motion.acceleration.y)})]}),Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Accel Z"}),Q.jsx("div",{style:be.dataValue,children:Xi(D.motion.acceleration.z)})]})]}),(r==="prompt"||r==="unknown")&&Q.jsx("button",{style:be.button,onClick:N,children:"Request Permission"})]}),Q.jsxs("div",{style:{...be.card,...B(2)},children:[Q.jsxs("div",{style:be.cardHeader,children:[Q.jsxs("h3",{style:be.cardTitle,children:[Q.jsx("span",{style:be.icon,children:"🧭"}),"Orientation & Compass"]}),Q.jsx("span",{style:_a(i),children:i})]}),Q.jsx("p",{style:be.description,children:"Device orientation angles and compass heading."}),i==="granted"&&Q.jsxs("div",{style:be.dataGrid,children:[Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Alpha"}),Q.jsxs("div",{style:be.dataValue,children:[Xi(D.orientation.alpha),"°"]})]}),Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Beta"}),Q.jsxs("div",{style:be.dataValue,children:[Xi(D.orientation.beta),"°"]})]}),Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Compass"}),Q.jsxs("div",{style:be.dataValue,children:[Xi(D.orientation.compass),"°"]})]})]}),(i==="prompt"||i==="unknown")&&Q.jsx("button",{style:be.button,onClick:L,children:"Request Permission"})]}),Q.jsxs("div",{style:{...be.card,...B(3)},children:[Q.jsxs("div",{style:be.cardHeader,children:[Q.jsxs("h3",{style:be.cardTitle,children:[Q.jsx("span",{style:be.icon,children:"📍"}),"Geolocation"]}),Q.jsx("span",{style:_a(l),children:l})]}),Q.jsx("p",{style:be.description,children:"GPS coordinates and location accuracy."}),l==="granted"&&Q.jsxs("div",{style:be.dataGrid,children:[Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Lat"}),Q.jsx("div",{style:be.dataValue,children:Xi(D.geolocation.latitude,4)})]}),Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Lng"}),Q.jsx("div",{style:be.dataValue,children:Xi(D.geolocation.longitude,4)})]}),Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Accuracy"}),Q.jsxs("div",{style:be.dataValue,children:[Xi(D.geolocation.accuracy,0),"m"]})]})]}),(l==="prompt"||l==="unknown")&&Q.jsx("button",{style:be.button,onClick:z,children:"Request Permission"})]}),Q.jsxs("div",{style:{...be.card,...B(4)},children:[Q.jsxs("div",{style:be.cardHeader,children:[Q.jsxs("h3",{style:be.cardTitle,children:[Q.jsx("span",{style:be.icon,children:"📷"}),"Camera & Microphone"]}),Q.jsx("span",{style:_a(f),children:f})]}),Q.jsx("p",{style:be.description,children:"WebRTC getUserMedia for video and audio capture."}),(f==="prompt"||f==="unknown")&&Q.jsx("button",{style:be.button,onClick:O,children:"Request Permission"})]})]}),Q.jsxs("section",{style:{...be.section,...B(5)},children:[Q.jsx("h2",{style:be.sectionTitle,children:"Always Available"}),Q.jsxs("div",{style:{...be.card,...B(6)},children:[Q.jsxs("div",{style:be.cardHeader,children:[Q.jsxs("h3",{style:be.cardTitle,children:[Q.jsx("span",{style:be.icon,children:"👆"}),"Touch & Force"]}),Q.jsx("span",{style:_a(m),children:m})]}),Q.jsx("p",{style:be.description,children:"Touch events with 3D Touch / Haptic Touch pressure."}),m==="available"&&Q.jsxs("div",{style:be.dataGrid,children:[Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Touches"}),Q.jsx("div",{style:be.dataValue,children:D.touch.touches})]}),Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Force"}),Q.jsx("div",{style:be.dataValue,children:Xi(D.touch.force,2)})]}),Q.jsxs("div",{style:be.dataItem,children:[Q.jsx("div",{style:be.dataLabel,children:"Status"}),Q.jsx("div",{style:be.dataValue,children:D.touch.touches>0?"Active":"Idle"})]})]}),Q.jsx("p",{style:be.unavailableNote,children:"Touch anywhere to see live data"})]})]}),Q.jsxs("section",{style:{...be.section,...B(7)},children:[Q.jsx("h2",{style:be.sectionTitle,children:"Not Supported on iOS Safari"}),Q.jsxs("div",{style:{...be.card,opacity:.7,...B(8)},children:[Q.jsxs("div",{style:be.cardHeader,children:[Q.jsxs("h3",{style:be.cardTitle,children:[Q.jsx("span",{style:be.icon,children:"📳"}),"Vibration API"]}),Q.jsx("span",{style:_a(v),children:v})]}),Q.jsx("p",{style:be.description,children:"Haptic feedback through navigator.vibrate()"}),Q.jsx("p",{style:be.unavailableNote,children:"Apple declined due to privacy concerns"})]}),Q.jsxs("div",{style:{...be.card,opacity:.7,...B(9)},children:[Q.jsxs("div",{style:be.cardHeader,children:[Q.jsxs("h3",{style:be.cardTitle,children:[Q.jsx("span",{style:be.icon,children:"📶"}),"Web Bluetooth"]}),Q.jsx("span",{style:_a(x),children:x})]}),Q.jsx("p",{style:be.description,children:"Connect to nearby Bluetooth devices"}),Q.jsx("p",{style:be.unavailableNote,children:"Apple declined due to fingerprinting risks"})]}),Q.jsxs("div",{style:{...be.card,opacity:.7,...B(10)},children:[Q.jsxs("div",{style:be.cardHeader,children:[Q.jsxs("h3",{style:be.cardTitle,children:[Q.jsx("span",{style:be.icon,children:"📡"}),"Web NFC"]}),Q.jsx("span",{style:_a(E),children:E})]}),Q.jsx("p",{style:be.description,children:"Read/write NFC tags"}),Q.jsx("p",{style:be.unavailableNote,children:"Not exposed to web apps on iOS"})]}),Q.jsxs("div",{style:{...be.card,opacity:.7,...B(11)},children:[Q.jsxs("div",{style:be.cardHeader,children:[Q.jsxs("h3",{style:be.cardTitle,children:[Q.jsx("span",{style:be.icon,children:"🔋"}),"Battery Status"]}),Q.jsx("span",{style:_a(S),children:S})]}),Q.jsx("p",{style:be.description,children:"Battery level and charging status"}),Q.jsx("p",{style:be.unavailableNote,children:"Apple declined due to fingerprinting risks"})]})]}),Q.jsxs("footer",{style:{textAlign:"center",marginTop:"40px",color:"var(--color-text-muted)",fontSize:"0.75rem",...B(12)},children:[Q.jsx("p",{children:"Built for iOS Safari sensor testing"}),Q.jsx("p",{style:{fontFamily:"'JetBrains Mono', monospace",marginTop:"4px"},children:new Date().toLocaleDateString()})]})]})}const Cp="182",u1=0,Hv=1,f1=2,du=1,d1=2,ul=3,mr=0,Qn=1,Ea=2,Ra=0,js=1,Th=2,Gv=3,Vv=4,h1=5,Vr=100,p1=101,m1=102,g1=103,v1=104,_1=200,x1=201,y1=202,S1=203,Ah=204,Rh=205,M1=206,b1=207,E1=208,T1=209,A1=210,R1=211,C1=212,w1=213,D1=214,Ch=0,wh=1,Dh=2,Ks=3,Uh=4,Lh=5,Nh=6,Oh=7,_x=0,U1=1,L1=2,Zi=0,xx=1,yx=2,Sx=3,Mx=4,bx=5,Ex=6,Tx=7,Ax=300,jr=301,Qs=302,Ph=303,zh=304,Tu=306,Ih=1e3,Ta=1001,Fh=1002,On=1003,N1=1004,Gc=1005,Bn=1006,Wd=1007,Wr=1008,Ei=1009,Rx=1010,Cx=1011,pl=1012,wp=1013,Qi=1014,Yi=1015,Da=1016,Dp=1017,Up=1018,ml=1020,wx=35902,Dx=35899,Ux=1021,Lx=1022,Ii=1023,Ua=1026,qr=1027,Nx=1028,Lp=1029,Js=1030,Np=1031,Op=1033,hu=33776,pu=33777,mu=33778,gu=33779,Bh=35840,Hh=35841,Gh=35842,Vh=35843,kh=36196,Xh=37492,Wh=37496,qh=37488,Yh=37489,jh=37490,Zh=37491,Kh=37808,Qh=37809,Jh=37810,$h=37811,ep=37812,tp=37813,np=37814,ip=37815,ap=37816,rp=37817,sp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,dp=36495,hp=36283,pp=36284,mp=36285,gp=36286,O1=3200,P1=0,z1=1,hr="",Mi="srgb",$s="srgb-linear",yu="linear",kt="srgb",Os=7680,kv=519,I1=512,F1=513,B1=514,Pp=515,H1=516,G1=517,zp=518,V1=519,Xv=35044,Wv="300 es",ji=2e3,Su=2001;function Ox(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Mu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function k1(){const r=Mu("canvas");return r.style.display="block",r}const qv={};function Yv(...r){const e="THREE."+r.shift();console.log(e,...r)}function ct(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Lt(...r){const e="THREE."+r.shift();console.error(e,...r)}function gl(...r){const e=r.join(" ");e in qv||(qv[e]=!0,ct(...r))}function X1(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class ao{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qd=Math.PI/180,vp=180/Math.PI;function Ml(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function Tt(r,e,i){return Math.max(e,Math.min(i,r))}function W1(r,e){return(r%e+e)%e}function Yd(r,e,i){return(1-i)*r+i*e}function il(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(e=0,i=0){Xt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],x=c[f+0],M=c[f+1],E=c[f+2],A=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(h>=1){e[i+0]=x,e[i+1]=M,e[i+2]=E,e[i+3]=A;return}if(g!==A||m!==x||p!==M||v!==E){let S=m*x+p*M+v*E+g*A;S<0&&(x=-x,M=-M,E=-E,A=-A,S=-S);let _=1-h;if(S<.9995){const D=Math.acos(S),U=Math.sin(D);_=Math.sin(_*D)/U,h=Math.sin(h*D)/U,m=m*_+x*h,p=p*_+M*h,v=v*_+E*h,g=g*_+A*h}else{m=m*_+x*h,p=p*_+M*h,v=v*_+E*h,g=g*_+A*h;const D=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=D,p*=D,v*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+v*g+m*M-p*x,e[i+1]=m*E+v*x+p*g-h*M,e[i+2]=p*E+v*M+h*x-m*g,e[i+3]=v*E-h*g-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),g=h(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g-x*M*E;break;case"YXZ":this._x=x*v*g+p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g+x*M*E;break;case"ZXY":this._x=x*v*g-p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g-x*M*E;break;case"ZYX":this._x=x*v*g-p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g+x*M*E;break;case"YZX":this._x=x*v*g+p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g-x*M*E;break;case"XZY":this._x=x*v*g-p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g+x*M*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=s+h+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>h&&s>g){const M=2*Math.sqrt(1+s-h-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-s-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-s-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-s*p,this._z=c*v+f*p+s*m-l*h,this._w=f*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,i=0,s=0){ce.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(jv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(jv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),v=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-h*v,this.y=s+m*v+h*p-c*g,this.z=l+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return jd.copy(this).projectOnVector(e),this.sub(jd)}reflect(e){return this.sub(jd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jd=new ce,jv=new bl;class mt{constructor(e,i,s,l,c,f,h,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],v=s[4],g=s[7],x=s[2],M=s[5],E=s[8],A=l[0],S=l[3],_=l[6],D=l[1],U=l[4],N=l[7],L=l[2],z=l[5],O=l[8];return c[0]=f*A+h*D+m*L,c[3]=f*S+h*U+m*z,c[6]=f*_+h*N+m*O,c[1]=p*A+v*D+g*L,c[4]=p*S+v*U+g*z,c[7]=p*_+v*N+g*O,c[2]=x*A+M*D+E*L,c[5]=x*S+M*U+E*z,c[8]=x*_+M*N+E*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*h*p-s*c*v+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=v*f-h*p,x=h*m-v*c,M=p*c-f*m,E=i*g+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(l*p-v*s)*A,e[2]=(h*s-l*f)*A,e[3]=x*A,e[4]=(v*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=M*A,e[7]=(s*m-p*i)*A,e[8]=(f*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Zd.makeScale(e,i)),this}rotate(e){return this.premultiply(Zd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Zd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zd=new mt,Zv=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kv=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q1(){const r={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===kt&&(l.r=Ca(l.r),l.g=Ca(l.g),l.b=Ca(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=Zs(l.r),l.g=Zs(l.g),l.b=Zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===hr?yu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return gl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return gl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[$s]:{primaries:e,whitePoint:s,transfer:yu,toXYZ:Zv,fromXYZ:Kv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:s,transfer:kt,toXYZ:Zv,fromXYZ:Kv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),r}const Ct=q1();function Ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ps;class Y1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ps===void 0&&(Ps=Mu("canvas")),Ps.width=e.width,Ps.height=e.height;const l=Ps.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ps}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Mu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ca(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ca(i[s]/255)*255):i[s]=Ca(i[s]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let j1=0;class Ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Kd(l[f].image)):c.push(Kd(l[f]))}else c=Kd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Kd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Y1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let Z1=0;const Qd=new ce;class Vn extends ao{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ta,l=Ta,c=Bn,f=Wr,h=Ii,m=Ei,p=Vn.DEFAULT_ANISOTROPY,v=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=Ml(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qd).x}get height(){return this.source.getSize(Qd).y}get depth(){return this.source.getSize(Qd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ih:e.x=e.x-Math.floor(e.x);break;case Ta:e.x=e.x<0?0:1;break;case Fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ih:e.y=e.y-Math.floor(e.y);break;case Ta:e.y=e.y<0?0:1;break;case Fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Ax;Vn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,i=0,s=0,l=1){cn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],M=m[5],E=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,N=(M+1)/2,L=(_+1)/2,z=(v+x)/4,O=(g+A)/4,B=(E+S)/4;return U>N&&U>L?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=z/s,c=O/s):N>L?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=z/l,c=B/l):L<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),s=O/c,l=B/c),this.set(s,l,c,i),this}let D=Math.sqrt((S-E)*(S-E)+(g-A)*(g-A)+(x-v)*(x-v));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(g-A)/D,this.z=(x-v)/D,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K1 extends ao{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ip(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends K1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Px extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q1 extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El{constructor(e=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ni):Ni.fromBufferAttribute(c,f),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Vc.copy(s.boundingBox)),Vc.applyMatrix4(e.matrixWorld),this.union(Vc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(al),kc.subVectors(this.max,al),zs.subVectors(e.a,al),Is.subVectors(e.b,al),Fs.subVectors(e.c,al),or.subVectors(Is,zs),lr.subVectors(Fs,Is),Pr.subVectors(zs,Fs);let i=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Pr.z,Pr.y,or.z,0,-or.x,lr.z,0,-lr.x,Pr.z,0,-Pr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Pr.y,Pr.x,0];return!Jd(i,zs,Is,Fs,kc)||(i=[1,0,0,0,1,0,0,0,1],!Jd(i,zs,Is,Fs,kc))?!1:(Xc.crossVectors(or,lr),i=[Xc.x,Xc.y,Xc.z],Jd(i,zs,Is,Fs,kc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xa=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Ni=new ce,Vc=new El,zs=new ce,Is=new ce,Fs=new ce,or=new ce,lr=new ce,Pr=new ce,al=new ce,kc=new ce,Xc=new ce,zr=new ce;function Jd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){zr.fromArray(r,c);const h=l.x*Math.abs(zr.x)+l.y*Math.abs(zr.y)+l.z*Math.abs(zr.z),m=e.dot(zr),p=i.dot(zr),v=s.dot(zr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const J1=new El,rl=new ce,$d=new ce;class Au{constructor(e=new ce,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):J1.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);const i=rl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(rl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add($d)),this.expandByPoint(rl.copy(e.center).sub($d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ya=new ce,eh=new ce,Wc=new ce,cr=new ce,th=new ce,qc=new ce,nh=new ce;class zx{constructor(e=new ce,i=new ce(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){eh.copy(e).add(i).multiplyScalar(.5),Wc.copy(i).sub(e).normalize(),cr.copy(this.origin).sub(eh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Wc),h=cr.dot(this.direction),m=-cr.dot(Wc),p=cr.lengthSq(),v=Math.abs(1-f*f);let g,x,M,E;if(v>0)if(g=f*m-h,x=f*h-m,E=c*v,g>=0)if(x>=-E)if(x<=E){const A=1/v;g*=A,x*=A,M=g*(g+f*x+2*h)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-f*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(f*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(eh).addScaledVector(Wc,x),M}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(h=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,s,l,c){th.subVectors(i,e),qc.subVectors(s,e),nh.crossVectors(th,qc);let f=this.direction.dot(nh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;cr.subVectors(this.origin,e);const m=h*this.direction.dot(qc.crossVectors(cr,qc));if(m<0)return null;const p=h*this.direction.dot(th.cross(cr));if(p<0||m+p>f)return null;const v=-h*cr.dot(nh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,i,s,l,c,f,h,m,p,v,g,x,M,E,A,S){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,v,g,x,M,E,A,S)}set(e,i,s,l,c,f,h,m,p,v,g,x,M,E,A,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=M,_[7]=E,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Bs.setFromMatrixColumn(e,0).length(),c=1/Bs.setFromMatrixColumn(e,1).length(),f=1/Bs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,M=f*g,E=h*v,A=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=x-A*p,i[9]=-h*m,i[2]=A-x*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*v,M=m*g,E=p*v,A=p*g;i[0]=x+A*h,i[4]=E*h-M,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-h,i[2]=M*h-E,i[6]=A+x*h,i[10]=f*m}else if(e.order==="ZXY"){const x=m*v,M=m*g,E=p*v,A=p*g;i[0]=x-A*h,i[4]=-f*g,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*v,i[9]=A-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const x=f*v,M=f*g,E=h*v,A=h*g;i[0]=m*v,i[4]=E*p-M,i[8]=x*p+A,i[1]=m*g,i[5]=A*p+x,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,E=h*m,A=h*p;i[0]=m*v,i[4]=A-x*g,i[8]=E*g+M,i[1]=g,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*g+E,i[10]=x-A*g}else if(e.order==="XZY"){const x=f*m,M=f*p,E=h*m,A=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+A,i[5]=f*v,i[9]=M*g-E,i[2]=E*g-M,i[6]=h*v,i[10]=A*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose($1,e,eT)}lookAt(e,i,s){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),ur.crossVectors(s,si),ur.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ur.crossVectors(s,si)),ur.normalize(),Yc.crossVectors(si,ur),l[0]=ur.x,l[4]=Yc.x,l[8]=si.x,l[1]=ur.y,l[5]=Yc.y,l[9]=si.y,l[2]=ur.z,l[6]=Yc.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],v=s[1],g=s[5],x=s[9],M=s[13],E=s[2],A=s[6],S=s[10],_=s[14],D=s[3],U=s[7],N=s[11],L=s[15],z=l[0],O=l[4],B=l[8],T=l[12],w=l[1],H=l[5],q=l[9],J=l[13],te=l[2],re=l[6],P=l[10],G=l[14],X=l[3],Se=l[7],xe=l[11],I=l[15];return c[0]=f*z+h*w+m*te+p*X,c[4]=f*O+h*H+m*re+p*Se,c[8]=f*B+h*q+m*P+p*xe,c[12]=f*T+h*J+m*G+p*I,c[1]=v*z+g*w+x*te+M*X,c[5]=v*O+g*H+x*re+M*Se,c[9]=v*B+g*q+x*P+M*xe,c[13]=v*T+g*J+x*G+M*I,c[2]=E*z+A*w+S*te+_*X,c[6]=E*O+A*H+S*re+_*Se,c[10]=E*B+A*q+S*P+_*xe,c[14]=E*T+A*J+S*G+_*I,c[3]=D*z+U*w+N*te+L*X,c[7]=D*O+U*H+N*re+L*Se,c[11]=D*B+U*q+N*P+L*xe,c[15]=D*T+U*J+N*G+L*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],M=e[14],E=e[3],A=e[7],S=e[11],_=e[15],D=m*M-p*x,U=h*M-p*g,N=h*x-m*g,L=f*M-p*v,z=f*x-m*v,O=f*g-h*v;return i*(A*D-S*U+_*N)-s*(E*D-S*L+_*z)+l*(E*U-A*L+_*O)-c*(E*N-A*z+S*O)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],M=e[11],E=e[12],A=e[13],S=e[14],_=e[15],D=g*S*p-A*x*p+A*m*M-h*S*M-g*m*_+h*x*_,U=E*x*p-v*S*p-E*m*M+f*S*M+v*m*_-f*x*_,N=v*A*p-E*g*p+E*h*M-f*A*M-v*h*_+f*g*_,L=E*g*m-v*A*m-E*h*x+f*A*x+v*h*S-f*g*S,z=i*D+s*U+l*N+c*L;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=D*O,e[1]=(A*x*c-g*S*c-A*l*M+s*S*M+g*l*_-s*x*_)*O,e[2]=(h*S*c-A*m*c+A*l*p-s*S*p-h*l*_+s*m*_)*O,e[3]=(g*m*c-h*x*c-g*l*p+s*x*p+h*l*M-s*m*M)*O,e[4]=U*O,e[5]=(v*S*c-E*x*c+E*l*M-i*S*M-v*l*_+i*x*_)*O,e[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*_-i*m*_)*O,e[7]=(f*x*c-v*m*c+v*l*p-i*x*p-f*l*M+i*m*M)*O,e[8]=N*O,e[9]=(E*g*c-v*A*c-E*s*M+i*A*M+v*s*_-i*g*_)*O,e[10]=(f*A*c-E*h*c+E*s*p-i*A*p-f*s*_+i*h*_)*O,e[11]=(v*h*c-f*g*c-v*s*p+i*g*p+f*s*M-i*h*M)*O,e[12]=L*O,e[13]=(v*A*l-E*g*l+E*s*x-i*A*x-v*s*S+i*g*S)*O,e[14]=(E*h*l-f*A*l-E*s*m+i*A*m+f*s*S-i*h*S)*O,e[15]=(f*g*l-v*h*l+v*s*m-i*g*m-f*s*x+i*h*x)*O,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,v=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,g=h+h,x=c*p,M=c*v,E=c*g,A=f*v,S=f*g,_=h*g,D=m*p,U=m*v,N=m*g,L=s.x,z=s.y,O=s.z;return l[0]=(1-(A+_))*L,l[1]=(M+N)*L,l[2]=(E-U)*L,l[3]=0,l[4]=(M-N)*z,l[5]=(1-(x+_))*z,l[6]=(S+D)*z,l[7]=0,l[8]=(E+U)*O,l[9]=(S-D)*O,l[10]=(1-(x+A))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Bs.set(l[0],l[1],l[2]).length();const f=Bs.set(l[4],l[5],l[6]).length(),h=Bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Oi.copy(this);const p=1/c,v=1/f,g=1/h;return Oi.elements[0]*=p,Oi.elements[1]*=p,Oi.elements[2]*=p,Oi.elements[4]*=v,Oi.elements[5]*=v,Oi.elements[6]*=v,Oi.elements[8]*=g,Oi.elements[9]*=g,Oi.elements[10]*=g,i.setFromRotationMatrix(Oi),s.x=c,s.y=f,s.z=h,this}makePerspective(e,i,s,l,c,f,h=ji,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(s-l),x=(i+e)/(i-e),M=(s+l)/(s-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(h===ji)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===Su)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=ji,m=!1){const p=this.elements,v=2/(i-e),g=2/(s-l),x=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(h===ji)E=-2/(f-c),A=-(f+c)/(f-c);else if(h===Su)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Bs=new ce,Oi=new un,$1=new ce(0,0,0),eT=new ce(1,1,1),ur=new ce,Yc=new ce,si=new ce,Qv=new un,Jv=new bl;class La{constructor(e=0,i=0,s=0,l=La.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Jv.setFromEuler(this),this.setFromQuaternion(Jv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}La.DEFAULT_ORDER="XYZ";class Ix{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tT=0;const $v=new ce,Hs=new bl,Sa=new un,jc=new ce,sl=new ce,nT=new ce,iT=new bl,e_=new ce(1,0,0),t_=new ce(0,1,0),n_=new ce(0,0,1),i_={type:"added"},aT={type:"removed"},Gs={type:"childadded",child:null},ih={type:"childremoved",child:null};class Jn extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new ce,i=new La,s=new bl,l=new ce(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new mt}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ix,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Hs.setFromAxisAngle(e,i),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,i){return Hs.setFromAxisAngle(e,i),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,i){return $v.copy(e).applyQuaternion(this.quaternion),this.position.add($v.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?jc.copy(e):jc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(sl,jc,this.up):Sa.lookAt(jc,sl,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Hs.setFromRotationMatrix(Sa),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i_),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(aT),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i_),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,nT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,iT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Jn.DEFAULT_UP=new ce(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new ce,Ma=new ce,ah=new ce,ba=new ce,Vs=new ce,ks=new ce,a_=new ce,rh=new ce,sh=new ce,oh=new ce,lh=new cn,ch=new cn,uh=new cn;class zi{constructor(e=new ce,i=new ce,s=new ce){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Pi.subVectors(e,i),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Pi.subVectors(l,i),Ma.subVectors(s,i),ah.subVectors(e,i);const f=Pi.dot(Pi),h=Pi.dot(Ma),m=Pi.dot(ah),p=Ma.dot(Ma),v=Ma.dot(ah),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-h*v)*x,E=(f*v-h*m)*x;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(f,ba.y),m.addScaledVector(h,ba.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return lh.setScalar(0),ch.setScalar(0),uh.setScalar(0),lh.fromBufferAttribute(e,i),ch.fromBufferAttribute(e,s),uh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(lh,c.x),f.addScaledVector(ch,c.y),f.addScaledVector(uh,c.z),f}static isFrontFacing(e,i,s,l){return Pi.subVectors(s,i),Ma.subVectors(e,i),Pi.cross(Ma).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Pi.cross(Ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return zi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return zi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Vs.subVectors(l,s),ks.subVectors(c,s),rh.subVectors(e,s);const m=Vs.dot(rh),p=ks.dot(rh);if(m<=0&&p<=0)return i.copy(s);sh.subVectors(e,l);const v=Vs.dot(sh),g=ks.dot(sh);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(Vs,f);oh.subVectors(e,c);const M=Vs.dot(oh),E=ks.dot(oh);if(E>=0&&M<=E)return i.copy(c);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(ks,h);const S=v*E-M*g;if(S<=0&&g-v>=0&&M-E>=0)return a_.subVectors(c,l),h=(g-v)/(g-v+(M-E)),i.copy(l).addScaledVector(a_,h);const _=1/(S+A+x);return f=A*_,h=x*_,i.copy(s).addScaledVector(Vs,f).addScaledVector(ks,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function fh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class wt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ct.workingColorSpace){if(e=W1(e,1),i=Tt(i,0,1),s=Tt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=fh(f,c,e+1/3),this.g=fh(f,c,e),this.b=fh(f,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=Mi){function s(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Mi){const s=Fx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Ct.workingToColorSpace(Fn.copy(this),e),Math.round(Tt(Fn.r*255,0,255))*65536+Math.round(Tt(Fn.g*255,0,255))*256+Math.round(Tt(Fn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=v<=.5?g/(f+h):g/(2-f-h),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Mi){Ct.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,s=Fn.g,l=Fn.b;return e!==Mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+i,fr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(fr),e.getHSL(Zc);const s=Yd(fr.h,Zc.h,i),l=Yd(fr.s,Zc.s,i),c=Yd(fr.l,Zc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new wt;wt.NAMES=Fx;let rT=0;class Tl extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=js,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(s.blending=this.blending),this.side!==mr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ah&&(s.blendSrc=this.blendSrc),this.blendDst!==Rh&&(s.blendDst=this.blendDst),this.blendEquation!==Vr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kr extends Tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new La,this.combine=_x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new ce,Kc=new Xt;let sT=0;class ci{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Xv,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Kc.fromBufferAttribute(this,i),Kc.applyMatrix3(e),this.setXY(i,Kc.x,Kc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=il(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=il(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=il(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=il(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=il(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xv&&(e.usage=this.usage),e}}class Bx extends ci{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Hx extends ci{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class kn extends ci{constructor(e,i,s){super(new Float32Array(e),i,s)}}let oT=0;const Si=new un,dh=new Jn,Xs=new ce,oi=new El,ol=new El,bn=new ce;class ui extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ox(e)?Hx:Bx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new mt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,s){return Si.makeTranslation(e,i,s),this.applyMatrix4(Si),this}scale(e,i,s){return Si.makeScale(e,i,s),this.applyMatrix4(Si),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new kn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Au);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];ol.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(oi.min,ol.min),oi.expandByPoint(bn),bn.addVectors(oi.max,ol.max),oi.expandByPoint(bn)):(oi.expandByPoint(ol.min),oi.expandByPoint(ol.max))}oi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)bn.fromBufferAttribute(h,p),m&&(Xs.fromBufferAttribute(e,p),bn.add(Xs)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let B=0;B<s.count;B++)h[B]=new ce,m[B]=new ce;const p=new ce,v=new ce,g=new ce,x=new Xt,M=new Xt,E=new Xt,A=new ce,S=new ce;function _(B,T,w){p.fromBufferAttribute(s,B),v.fromBufferAttribute(s,T),g.fromBufferAttribute(s,w),x.fromBufferAttribute(c,B),M.fromBufferAttribute(c,T),E.fromBufferAttribute(c,w),v.sub(p),g.sub(p),M.sub(x),E.sub(x);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(H),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(H),h[B].add(A),h[T].add(A),h[w].add(A),m[B].add(S),m[T].add(S),m[w].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let B=0,T=D.length;B<T;++B){const w=D[B],H=w.start,q=w.count;for(let J=H,te=H+q;J<te;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const U=new ce,N=new ce,L=new ce,z=new ce;function O(B){L.fromBufferAttribute(l,B),z.copy(L);const T=h[B];U.copy(T),U.sub(L.multiplyScalar(L.dot(T))).normalize(),N.crossVectors(z,T);const H=N.dot(m[B])<0?-1:1;f.setXYZW(B,U.x,U.y,U.z,H)}for(let B=0,T=D.length;B<T;++B){const w=D[B],H=w.start,q=w.count;for(let J=H,te=H+q;J<te;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ci(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new ce,c=new ce,f=new ce,h=new ce,m=new ce,p=new ce,v=new ce,g=new ce;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),h.add(v),m.add(v),p.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,g=h.normalized,x=new p.constructor(m.length*v);let M=0,E=0;for(let A=0,S=m.length;A<S;A++){h.isInterleavedBufferAttribute?M=m[A]*h.data.stride+h.offset:M=m[A]*v;for(let _=0;_<v;_++)x[E++]=p[M++]}return new ci(x,v,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ui,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const x=p[v],M=e(x,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r_=new un,Ir=new zx,Qc=new Au,s_=new ce,Jc=new ce,$c=new ce,eu=new ce,hh=new ce,tu=new ce,o_=new ce,nu=new ce;class li extends Jn{constructor(e=new ui,i=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){tu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(hh.fromBufferAttribute(g,e),f?tu.addScaledVector(hh,v):tu.addScaledVector(hh.sub(i),v))}i.add(tu)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Qc.copy(s.boundingSphere),Qc.applyMatrix4(c),Ir.copy(e.ray).recast(e.near),!(Qc.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Qc,s_)===null||Ir.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(r_.copy(c).invert(),Ir.copy(e.ray).applyMatrix4(r_),!(s.boundingBox!==null&&Ir.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ir)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const S=x[E],_=f[S.materialIndex],D=Math.max(S.start,M.start),U=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let N=D,L=U;N<L;N+=3){const z=h.getX(N),O=h.getX(N+1),B=h.getX(N+2);l=iu(this,_,e,s,p,v,g,z,O,B),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let S=E,_=A;S<_;S+=3){const D=h.getX(S),U=h.getX(S+1),N=h.getX(S+2);l=iu(this,f,e,s,p,v,g,D,U,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const S=x[E],_=f[S.materialIndex],D=Math.max(S.start,M.start),U=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let N=D,L=U;N<L;N+=3){const z=N,O=N+1,B=N+2;l=iu(this,_,e,s,p,v,g,z,O,B),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=E,_=A;S<_;S+=3){const D=S,U=S+1,N=S+2;l=iu(this,f,e,s,p,v,g,D,U,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function lT(r,e,i,s,l,c,f,h){let m;if(e.side===Qn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===mr,h),m===null)return null;nu.copy(h),nu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(nu);return p<i.near||p>i.far?null:{distance:p,point:nu.clone(),object:r}}function iu(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Jc),r.getVertexPosition(m,$c),r.getVertexPosition(p,eu);const v=lT(r,e,i,s,Jc,$c,eu,o_);if(v){const g=new ce;zi.getBarycoord(o_,Jc,$c,eu,g),l&&(v.uv=zi.getInterpolatedAttribute(l,h,m,p,g,new Xt)),c&&(v.uv1=zi.getInterpolatedAttribute(c,h,m,p,g,new Xt)),f&&(v.normal=zi.getInterpolatedAttribute(f,h,m,p,g,new ce),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new ce,materialIndex:0};zi.getNormal(Jc,$c,eu,x.normal),v.face=x,v.barycoord=g}return v}class Al extends ui{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(v,3)),this.setAttribute("uv",new kn(g,2));function E(A,S,_,D,U,N,L,z,O,B,T){const w=N/O,H=L/B,q=N/2,J=L/2,te=z/2,re=O+1,P=B+1;let G=0,X=0;const Se=new ce;for(let xe=0;xe<P;xe++){const I=xe*H-J;for(let ee=0;ee<re;ee++){const fe=ee*w-q;Se[A]=fe*D,Se[S]=I*U,Se[_]=te,p.push(Se.x,Se.y,Se.z),Se[A]=0,Se[S]=0,Se[_]=z>0?1:-1,v.push(Se.x,Se.y,Se.z),g.push(ee/O),g.push(1-xe/B),G+=1}}for(let xe=0;xe<B;xe++)for(let I=0;I<O;I++){const ee=x+I+re*xe,fe=x+I+re*(xe+1),Ee=x+(I+1)+re*(xe+1),Ne=x+(I+1)+re*xe;m.push(ee,fe,Ne),m.push(fe,Ee,Ne),X+=6}h.addGroup(M,X,T),M+=X,x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Gn(r){const e={};for(let i=0;i<r.length;i++){const s=eo(r[i]);for(const l in s)e[l]=s[l]}return e}function cT(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Gx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const uT={clone:eo,merge:Gn};var fT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fT,this.fragmentShader=dT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=cT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Vx extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new ce,l_=new Xt,c_=new Xt;class bi extends Vx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=vp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(qd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,i){return this.getViewBounds(e,l_,c_),i.subVectors(c_,l_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ws=-90,qs=1;class hT extends Jn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(Ws,qs,e,i);l.layers=this.layers,this.add(l);const c=new bi(Ws,qs,e,i);c.layers=this.layers,this.add(c);const f=new bi(Ws,qs,e,i);f.layers=this.layers,this.add(f);const h=new bi(Ws,qs,e,i);h.layers=this.layers,this.add(h);const m=new bi(Ws,qs,e,i);m.layers=this.layers,this.add(m);const p=new bi(Ws,qs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Su)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,x,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class kx extends Vn{constructor(e=[],i=jr,s,l,c,f,h,m,p,v){super(e,i,s,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xx extends Ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new kx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Al(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:eo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ra});c.uniforms.tEquirect.value=i;const f=new li(l,c),h=i.minFilter;return i.minFilter===Wr&&(i.minFilter=Bn),new hT(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class fl extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pT={type:"move"};class ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,s),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(pT)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new fl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class mT extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new La,this.environmentIntensity=1,this.environmentRotation=new La,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class gT extends Vn{constructor(e=null,i=1,s=1,l,c,f,h,m,p=On,v=On,g,x){super(null,f,h,m,p,v,l,c,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mh=new ce,vT=new ce,_T=new mt;class Gr{constructor(e=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=mh.subVectors(s,i).cross(vT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(mh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||_T.getNormalMatrix(e),l=this.coplanarPoint(mh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Au,xT=new Xt(.5,.5),au=new ce;class Wx{constructor(e=new Gr,i=new Gr,s=new Gr,l=new Gr,c=new Gr,f=new Gr){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ji,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],M=c[7],E=c[8],A=c[9],S=c[10],_=c[11],D=c[12],U=c[13],N=c[14],L=c[15];if(l[0].setComponents(p-f,M-v,_-E,L-D).normalize(),l[1].setComponents(p+f,M+v,_+E,L+D).normalize(),l[2].setComponents(p+h,M+g,_+A,L+U).normalize(),l[3].setComponents(p-h,M-g,_-A,L-U).normalize(),s)l[4].setComponents(m,x,S,N).normalize(),l[5].setComponents(p-m,M-x,_-S,L-N).normalize();else if(l[4].setComponents(p-m,M-x,_-S,L-N).normalize(),i===ji)l[5].setComponents(p+m,M+x,_+S,L+N).normalize();else if(i===Su)l[5].setComponents(m,x,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const i=xT.distanceTo(e.center);return Fr.radius=.7071067811865476+i,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(au.x=l.normal.x>0?e.max.x:e.min.x,au.y=l.normal.y>0?e.max.y:e.min.y,au.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(au)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qx extends Tl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const u_=new un,_p=new zx,ru=new Au,su=new ce;class yT extends Jn{constructor(e=new ui,i=new qx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ru.copy(s.boundingSphere),ru.applyMatrix4(l),ru.radius+=c,e.ray.intersectsSphere(ru)===!1)return;u_.copy(l).invert(),_p.copy(e.ray).applyMatrix4(u_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const x=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=x,A=M;E<A;E++){const S=p.getX(E);su.fromBufferAttribute(g,S),f_(su,S,m,l,e,i,this)}}else{const x=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let E=x,A=M;E<A;E++)su.fromBufferAttribute(g,E),f_(su,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function f_(r,e,i,s,l,c,f){const h=_p.distanceSqToPoint(r);if(h<i){const m=new ce;_p.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class vl extends Vn{constructor(e,i,s=Qi,l,c,f,h=On,m=On,p,v=Ua,g=1){if(v!==Ua&&v!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,c,f,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ST extends vl{constructor(e,i=Qi,s=jr,l,c,f=On,h=On,m,p=Ua){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,i,s,l,c,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yx extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fp extends ui{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],x=[],M=[];let E=0;const A=[],S=s/2;let _=0;D(),f===!1&&(e>0&&U(!0),i>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(x,3)),this.setAttribute("uv",new kn(M,2));function D(){const N=new ce,L=new ce;let z=0;const O=(i-e)/s;for(let B=0;B<=c;B++){const T=[],w=B/c,H=w*(i-e)+e;for(let q=0;q<=l;q++){const J=q/l,te=J*m+h,re=Math.sin(te),P=Math.cos(te);L.x=H*re,L.y=-w*s+S,L.z=H*P,g.push(L.x,L.y,L.z),N.set(re,O,P).normalize(),x.push(N.x,N.y,N.z),M.push(J,1-w),T.push(E++)}A.push(T)}for(let B=0;B<l;B++)for(let T=0;T<c;T++){const w=A[T][B],H=A[T+1][B],q=A[T+1][B+1],J=A[T][B+1];(e>0||T!==0)&&(v.push(w,H,J),z+=3),(i>0||T!==c-1)&&(v.push(H,q,J),z+=3)}p.addGroup(_,z,0),_+=z}function U(N){const L=E,z=new Xt,O=new ce;let B=0;const T=N===!0?e:i,w=N===!0?1:-1;for(let q=1;q<=l;q++)g.push(0,S*w,0),x.push(0,w,0),M.push(.5,.5),E++;const H=E;for(let q=0;q<=l;q++){const te=q/l*m+h,re=Math.cos(te),P=Math.sin(te);O.x=T*P,O.y=S*w,O.z=T*re,g.push(O.x,O.y,O.z),x.push(0,w,0),z.x=re*.5+.5,z.y=P*.5*w+.5,M.push(z.x,z.y),E++}for(let q=0;q<l;q++){const J=L+q,te=H+q;N===!0?v.push(te,te+1,J):v.push(te+1,te,J),B+=3}p.addGroup(_,B,N===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ru extends ui{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,g=e/h,x=i/m,M=[],E=[],A=[],S=[];for(let _=0;_<v;_++){const D=_*x-f;for(let U=0;U<p;U++){const N=U*g-c;E.push(N,-D,0),A.push(0,0,1),S.push(U/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let D=0;D<h;D++){const U=D+p*_,N=D+p*(_+1),L=D+1+p*(_+1),z=D+1+p*_;M.push(U,N,z),M.push(N,L,z)}this.setIndex(M),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(A,3)),this.setAttribute("uv",new kn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bp extends ui{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const v=[],g=new ce,x=new ce,M=[],E=[],A=[],S=[];for(let _=0;_<=s;_++){const D=[],U=_/s;let N=0;_===0&&f===0?N=.5/i:_===s&&m===Math.PI&&(N=-.5/i);for(let L=0;L<=i;L++){const z=L/i;g.x=-e*Math.cos(l+z*c)*Math.sin(f+U*h),g.y=e*Math.cos(f+U*h),g.z=e*Math.sin(l+z*c)*Math.sin(f+U*h),E.push(g.x,g.y,g.z),x.copy(g).normalize(),A.push(x.x,x.y,x.z),S.push(z+N,1-U),D.push(p++)}v.push(D)}for(let _=0;_<s;_++)for(let D=0;D<i;D++){const U=v[_][D+1],N=v[_][D],L=v[_+1][D],z=v[_+1][D+1];(_!==0||f>0)&&M.push(U,N,z),(_!==s-1||m<Math.PI)&&M.push(N,L,z)}this.setIndex(M),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(A,3)),this.setAttribute("uv",new kn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class MT extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bT extends Tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ET extends Tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jx extends Vx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class TT extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function d_(r,e,i,s){const l=AT(s);switch(i){case Ux:return r*e;case Nx:return r*e/l.components*l.byteLength;case Lp:return r*e/l.components*l.byteLength;case Js:return r*e*2/l.components*l.byteLength;case Np:return r*e*2/l.components*l.byteLength;case Lx:return r*e*3/l.components*l.byteLength;case Ii:return r*e*4/l.components*l.byteLength;case Op:return r*e*4/l.components*l.byteLength;case hu:case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mu:case gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:case Vh:return Math.max(r,16)*Math.max(e,8)/4;case Bh:case Gh:return Math.max(r,8)*Math.max(e,8)/2;case kh:case Xh:case qh:case Yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Wh:case jh:case Zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ep:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case tp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case np:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case rp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case sp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case op:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case lp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case up:case fp:case dp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hp:case pp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case mp:case gp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AT(r){switch(r){case Ei:case Rx:return{byteLength:1,components:1};case pl:case Cx:case Da:return{byteLength:2,components:1};case Dp:case Up:return{byteLength:2,components:4};case Qi:case wp:case Yi:return{byteLength:4,components:1};case wx:case Dx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);function Zx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function RT(r){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,v);else{g.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<g.length;M++){const E=g[x],A=g[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,g[x]=A)}g.length=x+1;for(let M=0,E=g.length;M<E;M++){const A=g[M];r.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var CT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wT=`#ifdef USE_ALPHAHASH
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
#endif`,DT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OT=`#ifdef USE_AOMAP
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
#endif`,PT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zT=`#ifdef USE_BATCHING
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
#endif`,IT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GT=`#ifdef USE_IRIDESCENCE
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
#endif`,VT=`#ifdef USE_BUMPMAP
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
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QT=`#define PI 3.141592653589793
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
} // validated`,JT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$T=`vec3 transformedNormal = objectNormal;
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
#endif`,eA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aA="gl_FragColor = linearToOutputTexel( gl_FragColor );",rA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sA=`#ifdef USE_ENVMAP
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
#endif`,oA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lA=`#ifdef USE_ENVMAP
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
#endif`,cA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uA=`#ifdef USE_ENVMAP
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
#endif`,fA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mA=`#ifdef USE_GRADIENTMAP
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
}`,gA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_A=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xA=`uniform bool receiveShadow;
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
#endif`,yA=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,SA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,AA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,CA=`#if defined( RE_IndirectDiffuse )
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
#endif`,wA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IA=`#if defined( USE_POINTS_UV )
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
#endif`,FA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kA=`#ifdef USE_MORPHTARGETS
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
#endif`,XA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KA=`#ifdef USE_NORMALMAP
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
#endif`,QA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$A=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dR=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,hR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pR=`#ifdef USE_SKINNING
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
#endif`,mR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gR=`#ifdef USE_SKINNING
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
#endif`,vR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_R=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SR=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MR=`#ifdef USE_TRANSMISSION
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
#endif`,bR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ER=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CR=`uniform sampler2D t2D;
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
}`,wR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NR=`#include <common>
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
}`,OR=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PR=`#define DISTANCE
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
}`,zR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BR=`uniform float scale;
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
}`,HR=`uniform vec3 diffuse;
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
}`,GR=`#include <common>
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
}`,VR=`uniform vec3 diffuse;
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
}`,kR=`#define LAMBERT
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
}`,XR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,WR=`#define MATCAP
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
}`,qR=`#define MATCAP
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
}`,YR=`#define NORMAL
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
}`,jR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZR=`#define PHONG
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
}`,KR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,QR=`#define STANDARD
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
}`,JR=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,$R=`#define TOON
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
}`,eC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,tC=`uniform float size;
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
}`,nC=`uniform vec3 diffuse;
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
}`,iC=`#include <common>
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
}`,aC=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,rC=`uniform float rotation;
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
}`,sC=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:CT,alphahash_pars_fragment:wT,alphamap_fragment:DT,alphamap_pars_fragment:UT,alphatest_fragment:LT,alphatest_pars_fragment:NT,aomap_fragment:OT,aomap_pars_fragment:PT,batching_pars_vertex:zT,batching_vertex:IT,begin_vertex:FT,beginnormal_vertex:BT,bsdfs:HT,iridescence_fragment:GT,bumpmap_pars_fragment:VT,clipping_planes_fragment:kT,clipping_planes_pars_fragment:XT,clipping_planes_pars_vertex:WT,clipping_planes_vertex:qT,color_fragment:YT,color_pars_fragment:jT,color_pars_vertex:ZT,color_vertex:KT,common:QT,cube_uv_reflection_fragment:JT,defaultnormal_vertex:$T,displacementmap_pars_vertex:eA,displacementmap_vertex:tA,emissivemap_fragment:nA,emissivemap_pars_fragment:iA,colorspace_fragment:aA,colorspace_pars_fragment:rA,envmap_fragment:sA,envmap_common_pars_fragment:oA,envmap_pars_fragment:lA,envmap_pars_vertex:cA,envmap_physical_pars_fragment:yA,envmap_vertex:uA,fog_vertex:fA,fog_pars_vertex:dA,fog_fragment:hA,fog_pars_fragment:pA,gradientmap_pars_fragment:mA,lightmap_pars_fragment:gA,lights_lambert_fragment:vA,lights_lambert_pars_fragment:_A,lights_pars_begin:xA,lights_toon_fragment:SA,lights_toon_pars_fragment:MA,lights_phong_fragment:bA,lights_phong_pars_fragment:EA,lights_physical_fragment:TA,lights_physical_pars_fragment:AA,lights_fragment_begin:RA,lights_fragment_maps:CA,lights_fragment_end:wA,logdepthbuf_fragment:DA,logdepthbuf_pars_fragment:UA,logdepthbuf_pars_vertex:LA,logdepthbuf_vertex:NA,map_fragment:OA,map_pars_fragment:PA,map_particle_fragment:zA,map_particle_pars_fragment:IA,metalnessmap_fragment:FA,metalnessmap_pars_fragment:BA,morphinstance_vertex:HA,morphcolor_vertex:GA,morphnormal_vertex:VA,morphtarget_pars_vertex:kA,morphtarget_vertex:XA,normal_fragment_begin:WA,normal_fragment_maps:qA,normal_pars_fragment:YA,normal_pars_vertex:jA,normal_vertex:ZA,normalmap_pars_fragment:KA,clearcoat_normal_fragment_begin:QA,clearcoat_normal_fragment_maps:JA,clearcoat_pars_fragment:$A,iridescence_pars_fragment:eR,opaque_fragment:tR,packing:nR,premultiplied_alpha_fragment:iR,project_vertex:aR,dithering_fragment:rR,dithering_pars_fragment:sR,roughnessmap_fragment:oR,roughnessmap_pars_fragment:lR,shadowmap_pars_fragment:cR,shadowmap_pars_vertex:uR,shadowmap_vertex:fR,shadowmask_pars_fragment:dR,skinbase_vertex:hR,skinning_pars_vertex:pR,skinning_vertex:mR,skinnormal_vertex:gR,specularmap_fragment:vR,specularmap_pars_fragment:_R,tonemapping_fragment:xR,tonemapping_pars_fragment:yR,transmission_fragment:SR,transmission_pars_fragment:MR,uv_pars_fragment:bR,uv_pars_vertex:ER,uv_vertex:TR,worldpos_vertex:AR,background_vert:RR,background_frag:CR,backgroundCube_vert:wR,backgroundCube_frag:DR,cube_vert:UR,cube_frag:LR,depth_vert:NR,depth_frag:OR,distance_vert:PR,distance_frag:zR,equirect_vert:IR,equirect_frag:FR,linedashed_vert:BR,linedashed_frag:HR,meshbasic_vert:GR,meshbasic_frag:VR,meshlambert_vert:kR,meshlambert_frag:XR,meshmatcap_vert:WR,meshmatcap_frag:qR,meshnormal_vert:YR,meshnormal_frag:jR,meshphong_vert:ZR,meshphong_frag:KR,meshphysical_vert:QR,meshphysical_frag:JR,meshtoon_vert:$R,meshtoon_frag:eC,points_vert:tC,points_frag:nC,shadow_vert:iC,shadow_frag:aC,sprite_vert:rC,sprite_frag:sC},Ie={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},qi={basic:{uniforms:Gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Gn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Gn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Gn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Gn([Ie.points,Ie.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Gn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Gn([Ie.common,Ie.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Gn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Gn([Ie.sprite,Ie.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Gn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Gn([Ie.lights,Ie.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};qi.physical={uniforms:Gn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const ou={r:0,b:0,g:0},Br=new La,oC=new un;function lC(r,e,i,s,l,c,f){const h=new wt(0);let m=c===!0?0:1,p,v,g=null,x=0,M=null;function E(U){let N=U.isScene===!0?U.background:null;return N&&N.isTexture&&(N=(U.backgroundBlurriness>0?i:e).get(N)),N}function A(U){let N=!1;const L=E(U);L===null?_(h,m):L&&L.isColor&&(_(L,1),N=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(U,N){const L=E(N);L&&(L.isCubeTexture||L.mapping===Tu)?(v===void 0&&(v=new li(new Al(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:eo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Br.copy(N.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),v.material.uniforms.envMap.value=L,v.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(oC.makeRotationFromEuler(Br)),v.material.toneMapped=Ct.getTransfer(L.colorSpace)!==kt,(g!==L||x!==L.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,g=L,x=L.version,M=r.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new li(new Ru(2,2),new Ji({name:"BackgroundMaterial",uniforms:eo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(L.colorSpace)!==kt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||x!==L.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,g=L,x=L.version,M=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,N){U.getRGB(ou,Gx(r)),s.buffers.color.setClear(ou.r,ou.g,ou.b,N,f)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,N=1){h.set(U),m=N,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:A,addToRenderList:S,dispose:D}}function cC(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(w,H,q,J,te){let re=!1;const P=g(J,q,H);c!==P&&(c=P,p(c.object)),re=M(w,J,q,te),re&&E(w,J,q,te),te!==null&&e.update(te,r.ELEMENT_ARRAY_BUFFER),(re||f)&&(f=!1,N(w,H,q,J),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function v(w){return r.deleteVertexArray(w)}function g(w,H,q){const J=q.wireframe===!0;let te=s[w.id];te===void 0&&(te={},s[w.id]=te);let re=te[H.id];re===void 0&&(re={},te[H.id]=re);let P=re[J];return P===void 0&&(P=x(m()),re[J]=P),P}function x(w){const H=[],q=[],J=[];for(let te=0;te<i;te++)H[te]=0,q[te]=0,J[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:J,object:w,attributes:{},index:null}}function M(w,H,q,J){const te=c.attributes,re=H.attributes;let P=0;const G=q.getAttributes();for(const X in G)if(G[X].location>=0){const xe=te[X];let I=re[X];if(I===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(I=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(I=w.instanceColor)),xe===void 0||xe.attribute!==I||I&&xe.data!==I.data)return!0;P++}return c.attributesNum!==P||c.index!==J}function E(w,H,q,J){const te={},re=H.attributes;let P=0;const G=q.getAttributes();for(const X in G)if(G[X].location>=0){let xe=re[X];xe===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor));const I={};I.attribute=xe,xe&&xe.data&&(I.data=xe.data),te[X]=I,P++}c.attributes=te,c.attributesNum=P,c.index=J}function A(){const w=c.newAttributes;for(let H=0,q=w.length;H<q;H++)w[H]=0}function S(w){_(w,0)}function _(w,H){const q=c.newAttributes,J=c.enabledAttributes,te=c.attributeDivisors;q[w]=1,J[w]===0&&(r.enableVertexAttribArray(w),J[w]=1),te[w]!==H&&(r.vertexAttribDivisor(w,H),te[w]=H)}function D(){const w=c.newAttributes,H=c.enabledAttributes;for(let q=0,J=H.length;q<J;q++)H[q]!==w[q]&&(r.disableVertexAttribArray(q),H[q]=0)}function U(w,H,q,J,te,re,P){P===!0?r.vertexAttribIPointer(w,H,q,te,re):r.vertexAttribPointer(w,H,q,J,te,re)}function N(w,H,q,J){A();const te=J.attributes,re=q.getAttributes(),P=H.defaultAttributeValues;for(const G in re){const X=re[G];if(X.location>=0){let Se=te[G];if(Se===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor)),Se!==void 0){const xe=Se.normalized,I=Se.itemSize,ee=e.get(Se);if(ee===void 0)continue;const fe=ee.buffer,Ee=ee.type,Ne=ee.bytesPerElement,se=Ee===r.INT||Ee===r.UNSIGNED_INT||Se.gpuType===wp;if(Se.isInterleavedBufferAttribute){const ue=Se.data,De=ue.stride,ke=Se.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<X.locationSize;He++)_(X.location+He,ue.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<X.locationSize;He++)S(X.location+He);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let He=0;He<X.locationSize;He++)U(X.location+He,I/X.locationSize,Ee,xe,De*Ne,(ke+I/X.locationSize*He)*Ne,se)}else{if(Se.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)_(X.location+ue,Se.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ue=0;ue<X.locationSize;ue++)S(X.location+ue);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let ue=0;ue<X.locationSize;ue++)U(X.location+ue,I/X.locationSize,Ee,xe,I*Ne,I/X.locationSize*ue*Ne,se)}}else if(P!==void 0){const xe=P[G];if(xe!==void 0)switch(xe.length){case 2:r.vertexAttrib2fv(X.location,xe);break;case 3:r.vertexAttrib3fv(X.location,xe);break;case 4:r.vertexAttrib4fv(X.location,xe);break;default:r.vertexAttrib1fv(X.location,xe)}}}}D()}function L(){B();for(const w in s){const H=s[w];for(const q in H){const J=H[q];for(const te in J)v(J[te].object),delete J[te];delete H[q]}delete s[w]}}function z(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const q in H){const J=H[q];for(const te in J)v(J[te].object),delete J[te];delete H[q]}delete s[w.id]}function O(w){for(const H in s){const q=s[H];if(q[w.id]===void 0)continue;const J=q[w.id];for(const te in J)v(J[te].object),delete J[te];delete q[w.id]}}function B(){T(),f=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:S,disableUnusedAttributes:D}}function uC(r,e,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function f(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function h(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=v[E];i.update(M,s,1)}function m(p,v,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],v[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,x,0,g);let E=0;for(let A=0;A<g;A++)E+=v[A]*x[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function fC(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Ii&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const B=O===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ei&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Yi&&!B)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ct("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:N,maxSamples:L,samples:z}}function dC(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Gr,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||s!==0||l;return l=x,s=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,M){const E=g.clippingPlanes,A=g.clipIntersection,S=g.clipShadows,_=r.get(g);if(!l||E===null||E.length===0||c&&!S)c?v(null):p();else{const D=c?0:s,U=D*4;let N=_.clippingState||null;m.value=N,N=v(E,x,U,M);for(let L=0;L!==U;++L)N[L]=i[L];_.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,x,M,E){const A=g!==null?g.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const _=M+A*4,D=x.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,N=M;U!==A;++U,N+=4)f.copy(g[U]).applyMatrix4(D,h),f.normal.toArray(S,N),S[N+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function hC(r){let e=new WeakMap;function i(f,h){return h===Ph?f.mapping=jr:h===zh&&(f.mapping=Qs),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Ph||h===zh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Xx(m.height);return p.fromEquirectangularTexture(r,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const pr=4,h_=[.125,.215,.35,.446,.526,.582],Xr=20,pC=256,ll=new jx,p_=new wt;let gh=null,vh=0,_h=0,xh=!1;const mC=new ce;class m_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=mC}=c;gh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=__(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,vh,_h),this._renderer.xr.enabled=xh,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===jr||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Da,format:Ii,colorSpace:$s,depthBuffer:!1},l=g_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gC(c)),this._blurMaterial=_C(c,e,i),this._ggxMaterial=vC(c,e,i)}return l}_compileMaterial(e){const i=new li(new ui,e);this._renderer.compile(i,ll)}_sceneToCubeUV(e,i,s,l,c){const m=new bi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(p_),g.toneMapping=Zi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new li(new Al,new kr({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let _=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,_=!0):(S.color.copy(p_),_=!0);for(let U=0;U<6;U++){const N=U%3;N===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):N===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const L=this._cubeSize;Ys(l,N*L,U>2?L:0,L,L),g.setRenderTarget(l),_&&g.render(A,m),g.render(e,m)}g.toneMapping=M,g.autoClear=x,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===jr||e.mapping===Qs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=__()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ys(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,ll)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=0+p*1.25,M=g*x,{_lodMax:E}=this,A=this._sizeLods[s],S=3*A*(s>E-pr?s-E+pr:0),_=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Ys(c,S,_,3*A,2*A),l.setRenderTarget(c),l.render(h,ll),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Ys(e,S,_,3*A,2*A),l.setRenderTarget(e),l.render(h,ll)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Xr-1),A=c/E,S=isFinite(c)?1+Math.floor(v*A):Xr;S>Xr&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Xr}`);const _=[];let D=0;for(let O=0;O<Xr;++O){const B=O/A,T=Math.exp(-B*B/2);_.push(T),O===0?D+=T:O<S&&(D+=2*T)}for(let O=0;O<_.length;O++)_[O]=_[O]/D;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-s;const N=this._sizeLods[l],L=3*N*(l>U-pr?l-U+pr:0),z=4*(this._cubeSize-N);Ys(i,L,z,3*N,2*N),m.setRenderTarget(i),m.render(g,ll)}}function gC(r){const e=[],i=[],s=[];let l=r;const c=r-pr+1+h_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-pr?m=h_[f-r+pr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,E=6,A=3,S=2,_=1,D=new Float32Array(A*E*M),U=new Float32Array(S*E*M),N=new Float32Array(_*E*M);for(let z=0;z<M;z++){const O=z%3*2/3-1,B=z>2?0:-1,T=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];D.set(T,A*E*z),U.set(x,S*E*z);const w=[z,z,z,z,z,z];N.set(w,_*E*z)}const L=new ui;L.setAttribute("position",new ci(D,A)),L.setAttribute("uv",new ci(U,S)),L.setAttribute("faceIndex",new ci(N,_)),s.push(new li(L,null)),l>pr&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function g_(r,e,i){const s=new Ki(r,e,i);return s.texture.mapping=Tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ys(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function vC(r,e,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function _C(r,e,i){const s=new Float32Array(Xr),l=new ce(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function v_(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function __(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}function xC(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Ph||m===zh,v=m===jr||m===Qs;if(p||v){let g=e.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new m_(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new m_(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function yC(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gl("WebGLRenderer: "+s+" extension not supported."),l}}}function SC(r,e,i,s){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],r.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,E=g.attributes.position;let A=0;if(M!==null){const D=M.array;A=M.version;for(let U=0,N=D.length;U<N;U+=3){const L=D[U+0],z=D[U+1],O=D[U+2];x.push(L,z,z,O,O,L)}}else if(E!==void 0){const D=E.array;A=E.version;for(let U=0,N=D.length/3-1;U<N;U+=3){const L=U+0,z=U+1,O=U+2;x.push(L,z,z,O,O,L)}}else return;const S=new(Ox(x)?Hx:Bx)(x,1);S.version=A;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function MC(r,e,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,M){r.drawElements(s,M,c,x*f),i.update(M,s,1)}function p(x,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,x*f,E),i.update(M,s,E))}function v(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,s,1)}function g(x,M,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,M[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,A,0,E);let _=0;for(let D=0;D<E;D++)_+=M[D]*A[D];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function bC(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Lt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function EC(r,e,i){const s=new WeakMap,l=new cn;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(h);if(x===void 0||x.count!==g){let w=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let N=0;E===!0&&(N=1),A===!0&&(N=2),S===!0&&(N=3);let L=h.attributes.position.count*N,z=1;L>e.maxTextureSize&&(z=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const O=new Float32Array(L*z*4*g),B=new Px(O,L,z,g);B.type=Yi,B.needsUpdate=!0;const T=N*4;for(let H=0;H<g;H++){const q=_[H],J=D[H],te=U[H],re=L*z*4*H;for(let P=0;P<q.count;P++){const G=P*T;E===!0&&(l.fromBufferAttribute(q,P),O[re+G+0]=l.x,O[re+G+1]=l.y,O[re+G+2]=l.z,O[re+G+3]=0),A===!0&&(l.fromBufferAttribute(J,P),O[re+G+4]=l.x,O[re+G+5]=l.y,O[re+G+6]=l.z,O[re+G+7]=0),S===!0&&(l.fromBufferAttribute(te,P),O[re+G+8]=l.x,O[re+G+9]=l.y,O[re+G+10]=l.z,O[re+G+11]=te.itemSize===4?l.w:1)}}x={count:g,texture:B,size:new Xt(L,z)},s.set(h,x),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function TC(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const AC={[xx]:"LINEAR_TONE_MAPPING",[yx]:"REINHARD_TONE_MAPPING",[Sx]:"CINEON_TONE_MAPPING",[Mx]:"ACES_FILMIC_TONE_MAPPING",[Ex]:"AGX_TONE_MAPPING",[Tx]:"NEUTRAL_TONE_MAPPING",[bx]:"CUSTOM_TONE_MAPPING"};function RC(r,e,i,s,l){const c=new Ki(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Ki(e,i,{type:Da,depthBuffer:!1,stencilBuffer:!1}),h=new ui;h.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new kn([0,2,0,0,2,0],2));const m=new MT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new li(h,m),v=new jx(-1,1,1,-1,0,1);let g=null,x=null,M=!1,E,A=null,S=[],_=!1;this.setSize=function(D,U){c.setSize(D,U),f.setSize(D,U);for(let N=0;N<S.length;N++){const L=S[N];L.setSize&&L.setSize(D,U)}},this.setEffects=function(D){S=D,_=S.length>0&&S[0].isRenderPass===!0;const U=c.width,N=c.height;for(let L=0;L<S.length;L++){const z=S[L];z.setSize&&z.setSize(U,N)}},this.begin=function(D,U){if(M||D.toneMapping===Zi&&S.length===0)return!1;if(A=U,U!==null){const N=U.width,L=U.height;(c.width!==N||c.height!==L)&&this.setSize(N,L)}return _===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=Zi,!0},this.hasRenderPass=function(){return _},this.end=function(D,U){D.toneMapping=E,M=!0;let N=c,L=f;for(let z=0;z<S.length;z++){const O=S[z];if(O.enabled!==!1&&(O.render(D,L,N,U),O.needsSwap!==!1)){const B=N;N=L,L=B}}if(g!==D.outputColorSpace||x!==D.toneMapping){g=D.outputColorSpace,x=D.toneMapping,m.defines={},Ct.getTransfer(g)===kt&&(m.defines.SRGB_TRANSFER="");const z=AC[x];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(A),D.render(p,v),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const Kx=new Vn,xp=new vl(1,1),Qx=new Px,Jx=new Q1,$x=new kx,x_=[],y_=[],S_=new Float32Array(16),M_=new Float32Array(9),b_=new Float32Array(4);function ro(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=x_[l];if(c===void 0&&(c=new Float32Array(l),x_[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function yn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Sn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function wu(r,e){let i=y_[e];i===void 0&&(i=new Int32Array(e),y_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function CC(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function wC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2fv(this.addr,e),Sn(i,e)}}function DC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;r.uniform3fv(this.addr,e),Sn(i,e)}}function UC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4fv(this.addr,e),Sn(i,e)}}function LC(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;b_.set(s),r.uniformMatrix2fv(this.addr,!1,b_),Sn(i,s)}}function NC(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;M_.set(s),r.uniformMatrix3fv(this.addr,!1,M_),Sn(i,s)}}function OC(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;S_.set(s),r.uniformMatrix4fv(this.addr,!1,S_),Sn(i,s)}}function PC(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function zC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2iv(this.addr,e),Sn(i,e)}}function IC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3iv(this.addr,e),Sn(i,e)}}function FC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4iv(this.addr,e),Sn(i,e)}}function BC(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function HC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2uiv(this.addr,e),Sn(i,e)}}function GC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3uiv(this.addr,e),Sn(i,e)}}function VC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4uiv(this.addr,e),Sn(i,e)}}function kC(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(xp.compareFunction=i.isReversedDepthBuffer()?zp:Pp,c=xp):c=Kx,i.setTexture2D(e||c,l)}function XC(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Jx,l)}function WC(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||$x,l)}function qC(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Qx,l)}function YC(r){switch(r){case 5126:return CC;case 35664:return wC;case 35665:return DC;case 35666:return UC;case 35674:return LC;case 35675:return NC;case 35676:return OC;case 5124:case 35670:return PC;case 35667:case 35671:return zC;case 35668:case 35672:return IC;case 35669:case 35673:return FC;case 5125:return BC;case 36294:return HC;case 36295:return GC;case 36296:return VC;case 35678:case 36198:case 36298:case 36306:case 35682:return kC;case 35679:case 36299:case 36307:return XC;case 35680:case 36300:case 36308:case 36293:return WC;case 36289:case 36303:case 36311:case 36292:return qC}}function jC(r,e){r.uniform1fv(this.addr,e)}function ZC(r,e){const i=ro(e,this.size,2);r.uniform2fv(this.addr,i)}function KC(r,e){const i=ro(e,this.size,3);r.uniform3fv(this.addr,i)}function QC(r,e){const i=ro(e,this.size,4);r.uniform4fv(this.addr,i)}function JC(r,e){const i=ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function $C(r,e){const i=ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function e2(r,e){const i=ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function t2(r,e){r.uniform1iv(this.addr,e)}function n2(r,e){r.uniform2iv(this.addr,e)}function i2(r,e){r.uniform3iv(this.addr,e)}function a2(r,e){r.uniform4iv(this.addr,e)}function r2(r,e){r.uniform1uiv(this.addr,e)}function s2(r,e){r.uniform2uiv(this.addr,e)}function o2(r,e){r.uniform3uiv(this.addr,e)}function l2(r,e){r.uniform4uiv(this.addr,e)}function c2(r,e,i){const s=this.cache,l=e.length,c=wu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=xp:f=Kx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function u2(r,e,i){const s=this.cache,l=e.length,c=wu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Jx,c[f])}function f2(r,e,i){const s=this.cache,l=e.length,c=wu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||$x,c[f])}function d2(r,e,i){const s=this.cache,l=e.length,c=wu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Qx,c[f])}function h2(r){switch(r){case 5126:return jC;case 35664:return ZC;case 35665:return KC;case 35666:return QC;case 35674:return JC;case 35675:return $C;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return a2;case 5125:return r2;case 36294:return s2;case 36295:return o2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return d2}}class p2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=YC(i.type)}}class m2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=h2(i.type)}}class g2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const yh=/(\w+)(\])?(\[|\.)?/g;function E_(r,e){r.seq.push(e),r.map[e.id]=e}function v2(r,e,i){const s=r.name,l=s.length;for(yh.lastIndex=0;;){const c=yh.exec(s),f=yh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){E_(i,p===void 0?new p2(h,r,e):new m2(h,r,e));break}else{let g=i.map[h];g===void 0&&(g=new g2(h),E_(i,g)),i=g}}}class vu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);v2(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function T_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const _2=37297;let x2=0;function y2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const A_=new mt;function S2(r){Ct._getMatrix(A_,Ct.workingColorSpace,r);const e=`mat3( ${A_.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(r)){case yu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function R_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+y2(r.getShaderSource(e),h)}else return c}function M2(r,e){const i=S2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const b2={[xx]:"Linear",[yx]:"Reinhard",[Sx]:"Cineon",[Mx]:"ACESFilmic",[Ex]:"AgX",[Tx]:"Neutral",[bx]:"Custom"};function E2(r,e){const i=b2[e];return i===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lu=new ce;function T2(){Ct.getLuminanceCoefficients(lu);const r=lu.x.toFixed(4),e=lu.y.toFixed(4),i=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function R2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function C2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function dl(r){return r!==""}function C_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w2=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(r){return r.replace(w2,U2)}const D2=new Map;function U2(r,e){let i=gt[e];if(i===void 0){const s=D2.get(e);if(s!==void 0)i=gt[s],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return yp(i)}const L2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D_(r){return r.replace(L2,N2)}function N2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function U_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const O2={[du]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};function P2(r){return O2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const z2={[jr]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[Tu]:"ENVMAP_TYPE_CUBE_UV"};function I2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":z2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const F2={[Qs]:"ENVMAP_MODE_REFRACTION"};function B2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":F2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const H2={[_x]:"ENVMAP_BLENDING_MULTIPLY",[U1]:"ENVMAP_BLENDING_MIX",[L1]:"ENVMAP_BLENDING_ADD"};function G2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":H2[r.combine]||"ENVMAP_BLENDING_NONE"}function V2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function k2(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=P2(i),p=I2(i),v=B2(i),g=G2(i),x=V2(i),M=A2(i),E=R2(c),A=l.createProgram();let S,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(dl).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(dl).join(`
`),_.length>0&&(_+=`
`)):(S=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),_=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Zi?"#define TONE_MAPPING":"",i.toneMapping!==Zi?gt.tonemapping_pars_fragment:"",i.toneMapping!==Zi?E2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,M2("linearToOutputTexel",i.outputColorSpace),T2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(dl).join(`
`)),f=yp(f),f=C_(f,i),f=w_(f,i),h=yp(h),h=C_(h,i),h=w_(h,i),f=D_(f),h=D_(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=D+S+f,N=D+_+h,L=T_(l,l.VERTEX_SHADER,U),z=T_(l,l.FRAGMENT_SHADER,N);l.attachShader(A,L),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(H){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(A)||"",J=l.getShaderInfoLog(L)||"",te=l.getShaderInfoLog(z)||"",re=q.trim(),P=J.trim(),G=te.trim();let X=!0,Se=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,L,z);else{const xe=R_(l,L,"vertex"),I=R_(l,z,"fragment");Lt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+re+`
`+xe+`
`+I)}else re!==""?ct("WebGLProgram: Program Info Log:",re):(P===""||G==="")&&(Se=!1);Se&&(H.diagnostics={runnable:X,programLog:re,vertexShader:{log:P,prefix:S},fragmentShader:{log:G,prefix:_}})}l.deleteShader(L),l.deleteShader(z),B=new vu(l,A),T=C2(l,A)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,_2)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=x2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=z,this}let X2=0;class W2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new q2(e),i.set(e,s)),s}}class q2{constructor(e){this.id=X2++,this.code=e,this.usedTimes=0}}function Y2(r,e,i,s,l,c,f){const h=new Ix,m=new W2,p=new Set,v=[],g=new Map,x=l.logarithmicDepthBuffer;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function S(T,w,H,q,J){const te=q.fog,re=J.geometry,P=T.isMeshStandardMaterial?q.environment:null,G=(T.isMeshStandardMaterial?i:e).get(T.envMap||P),X=G&&G.mapping===Tu?G.image.height:null,Se=E[T.type];T.precision!==null&&(M=l.getMaxPrecision(T.precision),M!==T.precision&&ct("WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const xe=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,I=xe!==void 0?xe.length:0;let ee=0;re.morphAttributes.position!==void 0&&(ee=1),re.morphAttributes.normal!==void 0&&(ee=2),re.morphAttributes.color!==void 0&&(ee=3);let fe,Ee,Ne,se;if(Se){const Rt=qi[Se];fe=Rt.vertexShader,Ee=Rt.fragmentShader}else fe=T.vertexShader,Ee=T.fragmentShader,m.update(T),Ne=m.getVertexShaderID(T),se=m.getFragmentShaderID(T);const ue=r.getRenderTarget(),De=r.state.buffers.depth.getReversed(),ke=J.isInstancedMesh===!0,He=J.isBatchedMesh===!0,dt=!!T.map,jt=!!T.matcap,St=!!G,_t=!!T.aoMap,Nt=!!T.lightMap,ut=!!T.bumpMap,an=!!T.normalMap,k=!!T.displacementMap,$t=!!T.emissiveMap,At=!!T.metalnessMap,It=!!T.roughnessMap,Qe=T.anisotropy>0,F=T.clearcoat>0,b=T.dispersion>0,j=T.iridescence>0,ge=T.sheen>0,Me=T.transmission>0,pe=Qe&&!!T.anisotropyMap,$e=F&&!!T.clearcoatMap,Ue=F&&!!T.clearcoatNormalMap,je=F&&!!T.clearcoatRoughnessMap,rt=j&&!!T.iridescenceMap,Ae=j&&!!T.iridescenceThicknessMap,Re=ge&&!!T.sheenColorMap,Ge=ge&&!!T.sheenRoughnessMap,Fe=!!T.specularMap,Le=!!T.specularColorMap,ht=!!T.specularIntensityMap,Y=Me&&!!T.transmissionMap,Pe=Me&&!!T.thicknessMap,Ce=!!T.gradientMap,Be=!!T.alphaMap,Te=T.alphaTest>0,ye=!!T.alphaHash,we=!!T.extensions;let st=Zi;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(st=r.toneMapping);const Bt={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:fe,fragmentShader:Ee,defines:T.defines,customVertexShaderID:Ne,customFragmentShaderID:se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:He,batchingColor:He&&J._colorsTexture!==null,instancing:ke,instancingColor:ke&&J.instanceColor!==null,instancingMorph:ke&&J.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:$s,alphaToCoverage:!!T.alphaToCoverage,map:dt,matcap:jt,envMap:St,envMapMode:St&&G.mapping,envMapCubeUVHeight:X,aoMap:_t,lightMap:Nt,bumpMap:ut,normalMap:an,displacementMap:k,emissiveMap:$t,normalMapObjectSpace:an&&T.normalMapType===z1,normalMapTangentSpace:an&&T.normalMapType===P1,metalnessMap:At,roughnessMap:It,anisotropy:Qe,anisotropyMap:pe,clearcoat:F,clearcoatMap:$e,clearcoatNormalMap:Ue,clearcoatRoughnessMap:je,dispersion:b,iridescence:j,iridescenceMap:rt,iridescenceThicknessMap:Ae,sheen:ge,sheenColorMap:Re,sheenRoughnessMap:Ge,specularMap:Fe,specularColorMap:Le,specularIntensityMap:ht,transmission:Me,transmissionMap:Y,thicknessMap:Pe,gradientMap:Ce,opaque:T.transparent===!1&&T.blending===js&&T.alphaToCoverage===!1,alphaMap:Be,alphaTest:Te,alphaHash:ye,combine:T.combine,mapUv:dt&&A(T.map.channel),aoMapUv:_t&&A(T.aoMap.channel),lightMapUv:Nt&&A(T.lightMap.channel),bumpMapUv:ut&&A(T.bumpMap.channel),normalMapUv:an&&A(T.normalMap.channel),displacementMapUv:k&&A(T.displacementMap.channel),emissiveMapUv:$t&&A(T.emissiveMap.channel),metalnessMapUv:At&&A(T.metalnessMap.channel),roughnessMapUv:It&&A(T.roughnessMap.channel),anisotropyMapUv:pe&&A(T.anisotropyMap.channel),clearcoatMapUv:$e&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&A(T.sheenRoughnessMap.channel),specularMapUv:Fe&&A(T.specularMap.channel),specularColorMapUv:Le&&A(T.specularColorMap.channel),specularIntensityMapUv:ht&&A(T.specularIntensityMap.channel),transmissionMapUv:Y&&A(T.transmissionMap.channel),thicknessMapUv:Pe&&A(T.thicknessMap.channel),alphaMapUv:Be&&A(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(an||Qe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!re.attributes.uv&&(dt||Be),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:De,skinning:J.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:dt&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:$t&&T.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ea,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:we&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&T.extensions.multiDraw===!0||He)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function _(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)w.push(H),w.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(D(w,T),U(w,T),w.push(r.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function D(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function U(T,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),T.push(h.mask)}function N(T){const w=E[T.type];let H;if(w){const q=qi[w];H=uT.clone(q.uniforms)}else H=T.uniforms;return H}function L(T,w){let H=g.get(w);return H!==void 0?++H.usedTimes:(H=new k2(r,w,T,c),v.push(H),g.set(w,H)),H}function z(T){if(--T.usedTimes===0){const w=v.indexOf(T);v[w]=v[v.length-1],v.pop(),g.delete(T.cacheKey),T.destroy()}}function O(T){m.remove(T)}function B(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:N,acquireProgram:L,releaseProgram:z,releaseShaderCache:O,programs:v,dispose:B}}function j2(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function Z2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function L_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function N_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,x,M,E,A,S){let _=r[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:M,groupOrder:E,renderOrder:g.renderOrder,z:A,group:S},r[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=M,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=A,_.group=S),e++,_}function h(g,x,M,E,A,S){const _=f(g,x,M,E,A,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,x,M,E,A,S){const _=f(g,x,M,E,A,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||Z2),s.length>1&&s.sort(x||L_),l.length>1&&l.sort(x||L_)}function v(){for(let g=e,x=r.length;g<x;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function K2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new N_,r.set(s,[f])):l>=c.length?(f=new N_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function Q2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ce,color:new wt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=i,i}}}function J2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let $2=0;function e3(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function t3(r){const e=new Q2,i=J2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ce);const l=new ce,c=new un,f=new un;function h(p){let v=0,g=0,x=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let M=0,E=0,A=0,S=0,_=0,D=0,U=0,N=0,L=0,z=0,O=0;p.sort(e3);for(let T=0,w=p.length;T<w;T++){const H=p[T],q=H.color,J=H.intensity,te=H.distance;let re=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Js?re=H.shadow.map.texture:re=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=q.r*J,g+=q.g*J,x+=q.b*J;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],J);O++}else if(H.isDirectionalLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,X=i.get(H);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,s.directionalShadow[M]=X,s.directionalShadowMap[M]=re,s.directionalShadowMatrix[M]=H.shadow.matrix,D++}s.directional[M]=P,M++}else if(H.isSpotLight){const P=e.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(q).multiplyScalar(J),P.distance=te,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[A]=P;const G=H.shadow;if(H.map&&(s.spotLightMap[L]=H.map,L++,G.updateMatrices(H),H.castShadow&&z++),s.spotLightMatrix[A]=G.matrix,H.castShadow){const X=i.get(H);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,s.spotShadow[A]=X,s.spotShadowMap[A]=re,N++}A++}else if(H.isRectAreaLight){const P=e.get(H);P.color.copy(q).multiplyScalar(J),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=P,S++}else if(H.isPointLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const G=H.shadow,X=i.get(H);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,s.pointShadow[E]=X,s.pointShadowMap[E]=re,s.pointShadowMatrix[E]=H.shadow.matrix,U++}s.point[E]=P,E++}else if(H.isHemisphereLight){const P=e.get(H);P.skyColor.copy(H.color).multiplyScalar(J),P.groundColor.copy(H.groundColor).multiplyScalar(J),s.hemi[_]=P,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const B=s.hash;(B.directionalLength!==M||B.pointLength!==E||B.spotLength!==A||B.rectAreaLength!==S||B.hemiLength!==_||B.numDirectionalShadows!==D||B.numPointShadows!==U||B.numSpotShadows!==N||B.numSpotMaps!==L||B.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=N+L-z,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=O,B.directionalLength=M,B.pointLength=E,B.spotLength=A,B.rectAreaLength=S,B.hemiLength=_,B.numDirectionalShadows=D,B.numPointShadows=U,B.numSpotShadows=N,B.numSpotMaps=L,B.numLightProbes=O,s.version=$2++)}function m(p,v){let g=0,x=0,M=0,E=0,A=0;const S=v.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const U=p[_];if(U.isDirectionalLight){const N=s.directional[g];N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),g++}else if(U.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),M++}else if(U.isRectAreaLight){const N=s.rectArea[E];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const N=s.point[x];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const N=s.hemi[A];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(S),A++}}}return{setup:h,setupView:m,state:s}}function O_(r){const e=new t3(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function f(v){s.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function n3(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new O_(r),e.set(l,[h])):c>=f.length?(h=new O_(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const i3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,r3=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],s3=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],P_=new un,cl=new ce,Sh=new ce;function o3(r,e,i){let s=new Wx;const l=new Xt,c=new Xt,f=new cn,h=new bT,m=new ET,p={},v=i.maxTextureSize,g={[mr]:Qn,[Qn]:mr,[Ea]:Ea},x=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:i3,fragmentShader:a3}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new ui;E.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new li(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let _=this.type;this.render=function(z,O,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;z.type===d1&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=du);const T=r.getRenderTarget(),w=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Ra),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const J=_!==this.type;J&&O.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(re=>re.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,re=z.length;te<re;te++){const P=z[te],G=P.shadow;if(G===void 0){ct("WebGLShadowMap:",P,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const X=G.getFrameExtents();if(l.multiply(X),c.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/X.x),l.x=c.x*X.x,G.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/X.y),l.y=c.y*X.y,G.mapSize.y=c.y)),G.map===null||J===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ul){if(P.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ki(l.x,l.y,{format:Js,type:Da,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),G.map.texture.name=P.name+".shadowMap",G.map.depthTexture=new vl(l.x,l.y,Yi),G.map.depthTexture.name=P.name+".shadowMapDepth",G.map.depthTexture.format=Ua,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On}else{P.isPointLight?(G.map=new Xx(l.x),G.map.depthTexture=new ST(l.x,Qi)):(G.map=new Ki(l.x,l.y),G.map.depthTexture=new vl(l.x,l.y,Qi)),G.map.depthTexture.name=P.name+".shadowMap",G.map.depthTexture.format=Ua;const xe=r.state.buffers.depth.getReversed();this.type===du?(G.map.depthTexture.compareFunction=xe?zp:Pp,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On)}G.camera.updateProjectionMatrix()}const Se=G.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<Se;xe++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,xe),r.clear();else{xe===0&&(r.setRenderTarget(G.map),r.clear());const I=G.getViewport(xe);f.set(c.x*I.x,c.y*I.y,c.x*I.z,c.y*I.w),q.viewport(f)}if(P.isPointLight){const I=G.camera,ee=G.matrix,fe=P.distance||I.far;fe!==I.far&&(I.far=fe,I.updateProjectionMatrix()),cl.setFromMatrixPosition(P.matrixWorld),I.position.copy(cl),Sh.copy(I.position),Sh.add(r3[xe]),I.up.copy(s3[xe]),I.lookAt(Sh),I.updateMatrixWorld(),ee.makeTranslation(-cl.x,-cl.y,-cl.z),P_.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G._frustum.setFromProjectionMatrix(P_,I.coordinateSystem,I.reversedDepth)}else G.updateMatrices(P);s=G.getFrustum(),N(O,B,G.camera,P,this.type)}G.isPointLightShadow!==!0&&this.type===ul&&D(G,B),G.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(T,w,H)};function D(z,O){const B=e.update(A);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ki(l.x,l.y,{format:Js,type:Da})),x.uniforms.shadow_pass.value=z.map.depthTexture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(O,null,B,x,A,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(O,null,B,M,A,null)}function U(z,O,B,T){let w=null;const H=B.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)w=H;else if(w=B.isPointLight===!0?m:h,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const q=w.uuid,J=O.uuid;let te=p[q];te===void 0&&(te={},p[q]=te);let re=te[J];re===void 0&&(re=w.clone(),te[J]=re,O.addEventListener("dispose",L)),w=re}if(w.visible=O.visible,w.wireframe=O.wireframe,T===ul?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:g[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const q=r.properties.get(w);q.light=B}return w}function N(z,O,B,T,w){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===ul)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,z.matrixWorld);const J=e.update(z),te=z.material;if(Array.isArray(te)){const re=J.groups;for(let P=0,G=re.length;P<G;P++){const X=re[P],Se=te[X.materialIndex];if(Se&&Se.visible){const xe=U(z,Se,T,w);z.onBeforeShadow(r,z,O,B,J,xe,X),r.renderBufferDirect(B,null,J,xe,z,X),z.onAfterShadow(r,z,O,B,J,xe,X)}}}else if(te.visible){const re=U(z,te,T,w);z.onBeforeShadow(r,z,O,B,J,re,null),r.renderBufferDirect(B,null,J,re,z,null),z.onAfterShadow(r,z,O,B,J,re,null)}}const q=z.children;for(let J=0,te=q.length;J<te;J++)N(q[J],O,B,T,w)}function L(z){z.target.removeEventListener("dispose",L);for(const B in p){const T=p[B],w=z.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const l3={[Ch]:wh,[Dh]:Nh,[Uh]:Oh,[Ks]:Lh,[wh]:Ch,[Nh]:Dh,[Oh]:Uh,[Lh]:Ks};function c3(r,e){function i(){let Y=!1;const Pe=new cn;let Ce=null;const Be=new cn(0,0,0,0);return{setMask:function(Te){Ce!==Te&&!Y&&(r.colorMask(Te,Te,Te,Te),Ce=Te)},setLocked:function(Te){Y=Te},setClear:function(Te,ye,we,st,Bt){Bt===!0&&(Te*=st,ye*=st,we*=st),Pe.set(Te,ye,we,st),Be.equals(Pe)===!1&&(r.clearColor(Te,ye,we,st),Be.copy(Pe))},reset:function(){Y=!1,Ce=null,Be.set(-1,0,0,0)}}}function s(){let Y=!1,Pe=!1,Ce=null,Be=null,Te=null;return{setReversed:function(ye){if(Pe!==ye){const we=e.get("EXT_clip_control");ye?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Pe=ye;const st=Te;Te=null,this.setClear(st)}},getReversed:function(){return Pe},setTest:function(ye){ye?ue(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(ye){Ce!==ye&&!Y&&(r.depthMask(ye),Ce=ye)},setFunc:function(ye){if(Pe&&(ye=l3[ye]),Be!==ye){switch(ye){case Ch:r.depthFunc(r.NEVER);break;case wh:r.depthFunc(r.ALWAYS);break;case Dh:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case Uh:r.depthFunc(r.EQUAL);break;case Lh:r.depthFunc(r.GEQUAL);break;case Nh:r.depthFunc(r.GREATER);break;case Oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=ye}},setLocked:function(ye){Y=ye},setClear:function(ye){Te!==ye&&(Pe&&(ye=1-ye),r.clearDepth(ye),Te=ye)},reset:function(){Y=!1,Ce=null,Be=null,Te=null,Pe=!1}}}function l(){let Y=!1,Pe=null,Ce=null,Be=null,Te=null,ye=null,we=null,st=null,Bt=null;return{setTest:function(Rt){Y||(Rt?ue(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(Rt){Pe!==Rt&&!Y&&(r.stencilMask(Rt),Pe=Rt)},setFunc:function(Rt,Pn,Ri){(Ce!==Rt||Be!==Pn||Te!==Ri)&&(r.stencilFunc(Rt,Pn,Ri),Ce=Rt,Be=Pn,Te=Ri)},setOp:function(Rt,Pn,Ri){(ye!==Rt||we!==Pn||st!==Ri)&&(r.stencilOp(Rt,Pn,Ri),ye=Rt,we=Pn,st=Ri)},setLocked:function(Rt){Y=Rt},setClear:function(Rt){Bt!==Rt&&(r.clearStencil(Rt),Bt=Rt)},reset:function(){Y=!1,Pe=null,Ce=null,Be=null,Te=null,ye=null,we=null,st=null,Bt=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,M=[],E=null,A=!1,S=null,_=null,D=null,U=null,N=null,L=null,z=null,O=new wt(0,0,0),B=0,T=!1,w=null,H=null,q=null,J=null,te=null;const re=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,G=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),P=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),P=G>=2);let Se=null,xe={};const I=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),fe=new cn().fromArray(I),Ee=new cn().fromArray(ee);function Ne(Y,Pe,Ce,Be){const Te=new Uint8Array(4),ye=r.createTexture();r.bindTexture(Y,ye),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<Ce;we++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(Pe+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return ye}const se={};se[r.TEXTURE_2D]=Ne(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=Ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=Ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=Ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ue(r.DEPTH_TEST),f.setFunc(Ks),ut(!1),an(Hv),ue(r.CULL_FACE),_t(Ra);function ue(Y){v[Y]!==!0&&(r.enable(Y),v[Y]=!0)}function De(Y){v[Y]!==!1&&(r.disable(Y),v[Y]=!1)}function ke(Y,Pe){return g[Y]!==Pe?(r.bindFramebuffer(Y,Pe),g[Y]=Pe,Y===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Pe),Y===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function He(Y,Pe){let Ce=M,Be=!1;if(Y){Ce=x.get(Pe),Ce===void 0&&(Ce=[],x.set(Pe,Ce));const Te=Y.textures;if(Ce.length!==Te.length||Ce[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,we=Te.length;ye<we;ye++)Ce[ye]=r.COLOR_ATTACHMENT0+ye;Ce.length=Te.length,Be=!0}}else Ce[0]!==r.BACK&&(Ce[0]=r.BACK,Be=!0);Be&&r.drawBuffers(Ce)}function dt(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const jt={[Vr]:r.FUNC_ADD,[p1]:r.FUNC_SUBTRACT,[m1]:r.FUNC_REVERSE_SUBTRACT};jt[g1]=r.MIN,jt[v1]=r.MAX;const St={[_1]:r.ZERO,[x1]:r.ONE,[y1]:r.SRC_COLOR,[Ah]:r.SRC_ALPHA,[A1]:r.SRC_ALPHA_SATURATE,[E1]:r.DST_COLOR,[M1]:r.DST_ALPHA,[S1]:r.ONE_MINUS_SRC_COLOR,[Rh]:r.ONE_MINUS_SRC_ALPHA,[T1]:r.ONE_MINUS_DST_COLOR,[b1]:r.ONE_MINUS_DST_ALPHA,[R1]:r.CONSTANT_COLOR,[C1]:r.ONE_MINUS_CONSTANT_COLOR,[w1]:r.CONSTANT_ALPHA,[D1]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(Y,Pe,Ce,Be,Te,ye,we,st,Bt,Rt){if(Y===Ra){A===!0&&(De(r.BLEND),A=!1);return}if(A===!1&&(ue(r.BLEND),A=!0),Y!==h1){if(Y!==S||Rt!==T){if((_!==Vr||N!==Vr)&&(r.blendEquation(r.FUNC_ADD),_=Vr,N=Vr),Rt)switch(Y){case js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Th:r.blendFunc(r.ONE,r.ONE);break;case Gv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Th:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Gv:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vv:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",Y);break}D=null,U=null,L=null,z=null,O.set(0,0,0),B=0,S=Y,T=Rt}return}Te=Te||Pe,ye=ye||Ce,we=we||Be,(Pe!==_||Te!==N)&&(r.blendEquationSeparate(jt[Pe],jt[Te]),_=Pe,N=Te),(Ce!==D||Be!==U||ye!==L||we!==z)&&(r.blendFuncSeparate(St[Ce],St[Be],St[ye],St[we]),D=Ce,U=Be,L=ye,z=we),(st.equals(O)===!1||Bt!==B)&&(r.blendColor(st.r,st.g,st.b,Bt),O.copy(st),B=Bt),S=Y,T=!1}function Nt(Y,Pe){Y.side===Ea?De(r.CULL_FACE):ue(r.CULL_FACE);let Ce=Y.side===Qn;Pe&&(Ce=!Ce),ut(Ce),Y.blending===js&&Y.transparent===!1?_t(Ra):_t(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Be=Y.stencilWrite;h.setTest(Be),Be&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),$t(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function ut(Y){w!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),w=Y)}function an(Y){Y!==u1?(ue(r.CULL_FACE),Y!==H&&(Y===Hv?r.cullFace(r.BACK):Y===f1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),H=Y}function k(Y){Y!==q&&(P&&r.lineWidth(Y),q=Y)}function $t(Y,Pe,Ce){Y?(ue(r.POLYGON_OFFSET_FILL),(J!==Pe||te!==Ce)&&(r.polygonOffset(Pe,Ce),J=Pe,te=Ce)):De(r.POLYGON_OFFSET_FILL)}function At(Y){Y?ue(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function It(Y){Y===void 0&&(Y=r.TEXTURE0+re-1),Se!==Y&&(r.activeTexture(Y),Se=Y)}function Qe(Y,Pe,Ce){Ce===void 0&&(Se===null?Ce=r.TEXTURE0+re-1:Ce=Se);let Be=xe[Ce];Be===void 0&&(Be={type:void 0,texture:void 0},xe[Ce]=Be),(Be.type!==Y||Be.texture!==Pe)&&(Se!==Ce&&(r.activeTexture(Ce),Se=Ce),r.bindTexture(Y,Pe||se[Y]),Be.type=Y,Be.texture=Pe)}function F(){const Y=xe[Se];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function ge(){try{r.texSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Me(){try{r.texSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function pe(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function $e(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ue(){try{r.texStorage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function je(){try{r.texStorage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function rt(){try{r.texImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ae(){try{r.texImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Re(Y){fe.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),fe.copy(Y))}function Ge(Y){Ee.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Ee.copy(Y))}function Fe(Y,Pe){let Ce=p.get(Pe);Ce===void 0&&(Ce=new WeakMap,p.set(Pe,Ce));let Be=Ce.get(Y);Be===void 0&&(Be=r.getUniformBlockIndex(Pe,Y.name),Ce.set(Y,Be))}function Le(Y,Pe){const Be=p.get(Pe).get(Y);m.get(Pe)!==Be&&(r.uniformBlockBinding(Pe,Be,Y.__bindingPointIndex),m.set(Pe,Be))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Se=null,xe={},g={},x=new WeakMap,M=[],E=null,A=!1,S=null,_=null,D=null,U=null,N=null,L=null,z=null,O=new wt(0,0,0),B=0,T=!1,w=null,H=null,q=null,J=null,te=null,fe.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ue,disable:De,bindFramebuffer:ke,drawBuffers:He,useProgram:dt,setBlending:_t,setMaterial:Nt,setFlipSided:ut,setCullFace:an,setLineWidth:k,setPolygonOffset:$t,setScissorTest:At,activeTexture:It,bindTexture:Qe,unbindTexture:F,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:rt,texImage3D:Ae,updateUBOMapping:Fe,uniformBlockBinding:Le,texStorage2D:Ue,texStorage3D:je,texSubImage2D:ge,texSubImage3D:Me,compressedTexSubImage2D:pe,compressedTexSubImage3D:$e,scissor:Re,viewport:Ge,reset:ht}}function u3(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,b){return M?new OffscreenCanvas(F,b):Mu("canvas")}function A(F,b,j){let ge=1;const Me=Qe(F);if((Me.width>j||Me.height>j)&&(ge=j/Math.max(Me.width,Me.height)),ge<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const pe=Math.floor(ge*Me.width),$e=Math.floor(ge*Me.height);g===void 0&&(g=E(pe,$e));const Ue=b?E(pe,$e):g;return Ue.width=pe,Ue.height=$e,Ue.getContext("2d").drawImage(F,0,0,pe,$e),ct("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+pe+"x"+$e+")."),Ue}else return"data"in F&&ct("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),F;return F}function S(F){return F.generateMipmaps}function _(F){r.generateMipmap(F)}function D(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(F,b,j,ge,Me=!1){if(F!==null){if(r[F]!==void 0)return r[F];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let pe=b;if(b===r.RED&&(j===r.FLOAT&&(pe=r.R32F),j===r.HALF_FLOAT&&(pe=r.R16F),j===r.UNSIGNED_BYTE&&(pe=r.R8)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(pe=r.R8UI),j===r.UNSIGNED_SHORT&&(pe=r.R16UI),j===r.UNSIGNED_INT&&(pe=r.R32UI),j===r.BYTE&&(pe=r.R8I),j===r.SHORT&&(pe=r.R16I),j===r.INT&&(pe=r.R32I)),b===r.RG&&(j===r.FLOAT&&(pe=r.RG32F),j===r.HALF_FLOAT&&(pe=r.RG16F),j===r.UNSIGNED_BYTE&&(pe=r.RG8)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(pe=r.RG8UI),j===r.UNSIGNED_SHORT&&(pe=r.RG16UI),j===r.UNSIGNED_INT&&(pe=r.RG32UI),j===r.BYTE&&(pe=r.RG8I),j===r.SHORT&&(pe=r.RG16I),j===r.INT&&(pe=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),j===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),j===r.UNSIGNED_INT&&(pe=r.RGB32UI),j===r.BYTE&&(pe=r.RGB8I),j===r.SHORT&&(pe=r.RGB16I),j===r.INT&&(pe=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),j===r.UNSIGNED_INT&&(pe=r.RGBA32UI),j===r.BYTE&&(pe=r.RGBA8I),j===r.SHORT&&(pe=r.RGBA16I),j===r.INT&&(pe=r.RGBA32I)),b===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),b===r.RGBA){const $e=Me?yu:Ct.getTransfer(ge);j===r.FLOAT&&(pe=r.RGBA32F),j===r.HALF_FLOAT&&(pe=r.RGBA16F),j===r.UNSIGNED_BYTE&&(pe=$e===kt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(F,b){let j;return F?b===null||b===Qi||b===ml?j=r.DEPTH24_STENCIL8:b===Yi?j=r.DEPTH32F_STENCIL8:b===pl&&(j=r.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qi||b===ml?j=r.DEPTH_COMPONENT24:b===Yi?j=r.DEPTH_COMPONENT32F:b===pl&&(j=r.DEPTH_COMPONENT16),j}function L(F,b){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==On&&F.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function z(F){const b=F.target;b.removeEventListener("dispose",z),B(b),b.isVideoTexture&&v.delete(b)}function O(F){const b=F.target;b.removeEventListener("dispose",O),w(b)}function B(F){const b=s.get(F);if(b.__webglInit===void 0)return;const j=F.source,ge=x.get(j);if(ge){const Me=ge[b.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&T(F),Object.keys(ge).length===0&&x.delete(j)}s.remove(F)}function T(F){const b=s.get(F);r.deleteTexture(b.__webglTexture);const j=F.source,ge=x.get(j);delete ge[b.__cacheKey],f.memory.textures--}function w(F){const b=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(b.__webglFramebuffer[ge]))for(let Me=0;Me<b.__webglFramebuffer[ge].length;Me++)r.deleteFramebuffer(b.__webglFramebuffer[ge][Me]);else r.deleteFramebuffer(b.__webglFramebuffer[ge]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ge])}else{if(Array.isArray(b.__webglFramebuffer))for(let ge=0;ge<b.__webglFramebuffer.length;ge++)r.deleteFramebuffer(b.__webglFramebuffer[ge]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ge=0;ge<b.__webglColorRenderbuffer.length;ge++)b.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ge]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=F.textures;for(let ge=0,Me=j.length;ge<Me;ge++){const pe=s.get(j[ge]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),f.memory.textures--),s.remove(j[ge])}s.remove(F)}let H=0;function q(){H=0}function J(){const F=H;return F>=l.maxTextures&&ct("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),H+=1,F}function te(F){const b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function re(F,b){const j=s.get(F);if(F.isVideoTexture&&At(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&j.__version!==F.version){const ge=F.image;if(ge===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{se(j,F,b);return}}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function P(F,b){const j=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){se(j,F,b);return}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function G(F,b){const j=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){se(j,F,b);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function X(F,b){const j=s.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&j.__version!==F.version){ue(j,F,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const Se={[Ih]:r.REPEAT,[Ta]:r.CLAMP_TO_EDGE,[Fh]:r.MIRRORED_REPEAT},xe={[On]:r.NEAREST,[N1]:r.NEAREST_MIPMAP_NEAREST,[Gc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Wd]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},I={[I1]:r.NEVER,[V1]:r.ALWAYS,[F1]:r.LESS,[Pp]:r.LEQUAL,[B1]:r.EQUAL,[zp]:r.GEQUAL,[H1]:r.GREATER,[G1]:r.NOTEQUAL};function ee(F,b){if(b.type===Yi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Wd||b.magFilter===Gc||b.magFilter===Wr||b.minFilter===Bn||b.minFilter===Wd||b.minFilter===Gc||b.minFilter===Wr)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,Se[b.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,Se[b.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,Se[b.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,xe[b.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===On||b.minFilter!==Gc&&b.minFilter!==Wr||b.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function fe(F,b){let j=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",z));const ge=b.source;let Me=x.get(ge);Me===void 0&&(Me={},x.set(ge,Me));const pe=te(b);if(pe!==F.__cacheKey){Me[pe]===void 0&&(Me[pe]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,j=!0),Me[pe].usedTimes++;const $e=Me[F.__cacheKey];$e!==void 0&&(Me[F.__cacheKey].usedTimes--,$e.usedTimes===0&&T(b)),F.__cacheKey=pe,F.__webglTexture=Me[pe].texture}return j}function Ee(F,b,j){return Math.floor(Math.floor(F/j)/b)}function Ne(F,b,j,ge){const pe=F.updateRanges;if(pe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,j,ge,b.data);else{pe.sort((Ae,Re)=>Ae.start-Re.start);let $e=0;for(let Ae=1;Ae<pe.length;Ae++){const Re=pe[$e],Ge=pe[Ae],Fe=Re.start+Re.count,Le=Ee(Ge.start,b.width,4),ht=Ee(Re.start,b.width,4);Ge.start<=Fe+1&&Le===ht&&Ee(Ge.start+Ge.count-1,b.width,4)===Le?Re.count=Math.max(Re.count,Ge.start+Ge.count-Re.start):(++$e,pe[$e]=Ge)}pe.length=$e+1;const Ue=r.getParameter(r.UNPACK_ROW_LENGTH),je=r.getParameter(r.UNPACK_SKIP_PIXELS),rt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ae=0,Re=pe.length;Ae<Re;Ae++){const Ge=pe[Ae],Fe=Math.floor(Ge.start/4),Le=Math.ceil(Ge.count/4),ht=Fe%b.width,Y=Math.floor(Fe/b.width),Pe=Le,Ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,ht,Y,Pe,Ce,j,ge,b.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,je),r.pixelStorei(r.UNPACK_SKIP_ROWS,rt)}}function se(F,b,j){let ge=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ge=r.TEXTURE_3D);const Me=fe(F,b),pe=b.source;i.bindTexture(ge,F.__webglTexture,r.TEXTURE0+j);const $e=s.get(pe);if(pe.version!==$e.__version||Me===!0){i.activeTexture(r.TEXTURE0+j);const Ue=Ct.getPrimaries(Ct.workingColorSpace),je=b.colorSpace===hr?null:Ct.getPrimaries(b.colorSpace),rt=b.colorSpace===hr||Ue===je?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Ae=A(b.image,!1,l.maxTextureSize);Ae=It(b,Ae);const Re=c.convert(b.format,b.colorSpace),Ge=c.convert(b.type);let Fe=U(b.internalFormat,Re,Ge,b.colorSpace,b.isVideoTexture);ee(ge,b);let Le;const ht=b.mipmaps,Y=b.isVideoTexture!==!0,Pe=$e.__version===void 0||Me===!0,Ce=pe.dataReady,Be=L(b,Ae);if(b.isDepthTexture)Fe=N(b.format===qr,b.type),Pe&&(Y?i.texStorage2D(r.TEXTURE_2D,1,Fe,Ae.width,Ae.height):i.texImage2D(r.TEXTURE_2D,0,Fe,Ae.width,Ae.height,0,Re,Ge,null));else if(b.isDataTexture)if(ht.length>0){Y&&Pe&&i.texStorage2D(r.TEXTURE_2D,Be,Fe,ht[0].width,ht[0].height);for(let Te=0,ye=ht.length;Te<ye;Te++)Le=ht[Te],Y?Ce&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Le.width,Le.height,Re,Ge,Le.data):i.texImage2D(r.TEXTURE_2D,Te,Fe,Le.width,Le.height,0,Re,Ge,Le.data);b.generateMipmaps=!1}else Y?(Pe&&i.texStorage2D(r.TEXTURE_2D,Be,Fe,Ae.width,Ae.height),Ce&&Ne(b,Ae,Re,Ge)):i.texImage2D(r.TEXTURE_2D,0,Fe,Ae.width,Ae.height,0,Re,Ge,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Y&&Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Fe,ht[0].width,ht[0].height,Ae.depth);for(let Te=0,ye=ht.length;Te<ye;Te++)if(Le=ht[Te],b.format!==Ii)if(Re!==null)if(Y){if(Ce)if(b.layerUpdates.size>0){const we=d_(Le.width,Le.height,b.format,b.type);for(const st of b.layerUpdates){const Bt=Le.data.subarray(st*we/Le.data.BYTES_PER_ELEMENT,(st+1)*we/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,st,Le.width,Le.height,1,Re,Bt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,Ae.depth,Re,Le.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,Fe,Le.width,Le.height,Ae.depth,0,Le.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ce&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,Ae.depth,Re,Ge,Le.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,Fe,Le.width,Le.height,Ae.depth,0,Re,Ge,Le.data)}else{Y&&Pe&&i.texStorage2D(r.TEXTURE_2D,Be,Fe,ht[0].width,ht[0].height);for(let Te=0,ye=ht.length;Te<ye;Te++)Le=ht[Te],b.format!==Ii?Re!==null?Y?Ce&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Le.width,Le.height,Re,Le.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,Fe,Le.width,Le.height,0,Le.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ce&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Le.width,Le.height,Re,Ge,Le.data):i.texImage2D(r.TEXTURE_2D,Te,Fe,Le.width,Le.height,0,Re,Ge,Le.data)}else if(b.isDataArrayTexture)if(Y){if(Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Fe,Ae.width,Ae.height,Ae.depth),Ce)if(b.layerUpdates.size>0){const Te=d_(Ae.width,Ae.height,b.format,b.type);for(const ye of b.layerUpdates){const we=Ae.data.subarray(ye*Te/Ae.data.BYTES_PER_ELEMENT,(ye+1)*Te/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,Ae.width,Ae.height,1,Re,Ge,we)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Re,Ge,Ae.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,Ae.width,Ae.height,Ae.depth,0,Re,Ge,Ae.data);else if(b.isData3DTexture)Y?(Pe&&i.texStorage3D(r.TEXTURE_3D,Be,Fe,Ae.width,Ae.height,Ae.depth),Ce&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Re,Ge,Ae.data)):i.texImage3D(r.TEXTURE_3D,0,Fe,Ae.width,Ae.height,Ae.depth,0,Re,Ge,Ae.data);else if(b.isFramebufferTexture){if(Pe)if(Y)i.texStorage2D(r.TEXTURE_2D,Be,Fe,Ae.width,Ae.height);else{let Te=Ae.width,ye=Ae.height;for(let we=0;we<Be;we++)i.texImage2D(r.TEXTURE_2D,we,Fe,Te,ye,0,Re,Ge,null),Te>>=1,ye>>=1}}else if(ht.length>0){if(Y&&Pe){const Te=Qe(ht[0]);i.texStorage2D(r.TEXTURE_2D,Be,Fe,Te.width,Te.height)}for(let Te=0,ye=ht.length;Te<ye;Te++)Le=ht[Te],Y?Ce&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Re,Ge,Le):i.texImage2D(r.TEXTURE_2D,Te,Fe,Re,Ge,Le);b.generateMipmaps=!1}else if(Y){if(Pe){const Te=Qe(Ae);i.texStorage2D(r.TEXTURE_2D,Be,Fe,Te.width,Te.height)}Ce&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Ge,Ae)}else i.texImage2D(r.TEXTURE_2D,0,Fe,Re,Ge,Ae);S(b)&&_(ge),$e.__version=pe.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function ue(F,b,j){if(b.image.length!==6)return;const ge=fe(F,b),Me=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+j);const pe=s.get(Me);if(Me.version!==pe.__version||ge===!0){i.activeTexture(r.TEXTURE0+j);const $e=Ct.getPrimaries(Ct.workingColorSpace),Ue=b.colorSpace===hr?null:Ct.getPrimaries(b.colorSpace),je=b.colorSpace===hr||$e===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const rt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let ye=0;ye<6;ye++)!rt&&!Ae?Re[ye]=A(b.image[ye],!0,l.maxCubemapSize):Re[ye]=Ae?b.image[ye].image:b.image[ye],Re[ye]=It(b,Re[ye]);const Ge=Re[0],Fe=c.convert(b.format,b.colorSpace),Le=c.convert(b.type),ht=U(b.internalFormat,Fe,Le,b.colorSpace),Y=b.isVideoTexture!==!0,Pe=pe.__version===void 0||ge===!0,Ce=Me.dataReady;let Be=L(b,Ge);ee(r.TEXTURE_CUBE_MAP,b);let Te;if(rt){Y&&Pe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ht,Ge.width,Ge.height);for(let ye=0;ye<6;ye++){Te=Re[ye].mipmaps;for(let we=0;we<Te.length;we++){const st=Te[we];b.format!==Ii?Fe!==null?Y?Ce&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,0,0,st.width,st.height,Fe,st.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,ht,st.width,st.height,0,st.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,0,0,st.width,st.height,Fe,Le,st.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,ht,st.width,st.height,0,Fe,Le,st.data)}}}else{if(Te=b.mipmaps,Y&&Pe){Te.length>0&&Be++;const ye=Qe(Re[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ht,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ae){Y?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Re[ye].width,Re[ye].height,Fe,Le,Re[ye].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ht,Re[ye].width,Re[ye].height,0,Fe,Le,Re[ye].data);for(let we=0;we<Te.length;we++){const Bt=Te[we].image[ye].image;Y?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,0,0,Bt.width,Bt.height,Fe,Le,Bt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,ht,Bt.width,Bt.height,0,Fe,Le,Bt.data)}}else{Y?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Fe,Le,Re[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ht,Fe,Le,Re[ye]);for(let we=0;we<Te.length;we++){const st=Te[we];Y?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,0,0,Fe,Le,st.image[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,ht,Fe,Le,st.image[ye])}}}S(b)&&_(r.TEXTURE_CUBE_MAP),pe.__version=Me.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function De(F,b,j,ge,Me,pe){const $e=c.convert(j.format,j.colorSpace),Ue=c.convert(j.type),je=U(j.internalFormat,$e,Ue,j.colorSpace),rt=s.get(b),Ae=s.get(j);if(Ae.__renderTarget=b,!rt.__hasExternalTextures){const Re=Math.max(1,b.width>>pe),Ge=Math.max(1,b.height>>pe);Me===r.TEXTURE_3D||Me===r.TEXTURE_2D_ARRAY?i.texImage3D(Me,pe,je,Re,Ge,b.depth,0,$e,Ue,null):i.texImage2D(Me,pe,je,Re,Ge,0,$e,Ue,null)}i.bindFramebuffer(r.FRAMEBUFFER,F),$t(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,Me,Ae.__webglTexture,0,k(b)):(Me===r.TEXTURE_2D||Me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,Me,Ae.__webglTexture,pe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(F,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,F),b.depthBuffer){const ge=b.depthTexture,Me=ge&&ge.isDepthTexture?ge.type:null,pe=N(b.stencilBuffer,Me),$e=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;$t(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),pe,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),pe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$e,r.RENDERBUFFER,F)}else{const ge=b.textures;for(let Me=0;Me<ge.length;Me++){const pe=ge[Me],$e=c.convert(pe.format,pe.colorSpace),Ue=c.convert(pe.type),je=U(pe.internalFormat,$e,Ue,pe.colorSpace);$t(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),je,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),je,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,je,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function He(F,b,j){const ge=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=s.get(b.depthTexture);if(Me.__renderTarget=b,(!Me.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ge){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),Me.__webglTexture===void 0){Me.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Me.__webglTexture),ee(r.TEXTURE_CUBE_MAP,b.depthTexture);const rt=c.convert(b.depthTexture.format),Ae=c.convert(b.depthTexture.type);let Re;b.depthTexture.format===Ua?Re=r.DEPTH_COMPONENT24:b.depthTexture.format===qr&&(Re=r.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Re,b.width,b.height,0,rt,Ae,null)}}else re(b.depthTexture,0);const pe=Me.__webglTexture,$e=k(b),Ue=ge?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,je=b.depthTexture.format===qr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ua)$t(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,je,Ue,pe,0,$e):r.framebufferTexture2D(r.FRAMEBUFFER,je,Ue,pe,0);else if(b.depthTexture.format===qr)$t(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,je,Ue,pe,0,$e):r.framebufferTexture2D(r.FRAMEBUFFER,je,Ue,pe,0);else throw new Error("Unknown depthTexture format")}function dt(F){const b=s.get(F),j=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){const ge=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ge){const Me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ge.removeEventListener("dispose",Me)};ge.addEventListener("dispose",Me),b.__depthDisposeCallback=Me}b.__boundDepthTexture=ge}if(F.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let ge=0;ge<6;ge++)He(b.__webglFramebuffer[ge],F,ge);else{const ge=F.texture.mipmaps;ge&&ge.length>0?He(b.__webglFramebuffer[0],F,0):He(b.__webglFramebuffer,F,0)}else if(j){b.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ge]),b.__webglDepthbuffer[ge]===void 0)b.__webglDepthbuffer[ge]=r.createRenderbuffer(),ke(b.__webglDepthbuffer[ge],F,!1);else{const Me=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,pe)}}else{const ge=F.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ke(b.__webglDepthbuffer,F,!1);else{const Me=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,pe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(F,b,j){const ge=s.get(F);b!==void 0&&De(ge.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&dt(F)}function St(F){const b=F.texture,j=s.get(F),ge=s.get(b);F.addEventListener("dispose",O);const Me=F.textures,pe=F.isWebGLCubeRenderTarget===!0,$e=Me.length>1;if($e||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=b.version,f.memory.textures++),pe){j.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[Ue]=[];for(let je=0;je<b.mipmaps.length;je++)j.__webglFramebuffer[Ue][je]=r.createFramebuffer()}else j.__webglFramebuffer[Ue]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)j.__webglFramebuffer[Ue]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if($e)for(let Ue=0,je=Me.length;Ue<je;Ue++){const rt=s.get(Me[Ue]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),f.memory.textures++)}if(F.samples>0&&$t(F)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Me.length;Ue++){const je=Me[Ue];j.__webglColorRenderbuffer[Ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Ue]);const rt=c.convert(je.format,je.colorSpace),Ae=c.convert(je.type),Re=U(je.internalFormat,rt,Ae,je.colorSpace,F.isXRRenderTarget===!0),Ge=k(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,Re,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,j.__webglColorRenderbuffer[Ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(j.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),ee(r.TEXTURE_CUBE_MAP,b);for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let je=0;je<b.mipmaps.length;je++)De(j.__webglFramebuffer[Ue][je],F,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,je);else De(j.__webglFramebuffer[Ue],F,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(b)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if($e){for(let Ue=0,je=Me.length;Ue<je;Ue++){const rt=Me[Ue],Ae=s.get(rt);let Re=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Re=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Re,Ae.__webglTexture),ee(Re,rt),De(j.__webglFramebuffer,F,rt,r.COLOR_ATTACHMENT0+Ue,Re,0),S(rt)&&_(Re)}i.unbindTexture()}else{let Ue=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ue=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,ge.__webglTexture),ee(Ue,b),b.mipmaps&&b.mipmaps.length>0)for(let je=0;je<b.mipmaps.length;je++)De(j.__webglFramebuffer[je],F,b,r.COLOR_ATTACHMENT0,Ue,je);else De(j.__webglFramebuffer,F,b,r.COLOR_ATTACHMENT0,Ue,0);S(b)&&_(Ue),i.unbindTexture()}F.depthBuffer&&dt(F)}function _t(F){const b=F.textures;for(let j=0,ge=b.length;j<ge;j++){const Me=b[j];if(S(Me)){const pe=D(F),$e=s.get(Me).__webglTexture;i.bindTexture(pe,$e),_(pe),i.unbindTexture()}}}const Nt=[],ut=[];function an(F){if(F.samples>0){if($t(F)===!1){const b=F.textures,j=F.width,ge=F.height;let Me=r.COLOR_BUFFER_BIT;const pe=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$e=s.get(F),Ue=b.length>1;if(Ue)for(let rt=0;rt<b.length;rt++)i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const je=F.texture.mipmaps;je&&je.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let rt=0;rt<b.length;rt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Me|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Me|=r.STENCIL_BUFFER_BIT)),Ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$e.__webglColorRenderbuffer[rt]);const Ae=s.get(b[rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,j,ge,0,0,j,ge,Me,r.NEAREST),m===!0&&(Nt.length=0,ut.length=0,Nt.push(r.COLOR_ATTACHMENT0+rt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Nt.push(pe),ut.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ue)for(let rt=0;rt<b.length;rt++){i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,$e.__webglColorRenderbuffer[rt]);const Ae=s.get(b[rt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,Ae,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const b=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function k(F){return Math.min(l.maxSamples,F.samples)}function $t(F){const b=s.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function At(F){const b=f.render.frame;v.get(F)!==b&&(v.set(F,b),F.update())}function It(F,b){const j=F.colorSpace,ge=F.format,Me=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||j!==$s&&j!==hr&&(Ct.getTransfer(j)===kt?(ge!==Ii||Me!==Ei)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",j)),b}function Qe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=q,this.setTexture2D=re,this.setTexture2DArray=P,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=jt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function f3(r,e){function i(s,l=hr){let c;const f=Ct.getTransfer(l);if(s===Ei)return r.UNSIGNED_BYTE;if(s===Dp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Up)return r.UNSIGNED_SHORT_5_5_5_1;if(s===wx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Dx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Rx)return r.BYTE;if(s===Cx)return r.SHORT;if(s===pl)return r.UNSIGNED_SHORT;if(s===wp)return r.INT;if(s===Qi)return r.UNSIGNED_INT;if(s===Yi)return r.FLOAT;if(s===Da)return r.HALF_FLOAT;if(s===Ux)return r.ALPHA;if(s===Lx)return r.RGB;if(s===Ii)return r.RGBA;if(s===Ua)return r.DEPTH_COMPONENT;if(s===qr)return r.DEPTH_STENCIL;if(s===Nx)return r.RED;if(s===Lp)return r.RED_INTEGER;if(s===Js)return r.RG;if(s===Np)return r.RG_INTEGER;if(s===Op)return r.RGBA_INTEGER;if(s===hu||s===pu||s===mu||s===gu)if(f===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===hu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===hu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bh||s===Hh||s===Gh||s===Vh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Bh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kh||s===Xh||s===Wh||s===qh||s===Yh||s===jh||s===Zh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===kh||s===Xh)return f===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Wh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===qh)return c.COMPRESSED_R11_EAC;if(s===Yh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===jh)return c.COMPRESSED_RG11_EAC;if(s===Zh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Kh||s===Qh||s===Jh||s===$h||s===ep||s===tp||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===cp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Kh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ep)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===up||s===fp||s===dp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===up)return f===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hp||s===pp||s===mp||s===gp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===hp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ml?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const d3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h3=`
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

}`;class p3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Yx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ji({vertexShader:d3,fragmentShader:h3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new li(new Ru(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m3 extends ao{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,g=null,x=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",S=new p3,_={},D=i.getContextAttributes();let U=null,N=null;const L=[],z=[],O=new Xt;let B=null;const T=new bi;T.viewport=new cn;const w=new bi;w.viewport=new cn;const H=[T,w],q=new TT;let J=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ue=L[se];return ue===void 0&&(ue=new ph,L[se]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(se){let ue=L[se];return ue===void 0&&(ue=new ph,L[se]=ue),ue.getGripSpace()},this.getHand=function(se){let ue=L[se];return ue===void 0&&(ue=new ph,L[se]=ue),ue.getHandSpace()};function re(se){const ue=z.indexOf(se.inputSource);if(ue===-1)return;const De=L[ue];De!==void 0&&(De.update(se.inputSource,se.frame,p||f),De.dispatchEvent({type:se.type,data:se.inputSource}))}function P(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",G);for(let se=0;se<L.length;se++){const ue=z[se];ue!==null&&(z[se]=null,L[se].disconnect(ue))}J=null,te=null,S.reset();for(const se in _)delete _[se];e.setRenderTarget(U),M=null,x=null,g=null,l=null,N=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(B),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,s.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,s.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",P),l.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await i.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,ke=null,He=null;D.depth&&(He=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=D.stencil?qr:Ua,ke=D.stencil?ml:Qi);const dt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(dt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Ki(x.textureWidth,x.textureHeight,{format:Ii,type:Ei,depthTexture:new vl(x.textureWidth,x.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const De={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Ki(M.framebufferWidth,M.framebufferHeight,{format:Ii,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ne.setContext(l),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(se){for(let ue=0;ue<se.removed.length;ue++){const De=se.removed[ue],ke=z.indexOf(De);ke>=0&&(z[ke]=null,L[ke].disconnect(De))}for(let ue=0;ue<se.added.length;ue++){const De=se.added[ue];let ke=z.indexOf(De);if(ke===-1){for(let dt=0;dt<L.length;dt++)if(dt>=z.length){z.push(De),ke=dt;break}else if(z[dt]===null){z[dt]=De,ke=dt;break}if(ke===-1)break}const He=L[ke];He&&He.connect(De)}}const X=new ce,Se=new ce;function xe(se,ue,De){X.setFromMatrixPosition(ue.matrixWorld),Se.setFromMatrixPosition(De.matrixWorld);const ke=X.distanceTo(Se),He=ue.projectionMatrix.elements,dt=De.projectionMatrix.elements,jt=He[14]/(He[10]-1),St=He[14]/(He[10]+1),_t=(He[9]+1)/He[5],Nt=(He[9]-1)/He[5],ut=(He[8]-1)/He[0],an=(dt[8]+1)/dt[0],k=jt*ut,$t=jt*an,At=ke/(-ut+an),It=At*-ut;if(ue.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(It),se.translateZ(At),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),He[10]===-1)se.projectionMatrix.copy(ue.projectionMatrix),se.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Qe=jt+At,F=St+At,b=k-It,j=$t+(ke-It),ge=_t*St/F*Qe,Me=Nt*St/F*Qe;se.projectionMatrix.makePerspective(b,j,ge,Me,Qe,F),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function I(se,ue){ue===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ue.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let ue=se.near,De=se.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(De=S.depthFar)),q.near=w.near=T.near=ue,q.far=w.far=T.far=De,(J!==q.near||te!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),J=q.near,te=q.far),q.layers.mask=se.layers.mask|6,T.layers.mask=q.layers.mask&3,w.layers.mask=q.layers.mask&5;const ke=se.parent,He=q.cameras;I(q,ke);for(let dt=0;dt<He.length;dt++)I(He[dt],ke);He.length===2?xe(q,T,w):q.projectionMatrix.copy(T.projectionMatrix),ee(se,q,ke)};function ee(se,ue,De){De===null?se.matrix.copy(ue.matrixWorld):(se.matrix.copy(De.matrixWorld),se.matrix.invert(),se.matrix.multiply(ue.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ue.projectionMatrix),se.projectionMatrixInverse.copy(ue.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=vp*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(se){m=se,x!==null&&(x.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(se){return _[se]};let fe=null;function Ee(se,ue){if(v=ue.getViewerPose(p||f),E=ue,v!==null){const De=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let ke=!1;De.length!==q.cameras.length&&(q.cameras.length=0,ke=!0);for(let St=0;St<De.length;St++){const _t=De[St];let Nt=null;if(M!==null)Nt=M.getViewport(_t);else{const an=g.getViewSubImage(x,_t);Nt=an.viewport,St===0&&(e.setRenderTargetTextures(N,an.colorTexture,an.depthStencilTexture),e.setRenderTarget(N))}let ut=H[St];ut===void 0&&(ut=new bi,ut.layers.enable(St),ut.viewport=new cn,H[St]=ut),ut.matrix.fromArray(_t.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(_t.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),St===0&&(q.matrix.copy(ut.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ke===!0&&q.cameras.push(ut)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=s.getBinding();const St=g.getDepthInformation(De[0]);St&&St.isValid&&St.texture&&S.init(St,l.renderState)}if(He&&He.includes("camera-access")&&A){e.state.unbindTexture(),g=s.getBinding();for(let St=0;St<De.length;St++){const _t=De[St].camera;if(_t){let Nt=_[_t];Nt||(Nt=new Yx,_[_t]=Nt);const ut=g.getCameraImage(_t);Nt.sourceTexture=ut}}}}for(let De=0;De<L.length;De++){const ke=z[De],He=L[De];ke!==null&&He!==void 0&&He.update(ke,ue,p||f)}fe&&fe(se,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Ne=new Zx;Ne.setAnimationLoop(Ee),this.setAnimationLoop=function(se){fe=se},this.dispose=function(){}}}const Hr=new La,g3=new un;function v3(r,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,Gx(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,D,U,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,N)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),A(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,D,U):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Qn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Qn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const D=e.get(_),U=D.envMap,N=D.envMapRotation;U&&(S.envMap.value=U,Hr.copy(N),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),S.envMapRotation.value.setFromMatrix4(g3.makeRotationFromEuler(Hr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,D,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*D,S.scale.value=U*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,D){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Qn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const D=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function _3(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const N=U.program;s.uniformBlockBinding(D,N)}function p(D,U){let N=l[D.id];N===void 0&&(E(D),N=v(D),l[D.id]=N,D.addEventListener("dispose",S));const L=U.program;s.updateUBOMapping(D,L);const z=e.render.frame;c[D.id]!==z&&(x(D),c[D.id]=z)}function v(D){const U=g();D.__bindingPointIndex=U;const N=r.createBuffer(),L=D.__size,z=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,L,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,N),N}function g(){for(let D=0;D<h;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const U=l[D.id],N=D.uniforms,L=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let z=0,O=N.length;z<O;z++){const B=Array.isArray(N[z])?N[z]:[N[z]];for(let T=0,w=B.length;T<w;T++){const H=B[T];if(M(H,z,T,L)===!0){const q=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let te=0;for(let re=0;re<J.length;re++){const P=J[re],G=A(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,q+te,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,te),te+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,U,N,L){const z=D.value,O=U+"_"+N;if(L[O]===void 0)return typeof z=="number"||typeof z=="boolean"?L[O]=z:L[O]=z.clone(),!0;{const B=L[O];if(typeof z=="number"||typeof z=="boolean"){if(B!==z)return L[O]=z,!0}else if(B.equals(z)===!1)return B.copy(z),!0}return!1}function E(D){const U=D.uniforms;let N=0;const L=16;for(let O=0,B=U.length;O<B;O++){const T=Array.isArray(U[O])?U[O]:[U[O]];for(let w=0,H=T.length;w<H;w++){const q=T[w],J=Array.isArray(q.value)?q.value:[q.value];for(let te=0,re=J.length;te<re;te++){const P=J[te],G=A(P),X=N%L,Se=X%G.boundary,xe=X+Se;N+=Se,xe!==0&&L-xe<G.storage&&(N+=L-xe),q.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=G.storage}}}const z=N%L;return z>0&&(N+=L-z),D.__size=N,D.__cache={},this}function A(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",D),U}function S(D){const U=D.target;U.removeEventListener("dispose",S);const N=f.indexOf(U.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const x3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function y3(){return Wi===null&&(Wi=new gT(x3,16,16,Js,Da),Wi.name="DFG_LUT",Wi.minFilter=Bn,Wi.magFilter=Bn,Wi.wrapS=Ta,Wi.wrapT=Ta,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class S3{constructor(e={}){const{canvas:i=k1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Ei}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const A=M,S=new Set([Op,Np,Lp]),_=new Set([Ei,Qi,pl,ml,Dp,Up]),D=new Uint32Array(4),U=new Int32Array(4);let N=null,L=null;const z=[],O=[];let B=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=Mi;let H=0,q=0,J=null,te=-1,re=null;const P=new cn,G=new cn;let X=null;const Se=new wt(0);let xe=0,I=i.width,ee=i.height,fe=1,Ee=null,Ne=null;const se=new cn(0,0,I,ee),ue=new cn(0,0,I,ee);let De=!1;const ke=new Wx;let He=!1,dt=!1;const jt=new un,St=new ce,_t=new cn,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function an(){return J===null?fe:1}let k=s;function $t(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Cp}`),i.addEventListener("webglcontextlost",st,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),k===null){const Z="webgl2";if(k=$t(Z,C),k===null)throw $t(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Lt("WebGLRenderer: "+C.message),C}let At,It,Qe,F,b,j,ge,Me,pe,$e,Ue,je,rt,Ae,Re,Ge,Fe,Le,ht,Y,Pe,Ce,Be,Te;function ye(){At=new yC(k),At.init(),Ce=new f3(k,At),It=new fC(k,At,e,Ce),Qe=new c3(k,At),It.reversedDepthBuffer&&x&&Qe.buffers.depth.setReversed(!0),F=new bC(k),b=new j2,j=new u3(k,At,Qe,b,It,Ce,F),ge=new hC(T),Me=new xC(T),pe=new RT(k),Be=new cC(k,pe),$e=new SC(k,pe,F,Be),Ue=new TC(k,$e,pe,F),ht=new EC(k,It,j),Ge=new dC(b),je=new Y2(T,ge,Me,At,It,Be,Ge),rt=new v3(T,b),Ae=new K2,Re=new n3(At),Le=new lC(T,ge,Me,Qe,Ue,E,m),Fe=new o3(T,Ue,It),Te=new _3(k,F,It,Qe),Y=new uC(k,At,F),Pe=new MC(k,At,F),F.programs=je.programs,T.capabilities=It,T.extensions=At,T.properties=b,T.renderLists=Ae,T.shadowMap=Fe,T.state=Qe,T.info=F}ye(),A!==Ei&&(B=new RC(A,i.width,i.height,l,c));const we=new m3(T,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=At.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=At.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(I,ee,!1))},this.getSize=function(C){return C.set(I,ee)},this.setSize=function(C,Z,de=!0){if(we.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,ee=Z,i.width=Math.floor(C*fe),i.height=Math.floor(Z*fe),de===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),B!==null&&B.setSize(i.width,i.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(I*fe,ee*fe).floor()},this.setDrawingBufferSize=function(C,Z,de){I=C,ee=Z,fe=de,i.width=Math.floor(C*de),i.height=Math.floor(Z*de),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(A===Ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(se)},this.setViewport=function(C,Z,de,oe){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,Z,de,oe),Qe.viewport(P.copy(se).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(ue)},this.setScissor=function(C,Z,de,oe){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,Z,de,oe),Qe.scissor(G.copy(ue).multiplyScalar(fe).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){Qe.setScissorTest(De=C)},this.setOpaqueSort=function(C){Ee=C},this.setTransparentSort=function(C){Ne=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,de=!0){let oe=0;if(C){let $=!1;if(J!==null){const Oe=J.texture.format;$=S.has(Oe)}if($){const Oe=J.texture.type,Ve=_.has(Oe),ze=Le.getClearColor(),Xe=Le.getClearAlpha(),Ze=ze.r,nt=ze.g,Ke=ze.b;Ve?(D[0]=Ze,D[1]=nt,D[2]=Ke,D[3]=Xe,k.clearBufferuiv(k.COLOR,0,D)):(U[0]=Ze,U[1]=nt,U[2]=Ke,U[3]=Xe,k.clearBufferiv(k.COLOR,0,U))}else oe|=k.COLOR_BUFFER_BIT}Z&&(oe|=k.DEPTH_BUFFER_BIT),de&&(oe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",st,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Le.dispose(),Ae.dispose(),Re.dispose(),b.dispose(),ge.dispose(),Me.dispose(),Ue.dispose(),Be.dispose(),Te.dispose(),je.dispose(),we.dispose(),we.removeEventListener("sessionstart",Jr),we.removeEventListener("sessionend",lo),Bi.stop()};function st(C){C.preventDefault(),Yv("WebGLRenderer: Context Lost."),w=!0}function Bt(){Yv("WebGLRenderer: Context Restored."),w=!1;const C=F.autoReset,Z=Fe.enabled,de=Fe.autoUpdate,oe=Fe.needsUpdate,$=Fe.type;ye(),F.autoReset=C,Fe.enabled=Z,Fe.autoUpdate=de,Fe.needsUpdate=oe,Fe.type=$}function Rt(C){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pn(C){const Z=C.target;Z.removeEventListener("dispose",Pn),Ri(Z)}function Ri(C){Rl(C),b.remove(C)}function Rl(C){const Z=b.get(C).programs;Z!==void 0&&(Z.forEach(function(de){je.releaseProgram(de)}),C.isShaderMaterial&&je.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,de,oe,$,Oe){Z===null&&(Z=Nt);const Ve=$.isMesh&&$.matrixWorld.determinant()<0,ze=gr(C,Z,de,oe,$);Qe.setMaterial(oe,Ve);let Xe=de.index,Ze=1;if(oe.wireframe===!0){if(Xe=$e.getWireframeAttribute(de),Xe===void 0)return;Ze=2}const nt=de.drawRange,Ke=de.attributes.position;let it=nt.start*Ze,Ot=(nt.start+nt.count)*Ze;Oe!==null&&(it=Math.max(it,Oe.start*Ze),Ot=Math.min(Ot,(Oe.start+Oe.count)*Ze)),Xe!==null?(it=Math.max(it,0),Ot=Math.min(Ot,Xe.count)):Ke!=null&&(it=Math.max(it,0),Ot=Math.min(Ot,Ke.count));const en=Ot-it;if(en<0||en===1/0)return;Be.setup($,oe,ze,de,Xe);let Kt,Ft=Y;if(Xe!==null&&(Kt=pe.get(Xe),Ft=Pe,Ft.setIndex(Kt)),$.isMesh)oe.wireframe===!0?(Qe.setLineWidth(oe.wireframeLinewidth*an()),Ft.setMode(k.LINES)):Ft.setMode(k.TRIANGLES);else if($.isLine){let et=oe.linewidth;et===void 0&&(et=1),Qe.setLineWidth(et*an()),$.isLineSegments?Ft.setMode(k.LINES):$.isLineLoop?Ft.setMode(k.LINE_LOOP):Ft.setMode(k.LINE_STRIP)}else $.isPoints?Ft.setMode(k.POINTS):$.isSprite&&Ft.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)gl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const et=$._multiDrawStarts,Pt=$._multiDrawCounts,ot=$._multiDrawCount,Tn=Xe?pe.get(Xe).bytesPerElement:1,$i=b.get(oe).currentProgram.getUniforms();for(let An=0;An<ot;An++)$i.setValue(k,"_gl_DrawID",An),Ft.render(et[An]/Tn,Pt[An])}else if($.isInstancedMesh)Ft.renderInstances(it,en,$.count);else if(de.isInstancedBufferGeometry){const et=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Pt=Math.min(de.instanceCount,et);Ft.renderInstances(it,en,Pt)}else Ft.render(it,en)};function so(C,Z,de){C.transparent===!0&&C.side===Ea&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,es(C,Z,de),C.side=mr,C.needsUpdate=!0,es(C,Z,de),C.side=Ea):es(C,Z,de)}this.compile=function(C,Z,de=null){de===null&&(de=C),L=Re.get(de),L.init(Z),O.push(L),de.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),C!==de&&C.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),L.setupLights();const oe=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Oe=$.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const ze=Oe[Ve];so(ze,de,$),oe.add(ze)}else so(Oe,de,$),oe.add(Oe)}),L=O.pop(),oe},this.compileAsync=function(C,Z,de=null){const oe=this.compile(C,Z,de);return new Promise($=>{function Oe(){if(oe.forEach(function(Ve){b.get(Ve).currentProgram.isReady()&&oe.delete(Ve)}),oe.size===0){$(C);return}setTimeout(Oe,10)}At.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Qr=null;function oo(C){Qr&&Qr(C)}function Jr(){Bi.stop()}function lo(){Bi.start()}const Bi=new Zx;Bi.setAnimationLoop(oo),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(C){Qr=C,we.setAnimationLoop(C),C===null?Bi.stop():Bi.start()},we.addEventListener("sessionstart",Jr),we.addEventListener("sessionend",lo),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const de=we.enabled===!0&&we.isPresenting===!0,oe=B!==null&&(J===null||de)&&B.begin(T,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(Z),Z=we.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,Z,J),L=Re.get(C,O.length),L.init(Z),O.push(L),jt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ke.setFromProjectionMatrix(jt,ji,Z.reversedDepth),dt=this.localClippingEnabled,He=Ge.init(this.clippingPlanes,dt),N=Ae.get(C,z.length),N.init(),z.push(N),we.enabled===!0&&we.isPresenting===!0){const Ve=T.xr.getDepthSensingMesh();Ve!==null&&fi(Ve,Z,-1/0,T.sortObjects)}fi(C,Z,0,T.sortObjects),N.finish(),T.sortObjects===!0&&N.sort(Ee,Ne),ut=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ut&&Le.addToRenderList(N,C),this.info.render.frame++,He===!0&&Ge.beginShadows();const $=L.state.shadowsArray;if(Fe.render($,C,Z),He===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&B.hasRenderPass())===!1){const Ve=N.opaque,ze=N.transmissive;if(L.setupLights(),Z.isArrayCamera){const Xe=Z.cameras;if(ze.length>0)for(let Ze=0,nt=Xe.length;Ze<nt;Ze++){const Ke=Xe[Ze];En(Ve,ze,C,Ke)}ut&&Le.render(C);for(let Ze=0,nt=Xe.length;Ze<nt;Ze++){const Ke=Xe[Ze];fn(N,C,Ke,Ke.viewport)}}else ze.length>0&&En(Ve,ze,C,Z),ut&&Le.render(C),fn(N,C,Z)}J!==null&&q===0&&(j.updateMultisampleRenderTarget(J),j.updateRenderTargetMipmap(J)),oe&&B.end(T),C.isScene===!0&&C.onAfterRender(T,C,Z),Be.resetDefaultState(),te=-1,re=null,O.pop(),O.length>0?(L=O[O.length-1],He===!0&&Ge.setGlobalState(T.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?N=z[z.length-1]:N=null};function fi(C,Z,de,oe){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)de=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){oe&&_t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(jt);const Ve=Ue.update(C),ze=C.material;ze.visible&&N.push(C,Ve,ze,de,_t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const Ve=Ue.update(C),ze=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_t.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),_t.copy(Ve.boundingSphere.center)),_t.applyMatrix4(C.matrixWorld).applyMatrix4(jt)),Array.isArray(ze)){const Xe=Ve.groups;for(let Ze=0,nt=Xe.length;Ze<nt;Ze++){const Ke=Xe[Ze],it=ze[Ke.materialIndex];it&&it.visible&&N.push(C,Ve,it,de,_t.z,Ke)}}else ze.visible&&N.push(C,Ve,ze,de,_t.z,null)}}const Oe=C.children;for(let Ve=0,ze=Oe.length;Ve<ze;Ve++)fi(Oe[Ve],Z,de,oe)}function fn(C,Z,de,oe){const{opaque:$,transmissive:Oe,transparent:Ve}=C;L.setupLightsView(de),He===!0&&Ge.setGlobalState(T.clippingPlanes,de),oe&&Qe.viewport(P.copy(oe)),$.length>0&&Ci($,Z,de),Oe.length>0&&Ci(Oe,Z,de),Ve.length>0&&Ci(Ve,Z,de),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function En(C,Z,de,oe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[oe.id]===void 0){const it=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[oe.id]=new Ki(1,1,{generateMipmaps:!0,type:it?Da:Ei,minFilter:Wr,samples:It.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Oe=L.state.transmissionRenderTarget[oe.id],Ve=oe.viewport||P;Oe.setSize(Ve.z*T.transmissionResolutionScale,Ve.w*T.transmissionResolutionScale);const ze=T.getRenderTarget(),Xe=T.getActiveCubeFace(),Ze=T.getActiveMipmapLevel();T.setRenderTarget(Oe),T.getClearColor(Se),xe=T.getClearAlpha(),xe<1&&T.setClearColor(16777215,.5),T.clear(),ut&&Le.render(de);const nt=T.toneMapping;T.toneMapping=Zi;const Ke=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),L.setupLightsView(oe),He===!0&&Ge.setGlobalState(T.clippingPlanes,oe),Ci(C,de,oe),j.updateMultisampleRenderTarget(Oe),j.updateRenderTargetMipmap(Oe),At.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ot=0,en=Z.length;Ot<en;Ot++){const Kt=Z[Ot],{object:Ft,geometry:et,material:Pt,group:ot}=Kt;if(Pt.side===Ea&&Ft.layers.test(oe.layers)){const Tn=Pt.side;Pt.side=Qn,Pt.needsUpdate=!0,$r(Ft,de,oe,et,Pt,ot),Pt.side=Tn,Pt.needsUpdate=!0,it=!0}}it===!0&&(j.updateMultisampleRenderTarget(Oe),j.updateRenderTargetMipmap(Oe))}T.setRenderTarget(ze,Xe,Ze),T.setClearColor(Se,xe),Ke!==void 0&&(oe.viewport=Ke),T.toneMapping=nt}function Ci(C,Z,de){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,Oe=C.length;$<Oe;$++){const Ve=C[$],{object:ze,geometry:Xe,group:Ze}=Ve;let nt=Ve.material;nt.allowOverride===!0&&oe!==null&&(nt=oe),ze.layers.test(de.layers)&&$r(ze,Z,de,Xe,nt,Ze)}}function $r(C,Z,de,oe,$,Oe){C.onBeforeRender(T,Z,de,oe,$,Oe),C.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(T,Z,de,oe,C,Oe),$.transparent===!0&&$.side===Ea&&$.forceSinglePass===!1?($.side=Qn,$.needsUpdate=!0,T.renderBufferDirect(de,Z,oe,$,C,Oe),$.side=mr,$.needsUpdate=!0,T.renderBufferDirect(de,Z,oe,$,C,Oe),$.side=Ea):T.renderBufferDirect(de,Z,oe,$,C,Oe),C.onAfterRender(T,Z,de,oe,$,Oe)}function es(C,Z,de){Z.isScene!==!0&&(Z=Nt);const oe=b.get(C),$=L.state.lights,Oe=L.state.shadowsArray,Ve=$.state.version,ze=je.getParameters(C,$.state,Oe,Z,de),Xe=je.getProgramCacheKey(ze);let Ze=oe.programs;oe.environment=C.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(C.isMeshStandardMaterial?Me:ge).get(C.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",Pn),Ze=new Map,oe.programs=Ze);let nt=Ze.get(Xe);if(nt!==void 0){if(oe.currentProgram===nt&&oe.lightsStateVersion===Ve)return co(C,ze),nt}else ze.uniforms=je.getUniforms(C),C.onBeforeCompile(ze,T),nt=je.acquireProgram(ze,Xe),Ze.set(Xe,nt),oe.uniforms=ze.uniforms;const Ke=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=Ge.uniform),co(C,ze),oe.needsLights=Oa(C),oe.lightsStateVersion=Ve,oe.needsLights&&(Ke.ambientLightColor.value=$.state.ambient,Ke.lightProbe.value=$.state.probe,Ke.directionalLights.value=$.state.directional,Ke.directionalLightShadows.value=$.state.directionalShadow,Ke.spotLights.value=$.state.spot,Ke.spotLightShadows.value=$.state.spotShadow,Ke.rectAreaLights.value=$.state.rectArea,Ke.ltc_1.value=$.state.rectAreaLTC1,Ke.ltc_2.value=$.state.rectAreaLTC2,Ke.pointLights.value=$.state.point,Ke.pointLightShadows.value=$.state.pointShadow,Ke.hemisphereLights.value=$.state.hemi,Ke.directionalShadowMap.value=$.state.directionalShadowMap,Ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ke.spotShadowMap.value=$.state.spotShadowMap,Ke.spotLightMatrix.value=$.state.spotLightMatrix,Ke.spotLightMap.value=$.state.spotLightMap,Ke.pointShadowMap.value=$.state.pointShadowMap,Ke.pointShadowMatrix.value=$.state.pointShadowMatrix),oe.currentProgram=nt,oe.uniformsList=null,nt}function Cl(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=vu.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function co(C,Z){const de=b.get(C);de.outputColorSpace=Z.outputColorSpace,de.batching=Z.batching,de.batchingColor=Z.batchingColor,de.instancing=Z.instancing,de.instancingColor=Z.instancingColor,de.instancingMorph=Z.instancingMorph,de.skinning=Z.skinning,de.morphTargets=Z.morphTargets,de.morphNormals=Z.morphNormals,de.morphColors=Z.morphColors,de.morphTargetsCount=Z.morphTargetsCount,de.numClippingPlanes=Z.numClippingPlanes,de.numIntersection=Z.numClipIntersection,de.vertexAlphas=Z.vertexAlphas,de.vertexTangents=Z.vertexTangents,de.toneMapping=Z.toneMapping}function gr(C,Z,de,oe,$){Z.isScene!==!0&&(Z=Nt),j.resetTextureUnits();const Oe=Z.fog,Ve=oe.isMeshStandardMaterial?Z.environment:null,ze=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:$s,Xe=(oe.isMeshStandardMaterial?Me:ge).get(oe.envMap||Ve),Ze=oe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,nt=!!de.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ke=!!de.morphAttributes.position,it=!!de.morphAttributes.normal,Ot=!!de.morphAttributes.color;let en=Zi;oe.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(en=T.toneMapping);const Kt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Ft=Kt!==void 0?Kt.length:0,et=b.get(oe),Pt=L.state.lights;if(He===!0&&(dt===!0||C!==re)){const Cn=C===re&&oe.id===te;Ge.setState(oe,C,Cn)}let ot=!1;oe.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Pt.state.version||et.outputColorSpace!==ze||$.isBatchedMesh&&et.batching===!1||!$.isBatchedMesh&&et.batching===!0||$.isBatchedMesh&&et.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&et.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&et.instancing===!1||!$.isInstancedMesh&&et.instancing===!0||$.isSkinnedMesh&&et.skinning===!1||!$.isSkinnedMesh&&et.skinning===!0||$.isInstancedMesh&&et.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&et.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&et.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&et.instancingMorph===!1&&$.morphTexture!==null||et.envMap!==Xe||oe.fog===!0&&et.fog!==Oe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ge.numPlanes||et.numIntersection!==Ge.numIntersection)||et.vertexAlphas!==Ze||et.vertexTangents!==nt||et.morphTargets!==Ke||et.morphNormals!==it||et.morphColors!==Ot||et.toneMapping!==en||et.morphTargetsCount!==Ft)&&(ot=!0):(ot=!0,et.__version=oe.version);let Tn=et.currentProgram;ot===!0&&(Tn=es(oe,Z,$));let $i=!1,An=!1,di=!1;const Ht=Tn.getUniforms(),Rn=et.uniforms;if(Qe.useProgram(Tn.program)&&($i=!0,An=!0,di=!0),oe.id!==te&&(te=oe.id,An=!0),$i||re!==C){Qe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ht.setValue(k,"projectionMatrix",C.projectionMatrix),Ht.setValue(k,"viewMatrix",C.matrixWorldInverse);const wn=Ht.map.cameraPosition;wn!==void 0&&wn.setValue(k,St.setFromMatrixPosition(C.matrixWorld)),It.logarithmicDepthBuffer&&Ht.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ht.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),re!==C&&(re=C,An=!0,di=!0)}if(et.needsLights&&(Pt.state.directionalShadowMap.length>0&&Ht.setValue(k,"directionalShadowMap",Pt.state.directionalShadowMap,j),Pt.state.spotShadowMap.length>0&&Ht.setValue(k,"spotShadowMap",Pt.state.spotShadowMap,j),Pt.state.pointShadowMap.length>0&&Ht.setValue(k,"pointShadowMap",Pt.state.pointShadowMap,j)),$.isSkinnedMesh){Ht.setOptional(k,$,"bindMatrix"),Ht.setOptional(k,$,"bindMatrixInverse");const Cn=$.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ht.setValue(k,"boneTexture",Cn.boneTexture,j))}$.isBatchedMesh&&(Ht.setOptional(k,$,"batchingTexture"),Ht.setValue(k,"batchingTexture",$._matricesTexture,j),Ht.setOptional(k,$,"batchingIdTexture"),Ht.setValue(k,"batchingIdTexture",$._indirectTexture,j),Ht.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Ht.setValue(k,"batchingColorTexture",$._colorsTexture,j));const vn=de.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ht.update($,de,Tn),(An||et.receiveShadow!==$.receiveShadow)&&(et.receiveShadow=$.receiveShadow,Ht.setValue(k,"receiveShadow",$.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Rn.envMap.value=Xe,Rn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Z.environment!==null&&(Rn.envMapIntensity.value=Z.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=y3()),An&&(Ht.setValue(k,"toneMappingExposure",T.toneMappingExposure),et.needsLights&&uo(Rn,di),Oe&&oe.fog===!0&&rt.refreshFogUniforms(Rn,Oe),rt.refreshMaterialUniforms(Rn,oe,fe,ee,L.state.transmissionRenderTarget[C.id]),vu.upload(k,Cl(et),Rn,j)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(vu.upload(k,Cl(et),Rn,j),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ht.setValue(k,"center",$.center),Ht.setValue(k,"modelViewMatrix",$.modelViewMatrix),Ht.setValue(k,"normalMatrix",$.normalMatrix),Ht.setValue(k,"modelMatrix",$.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Cn=oe.uniformsGroups;for(let wn=0,ts=Cn.length;wn<ts;wn++){const wi=Cn[wn];Te.update(wi,Tn),Te.bind(wi,Tn)}}return Tn}function uo(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Oa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,Z,de){const oe=b.get(C);oe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=Z,b.get(C.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:de,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const de=b.get(C);de.__webglFramebuffer=Z,de.__useDefaultFramebuffer=Z===void 0};const Pa=k.createFramebuffer();this.setRenderTarget=function(C,Z=0,de=0){J=C,H=Z,q=de;let oe=null,$=!1,Oe=!1;if(C){const ze=b.get(C);if(ze.__useDefaultFramebuffer!==void 0){Qe.bindFramebuffer(k.FRAMEBUFFER,ze.__webglFramebuffer),P.copy(C.viewport),G.copy(C.scissor),X=C.scissorTest,Qe.viewport(P),Qe.scissor(G),Qe.setScissorTest(X),te=-1;return}else if(ze.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(ze.__hasExternalTextures)j.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(ze.__boundDepthTexture!==nt){if(nt!==null&&b.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const Ze=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[Z])?oe=Ze[Z][de]:oe=Ze[Z],$=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?oe=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?oe=Ze[de]:oe=Ze,P.copy(C.viewport),G.copy(C.scissor),X=C.scissorTest}else P.copy(se).multiplyScalar(fe).floor(),G.copy(ue).multiplyScalar(fe).floor(),X=De;if(de!==0&&(oe=Pa),Qe.bindFramebuffer(k.FRAMEBUFFER,oe)&&Qe.drawBuffers(C,oe),Qe.viewport(P),Qe.scissor(G),Qe.setScissorTest(X),$){const ze=b.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ze.__webglTexture,de)}else if(Oe){const ze=Z;for(let Xe=0;Xe<C.textures.length;Xe++){const Ze=b.get(C.textures[Xe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,de,ze)}}else if(C!==null&&de!==0){const ze=b.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ze.__webglTexture,de)}te=-1},this.readRenderTargetPixels=function(C,Z,de,oe,$,Oe,Ve,ze=0){if(!(C&&C.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){Qe.bindFramebuffer(k.FRAMEBUFFER,Xe);try{const Ze=C.textures[ze],nt=Ze.format,Ke=Ze.type;if(!It.textureFormatReadable(nt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Ke)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-oe&&de>=0&&de<=C.height-$&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(Z,de,oe,$,Ce.convert(nt),Ce.convert(Ke),Oe))}finally{const Ze=J!==null?b.get(J).__webglFramebuffer:null;Qe.bindFramebuffer(k.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(C,Z,de,oe,$,Oe,Ve,ze=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(Z>=0&&Z<=C.width-oe&&de>=0&&de<=C.height-$){Qe.bindFramebuffer(k.FRAMEBUFFER,Xe);const Ze=C.textures[ze],nt=Ze.format,Ke=Ze.type;if(!It.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,it),k.bufferData(k.PIXEL_PACK_BUFFER,Oe.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(Z,de,oe,$,Ce.convert(nt),Ce.convert(Ke),0);const Ot=J!==null?b.get(J).__webglFramebuffer:null;Qe.bindFramebuffer(k.FRAMEBUFFER,Ot);const en=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await X1(k,en,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,it),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Oe),k.deleteBuffer(it),k.deleteSync(en),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,de=0){const oe=Math.pow(2,-de),$=Math.floor(C.image.width*oe),Oe=Math.floor(C.image.height*oe),Ve=Z!==null?Z.x:0,ze=Z!==null?Z.y:0;j.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,de,0,0,Ve,ze,$,Oe),Qe.unbindTexture()};const vr=k.createFramebuffer(),za=k.createFramebuffer();this.copyTextureToTexture=function(C,Z,de=null,oe=null,$=0,Oe=null){Oe===null&&($!==0?(gl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=$,$=0):Oe=0);let Ve,ze,Xe,Ze,nt,Ke,it,Ot,en;const Kt=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(de!==null)Ve=de.max.x-de.min.x,ze=de.max.y-de.min.y,Xe=de.isBox3?de.max.z-de.min.z:1,Ze=de.min.x,nt=de.min.y,Ke=de.isBox3?de.min.z:0;else{const vn=Math.pow(2,-$);Ve=Math.floor(Kt.width*vn),ze=Math.floor(Kt.height*vn),C.isDataArrayTexture?Xe=Kt.depth:C.isData3DTexture?Xe=Math.floor(Kt.depth*vn):Xe=1,Ze=0,nt=0,Ke=0}oe!==null?(it=oe.x,Ot=oe.y,en=oe.z):(it=0,Ot=0,en=0);const Ft=Ce.convert(Z.format),et=Ce.convert(Z.type);let Pt;Z.isData3DTexture?(j.setTexture3D(Z,0),Pt=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(j.setTexture2DArray(Z,0),Pt=k.TEXTURE_2D_ARRAY):(j.setTexture2D(Z,0),Pt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const ot=k.getParameter(k.UNPACK_ROW_LENGTH),Tn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),$i=k.getParameter(k.UNPACK_SKIP_PIXELS),An=k.getParameter(k.UNPACK_SKIP_ROWS),di=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Kt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Kt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ze),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ke);const Ht=C.isDataArrayTexture||C.isData3DTexture,Rn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const vn=b.get(C),Cn=b.get(Z),wn=b.get(vn.__renderTarget),ts=b.get(Cn.__renderTarget);Qe.bindFramebuffer(k.READ_FRAMEBUFFER,wn.__webglFramebuffer),Qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let wi=0;wi<Xe;wi++)Ht&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(C).__webglTexture,$,Ke+wi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(Z).__webglTexture,Oe,en+wi)),k.blitFramebuffer(Ze,nt,Ve,ze,it,Ot,Ve,ze,k.DEPTH_BUFFER_BIT,k.NEAREST);Qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||b.has(C)){const vn=b.get(C),Cn=b.get(Z);Qe.bindFramebuffer(k.READ_FRAMEBUFFER,vr),Qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,za);for(let wn=0;wn<Xe;wn++)Ht?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,vn.__webglTexture,$,Ke+wn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,vn.__webglTexture,$),Rn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Cn.__webglTexture,Oe,en+wn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Cn.__webglTexture,Oe),$!==0?k.blitFramebuffer(Ze,nt,Ve,ze,it,Ot,Ve,ze,k.COLOR_BUFFER_BIT,k.NEAREST):Rn?k.copyTexSubImage3D(Pt,Oe,it,Ot,en+wn,Ze,nt,Ve,ze):k.copyTexSubImage2D(Pt,Oe,it,Ot,Ze,nt,Ve,ze);Qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Rn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Pt,Oe,it,Ot,en,Ve,ze,Xe,Ft,et,Kt.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(Pt,Oe,it,Ot,en,Ve,ze,Xe,Ft,Kt.data):k.texSubImage3D(Pt,Oe,it,Ot,en,Ve,ze,Xe,Ft,et,Kt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Oe,it,Ot,Ve,ze,Ft,et,Kt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Oe,it,Ot,Kt.width,Kt.height,Ft,Kt.data):k.texSubImage2D(k.TEXTURE_2D,Oe,it,Ot,Ve,ze,Ft,et,Kt);k.pixelStorei(k.UNPACK_ROW_LENGTH,ot),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$i),k.pixelStorei(k.UNPACK_SKIP_ROWS,An),k.pixelStorei(k.UNPACK_SKIP_IMAGES,di),Oe===0&&Z.generateMipmaps&&k.generateMipmap(Pt),Qe.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),Qe.unbindTexture()},this.resetState=function(){H=0,q=0,J=null,Qe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}function M3(){const r=ie.useRef(null),e=ie.useRef(null),i=ie.useRef(null),s=ie.useRef(null),l=ie.useRef(null),c=ie.useRef(null),f=ie.useRef(0),h=ie.useRef(null),m=ie.useRef(null),[p,v]=ie.useState(!1),[g,x]=ie.useState("galaxy"),[M,E]=ie.useState(null),A=ie.useCallback(()=>{if(!r.current)return;const L=new mT;L.background=new wt(657935),i.current=L;const z=new bi(75,r.current.clientWidth/r.current.clientHeight,.1,1e3);z.position.z=50,s.current=z;const O=new S3({antialias:!0});O.setSize(r.current.clientWidth,r.current.clientHeight),O.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.current.appendChild(O.domElement),e.current=O,S(L),_(L);const B=()=>{!r.current||!z||!O||(z.aspect=r.current.clientWidth/r.current.clientHeight,z.updateProjectionMatrix(),O.setSize(r.current.clientWidth,r.current.clientHeight))};return window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B)}},[]),S=L=>{const O=new Float32Array(15e3),B=new Float32Array(5e3*3),T=new Float32Array(5e3),w=new wt(54527),H=new wt(11167487),q=new wt(16737962);for(let P=0;P<5e3;P++){const G=Math.random()*40,X=G*.5,Se=P%3/3*Math.PI*2,xe=(Math.random()-.5)*(G*.3),I=(Math.random()-.5)*(G*.3),ee=(Math.random()-.5)*(G*.3);O[P*3]=Math.cos(Se+X)*G+xe,O[P*3+1]=I,O[P*3+2]=Math.sin(Se+X)*G+ee;const fe=w.clone();fe.lerp(H,G/40),Math.random()>.8&&fe.lerp(q,.5),B[P*3]=fe.r,B[P*3+1]=fe.g,B[P*3+2]=fe.b,T[P]=Math.random()*2+.5}const J=new ui;J.setAttribute("position",new ci(O,3)),J.setAttribute("color",new ci(B,3)),J.setAttribute("size",new ci(T,1));const te=new qx({size:.5,vertexColors:!0,transparent:!0,opacity:.8,blending:Th,sizeAttenuation:!0}),re=new yT(J,te);re.visible=!0,L.add(re),h.current=re},_=L=>{const z=new fl,O=64,B=8,T=60,w=new kr({color:54527}),H=new kr({color:11167487}),q=new kr({color:65416,transparent:!0,opacity:.6}),J=new Bp(.4,16,16);for(let te=0;te<O;te++){const re=te/O,P=(re-.5)*T,G=re*Math.PI*4,X=Math.cos(G)*B,Se=Math.sin(G)*B,xe=new li(J,w);xe.position.set(X,P,Se),xe.userData={baseY:P,index:te,strand:1},z.add(xe);const I=Math.cos(G+Math.PI)*B,ee=Math.sin(G+Math.PI)*B,fe=new li(J,H);if(fe.position.set(I,P,ee),fe.userData={baseY:P,index:te,strand:2},z.add(fe),te%2===0){const Ee=new Fp(.15,.15,B*2,8),Ne=new li(Ee,q.clone());Ne.position.set(0,P,0),Ne.rotation.z=Math.PI/2,Ne.rotation.y=G,Ne.userData={baseScale:1,index:te},z.add(Ne)}}z.visible=!1,z.position.y=0,L.add(z),m.current=z},D=async()=>{try{const L=await navigator.mediaDevices.getUserMedia({audio:!0}),z=new AudioContext,O=z.createMediaStreamSource(L),B=z.createAnalyser();B.fftSize=256,B.smoothingTimeConstant=.8,O.connect(B),c.current=z,l.current=B,v(!0),E(null)}catch(L){E("Microphone access denied. Please allow microphone access to use the visualizer."),console.error("Audio error:",L)}},U=()=>{c.current&&(c.current.close(),c.current=null,l.current=null),v(!1)},N=ie.useCallback(()=>{if(!i.current||!s.current||!e.current)return;const L=Date.now()*.001;let z=new Uint8Array(128),O=0,B=0,T=0,w=0;if(l.current?(l.current.getByteFrequencyData(z),O=z.reduce((H,q)=>H+q,0)/z.length/255,B=z.slice(0,10).reduce((H,q)=>H+q,0)/10/255,T=z.slice(10,50).reduce((H,q)=>H+q,0)/40/255,w=z.slice(50,128).reduce((H,q)=>H+q,0)/78/255):(O=.3+Math.sin(L*2)*.2,B=.4+Math.sin(L*1.5)*.3,T=.3+Math.sin(L*3)*.2,w=.2+Math.sin(L*5)*.15),h.current&&g==="galaxy"){h.current.visible=!0,m.current&&(m.current.visible=!1);const H=h.current.geometry.attributes.position.array,q=h.current.geometry.attributes.color.array;for(let J=0;J<H.length/3;J++){const te=J*3,re=H[te],P=H[te+1],G=H[te+2],X=Math.sqrt(re*re+G*G),Se=B*5,xe=Math.atan2(G,re),I=Math.floor((xe+Math.PI)/(Math.PI*2)*128)%128,ee=l.current?z[I]/255:.5+Math.sin(L*2+J*.01)*.3;H[te+1]=P+Math.sin(L*2+X*.1)*ee*Se;const fe=.5+O*.5;q[te]=Math.min(1,q[te]*fe+w*.3),q[te+1]=Math.min(1,q[te+1]*fe+T*.2),q[te+2]=Math.min(1,q[te+2]*fe+B*.2)}h.current.geometry.attributes.position.needsUpdate=!0,h.current.geometry.attributes.color.needsUpdate=!0,h.current.rotation.y+=.002+B*.01,s.current.position.y=Math.sin(L*.5)*10+O*10,s.current.lookAt(0,0,0)}m.current&&g==="dna"&&(m.current.visible=!0,h.current&&(h.current.visible=!1),m.current.rotation.y+=.01+B*.02,m.current.children.forEach(H=>{if(H instanceof li){const q=H.userData;if(q.strand){const J=Math.floor(q.index/64*128)%128,te=l.current?z[J]/255:.5+Math.sin(L*3+q.index*.1)*.3,re=1+te*1.5;if(H.scale.setScalar(re),H.material instanceof kr){const P=(q.strand===1?.5:.75)+te*.1;H.material.color.setHSL(P,1,.5+te*.3)}}else if(q.baseScale!==void 0){const J=1+T*.5;H.scale.y=J,H.material instanceof kr&&(H.material.opacity=.3+w*.7)}}}),s.current.position.x=Math.sin(L*.3)*30,s.current.position.z=Math.cos(L*.3)*30,s.current.position.y=Math.sin(L*.2)*10,s.current.lookAt(0,0,0)),e.current.render(i.current,s.current),f.current=requestAnimationFrame(N)},[g]);return ie.useEffect(()=>{const L=A();return()=>{L?.(),f.current&&cancelAnimationFrame(f.current),e.current&&r.current&&(r.current.removeChild(e.current.domElement),e.current.dispose()),U()}},[A]),ie.useEffect(()=>(N(),()=>{f.current&&cancelAnimationFrame(f.current)}),[N]),Q.jsxs("div",{className:"min-h-screen flex flex-col",children:[Q.jsxs("header",{className:"p-4 flex items-center justify-between z-10 relative",children:[Q.jsxs(Sl,{to:"/",className:"inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors",children:[Q.jsx(gx,{className:"w-4 h-4"}),"Back"]}),Q.jsxs("h1",{className:"text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-red bg-clip-text text-transparent flex items-center gap-2",children:[Q.jsx(vx,{className:"w-5 h-5 text-accent-purple"}),"Audio Visualizer"]}),Q.jsx("div",{className:"w-16"})," "]}),Q.jsxs("div",{className:"px-4 pb-4 flex flex-wrap items-center justify-center gap-4 z-10 relative",children:[Q.jsxs("div",{className:"flex items-center bg-bg-card rounded-full p-1 border border-text-muted/20",children:[Q.jsxs("button",{onClick:()=>x("galaxy"),className:Yr("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",g==="galaxy"?"bg-accent-cyan/20 text-accent-cyan":"text-text-secondary hover:text-text-primary"),children:[Q.jsx(r1,{className:"w-4 h-4"}),"Galaxy"]}),Q.jsxs("button",{onClick:()=>x("dna"),className:Yr("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",g==="dna"?"bg-accent-purple/20 text-accent-purple":"text-text-secondary hover:text-text-primary"),children:[Q.jsx(XE,{className:"w-4 h-4"}),"DNA Helix"]})]}),Q.jsx("button",{onClick:p?U:D,className:Yr("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border",p?"bg-accent-green/20 text-accent-green border-accent-green/30":"bg-bg-card text-text-secondary border-text-muted/20 hover:text-text-primary hover:border-text-muted/40"),children:p?Q.jsxs(Q.Fragment,{children:[Q.jsx(JE,{className:"w-4 h-4 animate-pulse"}),"Listening..."]}):Q.jsxs(Q.Fragment,{children:[Q.jsx(KE,{className:"w-4 h-4"}),"Enable Mic"]})})]}),M&&Q.jsx("div",{className:"px-4 pb-4 z-10 relative",children:Q.jsx("div",{className:"max-w-md mx-auto bg-accent-red/10 border border-accent-red/30 rounded-lg p-3 text-accent-red text-sm text-center",children:M})}),!p&&!M&&Q.jsx("div",{className:"px-4 pb-2 z-10 relative",children:Q.jsx("p",{className:"text-center text-text-muted text-sm",children:"Demo mode - Enable mic for real audio visualization"})}),Q.jsx("div",{ref:r,className:"flex-1 relative"})]})}hM.createRoot(document.getElementById("root")).render(Q.jsx(ie.StrictMode,{children:Q.jsx(Pb,{children:Q.jsxs(fb,{children:[Q.jsx(cu,{path:"/",element:Q.jsx(l1,{})}),Q.jsx(cu,{path:"/sensors",element:Q.jsx(c1,{})}),Q.jsx(cu,{path:"/audio",element:Q.jsx(M3,{})})]})})}));
