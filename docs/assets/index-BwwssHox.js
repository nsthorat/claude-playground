(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Fd={exports:{}},tl={};var Mv;function oM(){if(Mv)return tl;Mv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:f,ref:l!==void 0?l:null,props:c}}return tl.Fragment=e,tl.jsx=i,tl.jsxs=i,tl}var bv;function lM(){return bv||(bv=1,Fd.exports=oM()),Fd.exports}var k=lM(),zd={exports:{}},lt={};var Ev;function cM(){if(Ev)return lt;Ev=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(B){return B===null||typeof B!="object"?null:(B=x&&B[x]||B["@@iterator"],typeof B=="function"?B:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function _(B,ne,fe){this.props=B,this.context=ne,this.refs=S,this.updater=fe||T}_.prototype.isReactComponent={},_.prototype.setState=function(B,ne){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ne,"setState")},_.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function D(){}D.prototype=_.prototype;function L(B,ne,fe){this.props=B,this.context=ne,this.refs=S,this.updater=fe||T}var O=L.prototype=new D;O.constructor=L,A(O,_.prototype),O.isPureReactComponent=!0;var N=Array.isArray;function z(){}var P={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function b(B,ne,fe){var Ee=fe.ref;return{$$typeof:s,type:B,key:ne,ref:Ee!==void 0?Ee:null,props:fe}}function R(B,ne){return b(B.type,ne,B.props)}function H(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function j(B){var ne={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(fe){return ne[fe]})}var K=/\/+/g;function te(B,ne){return typeof B=="object"&&B!==null&&B.key!=null?j(""+B.key):ne.toString(36)}function re(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(z,z):(B.status="pending",B.then(function(ne){B.status==="pending"&&(B.status="fulfilled",B.value=ne)},function(ne){B.status==="pending"&&(B.status="rejected",B.reason=ne)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function F(B,ne,fe,Ee,Ne){var se=typeof B;(se==="undefined"||se==="boolean")&&(B=null);var ue=!1;if(B===null)ue=!0;else switch(se){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(B.$$typeof){case s:case e:ue=!0;break;case v:return ue=B._init,F(ue(B._payload),ne,fe,Ee,Ne)}}if(ue)return Ne=Ne(B),ue=Ee===""?"."+te(B,0):Ee,N(Ne)?(fe="",ue!=null&&(fe=ue.replace(K,"$&/")+"/"),F(Ne,ne,fe,"",function(He){return He})):Ne!=null&&(H(Ne)&&(Ne=R(Ne,fe+(Ne.key==null||B&&B.key===Ne.key?"":(""+Ne.key).replace(K,"$&/")+"/")+ue)),ne.push(Ne)),1;ue=0;var De=Ee===""?".":Ee+":";if(N(B))for(var ke=0;ke<B.length;ke++)Ee=B[ke],se=De+te(Ee,ke),ue+=F(Ee,ne,fe,se,Ne);else if(ke=M(B),typeof ke=="function")for(B=ke.call(B),ke=0;!(Ee=B.next()).done;)Ee=Ee.value,se=De+te(Ee,ke++),ue+=F(Ee,ne,fe,se,Ne);else if(se==="object"){if(typeof B.then=="function")return F(re(B),ne,fe,Ee,Ne);throw ne=String(B),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ue}function G(B,ne,fe){if(B==null)return B;var Ee=[],Ne=0;return F(B,Ee,"","",function(se){return ne.call(fe,se,Ne++)}),Ee}function W(B){if(B._status===-1){var ne=B._result;ne=ne(),ne.then(function(fe){(B._status===0||B._status===-1)&&(B._status=1,B._result=fe)},function(fe){(B._status===0||B._status===-1)&&(B._status=2,B._result=fe)}),B._status===-1&&(B._status=0,B._result=ne)}if(B._status===1)return B._result.default;throw B._result}var Se=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},xe={map:G,forEach:function(B,ne,fe){G(B,function(){ne.apply(this,arguments)},fe)},count:function(B){var ne=0;return G(B,function(){ne++}),ne},toArray:function(B){return G(B,function(ne){return ne})||[]},only:function(B){if(!H(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return lt.Activity=g,lt.Children=xe,lt.Component=_,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=L,lt.StrictMode=a,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,lt.__COMPILER_RUNTIME={__proto__:null,c:function(B){return P.H.useMemoCache(B)}},lt.cache=function(B){return function(){return B.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(B,ne,fe){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Ee=A({},B.props),Ne=B.key;if(ne!=null)for(se in ne.key!==void 0&&(Ne=""+ne.key),ne)!U.call(ne,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&ne.ref===void 0||(Ee[se]=ne[se]);var se=arguments.length-2;if(se===1)Ee.children=fe;else if(1<se){for(var ue=Array(se),De=0;De<se;De++)ue[De]=arguments[De+2];Ee.children=ue}return b(B.type,Ne,Ee)},lt.createContext=function(B){return B={$$typeof:f,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},lt.createElement=function(B,ne,fe){var Ee,Ne={},se=null;if(ne!=null)for(Ee in ne.key!==void 0&&(se=""+ne.key),ne)U.call(ne,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Ne[Ee]=ne[Ee]);var ue=arguments.length-2;if(ue===1)Ne.children=fe;else if(1<ue){for(var De=Array(ue),ke=0;ke<ue;ke++)De[ke]=arguments[ke+2];Ne.children=De}if(B&&B.defaultProps)for(Ee in ue=B.defaultProps,ue)Ne[Ee]===void 0&&(Ne[Ee]=ue[Ee]);return b(B,se,Ne)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(B){return{$$typeof:d,render:B}},lt.isValidElement=H,lt.lazy=function(B){return{$$typeof:v,_payload:{_status:-1,_result:B},_init:W}},lt.memo=function(B,ne){return{$$typeof:p,type:B,compare:ne===void 0?null:ne}},lt.startTransition=function(B){var ne=P.T,fe={};P.T=fe;try{var Ee=B(),Ne=P.S;Ne!==null&&Ne(fe,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(z,Se)}catch(se){Se(se)}finally{ne!==null&&fe.types!==null&&(ne.types=fe.types),P.T=ne}},lt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},lt.use=function(B){return P.H.use(B)},lt.useActionState=function(B,ne,fe){return P.H.useActionState(B,ne,fe)},lt.useCallback=function(B,ne){return P.H.useCallback(B,ne)},lt.useContext=function(B){return P.H.useContext(B)},lt.useDebugValue=function(){},lt.useDeferredValue=function(B,ne){return P.H.useDeferredValue(B,ne)},lt.useEffect=function(B,ne){return P.H.useEffect(B,ne)},lt.useEffectEvent=function(B){return P.H.useEffectEvent(B)},lt.useId=function(){return P.H.useId()},lt.useImperativeHandle=function(B,ne,fe){return P.H.useImperativeHandle(B,ne,fe)},lt.useInsertionEffect=function(B,ne){return P.H.useInsertionEffect(B,ne)},lt.useLayoutEffect=function(B,ne){return P.H.useLayoutEffect(B,ne)},lt.useMemo=function(B,ne){return P.H.useMemo(B,ne)},lt.useOptimistic=function(B,ne){return P.H.useOptimistic(B,ne)},lt.useReducer=function(B,ne,fe){return P.H.useReducer(B,ne,fe)},lt.useRef=function(B){return P.H.useRef(B)},lt.useState=function(B){return P.H.useState(B)},lt.useSyncExternalStore=function(B,ne,fe){return P.H.useSyncExternalStore(B,ne,fe)},lt.useTransition=function(){return P.H.useTransition()},lt.version="19.2.3",lt}var Tv;function Ep(){return Tv||(Tv=1,zd.exports=cM()),zd.exports}var $=Ep(),Bd={exports:{}},nl={},Id={exports:{}},Hd={};var Av;function uM(){return Av||(Av=1,(function(s){function e(F,G){var W=F.length;F.push(G);e:for(;0<W;){var Se=W-1>>>1,xe=F[Se];if(0<l(xe,G))F[Se]=G,F[W]=xe,W=Se;else break e}}function i(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var G=F[0],W=F.pop();if(W!==G){F[0]=W;e:for(var Se=0,xe=F.length,B=xe>>>1;Se<B;){var ne=2*(Se+1)-1,fe=F[ne],Ee=ne+1,Ne=F[Ee];if(0>l(fe,W))Ee<xe&&0>l(Ne,fe)?(F[Se]=Ne,F[Ee]=W,Se=Ee):(F[Se]=fe,F[ne]=W,Se=ne);else if(Ee<xe&&0>l(Ne,W))F[Se]=Ne,F[Ee]=W,Se=Ee;else break e}}return G}function l(F,G){var W=F.sortIndex-G.sortIndex;return W!==0?W:F.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,g=null,x=3,M=!1,T=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function O(F){for(var G=i(p);G!==null;){if(G.callback===null)a(p);else if(G.startTime<=F)a(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function N(F){if(A=!1,O(F),!T)if(i(m)!==null)T=!0,z||(z=!0,j());else{var G=i(p);G!==null&&re(N,G.startTime-F)}}var z=!1,P=-1,U=5,b=-1;function R(){return S?!0:!(s.unstable_now()-b<U)}function H(){if(S=!1,z){var F=s.unstable_now();b=F;var G=!0;try{e:{T=!1,A&&(A=!1,D(P),P=-1),M=!0;var W=x;try{t:{for(O(F),g=i(m);g!==null&&!(g.expirationTime>F&&R());){var Se=g.callback;if(typeof Se=="function"){g.callback=null,x=g.priorityLevel;var xe=Se(g.expirationTime<=F);if(F=s.unstable_now(),typeof xe=="function"){g.callback=xe,O(F),G=!0;break t}g===i(m)&&a(m),O(F)}else a(m);g=i(m)}if(g!==null)G=!0;else{var B=i(p);B!==null&&re(N,B.startTime-F),G=!1}}break e}finally{g=null,x=W,M=!1}G=void 0}}finally{G?j():z=!1}}}var j;if(typeof L=="function")j=function(){L(H)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,te=K.port2;K.port1.onmessage=H,j=function(){te.postMessage(null)}}else j=function(){_(H,0)};function re(F,G){P=_(function(){F(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(F){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var W=x;x=G;try{return F()}finally{x=W}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=x;x=F;try{return G()}finally{x=W}},s.unstable_scheduleCallback=function(F,G,W){var Se=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Se+W:Se):W=Se,F){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=W+xe,F={id:v++,callback:G,priorityLevel:F,startTime:W,expirationTime:xe,sortIndex:-1},W>Se?(F.sortIndex=W,e(p,F),i(m)===null&&F===i(p)&&(A?(D(P),P=-1):A=!0,re(N,W-Se))):(F.sortIndex=xe,e(m,F),T||M||(T=!0,z||(z=!0,j()))),F},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(F){var G=x;return function(){var W=x;x=G;try{return F.apply(this,arguments)}finally{x=W}}}})(Hd)),Hd}var Rv;function fM(){return Rv||(Rv=1,Id.exports=uM()),Id.exports}var Gd={exports:{}},Fn={};var Cv;function dM(){if(Cv)return Fn;Cv=1;var s=Ep();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Fn.flushSync=function(m){var p=f.T,v=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=v,a.d.f()}},Fn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Fn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Fn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):v==="script"&&a.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Fn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);a.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Fn.requestFormReset=function(m){a.d.r(m)},Fn.unstable_batchedUpdates=function(m,p){return m(p)},Fn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Fn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fn.version="19.2.3",Fn}var wv;function hM(){if(wv)return Gd.exports;wv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Gd.exports=dM(),Gd.exports}var Dv;function pM(){if(Dv)return nl;Dv=1;var s=fM(),e=Ep(),i=hM();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===r)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(a(188))}if(r.return!==o.return)r=u,o=h;else{for(var y=!1,C=u.child;C;){if(C===r){y=!0,r=u,o=h;break}if(C===o){y=!0,o=u,r=h;break}C=C.sibling}if(!y){for(C=h.child;C;){if(C===r){y=!0,r=h,o=u;break}if(C===o){y=!0,o=h,r=u;break}C=C.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function te(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case z:return"SuspenseList";case b:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:te(t.type)||"Memo";case U:n=t._payload,t=t._init;try{return te(t(n))}catch{}}return null}var re=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},Se=[],xe=-1;function B(t){return{current:t}}function ne(t){0>xe||(t.current=Se[xe],Se[xe]=null,xe--)}function fe(t,n){xe++,Se[xe]=t.current,t.current=n}var Ee=B(null),Ne=B(null),se=B(null),ue=B(null);function De(t,n){switch(fe(se,n),fe(Ne,t),fe(Ee,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?W0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=W0(n),t=q0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(Ee),fe(Ee,t)}function ke(){ne(Ee),ne(Ne),ne(se)}function He(t){t.memoizedState!==null&&fe(ue,t);var n=Ee.current,r=q0(n,t.type);n!==r&&(fe(Ne,t),fe(Ee,r))}function dt(t){Ne.current===t&&(ne(Ee),ne(Ne)),ue.current===t&&(ne(ue),Qo._currentValue=W)}var Yt,St;function _t(t){if(Yt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",St=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+St}var Nt=!1;function ut(t,n){if(!t||Nt)return"";Nt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(he){var le=he}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(he){le=he}t.call(_e.prototype)}}else{try{throw Error()}catch(he){le=he}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(he){if(he&&le&&typeof he.stack=="string")return[he.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],C=h[1];if(y&&C){var V=y.split(`
`),ae=C.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ae.length)for(o=V.length-1,u=ae.length-1;1<=o&&0<=u&&V[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ae[u]){var me=`
`+V[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{Nt=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?_t(r):""}function an(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return _t("Activity");default:return""}}function X(t){try{var n="",r=null;do n+=an(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $t=Object.prototype.hasOwnProperty,At=s.unstable_scheduleCallback,zt=s.unstable_cancelCallback,Qe=s.unstable_shouldYield,I=s.unstable_requestPaint,E=s.unstable_now,Z=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,Me=s.unstable_UserBlockingPriority,pe=s.unstable_NormalPriority,$e=s.unstable_LowPriority,Ue=s.unstable_IdlePriority,Ye=s.log,rt=s.unstable_setDisableYieldValue,Ae=null,Re=null;function Ge(t){if(typeof Ye=="function"&&rt(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ae,t)}catch{}}var Be=Math.clz32?Math.clz32:Y,Le=Math.log,ht=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(Le(t)/ht|0)|0}var Pe=256,Ce=262144,Ie=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~h,o!==0?u=Te(o):(y&=C,y!==0?u=Te(y):r||(r=C&~t,r!==0&&(u=Te(r))))):(C=o&~h,C!==0?u=Te(C):y!==0?u=Te(y):r||(r=o&~t,r!==0&&(u=Te(r)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function st(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Rt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Pn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ci(t,n,r,o,u,h){var y=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var C=t.entanglements,V=t.expirationTimes,ae=t.hiddenUpdates;for(r=y&~r;0<r;){var me=31-Be(r),_e=1<<me;C[me]=0,V[me]=-1;var le=ae[me];if(le!==null)for(ae[me]=null,me=0;me<le.length;me++){var he=le[me];he!==null&&(he.lane&=-536870913)}r&=~_e}o!==0&&wl(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~n))}function wl(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function lo(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Be(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function Jr(t,n){var r=n&-n;return r=(r&42)!==0?1:co(r),(r&(t.suspendedLanes|n))!==0?0:r}function co(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $r(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function uo(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:mv(t.type))}function Hi(t,n){var r=G.p;try{return G.p=t,n()}finally{G.p=r}}var di=Math.random().toString(36).slice(2),fn="__reactFiber$"+di,En="__reactProps$"+di,wi="__reactContainer$"+di,es="__reactEvents$"+di,ts="__reactListeners$"+di,Dl="__reactHandles$"+di,fo="__reactResources$"+di,_r="__reactMarker$"+di;function ho(t){delete t[fn],delete t[En],delete t[es],delete t[ts],delete t[Dl]}function Fa(t){var n=t[fn];if(n)return n;for(var r=t.parentNode;r;){if(n=r[wi]||r[fn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=$0(t);t!==null;){if(r=t[fn])return r;t=$0(t)}return n}t=r,r=t.parentNode}return null}function za(t){if(t=t[fn]||t[wi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function xr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function Ba(t){var n=t[fo];return n||(n=t[fo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(t){t[_r]=!0}var Q=new Set,de={};function oe(t,n){ee(t,n),ee(t+"Capture",n)}function ee(t,n){for(de[t]=n,t=0;t<n.length;t++)Q.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ve={},Fe={};function Xe(t){return $t.call(Fe,t)?!0:$t.call(Ve,t)?!1:Oe.test(t)?Fe[t]=!0:(Ve[t]=!0,!1)}function Ze(t,n,r){if(Xe(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function nt(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function Ke(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function en(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){r=""+y,h.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Kt(t){if(!t._valueTracker){var n=Ot(t)?"checked":"value";t._valueTracker=en(t,n,""+t[n])}}function Bt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Ot(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pt=/[\n"\\]/g;function ot(t){return t.replace(Pt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(t,n,r,o,u,h,y,C){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+it(n)):t.value!==""+it(n)&&(t.value=""+it(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?An(t,y,it(n)):r!=null?An(t,y,it(r)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+it(C):t.removeAttribute("name")}function ta(t,n,r,o,u,h,y,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Kt(t);return}r=r!=null?""+it(r):"",n=n!=null?""+it(n):r,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Kt(t)}function An(t,n,r){n==="number"&&et(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function hi(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+it(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ht(t,n,r){if(n!=null&&(n=""+it(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+it(r):""}function Rn(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(re(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=it(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),Kt(t)}function vn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||Cn.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function ns(t,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&wn(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&wn(t,h,n[h])}function Di(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ay=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(t){return ay.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function na(){}var Lu=null;function Nu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var is=null,as=null;function Xp(t){var n=za(t);if(n&&(t=n.stateNode)){var r=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Tn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ot(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(a(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Bt(o)}break e;case"textarea":Ht(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&hi(t,!!r.multiple,n,!1)}}}var Ou=!1;function Wp(t,n,r){if(Ou)return t(n,r);Ou=!0;try{var o=t(n);return o}finally{if(Ou=!1,(is!==null||as!==null)&&(_c(),is&&(n=is,t=as,as=is=null,Xp(n),t)))for(n=0;n<t.length;n++)Xp(t[n])}}function po(t,n){var r=t.stateNode;if(r===null)return null;var o=r[En]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=!1;if(ia)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Pu=!1}var Ia=null,Fu=null,Ll=null;function qp(){if(Ll)return Ll;var t,n=Fu,r=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,h=u.length;for(t=0;t<r&&n[t]===u[t];t++);var y=r-t;for(o=1;o<=y&&n[r-o]===u[h-o];o++);return Ll=u.slice(t,1<o?1-o:void 0)}function Nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function jp(){return!1}function Wn(t){function n(r,o,u,h,y){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(r=t[C],this[C]=r?r(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ol:jp,this.isPropagationStopped=jp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Wn(yr),go=g({},yr,{view:0,detail:0}),ry=Wn(go),zu,Bu,vo,Fl=g({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(zu=t.screenX-vo.screenX,Bu=t.screenY-vo.screenY):Bu=zu=0,vo=t),zu)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),Yp=Wn(Fl),sy=g({},Fl,{dataTransfer:0}),oy=Wn(sy),ly=g({},go,{relatedTarget:0}),Iu=Wn(ly),cy=g({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),uy=Wn(cy),fy=g({},yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dy=Wn(fy),hy=g({},yr,{data:0}),Zp=Wn(hy),py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},my={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=gy[t])?!!n[t]:!1}function Hu(){return vy}var _y=g({},go,{key:function(t){if(t.key){var n=py[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?my[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xy=Wn(_y),yy=g({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Wn(yy),Sy=g({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),My=Wn(Sy),by=g({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ey=Wn(by),Ty=g({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=Wn(Ty),Ry=g({},yr,{newState:0,oldState:0}),Cy=Wn(Ry),wy=[9,13,27,32],Gu=ia&&"CompositionEvent"in window,_o=null;ia&&"documentMode"in document&&(_o=document.documentMode);var Dy=ia&&"TextEvent"in window&&!_o,Qp=ia&&(!Gu||_o&&8<_o&&11>=_o),Jp=" ",$p=!1;function em(t,n){switch(t){case"keyup":return wy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function Uy(t,n){switch(t){case"compositionend":return tm(n);case"keypress":return n.which!==32?null:($p=!0,Jp);case"textInput":return t=n.data,t===Jp&&$p?null:t;default:return null}}function Ly(t,n){if(rs)return t==="compositionend"||!Gu&&em(t,n)?(t=qp(),Ll=Fu=Ia=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qp&&n.locale!=="ko"?null:n.data;default:return null}}var Ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ny[t.type]:n==="textarea"}function im(t,n,r,o){is?as?as.push(o):as=[o]:is=o,n=Tc(n,"onChange"),0<n.length&&(r=new Pl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var xo=null,yo=null;function Oy(t){I0(t,0)}function zl(t){var n=xr(t);if(Bt(n))return t}function am(t,n){if(t==="change")return n}var rm=!1;if(ia){var Vu;if(ia){var ku="oninput"in document;if(!ku){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),ku=typeof sm.oninput=="function"}Vu=ku}else Vu=!1;rm=Vu&&(!document.documentMode||9<document.documentMode)}function om(){xo&&(xo.detachEvent("onpropertychange",lm),yo=xo=null)}function lm(t){if(t.propertyName==="value"&&zl(yo)){var n=[];im(n,yo,t,Nu(t)),Wp(Oy,n)}}function Py(t,n,r){t==="focusin"?(om(),xo=n,yo=r,xo.attachEvent("onpropertychange",lm)):t==="focusout"&&om()}function Fy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(yo)}function zy(t,n){if(t==="click")return zl(n)}function By(t,n){if(t==="input"||t==="change")return zl(n)}function Iy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:Iy;function So(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!$t.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function um(t,n){var r=cm(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cm(r)}}function fm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?fm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function dm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=et(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=et(t.document)}return n}function Xu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Hy=ia&&"documentMode"in document&&11>=document.documentMode,ss=null,Wu=null,Mo=null,qu=!1;function hm(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;qu||ss==null||ss!==et(o)||(o=ss,"selectionStart"in o&&Xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Mo&&So(Mo,o)||(Mo=o,o=Tc(Wu,"onSelect"),0<o.length&&(n=new Pl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=ss)))}function Sr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var os={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},ju={},pm={};ia&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Mr(t){if(ju[t])return ju[t];if(!os[t])return t;var n=os[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in pm)return ju[t]=n[r];return t}var mm=Mr("animationend"),gm=Mr("animationiteration"),vm=Mr("animationstart"),Gy=Mr("transitionrun"),Vy=Mr("transitionstart"),ky=Mr("transitioncancel"),_m=Mr("transitionend"),xm=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function Ui(t,n){xm.set(t,n),oe(n,[t])}var Bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],ls=0,Zu=0;function Il(){for(var t=ls,n=Zu=ls=0;n<t;){var r=pi[n];pi[n++]=null;var o=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var h=pi[n];if(pi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&ym(r,u,h)}}function Hl(t,n,r,o){pi[ls++]=t,pi[ls++]=n,pi[ls++]=r,pi[ls++]=o,Zu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ku(t,n,r,o){return Hl(t,n,r,o),Gl(t)}function br(t,n){return Hl(t,null,null,n),Gl(t)}function ym(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Be(r),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),h):null}function Gl(t){if(50<Xo)throw Xo=0,sd=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var cs={};function Xy(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,r,o){return new Xy(t,n,r,o)}function Qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,n){var r=t.alternate;return r===null?(r=ti(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Sm(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vl(t,n,r,o,u,h){var y=0;if(o=t,typeof t=="function")Qu(t)&&(y=1);else if(typeof t=="string")y=ZS(t,r,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case b:return t=ti(31,r,n,u),t.elementType=b,t.lanes=h,t;case A:return Er(r.children,u,h,n);case S:y=8,u|=24;break;case _:return t=ti(12,r,n,u|2),t.elementType=_,t.lanes=h,t;case N:return t=ti(13,r,n,u),t.elementType=N,t.lanes=h,t;case z:return t=ti(19,r,n,u),t.elementType=z,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:y=10;break e;case D:y=9;break e;case O:y=11;break e;case P:y=14;break e;case U:y=16,o=null;break e}y=29,r=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=ti(y,r,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function Er(t,n,r,o){return t=ti(7,t,o,n),t.lanes=r,t}function Ju(t,n,r){return t=ti(6,t,null,n),t.lanes=r,t}function Mm(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function $u(t,n,r){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var bm=new WeakMap;function mi(t,n){if(typeof t=="object"&&t!==null){var r=bm.get(t);return r!==void 0?r:(n={value:t,source:n,stack:X(n)},bm.set(t,n),n)}return{value:t,source:n,stack:X(n)}}var us=[],fs=0,kl=null,bo=0,gi=[],vi=0,Ha=null,Gi=1,Vi="";function ra(t,n){us[fs++]=bo,us[fs++]=kl,kl=t,bo=n}function Em(t,n,r){gi[vi++]=Gi,gi[vi++]=Vi,gi[vi++]=Ha,Ha=t;var o=Gi;t=Vi;var u=32-Be(o)-1;o&=~(1<<u),r+=1;var h=32-Be(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Gi=1<<32-Be(n)+u|r<<u|o,Vi=h+t}else Gi=1<<h|r<<u|o,Vi=t}function ef(t){t.return!==null&&(ra(t,1),Em(t,1,0))}function tf(t){for(;t===kl;)kl=us[--fs],us[fs]=null,bo=us[--fs],us[fs]=null;for(;t===Ha;)Ha=gi[--vi],gi[vi]=null,Vi=gi[--vi],gi[vi]=null,Gi=gi[--vi],gi[vi]=null}function Tm(t,n){gi[vi++]=Gi,gi[vi++]=Vi,gi[vi++]=Ha,Gi=n.id,Vi=n.overflow,Ha=t}var Dn=null,Qt=null,Et=!1,Ga=null,_i=!1,nf=Error(a(519));function Va(t){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(mi(n,t)),nf}function Am(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[fn]=t,n[En]=o,r){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(r=0;r<qo.length;r++)yt(qo[r],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),ta(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||k0(n.textContent,r)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=na),n=!0):n=!1,n||Va(t,!0)}function Rm(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Dn=Dn.return}}function ds(t){if(t!==Dn)return!1;if(!Et)return Rm(t),Et=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Sd(t.type,t.memoizedProps)),r=!r),r&&Qt&&Va(t),Rm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Qt=J0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Qt=J0(t)}else n===27?(n=Qt,nr(t.type)?(t=Ad,Ad=null,Qt=t):Qt=n):Qt=Dn?yi(t.stateNode.nextSibling):null;return!0}function Tr(){Qt=Dn=null,Et=!1}function af(){var t=Ga;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Ga=null),t}function Eo(t){Ga===null?Ga=[t]:Ga.push(t)}var rf=B(null),Ar=null,sa=null;function ka(t,n,r){fe(rf,n._currentValue),n._currentValue=r}function oa(t){t._currentValue=rf.current,ne(rf)}function sf(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function of(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;e:for(;h!==null;){var C=h;h=u;for(var V=0;V<n.length;V++)if(C.context===n[V]){h.lanes|=r,C=h.alternate,C!==null&&(C.lanes|=r),sf(h.return,r,t),o||(y=null);break e}h=C.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(a(341));y.lanes|=r,h=y.alternate,h!==null&&(h.lanes|=r),sf(y,r,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function hs(t,n,r,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var C=u.type;ei(u.pendingProps.value,y.value)||(t!==null?t.push(C):t=[C])}}else if(u===ue.current){if(y=u.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Qo):t=[Qo])}u=u.return}t!==null&&of(n,t,r,o),n.flags|=262144}function Xl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rr(t){Ar=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return Cm(Ar,t)}function Wl(t,n){return Ar===null&&Rr(t),Cm(t,n)}function Cm(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},sa===null){if(t===null)throw Error(a(308));sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else sa=sa.next=n;return r}var Wy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},qy=s.unstable_scheduleCallback,jy=s.unstable_NormalPriority,dn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new Wy,data:new Map,refCount:0}}function To(t){t.refCount--,t.refCount===0&&qy(jy,function(){t.controller.abort()})}var Ao=null,cf=0,ps=0,ms=null;function Yy(t,n){if(Ao===null){var r=Ao=[];cf=0,ps=dd(),ms={status:"pending",value:void 0,then:function(o){r.push(o)}}}return cf++,n.then(wm,wm),n}function wm(){if(--cf===0&&Ao!==null){ms!==null&&(ms.status="fulfilled");var t=Ao;Ao=null,ps=0,ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Zy(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var Dm=F.S;F.S=function(t,n){h0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Yy(t,n),Dm!==null&&Dm(t,n)};var Cr=B(null);function uf(){var t=Cr.current;return t!==null?t:Zt.pooledCache}function ql(t,n){n===null?fe(Cr,Cr.current):fe(Cr,n.pool)}function Um(){var t=uf();return t===null?null:{parent:dn._currentValue,pool:t}}var gs=Error(a(460)),ff=Error(a(474)),jl=Error(a(542)),Yl={then:function(){}};function Lm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nm(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(na,na),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pm(t),t;default:if(typeof n.status=="string")n.then(na,na);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pm(t),t}throw Dr=n,gs}}function wr(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Dr=r,gs):r}}var Dr=null;function Om(){if(Dr===null)throw Error(a(459));var t=Dr;return Dr=null,t}function Pm(t){if(t===gs||t===jl)throw Error(a(483))}var vs=null,Ro=0;function Zl(t){var n=Ro;return Ro+=1,vs===null&&(vs=[]),Nm(vs,t,n)}function Co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Kl(t,n){throw n.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Fm(t){function n(J,q){if(t){var ie=J.deletions;ie===null?(J.deletions=[q],J.flags|=16):ie.push(q)}}function r(J,q){if(!t)return null;for(;q!==null;)n(J,q),q=q.sibling;return null}function o(J){for(var q=new Map;J!==null;)J.key!==null?q.set(J.key,J):q.set(J.index,J),J=J.sibling;return q}function u(J,q){return J=aa(J,q),J.index=0,J.sibling=null,J}function h(J,q,ie){return J.index=ie,t?(ie=J.alternate,ie!==null?(ie=ie.index,ie<q?(J.flags|=67108866,q):ie):(J.flags|=67108866,q)):(J.flags|=1048576,q)}function y(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function C(J,q,ie,ve){return q===null||q.tag!==6?(q=Ju(ie,J.mode,ve),q.return=J,q):(q=u(q,ie),q.return=J,q)}function V(J,q,ie,ve){var tt=ie.type;return tt===A?me(J,q,ie.props.children,ve,ie.key):q!==null&&(q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===U&&wr(tt)===q.type)?(q=u(q,ie.props),Co(q,ie),q.return=J,q):(q=Vl(ie.type,ie.key,ie.props,null,J.mode,ve),Co(q,ie),q.return=J,q)}function ae(J,q,ie,ve){return q===null||q.tag!==4||q.stateNode.containerInfo!==ie.containerInfo||q.stateNode.implementation!==ie.implementation?(q=$u(ie,J.mode,ve),q.return=J,q):(q=u(q,ie.children||[]),q.return=J,q)}function me(J,q,ie,ve,tt){return q===null||q.tag!==7?(q=Er(ie,J.mode,ve,tt),q.return=J,q):(q=u(q,ie),q.return=J,q)}function _e(J,q,ie){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Ju(""+q,J.mode,ie),q.return=J,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return ie=Vl(q.type,q.key,q.props,null,J.mode,ie),Co(ie,q),ie.return=J,ie;case T:return q=$u(q,J.mode,ie),q.return=J,q;case U:return q=wr(q),_e(J,q,ie)}if(re(q)||j(q))return q=Er(q,J.mode,ie,null),q.return=J,q;if(typeof q.then=="function")return _e(J,Zl(q),ie);if(q.$$typeof===L)return _e(J,Wl(J,q),ie);Kl(J,q)}return null}function le(J,q,ie,ve){var tt=q!==null?q.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return tt!==null?null:C(J,q,""+ie,ve);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:return ie.key===tt?V(J,q,ie,ve):null;case T:return ie.key===tt?ae(J,q,ie,ve):null;case U:return ie=wr(ie),le(J,q,ie,ve)}if(re(ie)||j(ie))return tt!==null?null:me(J,q,ie,ve,null);if(typeof ie.then=="function")return le(J,q,Zl(ie),ve);if(ie.$$typeof===L)return le(J,q,Wl(J,ie),ve);Kl(J,ie)}return null}function he(J,q,ie,ve,tt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return J=J.get(ie)||null,C(q,J,""+ve,tt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return J=J.get(ve.key===null?ie:ve.key)||null,V(q,J,ve,tt);case T:return J=J.get(ve.key===null?ie:ve.key)||null,ae(q,J,ve,tt);case U:return ve=wr(ve),he(J,q,ie,ve,tt)}if(re(ve)||j(ve))return J=J.get(ie)||null,me(q,J,ve,tt,null);if(typeof ve.then=="function")return he(J,q,ie,Zl(ve),tt);if(ve.$$typeof===L)return he(J,q,ie,Wl(q,ve),tt);Kl(q,ve)}return null}function We(J,q,ie,ve){for(var tt=null,Dt=null,Je=q,pt=q=0,bt=null;Je!==null&&pt<ie.length;pt++){Je.index>pt?(bt=Je,Je=null):bt=Je.sibling;var Ut=le(J,Je,ie[pt],ve);if(Ut===null){Je===null&&(Je=bt);break}t&&Je&&Ut.alternate===null&&n(J,Je),q=h(Ut,q,pt),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut,Je=bt}if(pt===ie.length)return r(J,Je),Et&&ra(J,pt),tt;if(Je===null){for(;pt<ie.length;pt++)Je=_e(J,ie[pt],ve),Je!==null&&(q=h(Je,q,pt),Dt===null?tt=Je:Dt.sibling=Je,Dt=Je);return Et&&ra(J,pt),tt}for(Je=o(Je);pt<ie.length;pt++)bt=he(Je,J,pt,ie[pt],ve),bt!==null&&(t&&bt.alternate!==null&&Je.delete(bt.key===null?pt:bt.key),q=h(bt,q,pt),Dt===null?tt=bt:Dt.sibling=bt,Dt=bt);return t&&Je.forEach(function(or){return n(J,or)}),Et&&ra(J,pt),tt}function at(J,q,ie,ve){if(ie==null)throw Error(a(151));for(var tt=null,Dt=null,Je=q,pt=q=0,bt=null,Ut=ie.next();Je!==null&&!Ut.done;pt++,Ut=ie.next()){Je.index>pt?(bt=Je,Je=null):bt=Je.sibling;var or=le(J,Je,Ut.value,ve);if(or===null){Je===null&&(Je=bt);break}t&&Je&&or.alternate===null&&n(J,Je),q=h(or,q,pt),Dt===null?tt=or:Dt.sibling=or,Dt=or,Je=bt}if(Ut.done)return r(J,Je),Et&&ra(J,pt),tt;if(Je===null){for(;!Ut.done;pt++,Ut=ie.next())Ut=_e(J,Ut.value,ve),Ut!==null&&(q=h(Ut,q,pt),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut);return Et&&ra(J,pt),tt}for(Je=o(Je);!Ut.done;pt++,Ut=ie.next())Ut=he(Je,J,pt,Ut.value,ve),Ut!==null&&(t&&Ut.alternate!==null&&Je.delete(Ut.key===null?pt:Ut.key),q=h(Ut,q,pt),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut);return t&&Je.forEach(function(sM){return n(J,sM)}),Et&&ra(J,pt),tt}function jt(J,q,ie,ve){if(typeof ie=="object"&&ie!==null&&ie.type===A&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:e:{for(var tt=ie.key;q!==null;){if(q.key===tt){if(tt=ie.type,tt===A){if(q.tag===7){r(J,q.sibling),ve=u(q,ie.props.children),ve.return=J,J=ve;break e}}else if(q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===U&&wr(tt)===q.type){r(J,q.sibling),ve=u(q,ie.props),Co(ve,ie),ve.return=J,J=ve;break e}r(J,q);break}else n(J,q);q=q.sibling}ie.type===A?(ve=Er(ie.props.children,J.mode,ve,ie.key),ve.return=J,J=ve):(ve=Vl(ie.type,ie.key,ie.props,null,J.mode,ve),Co(ve,ie),ve.return=J,J=ve)}return y(J);case T:e:{for(tt=ie.key;q!==null;){if(q.key===tt)if(q.tag===4&&q.stateNode.containerInfo===ie.containerInfo&&q.stateNode.implementation===ie.implementation){r(J,q.sibling),ve=u(q,ie.children||[]),ve.return=J,J=ve;break e}else{r(J,q);break}else n(J,q);q=q.sibling}ve=$u(ie,J.mode,ve),ve.return=J,J=ve}return y(J);case U:return ie=wr(ie),jt(J,q,ie,ve)}if(re(ie))return We(J,q,ie,ve);if(j(ie)){if(tt=j(ie),typeof tt!="function")throw Error(a(150));return ie=tt.call(ie),at(J,q,ie,ve)}if(typeof ie.then=="function")return jt(J,q,Zl(ie),ve);if(ie.$$typeof===L)return jt(J,q,Wl(J,ie),ve);Kl(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,q!==null&&q.tag===6?(r(J,q.sibling),ve=u(q,ie),ve.return=J,J=ve):(r(J,q),ve=Ju(ie,J.mode,ve),ve.return=J,J=ve),y(J)):r(J,q)}return function(J,q,ie,ve){try{Ro=0;var tt=jt(J,q,ie,ve);return vs=null,tt}catch(Je){if(Je===gs||Je===jl)throw Je;var Dt=ti(29,Je,null,J.mode);return Dt.lanes=ve,Dt.return=J,Dt}}}var Ur=Fm(!0),zm=Fm(!1),Xa=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function qa(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Gl(t),ym(t,null,r),n}return Hl(t,o,n,r),Gl(t)}function wo(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,lo(t,r)}}function pf(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,r=r.next}while(r!==null);h===null?u=h=n:h=h.next=n}else u=h=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var mf=!1;function Do(){if(mf){var t=ms;if(t!==null)throw t}}function Uo(t,n,r,o){mf=!1;var u=t.updateQueue;Xa=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var V=C,ae=V.next;V.next=null,y===null?h=ae:y.next=ae,y=V;var me=t.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==y&&(C===null?me.firstBaseUpdate=ae:C.next=ae,me.lastBaseUpdate=V))}if(h!==null){var _e=u.baseState;y=0,me=ae=V=null,C=h;do{var le=C.lane&-536870913,he=le!==C.lane;if(he?(Mt&le)===le:(o&le)===le){le!==0&&le===ps&&(mf=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var We=t,at=C;le=n;var jt=r;switch(at.tag){case 1:if(We=at.payload,typeof We=="function"){_e=We.call(jt,_e,le);break e}_e=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=at.payload,le=typeof We=="function"?We.call(jt,_e,le):We,le==null)break e;_e=g({},_e,le);break e;case 2:Xa=!0}}le=C.callback,le!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[le]:he.push(le))}else he={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(ae=me=he,V=_e):me=me.next=he,y|=le;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;he=C,C=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);me===null&&(V=_e),u.baseState=V,u.firstBaseUpdate=ae,u.lastBaseUpdate=me,h===null&&(u.shared.lanes=0),Qa|=y,t.lanes=y,t.memoizedState=_e}}function Bm(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function Im(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Bm(r[t],n)}var _s=B(null),Ql=B(0);function Hm(t,n){t=ga,fe(Ql,t),fe(_s,n),ga=t|n.baseLanes}function gf(){fe(Ql,ga),fe(_s,_s.current)}function vf(){ga=Ql.current,ne(_s),ne(Ql)}var ni=B(null),xi=null;function ja(t){var n=t.alternate;fe(on,on.current&1),fe(ni,t),xi===null&&(n===null||_s.current!==null||n.memoizedState!==null)&&(xi=t)}function _f(t){fe(on,on.current),fe(ni,t),xi===null&&(xi=t)}function Gm(t){t.tag===22?(fe(on,on.current),fe(ni,t),xi===null&&(xi=t)):Ya()}function Ya(){fe(on,on.current),fe(ni,ni.current)}function ii(t){ne(ni),xi===t&&(xi=null),ne(on)}var on=B(0);function Jl(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Ed(r)||Td(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var la=0,ft=null,Wt=null,hn=null,$l=!1,xs=!1,Lr=!1,ec=0,Lo=0,ys=null,Ky=0;function rn(){throw Error(a(321))}function xf(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!ei(t[r],n[r]))return!1;return!0}function yf(t,n,r,o,u,h){return la=h,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?Eg:Pf,Lr=!1,h=r(o,u),Lr=!1,xs&&(h=km(n,r,o,u)),Vm(t),h}function Vm(t){F.H=Po;var n=Wt!==null&&Wt.next!==null;if(la=0,hn=Wt=ft=null,$l=!1,Lo=0,ys=null,n)throw Error(a(300));t===null||pn||(t=t.dependencies,t!==null&&Xl(t)&&(pn=!0))}function km(t,n,r,o){ft=t;var u=0;do{if(xs&&(ys=null),Lo=0,xs=!1,25<=u)throw Error(a(301));if(u+=1,hn=Wt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=Tg,h=n(r,o)}while(xs);return h}function Qy(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?No(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(ft.flags|=1024),n}function Sf(){var t=ec!==0;return ec=0,t}function Mf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function bf(t){if($l){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}$l=!1}la=0,hn=Wt=ft=null,xs=!1,Lo=ec=0,ys=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ft.memoizedState=hn=t:hn=hn.next=t,hn}function ln(){if(Wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=hn===null?ft.memoizedState:hn.next;if(n!==null)hn=n,Wt=t;else{if(t===null)throw ft.alternate===null?Error(a(467)):Error(a(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},hn===null?ft.memoizedState=hn=t:hn=hn.next=t}return hn}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(t){var n=Lo;return Lo+=1,ys===null&&(ys=[]),t=Nm(ys,t,n),n=ft,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Eg:Pf),t}function nc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return No(t);if(t.$$typeof===L)return Un(t)}throw Error(a(438,String(t)))}function Ef(t){var n=null,r=ft.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=tc(),ft.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=R;return n.index++,r}function ca(t,n){return typeof n=="function"?n(t):n}function ic(t){var n=ln();return Tf(n,Wt,t)}function Tf(t,n,r){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var C=y=null,V=null,ae=n,me=!1;do{var _e=ae.lane&-536870913;if(_e!==ae.lane?(Mt&_e)===_e:(la&_e)===_e){var le=ae.revertLane;if(le===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),_e===ps&&(me=!0);else if((la&le)===le){ae=ae.next,le===ps&&(me=!0);continue}else _e={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(C=V=_e,y=h):V=V.next=_e,ft.lanes|=le,Qa|=le;_e=ae.action,Lr&&r(h,_e),h=ae.hasEagerState?ae.eagerState:r(h,_e)}else le={lane:_e,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(C=V=le,y=h):V=V.next=le,ft.lanes|=_e,Qa|=_e;ae=ae.next}while(ae!==null&&ae!==n);if(V===null?y=h:V.next=C,!ei(h,t.memoizedState)&&(pn=!0,me&&(r=ms,r!==null)))throw r;t.memoizedState=h,t.baseState=y,t.baseQueue=V,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Af(t){var n=ln(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,h=n.memoizedState;if(u!==null){r.pending=null;var y=u=u.next;do h=t(h,y.action),y=y.next;while(y!==u);ei(h,n.memoizedState)||(pn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function Xm(t,n,r){var o=ft,u=ln(),h=Et;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=n();var y=!ei((Wt||u).memoizedState,r);if(y&&(u.memoizedState=r,pn=!0),u=u.queue,wf(jm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,Ss(9,{destroy:void 0},qm.bind(null,o,u,r,n),null),Zt===null)throw Error(a(349));h||(la&127)!==0||Wm(o,n,r)}return r}function Wm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=ft.updateQueue,n===null?(n=tc(),ft.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function qm(t,n,r,o){n.value=r,n.getSnapshot=o,Ym(n)&&Zm(t)}function jm(t,n,r){return r(function(){Ym(n)&&Zm(t)})}function Ym(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!ei(t,r)}catch{return!0}}function Zm(t){var n=br(t,2);n!==null&&Kn(n,t,2)}function Rf(t){var n=Hn();if(typeof t=="function"){var r=t;if(t=r(),Lr){Ge(!0);try{r()}finally{Ge(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},n}function Km(t,n,r,o){return t.baseState=r,Tf(t,Wt,typeof o=="function"?o:ca)}function Jy(t,n,r,o,u){if(sc(t))throw Error(a(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};F.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,Qm(n,h)):(h.next=r.next,n.pending=r.next=h)}}function Qm(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=F.T,y={};F.T=y;try{var C=r(u,o),V=F.S;V!==null&&V(y,C),Jm(t,n,C)}catch(ae){Cf(t,n,ae)}finally{h!==null&&y.types!==null&&(h.types=y.types),F.T=h}}else try{h=r(u,o),Jm(t,n,h)}catch(ae){Cf(t,n,ae)}}function Jm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){$m(t,n,o)},function(o){return Cf(t,n,o)}):$m(t,n,r)}function $m(t,n,r){n.status="fulfilled",n.value=r,eg(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Qm(t,r)))}function Cf(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,eg(n),n=n.next;while(n!==o)}t.action=null}function eg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function tg(t,n){return n}function ng(t,n){if(Et){var r=Zt.formState;if(r!==null){e:{var o=ft;if(Et){if(Qt){t:{for(var u=Qt,h=_i;u.nodeType!==8;){if(!h){u=null;break t}if(u=yi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Qt=yi(u.nextSibling),o=u.data==="F!";break e}}Va(o)}o=!1}o&&(n=r[0])}}return r=Hn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tg,lastRenderedState:n},r.queue=o,r=Sg.bind(null,ft,o),o.dispatch=r,o=Rf(!1),h=Of.bind(null,ft,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=Jy.bind(null,ft,u,h,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function ig(t){var n=ln();return ag(n,Wt,t)}function ag(t,n,r){if(n=Tf(t,n,tg)[0],t=ic(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=No(n)}catch(y){throw y===gs?jl:y}else o=n;n=ln();var u=n.queue,h=u.dispatch;return r!==n.memoizedState&&(ft.flags|=2048,Ss(9,{destroy:void 0},$y.bind(null,u,r),null)),[o,h,t]}function $y(t,n){t.action=n}function rg(t){var n=ln(),r=Wt;if(r!==null)return ag(n,r,t);ln(),n=n.memoizedState,r=ln();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function Ss(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=tc(),ft.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function sg(){return ln().memoizedState}function ac(t,n,r,o){var u=Hn();ft.flags|=t,u.memoizedState=Ss(1|n,{destroy:void 0},r,o===void 0?null:o)}function rc(t,n,r,o){var u=ln();o=o===void 0?null:o;var h=u.memoizedState.inst;Wt!==null&&o!==null&&xf(o,Wt.memoizedState.deps)?u.memoizedState=Ss(n,h,r,o):(ft.flags|=t,u.memoizedState=Ss(1|n,h,r,o))}function og(t,n){ac(8390656,8,t,n)}function wf(t,n){rc(2048,8,t,n)}function eS(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=tc(),ft.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function lg(t){var n=ln().memoizedState;return eS({ref:n,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function cg(t,n){return rc(4,2,t,n)}function ug(t,n){return rc(4,4,t,n)}function fg(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function dg(t,n,r){r=r!=null?r.concat([t]):null,rc(4,4,fg.bind(null,n,t),r)}function Df(){}function hg(t,n){var r=ln();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&xf(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function pg(t,n){var r=ln();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&xf(n,o[1]))return o[0];if(o=t(),Lr){Ge(!0);try{t()}finally{Ge(!1)}}return r.memoizedState=[o,n],o}function Uf(t,n,r){return r===void 0||(la&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=m0(),ft.lanes|=t,Qa|=t,r)}function mg(t,n,r,o){return ei(r,n)?r:_s.current!==null?(t=Uf(t,r,o),ei(t,n)||(pn=!0),t):(la&42)===0||(la&1073741824)!==0&&(Mt&261930)===0?(pn=!0,t.memoizedState=r):(t=m0(),ft.lanes|=t,Qa|=t,n)}function gg(t,n,r,o,u){var h=G.p;G.p=h!==0&&8>h?h:8;var y=F.T,C={};F.T=C,Of(t,!1,n,r);try{var V=u(),ae=F.S;if(ae!==null&&ae(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var me=Zy(V,o);Oo(t,n,me,si(t))}else Oo(t,n,o,si(t))}catch(_e){Oo(t,n,{then:function(){},status:"rejected",reason:_e},si())}finally{G.p=h,y!==null&&C.types!==null&&(y.types=C.types),F.T=y}}function tS(){}function Lf(t,n,r,o){if(t.tag!==5)throw Error(a(476));var u=vg(t).queue;gg(t,u,n,W,r===null?tS:function(){return _g(t),r(o)})}function vg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:W},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function _g(t){var n=vg(t);n.next===null&&(n=t.alternate.memoizedState),Oo(t,n.next.queue,{},si())}function Nf(){return Un(Qo)}function xg(){return ln().memoizedState}function yg(){return ln().memoizedState}function nS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=si();t=Wa(r);var o=qa(n,t,r);o!==null&&(Kn(o,n,r),wo(o,n,r)),n={cache:lf()},t.payload=n;return}n=n.return}}function iS(t,n,r){var o=si();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},sc(t)?Mg(n,r):(r=Ku(t,n,r,o),r!==null&&(Kn(r,t,o),bg(r,n,o)))}function Sg(t,n,r){var o=si();Oo(t,n,r,o)}function Oo(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(sc(t))Mg(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,C=h(y,r);if(u.hasEagerState=!0,u.eagerState=C,ei(C,y))return Hl(t,n,u,0),Zt===null&&Il(),!1}catch{}if(r=Ku(t,n,u,o),r!==null)return Kn(r,t,o),bg(r,n,o),!0}return!1}function Of(t,n,r,o){if(o={lane:2,revertLane:dd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},sc(t)){if(n)throw Error(a(479))}else n=Ku(t,r,o,2),n!==null&&Kn(n,t,2)}function sc(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function Mg(t,n){xs=$l=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function bg(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,lo(t,r)}}var Po={readContext:Un,use:nc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Po.useEffectEvent=rn;var Eg={readContext:Un,use:nc,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:og,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,ac(4194308,4,fg.bind(null,n,t),r)},useLayoutEffect:function(t,n){return ac(4194308,4,t,n)},useInsertionEffect:function(t,n){ac(4,2,t,n)},useMemo:function(t,n){var r=Hn();n=n===void 0?null:n;var o=t();if(Lr){Ge(!0);try{t()}finally{Ge(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Hn();if(r!==void 0){var u=r(n);if(Lr){Ge(!0);try{r(n)}finally{Ge(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=iS.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Rf(t);var n=t.queue,r=Sg.bind(null,ft,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Df,useDeferredValue:function(t,n){var r=Hn();return Uf(r,t,n)},useTransition:function(){var t=Rf(!1);return t=gg.bind(null,ft,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=ft,u=Hn();if(Et){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Zt===null)throw Error(a(349));(Mt&127)!==0||Wm(o,n,r)}u.memoizedState=r;var h={value:r,getSnapshot:n};return u.queue=h,og(jm.bind(null,o,h,t),[t]),o.flags|=2048,Ss(9,{destroy:void 0},qm.bind(null,o,h,r,n),null),r},useId:function(){var t=Hn(),n=Zt.identifierPrefix;if(Et){var r=Vi,o=Gi;r=(o&~(1<<32-Be(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=ec++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=Ky++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Nf,useFormState:ng,useActionState:ng,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Of.bind(null,ft,!0,r),r.dispatch=n,[t,n]},useMemoCache:Ef,useCacheRefresh:function(){return Hn().memoizedState=nS.bind(null,ft)},useEffectEvent:function(t){var n=Hn(),r={impl:t};return n.memoizedState=r,function(){if((Ft&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Pf={readContext:Un,use:nc,useCallback:hg,useContext:Un,useEffect:wf,useImperativeHandle:dg,useInsertionEffect:cg,useLayoutEffect:ug,useMemo:pg,useReducer:ic,useRef:sg,useState:function(){return ic(ca)},useDebugValue:Df,useDeferredValue:function(t,n){var r=ln();return mg(r,Wt.memoizedState,t,n)},useTransition:function(){var t=ic(ca)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:Xm,useId:xg,useHostTransitionStatus:Nf,useFormState:ig,useActionState:ig,useOptimistic:function(t,n){var r=ln();return Km(r,Wt,t,n)},useMemoCache:Ef,useCacheRefresh:yg};Pf.useEffectEvent=lg;var Tg={readContext:Un,use:nc,useCallback:hg,useContext:Un,useEffect:wf,useImperativeHandle:dg,useInsertionEffect:cg,useLayoutEffect:ug,useMemo:pg,useReducer:Af,useRef:sg,useState:function(){return Af(ca)},useDebugValue:Df,useDeferredValue:function(t,n){var r=ln();return Wt===null?Uf(r,t,n):mg(r,Wt.memoizedState,t,n)},useTransition:function(){var t=Af(ca)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:Xm,useId:xg,useHostTransitionStatus:Nf,useFormState:rg,useActionState:rg,useOptimistic:function(t,n){var r=ln();return Wt!==null?Km(r,Wt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Ef,useCacheRefresh:yg};Tg.useEffectEvent=lg;function Ff(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var zf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=si(),u=Wa(o);u.payload=n,r!=null&&(u.callback=r),n=qa(t,u,o),n!==null&&(Kn(n,t,o),wo(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=si(),u=Wa(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=qa(t,u,o),n!==null&&(Kn(n,t,o),wo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=si(),o=Wa(r);o.tag=2,n!=null&&(o.callback=n),n=qa(t,o,r),n!==null&&(Kn(n,t,r),wo(n,t,r))}};function Ag(t,n,r,o,u,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!So(r,o)||!So(u,h):!0}function Rg(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&zf.enqueueReplaceState(n,n.state,null)}function Nr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function Cg(t){Bl(t)}function wg(t){console.error(t)}function Dg(t){Bl(t)}function oc(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ug(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Bf(t,n,r){return r=Wa(r),r.tag=3,r.payload={element:null},r.callback=function(){oc(t,n)},r}function Lg(t){return t=Wa(t),t.tag=3,t}function Ng(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){Ug(n,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Ug(n,r,o),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function aS(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&hs(n,r,u,!0),r=ni.current,r!==null){switch(r.tag){case 31:case 13:return xi===null?xc():r.alternate===null&&sn===0&&(sn=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Yl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),cd(t,o,u)),!1;case 22:return r.flags|=65536,o===Yl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),cd(t,o,u)),!1}throw Error(a(435,r.tag))}return cd(t,o,u),xc(),!1}if(Et)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==nf&&(t=Error(a(422),{cause:o}),Eo(mi(t,r)))):(o!==nf&&(n=Error(a(423),{cause:o}),Eo(mi(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=mi(o,r),u=Bf(t.stateNode,o,u),pf(t,u),sn!==4&&(sn=2)),!1;var h=Error(a(520),{cause:o});if(h=mi(h,r),ko===null?ko=[h]:ko.push(h),sn!==4&&(sn=2),n===null)return!0;o=mi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=Bf(r.stateNode,o,t),pf(r,t),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ja===null||!Ja.has(h))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Lg(u),Ng(u,t,r,o),pf(r,u),!1}r=r.return}while(r!==null);return!1}var If=Error(a(461)),pn=!1;function Ln(t,n,r,o){n.child=t===null?zm(n,null,r,o):Ur(n,t.child,r,o)}function Og(t,n,r,o,u){r=r.render;var h=n.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return Rr(n),o=yf(t,n,r,y,h,u),C=Sf(),t!==null&&!pn?(Mf(t,n,u),ua(t,n,u)):(Et&&C&&ef(n),n.flags|=1,Ln(t,n,o,u),n.child)}function Pg(t,n,r,o,u){if(t===null){var h=r.type;return typeof h=="function"&&!Qu(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,Fg(t,n,h,o,u)):(t=Vl(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!jf(t,u)){var y=h.memoizedProps;if(r=r.compare,r=r!==null?r:So,r(y,o)&&t.ref===n.ref)return ua(t,n,u)}return n.flags|=1,t=aa(h,o),t.ref=n.ref,t.return=n,n.child=t}function Fg(t,n,r,o,u){if(t!==null){var h=t.memoizedProps;if(So(h,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=h,jf(t,u))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,ua(t,n,u)}return Hf(t,n,r,o,u)}function zg(t,n,r,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Bg(t,n,h,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ql(n,h!==null?h.cachePool:null),h!==null?Hm(n,h):gf(),Gm(n);else return o=n.lanes=536870912,Bg(t,n,h!==null?h.baseLanes|r:r,r,o)}else h!==null?(ql(n,h.cachePool),Hm(n,h),Ya(),n.memoizedState=null):(t!==null&&ql(n,null),gf(),Ya());return Ln(t,n,u,r),n.child}function Fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Bg(t,n,r,o,u){var h=uf();return h=h===null?null:{parent:dn._currentValue,pool:h},n.memoizedState={baseLanes:r,cachePool:h},t!==null&&ql(n,null),gf(),Gm(n),t!==null&&hs(t,n,o,!0),n.childLanes=u,null}function lc(t,n){return n=uc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ig(t,n,r){return Ur(n,t.child,null,r),t=lc(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function rS(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=lc(n,o),n.lanes=536870912,Fo(null,t);if(_f(n),(t=Qt)?(t=Q0(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},r=Mm(t),r.return=n,n.child=r,Dn=n,Qt=null)):t=null,t===null)throw Va(n);return n.lanes=536870912,null}return lc(n,o)}var h=t.memoizedState;if(h!==null){var y=h.dehydrated;if(_f(n),u)if(n.flags&256)n.flags&=-257,n=Ig(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(a(558));else if(pn||hs(t,n,r,!1),u=(r&t.childLanes)!==0,pn||u){if(o=Zt,o!==null&&(y=Jr(o,r),y!==0&&y!==h.retryLane))throw h.retryLane=y,br(t,y),Kn(o,t,y),If;xc(),n=Ig(t,n,r)}else t=h.treeContext,Qt=yi(y.nextSibling),Dn=n,Et=!0,Ga=null,_i=!1,t!==null&&Tm(n,t),n=lc(n,o),n.flags|=4096;return n}return t=aa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function cc(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Hf(t,n,r,o,u){return Rr(n),r=yf(t,n,r,o,void 0,u),o=Sf(),t!==null&&!pn?(Mf(t,n,u),ua(t,n,u)):(Et&&o&&ef(n),n.flags|=1,Ln(t,n,r,u),n.child)}function Hg(t,n,r,o,u,h){return Rr(n),n.updateQueue=null,r=km(n,o,r,u),Vm(t),o=Sf(),t!==null&&!pn?(Mf(t,n,h),ua(t,n,h)):(Et&&o&&ef(n),n.flags|=1,Ln(t,n,r,h),n.child)}function Gg(t,n,r,o,u){if(Rr(n),n.stateNode===null){var h=cs,y=r.contextType;typeof y=="object"&&y!==null&&(h=Un(y)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=zf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},df(n),y=r.contextType,h.context=typeof y=="object"&&y!==null?Un(y):cs,h.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Ff(n,r,y,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&zf.enqueueReplaceState(h,h.state,null),Uo(n,o,h,u),Do(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var C=n.memoizedProps,V=Nr(r,C);h.props=V;var ae=h.context,me=r.contextType;y=cs,typeof me=="object"&&me!==null&&(y=Un(me));var _e=r.getDerivedStateFromProps;me=typeof _e=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||ae!==y)&&Rg(n,h,o,y),Xa=!1;var le=n.memoizedState;h.state=le,Uo(n,o,h,u),Do(),ae=n.memoizedState,C||le!==ae||Xa?(typeof _e=="function"&&(Ff(n,r,_e,o),ae=n.memoizedState),(V=Xa||Ag(n,r,V,o,le,ae,y))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),h.props=o,h.state=ae,h.context=y,o=V):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,hf(t,n),y=n.memoizedProps,me=Nr(r,y),h.props=me,_e=n.pendingProps,le=h.context,ae=r.contextType,V=cs,typeof ae=="object"&&ae!==null&&(V=Un(ae)),C=r.getDerivedStateFromProps,(ae=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==_e||le!==V)&&Rg(n,h,o,V),Xa=!1,le=n.memoizedState,h.state=le,Uo(n,o,h,u),Do();var he=n.memoizedState;y!==_e||le!==he||Xa||t!==null&&t.dependencies!==null&&Xl(t.dependencies)?(typeof C=="function"&&(Ff(n,r,C,o),he=n.memoizedState),(me=Xa||Ag(n,r,me,o,le,he,V)||t!==null&&t.dependencies!==null&&Xl(t.dependencies))?(ae||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,he,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,he,V)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),h.props=o,h.state=he,h.context=V,o=me):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,cc(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Ur(n,t.child,null,u),n.child=Ur(n,null,r,u)):Ln(t,n,r,u),n.memoizedState=h.state,t=n.child):t=ua(t,n,u),t}function Vg(t,n,r,o){return Tr(),n.flags|=256,Ln(t,n,r,o),n.child}var Gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(t){return{baseLanes:t,cachePool:Um()}}function kf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=ri),t}function kg(t,n,r){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(u?ja(n):Ya(),(t=Qt)?(t=Q0(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},r=Mm(t),r.return=n,n.child=r,Dn=n,Qt=null)):t=null,t===null)throw Va(n);return Td(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Ya(),u=n.mode,C=uc({mode:"hidden",children:C},u),o=Er(o,u,r,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Vf(r),o.childLanes=kf(t,y,r),n.memoizedState=Gf,Fo(null,o)):(ja(n),Xf(n,C))}var V=t.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(h)n.flags&256?(ja(n),n.flags&=-257,n=Wf(t,n,r)):n.memoizedState!==null?(Ya(),n.child=t.child,n.flags|=128,n=null):(Ya(),C=o.fallback,u=n.mode,o=uc({mode:"visible",children:o.children},u),C=Er(C,u,r,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Ur(n,t.child,null,r),o=n.child,o.memoizedState=Vf(r),o.childLanes=kf(t,y,r),n.memoizedState=Gf,n=Fo(null,o));else if(ja(n),Td(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var ae=y.dgst;y=ae,o=Error(a(419)),o.stack="",o.digest=y,Eo({value:o,source:null,stack:null}),n=Wf(t,n,r)}else if(pn||hs(t,n,r,!1),y=(r&t.childLanes)!==0,pn||y){if(y=Zt,y!==null&&(o=Jr(y,r),o!==0&&o!==V.retryLane))throw V.retryLane=o,br(t,o),Kn(y,t,o),If;Ed(C)||xc(),n=Wf(t,n,r)}else Ed(C)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,Qt=yi(C.nextSibling),Dn=n,Et=!0,Ga=null,_i=!1,t!==null&&Tm(n,t),n=Xf(n,o.children),n.flags|=4096);return n}return u?(Ya(),C=o.fallback,u=n.mode,V=t.child,ae=V.sibling,o=aa(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ae!==null?C=aa(ae,C):(C=Er(C,u,r,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Fo(null,o),o=n.child,C=t.child.memoizedState,C===null?C=Vf(r):(u=C.cachePool,u!==null?(V=dn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Um(),C={baseLanes:C.baseLanes|r,cachePool:u}),o.memoizedState=C,o.childLanes=kf(t,y,r),n.memoizedState=Gf,Fo(t.child,o)):(ja(n),r=t.child,t=r.sibling,r=aa(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=r,n.memoizedState=null,r)}function Xf(t,n){return n=uc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function uc(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function Wf(t,n,r){return Ur(n,t.child,null,r),t=Xf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Xg(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),sf(t.return,n,r)}function qf(t,n,r,o,u,h){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=r,y.tailMode=u,y.treeForkCount=h)}function Wg(t,n,r){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=on.current,C=(y&2)!==0;if(C?(y=y&1|2,n.flags|=128):y&=1,fe(on,y),Ln(t,n,o,r),o=Et?bo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,r,n);else if(t.tag===19)Xg(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)t=r.alternate,t!==null&&Jl(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),qf(n,!1,u,r,h,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Jl(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}qf(n,!0,r,null,h,o);break;case"together":qf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ua(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Qa|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(hs(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,r=aa(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=aa(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function jf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Xl(t)))}function sS(t,n,r){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),ka(n,dn,t.memoizedState.cache),Tr();break;case 27:case 5:He(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,_f(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ja(n),n.flags|=128,null):(r&n.child.childLanes)!==0?kg(t,n,r):(ja(n),t=ua(t,n,r),t!==null?t.sibling:null);ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(hs(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return Wg(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),fe(on,on.current),o)break;return null;case 22:return n.lanes=0,zg(t,n,r,n.pendingProps);case 24:ka(n,dn,t.memoizedState.cache)}return ua(t,n,r)}function qg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!jf(t,r)&&(n.flags&128)===0)return pn=!1,sS(t,n,r);pn=(t.flags&131072)!==0}else pn=!1,Et&&(n.flags&1048576)!==0&&Em(n,bo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=wr(n.elementType),n.type=t,typeof t=="function")Qu(t)?(o=Nr(t,o),n.tag=1,n=Gg(null,n,t,o,r)):(n.tag=0,n=Hf(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=Og(null,n,t,o,r);break e}else if(u===P){n.tag=14,n=Pg(null,n,t,o,r);break e}}throw n=te(t)||t,Error(a(306,n,""))}}return n;case 0:return Hf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=Nr(o,n.pendingProps),Gg(t,n,o,u,r);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,hf(t,n),Uo(n,o,null,r);var y=n.memoizedState;if(o=y.cache,ka(n,dn,o),o!==h.cache&&of(n,[dn],r,!0),Do(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Vg(t,n,o,r);break e}else if(o!==u){u=mi(Error(a(424)),n),Eo(u),n=Vg(t,n,o,r);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Qt=yi(t.firstChild),Dn=n,Et=!0,Ga=null,_i=!0,r=zm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Tr(),o===u){n=ua(t,n,r);break e}Ln(t,n,o,r)}n=n.child}return n;case 26:return cc(t,n),t===null?(r=iv(n.type,null,n.pendingProps,null))?n.memoizedState=r:Et||(r=n.type,t=n.pendingProps,o=Ac(se.current).createElement(r),o[fn]=n,o[En]=t,Nn(o,r,t),w(o),n.stateNode=o):n.memoizedState=iv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&Et&&(o=n.stateNode=ev(n.type,n.pendingProps,se.current),Dn=n,_i=!0,u=Qt,nr(n.type)?(Ad=u,Qt=yi(o.firstChild)):Qt=u),Ln(t,n,n.pendingProps.children,r),cc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((u=o=Qt)&&(o=FS(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,Dn=n,Qt=yi(o.firstChild),_i=!1,u=!0):u=!1),u||Va(n)),He(n),u=n.type,h=n.pendingProps,y=t!==null?t.memoizedProps:null,o=h.children,Sd(u,h)?o=null:y!==null&&Sd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=yf(t,n,Qy,null,null,r),Qo._currentValue=u),cc(t,n),Ln(t,n,o,r),n.child;case 6:return t===null&&Et&&((t=r=Qt)&&(r=zS(r,n.pendingProps,_i),r!==null?(n.stateNode=r,Dn=n,Qt=null,t=!0):t=!1),t||Va(n)),null;case 13:return kg(t,n,r);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ur(n,null,o,r):Ln(t,n,o,r),n.child;case 11:return Og(t,n,n.type,n.pendingProps,r);case 7:return Ln(t,n,n.pendingProps,r),n.child;case 8:return Ln(t,n,n.pendingProps.children,r),n.child;case 12:return Ln(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,ka(n,n.type,o.value),Ln(t,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Rr(n),u=Un(u),o=o(u),n.flags|=1,Ln(t,n,o,r),n.child;case 14:return Pg(t,n,n.type,n.pendingProps,r);case 15:return Fg(t,n,n.type,n.pendingProps,r);case 19:return Wg(t,n,r);case 31:return rS(t,n,r);case 22:return zg(t,n,r,n.pendingProps);case 24:return Rr(n),o=Un(dn),t===null?(u=uf(),u===null&&(u=Zt,h=lf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=r),u=h),n.memoizedState={parent:o,cache:u},df(n),ka(n,dn,u)):((t.lanes&r)!==0&&(hf(t,n),Uo(n,null,null,r),Do()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ka(n,dn,o)):(o=h.cache,ka(n,dn,o),o!==u.cache&&of(n,[dn],r,!0))),Ln(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function fa(t){t.flags|=4}function Yf(t,n,r,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(x0())t.flags|=8192;else throw Dr=Yl,ff}else t.flags&=-16777217}function jg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!lv(n))if(x0())t.flags|=8192;else throw Dr=Yl,ff}function fc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?It():536870912,t.lanes|=n,Ts|=n)}function zo(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function oS(t,n,r){var o=n.pendingProps;switch(tf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),oa(dn),ke(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ds(n)?fa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,af())),Jt(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(fa(n),h!==null?(Jt(n),jg(n,h)):(Jt(n),Yf(n,u,null,o,r))):h?h!==t.memoizedState?(fa(n),Jt(n),jg(n,h)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&fa(n),Jt(n),Yf(n,u,t,o,r)),null;case 27:if(dt(n),r=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Jt(n),null}t=Ee.current,ds(n)?Am(n):(t=ev(u,o,r),n.stateNode=t,fa(n))}return Jt(n),null;case 5:if(dt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Jt(n),null}if(h=Ee.current,ds(n))Am(n);else{var y=Ac(se.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[fn]=n,h[En]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;e:switch(Nn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&fa(n)}}return Jt(n),Yf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&fa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=se.current,ds(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||k0(t.nodeValue,r)),t||Va(n,!0)}else t=Ac(t).createTextNode(o),t[fn]=n,n.stateNode=t}return Jt(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=ds(n),r!==null){if(t===null){if(!o)throw Error(a(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[fn]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else r=af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ds(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[fn]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),fc(n,n.updateQueue),Jt(n),null);case 4:return ke(),t===null&&gd(n.stateNode.containerInfo),Jt(n),null;case 10:return oa(n.type),Jt(n),null;case 19:if(ne(on),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)zo(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Jl(t),h!==null){for(n.flags|=128,zo(o,!1),t=h.updateQueue,n.updateQueue=t,fc(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Sm(r,t),r=r.sibling;return fe(on,on.current&1|2),Et&&ra(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>gc&&(n.flags|=128,u=!0,zo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Jl(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,fc(n,t),zo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Et)return Jt(n),null}else 2*E()-o.renderingStartTime>gc&&r!==536870912&&(n.flags|=128,u=!0,zo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,r=on.current,fe(on,u?r&1|2:r&1),Et&&ra(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return ii(n),vf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),r=n.updateQueue,r!==null&&fc(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&ne(Cr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),oa(dn),Jt(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function lS(t,n){switch(tf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return oa(dn),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(a(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(on),null;case 4:return ke(),null;case 10:return oa(n.type),null;case 22:case 23:return ii(n),vf(),t!==null&&ne(Cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return oa(dn),null;case 25:return null;default:return null}}function Yg(t,n){switch(tf(n),n.tag){case 3:oa(dn),ke();break;case 26:case 27:case 5:dt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:ne(on);break;case 10:oa(n.type);break;case 22:case 23:ii(n),vf(),t!==null&&ne(Cr);break;case 24:oa(dn)}}function Bo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var h=r.create,y=r.inst;o=h(),y.destroy=o}r=r.next}while(r!==u)}}catch(C){Vt(n,n.return,C)}}function Za(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,u=n;var V=r,ae=C;try{ae()}catch(me){Vt(u,V,me)}}}o=o.next}while(o!==h)}}catch(me){Vt(n,n.return,me)}}function Zg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{Im(n,r)}catch(o){Vt(t,t.return,o)}}}function Kg(t,n,r){r.props=Nr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Vt(t,n,o)}}function Io(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){Vt(t,n,u)}}function ki(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Vt(t,n,u)}else r.current=null}function Qg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Vt(t,t.return,u)}}function Zf(t,n,r){try{var o=t.stateNode;DS(o,t.type,r,n),o[En]=n}catch(u){Vt(t,t.return,u)}}function Jg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&nr(t.type)||t.tag===4}function Kf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&nr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=na));else if(o!==4&&(o===27&&nr(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Qf(t,n,r),t=t.sibling;t!==null;)Qf(t,n,r),t=t.sibling}function dc(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&nr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(dc(t,n,r),t=t.sibling;t!==null;)dc(t,n,r),t=t.sibling}function $g(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,r),n[fn]=t,n[En]=r}catch(h){Vt(t,t.return,h)}}var da=!1,mn=!1,Jf=!1,e0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function cS(t,n){if(t=t.containerInfo,xd=Nc,t=dm(t),Xu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var y=0,C=-1,V=-1,ae=0,me=0,_e=t,le=null;t:for(;;){for(var he;_e!==r||u!==0&&_e.nodeType!==3||(C=y+u),_e!==h||o!==0&&_e.nodeType!==3||(V=y+o),_e.nodeType===3&&(y+=_e.nodeValue.length),(he=_e.firstChild)!==null;)le=_e,_e=he;for(;;){if(_e===t)break t;if(le===r&&++ae===u&&(C=y),le===h&&++me===o&&(V=y),(he=_e.nextSibling)!==null)break;_e=le,le=_e.parentNode}_e=he}r=C===-1||V===-1?null:{start:C,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(yd={focusedElem:t,selectionRange:r},Nc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)u=t[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=n,u=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var We=Nr(r.type,u);t=o.getSnapshotBeforeUpdate(We,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(at){Vt(r,r.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)bd(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function t0(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:pa(t,r),o&4&&Bo(5,r);break;case 1:if(pa(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(y){Vt(r,r.return,y)}else{var u=Nr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Vt(r,r.return,y)}}o&64&&Zg(r),o&512&&Io(r,r.return);break;case 3:if(pa(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Im(t,n)}catch(y){Vt(r,r.return,y)}}break;case 27:n===null&&o&4&&$g(r);case 26:case 5:pa(t,r),n===null&&o&4&&Qg(r),o&512&&Io(r,r.return);break;case 12:pa(t,r);break;case 31:pa(t,r),o&4&&a0(t,r);break;case 13:pa(t,r),o&4&&r0(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=_S.bind(null,r),BS(t,r))));break;case 22:if(o=r.memoizedState!==null||da,!o){n=n!==null&&n.memoizedState!==null||mn,u=da;var h=mn;da=o,(mn=n)&&!h?ma(t,r,(r.subtreeFlags&8772)!==0):pa(t,r),da=u,mn=h}break;case 30:break;default:pa(t,r)}}function n0(t){var n=t.alternate;n!==null&&(t.alternate=null,n0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ho(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,qn=!1;function ha(t,n,r){for(r=r.child;r!==null;)i0(t,n,r),r=r.sibling}function i0(t,n,r){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ae,r)}catch{}switch(r.tag){case 26:mn||ki(r,n),ha(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:mn||ki(r,n);var o=tn,u=qn;nr(r.type)&&(tn=r.stateNode,qn=!1),ha(t,n,r),Yo(r.stateNode),tn=o,qn=u;break;case 5:mn||ki(r,n);case 6:if(o=tn,u=qn,tn=null,ha(t,n,r),tn=o,qn=u,tn!==null)if(qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(r.stateNode)}catch(h){Vt(r,n,h)}else try{tn.removeChild(r.stateNode)}catch(h){Vt(r,n,h)}break;case 18:tn!==null&&(qn?(t=tn,Z0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Ns(t)):Z0(tn,r.stateNode));break;case 4:o=tn,u=qn,tn=r.stateNode.containerInfo,qn=!0,ha(t,n,r),tn=o,qn=u;break;case 0:case 11:case 14:case 15:Za(2,r,n),mn||Za(4,r,n),ha(t,n,r);break;case 1:mn||(ki(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Kg(r,n,o)),ha(t,n,r);break;case 21:ha(t,n,r);break;case 22:mn=(o=mn)||r.memoizedState!==null,ha(t,n,r),mn=o;break;default:ha(t,n,r)}}function a0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ns(t)}catch(r){Vt(n,n.return,r)}}}function r0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ns(t)}catch(r){Vt(n,n.return,r)}}function uS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new e0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new e0),n;default:throw Error(a(435,t.tag))}}function hc(t,n){var r=uS(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=xS.bind(null,t,o);o.then(u,u)}})}function jn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],h=t,y=n,C=y;e:for(;C!==null;){switch(C.tag){case 27:if(nr(C.type)){tn=C.stateNode,qn=!1;break e}break;case 5:tn=C.stateNode,qn=!1;break e;case 3:case 4:tn=C.stateNode.containerInfo,qn=!0;break e}C=C.return}if(tn===null)throw Error(a(160));i0(h,y,u),tn=null,qn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)s0(n,t),n=n.sibling}var Li=null;function s0(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(n,t),Yn(t),o&4&&(Za(3,t,t.return),Bo(3,t),Za(5,t,t.return));break;case 1:jn(n,t),Yn(t),o&512&&(mn||r===null||ki(r,r.return)),o&64&&da&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Li;if(jn(n,t),Yn(t),o&512&&(mn||r===null||ki(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[_r]||h[fn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Nn(h,o,r),h[fn]=t,w(h),o=h;break e;case"link":var y=sv("link","href",u).get(o+(r.href||""));if(y){for(var C=0;C<y.length;C++)if(h=y[C],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(C,1);break t}}h=u.createElement(o),Nn(h,o,r),u.head.appendChild(h);break;case"meta":if(y=sv("meta","content",u).get(o+(r.content||""))){for(C=0;C<y.length;C++)if(h=y[C],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(C,1);break t}}h=u.createElement(o),Nn(h,o,r),u.head.appendChild(h);break;default:throw Error(a(468,o))}h[fn]=t,w(h),o=h}t.stateNode=o}else ov(u,t.type,t.stateNode);else t.stateNode=rv(u,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?ov(u,t.type,t.stateNode):rv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Zf(t,t.memoizedProps,r.memoizedProps)}break;case 27:jn(n,t),Yn(t),o&512&&(mn||r===null||ki(r,r.return)),r!==null&&o&4&&Zf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(jn(n,t),Yn(t),o&512&&(mn||r===null||ki(r,r.return)),t.flags&32){u=t.stateNode;try{vn(u,"")}catch(We){Vt(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Zf(t,u,r!==null?r.memoizedProps:u)),o&1024&&(Jf=!0);break;case 6:if(jn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(We){Vt(t,t.return,We)}}break;case 3:if(wc=null,u=Li,Li=Rc(n.containerInfo),jn(n,t),Li=u,Yn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Ns(n.containerInfo)}catch(We){Vt(t,t.return,We)}Jf&&(Jf=!1,o0(t));break;case 4:o=Li,Li=Rc(t.stateNode.containerInfo),jn(n,t),Yn(t),Li=o;break;case 12:jn(n,t),Yn(t);break;case 31:jn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 13:jn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(mc=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 22:u=t.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,ae=da,me=mn;if(da=ae||u,mn=me||V,jn(n,t),mn=me,da=ae,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||V||da||mn||Or(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){V=r=n;try{if(h=V.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=V.stateNode;var _e=V.memoizedProps.style,le=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(We){Vt(V,V.return,We)}}}else if(n.tag===6){if(r===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(We){Vt(V,V.return,We)}}}else if(n.tag===18){if(r===null){V=n;try{var he=V.stateNode;u?K0(he,!0):K0(V.stateNode,!1)}catch(We){Vt(V,V.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,hc(t,r))));break;case 19:jn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 30:break;case 21:break;default:jn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Jg(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,h=Kf(t);dc(t,h,u);break;case 5:var y=r.stateNode;r.flags&32&&(vn(y,""),r.flags&=-33);var C=Kf(t);dc(t,C,y);break;case 3:case 4:var V=r.stateNode.containerInfo,ae=Kf(t);Qf(t,ae,V);break;default:throw Error(a(161))}}catch(me){Vt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function o0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;o0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function pa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)t0(t,n.alternate,n),n=n.sibling}function Or(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Za(4,n,n.return),Or(n);break;case 1:ki(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Kg(n,n.return,r),Or(n);break;case 27:Yo(n.stateNode);case 26:case 5:ki(n,n.return),Or(n);break;case 22:n.memoizedState===null&&Or(n);break;case 30:Or(n);break;default:Or(n)}t=t.sibling}}function ma(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:ma(u,h,r),Bo(4,h);break;case 1:if(ma(u,h,r),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){Vt(o,o.return,ae)}if(o=h,u=o.updateQueue,u!==null){var C=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Bm(V[u],C)}catch(ae){Vt(o,o.return,ae)}}r&&y&64&&Zg(h),Io(h,h.return);break;case 27:$g(h);case 26:case 5:ma(u,h,r),r&&o===null&&y&4&&Qg(h),Io(h,h.return);break;case 12:ma(u,h,r);break;case 31:ma(u,h,r),r&&y&4&&a0(u,h);break;case 13:ma(u,h,r),r&&y&4&&r0(u,h);break;case 22:h.memoizedState===null&&ma(u,h,r),Io(h,h.return);break;case 30:break;default:ma(u,h,r)}n=n.sibling}}function $f(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&To(r))}function ed(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&To(t))}function Ni(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)l0(t,n,r,o),n=n.sibling}function l0(t,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,r,o),u&2048&&Bo(9,n);break;case 1:Ni(t,n,r,o);break;case 3:Ni(t,n,r,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&To(t)));break;case 12:if(u&2048){Ni(t,n,r,o),t=n.stateNode;try{var h=n.memoizedProps,y=h.id,C=h.onPostCommit;typeof C=="function"&&C(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Vt(n,n.return,V)}}else Ni(t,n,r,o);break;case 31:Ni(t,n,r,o);break;case 13:Ni(t,n,r,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?Ni(t,n,r,o):Ho(t,n):h._visibility&2?Ni(t,n,r,o):(h._visibility|=2,Ms(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&$f(y,n);break;case 24:Ni(t,n,r,o),u&2048&&ed(n.alternate,n);break;default:Ni(t,n,r,o)}}function Ms(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,y=n,C=r,V=o,ae=y.flags;switch(y.tag){case 0:case 11:case 15:Ms(h,y,C,V,u),Bo(8,y);break;case 23:break;case 22:var me=y.stateNode;y.memoizedState!==null?me._visibility&2?Ms(h,y,C,V,u):Ho(h,y):(me._visibility|=2,Ms(h,y,C,V,u)),u&&ae&2048&&$f(y.alternate,y);break;case 24:Ms(h,y,C,V,u),u&&ae&2048&&ed(y.alternate,y);break;default:Ms(h,y,C,V,u)}n=n.sibling}}function Ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:Ho(r,o),u&2048&&$f(o.alternate,o);break;case 24:Ho(r,o),u&2048&&ed(o.alternate,o);break;default:Ho(r,o)}n=n.sibling}}var Go=8192;function bs(t,n,r){if(t.subtreeFlags&Go)for(t=t.child;t!==null;)c0(t,n,r),t=t.sibling}function c0(t,n,r){switch(t.tag){case 26:bs(t,n,r),t.flags&Go&&t.memoizedState!==null&&KS(r,Li,t.memoizedState,t.memoizedProps);break;case 5:bs(t,n,r);break;case 3:case 4:var o=Li;Li=Rc(t.stateNode.containerInfo),bs(t,n,r),Li=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Go,Go=16777216,bs(t,n,r),Go=o):bs(t,n,r));break;default:bs(t,n,r)}}function u0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Mn=o,d0(o,t)}u0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)f0(t),t=t.sibling}function f0(t){switch(t.tag){case 0:case 11:case 15:Vo(t),t.flags&2048&&Za(9,t,t.return);break;case 3:Vo(t);break;case 12:Vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,pc(t)):Vo(t);break;default:Vo(t)}}function pc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Mn=o,d0(o,t)}u0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Za(8,n,n.return),pc(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,pc(n));break;default:pc(n)}t=t.sibling}}function d0(t,n){for(;Mn!==null;){var r=Mn;switch(r.tag){case 0:case 11:case 15:Za(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:To(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Mn=o;else e:for(r=t;Mn!==null;){o=Mn;var u=o.sibling,h=o.return;if(n0(o),o===r){Mn=null;break e}if(u!==null){u.return=h,Mn=u;break e}Mn=h}}}var fS={getCacheForType:function(t){var n=Un(dn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return Un(dn).controller.signal}},dS=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Zt=null,xt=null,Mt=0,Gt=0,ai=null,Ka=!1,Es=!1,td=!1,ga=0,sn=0,Qa=0,Pr=0,nd=0,ri=0,Ts=0,ko=null,Zn=null,id=!1,mc=0,h0=0,gc=1/0,vc=null,Ja=null,_n=0,$a=null,As=null,va=0,ad=0,rd=null,p0=null,Xo=0,sd=null;function si(){return(Ft&2)!==0&&Mt!==0?Mt&-Mt:F.T!==null?dd():uo()}function m0(){if(ri===0)if((Mt&536870912)===0||Et){var t=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),ri=t}else ri=536870912;return t=ni.current,t!==null&&(t.flags|=32),ri}function Kn(t,n,r){(t===Zt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(Rs(t,0),er(t,Mt,ri,!1)),Pn(t,r),((Ft&2)===0||t!==Zt)&&(t===Zt&&((Ft&2)===0&&(Pr|=r),sn===4&&er(t,Mt,ri,!1)),Xi(t))}function g0(t,n,r){if((Ft&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?mS(t,n):ld(t,n,!0),h=o;do{if(u===0){Es&&!o&&er(t,n,0,!1);break}else{if(r=t.current.alternate,h&&!hS(r)){u=ld(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var C=t;u=ko;var V=C.current.memoizedState.isDehydrated;if(V&&(Rs(C,y).flags|=256),y=ld(C,y,!1),y!==2){if(td&&!V){C.errorRecoveryDisabledLanes|=h,Pr|=h,u=4;break e}h=Zn,Zn=u,h!==null&&(Zn===null?Zn=h:Zn.push.apply(Zn,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){Rs(t,0),er(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:er(o,n,ri,!Ka);break e;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=mc+300-E(),10<u)){if(er(o,n,ri,!Ka),ye(o,0,!0)!==0)break e;va=n,o.timeoutHandle=j0(v0.bind(null,o,r,Zn,vc,id,n,ri,Pr,Ts,Ka,h,"Throttled",-0,0),u);break e}v0(o,r,Zn,vc,id,n,ri,Pr,Ts,Ka,h,null,-0,0)}}break}while(!0);Xi(t)}function v0(t,n,r,o,u,h,y,C,V,ae,me,_e,le,he){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},c0(n,h,_e);var We=(h&62914560)===h?mc-E():(h&4194048)===h?h0-E():0;if(We=QS(_e,We),We!==null){va=h,t.cancelPendingCommit=We(T0.bind(null,t,n,h,r,o,u,y,C,V,me,_e,null,le,he)),er(t,h,y,!ae);return}}T0(t,n,h,r,o,u,y,C,V)}function hS(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],h=u.getSnapshot;u=u.value;try{if(!ei(h(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function er(t,n,r,o){n&=~nd,n&=~Pr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Be(u),y=1<<h;o[h]=-1,u&=~y}r!==0&&wl(t,r,n)}function _c(){return(Ft&6)===0?(Wo(0),!1):!0}function od(){if(xt!==null){if(Gt===0)var t=xt.return;else t=xt,sa=Ar=null,bf(t),vs=null,Ro=0,t=xt;for(;t!==null;)Yg(t.alternate,t),t=t.return;xt=null}}function Rs(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,NS(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),va=0,od(),Zt=t,xt=r=aa(t.current,null),Mt=n,Gt=0,ai=null,Ka=!1,Es=we(t,n),td=!1,Ts=ri=nd=Pr=Qa=sn=0,Zn=ko=null,id=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),h=1<<u;n|=t[u],o&=~h}return ga=n,Il(),r}function _0(t,n){ft=null,F.H=Po,n===gs||n===jl?(n=Om(),Gt=3):n===ff?(n=Om(),Gt=4):Gt=n===If?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,xt===null&&(sn=1,oc(t,mi(n,t.current)))}function x0(){var t=ni.current;return t===null?!0:(Mt&4194048)===Mt?xi===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===xi:!1}function y0(){var t=F.H;return F.H=Po,t===null?Po:t}function S0(){var t=F.A;return F.A=fS,t}function xc(){sn=4,Ka||(Mt&4194048)!==Mt&&ni.current!==null||(Es=!0),(Qa&134217727)===0&&(Pr&134217727)===0||Zt===null||er(Zt,Mt,ri,!1)}function ld(t,n,r){var o=Ft;Ft|=2;var u=y0(),h=S0();(Zt!==t||Mt!==n)&&(vc=null,Rs(t,n)),n=!1;var y=sn;e:do try{if(Gt!==0&&xt!==null){var C=xt,V=ai;switch(Gt){case 8:od(),y=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var ae=Gt;if(Gt=0,ai=null,Cs(t,C,V,ae),r&&Es){y=0;break e}break;default:ae=Gt,Gt=0,ai=null,Cs(t,C,V,ae)}}pS(),y=sn;break}catch(me){_0(t,me)}while(!0);return n&&t.shellSuspendCounter++,sa=Ar=null,Ft=o,F.H=u,F.A=h,xt===null&&(Zt=null,Mt=0,Il()),y}function pS(){for(;xt!==null;)M0(xt)}function mS(t,n){var r=Ft;Ft|=2;var o=y0(),u=S0();Zt!==t||Mt!==n?(vc=null,gc=E()+500,Rs(t,n)):Es=we(t,n);e:do try{if(Gt!==0&&xt!==null){n=xt;var h=ai;t:switch(Gt){case 1:Gt=0,ai=null,Cs(t,n,h,1);break;case 2:case 9:if(Lm(h)){Gt=0,ai=null,b0(n);break}n=function(){Gt!==2&&Gt!==9||Zt!==t||(Gt=7),Xi(t)},h.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Lm(h)?(Gt=0,ai=null,b0(n)):(Gt=0,ai=null,Cs(t,n,h,7));break;case 5:var y=null;switch(xt.tag){case 26:y=xt.memoizedState;case 5:case 27:var C=xt;if(y?lv(y):C.stateNode.complete){Gt=0,ai=null;var V=C.sibling;if(V!==null)xt=V;else{var ae=C.return;ae!==null?(xt=ae,yc(ae)):xt=null}break t}}Gt=0,ai=null,Cs(t,n,h,5);break;case 6:Gt=0,ai=null,Cs(t,n,h,6);break;case 8:od(),sn=6;break e;default:throw Error(a(462))}}gS();break}catch(me){_0(t,me)}while(!0);return sa=Ar=null,F.H=o,F.A=u,Ft=r,xt!==null?0:(Zt=null,Mt=0,Il(),sn)}function gS(){for(;xt!==null&&!Qe();)M0(xt)}function M0(t){var n=qg(t.alternate,t,ga);t.memoizedProps=t.pendingProps,n===null?yc(t):xt=n}function b0(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Hg(r,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=Hg(r,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:bf(n);default:Yg(r,n),n=xt=Sm(n,ga),n=qg(r,n,ga)}t.memoizedProps=t.pendingProps,n===null?yc(t):xt=n}function Cs(t,n,r,o){sa=Ar=null,bf(n),vs=null,Ro=0;var u=n.return;try{if(aS(t,u,n,r,Mt)){sn=1,oc(t,mi(r,t.current)),xt=null;return}}catch(h){if(u!==null)throw xt=u,h;sn=1,oc(t,mi(r,t.current)),xt=null;return}n.flags&32768?(Et||o===1?t=!0:Es||(Mt&536870912)!==0?t=!1:(Ka=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),E0(n,t)):yc(n)}function yc(t){var n=t;do{if((n.flags&32768)!==0){E0(n,Ka);return}t=n.return;var r=oS(n.alternate,n,ga);if(r!==null){xt=r;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);sn===0&&(sn=5)}function E0(t,n){do{var r=lS(t.alternate,t);if(r!==null){r.flags&=32767,xt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=r}while(t!==null);sn=6,xt=null}function T0(t,n,r,o,u,h,y,C,V){t.cancelPendingCommit=null;do Sc();while(_n!==0);if((Ft&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(h=n.lanes|n.childLanes,h|=Zu,Ci(t,r,h,y,C,V),t===Zt&&(xt=Zt=null,Mt=0),As=n,$a=t,va=r,ad=h,rd=u,p0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,yS(pe,function(){return D0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=G.p,G.p=2,y=Ft,Ft|=4;try{cS(t,n,r)}finally{Ft=y,G.p=u,F.T=o}}_n=1,A0(),R0(),C0()}}function A0(){if(_n===1){_n=0;var t=$a,n=As,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var o=G.p;G.p=2;var u=Ft;Ft|=4;try{s0(n,t);var h=yd,y=dm(t.containerInfo),C=h.focusedElem,V=h.selectionRange;if(y!==C&&C&&C.ownerDocument&&fm(C.ownerDocument.documentElement,C)){if(V!==null&&Xu(C)){var ae=V.start,me=V.end;if(me===void 0&&(me=ae),"selectionStart"in C)C.selectionStart=ae,C.selectionEnd=Math.min(me,C.value.length);else{var _e=C.ownerDocument||document,le=_e&&_e.defaultView||window;if(le.getSelection){var he=le.getSelection(),We=C.textContent.length,at=Math.min(V.start,We),jt=V.end===void 0?at:Math.min(V.end,We);!he.extend&&at>jt&&(y=jt,jt=at,at=y);var J=um(C,at),q=um(C,jt);if(J&&q&&(he.rangeCount!==1||he.anchorNode!==J.node||he.anchorOffset!==J.offset||he.focusNode!==q.node||he.focusOffset!==q.offset)){var ie=_e.createRange();ie.setStart(J.node,J.offset),he.removeAllRanges(),at>jt?(he.addRange(ie),he.extend(q.node,q.offset)):(ie.setEnd(q.node,q.offset),he.addRange(ie))}}}}for(_e=[],he=C;he=he.parentNode;)he.nodeType===1&&_e.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<_e.length;C++){var ve=_e[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Nc=!!xd,yd=xd=null}finally{Ft=u,G.p=o,F.T=r}}t.current=n,_n=2}}function R0(){if(_n===2){_n=0;var t=$a,n=As,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var o=G.p;G.p=2;var u=Ft;Ft|=4;try{t0(t,n.alternate,n)}finally{Ft=u,G.p=o,F.T=r}}_n=3}}function C0(){if(_n===4||_n===3){_n=0,I();var t=$a,n=As,r=va,o=p0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,As=$a=null,w0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ja=null),$r(r),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=G.p,G.p=2,F.T=null;try{for(var h=t.onRecoverableError,y=0;y<o.length;y++){var C=o[y];h(C.value,{componentStack:C.stack})}}finally{F.T=n,G.p=u}}(va&3)!==0&&Sc(),Xi(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===sd?Xo++:(Xo=0,sd=t):Xo=0,Wo(0)}}function w0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,To(n)))}function Sc(){return A0(),R0(),C0(),D0()}function D0(){if(_n!==5)return!1;var t=$a,n=ad;ad=0;var r=$r(va),o=F.T,u=G.p;try{G.p=32>r?32:r,F.T=null,r=rd,rd=null;var h=$a,y=va;if(_n=0,As=$a=null,va=0,(Ft&6)!==0)throw Error(a(331));var C=Ft;if(Ft|=4,f0(h.current),l0(h,h.current,y,r),Ft=C,Wo(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ae,h)}catch{}return!0}finally{G.p=u,F.T=o,w0(t,n)}}function U0(t,n,r){n=mi(r,n),n=Bf(t.stateNode,n,2),t=qa(t,n,2),t!==null&&(Pn(t,2),Xi(t))}function Vt(t,n,r){if(t.tag===3)U0(t,t,r);else for(;n!==null;){if(n.tag===3){U0(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ja===null||!Ja.has(o))){t=mi(r,t),r=Lg(2),o=qa(n,r,2),o!==null&&(Ng(r,o,n,t),Pn(o,2),Xi(o));break}}n=n.return}}function cd(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new dS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(td=!0,u.add(r),t=vS.bind(null,t,n,r),n.then(t,t))}function vS(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Zt===t&&(Mt&r)===r&&(sn===4||sn===3&&(Mt&62914560)===Mt&&300>E()-mc?(Ft&2)===0&&Rs(t,0):nd|=r,Ts===Mt&&(Ts=0)),Xi(t)}function L0(t,n){n===0&&(n=It()),t=br(t,n),t!==null&&(Pn(t,n),Xi(t))}function _S(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),L0(t,r)}function xS(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),L0(t,r)}function yS(t,n){return At(t,n)}var Mc=null,ws=null,ud=!1,bc=!1,fd=!1,tr=0;function Xi(t){t!==ws&&t.next===null&&(ws===null?Mc=ws=t:ws=ws.next=t),bc=!0,ud||(ud=!0,MS())}function Wo(t,n){if(!fd&&bc){fd=!0;do for(var r=!1,o=Mc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,C=o.pingedLanes;h=(1<<31-Be(42|t)+1)-1,h&=u&~(y&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,F0(o,h))}else h=Mt,h=ye(o,o===Zt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||we(o,h)||(r=!0,F0(o,h));o=o.next}while(r);fd=!1}}function SS(){N0()}function N0(){bc=ud=!1;var t=0;tr!==0&&LS()&&(t=tr);for(var n=E(),r=null,o=Mc;o!==null;){var u=o.next,h=O0(o,n);h===0?(o.next=null,r===null?Mc=u:r.next=u,u===null&&(ws=r)):(r=o,(t!==0||(h&3)!==0)&&(bc=!0)),o=u}_n!==0&&_n!==5||Wo(t),tr!==0&&(tr=0)}function O0(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-Be(h),C=1<<y,V=u[y];V===-1?((C&r)===0||(C&o)!==0)&&(u[y]=st(C,n)):V<=n&&(t.expiredLanes|=C),h&=~C}if(n=Zt,r=Mt,r=ye(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&zt(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||we(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&zt(o),$r(r)){case 2:case 8:r=Me;break;case 32:r=pe;break;case 268435456:r=Ue;break;default:r=pe}return o=P0.bind(null,t),r=At(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&zt(o),t.callbackPriority=2,t.callbackNode=null,2}function P0(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Sc()&&t.callbackNode!==r)return null;var o=Mt;return o=ye(t,t===Zt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(g0(t,o,n),O0(t,E()),t.callbackNode!=null&&t.callbackNode===r?P0.bind(null,t):null)}function F0(t,n){if(Sc())return null;g0(t,n,!0)}function MS(){OS(function(){(Ft&6)!==0?At(ge,SS):N0()})}function dd(){if(tr===0){var t=ps;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),tr=t}return tr}function z0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ul(""+t)}function B0(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function bS(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var h=z0((u[En]||null).action),y=o.submitter;y&&(n=(n=y[En]||null)?z0(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var C=new Pl("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(tr!==0){var V=y?B0(u,y):new FormData(u);Lf(r,{pending:!0,data:V,method:u.method,action:h},null,V)}}else typeof h=="function"&&(C.preventDefault(),V=y?B0(u,y):new FormData(u),Lf(r,{pending:!0,data:V,method:u.method,action:h},h,V))},currentTarget:u}]})}}for(var hd=0;hd<Yu.length;hd++){var pd=Yu[hd],ES=pd.toLowerCase(),TS=pd[0].toUpperCase()+pd.slice(1);Ui(ES,"on"+TS)}Ui(mm,"onAnimationEnd"),Ui(gm,"onAnimationIteration"),Ui(vm,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(Gy,"onTransitionRun"),Ui(Vy,"onTransitionStart"),Ui(ky,"onTransitionCancel"),Ui(_m,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function I0(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var C=o[y],V=C.instance,ae=C.currentTarget;if(C=C.listener,V!==h&&u.isPropagationStopped())break e;h=C,u.currentTarget=ae;try{h(u)}catch(me){Bl(me)}u.currentTarget=null,h=V}else for(y=0;y<o.length;y++){if(C=o[y],V=C.instance,ae=C.currentTarget,C=C.listener,V!==h&&u.isPropagationStopped())break e;h=C,u.currentTarget=ae;try{h(u)}catch(me){Bl(me)}u.currentTarget=null,h=V}}}}function yt(t,n){var r=n[es];r===void 0&&(r=n[es]=new Set);var o=t+"__bubble";r.has(o)||(H0(n,t,2,!1),r.add(o))}function md(t,n,r){var o=0;n&&(o|=4),H0(r,t,o,n)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function gd(t){if(!t[Ec]){t[Ec]=!0,Q.forEach(function(r){r!=="selectionchange"&&(AS.has(r)||md(r,!1,t),md(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ec]||(n[Ec]=!0,md("selectionchange",!1,n))}}function H0(t,n,r,o){switch(mv(n)){case 2:var u=eM;break;case 8:u=tM;break;default:u=Ud}r=u.bind(null,n,r,t),u=void 0,!Pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function vd(t,n,r,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===u)break;if(y===4)for(y=o.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;C!==null;){if(y=Fa(C),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){o=h=y;continue e}C=C.parentNode}}o=o.return}Wp(function(){var ae=h,me=Nu(r),_e=[];e:{var le=xm.get(t);if(le!==void 0){var he=Pl,We=t;switch(t){case"keypress":if(Nl(r)===0)break e;case"keydown":case"keyup":he=xy;break;case"focusin":We="focus",he=Iu;break;case"focusout":We="blur",he=Iu;break;case"beforeblur":case"afterblur":he=Iu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=My;break;case mm:case gm:case vm:he=uy;break;case _m:he=Ey;break;case"scroll":case"scrollend":he=ry;break;case"wheel":he=Ay;break;case"copy":case"cut":case"paste":he=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Kp;break;case"toggle":case"beforetoggle":he=Cy}var at=(n&4)!==0,jt=!at&&(t==="scroll"||t==="scrollend"),J=at?le!==null?le+"Capture":null:le;at=[];for(var q=ae,ie;q!==null;){var ve=q;if(ie=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ie===null||J===null||(ve=po(q,J),ve!=null&&at.push(jo(q,ve,ie))),jt)break;q=q.return}0<at.length&&(le=new he(le,We,null,r,me),_e.push({event:le,listeners:at}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",le&&r!==Lu&&(We=r.relatedTarget||r.fromElement)&&(Fa(We)||We[wi]))break e;if((he||le)&&(le=me.window===me?me:(le=me.ownerDocument)?le.defaultView||le.parentWindow:window,he?(We=r.relatedTarget||r.toElement,he=ae,We=We?Fa(We):null,We!==null&&(jt=c(We),at=We.tag,We!==jt||at!==5&&at!==27&&at!==6)&&(We=null)):(he=null,We=ae),he!==We)){if(at=Yp,ve="onMouseLeave",J="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(at=Kp,ve="onPointerLeave",J="onPointerEnter",q="pointer"),jt=he==null?le:xr(he),ie=We==null?le:xr(We),le=new at(ve,q+"leave",he,r,me),le.target=jt,le.relatedTarget=ie,ve=null,Fa(me)===ae&&(at=new at(J,q+"enter",We,r,me),at.target=ie,at.relatedTarget=jt,ve=at),jt=ve,he&&We)t:{for(at=RS,J=he,q=We,ie=0,ve=J;ve;ve=at(ve))ie++;ve=0;for(var tt=q;tt;tt=at(tt))ve++;for(;0<ie-ve;)J=at(J),ie--;for(;0<ve-ie;)q=at(q),ve--;for(;ie--;){if(J===q||q!==null&&J===q.alternate){at=J;break t}J=at(J),q=at(q)}at=null}else at=null;he!==null&&G0(_e,le,he,at,!1),We!==null&&jt!==null&&G0(_e,jt,We,at,!0)}}e:{if(le=ae?xr(ae):window,he=le.nodeName&&le.nodeName.toLowerCase(),he==="select"||he==="input"&&le.type==="file")var Dt=am;else if(nm(le))if(rm)Dt=By;else{Dt=Fy;var Je=Py}else he=le.nodeName,!he||he.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ae&&Di(ae.elementType)&&(Dt=am):Dt=zy;if(Dt&&(Dt=Dt(t,ae))){im(_e,Dt,r,me);break e}Je&&Je(t,le,ae),t==="focusout"&&ae&&le.type==="number"&&ae.memoizedProps.value!=null&&An(le,"number",le.value)}switch(Je=ae?xr(ae):window,t){case"focusin":(nm(Je)||Je.contentEditable==="true")&&(ss=Je,Wu=ae,Mo=null);break;case"focusout":Mo=Wu=ss=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,hm(_e,r,me);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":hm(_e,r,me)}var pt;if(Gu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else rs?em(t,r)&&(bt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(bt="onCompositionStart");bt&&(Qp&&r.locale!=="ko"&&(rs||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&rs&&(pt=qp()):(Ia=me,Fu="value"in Ia?Ia.value:Ia.textContent,rs=!0)),Je=Tc(ae,bt),0<Je.length&&(bt=new Zp(bt,t,null,r,me),_e.push({event:bt,listeners:Je}),pt?bt.data=pt:(pt=tm(r),pt!==null&&(bt.data=pt)))),(pt=Dy?Uy(t,r):Ly(t,r))&&(bt=Tc(ae,"onBeforeInput"),0<bt.length&&(Je=new Zp("onBeforeInput","beforeinput",null,r,me),_e.push({event:Je,listeners:bt}),Je.data=pt)),bS(_e,t,ae,r,me)}I0(_e,n)})}function jo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Tc(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=po(t,r),u!=null&&o.unshift(jo(t,u,h)),u=po(t,n),u!=null&&o.push(jo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function RS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function G0(t,n,r,o,u){for(var h=n._reactName,y=[];r!==null&&r!==o;){var C=r,V=C.alternate,ae=C.stateNode;if(C=C.tag,V!==null&&V===o)break;C!==5&&C!==26&&C!==27||ae===null||(V=ae,u?(ae=po(r,h),ae!=null&&y.unshift(jo(r,ae,V))):u||(ae=po(r,h),ae!=null&&y.push(jo(r,ae,V)))),r=r.return}y.length!==0&&t.push({event:n,listeners:y})}var CS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function V0(t){return(typeof t=="string"?t:""+t).replace(CS,`
`).replace(wS,"")}function k0(t,n){return n=V0(n),V0(t)===n}function qt(t,n,r,o,u,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||vn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&vn(t,""+o);break;case"className":nt(t,"class",o);break;case"tabIndex":nt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(t,r,o);break;case"style":ns(t,o,h);break;case"data":if(n!=="object"){nt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Ul(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Ul(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=na);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=Ul(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Ze(t,"popover",o);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=iy.get(r)||r,Ze(t,r,o))}}function _d(t,n,r,o,u,h){switch(r){case"style":ns(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof o=="string"?vn(t,o):(typeof o=="number"||typeof o=="bigint")&&vn(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!de.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),h=t[En]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Ze(t,r,o)}}}function Nn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,h;for(h in r)if(r.hasOwnProperty(h)){var y=r[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:qt(t,n,h,y,r,null)}}u&&qt(t,n,"srcSet",r.srcSet,r,null),o&&qt(t,n,"src",r.src,r,null);return;case"input":yt("invalid",t);var C=h=y=u=null,V=null,ae=null;for(o in r)if(r.hasOwnProperty(o)){var me=r[o];if(me!=null)switch(o){case"name":u=me;break;case"type":y=me;break;case"checked":V=me;break;case"defaultChecked":ae=me;break;case"value":h=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,n));break;default:qt(t,n,o,me,r,null)}}ta(t,h,C,V,ae,y,u,!1);return;case"select":yt("invalid",t),o=y=h=null;for(u in r)if(r.hasOwnProperty(u)&&(C=r[u],C!=null))switch(u){case"value":h=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:qt(t,n,u,C,r,null)}n=h,r=y,t.multiple=!!o,n!=null?hi(t,!!o,n,!1):r!=null&&hi(t,!!o,r,!0);return;case"textarea":yt("invalid",t),h=u=o=null;for(y in r)if(r.hasOwnProperty(y)&&(C=r[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":u=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:qt(t,n,y,C,r,null)}Rn(t,o,u,h);return;case"option":for(V in r)r.hasOwnProperty(V)&&(o=r[V],o!=null)&&(V==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":qt(t,n,V,o,r,null));return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<qo.length;o++)yt(qo[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in r)if(r.hasOwnProperty(ae)&&(o=r[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:qt(t,n,ae,o,r,null)}return;default:if(Di(n)){for(me in r)r.hasOwnProperty(me)&&(o=r[me],o!==void 0&&_d(t,n,me,o,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(o=r[C],o!=null&&qt(t,n,C,o,r,null))}function DS(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,C=null,V=null,ae=null,me=null;for(he in r){var _e=r[he];if(r.hasOwnProperty(he)&&_e!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":V=_e;default:o.hasOwnProperty(he)||qt(t,n,he,null,o,_e)}}for(var le in o){var he=o[le];if(_e=r[le],o.hasOwnProperty(le)&&(he!=null||_e!=null))switch(le){case"type":h=he;break;case"name":u=he;break;case"checked":ae=he;break;case"defaultChecked":me=he;break;case"value":y=he;break;case"defaultValue":C=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(a(137,n));break;default:he!==_e&&qt(t,n,le,he,o,_e)}}Tn(t,y,C,V,ae,me,h,u);return;case"select":he=y=C=le=null;for(h in r)if(V=r[h],r.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":he=V;default:o.hasOwnProperty(h)||qt(t,n,h,null,o,V)}for(u in o)if(h=o[u],V=r[u],o.hasOwnProperty(u)&&(h!=null||V!=null))switch(u){case"value":le=h;break;case"defaultValue":C=h;break;case"multiple":y=h;default:h!==V&&qt(t,n,u,h,o,V)}n=C,r=y,o=he,le!=null?hi(t,!!r,le,!1):!!o!=!!r&&(n!=null?hi(t,!!r,n,!0):hi(t,!!r,r?[]:"",!1));return;case"textarea":he=le=null;for(C in r)if(u=r[C],r.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:qt(t,n,C,null,o,u)}for(y in o)if(u=o[y],h=r[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":le=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&qt(t,n,y,u,o,h)}Ht(t,le,he);return;case"option":for(var We in r)le=r[We],r.hasOwnProperty(We)&&le!=null&&!o.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:qt(t,n,We,null,o,le));for(V in o)le=o[V],he=r[V],o.hasOwnProperty(V)&&le!==he&&(le!=null||he!=null)&&(V==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":qt(t,n,V,le,o,he));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in r)le=r[at],r.hasOwnProperty(at)&&le!=null&&!o.hasOwnProperty(at)&&qt(t,n,at,null,o,le);for(ae in o)if(le=o[ae],he=r[ae],o.hasOwnProperty(ae)&&le!==he&&(le!=null||he!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,n));break;default:qt(t,n,ae,le,o,he)}return;default:if(Di(n)){for(var jt in r)le=r[jt],r.hasOwnProperty(jt)&&le!==void 0&&!o.hasOwnProperty(jt)&&_d(t,n,jt,void 0,o,le);for(me in o)le=o[me],he=r[me],!o.hasOwnProperty(me)||le===he||le===void 0&&he===void 0||_d(t,n,me,le,o,he);return}}for(var J in r)le=r[J],r.hasOwnProperty(J)&&le!=null&&!o.hasOwnProperty(J)&&qt(t,n,J,null,o,le);for(_e in o)le=o[_e],he=r[_e],!o.hasOwnProperty(_e)||le===he||le==null&&he==null||qt(t,n,_e,le,o,he)}function X0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function US(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],h=u.transferSize,y=u.initiatorType,C=u.duration;if(h&&C&&X0(y)){for(y=0,C=u.responseEnd,o+=1;o<r.length;o++){var V=r[o],ae=V.startTime;if(ae>C)break;var me=V.transferSize,_e=V.initiatorType;me&&X0(_e)&&(V=V.responseEnd,y+=me*(V<C?1:(C-ae)/(V-ae)))}if(--o,n+=8*(h+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var xd=null,yd=null;function Ac(t){return t.nodeType===9?t:t.ownerDocument}function W0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Sd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Md=null;function LS(){var t=window.event;return t&&t.type==="popstate"?t===Md?!1:(Md=t,!0):(Md=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,Y0=typeof Promise=="function"?Promise:void 0,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof Y0<"u"?function(t){return Y0.resolve(null).then(t).catch(PS)}:j0;function PS(t){setTimeout(function(){throw t})}function nr(t){return t==="head"}function Z0(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),Ns(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Yo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Yo(r);for(var h=r.firstChild;h;){var y=h.nextSibling,C=h.nodeName;h[_r]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=y}}else r==="body"&&Yo(t.ownerDocument.body);r=u}while(r);Ns(n)}function K0(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function bd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":bd(r),ho(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function FS(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[_r])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function zS(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=yi(t.nextSibling),t===null))return null;return t}function Q0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function Ed(t){return t.data==="$?"||t.data==="$~"}function Td(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function BS(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ad=null;function J0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return yi(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function $0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function ev(t,n,r){switch(n=Ac(r),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ho(t)}var Si=new Map,tv=new Set;function Rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _a=G.d;G.d={f:IS,r:HS,D:GS,C:VS,L:kS,m:XS,X:qS,S:WS,M:jS};function IS(){var t=_a.f(),n=_c();return t||n}function HS(t){var n=za(t);n!==null&&n.tag===5&&n.type==="form"?_g(n):_a.r(t)}var Ds=typeof document>"u"?null:document;function nv(t,n,r){var o=Ds;if(o&&typeof n=="string"&&n){var u=ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),tv.has(u)||(tv.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",t),w(n),o.head.appendChild(n)))}}function GS(t){_a.D(t),nv("dns-prefetch",t,null)}function VS(t,n){_a.C(t,n),nv("preconnect",t,n)}function kS(t,n,r){_a.L(t,n,r);var o=Ds;if(o&&t&&n){var u='link[rel="preload"][as="'+ot(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+ot(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+ot(r.imageSizes)+'"]')):u+='[href="'+ot(t)+'"]';var h=u;switch(n){case"style":h=Us(t);break;case"script":h=Ls(t)}Si.has(h)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Si.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Zo(h))||n==="script"&&o.querySelector(Ko(h))||(n=o.createElement("link"),Nn(n,"link",t),w(n),o.head.appendChild(n)))}}function XS(t,n){_a.m(t,n);var r=Ds;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ot(o)+'"][href="'+ot(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ls(t)}if(!Si.has(h)&&(t=g({rel:"modulepreload",href:t},n),Si.set(h,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Ko(h)))return}o=r.createElement("link"),Nn(o,"link",t),w(o),r.head.appendChild(o)}}}function WS(t,n,r){_a.S(t,n,r);var o=Ds;if(o&&t){var u=Ba(o).hoistableStyles,h=Us(t);n=n||"default";var y=u.get(h);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(Zo(h)))C.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Si.get(h))&&Rd(t,r);var V=y=o.createElement("link");w(V),Nn(V,"link",t),V._p=new Promise(function(ae,me){V.onload=ae,V.onerror=me}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Cc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:C},u.set(h,y)}}}function qS(t,n){_a.X(t,n);var r=Ds;if(r&&t){var o=Ba(r).hoistableScripts,u=Ls(t),h=o.get(u);h||(h=r.querySelector(Ko(u)),h||(t=g({src:t,async:!0},n),(n=Si.get(u))&&Cd(t,n),h=r.createElement("script"),w(h),Nn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function jS(t,n){_a.M(t,n);var r=Ds;if(r&&t){var o=Ba(r).hoistableScripts,u=Ls(t),h=o.get(u);h||(h=r.querySelector(Ko(u)),h||(t=g({src:t,async:!0,type:"module"},n),(n=Si.get(u))&&Cd(t,n),h=r.createElement("script"),w(h),Nn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function iv(t,n,r,o){var u=(u=se.current)?Rc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Us(r.href),r=Ba(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Us(r.href);var h=Ba(u).hoistableStyles,y=h.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=u.querySelector(Zo(t)))&&!h._p&&(y.instance=h,y.state.loading=5),Si.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Si.set(t,r),h||YS(u,t,r,y.state))),n&&o===null)throw Error(a(528,""));return y}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ls(r),r=Ba(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Us(t){return'href="'+ot(t)+'"'}function Zo(t){return'link[rel="stylesheet"]['+t+"]"}function av(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function YS(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",r),w(n),t.head.appendChild(n))}function Ls(t){return'[src="'+ot(t)+'"]'}function Ko(t){return"script[async]"+t}function rv(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ot(r.href)+'"]');if(o)return n.instance=o,w(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),w(o),Nn(o,"style",u),Cc(o,r.precedence,t),n.instance=o;case"stylesheet":u=Us(r.href);var h=t.querySelector(Zo(u));if(h)return n.state.loading|=4,n.instance=h,w(h),h;o=av(r),(u=Si.get(u))&&Rd(o,u),h=(t.ownerDocument||t).createElement("link"),w(h);var y=h;return y._p=new Promise(function(C,V){y.onload=C,y.onerror=V}),Nn(h,"link",o),n.state.loading|=4,Cc(h,r.precedence,t),n.instance=h;case"script":return h=Ls(r.src),(u=t.querySelector(Ko(h)))?(n.instance=u,w(u),u):(o=r,(u=Si.get(h))&&(o=g({},r),Cd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),w(u),Nn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Cc(o,r.precedence,t));return n.instance}function Cc(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===n)h=C;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Rd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var wc=null;function sv(t,n,r){if(wc===null){var o=new Map,u=wc=new Map;u.set(r,o)}else u=wc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var h=r[u];if(!(h[_r]||h[fn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=t+y;var C=o.get(y);C?C.push(h):o.set(y,[h])}}return o}function ov(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function ZS(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function lv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function KS(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=Us(o.href),h=n.querySelector(Zo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Dc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=h,w(h);return}h=n.ownerDocument||n,o=av(o),(u=Si.get(u))&&Rd(o,u),h=h.createElement("link"),w(h);var y=h;y._p=new Promise(function(C,V){y.onload=C,y.onerror=V}),Nn(h,"link",o),r.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Dc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var wd=0;function QS(t,n){return t.stylesheets&&t.count===0&&Lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&wd===0&&(wd=62500*US());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>wd?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uc=null;function Lc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uc=new Map,n.forEach(JS,t),Uc=null,Dc.call(t))}function JS(t,n){if(!(n.state.loading&4)){var r=Uc.get(t);if(r)var o=r.get(null);else{r=new Map,Uc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=r.get(y)||o,h===o&&r.set(null,u),r.set(y,u),this.count++,o=Dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Qo={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function $S(t,n,r,o,u,h,y,C,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function cv(t,n,r,o,u,h,y,C,V,ae,me,_e){return t=new $S(t,n,r,y,V,ae,me,_e,C),n=1,h===!0&&(n|=24),h=ti(3,null,null,n),t.current=h,h.stateNode=t,n=lf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},df(h),t}function uv(t){return t?(t=cs,t):cs}function fv(t,n,r,o,u,h){u=uv(u),o.context===null?o.context=u:o.pendingContext=u,o=Wa(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=qa(t,o,n),r!==null&&(Kn(r,t,n),wo(r,t,n))}function dv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Dd(t,n){dv(t,n),(t=t.alternate)&&dv(t,n)}function hv(t){if(t.tag===13||t.tag===31){var n=br(t,67108864);n!==null&&Kn(n,t,67108864),Dd(t,67108864)}}function pv(t){if(t.tag===13||t.tag===31){var n=si();n=co(n);var r=br(t,n);r!==null&&Kn(r,t,n),Dd(t,n)}}var Nc=!0;function eM(t,n,r,o){var u=F.T;F.T=null;var h=G.p;try{G.p=2,Ud(t,n,r,o)}finally{G.p=h,F.T=u}}function tM(t,n,r,o){var u=F.T;F.T=null;var h=G.p;try{G.p=8,Ud(t,n,r,o)}finally{G.p=h,F.T=u}}function Ud(t,n,r,o){if(Nc){var u=Ld(o);if(u===null)vd(t,n,o,Oc,r),gv(t,o);else if(iM(u,t,n,r,o))o.stopPropagation();else if(gv(t,o),n&4&&-1<nM.indexOf(t)){for(;u!==null;){var h=za(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Te(h.pendingLanes);if(y!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var V=1<<31-Be(y);C.entanglements[1]|=V,y&=~V}Xi(h),(Ft&6)===0&&(gc=E()+500,Wo(0))}}break;case 31:case 13:C=br(h,2),C!==null&&Kn(C,h,2),_c(),Dd(h,2)}if(h=Ld(o),h===null&&vd(t,n,o,Oc,r),h===u)break;u=h}u!==null&&o.stopPropagation()}else vd(t,n,o,null,r)}}function Ld(t){return t=Nu(t),Nd(t)}var Oc=null;function Nd(t){if(Oc=null,t=Fa(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===31){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Oc=t,null}function mv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case ge:return 2;case Me:return 8;case pe:case $e:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Od=!1,ir=null,ar=null,rr=null,Jo=new Map,$o=new Map,sr=[],nM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gv(t,n){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(n.pointerId)}}function el(t,n,r,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=za(n),n!==null&&hv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function iM(t,n,r,o,u){switch(n){case"focusin":return ir=el(ir,t,n,r,o,u),!0;case"dragenter":return ar=el(ar,t,n,r,o,u),!0;case"mouseover":return rr=el(rr,t,n,r,o,u),!0;case"pointerover":var h=u.pointerId;return Jo.set(h,el(Jo.get(h)||null,t,n,r,o,u)),!0;case"gotpointercapture":return h=u.pointerId,$o.set(h,el($o.get(h)||null,t,n,r,o,u)),!0}return!1}function vv(t){var n=Fa(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,Hi(t.priority,function(){pv(r)});return}}else if(n===31){if(n=d(r),n!==null){t.blockedOn=n,Hi(t.priority,function(){pv(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Ld(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Lu=o,r.target.dispatchEvent(o),Lu=null}else return n=za(r),n!==null&&hv(n),t.blockedOn=r,!1;n.shift()}return!0}function _v(t,n,r){Pc(t)&&r.delete(n)}function aM(){Od=!1,ir!==null&&Pc(ir)&&(ir=null),ar!==null&&Pc(ar)&&(ar=null),rr!==null&&Pc(rr)&&(rr=null),Jo.forEach(_v),$o.forEach(_v)}function Fc(t,n){t.blockedOn===n&&(t.blockedOn=null,Od||(Od=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,aM)))}var zc=null;function xv(t){zc!==t&&(zc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){zc===t&&(zc=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Nd(o||r)===null)continue;break}var h=za(r);h!==null&&(t.splice(n,3),n-=3,Lf(h,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function Ns(t){function n(V){return Fc(V,t)}ir!==null&&Fc(ir,t),ar!==null&&Fc(ar,t),rr!==null&&Fc(rr,t),Jo.forEach(n),$o.forEach(n);for(var r=0;r<sr.length;r++){var o=sr[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<sr.length&&(r=sr[0],r.blockedOn===null);)vv(r),r.blockedOn===null&&sr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],h=r[o+1],y=u[En]||null;if(typeof h=="function")y||xv(r);else if(y){var C=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[En]||null)C=y.formAction;else if(Nd(u)!==null)continue}else C=y.action;typeof C=="function"?r[o+1]=C:(r.splice(o,3),o-=3),xv(r)}}}function yv(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Pd(t){this._internalRoot=t}Bc.prototype.render=Pd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=si();fv(r,o,t,n,null,null)},Bc.prototype.unmount=Pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;fv(t.current,2,null,t,null,null),_c(),n[wi]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var n=uo();t={blockedOn:null,target:t,priority:n};for(var r=0;r<sr.length&&n!==0&&n<sr[r].priority;r++);sr.splice(r,0,t),r===0&&vv(t)}};var Sv=e.version;if(Sv!=="19.2.3")throw Error(a(527,Sv,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var rM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{Ae=Ic.inject(rM),Re=Ic}catch{}}return nl.createRoot=function(t,n){if(!l(t))throw Error(a(299));var r=!1,o="",u=Cg,h=wg,y=Dg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=cv(t,1,!1,null,null,r,o,null,u,h,y,yv),t[wi]=n.current,gd(t),new Pd(n)},nl.hydrateRoot=function(t,n,r){if(!l(t))throw Error(a(299));var o=!1,u="",h=Cg,y=wg,C=Dg,V=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),n=cv(t,1,!0,n,r??null,o,u,V,h,y,C,yv),n.context=uv(null),r=n.current,o=si(),o=co(o),u=Wa(o),u.callback=null,qa(r,u,o),r=o,n.current.lanes=r,Pn(n,r),Xi(n),t[wi]=n.current,gd(t),new Bc(n)},nl.version="19.2.3",nl}var Uv;function mM(){if(Uv)return Bd.exports;Uv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Bd.exports=pM(),Bd.exports}var gM=mM();var Lv="popstate";function vM(s={}){function e(l,c){let{pathname:f="/",search:d="",hash:m=""}=Kr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Eh("",{pathname:f,search:d,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),d="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");d=p===-1?m:m.slice(0,p)}return d+"#"+(typeof c=="string"?c:gl(c))}function a(l,c){Ai(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return xM(e,i,a,s)}function nn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ai(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _M(){return Math.random().toString(36).substring(2,10)}function Nv(s,e){return{usr:s.state,key:s.key,idx:e}}function Eh(s,e,i=null,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Kr(e):e,state:i,key:e&&e.key||a||_M()}}function gl({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Kr(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let a=s.indexOf("?");a>=0&&(e.search=s.substring(a),s=s.substring(0,a)),s&&(e.pathname=s)}return e}function xM(s,e,i,a={}){let{window:l=document.defaultView,v5Compat:c=!1}=a,f=l.history,d="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){d="POP";let S=v(),_=S==null?null:S-p;p=S,m&&m({action:d,location:A.location,delta:_})}function x(S,_){d="PUSH";let D=Eh(A.location,S,_);i&&i(D,S),p=v()+1;let L=Nv(D,p),O=A.createHref(D);try{f.pushState(L,"",O)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(O)}c&&m&&m({action:d,location:A.location,delta:1})}function M(S,_){d="REPLACE";let D=Eh(A.location,S,_);i&&i(D,S),p=v();let L=Nv(D,p),O=A.createHref(D);f.replaceState(L,"",O),c&&m&&m({action:d,location:A.location,delta:0})}function T(S){return yM(S)}let A={get action(){return d},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Lv,g),m=S,()=>{l.removeEventListener(Lv,g),m=null}},createHref(S){return e(l,S)},createURL:T,encodeLocation(S){let _=T(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(S){return f.go(S)}};return A}function yM(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),nn(i,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:gl(s);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function H_(s,e,i="/"){return SM(s,e,i,!1)}function SM(s,e,i,a){let l=typeof e=="string"?Kr(e):e,c=Ua(l.pathname||"/",i);if(c==null)return null;let f=G_(s);MM(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=NM(c);d=UM(f[m],p,a)}return d}function G_(s,e=[],i=[],a="",l=!1){let c=(f,d,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&m)return;nn(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let g=Ca([a,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(nn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),G_(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:wM(g,f.index),routesMeta:x})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let m of V_(f.path))c(f,d,!0,m)}),e}function V_(s){let e=s.split("/");if(e.length===0)return[];let[i,...a]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return l?[c,""]:[c];let f=V_(a.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function MM(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:DM(e.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var bM=/^:[\w-]+$/,EM=3,TM=2,AM=1,RM=10,CM=-2,Ov=s=>s==="*";function wM(s,e){let i=s.split("/"),a=i.length;return i.some(Ov)&&(a+=CM),e&&(a+=TM),i.filter(l=>!Ov(l)).reduce((l,c)=>l+(bM.test(c)?EM:c===""?AM:RM),a)}function DM(s,e){return s.length===e.length&&s.slice(0,-1).every((a,l)=>a===e[l])?s[s.length-1]-e[e.length-1]:0}function UM(s,e,i=!1){let{routesMeta:a}=s,l={},c="/",f=[];for(let d=0;d<a.length;++d){let m=a[d],p=d===a.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=yu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!g&&p&&i&&!a[a.length-1].route.index&&(g=yu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:Ca([c,g.pathname]),pathnameBase:zM(Ca([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=Ca([c,g.pathnameBase]))}return f}function yu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,a]=LM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:a.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let T=d[x]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const M=d[x];return g&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function LM(s,e=!1,i=!0){Ai(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(a.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function NM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ai(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Ua(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,a=s.charAt(i);return a&&a!=="/"?null:s.slice(i)||"/"}var k_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,OM=s=>k_.test(s);function PM(s,e="/"){let{pathname:i,search:a="",hash:l=""}=typeof s=="string"?Kr(s):s,c;if(i)if(OM(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Ai(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=Pv(i.substring(1),"/"):c=Pv(i,e)}else c=e;return{pathname:c,search:BM(a),hash:IM(l)}}function Pv(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Vd(s,e,i,a){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function FM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function X_(s){let e=FM(s);return e.map((i,a)=>a===e.length-1?i.pathname:i.pathnameBase)}function W_(s,e,i,a=!1){let l;typeof s=="string"?l=Kr(s):(l={...s},nn(!l.pathname||!l.pathname.includes("?"),Vd("?","pathname","search",l)),nn(!l.pathname||!l.pathname.includes("#"),Vd("#","pathname","hash",l)),nn(!l.search||!l.search.includes("#"),Vd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let g=e.length-1;if(!a&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}d=g>=0?e[g]:"/"}let m=PM(l,d),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var Ca=s=>s.join("/").replace(/\/\/+/g,"/"),zM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),BM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,IM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,HM=class{constructor(s,e,i,a=!1){this.status=s,this.statusText=e||"",this.internal=a,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function GM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function VM(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var q_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function j_(s,e){let i=s;if(typeof i!="string"||!k_.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let a=i,l=!1;if(q_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),d=Ua(f.pathname,e);f.origin===c.origin&&d!=null?i=d+f.search+f.hash:l=!0}catch{Ai(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Y_=["POST","PUT","PATCH","DELETE"];new Set(Y_);var kM=["GET",...Y_];new Set(kM);var no=$.createContext(null);no.displayName="DataRouter";var Tu=$.createContext(null);Tu.displayName="DataRouterState";var XM=$.createContext(!1),Z_=$.createContext({isTransitioning:!1});Z_.displayName="ViewTransition";var WM=$.createContext(new Map);WM.displayName="Fetchers";var qM=$.createContext(null);qM.displayName="Await";var Ri=$.createContext(null);Ri.displayName="Navigation";var Sl=$.createContext(null);Sl.displayName="Location";var Pa=$.createContext({outlet:null,matches:[],isDataRoute:!1});Pa.displayName="Route";var Tp=$.createContext(null);Tp.displayName="RouteError";var K_="REACT_ROUTER_ERROR",jM="REDIRECT",YM="ROUTE_ERROR_RESPONSE";function ZM(s){if(s.startsWith(`${K_}:${jM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function KM(s){if(s.startsWith(`${K_}:${YM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new HM(e.status,e.statusText,e.data)}catch{}}function QM(s,{relative:e}={}){nn(Ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=$.useContext(Ri),{hash:l,pathname:c,search:f}=bl(s,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:Ca([i,c])),a.createHref({pathname:d,search:f,hash:l})}function Ml(){return $.useContext(Sl)!=null}function Qr(){return nn(Ml(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(Sl).location}var Q_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function J_(s){$.useContext(Ri).static||$.useLayoutEffect(s)}function JM(){let{isDataRoute:s}=$.useContext(Pa);return s?fb():$M()}function $M(){nn(Ml(),"useNavigate() may be used only in the context of a <Router> component.");let s=$.useContext(no),{basename:e,navigator:i}=$.useContext(Ri),{matches:a}=$.useContext(Pa),{pathname:l}=Qr(),c=JSON.stringify(X_(a)),f=$.useRef(!1);return J_(()=>{f.current=!0}),$.useCallback((m,p={})=>{if(Ai(f.current,Q_),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=W_(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Ca([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,s])}$.createContext(null);function bl(s,{relative:e}={}){let{matches:i}=$.useContext(Pa),{pathname:a}=Qr(),l=JSON.stringify(X_(i));return $.useMemo(()=>W_(s,JSON.parse(l),a,e==="path"),[s,l,a,e])}function eb(s,e){return $_(s,e)}function $_(s,e,i,a,l){nn(Ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=$.useContext(Ri),{matches:f}=$.useContext(Pa),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",v=d?d.pathnameBase:"/",g=d&&d.route;{let D=g&&g.path||"";tx(p,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=Qr(),M;if(e){let D=typeof e=="string"?Kr(e):e;nn(v==="/"||D.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${D.pathname}" was given in the \`location\` prop.`),M=D}else M=x;let T=M.pathname||"/",A=T;if(v!=="/"){let D=v.replace(/^\//,"").split("/");A="/"+T.replace(/^\//,"").split("/").slice(D.length).join("/")}let S=H_(s,{pathname:A});Ai(g||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ai(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=rb(S&&S.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:Ca([v,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?v:Ca([v,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,i,a,l);return e&&_?$.createElement(Sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function tb(){let s=ub(),e=GM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:c},"ErrorBoundary")," or"," ",$.createElement("code",{style:c},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),i?$.createElement("pre",{style:l},i):null,f)}var nb=$.createElement(tb,null),ex=class extends $.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=KM(s.digest);i&&(s=i)}let e=s!==void 0?$.createElement(Pa.Provider,{value:this.props.routeContext},$.createElement(Tp.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?$.createElement(ib,{error:s},e):e}};ex.contextType=XM;var kd=new WeakMap;function ib({children:s,error:e}){let{basename:i}=$.useContext(Ri);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let a=ZM(e.digest);if(a){let l=kd.get(e);if(l)throw l;let c=j_(a.location,i);if(q_&&!kd.get(e))if(c.isExternal||a.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:a.replace}));throw kd.set(e,f),f}return $.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function ab({routeContext:s,match:e,children:i}){let a=$.useContext(no);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(Pa.Provider,{value:s},i)}function rb(s,e=[],i=null,a=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);nn(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let d=!1,m=-1;if(i)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:x,errors:M}=i,T=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||T){d=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&a?(v,g)=>{a(v,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:VM(i.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,x)=>{let M,T=!1,A=null,S=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,A=g.route.errorElement||nb,d&&(m<0&&x===0?(tx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,S=null):m===x&&(T=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,x+1)),D=()=>{let L;return M?L=A:T?L=S:g.route.Component?L=$.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=v,$.createElement(ab,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:i!=null},children:L})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?$.createElement(ex,{location:i.location,revalidation:i.revalidation,component:A,error:M,children:D(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):D()},null)}function Ap(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sb(s){let e=$.useContext(no);return nn(e,Ap(s)),e}function ob(s){let e=$.useContext(Tu);return nn(e,Ap(s)),e}function lb(s){let e=$.useContext(Pa);return nn(e,Ap(s)),e}function Rp(s){let e=lb(s),i=e.matches[e.matches.length-1];return nn(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function cb(){return Rp("useRouteId")}function ub(){let s=$.useContext(Tp),e=ob("useRouteError"),i=Rp("useRouteError");return s!==void 0?s:e.errors?.[i]}function fb(){let{router:s}=sb("useNavigate"),e=Rp("useNavigate"),i=$.useRef(!1);return J_(()=>{i.current=!0}),$.useCallback(async(l,c={})=>{Ai(i.current,Q_),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var Fv={};function tx(s,e,i){!e&&!Fv[s]&&(Fv[s]=!0,Ai(!1,i))}$.memo(db);function db({routes:s,future:e,state:i,onError:a}){return $_(s,void 0,i,a,e)}function dl(s){nn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hb({basename:s="/",children:e=null,location:i,navigationType:a="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){nn(!Ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),m=$.useMemo(()=>({basename:d,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[d,l,c,f]);typeof i=="string"&&(i=Kr(i));let{pathname:p="/",search:v="",hash:g="",state:x=null,key:M="default"}=i,T=$.useMemo(()=>{let A=Ua(p,d);return A==null?null:{location:{pathname:A,search:v,hash:g,state:x,key:M},navigationType:a}},[d,p,v,g,x,M,a]);return Ai(T!=null,`<Router basename="${d}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:$.createElement(Ri.Provider,{value:m},$.createElement(Sl.Provider,{children:e,value:T}))}function pb({children:s,location:e}){return eb(Th(s),e)}function Th(s,e=[]){let i=[];return $.Children.forEach(s,(a,l)=>{if(!$.isValidElement(a))return;let c=[...e,l];if(a.type===$.Fragment){i.push.apply(i,Th(a.props.children,c));return}nn(a.type===dl,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=Th(a.props.children,c)),i.push(f)}),i}var du="get",hu="application/x-www-form-urlencoded";function Au(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function mb(s){return Au(s)&&s.tagName.toLowerCase()==="button"}function gb(s){return Au(s)&&s.tagName.toLowerCase()==="form"}function vb(s){return Au(s)&&s.tagName.toLowerCase()==="input"}function _b(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function xb(s,e){return s.button===0&&(!e||e==="_self")&&!_b(s)}var Hc=null;function yb(){if(Hc===null)try{new FormData(document.createElement("form"),0),Hc=!1}catch{Hc=!0}return Hc}var Sb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xd(s){return s!=null&&!Sb.has(s)?(Ai(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hu}"`),null):s}function Mb(s,e){let i,a,l,c,f;if(gb(s)){let d=s.getAttribute("action");a=d?Ua(d,e):null,i=s.getAttribute("method")||du,l=Xd(s.getAttribute("enctype"))||hu,c=new FormData(s)}else if(mb(s)||vb(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(a=m?Ua(m,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||du,l=Xd(s.getAttribute("formenctype"))||Xd(d.getAttribute("enctype"))||hu,c=new FormData(d,s),!yb()){let{name:p,type:v,value:g}=s;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(Au(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=du,a=null,l=hu,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:a,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Cp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function bb(s,e,i){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return a.pathname==="/"?a.pathname=`_root.${i}`:e&&Ua(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function Eb(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Tb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Ab(s,e,i){let a=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await Eb(c,i);return f.links?f.links():[]}return[]}));return Db(a.flat(1).filter(Tb).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function zv(s,e,i,a,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?e.filter((m,p)=>{let v=a.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Rb(s,e,{includeHydrateFallback:i}={}){return Cb(s.map(a=>{let l=e.routes[a.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function Cb(s){return[...new Set(s)]}function wb(s){let e={},i=Object.keys(s).sort();for(let a of i)e[a]=s[a];return e}function Db(s,e){let i=new Set;return new Set(e),s.reduce((a,l)=>{let c=JSON.stringify(wb(l));return i.has(c)||(i.add(c),a.push({key:c,link:l})),a},[])}function nx(){let s=$.useContext(no);return Cp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Ub(){let s=$.useContext(Tu);return Cp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var wp=$.createContext(void 0);wp.displayName="FrameworkContext";function ix(){let s=$.useContext(wp);return Cp(s,"You must render this element inside a <HydratedRouter> element"),s}function Lb(s,e){let i=$.useContext(wp),[a,l]=$.useState(!1),[c,f]=$.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,x=$.useRef(null);$.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=_=>{_.forEach(D=>{f(D.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),$.useEffect(()=>{if(a){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[a]);let M=()=>{l(!0)},T=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,x,{}]:[c,x,{onFocus:il(d,M),onBlur:il(m,T),onMouseEnter:il(p,M),onMouseLeave:il(v,T),onTouchStart:il(g,M)}]:[!1,x,{}]}function il(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function Nb({page:s,...e}){let{router:i}=nx(),a=$.useMemo(()=>H_(i.routes,s,i.basename),[i.routes,s,i.basename]);return a?$.createElement(Pb,{page:s,matches:a,...e}):null}function Ob(s){let{manifest:e,routeModules:i}=ix(),[a,l]=$.useState([]);return $.useEffect(()=>{let c=!1;return Ab(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),a}function Pb({page:s,matches:e,...i}){let a=Qr(),{manifest:l,routeModules:c}=ix(),{basename:f}=nx(),{loaderData:d,matches:m}=Ub(),p=$.useMemo(()=>zv(s,e,m,l,a,"data"),[s,e,m,l,a]),v=$.useMemo(()=>zv(s,e,m,l,a,"assets"),[s,e,m,l,a]),g=$.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let T=new Set,A=!1;if(e.forEach(_=>{let D=l.routes[_.route.id];!D||!D.hasLoader||(!p.some(L=>L.route.id===_.route.id)&&_.route.id in d&&c[_.route.id]?.shouldRevalidate||D.hasClientLoader?A=!0:T.add(_.route.id))}),T.size===0)return[];let S=bb(s,f,"data");return A&&T.size>0&&S.searchParams.set("_routes",e.filter(_=>T.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,d,a,l,p,e,s,c]),x=$.useMemo(()=>Rb(v,l),[v,l]),M=Ob(v);return $.createElement($.Fragment,null,g.map(T=>$.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),x.map(T=>$.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),M.map(({key:T,link:A})=>$.createElement("link",{key:T,nonce:i.nonce,...A})))}function Fb(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var zb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zb&&(window.__reactRouterVersion="7.11.0")}catch{}function Bb({basename:s,children:e,unstable_useTransitions:i,window:a}){let l=$.useRef();l.current==null&&(l.current=vM({window:a,v5Compat:!0}));let c=l.current,[f,d]=$.useState({action:c.action,location:c.location}),m=$.useCallback(p=>{i===!1?d(p):$.startTransition(()=>d(p))},[i]);return $.useLayoutEffect(()=>c.listen(m),[c,m]),$.createElement(hb,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,io=$.forwardRef(function({onClick:e,discover:i="render",prefetch:a="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},T){let{basename:A,unstable_useTransitions:S}=$.useContext(Ri),_=typeof p=="string"&&ax.test(p),D=j_(p,A);p=D.to;let L=QM(p,{relative:l}),[O,N,z]=Lb(a,M),P=Vb(p,{replace:f,state:d,target:m,preventScrollReset:v,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:S});function U(R){e&&e(R),R.defaultPrevented||P(R)}let b=$.createElement("a",{...M,...z,href:D.absoluteURL||L,onClick:D.isExternal||c?e:U,ref:Fb(T,N),target:m,"data-discover":!_&&i==="render"?"true":void 0});return O&&!_?$.createElement($.Fragment,null,b,$.createElement(Nb,{page:L})):b});io.displayName="Link";var Ib=$.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:a="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},v){let g=bl(f,{relative:p.relative}),x=Qr(),M=$.useContext(Tu),{navigator:T,basename:A}=$.useContext(Ri),S=M!=null&&jb(g)&&d===!0,_=T.encodeLocation?T.encodeLocation(g).pathname:g.pathname,D=x.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(D=D.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&A&&(L=Ua(L,A)||L);const O=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let N=D===_||!l&&D.startsWith(_)&&D.charAt(O)==="/",z=L!=null&&(L===_||!l&&L.startsWith(_)&&L.charAt(_.length)==="/"),P={isActive:N,isPending:z,isTransitioning:S},U=N?e:void 0,b;typeof a=="function"?b=a(P):b=[a,N?"active":null,z?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(P):c;return $.createElement(io,{...p,"aria-current":U,className:b,ref:v,style:R,to:f,viewTransition:d},typeof m=="function"?m(P):m)});Ib.displayName="NavLink";var Hb=$.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:a,replace:l,state:c,method:f=du,action:d,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},T)=>{let{unstable_useTransitions:A}=$.useContext(Ri),S=Wb(),_=qb(d,{relative:p}),D=f.toLowerCase()==="get"?"get":"post",L=typeof d=="string"&&ax.test(d),O=N=>{if(m&&m(N),N.defaultPrevented)return;N.preventDefault();let z=N.nativeEvent.submitter,P=z?.getAttribute("formmethod")||f,U=()=>S(z||N.currentTarget,{fetcherKey:e,method:P,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x});A&&i!==!1?$.startTransition(()=>U()):U()};return $.createElement("form",{ref:T,method:D,action:_,onSubmit:a?m:O,...M,"data-discover":!L&&s==="render"?"true":void 0})});Hb.displayName="Form";function Gb(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rx(s){let e=$.useContext(no);return nn(e,Gb(s)),e}function Vb(s,{target:e,replace:i,state:a,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:m}={}){let p=JM(),v=Qr(),g=bl(s,{relative:c});return $.useCallback(x=>{if(xb(x,e)){x.preventDefault();let M=i!==void 0?i:gl(v)===gl(g),T=()=>p(s,{replace:M,state:a,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d});m?$.startTransition(()=>T()):T()}},[v,p,g,i,a,e,s,l,c,f,d,m])}var kb=0,Xb=()=>`__${String(++kb)}__`;function Wb(){let{router:s}=rx("useSubmit"),{basename:e}=$.useContext(Ri),i=cb(),a=s.fetch,l=s.navigate;return $.useCallback(async(c,f={})=>{let{action:d,method:m,encType:p,formData:v,body:g}=Mb(c,e);if(f.navigate===!1){let x=f.fetcherKey||Xb();await a(x,i,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,l,e,i])}function qb(s,{relative:e}={}){let{basename:i}=$.useContext(Ri),a=$.useContext(Pa);nn(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),c={...bl(s||".",{relative:e})},f=Qr();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(v=>v==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let v=d.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Ca([i,c.pathname])),gl(c)}function jb(s,{relative:e}={}){let i=$.useContext(Z_);nn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=rx("useViewTransitionState"),l=bl(s,{relative:e});if(!i.isTransitioning)return!1;let c=Ua(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=Ua(i.nextLocation.pathname,a)||i.nextLocation.pathname;return yu(l.pathname,f)!=null||yu(l.pathname,c)!=null}function sx(s){var e,i,a="";if(typeof s=="string"||typeof s=="number")a+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(e=0;e<l;e++)s[e]&&(i=sx(s[e]))&&(a&&(a+=" "),a+=i)}else for(i in s)s[i]&&(a&&(a+=" "),a+=i);return a}function Yb(){for(var s,e,i=0,a="",l=arguments.length;i<l;i++)(s=arguments[i])&&(e=sx(s))&&(a&&(a+=" "),a+=e);return a}const Zb=(s,e)=>{const i=new Array(s.length+e.length);for(let a=0;a<s.length;a++)i[a]=s[a];for(let a=0;a<e.length;a++)i[s.length+a]=e[a];return i},Kb=(s,e)=>({classGroupId:s,validator:e}),ox=(s=new Map,e=null,i)=>({nextPart:s,validators:e,classGroupId:i}),Su="-",Bv=[],Qb="arbitrary..",Jb=s=>{const e=eE(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:a}=s;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return $b(f);const d=f.split(Su),m=d[0]===""&&d.length>1?1:0;return lx(d,m,e)},getConflictingClassGroupIds:(f,d)=>{if(d){const m=a[f],p=i[f];return m?p?Zb(p,m):m:p||Bv}return i[f]||Bv}}},lx=(s,e,i)=>{if(s.length-e===0)return i.classGroupId;const l=s[e],c=i.nextPart.get(l);if(c){const p=lx(s,e+1,c);if(p)return p}const f=i.validators;if(f===null)return;const d=e===0?s.join(Su):s.slice(e).join(Su),m=f.length;for(let p=0;p<m;p++){const v=f[p];if(v.validator(d))return v.classGroupId}},$b=s=>s.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=s.slice(1,-1),i=e.indexOf(":"),a=e.slice(0,i);return a?Qb+a:void 0})(),eE=s=>{const{theme:e,classGroups:i}=s;return tE(i,e)},tE=(s,e)=>{const i=ox();for(const a in s){const l=s[a];Dp(l,i,a,e)}return i},Dp=(s,e,i,a)=>{const l=s.length;for(let c=0;c<l;c++){const f=s[c];nE(f,e,i,a)}},nE=(s,e,i,a)=>{if(typeof s=="string"){iE(s,e,i);return}if(typeof s=="function"){aE(s,e,i,a);return}rE(s,e,i,a)},iE=(s,e,i)=>{const a=s===""?e:cx(e,s);a.classGroupId=i},aE=(s,e,i,a)=>{if(sE(s)){Dp(s(a),e,i,a);return}e.validators===null&&(e.validators=[]),e.validators.push(Kb(i,s))},rE=(s,e,i,a)=>{const l=Object.entries(s),c=l.length;for(let f=0;f<c;f++){const[d,m]=l[f];Dp(m,cx(e,d),i,a)}},cx=(s,e)=>{let i=s;const a=e.split(Su),l=a.length;for(let c=0;c<l;c++){const f=a[c];let d=i.nextPart.get(f);d||(d=ox(),i.nextPart.set(f,d)),i=d}return i},sE=s=>"isThemeGetter"in s&&s.isThemeGetter===!0,oE=s=>{if(s<1)return{get:()=>{},set:()=>{}};let e=0,i=Object.create(null),a=Object.create(null);const l=(c,f)=>{i[c]=f,e++,e>s&&(e=0,a=i,i=Object.create(null))};return{get(c){let f=i[c];if(f!==void 0)return f;if((f=a[c])!==void 0)return l(c,f),f},set(c,f){c in i?i[c]=f:l(c,f)}}},Ah="!",Iv=":",lE=[],Hv=(s,e,i,a,l)=>({modifiers:s,hasImportantModifier:e,baseClassName:i,maybePostfixModifierPosition:a,isExternal:l}),cE=s=>{const{prefix:e,experimentalParseClassName:i}=s;let a=l=>{const c=[];let f=0,d=0,m=0,p;const v=l.length;for(let A=0;A<v;A++){const S=l[A];if(f===0&&d===0){if(S===Iv){c.push(l.slice(m,A)),m=A+1;continue}if(S==="/"){p=A;continue}}S==="["?f++:S==="]"?f--:S==="("?d++:S===")"&&d--}const g=c.length===0?l:l.slice(m);let x=g,M=!1;g.endsWith(Ah)?(x=g.slice(0,-1),M=!0):g.startsWith(Ah)&&(x=g.slice(1),M=!0);const T=p&&p>m?p-m:void 0;return Hv(c,M,x,T)};if(e){const l=e+Iv,c=a;a=f=>f.startsWith(l)?c(f.slice(l.length)):Hv(lE,!1,f,void 0,!0)}if(i){const l=a;a=c=>i({className:c,parseClassName:l})}return a},uE=s=>{const e=new Map;return s.orderSensitiveModifiers.forEach((i,a)=>{e.set(i,1e6+a)}),i=>{const a=[];let l=[];for(let c=0;c<i.length;c++){const f=i[c],d=f[0]==="[",m=e.has(f);d||m?(l.length>0&&(l.sort(),a.push(...l),l=[]),a.push(f)):l.push(f)}return l.length>0&&(l.sort(),a.push(...l)),a}},fE=s=>({cache:oE(s.cacheSize),parseClassName:cE(s),sortModifiers:uE(s),...Jb(s)}),dE=/\s+/,hE=(s,e)=>{const{parseClassName:i,getClassGroupId:a,getConflictingClassGroupIds:l,sortModifiers:c}=e,f=[],d=s.trim().split(dE);let m="";for(let p=d.length-1;p>=0;p-=1){const v=d[p],{isExternal:g,modifiers:x,hasImportantModifier:M,baseClassName:T,maybePostfixModifierPosition:A}=i(v);if(g){m=v+(m.length>0?" "+m:m);continue}let S=!!A,_=a(S?T.substring(0,A):T);if(!_){if(!S){m=v+(m.length>0?" "+m:m);continue}if(_=a(T),!_){m=v+(m.length>0?" "+m:m);continue}S=!1}const D=x.length===0?"":x.length===1?x[0]:c(x).join(":"),L=M?D+Ah:D,O=L+_;if(f.indexOf(O)>-1)continue;f.push(O);const N=l(_,S);for(let z=0;z<N.length;++z){const P=N[z];f.push(L+P)}m=v+(m.length>0?" "+m:m)}return m},pE=(...s)=>{let e=0,i,a,l="";for(;e<s.length;)(i=s[e++])&&(a=ux(i))&&(l&&(l+=" "),l+=a);return l},ux=s=>{if(typeof s=="string")return s;let e,i="";for(let a=0;a<s.length;a++)s[a]&&(e=ux(s[a]))&&(i&&(i+=" "),i+=e);return i},mE=(s,...e)=>{let i,a,l,c;const f=m=>{const p=e.reduce((v,g)=>g(v),s());return i=fE(p),a=i.cache.get,l=i.cache.set,c=d,d(m)},d=m=>{const p=a(m);if(p)return p;const v=hE(m,i);return l(m,v),v};return c=f,(...m)=>c(pE(...m))},gE=[],xn=s=>{const e=i=>i[s]||gE;return e.isThemeGetter=!0,e},fx=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,dx=/^\((?:(\w[\w-]*):)?(.+)\)$/i,vE=/^\d+\/\d+$/,_E=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,yE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,SE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ME=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Os=s=>vE.test(s),vt=s=>!!s&&!Number.isNaN(Number(s)),lr=s=>!!s&&Number.isInteger(Number(s)),Wd=s=>s.endsWith("%")&&vt(s.slice(0,-1)),xa=s=>_E.test(s),bE=()=>!0,EE=s=>xE.test(s)&&!yE.test(s),hx=()=>!1,TE=s=>SE.test(s),AE=s=>ME.test(s),RE=s=>!qe(s)&&!je(s),CE=s=>ao(s,gx,hx),qe=s=>fx.test(s),Fr=s=>ao(s,vx,EE),qd=s=>ao(s,NE,vt),Gv=s=>ao(s,px,hx),wE=s=>ao(s,mx,AE),Gc=s=>ao(s,_x,TE),je=s=>dx.test(s),al=s=>ro(s,vx),DE=s=>ro(s,OE),Vv=s=>ro(s,px),UE=s=>ro(s,gx),LE=s=>ro(s,mx),Vc=s=>ro(s,_x,!0),ao=(s,e,i)=>{const a=fx.exec(s);return a?a[1]?e(a[1]):i(a[2]):!1},ro=(s,e,i=!1)=>{const a=dx.exec(s);return a?a[1]?e(a[1]):i:!1},px=s=>s==="position"||s==="percentage",mx=s=>s==="image"||s==="url",gx=s=>s==="length"||s==="size"||s==="bg-size",vx=s=>s==="length",NE=s=>s==="number",OE=s=>s==="family-name",_x=s=>s==="shadow",PE=()=>{const s=xn("color"),e=xn("font"),i=xn("text"),a=xn("font-weight"),l=xn("tracking"),c=xn("leading"),f=xn("breakpoint"),d=xn("container"),m=xn("spacing"),p=xn("radius"),v=xn("shadow"),g=xn("inset-shadow"),x=xn("text-shadow"),M=xn("drop-shadow"),T=xn("blur"),A=xn("perspective"),S=xn("aspect"),_=xn("ease"),D=xn("animate"),L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],N=()=>[...O(),je,qe],z=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto","contain","none"],U=()=>[je,qe,m],b=()=>[Os,"full","auto",...U()],R=()=>[lr,"none","subgrid",je,qe],H=()=>["auto",{span:["full",lr,je,qe]},lr,je,qe],j=()=>[lr,"auto",je,qe],K=()=>["auto","min","max","fr",je,qe],te=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],re=()=>["start","end","center","stretch","center-safe","end-safe"],F=()=>["auto",...U()],G=()=>[Os,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...U()],W=()=>[s,je,qe],Se=()=>[...O(),Vv,Gv,{position:[je,qe]}],xe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],B=()=>["auto","cover","contain",UE,CE,{size:[je,qe]}],ne=()=>[Wd,al,Fr],fe=()=>["","none","full",p,je,qe],Ee=()=>["",vt,al,Fr],Ne=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ue=()=>[vt,Wd,Vv,Gv],De=()=>["","none",T,je,qe],ke=()=>["none",vt,je,qe],He=()=>["none",vt,je,qe],dt=()=>[vt,je,qe],Yt=()=>[Os,"full",...U()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[xa],breakpoint:[xa],color:[bE],container:[xa],"drop-shadow":[xa],ease:["in","out","in-out"],font:[RE],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[xa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[xa],shadow:[xa],spacing:["px",vt],text:[xa],"text-shadow":[xa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Os,qe,je,S]}],container:["container"],columns:[{columns:[vt,qe,je,d]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:N()}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:b()}],"inset-x":[{"inset-x":b()}],"inset-y":[{"inset-y":b()}],start:[{start:b()}],end:[{end:b()}],top:[{top:b()}],right:[{right:b()}],bottom:[{bottom:b()}],left:[{left:b()}],visibility:["visible","invisible","collapse"],z:[{z:[lr,"auto",je,qe]}],basis:[{basis:[Os,"full","auto",d,...U()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[vt,Os,"auto","initial","none",qe]}],grow:[{grow:["",vt,je,qe]}],shrink:[{shrink:["",vt,je,qe]}],order:[{order:[lr,"first","last","none",je,qe]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":K()}],"auto-rows":[{"auto-rows":K()}],gap:[{gap:U()}],"gap-x":[{"gap-x":U()}],"gap-y":[{"gap-y":U()}],"justify-content":[{justify:[...te(),"normal"]}],"justify-items":[{"justify-items":[...re(),"normal"]}],"justify-self":[{"justify-self":["auto",...re()]}],"align-content":[{content:["normal",...te()]}],"align-items":[{items:[...re(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...re(),{baseline:["","last"]}]}],"place-content":[{"place-content":te()}],"place-items":[{"place-items":[...re(),"baseline"]}],"place-self":[{"place-self":["auto",...re()]}],p:[{p:U()}],px:[{px:U()}],py:[{py:U()}],ps:[{ps:U()}],pe:[{pe:U()}],pt:[{pt:U()}],pr:[{pr:U()}],pb:[{pb:U()}],pl:[{pl:U()}],m:[{m:F()}],mx:[{mx:F()}],my:[{my:F()}],ms:[{ms:F()}],me:[{me:F()}],mt:[{mt:F()}],mr:[{mr:F()}],mb:[{mb:F()}],ml:[{ml:F()}],"space-x":[{"space-x":U()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":U()}],"space-y-reverse":["space-y-reverse"],size:[{size:G()}],w:[{w:[d,"screen",...G()]}],"min-w":[{"min-w":[d,"screen","none",...G()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[f]},...G()]}],h:[{h:["screen","lh",...G()]}],"min-h":[{"min-h":["screen","lh","none",...G()]}],"max-h":[{"max-h":["screen","lh",...G()]}],"font-size":[{text:["base",i,al,Fr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,je,qd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Wd,qe]}],"font-family":[{font:[DE,qe,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,je,qe]}],"line-clamp":[{"line-clamp":[vt,"none",je,qd]}],leading:[{leading:[c,...U()]}],"list-image":[{"list-image":["none",je,qe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",je,qe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:W()}],"text-color":[{text:W()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ne(),"wavy"]}],"text-decoration-thickness":[{decoration:[vt,"from-font","auto",je,Fr]}],"text-decoration-color":[{decoration:W()}],"underline-offset":[{"underline-offset":[vt,"auto",je,qe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",je,qe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",je,qe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Se()}],"bg-repeat":[{bg:xe()}],"bg-size":[{bg:B()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},lr,je,qe],radial:["",je,qe],conic:[lr,je,qe]},LE,wE]}],"bg-color":[{bg:W()}],"gradient-from-pos":[{from:ne()}],"gradient-via-pos":[{via:ne()}],"gradient-to-pos":[{to:ne()}],"gradient-from":[{from:W()}],"gradient-via":[{via:W()}],"gradient-to":[{to:W()}],rounded:[{rounded:fe()}],"rounded-s":[{"rounded-s":fe()}],"rounded-e":[{"rounded-e":fe()}],"rounded-t":[{"rounded-t":fe()}],"rounded-r":[{"rounded-r":fe()}],"rounded-b":[{"rounded-b":fe()}],"rounded-l":[{"rounded-l":fe()}],"rounded-ss":[{"rounded-ss":fe()}],"rounded-se":[{"rounded-se":fe()}],"rounded-ee":[{"rounded-ee":fe()}],"rounded-es":[{"rounded-es":fe()}],"rounded-tl":[{"rounded-tl":fe()}],"rounded-tr":[{"rounded-tr":fe()}],"rounded-br":[{"rounded-br":fe()}],"rounded-bl":[{"rounded-bl":fe()}],"border-w":[{border:Ee()}],"border-w-x":[{"border-x":Ee()}],"border-w-y":[{"border-y":Ee()}],"border-w-s":[{"border-s":Ee()}],"border-w-e":[{"border-e":Ee()}],"border-w-t":[{"border-t":Ee()}],"border-w-r":[{"border-r":Ee()}],"border-w-b":[{"border-b":Ee()}],"border-w-l":[{"border-l":Ee()}],"divide-x":[{"divide-x":Ee()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ee()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ne(),"hidden","none"]}],"divide-style":[{divide:[...Ne(),"hidden","none"]}],"border-color":[{border:W()}],"border-color-x":[{"border-x":W()}],"border-color-y":[{"border-y":W()}],"border-color-s":[{"border-s":W()}],"border-color-e":[{"border-e":W()}],"border-color-t":[{"border-t":W()}],"border-color-r":[{"border-r":W()}],"border-color-b":[{"border-b":W()}],"border-color-l":[{"border-l":W()}],"divide-color":[{divide:W()}],"outline-style":[{outline:[...Ne(),"none","hidden"]}],"outline-offset":[{"outline-offset":[vt,je,qe]}],"outline-w":[{outline:["",vt,al,Fr]}],"outline-color":[{outline:W()}],shadow:[{shadow:["","none",v,Vc,Gc]}],"shadow-color":[{shadow:W()}],"inset-shadow":[{"inset-shadow":["none",g,Vc,Gc]}],"inset-shadow-color":[{"inset-shadow":W()}],"ring-w":[{ring:Ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:W()}],"ring-offset-w":[{"ring-offset":[vt,Fr]}],"ring-offset-color":[{"ring-offset":W()}],"inset-ring-w":[{"inset-ring":Ee()}],"inset-ring-color":[{"inset-ring":W()}],"text-shadow":[{"text-shadow":["none",x,Vc,Gc]}],"text-shadow-color":[{"text-shadow":W()}],opacity:[{opacity:[vt,je,qe]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[vt]}],"mask-image-linear-from-pos":[{"mask-linear-from":ue()}],"mask-image-linear-to-pos":[{"mask-linear-to":ue()}],"mask-image-linear-from-color":[{"mask-linear-from":W()}],"mask-image-linear-to-color":[{"mask-linear-to":W()}],"mask-image-t-from-pos":[{"mask-t-from":ue()}],"mask-image-t-to-pos":[{"mask-t-to":ue()}],"mask-image-t-from-color":[{"mask-t-from":W()}],"mask-image-t-to-color":[{"mask-t-to":W()}],"mask-image-r-from-pos":[{"mask-r-from":ue()}],"mask-image-r-to-pos":[{"mask-r-to":ue()}],"mask-image-r-from-color":[{"mask-r-from":W()}],"mask-image-r-to-color":[{"mask-r-to":W()}],"mask-image-b-from-pos":[{"mask-b-from":ue()}],"mask-image-b-to-pos":[{"mask-b-to":ue()}],"mask-image-b-from-color":[{"mask-b-from":W()}],"mask-image-b-to-color":[{"mask-b-to":W()}],"mask-image-l-from-pos":[{"mask-l-from":ue()}],"mask-image-l-to-pos":[{"mask-l-to":ue()}],"mask-image-l-from-color":[{"mask-l-from":W()}],"mask-image-l-to-color":[{"mask-l-to":W()}],"mask-image-x-from-pos":[{"mask-x-from":ue()}],"mask-image-x-to-pos":[{"mask-x-to":ue()}],"mask-image-x-from-color":[{"mask-x-from":W()}],"mask-image-x-to-color":[{"mask-x-to":W()}],"mask-image-y-from-pos":[{"mask-y-from":ue()}],"mask-image-y-to-pos":[{"mask-y-to":ue()}],"mask-image-y-from-color":[{"mask-y-from":W()}],"mask-image-y-to-color":[{"mask-y-to":W()}],"mask-image-radial":[{"mask-radial":[je,qe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ue()}],"mask-image-radial-to-pos":[{"mask-radial-to":ue()}],"mask-image-radial-from-color":[{"mask-radial-from":W()}],"mask-image-radial-to-color":[{"mask-radial-to":W()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":O()}],"mask-image-conic-pos":[{"mask-conic":[vt]}],"mask-image-conic-from-pos":[{"mask-conic-from":ue()}],"mask-image-conic-to-pos":[{"mask-conic-to":ue()}],"mask-image-conic-from-color":[{"mask-conic-from":W()}],"mask-image-conic-to-color":[{"mask-conic-to":W()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Se()}],"mask-repeat":[{mask:xe()}],"mask-size":[{mask:B()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",je,qe]}],filter:[{filter:["","none",je,qe]}],blur:[{blur:De()}],brightness:[{brightness:[vt,je,qe]}],contrast:[{contrast:[vt,je,qe]}],"drop-shadow":[{"drop-shadow":["","none",M,Vc,Gc]}],"drop-shadow-color":[{"drop-shadow":W()}],grayscale:[{grayscale:["",vt,je,qe]}],"hue-rotate":[{"hue-rotate":[vt,je,qe]}],invert:[{invert:["",vt,je,qe]}],saturate:[{saturate:[vt,je,qe]}],sepia:[{sepia:["",vt,je,qe]}],"backdrop-filter":[{"backdrop-filter":["","none",je,qe]}],"backdrop-blur":[{"backdrop-blur":De()}],"backdrop-brightness":[{"backdrop-brightness":[vt,je,qe]}],"backdrop-contrast":[{"backdrop-contrast":[vt,je,qe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",vt,je,qe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[vt,je,qe]}],"backdrop-invert":[{"backdrop-invert":["",vt,je,qe]}],"backdrop-opacity":[{"backdrop-opacity":[vt,je,qe]}],"backdrop-saturate":[{"backdrop-saturate":[vt,je,qe]}],"backdrop-sepia":[{"backdrop-sepia":["",vt,je,qe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":U()}],"border-spacing-x":[{"border-spacing-x":U()}],"border-spacing-y":[{"border-spacing-y":U()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",je,qe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[vt,"initial",je,qe]}],ease:[{ease:["linear","initial",_,je,qe]}],delay:[{delay:[vt,je,qe]}],animate:[{animate:["none",D,je,qe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,je,qe]}],"perspective-origin":[{"perspective-origin":N()}],rotate:[{rotate:ke()}],"rotate-x":[{"rotate-x":ke()}],"rotate-y":[{"rotate-y":ke()}],"rotate-z":[{"rotate-z":ke()}],scale:[{scale:He()}],"scale-x":[{"scale-x":He()}],"scale-y":[{"scale-y":He()}],"scale-z":[{"scale-z":He()}],"scale-3d":["scale-3d"],skew:[{skew:dt()}],"skew-x":[{"skew-x":dt()}],"skew-y":[{"skew-y":dt()}],transform:[{transform:[je,qe,"","none","gpu","cpu"]}],"transform-origin":[{origin:N()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Yt()}],"translate-x":[{"translate-x":Yt()}],"translate-y":[{"translate-y":Yt()}],"translate-z":[{"translate-z":Yt()}],"translate-none":["translate-none"],accent:[{accent:W()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:W()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",je,qe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",je,qe]}],fill:[{fill:["none",...W()]}],"stroke-w":[{stroke:[vt,al,Fr,qd]}],stroke:[{stroke:["none",...W()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},FE=mE(PE);function Ki(...s){return FE(Yb(s))}function zE({children:s,className:e,gradientSize:i=200,gradientColor:a="#00d4ff",gradientOpacity:l=.15}){const c=$.useRef(null),[f,d]=$.useState({x:0,y:0}),[m,p]=$.useState(0),v=$.useCallback(M=>{if(!c.current)return;const T=c.current.getBoundingClientRect();d({x:M.clientX-T.left,y:M.clientY-T.top})},[]),g=$.useCallback(()=>{p(1)},[]),x=$.useCallback(()=>{p(0)},[]);return k.jsxs("div",{ref:c,onMouseMove:v,onMouseEnter:g,onMouseLeave:x,className:Ki("relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card transition-all duration-300","hover:border-border-accent hover:bg-bg-card-hover",e),children:[k.jsx("div",{className:"pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",style:{opacity:m,background:`radial-gradient(${i}px circle at ${f.x}px ${f.y}px, ${a}${Math.round(l*255).toString(16).padStart(2,"0")}, transparent 40%)`}}),k.jsx("div",{className:"relative z-10",children:s})]})}const BE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),IE=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,a)=>a?a.toUpperCase():i.toLowerCase()),kv=s=>{const e=IE(s);return e.charAt(0).toUpperCase()+e.slice(1)},xx=(...s)=>s.filter((e,i,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===i).join(" ").trim(),HE=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var GE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const VE=$.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:l="",children:c,iconNode:f,...d},m)=>$.createElement("svg",{ref:m,...GE,width:e,height:e,stroke:s,strokeWidth:a?Number(i)*24/Number(e):i,className:xx("lucide",l),...!c&&!HE(d)&&{"aria-hidden":"true"},...d},[...f.map(([p,v])=>$.createElement(p,v)),...Array.isArray(c)?c:[c]]));const Xn=(s,e)=>{const i=$.forwardRef(({className:a,...l},c)=>$.createElement(VE,{ref:c,iconNode:e,className:xx(`lucide-${BE(kv(s))}`,`lucide-${s}`,a),...l}));return i.displayName=kv(s),i};const kE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Up=Xn("arrow-left",kE);const XE=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],WE=Xn("clock",XE);const qE=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],jE=Xn("dna",qE);const YE=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],ZE=Xn("droplets",YE);const KE=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],QE=Xn("file-text",KE);const JE=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],$E=Xn("gamepad-2",JE);const e1=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],t1=Xn("hand",e1);const n1=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],i1=Xn("mic-off",n1);const a1=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],r1=Xn("mic",a1);const s1=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],yx=Xn("music",s1);const o1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],l1=Xn("palette",o1);const c1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],u1=Xn("rotate-ccw",c1);const f1=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Rh=Xn("smartphone",f1);const d1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],h1=Xn("sparkles",d1);const p1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],m1=Xn("trash-2",p1),g1=[{id:"sensors",title:"Sensor Diagnostics",description:"Test iOS web sensor APIs including motion, orientation, geolocation, and camera.",icon:k.jsx(Rh,{className:"w-8 h-8"}),path:"/sensors",status:"available",gradient:"from-accent-cyan/20 to-accent-purple/20",size:"large"},{id:"fluid",title:"Fluid Simulation",description:"GPU-accelerated fluid dynamics. Tilt your phone to control gravity!",icon:k.jsx(ZE,{className:"w-8 h-8"}),path:"/fluid",status:"available",gradient:"from-accent-purple/20 to-accent-cyan/20",size:"large"},{id:"colors",title:"Color Picker",description:"EyeDropper API demo",icon:k.jsx(l1,{className:"w-6 h-6"}),path:"/colors",status:"coming-soon",gradient:"from-accent-green/20 to-accent-cyan/20",size:"small"},{id:"audio",title:"Audio Visualizer",description:"3D audio visualizations with Galaxy & DNA modes",icon:k.jsx(yx,{className:"w-6 h-6"}),path:"/audio",status:"available",gradient:"from-accent-purple/20 to-accent-red/20",size:"small"},{id:"timer",title:"Timer",description:"Precision timing APIs",icon:k.jsx(WE,{className:"w-6 h-6"}),path:"/timer",status:"coming-soon",gradient:"from-accent-yellow/20 to-accent-green/20",size:"small"},{id:"clipboard",title:"Clipboard",description:"Clipboard API demo",icon:k.jsx(QE,{className:"w-6 h-6"}),path:"/clipboard",status:"coming-soon",gradient:"from-accent-cyan/20 to-accent-green/20",size:"small"},{id:"gamepad",title:"Gamepad",description:"Gamepad API tester",icon:k.jsx($E,{className:"w-6 h-6"}),path:"/gamepad",status:"coming-soon",gradient:"from-accent-red/20 to-accent-yellow/20",size:"small"}];function v1({app:s,index:e}){const i=s.status==="available",a=k.jsx(zE,{className:Ki("group cursor-pointer",s.size==="large"?"col-span-2 row-span-2":"",!i&&"opacity-60 cursor-not-allowed"),gradientColor:s.gradient.includes("cyan")?"#00d4ff":"#aa66ff",children:k.jsxs("div",{className:Ki("p-6 h-full flex flex-col",s.size==="large"?"min-h-[200px]":"min-h-[120px]"),style:{animation:`fadeInUp 0.5s ease-out ${e*.1}s both`},children:[k.jsx("div",{className:Ki("w-12 h-12 rounded-xl flex items-center justify-center mb-4","bg-gradient-to-br",s.gradient,"text-text-primary","group-hover:scale-110 transition-transform duration-300"),children:s.icon}),k.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors",children:s.title}),k.jsx("p",{className:"text-sm text-text-secondary flex-1",children:s.description}),!i&&k.jsx("span",{className:"mt-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-text-muted/20 text-text-muted w-fit",children:"Coming Soon"}),i&&k.jsx("span",{className:"mt-3 inline-flex items-center text-xs font-medium text-accent-cyan group-hover:translate-x-1 transition-transform",children:"Open →"})]})});return i?k.jsx(io,{to:s.path,className:"contents",children:a}):a}function _1(){return k.jsx("div",{className:"min-h-screen p-4 md:p-8",children:k.jsxs("div",{className:"max-w-4xl mx-auto",children:[k.jsxs("header",{className:"text-center mb-12",style:{animation:"fadeInUp 0.6s ease-out"},children:[k.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-4",children:"Nikhil's Apps"}),k.jsx("p",{className:"text-text-secondary text-lg",children:"A collection of mini apps and experiments"})]}),k.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:g1.map((s,e)=>k.jsx(v1,{app:s,index:e},s.id))}),k.jsx("footer",{className:"text-center mt-12 text-text-muted text-sm",style:{animation:"fadeInUp 0.6s ease-out 0.8s both"},children:k.jsx("p",{className:"font-mono",children:"Built with React + Vite + Tailwind"})})]})})}const be={container:{padding:"16px",paddingBottom:"48px",maxWidth:"600px",margin:"0 auto"},backLink:{display:"inline-flex",alignItems:"center",gap:"8px",color:"var(--color-text-secondary)",textDecoration:"none",fontSize:"0.875rem",marginBottom:"16px",transition:"color 0.2s"},header:{textAlign:"center",marginBottom:"32px",animation:"fadeInUp 0.6s ease-out"},title:{fontSize:"clamp(1.75rem, 6vw, 2.5rem)",fontWeight:700,margin:0,background:"linear-gradient(135deg, #00d4ff, #aa66ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"-0.02em"},subtitle:{color:"var(--color-text-secondary)",fontSize:"0.9rem",marginTop:"8px",fontWeight:300},section:{marginBottom:"24px"},sectionTitle:{fontSize:"0.7rem",fontWeight:600,color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"12px",paddingLeft:"4px"},card:{background:"var(--color-bg-card)",borderRadius:"16px",padding:"20px",border:"1px solid var(--color-border-subtle)",marginBottom:"12px",transition:"all 0.2s ease"},cardHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},cardTitle:{fontSize:"1rem",fontWeight:600,margin:0,display:"flex",alignItems:"center",gap:"10px"},statusBadge:{padding:"4px 10px",borderRadius:"20px",fontSize:"0.7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},dataGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px",marginTop:"12px"},dataItem:{background:"var(--color-bg-secondary)",borderRadius:"8px",padding:"10px",textAlign:"center"},dataLabel:{fontSize:"0.65rem",color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},dataValue:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.85rem",fontWeight:700,color:"var(--color-accent-cyan)"},button:{width:"100%",padding:"14px 20px",borderRadius:"12px",border:"none",background:"linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(170, 102, 255, 0.15))",color:"var(--color-text-primary)",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",transition:"all 0.2s ease",fontFamily:"inherit",marginTop:"8px"},icon:{fontSize:"1.25rem"},description:{fontSize:"0.8rem",color:"var(--color-text-secondary)",lineHeight:1.5},unavailableNote:{fontSize:"0.75rem",color:"var(--color-text-muted)",fontStyle:"italic",marginTop:"8px"}},ya=s=>{const e={unknown:{bg:"rgba(85, 85, 102, 0.3)",color:"#888"},checking:{bg:"rgba(255, 204, 0, 0.2)",color:"#ffcc00"},available:{bg:"rgba(0, 255, 136, 0.15)",color:"#00ff88"},unavailable:{bg:"rgba(255, 68, 102, 0.15)",color:"#ff4466"},granted:{bg:"rgba(0, 255, 136, 0.15)",color:"#00ff88"},denied:{bg:"rgba(255, 68, 102, 0.15)",color:"#ff4466"},prompt:{bg:"rgba(0, 212, 255, 0.15)",color:"#00d4ff"}};return{...be.statusBadge,background:e[s].bg,color:e[s].color}},Wi=(s,e=1)=>s===null?"—":s.toFixed(e);function x1(){const[s,e]=$.useState("unknown"),[i,a]=$.useState("unknown"),[l,c]=$.useState("unknown"),[f,d]=$.useState("unknown"),[m,p]=$.useState("unknown"),[v,g]=$.useState("unknown"),[x,M]=$.useState("unknown"),[T,A]=$.useState("unknown"),[S,_]=$.useState("unknown"),[D,L]=$.useState({motion:{acceleration:{x:null,y:null,z:null},rotationRate:{alpha:null,beta:null,gamma:null}},orientation:{alpha:null,beta:null,gamma:null,compass:null},geolocation:{latitude:null,longitude:null,accuracy:null},touch:{force:null,touches:0}});$.useEffect(()=>{g("vibrate"in navigator?"available":"unavailable"),M("bluetooth"in navigator?"available":"unavailable"),A("NDEFReader"in window?"available":"unavailable"),_("getBattery"in navigator?"available":"unavailable"),p("ontouchstart"in window?"available":"unavailable"),"DeviceMotionEvent"in window?e("prompt"):e("unavailable"),"DeviceOrientationEvent"in window?a("prompt"):a("unavailable"),"geolocation"in navigator?c("prompt"):c("unavailable"),"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices?d("prompt"):d("unavailable")},[]),$.useEffect(()=>{const b=H=>{const j=H.touches[0];L(K=>({...K,touch:{force:j?.force??null,touches:H.touches.length}}))},R=()=>{L(H=>({...H,touch:{force:null,touches:0}}))};return window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",b,{passive:!0}),window.addEventListener("touchend",R,{passive:!0}),()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",R)}},[]);const O=$.useCallback(async()=>{e("checking");try{typeof DeviceMotionEvent.requestPermission=="function"?await DeviceMotionEvent.requestPermission()==="granted"?(e("granted"),window.addEventListener("devicemotion",R=>{L(H=>({...H,motion:{acceleration:{x:R.acceleration?.x??null,y:R.acceleration?.y??null,z:R.acceleration?.z??null},rotationRate:{alpha:R.rotationRate?.alpha??null,beta:R.rotationRate?.beta??null,gamma:R.rotationRate?.gamma??null}}}))})):e("denied"):(e("granted"),window.addEventListener("devicemotion",b=>{L(R=>({...R,motion:{acceleration:{x:b.acceleration?.x??null,y:b.acceleration?.y??null,z:b.acceleration?.z??null},rotationRate:{alpha:b.rotationRate?.alpha??null,beta:b.rotationRate?.beta??null,gamma:b.rotationRate?.gamma??null}}}))}))}catch{e("denied")}},[]),N=$.useCallback(async()=>{a("checking");try{typeof DeviceOrientationEvent.requestPermission=="function"?await DeviceOrientationEvent.requestPermission()==="granted"?(a("granted"),window.addEventListener("deviceorientation",R=>{L(H=>({...H,orientation:{alpha:R.alpha,beta:R.beta,gamma:R.gamma,compass:R.webkitCompassHeading??null}}))})):a("denied"):(a("granted"),window.addEventListener("deviceorientation",b=>{L(R=>({...R,orientation:{alpha:b.alpha,beta:b.beta,gamma:b.gamma,compass:b.webkitCompassHeading??null}}))}))}catch{a("denied")}},[]),z=$.useCallback(()=>{c("checking"),navigator.geolocation.getCurrentPosition(b=>{c("granted"),L(R=>({...R,geolocation:{latitude:b.coords.latitude,longitude:b.coords.longitude,accuracy:b.coords.accuracy}}))},()=>{c("denied")},{enableHighAccuracy:!0})},[]),P=$.useCallback(async()=>{d("checking");try{const b=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});d("granted"),b.getTracks().forEach(R=>R.stop())}catch{d("denied")}},[]),U=b=>({animation:`fadeInUp 0.5s ease-out ${b*.08}s both`});return k.jsxs("div",{style:be.container,children:[k.jsxs(io,{to:"/",style:be.backLink,className:"hover:text-accent-cyan",children:[k.jsx(Up,{className:"w-4 h-4"}),"Back to Home"]}),k.jsxs("header",{style:be.header,children:[k.jsx("h1",{style:be.title,children:"Sensor Diagnostics"}),k.jsx("p",{style:be.subtitle,children:"iOS Web API Compatibility Test"})]}),k.jsxs("section",{style:{...be.section,...U(0)},children:[k.jsx("h2",{style:be.sectionTitle,children:"Requires Permission"}),k.jsxs("div",{style:{...be.card,...U(1)},children:[k.jsxs("div",{style:be.cardHeader,children:[k.jsxs("h3",{style:be.cardTitle,children:[k.jsx("span",{style:be.icon,children:"📱"}),"Motion (Accelerometer)"]}),k.jsx("span",{style:ya(s),children:s})]}),k.jsx("p",{style:be.description,children:"Device acceleration and rotation rate from gyroscope."}),s==="granted"&&k.jsxs("div",{style:be.dataGrid,children:[k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Accel X"}),k.jsx("div",{style:be.dataValue,children:Wi(D.motion.acceleration.x)})]}),k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Accel Y"}),k.jsx("div",{style:be.dataValue,children:Wi(D.motion.acceleration.y)})]}),k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Accel Z"}),k.jsx("div",{style:be.dataValue,children:Wi(D.motion.acceleration.z)})]})]}),(s==="prompt"||s==="unknown")&&k.jsx("button",{style:be.button,onClick:O,children:"Request Permission"})]}),k.jsxs("div",{style:{...be.card,...U(2)},children:[k.jsxs("div",{style:be.cardHeader,children:[k.jsxs("h3",{style:be.cardTitle,children:[k.jsx("span",{style:be.icon,children:"🧭"}),"Orientation & Compass"]}),k.jsx("span",{style:ya(i),children:i})]}),k.jsx("p",{style:be.description,children:"Device orientation angles and compass heading."}),i==="granted"&&k.jsxs("div",{style:be.dataGrid,children:[k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Alpha"}),k.jsxs("div",{style:be.dataValue,children:[Wi(D.orientation.alpha),"°"]})]}),k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Beta"}),k.jsxs("div",{style:be.dataValue,children:[Wi(D.orientation.beta),"°"]})]}),k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Compass"}),k.jsxs("div",{style:be.dataValue,children:[Wi(D.orientation.compass),"°"]})]})]}),(i==="prompt"||i==="unknown")&&k.jsx("button",{style:be.button,onClick:N,children:"Request Permission"})]}),k.jsxs("div",{style:{...be.card,...U(3)},children:[k.jsxs("div",{style:be.cardHeader,children:[k.jsxs("h3",{style:be.cardTitle,children:[k.jsx("span",{style:be.icon,children:"📍"}),"Geolocation"]}),k.jsx("span",{style:ya(l),children:l})]}),k.jsx("p",{style:be.description,children:"GPS coordinates and location accuracy."}),l==="granted"&&k.jsxs("div",{style:be.dataGrid,children:[k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Lat"}),k.jsx("div",{style:be.dataValue,children:Wi(D.geolocation.latitude,4)})]}),k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Lng"}),k.jsx("div",{style:be.dataValue,children:Wi(D.geolocation.longitude,4)})]}),k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Accuracy"}),k.jsxs("div",{style:be.dataValue,children:[Wi(D.geolocation.accuracy,0),"m"]})]})]}),(l==="prompt"||l==="unknown")&&k.jsx("button",{style:be.button,onClick:z,children:"Request Permission"})]}),k.jsxs("div",{style:{...be.card,...U(4)},children:[k.jsxs("div",{style:be.cardHeader,children:[k.jsxs("h3",{style:be.cardTitle,children:[k.jsx("span",{style:be.icon,children:"📷"}),"Camera & Microphone"]}),k.jsx("span",{style:ya(f),children:f})]}),k.jsx("p",{style:be.description,children:"WebRTC getUserMedia for video and audio capture."}),(f==="prompt"||f==="unknown")&&k.jsx("button",{style:be.button,onClick:P,children:"Request Permission"})]})]}),k.jsxs("section",{style:{...be.section,...U(5)},children:[k.jsx("h2",{style:be.sectionTitle,children:"Always Available"}),k.jsxs("div",{style:{...be.card,...U(6)},children:[k.jsxs("div",{style:be.cardHeader,children:[k.jsxs("h3",{style:be.cardTitle,children:[k.jsx("span",{style:be.icon,children:"👆"}),"Touch & Force"]}),k.jsx("span",{style:ya(m),children:m})]}),k.jsx("p",{style:be.description,children:"Touch events with 3D Touch / Haptic Touch pressure."}),m==="available"&&k.jsxs("div",{style:be.dataGrid,children:[k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Touches"}),k.jsx("div",{style:be.dataValue,children:D.touch.touches})]}),k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Force"}),k.jsx("div",{style:be.dataValue,children:Wi(D.touch.force,2)})]}),k.jsxs("div",{style:be.dataItem,children:[k.jsx("div",{style:be.dataLabel,children:"Status"}),k.jsx("div",{style:be.dataValue,children:D.touch.touches>0?"Active":"Idle"})]})]}),k.jsx("p",{style:be.unavailableNote,children:"Touch anywhere to see live data"})]})]}),k.jsxs("section",{style:{...be.section,...U(7)},children:[k.jsx("h2",{style:be.sectionTitle,children:"Not Supported on iOS Safari"}),k.jsxs("div",{style:{...be.card,opacity:.7,...U(8)},children:[k.jsxs("div",{style:be.cardHeader,children:[k.jsxs("h3",{style:be.cardTitle,children:[k.jsx("span",{style:be.icon,children:"📳"}),"Vibration API"]}),k.jsx("span",{style:ya(v),children:v})]}),k.jsx("p",{style:be.description,children:"Haptic feedback through navigator.vibrate()"}),k.jsx("p",{style:be.unavailableNote,children:"Apple declined due to privacy concerns"})]}),k.jsxs("div",{style:{...be.card,opacity:.7,...U(9)},children:[k.jsxs("div",{style:be.cardHeader,children:[k.jsxs("h3",{style:be.cardTitle,children:[k.jsx("span",{style:be.icon,children:"📶"}),"Web Bluetooth"]}),k.jsx("span",{style:ya(x),children:x})]}),k.jsx("p",{style:be.description,children:"Connect to nearby Bluetooth devices"}),k.jsx("p",{style:be.unavailableNote,children:"Apple declined due to fingerprinting risks"})]}),k.jsxs("div",{style:{...be.card,opacity:.7,...U(10)},children:[k.jsxs("div",{style:be.cardHeader,children:[k.jsxs("h3",{style:be.cardTitle,children:[k.jsx("span",{style:be.icon,children:"📡"}),"Web NFC"]}),k.jsx("span",{style:ya(T),children:T})]}),k.jsx("p",{style:be.description,children:"Read/write NFC tags"}),k.jsx("p",{style:be.unavailableNote,children:"Not exposed to web apps on iOS"})]}),k.jsxs("div",{style:{...be.card,opacity:.7,...U(11)},children:[k.jsxs("div",{style:be.cardHeader,children:[k.jsxs("h3",{style:be.cardTitle,children:[k.jsx("span",{style:be.icon,children:"🔋"}),"Battery Status"]}),k.jsx("span",{style:ya(S),children:S})]}),k.jsx("p",{style:be.description,children:"Battery level and charging status"}),k.jsx("p",{style:be.unavailableNote,children:"Apple declined due to fingerprinting risks"})]})]}),k.jsxs("footer",{style:{textAlign:"center",marginTop:"40px",color:"var(--color-text-muted)",fontSize:"0.75rem",...U(12)},children:[k.jsx("p",{children:"Built for iOS Safari sensor testing"}),k.jsx("p",{style:{fontFamily:"'JetBrains Mono', monospace",marginTop:"4px"},children:new Date().toLocaleDateString()})]})]})}const Lp="182",y1=0,Xv=1,S1=2,pu=1,M1=2,hl=3,vr=0,Jn=1,Aa=2,wa=0,Zs=1,Ch=2,Wv=3,qv=4,b1=5,Xr=100,E1=101,T1=102,A1=103,R1=104,C1=200,w1=201,D1=202,U1=203,wh=204,Dh=205,L1=206,N1=207,O1=208,P1=209,F1=210,z1=211,B1=212,I1=213,H1=214,Uh=0,Lh=1,Nh=2,Qs=3,Oh=4,Ph=5,Fh=6,zh=7,Sx=0,G1=1,V1=2,Qi=0,Mx=1,bx=2,Ex=3,Tx=4,Ax=5,Rx=6,Cx=7,wx=300,Zr=301,Js=302,Bh=303,Ih=304,Ru=306,Hh=1e3,Ra=1001,Gh=1002,On=1003,k1=1004,kc=1005,In=1006,jd=1007,jr=1008,Ti=1009,Dx=1010,Ux=1011,vl=1012,Np=1013,$i=1014,Yi=1015,La=1016,Op=1017,Pp=1018,_l=1020,Lx=35902,Nx=35899,Ox=1021,Px=1022,Ii=1023,Na=1026,Yr=1027,Fx=1028,Fp=1029,$s=1030,zp=1031,Bp=1033,mu=33776,gu=33777,vu=33778,_u=33779,Vh=35840,kh=35841,Xh=35842,Wh=35843,qh=36196,jh=37492,Yh=37496,Zh=37488,Kh=37489,Qh=37490,Jh=37491,$h=37808,ep=37809,tp=37810,np=37811,ip=37812,ap=37813,rp=37814,sp=37815,op=37816,lp=37817,cp=37818,up=37819,fp=37820,dp=37821,hp=36492,pp=36494,mp=36495,gp=36283,vp=36284,_p=36285,xp=36286,X1=3200,W1=0,q1=1,mr="",bi="srgb",eo="srgb-linear",Mu="linear",kt="srgb",Ps=7680,jv=519,j1=512,Y1=513,Z1=514,Ip=515,K1=516,Q1=517,Hp=518,J1=519,Yv=35044,Zv="300 es",Zi=2e3,bu=2001;function zx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Eu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $1(){const s=Eu("canvas");return s.style.display="block",s}const Kv={};function Qv(...s){const e="THREE."+s.shift();console.log(e,...s)}function ct(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Lt(...s){const e="THREE."+s.shift();console.error(e,...s)}function xl(...s){const e=s.join(" ");e in Kv||(Kv[e]=!0,ct(...s))}function eT(s,e,i){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}class so{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=Math.PI/180,yp=180/Math.PI;function El(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[a&255]+zn[a>>8&255]+zn[a>>16&255]+zn[a>>24&255]).toLowerCase()}function Tt(s,e,i){return Math.max(e,Math.min(i,s))}function tT(s,e){return(s%e+e)%e}function Zd(s,e,i){return(1-i)*s+i*e}function rl(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(e=0,i=0){Xt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,l=e.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tl{constructor(e=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=l}static slerpFlat(e,i,a,l,c,f,d){let m=a[l+0],p=a[l+1],v=a[l+2],g=a[l+3],x=c[f+0],M=c[f+1],T=c[f+2],A=c[f+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(d>=1){e[i+0]=x,e[i+1]=M,e[i+2]=T,e[i+3]=A;return}if(g!==A||m!==x||p!==M||v!==T){let S=m*x+p*M+v*T+g*A;S<0&&(x=-x,M=-M,T=-T,A=-A,S=-S);let _=1-d;if(S<.9995){const D=Math.acos(S),L=Math.sin(D);_=Math.sin(_*D)/L,d=Math.sin(d*D)/L,m=m*_+x*d,p=p*_+M*d,v=v*_+T*d,g=g*_+A*d}else{m=m*_+x*d,p=p*_+M*d,v=v*_+T*d,g=g*_+A*d;const D=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=D,p*=D,v*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,a,l,c,f){const d=a[l],m=a[l+1],p=a[l+2],v=a[l+3],g=c[f],x=c[f+1],M=c[f+2],T=c[f+3];return e[i]=d*T+v*g+m*M-p*x,e[i+1]=m*T+v*x+p*g-d*M,e[i+2]=p*T+v*M+d*x-m*g,e[i+3]=v*T-d*g-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,l){return this._x=e,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(a/2),v=d(l/2),g=d(c/2),x=m(a/2),M=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*M*T,this._y=p*M*g-x*v*T,this._z=p*v*T+x*M*g,this._w=p*v*g-x*M*T;break;case"YXZ":this._x=x*v*g+p*M*T,this._y=p*M*g-x*v*T,this._z=p*v*T-x*M*g,this._w=p*v*g+x*M*T;break;case"ZXY":this._x=x*v*g-p*M*T,this._y=p*M*g+x*v*T,this._z=p*v*T+x*M*g,this._w=p*v*g-x*M*T;break;case"ZYX":this._x=x*v*g-p*M*T,this._y=p*M*g+x*v*T,this._z=p*v*T-x*M*g,this._w=p*v*g+x*M*T;break;case"YZX":this._x=x*v*g+p*M*T,this._y=p*M*g+x*v*T,this._z=p*v*T-x*M*g,this._w=p*v*g-x*M*T;break;case"XZY":this._x=x*v*g-p*M*T,this._y=p*M*g-x*v*T,this._z=p*v*T+x*M*g,this._w=p*v*g+x*M*T;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=a+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(a>d&&a>g){const M=2*Math.sqrt(1+a-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-a-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-a-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,l=e._y,c=e._z,f=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=a*v+f*d+l*p-c*m,this._y=l*v+f*m+c*d-a*p,this._z=c*v+f*p+a*m-l*d,this._w=f*v-a*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let a=e._x,l=e._y,c=e._z,f=e._w,d=this.dot(e);d<0&&(a=-a,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,i=0,a=0){ce.prototype.isVector3=!0,this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Jv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Jv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,a=this.y,l=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*a),v=2*(d*i-c*l),g=2*(c*a-f*i);return this.x=i+m*p+f*g-d*v,this.y=a+m*v+d*p-c*g,this.z=l+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,l=e.y,c=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-a*m,this.z=a*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Kd.copy(this).projectOnVector(e),this.sub(Kd)}reflect(e){return this.sub(Kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return i*i+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const l=Math.sin(i)*e;return this.x=l*Math.sin(a),this.y=Math.cos(i)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kd=new ce,Jv=new Tl;class mt{constructor(e,i,a,l,c,f,d,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,d,m,p)}set(e,i,a,l,c,f,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=a,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],d=a[3],m=a[6],p=a[1],v=a[4],g=a[7],x=a[2],M=a[5],T=a[8],A=l[0],S=l[3],_=l[6],D=l[1],L=l[4],O=l[7],N=l[2],z=l[5],P=l[8];return c[0]=f*A+d*D+m*N,c[3]=f*S+d*L+m*z,c[6]=f*_+d*O+m*P,c[1]=p*A+v*D+g*N,c[4]=p*S+v*L+g*z,c[7]=p*_+v*O+g*P,c[2]=x*A+M*D+T*N,c[5]=x*S+M*L+T*z,c[8]=x*_+M*O+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*d*p-a*c*v+a*d*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*f-d*p,x=d*m-v*c,M=p*c-f*m,T=i*g+a*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=g*A,e[1]=(l*p-v*a)*A,e[2]=(d*a-l*f)*A,e[3]=x*A,e[4]=(v*i-l*m)*A,e[5]=(l*c-d*i)*A,e[6]=M*A,e[7]=(a*m-p*i)*A,e[8]=(f*i-a*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Qd.makeScale(e,i)),this}rotate(e){return this.premultiply(Qd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qd=new mt,$v=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e_=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nT(){const s={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===kt&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=Ks(l.r),l.g=Ks(l.g),l.b=Ks(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===mr?Mu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return xl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return xl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[eo]:{primaries:e,whitePoint:a,transfer:Mu,toXYZ:$v,fromXYZ:e_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:e,whitePoint:a,transfer:kt,toXYZ:$v,fromXYZ:e_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),s}const Ct=nT();function Da(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class iT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Fs===void 0&&(Fs=Eu("canvas")),Fs.width=e.width,Fs.height=e.height;const l=Fs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=Fs}return a.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Eu("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Da(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(Da(i[a]/255)*255):i[a]=Da(i[a]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aT=0;class Gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=El(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Jd(l[f].image)):c.push(Jd(l[f]))}else c=Jd(l);a.url=c}return i||(e.images[this.uuid]=a),a}}function Jd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let rT=0;const $d=new ce;class Vn extends so{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,a=Ra,l=Ra,c=In,f=jr,d=Ii,m=Ti,p=Vn.DEFAULT_ANISOTROPY,v=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=El(),this.name="",this.source=new Gp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($d).x}get height(){return this.source.getSize($d).y}get depth(){return this.source.getSize($d).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const a=e[i];if(a===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case Ra:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case Ra:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=wx;Vn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,i=0,a=0,l=1){cn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,l){return this.x=e,this.y=i,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],M=m[5],T=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-A)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+A)<.1&&Math.abs(T+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,O=(M+1)/2,N=(_+1)/2,z=(v+x)/4,P=(g+A)/4,U=(T+S)/4;return L>O&&L>N?L<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(L),l=z/a,c=P/a):O>N?O<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),a=z/l,c=U/l):N<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),a=P/c,l=U/c),this.set(a,l,c,i),this}let D=Math.sqrt((S-T)*(S-T)+(g-A)*(g-A)+(x-v)*(x-v));return Math.abs(D)<.001&&(D=1),this.x=(S-T)/D,this.y=(g-A)/D,this.z=(x-v)/D,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sT extends so{constructor(e=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=a.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i);const l={width:e,height:i,depth:a.depth},c=new Vn(l);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Gp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends sT{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class Bx extends Vn{constructor(e=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oT extends Vn{constructor(e=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al{constructor(e=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(Oi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(Oi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=Oi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Oi):Oi.fromBufferAttribute(c,f),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Xc.copy(a.boundingBox)),Xc.applyMatrix4(e.matrixWorld),this.union(Xc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sl),Wc.subVectors(this.max,sl),zs.subVectors(e.a,sl),Bs.subVectors(e.b,sl),Is.subVectors(e.c,sl),cr.subVectors(Bs,zs),ur.subVectors(Is,Bs),zr.subVectors(zs,Is);let i=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-zr.z,zr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,zr.z,0,-zr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-zr.y,zr.x,0];return!eh(i,zs,Bs,Is,Wc)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,zs,Bs,Is,Wc))?!1:(qc.crossVectors(cr,ur),i=[qc.x,qc.y,qc.z],eh(i,zs,Bs,Is,Wc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sa=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Oi=new ce,Xc=new Al,zs=new ce,Bs=new ce,Is=new ce,cr=new ce,ur=new ce,zr=new ce,sl=new ce,Wc=new ce,qc=new ce,Br=new ce;function eh(s,e,i,a,l){for(let c=0,f=s.length-3;c<=f;c+=3){Br.fromArray(s,c);const d=l.x*Math.abs(Br.x)+l.y*Math.abs(Br.y)+l.z*Math.abs(Br.z),m=e.dot(Br),p=i.dot(Br),v=a.dot(Br);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const lT=new Al,ol=new ce,th=new ce;class Cu{constructor(e=new ce,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):lT.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(ol,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(th)),this.expandByPoint(ol.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ma=new ce,nh=new ce,jc=new ce,fr=new ce,ih=new ce,Yc=new ce,ah=new ce;class Ix{constructor(e=new ce,i=new ce(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(e))}distanceSqToSegment(e,i,a,l){nh.copy(e).add(i).multiplyScalar(.5),jc.copy(i).sub(e).normalize(),fr.copy(this.origin).sub(nh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(jc),d=fr.dot(this.direction),m=-fr.dot(jc),p=fr.lengthSq(),v=Math.abs(1-f*f);let g,x,M,T;if(v>0)if(g=f*m-d,x=f*d-m,T=c*v,g>=0)if(x>=-T)if(x<=T){const A=1/v;g*=A,x*=A,M=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x<=-T?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=T?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(nh).addScaledVector(jc,x),M}intersectSphere(e,i){Ma.subVectors(e.center,this.origin);const a=Ma.dot(this.direction),l=Ma.dot(Ma)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=a-f,m=a+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,l,c,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(a=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(a=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),a>m||d>l)||((d>a||a!==a)&&(a=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(e){return this.intersectBox(e,Ma)!==null}intersectTriangle(e,i,a,l,c){ih.subVectors(i,e),Yc.subVectors(a,e),ah.crossVectors(ih,Yc);let f=this.direction.dot(ah),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fr.subVectors(this.origin,e);const m=d*this.direction.dot(Yc.crossVectors(fr,Yc));if(m<0)return null;const p=d*this.direction.dot(ih.cross(fr));if(p<0||m+p>f)return null;const v=-d*fr.dot(ah);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,i,a,l,c,f,d,m,p,v,g,x,M,T,A,S){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,d,m,p,v,g,x,M,T,A,S)}set(e,i,a,l,c,f,d,m,p,v,g,x,M,T,A,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=a,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=M,_[7]=T,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,a=e.elements,l=1/Hs.setFromMatrixColumn(e,0).length(),c=1/Hs.setFromMatrixColumn(e,1).length(),f=1/Hs.setFromMatrixColumn(e,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),d=Math.sin(a),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,M=f*g,T=d*v,A=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+T*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=T+M*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*v,M=m*g,T=p*v,A=p*g;i[0]=x+A*d,i[4]=T*d-M,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=M*d-T,i[6]=A+x*d,i[10]=f*m}else if(e.order==="ZXY"){const x=m*v,M=m*g,T=p*v,A=p*g;i[0]=x-A*d,i[4]=-f*g,i[8]=T+M*d,i[1]=M+T*d,i[5]=f*v,i[9]=A-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const x=f*v,M=f*g,T=d*v,A=d*g;i[0]=m*v,i[4]=T*p-M,i[8]=x*p+A,i[1]=m*g,i[5]=A*p+x,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,T=d*m,A=d*p;i[0]=m*v,i[4]=A-x*g,i[8]=T*g+M,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*g+T,i[10]=x-A*g}else if(e.order==="XZY"){const x=f*m,M=f*p,T=d*m,A=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+A,i[5]=f*v,i[9]=M*g-T,i[2]=T*g-M,i[6]=d*v,i[10]=A*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cT,e,uT)}lookAt(e,i,a){const l=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),dr.crossVectors(a,oi),dr.lengthSq()===0&&(Math.abs(a.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),dr.crossVectors(a,oi)),dr.normalize(),Zc.crossVectors(oi,dr),l[0]=dr.x,l[4]=Zc.x,l[8]=oi.x,l[1]=dr.y,l[5]=Zc.y,l[9]=oi.y,l[2]=dr.z,l[6]=Zc.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],d=a[4],m=a[8],p=a[12],v=a[1],g=a[5],x=a[9],M=a[13],T=a[2],A=a[6],S=a[10],_=a[14],D=a[3],L=a[7],O=a[11],N=a[15],z=l[0],P=l[4],U=l[8],b=l[12],R=l[1],H=l[5],j=l[9],K=l[13],te=l[2],re=l[6],F=l[10],G=l[14],W=l[3],Se=l[7],xe=l[11],B=l[15];return c[0]=f*z+d*R+m*te+p*W,c[4]=f*P+d*H+m*re+p*Se,c[8]=f*U+d*j+m*F+p*xe,c[12]=f*b+d*K+m*G+p*B,c[1]=v*z+g*R+x*te+M*W,c[5]=v*P+g*H+x*re+M*Se,c[9]=v*U+g*j+x*F+M*xe,c[13]=v*b+g*K+x*G+M*B,c[2]=T*z+A*R+S*te+_*W,c[6]=T*P+A*H+S*re+_*Se,c[10]=T*U+A*j+S*F+_*xe,c[14]=T*b+A*K+S*G+_*B,c[3]=D*z+L*R+O*te+N*W,c[7]=D*P+L*H+O*re+N*Se,c[11]=D*U+L*j+O*F+N*xe,c[15]=D*b+L*K+O*G+N*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],M=e[14],T=e[3],A=e[7],S=e[11],_=e[15],D=m*M-p*x,L=d*M-p*g,O=d*x-m*g,N=f*M-p*v,z=f*x-m*v,P=f*g-d*v;return i*(A*D-S*L+_*O)-a*(T*D-S*N+_*z)+l*(T*L-A*N+_*P)-c*(T*O-A*z+S*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],M=e[11],T=e[12],A=e[13],S=e[14],_=e[15],D=g*S*p-A*x*p+A*m*M-d*S*M-g*m*_+d*x*_,L=T*x*p-v*S*p-T*m*M+f*S*M+v*m*_-f*x*_,O=v*A*p-T*g*p+T*d*M-f*A*M-v*d*_+f*g*_,N=T*g*m-v*A*m-T*d*x+f*A*x+v*d*S-f*g*S,z=i*D+a*L+l*O+c*N;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return e[0]=D*P,e[1]=(A*x*c-g*S*c-A*l*M+a*S*M+g*l*_-a*x*_)*P,e[2]=(d*S*c-A*m*c+A*l*p-a*S*p-d*l*_+a*m*_)*P,e[3]=(g*m*c-d*x*c-g*l*p+a*x*p+d*l*M-a*m*M)*P,e[4]=L*P,e[5]=(v*S*c-T*x*c+T*l*M-i*S*M-v*l*_+i*x*_)*P,e[6]=(T*m*c-f*S*c-T*l*p+i*S*p+f*l*_-i*m*_)*P,e[7]=(f*x*c-v*m*c+v*l*p-i*x*p-f*l*M+i*m*M)*P,e[8]=O*P,e[9]=(T*g*c-v*A*c-T*a*M+i*A*M+v*a*_-i*g*_)*P,e[10]=(f*A*c-T*d*c+T*a*p-i*A*p-f*a*_+i*d*_)*P,e[11]=(v*d*c-f*g*c-v*a*p+i*g*p+f*a*M-i*d*M)*P,e[12]=N*P,e[13]=(v*A*l-T*g*l+T*a*x-i*A*x-v*a*S+i*g*S)*P,e[14]=(T*d*l-f*A*l-T*a*m+i*A*m+f*a*S-i*d*S)*P,e[15]=(f*g*l-v*d*l+v*a*m-i*g*m-f*a*x+i*d*x)*P,this}scale(e){const i=this.elements,a=e.x,l=e.y,c=e.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=e.x,d=e.y,m=e.z,p=c*f,v=c*d;return this.set(p*f+a,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+a,v*m-l*f,0,p*m-l*d,v*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,a){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,v=f+f,g=d+d,x=c*p,M=c*v,T=c*g,A=f*v,S=f*g,_=d*g,D=m*p,L=m*v,O=m*g,N=a.x,z=a.y,P=a.z;return l[0]=(1-(A+_))*N,l[1]=(M+O)*N,l[2]=(T-L)*N,l[3]=0,l[4]=(M-O)*z,l[5]=(1-(x+_))*z,l[6]=(S+D)*z,l[7]=0,l[8]=(T+L)*P,l[9]=(S-D)*P,l[10]=(1-(x+A))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,a){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return a.set(1,1,1),i.identity(),this;let c=Hs.set(l[0],l[1],l[2]).length();const f=Hs.set(l[4],l[5],l[6]).length(),d=Hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Pi.copy(this);const p=1/c,v=1/f,g=1/d;return Pi.elements[0]*=p,Pi.elements[1]*=p,Pi.elements[2]*=p,Pi.elements[4]*=v,Pi.elements[5]*=v,Pi.elements[6]*=v,Pi.elements[8]*=g,Pi.elements[9]*=g,Pi.elements[10]*=g,i.setFromRotationMatrix(Pi),a.x=c,a.y=f,a.z=d,this}makePerspective(e,i,a,l,c,f,d=Zi,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(a-l),x=(i+e)/(i-e),M=(a+l)/(a-l);let T,A;if(m)T=c/(f-c),A=f*c/(f-c);else if(d===Zi)T=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===bu)T=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,a,l,c,f,d=Zi,m=!1){const p=this.elements,v=2/(i-e),g=2/(a-l),x=-(i+e)/(i-e),M=-(a+l)/(a-l);let T,A;if(m)T=1/(f-c),A=f/(f-c);else if(d===Zi)T=-2/(f-c),A=-(f+c)/(f-c);else if(d===bu)T=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}}const Hs=new ce,Pi=new un,cT=new ce(0,0,0),uT=new ce(1,1,1),dr=new ce,Zc=new ce,oi=new ce,t_=new un,n_=new Tl;class Oa{constructor(e=0,i=0,a=0,l=Oa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,l=this._order){return this._x=e,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return t_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t_,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return n_.setFromEuler(this),this.setFromQuaternion(n_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oa.DEFAULT_ORDER="XYZ";class Hx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fT=0;const i_=new ce,Gs=new Tl,ba=new un,Kc=new ce,ll=new ce,dT=new ce,hT=new Tl,a_=new ce(1,0,0),r_=new ce(0,1,0),s_=new ce(0,0,1),o_={type:"added"},pT={type:"removed"},Vs={type:"childadded",child:null},rh={type:"childremoved",child:null};class $n extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=El(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new ce,i=new Oa,a=new Tl,l=new ce(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new mt}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(a_,e)}rotateY(e){return this.rotateOnAxis(r_,e)}rotateZ(e){return this.rotateOnAxis(s_,e)}translateOnAxis(e,i){return i_.copy(e).applyQuaternion(this.quaternion),this.position.add(i_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(a_,e)}translateY(e){return this.translateOnAxis(r_,e)}translateZ(e){return this.translateOnAxis(s_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?Kc.copy(e):Kc.set(e,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(ll,Kc,this.up):ba.lookAt(Kc,ll,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),Gs.setFromRotationMatrix(ba),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(o_),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(pT),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(o_),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,e,dT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,hT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),T=f(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),v.length>0&&(a.images=v),g.length>0&&(a.shapes=g),x.length>0&&(a.skeletons=x),M.length>0&&(a.animations=M),T.length>0&&(a.nodes=T)}return a.object=l,a;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}$n.DEFAULT_UP=new ce(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new ce,Ea=new ce,sh=new ce,Ta=new ce,ks=new ce,Xs=new ce,l_=new ce,oh=new ce,lh=new ce,ch=new ce,uh=new cn,fh=new cn,dh=new cn;class Bi{constructor(e=new ce,i=new ce,a=new ce){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,l){l.subVectors(a,i),Fi.subVectors(e,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,a,l,c){Fi.subVectors(l,i),Ea.subVectors(a,i),sh.subVectors(e,i);const f=Fi.dot(Fi),d=Fi.dot(Ea),m=Fi.dot(sh),p=Ea.dot(Ea),v=Ea.dot(sh),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-d*v)*x,T=(f*v-d*m)*x;return c.set(1-M-T,T,M)}static containsPoint(e,i,a,l){return this.getBarycoord(e,i,a,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,i,a,l,c,f,d,m){return this.getBarycoord(e,i,a,l,Ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ta.x),m.addScaledVector(f,Ta.y),m.addScaledVector(d,Ta.z),m)}static getInterpolatedAttribute(e,i,a,l,c,f){return uh.setScalar(0),fh.setScalar(0),dh.setScalar(0),uh.fromBufferAttribute(e,i),fh.fromBufferAttribute(e,a),dh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(uh,c.x),f.addScaledVector(fh,c.y),f.addScaledVector(dh,c.z),f}static isFrontFacing(e,i,a,l){return Fi.subVectors(a,i),Ea.subVectors(e,i),Fi.cross(Ea).dot(l)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,l){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,a,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Fi.cross(Ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,l,c){return Bi.getInterpolation(e,this.a,this.b,this.c,i,a,l,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,l=this.b,c=this.c;let f,d;ks.subVectors(l,a),Xs.subVectors(c,a),oh.subVectors(e,a);const m=ks.dot(oh),p=Xs.dot(oh);if(m<=0&&p<=0)return i.copy(a);lh.subVectors(e,l);const v=ks.dot(lh),g=Xs.dot(lh);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(a).addScaledVector(ks,f);ch.subVectors(e,c);const M=ks.dot(ch),T=Xs.dot(ch);if(T>=0&&M<=T)return i.copy(c);const A=M*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(a).addScaledVector(Xs,d);const S=v*T-M*g;if(S<=0&&g-v>=0&&M-T>=0)return l_.subVectors(c,l),d=(g-v)/(g-v+(M-T)),i.copy(l).addScaledVector(l_,d);const _=1/(S+A+x);return f=A*_,d=x*_,i.copy(a).addScaledVector(ks,f).addScaledVector(Xs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},Qc={h:0,s:0,l:0};function hh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class wt{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,a,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=a,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,a,l=Ct.workingColorSpace){if(e=tT(e,1),i=Tt(i,0,1),a=Tt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=hh(f,c,e+1/3),this.g=hh(f,c,e),this.b=hh(f,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=bi){function a(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=bi){const a=Gx[e.toLowerCase()];return a!==void 0?this.setHex(a,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return Ct.workingToColorSpace(Bn.copy(this),e),Math.round(Tt(Bn.r*255,0,255))*65536+Math.round(Tt(Bn.g*255,0,255))*256+Math.round(Tt(Bn.b*255,0,255))}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(Bn.copy(this),i);const a=Bn.r,l=Bn.g,c=Bn.b,f=Math.max(a,l,c),d=Math.min(a,l,c);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=v<=.5?g/(f+d):g/(2-f-d),f){case a:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-a)/g+2;break;case c:m=(a-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=bi){Ct.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,a=Bn.g,l=Bn.b;return e!==bi?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,i,a){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+i,hr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(hr),e.getHSL(Qc);const a=Zd(hr.h,Qc.h,i),l=Zd(hr.s,Qc.s,i),c=Zd(hr.l,Qc.l,i);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new wt;wt.NAMES=Gx;let mT=0;class Rl extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=El(),this.name="",this.type="Material",this.blending=Zs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Dh,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(a.blending=this.blending),this.side!==vr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==wh&&(a.blendSrc=this.blendSrc),this.blendDst!==Dh&&(a.blendDst=this.blendDst),this.blendEquation!==Xr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wr extends Rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oa,this.combine=Sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new ce,Jc=new Xt;let gT=0;class ui{constructor(e,i,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=Yv,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Jc.fromBufferAttribute(this,i),Jc.applyMatrix3(e),this.setXY(i,Jc.x,Jc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=rl(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=Qn(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=rl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=rl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=rl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=rl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),a=Qn(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,l){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),a=Qn(a,this.array),l=Qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),a=Qn(a,this.array),l=Qn(l,this.array),c=Qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yv&&(e.usage=this.usage),e}}class Vx extends ui{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class kx extends ui{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class kn extends ui{constructor(e,i,a){super(new Float32Array(e),i,a)}}let vT=0;const Mi=new un,ph=new $n,Ws=new ce,li=new Al,cl=new Al,bn=new ce;class fi extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=El(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zx(e)?kx:Vx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new mt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,a){return Mi.makeTranslation(e,i,a),this.applyMatrix4(Mi),this}scale(e,i,a){return Mi.makeScale(e,i,a),this.applyMatrix4(Mi),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new kn(a,3))}else{const a=Math.min(e.length,i.count);for(let l=0;l<a;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];li.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const a=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];cl.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(li.min,cl.min),li.expandByPoint(bn),bn.addVectors(li.max,cl.max),li.expandByPoint(bn)):(li.expandByPoint(cl.min),li.expandByPoint(cl.max))}li.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)bn.fromBufferAttribute(d,p),m&&(Ws.fromBufferAttribute(e,p),bn.add(Ws)),l=Math.max(l,a.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let U=0;U<a.count;U++)d[U]=new ce,m[U]=new ce;const p=new ce,v=new ce,g=new ce,x=new Xt,M=new Xt,T=new Xt,A=new ce,S=new ce;function _(U,b,R){p.fromBufferAttribute(a,U),v.fromBufferAttribute(a,b),g.fromBufferAttribute(a,R),x.fromBufferAttribute(c,U),M.fromBufferAttribute(c,b),T.fromBufferAttribute(c,R),v.sub(p),g.sub(p),M.sub(x),T.sub(x);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(A.copy(v).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(H),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(H),d[U].add(A),d[b].add(A),d[R].add(A),m[U].add(S),m[b].add(S),m[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let U=0,b=D.length;U<b;++U){const R=D[U],H=R.start,j=R.count;for(let K=H,te=H+j;K<te;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new ce,O=new ce,N=new ce,z=new ce;function P(U){N.fromBufferAttribute(l,U),z.copy(N);const b=d[U];L.copy(b),L.sub(N.multiplyScalar(N.dot(b))).normalize(),O.crossVectors(z,b);const H=O.dot(m[U])<0?-1:1;f.setXYZW(U,L.x,L.y,L.z,H)}for(let U=0,b=D.length;U<b;++U){const R=D[U],H=R.start,j=R.count;for(let K=H,te=H+j;K<te;K+=3)P(e.getX(K+0)),P(e.getX(K+1)),P(e.getX(K+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ui(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let x=0,M=a.count;x<M;x++)a.setXYZ(x,0,0,0);const l=new ce,c=new ce,f=new ce,d=new ce,m=new ce,p=new ce,v=new ce,g=new ce;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(a,T),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,S),d.add(v),m.add(v),p.add(v),a.setXYZ(T,d.x,d.y,d.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),a.setXYZ(x+0,v.x,v.y,v.z),a.setXYZ(x+1,v.x,v.y,v.z),a.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let M=0,T=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*v;for(let _=0;_<v;_++)x[T++]=p[M++]}return new ui(x,v,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fi,a=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,a);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],M=e(x,a);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c_=new un,Ir=new Ix,$c=new Cu,u_=new ce,eu=new ce,tu=new ce,nu=new ce,mh=new ce,iu=new ce,f_=new ce,au=new ce;class ci extends $n{constructor(e=new fi,i=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){iu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(mh.fromBufferAttribute(g,e),f?iu.addScaledVector(mh,v):iu.addScaledVector(mh.sub(i),v))}i.add(iu)}return i}raycast(e,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),$c.copy(a.boundingSphere),$c.applyMatrix4(c),Ir.copy(e.ray).recast(e.near),!($c.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere($c,u_)===null||Ir.origin.distanceToSquared(u_)>(e.far-e.near)**2))&&(c_.copy(c).invert(),Ir.copy(e.ray).applyMatrix4(c_),!(a.boundingBox!==null&&Ir.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,Ir)))}_computeIntersections(e,i,a){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,A=x.length;T<A;T++){const S=x[T],_=f[S.materialIndex],D=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let O=D,N=L;O<N;O+=3){const z=d.getX(O),P=d.getX(O+1),U=d.getX(O+2);l=ru(this,_,e,a,p,v,g,z,P,U),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=T,_=A;S<_;S+=3){const D=d.getX(S),L=d.getX(S+1),O=d.getX(S+2);l=ru(this,f,e,a,p,v,g,D,L,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,A=x.length;T<A;T++){const S=x[T],_=f[S.materialIndex],D=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let O=D,N=L;O<N;O+=3){const z=O,P=O+1,U=O+2;l=ru(this,_,e,a,p,v,g,z,P,U),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=T,_=A;S<_;S+=3){const D=S,L=S+1,O=S+2;l=ru(this,f,e,a,p,v,g,D,L,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function _T(s,e,i,a,l,c,f,d){let m;if(e.side===Jn?m=a.intersectTriangle(f,c,l,!0,d):m=a.intersectTriangle(l,c,f,e.side===vr,d),m===null)return null;au.copy(d),au.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(au);return p<i.near||p>i.far?null:{distance:p,point:au.clone(),object:s}}function ru(s,e,i,a,l,c,f,d,m,p){s.getVertexPosition(d,eu),s.getVertexPosition(m,tu),s.getVertexPosition(p,nu);const v=_T(s,e,i,a,eu,tu,nu,f_);if(v){const g=new ce;Bi.getBarycoord(f_,eu,tu,nu,g),l&&(v.uv=Bi.getInterpolatedAttribute(l,d,m,p,g,new Xt)),c&&(v.uv1=Bi.getInterpolatedAttribute(c,d,m,p,g,new Xt)),f&&(v.normal=Bi.getInterpolatedAttribute(f,d,m,p,g,new ce),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new ce,materialIndex:0};Bi.getNormal(eu,tu,nu,x.normal),v.face=x,v.barycoord=g}return v}class Cl extends fi{constructor(e=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,M=0;T("z","y","x",-1,-1,a,i,e,f,c,0),T("z","y","x",1,-1,a,i,-e,f,c,1),T("x","z","y",1,1,e,a,i,l,f,2),T("x","z","y",1,-1,e,a,-i,l,f,3),T("x","y","z",1,-1,e,i,a,l,c,4),T("x","y","z",-1,-1,e,i,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(v,3)),this.setAttribute("uv",new kn(g,2));function T(A,S,_,D,L,O,N,z,P,U,b){const R=O/P,H=N/U,j=O/2,K=N/2,te=z/2,re=P+1,F=U+1;let G=0,W=0;const Se=new ce;for(let xe=0;xe<F;xe++){const B=xe*H-K;for(let ne=0;ne<re;ne++){const fe=ne*R-j;Se[A]=fe*D,Se[S]=B*L,Se[_]=te,p.push(Se.x,Se.y,Se.z),Se[A]=0,Se[S]=0,Se[_]=z>0?1:-1,v.push(Se.x,Se.y,Se.z),g.push(ne/P),g.push(1-xe/U),G+=1}}for(let xe=0;xe<U;xe++)for(let B=0;B<P;B++){const ne=x+B+re*xe,fe=x+B+re*(xe+1),Ee=x+(B+1)+re*(xe+1),Ne=x+(B+1)+re*xe;m.push(ne,fe,Ne),m.push(fe,Ee,Ne),W+=6}d.addGroup(M,W,b),M+=W,x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(s){const e={};for(const i in s){e[i]={};for(const a in s[i]){const l=s[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=l.clone():Array.isArray(l)?e[i][a]=l.slice():e[i][a]=l}}return e}function Gn(s){const e={};for(let i=0;i<s.length;i++){const a=to(s[i]);for(const l in a)e[l]=a[l]}return e}function xT(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Xx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const yT={clone:to,merge:Gn};var ST=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ST,this.fragmentShader=MT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=xT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class Wx extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new ce,d_=new Xt,h_=new Xt;class Ei extends Wx{constructor(e=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=yp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yp*2*Math.atan(Math.tan(Yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,i){return this.getViewBounds(e,d_,h_),i.subVectors(h_,d_)}setViewOffset(e,i,a,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Yd*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const qs=-90,js=1;class bT extends $n{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(qs,js,e,i);l.layers=this.layers,this.add(l);const c=new Ei(qs,js,e,i);c.layers=this.layers,this.add(c);const f=new Ei(qs,js,e,i);f.layers=this.layers,this.add(f);const d=new Ei(qs,js,e,i);d.layers=this.layers,this.add(d);const m=new Ei(qs,js,e,i);m.layers=this.layers,this.add(m);const p=new Ei(qs,js,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(e===Zi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===bu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,l),e.render(i,c),e.setRenderTarget(a,1,l),e.render(i,f),e.setRenderTarget(a,2,l),e.render(i,d),e.setRenderTarget(a,3,l),e.render(i,m),e.setRenderTarget(a,4,l),e.render(i,p),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,l),e.render(i,v),e.setRenderTarget(g,x,M),e.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class qx extends Vn{constructor(e=[],i=Zr,a,l,c,f,d,m,p,v){super(e,i,a,l,c,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jx extends Ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new qx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Cl(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:to(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Jn,blending:wa});c.uniforms.tEquirect.value=i;const f=new ci(l,c),d=i.minFilter;return i.minFilter===jr&&(i.minFilter=In),new bT(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,a,l);e.setRenderTarget(c)}}class pl extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ET={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,a),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ET)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new pl;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}class TT extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oa,this.environmentIntensity=1,this.environmentRotation=new Oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class AT extends Vn{constructor(e=null,i=1,a=1,l,c,f,d,m,p=On,v=On,g,x){super(null,f,d,m,p,v,l,c,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new ce,RT=new ce,CT=new mt;class kr{constructor(e=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,l){return this.normal.set(e,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const l=vh.subVectors(a,i).cross(RT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const a=e.delta(vh),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||CT.getNormalMatrix(e),l=this.coplanarPoint(vh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Cu,wT=new Xt(.5,.5),su=new ce;class Yx{constructor(e=new kr,i=new kr,a=new kr,l=new kr,c=new kr,f=new kr){this.planes=[e,i,a,l,c,f]}set(e,i,a,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(a),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=Zi,a=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],M=c[7],T=c[8],A=c[9],S=c[10],_=c[11],D=c[12],L=c[13],O=c[14],N=c[15];if(l[0].setComponents(p-f,M-v,_-T,N-D).normalize(),l[1].setComponents(p+f,M+v,_+T,N+D).normalize(),l[2].setComponents(p+d,M+g,_+A,N+L).normalize(),l[3].setComponents(p-d,M-g,_-A,N-L).normalize(),a)l[4].setComponents(m,x,S,O).normalize(),l[5].setComponents(p-m,M-x,_-S,N-O).normalize();else if(l[4].setComponents(p-m,M-x,_-S,N-O).normalize(),i===Zi)l[5].setComponents(p+m,M+x,_+S,N+O).normalize();else if(i===bu)l[5].setComponents(m,x,S,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const i=wT.distanceTo(e.center);return Hr.radius=.7071067811865476+i,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const i=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(su.x=l.normal.x>0?e.max.x:e.min.x,su.y=l.normal.y>0?e.max.y:e.min.y,su.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(su)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zx extends Rl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const p_=new un,Sp=new Ix,ou=new Cu,lu=new ce;class DT extends $n{constructor(e=new fi,i=new Zx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ou.copy(a.boundingSphere),ou.applyMatrix4(l),ou.radius+=c,e.ray.intersectsSphere(ou)===!1)return;p_.copy(l).invert(),Sp.copy(e.ray).applyMatrix4(p_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=a.index,g=a.attributes.position;if(p!==null){const x=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let T=x,A=M;T<A;T++){const S=p.getX(T);lu.fromBufferAttribute(g,S),m_(lu,S,m,l,e,i,this)}}else{const x=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let T=x,A=M;T<A;T++)lu.fromBufferAttribute(g,T),m_(lu,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function m_(s,e,i,a,l,c,f){const d=Sp.distanceSqToPoint(s);if(d<i){const m=new ce;Sp.closestPointToPoint(s,m),m.applyMatrix4(a);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class yl extends Vn{constructor(e,i,a=$i,l,c,f,d=On,m=On,p,v=Na,g=1){if(v!==Na&&v!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,c,f,d,m,v,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class UT extends yl{constructor(e,i=$i,a=Zr,l,c,f=On,d=On,m,p=Na){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,i,a,l,c,f,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kx extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vp extends fi{constructor(e=1,i=1,a=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:a,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],x=[],M=[];let T=0;const A=[],S=a/2;let _=0;D(),f===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(x,3)),this.setAttribute("uv",new kn(M,2));function D(){const O=new ce,N=new ce;let z=0;const P=(i-e)/a;for(let U=0;U<=c;U++){const b=[],R=U/c,H=R*(i-e)+e;for(let j=0;j<=l;j++){const K=j/l,te=K*m+d,re=Math.sin(te),F=Math.cos(te);N.x=H*re,N.y=-R*a+S,N.z=H*F,g.push(N.x,N.y,N.z),O.set(re,P,F).normalize(),x.push(O.x,O.y,O.z),M.push(K,1-R),b.push(T++)}A.push(b)}for(let U=0;U<l;U++)for(let b=0;b<c;b++){const R=A[b][U],H=A[b+1][U],j=A[b+1][U+1],K=A[b][U+1];(e>0||b!==0)&&(v.push(R,H,K),z+=3),(i>0||b!==c-1)&&(v.push(H,j,K),z+=3)}p.addGroup(_,z,0),_+=z}function L(O){const N=T,z=new Xt,P=new ce;let U=0;const b=O===!0?e:i,R=O===!0?1:-1;for(let j=1;j<=l;j++)g.push(0,S*R,0),x.push(0,R,0),M.push(.5,.5),T++;const H=T;for(let j=0;j<=l;j++){const te=j/l*m+d,re=Math.cos(te),F=Math.sin(te);P.x=b*F,P.y=S*R,P.z=b*re,g.push(P.x,P.y,P.z),x.push(0,R,0),z.x=re*.5+.5,z.y=F*.5*R+.5,M.push(z.x,z.y),T++}for(let j=0;j<l;j++){const K=N+j,te=H+j;O===!0?v.push(te,te+1,K):v.push(te+1,te,K),U+=3}p.addGroup(_,U,O===!0?1:2),_+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wu extends fi{constructor(e=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(a),m=Math.floor(l),p=d+1,v=m+1,g=e/d,x=i/m,M=[],T=[],A=[],S=[];for(let _=0;_<v;_++){const D=_*x-f;for(let L=0;L<p;L++){const O=L*g-c;T.push(O,-D,0),A.push(0,0,1),S.push(L/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let D=0;D<d;D++){const L=D+p*_,O=D+p*(_+1),N=D+1+p*(_+1),z=D+1+p*_;M.push(L,O,z),M.push(O,N,z)}this.setIndex(M),this.setAttribute("position",new kn(T,3)),this.setAttribute("normal",new kn(A,3)),this.setAttribute("uv",new kn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}class kp extends fi{constructor(e=1,i=32,a=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),a=Math.max(2,Math.floor(a));const m=Math.min(f+d,Math.PI);let p=0;const v=[],g=new ce,x=new ce,M=[],T=[],A=[],S=[];for(let _=0;_<=a;_++){const D=[],L=_/a;let O=0;_===0&&f===0?O=.5/i:_===a&&m===Math.PI&&(O=-.5/i);for(let N=0;N<=i;N++){const z=N/i;g.x=-e*Math.cos(l+z*c)*Math.sin(f+L*d),g.y=e*Math.cos(f+L*d),g.z=e*Math.sin(l+z*c)*Math.sin(f+L*d),T.push(g.x,g.y,g.z),x.copy(g).normalize(),A.push(x.x,x.y,x.z),S.push(z+O,1-L),D.push(p++)}v.push(D)}for(let _=0;_<a;_++)for(let D=0;D<i;D++){const L=v[_][D+1],O=v[_][D],N=v[_+1][D],z=v[_+1][D+1];(_!==0||f>0)&&M.push(L,O,z),(_!==a-1||m<Math.PI)&&M.push(O,N,z)}this.setIndex(M),this.setAttribute("position",new kn(T,3)),this.setAttribute("normal",new kn(A,3)),this.setAttribute("uv",new kn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class LT extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NT extends Rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OT extends Rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qx extends Wx{constructor(e=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class PT extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function g_(s,e,i,a){const l=FT(a);switch(i){case Ox:return s*e;case Fx:return s*e/l.components*l.byteLength;case Fp:return s*e/l.components*l.byteLength;case $s:return s*e*2/l.components*l.byteLength;case zp:return s*e*2/l.components*l.byteLength;case Px:return s*e*3/l.components*l.byteLength;case Ii:return s*e*4/l.components*l.byteLength;case Bp:return s*e*4/l.components*l.byteLength;case mu:case gu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vu:case _u:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kh:case Wh:return Math.max(s,16)*Math.max(e,8)/4;case Vh:case Xh:return Math.max(s,8)*Math.max(e,8)/2;case qh:case jh:case Zh:case Kh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yh:case Qh:case Jh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case tp:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case np:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ip:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ap:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case rp:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case sp:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case op:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case lp:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case cp:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case up:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case fp:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case dp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case hp:case pp:case mp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case gp:case vp:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _p:case xp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function FT(s){switch(s){case Ti:case Dx:return{byteLength:1,components:1};case vl:case Ux:case La:return{byteLength:2,components:1};case Op:case Pp:return{byteLength:2,components:4};case $i:case Np:case Yi:return{byteLength:4,components:1};case Lx:case Nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);function Jx(){let s=null,e=!1,i=null,a=null;function l(c,f){i(c,f),a=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(a=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function zT(s){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function a(d,m,p){const v=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,v);else{g.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<g.length;M++){const T=g[x],A=g[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,g[x]=A)}g.length=x+1;for(let M=0,T=g.length;M<T;M++){const A=g[M];s.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var BT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IT=`#ifdef USE_ALPHAHASH
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
#endif`,HT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XT=`#ifdef USE_AOMAP
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
#endif`,WT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qT=`#ifdef USE_BATCHING
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
#endif`,jT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QT=`#ifdef USE_IRIDESCENCE
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
#endif`,JT=`#ifdef USE_BUMPMAP
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
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oA=`#define PI 3.141592653589793
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
} // validated`,lA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cA=`vec3 transformedNormal = objectNormal;
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
#endif`,uA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pA="gl_FragColor = linearToOutputTexel( gl_FragColor );",mA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gA=`#ifdef USE_ENVMAP
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
#endif`,vA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
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
#endif`,xA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yA=`#ifdef USE_ENVMAP
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
#endif`,SA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TA=`#ifdef USE_GRADIENTMAP
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
}`,AA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wA=`uniform bool receiveShadow;
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
#endif`,DA=`#ifdef USE_ENVMAP
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
#endif`,UA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PA=`PhysicalMaterial material;
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
#endif`,FA=`uniform sampler2D dfgLUT;
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
}`,zA=`
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
#endif`,BA=`#if defined( RE_IndirectDiffuse )
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
#endif`,IA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jA=`#if defined( USE_POINTS_UV )
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
#endif`,YA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$A=`#ifdef USE_MORPHTARGETS
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
#endif`,eR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sR=`#ifdef USE_NORMALMAP
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
#endif`,oR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_R=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MR=`float getShadowMask() {
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
}`,bR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ER=`#ifdef USE_SKINNING
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
#endif`,TR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AR=`#ifdef USE_SKINNING
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
#endif`,RR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UR=`#ifdef USE_TRANSMISSION
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
#endif`,LR=`#ifdef USE_TRANSMISSION
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
#endif`,NR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BR=`uniform sampler2D t2D;
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
}`,IR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kR=`#include <common>
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
}`,XR=`#if DEPTH_PACKING == 3200
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
}`,WR=`#define DISTANCE
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
}`,qR=`#define DISTANCE
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
}`,jR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZR=`uniform float scale;
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
}`,KR=`uniform vec3 diffuse;
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
}`,QR=`#include <common>
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
}`,JR=`uniform vec3 diffuse;
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
}`,$R=`#define LAMBERT
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
}`,e2=`#define LAMBERT
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
}`,t2=`#define MATCAP
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
}`,n2=`#define MATCAP
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
}`,i2=`#define NORMAL
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
}`,a2=`#define NORMAL
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
}`,r2=`#define PHONG
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
}`,s2=`#define PHONG
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
}`,o2=`#define STANDARD
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
}`,l2=`#define STANDARD
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
}`,c2=`#define TOON
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
}`,u2=`#define TOON
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
}`,f2=`uniform float size;
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
}`,d2=`uniform vec3 diffuse;
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
}`,h2=`#include <common>
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
}`,p2=`uniform vec3 color;
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
}`,m2=`uniform float rotation;
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
}`,g2=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:BT,alphahash_pars_fragment:IT,alphamap_fragment:HT,alphamap_pars_fragment:GT,alphatest_fragment:VT,alphatest_pars_fragment:kT,aomap_fragment:XT,aomap_pars_fragment:WT,batching_pars_vertex:qT,batching_vertex:jT,begin_vertex:YT,beginnormal_vertex:ZT,bsdfs:KT,iridescence_fragment:QT,bumpmap_pars_fragment:JT,clipping_planes_fragment:$T,clipping_planes_pars_fragment:eA,clipping_planes_pars_vertex:tA,clipping_planes_vertex:nA,color_fragment:iA,color_pars_fragment:aA,color_pars_vertex:rA,color_vertex:sA,common:oA,cube_uv_reflection_fragment:lA,defaultnormal_vertex:cA,displacementmap_pars_vertex:uA,displacementmap_vertex:fA,emissivemap_fragment:dA,emissivemap_pars_fragment:hA,colorspace_fragment:pA,colorspace_pars_fragment:mA,envmap_fragment:gA,envmap_common_pars_fragment:vA,envmap_pars_fragment:_A,envmap_pars_vertex:xA,envmap_physical_pars_fragment:DA,envmap_vertex:yA,fog_vertex:SA,fog_pars_vertex:MA,fog_fragment:bA,fog_pars_fragment:EA,gradientmap_pars_fragment:TA,lightmap_pars_fragment:AA,lights_lambert_fragment:RA,lights_lambert_pars_fragment:CA,lights_pars_begin:wA,lights_toon_fragment:UA,lights_toon_pars_fragment:LA,lights_phong_fragment:NA,lights_phong_pars_fragment:OA,lights_physical_fragment:PA,lights_physical_pars_fragment:FA,lights_fragment_begin:zA,lights_fragment_maps:BA,lights_fragment_end:IA,logdepthbuf_fragment:HA,logdepthbuf_pars_fragment:GA,logdepthbuf_pars_vertex:VA,logdepthbuf_vertex:kA,map_fragment:XA,map_pars_fragment:WA,map_particle_fragment:qA,map_particle_pars_fragment:jA,metalnessmap_fragment:YA,metalnessmap_pars_fragment:ZA,morphinstance_vertex:KA,morphcolor_vertex:QA,morphnormal_vertex:JA,morphtarget_pars_vertex:$A,morphtarget_vertex:eR,normal_fragment_begin:tR,normal_fragment_maps:nR,normal_pars_fragment:iR,normal_pars_vertex:aR,normal_vertex:rR,normalmap_pars_fragment:sR,clearcoat_normal_fragment_begin:oR,clearcoat_normal_fragment_maps:lR,clearcoat_pars_fragment:cR,iridescence_pars_fragment:uR,opaque_fragment:fR,packing:dR,premultiplied_alpha_fragment:hR,project_vertex:pR,dithering_fragment:mR,dithering_pars_fragment:gR,roughnessmap_fragment:vR,roughnessmap_pars_fragment:_R,shadowmap_pars_fragment:xR,shadowmap_pars_vertex:yR,shadowmap_vertex:SR,shadowmask_pars_fragment:MR,skinbase_vertex:bR,skinning_pars_vertex:ER,skinning_vertex:TR,skinnormal_vertex:AR,specularmap_fragment:RR,specularmap_pars_fragment:CR,tonemapping_fragment:wR,tonemapping_pars_fragment:DR,transmission_fragment:UR,transmission_pars_fragment:LR,uv_pars_fragment:NR,uv_pars_vertex:OR,uv_vertex:PR,worldpos_vertex:FR,background_vert:zR,background_frag:BR,backgroundCube_vert:IR,backgroundCube_frag:HR,cube_vert:GR,cube_frag:VR,depth_vert:kR,depth_frag:XR,distance_vert:WR,distance_frag:qR,equirect_vert:jR,equirect_frag:YR,linedashed_vert:ZR,linedashed_frag:KR,meshbasic_vert:QR,meshbasic_frag:JR,meshlambert_vert:$R,meshlambert_frag:e2,meshmatcap_vert:t2,meshmatcap_frag:n2,meshnormal_vert:i2,meshnormal_frag:a2,meshphong_vert:r2,meshphong_frag:s2,meshphysical_vert:o2,meshphysical_frag:l2,meshtoon_vert:c2,meshtoon_frag:u2,points_vert:f2,points_frag:d2,shadow_vert:h2,shadow_frag:p2,sprite_vert:m2,sprite_frag:g2},ze={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ji={basic:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Gn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Gn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new wt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Gn([ze.points,ze.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Gn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Gn([ze.common,ze.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Gn([ze.sprite,ze.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Gn([ze.common,ze.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Gn([ze.lights,ze.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ji.physical={uniforms:Gn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const cu={r:0,b:0,g:0},Gr=new Oa,v2=new un;function _2(s,e,i,a,l,c,f){const d=new wt(0);let m=c===!0?0:1,p,v,g=null,x=0,M=null;function T(L){let O=L.isScene===!0?L.background:null;return O&&O.isTexture&&(O=(L.backgroundBlurriness>0?i:e).get(O)),O}function A(L){let O=!1;const N=T(L);N===null?_(d,m):N&&N.isColor&&(_(N,1),O=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?a.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||O)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,O){const N=T(O);N&&(N.isCubeTexture||N.mapping===Ru)?(v===void 0&&(v=new ci(new Cl(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:to(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Gr.copy(O.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),v.material.uniforms.envMap.value=N,v.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(v2.makeRotationFromEuler(Gr)),v.material.toneMapped=Ct.getTransfer(N.colorSpace)!==kt,(g!==N||x!==N.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,g=N,x=N.version,M=s.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new ci(new wu(2,2),new ea({name:"BackgroundMaterial",uniforms:to(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(N.colorSpace)!==kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||x!==N.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=N,x=N.version,M=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,O){L.getRGB(cu,Xx(s)),a.buffers.color.setClear(cu.r,cu.g,cu.b,O,f)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,O=1){d.set(L),m=O,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:A,addToRenderList:S,dispose:D}}function x2(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=x(null);let c=l,f=!1;function d(R,H,j,K,te){let re=!1;const F=g(K,j,H);c!==F&&(c=F,p(c.object)),re=M(R,K,j,te),re&&T(R,K,j,te),te!==null&&e.update(te,s.ELEMENT_ARRAY_BUFFER),(re||f)&&(f=!1,O(R,H,j,K),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function g(R,H,j){const K=j.wireframe===!0;let te=a[R.id];te===void 0&&(te={},a[R.id]=te);let re=te[H.id];re===void 0&&(re={},te[H.id]=re);let F=re[K];return F===void 0&&(F=x(m()),re[K]=F),F}function x(R){const H=[],j=[],K=[];for(let te=0;te<i;te++)H[te]=0,j[te]=0,K[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:K,object:R,attributes:{},index:null}}function M(R,H,j,K){const te=c.attributes,re=H.attributes;let F=0;const G=j.getAttributes();for(const W in G)if(G[W].location>=0){const xe=te[W];let B=re[W];if(B===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),xe===void 0||xe.attribute!==B||B&&xe.data!==B.data)return!0;F++}return c.attributesNum!==F||c.index!==K}function T(R,H,j,K){const te={},re=H.attributes;let F=0;const G=j.getAttributes();for(const W in G)if(G[W].location>=0){let xe=re[W];xe===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(xe=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(xe=R.instanceColor));const B={};B.attribute=xe,xe&&xe.data&&(B.data=xe.data),te[W]=B,F++}c.attributes=te,c.attributesNum=F,c.index=K}function A(){const R=c.newAttributes;for(let H=0,j=R.length;H<j;H++)R[H]=0}function S(R){_(R,0)}function _(R,H){const j=c.newAttributes,K=c.enabledAttributes,te=c.attributeDivisors;j[R]=1,K[R]===0&&(s.enableVertexAttribArray(R),K[R]=1),te[R]!==H&&(s.vertexAttribDivisor(R,H),te[R]=H)}function D(){const R=c.newAttributes,H=c.enabledAttributes;for(let j=0,K=H.length;j<K;j++)H[j]!==R[j]&&(s.disableVertexAttribArray(j),H[j]=0)}function L(R,H,j,K,te,re,F){F===!0?s.vertexAttribIPointer(R,H,j,te,re):s.vertexAttribPointer(R,H,j,K,te,re)}function O(R,H,j,K){A();const te=K.attributes,re=j.getAttributes(),F=H.defaultAttributeValues;for(const G in re){const W=re[G];if(W.location>=0){let Se=te[G];if(Se===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(Se=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(Se=R.instanceColor)),Se!==void 0){const xe=Se.normalized,B=Se.itemSize,ne=e.get(Se);if(ne===void 0)continue;const fe=ne.buffer,Ee=ne.type,Ne=ne.bytesPerElement,se=Ee===s.INT||Ee===s.UNSIGNED_INT||Se.gpuType===Np;if(Se.isInterleavedBufferAttribute){const ue=Se.data,De=ue.stride,ke=Se.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<W.locationSize;He++)_(W.location+He,ue.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<W.locationSize;He++)S(W.location+He);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let He=0;He<W.locationSize;He++)L(W.location+He,B/W.locationSize,Ee,xe,De*Ne,(ke+B/W.locationSize*He)*Ne,se)}else{if(Se.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)_(W.location+ue,Se.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ue=0;ue<W.locationSize;ue++)S(W.location+ue);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let ue=0;ue<W.locationSize;ue++)L(W.location+ue,B/W.locationSize,Ee,xe,B*Ne,B/W.locationSize*ue*Ne,se)}}else if(F!==void 0){const xe=F[G];if(xe!==void 0)switch(xe.length){case 2:s.vertexAttrib2fv(W.location,xe);break;case 3:s.vertexAttrib3fv(W.location,xe);break;case 4:s.vertexAttrib4fv(W.location,xe);break;default:s.vertexAttrib1fv(W.location,xe)}}}}D()}function N(){U();for(const R in a){const H=a[R];for(const j in H){const K=H[j];for(const te in K)v(K[te].object),delete K[te];delete H[j]}delete a[R]}}function z(R){if(a[R.id]===void 0)return;const H=a[R.id];for(const j in H){const K=H[j];for(const te in K)v(K[te].object),delete K[te];delete H[j]}delete a[R.id]}function P(R){for(const H in a){const j=a[H];if(j[R.id]===void 0)continue;const K=j[R.id];for(const te in K)v(K[te].object),delete K[te];delete j[R.id]}}function U(){b(),f=!0,c!==l&&(c=l,p(c.object))}function b(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:S,disableUnusedAttributes:D}}function y2(s,e,i){let a;function l(p){a=p}function c(p,v){s.drawArrays(a,p,v),i.update(v,a,1)}function f(p,v,g){g!==0&&(s.drawArraysInstanced(a,p,v,g),i.update(v,a,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,v,0,g);let M=0;for(let T=0;T<g;T++)M+=v[T];i.update(M,a,1)}function m(p,v,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)f(p[T],v[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(a,p,0,v,0,x,0,g);let T=0;for(let A=0;A<g;A++)T+=v[A]*x[A];i.update(T,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function S2(s,e,i,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==Ii&&a.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const U=P===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ti&&a.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Yi&&!U)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ct("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=s.getParameter(s.MAX_SAMPLES),z=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:O,maxSamples:N,samples:z}}function M2(s){const e=this;let i=null,a=0,l=!1,c=!1;const f=new kr,d=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||a!==0||l;return l=x,a=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,M){const T=g.clippingPlanes,A=g.clipIntersection,S=g.clipShadows,_=s.get(g);if(!l||T===null||T.length===0||c&&!S)c?v(null):p();else{const D=c?0:a,L=D*4;let O=_.clippingState||null;m.value=O,O=v(T,x,L,M);for(let N=0;N!==L;++N)O[N]=i[N];_.clippingState=O,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(g,x,M,T){const A=g!==null?g.length:0;let S=null;if(A!==0){if(S=m.value,T!==!0||S===null){const _=M+A*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,O=M;L!==A;++L,O+=4)f.copy(g[L]).applyMatrix4(D,d),f.normal.toArray(S,O),S[O+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function b2(s){let e=new WeakMap;function i(f,d){return d===Bh?f.mapping=Zr:d===Ih&&(f.mapping=Js),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===Bh||d===Ih)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new jx(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const gr=4,v_=[.125,.215,.35,.446,.526,.582],qr=20,E2=256,ul=new Qx,__=new wt;let _h=null,xh=0,yh=0,Sh=!1;const T2=new ce;class x_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,a=.1,l=100,c={}){const{size:f=256,position:d=T2}=c;_h=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,xh,yh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Zr||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:In,minFilter:In,generateMipmaps:!1,type:La,format:Ii,colorSpace:eo,depthBuffer:!1},l=y_(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y_(e,i,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A2(c)),this._blurMaterial=C2(c,e,i),this._ggxMaterial=R2(c,e,i)}return l}_compileMaterial(e){const i=new ci(new fi,e);this._renderer.compile(i,ul)}_sceneToCubeUV(e,i,a,l,c){const m=new Ei(90,1,i,a),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(__),g.toneMapping=Qi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new Cl,new Wr({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let _=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,_=!0):(S.color.copy(__),_=!0);for(let L=0;L<6;L++){const O=L%3;O===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):O===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const N=this._cubeSize;Ys(l,O*N,L>2?N:0,N,N),g.setRenderTarget(l),_&&g.render(A,m),g.render(e,m)}g.toneMapping=M,g.autoClear=x,e.background=D}_textureToCubeUV(e,i){const a=this._renderer,l=e.mapping===Zr||e.mapping===Js;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=M_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Ys(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(f,ul)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=a}_applyGGXFilter(e,i,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[a];d.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=0+p*1.25,M=g*x,{_lodMax:T}=this,A=this._sizeLods[a],S=3*A*(a>T-gr?a-T+gr:0),_=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,Ys(c,S,_,3*A,2*A),l.setRenderTarget(c),l.render(d,ul),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-a,Ys(e,S,_,3*A,2*A),l.setRenderTarget(e),l.render(d,ul)}_blur(e,i,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,i,a,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,M=this._sizeLods[a]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*qr-1),A=c/T,S=isFinite(c)?1+Math.floor(v*A):qr;S>qr&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qr}`);const _=[];let D=0;for(let P=0;P<qr;++P){const U=P/A,b=Math.exp(-U*U/2);_.push(b),P===0?D+=b:P<S&&(D+=2*b)}for(let P=0;P<_.length;P++)_[P]=_[P]/D;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-a;const O=this._sizeLods[l],N=3*O*(l>L-gr?l-L+gr:0),z=4*(this._cubeSize-O);Ys(i,N,z,3*O,2*O),m.setRenderTarget(i),m.render(g,ul)}}function A2(s){const e=[],i=[],a=[];let l=s;const c=s-gr+1+v_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);e.push(d);let m=1/d;f>s-gr?m=v_[f-s+gr-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,T=6,A=3,S=2,_=1,D=new Float32Array(A*T*M),L=new Float32Array(S*T*M),O=new Float32Array(_*T*M);for(let z=0;z<M;z++){const P=z%3*2/3-1,U=z>2?0:-1,b=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];D.set(b,A*T*z),L.set(x,S*T*z);const R=[z,z,z,z,z,z];O.set(R,_*T*z)}const N=new fi;N.setAttribute("position",new ui(D,A)),N.setAttribute("uv",new ui(L,S)),N.setAttribute("faceIndex",new ui(O,_)),a.push(new ci(N,null)),l>gr&&l--}return{lodMeshes:a,sizeLods:e,sigmas:i}}function y_(s,e,i){const a=new Ji(s,e,i);return a.texture.mapping=Ru,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ys(s,e,i,a,l){s.viewport.set(e,i,a,l),s.scissor.set(e,i,a,l)}function R2(s,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:E2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function C2(s,e,i){const a=new Float32Array(qr),l=new ce(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Du(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function S_(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function M_(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Du(){return`

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
	`}function w2(s){let e=new WeakMap,i=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===Bh||m===Ih,v=m===Zr||m===Js;if(p||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new x_(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new x_(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function D2(s){const e={};function i(a){if(e[a]!==void 0)return e[a];const l=s.getExtension(a);return e[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&xl("WebGLRenderer: "+a+" extension not supported."),l}}}function U2(s,e,i,a){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,T=g.attributes.position;let A=0;if(M!==null){const D=M.array;A=M.version;for(let L=0,O=D.length;L<O;L+=3){const N=D[L+0],z=D[L+1],P=D[L+2];x.push(N,z,z,P,P,N)}}else if(T!==void 0){const D=T.array;A=T.version;for(let L=0,O=D.length/3-1;L<O;L+=3){const N=L+0,z=L+1,P=L+2;x.push(N,z,z,P,P,N)}}else return;const S=new(zx(x)?kx:Vx)(x,1);S.version=A;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function L2(s,e,i){let a;function l(x){a=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,M){s.drawElements(a,M,c,x*f),i.update(M,a,1)}function p(x,M,T){T!==0&&(s.drawElementsInstanced(a,M,c,x*f,T),i.update(M,a,T))}function v(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,M,0,c,x,0,T);let S=0;for(let _=0;_<T;_++)S+=M[_];i.update(S,a,1)}function g(x,M,T,A){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,M[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(a,M,0,c,x,0,A,0,T);let _=0;for(let D=0;D<T;D++)_+=M[D]*A[D];i.update(_,a,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function N2(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:Lt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:a}}function O2(s,e,i){const a=new WeakMap,l=new cn;function c(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=a.get(d);if(x===void 0||x.count!==g){let R=function(){U.dispose(),a.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let O=0;T===!0&&(O=1),A===!0&&(O=2),S===!0&&(O=3);let N=d.attributes.position.count*O,z=1;N>e.maxTextureSize&&(z=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const P=new Float32Array(N*z*4*g),U=new Bx(P,N,z,g);U.type=Yi,U.needsUpdate=!0;const b=O*4;for(let H=0;H<g;H++){const j=_[H],K=D[H],te=L[H],re=N*z*4*H;for(let F=0;F<j.count;F++){const G=F*b;T===!0&&(l.fromBufferAttribute(j,F),P[re+G+0]=l.x,P[re+G+1]=l.y,P[re+G+2]=l.z,P[re+G+3]=0),A===!0&&(l.fromBufferAttribute(K,F),P[re+G+4]=l.x,P[re+G+5]=l.y,P[re+G+6]=l.z,P[re+G+7]=0),S===!0&&(l.fromBufferAttribute(te,F),P[re+G+8]=l.x,P[re+G+9]=l.y,P[re+G+10]=l.z,P[re+G+11]=te.itemSize===4?l.w:1)}}x={count:g,texture:U,size:new Xt(N,z)},a.set(d,x),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function P2(s,e,i,a){let l=new WeakMap;function c(m){const p=a.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const F2={[Mx]:"LINEAR_TONE_MAPPING",[bx]:"REINHARD_TONE_MAPPING",[Ex]:"CINEON_TONE_MAPPING",[Tx]:"ACES_FILMIC_TONE_MAPPING",[Rx]:"AGX_TONE_MAPPING",[Cx]:"NEUTRAL_TONE_MAPPING",[Ax]:"CUSTOM_TONE_MAPPING"};function z2(s,e,i,a,l){const c=new Ji(e,i,{type:s,depthBuffer:a,stencilBuffer:l}),f=new Ji(e,i,{type:La,depthBuffer:!1,stencilBuffer:!1}),d=new fi;d.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new kn([0,2,0,0,2,0],2));const m=new LT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ci(d,m),v=new Qx(-1,1,1,-1,0,1);let g=null,x=null,M=!1,T,A=null,S=[],_=!1;this.setSize=function(D,L){c.setSize(D,L),f.setSize(D,L);for(let O=0;O<S.length;O++){const N=S[O];N.setSize&&N.setSize(D,L)}},this.setEffects=function(D){S=D,_=S.length>0&&S[0].isRenderPass===!0;const L=c.width,O=c.height;for(let N=0;N<S.length;N++){const z=S[N];z.setSize&&z.setSize(L,O)}},this.begin=function(D,L){if(M||D.toneMapping===Qi&&S.length===0)return!1;if(A=L,L!==null){const O=L.width,N=L.height;(c.width!==O||c.height!==N)&&this.setSize(O,N)}return _===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Qi,!0},this.hasRenderPass=function(){return _},this.end=function(D,L){D.toneMapping=T,M=!0;let O=c,N=f;for(let z=0;z<S.length;z++){const P=S[z];if(P.enabled!==!1&&(P.render(D,N,O,L),P.needsSwap!==!1)){const U=O;O=N,N=U}}if(g!==D.outputColorSpace||x!==D.toneMapping){g=D.outputColorSpace,x=D.toneMapping,m.defines={},Ct.getTransfer(g)===kt&&(m.defines.SRGB_TRANSFER="");const z=F2[x];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,D.setRenderTarget(A),D.render(p,v),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const $x=new Vn,Mp=new yl(1,1),ey=new Bx,ty=new oT,ny=new qx,b_=[],E_=[],T_=new Float32Array(16),A_=new Float32Array(9),R_=new Float32Array(4);function oo(s,e,i){const a=s[0];if(a<=0||a>0)return s;const l=e*i;let c=b_[l];if(c===void 0&&(c=new Float32Array(l),b_[l]=c),e!==0){a.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(c,d)}return c}function yn(s,e){if(s.length!==e.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==e[i])return!1;return!0}function Sn(s,e){for(let i=0,a=e.length;i<a;i++)s[i]=e[i]}function Uu(s,e){let i=E_[e];i===void 0&&(i=new Int32Array(e),E_[e]=i);for(let a=0;a!==e;++a)i[a]=s.allocateTextureUnit();return i}function B2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function I2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2fv(this.addr,e),Sn(i,e)}}function H2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;s.uniform3fv(this.addr,e),Sn(i,e)}}function G2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4fv(this.addr,e),Sn(i,e)}}function V2(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(yn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,a))return;R_.set(a),s.uniformMatrix2fv(this.addr,!1,R_),Sn(i,a)}}function k2(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(yn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,a))return;A_.set(a),s.uniformMatrix3fv(this.addr,!1,A_),Sn(i,a)}}function X2(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(yn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,a))return;T_.set(a),s.uniformMatrix4fv(this.addr,!1,T_),Sn(i,a)}}function W2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function q2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2iv(this.addr,e),Sn(i,e)}}function j2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;s.uniform3iv(this.addr,e),Sn(i,e)}}function Y2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4iv(this.addr,e),Sn(i,e)}}function Z2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function K2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2uiv(this.addr,e),Sn(i,e)}}function Q2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;s.uniform3uiv(this.addr,e),Sn(i,e)}}function J2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4uiv(this.addr,e),Sn(i,e)}}function $2(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Mp.compareFunction=i.isReversedDepthBuffer()?Hp:Ip,c=Mp):c=$x,i.setTexture2D(e||c,l)}function eC(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(e||ty,l)}function tC(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(e||ny,l)}function nC(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(e||ey,l)}function iC(s){switch(s){case 5126:return B2;case 35664:return I2;case 35665:return H2;case 35666:return G2;case 35674:return V2;case 35675:return k2;case 35676:return X2;case 5124:case 35670:return W2;case 35667:case 35671:return q2;case 35668:case 35672:return j2;case 35669:case 35673:return Y2;case 5125:return Z2;case 36294:return K2;case 36295:return Q2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return eC;case 35680:case 36300:case 36308:case 36293:return tC;case 36289:case 36303:case 36311:case 36292:return nC}}function aC(s,e){s.uniform1fv(this.addr,e)}function rC(s,e){const i=oo(e,this.size,2);s.uniform2fv(this.addr,i)}function sC(s,e){const i=oo(e,this.size,3);s.uniform3fv(this.addr,i)}function oC(s,e){const i=oo(e,this.size,4);s.uniform4fv(this.addr,i)}function lC(s,e){const i=oo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function cC(s,e){const i=oo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function uC(s,e){const i=oo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function fC(s,e){s.uniform1iv(this.addr,e)}function dC(s,e){s.uniform2iv(this.addr,e)}function hC(s,e){s.uniform3iv(this.addr,e)}function pC(s,e){s.uniform4iv(this.addr,e)}function mC(s,e){s.uniform1uiv(this.addr,e)}function gC(s,e){s.uniform2uiv(this.addr,e)}function vC(s,e){s.uniform3uiv(this.addr,e)}function _C(s,e){s.uniform4uiv(this.addr,e)}function xC(s,e,i){const a=this.cache,l=e.length,c=Uu(i,l);yn(a,c)||(s.uniform1iv(this.addr,c),Sn(a,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=Mp:f=$x;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||f,c[d])}function yC(s,e,i){const a=this.cache,l=e.length,c=Uu(i,l);yn(a,c)||(s.uniform1iv(this.addr,c),Sn(a,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||ty,c[f])}function SC(s,e,i){const a=this.cache,l=e.length,c=Uu(i,l);yn(a,c)||(s.uniform1iv(this.addr,c),Sn(a,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||ny,c[f])}function MC(s,e,i){const a=this.cache,l=e.length,c=Uu(i,l);yn(a,c)||(s.uniform1iv(this.addr,c),Sn(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||ey,c[f])}function bC(s){switch(s){case 5126:return aC;case 35664:return rC;case 35665:return sC;case 35666:return oC;case 35674:return lC;case 35675:return cC;case 35676:return uC;case 5124:case 35670:return fC;case 35667:case 35671:return dC;case 35668:case 35672:return hC;case 35669:case 35673:return pC;case 5125:return mC;case 36294:return gC;case 36295:return vC;case 36296:return _C;case 35678:case 36198:case 36298:case 36306:case 35682:return xC;case 35679:case 36299:case 36307:return yC;case 35680:case 36300:case 36308:case 36293:return SC;case 36289:case 36303:case 36311:case 36292:return MC}}class EC{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=iC(i.type)}}class TC{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=bC(i.type)}}class AC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],a)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function C_(s,e){s.seq.push(e),s.map[e.id]=e}function RC(s,e,i){const a=s.name,l=a.length;for(Mh.lastIndex=0;;){const c=Mh.exec(a),f=Mh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){C_(i,p===void 0?new EC(d,s,e):new TC(d,s,e));break}else{let g=i.map[d];g===void 0&&(g=new AC(d),C_(i,g)),i=g}}}class xu{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const d=e.getActiveUniform(i,f),m=e.getUniformLocation(i,d.name);RC(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(e,a,l)}setOptional(e,i,a){const l=i[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,i,a,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&a.push(f)}return a}}function w_(s,e,i){const a=s.createShader(e);return s.shaderSource(a,i),s.compileShader(a),a}const CC=37297;let wC=0;function DC(s,e){const i=s.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;a.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return a.join(`
`)}const D_=new mt;function UC(s){Ct._getMatrix(D_,Ct.workingColorSpace,s);const e=`mat3( ${D_.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Mu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function U_(s,e,i){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+DC(s.getShaderSource(e),d)}else return c}function LC(s,e){const i=UC(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const NC={[Mx]:"Linear",[bx]:"Reinhard",[Ex]:"Cineon",[Tx]:"ACESFilmic",[Rx]:"AgX",[Cx]:"Neutral",[Ax]:"Custom"};function OC(s,e){const i=NC[e];return i===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const uu=new ce;function PC(){Ct.getLuminanceCoefficients(uu);const s=uu.x.toFixed(4),e=uu.y.toFixed(4),i=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function zC(s){const e=[];for(const i in s){const a=s[i];a!==!1&&e.push("#define "+i+" "+a)}return e.join(`
`)}function BC(s,e){const i={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(e,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return i}function ml(s){return s!==""}function L_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IC=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(s){return s.replace(IC,GC)}const HC=new Map;function GC(s,e){let i=gt[e];if(i===void 0){const a=HC.get(e);if(a!==void 0)i=gt[a],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return bp(i)}const VC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O_(s){return s.replace(VC,kC)}function kC(s,e,i,a){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function P_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const XC={[pu]:"SHADOWMAP_TYPE_PCF",[hl]:"SHADOWMAP_TYPE_VSM"};function WC(s){return XC[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qC={[Zr]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[Ru]:"ENVMAP_TYPE_CUBE_UV"};function jC(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":qC[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const YC={[Js]:"ENVMAP_MODE_REFRACTION"};function ZC(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":YC[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KC={[Sx]:"ENVMAP_BLENDING_MULTIPLY",[G1]:"ENVMAP_BLENDING_MIX",[V1]:"ENVMAP_BLENDING_ADD"};function QC(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":KC[s.combine]||"ENVMAP_BLENDING_NONE"}function JC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function $C(s,e,i,a){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=WC(i),p=jC(i),v=ZC(i),g=QC(i),x=JC(i),M=FC(i),T=zC(c),A=l.createProgram();let S,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ml).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ml).join(`
`),_.length>0&&(_+=`
`)):(S=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),_=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qi?"#define TONE_MAPPING":"",i.toneMapping!==Qi?gt.tonemapping_pars_fragment:"",i.toneMapping!==Qi?OC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,LC("linearToOutputTexel",i.outputColorSpace),PC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ml).join(`
`)),f=bp(f),f=L_(f,i),f=N_(f,i),d=bp(d),d=L_(d,i),d=N_(d,i),f=O_(f),d=O_(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=D+S+f,O=D+_+d,N=w_(l,l.VERTEX_SHADER,L),z=w_(l,l.FRAGMENT_SHADER,O);l.attachShader(A,N),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(H){if(s.debug.checkShaderErrors){const j=l.getProgramInfoLog(A)||"",K=l.getShaderInfoLog(N)||"",te=l.getShaderInfoLog(z)||"",re=j.trim(),F=K.trim(),G=te.trim();let W=!0,Se=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,N,z);else{const xe=U_(l,N,"vertex"),B=U_(l,z,"fragment");Lt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+re+`
`+xe+`
`+B)}else re!==""?ct("WebGLProgram: Program Info Log:",re):(F===""||G==="")&&(Se=!1);Se&&(H.diagnostics={runnable:W,programLog:re,vertexShader:{log:F,prefix:S},fragmentShader:{log:G,prefix:_}})}l.deleteShader(N),l.deleteShader(z),U=new xu(l,A),b=BC(l,A)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,CC)),R},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=wC++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=N,this.fragmentShader=z,this}let ew=0;class tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,a=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new nw(e),i.set(e,a)),a}}class nw{constructor(e){this.id=ew++,this.code=e,this.usedTimes=0}}function iw(s,e,i,a,l,c,f){const d=new Hx,m=new tw,p=new Set,v=[],g=new Map,x=l.logarithmicDepthBuffer;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return p.add(b),b===0?"uv":`uv${b}`}function S(b,R,H,j,K){const te=j.fog,re=K.geometry,F=b.isMeshStandardMaterial?j.environment:null,G=(b.isMeshStandardMaterial?i:e).get(b.envMap||F),W=G&&G.mapping===Ru?G.image.height:null,Se=T[b.type];b.precision!==null&&(M=l.getMaxPrecision(b.precision),M!==b.precision&&ct("WebGLProgram.getParameters:",b.precision,"not supported, using",M,"instead."));const xe=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,B=xe!==void 0?xe.length:0;let ne=0;re.morphAttributes.position!==void 0&&(ne=1),re.morphAttributes.normal!==void 0&&(ne=2),re.morphAttributes.color!==void 0&&(ne=3);let fe,Ee,Ne,se;if(Se){const Rt=ji[Se];fe=Rt.vertexShader,Ee=Rt.fragmentShader}else fe=b.vertexShader,Ee=b.fragmentShader,m.update(b),Ne=m.getVertexShaderID(b),se=m.getFragmentShaderID(b);const ue=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),ke=K.isInstancedMesh===!0,He=K.isBatchedMesh===!0,dt=!!b.map,Yt=!!b.matcap,St=!!G,_t=!!b.aoMap,Nt=!!b.lightMap,ut=!!b.bumpMap,an=!!b.normalMap,X=!!b.displacementMap,$t=!!b.emissiveMap,At=!!b.metalnessMap,zt=!!b.roughnessMap,Qe=b.anisotropy>0,I=b.clearcoat>0,E=b.dispersion>0,Z=b.iridescence>0,ge=b.sheen>0,Me=b.transmission>0,pe=Qe&&!!b.anisotropyMap,$e=I&&!!b.clearcoatMap,Ue=I&&!!b.clearcoatNormalMap,Ye=I&&!!b.clearcoatRoughnessMap,rt=Z&&!!b.iridescenceMap,Ae=Z&&!!b.iridescenceThicknessMap,Re=ge&&!!b.sheenColorMap,Ge=ge&&!!b.sheenRoughnessMap,Be=!!b.specularMap,Le=!!b.specularColorMap,ht=!!b.specularIntensityMap,Y=Me&&!!b.transmissionMap,Pe=Me&&!!b.thicknessMap,Ce=!!b.gradientMap,Ie=!!b.alphaMap,Te=b.alphaTest>0,ye=!!b.alphaHash,we=!!b.extensions;let st=Qi;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(st=s.toneMapping);const It={shaderID:Se,shaderType:b.type,shaderName:b.name,vertexShader:fe,fragmentShader:Ee,defines:b.defines,customVertexShaderID:Ne,customFragmentShaderID:se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:M,batching:He,batchingColor:He&&K._colorsTexture!==null,instancing:ke,instancingColor:ke&&K.instanceColor!==null,instancingMorph:ke&&K.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:eo,alphaToCoverage:!!b.alphaToCoverage,map:dt,matcap:Yt,envMap:St,envMapMode:St&&G.mapping,envMapCubeUVHeight:W,aoMap:_t,lightMap:Nt,bumpMap:ut,normalMap:an,displacementMap:X,emissiveMap:$t,normalMapObjectSpace:an&&b.normalMapType===q1,normalMapTangentSpace:an&&b.normalMapType===W1,metalnessMap:At,roughnessMap:zt,anisotropy:Qe,anisotropyMap:pe,clearcoat:I,clearcoatMap:$e,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ye,dispersion:E,iridescence:Z,iridescenceMap:rt,iridescenceThicknessMap:Ae,sheen:ge,sheenColorMap:Re,sheenRoughnessMap:Ge,specularMap:Be,specularColorMap:Le,specularIntensityMap:ht,transmission:Me,transmissionMap:Y,thicknessMap:Pe,gradientMap:Ce,opaque:b.transparent===!1&&b.blending===Zs&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Te,alphaHash:ye,combine:b.combine,mapUv:dt&&A(b.map.channel),aoMapUv:_t&&A(b.aoMap.channel),lightMapUv:Nt&&A(b.lightMap.channel),bumpMapUv:ut&&A(b.bumpMap.channel),normalMapUv:an&&A(b.normalMap.channel),displacementMapUv:X&&A(b.displacementMap.channel),emissiveMapUv:$t&&A(b.emissiveMap.channel),metalnessMapUv:At&&A(b.metalnessMap.channel),roughnessMapUv:zt&&A(b.roughnessMap.channel),anisotropyMapUv:pe&&A(b.anisotropyMap.channel),clearcoatMapUv:$e&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&A(b.sheenRoughnessMap.channel),specularMapUv:Be&&A(b.specularMap.channel),specularColorMapUv:Le&&A(b.specularColorMap.channel),specularIntensityMapUv:ht&&A(b.specularIntensityMap.channel),transmissionMapUv:Y&&A(b.transmissionMap.channel),thicknessMapUv:Pe&&A(b.thicknessMap.channel),alphaMapUv:Ie&&A(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(an||Qe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!re.attributes.uv&&(dt||Ie),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:De,skinning:K.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:dt&&b.map.isVideoTexture===!0&&Ct.getTransfer(b.map.colorSpace)===kt,decodeVideoTextureEmissive:$t&&b.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(b.emissiveMap.colorSpace)===kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Aa,flipSided:b.side===Jn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:we&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&b.extensions.multiDraw===!0||He)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function _(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)R.push(H),R.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(D(R,b),L(R,b),R.push(s.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function D(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function L(b,R){d.disableAll(),R.instancing&&d.enable(0),R.instancingColor&&d.enable(1),R.instancingMorph&&d.enable(2),R.matcap&&d.enable(3),R.envMap&&d.enable(4),R.normalMapObjectSpace&&d.enable(5),R.normalMapTangentSpace&&d.enable(6),R.clearcoat&&d.enable(7),R.iridescence&&d.enable(8),R.alphaTest&&d.enable(9),R.vertexColors&&d.enable(10),R.vertexAlphas&&d.enable(11),R.vertexUv1s&&d.enable(12),R.vertexUv2s&&d.enable(13),R.vertexUv3s&&d.enable(14),R.vertexTangents&&d.enable(15),R.anisotropy&&d.enable(16),R.alphaHash&&d.enable(17),R.batching&&d.enable(18),R.dispersion&&d.enable(19),R.batchingColor&&d.enable(20),R.gradientMap&&d.enable(21),b.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),b.push(d.mask)}function O(b){const R=T[b.type];let H;if(R){const j=ji[R];H=yT.clone(j.uniforms)}else H=b.uniforms;return H}function N(b,R){let H=g.get(R);return H!==void 0?++H.usedTimes:(H=new $C(s,R,b,c),v.push(H),g.set(R,H)),H}function z(b){if(--b.usedTimes===0){const R=v.indexOf(b);v[R]=v[v.length-1],v.pop(),g.delete(b.cacheKey),b.destroy()}}function P(b){m.remove(b)}function U(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:O,acquireProgram:N,releaseProgram:z,releaseShaderCache:P,programs:v,dispose:U}}function aw(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function a(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:a,update:l,dispose:c}}function rw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function F_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function z_(){const s=[];let e=0;const i=[],a=[],l=[];function c(){e=0,i.length=0,a.length=0,l.length=0}function f(g,x,M,T,A,S){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:M,groupOrder:T,renderOrder:g.renderOrder,z:A,group:S},s[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=M,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=A,_.group=S),e++,_}function d(g,x,M,T,A,S){const _=f(g,x,M,T,A,S);M.transmission>0?a.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,x,M,T,A,S){const _=f(g,x,M,T,A,S);M.transmission>0?a.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||rw),a.length>1&&a.sort(x||F_),l.length>1&&l.sort(x||F_)}function v(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function sw(){let s=new WeakMap;function e(a,l){const c=s.get(a);let f;return c===void 0?(f=new z_,s.set(a,[f])):l>=c.length?(f=new z_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ce,color:new wt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return s[e.id]=i,i}}}function lw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let cw=0;function uw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fw(s){const e=new ow,i=lw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ce);const l=new ce,c=new un,f=new un;function d(p){let v=0,g=0,x=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let M=0,T=0,A=0,S=0,_=0,D=0,L=0,O=0,N=0,z=0,P=0;p.sort(uw);for(let b=0,R=p.length;b<R;b++){const H=p[b],j=H.color,K=H.intensity,te=H.distance;let re=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===$s?re=H.shadow.map.texture:re=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=j.r*K,g+=j.g*K,x+=j.b*K;else if(H.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(H.sh.coefficients[F],K);P++}else if(H.isDirectionalLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,W=i.get(H);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,a.directionalShadow[M]=W,a.directionalShadowMap[M]=re,a.directionalShadowMatrix[M]=H.shadow.matrix,D++}a.directional[M]=F,M++}else if(H.isSpotLight){const F=e.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(j).multiplyScalar(K),F.distance=te,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,a.spot[A]=F;const G=H.shadow;if(H.map&&(a.spotLightMap[N]=H.map,N++,G.updateMatrices(H),H.castShadow&&z++),a.spotLightMatrix[A]=G.matrix,H.castShadow){const W=i.get(H);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,a.spotShadow[A]=W,a.spotShadowMap[A]=re,O++}A++}else if(H.isRectAreaLight){const F=e.get(H);F.color.copy(j).multiplyScalar(K),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=F,S++}else if(H.isPointLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const G=H.shadow,W=i.get(H);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,a.pointShadow[T]=W,a.pointShadowMap[T]=re,a.pointShadowMatrix[T]=H.shadow.matrix,L++}a.point[T]=F,T++}else if(H.isHemisphereLight){const F=e.get(H);F.skyColor.copy(H.color).multiplyScalar(K),F.groundColor.copy(H.groundColor).multiplyScalar(K),a.hemi[_]=F,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=g,a.ambient[2]=x;const U=a.hash;(U.directionalLength!==M||U.pointLength!==T||U.spotLength!==A||U.rectAreaLength!==S||U.hemiLength!==_||U.numDirectionalShadows!==D||U.numPointShadows!==L||U.numSpotShadows!==O||U.numSpotMaps!==N||U.numLightProbes!==P)&&(a.directional.length=M,a.spot.length=A,a.rectArea.length=S,a.point.length=T,a.hemi.length=_,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=O+N-z,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=P,U.directionalLength=M,U.pointLength=T,U.spotLength=A,U.rectAreaLength=S,U.hemiLength=_,U.numDirectionalShadows=D,U.numPointShadows=L,U.numSpotShadows=O,U.numSpotMaps=N,U.numLightProbes=P,a.version=cw++)}function m(p,v){let g=0,x=0,M=0,T=0,A=0;const S=v.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const L=p[_];if(L.isDirectionalLight){const O=a.directional[g];O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),g++}else if(L.isSpotLight){const O=a.spot[M];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const O=a.rectArea[T];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const O=a.point[x];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const O=a.hemi[A];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:a}}function B_(s){const e=new fw(s),i=[],a=[];function l(v){p.camera=v,i.length=0,a.length=0}function c(v){i.push(v)}function f(v){a.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function dw(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new B_(s),e.set(l,[d])):c>=f.length?(d=new B_(s),f.push(d)):d=f[c],d}function a(){e=new WeakMap}return{get:i,dispose:a}}const hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pw=`uniform sampler2D shadow_pass;
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
}`,mw=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],gw=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],I_=new un,fl=new ce,bh=new ce;function vw(s,e,i){let a=new Yx;const l=new Xt,c=new Xt,f=new cn,d=new NT,m=new OT,p={},v=i.maxTextureSize,g={[vr]:Jn,[Jn]:vr,[Aa]:Aa},x=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:hw,fragmentShader:pw}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new fi;T.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ci(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let _=this.type;this.render=function(z,P,U){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;z.type===M1&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=pu);const b=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),j=s.state;j.setBlending(wa),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const K=_!==this.type;K&&P.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(re=>re.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,re=z.length;te<re;te++){const F=z[te],G=F.shadow;if(G===void 0){ct("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const W=G.getFrameExtents();if(l.multiply(W),c.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/W.x),l.x=c.x*W.x,G.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/W.y),l.y=c.y*W.y,G.mapSize.y=c.y)),G.map===null||K===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===hl){if(F.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ji(l.x,l.y,{format:$s,type:La,minFilter:In,magFilter:In,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new yl(l.x,l.y,Yi),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Na,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On}else{F.isPointLight?(G.map=new jx(l.x),G.map.depthTexture=new UT(l.x,$i)):(G.map=new Ji(l.x,l.y),G.map.depthTexture=new yl(l.x,l.y,$i)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Na;const xe=s.state.buffers.depth.getReversed();this.type===pu?(G.map.depthTexture.compareFunction=xe?Hp:Ip,G.map.depthTexture.minFilter=In,G.map.depthTexture.magFilter=In):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On)}G.camera.updateProjectionMatrix()}const Se=G.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<Se;xe++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,xe),s.clear();else{xe===0&&(s.setRenderTarget(G.map),s.clear());const B=G.getViewport(xe);f.set(c.x*B.x,c.y*B.y,c.x*B.z,c.y*B.w),j.viewport(f)}if(F.isPointLight){const B=G.camera,ne=G.matrix,fe=F.distance||B.far;fe!==B.far&&(B.far=fe,B.updateProjectionMatrix()),fl.setFromMatrixPosition(F.matrixWorld),B.position.copy(fl),bh.copy(B.position),bh.add(mw[xe]),B.up.copy(gw[xe]),B.lookAt(bh),B.updateMatrixWorld(),ne.makeTranslation(-fl.x,-fl.y,-fl.z),I_.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),G._frustum.setFromProjectionMatrix(I_,B.coordinateSystem,B.reversedDepth)}else G.updateMatrices(F);a=G.getFrustum(),O(P,U,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===hl&&D(G,U),G.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(b,R,H)};function D(z,P){const U=e.update(A);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ji(l.x,l.y,{format:$s,type:La})),x.uniforms.shadow_pass.value=z.map.depthTexture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(P,null,U,x,A,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(P,null,U,M,A,null)}function L(z,P,U,b){let R=null;const H=U.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)R=H;else if(R=U.isPointLight===!0?m:d,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const j=R.uuid,K=P.uuid;let te=p[j];te===void 0&&(te={},p[j]=te);let re=te[K];re===void 0&&(re=R.clone(),te[K]=re,P.addEventListener("dispose",N)),R=re}if(R.visible=P.visible,R.wireframe=P.wireframe,b===hl?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:g[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,U.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const j=s.properties.get(R);j.light=U}return R}function O(z,P,U,b,R){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===hl)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,z.matrixWorld);const K=e.update(z),te=z.material;if(Array.isArray(te)){const re=K.groups;for(let F=0,G=re.length;F<G;F++){const W=re[F],Se=te[W.materialIndex];if(Se&&Se.visible){const xe=L(z,Se,b,R);z.onBeforeShadow(s,z,P,U,K,xe,W),s.renderBufferDirect(U,null,K,xe,z,W),z.onAfterShadow(s,z,P,U,K,xe,W)}}}else if(te.visible){const re=L(z,te,b,R);z.onBeforeShadow(s,z,P,U,K,re,null),s.renderBufferDirect(U,null,K,re,z,null),z.onAfterShadow(s,z,P,U,K,re,null)}}const j=z.children;for(let K=0,te=j.length;K<te;K++)O(j[K],P,U,b,R)}function N(z){z.target.removeEventListener("dispose",N);for(const U in p){const b=p[U],R=z.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const _w={[Uh]:Lh,[Nh]:Fh,[Oh]:zh,[Qs]:Ph,[Lh]:Uh,[Fh]:Nh,[zh]:Oh,[Ph]:Qs};function xw(s,e){function i(){let Y=!1;const Pe=new cn;let Ce=null;const Ie=new cn(0,0,0,0);return{setMask:function(Te){Ce!==Te&&!Y&&(s.colorMask(Te,Te,Te,Te),Ce=Te)},setLocked:function(Te){Y=Te},setClear:function(Te,ye,we,st,It){It===!0&&(Te*=st,ye*=st,we*=st),Pe.set(Te,ye,we,st),Ie.equals(Pe)===!1&&(s.clearColor(Te,ye,we,st),Ie.copy(Pe))},reset:function(){Y=!1,Ce=null,Ie.set(-1,0,0,0)}}}function a(){let Y=!1,Pe=!1,Ce=null,Ie=null,Te=null;return{setReversed:function(ye){if(Pe!==ye){const we=e.get("EXT_clip_control");ye?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Pe=ye;const st=Te;Te=null,this.setClear(st)}},getReversed:function(){return Pe},setTest:function(ye){ye?ue(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(ye){Ce!==ye&&!Y&&(s.depthMask(ye),Ce=ye)},setFunc:function(ye){if(Pe&&(ye=_w[ye]),Ie!==ye){switch(ye){case Uh:s.depthFunc(s.NEVER);break;case Lh:s.depthFunc(s.ALWAYS);break;case Nh:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case Oh:s.depthFunc(s.EQUAL);break;case Ph:s.depthFunc(s.GEQUAL);break;case Fh:s.depthFunc(s.GREATER);break;case zh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=ye}},setLocked:function(ye){Y=ye},setClear:function(ye){Te!==ye&&(Pe&&(ye=1-ye),s.clearDepth(ye),Te=ye)},reset:function(){Y=!1,Ce=null,Ie=null,Te=null,Pe=!1}}}function l(){let Y=!1,Pe=null,Ce=null,Ie=null,Te=null,ye=null,we=null,st=null,It=null;return{setTest:function(Rt){Y||(Rt?ue(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(Rt){Pe!==Rt&&!Y&&(s.stencilMask(Rt),Pe=Rt)},setFunc:function(Rt,Pn,Ci){(Ce!==Rt||Ie!==Pn||Te!==Ci)&&(s.stencilFunc(Rt,Pn,Ci),Ce=Rt,Ie=Pn,Te=Ci)},setOp:function(Rt,Pn,Ci){(ye!==Rt||we!==Pn||st!==Ci)&&(s.stencilOp(Rt,Pn,Ci),ye=Rt,we=Pn,st=Ci)},setLocked:function(Rt){Y=Rt},setClear:function(Rt){It!==Rt&&(s.clearStencil(Rt),It=Rt)},reset:function(){Y=!1,Pe=null,Ce=null,Ie=null,Te=null,ye=null,we=null,st=null,It=null}}}const c=new i,f=new a,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,M=[],T=null,A=!1,S=null,_=null,D=null,L=null,O=null,N=null,z=null,P=new wt(0,0,0),U=0,b=!1,R=null,H=null,j=null,K=null,te=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=G>=2);let Se=null,xe={};const B=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),fe=new cn().fromArray(B),Ee=new cn().fromArray(ne);function Ne(Y,Pe,Ce,Ie){const Te=new Uint8Array(4),ye=s.createTexture();s.bindTexture(Y,ye),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let we=0;we<Ce;we++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Pe+we,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return ye}const se={};se[s.TEXTURE_2D]=Ne(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=Ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=Ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=Ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ue(s.DEPTH_TEST),f.setFunc(Qs),ut(!1),an(Xv),ue(s.CULL_FACE),_t(wa);function ue(Y){v[Y]!==!0&&(s.enable(Y),v[Y]=!0)}function De(Y){v[Y]!==!1&&(s.disable(Y),v[Y]=!1)}function ke(Y,Pe){return g[Y]!==Pe?(s.bindFramebuffer(Y,Pe),g[Y]=Pe,Y===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),Y===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function He(Y,Pe){let Ce=M,Ie=!1;if(Y){Ce=x.get(Pe),Ce===void 0&&(Ce=[],x.set(Pe,Ce));const Te=Y.textures;if(Ce.length!==Te.length||Ce[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,we=Te.length;ye<we;ye++)Ce[ye]=s.COLOR_ATTACHMENT0+ye;Ce.length=Te.length,Ie=!0}}else Ce[0]!==s.BACK&&(Ce[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Ce)}function dt(Y){return T!==Y?(s.useProgram(Y),T=Y,!0):!1}const Yt={[Xr]:s.FUNC_ADD,[E1]:s.FUNC_SUBTRACT,[T1]:s.FUNC_REVERSE_SUBTRACT};Yt[A1]=s.MIN,Yt[R1]=s.MAX;const St={[C1]:s.ZERO,[w1]:s.ONE,[D1]:s.SRC_COLOR,[wh]:s.SRC_ALPHA,[F1]:s.SRC_ALPHA_SATURATE,[O1]:s.DST_COLOR,[L1]:s.DST_ALPHA,[U1]:s.ONE_MINUS_SRC_COLOR,[Dh]:s.ONE_MINUS_SRC_ALPHA,[P1]:s.ONE_MINUS_DST_COLOR,[N1]:s.ONE_MINUS_DST_ALPHA,[z1]:s.CONSTANT_COLOR,[B1]:s.ONE_MINUS_CONSTANT_COLOR,[I1]:s.CONSTANT_ALPHA,[H1]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(Y,Pe,Ce,Ie,Te,ye,we,st,It,Rt){if(Y===wa){A===!0&&(De(s.BLEND),A=!1);return}if(A===!1&&(ue(s.BLEND),A=!0),Y!==b1){if(Y!==S||Rt!==b){if((_!==Xr||O!==Xr)&&(s.blendEquation(s.FUNC_ADD),_=Xr,O=Xr),Rt)switch(Y){case Zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ch:s.blendFunc(s.ONE,s.ONE);break;case Wv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Lt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ch:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wv:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qv:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",Y);break}D=null,L=null,N=null,z=null,P.set(0,0,0),U=0,S=Y,b=Rt}return}Te=Te||Pe,ye=ye||Ce,we=we||Ie,(Pe!==_||Te!==O)&&(s.blendEquationSeparate(Yt[Pe],Yt[Te]),_=Pe,O=Te),(Ce!==D||Ie!==L||ye!==N||we!==z)&&(s.blendFuncSeparate(St[Ce],St[Ie],St[ye],St[we]),D=Ce,L=Ie,N=ye,z=we),(st.equals(P)===!1||It!==U)&&(s.blendColor(st.r,st.g,st.b,It),P.copy(st),U=It),S=Y,b=!1}function Nt(Y,Pe){Y.side===Aa?De(s.CULL_FACE):ue(s.CULL_FACE);let Ce=Y.side===Jn;Pe&&(Ce=!Ce),ut(Ce),Y.blending===Zs&&Y.transparent===!1?_t(wa):_t(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ie=Y.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),$t(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(Y){R!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),R=Y)}function an(Y){Y!==y1?(ue(s.CULL_FACE),Y!==H&&(Y===Xv?s.cullFace(s.BACK):Y===S1?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),H=Y}function X(Y){Y!==j&&(F&&s.lineWidth(Y),j=Y)}function $t(Y,Pe,Ce){Y?(ue(s.POLYGON_OFFSET_FILL),(K!==Pe||te!==Ce)&&(s.polygonOffset(Pe,Ce),K=Pe,te=Ce)):De(s.POLYGON_OFFSET_FILL)}function At(Y){Y?ue(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function zt(Y){Y===void 0&&(Y=s.TEXTURE0+re-1),Se!==Y&&(s.activeTexture(Y),Se=Y)}function Qe(Y,Pe,Ce){Ce===void 0&&(Se===null?Ce=s.TEXTURE0+re-1:Ce=Se);let Ie=xe[Ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},xe[Ce]=Ie),(Ie.type!==Y||Ie.texture!==Pe)&&(Se!==Ce&&(s.activeTexture(Ce),Se=Ce),s.bindTexture(Y,Pe||se[Y]),Ie.type=Y,Ie.texture=Pe)}function I(){const Y=xe[Se];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Z(){try{s.compressedTexImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function ge(){try{s.texSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Me(){try{s.texSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function pe(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ue(){try{s.texStorage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ye(){try{s.texStorage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function rt(){try{s.texImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ae(){try{s.texImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Re(Y){fe.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),fe.copy(Y))}function Ge(Y){Ee.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),Ee.copy(Y))}function Be(Y,Pe){let Ce=p.get(Pe);Ce===void 0&&(Ce=new WeakMap,p.set(Pe,Ce));let Ie=Ce.get(Y);Ie===void 0&&(Ie=s.getUniformBlockIndex(Pe,Y.name),Ce.set(Y,Ie))}function Le(Y,Pe){const Ie=p.get(Pe).get(Y);m.get(Pe)!==Ie&&(s.uniformBlockBinding(Pe,Ie,Y.__bindingPointIndex),m.set(Pe,Ie))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},Se=null,xe={},g={},x=new WeakMap,M=[],T=null,A=!1,S=null,_=null,D=null,L=null,O=null,N=null,z=null,P=new wt(0,0,0),U=0,b=!1,R=null,H=null,j=null,K=null,te=null,fe.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:ue,disable:De,bindFramebuffer:ke,drawBuffers:He,useProgram:dt,setBlending:_t,setMaterial:Nt,setFlipSided:ut,setCullFace:an,setLineWidth:X,setPolygonOffset:$t,setScissorTest:At,activeTexture:zt,bindTexture:Qe,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:rt,texImage3D:Ae,updateUBOMapping:Be,uniformBlockBinding:Le,texStorage2D:Ue,texStorage3D:Ye,texSubImage2D:ge,texSubImage3D:Me,compressedTexSubImage2D:pe,compressedTexSubImage3D:$e,scissor:Re,viewport:Ge,reset:ht}}function yw(s,e,i,a,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,E){return M?new OffscreenCanvas(I,E):Eu("canvas")}function A(I,E,Z){let ge=1;const Me=Qe(I);if((Me.width>Z||Me.height>Z)&&(ge=Z/Math.max(Me.width,Me.height)),ge<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pe=Math.floor(ge*Me.width),$e=Math.floor(ge*Me.height);g===void 0&&(g=T(pe,$e));const Ue=E?T(pe,$e):g;return Ue.width=pe,Ue.height=$e,Ue.getContext("2d").drawImage(I,0,0,pe,$e),ct("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+pe+"x"+$e+")."),Ue}else return"data"in I&&ct("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),I;return I}function S(I){return I.generateMipmaps}function _(I){s.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(I,E,Z,ge,Me=!1){if(I!==null){if(s[I]!==void 0)return s[I];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pe=E;if(E===s.RED&&(Z===s.FLOAT&&(pe=s.R32F),Z===s.HALF_FLOAT&&(pe=s.R16F),Z===s.UNSIGNED_BYTE&&(pe=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.R8UI),Z===s.UNSIGNED_SHORT&&(pe=s.R16UI),Z===s.UNSIGNED_INT&&(pe=s.R32UI),Z===s.BYTE&&(pe=s.R8I),Z===s.SHORT&&(pe=s.R16I),Z===s.INT&&(pe=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(pe=s.RG32F),Z===s.HALF_FLOAT&&(pe=s.RG16F),Z===s.UNSIGNED_BYTE&&(pe=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RG8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RG16UI),Z===s.UNSIGNED_INT&&(pe=s.RG32UI),Z===s.BYTE&&(pe=s.RG8I),Z===s.SHORT&&(pe=s.RG16I),Z===s.INT&&(pe=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),Z===s.UNSIGNED_INT&&(pe=s.RGB32UI),Z===s.BYTE&&(pe=s.RGB8I),Z===s.SHORT&&(pe=s.RGB16I),Z===s.INT&&(pe=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),Z===s.UNSIGNED_INT&&(pe=s.RGBA32UI),Z===s.BYTE&&(pe=s.RGBA8I),Z===s.SHORT&&(pe=s.RGBA16I),Z===s.INT&&(pe=s.RGBA32I)),E===s.RGB&&(Z===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),E===s.RGBA){const $e=Me?Mu:Ct.getTransfer(ge);Z===s.FLOAT&&(pe=s.RGBA32F),Z===s.HALF_FLOAT&&(pe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(pe=$e===kt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function O(I,E){let Z;return I?E===null||E===$i||E===_l?Z=s.DEPTH24_STENCIL8:E===Yi?Z=s.DEPTH32F_STENCIL8:E===vl&&(Z=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$i||E===_l?Z=s.DEPTH_COMPONENT24:E===Yi?Z=s.DEPTH_COMPONENT32F:E===vl&&(Z=s.DEPTH_COMPONENT16),Z}function N(I,E){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==On&&I.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function z(I){const E=I.target;E.removeEventListener("dispose",z),U(E),E.isVideoTexture&&v.delete(E)}function P(I){const E=I.target;E.removeEventListener("dispose",P),R(E)}function U(I){const E=a.get(I);if(E.__webglInit===void 0)return;const Z=I.source,ge=x.get(Z);if(ge){const Me=ge[E.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&b(I),Object.keys(ge).length===0&&x.delete(Z)}a.remove(I)}function b(I){const E=a.get(I);s.deleteTexture(E.__webglTexture);const Z=I.source,ge=x.get(Z);delete ge[E.__cacheKey],f.memory.textures--}function R(I){const E=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(E.__webglFramebuffer[ge]))for(let Me=0;Me<E.__webglFramebuffer[ge].length;Me++)s.deleteFramebuffer(E.__webglFramebuffer[ge][Me]);else s.deleteFramebuffer(E.__webglFramebuffer[ge]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ge])}else{if(Array.isArray(E.__webglFramebuffer))for(let ge=0;ge<E.__webglFramebuffer.length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[ge]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ge=0;ge<E.__webglColorRenderbuffer.length;ge++)E.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ge]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=I.textures;for(let ge=0,Me=Z.length;ge<Me;ge++){const pe=a.get(Z[ge]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),f.memory.textures--),a.remove(Z[ge])}a.remove(I)}let H=0;function j(){H=0}function K(){const I=H;return I>=l.maxTextures&&ct("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),H+=1,I}function te(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function re(I,E){const Z=a.get(I);if(I.isVideoTexture&&At(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const ge=I.image;if(ge===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,I,E);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function F(I,E){const Z=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){se(Z,I,E);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function G(I,E){const Z=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){se(Z,I,E);return}i.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function W(I,E){const Z=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){ue(Z,I,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const Se={[Hh]:s.REPEAT,[Ra]:s.CLAMP_TO_EDGE,[Gh]:s.MIRRORED_REPEAT},xe={[On]:s.NEAREST,[k1]:s.NEAREST_MIPMAP_NEAREST,[kc]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[jd]:s.LINEAR_MIPMAP_NEAREST,[jr]:s.LINEAR_MIPMAP_LINEAR},B={[j1]:s.NEVER,[J1]:s.ALWAYS,[Y1]:s.LESS,[Ip]:s.LEQUAL,[Z1]:s.EQUAL,[Hp]:s.GEQUAL,[K1]:s.GREATER,[Q1]:s.NOTEQUAL};function ne(I,E){if(E.type===Yi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===jd||E.magFilter===kc||E.magFilter===jr||E.minFilter===In||E.minFilter===jd||E.minFilter===kc||E.minFilter===jr)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Se[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Se[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Se[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,xe[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,xe[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==kc&&E.minFilter!==jr||E.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function fe(I,E){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",z));const ge=E.source;let Me=x.get(ge);Me===void 0&&(Me={},x.set(ge,Me));const pe=te(E);if(pe!==I.__cacheKey){Me[pe]===void 0&&(Me[pe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),Me[pe].usedTimes++;const $e=Me[I.__cacheKey];$e!==void 0&&(Me[I.__cacheKey].usedTimes--,$e.usedTimes===0&&b(E)),I.__cacheKey=pe,I.__webglTexture=Me[pe].texture}return Z}function Ee(I,E,Z){return Math.floor(Math.floor(I/Z)/E)}function Ne(I,E,Z,ge){const pe=I.updateRanges;if(pe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Z,ge,E.data);else{pe.sort((Ae,Re)=>Ae.start-Re.start);let $e=0;for(let Ae=1;Ae<pe.length;Ae++){const Re=pe[$e],Ge=pe[Ae],Be=Re.start+Re.count,Le=Ee(Ge.start,E.width,4),ht=Ee(Re.start,E.width,4);Ge.start<=Be+1&&Le===ht&&Ee(Ge.start+Ge.count-1,E.width,4)===Le?Re.count=Math.max(Re.count,Ge.start+Ge.count-Re.start):(++$e,pe[$e]=Ge)}pe.length=$e+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),Ye=s.getParameter(s.UNPACK_SKIP_PIXELS),rt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ae=0,Re=pe.length;Ae<Re;Ae++){const Ge=pe[Ae],Be=Math.floor(Ge.start/4),Le=Math.ceil(Ge.count/4),ht=Be%E.width,Y=Math.floor(Be/E.width),Pe=Le,Ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(s.TEXTURE_2D,0,ht,Y,Pe,Ce,Z,ge,E.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,rt)}}function se(I,E,Z){let ge=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=s.TEXTURE_3D);const Me=fe(I,E),pe=E.source;i.bindTexture(ge,I.__webglTexture,s.TEXTURE0+Z);const $e=a.get(pe);if(pe.version!==$e.__version||Me===!0){i.activeTexture(s.TEXTURE0+Z);const Ue=Ct.getPrimaries(Ct.workingColorSpace),Ye=E.colorSpace===mr?null:Ct.getPrimaries(E.colorSpace),rt=E.colorSpace===mr||Ue===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Ae=A(E.image,!1,l.maxTextureSize);Ae=zt(E,Ae);const Re=c.convert(E.format,E.colorSpace),Ge=c.convert(E.type);let Be=L(E.internalFormat,Re,Ge,E.colorSpace,E.isVideoTexture);ne(ge,E);let Le;const ht=E.mipmaps,Y=E.isVideoTexture!==!0,Pe=$e.__version===void 0||Me===!0,Ce=pe.dataReady,Ie=N(E,Ae);if(E.isDepthTexture)Be=O(E.format===Yr,E.type),Pe&&(Y?i.texStorage2D(s.TEXTURE_2D,1,Be,Ae.width,Ae.height):i.texImage2D(s.TEXTURE_2D,0,Be,Ae.width,Ae.height,0,Re,Ge,null));else if(E.isDataTexture)if(ht.length>0){Y&&Pe&&i.texStorage2D(s.TEXTURE_2D,Ie,Be,ht[0].width,ht[0].height);for(let Te=0,ye=ht.length;Te<ye;Te++)Le=ht[Te],Y?Ce&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,Re,Ge,Le.data):i.texImage2D(s.TEXTURE_2D,Te,Be,Le.width,Le.height,0,Re,Ge,Le.data);E.generateMipmaps=!1}else Y?(Pe&&i.texStorage2D(s.TEXTURE_2D,Ie,Be,Ae.width,Ae.height),Ce&&Ne(E,Ae,Re,Ge)):i.texImage2D(s.TEXTURE_2D,0,Be,Ae.width,Ae.height,0,Re,Ge,Ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Y&&Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Be,ht[0].width,ht[0].height,Ae.depth);for(let Te=0,ye=ht.length;Te<ye;Te++)if(Le=ht[Te],E.format!==Ii)if(Re!==null)if(Y){if(Ce)if(E.layerUpdates.size>0){const we=g_(Le.width,Le.height,E.format,E.type);for(const st of E.layerUpdates){const It=Le.data.subarray(st*we/Le.data.BYTES_PER_ELEMENT,(st+1)*we/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,st,Le.width,Le.height,1,Re,It)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,Ae.depth,Re,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,Be,Le.width,Le.height,Ae.depth,0,Le.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ce&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,Ae.depth,Re,Ge,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,Be,Le.width,Le.height,Ae.depth,0,Re,Ge,Le.data)}else{Y&&Pe&&i.texStorage2D(s.TEXTURE_2D,Ie,Be,ht[0].width,ht[0].height);for(let Te=0,ye=ht.length;Te<ye;Te++)Le=ht[Te],E.format!==Ii?Re!==null?Y?Ce&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,Re,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,Be,Le.width,Le.height,0,Le.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ce&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,Re,Ge,Le.data):i.texImage2D(s.TEXTURE_2D,Te,Be,Le.width,Le.height,0,Re,Ge,Le.data)}else if(E.isDataArrayTexture)if(Y){if(Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Be,Ae.width,Ae.height,Ae.depth),Ce)if(E.layerUpdates.size>0){const Te=g_(Ae.width,Ae.height,E.format,E.type);for(const ye of E.layerUpdates){const we=Ae.data.subarray(ye*Te/Ae.data.BYTES_PER_ELEMENT,(ye+1)*Te/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,Ae.width,Ae.height,1,Re,Ge,we)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Re,Ge,Ae.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,Ae.width,Ae.height,Ae.depth,0,Re,Ge,Ae.data);else if(E.isData3DTexture)Y?(Pe&&i.texStorage3D(s.TEXTURE_3D,Ie,Be,Ae.width,Ae.height,Ae.depth),Ce&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Re,Ge,Ae.data)):i.texImage3D(s.TEXTURE_3D,0,Be,Ae.width,Ae.height,Ae.depth,0,Re,Ge,Ae.data);else if(E.isFramebufferTexture){if(Pe)if(Y)i.texStorage2D(s.TEXTURE_2D,Ie,Be,Ae.width,Ae.height);else{let Te=Ae.width,ye=Ae.height;for(let we=0;we<Ie;we++)i.texImage2D(s.TEXTURE_2D,we,Be,Te,ye,0,Re,Ge,null),Te>>=1,ye>>=1}}else if(ht.length>0){if(Y&&Pe){const Te=Qe(ht[0]);i.texStorage2D(s.TEXTURE_2D,Ie,Be,Te.width,Te.height)}for(let Te=0,ye=ht.length;Te<ye;Te++)Le=ht[Te],Y?Ce&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Re,Ge,Le):i.texImage2D(s.TEXTURE_2D,Te,Be,Re,Ge,Le);E.generateMipmaps=!1}else if(Y){if(Pe){const Te=Qe(Ae);i.texStorage2D(s.TEXTURE_2D,Ie,Be,Te.width,Te.height)}Ce&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ge,Ae)}else i.texImage2D(s.TEXTURE_2D,0,Be,Re,Ge,Ae);S(E)&&_(ge),$e.__version=pe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ue(I,E,Z){if(E.image.length!==6)return;const ge=fe(I,E),Me=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Z);const pe=a.get(Me);if(Me.version!==pe.__version||ge===!0){i.activeTexture(s.TEXTURE0+Z);const $e=Ct.getPrimaries(Ct.workingColorSpace),Ue=E.colorSpace===mr?null:Ct.getPrimaries(E.colorSpace),Ye=E.colorSpace===mr||$e===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const rt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ae=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let ye=0;ye<6;ye++)!rt&&!Ae?Re[ye]=A(E.image[ye],!0,l.maxCubemapSize):Re[ye]=Ae?E.image[ye].image:E.image[ye],Re[ye]=zt(E,Re[ye]);const Ge=Re[0],Be=c.convert(E.format,E.colorSpace),Le=c.convert(E.type),ht=L(E.internalFormat,Be,Le,E.colorSpace),Y=E.isVideoTexture!==!0,Pe=pe.__version===void 0||ge===!0,Ce=Me.dataReady;let Ie=N(E,Ge);ne(s.TEXTURE_CUBE_MAP,E);let Te;if(rt){Y&&Pe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ht,Ge.width,Ge.height);for(let ye=0;ye<6;ye++){Te=Re[ye].mipmaps;for(let we=0;we<Te.length;we++){const st=Te[we];E.format!==Ii?Be!==null?Y?Ce&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,0,0,st.width,st.height,Be,st.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,ht,st.width,st.height,0,st.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,0,0,st.width,st.height,Be,Le,st.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,ht,st.width,st.height,0,Be,Le,st.data)}}}else{if(Te=E.mipmaps,Y&&Pe){Te.length>0&&Ie++;const ye=Qe(Re[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ht,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ae){Y?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Re[ye].width,Re[ye].height,Be,Le,Re[ye].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ht,Re[ye].width,Re[ye].height,0,Be,Le,Re[ye].data);for(let we=0;we<Te.length;we++){const It=Te[we].image[ye].image;Y?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,0,0,It.width,It.height,Be,Le,It.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,ht,It.width,It.height,0,Be,Le,It.data)}}else{Y?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Be,Le,Re[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ht,Be,Le,Re[ye]);for(let we=0;we<Te.length;we++){const st=Te[we];Y?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,0,0,Be,Le,st.image[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,ht,Be,Le,st.image[ye])}}}S(E)&&_(s.TEXTURE_CUBE_MAP),pe.__version=Me.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function De(I,E,Z,ge,Me,pe){const $e=c.convert(Z.format,Z.colorSpace),Ue=c.convert(Z.type),Ye=L(Z.internalFormat,$e,Ue,Z.colorSpace),rt=a.get(E),Ae=a.get(Z);if(Ae.__renderTarget=E,!rt.__hasExternalTextures){const Re=Math.max(1,E.width>>pe),Ge=Math.max(1,E.height>>pe);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?i.texImage3D(Me,pe,Ye,Re,Ge,E.depth,0,$e,Ue,null):i.texImage2D(Me,pe,Ye,Re,Ge,0,$e,Ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,I),$t(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,Me,Ae.__webglTexture,0,X(E)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,Me,Ae.__webglTexture,pe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(I,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const ge=E.depthTexture,Me=ge&&ge.isDepthTexture?ge.type:null,pe=O(E.stencilBuffer,Me),$e=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;$t(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X(E),pe,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,X(E),pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,I)}else{const ge=E.textures;for(let Me=0;Me<ge.length;Me++){const pe=ge[Me],$e=c.convert(pe.format,pe.colorSpace),Ue=c.convert(pe.type),Ye=L(pe.internalFormat,$e,Ue,pe.colorSpace);$t(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X(E),Ye,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,X(E),Ye,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ye,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(I,E,Z){const ge=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=a.get(E.depthTexture);if(Me.__renderTarget=E,(!Me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ge){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),Me.__webglTexture===void 0){Me.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E.depthTexture);const rt=c.convert(E.depthTexture.format),Ae=c.convert(E.depthTexture.type);let Re;E.depthTexture.format===Na?Re=s.DEPTH_COMPONENT24:E.depthTexture.format===Yr&&(Re=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Re,E.width,E.height,0,rt,Ae,null)}}else re(E.depthTexture,0);const pe=Me.__webglTexture,$e=X(E),Ue=ge?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,Ye=E.depthTexture.format===Yr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Na)$t(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ye,Ue,pe,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Ye,Ue,pe,0);else if(E.depthTexture.format===Yr)$t(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ye,Ue,pe,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Ye,Ue,pe,0);else throw new Error("Unknown depthTexture format")}function dt(I){const E=a.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const ge=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){const Me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",Me)};ge.addEventListener("dispose",Me),E.__depthDisposeCallback=Me}E.__boundDepthTexture=ge}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let ge=0;ge<6;ge++)He(E.__webglFramebuffer[ge],I,ge);else{const ge=I.texture.mipmaps;ge&&ge.length>0?He(E.__webglFramebuffer[0],I,0):He(E.__webglFramebuffer,I,0)}else if(Z){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=s.createRenderbuffer(),ke(E.__webglDepthbuffer[ge],I,!1);else{const Me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,pe)}}else{const ge=I.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ke(E.__webglDepthbuffer,I,!1);else{const Me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,pe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(I,E,Z){const ge=a.get(I);E!==void 0&&De(ge.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&dt(I)}function St(I){const E=I.texture,Z=a.get(I),ge=a.get(E);I.addEventListener("dispose",P);const Me=I.textures,pe=I.isWebGLCubeRenderTarget===!0,$e=Me.length>1;if($e||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=E.version,f.memory.textures++),pe){Z.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Ue]=[];for(let Ye=0;Ye<E.mipmaps.length;Ye++)Z.__webglFramebuffer[Ue][Ye]=s.createFramebuffer()}else Z.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)Z.__webglFramebuffer[Ue]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if($e)for(let Ue=0,Ye=Me.length;Ue<Ye;Ue++){const rt=a.get(Me[Ue]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),f.memory.textures++)}if(I.samples>0&&$t(I)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Me.length;Ue++){const Ye=Me[Ue];Z.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ue]);const rt=c.convert(Ye.format,Ye.colorSpace),Ae=c.convert(Ye.type),Re=L(Ye.internalFormat,rt,Ae,Ye.colorSpace,I.isXRRenderTarget===!0),Ge=X(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Re,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(Z.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){i.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)De(Z.__webglFramebuffer[Ue][Ye],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ye);else De(Z.__webglFramebuffer[Ue],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(E)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if($e){for(let Ue=0,Ye=Me.length;Ue<Ye;Ue++){const rt=Me[Ue],Ae=a.get(rt);let Re=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Re,Ae.__webglTexture),ne(Re,rt),De(Z.__webglFramebuffer,I,rt,s.COLOR_ATTACHMENT0+Ue,Re,0),S(rt)&&_(Re)}i.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ue=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,ge.__webglTexture),ne(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)De(Z.__webglFramebuffer[Ye],I,E,s.COLOR_ATTACHMENT0,Ue,Ye);else De(Z.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,Ue,0);S(E)&&_(Ue),i.unbindTexture()}I.depthBuffer&&dt(I)}function _t(I){const E=I.textures;for(let Z=0,ge=E.length;Z<ge;Z++){const Me=E[Z];if(S(Me)){const pe=D(I),$e=a.get(Me).__webglTexture;i.bindTexture(pe,$e),_(pe),i.unbindTexture()}}}const Nt=[],ut=[];function an(I){if(I.samples>0){if($t(I)===!1){const E=I.textures,Z=I.width,ge=I.height;let Me=s.COLOR_BUFFER_BIT;const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=a.get(I),Ue=E.length>1;if(Ue)for(let rt=0;rt<E.length;rt++)i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ye=I.texture.mipmaps;Ye&&Ye.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let rt=0;rt<E.length;rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[rt]);const Ae=a.get(E[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,Me,s.NEAREST),m===!0&&(Nt.length=0,ut.length=0,Nt.push(s.COLOR_ATTACHMENT0+rt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Nt.push(pe),ut.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let rt=0;rt<E.length;rt++){i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,$e.__webglColorRenderbuffer[rt]);const Ae=a.get(E[rt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,Ae,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function X(I){return Math.min(l.maxSamples,I.samples)}function $t(I){const E=a.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function At(I){const E=f.render.frame;v.get(I)!==E&&(v.set(I,E),I.update())}function zt(I,E){const Z=I.colorSpace,ge=I.format,Me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==eo&&Z!==mr&&(Ct.getTransfer(Z)===kt?(ge!==Ii||Me!==Ti)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",Z)),E}function Qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.setTexture2D=re,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=Yt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Sw(s,e){function i(a,l=mr){let c;const f=Ct.getTransfer(l);if(a===Ti)return s.UNSIGNED_BYTE;if(a===Op)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Pp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===Lx)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===Nx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===Dx)return s.BYTE;if(a===Ux)return s.SHORT;if(a===vl)return s.UNSIGNED_SHORT;if(a===Np)return s.INT;if(a===$i)return s.UNSIGNED_INT;if(a===Yi)return s.FLOAT;if(a===La)return s.HALF_FLOAT;if(a===Ox)return s.ALPHA;if(a===Px)return s.RGB;if(a===Ii)return s.RGBA;if(a===Na)return s.DEPTH_COMPONENT;if(a===Yr)return s.DEPTH_STENCIL;if(a===Fx)return s.RED;if(a===Fp)return s.RED_INTEGER;if(a===$s)return s.RG;if(a===zp)return s.RG_INTEGER;if(a===Bp)return s.RGBA_INTEGER;if(a===mu||a===gu||a===vu||a===_u)if(f===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===_u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Vh||a===kh||a===Xh||a===Wh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Xh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===qh||a===jh||a===Yh||a===Zh||a===Kh||a===Qh||a===Jh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===qh||a===jh)return f===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Yh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Zh)return c.COMPRESSED_R11_EAC;if(a===Kh)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Qh)return c.COMPRESSED_RG11_EAC;if(a===Jh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===$h||a===ep||a===tp||a===np||a===ip||a===ap||a===rp||a===sp||a===op||a===lp||a===cp||a===up||a===fp||a===dp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===$h)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ep)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===tp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===np)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ip)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ap)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===rp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===sp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===op)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===lp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===cp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===up)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===fp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===dp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===hp||a===pp||a===mp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===hp)return f===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===pp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===gp||a===vp||a===_p||a===xp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===gp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===vp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===_p)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===xp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===_l?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const Mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bw=`
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

}`;class Ew{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const a=new Kx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new ea({vertexShader:Mw,fragmentShader:bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new wu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tw extends so{constructor(e,i){super();const a=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",S=new Ew,_={},D=i.getContextAttributes();let L=null,O=null;const N=[],z=[],P=new Xt;let U=null;const b=new Ei;b.viewport=new cn;const R=new Ei;R.viewport=new cn;const H=[b,R],j=new PT;let K=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ue=N[se];return ue===void 0&&(ue=new gh,N[se]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(se){let ue=N[se];return ue===void 0&&(ue=new gh,N[se]=ue),ue.getGripSpace()},this.getHand=function(se){let ue=N[se];return ue===void 0&&(ue=new gh,N[se]=ue),ue.getHandSpace()};function re(se){const ue=z.indexOf(se.inputSource);if(ue===-1)return;const De=N[ue];De!==void 0&&(De.update(se.inputSource,se.frame,p||f),De.dispatchEvent({type:se.type,data:se.inputSource}))}function F(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",G);for(let se=0;se<N.length;se++){const ue=z[se];ue!==null&&(z[se]=null,N[se].disconnect(ue))}K=null,te=null,S.reset();for(const se in _)delete _[se];e.setRenderTarget(L),M=null,x=null,g=null,l=null,O=null,Ne.stop(),a.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,a.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,a.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",F),l.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await i.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,ke=null,He=null;D.depth&&(He=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=D.stencil?Yr:Na,ke=D.stencil?_l:$i);const dt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(dt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Ji(x.textureWidth,x.textureHeight,{format:Ii,type:Ti,depthTexture:new yl(x.textureWidth,x.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const De={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Ji(M.framebufferWidth,M.framebufferHeight,{format:Ii,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ne.setContext(l),Ne.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(se){for(let ue=0;ue<se.removed.length;ue++){const De=se.removed[ue],ke=z.indexOf(De);ke>=0&&(z[ke]=null,N[ke].disconnect(De))}for(let ue=0;ue<se.added.length;ue++){const De=se.added[ue];let ke=z.indexOf(De);if(ke===-1){for(let dt=0;dt<N.length;dt++)if(dt>=z.length){z.push(De),ke=dt;break}else if(z[dt]===null){z[dt]=De,ke=dt;break}if(ke===-1)break}const He=N[ke];He&&He.connect(De)}}const W=new ce,Se=new ce;function xe(se,ue,De){W.setFromMatrixPosition(ue.matrixWorld),Se.setFromMatrixPosition(De.matrixWorld);const ke=W.distanceTo(Se),He=ue.projectionMatrix.elements,dt=De.projectionMatrix.elements,Yt=He[14]/(He[10]-1),St=He[14]/(He[10]+1),_t=(He[9]+1)/He[5],Nt=(He[9]-1)/He[5],ut=(He[8]-1)/He[0],an=(dt[8]+1)/dt[0],X=Yt*ut,$t=Yt*an,At=ke/(-ut+an),zt=At*-ut;if(ue.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(zt),se.translateZ(At),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),He[10]===-1)se.projectionMatrix.copy(ue.projectionMatrix),se.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Qe=Yt+At,I=St+At,E=X-zt,Z=$t+(ke-zt),ge=_t*St/I*Qe,Me=Nt*St/I*Qe;se.projectionMatrix.makePerspective(E,Z,ge,Me,Qe,I),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function B(se,ue){ue===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ue.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let ue=se.near,De=se.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(De=S.depthFar)),j.near=R.near=b.near=ue,j.far=R.far=b.far=De,(K!==j.near||te!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),K=j.near,te=j.far),j.layers.mask=se.layers.mask|6,b.layers.mask=j.layers.mask&3,R.layers.mask=j.layers.mask&5;const ke=se.parent,He=j.cameras;B(j,ke);for(let dt=0;dt<He.length;dt++)B(He[dt],ke);He.length===2?xe(j,b,R):j.projectionMatrix.copy(b.projectionMatrix),ne(se,j,ke)};function ne(se,ue,De){De===null?se.matrix.copy(ue.matrixWorld):(se.matrix.copy(De.matrixWorld),se.matrix.invert(),se.matrix.multiply(ue.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ue.projectionMatrix),se.projectionMatrixInverse.copy(ue.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=yp*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(se){m=se,x!==null&&(x.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(se){return _[se]};let fe=null;function Ee(se,ue){if(v=ue.getViewerPose(p||f),T=ue,v!==null){const De=v.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let ke=!1;De.length!==j.cameras.length&&(j.cameras.length=0,ke=!0);for(let St=0;St<De.length;St++){const _t=De[St];let Nt=null;if(M!==null)Nt=M.getViewport(_t);else{const an=g.getViewSubImage(x,_t);Nt=an.viewport,St===0&&(e.setRenderTargetTextures(O,an.colorTexture,an.depthStencilTexture),e.setRenderTarget(O))}let ut=H[St];ut===void 0&&(ut=new Ei,ut.layers.enable(St),ut.viewport=new cn,H[St]=ut),ut.matrix.fromArray(_t.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(_t.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),St===0&&(j.matrix.copy(ut.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),ke===!0&&j.cameras.push(ut)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=a.getBinding();const St=g.getDepthInformation(De[0]);St&&St.isValid&&St.texture&&S.init(St,l.renderState)}if(He&&He.includes("camera-access")&&A){e.state.unbindTexture(),g=a.getBinding();for(let St=0;St<De.length;St++){const _t=De[St].camera;if(_t){let Nt=_[_t];Nt||(Nt=new Kx,_[_t]=Nt);const ut=g.getCameraImage(_t);Nt.sourceTexture=ut}}}}for(let De=0;De<N.length;De++){const ke=z[De],He=N[De];ke!==null&&He!==void 0&&He.update(ke,ue,p||f)}fe&&fe(se,ue),ue.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ue}),T=null}const Ne=new Jx;Ne.setAnimationLoop(Ee),this.setAnimationLoop=function(se){fe=se},this.dispose=function(){}}}const Vr=new Oa,Aw=new un;function Rw(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function a(S,_){_.color.getRGB(S.fogColor.value,Xx(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,D,L,O){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,O)):_.isMeshMatcapMaterial?(c(S,_),T(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),A(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,D,L):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Jn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Jn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const D=e.get(_),L=D.envMap,O=D.envMapRotation;L&&(S.envMap.value=L,Vr.copy(O),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),S.envMapRotation.value.setFromMatrix4(Aw.makeRotationFromEuler(Vr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,D,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*D,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,D){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const D=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function Cw(s,e,i,a){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,L){const O=L.program;a.uniformBlockBinding(D,O)}function p(D,L){let O=l[D.id];O===void 0&&(T(D),O=v(D),l[D.id]=O,D.addEventListener("dispose",S));const N=L.program;a.updateUBOMapping(D,N);const z=e.render.frame;c[D.id]!==z&&(x(D),c[D.id]=z)}function v(D){const L=g();D.__bindingPointIndex=L;const O=s.createBuffer(),N=D.__size,z=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,N,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,O),O}function g(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=l[D.id],O=D.uniforms,N=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let z=0,P=O.length;z<P;z++){const U=Array.isArray(O[z])?O[z]:[O[z]];for(let b=0,R=U.length;b<R;b++){const H=U[b];if(M(H,z,b,N)===!0){const j=H.__offset,K=Array.isArray(H.value)?H.value:[H.value];let te=0;for(let re=0;re<K.length;re++){const F=K[re],G=A(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,j+te,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,te),te+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,L,O,N){const z=D.value,P=L+"_"+O;if(N[P]===void 0)return typeof z=="number"||typeof z=="boolean"?N[P]=z:N[P]=z.clone(),!0;{const U=N[P];if(typeof z=="number"||typeof z=="boolean"){if(U!==z)return N[P]=z,!0}else if(U.equals(z)===!1)return U.copy(z),!0}return!1}function T(D){const L=D.uniforms;let O=0;const N=16;for(let P=0,U=L.length;P<U;P++){const b=Array.isArray(L[P])?L[P]:[L[P]];for(let R=0,H=b.length;R<H;R++){const j=b[R],K=Array.isArray(j.value)?j.value:[j.value];for(let te=0,re=K.length;te<re;te++){const F=K[te],G=A(F),W=O%N,Se=W%G.boundary,xe=W+Se;O+=Se,xe!==0&&N-xe<G.storage&&(O+=N-xe),j.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=O,O+=G.storage}}}const z=O%N;return z>0&&(O+=N-z),D.__size=O,D.__cache={},this}function A(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const O=f.indexOf(L.__bindingPointIndex);f.splice(O,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const D in l)s.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const ww=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function Dw(){return qi===null&&(qi=new AT(ww,16,16,$s,La),qi.name="DFG_LUT",qi.minFilter=In,qi.magFilter=In,qi.wrapS=Ra,qi.wrapT=Ra,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class Uw{constructor(e={}){const{canvas:i=$1(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Ti}=e;this.isWebGLRenderer=!0;let T;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=a.getContextAttributes().alpha}else T=f;const A=M,S=new Set([Bp,zp,Fp]),_=new Set([Ti,$i,vl,_l,Op,Pp]),D=new Uint32Array(4),L=new Int32Array(4);let O=null,N=null;const z=[],P=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let R=!1;this._outputColorSpace=bi;let H=0,j=0,K=null,te=-1,re=null;const F=new cn,G=new cn;let W=null;const Se=new wt(0);let xe=0,B=i.width,ne=i.height,fe=1,Ee=null,Ne=null;const se=new cn(0,0,B,ne),ue=new cn(0,0,B,ne);let De=!1;const ke=new Yx;let He=!1,dt=!1;const Yt=new un,St=new ce,_t=new cn,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function an(){return K===null?fe:1}let X=a;function $t(w,Q){return i.getContext(w,Q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Lp}`),i.addEventListener("webglcontextlost",st,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),X===null){const Q="webgl2";if(X=$t(Q,w),X===null)throw $t(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Lt("WebGLRenderer: "+w.message),w}let At,zt,Qe,I,E,Z,ge,Me,pe,$e,Ue,Ye,rt,Ae,Re,Ge,Be,Le,ht,Y,Pe,Ce,Ie,Te;function ye(){At=new D2(X),At.init(),Ce=new Sw(X,At),zt=new S2(X,At,e,Ce),Qe=new xw(X,At),zt.reversedDepthBuffer&&x&&Qe.buffers.depth.setReversed(!0),I=new N2(X),E=new aw,Z=new yw(X,At,Qe,E,zt,Ce,I),ge=new b2(b),Me=new w2(b),pe=new zT(X),Ie=new x2(X,pe),$e=new U2(X,pe,I,Ie),Ue=new P2(X,$e,pe,I),ht=new O2(X,zt,Z),Ge=new M2(E),Ye=new iw(b,ge,Me,At,zt,Ie,Ge),rt=new Rw(b,E),Ae=new sw,Re=new dw(At),Le=new _2(b,ge,Me,Qe,Ue,T,m),Be=new vw(b,Ue,zt),Te=new Cw(X,I,zt,Qe),Y=new y2(X,At,I),Pe=new L2(X,At,I),I.programs=Ye.programs,b.capabilities=zt,b.extensions=At,b.properties=E,b.renderLists=Ae,b.shadowMap=Be,b.state=Qe,b.info=I}ye(),A!==Ti&&(U=new z2(A,i.width,i.height,l,c));const we=new Tw(b,X);this.xr=we,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=At.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=At.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(w){w!==void 0&&(fe=w,this.setSize(B,ne,!1))},this.getSize=function(w){return w.set(B,ne)},this.setSize=function(w,Q,de=!0){if(we.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,ne=Q,i.width=Math.floor(w*fe),i.height=Math.floor(Q*fe),de===!0&&(i.style.width=w+"px",i.style.height=Q+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(B*fe,ne*fe).floor()},this.setDrawingBufferSize=function(w,Q,de){B=w,ne=Q,fe=de,i.width=Math.floor(w*de),i.height=Math.floor(Q*de),this.setViewport(0,0,w,Q)},this.setEffects=function(w){if(A===Ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Q=0;Q<w.length;Q++)if(w[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,Q,de,oe){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,Q,de,oe),Qe.viewport(F.copy(se).multiplyScalar(fe).round())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,Q,de,oe){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,Q,de,oe),Qe.scissor(G.copy(ue).multiplyScalar(fe).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){Qe.setScissorTest(De=w)},this.setOpaqueSort=function(w){Ee=w},this.setTransparentSort=function(w){Ne=w},this.getClearColor=function(w){return w.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,de=!0){let oe=0;if(w){let ee=!1;if(K!==null){const Oe=K.texture.format;ee=S.has(Oe)}if(ee){const Oe=K.texture.type,Ve=_.has(Oe),Fe=Le.getClearColor(),Xe=Le.getClearAlpha(),Ze=Fe.r,nt=Fe.g,Ke=Fe.b;Ve?(D[0]=Ze,D[1]=nt,D[2]=Ke,D[3]=Xe,X.clearBufferuiv(X.COLOR,0,D)):(L[0]=Ze,L[1]=nt,L[2]=Ke,L[3]=Xe,X.clearBufferiv(X.COLOR,0,L))}else oe|=X.COLOR_BUFFER_BIT}Q&&(oe|=X.DEPTH_BUFFER_BIT),de&&(oe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",st,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Le.dispose(),Ae.dispose(),Re.dispose(),E.dispose(),ge.dispose(),Me.dispose(),Ue.dispose(),Ie.dispose(),Te.dispose(),Ye.dispose(),we.dispose(),we.removeEventListener("sessionstart",$r),we.removeEventListener("sessionend",uo),Hi.stop()};function st(w){w.preventDefault(),Qv("WebGLRenderer: Context Lost."),R=!0}function It(){Qv("WebGLRenderer: Context Restored."),R=!1;const w=I.autoReset,Q=Be.enabled,de=Be.autoUpdate,oe=Be.needsUpdate,ee=Be.type;ye(),I.autoReset=w,Be.enabled=Q,Be.autoUpdate=de,Be.needsUpdate=oe,Be.type=ee}function Rt(w){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pn(w){const Q=w.target;Q.removeEventListener("dispose",Pn),Ci(Q)}function Ci(w){wl(w),E.remove(w)}function wl(w){const Q=E.get(w).programs;Q!==void 0&&(Q.forEach(function(de){Ye.releaseProgram(de)}),w.isShaderMaterial&&Ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,de,oe,ee,Oe){Q===null&&(Q=Nt);const Ve=ee.isMesh&&ee.matrixWorld.determinant()<0,Fe=_r(w,Q,de,oe,ee);Qe.setMaterial(oe,Ve);let Xe=de.index,Ze=1;if(oe.wireframe===!0){if(Xe=$e.getWireframeAttribute(de),Xe===void 0)return;Ze=2}const nt=de.drawRange,Ke=de.attributes.position;let it=nt.start*Ze,Ot=(nt.start+nt.count)*Ze;Oe!==null&&(it=Math.max(it,Oe.start*Ze),Ot=Math.min(Ot,(Oe.start+Oe.count)*Ze)),Xe!==null?(it=Math.max(it,0),Ot=Math.min(Ot,Xe.count)):Ke!=null&&(it=Math.max(it,0),Ot=Math.min(Ot,Ke.count));const en=Ot-it;if(en<0||en===1/0)return;Ie.setup(ee,oe,Fe,de,Xe);let Kt,Bt=Y;if(Xe!==null&&(Kt=pe.get(Xe),Bt=Pe,Bt.setIndex(Kt)),ee.isMesh)oe.wireframe===!0?(Qe.setLineWidth(oe.wireframeLinewidth*an()),Bt.setMode(X.LINES)):Bt.setMode(X.TRIANGLES);else if(ee.isLine){let et=oe.linewidth;et===void 0&&(et=1),Qe.setLineWidth(et*an()),ee.isLineSegments?Bt.setMode(X.LINES):ee.isLineLoop?Bt.setMode(X.LINE_LOOP):Bt.setMode(X.LINE_STRIP)}else ee.isPoints?Bt.setMode(X.POINTS):ee.isSprite&&Bt.setMode(X.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)xl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const et=ee._multiDrawStarts,Pt=ee._multiDrawCounts,ot=ee._multiDrawCount,Tn=Xe?pe.get(Xe).bytesPerElement:1,ta=E.get(oe).currentProgram.getUniforms();for(let An=0;An<ot;An++)ta.setValue(X,"_gl_DrawID",An),Bt.render(et[An]/Tn,Pt[An])}else if(ee.isInstancedMesh)Bt.renderInstances(it,en,ee.count);else if(de.isInstancedBufferGeometry){const et=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Pt=Math.min(de.instanceCount,et);Bt.renderInstances(it,en,Pt)}else Bt.render(it,en)};function lo(w,Q,de){w.transparent===!0&&w.side===Aa&&w.forceSinglePass===!1?(w.side=Jn,w.needsUpdate=!0,ts(w,Q,de),w.side=vr,w.needsUpdate=!0,ts(w,Q,de),w.side=Aa):ts(w,Q,de)}this.compile=function(w,Q,de=null){de===null&&(de=w),N=Re.get(de),N.init(Q),P.push(N),de.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),w!==de&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),N.setupLights();const oe=new Set;return w.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Oe=ee.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const Fe=Oe[Ve];lo(Fe,de,ee),oe.add(Fe)}else lo(Oe,de,ee),oe.add(Oe)}),N=P.pop(),oe},this.compileAsync=function(w,Q,de=null){const oe=this.compile(w,Q,de);return new Promise(ee=>{function Oe(){if(oe.forEach(function(Ve){E.get(Ve).currentProgram.isReady()&&oe.delete(Ve)}),oe.size===0){ee(w);return}setTimeout(Oe,10)}At.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Jr=null;function co(w){Jr&&Jr(w)}function $r(){Hi.stop()}function uo(){Hi.start()}const Hi=new Jx;Hi.setAnimationLoop(co),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(w){Jr=w,we.setAnimationLoop(w),w===null?Hi.stop():Hi.start()},we.addEventListener("sessionstart",$r),we.addEventListener("sessionend",uo),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const de=we.enabled===!0&&we.isPresenting===!0,oe=U!==null&&(K===null||de)&&U.begin(b,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(Q),Q=we.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,Q,K),N=Re.get(w,P.length),N.init(Q),P.push(N),Yt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ke.setFromProjectionMatrix(Yt,Zi,Q.reversedDepth),dt=this.localClippingEnabled,He=Ge.init(this.clippingPlanes,dt),O=Ae.get(w,z.length),O.init(),z.push(O),we.enabled===!0&&we.isPresenting===!0){const Ve=b.xr.getDepthSensingMesh();Ve!==null&&di(Ve,Q,-1/0,b.sortObjects)}di(w,Q,0,b.sortObjects),O.finish(),b.sortObjects===!0&&O.sort(Ee,Ne),ut=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ut&&Le.addToRenderList(O,w),this.info.render.frame++,He===!0&&Ge.beginShadows();const ee=N.state.shadowsArray;if(Be.render(ee,w,Q),He===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&U.hasRenderPass())===!1){const Ve=O.opaque,Fe=O.transmissive;if(N.setupLights(),Q.isArrayCamera){const Xe=Q.cameras;if(Fe.length>0)for(let Ze=0,nt=Xe.length;Ze<nt;Ze++){const Ke=Xe[Ze];En(Ve,Fe,w,Ke)}ut&&Le.render(w);for(let Ze=0,nt=Xe.length;Ze<nt;Ze++){const Ke=Xe[Ze];fn(O,w,Ke,Ke.viewport)}}else Fe.length>0&&En(Ve,Fe,w,Q),ut&&Le.render(w),fn(O,w,Q)}K!==null&&j===0&&(Z.updateMultisampleRenderTarget(K),Z.updateRenderTargetMipmap(K)),oe&&U.end(b),w.isScene===!0&&w.onAfterRender(b,w,Q),Ie.resetDefaultState(),te=-1,re=null,P.pop(),P.length>0?(N=P[P.length-1],He===!0&&Ge.setGlobalState(b.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?O=z[z.length-1]:O=null};function di(w,Q,de,oe){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)de=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ke.intersectsSprite(w)){oe&&_t.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Yt);const Ve=Ue.update(w),Fe=w.material;Fe.visible&&O.push(w,Ve,Fe,de,_t.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ke.intersectsObject(w))){const Ve=Ue.update(w),Fe=w.material;if(oe&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_t.copy(w.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),_t.copy(Ve.boundingSphere.center)),_t.applyMatrix4(w.matrixWorld).applyMatrix4(Yt)),Array.isArray(Fe)){const Xe=Ve.groups;for(let Ze=0,nt=Xe.length;Ze<nt;Ze++){const Ke=Xe[Ze],it=Fe[Ke.materialIndex];it&&it.visible&&O.push(w,Ve,it,de,_t.z,Ke)}}else Fe.visible&&O.push(w,Ve,Fe,de,_t.z,null)}}const Oe=w.children;for(let Ve=0,Fe=Oe.length;Ve<Fe;Ve++)di(Oe[Ve],Q,de,oe)}function fn(w,Q,de,oe){const{opaque:ee,transmissive:Oe,transparent:Ve}=w;N.setupLightsView(de),He===!0&&Ge.setGlobalState(b.clippingPlanes,de),oe&&Qe.viewport(F.copy(oe)),ee.length>0&&wi(ee,Q,de),Oe.length>0&&wi(Oe,Q,de),Ve.length>0&&wi(Ve,Q,de),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function En(w,Q,de,oe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[oe.id]===void 0){const it=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[oe.id]=new Ji(1,1,{generateMipmaps:!0,type:it?La:Ti,minFilter:jr,samples:zt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Oe=N.state.transmissionRenderTarget[oe.id],Ve=oe.viewport||F;Oe.setSize(Ve.z*b.transmissionResolutionScale,Ve.w*b.transmissionResolutionScale);const Fe=b.getRenderTarget(),Xe=b.getActiveCubeFace(),Ze=b.getActiveMipmapLevel();b.setRenderTarget(Oe),b.getClearColor(Se),xe=b.getClearAlpha(),xe<1&&b.setClearColor(16777215,.5),b.clear(),ut&&Le.render(de);const nt=b.toneMapping;b.toneMapping=Qi;const Ke=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),N.setupLightsView(oe),He===!0&&Ge.setGlobalState(b.clippingPlanes,oe),wi(w,de,oe),Z.updateMultisampleRenderTarget(Oe),Z.updateRenderTargetMipmap(Oe),At.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ot=0,en=Q.length;Ot<en;Ot++){const Kt=Q[Ot],{object:Bt,geometry:et,material:Pt,group:ot}=Kt;if(Pt.side===Aa&&Bt.layers.test(oe.layers)){const Tn=Pt.side;Pt.side=Jn,Pt.needsUpdate=!0,es(Bt,de,oe,et,Pt,ot),Pt.side=Tn,Pt.needsUpdate=!0,it=!0}}it===!0&&(Z.updateMultisampleRenderTarget(Oe),Z.updateRenderTargetMipmap(Oe))}b.setRenderTarget(Fe,Xe,Ze),b.setClearColor(Se,xe),Ke!==void 0&&(oe.viewport=Ke),b.toneMapping=nt}function wi(w,Q,de){const oe=Q.isScene===!0?Q.overrideMaterial:null;for(let ee=0,Oe=w.length;ee<Oe;ee++){const Ve=w[ee],{object:Fe,geometry:Xe,group:Ze}=Ve;let nt=Ve.material;nt.allowOverride===!0&&oe!==null&&(nt=oe),Fe.layers.test(de.layers)&&es(Fe,Q,de,Xe,nt,Ze)}}function es(w,Q,de,oe,ee,Oe){w.onBeforeRender(b,Q,de,oe,ee,Oe),w.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(b,Q,de,oe,w,Oe),ee.transparent===!0&&ee.side===Aa&&ee.forceSinglePass===!1?(ee.side=Jn,ee.needsUpdate=!0,b.renderBufferDirect(de,Q,oe,ee,w,Oe),ee.side=vr,ee.needsUpdate=!0,b.renderBufferDirect(de,Q,oe,ee,w,Oe),ee.side=Aa):b.renderBufferDirect(de,Q,oe,ee,w,Oe),w.onAfterRender(b,Q,de,oe,ee,Oe)}function ts(w,Q,de){Q.isScene!==!0&&(Q=Nt);const oe=E.get(w),ee=N.state.lights,Oe=N.state.shadowsArray,Ve=ee.state.version,Fe=Ye.getParameters(w,ee.state,Oe,Q,de),Xe=Ye.getProgramCacheKey(Fe);let Ze=oe.programs;oe.environment=w.isMeshStandardMaterial?Q.environment:null,oe.fog=Q.fog,oe.envMap=(w.isMeshStandardMaterial?Me:ge).get(w.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",Pn),Ze=new Map,oe.programs=Ze);let nt=Ze.get(Xe);if(nt!==void 0){if(oe.currentProgram===nt&&oe.lightsStateVersion===Ve)return fo(w,Fe),nt}else Fe.uniforms=Ye.getUniforms(w),w.onBeforeCompile(Fe,b),nt=Ye.acquireProgram(Fe,Xe),Ze.set(Xe,nt),oe.uniforms=Fe.uniforms;const Ke=oe.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ke.clippingPlanes=Ge.uniform),fo(w,Fe),oe.needsLights=Fa(w),oe.lightsStateVersion=Ve,oe.needsLights&&(Ke.ambientLightColor.value=ee.state.ambient,Ke.lightProbe.value=ee.state.probe,Ke.directionalLights.value=ee.state.directional,Ke.directionalLightShadows.value=ee.state.directionalShadow,Ke.spotLights.value=ee.state.spot,Ke.spotLightShadows.value=ee.state.spotShadow,Ke.rectAreaLights.value=ee.state.rectArea,Ke.ltc_1.value=ee.state.rectAreaLTC1,Ke.ltc_2.value=ee.state.rectAreaLTC2,Ke.pointLights.value=ee.state.point,Ke.pointLightShadows.value=ee.state.pointShadow,Ke.hemisphereLights.value=ee.state.hemi,Ke.directionalShadowMap.value=ee.state.directionalShadowMap,Ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ke.spotShadowMap.value=ee.state.spotShadowMap,Ke.spotLightMatrix.value=ee.state.spotLightMatrix,Ke.spotLightMap.value=ee.state.spotLightMap,Ke.pointShadowMap.value=ee.state.pointShadowMap,Ke.pointShadowMatrix.value=ee.state.pointShadowMatrix),oe.currentProgram=nt,oe.uniformsList=null,nt}function Dl(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=xu.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function fo(w,Q){const de=E.get(w);de.outputColorSpace=Q.outputColorSpace,de.batching=Q.batching,de.batchingColor=Q.batchingColor,de.instancing=Q.instancing,de.instancingColor=Q.instancingColor,de.instancingMorph=Q.instancingMorph,de.skinning=Q.skinning,de.morphTargets=Q.morphTargets,de.morphNormals=Q.morphNormals,de.morphColors=Q.morphColors,de.morphTargetsCount=Q.morphTargetsCount,de.numClippingPlanes=Q.numClippingPlanes,de.numIntersection=Q.numClipIntersection,de.vertexAlphas=Q.vertexAlphas,de.vertexTangents=Q.vertexTangents,de.toneMapping=Q.toneMapping}function _r(w,Q,de,oe,ee){Q.isScene!==!0&&(Q=Nt),Z.resetTextureUnits();const Oe=Q.fog,Ve=oe.isMeshStandardMaterial?Q.environment:null,Fe=K===null?b.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:eo,Xe=(oe.isMeshStandardMaterial?Me:ge).get(oe.envMap||Ve),Ze=oe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,nt=!!de.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ke=!!de.morphAttributes.position,it=!!de.morphAttributes.normal,Ot=!!de.morphAttributes.color;let en=Qi;oe.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(en=b.toneMapping);const Kt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Bt=Kt!==void 0?Kt.length:0,et=E.get(oe),Pt=N.state.lights;if(He===!0&&(dt===!0||w!==re)){const Cn=w===re&&oe.id===te;Ge.setState(oe,w,Cn)}let ot=!1;oe.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Pt.state.version||et.outputColorSpace!==Fe||ee.isBatchedMesh&&et.batching===!1||!ee.isBatchedMesh&&et.batching===!0||ee.isBatchedMesh&&et.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&et.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&et.instancing===!1||!ee.isInstancedMesh&&et.instancing===!0||ee.isSkinnedMesh&&et.skinning===!1||!ee.isSkinnedMesh&&et.skinning===!0||ee.isInstancedMesh&&et.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&et.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&et.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&et.instancingMorph===!1&&ee.morphTexture!==null||et.envMap!==Xe||oe.fog===!0&&et.fog!==Oe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ge.numPlanes||et.numIntersection!==Ge.numIntersection)||et.vertexAlphas!==Ze||et.vertexTangents!==nt||et.morphTargets!==Ke||et.morphNormals!==it||et.morphColors!==Ot||et.toneMapping!==en||et.morphTargetsCount!==Bt)&&(ot=!0):(ot=!0,et.__version=oe.version);let Tn=et.currentProgram;ot===!0&&(Tn=ts(oe,Q,ee));let ta=!1,An=!1,hi=!1;const Ht=Tn.getUniforms(),Rn=et.uniforms;if(Qe.useProgram(Tn.program)&&(ta=!0,An=!0,hi=!0),oe.id!==te&&(te=oe.id,An=!0),ta||re!==w){Qe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ht.setValue(X,"projectionMatrix",w.projectionMatrix),Ht.setValue(X,"viewMatrix",w.matrixWorldInverse);const wn=Ht.map.cameraPosition;wn!==void 0&&wn.setValue(X,St.setFromMatrixPosition(w.matrixWorld)),zt.logarithmicDepthBuffer&&Ht.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ht.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),re!==w&&(re=w,An=!0,hi=!0)}if(et.needsLights&&(Pt.state.directionalShadowMap.length>0&&Ht.setValue(X,"directionalShadowMap",Pt.state.directionalShadowMap,Z),Pt.state.spotShadowMap.length>0&&Ht.setValue(X,"spotShadowMap",Pt.state.spotShadowMap,Z),Pt.state.pointShadowMap.length>0&&Ht.setValue(X,"pointShadowMap",Pt.state.pointShadowMap,Z)),ee.isSkinnedMesh){Ht.setOptional(X,ee,"bindMatrix"),Ht.setOptional(X,ee,"bindMatrixInverse");const Cn=ee.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ht.setValue(X,"boneTexture",Cn.boneTexture,Z))}ee.isBatchedMesh&&(Ht.setOptional(X,ee,"batchingTexture"),Ht.setValue(X,"batchingTexture",ee._matricesTexture,Z),Ht.setOptional(X,ee,"batchingIdTexture"),Ht.setValue(X,"batchingIdTexture",ee._indirectTexture,Z),Ht.setOptional(X,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ht.setValue(X,"batchingColorTexture",ee._colorsTexture,Z));const vn=de.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ht.update(ee,de,Tn),(An||et.receiveShadow!==ee.receiveShadow)&&(et.receiveShadow=ee.receiveShadow,Ht.setValue(X,"receiveShadow",ee.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Rn.envMap.value=Xe,Rn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Q.environment!==null&&(Rn.envMapIntensity.value=Q.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=Dw()),An&&(Ht.setValue(X,"toneMappingExposure",b.toneMappingExposure),et.needsLights&&ho(Rn,hi),Oe&&oe.fog===!0&&rt.refreshFogUniforms(Rn,Oe),rt.refreshMaterialUniforms(Rn,oe,fe,ne,N.state.transmissionRenderTarget[w.id]),xu.upload(X,Dl(et),Rn,Z)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(xu.upload(X,Dl(et),Rn,Z),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ht.setValue(X,"center",ee.center),Ht.setValue(X,"modelViewMatrix",ee.modelViewMatrix),Ht.setValue(X,"normalMatrix",ee.normalMatrix),Ht.setValue(X,"modelMatrix",ee.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Cn=oe.uniformsGroups;for(let wn=0,ns=Cn.length;wn<ns;wn++){const Di=Cn[wn];Te.update(Di,Tn),Te.bind(Di,Tn)}}return Tn}function ho(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function Fa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,Q,de){const oe=E.get(w);oe.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=Q,E.get(w.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:de,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const de=E.get(w);de.__webglFramebuffer=Q,de.__useDefaultFramebuffer=Q===void 0};const za=X.createFramebuffer();this.setRenderTarget=function(w,Q=0,de=0){K=w,H=Q,j=de;let oe=null,ee=!1,Oe=!1;if(w){const Fe=E.get(w);if(Fe.__useDefaultFramebuffer!==void 0){Qe.bindFramebuffer(X.FRAMEBUFFER,Fe.__webglFramebuffer),F.copy(w.viewport),G.copy(w.scissor),W=w.scissorTest,Qe.viewport(F),Qe.scissor(G),Qe.setScissorTest(W),te=-1;return}else if(Fe.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(Fe.__hasExternalTextures)Z.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const nt=w.depthTexture;if(Fe.__boundDepthTexture!==nt){if(nt!==null&&E.has(nt)&&(w.width!==nt.image.width||w.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const Ze=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[Q])?oe=Ze[Q][de]:oe=Ze[Q],ee=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?oe=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?oe=Ze[de]:oe=Ze,F.copy(w.viewport),G.copy(w.scissor),W=w.scissorTest}else F.copy(se).multiplyScalar(fe).floor(),G.copy(ue).multiplyScalar(fe).floor(),W=De;if(de!==0&&(oe=za),Qe.bindFramebuffer(X.FRAMEBUFFER,oe)&&Qe.drawBuffers(w,oe),Qe.viewport(F),Qe.scissor(G),Qe.setScissorTest(W),ee){const Fe=E.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Fe.__webglTexture,de)}else if(Oe){const Fe=Q;for(let Xe=0;Xe<w.textures.length;Xe++){const Ze=E.get(w.textures[Xe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,de,Fe)}}else if(w!==null&&de!==0){const Fe=E.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Fe.__webglTexture,de)}te=-1},this.readRenderTargetPixels=function(w,Q,de,oe,ee,Oe,Ve,Fe=0){if(!(w&&w.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){Qe.bindFramebuffer(X.FRAMEBUFFER,Xe);try{const Ze=w.textures[Fe],nt=Ze.format,Ke=Ze.type;if(!zt.textureFormatReadable(nt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Ke)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-oe&&de>=0&&de<=w.height-ee&&(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Fe),X.readPixels(Q,de,oe,ee,Ce.convert(nt),Ce.convert(Ke),Oe))}finally{const Ze=K!==null?E.get(K).__webglFramebuffer:null;Qe.bindFramebuffer(X.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,Q,de,oe,ee,Oe,Ve,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(Q>=0&&Q<=w.width-oe&&de>=0&&de<=w.height-ee){Qe.bindFramebuffer(X.FRAMEBUFFER,Xe);const Ze=w.textures[Fe],nt=Ze.format,Ke=Ze.type;if(!zt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,it),X.bufferData(X.PIXEL_PACK_BUFFER,Oe.byteLength,X.STREAM_READ),w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Fe),X.readPixels(Q,de,oe,ee,Ce.convert(nt),Ce.convert(Ke),0);const Ot=K!==null?E.get(K).__webglFramebuffer:null;Qe.bindFramebuffer(X.FRAMEBUFFER,Ot);const en=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await eT(X,en,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,it),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Oe),X.deleteBuffer(it),X.deleteSync(en),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,de=0){const oe=Math.pow(2,-de),ee=Math.floor(w.image.width*oe),Oe=Math.floor(w.image.height*oe),Ve=Q!==null?Q.x:0,Fe=Q!==null?Q.y:0;Z.setTexture2D(w,0),X.copyTexSubImage2D(X.TEXTURE_2D,de,0,0,Ve,Fe,ee,Oe),Qe.unbindTexture()};const xr=X.createFramebuffer(),Ba=X.createFramebuffer();this.copyTextureToTexture=function(w,Q,de=null,oe=null,ee=0,Oe=null){Oe===null&&(ee!==0?(xl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=ee,ee=0):Oe=0);let Ve,Fe,Xe,Ze,nt,Ke,it,Ot,en;const Kt=w.isCompressedTexture?w.mipmaps[Oe]:w.image;if(de!==null)Ve=de.max.x-de.min.x,Fe=de.max.y-de.min.y,Xe=de.isBox3?de.max.z-de.min.z:1,Ze=de.min.x,nt=de.min.y,Ke=de.isBox3?de.min.z:0;else{const vn=Math.pow(2,-ee);Ve=Math.floor(Kt.width*vn),Fe=Math.floor(Kt.height*vn),w.isDataArrayTexture?Xe=Kt.depth:w.isData3DTexture?Xe=Math.floor(Kt.depth*vn):Xe=1,Ze=0,nt=0,Ke=0}oe!==null?(it=oe.x,Ot=oe.y,en=oe.z):(it=0,Ot=0,en=0);const Bt=Ce.convert(Q.format),et=Ce.convert(Q.type);let Pt;Q.isData3DTexture?(Z.setTexture3D(Q,0),Pt=X.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Z.setTexture2DArray(Q,0),Pt=X.TEXTURE_2D_ARRAY):(Z.setTexture2D(Q,0),Pt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment);const ot=X.getParameter(X.UNPACK_ROW_LENGTH),Tn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ta=X.getParameter(X.UNPACK_SKIP_PIXELS),An=X.getParameter(X.UNPACK_SKIP_ROWS),hi=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Kt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Kt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ze),X.pixelStorei(X.UNPACK_SKIP_ROWS,nt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ke);const Ht=w.isDataArrayTexture||w.isData3DTexture,Rn=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const vn=E.get(w),Cn=E.get(Q),wn=E.get(vn.__renderTarget),ns=E.get(Cn.__renderTarget);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,wn.__webglFramebuffer),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let Di=0;Di<Xe;Di++)Ht&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(w).__webglTexture,ee,Ke+Di),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(Q).__webglTexture,Oe,en+Di)),X.blitFramebuffer(Ze,nt,Ve,Fe,it,Ot,Ve,Fe,X.DEPTH_BUFFER_BIT,X.NEAREST);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ee!==0||w.isRenderTargetTexture||E.has(w)){const vn=E.get(w),Cn=E.get(Q);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,xr),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ba);for(let wn=0;wn<Xe;wn++)Ht?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,vn.__webglTexture,ee,Ke+wn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,vn.__webglTexture,ee),Rn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Cn.__webglTexture,Oe,en+wn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Cn.__webglTexture,Oe),ee!==0?X.blitFramebuffer(Ze,nt,Ve,Fe,it,Ot,Ve,Fe,X.COLOR_BUFFER_BIT,X.NEAREST):Rn?X.copyTexSubImage3D(Pt,Oe,it,Ot,en+wn,Ze,nt,Ve,Fe):X.copyTexSubImage2D(Pt,Oe,it,Ot,Ze,nt,Ve,Fe);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Rn?w.isDataTexture||w.isData3DTexture?X.texSubImage3D(Pt,Oe,it,Ot,en,Ve,Fe,Xe,Bt,et,Kt.data):Q.isCompressedArrayTexture?X.compressedTexSubImage3D(Pt,Oe,it,Ot,en,Ve,Fe,Xe,Bt,Kt.data):X.texSubImage3D(Pt,Oe,it,Ot,en,Ve,Fe,Xe,Bt,et,Kt):w.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Oe,it,Ot,Ve,Fe,Bt,et,Kt.data):w.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Oe,it,Ot,Kt.width,Kt.height,Bt,Kt.data):X.texSubImage2D(X.TEXTURE_2D,Oe,it,Ot,Ve,Fe,Bt,et,Kt);X.pixelStorei(X.UNPACK_ROW_LENGTH,ot),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Tn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ta),X.pixelStorei(X.UNPACK_SKIP_ROWS,An),X.pixelStorei(X.UNPACK_SKIP_IMAGES,hi),Oe===0&&Q.generateMipmaps&&X.generateMipmap(Pt),Qe.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),Qe.unbindTexture()},this.resetState=function(){H=0,j=0,K=null,Qe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}function Lw(){const s=$.useRef(null),e=$.useRef(null),i=$.useRef(null),a=$.useRef(null),l=$.useRef(null),c=$.useRef(null),f=$.useRef(0),d=$.useRef(null),m=$.useRef(null),[p,v]=$.useState(!1),[g,x]=$.useState("galaxy"),[M,T]=$.useState(null),A=$.useCallback(()=>{if(!s.current)return;const N=new TT;N.background=new wt(657935),i.current=N;const z=new Ei(75,s.current.clientWidth/s.current.clientHeight,.1,1e3);z.position.z=50,a.current=z;const P=new Uw({antialias:!0});P.setSize(s.current.clientWidth,s.current.clientHeight),P.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(P.domElement),e.current=P,S(N),_(N);const U=()=>{!s.current||!z||!P||(z.aspect=s.current.clientWidth/s.current.clientHeight,z.updateProjectionMatrix(),P.setSize(s.current.clientWidth,s.current.clientHeight))};return window.addEventListener("resize",U),()=>{window.removeEventListener("resize",U)}},[]),S=N=>{const P=new Float32Array(15e3),U=new Float32Array(5e3*3),b=new Float32Array(5e3),R=new wt(54527),H=new wt(11167487),j=new wt(16737962);for(let F=0;F<5e3;F++){const G=Math.random()*40,W=G*.5,Se=F%3/3*Math.PI*2,xe=(Math.random()-.5)*(G*.3),B=(Math.random()-.5)*(G*.3),ne=(Math.random()-.5)*(G*.3);P[F*3]=Math.cos(Se+W)*G+xe,P[F*3+1]=B,P[F*3+2]=Math.sin(Se+W)*G+ne;const fe=R.clone();fe.lerp(H,G/40),Math.random()>.8&&fe.lerp(j,.5),U[F*3]=fe.r,U[F*3+1]=fe.g,U[F*3+2]=fe.b,b[F]=Math.random()*2+.5}const K=new fi;K.setAttribute("position",new ui(P,3)),K.setAttribute("color",new ui(U,3)),K.setAttribute("size",new ui(b,1));const te=new Zx({size:.5,vertexColors:!0,transparent:!0,opacity:.8,blending:Ch,sizeAttenuation:!0}),re=new DT(K,te);re.visible=!0,N.add(re),d.current=re},_=N=>{const z=new pl,P=64,U=8,b=60,R=new Wr({color:54527}),H=new Wr({color:11167487}),j=new Wr({color:65416,transparent:!0,opacity:.6}),K=new kp(.4,16,16);for(let te=0;te<P;te++){const re=te/P,F=(re-.5)*b,G=re*Math.PI*4,W=Math.cos(G)*U,Se=Math.sin(G)*U,xe=new ci(K,R);xe.position.set(W,F,Se),xe.userData={baseY:F,index:te,strand:1},z.add(xe);const B=Math.cos(G+Math.PI)*U,ne=Math.sin(G+Math.PI)*U,fe=new ci(K,H);if(fe.position.set(B,F,ne),fe.userData={baseY:F,index:te,strand:2},z.add(fe),te%2===0){const Ee=new Vp(.15,.15,U*2,8),Ne=new ci(Ee,j.clone());Ne.position.set(0,F,0),Ne.rotation.z=Math.PI/2,Ne.rotation.y=G,Ne.userData={baseScale:1,index:te},z.add(Ne)}}z.visible=!1,z.position.y=0,N.add(z),m.current=z},D=async()=>{try{const N=await navigator.mediaDevices.getUserMedia({audio:!0}),z=new AudioContext,P=z.createMediaStreamSource(N),U=z.createAnalyser();U.fftSize=256,U.smoothingTimeConstant=.8,P.connect(U),c.current=z,l.current=U,v(!0),T(null)}catch(N){T("Microphone access denied. Please allow microphone access to use the visualizer."),console.error("Audio error:",N)}},L=()=>{c.current&&(c.current.close(),c.current=null,l.current=null),v(!1)},O=$.useCallback(()=>{if(!i.current||!a.current||!e.current)return;const N=Date.now()*.001;let z=new Uint8Array(128),P=0,U=0,b=0,R=0;if(l.current?(l.current.getByteFrequencyData(z),P=z.reduce((H,j)=>H+j,0)/z.length/255,U=z.slice(0,10).reduce((H,j)=>H+j,0)/10/255,b=z.slice(10,50).reduce((H,j)=>H+j,0)/40/255,R=z.slice(50,128).reduce((H,j)=>H+j,0)/78/255):(P=.3+Math.sin(N*2)*.2,U=.4+Math.sin(N*1.5)*.3,b=.3+Math.sin(N*3)*.2,R=.2+Math.sin(N*5)*.15),d.current&&g==="galaxy"){d.current.visible=!0,m.current&&(m.current.visible=!1);const H=d.current.geometry.attributes.position.array,j=d.current.geometry.attributes.color.array;for(let K=0;K<H.length/3;K++){const te=K*3,re=H[te],F=H[te+1],G=H[te+2],W=Math.sqrt(re*re+G*G),Se=U*5,xe=Math.atan2(G,re),B=Math.floor((xe+Math.PI)/(Math.PI*2)*128)%128,ne=l.current?z[B]/255:.5+Math.sin(N*2+K*.01)*.3;H[te+1]=F+Math.sin(N*2+W*.1)*ne*Se;const fe=.5+P*.5;j[te]=Math.min(1,j[te]*fe+R*.3),j[te+1]=Math.min(1,j[te+1]*fe+b*.2),j[te+2]=Math.min(1,j[te+2]*fe+U*.2)}d.current.geometry.attributes.position.needsUpdate=!0,d.current.geometry.attributes.color.needsUpdate=!0,d.current.rotation.y+=.002+U*.01,a.current.position.y=Math.sin(N*.5)*10+P*10,a.current.lookAt(0,0,0)}m.current&&g==="dna"&&(m.current.visible=!0,d.current&&(d.current.visible=!1),m.current.rotation.y+=.01+U*.02,m.current.children.forEach(H=>{if(H instanceof ci){const j=H.userData;if(j.strand){const K=Math.floor(j.index/64*128)%128,te=l.current?z[K]/255:.5+Math.sin(N*3+j.index*.1)*.3,re=1+te*1.5;if(H.scale.setScalar(re),H.material instanceof Wr){const F=(j.strand===1?.5:.75)+te*.1;H.material.color.setHSL(F,1,.5+te*.3)}}else if(j.baseScale!==void 0){const K=1+b*.5;H.scale.y=K,H.material instanceof Wr&&(H.material.opacity=.3+R*.7)}}}),a.current.position.x=Math.sin(N*.3)*30,a.current.position.z=Math.cos(N*.3)*30,a.current.position.y=Math.sin(N*.2)*10,a.current.lookAt(0,0,0)),e.current.render(i.current,a.current),f.current=requestAnimationFrame(O)},[g]);return $.useEffect(()=>{const N=A();return()=>{N?.(),f.current&&cancelAnimationFrame(f.current),e.current&&s.current&&(s.current.removeChild(e.current.domElement),e.current.dispose()),L()}},[A]),$.useEffect(()=>(O(),()=>{f.current&&cancelAnimationFrame(f.current)}),[O]),k.jsxs("div",{className:"min-h-screen flex flex-col",children:[k.jsxs("header",{className:"p-4 flex items-center justify-between z-10 relative",children:[k.jsxs(io,{to:"/",className:"inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors",children:[k.jsx(Up,{className:"w-4 h-4"}),"Back"]}),k.jsxs("h1",{className:"text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-red bg-clip-text text-transparent flex items-center gap-2",children:[k.jsx(yx,{className:"w-5 h-5 text-accent-purple"}),"Audio Visualizer"]}),k.jsx("div",{className:"w-16"})," "]}),k.jsxs("div",{className:"px-4 pb-4 flex flex-wrap items-center justify-center gap-4 z-10 relative",children:[k.jsxs("div",{className:"flex items-center bg-bg-card rounded-full p-1 border border-text-muted/20",children:[k.jsxs("button",{onClick:()=>x("galaxy"),className:Ki("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",g==="galaxy"?"bg-accent-cyan/20 text-accent-cyan":"text-text-secondary hover:text-text-primary"),children:[k.jsx(h1,{className:"w-4 h-4"}),"Galaxy"]}),k.jsxs("button",{onClick:()=>x("dna"),className:Ki("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",g==="dna"?"bg-accent-purple/20 text-accent-purple":"text-text-secondary hover:text-text-primary"),children:[k.jsx(jE,{className:"w-4 h-4"}),"DNA Helix"]})]}),k.jsx("button",{onClick:p?L:D,className:Ki("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border",p?"bg-accent-green/20 text-accent-green border-accent-green/30":"bg-bg-card text-text-secondary border-text-muted/20 hover:text-text-primary hover:border-text-muted/40"),children:p?k.jsxs(k.Fragment,{children:[k.jsx(r1,{className:"w-4 h-4 animate-pulse"}),"Listening..."]}):k.jsxs(k.Fragment,{children:[k.jsx(i1,{className:"w-4 h-4"}),"Enable Mic"]})})]}),M&&k.jsx("div",{className:"px-4 pb-4 z-10 relative",children:k.jsx("div",{className:"max-w-md mx-auto bg-accent-red/10 border border-accent-red/30 rounded-lg p-3 text-accent-red text-sm text-center",children:M})}),!p&&!M&&k.jsx("div",{className:"px-4 pb-2 z-10 relative",children:k.jsx("p",{className:"text-center text-text-muted text-sm",children:"Demo mode - Enable mic for real audio visualization"})}),k.jsx("div",{ref:s,className:"flex-1 relative"})]})}const zi=`
  precision highp float;
  attribute vec2 aPosition;
  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform vec2 texelSize;

  void main () {
    vUv = aPosition * 0.5 + 0.5;
    vL = vUv - vec2(texelSize.x, 0.0);
    vR = vUv + vec2(texelSize.x, 0.0);
    vT = vUv + vec2(0.0, texelSize.y);
    vB = vUv - vec2(0.0, texelSize.y);
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`,Nw=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  uniform sampler2D uTexture;

  void main () {
    gl_FragColor = texture2D(uTexture, vUv);
  }
`,Ow=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  uniform sampler2D uTexture;
  uniform float value;

  void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
  }
`,Pw=`
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uTexture;

  void main () {
    vec3 c = texture2D(uTexture, vUv).rgb;
    float a = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c, a);
  }
`,Fw=`
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uTarget;
  uniform float aspectRatio;
  uniform vec3 color;
  uniform vec2 point;
  uniform float radius;

  void main () {
    vec2 p = vUv - point.xy;
    p.x *= aspectRatio;
    vec3 splat = exp(-dot(p, p) / radius) * color;
    vec3 base = texture2D(uTarget, vUv).xyz;
    gl_FragColor = vec4(base + splat, 1.0);
  }
`,zw=`
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform sampler2D uSource;
  uniform vec2 texelSize;
  uniform float dt;
  uniform float dissipation;

  void main () {
    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
    vec4 result = dissipation * texture2D(uSource, coord);
    float decay = 1.0 + dt * 0.1;
    gl_FragColor = result / decay;
  }
`,Bw=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uVelocity;

  void main () {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;
    vec2 C = texture2D(uVelocity, vUv).xy;

    if (vL.x < 0.0) { L = -C.x; }
    if (vR.x > 1.0) { R = -C.x; }
    if (vT.y > 1.0) { T = -C.y; }
    if (vB.y < 0.0) { B = -C.y; }

    float div = 0.5 * (R - L + T - B);
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
  }
`,Iw=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uVelocity;

  void main () {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    float vorticity = R - L - T + B;
    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
  }
`,Hw=`
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform sampler2D uVelocity;
  uniform sampler2D uCurl;
  uniform float curl;
  uniform float dt;

  void main () {
    float L = texture2D(uCurl, vL).x;
    float R = texture2D(uCurl, vR).x;
    float T = texture2D(uCurl, vT).x;
    float B = texture2D(uCurl, vB).x;
    float C = texture2D(uCurl, vUv).x;

    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
    force /= length(force) + 0.0001;
    force *= curl * C;
    force.y *= -1.0;

    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity += force * dt;
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`,Gw=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uPressure;
  uniform sampler2D uDivergence;

  void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    float C = texture2D(uPressure, vUv).x;
    float divergence = texture2D(uDivergence, vUv).x;
    float pressure = (L + R + B + T - divergence) * 0.25;
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
  }
`,Vw=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uPressure;
  uniform sampler2D uVelocity;

  void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity.xy -= vec2(R - L, T - B);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`,kw=`
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform vec2 gravity;
  uniform float dt;

  void main () {
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity += gravity * dt;
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`;class Xw{canvas;gl;ext;programs;dye;velocity;divergence;curl;pressure;blit;simWidth=128;simHeight=128;dyeWidth=1024;dyeHeight=1024;density=.98;velocityDissipation=.99;pressureIterations=20;curlStrength=30;splatRadius=.25;gravityX=0;gravityY=0;constructor(e){this.canvas=e;const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let a=e.getContext("webgl2",i);const l=!!a;if(a||(a=e.getContext("webgl",i)||e.getContext("experimental-webgl",i)),!a)throw new Error("WebGL not supported");this.gl=a,l?a.getExtension("EXT_color_buffer_float"):(a.getExtension("OES_texture_half_float"),a.getExtension("OES_texture_half_float_linear"));const c=l?a.HALF_FLOAT:a.getExtension("OES_texture_half_float")?.HALF_FLOAT_OES||a.UNSIGNED_BYTE,f=this.getSupportedFormat(a,l?a.RGBA16F:a.RGBA,a.RGBA,c),d=this.getSupportedFormat(a,l?a.RG16F:a.RGBA,l?a.RG:a.RGBA,c),m=this.getSupportedFormat(a,l?a.R16F:a.RGBA,l?a.RED:a.RGBA,c);this.ext={formatRGBA:f,formatRG:d,formatR:m,halfFloatTexType:c,supportLinearFiltering:!!a.getExtension("OES_texture_half_float_linear")||l};const p=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,p),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),a.STATIC_DRAW);const v=a.createBuffer();a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,v),a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),a.STATIC_DRAW),a.vertexAttribPointer(0,2,a.FLOAT,!1,0,0),a.enableVertexAttribArray(0),this.blit=g=>{g?(a.viewport(0,0,g.width,g.height),a.bindFramebuffer(a.FRAMEBUFFER,g.fbo)):(a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),a.bindFramebuffer(a.FRAMEBUFFER,null)),a.drawElements(a.TRIANGLES,6,a.UNSIGNED_SHORT,0)},this.programs={copy:this.createProgram(zi,Nw),clear:this.createProgram(zi,Ow),display:this.createProgram(zi,Pw),splat:this.createProgram(zi,Fw),advection:this.createProgram(zi,zw),divergence:this.createProgram(zi,Bw),curl:this.createProgram(zi,Iw),vorticity:this.createProgram(zi,Hw),pressure:this.createProgram(zi,Gw),gradientSubtract:this.createProgram(zi,Vw),externalForce:this.createProgram(zi,kw)},this.initFramebuffers()}getSupportedFormat(e,i,a,l){return this.supportRenderTextureFormat(e,i,a,l)?{internalFormat:i,format:a}:{internalFormat:e.RGBA,format:e.RGBA}}supportRenderTextureFormat(e,i,a,l){const c=e.createTexture();e.bindTexture(e.TEXTURE_2D,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,4,4,0,a,l,null);const f=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,f),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0);const d=e.checkFramebufferStatus(e.FRAMEBUFFER);return e.deleteTexture(c),e.deleteFramebuffer(f),e.bindFramebuffer(e.FRAMEBUFFER,null),d===e.FRAMEBUFFER_COMPLETE}createProgram(e,i){const a=this.gl,l=a.createShader(a.VERTEX_SHADER);a.shaderSource(l,e),a.compileShader(l);const c=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(c,i),a.compileShader(c);const f=a.createProgram();a.attachShader(f,l),a.attachShader(f,c),a.linkProgram(f);const d={},m=a.getProgramParameter(f,a.ACTIVE_UNIFORMS);for(let p=0;p<m;p++){const v=a.getActiveUniform(f,p);if(v){const g=a.getUniformLocation(f,v.name);g&&(d[v.name]=g)}}return{program:f,uniforms:d,bind:()=>a.useProgram(f)}}createFBO(e,i,a,l,c,f){const d=this.gl;d.activeTexture(d.TEXTURE0);const m=d.createTexture();d.bindTexture(d.TEXTURE_2D,m),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,f),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,f),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,a,e,i,0,l,c,null);const p=d.createFramebuffer();return d.bindFramebuffer(d.FRAMEBUFFER,p),d.framebufferTexture2D(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.TEXTURE_2D,m,0),d.viewport(0,0,e,i),d.clear(d.COLOR_BUFFER_BIT),{texture:m,fbo:p,width:e,height:i,attach:v=>(d.activeTexture(d.TEXTURE0+v),d.bindTexture(d.TEXTURE_2D,m),v)}}createDoubleFBO(e,i,a,l,c,f){let d=this.createFBO(e,i,a,l,c,f),m=this.createFBO(e,i,a,l,c,f);return{width:e,height:i,texelSizeX:1/e,texelSizeY:1/i,get read(){return d},set read(p){d=p},get write(){return m},set write(p){m=p},swap(){const p=d;d=m,m=p}}}initFramebuffers(){const e=this.gl,i=this.getResolution(this.simWidth),a=this.getResolution(this.dyeWidth);this.simWidth=i.width,this.simHeight=i.height,this.dyeWidth=a.width,this.dyeHeight=a.height;const l=this.ext.halfFloatTexType,c=this.ext.formatRGBA,f=this.ext.formatRG,d=this.ext.formatR,m=this.ext.supportLinearFiltering?e.LINEAR:e.NEAREST;this.dye=this.createDoubleFBO(this.dyeWidth,this.dyeHeight,c.internalFormat,c.format,l,m),this.velocity=this.createDoubleFBO(this.simWidth,this.simHeight,f.internalFormat,f.format,l,m),this.divergence=this.createFBO(this.simWidth,this.simHeight,d.internalFormat,d.format,l,e.NEAREST),this.curl=this.createFBO(this.simWidth,this.simHeight,d.internalFormat,d.format,l,e.NEAREST),this.pressure=this.createDoubleFBO(this.simWidth,this.simHeight,d.internalFormat,d.format,l,e.NEAREST)}getResolution(e){const i=this.gl;let a=i.drawingBufferWidth/i.drawingBufferHeight;a<1&&(a=1/a);const l=Math.round(e),c=Math.round(e*a);return i.drawingBufferWidth>i.drawingBufferHeight?{width:c,height:l}:{width:l,height:c}}resize(){const e=this.canvas.clientWidth,i=this.canvas.clientHeight;(this.canvas.width!==e||this.canvas.height!==i)&&(this.canvas.width=e,this.canvas.height=i,this.initFramebuffers())}setGravity(e,i){this.gravityX=e,this.gravityY=i}splat(e,i,a,l,c){const f=this.gl;this.programs.splat.bind(),f.uniform1i(this.programs.splat.uniforms.uTarget,this.velocity.read.attach(0)),f.uniform1f(this.programs.splat.uniforms.aspectRatio,this.canvas.width/this.canvas.height),f.uniform2f(this.programs.splat.uniforms.point,e,i),f.uniform3f(this.programs.splat.uniforms.color,a,l,0),f.uniform1f(this.programs.splat.uniforms.radius,this.correctRadius(this.splatRadius/100)),this.blit(this.velocity.write),this.velocity.swap(),f.uniform1i(this.programs.splat.uniforms.uTarget,this.dye.read.attach(0)),f.uniform3f(this.programs.splat.uniforms.color,c[0],c[1],c[2]),this.blit(this.dye.write),this.dye.swap()}correctRadius(e){const i=this.canvas.width/this.canvas.height;return i>1?e*i:e}step(e){const i=this.gl;i.disable(i.BLEND),(Math.abs(this.gravityX)>.01||Math.abs(this.gravityY)>.01)&&(this.programs.externalForce.bind(),i.uniform2f(this.programs.externalForce.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),i.uniform1i(this.programs.externalForce.uniforms.uVelocity,this.velocity.read.attach(0)),i.uniform2f(this.programs.externalForce.uniforms.gravity,this.gravityX*50,this.gravityY*50),i.uniform1f(this.programs.externalForce.uniforms.dt,e),this.blit(this.velocity.write),this.velocity.swap()),this.programs.curl.bind(),i.uniform2f(this.programs.curl.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),i.uniform1i(this.programs.curl.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.curl),this.programs.vorticity.bind(),i.uniform2f(this.programs.vorticity.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),i.uniform1i(this.programs.vorticity.uniforms.uVelocity,this.velocity.read.attach(0)),i.uniform1i(this.programs.vorticity.uniforms.uCurl,this.curl.attach(1)),i.uniform1f(this.programs.vorticity.uniforms.curl,this.curlStrength),i.uniform1f(this.programs.vorticity.uniforms.dt,e),this.blit(this.velocity.write),this.velocity.swap(),this.programs.divergence.bind(),i.uniform2f(this.programs.divergence.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),i.uniform1i(this.programs.divergence.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.divergence),this.programs.clear.bind(),i.uniform1i(this.programs.clear.uniforms.uTexture,this.pressure.read.attach(0)),i.uniform1f(this.programs.clear.uniforms.value,.8),this.blit(this.pressure.write),this.pressure.swap(),this.programs.pressure.bind(),i.uniform2f(this.programs.pressure.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),i.uniform1i(this.programs.pressure.uniforms.uDivergence,this.divergence.attach(0));for(let l=0;l<this.pressureIterations;l++)i.uniform1i(this.programs.pressure.uniforms.uPressure,this.pressure.read.attach(1)),this.blit(this.pressure.write),this.pressure.swap();this.programs.gradientSubtract.bind(),i.uniform2f(this.programs.gradientSubtract.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),i.uniform1i(this.programs.gradientSubtract.uniforms.uPressure,this.pressure.read.attach(0)),i.uniform1i(this.programs.gradientSubtract.uniforms.uVelocity,this.velocity.read.attach(1)),this.blit(this.velocity.write),this.velocity.swap(),this.programs.advection.bind(),i.uniform2f(this.programs.advection.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY);const a=this.velocity.read.attach(0);i.uniform1i(this.programs.advection.uniforms.uVelocity,a),i.uniform1i(this.programs.advection.uniforms.uSource,a),i.uniform1f(this.programs.advection.uniforms.dt,e),i.uniform1f(this.programs.advection.uniforms.dissipation,this.velocityDissipation),this.blit(this.velocity.write),this.velocity.swap(),i.uniform2f(this.programs.advection.uniforms.texelSize,this.dye.texelSizeX,this.dye.texelSizeY),i.uniform1i(this.programs.advection.uniforms.uVelocity,this.velocity.read.attach(0)),i.uniform1i(this.programs.advection.uniforms.uSource,this.dye.read.attach(1)),i.uniform1f(this.programs.advection.uniforms.dissipation,this.density),this.blit(this.dye.write),this.dye.swap()}render(){const e=this.gl;e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND),this.programs.display.bind(),e.uniform1i(this.programs.display.uniforms.uTexture,this.dye.read.attach(0)),this.blit(null)}clear(){const e=this.gl;this.programs.clear.bind(),e.uniform1f(this.programs.clear.uniforms.value,0),e.uniform1i(this.programs.clear.uniforms.uTexture,this.dye.read.attach(0)),this.blit(this.dye.write),this.dye.swap(),e.uniform1i(this.programs.clear.uniforms.uTexture,this.velocity.read.attach(0)),this.blit(this.velocity.write),this.velocity.swap()}}const fu={rainbow:()=>{const s=Math.random();return Ww(s,1,.5)},fire:()=>{const s=Math.random();return[1,.2+s*.5,s*.2]},ocean:()=>{const s=Math.random();return[s*.3,.5+s*.3,.8+s*.2]},neon:()=>{const s=[[0,.82,1],[.67,.4,1],[1,.4,.67],[0,1,.53]];return s[Math.floor(Math.random()*s.length)]}};function Ww(s,e,i){let a,l,c;{const f=(p,v,g)=>(g<0&&(g+=1),g>1&&(g-=1),g<.16666666666666666?p+(v-p)*6*g:g<.5?v:g<.6666666666666666?p+(v-p)*(.6666666666666666-g)*6:p),d=i+e-i*e,m=2*i-d;a=f(m,d,s+1/3),l=f(m,d,s),c=f(m,d,s-1/3)}return[a,l,c]}function qw(){const s=$.useRef(null),e=$.useRef(null),i=$.useRef(0),a=$.useRef(0),l=$.useRef([]),[c,f]=$.useState("tilt"),[d,m]=$.useState("neon"),[p,v]=$.useState("unknown"),[g,x]=$.useState({beta:0,gamma:0}),[M,T]=$.useState(!0),A=$.useRef({x:0,y:0});$.useEffect(()=>{"DeviceOrientationEvent"in window?v("prompt"):(v("unavailable"),f("touch"))},[]);const S=$.useCallback(async()=>{try{typeof DeviceOrientationEvent.requestPermission=="function"?await DeviceOrientationEvent.requestPermission()==="granted"?(v("granted"),_()):(v("denied"),f("touch")):(v("granted"),_())}catch{v("denied"),f("touch")}},[]),_=()=>{window.addEventListener("deviceorientation",U=>{const b=U.beta??0,R=U.gamma??0;x({beta:b,gamma:R})})};$.useEffect(()=>{if(!s.current)return;const U=s.current;U.width=U.clientWidth*window.devicePixelRatio,U.height=U.clientHeight*window.devicePixelRatio;try{e.current=new Xw(U)}catch(R){console.error("Failed to initialize fluid simulation:",R);return}setTimeout(()=>{if(e.current)for(let R=0;R<5;R++){const H=.3+Math.random()*.4,j=.3+Math.random()*.4,K=(Math.random()-.5)*100,te=(Math.random()-.5)*100;e.current.splat(H,j,K,te,fu[d]())}},100);const b=()=>{U&&e.current&&(U.width=U.clientWidth*window.devicePixelRatio,U.height=U.clientHeight*window.devicePixelRatio,e.current.resize())};return window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b),i.current&&cancelAnimationFrame(i.current)}},[]),$.useEffect(()=>{if(c!=="tilt"||p!=="granted")return;const U=Math.max(-1,Math.min(1,g.gamma/45)),b=Math.max(-1,Math.min(1,(g.beta-45)/45));A.current.x+=(U-A.current.x)*.1,A.current.y+=(b-A.current.y)*.1},[g,c,p]),$.useEffect(()=>{const U=b=>{if(!e.current){i.current=requestAnimationFrame(U);return}const R=Math.min((b-a.current)/1e3,.016);a.current=b,c==="tilt"&&p==="granted"?e.current.setGravity(A.current.x,A.current.y):e.current.setGravity(0,0),e.current.step(R),e.current.render(),i.current=requestAnimationFrame(U)};return i.current=requestAnimationFrame(U),()=>{i.current&&cancelAnimationFrame(i.current)}},[c,p]);const D=U=>{const b=s.current;if(!b)return{x:0,y:0};const R=b.getBoundingClientRect();return{x:(U.clientX-R.left)/R.width,y:1-(U.clientY-R.top)/R.height}},L=U=>{const b=D(U);l.current.push({...b,id:U.pointerId}),e.current&&e.current.splat(b.x,b.y,0,0,fu[d]())},O=U=>{const b=l.current.find(K=>K.id===U.pointerId);if(!b||!e.current)return;const R=D(U),H=(R.x-b.x)*1e3,j=(R.y-b.y)*1e3;(Math.abs(H)>.1||Math.abs(j)>.1)&&e.current.splat(R.x,R.y,H,j,fu[d]()),b.x=R.x,b.y=R.y},N=U=>{l.current=l.current.filter(b=>b.id!==U.pointerId)},z=()=>{e.current?.clear()},P=()=>{if(e.current){e.current.clear();for(let U=0;U<5;U++){const b=.3+Math.random()*.4,R=.3+Math.random()*.4,H=(Math.random()-.5)*100,j=(Math.random()-.5)*100;e.current.splat(b,R,H,j,fu[d]())}}};return k.jsxs("div",{className:"h-[100dvh] flex flex-col bg-bg-primary overflow-hidden",children:[k.jsx("canvas",{ref:s,className:"absolute inset-0 w-full h-full touch-none",onPointerDown:L,onPointerMove:O,onPointerUp:N,onPointerLeave:N,onPointerCancel:N}),k.jsxs("header",{className:"relative z-10 p-4 flex items-center justify-between",children:[k.jsx(io,{to:"/",className:"flex items-center justify-center w-10 h-10 rounded-full bg-bg-card/80 backdrop-blur-sm text-text-secondary hover:text-accent-cyan transition-colors",children:k.jsx(Up,{className:"w-5 h-5"})}),k.jsx("h1",{className:"text-lg font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent",children:"Fluid Sim"}),k.jsx("button",{onClick:()=>T(!M),className:"w-10 h-10 rounded-full bg-bg-card/80 backdrop-blur-sm text-text-secondary flex items-center justify-center",children:k.jsx("span",{className:"text-lg",children:M?"−":"+"})})]}),c==="tilt"&&p==="granted"&&k.jsx("div",{className:"absolute top-20 left-1/2 -translate-x-1/2 z-10",children:k.jsxs("div",{className:"relative w-16 h-16 rounded-full border-2 border-accent-cyan/30 bg-bg-card/50 backdrop-blur-sm",children:[k.jsx("div",{className:"absolute w-3 h-3 rounded-full bg-accent-cyan shadow-lg shadow-accent-cyan/50",style:{left:`${50+A.current.x*40}%`,top:`${50+A.current.y*40}%`,transform:"translate(-50%, -50%)"}}),k.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:k.jsx("div",{className:"w-1 h-1 rounded-full bg-text-muted"})})]})}),M&&k.jsxs("div",{className:"absolute bottom-0 left-0 right-0 z-10 p-4 pb-8 bg-gradient-to-t from-bg-primary/90 to-transparent",children:[p==="prompt"&&c==="tilt"&&k.jsxs("button",{onClick:S,className:"w-full mb-4 py-3 px-4 rounded-xl bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan font-medium flex items-center justify-center gap-2",children:[k.jsx(Rh,{className:"w-5 h-5"}),"Enable Tilt Control"]}),p==="denied"&&k.jsx("div",{className:"mb-4 py-2 px-4 rounded-xl bg-accent-red/10 border border-accent-red/20 text-accent-red text-sm text-center",children:"Orientation access denied. Using touch mode."}),k.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[k.jsxs("button",{onClick:()=>f("tilt"),disabled:p==="unavailable"||p==="denied",className:Ki("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",c==="tilt"?"bg-accent-cyan/20 text-accent-cyan":"bg-bg-card/80 text-text-secondary",(p==="unavailable"||p==="denied")&&"opacity-50 cursor-not-allowed"),children:[k.jsx(Rh,{className:"w-4 h-4"}),"Tilt"]}),k.jsxs("button",{onClick:()=>f("touch"),className:Ki("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",c==="touch"?"bg-accent-purple/20 text-accent-purple":"bg-bg-card/80 text-text-secondary"),children:[k.jsx(t1,{className:"w-4 h-4"}),"Touch"]})]}),k.jsx("div",{className:"flex items-center justify-center gap-2 mb-4",children:["rainbow","fire","ocean","neon"].map(U=>k.jsx("button",{onClick:()=>m(U),className:Ki("px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all",d===U?"bg-white/20 text-white":"bg-bg-card/60 text-text-secondary"),children:U},U))}),k.jsxs("div",{className:"flex items-center justify-center gap-3",children:[k.jsxs("button",{onClick:z,className:"flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card/80 text-text-secondary text-sm font-medium",children:[k.jsx(m1,{className:"w-4 h-4"}),"Clear"]}),k.jsxs("button",{onClick:P,className:"flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card/80 text-text-secondary text-sm font-medium",children:[k.jsx(u1,{className:"w-4 h-4"}),"Reset"]})]}),k.jsx("p",{className:"mt-4 text-center text-text-muted text-xs",children:c==="tilt"?"Tilt your phone to move the fluid. Touch to add color.":"Drag to add force and color to the fluid."})]})]})}gM.createRoot(document.getElementById("root")).render(k.jsx($.StrictMode,{children:k.jsx(Bb,{children:k.jsxs(pb,{children:[k.jsx(dl,{path:"/",element:k.jsx(_1,{})}),k.jsx(dl,{path:"/sensors",element:k.jsx(x1,{})}),k.jsx(dl,{path:"/audio",element:k.jsx(Lw,{})}),k.jsx(dl,{path:"/fluid",element:k.jsx(qw,{})})]})})}));
