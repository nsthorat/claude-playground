(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var $d={exports:{}},fl={};var X0;function Bb(){if(X0)return fl;X0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return fl.Fragment=e,fl.jsx=n,fl.jsxs=n,fl}var W0;function Ib(){return W0||(W0=1,$d.exports=Bb()),$d.exports}var G=Ib(),eh={exports:{}},mt={};var q0;function Fb(){if(q0)return mt;q0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,b={};function x(P,ie,ue){this.props=P,this.context=ie,this.refs=b,this.updater=ue||M}x.prototype.isReactComponent={},x.prototype.setState=function(P,ie){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ie,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function U(){}U.prototype=x.prototype;function R(P,ie,ue){this.props=P,this.context=ie,this.refs=b,this.updater=ue||M}var N=R.prototype=new U;N.constructor=R,A(N,x.prototype),N.isPureReactComponent=!0;var L=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function T(P,ie,ue){var Se=ue.ref;return{$$typeof:a,type:P,key:ie,ref:Se!==void 0?Se:null,props:ue}}function D(P,ie){return T(P.type,ie,P.props)}function X(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function ee(P){var ie={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ue){return ie[ue]})}var ae=/\/+/g;function he(P,ie){return typeof P=="object"&&P!==null&&P.key!=null?ee(""+P.key):ie.toString(36)}function $(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(I,I):(P.status="pending",P.then(function(ie){P.status==="pending"&&(P.status="fulfilled",P.value=ie)},function(ie){P.status==="pending"&&(P.status="rejected",P.reason=ie)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,ie,ue,Se,Me){var te=typeof P;(te==="undefined"||te==="boolean")&&(P=null);var re=!1;if(P===null)re=!0;else switch(te){case"bigint":case"string":case"number":re=!0;break;case"object":switch(P.$$typeof){case a:case e:re=!0;break;case v:return re=P._init,O(re(P._payload),ie,ue,Se,Me)}}if(re)return Me=Me(P),re=Se===""?"."+he(P,0):Se,L(Me)?(ue="",re!=null&&(ue=re.replace(ae,"$&/")+"/"),O(Me,ie,ue,"",function(ze){return ze})):Me!=null&&(X(Me)&&(Me=D(Me,ue+(Me.key==null||P&&P.key===Me.key?"":(""+Me.key).replace(ae,"$&/")+"/")+re)),ie.push(Me)),1;re=0;var De=Se===""?".":Se+":";if(L(P))for(var Fe=0;Fe<P.length;Fe++)Se=P[Fe],te=De+he(Se,Fe),re+=O(Se,ie,ue,te,Me);else if(Fe=y(P),typeof Fe=="function")for(P=Fe.call(P),Fe=0;!(Se=P.next()).done;)Se=Se.value,te=De+he(Se,Fe++),re+=O(Se,ie,ue,te,Me);else if(te==="object"){if(typeof P.then=="function")return O($(P),ie,ue,Se,Me);throw ie=String(P),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return re}function F(P,ie,ue){if(P==null)return P;var Se=[],Me=0;return O(P,Se,"","",function(te){return ie.call(ue,te,Me++)}),Se}function k(P){if(P._status===-1){var ie=P._result;ie=ie(),ie.then(function(ue){(P._status===0||P._status===-1)&&(P._status=1,P._result=ue)},function(ue){(P._status===0||P._status===-1)&&(P._status=2,P._result=ue)}),P._status===-1&&(P._status=0,P._result=ie)}if(P._status===1)return P._result.default;throw P._result}var xe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},ge={map:F,forEach:function(P,ie,ue){F(P,function(){ie.apply(this,arguments)},ue)},count:function(P){var ie=0;return F(P,function(){ie++}),ie},toArray:function(P){return F(P,function(ie){return ie})||[]},only:function(P){if(!X(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return mt.Activity=g,mt.Children=ge,mt.Component=x,mt.Fragment=n,mt.Profiler=o,mt.PureComponent=R,mt.StrictMode=r,mt.Suspense=p,mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,mt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},mt.cache=function(P){return function(){return P.apply(null,arguments)}},mt.cacheSignal=function(){return null},mt.cloneElement=function(P,ie,ue){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Se=A({},P.props),Me=P.key;if(ie!=null)for(te in ie.key!==void 0&&(Me=""+ie.key),ie)!H.call(ie,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ie.ref===void 0||(Se[te]=ie[te]);var te=arguments.length-2;if(te===1)Se.children=ue;else if(1<te){for(var re=Array(te),De=0;De<te;De++)re[De]=arguments[De+2];Se.children=re}return T(P.type,Me,Se)},mt.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},mt.createElement=function(P,ie,ue){var Se,Me={},te=null;if(ie!=null)for(Se in ie.key!==void 0&&(te=""+ie.key),ie)H.call(ie,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Me[Se]=ie[Se]);var re=arguments.length-2;if(re===1)Me.children=ue;else if(1<re){for(var De=Array(re),Fe=0;Fe<re;Fe++)De[Fe]=arguments[Fe+2];Me.children=De}if(P&&P.defaultProps)for(Se in re=P.defaultProps,re)Me[Se]===void 0&&(Me[Se]=re[Se]);return T(P,te,Me)},mt.createRef=function(){return{current:null}},mt.forwardRef=function(P){return{$$typeof:d,render:P}},mt.isValidElement=X,mt.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:k}},mt.memo=function(P,ie){return{$$typeof:m,type:P,compare:ie===void 0?null:ie}},mt.startTransition=function(P){var ie=z.T,ue={};z.T=ue;try{var Se=P(),Me=z.S;Me!==null&&Me(ue,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(I,xe)}catch(te){xe(te)}finally{ie!==null&&ue.types!==null&&(ie.types=ue.types),z.T=ie}},mt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},mt.use=function(P){return z.H.use(P)},mt.useActionState=function(P,ie,ue){return z.H.useActionState(P,ie,ue)},mt.useCallback=function(P,ie){return z.H.useCallback(P,ie)},mt.useContext=function(P){return z.H.useContext(P)},mt.useDebugValue=function(){},mt.useDeferredValue=function(P,ie){return z.H.useDeferredValue(P,ie)},mt.useEffect=function(P,ie){return z.H.useEffect(P,ie)},mt.useEffectEvent=function(P){return z.H.useEffectEvent(P)},mt.useId=function(){return z.H.useId()},mt.useImperativeHandle=function(P,ie,ue){return z.H.useImperativeHandle(P,ie,ue)},mt.useInsertionEffect=function(P,ie){return z.H.useInsertionEffect(P,ie)},mt.useLayoutEffect=function(P,ie){return z.H.useLayoutEffect(P,ie)},mt.useMemo=function(P,ie){return z.H.useMemo(P,ie)},mt.useOptimistic=function(P,ie){return z.H.useOptimistic(P,ie)},mt.useReducer=function(P,ie,ue){return z.H.useReducer(P,ie,ue)},mt.useRef=function(P){return z.H.useRef(P)},mt.useState=function(P){return z.H.useState(P)},mt.useSyncExternalStore=function(P,ie,ue){return z.H.useSyncExternalStore(P,ie,ue)},mt.useTransition=function(){return z.H.useTransition()},mt.version="19.2.3",mt}var j0;function Wp(){return j0||(j0=1,eh.exports=Fb()),eh.exports}var J=Wp(),th={exports:{}},dl={},nh={exports:{}},ih={};var Y0;function Hb(){return Y0||(Y0=1,(function(a){function e(O,F){var k=O.length;O.push(F);e:for(;0<k;){var xe=k-1>>>1,ge=O[xe];if(0<o(ge,F))O[xe]=F,O[k]=ge,k=xe;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],k=O.pop();if(k!==F){O[0]=k;e:for(var xe=0,ge=O.length,P=ge>>>1;xe<P;){var ie=2*(xe+1)-1,ue=O[ie],Se=ie+1,Me=O[Se];if(0>o(ue,k))Se<ge&&0>o(Me,ue)?(O[xe]=Me,O[Se]=k,xe=Se):(O[xe]=ue,O[ie]=k,xe=ie);else if(Se<ge&&0>o(Me,k))O[xe]=Me,O[Se]=k,xe=Se;else break e}}return F}function o(O,F){var k=O.sortIndex-F.sortIndex;return k!==0?k:O.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var p=[],m=[],v=1,g=null,_=3,y=!1,M=!1,A=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var F=n(m);F!==null;){if(F.callback===null)r(m);else if(F.startTime<=O)r(m),F.sortIndex=F.expirationTime,e(p,F);else break;F=n(m)}}function L(O){if(A=!1,N(O),!M)if(n(p)!==null)M=!0,I||(I=!0,ee());else{var F=n(m);F!==null&&$(L,F.startTime-O)}}var I=!1,z=-1,H=5,T=-1;function D(){return b?!0:!(a.unstable_now()-T<H)}function X(){if(b=!1,I){var O=a.unstable_now();T=O;var F=!0;try{e:{M=!1,A&&(A=!1,U(z),z=-1),y=!0;var k=_;try{t:{for(N(O),g=n(p);g!==null&&!(g.expirationTime>O&&D());){var xe=g.callback;if(typeof xe=="function"){g.callback=null,_=g.priorityLevel;var ge=xe(g.expirationTime<=O);if(O=a.unstable_now(),typeof ge=="function"){g.callback=ge,N(O),F=!0;break t}g===n(p)&&r(p),N(O)}else r(p);g=n(p)}if(g!==null)F=!0;else{var P=n(m);P!==null&&$(L,P.startTime-O),F=!1}}break e}finally{g=null,_=k,y=!1}F=void 0}}finally{F?ee():I=!1}}}var ee;if(typeof R=="function")ee=function(){R(X)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,he=ae.port2;ae.port1.onmessage=X,ee=function(){he.postMessage(null)}}else ee=function(){x(X,0)};function $(O,F){z=x(function(){O(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(O){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var k=_;_=F;try{return O()}finally{_=k}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=_;_=O;try{return F()}finally{_=k}},a.unstable_scheduleCallback=function(O,F,k){var xe=a.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?xe+k:xe):k=xe,O){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=k+ge,O={id:v++,callback:F,priorityLevel:O,startTime:k,expirationTime:ge,sortIndex:-1},k>xe?(O.sortIndex=k,e(m,O),n(p)===null&&O===n(m)&&(A?(U(z),z=-1):A=!0,$(L,k-xe))):(O.sortIndex=ge,e(p,O),M||y||(M=!0,I||(I=!0,ee()))),O},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(O){var F=_;return function(){var k=_;_=F;try{return O.apply(this,arguments)}finally{_=k}}}})(ih)),ih}var Z0;function Gb(){return Z0||(Z0=1,nh.exports=Hb()),nh.exports}var ah={exports:{}},jn={};var K0;function Vb(){if(K0)return jn;K0=1;var a=Wp();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:m,implementation:v}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,jn.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,v)},jn.flushSync=function(p){var m=u.T,v=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=m,r.p=v,r.d.f()}},jn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},jn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},jn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,g=d(v,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:y}):v==="script"&&r.d.X(p,{crossOrigin:g,integrity:_,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},jn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},jn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,g=d(v,m.crossOrigin);r.d.L(p,v,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},jn.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},jn.requestFormReset=function(p){r.d.r(p)},jn.unstable_batchedUpdates=function(p,m){return p(m)},jn.useFormState=function(p,m,v){return u.H.useFormState(p,m,v)},jn.useFormStatus=function(){return u.H.useHostTransitionStatus()},jn.version="19.2.3",jn}var Q0;function kb(){if(Q0)return ah.exports;Q0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),ah.exports=Vb(),ah.exports}var J0;function Xb(){if(J0)return dl;J0=1;var a=Gb(),e=Wp(),n=kb();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return p(f),t;if(h===l)return p(f),i;h=h.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=h;else{for(var S=!1,w=f.child;w;){if(w===s){S=!0,s=f,l=h;break}if(w===l){S=!0,l=f,s=h;break}w=w.sibling}if(!S){for(w=h.child;w;){if(w===s){S=!0,s=h,l=f;break}if(w===l){S=!0,l=h,s=f;break}w=w.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function v(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=v(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),R=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case L:return"Suspense";case I:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case R:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case N:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case H:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}var $=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},xe=[],ge=-1;function P(t){return{current:t}}function ie(t){0>ge||(t.current=xe[ge],xe[ge]=null,ge--)}function ue(t,i){ge++,xe[ge]=t.current,t.current=i}var Se=P(null),Me=P(null),te=P(null),re=P(null);function De(t,i){switch(ue(te,i),ue(Me,t),ue(Se,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?h0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=h0(i),t=p0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Se),ue(Se,t)}function Fe(){ie(Se),ie(Me),ie(te)}function ze(t){t.memoizedState!==null&&ue(re,t);var i=Se.current,s=p0(i,t.type);i!==s&&(ue(Me,t),ue(Se,s))}function at(t){Me.current===t&&(ie(Se),ie(Me)),re.current===t&&(ie(re),ol._currentValue=k)}var Ct,rt;function ct(t){if(Ct===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ct=i&&i[1]||"",rt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+t+rt}var Ut=!1;function dt(t,i){if(!t||Ut)return"";Ut=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(de){var ce=de}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(de){ce=de}t.call(ye.prototype)}}else{try{throw Error()}catch(de){ce=de}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(de){if(de&&ce&&typeof de.stack=="string")return[de.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),S=h[0],w=h[1];if(S&&w){var V=S.split(`
`),oe=w.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===oe.length)for(l=V.length-1,f=oe.length-1;1<=l&&0<=f&&V[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==oe[f]){var me=`
`+V[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=f);break}}}finally{Ut=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ct(s):""}function en(t,i){switch(t.tag){case 26:case 27:case 5:return ct(t.type);case 16:return ct("Lazy");case 13:return t.child!==i&&i!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return ct("Activity");default:return""}}function W(t){try{var i="",s=null;do i+=en(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var sn=Object.prototype.hasOwnProperty,Dt=a.unstable_scheduleCallback,kt=a.unstable_cancelCallback,Je=a.unstable_shouldYield,B=a.unstable_requestPaint,E=a.unstable_now,Y=a.unstable_getCurrentPriorityLevel,ve=a.unstable_ImmediatePriority,Ee=a.unstable_UserBlockingPriority,pe=a.unstable_NormalPriority,et=a.unstable_LowPriority,Ne=a.unstable_IdlePriority,Ze=a.log,ut=a.unstable_setDisableYieldValue,Re=null,we=null;function Ve(t){if(typeof Ze=="function"&&ut(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Re,t)}catch{}}var He=Math.clz32?Math.clz32:j,Le=Math.log,vt=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(Le(t)/vt|0)|0}var Pe=256,Ce=262144,Ge=4194304;function Ae(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~h,l!==0?f=Ae(l):(S&=w,S!==0?f=Ae(S):s||(s=w&~t,s!==0&&(f=Ae(s))))):(w=l&~h,w!==0?f=Ae(w):S!==0?f=Ae(S):s||(s=l&~t,s!==0&&(f=Ae(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Ue(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ft(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(){var t=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),t}function Nt(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function qn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function zi(t,i,s,l,f,h){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,V=t.expirationTimes,oe=t.hiddenUpdates;for(s=S&~s;0<s;){var me=31-He(s),ye=1<<me;w[me]=0,V[me]=-1;var ce=oe[me];if(ce!==null)for(oe[me]=null,me=0;me<ce.length;me++){var de=ce[me];de!==null&&(de.lane&=-536870913)}s&=~ye}l!==0&&Gl(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~i))}function Gl(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-He(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function xo(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-He(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function ls(t,i){var s=i&-i;return s=(s&42)!==0?1:yo(s),(s&(t.suspendedLanes|i))!==0?0:s}function yo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function cs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function So(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:B0(t.type))}function Zi(t,i){var s=F.p;try{return F.p=t,i()}finally{F.p=s}}var Mi=Math.random().toString(36).slice(2),vn="__reactFiber$"+Mi,On="__reactProps$"+Mi,Bi="__reactContainer$"+Mi,us="__reactEvents$"+Mi,fs="__reactListeners$"+Mi,Vl="__reactHandles$"+Mi,bo="__reactResources$"+Mi,Cr="__reactMarker$"+Mi;function Mo(t){delete t[vn],delete t[On],delete t[us],delete t[fs],delete t[Vl]}function Wa(t){var i=t[vn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Bi]||s[vn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=S0(t);t!==null;){if(s=t[vn])return s;t=S0(t)}return i}t=s,s=t.parentNode}return null}function qa(t){if(t=t[vn]||t[Bi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Dr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function ja(t){var i=t[bo];return i||(i=t[bo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function C(t){t[Cr]=!0}var Z=new Set,fe={};function le(t,i){ne(t,i),ne(t+"Capture",i)}function ne(t,i){for(fe[t]=i,t=0;t<i.length;t++)Z.add(i[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Be={};function Xe(t){return sn.call(Be,t)?!0:sn.call(ke,t)?!1:Oe.test(t)?Be[t]=!0:(ke[t]=!0,!1)}function Ke(t,i,s){if(Xe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function st(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Qe(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function ot(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ft(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function on(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function nn(t){if(!t._valueTracker){var i=Ft(t)?"checked":"value";t._valueTracker=on(t,i,""+t[i])}}function Xt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ft(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function tt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ht=/[\n"\\]/g;function ht(t){return t.replace(Ht,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Pn(t,i,s,l,f,h,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ot(i)):t.value!==""+ot(i)&&(t.value=""+ot(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?zn(t,S,ot(i)):s!=null?zn(t,S,ot(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+ot(w):t.removeAttribute("name")}function la(t,i,s,l,f,h,S,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){nn(t);return}s=s!=null?""+ot(s):"",i=i!=null?""+ot(i):s,w||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),nn(t)}function zn(t,i,s){i==="number"&&tt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Ei(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ot(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function qt(t,i,s){if(i!=null&&(i=""+ot(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ot(s):""}function Bn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if($(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ot(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),nn(t)}function Tn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var In=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||In.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function ds(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Fn(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&Fn(t,h,i[h])}function Ii(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ly=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kl(t){return Oy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var Zu=null;function Ku(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hs=null,ps=null;function dm(t){var i=qa(t);if(i&&(t=i.stateNode)){var s=t[On]||null;e:switch(t=i.stateNode,i.type){case"input":if(Pn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ht(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[On]||null;if(!f)throw Error(r(90));Pn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Xt(l)}break e;case"textarea":qt(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Ei(t,!!s.multiple,i,!1)}}}var Qu=!1;function hm(t,i,s){if(Qu)return t(i,s);Qu=!0;try{var l=t(i);return l}finally{if(Qu=!1,(hs!==null||ps!==null)&&(Dc(),hs&&(i=hs,t=ps,ps=hs=null,dm(i),t)))for(i=0;i<t.length;i++)dm(t[i])}}function Eo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[On]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=!1;if(ua)try{var To={};Object.defineProperty(To,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Ju=!1}var Ya=null,$u=null,Xl=null;function pm(){if(Xl)return Xl;var t,i=$u,s=i.length,l,f="value"in Ya?Ya.value:Ya.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===f[h-l];l++);return Xl=f.slice(t,1<l?1-l:void 0)}function Wl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function mm(){return!1}function ii(t){function i(s,l,f,h,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ql:mm,this.isPropagationStopped=mm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),i}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=ii(Ur),Ao=g({},Ur,{view:0,detail:0}),Py=ii(Ao),ef,tf,Ro,Yl=g({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(ef=t.screenX-Ro.screenX,tf=t.screenY-Ro.screenY):tf=ef=0,Ro=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:tf}}),gm=ii(Yl),zy=g({},Yl,{dataTransfer:0}),By=ii(zy),Iy=g({},Ao,{relatedTarget:0}),nf=ii(Iy),Fy=g({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Hy=ii(Fy),Gy=g({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vy=ii(Gy),ky=g({},Ur,{data:0}),vm=ii(ky),Xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=qy[t])?!!i[t]:!1}function af(){return jy}var Yy=g({},Ao,{key:function(t){if(t.key){var i=Xy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zy=ii(Yy),Ky=g({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_m=ii(Ky),Qy=g({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),Jy=ii(Qy),$y=g({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),eS=ii($y),tS=g({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=ii(tS),iS=g({},Ur,{newState:0,oldState:0}),aS=ii(iS),rS=[9,13,27,32],rf=ua&&"CompositionEvent"in window,wo=null;ua&&"documentMode"in document&&(wo=document.documentMode);var sS=ua&&"TextEvent"in window&&!wo,xm=ua&&(!rf||wo&&8<wo&&11>=wo),ym=" ",Sm=!1;function bm(t,i){switch(t){case"keyup":return rS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function oS(t,i){switch(t){case"compositionend":return Mm(i);case"keypress":return i.which!==32?null:(Sm=!0,ym);case"textInput":return t=i.data,t===ym&&Sm?null:t;default:return null}}function lS(t,i){if(ms)return t==="compositionend"||!rf&&bm(t,i)?(t=pm(),Xl=$u=Ya=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xm&&i.locale!=="ko"?null:i.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Em(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!cS[t.type]:i==="textarea"}function Tm(t,i,s,l){hs?ps?ps.push(l):ps=[l]:hs=l,i=Bc(i,"onChange"),0<i.length&&(s=new jl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Co=null,Do=null;function uS(t){o0(t,0)}function Zl(t){var i=Dr(t);if(Xt(i))return t}function Am(t,i){if(t==="change")return i}var Rm=!1;if(ua){var sf;if(ua){var of="oninput"in document;if(!of){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),of=typeof wm.oninput=="function"}sf=of}else sf=!1;Rm=sf&&(!document.documentMode||9<document.documentMode)}function Cm(){Co&&(Co.detachEvent("onpropertychange",Dm),Do=Co=null)}function Dm(t){if(t.propertyName==="value"&&Zl(Do)){var i=[];Tm(i,Do,t,Ku(t)),hm(uS,i)}}function fS(t,i,s){t==="focusin"?(Cm(),Co=i,Do=s,Co.attachEvent("onpropertychange",Dm)):t==="focusout"&&Cm()}function dS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(Do)}function hS(t,i){if(t==="click")return Zl(i)}function pS(t,i){if(t==="input"||t==="change")return Zl(i)}function mS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var hi=typeof Object.is=="function"?Object.is:mS;function Uo(t,i){if(hi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!sn.call(i,f)||!hi(t[f],i[f]))return!1}return!0}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nm(t,i){var s=Um(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Um(s)}}function Lm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Lm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Om(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=tt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=tt(t.document)}return i}function lf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var gS=ua&&"documentMode"in document&&11>=document.documentMode,gs=null,cf=null,No=null,uf=!1;function Pm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;uf||gs==null||gs!==tt(l)||(l=gs,"selectionStart"in l&&lf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),No&&Uo(No,l)||(No=l,l=Bc(cf,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=gs)))}function Nr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var vs={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},ff={},zm={};ua&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Lr(t){if(ff[t])return ff[t];if(!vs[t])return t;var i=vs[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in zm)return ff[t]=i[s];return t}var Bm=Lr("animationend"),Im=Lr("animationiteration"),Fm=Lr("animationstart"),vS=Lr("transitionrun"),_S=Lr("transitionstart"),xS=Lr("transitioncancel"),Hm=Lr("transitionend"),Gm=new Map,df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");df.push("scrollEnd");function Fi(t,i){Gm.set(t,i),le(i,[t])}var Kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ti=[],_s=0,hf=0;function Ql(){for(var t=_s,i=hf=_s=0;i<t;){var s=Ti[i];Ti[i++]=null;var l=Ti[i];Ti[i++]=null;var f=Ti[i];Ti[i++]=null;var h=Ti[i];if(Ti[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}h!==0&&Vm(s,f,h)}}function Jl(t,i,s,l){Ti[_s++]=t,Ti[_s++]=i,Ti[_s++]=s,Ti[_s++]=l,hf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function pf(t,i,s,l){return Jl(t,i,s,l),$l(t)}function Or(t,i){return Jl(t,null,null,i),$l(t)}function Vm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-He(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function $l(t){if(50<el)throw el=0,Md=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var xs={};function yS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(t,i,s,l){return new yS(t,i,s,l)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,i){var s=t.alternate;return s===null?(s=pi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function km(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function ec(t,i,s,l,f,h){var S=0;if(l=t,typeof t=="function")mf(t)&&(S=1);else if(typeof t=="string")S=Tb(t,s,Se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case T:return t=pi(31,s,i,f),t.elementType=T,t.lanes=h,t;case A:return Pr(s.children,f,h,i);case b:S=8,f|=24;break;case x:return t=pi(12,s,i,f|2),t.elementType=x,t.lanes=h,t;case L:return t=pi(13,s,i,f),t.elementType=L,t.lanes=h,t;case I:return t=pi(19,s,i,f),t.elementType=I,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:S=10;break e;case U:S=9;break e;case N:S=11;break e;case z:S=14;break e;case H:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=pi(S,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Pr(t,i,s,l){return t=pi(7,t,l,i),t.lanes=s,t}function gf(t,i,s){return t=pi(6,t,null,i),t.lanes=s,t}function Xm(t){var i=pi(18,null,null,0);return i.stateNode=t,i}function vf(t,i,s){return i=pi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Wm=new WeakMap;function Ai(t,i){if(typeof t=="object"&&t!==null){var s=Wm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:W(i)},Wm.set(t,i),i)}return{value:t,source:i,stack:W(i)}}var ys=[],Ss=0,tc=null,Lo=0,Ri=[],wi=0,Za=null,Ki=1,Qi="";function da(t,i){ys[Ss++]=Lo,ys[Ss++]=tc,tc=t,Lo=i}function qm(t,i,s){Ri[wi++]=Ki,Ri[wi++]=Qi,Ri[wi++]=Za,Za=t;var l=Ki;t=Qi;var f=32-He(l)-1;l&=~(1<<f),s+=1;var h=32-He(i)+f;if(30<h){var S=f-f%5;h=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Ki=1<<32-He(i)+f|s<<f|l,Qi=h+t}else Ki=1<<h|s<<f|l,Qi=t}function _f(t){t.return!==null&&(da(t,1),qm(t,1,0))}function xf(t){for(;t===tc;)tc=ys[--Ss],ys[Ss]=null,Lo=ys[--Ss],ys[Ss]=null;for(;t===Za;)Za=Ri[--wi],Ri[wi]=null,Qi=Ri[--wi],Ri[wi]=null,Ki=Ri[--wi],Ri[wi]=null}function jm(t,i){Ri[wi++]=Ki,Ri[wi++]=Qi,Ri[wi++]=Za,Ki=i.id,Qi=i.overflow,Za=t}var Hn=null,an=null,wt=!1,Ka=null,Ci=!1,yf=Error(r(519));function Qa(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(Ai(i,t)),yf}function Ym(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[vn]=t,i[On]=l,s){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(s=0;s<nl.length;s++)Mt(nl[s],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),la(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),Bn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||f0(i.textContent,s)?(l.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),l.onScroll!=null&&Mt("scroll",i),l.onScrollEnd!=null&&Mt("scrollend",i),l.onClick!=null&&(i.onclick=ca),i=!0):i=!1,i||Qa(t,!0)}function Zm(t){for(Hn=t.return;Hn;)switch(Hn.tag){case 5:case 31:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Hn=Hn.return}}function bs(t){if(t!==Hn)return!1;if(!wt)return Zm(t),wt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Id(t.type,t.memoizedProps)),s=!s),s&&an&&Qa(t),Zm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));an=y0(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));an=y0(t)}else i===27?(i=an,fr(t.type)?(t=kd,kd=null,an=t):an=i):an=Hn?Ui(t.stateNode.nextSibling):null;return!0}function zr(){an=Hn=null,wt=!1}function Sf(){var t=Ka;return t!==null&&(oi===null?oi=t:oi.push.apply(oi,t),Ka=null),t}function Oo(t){Ka===null?Ka=[t]:Ka.push(t)}var bf=P(null),Br=null,ha=null;function Ja(t,i,s){ue(bf,i._currentValue),i._currentValue=s}function pa(t){t._currentValue=bf.current,ie(bf)}function Mf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Ef(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var S=f.child;h=h.firstContext;e:for(;h!==null;){var w=h;h=f;for(var V=0;V<i.length;V++)if(w.context===i[V]){h.lanes|=s,w=h.alternate,w!==null&&(w.lanes|=s),Mf(h.return,s,t),l||(S=null);break e}h=w.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,h=S.alternate,h!==null&&(h.lanes|=s),Mf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Ms(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var w=f.type;hi(f.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(f===re.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(ol):t=[ol])}f=f.return}t!==null&&Ef(i,t,s,l),i.flags|=262144}function nc(t){for(t=t.firstContext;t!==null;){if(!hi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ir(t){Br=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gn(t){return Km(Br,t)}function ic(t,i){return Br===null&&Ir(t),Km(t,i)}function Km(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ha===null){if(t===null)throw Error(r(308));ha=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ha=ha.next=i;return s}var SS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},bS=a.unstable_scheduleCallback,MS=a.unstable_NormalPriority,_n={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tf(){return{controller:new SS,data:new Map,refCount:0}}function Po(t){t.refCount--,t.refCount===0&&bS(MS,function(){t.controller.abort()})}var zo=null,Af=0,Es=0,Ts=null;function ES(t,i){if(zo===null){var s=zo=[];Af=0,Es=Cd(),Ts={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Af++,i.then(Qm,Qm),i}function Qm(){if(--Af===0&&zo!==null){Ts!==null&&(Ts.status="fulfilled");var t=zo;zo=null,Es=0,Ts=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function TS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Jm=O.S;O.S=function(t,i){Pv=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ES(t,i),Jm!==null&&Jm(t,i)};var Fr=P(null);function Rf(){var t=Fr.current;return t!==null?t:tn.pooledCache}function ac(t,i){i===null?ue(Fr,Fr.current):ue(Fr,i.pool)}function $m(){var t=Rf();return t===null?null:{parent:_n._currentValue,pool:t}}var As=Error(r(460)),wf=Error(r(474)),rc=Error(r(542)),sc={then:function(){}};function eg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ca,ca),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ig(t),t;default:if(typeof i.status=="string")i.then(ca,ca);else{if(t=tn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ig(t),t}throw Gr=i,As}}function Hr(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Gr=s,As):s}}var Gr=null;function ng(){if(Gr===null)throw Error(r(459));var t=Gr;return Gr=null,t}function ig(t){if(t===As||t===rc)throw Error(r(483))}var Rs=null,Bo=0;function oc(t){var i=Bo;return Bo+=1,Rs===null&&(Rs=[]),tg(Rs,t,i)}function Io(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function lc(t,i){throw i.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function ag(t){function i(Q,q){if(t){var se=Q.deletions;se===null?(Q.deletions=[q],Q.flags|=16):se.push(q)}}function s(Q,q){if(!t)return null;for(;q!==null;)i(Q,q),q=q.sibling;return null}function l(Q){for(var q=new Map;Q!==null;)Q.key!==null?q.set(Q.key,Q):q.set(Q.index,Q),Q=Q.sibling;return q}function f(Q,q){return Q=fa(Q,q),Q.index=0,Q.sibling=null,Q}function h(Q,q,se){return Q.index=se,t?(se=Q.alternate,se!==null?(se=se.index,se<q?(Q.flags|=67108866,q):se):(Q.flags|=67108866,q)):(Q.flags|=1048576,q)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function w(Q,q,se,_e){return q===null||q.tag!==6?(q=gf(se,Q.mode,_e),q.return=Q,q):(q=f(q,se),q.return=Q,q)}function V(Q,q,se,_e){var nt=se.type;return nt===A?me(Q,q,se.props.children,_e,se.key):q!==null&&(q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===H&&Hr(nt)===q.type)?(q=f(q,se.props),Io(q,se),q.return=Q,q):(q=ec(se.type,se.key,se.props,null,Q.mode,_e),Io(q,se),q.return=Q,q)}function oe(Q,q,se,_e){return q===null||q.tag!==4||q.stateNode.containerInfo!==se.containerInfo||q.stateNode.implementation!==se.implementation?(q=vf(se,Q.mode,_e),q.return=Q,q):(q=f(q,se.children||[]),q.return=Q,q)}function me(Q,q,se,_e,nt){return q===null||q.tag!==7?(q=Pr(se,Q.mode,_e,nt),q.return=Q,q):(q=f(q,se),q.return=Q,q)}function ye(Q,q,se){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=gf(""+q,Q.mode,se),q.return=Q,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case y:return se=ec(q.type,q.key,q.props,null,Q.mode,se),Io(se,q),se.return=Q,se;case M:return q=vf(q,Q.mode,se),q.return=Q,q;case H:return q=Hr(q),ye(Q,q,se)}if($(q)||ee(q))return q=Pr(q,Q.mode,se,null),q.return=Q,q;if(typeof q.then=="function")return ye(Q,oc(q),se);if(q.$$typeof===R)return ye(Q,ic(Q,q),se);lc(Q,q)}return null}function ce(Q,q,se,_e){var nt=q!==null?q.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return nt!==null?null:w(Q,q,""+se,_e);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case y:return se.key===nt?V(Q,q,se,_e):null;case M:return se.key===nt?oe(Q,q,se,_e):null;case H:return se=Hr(se),ce(Q,q,se,_e)}if($(se)||ee(se))return nt!==null?null:me(Q,q,se,_e,null);if(typeof se.then=="function")return ce(Q,q,oc(se),_e);if(se.$$typeof===R)return ce(Q,q,ic(Q,se),_e);lc(Q,se)}return null}function de(Q,q,se,_e,nt){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Q=Q.get(se)||null,w(q,Q,""+_e,nt);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case y:return Q=Q.get(_e.key===null?se:_e.key)||null,V(q,Q,_e,nt);case M:return Q=Q.get(_e.key===null?se:_e.key)||null,oe(q,Q,_e,nt);case H:return _e=Hr(_e),de(Q,q,se,_e,nt)}if($(_e)||ee(_e))return Q=Q.get(se)||null,me(q,Q,_e,nt,null);if(typeof _e.then=="function")return de(Q,q,se,oc(_e),nt);if(_e.$$typeof===R)return de(Q,q,se,ic(q,_e),nt);lc(q,_e)}return null}function We(Q,q,se,_e){for(var nt=null,Pt=null,$e=q,_t=q=0,At=null;$e!==null&&_t<se.length;_t++){$e.index>_t?(At=$e,$e=null):At=$e.sibling;var zt=ce(Q,$e,se[_t],_e);if(zt===null){$e===null&&($e=At);break}t&&$e&&zt.alternate===null&&i(Q,$e),q=h(zt,q,_t),Pt===null?nt=zt:Pt.sibling=zt,Pt=zt,$e=At}if(_t===se.length)return s(Q,$e),wt&&da(Q,_t),nt;if($e===null){for(;_t<se.length;_t++)$e=ye(Q,se[_t],_e),$e!==null&&(q=h($e,q,_t),Pt===null?nt=$e:Pt.sibling=$e,Pt=$e);return wt&&da(Q,_t),nt}for($e=l($e);_t<se.length;_t++)At=de($e,Q,_t,se[_t],_e),At!==null&&(t&&At.alternate!==null&&$e.delete(At.key===null?_t:At.key),q=h(At,q,_t),Pt===null?nt=At:Pt.sibling=At,Pt=At);return t&&$e.forEach(function(gr){return i(Q,gr)}),wt&&da(Q,_t),nt}function lt(Q,q,se,_e){if(se==null)throw Error(r(151));for(var nt=null,Pt=null,$e=q,_t=q=0,At=null,zt=se.next();$e!==null&&!zt.done;_t++,zt=se.next()){$e.index>_t?(At=$e,$e=null):At=$e.sibling;var gr=ce(Q,$e,zt.value,_e);if(gr===null){$e===null&&($e=At);break}t&&$e&&gr.alternate===null&&i(Q,$e),q=h(gr,q,_t),Pt===null?nt=gr:Pt.sibling=gr,Pt=gr,$e=At}if(zt.done)return s(Q,$e),wt&&da(Q,_t),nt;if($e===null){for(;!zt.done;_t++,zt=se.next())zt=ye(Q,zt.value,_e),zt!==null&&(q=h(zt,q,_t),Pt===null?nt=zt:Pt.sibling=zt,Pt=zt);return wt&&da(Q,_t),nt}for($e=l($e);!zt.done;_t++,zt=se.next())zt=de($e,Q,_t,zt.value,_e),zt!==null&&(t&&zt.alternate!==null&&$e.delete(zt.key===null?_t:zt.key),q=h(zt,q,_t),Pt===null?nt=zt:Pt.sibling=zt,Pt=zt);return t&&$e.forEach(function(zb){return i(Q,zb)}),wt&&da(Q,_t),nt}function Jt(Q,q,se,_e){if(typeof se=="object"&&se!==null&&se.type===A&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case y:e:{for(var nt=se.key;q!==null;){if(q.key===nt){if(nt=se.type,nt===A){if(q.tag===7){s(Q,q.sibling),_e=f(q,se.props.children),_e.return=Q,Q=_e;break e}}else if(q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===H&&Hr(nt)===q.type){s(Q,q.sibling),_e=f(q,se.props),Io(_e,se),_e.return=Q,Q=_e;break e}s(Q,q);break}else i(Q,q);q=q.sibling}se.type===A?(_e=Pr(se.props.children,Q.mode,_e,se.key),_e.return=Q,Q=_e):(_e=ec(se.type,se.key,se.props,null,Q.mode,_e),Io(_e,se),_e.return=Q,Q=_e)}return S(Q);case M:e:{for(nt=se.key;q!==null;){if(q.key===nt)if(q.tag===4&&q.stateNode.containerInfo===se.containerInfo&&q.stateNode.implementation===se.implementation){s(Q,q.sibling),_e=f(q,se.children||[]),_e.return=Q,Q=_e;break e}else{s(Q,q);break}else i(Q,q);q=q.sibling}_e=vf(se,Q.mode,_e),_e.return=Q,Q=_e}return S(Q);case H:return se=Hr(se),Jt(Q,q,se,_e)}if($(se))return We(Q,q,se,_e);if(ee(se)){if(nt=ee(se),typeof nt!="function")throw Error(r(150));return se=nt.call(se),lt(Q,q,se,_e)}if(typeof se.then=="function")return Jt(Q,q,oc(se),_e);if(se.$$typeof===R)return Jt(Q,q,ic(Q,se),_e);lc(Q,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,q!==null&&q.tag===6?(s(Q,q.sibling),_e=f(q,se),_e.return=Q,Q=_e):(s(Q,q),_e=gf(se,Q.mode,_e),_e.return=Q,Q=_e),S(Q)):s(Q,q)}return function(Q,q,se,_e){try{Bo=0;var nt=Jt(Q,q,se,_e);return Rs=null,nt}catch($e){if($e===As||$e===rc)throw $e;var Pt=pi(29,$e,null,Q.mode);return Pt.lanes=_e,Pt.return=Q,Pt}}}var Vr=ag(!0),rg=ag(!1),$a=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function er(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function tr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=$l(t),Vm(t,null,s),i}return Jl(t,l,i,s),$l(t)}function Fo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,xo(t,s)}}function Uf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=S:h=h.next=S,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Nf=!1;function Ho(){if(Nf){var t=Ts;if(t!==null)throw t}}function Go(t,i,s,l){Nf=!1;var f=t.updateQueue;$a=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var V=w,oe=V.next;V.next=null,S===null?h=oe:S.next=oe,S=V;var me=t.alternate;me!==null&&(me=me.updateQueue,w=me.lastBaseUpdate,w!==S&&(w===null?me.firstBaseUpdate=oe:w.next=oe,me.lastBaseUpdate=V))}if(h!==null){var ye=f.baseState;S=0,me=oe=V=null,w=h;do{var ce=w.lane&-536870913,de=ce!==w.lane;if(de?(Tt&ce)===ce:(l&ce)===ce){ce!==0&&ce===Es&&(Nf=!0),me!==null&&(me=me.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var We=t,lt=w;ce=i;var Jt=s;switch(lt.tag){case 1:if(We=lt.payload,typeof We=="function"){ye=We.call(Jt,ye,ce);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=lt.payload,ce=typeof We=="function"?We.call(Jt,ye,ce):We,ce==null)break e;ye=g({},ye,ce);break e;case 2:$a=!0}}ce=w.callback,ce!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[ce]:de.push(ce))}else de={lane:ce,tag:w.tag,payload:w.payload,callback:w.callback,next:null},me===null?(oe=me=de,V=ye):me=me.next=de,S|=ce;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;de=w,w=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);me===null&&(V=ye),f.baseState=V,f.firstBaseUpdate=oe,f.lastBaseUpdate=me,h===null&&(f.shared.lanes=0),sr|=S,t.lanes=S,t.memoizedState=ye}}function sg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function og(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)sg(s[t],i)}var ws=P(null),cc=P(0);function lg(t,i){t=Ma,ue(cc,t),ue(ws,i),Ma=t|i.baseLanes}function Lf(){ue(cc,Ma),ue(ws,ws.current)}function Of(){Ma=cc.current,ie(ws),ie(cc)}var mi=P(null),Di=null;function nr(t){var i=t.alternate;ue(mn,mn.current&1),ue(mi,t),Di===null&&(i===null||ws.current!==null||i.memoizedState!==null)&&(Di=t)}function Pf(t){ue(mn,mn.current),ue(mi,t),Di===null&&(Di=t)}function cg(t){t.tag===22?(ue(mn,mn.current),ue(mi,t),Di===null&&(Di=t)):ir()}function ir(){ue(mn,mn.current),ue(mi,mi.current)}function gi(t){ie(mi),Di===t&&(Di=null),ie(mn)}var mn=P(0);function uc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Gd(s)||Vd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ma=0,gt=null,Kt=null,xn=null,fc=!1,Cs=!1,kr=!1,dc=0,Vo=0,Ds=null,AS=0;function fn(){throw Error(r(321))}function zf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!hi(t[s],i[s]))return!1;return!0}function Bf(t,i,s,l,f,h){return ma=h,gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=t===null||t.memoizedState===null?qg:Jf,kr=!1,h=s(l,f),kr=!1,Cs&&(h=fg(i,s,l,f)),ug(t),h}function ug(t){O.H=Wo;var i=Kt!==null&&Kt.next!==null;if(ma=0,xn=Kt=gt=null,fc=!1,Vo=0,Ds=null,i)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&nc(t)&&(yn=!0))}function fg(t,i,s,l){gt=t;var f=0;do{if(Cs&&(Ds=null),Vo=0,Cs=!1,25<=f)throw Error(r(301));if(f+=1,xn=Kt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=jg,h=i(s,l)}while(Cs);return h}function RS(){var t=O.H,i=t.useState()[0];return i=typeof i.then=="function"?ko(i):i,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(gt.flags|=1024),i}function If(){var t=dc!==0;return dc=0,t}function Ff(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Hf(t){if(fc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}fc=!1}ma=0,xn=Kt=gt=null,Cs=!1,Vo=dc=0,Ds=null}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?gt.memoizedState=xn=t:xn=xn.next=t,xn}function gn(){if(Kt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=xn===null?gt.memoizedState:xn.next;if(i!==null)xn=i,Kt=t;else{if(t===null)throw gt.alternate===null?Error(r(467)):Error(r(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},xn===null?gt.memoizedState=xn=t:xn=xn.next=t}return xn}function hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(t){var i=Vo;return Vo+=1,Ds===null&&(Ds=[]),t=tg(Ds,t,i),i=gt,(xn===null?i.memoizedState:xn.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?qg:Jf),t}function pc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ko(t);if(t.$$typeof===R)return Gn(t)}throw Error(r(438,String(t)))}function Gf(t){var i=null,s=gt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=gt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=hc(),gt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=D;return i.index++,s}function ga(t,i){return typeof i=="function"?i(t):i}function mc(t){var i=gn();return Vf(i,Kt,t)}function Vf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var w=S=null,V=null,oe=i,me=!1;do{var ye=oe.lane&-536870913;if(ye!==oe.lane?(Tt&ye)===ye:(ma&ye)===ye){var ce=oe.revertLane;if(ce===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),ye===Es&&(me=!0);else if((ma&ce)===ce){oe=oe.next,ce===Es&&(me=!0);continue}else ye={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(w=V=ye,S=h):V=V.next=ye,gt.lanes|=ce,sr|=ce;ye=oe.action,kr&&s(h,ye),h=oe.hasEagerState?oe.eagerState:s(h,ye)}else ce={lane:ye,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(w=V=ce,S=h):V=V.next=ce,gt.lanes|=ye,sr|=ye;oe=oe.next}while(oe!==null&&oe!==i);if(V===null?S=h:V.next=w,!hi(h,t.memoizedState)&&(yn=!0,me&&(s=Ts,s!==null)))throw s;t.memoizedState=h,t.baseState=S,t.baseQueue=V,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function kf(t){var i=gn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);hi(h,i.memoizedState)||(yn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function dg(t,i,s){var l=gt,f=gn(),h=wt;if(h){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!hi((Kt||f).memoizedState,s);if(S&&(f.memoizedState=s,yn=!0),f=f.queue,qf(mg.bind(null,l,f,t),[t]),f.getSnapshot!==i||S||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,Us(9,{destroy:void 0},pg.bind(null,l,f,s,i),null),tn===null)throw Error(r(349));h||(ma&127)!==0||hg(l,i,s)}return s}function hg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=gt.updateQueue,i===null?(i=hc(),gt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function pg(t,i,s,l){i.value=s,i.getSnapshot=l,gg(i)&&vg(t)}function mg(t,i,s){return s(function(){gg(i)&&vg(t)})}function gg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!hi(t,s)}catch{return!0}}function vg(t){var i=Or(t,2);i!==null&&li(i,t,2)}function Xf(t){var i=Qn();if(typeof t=="function"){var s=t;if(t=s(),kr){Ve(!0);try{s()}finally{Ve(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},i}function _g(t,i,s,l){return t.baseState=s,Vf(t,Kt,typeof l=="function"?l:ga)}function wS(t,i,s,l,f){if(_c(t))throw Error(r(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};O.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,xg(i,h)):(h.next=s.next,i.pending=s.next=h)}}function xg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=O.T,S={};O.T=S;try{var w=s(f,l),V=O.S;V!==null&&V(S,w),yg(t,i,w)}catch(oe){Wf(t,i,oe)}finally{h!==null&&S.types!==null&&(h.types=S.types),O.T=h}}else try{h=s(f,l),yg(t,i,h)}catch(oe){Wf(t,i,oe)}}function yg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Sg(t,i,l)},function(l){return Wf(t,i,l)}):Sg(t,i,s)}function Sg(t,i,s){i.status="fulfilled",i.value=s,bg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,xg(t,s)))}function Wf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,bg(i),i=i.next;while(i!==l)}t.action=null}function bg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Mg(t,i){return i}function Eg(t,i){if(wt){var s=tn.formState;if(s!==null){e:{var l=gt;if(wt){if(an){t:{for(var f=an,h=Ci;f.nodeType!==8;){if(!h){f=null;break t}if(f=Ui(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){an=Ui(f.nextSibling),l=f.data==="F!";break e}}Qa(l)}l=!1}l&&(i=s[0])}}return s=Qn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mg,lastRenderedState:i},s.queue=l,s=kg.bind(null,gt,l),l.dispatch=s,l=Xf(!1),h=Qf.bind(null,gt,!1,l.queue),l=Qn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=wS.bind(null,gt,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Tg(t){var i=gn();return Ag(i,Kt,t)}function Ag(t,i,s){if(i=Vf(t,i,Mg)[0],t=mc(ga)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ko(i)}catch(S){throw S===As?rc:S}else l=i;i=gn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(gt.flags|=2048,Us(9,{destroy:void 0},CS.bind(null,f,s),null)),[l,h,t]}function CS(t,i){t.action=i}function Rg(t){var i=gn(),s=Kt;if(s!==null)return Ag(i,s,t);gn(),i=i.memoizedState,s=gn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Us(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=gt.updateQueue,i===null&&(i=hc(),gt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function wg(){return gn().memoizedState}function gc(t,i,s,l){var f=Qn();gt.flags|=t,f.memoizedState=Us(1|i,{destroy:void 0},s,l===void 0?null:l)}function vc(t,i,s,l){var f=gn();l=l===void 0?null:l;var h=f.memoizedState.inst;Kt!==null&&l!==null&&zf(l,Kt.memoizedState.deps)?f.memoizedState=Us(i,h,s,l):(gt.flags|=t,f.memoizedState=Us(1|i,h,s,l))}function Cg(t,i){gc(8390656,8,t,i)}function qf(t,i){vc(2048,8,t,i)}function DS(t){gt.flags|=4;var i=gt.updateQueue;if(i===null)i=hc(),gt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Dg(t){var i=gn().memoizedState;return DS({ref:i,nextImpl:t}),function(){if((Gt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function Ug(t,i){return vc(4,2,t,i)}function Ng(t,i){return vc(4,4,t,i)}function Lg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Og(t,i,s){s=s!=null?s.concat([t]):null,vc(4,4,Lg.bind(null,i,t),s)}function jf(){}function Pg(t,i){var s=gn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&zf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function zg(t,i){var s=gn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&zf(i,l[1]))return l[0];if(l=t(),kr){Ve(!0);try{t()}finally{Ve(!1)}}return s.memoizedState=[l,i],l}function Yf(t,i,s){return s===void 0||(ma&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Bv(),gt.lanes|=t,sr|=t,s)}function Bg(t,i,s,l){return hi(s,i)?s:ws.current!==null?(t=Yf(t,s,l),hi(t,i)||(yn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(Tt&261930)===0?(yn=!0,t.memoizedState=s):(t=Bv(),gt.lanes|=t,sr|=t,i)}function Ig(t,i,s,l,f){var h=F.p;F.p=h!==0&&8>h?h:8;var S=O.T,w={};O.T=w,Qf(t,!1,i,s);try{var V=f(),oe=O.S;if(oe!==null&&oe(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var me=TS(V,l);Xo(t,i,me,xi(t))}else Xo(t,i,l,xi(t))}catch(ye){Xo(t,i,{then:function(){},status:"rejected",reason:ye},xi())}finally{F.p=h,S!==null&&w.types!==null&&(S.types=w.types),O.T=S}}function US(){}function Zf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=Fg(t).queue;Ig(t,f,i,k,s===null?US:function(){return Hg(t),s(l)})}function Fg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:k},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Hg(t){var i=Fg(t);i.next===null&&(i=t.alternate.memoizedState),Xo(t,i.next.queue,{},xi())}function Kf(){return Gn(ol)}function Gg(){return gn().memoizedState}function Vg(){return gn().memoizedState}function NS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=xi();t=er(s);var l=tr(i,t,s);l!==null&&(li(l,i,s),Fo(l,i,s)),i={cache:Tf()},t.payload=i;return}i=i.return}}function LS(t,i,s){var l=xi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_c(t)?Xg(i,s):(s=pf(t,i,s,l),s!==null&&(li(s,t,l),Wg(s,i,l)))}function kg(t,i,s){var l=xi();Xo(t,i,s,l)}function Xo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(_c(t))Xg(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,w=h(S,s);if(f.hasEagerState=!0,f.eagerState=w,hi(w,S))return Jl(t,i,f,0),tn===null&&Ql(),!1}catch{}if(s=pf(t,i,f,l),s!==null)return li(s,t,l),Wg(s,i,l),!0}return!1}function Qf(t,i,s,l){if(l={lane:2,revertLane:Cd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_c(t)){if(i)throw Error(r(479))}else i=pf(t,s,l,2),i!==null&&li(i,t,2)}function _c(t){var i=t.alternate;return t===gt||i!==null&&i===gt}function Xg(t,i){Cs=fc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Wg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,xo(t,s)}}var Wo={readContext:Gn,use:pc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};Wo.useEffectEvent=fn;var qg={readContext:Gn,use:pc,useCallback:function(t,i){return Qn().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:Cg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,gc(4194308,4,Lg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return gc(4194308,4,t,i)},useInsertionEffect:function(t,i){gc(4,2,t,i)},useMemo:function(t,i){var s=Qn();i=i===void 0?null:i;var l=t();if(kr){Ve(!0);try{t()}finally{Ve(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Qn();if(s!==void 0){var f=s(i);if(kr){Ve(!0);try{s(i)}finally{Ve(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=LS.bind(null,gt,t),[l.memoizedState,t]},useRef:function(t){var i=Qn();return t={current:t},i.memoizedState=t},useState:function(t){t=Xf(t);var i=t.queue,s=kg.bind(null,gt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:jf,useDeferredValue:function(t,i){var s=Qn();return Yf(s,t,i)},useTransition:function(){var t=Xf(!1);return t=Ig.bind(null,gt,t.queue,!0,!1),Qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=gt,f=Qn();if(wt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),tn===null)throw Error(r(349));(Tt&127)!==0||hg(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,Cg(mg.bind(null,l,h,t),[t]),l.flags|=2048,Us(9,{destroy:void 0},pg.bind(null,l,h,s,i),null),s},useId:function(){var t=Qn(),i=tn.identifierPrefix;if(wt){var s=Qi,l=Ki;s=(l&~(1<<32-He(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=dc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=AS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Kf,useFormState:Eg,useActionState:Eg,useOptimistic:function(t){var i=Qn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Qf.bind(null,gt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Gf,useCacheRefresh:function(){return Qn().memoizedState=NS.bind(null,gt)},useEffectEvent:function(t){var i=Qn(),s={impl:t};return i.memoizedState=s,function(){if((Gt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Jf={readContext:Gn,use:pc,useCallback:Pg,useContext:Gn,useEffect:qf,useImperativeHandle:Og,useInsertionEffect:Ug,useLayoutEffect:Ng,useMemo:zg,useReducer:mc,useRef:wg,useState:function(){return mc(ga)},useDebugValue:jf,useDeferredValue:function(t,i){var s=gn();return Bg(s,Kt.memoizedState,t,i)},useTransition:function(){var t=mc(ga)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:ko(t),i]},useSyncExternalStore:dg,useId:Gg,useHostTransitionStatus:Kf,useFormState:Tg,useActionState:Tg,useOptimistic:function(t,i){var s=gn();return _g(s,Kt,t,i)},useMemoCache:Gf,useCacheRefresh:Vg};Jf.useEffectEvent=Dg;var jg={readContext:Gn,use:pc,useCallback:Pg,useContext:Gn,useEffect:qf,useImperativeHandle:Og,useInsertionEffect:Ug,useLayoutEffect:Ng,useMemo:zg,useReducer:kf,useRef:wg,useState:function(){return kf(ga)},useDebugValue:jf,useDeferredValue:function(t,i){var s=gn();return Kt===null?Yf(s,t,i):Bg(s,Kt.memoizedState,t,i)},useTransition:function(){var t=kf(ga)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:ko(t),i]},useSyncExternalStore:dg,useId:Gg,useHostTransitionStatus:Kf,useFormState:Rg,useActionState:Rg,useOptimistic:function(t,i){var s=gn();return Kt!==null?_g(s,Kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Gf,useCacheRefresh:Vg};jg.useEffectEvent=Dg;function $f(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ed={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=xi(),f=er(l);f.payload=i,s!=null&&(f.callback=s),i=tr(t,f,l),i!==null&&(li(i,t,l),Fo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=xi(),f=er(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=tr(t,f,l),i!==null&&(li(i,t,l),Fo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=xi(),l=er(s);l.tag=2,i!=null&&(l.callback=i),i=tr(t,l,s),i!==null&&(li(i,t,s),Fo(i,t,s))}};function Yg(t,i,s,l,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!Uo(s,l)||!Uo(f,h):!0}function Zg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&ed.enqueueReplaceState(i,i.state,null)}function Xr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Kg(t){Kl(t)}function Qg(t){console.error(t)}function Jg(t){Kl(t)}function xc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function $g(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function td(t,i,s){return s=er(s),s.tag=3,s.payload={element:null},s.callback=function(){xc(t,i)},s}function ev(t){return t=er(t),t.tag=3,t}function tv(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){$g(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){$g(i,s,l),typeof f!="function"&&(or===null?or=new Set([this]):or.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function OS(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Ms(i,s,f,!0),s=mi.current,s!==null){switch(s.tag){case 31:case 13:return Di===null?Uc():s.alternate===null&&dn===0&&(dn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===sc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Ad(t,l,f)),!1;case 22:return s.flags|=65536,l===sc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Ad(t,l,f)),!1}throw Error(r(435,s.tag))}return Ad(t,l,f),Uc(),!1}if(wt)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==yf&&(t=Error(r(422),{cause:l}),Oo(Ai(t,s)))):(l!==yf&&(i=Error(r(423),{cause:l}),Oo(Ai(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ai(l,s),f=td(t.stateNode,l,f),Uf(t,f),dn!==4&&(dn=2)),!1;var h=Error(r(520),{cause:l});if(h=Ai(h,s),$o===null?$o=[h]:$o.push(h),dn!==4&&(dn=2),i===null)return!0;l=Ai(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=td(s.stateNode,l,t),Uf(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(or===null||!or.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=ev(f),tv(f,t,s,l),Uf(s,f),!1}s=s.return}while(s!==null);return!1}var nd=Error(r(461)),yn=!1;function Vn(t,i,s,l){i.child=t===null?rg(i,null,s,l):Vr(i,t.child,s,l)}function nv(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var S={};for(var w in l)w!=="ref"&&(S[w]=l[w])}else S=l;return Ir(i),l=Bf(t,i,s,S,h,f),w=If(),t!==null&&!yn?(Ff(t,i,f),va(t,i,f)):(wt&&w&&_f(i),i.flags|=1,Vn(t,i,l,f),i.child)}function iv(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!mf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,av(t,i,h,l,f)):(t=ec(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!ud(t,f)){var S=h.memoizedProps;if(s=s.compare,s=s!==null?s:Uo,s(S,l)&&t.ref===i.ref)return va(t,i,f)}return i.flags|=1,t=fa(h,l),t.ref=i.ref,t.return=i,i.child=t}function av(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(Uo(h,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=h,ud(t,f))(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,va(t,i,f)}return id(t,i,s,l,f)}function rv(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return sv(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ac(i,h!==null?h.cachePool:null),h!==null?lg(i,h):Lf(),cg(i);else return l=i.lanes=536870912,sv(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(ac(i,h.cachePool),lg(i,h),ir(),i.memoizedState=null):(t!==null&&ac(i,null),Lf(),ir());return Vn(t,i,f,s),i.child}function qo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function sv(t,i,s,l,f){var h=Rf();return h=h===null?null:{parent:_n._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&ac(i,null),Lf(),cg(i),t!==null&&Ms(t,i,l,!0),i.childLanes=f,null}function yc(t,i){return i=bc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function ov(t,i,s){return Vr(i,t.child,null,s),t=yc(i,i.pendingProps),t.flags|=2,gi(i),i.memoizedState=null,t}function PS(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(wt){if(l.mode==="hidden")return t=yc(i,l),i.lanes=536870912,qo(null,t);if(Pf(i),(t=an)?(t=x0(t,Ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Za!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},s=Xm(t),s.return=i,i.child=s,Hn=i,an=null)):t=null,t===null)throw Qa(i);return i.lanes=536870912,null}return yc(i,l)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(Pf(i),f)if(i.flags&256)i.flags&=-257,i=ov(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(yn||Ms(t,i,s,!1),f=(s&t.childLanes)!==0,yn||f){if(l=tn,l!==null&&(S=ls(l,s),S!==0&&S!==h.retryLane))throw h.retryLane=S,Or(t,S),li(l,t,S),nd;Uc(),i=ov(t,i,s)}else t=h.treeContext,an=Ui(S.nextSibling),Hn=i,wt=!0,Ka=null,Ci=!1,t!==null&&jm(i,t),i=yc(i,l),i.flags|=4096;return i}return t=fa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Sc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function id(t,i,s,l,f){return Ir(i),s=Bf(t,i,s,l,void 0,f),l=If(),t!==null&&!yn?(Ff(t,i,f),va(t,i,f)):(wt&&l&&_f(i),i.flags|=1,Vn(t,i,s,f),i.child)}function lv(t,i,s,l,f,h){return Ir(i),i.updateQueue=null,s=fg(i,l,s,f),ug(t),l=If(),t!==null&&!yn?(Ff(t,i,h),va(t,i,h)):(wt&&l&&_f(i),i.flags|=1,Vn(t,i,s,h),i.child)}function cv(t,i,s,l,f){if(Ir(i),i.stateNode===null){var h=xs,S=s.contextType;typeof S=="object"&&S!==null&&(h=Gn(S)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=ed,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},Cf(i),S=s.contextType,h.context=typeof S=="object"&&S!==null?Gn(S):xs,h.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&($f(i,s,S,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&ed.enqueueReplaceState(h,h.state,null),Go(i,l,h,f),Ho(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var w=i.memoizedProps,V=Xr(s,w);h.props=V;var oe=h.context,me=s.contextType;S=xs,typeof me=="object"&&me!==null&&(S=Gn(me));var ye=s.getDerivedStateFromProps;me=typeof ye=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||oe!==S)&&Zg(i,h,l,S),$a=!1;var ce=i.memoizedState;h.state=ce,Go(i,l,h,f),Ho(),oe=i.memoizedState,w||ce!==oe||$a?(typeof ye=="function"&&($f(i,s,ye,l),oe=i.memoizedState),(V=$a||Yg(i,s,V,l,ce,oe,S))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=oe),h.props=l,h.state=oe,h.context=S,l=V):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,Df(t,i),S=i.memoizedProps,me=Xr(s,S),h.props=me,ye=i.pendingProps,ce=h.context,oe=s.contextType,V=xs,typeof oe=="object"&&oe!==null&&(V=Gn(oe)),w=s.getDerivedStateFromProps,(oe=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==ye||ce!==V)&&Zg(i,h,l,V),$a=!1,ce=i.memoizedState,h.state=ce,Go(i,l,h,f),Ho();var de=i.memoizedState;S!==ye||ce!==de||$a||t!==null&&t.dependencies!==null&&nc(t.dependencies)?(typeof w=="function"&&($f(i,s,w,l),de=i.memoizedState),(me=$a||Yg(i,s,me,l,ce,de,V)||t!==null&&t.dependencies!==null&&nc(t.dependencies))?(oe||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,de,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,de,V)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=de),h.props=l,h.state=de,h.context=V,l=me):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,Sc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Vr(i,t.child,null,f),i.child=Vr(i,null,s,f)):Vn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=va(t,i,f),t}function uv(t,i,s,l){return zr(),i.flags|=256,Vn(t,i,s,l),i.child}var ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rd(t){return{baseLanes:t,cachePool:$m()}}function sd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=_i),t}function fv(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(wt){if(f?nr(i):ir(),(t=an)?(t=x0(t,Ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Za!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},s=Xm(t),s.return=i,i.child=s,Hn=i,an=null)):t=null,t===null)throw Qa(i);return Vd(t)?i.lanes=32:i.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(ir(),f=i.mode,w=bc({mode:"hidden",children:w},f),l=Pr(l,f,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,l=i.child,l.memoizedState=rd(s),l.childLanes=sd(t,S,s),i.memoizedState=ad,qo(null,l)):(nr(i),od(i,w))}var V=t.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(h)i.flags&256?(nr(i),i.flags&=-257,i=ld(t,i,s)):i.memoizedState!==null?(ir(),i.child=t.child,i.flags|=128,i=null):(ir(),w=l.fallback,f=i.mode,l=bc({mode:"visible",children:l.children},f),w=Pr(w,f,s,null),w.flags|=2,l.return=i,w.return=i,l.sibling=w,i.child=l,Vr(i,t.child,null,s),l=i.child,l.memoizedState=rd(s),l.childLanes=sd(t,S,s),i.memoizedState=ad,i=qo(null,l));else if(nr(i),Vd(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var oe=S.dgst;S=oe,l=Error(r(419)),l.stack="",l.digest=S,Oo({value:l,source:null,stack:null}),i=ld(t,i,s)}else if(yn||Ms(t,i,s,!1),S=(s&t.childLanes)!==0,yn||S){if(S=tn,S!==null&&(l=ls(S,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Or(t,l),li(S,t,l),nd;Gd(w)||Uc(),i=ld(t,i,s)}else Gd(w)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,an=Ui(w.nextSibling),Hn=i,wt=!0,Ka=null,Ci=!1,t!==null&&jm(i,t),i=od(i,l.children),i.flags|=4096);return i}return f?(ir(),w=l.fallback,f=i.mode,V=t.child,oe=V.sibling,l=fa(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,oe!==null?w=fa(oe,w):(w=Pr(w,f,s,null),w.flags|=2),w.return=i,l.return=i,l.sibling=w,i.child=l,qo(null,l),l=i.child,w=t.child.memoizedState,w===null?w=rd(s):(f=w.cachePool,f!==null?(V=_n._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=$m(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=sd(t,S,s),i.memoizedState=ad,qo(t.child,l)):(nr(i),s=t.child,t=s.sibling,s=fa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function od(t,i){return i=bc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function bc(t,i){return t=pi(22,t,null,i),t.lanes=0,t}function ld(t,i,s){return Vr(i,t.child,null,s),t=od(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function dv(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Mf(t.return,i,s)}function cd(t,i,s,l,f,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=h)}function hv(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var S=mn.current,w=(S&2)!==0;if(w?(S=S&1|2,i.flags|=128):S&=1,ue(mn,S),Vn(t,i,l,s),l=wt?Lo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dv(t,s,i);else if(t.tag===19)dv(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&uc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),cd(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&uc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}cd(i,!0,s,null,h,l);break;case"together":cd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function va(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),sr|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Ms(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=fa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=fa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function ud(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&nc(t)))}function zS(t,i,s){switch(i.tag){case 3:De(i,i.stateNode.containerInfo),Ja(i,_n,t.memoizedState.cache),zr();break;case 27:case 5:ze(i);break;case 4:De(i,i.stateNode.containerInfo);break;case 10:Ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Pf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(nr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?fv(t,i,s):(nr(i),t=va(t,i,s),t!==null?t.sibling:null);nr(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Ms(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return hv(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ue(mn,mn.current),l)break;return null;case 22:return i.lanes=0,rv(t,i,s,i.pendingProps);case 24:Ja(i,_n,t.memoizedState.cache)}return va(t,i,s)}function pv(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)yn=!0;else{if(!ud(t,s)&&(i.flags&128)===0)return yn=!1,zS(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,wt&&(i.flags&1048576)!==0&&qm(i,Lo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Hr(i.elementType),i.type=t,typeof t=="function")mf(t)?(l=Xr(t,l),i.tag=1,i=cv(null,i,t,l,s)):(i.tag=0,i=id(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===N){i.tag=11,i=nv(null,i,t,l,s);break e}else if(f===z){i.tag=14,i=iv(null,i,t,l,s);break e}}throw i=he(t)||t,Error(r(306,i,""))}}return i;case 0:return id(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Xr(l,i.pendingProps),cv(t,i,l,f,s);case 3:e:{if(De(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,Df(t,i),Go(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Ja(i,_n,l),l!==h.cache&&Ef(i,[_n],s,!0),Ho(),l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=uv(t,i,l,s);break e}else if(l!==f){f=Ai(Error(r(424)),i),Oo(f),i=uv(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,an=Ui(t.firstChild),Hn=i,wt=!0,Ka=null,Ci=!0,s=rg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(zr(),l===f){i=va(t,i,s);break e}Vn(t,i,l,s)}i=i.child}return i;case 26:return Sc(t,i),t===null?(s=T0(i.type,null,i.pendingProps,null))?i.memoizedState=s:wt||(s=i.type,t=i.pendingProps,l=Ic(te.current).createElement(s),l[vn]=i,l[On]=t,kn(l,s,t),C(l),i.stateNode=l):i.memoizedState=T0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ze(i),t===null&&wt&&(l=i.stateNode=b0(i.type,i.pendingProps,te.current),Hn=i,Ci=!0,f=an,fr(i.type)?(kd=f,an=Ui(l.firstChild)):an=f),Vn(t,i,i.pendingProps.children,s),Sc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&wt&&((f=l=an)&&(l=db(l,i.type,i.pendingProps,Ci),l!==null?(i.stateNode=l,Hn=i,an=Ui(l.firstChild),Ci=!1,f=!0):f=!1),f||Qa(i)),ze(i),f=i.type,h=i.pendingProps,S=t!==null?t.memoizedProps:null,l=h.children,Id(f,h)?l=null:S!==null&&Id(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Bf(t,i,RS,null,null,s),ol._currentValue=f),Sc(t,i),Vn(t,i,l,s),i.child;case 6:return t===null&&wt&&((t=s=an)&&(s=hb(s,i.pendingProps,Ci),s!==null?(i.stateNode=s,Hn=i,an=null,t=!0):t=!1),t||Qa(i)),null;case 13:return fv(t,i,s);case 4:return De(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Vr(i,null,l,s):Vn(t,i,l,s),i.child;case 11:return nv(t,i,i.type,i.pendingProps,s);case 7:return Vn(t,i,i.pendingProps,s),i.child;case 8:return Vn(t,i,i.pendingProps.children,s),i.child;case 12:return Vn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ja(i,i.type,l.value),Vn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ir(i),f=Gn(f),l=l(f),i.flags|=1,Vn(t,i,l,s),i.child;case 14:return iv(t,i,i.type,i.pendingProps,s);case 15:return av(t,i,i.type,i.pendingProps,s);case 19:return hv(t,i,s);case 31:return PS(t,i,s);case 22:return rv(t,i,s,i.pendingProps);case 24:return Ir(i),l=Gn(_n),t===null?(f=Rf(),f===null&&(f=tn,h=Tf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},Cf(i),Ja(i,_n,f)):((t.lanes&s)!==0&&(Df(t,i),Go(i,null,null,s),Ho()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ja(i,_n,l)):(l=h.cache,Ja(i,_n,l),l!==f.cache&&Ef(i,[_n],s,!0))),Vn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function _a(t){t.flags|=4}function fd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Gv())t.flags|=8192;else throw Gr=sc,wf}else t.flags&=-16777217}function mv(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!D0(i))if(Gv())t.flags|=8192;else throw Gr=sc,wf}function Mc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Wt():536870912,t.lanes|=i,Ps|=i)}function jo(t,i){if(!wt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function rn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function BS(t,i,s){var l=i.pendingProps;switch(xf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(i),null;case 1:return rn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),pa(_n),Fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(bs(i)?_a(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Sf())),rn(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(_a(i),h!==null?(rn(i),mv(i,h)):(rn(i),fd(i,f,null,l,s))):h?h!==t.memoizedState?(_a(i),rn(i),mv(i,h)):(rn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&_a(i),rn(i),fd(i,f,t,l,s)),null;case 27:if(at(i),s=te.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return rn(i),null}t=Se.current,bs(i)?Ym(i):(t=b0(f,l,s),i.stateNode=t,_a(i))}return rn(i),null;case 5:if(at(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return rn(i),null}if(h=Se.current,bs(i))Ym(i);else{var S=Ic(te.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}h[vn]=i,h[On]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=h;e:switch(kn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&_a(i)}}return rn(i),fd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=te.current,bs(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Hn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[vn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||f0(t.nodeValue,s)),t||Qa(i,!0)}else t=Ic(t).createTextNode(l),t[vn]=i,i.stateNode=t}return rn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=bs(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[vn]=i}else zr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),t=!1}else s=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(gi(i),i):(gi(i),null);if((i.flags&128)!==0)throw Error(r(558))}return rn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=bs(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[vn]=i}else zr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),f=!1}else f=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(gi(i),i):(gi(i),null)}return gi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Mc(i,i.updateQueue),rn(i),null);case 4:return Fe(),t===null&&Ld(i.stateNode.containerInfo),rn(i),null;case 10:return pa(i.type),rn(i),null;case 19:if(ie(mn),l=i.memoizedState,l===null)return rn(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)jo(l,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=uc(t),h!==null){for(i.flags|=128,jo(l,!1),t=h.updateQueue,i.updateQueue=t,Mc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)km(s,t),s=s.sibling;return ue(mn,mn.current&1|2),wt&&da(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&E()>wc&&(i.flags|=128,f=!0,jo(l,!1),i.lanes=4194304)}else{if(!f)if(t=uc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Mc(i,t),jo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!wt)return rn(i),null}else 2*E()-l.renderingStartTime>wc&&s!==536870912&&(i.flags|=128,f=!0,jo(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=E(),t.sibling=null,s=mn.current,ue(mn,f?s&1|2:s&1),wt&&da(i,l.treeForkCount),t):(rn(i),null);case 22:case 23:return gi(i),Of(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(rn(i),i.subtreeFlags&6&&(i.flags|=8192)):rn(i),s=i.updateQueue,s!==null&&Mc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ie(Fr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),pa(_n),rn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function IS(t,i){switch(xf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return pa(_n),Fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return at(i),null;case 31:if(i.memoizedState!==null){if(gi(i),i.alternate===null)throw Error(r(340));zr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(gi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));zr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(mn),null;case 4:return Fe(),null;case 10:return pa(i.type),null;case 22:case 23:return gi(i),Of(),t!==null&&ie(Fr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return pa(_n),null;case 25:return null;default:return null}}function gv(t,i){switch(xf(i),i.tag){case 3:pa(_n),Fe();break;case 26:case 27:case 5:at(i);break;case 4:Fe();break;case 31:i.memoizedState!==null&&gi(i);break;case 13:gi(i);break;case 19:ie(mn);break;case 10:pa(i.type);break;case 22:case 23:gi(i),Of(),t!==null&&ie(Fr);break;case 24:pa(_n)}}function Yo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,S=s.inst;l=h(),S.destroy=l}s=s.next}while(s!==f)}}catch(w){Yt(i,i.return,w)}}function ar(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var S=l.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,f=i;var V=s,oe=w;try{oe()}catch(me){Yt(f,V,me)}}}l=l.next}while(l!==h)}}catch(me){Yt(i,i.return,me)}}function vv(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{og(i,s)}catch(l){Yt(t,t.return,l)}}}function _v(t,i,s){s.props=Xr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Yt(t,i,l)}}function Zo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Yt(t,i,f)}}function Ji(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Yt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Yt(t,i,f)}else s.current=null}function xv(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Yt(t,t.return,f)}}function dd(t,i,s){try{var l=t.stateNode;sb(l,t.type,s,i),l[On]=i}catch(f){Yt(t,t.return,f)}}function yv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&fr(t.type)||t.tag===4}function hd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&fr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(l===27&&fr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(pd(t,i,s),t=t.sibling;t!==null;)pd(t,i,s),t=t.sibling}function Ec(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&fr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Ec(t,i,s),t=t.sibling;t!==null;)Ec(t,i,s),t=t.sibling}function Sv(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);kn(i,l,s),i[vn]=t,i[On]=s}catch(h){Yt(t,t.return,h)}}var xa=!1,Sn=!1,md=!1,bv=typeof WeakSet=="function"?WeakSet:Set,Un=null;function FS(t,i){if(t=t.containerInfo,zd=Wc,t=Om(t),lf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var S=0,w=-1,V=-1,oe=0,me=0,ye=t,ce=null;t:for(;;){for(var de;ye!==s||f!==0&&ye.nodeType!==3||(w=S+f),ye!==h||l!==0&&ye.nodeType!==3||(V=S+l),ye.nodeType===3&&(S+=ye.nodeValue.length),(de=ye.firstChild)!==null;)ce=ye,ye=de;for(;;){if(ye===t)break t;if(ce===s&&++oe===f&&(w=S),ce===h&&++me===l&&(V=S),(de=ye.nextSibling)!==null)break;ye=ce,ce=ye.parentNode}ye=de}s=w===-1||V===-1?null:{start:w,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bd={focusedElem:t,selectionRange:s},Wc=!1,Un=i;Un!==null;)if(i=Un,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Un=t;else for(;Un!==null;){switch(i=Un,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var We=Xr(s.type,f);t=l.getSnapshotBeforeUpdate(We,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(lt){Yt(s,s.return,lt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Hd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Un=t;break}Un=i.return}}function Mv(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(t,s),l&4&&Yo(5,s);break;case 1:if(Sa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){Yt(s,s.return,S)}else{var f=Xr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Yt(s,s.return,S)}}l&64&&vv(s),l&512&&Zo(s,s.return);break;case 3:if(Sa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{og(t,i)}catch(S){Yt(s,s.return,S)}}break;case 27:i===null&&l&4&&Sv(s);case 26:case 5:Sa(t,s),i===null&&l&4&&xv(s),l&512&&Zo(s,s.return);break;case 12:Sa(t,s);break;case 31:Sa(t,s),l&4&&Av(t,s);break;case 13:Sa(t,s),l&4&&Rv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=YS.bind(null,s),pb(t,s))));break;case 22:if(l=s.memoizedState!==null||xa,!l){i=i!==null&&i.memoizedState!==null||Sn,f=xa;var h=Sn;xa=l,(Sn=i)&&!h?ba(t,s,(s.subtreeFlags&8772)!==0):Sa(t,s),xa=f,Sn=h}break;case 30:break;default:Sa(t,s)}}function Ev(t){var i=t.alternate;i!==null&&(t.alternate=null,Ev(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Mo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,ai=!1;function ya(t,i,s){for(s=s.child;s!==null;)Tv(t,i,s),s=s.sibling}function Tv(t,i,s){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Re,s)}catch{}switch(s.tag){case 26:Sn||Ji(s,i),ya(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Sn||Ji(s,i);var l=ln,f=ai;fr(s.type)&&(ln=s.stateNode,ai=!1),ya(t,i,s),al(s.stateNode),ln=l,ai=f;break;case 5:Sn||Ji(s,i);case 6:if(l=ln,f=ai,ln=null,ya(t,i,s),ln=l,ai=f,ln!==null)if(ai)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(s.stateNode)}catch(h){Yt(s,i,h)}else try{ln.removeChild(s.stateNode)}catch(h){Yt(s,i,h)}break;case 18:ln!==null&&(ai?(t=ln,v0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),ks(t)):v0(ln,s.stateNode));break;case 4:l=ln,f=ai,ln=s.stateNode.containerInfo,ai=!0,ya(t,i,s),ln=l,ai=f;break;case 0:case 11:case 14:case 15:ar(2,s,i),Sn||ar(4,s,i),ya(t,i,s);break;case 1:Sn||(Ji(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&_v(s,i,l)),ya(t,i,s);break;case 21:ya(t,i,s);break;case 22:Sn=(l=Sn)||s.memoizedState!==null,ya(t,i,s),Sn=l;break;default:ya(t,i,s)}}function Av(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ks(t)}catch(s){Yt(i,i.return,s)}}}function Rv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ks(t)}catch(s){Yt(i,i.return,s)}}function HS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new bv),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new bv),i;default:throw Error(r(435,t.tag))}}function Tc(t,i){var s=HS(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=ZS.bind(null,t,l);l.then(f,f)}})}function ri(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,S=i,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(fr(w.type)){ln=w.stateNode,ai=!1;break e}break;case 5:ln=w.stateNode,ai=!1;break e;case 3:case 4:ln=w.stateNode.containerInfo,ai=!0;break e}w=w.return}if(ln===null)throw Error(r(160));Tv(h,S,f),ln=null,ai=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)wv(i,t),i=i.sibling}var Hi=null;function wv(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ri(i,t),si(t),l&4&&(ar(3,t,t.return),Yo(3,t),ar(5,t,t.return));break;case 1:ri(i,t),si(t),l&512&&(Sn||s===null||Ji(s,s.return)),l&64&&xa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Hi;if(ri(i,t),si(t),l&512&&(Sn||s===null||Ji(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[Cr]||h[vn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),kn(h,l,s),h[vn]=t,C(h),l=h;break e;case"link":var S=w0("link","href",f).get(l+(s.href||""));if(S){for(var w=0;w<S.length;w++)if(h=S[w],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(w,1);break t}}h=f.createElement(l),kn(h,l,s),f.head.appendChild(h);break;case"meta":if(S=w0("meta","content",f).get(l+(s.content||""))){for(w=0;w<S.length;w++)if(h=S[w],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(w,1);break t}}h=f.createElement(l),kn(h,l,s),f.head.appendChild(h);break;default:throw Error(r(468,l))}h[vn]=t,C(h),l=h}t.stateNode=l}else C0(f,t.type,t.stateNode);else t.stateNode=R0(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?C0(f,t.type,t.stateNode):R0(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&dd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ri(i,t),si(t),l&512&&(Sn||s===null||Ji(s,s.return)),s!==null&&l&4&&dd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ri(i,t),si(t),l&512&&(Sn||s===null||Ji(s,s.return)),t.flags&32){f=t.stateNode;try{Tn(f,"")}catch(We){Yt(t,t.return,We)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,dd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(md=!0);break;case 6:if(ri(i,t),si(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(We){Yt(t,t.return,We)}}break;case 3:if(Gc=null,f=Hi,Hi=Fc(i.containerInfo),ri(i,t),Hi=f,si(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ks(i.containerInfo)}catch(We){Yt(t,t.return,We)}md&&(md=!1,Cv(t));break;case 4:l=Hi,Hi=Fc(t.stateNode.containerInfo),ri(i,t),si(t),Hi=l;break;case 12:ri(i,t),si(t);break;case 31:ri(i,t),si(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 13:ri(i,t),si(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Rc=E()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,oe=xa,me=Sn;if(xa=oe||f,Sn=me||V,ri(i,t),Sn=me,xa=oe,si(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||V||xa||Sn||Wr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(h=V.stateNode,f)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=V.stateNode;var ye=V.memoizedProps.style,ce=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;w.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(We){Yt(V,V.return,We)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(We){Yt(V,V.return,We)}}}else if(i.tag===18){if(s===null){V=i;try{var de=V.stateNode;f?_0(de,!0):_0(V.stateNode,!1)}catch(We){Yt(V,V.return,We)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Tc(t,s))));break;case 19:ri(i,t),si(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 30:break;case 21:break;default:ri(i,t),si(t)}}function si(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(yv(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,h=hd(t);Ec(t,h,f);break;case 5:var S=s.stateNode;s.flags&32&&(Tn(S,""),s.flags&=-33);var w=hd(t);Ec(t,w,S);break;case 3:case 4:var V=s.stateNode.containerInfo,oe=hd(t);pd(t,oe,V);break;default:throw Error(r(161))}}catch(me){Yt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Cv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Cv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Sa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Mv(t,i.alternate,i),i=i.sibling}function Wr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ar(4,i,i.return),Wr(i);break;case 1:Ji(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&_v(i,i.return,s),Wr(i);break;case 27:al(i.stateNode);case 26:case 5:Ji(i,i.return),Wr(i);break;case 22:i.memoizedState===null&&Wr(i);break;case 30:Wr(i);break;default:Wr(i)}t=t.sibling}}function ba(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,S=h.flags;switch(h.tag){case 0:case 11:case 15:ba(f,h,s),Yo(4,h);break;case 1:if(ba(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(oe){Yt(l,l.return,oe)}if(l=h,f=l.updateQueue,f!==null){var w=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)sg(V[f],w)}catch(oe){Yt(l,l.return,oe)}}s&&S&64&&vv(h),Zo(h,h.return);break;case 27:Sv(h);case 26:case 5:ba(f,h,s),s&&l===null&&S&4&&xv(h),Zo(h,h.return);break;case 12:ba(f,h,s);break;case 31:ba(f,h,s),s&&S&4&&Av(f,h);break;case 13:ba(f,h,s),s&&S&4&&Rv(f,h);break;case 22:h.memoizedState===null&&ba(f,h,s),Zo(h,h.return);break;case 30:break;default:ba(f,h,s)}i=i.sibling}}function gd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Po(s))}function vd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Po(t))}function Gi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Dv(t,i,s,l),i=i.sibling}function Dv(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Gi(t,i,s,l),f&2048&&Yo(9,i);break;case 1:Gi(t,i,s,l);break;case 3:Gi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Po(t)));break;case 12:if(f&2048){Gi(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,S=h.id,w=h.onPostCommit;typeof w=="function"&&w(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Yt(i,i.return,V)}}else Gi(t,i,s,l);break;case 31:Gi(t,i,s,l);break;case 13:Gi(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,S=i.alternate,i.memoizedState!==null?h._visibility&2?Gi(t,i,s,l):Ko(t,i):h._visibility&2?Gi(t,i,s,l):(h._visibility|=2,Ns(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&gd(S,i);break;case 24:Gi(t,i,s,l),f&2048&&vd(i.alternate,i);break;default:Gi(t,i,s,l)}}function Ns(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,S=i,w=s,V=l,oe=S.flags;switch(S.tag){case 0:case 11:case 15:Ns(h,S,w,V,f),Yo(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?Ns(h,S,w,V,f):Ko(h,S):(me._visibility|=2,Ns(h,S,w,V,f)),f&&oe&2048&&gd(S.alternate,S);break;case 24:Ns(h,S,w,V,f),f&&oe&2048&&vd(S.alternate,S);break;default:Ns(h,S,w,V,f)}i=i.sibling}}function Ko(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Ko(s,l),f&2048&&gd(l.alternate,l);break;case 24:Ko(s,l),f&2048&&vd(l.alternate,l);break;default:Ko(s,l)}i=i.sibling}}var Qo=8192;function Ls(t,i,s){if(t.subtreeFlags&Qo)for(t=t.child;t!==null;)Uv(t,i,s),t=t.sibling}function Uv(t,i,s){switch(t.tag){case 26:Ls(t,i,s),t.flags&Qo&&t.memoizedState!==null&&Ab(s,Hi,t.memoizedState,t.memoizedProps);break;case 5:Ls(t,i,s);break;case 3:case 4:var l=Hi;Hi=Fc(t.stateNode.containerInfo),Ls(t,i,s),Hi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Qo,Qo=16777216,Ls(t,i,s),Qo=l):Ls(t,i,s));break;default:Ls(t,i,s)}}function Nv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Jo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Un=l,Ov(l,t)}Nv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lv(t),t=t.sibling}function Lv(t){switch(t.tag){case 0:case 11:case 15:Jo(t),t.flags&2048&&ar(9,t,t.return);break;case 3:Jo(t);break;case 12:Jo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ac(t)):Jo(t);break;default:Jo(t)}}function Ac(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Un=l,Ov(l,t)}Nv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ar(8,i,i.return),Ac(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Ac(i));break;default:Ac(i)}t=t.sibling}}function Ov(t,i){for(;Un!==null;){var s=Un;switch(s.tag){case 0:case 11:case 15:ar(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Po(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Un=l;else e:for(s=t;Un!==null;){l=Un;var f=l.sibling,h=l.return;if(Ev(l),l===s){Un=null;break e}if(f!==null){f.return=h,Un=f;break e}Un=h}}}var GS={getCacheForType:function(t){var i=Gn(_n),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Gn(_n).controller.signal}},VS=typeof WeakMap=="function"?WeakMap:Map,Gt=0,tn=null,bt=null,Tt=0,jt=0,vi=null,rr=!1,Os=!1,_d=!1,Ma=0,dn=0,sr=0,qr=0,xd=0,_i=0,Ps=0,$o=null,oi=null,yd=!1,Rc=0,Pv=0,wc=1/0,Cc=null,or=null,An=0,lr=null,zs=null,Ea=0,Sd=0,bd=null,zv=null,el=0,Md=null;function xi(){return(Gt&2)!==0&&Tt!==0?Tt&-Tt:O.T!==null?Cd():So()}function Bv(){if(_i===0)if((Tt&536870912)===0||wt){var t=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),_i=t}else _i=536870912;return t=mi.current,t!==null&&(t.flags|=32),_i}function li(t,i,s){(t===tn&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(Bs(t,0),cr(t,Tt,_i,!1)),qn(t,s),((Gt&2)===0||t!==tn)&&(t===tn&&((Gt&2)===0&&(qr|=s),dn===4&&cr(t,Tt,_i,!1)),$i(t))}function Iv(t,i,s){if((Gt&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ue(t,i),f=l?WS(t,i):Td(t,i,!0),h=l;do{if(f===0){Os&&!l&&cr(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!kS(s)){f=Td(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var w=t;f=$o;var V=w.current.memoizedState.isDehydrated;if(V&&(Bs(w,S).flags|=256),S=Td(w,S,!1),S!==2){if(_d&&!V){w.errorRecoveryDisabledLanes|=h,qr|=h,f=4;break e}h=oi,oi=f,h!==null&&(oi===null?oi=h:oi.push.apply(oi,h))}f=S}if(h=!1,f!==2)continue}}if(f===1){Bs(t,0),cr(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:cr(l,i,_i,!rr);break e;case 2:oi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=Rc+300-E(),10<f)){if(cr(l,i,_i,!rr),be(l,0,!0)!==0)break e;Ea=i,l.timeoutHandle=m0(Fv.bind(null,l,s,oi,Cc,yd,i,_i,qr,Ps,rr,h,"Throttled",-0,0),f);break e}Fv(l,s,oi,Cc,yd,i,_i,qr,Ps,rr,h,null,-0,0)}}break}while(!0);$i(t)}function Fv(t,i,s,l,f,h,S,w,V,oe,me,ye,ce,de){if(t.timeoutHandle=-1,ye=i.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},Uv(i,h,ye);var We=(h&62914560)===h?Rc-E():(h&4194048)===h?Pv-E():0;if(We=Rb(ye,We),We!==null){Ea=h,t.cancelPendingCommit=We(jv.bind(null,t,i,h,s,l,f,S,w,V,me,ye,null,ce,de)),cr(t,h,S,!oe);return}}jv(t,i,h,s,l,f,S,w,V)}function kS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!hi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i,s,l){i&=~xd,i&=~qr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-He(f),S=1<<h;l[h]=-1,f&=~S}s!==0&&Gl(t,s,i)}function Dc(){return(Gt&6)===0?(tl(0),!1):!0}function Ed(){if(bt!==null){if(jt===0)var t=bt.return;else t=bt,ha=Br=null,Hf(t),Rs=null,Bo=0,t=bt;for(;t!==null;)gv(t.alternate,t),t=t.return;bt=null}}function Bs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,cb(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ea=0,Ed(),tn=t,bt=s=fa(t.current,null),Tt=i,jt=0,vi=null,rr=!1,Os=Ue(t,i),_d=!1,Ps=_i=xd=qr=sr=dn=0,oi=$o=null,yd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-He(l),h=1<<f;i|=t[f],l&=~h}return Ma=i,Ql(),s}function Hv(t,i){gt=null,O.H=Wo,i===As||i===rc?(i=ng(),jt=3):i===wf?(i=ng(),jt=4):jt=i===nd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,vi=i,bt===null&&(dn=1,xc(t,Ai(i,t.current)))}function Gv(){var t=mi.current;return t===null?!0:(Tt&4194048)===Tt?Di===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Di:!1}function Vv(){var t=O.H;return O.H=Wo,t===null?Wo:t}function kv(){var t=O.A;return O.A=GS,t}function Uc(){dn=4,rr||(Tt&4194048)!==Tt&&mi.current!==null||(Os=!0),(sr&134217727)===0&&(qr&134217727)===0||tn===null||cr(tn,Tt,_i,!1)}function Td(t,i,s){var l=Gt;Gt|=2;var f=Vv(),h=kv();(tn!==t||Tt!==i)&&(Cc=null,Bs(t,i)),i=!1;var S=dn;e:do try{if(jt!==0&&bt!==null){var w=bt,V=vi;switch(jt){case 8:Ed(),S=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var oe=jt;if(jt=0,vi=null,Is(t,w,V,oe),s&&Os){S=0;break e}break;default:oe=jt,jt=0,vi=null,Is(t,w,V,oe)}}XS(),S=dn;break}catch(me){Hv(t,me)}while(!0);return i&&t.shellSuspendCounter++,ha=Br=null,Gt=l,O.H=f,O.A=h,bt===null&&(tn=null,Tt=0,Ql()),S}function XS(){for(;bt!==null;)Xv(bt)}function WS(t,i){var s=Gt;Gt|=2;var l=Vv(),f=kv();tn!==t||Tt!==i?(Cc=null,wc=E()+500,Bs(t,i)):Os=Ue(t,i);e:do try{if(jt!==0&&bt!==null){i=bt;var h=vi;t:switch(jt){case 1:jt=0,vi=null,Is(t,i,h,1);break;case 2:case 9:if(eg(h)){jt=0,vi=null,Wv(i);break}i=function(){jt!==2&&jt!==9||tn!==t||(jt=7),$i(t)},h.then(i,i);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:eg(h)?(jt=0,vi=null,Wv(i)):(jt=0,vi=null,Is(t,i,h,7));break;case 5:var S=null;switch(bt.tag){case 26:S=bt.memoizedState;case 5:case 27:var w=bt;if(S?D0(S):w.stateNode.complete){jt=0,vi=null;var V=w.sibling;if(V!==null)bt=V;else{var oe=w.return;oe!==null?(bt=oe,Nc(oe)):bt=null}break t}}jt=0,vi=null,Is(t,i,h,5);break;case 6:jt=0,vi=null,Is(t,i,h,6);break;case 8:Ed(),dn=6;break e;default:throw Error(r(462))}}qS();break}catch(me){Hv(t,me)}while(!0);return ha=Br=null,O.H=l,O.A=f,Gt=s,bt!==null?0:(tn=null,Tt=0,Ql(),dn)}function qS(){for(;bt!==null&&!Je();)Xv(bt)}function Xv(t){var i=pv(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,i===null?Nc(t):bt=i}function Wv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=lv(s,i,i.pendingProps,i.type,void 0,Tt);break;case 11:i=lv(s,i,i.pendingProps,i.type.render,i.ref,Tt);break;case 5:Hf(i);default:gv(s,i),i=bt=km(i,Ma),i=pv(s,i,Ma)}t.memoizedProps=t.pendingProps,i===null?Nc(t):bt=i}function Is(t,i,s,l){ha=Br=null,Hf(i),Rs=null,Bo=0;var f=i.return;try{if(OS(t,f,i,s,Tt)){dn=1,xc(t,Ai(s,t.current)),bt=null;return}}catch(h){if(f!==null)throw bt=f,h;dn=1,xc(t,Ai(s,t.current)),bt=null;return}i.flags&32768?(wt||l===1?t=!0:Os||(Tt&536870912)!==0?t=!1:(rr=t=!0,(l===2||l===9||l===3||l===6)&&(l=mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),qv(i,t)):Nc(i)}function Nc(t){var i=t;do{if((i.flags&32768)!==0){qv(i,rr);return}t=i.return;var s=BS(i.alternate,i,Ma);if(s!==null){bt=s;return}if(i=i.sibling,i!==null){bt=i;return}bt=i=t}while(i!==null);dn===0&&(dn=5)}function qv(t,i){do{var s=IS(t.alternate,t);if(s!==null){s.flags&=32767,bt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){bt=t;return}bt=t=s}while(t!==null);dn=6,bt=null}function jv(t,i,s,l,f,h,S,w,V){t.cancelPendingCommit=null;do Lc();while(An!==0);if((Gt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(h=i.lanes|i.childLanes,h|=hf,zi(t,s,h,S,w,V),t===tn&&(bt=tn=null,Tt=0),zs=i,lr=t,Ea=s,Sd=h,bd=f,zv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,KS(pe,function(){return Jv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,f=F.p,F.p=2,S=Gt,Gt|=4;try{FS(t,i,s)}finally{Gt=S,F.p=f,O.T=l}}An=1,Yv(),Zv(),Kv()}}function Yv(){if(An===1){An=0;var t=lr,i=zs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=O.T,O.T=null;var l=F.p;F.p=2;var f=Gt;Gt|=4;try{wv(i,t);var h=Bd,S=Om(t.containerInfo),w=h.focusedElem,V=h.selectionRange;if(S!==w&&w&&w.ownerDocument&&Lm(w.ownerDocument.documentElement,w)){if(V!==null&&lf(w)){var oe=V.start,me=V.end;if(me===void 0&&(me=oe),"selectionStart"in w)w.selectionStart=oe,w.selectionEnd=Math.min(me,w.value.length);else{var ye=w.ownerDocument||document,ce=ye&&ye.defaultView||window;if(ce.getSelection){var de=ce.getSelection(),We=w.textContent.length,lt=Math.min(V.start,We),Jt=V.end===void 0?lt:Math.min(V.end,We);!de.extend&&lt>Jt&&(S=Jt,Jt=lt,lt=S);var Q=Nm(w,lt),q=Nm(w,Jt);if(Q&&q&&(de.rangeCount!==1||de.anchorNode!==Q.node||de.anchorOffset!==Q.offset||de.focusNode!==q.node||de.focusOffset!==q.offset)){var se=ye.createRange();se.setStart(Q.node,Q.offset),de.removeAllRanges(),lt>Jt?(de.addRange(se),de.extend(q.node,q.offset)):(se.setEnd(q.node,q.offset),de.addRange(se))}}}}for(ye=[],de=w;de=de.parentNode;)de.nodeType===1&&ye.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ye.length;w++){var _e=ye[w];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Wc=!!zd,Bd=zd=null}finally{Gt=f,F.p=l,O.T=s}}t.current=i,An=2}}function Zv(){if(An===2){An=0;var t=lr,i=zs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=O.T,O.T=null;var l=F.p;F.p=2;var f=Gt;Gt|=4;try{Mv(t,i.alternate,i)}finally{Gt=f,F.p=l,O.T=s}}An=3}}function Kv(){if(An===4||An===3){An=0,B();var t=lr,i=zs,s=Ea,l=zv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?An=5:(An=0,zs=lr=null,Qv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(or=null),cs(s),i=i.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Re,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=O.T,f=F.p,F.p=2,O.T=null;try{for(var h=t.onRecoverableError,S=0;S<l.length;S++){var w=l[S];h(w.value,{componentStack:w.stack})}}finally{O.T=i,F.p=f}}(Ea&3)!==0&&Lc(),$i(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Md?el++:(el=0,Md=t):el=0,tl(0)}}function Qv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Po(i)))}function Lc(){return Yv(),Zv(),Kv(),Jv()}function Jv(){if(An!==5)return!1;var t=lr,i=Sd;Sd=0;var s=cs(Ea),l=O.T,f=F.p;try{F.p=32>s?32:s,O.T=null,s=bd,bd=null;var h=lr,S=Ea;if(An=0,zs=lr=null,Ea=0,(Gt&6)!==0)throw Error(r(331));var w=Gt;if(Gt|=4,Lv(h.current),Dv(h,h.current,S,s),Gt=w,tl(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Re,h)}catch{}return!0}finally{F.p=f,O.T=l,Qv(t,i)}}function $v(t,i,s){i=Ai(s,i),i=td(t.stateNode,i,2),t=tr(t,i,2),t!==null&&(qn(t,2),$i(t))}function Yt(t,i,s){if(t.tag===3)$v(t,t,s);else for(;i!==null;){if(i.tag===3){$v(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){t=Ai(s,t),s=ev(2),l=tr(i,s,2),l!==null&&(tv(s,l,i,t),qn(l,2),$i(l));break}}i=i.return}}function Ad(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new VS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(_d=!0,f.add(s),t=jS.bind(null,t,i,s),i.then(t,t))}function jS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,tn===t&&(Tt&s)===s&&(dn===4||dn===3&&(Tt&62914560)===Tt&&300>E()-Rc?(Gt&2)===0&&Bs(t,0):xd|=s,Ps===Tt&&(Ps=0)),$i(t)}function e0(t,i){i===0&&(i=Wt()),t=Or(t,i),t!==null&&(qn(t,i),$i(t))}function YS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),e0(t,s)}function ZS(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),e0(t,s)}function KS(t,i){return Dt(t,i)}var Oc=null,Fs=null,Rd=!1,Pc=!1,wd=!1,ur=0;function $i(t){t!==Fs&&t.next===null&&(Fs===null?Oc=Fs=t:Fs=Fs.next=t),Pc=!0,Rd||(Rd=!0,JS())}function tl(t,i){if(!wd&&Pc){wd=!0;do for(var s=!1,l=Oc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var S=l.suspendedLanes,w=l.pingedLanes;h=(1<<31-He(42|t)+1)-1,h&=f&~(S&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,a0(l,h))}else h=Tt,h=be(l,l===tn?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ue(l,h)||(s=!0,a0(l,h));l=l.next}while(s);wd=!1}}function QS(){t0()}function t0(){Pc=Rd=!1;var t=0;ur!==0&&lb()&&(t=ur);for(var i=E(),s=null,l=Oc;l!==null;){var f=l.next,h=n0(l,i);h===0?(l.next=null,s===null?Oc=f:s.next=f,f===null&&(Fs=s)):(s=l,(t!==0||(h&3)!==0)&&(Pc=!0)),l=f}An!==0&&An!==5||tl(t),ur!==0&&(ur=0)}function n0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-He(h),w=1<<S,V=f[S];V===-1?((w&s)===0||(w&l)!==0)&&(f[S]=ft(w,i)):V<=i&&(t.expiredLanes|=w),h&=~w}if(i=tn,s=Tt,s=be(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&kt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&kt(l),cs(s)){case 2:case 8:s=Ee;break;case 32:s=pe;break;case 268435456:s=Ne;break;default:s=pe}return l=i0.bind(null,t),s=Dt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&kt(l),t.callbackPriority=2,t.callbackNode=null,2}function i0(t,i){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Lc()&&t.callbackNode!==s)return null;var l=Tt;return l=be(t,t===tn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Iv(t,l,i),n0(t,E()),t.callbackNode!=null&&t.callbackNode===s?i0.bind(null,t):null)}function a0(t,i){if(Lc())return null;Iv(t,i,!0)}function JS(){ub(function(){(Gt&6)!==0?Dt(ve,QS):t0()})}function Cd(){if(ur===0){var t=Es;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),ur=t}return ur}function r0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:kl(""+t)}function s0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function $S(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=r0((f[On]||null).action),S=l.submitter;S&&(i=(i=S[On]||null)?r0(i.formAction):S.getAttribute("formAction"),i!==null&&(h=i,S=null));var w=new jl("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ur!==0){var V=S?s0(f,S):new FormData(f);Zf(s,{pending:!0,data:V,method:f.method,action:h},null,V)}}else typeof h=="function"&&(w.preventDefault(),V=S?s0(f,S):new FormData(f),Zf(s,{pending:!0,data:V,method:f.method,action:h},h,V))},currentTarget:f}]})}}for(var Dd=0;Dd<df.length;Dd++){var Ud=df[Dd],eb=Ud.toLowerCase(),tb=Ud[0].toUpperCase()+Ud.slice(1);Fi(eb,"on"+tb)}Fi(Bm,"onAnimationEnd"),Fi(Im,"onAnimationIteration"),Fi(Fm,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(vS,"onTransitionRun"),Fi(_S,"onTransitionStart"),Fi(xS,"onTransitionCancel"),Fi(Hm,"onTransitionEnd"),ne("onMouseEnter",["mouseout","mouseover"]),ne("onMouseLeave",["mouseout","mouseover"]),ne("onPointerEnter",["pointerout","pointerover"]),ne("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function o0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var w=l[S],V=w.instance,oe=w.currentTarget;if(w=w.listener,V!==h&&f.isPropagationStopped())break e;h=w,f.currentTarget=oe;try{h(f)}catch(me){Kl(me)}f.currentTarget=null,h=V}else for(S=0;S<l.length;S++){if(w=l[S],V=w.instance,oe=w.currentTarget,w=w.listener,V!==h&&f.isPropagationStopped())break e;h=w,f.currentTarget=oe;try{h(f)}catch(me){Kl(me)}f.currentTarget=null,h=V}}}}function Mt(t,i){var s=i[us];s===void 0&&(s=i[us]=new Set);var l=t+"__bubble";s.has(l)||(l0(i,t,2,!1),s.add(l))}function Nd(t,i,s){var l=0;i&&(l|=4),l0(s,t,l,i)}var zc="_reactListening"+Math.random().toString(36).slice(2);function Ld(t){if(!t[zc]){t[zc]=!0,Z.forEach(function(s){s!=="selectionchange"&&(nb.has(s)||Nd(s,!1,t),Nd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[zc]||(i[zc]=!0,Nd("selectionchange",!1,i))}}function l0(t,i,s,l){switch(B0(i)){case 2:var f=Db;break;case 8:f=Ub;break;default:f=Yd}s=f.bind(null,i,s,t),f=void 0,!Ju||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Od(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var w=l.stateNode.containerInfo;if(w===f)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;w!==null;){if(S=Wa(w),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=h=S;continue e}w=w.parentNode}}l=l.return}hm(function(){var oe=h,me=Ku(s),ye=[];e:{var ce=Gm.get(t);if(ce!==void 0){var de=jl,We=t;switch(t){case"keypress":if(Wl(s)===0)break e;case"keydown":case"keyup":de=Zy;break;case"focusin":We="focus",de=nf;break;case"focusout":We="blur",de=nf;break;case"beforeblur":case"afterblur":de=nf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=By;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Jy;break;case Bm:case Im:case Fm:de=Hy;break;case Hm:de=eS;break;case"scroll":case"scrollend":de=Py;break;case"wheel":de=nS;break;case"copy":case"cut":case"paste":de=Vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=_m;break;case"toggle":case"beforetoggle":de=aS}var lt=(i&4)!==0,Jt=!lt&&(t==="scroll"||t==="scrollend"),Q=lt?ce!==null?ce+"Capture":null:ce;lt=[];for(var q=oe,se;q!==null;){var _e=q;if(se=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||se===null||Q===null||(_e=Eo(q,Q),_e!=null&&lt.push(il(q,_e,se))),Jt)break;q=q.return}0<lt.length&&(ce=new de(ce,We,null,s,me),ye.push({event:ce,listeners:lt}))}}if((i&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ce&&s!==Zu&&(We=s.relatedTarget||s.fromElement)&&(Wa(We)||We[Bi]))break e;if((de||ce)&&(ce=me.window===me?me:(ce=me.ownerDocument)?ce.defaultView||ce.parentWindow:window,de?(We=s.relatedTarget||s.toElement,de=oe,We=We?Wa(We):null,We!==null&&(Jt=c(We),lt=We.tag,We!==Jt||lt!==5&&lt!==27&&lt!==6)&&(We=null)):(de=null,We=oe),de!==We)){if(lt=gm,_e="onMouseLeave",Q="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(lt=_m,_e="onPointerLeave",Q="onPointerEnter",q="pointer"),Jt=de==null?ce:Dr(de),se=We==null?ce:Dr(We),ce=new lt(_e,q+"leave",de,s,me),ce.target=Jt,ce.relatedTarget=se,_e=null,Wa(me)===oe&&(lt=new lt(Q,q+"enter",We,s,me),lt.target=se,lt.relatedTarget=Jt,_e=lt),Jt=_e,de&&We)t:{for(lt=ib,Q=de,q=We,se=0,_e=Q;_e;_e=lt(_e))se++;_e=0;for(var nt=q;nt;nt=lt(nt))_e++;for(;0<se-_e;)Q=lt(Q),se--;for(;0<_e-se;)q=lt(q),_e--;for(;se--;){if(Q===q||q!==null&&Q===q.alternate){lt=Q;break t}Q=lt(Q),q=lt(q)}lt=null}else lt=null;de!==null&&c0(ye,ce,de,lt,!1),We!==null&&Jt!==null&&c0(ye,Jt,We,lt,!0)}}e:{if(ce=oe?Dr(oe):window,de=ce.nodeName&&ce.nodeName.toLowerCase(),de==="select"||de==="input"&&ce.type==="file")var Pt=Am;else if(Em(ce))if(Rm)Pt=pS;else{Pt=dS;var $e=fS}else de=ce.nodeName,!de||de.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?oe&&Ii(oe.elementType)&&(Pt=Am):Pt=hS;if(Pt&&(Pt=Pt(t,oe))){Tm(ye,Pt,s,me);break e}$e&&$e(t,ce,oe),t==="focusout"&&oe&&ce.type==="number"&&oe.memoizedProps.value!=null&&zn(ce,"number",ce.value)}switch($e=oe?Dr(oe):window,t){case"focusin":(Em($e)||$e.contentEditable==="true")&&(gs=$e,cf=oe,No=null);break;case"focusout":No=cf=gs=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,Pm(ye,s,me);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":Pm(ye,s,me)}var _t;if(rf)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else ms?bm(t,s)&&(At="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(At="onCompositionStart");At&&(xm&&s.locale!=="ko"&&(ms||At!=="onCompositionStart"?At==="onCompositionEnd"&&ms&&(_t=pm()):(Ya=me,$u="value"in Ya?Ya.value:Ya.textContent,ms=!0)),$e=Bc(oe,At),0<$e.length&&(At=new vm(At,t,null,s,me),ye.push({event:At,listeners:$e}),_t?At.data=_t:(_t=Mm(s),_t!==null&&(At.data=_t)))),(_t=sS?oS(t,s):lS(t,s))&&(At=Bc(oe,"onBeforeInput"),0<At.length&&($e=new vm("onBeforeInput","beforeinput",null,s,me),ye.push({event:$e,listeners:At}),$e.data=_t)),$S(ye,t,oe,s,me)}o0(ye,i)})}function il(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Bc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Eo(t,s),f!=null&&l.unshift(il(t,f,h)),f=Eo(t,i),f!=null&&l.push(il(t,f,h))),t.tag===3)return l;t=t.return}return[]}function ib(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function c0(t,i,s,l,f){for(var h=i._reactName,S=[];s!==null&&s!==l;){var w=s,V=w.alternate,oe=w.stateNode;if(w=w.tag,V!==null&&V===l)break;w!==5&&w!==26&&w!==27||oe===null||(V=oe,f?(oe=Eo(s,h),oe!=null&&S.unshift(il(s,oe,V))):f||(oe=Eo(s,h),oe!=null&&S.push(il(s,oe,V)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var ab=/\r\n?/g,rb=/\u0000|\uFFFD/g;function u0(t){return(typeof t=="string"?t:""+t).replace(ab,`
`).replace(rb,"")}function f0(t,i){return i=u0(i),u0(t)===i}function Qt(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Tn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Tn(t,""+l);break;case"className":st(t,"class",l);break;case"tabIndex":st(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":st(t,s,l);break;case"style":ds(t,l,h);break;case"data":if(i!=="object"){st(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=kl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Qt(t,i,"name",f.name,f,null),Qt(t,i,"formEncType",f.formEncType,f,null),Qt(t,i,"formMethod",f.formMethod,f,null),Qt(t,i,"formTarget",f.formTarget,f,null)):(Qt(t,i,"encType",f.encType,f,null),Qt(t,i,"method",f.method,f,null),Qt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=kl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ca);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=kl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Ke(t,"popover",l);break;case"xlinkActuate":Qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ke(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ly.get(s)||s,Ke(t,s,l))}}function Pd(t,i,s,l,f,h){switch(s){case"style":ds(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Tn(t,l):(typeof l=="number"||typeof l=="bigint")&&Tn(t,""+l);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fe.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[On]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ke(t,s,l)}}}function kn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var S=s[h];if(S!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Qt(t,i,h,S,s,null)}}f&&Qt(t,i,"srcSet",s.srcSet,s,null),l&&Qt(t,i,"src",s.src,s,null);return;case"input":Mt("invalid",t);var w=h=S=f=null,V=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":f=me;break;case"type":S=me;break;case"checked":V=me;break;case"defaultChecked":oe=me;break;case"value":h=me;break;case"defaultValue":w=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,i));break;default:Qt(t,i,l,me,s,null)}}la(t,h,w,V,oe,S,f,!1);return;case"select":Mt("invalid",t),l=S=h=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":h=w;break;case"defaultValue":S=w;break;case"multiple":l=w;default:Qt(t,i,f,w,s,null)}i=h,s=S,t.multiple=!!l,i!=null?Ei(t,!!l,i,!1):s!=null&&Ei(t,!!l,s,!0);return;case"textarea":Mt("invalid",t),h=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(w=s[S],w!=null))switch(S){case"value":l=w;break;case"defaultValue":f=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Qt(t,i,S,w,s,null)}Bn(t,l,f,h);return;case"option":for(V in s)s.hasOwnProperty(V)&&(l=s[V],l!=null)&&(V==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Qt(t,i,V,l,s,null));return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(l=0;l<nl.length;l++)Mt(nl[l],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Qt(t,i,oe,l,s,null)}return;default:if(Ii(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&Pd(t,i,me,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Qt(t,i,w,l,s,null))}function sb(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,S=null,w=null,V=null,oe=null,me=null;for(de in s){var ye=s[de];if(s.hasOwnProperty(de)&&ye!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":V=ye;default:l.hasOwnProperty(de)||Qt(t,i,de,null,l,ye)}}for(var ce in l){var de=l[ce];if(ye=s[ce],l.hasOwnProperty(ce)&&(de!=null||ye!=null))switch(ce){case"type":h=de;break;case"name":f=de;break;case"checked":oe=de;break;case"defaultChecked":me=de;break;case"value":S=de;break;case"defaultValue":w=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,i));break;default:de!==ye&&Qt(t,i,ce,de,l,ye)}}Pn(t,S,w,V,oe,me,h,f);return;case"select":de=S=w=ce=null;for(h in s)if(V=s[h],s.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":de=V;default:l.hasOwnProperty(h)||Qt(t,i,h,null,l,V)}for(f in l)if(h=l[f],V=s[f],l.hasOwnProperty(f)&&(h!=null||V!=null))switch(f){case"value":ce=h;break;case"defaultValue":w=h;break;case"multiple":S=h;default:h!==V&&Qt(t,i,f,h,l,V)}i=w,s=S,l=de,ce!=null?Ei(t,!!s,ce,!1):!!l!=!!s&&(i!=null?Ei(t,!!s,i,!0):Ei(t,!!s,s?[]:"",!1));return;case"textarea":de=ce=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Qt(t,i,w,null,l,f)}for(S in l)if(f=l[S],h=s[S],l.hasOwnProperty(S)&&(f!=null||h!=null))switch(S){case"value":ce=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==h&&Qt(t,i,S,f,l,h)}qt(t,ce,de);return;case"option":for(var We in s)ce=s[We],s.hasOwnProperty(We)&&ce!=null&&!l.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:Qt(t,i,We,null,l,ce));for(V in l)ce=l[V],de=s[V],l.hasOwnProperty(V)&&ce!==de&&(ce!=null||de!=null)&&(V==="selected"?t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol":Qt(t,i,V,ce,l,de));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in s)ce=s[lt],s.hasOwnProperty(lt)&&ce!=null&&!l.hasOwnProperty(lt)&&Qt(t,i,lt,null,l,ce);for(oe in l)if(ce=l[oe],de=s[oe],l.hasOwnProperty(oe)&&ce!==de&&(ce!=null||de!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,i));break;default:Qt(t,i,oe,ce,l,de)}return;default:if(Ii(i)){for(var Jt in s)ce=s[Jt],s.hasOwnProperty(Jt)&&ce!==void 0&&!l.hasOwnProperty(Jt)&&Pd(t,i,Jt,void 0,l,ce);for(me in l)ce=l[me],de=s[me],!l.hasOwnProperty(me)||ce===de||ce===void 0&&de===void 0||Pd(t,i,me,ce,l,de);return}}for(var Q in s)ce=s[Q],s.hasOwnProperty(Q)&&ce!=null&&!l.hasOwnProperty(Q)&&Qt(t,i,Q,null,l,ce);for(ye in l)ce=l[ye],de=s[ye],!l.hasOwnProperty(ye)||ce===de||ce==null&&de==null||Qt(t,i,ye,ce,l,de)}function d0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ob(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,S=f.initiatorType,w=f.duration;if(h&&w&&d0(S)){for(S=0,w=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],oe=V.startTime;if(oe>w)break;var me=V.transferSize,ye=V.initiatorType;me&&d0(ye)&&(V=V.responseEnd,S+=me*(V<w?1:(w-oe)/(V-oe)))}if(--l,i+=8*(h+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var zd=null,Bd=null;function Ic(t){return t.nodeType===9?t:t.ownerDocument}function h0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Id(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fd=null;function lb(){var t=window.event;return t&&t.type==="popstate"?t===Fd?!1:(Fd=t,!0):(Fd=null,!1)}var m0=typeof setTimeout=="function"?setTimeout:void 0,cb=typeof clearTimeout=="function"?clearTimeout:void 0,g0=typeof Promise=="function"?Promise:void 0,ub=typeof queueMicrotask=="function"?queueMicrotask:typeof g0<"u"?function(t){return g0.resolve(null).then(t).catch(fb)}:m0;function fb(t){setTimeout(function(){throw t})}function fr(t){return t==="head"}function v0(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),ks(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")al(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,al(s);for(var h=s.firstChild;h;){var S=h.nextSibling,w=h.nodeName;h[Cr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=S}}else s==="body"&&al(t.ownerDocument.body);s=f}while(s);ks(i)}function _0(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Hd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Hd(s),Mo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function db(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Cr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ui(t.nextSibling),t===null)break}return null}function hb(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ui(t.nextSibling),t===null))return null;return t}function x0(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ui(t.nextSibling),t===null))return null;return t}function Gd(t){return t.data==="$?"||t.data==="$~"}function Vd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function pb(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ui(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var kd=null;function y0(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ui(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function S0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function b0(t,i,s){switch(i=Ic(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function al(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Mo(t)}var Ni=new Map,M0=new Set;function Fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=F.d;F.d={f:mb,r:gb,D:vb,C:_b,L:xb,m:yb,X:bb,S:Sb,M:Mb};function mb(){var t=Ta.f(),i=Dc();return t||i}function gb(t){var i=qa(t);i!==null&&i.tag===5&&i.type==="form"?Hg(i):Ta.r(t)}var Hs=typeof document>"u"?null:document;function E0(t,i,s){var l=Hs;if(l&&typeof i=="string"&&i){var f=ht(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),M0.has(f)||(M0.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),kn(i,"link",t),C(i),l.head.appendChild(i)))}}function vb(t){Ta.D(t),E0("dns-prefetch",t,null)}function _b(t,i){Ta.C(t,i),E0("preconnect",t,i)}function xb(t,i,s){Ta.L(t,i,s);var l=Hs;if(l&&t&&i){var f='link[rel="preload"][as="'+ht(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+ht(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+ht(s.imageSizes)+'"]')):f+='[href="'+ht(t)+'"]';var h=f;switch(i){case"style":h=Gs(t);break;case"script":h=Vs(t)}Ni.has(h)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ni.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(rl(h))||i==="script"&&l.querySelector(sl(h))||(i=l.createElement("link"),kn(i,"link",t),C(i),l.head.appendChild(i)))}}function yb(t,i){Ta.m(t,i);var s=Hs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+ht(l)+'"][href="'+ht(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Vs(t)}if(!Ni.has(h)&&(t=g({rel:"modulepreload",href:t},i),Ni.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(sl(h)))return}l=s.createElement("link"),kn(l,"link",t),C(l),s.head.appendChild(l)}}}function Sb(t,i,s){Ta.S(t,i,s);var l=Hs;if(l&&t){var f=ja(l).hoistableStyles,h=Gs(t);i=i||"default";var S=f.get(h);if(!S){var w={loading:0,preload:null};if(S=l.querySelector(rl(h)))w.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ni.get(h))&&Xd(t,s);var V=S=l.createElement("link");C(V),kn(V,"link",t),V._p=new Promise(function(oe,me){V.onload=oe,V.onerror=me}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Hc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:w},f.set(h,S)}}}function bb(t,i){Ta.X(t,i);var s=Hs;if(s&&t){var l=ja(s).hoistableScripts,f=Vs(t),h=l.get(f);h||(h=s.querySelector(sl(f)),h||(t=g({src:t,async:!0},i),(i=Ni.get(f))&&Wd(t,i),h=s.createElement("script"),C(h),kn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function Mb(t,i){Ta.M(t,i);var s=Hs;if(s&&t){var l=ja(s).hoistableScripts,f=Vs(t),h=l.get(f);h||(h=s.querySelector(sl(f)),h||(t=g({src:t,async:!0,type:"module"},i),(i=Ni.get(f))&&Wd(t,i),h=s.createElement("script"),C(h),kn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function T0(t,i,s,l){var f=(f=te.current)?Fc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Gs(s.href),s=ja(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Gs(s.href);var h=ja(f).hoistableStyles,S=h.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=f.querySelector(rl(t)))&&!h._p&&(S.instance=h,S.state.loading=5),Ni.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ni.set(t,s),h||Eb(f,t,s,S.state))),i&&l===null)throw Error(r(528,""));return S}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Vs(s),s=ja(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Gs(t){return'href="'+ht(t)+'"'}function rl(t){return'link[rel="stylesheet"]['+t+"]"}function A0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Eb(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),kn(i,"link",s),C(i),t.head.appendChild(i))}function Vs(t){return'[src="'+ht(t)+'"]'}function sl(t){return"script[async]"+t}function R0(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+ht(s.href)+'"]');if(l)return i.instance=l,C(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),C(l),kn(l,"style",f),Hc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Gs(s.href);var h=t.querySelector(rl(f));if(h)return i.state.loading|=4,i.instance=h,C(h),h;l=A0(s),(f=Ni.get(f))&&Xd(l,f),h=(t.ownerDocument||t).createElement("link"),C(h);var S=h;return S._p=new Promise(function(w,V){S.onload=w,S.onerror=V}),kn(h,"link",l),i.state.loading|=4,Hc(h,s.precedence,t),i.instance=h;case"script":return h=Vs(s.src),(f=t.querySelector(sl(h)))?(i.instance=f,C(f),f):(l=s,(f=Ni.get(h))&&(l=g({},s),Wd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),C(f),kn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Hc(l,s.precedence,t));return i.instance}function Hc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,S=0;S<l.length;S++){var w=l[S];if(w.dataset.precedence===i)h=w;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Xd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Wd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Gc=null;function w0(t,i,s){if(Gc===null){var l=new Map,f=Gc=new Map;f.set(s,l)}else f=Gc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[Cr]||h[vn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(i)||"";S=t+S;var w=l.get(S);w?w.push(h):l.set(S,[h])}}return l}function C0(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Tb(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function D0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ab(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Gs(l.href),h=i.querySelector(rl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Vc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,C(h);return}h=i.ownerDocument||i,l=A0(l),(f=Ni.get(f))&&Xd(l,f),h=h.createElement("link"),C(h);var S=h;S._p=new Promise(function(w,V){S.onload=w,S.onerror=V}),kn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Vc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var qd=0;function Rb(t,i){return t.stylesheets&&t.count===0&&Xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&qd===0&&(qd=62500*ob());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>qd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kc=null;function Xc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kc=new Map,i.forEach(wb,t),kc=null,Vc.call(t))}function wb(t,i){if(!(i.state.loading&4)){var s=kc.get(t);if(s)var l=s.get(null);else{s=new Map,kc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var S=f[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),h=s.get(S)||l,h===l&&s.set(null,f),s.set(S,f),this.count++,l=Vc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var ol={$$typeof:R,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Cb(t,i,s,l,f,h,S,w,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.hiddenUpdates=Nt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function U0(t,i,s,l,f,h,S,w,V,oe,me,ye){return t=new Cb(t,i,s,S,V,oe,me,ye,w),i=1,h===!0&&(i|=24),h=pi(3,null,null,i),t.current=h,h.stateNode=t,i=Tf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},Cf(h),t}function N0(t){return t?(t=xs,t):xs}function L0(t,i,s,l,f,h){f=N0(f),l.context===null?l.context=f:l.pendingContext=f,l=er(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=tr(t,l,i),s!==null&&(li(s,t,i),Fo(s,t,i))}function O0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function jd(t,i){O0(t,i),(t=t.alternate)&&O0(t,i)}function P0(t){if(t.tag===13||t.tag===31){var i=Or(t,67108864);i!==null&&li(i,t,67108864),jd(t,67108864)}}function z0(t){if(t.tag===13||t.tag===31){var i=xi();i=yo(i);var s=Or(t,i);s!==null&&li(s,t,i),jd(t,i)}}var Wc=!0;function Db(t,i,s,l){var f=O.T;O.T=null;var h=F.p;try{F.p=2,Yd(t,i,s,l)}finally{F.p=h,O.T=f}}function Ub(t,i,s,l){var f=O.T;O.T=null;var h=F.p;try{F.p=8,Yd(t,i,s,l)}finally{F.p=h,O.T=f}}function Yd(t,i,s,l){if(Wc){var f=Zd(l);if(f===null)Od(t,i,l,qc,s),I0(t,l);else if(Lb(f,t,i,s,l))l.stopPropagation();else if(I0(t,l),i&4&&-1<Nb.indexOf(t)){for(;f!==null;){var h=qa(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Ae(h.pendingLanes);if(S!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var V=1<<31-He(S);w.entanglements[1]|=V,S&=~V}$i(h),(Gt&6)===0&&(wc=E()+500,tl(0))}}break;case 31:case 13:w=Or(h,2),w!==null&&li(w,h,2),Dc(),jd(h,2)}if(h=Zd(l),h===null&&Od(t,i,l,qc,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else Od(t,i,l,null,s)}}function Zd(t){return t=Ku(t),Kd(t)}var qc=null;function Kd(t){if(qc=null,t=Wa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return qc=t,null}function B0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case ve:return 2;case Ee:return 8;case pe:case et:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Qd=!1,dr=null,hr=null,pr=null,ll=new Map,cl=new Map,mr=[],Nb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I0(t,i){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":ll.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(i.pointerId)}}function ul(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=qa(i),i!==null&&P0(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Lb(t,i,s,l,f){switch(i){case"focusin":return dr=ul(dr,t,i,s,l,f),!0;case"dragenter":return hr=ul(hr,t,i,s,l,f),!0;case"mouseover":return pr=ul(pr,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return ll.set(h,ul(ll.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,cl.set(h,ul(cl.get(h)||null,t,i,s,l,f)),!0}return!1}function F0(t){var i=Wa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Zi(t.priority,function(){z0(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,Zi(t.priority,function(){z0(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Zd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Zu=l,s.target.dispatchEvent(l),Zu=null}else return i=qa(s),i!==null&&P0(i),t.blockedOn=s,!1;i.shift()}return!0}function H0(t,i,s){jc(t)&&s.delete(i)}function Ob(){Qd=!1,dr!==null&&jc(dr)&&(dr=null),hr!==null&&jc(hr)&&(hr=null),pr!==null&&jc(pr)&&(pr=null),ll.forEach(H0),cl.forEach(H0)}function Yc(t,i){t.blockedOn===i&&(t.blockedOn=null,Qd||(Qd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ob)))}var Zc=null;function G0(t){Zc!==t&&(Zc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Zc===t&&(Zc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Kd(l||s)===null)continue;break}var h=qa(s);h!==null&&(t.splice(i,3),i-=3,Zf(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function ks(t){function i(V){return Yc(V,t)}dr!==null&&Yc(dr,t),hr!==null&&Yc(hr,t),pr!==null&&Yc(pr,t),ll.forEach(i),cl.forEach(i);for(var s=0;s<mr.length;s++){var l=mr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<mr.length&&(s=mr[0],s.blockedOn===null);)F0(s),s.blockedOn===null&&mr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],S=f[On]||null;if(typeof h=="function")S||G0(s);else if(S){var w=null;if(h&&h.hasAttribute("formAction")){if(f=h,S=h[On]||null)w=S.formAction;else if(Kd(f)!==null)continue}else w=S.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),G0(s)}}}function V0(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Jd(t){this._internalRoot=t}Kc.prototype.render=Jd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=xi();L0(s,l,t,i,null,null)},Kc.prototype.unmount=Jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;L0(t.current,2,null,t,null,null),Dc(),i[Bi]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var i=So();t={blockedOn:null,target:t,priority:i};for(var s=0;s<mr.length&&i!==0&&i<mr[s].priority;s++);mr.splice(s,0,t),s===0&&F0(t)}};var k0=e.version;if(k0!=="19.2.3")throw Error(r(527,k0,"19.2.3"));F.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(i),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Pb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{Re=Qc.inject(Pb),we=Qc}catch{}}return dl.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=Kg,h=Qg,S=Jg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=U0(t,1,!1,null,null,s,l,null,f,h,S,V0),t[Bi]=i.current,Ld(t),new Jd(i)},dl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",h=Kg,S=Qg,w=Jg,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=U0(t,1,!0,i,s??null,l,f,V,h,S,w,V0),i.context=N0(null),s=i.current,l=xi(),l=yo(l),f=er(l),f.callback=null,tr(s,f,l),s=l,i.current.lanes=s,qn(i,s),$i(i),t[Bi]=i.current,Ld(t),new Kc(i)},dl.version="19.2.3",dl}var $0;function Wb(){if($0)return th.exports;$0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),th.exports=Xb(),th.exports}var qb=Wb();var e_="popstate";function jb(a={}){function e(o,c){let{pathname:u="/",search:d="",hash:p=""}=rs(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),qh("",{pathname:u,search:d,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let u=o.document.querySelector("base"),d="";if(u&&u.getAttribute("href")){let p=o.location.href,m=p.indexOf("#");d=m===-1?p:p.slice(0,m)}return d+"#"+(typeof c=="string"?c:wl(c))}function r(o,c){Oi(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Zb(e,n,r,a)}function un(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Oi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Yb(){return Math.random().toString(36).substring(2,10)}function t_(a,e){return{usr:a.state,key:a.key,idx:e}}function qh(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?rs(e):e,state:n,key:e&&e.key||r||Yb()}}function wl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function rs(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function Zb(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,u=o.history,d="POP",p=null,m=v();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function v(){return(u.state||{idx:null}).idx}function g(){d="POP";let b=v(),x=b==null?null:b-m;m=b,p&&p({action:d,location:A.location,delta:x})}function _(b,x){d="PUSH";let U=qh(A.location,b,x);n&&n(U,b),m=v()+1;let R=t_(U,m),N=A.createHref(U);try{u.pushState(R,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;o.location.assign(N)}c&&p&&p({action:d,location:A.location,delta:1})}function y(b,x){d="REPLACE";let U=qh(A.location,b,x);n&&n(U,b),m=v();let R=t_(U,m),N=A.createHref(U);u.replaceState(R,"",N),c&&p&&p({action:d,location:A.location,delta:0})}function M(b){return Kb(b)}let A={get action(){return d},get location(){return a(o,u)},listen(b){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(e_,g),p=b,()=>{o.removeEventListener(e_,g),p=null}},createHref(b){return e(o,b)},createURL:M,encodeLocation(b){let x=M(b);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:y,go(b){return u.go(b)}};return A}function Kb(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),un(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:wl(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function dx(a,e,n="/"){return Qb(a,e,n,!1)}function Qb(a,e,n,r){let o=typeof e=="string"?rs(e):e,c=Ba(o.pathname||"/",n);if(c==null)return null;let u=hx(a);Jb(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let m=cM(c);d=oM(u[p],m,r)}return d}function hx(a,e=[],n=[],r="",o=!1){let c=(u,d,p=o,m)=>{let v={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&p)return;un(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let g=Pa([r,v.relativePath]),_=n.concat(v);u.children&&u.children.length>0&&(un(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),hx(u.children,e,_,g,p)),!(u.path==null&&!u.index)&&e.push({path:g,score:rM(g,u.index),routesMeta:_})};return a.forEach((u,d)=>{if(u.path===""||!u.path?.includes("?"))c(u,d);else for(let p of px(u.path))c(u,d,!0,p)}),e}function px(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let u=px(r.join("/")),d=[];return d.push(...u.map(p=>p===""?c:[c,p].join("/"))),o&&d.push(...u),d.map(p=>a.startsWith("/")&&p===""?"/":p)}function Jb(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:sM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var $b=/^:[\w-]+$/,eM=3,tM=2,nM=1,iM=10,aM=-2,n_=a=>a==="*";function rM(a,e){let n=a.split("/"),r=n.length;return n.some(n_)&&(r+=aM),e&&(r+=tM),n.filter(o=>!n_(o)).reduce((o,c)=>o+($b.test(c)?eM:c===""?nM:iM),r)}function sM(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function oM(a,e,n=!1){let{routesMeta:r}=a,o={},c="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=Lu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},v),_=p.route;if(!g&&m&&n&&!r[r.length-1].route.index&&(g=Lu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:Pa([c,g.pathname]),pathnameBase:hM(Pa([c,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(c=Pa([c,g.pathnameBase]))}return u}function Lu(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=lM(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((m,{paramName:v,isOptional:g},_)=>{if(v==="*"){let M=d[_]||"";u=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const y=d[_];return g&&!y?m[v]=void 0:m[v]=(y||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:u,pattern:a}}function lM(a,e=!1,n=!0){Oi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function cM(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Oi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Ba(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}var mx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uM=a=>mx.test(a);function fM(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?rs(a):a,c;if(n)if(uM(n))c=n;else{if(n.includes("//")){let u=n;n=n.replace(/\/\/+/g,"/"),Oi(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${n}`)}n.startsWith("/")?c=i_(n.substring(1),"/"):c=i_(n,e)}else c=e;return{pathname:c,search:pM(r),hash:mM(o)}}function i_(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function rh(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dM(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function gx(a){let e=dM(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function vx(a,e,n,r=!1){let o;typeof a=="string"?o=rs(a):(o={...a},un(!o.pathname||!o.pathname.includes("?"),rh("?","pathname","search",o)),un(!o.pathname||!o.pathname.includes("#"),rh("#","pathname","hash",o)),un(!o.search||!o.search.includes("#"),rh("#","search","hash",o)));let c=a===""||o.pathname==="",u=c?"/":o.pathname,d;if(u==null)d=n;else{let g=e.length-1;if(!r&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),g-=1;o.pathname=_.join("/")}d=g>=0?e[g]:"/"}let p=fM(o,d),m=u&&u!=="/"&&u.endsWith("/"),v=(c||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||v)&&(p.pathname+="/"),p}var Pa=a=>a.join("/").replace(/\/\/+/g,"/"),hM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),pM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,mM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,gM=class{constructor(a,e,n,r=!1){this.status=a,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function vM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function _M(a){return a.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var _x=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xx(a,e){let n=a;if(typeof n!="string"||!mx.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(_x)try{let c=new URL(window.location.href),u=n.startsWith("//")?new URL(c.protocol+n):new URL(n),d=Ba(u.pathname,e);u.origin===c.origin&&d!=null?n=d+u.search+u.hash:o=!0}catch{Oi(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yx=["POST","PUT","PATCH","DELETE"];new Set(yx);var xM=["GET",...yx];new Set(xM);var po=J.createContext(null);po.displayName="DataRouter";var Vu=J.createContext(null);Vu.displayName="DataRouterState";var yM=J.createContext(!1),Sx=J.createContext({isTransitioning:!1});Sx.displayName="ViewTransition";var SM=J.createContext(new Map);SM.displayName="Fetchers";var bM=J.createContext(null);bM.displayName="Await";var Pi=J.createContext(null);Pi.displayName="Navigation";var Ul=J.createContext(null);Ul.displayName="Location";var Va=J.createContext({outlet:null,matches:[],isDataRoute:!1});Va.displayName="Route";var qp=J.createContext(null);qp.displayName="RouteError";var bx="REACT_ROUTER_ERROR",MM="REDIRECT",EM="ROUTE_ERROR_RESPONSE";function TM(a){if(a.startsWith(`${bx}:${MM}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function AM(a){if(a.startsWith(`${bx}:${EM}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new gM(e.status,e.statusText,e.data)}catch{}}function RM(a,{relative:e}={}){un(Nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=J.useContext(Pi),{hash:o,pathname:c,search:u}=Ll(a,{relative:e}),d=c;return n!=="/"&&(d=c==="/"?n:Pa([n,c])),r.createHref({pathname:d,search:u,hash:o})}function Nl(){return J.useContext(Ul)!=null}function ss(){return un(Nl(),"useLocation() may be used only in the context of a <Router> component."),J.useContext(Ul).location}var Mx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ex(a){J.useContext(Pi).static||J.useLayoutEffect(a)}function wM(){let{isDataRoute:a}=J.useContext(Va);return a?GM():CM()}function CM(){un(Nl(),"useNavigate() may be used only in the context of a <Router> component.");let a=J.useContext(po),{basename:e,navigator:n}=J.useContext(Pi),{matches:r}=J.useContext(Va),{pathname:o}=ss(),c=JSON.stringify(gx(r)),u=J.useRef(!1);return Ex(()=>{u.current=!0}),J.useCallback((p,m={})=>{if(Oi(u.current,Mx),!u.current)return;if(typeof p=="number"){n.go(p);return}let v=vx(p,JSON.parse(c),o,m.relative==="path");a==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Pa([e,v.pathname])),(m.replace?n.replace:n.push)(v,m.state,m)},[e,n,c,o,a])}J.createContext(null);function Ll(a,{relative:e}={}){let{matches:n}=J.useContext(Va),{pathname:r}=ss(),o=JSON.stringify(gx(n));return J.useMemo(()=>vx(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function DM(a,e){return Tx(a,e)}function Tx(a,e,n,r,o){un(Nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=J.useContext(Pi),{matches:u}=J.useContext(Va),d=u[u.length-1],p=d?d.params:{},m=d?d.pathname:"/",v=d?d.pathnameBase:"/",g=d&&d.route;{let U=g&&g.path||"";Rx(m,!g||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let _=ss(),y;if(e){let U=typeof e=="string"?rs(e):e;un(v==="/"||U.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${U.pathname}" was given in the \`location\` prop.`),y=U}else y=_;let M=y.pathname||"/",A=M;if(v!=="/"){let U=v.replace(/^\//,"").split("/");A="/"+M.replace(/^\//,"").split("/").slice(U.length).join("/")}let b=dx(a,{pathname:A});Oi(g||b!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Oi(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=PM(b&&b.map(U=>Object.assign({},U,{params:Object.assign({},p,U.params),pathname:Pa([v,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?v:Pa([v,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),u,n,r,o);return e&&x?J.createElement(Ul.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},x):x}function UM(){let a=HM(),e=vM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",a),u=J.createElement(J.Fragment,null,J.createElement("p",null,"💿 Hey developer 👋"),J.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",J.createElement("code",{style:c},"ErrorBoundary")," or"," ",J.createElement("code",{style:c},"errorElement")," prop on your route.")),J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),n?J.createElement("pre",{style:o},n):null,u)}var NM=J.createElement(UM,null),Ax=class extends J.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const n=AM(a.digest);n&&(a=n)}let e=a!==void 0?J.createElement(Va.Provider,{value:this.props.routeContext},J.createElement(qp.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?J.createElement(LM,{error:a},e):e}};Ax.contextType=yM;var sh=new WeakMap;function LM({children:a,error:e}){let{basename:n}=J.useContext(Pi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=TM(e.digest);if(r){let o=sh.get(e);if(o)throw o;let c=xx(r.location,n);if(_x&&!sh.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw sh.set(e,u),u}return J.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return a}function OM({routeContext:a,match:e,children:n}){let r=J.useContext(po);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),J.createElement(Va.Provider,{value:a},n)}function PM(a,e=[],n=null,r=null,o=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let c=a,u=n?.errors;if(u!=null){let v=c.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);un(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let d=!1,p=-1;if(n)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=v),g.route.id){let{loaderData:_,errors:y}=n,M=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||M){d=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}let m=n&&r?(v,g)=>{r(v,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:_M(n.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,_)=>{let y,M=!1,A=null,b=null;n&&(y=u&&g.route.id?u[g.route.id]:void 0,A=g.route.errorElement||NM,d&&(p<0&&_===0?(Rx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,b=null):p===_&&(M=!0,b=g.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,_+1)),U=()=>{let R;return y?R=A:M?R=b:g.route.Component?R=J.createElement(g.route.Component,null):g.route.element?R=g.route.element:R=v,J.createElement(OM,{match:g,routeContext:{outlet:v,matches:x,isDataRoute:n!=null},children:R})};return n&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?J.createElement(Ax,{location:n.location,revalidation:n.revalidation,component:A,error:y,children:U(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:m}):U()},null)}function jp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zM(a){let e=J.useContext(po);return un(e,jp(a)),e}function BM(a){let e=J.useContext(Vu);return un(e,jp(a)),e}function IM(a){let e=J.useContext(Va);return un(e,jp(a)),e}function Yp(a){let e=IM(a),n=e.matches[e.matches.length-1];return un(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function FM(){return Yp("useRouteId")}function HM(){let a=J.useContext(qp),e=BM("useRouteError"),n=Yp("useRouteError");return a!==void 0?a:e.errors?.[n]}function GM(){let{router:a}=zM("useNavigate"),e=Yp("useNavigate"),n=J.useRef(!1);return Ex(()=>{n.current=!0}),J.useCallback(async(o,c={})=>{Oi(n.current,Mx),n.current&&(typeof o=="number"?await a.navigate(o):await a.navigate(o,{fromRouteId:e,...c}))},[a,e])}var a_={};function Rx(a,e,n){!e&&!a_[a]&&(a_[a]=!0,Oi(!1,n))}J.memo(VM);function VM({routes:a,future:e,state:n,onError:r}){return Tx(a,void 0,n,r,e)}function bl(a){un(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kM({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:c=!1,unstable_useTransitions:u}){un(!Nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),p=J.useMemo(()=>({basename:d,navigator:o,static:c,unstable_useTransitions:u,future:{}}),[d,o,c,u]);typeof n=="string"&&(n=rs(n));let{pathname:m="/",search:v="",hash:g="",state:_=null,key:y="default"}=n,M=J.useMemo(()=>{let A=Ba(m,d);return A==null?null:{location:{pathname:A,search:v,hash:g,state:_,key:y},navigationType:r}},[d,m,v,g,_,y,r]);return Oi(M!=null,`<Router basename="${d}"> is not able to match the URL "${m}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:J.createElement(Pi.Provider,{value:p},J.createElement(Ul.Provider,{children:e,value:M}))}function XM({children:a,location:e}){return DM(jh(a),e)}function jh(a,e=[]){let n=[];return J.Children.forEach(a,(r,o)=>{if(!J.isValidElement(r))return;let c=[...e,o];if(r.type===J.Fragment){n.push.apply(n,jh(r.props.children,c));return}un(r.type===bl,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),un(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=jh(r.props.children,c)),n.push(u)}),n}var Tu="get",Au="application/x-www-form-urlencoded";function ku(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function WM(a){return ku(a)&&a.tagName.toLowerCase()==="button"}function qM(a){return ku(a)&&a.tagName.toLowerCase()==="form"}function jM(a){return ku(a)&&a.tagName.toLowerCase()==="input"}function YM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function ZM(a,e){return a.button===0&&(!e||e==="_self")&&!YM(a)}var Jc=null;function KM(){if(Jc===null)try{new FormData(document.createElement("form"),0),Jc=!1}catch{Jc=!0}return Jc}var QM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function oh(a){return a!=null&&!QM.has(a)?(Oi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Au}"`),null):a}function JM(a,e){let n,r,o,c,u;if(qM(a)){let d=a.getAttribute("action");r=d?Ba(d,e):null,n=a.getAttribute("method")||Tu,o=oh(a.getAttribute("enctype"))||Au,c=new FormData(a)}else if(WM(a)||jM(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||d.getAttribute("action");if(r=p?Ba(p,e):null,n=a.getAttribute("formmethod")||d.getAttribute("method")||Tu,o=oh(a.getAttribute("formenctype"))||oh(d.getAttribute("enctype"))||Au,c=new FormData(d,a),!KM()){let{name:m,type:v,value:g}=a;if(v==="image"){let _=m?`${m}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else m&&c.append(m,g)}}else{if(ku(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Tu,r=null,o=Au,u=a}return c&&o==="text/plain"&&(u=c,c=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function $M(a,e,n){let r=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Ba(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function eE(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function tE(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function nE(a,e,n){let r=await Promise.all(a.map(async o=>{let c=e.routes[o.route.id];if(c){let u=await eE(c,n);return u.links?u.links():[]}return[]}));return sE(r.flat(1).filter(tE).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function r_(a,e,n,r,o,c){let u=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,d=(p,m)=>n[m].pathname!==p.pathname||n[m].route.path?.endsWith("*")&&n[m].params["*"]!==p.params["*"];return c==="assets"?e.filter((p,m)=>u(p,m)||d(p,m)):c==="data"?e.filter((p,m)=>{let v=r.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(u(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let g=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function iE(a,e,{includeHydrateFallback:n}={}){return aE(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function aE(a){return[...new Set(a)]}function rE(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function sE(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let c=JSON.stringify(rE(o));return n.has(c)||(n.add(c),r.push({key:c,link:o})),r},[])}function wx(){let a=J.useContext(po);return Zp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function oE(){let a=J.useContext(Vu);return Zp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Kp=J.createContext(void 0);Kp.displayName="FrameworkContext";function Cx(){let a=J.useContext(Kp);return Zp(a,"You must render this element inside a <HydratedRouter> element"),a}function lE(a,e){let n=J.useContext(Kp),[r,o]=J.useState(!1),[c,u]=J.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:v,onTouchStart:g}=e,_=J.useRef(null);J.useEffect(()=>{if(a==="render"&&u(!0),a==="viewport"){let A=x=>{x.forEach(U=>{u(U.isIntersecting)})},b=new IntersectionObserver(A,{threshold:.5});return _.current&&b.observe(_.current),()=>{b.disconnect()}}},[a]),J.useEffect(()=>{if(r){let A=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(A)}}},[r]);let y=()=>{o(!0)},M=()=>{o(!1),u(!1)};return n?a!=="intent"?[c,_,{}]:[c,_,{onFocus:hl(d,y),onBlur:hl(p,M),onMouseEnter:hl(m,y),onMouseLeave:hl(v,M),onTouchStart:hl(g,y)}]:[!1,_,{}]}function hl(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function cE({page:a,...e}){let{router:n}=wx(),r=J.useMemo(()=>dx(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?J.createElement(fE,{page:a,matches:r,...e}):null}function uE(a){let{manifest:e,routeModules:n}=Cx(),[r,o]=J.useState([]);return J.useEffect(()=>{let c=!1;return nE(a,e,n).then(u=>{c||o(u)}),()=>{c=!0}},[a,e,n]),r}function fE({page:a,matches:e,...n}){let r=ss(),{manifest:o,routeModules:c}=Cx(),{basename:u}=wx(),{loaderData:d,matches:p}=oE(),m=J.useMemo(()=>r_(a,e,p,o,r,"data"),[a,e,p,o,r]),v=J.useMemo(()=>r_(a,e,p,o,r,"assets"),[a,e,p,o,r]),g=J.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let M=new Set,A=!1;if(e.forEach(x=>{let U=o.routes[x.route.id];!U||!U.hasLoader||(!m.some(R=>R.route.id===x.route.id)&&x.route.id in d&&c[x.route.id]?.shouldRevalidate||U.hasClientLoader?A=!0:M.add(x.route.id))}),M.size===0)return[];let b=$M(a,u,"data");return A&&M.size>0&&b.searchParams.set("_routes",e.filter(x=>M.has(x.route.id)).map(x=>x.route.id).join(",")),[b.pathname+b.search]},[u,d,r,o,m,e,a,c]),_=J.useMemo(()=>iE(v,o),[v,o]),y=uE(v);return J.createElement(J.Fragment,null,g.map(M=>J.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),_.map(M=>J.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),y.map(({key:M,link:A})=>J.createElement("link",{key:M,nonce:n.nonce,...A})))}function dE(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var hE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{hE&&(window.__reactRouterVersion="7.11.0")}catch{}function pE({basename:a,children:e,unstable_useTransitions:n,window:r}){let o=J.useRef();o.current==null&&(o.current=jb({window:r,v5Compat:!0}));let c=o.current,[u,d]=J.useState({action:c.action,location:c.location}),p=J.useCallback(m=>{n===!1?d(m):J.startTransition(()=>d(m))},[n]);return J.useLayoutEffect(()=>c.listen(p),[c,p]),J.createElement(kM,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:c,unstable_useTransitions:n})}var Dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mo=J.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:c,replace:u,state:d,target:p,to:m,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_,...y},M){let{basename:A,unstable_useTransitions:b}=J.useContext(Pi),x=typeof m=="string"&&Dx.test(m),U=xx(m,A);m=U.to;let R=RM(m,{relative:o}),[N,L,I]=lE(r,y),z=_E(m,{replace:u,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:_,unstable_useTransitions:b});function H(D){e&&e(D),D.defaultPrevented||z(D)}let T=J.createElement("a",{...y,...I,href:U.absoluteURL||R,onClick:U.isExternal||c?e:H,ref:dE(M,L),target:p,"data-discover":!x&&n==="render"?"true":void 0});return N&&!x?J.createElement(J.Fragment,null,T,J.createElement(cE,{page:R})):T});mo.displayName="Link";var mE=J.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:c,to:u,viewTransition:d,children:p,...m},v){let g=Ll(u,{relative:m.relative}),_=ss(),y=J.useContext(Vu),{navigator:M,basename:A}=J.useContext(Pi),b=y!=null&&ME(g)&&d===!0,x=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,U=_.pathname,R=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(U=U.toLowerCase(),R=R?R.toLowerCase():null,x=x.toLowerCase()),R&&A&&(R=Ba(R,A)||R);const N=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let L=U===x||!o&&U.startsWith(x)&&U.charAt(N)==="/",I=R!=null&&(R===x||!o&&R.startsWith(x)&&R.charAt(x.length)==="/"),z={isActive:L,isPending:I,isTransitioning:b},H=L?e:void 0,T;typeof r=="function"?T=r(z):T=[r,L?"active":null,I?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(z):c;return J.createElement(mo,{...m,"aria-current":H,className:T,ref:v,style:D,to:u,viewTransition:d},typeof p=="function"?p(z):p)});mE.displayName="NavLink";var gE=J.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:c,method:u=Tu,action:d,onSubmit:p,relative:m,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_,...y},M)=>{let{unstable_useTransitions:A}=J.useContext(Pi),b=SE(),x=bE(d,{relative:m}),U=u.toLowerCase()==="get"?"get":"post",R=typeof d=="string"&&Dx.test(d),N=L=>{if(p&&p(L),L.defaultPrevented)return;L.preventDefault();let I=L.nativeEvent.submitter,z=I?.getAttribute("formmethod")||u,H=()=>b(I||L.currentTarget,{fetcherKey:e,method:z,navigate:n,replace:o,state:c,relative:m,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_});A&&n!==!1?J.startTransition(()=>H()):H()};return J.createElement("form",{ref:M,method:U,action:x,onSubmit:r?p:N,...y,"data-discover":!R&&a==="render"?"true":void 0})});gE.displayName="Form";function vE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ux(a){let e=J.useContext(po);return un(e,vE(a)),e}function _E(a,{target:e,replace:n,state:r,preventScrollReset:o,relative:c,viewTransition:u,unstable_defaultShouldRevalidate:d,unstable_useTransitions:p}={}){let m=wM(),v=ss(),g=Ll(a,{relative:c});return J.useCallback(_=>{if(ZM(_,e)){_.preventDefault();let y=n!==void 0?n:wl(v)===wl(g),M=()=>m(a,{replace:y,state:r,preventScrollReset:o,relative:c,viewTransition:u,unstable_defaultShouldRevalidate:d});p?J.startTransition(()=>M()):M()}},[v,m,g,n,r,e,a,o,c,u,d,p])}var xE=0,yE=()=>`__${String(++xE)}__`;function SE(){let{router:a}=Ux("useSubmit"),{basename:e}=J.useContext(Pi),n=FM(),r=a.fetch,o=a.navigate;return J.useCallback(async(c,u={})=>{let{action:d,method:p,encType:m,formData:v,body:g}=JM(c,e);if(u.navigate===!1){let _=u.fetcherKey||yE();await r(_,n,u.action||d,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:g,formMethod:u.method||p,formEncType:u.encType||m,flushSync:u.flushSync})}else await o(u.action||d,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:g,formMethod:u.method||p,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:n,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,o,e,n])}function bE(a,{relative:e}={}){let{basename:n}=J.useContext(Pi),r=J.useContext(Va);un(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...Ll(a||".",{relative:e})},u=ss();if(a==null){c.search=u.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(g=>g).forEach(g=>d.append("index",g));let v=d.toString();c.search=v?`?${v}`:""}}return(!a||a===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Pa([n,c.pathname])),wl(c)}function ME(a,{relative:e}={}){let n=J.useContext(Sx);un(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ux("useViewTransitionState"),o=Ll(a,{relative:e});if(!n.isTransitioning)return!1;let c=Ba(n.currentLocation.pathname,r)||n.currentLocation.pathname,u=Ba(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Lu(o.pathname,u)!=null||Lu(o.pathname,c)!=null}function Nx(a){var e,n,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var o=a.length;for(e=0;e<o;e++)a[e]&&(n=Nx(a[e]))&&(r&&(r+=" "),r+=n)}else for(n in a)a[n]&&(r&&(r+=" "),r+=n);return r}function EE(){for(var a,e,n=0,r="",o=arguments.length;n<o;n++)(a=arguments[n])&&(e=Nx(a))&&(r&&(r+=" "),r+=e);return r}const TE=(a,e)=>{const n=new Array(a.length+e.length);for(let r=0;r<a.length;r++)n[r]=a[r];for(let r=0;r<e.length;r++)n[a.length+r]=e[r];return n},AE=(a,e)=>({classGroupId:a,validator:e}),Lx=(a=new Map,e=null,n)=>({nextPart:a,validators:e,classGroupId:n}),Ou="-",s_=[],RE="arbitrary..",wE=a=>{const e=DE(a),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=a;return{getClassGroupId:u=>{if(u.startsWith("[")&&u.endsWith("]"))return CE(u);const d=u.split(Ou),p=d[0]===""&&d.length>1?1:0;return Ox(d,p,e)},getConflictingClassGroupIds:(u,d)=>{if(d){const p=r[u],m=n[u];return p?m?TE(m,p):p:m||s_}return n[u]||s_}}},Ox=(a,e,n)=>{if(a.length-e===0)return n.classGroupId;const o=a[e],c=n.nextPart.get(o);if(c){const m=Ox(a,e+1,c);if(m)return m}const u=n.validators;if(u===null)return;const d=e===0?a.join(Ou):a.slice(e).join(Ou),p=u.length;for(let m=0;m<p;m++){const v=u[m];if(v.validator(d))return v.classGroupId}},CE=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=a.slice(1,-1),n=e.indexOf(":"),r=e.slice(0,n);return r?RE+r:void 0})(),DE=a=>{const{theme:e,classGroups:n}=a;return UE(n,e)},UE=(a,e)=>{const n=Lx();for(const r in a){const o=a[r];Qp(o,n,r,e)}return n},Qp=(a,e,n,r)=>{const o=a.length;for(let c=0;c<o;c++){const u=a[c];NE(u,e,n,r)}},NE=(a,e,n,r)=>{if(typeof a=="string"){LE(a,e,n);return}if(typeof a=="function"){OE(a,e,n,r);return}PE(a,e,n,r)},LE=(a,e,n)=>{const r=a===""?e:Px(e,a);r.classGroupId=n},OE=(a,e,n,r)=>{if(zE(a)){Qp(a(r),e,n,r);return}e.validators===null&&(e.validators=[]),e.validators.push(AE(n,a))},PE=(a,e,n,r)=>{const o=Object.entries(a),c=o.length;for(let u=0;u<c;u++){const[d,p]=o[u];Qp(p,Px(e,d),n,r)}},Px=(a,e)=>{let n=a;const r=e.split(Ou),o=r.length;for(let c=0;c<o;c++){const u=r[c];let d=n.nextPart.get(u);d||(d=Lx(),n.nextPart.set(u,d)),n=d}return n},zE=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,BE=a=>{if(a<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),r=Object.create(null);const o=(c,u)=>{n[c]=u,e++,e>a&&(e=0,r=n,n=Object.create(null))};return{get(c){let u=n[c];if(u!==void 0)return u;if((u=r[c])!==void 0)return o(c,u),u},set(c,u){c in n?n[c]=u:o(c,u)}}},Yh="!",o_=":",IE=[],l_=(a,e,n,r,o)=>({modifiers:a,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:r,isExternal:o}),FE=a=>{const{prefix:e,experimentalParseClassName:n}=a;let r=o=>{const c=[];let u=0,d=0,p=0,m;const v=o.length;for(let A=0;A<v;A++){const b=o[A];if(u===0&&d===0){if(b===o_){c.push(o.slice(p,A)),p=A+1;continue}if(b==="/"){m=A;continue}}b==="["?u++:b==="]"?u--:b==="("?d++:b===")"&&d--}const g=c.length===0?o:o.slice(p);let _=g,y=!1;g.endsWith(Yh)?(_=g.slice(0,-1),y=!0):g.startsWith(Yh)&&(_=g.slice(1),y=!0);const M=m&&m>p?m-p:void 0;return l_(c,y,_,M)};if(e){const o=e+o_,c=r;r=u=>u.startsWith(o)?c(u.slice(o.length)):l_(IE,!1,u,void 0,!0)}if(n){const o=r;r=c=>n({className:c,parseClassName:o})}return r},HE=a=>{const e=new Map;return a.orderSensitiveModifiers.forEach((n,r)=>{e.set(n,1e6+r)}),n=>{const r=[];let o=[];for(let c=0;c<n.length;c++){const u=n[c],d=u[0]==="[",p=e.has(u);d||p?(o.length>0&&(o.sort(),r.push(...o),o=[]),r.push(u)):o.push(u)}return o.length>0&&(o.sort(),r.push(...o)),r}},GE=a=>({cache:BE(a.cacheSize),parseClassName:FE(a),sortModifiers:HE(a),...wE(a)}),VE=/\s+/,kE=(a,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:c}=e,u=[],d=a.trim().split(VE);let p="";for(let m=d.length-1;m>=0;m-=1){const v=d[m],{isExternal:g,modifiers:_,hasImportantModifier:y,baseClassName:M,maybePostfixModifierPosition:A}=n(v);if(g){p=v+(p.length>0?" "+p:p);continue}let b=!!A,x=r(b?M.substring(0,A):M);if(!x){if(!b){p=v+(p.length>0?" "+p:p);continue}if(x=r(M),!x){p=v+(p.length>0?" "+p:p);continue}b=!1}const U=_.length===0?"":_.length===1?_[0]:c(_).join(":"),R=y?U+Yh:U,N=R+x;if(u.indexOf(N)>-1)continue;u.push(N);const L=o(x,b);for(let I=0;I<L.length;++I){const z=L[I];u.push(R+z)}p=v+(p.length>0?" "+p:p)}return p},XE=(...a)=>{let e=0,n,r,o="";for(;e<a.length;)(n=a[e++])&&(r=zx(n))&&(o&&(o+=" "),o+=r);return o},zx=a=>{if(typeof a=="string")return a;let e,n="";for(let r=0;r<a.length;r++)a[r]&&(e=zx(a[r]))&&(n&&(n+=" "),n+=e);return n},WE=(a,...e)=>{let n,r,o,c;const u=p=>{const m=e.reduce((v,g)=>g(v),a());return n=GE(m),r=n.cache.get,o=n.cache.set,c=d,d(p)},d=p=>{const m=r(p);if(m)return m;const v=kE(p,n);return o(p,v),v};return c=u,(...p)=>c(XE(...p))},qE=[],Rn=a=>{const e=n=>n[a]||qE;return e.isThemeGetter=!0,e},Bx=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ix=/^\((?:(\w[\w-]*):)?(.+)\)$/i,jE=/^\d+\/\d+$/,YE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ZE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,KE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,QE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,JE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xs=a=>jE.test(a),St=a=>!!a&&!Number.isNaN(Number(a)),vr=a=>!!a&&Number.isInteger(Number(a)),lh=a=>a.endsWith("%")&&St(a.slice(0,-1)),Aa=a=>YE.test(a),$E=()=>!0,e1=a=>ZE.test(a)&&!KE.test(a),Fx=()=>!1,t1=a=>QE.test(a),n1=a=>JE.test(a),i1=a=>!je(a)&&!Ye(a),a1=a=>go(a,Vx,Fx),je=a=>Bx.test(a),jr=a=>go(a,kx,e1),ch=a=>go(a,c1,St),c_=a=>go(a,Hx,Fx),r1=a=>go(a,Gx,n1),$c=a=>go(a,Xx,t1),Ye=a=>Ix.test(a),pl=a=>vo(a,kx),s1=a=>vo(a,u1),u_=a=>vo(a,Hx),o1=a=>vo(a,Vx),l1=a=>vo(a,Gx),eu=a=>vo(a,Xx,!0),go=(a,e,n)=>{const r=Bx.exec(a);return r?r[1]?e(r[1]):n(r[2]):!1},vo=(a,e,n=!1)=>{const r=Ix.exec(a);return r?r[1]?e(r[1]):n:!1},Hx=a=>a==="position"||a==="percentage",Gx=a=>a==="image"||a==="url",Vx=a=>a==="length"||a==="size"||a==="bg-size",kx=a=>a==="length",c1=a=>a==="number",u1=a=>a==="family-name",Xx=a=>a==="shadow",f1=()=>{const a=Rn("color"),e=Rn("font"),n=Rn("text"),r=Rn("font-weight"),o=Rn("tracking"),c=Rn("leading"),u=Rn("breakpoint"),d=Rn("container"),p=Rn("spacing"),m=Rn("radius"),v=Rn("shadow"),g=Rn("inset-shadow"),_=Rn("text-shadow"),y=Rn("drop-shadow"),M=Rn("blur"),A=Rn("perspective"),b=Rn("aspect"),x=Rn("ease"),U=Rn("animate"),R=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],L=()=>[...N(),Ye,je],I=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto","contain","none"],H=()=>[Ye,je,p],T=()=>[Xs,"full","auto",...H()],D=()=>[vr,"none","subgrid",Ye,je],X=()=>["auto",{span:["full",vr,Ye,je]},vr,Ye,je],ee=()=>[vr,"auto",Ye,je],ae=()=>["auto","min","max","fr",Ye,je],he=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],$=()=>["start","end","center","stretch","center-safe","end-safe"],O=()=>["auto",...H()],F=()=>[Xs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...H()],k=()=>[a,Ye,je],xe=()=>[...N(),u_,c_,{position:[Ye,je]}],ge=()=>["no-repeat",{repeat:["","x","y","space","round"]}],P=()=>["auto","cover","contain",o1,a1,{size:[Ye,je]}],ie=()=>[lh,pl,jr],ue=()=>["","none","full",m,Ye,je],Se=()=>["",St,pl,jr],Me=()=>["solid","dashed","dotted","double"],te=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],re=()=>[St,lh,u_,c_],De=()=>["","none",M,Ye,je],Fe=()=>["none",St,Ye,je],ze=()=>["none",St,Ye,je],at=()=>[St,Ye,je],Ct=()=>[Xs,"full",...H()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Aa],breakpoint:[Aa],color:[$E],container:[Aa],"drop-shadow":[Aa],ease:["in","out","in-out"],font:[i1],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Aa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Aa],shadow:[Aa],spacing:["px",St],text:[Aa],"text-shadow":[Aa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Xs,je,Ye,b]}],container:["container"],columns:[{columns:[St,je,Ye,d]}],"break-after":[{"break-after":R()}],"break-before":[{"break-before":R()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:L()}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{start:T()}],end:[{end:T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:["visible","invisible","collapse"],z:[{z:[vr,"auto",Ye,je]}],basis:[{basis:[Xs,"full","auto",d,...H()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[St,Xs,"auto","initial","none",je]}],grow:[{grow:["",St,Ye,je]}],shrink:[{shrink:["",St,Ye,je]}],order:[{order:[vr,"first","last","none",Ye,je]}],"grid-cols":[{"grid-cols":D()}],"col-start-end":[{col:X()}],"col-start":[{"col-start":ee()}],"col-end":[{"col-end":ee()}],"grid-rows":[{"grid-rows":D()}],"row-start-end":[{row:X()}],"row-start":[{"row-start":ee()}],"row-end":[{"row-end":ee()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ae()}],"auto-rows":[{"auto-rows":ae()}],gap:[{gap:H()}],"gap-x":[{"gap-x":H()}],"gap-y":[{"gap-y":H()}],"justify-content":[{justify:[...he(),"normal"]}],"justify-items":[{"justify-items":[...$(),"normal"]}],"justify-self":[{"justify-self":["auto",...$()]}],"align-content":[{content:["normal",...he()]}],"align-items":[{items:[...$(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...$(),{baseline:["","last"]}]}],"place-content":[{"place-content":he()}],"place-items":[{"place-items":[...$(),"baseline"]}],"place-self":[{"place-self":["auto",...$()]}],p:[{p:H()}],px:[{px:H()}],py:[{py:H()}],ps:[{ps:H()}],pe:[{pe:H()}],pt:[{pt:H()}],pr:[{pr:H()}],pb:[{pb:H()}],pl:[{pl:H()}],m:[{m:O()}],mx:[{mx:O()}],my:[{my:O()}],ms:[{ms:O()}],me:[{me:O()}],mt:[{mt:O()}],mr:[{mr:O()}],mb:[{mb:O()}],ml:[{ml:O()}],"space-x":[{"space-x":H()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":H()}],"space-y-reverse":["space-y-reverse"],size:[{size:F()}],w:[{w:[d,"screen",...F()]}],"min-w":[{"min-w":[d,"screen","none",...F()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[u]},...F()]}],h:[{h:["screen","lh",...F()]}],"min-h":[{"min-h":["screen","lh","none",...F()]}],"max-h":[{"max-h":["screen","lh",...F()]}],"font-size":[{text:["base",n,pl,jr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Ye,ch]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",lh,je]}],"font-family":[{font:[s1,je,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,Ye,je]}],"line-clamp":[{"line-clamp":[St,"none",Ye,ch]}],leading:[{leading:[c,...H()]}],"list-image":[{"list-image":["none",Ye,je]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Ye,je]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Me(),"wavy"]}],"text-decoration-thickness":[{decoration:[St,"from-font","auto",Ye,jr]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[St,"auto",Ye,je]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ye,je]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ye,je]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:xe()}],"bg-repeat":[{bg:ge()}],"bg-size":[{bg:P()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},vr,Ye,je],radial:["",Ye,je],conic:[vr,Ye,je]},l1,r1]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:ie()}],"gradient-via-pos":[{via:ie()}],"gradient-to-pos":[{to:ie()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:ue()}],"rounded-s":[{"rounded-s":ue()}],"rounded-e":[{"rounded-e":ue()}],"rounded-t":[{"rounded-t":ue()}],"rounded-r":[{"rounded-r":ue()}],"rounded-b":[{"rounded-b":ue()}],"rounded-l":[{"rounded-l":ue()}],"rounded-ss":[{"rounded-ss":ue()}],"rounded-se":[{"rounded-se":ue()}],"rounded-ee":[{"rounded-ee":ue()}],"rounded-es":[{"rounded-es":ue()}],"rounded-tl":[{"rounded-tl":ue()}],"rounded-tr":[{"rounded-tr":ue()}],"rounded-br":[{"rounded-br":ue()}],"rounded-bl":[{"rounded-bl":ue()}],"border-w":[{border:Se()}],"border-w-x":[{"border-x":Se()}],"border-w-y":[{"border-y":Se()}],"border-w-s":[{"border-s":Se()}],"border-w-e":[{"border-e":Se()}],"border-w-t":[{"border-t":Se()}],"border-w-r":[{"border-r":Se()}],"border-w-b":[{"border-b":Se()}],"border-w-l":[{"border-l":Se()}],"divide-x":[{"divide-x":Se()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Se()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Me(),"hidden","none"]}],"divide-style":[{divide:[...Me(),"hidden","none"]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...Me(),"none","hidden"]}],"outline-offset":[{"outline-offset":[St,Ye,je]}],"outline-w":[{outline:["",St,pl,jr]}],"outline-color":[{outline:k()}],shadow:[{shadow:["","none",v,eu,$c]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":["none",g,eu,$c]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:Se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[St,jr]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":Se()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":["none",_,eu,$c]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[St,Ye,je]}],"mix-blend":[{"mix-blend":[...te(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":te()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[St]}],"mask-image-linear-from-pos":[{"mask-linear-from":re()}],"mask-image-linear-to-pos":[{"mask-linear-to":re()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":re()}],"mask-image-t-to-pos":[{"mask-t-to":re()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":re()}],"mask-image-r-to-pos":[{"mask-r-to":re()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":re()}],"mask-image-b-to-pos":[{"mask-b-to":re()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":re()}],"mask-image-l-to-pos":[{"mask-l-to":re()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":re()}],"mask-image-x-to-pos":[{"mask-x-to":re()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":re()}],"mask-image-y-to-pos":[{"mask-y-to":re()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[Ye,je]}],"mask-image-radial-from-pos":[{"mask-radial-from":re()}],"mask-image-radial-to-pos":[{"mask-radial-to":re()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":N()}],"mask-image-conic-pos":[{"mask-conic":[St]}],"mask-image-conic-from-pos":[{"mask-conic-from":re()}],"mask-image-conic-to-pos":[{"mask-conic-to":re()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:xe()}],"mask-repeat":[{mask:ge()}],"mask-size":[{mask:P()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Ye,je]}],filter:[{filter:["","none",Ye,je]}],blur:[{blur:De()}],brightness:[{brightness:[St,Ye,je]}],contrast:[{contrast:[St,Ye,je]}],"drop-shadow":[{"drop-shadow":["","none",y,eu,$c]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:["",St,Ye,je]}],"hue-rotate":[{"hue-rotate":[St,Ye,je]}],invert:[{invert:["",St,Ye,je]}],saturate:[{saturate:[St,Ye,je]}],sepia:[{sepia:["",St,Ye,je]}],"backdrop-filter":[{"backdrop-filter":["","none",Ye,je]}],"backdrop-blur":[{"backdrop-blur":De()}],"backdrop-brightness":[{"backdrop-brightness":[St,Ye,je]}],"backdrop-contrast":[{"backdrop-contrast":[St,Ye,je]}],"backdrop-grayscale":[{"backdrop-grayscale":["",St,Ye,je]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[St,Ye,je]}],"backdrop-invert":[{"backdrop-invert":["",St,Ye,je]}],"backdrop-opacity":[{"backdrop-opacity":[St,Ye,je]}],"backdrop-saturate":[{"backdrop-saturate":[St,Ye,je]}],"backdrop-sepia":[{"backdrop-sepia":["",St,Ye,je]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":H()}],"border-spacing-x":[{"border-spacing-x":H()}],"border-spacing-y":[{"border-spacing-y":H()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Ye,je]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[St,"initial",Ye,je]}],ease:[{ease:["linear","initial",x,Ye,je]}],delay:[{delay:[St,Ye,je]}],animate:[{animate:["none",U,Ye,je]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,Ye,je]}],"perspective-origin":[{"perspective-origin":L()}],rotate:[{rotate:Fe()}],"rotate-x":[{"rotate-x":Fe()}],"rotate-y":[{"rotate-y":Fe()}],"rotate-z":[{"rotate-z":Fe()}],scale:[{scale:ze()}],"scale-x":[{"scale-x":ze()}],"scale-y":[{"scale-y":ze()}],"scale-z":[{"scale-z":ze()}],"scale-3d":["scale-3d"],skew:[{skew:at()}],"skew-x":[{"skew-x":at()}],"skew-y":[{"skew-y":at()}],transform:[{transform:[Ye,je,"","none","gpu","cpu"]}],"transform-origin":[{origin:L()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ct()}],"translate-x":[{"translate-x":Ct()}],"translate-y":[{"translate-y":Ct()}],"translate-z":[{"translate-z":Ct()}],"translate-none":["translate-none"],accent:[{accent:k()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ye,je]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ye,je]}],fill:[{fill:["none",...k()]}],"stroke-w":[{stroke:[St,pl,jr,ch]}],stroke:[{stroke:["none",...k()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},d1=WE(f1);function La(...a){return d1(EE(a))}function h1({children:a,className:e,gradientSize:n=200,gradientColor:r="#00d4ff",gradientOpacity:o=.15}){const c=J.useRef(null),[u,d]=J.useState({x:0,y:0}),[p,m]=J.useState(0),v=J.useCallback(y=>{if(!c.current)return;const M=c.current.getBoundingClientRect();d({x:y.clientX-M.left,y:y.clientY-M.top})},[]),g=J.useCallback(()=>{m(1)},[]),_=J.useCallback(()=>{m(0)},[]);return G.jsxs("div",{ref:c,onMouseMove:v,onMouseEnter:g,onMouseLeave:_,className:La("relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card transition-all duration-300","hover:border-border-accent hover:bg-bg-card-hover",e),children:[G.jsx("div",{className:"pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",style:{opacity:p,background:`radial-gradient(${n}px circle at ${u.x}px ${u.y}px, ${r}${Math.round(o*255).toString(16).padStart(2,"0")}, transparent 40%)`}}),G.jsx("div",{className:"relative z-10",children:a})]})}const p1=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m1=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),f_=a=>{const e=m1(a);return e.charAt(0).toUpperCase()+e.slice(1)},Wx=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),g1=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var v1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const _1=J.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...d},p)=>J.createElement("svg",{ref:p,...v1,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:Wx("lucide",o),...!c&&!g1(d)&&{"aria-hidden":"true"},...d},[...u.map(([m,v])=>J.createElement(m,v)),...Array.isArray(c)?c:[c]]));const Kn=(a,e)=>{const n=J.forwardRef(({className:r,...o},c)=>J.createElement(_1,{ref:c,iconNode:e,className:Wx(`lucide-${p1(f_(a))}`,`lucide-${a}`,r),...o}));return n.displayName=f_(a),n};const x1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Jp=Kn("arrow-left",x1);const y1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],S1=Kn("check",y1);const b1=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],M1=Kn("chef-hat",b1);const E1=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],T1=Kn("clock",E1);const A1=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],R1=Kn("dna",A1);const w1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],C1=Kn("file-text",w1);const D1=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],U1=Kn("gamepad-2",D1);const N1=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],L1=Kn("mic-off",N1);const O1=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],P1=Kn("mic",O1);const z1=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],B1=Kn("music",z1);const I1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],F1=Kn("palette",I1);const H1=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],G1=Kn("pause",H1);const V1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],k1=Kn("play",V1);const X1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],W1=Kn("rotate-ccw",X1);const q1=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],j1=Kn("smartphone",q1);const Y1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Z1=Kn("sparkles",Y1),K1=[{id:"sensors",title:"Sensor Diagnostics",description:"Test iOS web sensor APIs including motion, orientation, geolocation, and camera.",icon:G.jsx(j1,{className:"w-8 h-8"}),path:"/sensors",status:"available",gradient:"from-accent-cyan/20 to-accent-purple/20",size:"large"},{id:"colors",title:"Color Picker",description:"EyeDropper API demo",icon:G.jsx(F1,{className:"w-6 h-6"}),path:"/colors",status:"coming-soon",gradient:"from-accent-green/20 to-accent-cyan/20",size:"small"},{id:"audio",title:"Audio Visualizer",description:"3D audio visualizations with Galaxy & DNA modes",icon:G.jsx(B1,{className:"w-6 h-6"}),path:"/audio",status:"available",gradient:"from-accent-purple/20 to-accent-red/20",size:"small"},{id:"ribeye",title:"Ribeye Dinner",description:"70s cookbook-style cooking timer for the perfect steak dinner",icon:G.jsx(M1,{className:"w-6 h-6"}),path:"/ribeye",status:"available",gradient:"from-orange-500/20 to-yellow-500/20",size:"small"},{id:"timer",title:"Timer",description:"Precision timing APIs",icon:G.jsx(T1,{className:"w-6 h-6"}),path:"/timer",status:"coming-soon",gradient:"from-accent-yellow/20 to-accent-green/20",size:"small"},{id:"clipboard",title:"Clipboard",description:"Clipboard API demo",icon:G.jsx(C1,{className:"w-6 h-6"}),path:"/clipboard",status:"coming-soon",gradient:"from-accent-cyan/20 to-accent-green/20",size:"small"},{id:"gamepad",title:"Gamepad",description:"Gamepad API tester",icon:G.jsx(U1,{className:"w-6 h-6"}),path:"/gamepad",status:"coming-soon",gradient:"from-accent-red/20 to-accent-yellow/20",size:"small"}];function Q1({app:a,index:e}){const n=a.status==="available",r=G.jsx(h1,{className:La("group cursor-pointer",a.size==="large"?"col-span-2 row-span-2":"",!n&&"opacity-60 cursor-not-allowed"),gradientColor:a.gradient.includes("cyan")?"#00d4ff":"#aa66ff",children:G.jsxs("div",{className:La("p-6 h-full flex flex-col",a.size==="large"?"min-h-[200px]":"min-h-[120px]"),style:{animation:`fadeInUp 0.5s ease-out ${e*.1}s both`},children:[G.jsx("div",{className:La("w-12 h-12 rounded-xl flex items-center justify-center mb-4","bg-gradient-to-br",a.gradient,"text-text-primary","group-hover:scale-110 transition-transform duration-300"),children:a.icon}),G.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors",children:a.title}),G.jsx("p",{className:"text-sm text-text-secondary flex-1",children:a.description}),!n&&G.jsx("span",{className:"mt-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-text-muted/20 text-text-muted w-fit",children:"Coming Soon"}),n&&G.jsx("span",{className:"mt-3 inline-flex items-center text-xs font-medium text-accent-cyan group-hover:translate-x-1 transition-transform",children:"Open →"})]})});return n?G.jsx(mo,{to:a.path,className:"contents",children:r}):r}function J1(){return G.jsx("div",{className:"min-h-screen p-4 md:p-8",children:G.jsxs("div",{className:"max-w-4xl mx-auto",children:[G.jsxs("header",{className:"text-center mb-12",style:{animation:"fadeInUp 0.6s ease-out"},children:[G.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-4",children:"Nikhil's Apps"}),G.jsx("p",{className:"text-text-secondary text-lg",children:"A collection of mini apps and experiments"})]}),G.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:K1.map((a,e)=>G.jsx(Q1,{app:a,index:e},a.id))}),G.jsx("footer",{className:"text-center mt-12 text-text-muted text-sm",style:{animation:"fadeInUp 0.6s ease-out 0.8s both"},children:G.jsx("p",{className:"font-mono",children:"Built with React + Vite + Tailwind"})})]})})}const Te={container:{padding:"16px",paddingBottom:"48px",maxWidth:"600px",margin:"0 auto"},backLink:{display:"inline-flex",alignItems:"center",gap:"8px",color:"var(--color-text-secondary)",textDecoration:"none",fontSize:"0.875rem",marginBottom:"16px",transition:"color 0.2s"},header:{textAlign:"center",marginBottom:"32px",animation:"fadeInUp 0.6s ease-out"},title:{fontSize:"clamp(1.75rem, 6vw, 2.5rem)",fontWeight:700,margin:0,background:"linear-gradient(135deg, #00d4ff, #aa66ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"-0.02em"},subtitle:{color:"var(--color-text-secondary)",fontSize:"0.9rem",marginTop:"8px",fontWeight:300},section:{marginBottom:"24px"},sectionTitle:{fontSize:"0.7rem",fontWeight:600,color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"12px",paddingLeft:"4px"},card:{background:"var(--color-bg-card)",borderRadius:"16px",padding:"20px",border:"1px solid var(--color-border-subtle)",marginBottom:"12px",transition:"all 0.2s ease"},cardHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},cardTitle:{fontSize:"1rem",fontWeight:600,margin:0,display:"flex",alignItems:"center",gap:"10px"},statusBadge:{padding:"4px 10px",borderRadius:"20px",fontSize:"0.7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},dataGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px",marginTop:"12px"},dataItem:{background:"var(--color-bg-secondary)",borderRadius:"8px",padding:"10px",textAlign:"center"},dataLabel:{fontSize:"0.65rem",color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},dataValue:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.85rem",fontWeight:700,color:"var(--color-accent-cyan)"},button:{width:"100%",padding:"14px 20px",borderRadius:"12px",border:"none",background:"linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(170, 102, 255, 0.15))",color:"var(--color-text-primary)",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",transition:"all 0.2s ease",fontFamily:"inherit",marginTop:"8px"},icon:{fontSize:"1.25rem"},description:{fontSize:"0.8rem",color:"var(--color-text-secondary)",lineHeight:1.5},unavailableNote:{fontSize:"0.75rem",color:"var(--color-text-muted)",fontStyle:"italic",marginTop:"8px"}},Ra=a=>{const e={unknown:{bg:"rgba(85, 85, 102, 0.3)",color:"#888"},checking:{bg:"rgba(255, 204, 0, 0.2)",color:"#ffcc00"},available:{bg:"rgba(0, 255, 136, 0.15)",color:"#00ff88"},unavailable:{bg:"rgba(255, 68, 102, 0.15)",color:"#ff4466"},granted:{bg:"rgba(0, 255, 136, 0.15)",color:"#00ff88"},denied:{bg:"rgba(255, 68, 102, 0.15)",color:"#ff4466"},prompt:{bg:"rgba(0, 212, 255, 0.15)",color:"#00d4ff"}};return{...Te.statusBadge,background:e[a].bg,color:e[a].color}},ea=(a,e=1)=>a===null?"—":a.toFixed(e);function $1(){const[a,e]=J.useState("unknown"),[n,r]=J.useState("unknown"),[o,c]=J.useState("unknown"),[u,d]=J.useState("unknown"),[p,m]=J.useState("unknown"),[v,g]=J.useState("unknown"),[_,y]=J.useState("unknown"),[M,A]=J.useState("unknown"),[b,x]=J.useState("unknown"),[U,R]=J.useState({motion:{acceleration:{x:null,y:null,z:null},rotationRate:{alpha:null,beta:null,gamma:null}},orientation:{alpha:null,beta:null,gamma:null,compass:null},geolocation:{latitude:null,longitude:null,accuracy:null},touch:{force:null,touches:0}});J.useEffect(()=>{g("vibrate"in navigator?"available":"unavailable"),y("bluetooth"in navigator?"available":"unavailable"),A("NDEFReader"in window?"available":"unavailable"),x("getBattery"in navigator?"available":"unavailable"),m("ontouchstart"in window?"available":"unavailable"),"DeviceMotionEvent"in window?e("prompt"):e("unavailable"),"DeviceOrientationEvent"in window?r("prompt"):r("unavailable"),"geolocation"in navigator?c("prompt"):c("unavailable"),"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices?d("prompt"):d("unavailable")},[]),J.useEffect(()=>{const T=X=>{const ee=X.touches[0];R(ae=>({...ae,touch:{force:ee?.force??null,touches:X.touches.length}}))},D=()=>{R(X=>({...X,touch:{force:null,touches:0}}))};return window.addEventListener("touchstart",T,{passive:!0}),window.addEventListener("touchmove",T,{passive:!0}),window.addEventListener("touchend",D,{passive:!0}),()=>{window.removeEventListener("touchstart",T),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",D)}},[]);const N=J.useCallback(async()=>{e("checking");try{typeof DeviceMotionEvent.requestPermission=="function"?await DeviceMotionEvent.requestPermission()==="granted"?(e("granted"),window.addEventListener("devicemotion",D=>{R(X=>({...X,motion:{acceleration:{x:D.acceleration?.x??null,y:D.acceleration?.y??null,z:D.acceleration?.z??null},rotationRate:{alpha:D.rotationRate?.alpha??null,beta:D.rotationRate?.beta??null,gamma:D.rotationRate?.gamma??null}}}))})):e("denied"):(e("granted"),window.addEventListener("devicemotion",T=>{R(D=>({...D,motion:{acceleration:{x:T.acceleration?.x??null,y:T.acceleration?.y??null,z:T.acceleration?.z??null},rotationRate:{alpha:T.rotationRate?.alpha??null,beta:T.rotationRate?.beta??null,gamma:T.rotationRate?.gamma??null}}}))}))}catch{e("denied")}},[]),L=J.useCallback(async()=>{r("checking");try{typeof DeviceOrientationEvent.requestPermission=="function"?await DeviceOrientationEvent.requestPermission()==="granted"?(r("granted"),window.addEventListener("deviceorientation",D=>{R(X=>({...X,orientation:{alpha:D.alpha,beta:D.beta,gamma:D.gamma,compass:D.webkitCompassHeading??null}}))})):r("denied"):(r("granted"),window.addEventListener("deviceorientation",T=>{R(D=>({...D,orientation:{alpha:T.alpha,beta:T.beta,gamma:T.gamma,compass:T.webkitCompassHeading??null}}))}))}catch{r("denied")}},[]),I=J.useCallback(()=>{c("checking"),navigator.geolocation.getCurrentPosition(T=>{c("granted"),R(D=>({...D,geolocation:{latitude:T.coords.latitude,longitude:T.coords.longitude,accuracy:T.coords.accuracy}}))},()=>{c("denied")},{enableHighAccuracy:!0})},[]),z=J.useCallback(async()=>{d("checking");try{const T=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});d("granted"),T.getTracks().forEach(D=>D.stop())}catch{d("denied")}},[]),H=T=>({animation:`fadeInUp 0.5s ease-out ${T*.08}s both`});return G.jsxs("div",{style:Te.container,children:[G.jsxs(mo,{to:"/",style:Te.backLink,className:"hover:text-accent-cyan",children:[G.jsx(Jp,{className:"w-4 h-4"}),"Back to Home"]}),G.jsxs("header",{style:Te.header,children:[G.jsx("h1",{style:Te.title,children:"Sensor Diagnostics"}),G.jsx("p",{style:Te.subtitle,children:"iOS Web API Compatibility Test"})]}),G.jsxs("section",{style:{...Te.section,...H(0)},children:[G.jsx("h2",{style:Te.sectionTitle,children:"Requires Permission"}),G.jsxs("div",{style:{...Te.card,...H(1)},children:[G.jsxs("div",{style:Te.cardHeader,children:[G.jsxs("h3",{style:Te.cardTitle,children:[G.jsx("span",{style:Te.icon,children:"📱"}),"Motion (Accelerometer)"]}),G.jsx("span",{style:Ra(a),children:a})]}),G.jsx("p",{style:Te.description,children:"Device acceleration and rotation rate from gyroscope."}),a==="granted"&&G.jsxs("div",{style:Te.dataGrid,children:[G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Accel X"}),G.jsx("div",{style:Te.dataValue,children:ea(U.motion.acceleration.x)})]}),G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Accel Y"}),G.jsx("div",{style:Te.dataValue,children:ea(U.motion.acceleration.y)})]}),G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Accel Z"}),G.jsx("div",{style:Te.dataValue,children:ea(U.motion.acceleration.z)})]})]}),(a==="prompt"||a==="unknown")&&G.jsx("button",{style:Te.button,onClick:N,children:"Request Permission"})]}),G.jsxs("div",{style:{...Te.card,...H(2)},children:[G.jsxs("div",{style:Te.cardHeader,children:[G.jsxs("h3",{style:Te.cardTitle,children:[G.jsx("span",{style:Te.icon,children:"🧭"}),"Orientation & Compass"]}),G.jsx("span",{style:Ra(n),children:n})]}),G.jsx("p",{style:Te.description,children:"Device orientation angles and compass heading."}),n==="granted"&&G.jsxs("div",{style:Te.dataGrid,children:[G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Alpha"}),G.jsxs("div",{style:Te.dataValue,children:[ea(U.orientation.alpha),"°"]})]}),G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Beta"}),G.jsxs("div",{style:Te.dataValue,children:[ea(U.orientation.beta),"°"]})]}),G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Compass"}),G.jsxs("div",{style:Te.dataValue,children:[ea(U.orientation.compass),"°"]})]})]}),(n==="prompt"||n==="unknown")&&G.jsx("button",{style:Te.button,onClick:L,children:"Request Permission"})]}),G.jsxs("div",{style:{...Te.card,...H(3)},children:[G.jsxs("div",{style:Te.cardHeader,children:[G.jsxs("h3",{style:Te.cardTitle,children:[G.jsx("span",{style:Te.icon,children:"📍"}),"Geolocation"]}),G.jsx("span",{style:Ra(o),children:o})]}),G.jsx("p",{style:Te.description,children:"GPS coordinates and location accuracy."}),o==="granted"&&G.jsxs("div",{style:Te.dataGrid,children:[G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Lat"}),G.jsx("div",{style:Te.dataValue,children:ea(U.geolocation.latitude,4)})]}),G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Lng"}),G.jsx("div",{style:Te.dataValue,children:ea(U.geolocation.longitude,4)})]}),G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Accuracy"}),G.jsxs("div",{style:Te.dataValue,children:[ea(U.geolocation.accuracy,0),"m"]})]})]}),(o==="prompt"||o==="unknown")&&G.jsx("button",{style:Te.button,onClick:I,children:"Request Permission"})]}),G.jsxs("div",{style:{...Te.card,...H(4)},children:[G.jsxs("div",{style:Te.cardHeader,children:[G.jsxs("h3",{style:Te.cardTitle,children:[G.jsx("span",{style:Te.icon,children:"📷"}),"Camera & Microphone"]}),G.jsx("span",{style:Ra(u),children:u})]}),G.jsx("p",{style:Te.description,children:"WebRTC getUserMedia for video and audio capture."}),(u==="prompt"||u==="unknown")&&G.jsx("button",{style:Te.button,onClick:z,children:"Request Permission"})]})]}),G.jsxs("section",{style:{...Te.section,...H(5)},children:[G.jsx("h2",{style:Te.sectionTitle,children:"Always Available"}),G.jsxs("div",{style:{...Te.card,...H(6)},children:[G.jsxs("div",{style:Te.cardHeader,children:[G.jsxs("h3",{style:Te.cardTitle,children:[G.jsx("span",{style:Te.icon,children:"👆"}),"Touch & Force"]}),G.jsx("span",{style:Ra(p),children:p})]}),G.jsx("p",{style:Te.description,children:"Touch events with 3D Touch / Haptic Touch pressure."}),p==="available"&&G.jsxs("div",{style:Te.dataGrid,children:[G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Touches"}),G.jsx("div",{style:Te.dataValue,children:U.touch.touches})]}),G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Force"}),G.jsx("div",{style:Te.dataValue,children:ea(U.touch.force,2)})]}),G.jsxs("div",{style:Te.dataItem,children:[G.jsx("div",{style:Te.dataLabel,children:"Status"}),G.jsx("div",{style:Te.dataValue,children:U.touch.touches>0?"Active":"Idle"})]})]}),G.jsx("p",{style:Te.unavailableNote,children:"Touch anywhere to see live data"})]})]}),G.jsxs("section",{style:{...Te.section,...H(7)},children:[G.jsx("h2",{style:Te.sectionTitle,children:"Not Supported on iOS Safari"}),G.jsxs("div",{style:{...Te.card,opacity:.7,...H(8)},children:[G.jsxs("div",{style:Te.cardHeader,children:[G.jsxs("h3",{style:Te.cardTitle,children:[G.jsx("span",{style:Te.icon,children:"📳"}),"Vibration API"]}),G.jsx("span",{style:Ra(v),children:v})]}),G.jsx("p",{style:Te.description,children:"Haptic feedback through navigator.vibrate()"}),G.jsx("p",{style:Te.unavailableNote,children:"Apple declined due to privacy concerns"})]}),G.jsxs("div",{style:{...Te.card,opacity:.7,...H(9)},children:[G.jsxs("div",{style:Te.cardHeader,children:[G.jsxs("h3",{style:Te.cardTitle,children:[G.jsx("span",{style:Te.icon,children:"📶"}),"Web Bluetooth"]}),G.jsx("span",{style:Ra(_),children:_})]}),G.jsx("p",{style:Te.description,children:"Connect to nearby Bluetooth devices"}),G.jsx("p",{style:Te.unavailableNote,children:"Apple declined due to fingerprinting risks"})]}),G.jsxs("div",{style:{...Te.card,opacity:.7,...H(10)},children:[G.jsxs("div",{style:Te.cardHeader,children:[G.jsxs("h3",{style:Te.cardTitle,children:[G.jsx("span",{style:Te.icon,children:"📡"}),"Web NFC"]}),G.jsx("span",{style:Ra(M),children:M})]}),G.jsx("p",{style:Te.description,children:"Read/write NFC tags"}),G.jsx("p",{style:Te.unavailableNote,children:"Not exposed to web apps on iOS"})]}),G.jsxs("div",{style:{...Te.card,opacity:.7,...H(11)},children:[G.jsxs("div",{style:Te.cardHeader,children:[G.jsxs("h3",{style:Te.cardTitle,children:[G.jsx("span",{style:Te.icon,children:"🔋"}),"Battery Status"]}),G.jsx("span",{style:Ra(b),children:b})]}),G.jsx("p",{style:Te.description,children:"Battery level and charging status"}),G.jsx("p",{style:Te.unavailableNote,children:"Apple declined due to fingerprinting risks"})]})]}),G.jsxs("footer",{style:{textAlign:"center",marginTop:"40px",color:"var(--color-text-muted)",fontSize:"0.75rem",...H(12)},children:[G.jsx("p",{children:"Built for iOS Safari sensor testing"}),G.jsx("p",{style:{fontFamily:"'JetBrains Mono', monospace",marginTop:"4px"},children:new Date().toLocaleDateString()})]})]})}const Ol="182",eT=0,d_=1,tT=2,Ru=1,nT=2,Ml=3,Ia=0,Ln=1,ui=2,ei=0,ro=1,Pu=2,h_=3,p_=4,iT=5,ts=100,aT=101,rT=102,sT=103,oT=104,lT=200,cT=201,uT=202,fT=203,Zh=204,Kh=205,dT=206,hT=207,pT=208,mT=209,gT=210,vT=211,_T=212,xT=213,yT=214,Qh=0,zu=1,Jh=2,oo=3,$h=4,ep=5,tp=6,np=7,qx=0,ST=1,bT=2,oa=0,jx=1,Yx=2,Zx=3,$p=4,Kx=5,Qx=6,Jx=7,$x=300,as=301,lo=302,ip=303,ap=304,Xu=306,rp=1e3,Oa=1001,sp=1002,Xn=1003,MT=1004,tu=1005,Mn=1006,uh=1007,is=1008,wn=1009,ey=1010,ty=1011,Cl=1012,em=1013,ji=1014,aa=1015,Fa=1016,tm=1017,nm=1018,co=1020,ny=35902,iy=35899,ay=1021,ry=1022,qi=1023,Ha=1026,Tr=1027,sy=1028,im=1029,uo=1030,am=1031,rm=1033,wu=33776,Cu=33777,Du=33778,Uu=33779,op=35840,lp=35841,cp=35842,up=35843,fp=36196,dp=37492,hp=37496,pp=37488,mp=37489,gp=37490,vp=37491,_p=37808,xp=37809,yp=37810,Sp=37811,bp=37812,Mp=37813,Ep=37814,Tp=37815,Ap=37816,Rp=37817,wp=37818,Cp=37819,Dp=37820,Up=37821,Np=36492,Lp=36494,Op=36495,Pp=36283,zp=36284,Bp=36285,Ip=36286,Pl=3200,ET=0,TT=1,ia="",$t="srgb",wr="srgb-linear",Bu="linear",Zt="srgb",Ws=7680,m_=519,AT=512,RT=513,wT=514,sm=515,CT=516,DT=517,om=518,UT=519,g_=35044,v_="300 es",ra=2e3,Iu=2001;function oy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Fu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function NT(){const a=Fu("canvas");return a.style.display="block",a}const __={};function x_(...a){const e="THREE."+a.shift();console.log(e,...a)}function pt(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Bt(...a){const e="THREE."+a.shift();console.error(e,...a)}function Dl(...a){const e=a.join(" ");e in __||(__[e]=!0,pt(...a))}function LT(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class ka{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=Math.PI/180,Fp=180/Math.PI;function zl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yn[a&255]+Yn[a>>8&255]+Yn[a>>16&255]+Yn[a>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[n&63|128]+Yn[n>>8&255]+"-"+Yn[n>>16&255]+Yn[n>>24&255]+Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]).toLowerCase()}function Et(a,e,n){return Math.max(e,Math.min(n,a))}function OT(a,e){return(a%e+e)%e}function dh(a,e,n){return(1-n)*a+n*e}function ml(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ci(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bl{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,d){let p=r[o+0],m=r[o+1],v=r[o+2],g=r[o+3],_=c[u+0],y=c[u+1],M=c[u+2],A=c[u+3];if(d<=0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g;return}if(d>=1){e[n+0]=_,e[n+1]=y,e[n+2]=M,e[n+3]=A;return}if(g!==A||p!==_||m!==y||v!==M){let b=p*_+m*y+v*M+g*A;b<0&&(_=-_,y=-y,M=-M,A=-A,b=-b);let x=1-d;if(b<.9995){const U=Math.acos(b),R=Math.sin(U);x=Math.sin(x*U)/R,d=Math.sin(d*U)/R,p=p*x+_*d,m=m*x+y*d,v=v*x+M*d,g=g*x+A*d}else{p=p*x+_*d,m=m*x+y*d,v=v*x+M*d,g=g*x+A*d;const U=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=U,m*=U,v*=U,g*=U}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,c,u){const d=r[o],p=r[o+1],m=r[o+2],v=r[o+3],g=c[u],_=c[u+1],y=c[u+2],M=c[u+3];return e[n]=d*M+v*g+p*y-m*_,e[n+1]=p*M+v*_+m*g-d*y,e[n+2]=m*M+v*y+d*_-p*g,e[n+3]=v*M-d*g-p*_-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(o/2),g=d(c/2),_=p(r/2),y=p(o/2),M=p(c/2);switch(u){case"XYZ":this._x=_*v*g+m*y*M,this._y=m*y*g-_*v*M,this._z=m*v*M+_*y*g,this._w=m*v*g-_*y*M;break;case"YXZ":this._x=_*v*g+m*y*M,this._y=m*y*g-_*v*M,this._z=m*v*M-_*y*g,this._w=m*v*g+_*y*M;break;case"ZXY":this._x=_*v*g-m*y*M,this._y=m*y*g+_*v*M,this._z=m*v*M+_*y*g,this._w=m*v*g-_*y*M;break;case"ZYX":this._x=_*v*g-m*y*M,this._y=m*y*g+_*v*M,this._z=m*v*M-_*y*g,this._w=m*v*g+_*y*M;break;case"YZX":this._x=_*v*g+m*y*M,this._y=m*y*g+_*v*M,this._z=m*v*M-_*y*g,this._w=m*v*g-_*y*M;break;case"XZY":this._x=_*v*g-m*y*M,this._y=m*y*g-_*v*M,this._z=m*v*M+_*y*g,this._w=m*v*g+_*y*M;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],v=n[6],g=n[10],_=r+d+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(v-p)*y,this._y=(c-m)*y,this._z=(u-o)*y}else if(r>d&&r>g){const y=2*Math.sqrt(1+r-d-g);this._w=(v-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+m)/y}else if(d>g){const y=2*Math.sqrt(1+d-r-g);this._w=(c-m)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+g-r-d);this._w=(u-o)/y,this._x=(c+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+u*d+o*m-c*p,this._y=o*v+u*p+c*d-r*m,this._z=c*v+u*m+r*p-o*d,this._w=u*v-r*d-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,n=Math.sin(n*m)/v,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(y_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(y_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),v=2*(d*n-c*o),g=2*(c*r-u*n);return this.x=n+p*m+u*g-d*v,this.y=r+p*v+d*m-c*g,this.z=o+p*g+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new K,y_=new Bl;class xt{constructor(e,n,r,o,c,u,d,p,m){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m)}set(e,n,r,o,c,u,d,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],v=r[4],g=r[7],_=r[2],y=r[5],M=r[8],A=o[0],b=o[3],x=o[6],U=o[1],R=o[4],N=o[7],L=o[2],I=o[5],z=o[8];return c[0]=u*A+d*U+p*L,c[3]=u*b+d*R+p*I,c[6]=u*x+d*N+p*z,c[1]=m*A+v*U+g*L,c[4]=m*b+v*R+g*I,c[7]=m*x+v*N+g*z,c[2]=_*A+y*U+M*L,c[5]=_*b+y*R+M*I,c[8]=_*x+y*N+M*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*u*v-n*d*m-r*c*v+r*d*p+o*c*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=v*u-d*m,_=d*p-v*c,y=m*c-u*p,M=n*g+r*_+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=g*A,e[1]=(o*m-v*r)*A,e[2]=(d*r-o*u)*A,e[3]=_*A,e[4]=(v*n-o*p)*A,e[5]=(o*c-d*n)*A,e[6]=y*A,e[7]=(r*p-m*n)*A,e[8]=(u*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(ph.makeScale(e,n)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,n){return this.premultiply(ph.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new xt,S_=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PT(){const a={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Zt&&(o.r=za(o.r),o.g=za(o.g),o.b=za(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Zt&&(o.r=so(o.r),o.g=so(o.g),o.b=so(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ia?Bu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Dl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Dl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[wr]:{primaries:e,whitePoint:r,transfer:Bu,toXYZ:S_,fromXYZ:b_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:r,transfer:Zt,toXYZ:S_,fromXYZ:b_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),a}const Lt=PT();function za(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function so(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let qs;class zT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{qs===void 0&&(qs=Fu("canvas")),qs.width=e.width,qs.height=e.height;const o=qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=qs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=za(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(za(n[r]/255)*255):n[r]=za(n[r]);return{data:n,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BT=0;class lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=zl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(mh(o[u].image)):c.push(mh(o[u]))}else c=mh(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function mh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?zT.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let IT=0;const gh=new K;class Wn extends ka{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,r=Oa,o=Oa,c=Mn,u=is,d=qi,p=wn,m=Wn.DEFAULT_ANISOTROPY,v=ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=zl(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){pt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rp:e.x=e.x-Math.floor(e.x);break;case Oa:e.x=e.x<0?0:1;break;case sp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rp:e.y=e.y-Math.floor(e.y);break;case Oa:e.y=e.y<0?0:1;break;case sp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=$x;Wn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,n=0,r=0,o=1){cn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],v=p[4],g=p[8],_=p[1],y=p[5],M=p[9],A=p[2],b=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(g-A)<.01&&Math.abs(M-b)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+A)<.1&&Math.abs(M+b)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(m+1)/2,N=(y+1)/2,L=(x+1)/2,I=(v+_)/4,z=(g+A)/4,H=(M+b)/4;return R>N&&R>L?R<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(R),o=I/r,c=z/r):N>L?N<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(N),r=I/o,c=H/o):L<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(L),r=z/c,o=H/c),this.set(r,o,c,n),this}let U=Math.sqrt((b-M)*(b-M)+(g-A)*(g-A)+(_-v)*(_-v));return Math.abs(U)<.001&&(U=1),this.x=(b-M)/U,this.y=(g-A)/U,this.z=(_-v)/U,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FT extends ka{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new cn(0,0,e,n),this.scissorTest=!1,this.viewport=new cn(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Wn(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new lm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends FT{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class ly extends Wn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HT extends Wn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Vi):Vi.fromBufferAttribute(c,u),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nu.copy(r.boundingBox)),nu.applyMatrix4(e.matrixWorld),this.union(nu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gl),iu.subVectors(this.max,gl),js.subVectors(e.a,gl),Ys.subVectors(e.b,gl),Zs.subVectors(e.c,gl),_r.subVectors(Ys,js),xr.subVectors(Zs,Ys),Yr.subVectors(js,Zs);let n=[0,-_r.z,_r.y,0,-xr.z,xr.y,0,-Yr.z,Yr.y,_r.z,0,-_r.x,xr.z,0,-xr.x,Yr.z,0,-Yr.x,-_r.y,_r.x,0,-xr.y,xr.x,0,-Yr.y,Yr.x,0];return!vh(n,js,Ys,Zs,iu)||(n=[1,0,0,0,1,0,0,0,1],!vh(n,js,Ys,Zs,iu))?!1:(au.crossVectors(_r,xr),n=[au.x,au.y,au.z],vh(n,js,Ys,Zs,iu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new K,new K,new K,new K,new K,new K,new K,new K],Vi=new K,nu=new Il,js=new K,Ys=new K,Zs=new K,_r=new K,xr=new K,Yr=new K,gl=new K,iu=new K,au=new K,Zr=new K;function vh(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Zr.fromArray(a,c);const d=o.x*Math.abs(Zr.x)+o.y*Math.abs(Zr.y)+o.z*Math.abs(Zr.z),p=e.dot(Zr),m=n.dot(Zr),v=r.dot(Zr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const GT=new Il,vl=new K,_h=new K;class Wu{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):GT.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const n=vl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(vl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(_h)),this.expandByPoint(vl.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ca=new K,xh=new K,ru=new K,yr=new K,yh=new K,su=new K,Sh=new K;class cy{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ca.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,n),Ca.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){xh.copy(e).add(n).multiplyScalar(.5),ru.copy(n).sub(e).normalize(),yr.copy(this.origin).sub(xh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(ru),d=yr.dot(this.direction),p=-yr.dot(ru),m=yr.lengthSq(),v=Math.abs(1-u*u);let g,_,y,M;if(v>0)if(g=u*p-d,_=u*d-p,M=c*v,g>=0)if(_>=-M)if(_<=M){const A=1/v;g*=A,_*=A,y=g*(g+u*_+2*d)+_*(u*g+_+2*p)+m}else _=c,g=Math.max(0,-(u*_+d)),y=-g*g+_*(_+2*p)+m;else _=-c,g=Math.max(0,-(u*_+d)),y=-g*g+_*(_+2*p)+m;else _<=-M?(g=Math.max(0,-(-u*c+d)),_=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+_*(_+2*p)+m):_<=M?(g=0,_=Math.min(Math.max(-c,-p),c),y=_*(_+2*p)+m):(g=Math.max(0,-(u*c+d)),_=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+_*(_+2*p)+m);else _=u>0?-c:c,g=Math.max(0,-(u*_+d)),y=-g*g+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(xh).addScaledVector(ru,_),y}intersectSphere(e,n){Ca.subVectors(e.center,this.origin);const r=Ca.dot(this.direction),o=Ca.dot(Ca)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),v>=0?(c=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),g>=0?(d=(e.min.z-_.z)*g,p=(e.max.z-_.z)*g):(d=(e.max.z-_.z)*g,p=(e.min.z-_.z)*g),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,n,r,o,c){yh.subVectors(n,e),su.subVectors(r,e),Sh.crossVectors(yh,su);let u=this.direction.dot(Sh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;yr.subVectors(this.origin,e);const p=d*this.direction.dot(su.crossVectors(yr,su));if(p<0)return null;const m=d*this.direction.dot(yh.cross(yr));if(m<0||p+m>u)return null;const v=-d*yr.dot(Sh);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,n,r,o,c,u,d,p,m,v,g,_,y,M,A,b){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m,v,g,_,y,M,A,b)}set(e,n,r,o,c,u,d,p,m,v,g,_,y,M,A,b){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=d,x[13]=p,x[2]=m,x[6]=v,x[10]=g,x[14]=_,x[3]=y,x[7]=M,x[11]=A,x[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ks.setFromMatrixColumn(e,0).length(),c=1/Ks.setFromMatrixColumn(e,1).length(),u=1/Ks.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const _=u*v,y=u*g,M=d*v,A=d*g;n[0]=p*v,n[4]=-p*g,n[8]=m,n[1]=y+M*m,n[5]=_-A*m,n[9]=-d*p,n[2]=A-_*m,n[6]=M+y*m,n[10]=u*p}else if(e.order==="YXZ"){const _=p*v,y=p*g,M=m*v,A=m*g;n[0]=_+A*d,n[4]=M*d-y,n[8]=u*m,n[1]=u*g,n[5]=u*v,n[9]=-d,n[2]=y*d-M,n[6]=A+_*d,n[10]=u*p}else if(e.order==="ZXY"){const _=p*v,y=p*g,M=m*v,A=m*g;n[0]=_-A*d,n[4]=-u*g,n[8]=M+y*d,n[1]=y+M*d,n[5]=u*v,n[9]=A-_*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const _=u*v,y=u*g,M=d*v,A=d*g;n[0]=p*v,n[4]=M*m-y,n[8]=_*m+A,n[1]=p*g,n[5]=A*m+_,n[9]=y*m-M,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const _=u*p,y=u*m,M=d*p,A=d*m;n[0]=p*v,n[4]=A-_*g,n[8]=M*g+y,n[1]=g,n[5]=u*v,n[9]=-d*v,n[2]=-m*v,n[6]=y*g+M,n[10]=_-A*g}else if(e.order==="XZY"){const _=u*p,y=u*m,M=d*p,A=d*m;n[0]=p*v,n[4]=-g,n[8]=m*v,n[1]=_*g+A,n[5]=u*v,n[9]=y*g-M,n[2]=M*g-y,n[6]=d*v,n[10]=A*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VT,e,kT)}lookAt(e,n,r){const o=this.elements;return yi.subVectors(e,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Sr.crossVectors(r,yi),Sr.lengthSq()===0&&(Math.abs(r.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Sr.crossVectors(r,yi)),Sr.normalize(),ou.crossVectors(yi,Sr),o[0]=Sr.x,o[4]=ou.x,o[8]=yi.x,o[1]=Sr.y,o[5]=ou.y,o[9]=yi.y,o[2]=Sr.z,o[6]=ou.z,o[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],v=r[1],g=r[5],_=r[9],y=r[13],M=r[2],A=r[6],b=r[10],x=r[14],U=r[3],R=r[7],N=r[11],L=r[15],I=o[0],z=o[4],H=o[8],T=o[12],D=o[1],X=o[5],ee=o[9],ae=o[13],he=o[2],$=o[6],O=o[10],F=o[14],k=o[3],xe=o[7],ge=o[11],P=o[15];return c[0]=u*I+d*D+p*he+m*k,c[4]=u*z+d*X+p*$+m*xe,c[8]=u*H+d*ee+p*O+m*ge,c[12]=u*T+d*ae+p*F+m*P,c[1]=v*I+g*D+_*he+y*k,c[5]=v*z+g*X+_*$+y*xe,c[9]=v*H+g*ee+_*O+y*ge,c[13]=v*T+g*ae+_*F+y*P,c[2]=M*I+A*D+b*he+x*k,c[6]=M*z+A*X+b*$+x*xe,c[10]=M*H+A*ee+b*O+x*ge,c[14]=M*T+A*ae+b*F+x*P,c[3]=U*I+R*D+N*he+L*k,c[7]=U*z+R*X+N*$+L*xe,c[11]=U*H+R*ee+N*O+L*ge,c[15]=U*T+R*ae+N*F+L*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],v=e[2],g=e[6],_=e[10],y=e[14],M=e[3],A=e[7],b=e[11],x=e[15],U=p*y-m*_,R=d*y-m*g,N=d*_-p*g,L=u*y-m*v,I=u*_-p*v,z=u*g-d*v;return n*(A*U-b*R+x*N)-r*(M*U-b*L+x*I)+o*(M*R-A*L+x*z)-c*(M*N-A*I+b*z)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=e[9],_=e[10],y=e[11],M=e[12],A=e[13],b=e[14],x=e[15],U=g*b*m-A*_*m+A*p*y-d*b*y-g*p*x+d*_*x,R=M*_*m-v*b*m-M*p*y+u*b*y+v*p*x-u*_*x,N=v*A*m-M*g*m+M*d*y-u*A*y-v*d*x+u*g*x,L=M*g*p-v*A*p-M*d*_+u*A*_+v*d*b-u*g*b,I=n*U+r*R+o*N+c*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=U*z,e[1]=(A*_*c-g*b*c-A*o*y+r*b*y+g*o*x-r*_*x)*z,e[2]=(d*b*c-A*p*c+A*o*m-r*b*m-d*o*x+r*p*x)*z,e[3]=(g*p*c-d*_*c-g*o*m+r*_*m+d*o*y-r*p*y)*z,e[4]=R*z,e[5]=(v*b*c-M*_*c+M*o*y-n*b*y-v*o*x+n*_*x)*z,e[6]=(M*p*c-u*b*c-M*o*m+n*b*m+u*o*x-n*p*x)*z,e[7]=(u*_*c-v*p*c+v*o*m-n*_*m-u*o*y+n*p*y)*z,e[8]=N*z,e[9]=(M*g*c-v*A*c-M*r*y+n*A*y+v*r*x-n*g*x)*z,e[10]=(u*A*c-M*d*c+M*r*m-n*A*m-u*r*x+n*d*x)*z,e[11]=(v*d*c-u*g*c-v*r*m+n*g*m+u*r*y-n*d*y)*z,e[12]=L*z,e[13]=(v*A*o-M*g*o+M*r*_-n*A*_-v*r*b+n*g*b)*z,e[14]=(M*d*o-u*A*o-M*r*p+n*A*p+u*r*b-n*d*b)*z,e[15]=(u*g*o-v*d*o+v*r*p-n*g*p-u*r*_+n*d*_)*z,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,v=c*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+r,v*p-o*u,0,m*p-o*d,v*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,v=u+u,g=d+d,_=c*m,y=c*v,M=c*g,A=u*v,b=u*g,x=d*g,U=p*m,R=p*v,N=p*g,L=r.x,I=r.y,z=r.z;return o[0]=(1-(A+x))*L,o[1]=(y+N)*L,o[2]=(M-R)*L,o[3]=0,o[4]=(y-N)*I,o[5]=(1-(_+x))*I,o[6]=(b+U)*I,o[7]=0,o[8]=(M+R)*z,o[9]=(b-U)*z,o[10]=(1-(_+A))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let c=Ks.set(o[0],o[1],o[2]).length();const u=Ks.set(o[4],o[5],o[6]).length(),d=Ks.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),ki.copy(this);const m=1/c,v=1/u,g=1/d;return ki.elements[0]*=m,ki.elements[1]*=m,ki.elements[2]*=m,ki.elements[4]*=v,ki.elements[5]*=v,ki.elements[6]*=v,ki.elements[8]*=g,ki.elements[9]*=g,ki.elements[10]*=g,n.setFromRotationMatrix(ki),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,o,c,u,d=ra,p=!1){const m=this.elements,v=2*c/(n-e),g=2*c/(r-o),_=(n+e)/(n-e),y=(r+o)/(r-o);let M,A;if(p)M=c/(u-c),A=u*c/(u-c);else if(d===ra)M=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===Iu)M=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,u,d=ra,p=!1){const m=this.elements,v=2/(n-e),g=2/(r-o),_=-(n+e)/(n-e),y=-(r+o)/(r-o);let M,A;if(p)M=1/(u-c),A=u/(u-c);else if(d===ra)M=-2/(u-c),A=-(u+c)/(u-c);else if(d===Iu)M=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=g,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ks=new K,ki=new pn,VT=new K(0,0,0),kT=new K(1,1,1),Sr=new K,ou=new K,yi=new K,M_=new pn,E_=new Bl;class Ga{constructor(e=0,n=0,r=0,o=Ga.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],m=o[5],v=o[9],g=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return M_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return E_.setFromEuler(this),this.setFromQuaternion(E_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ga.DEFAULT_ORDER="XYZ";class uy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XT=0;const T_=new K,Qs=new Bl,Da=new pn,lu=new K,_l=new K,WT=new K,qT=new Bl,A_=new K(1,0,0),R_=new K(0,1,0),w_=new K(0,0,1),C_={type:"added"},jT={type:"removed"},Js={type:"childadded",child:null},bh={type:"childremoved",child:null};class fi extends ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fi.DEFAULT_UP.clone();const e=new K,n=new Ga,r=new Bl,o=new K(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new xt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=fi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qs.setFromAxisAngle(e,n),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,n){return Qs.setFromAxisAngle(e,n),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(A_,e)}rotateY(e){return this.rotateOnAxis(R_,e)}rotateZ(e){return this.rotateOnAxis(w_,e)}translateOnAxis(e,n){return T_.copy(e).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(A_,e)}translateY(e){return this.translateOnAxis(R_,e)}translateZ(e){return this.translateOnAxis(w_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?lu.copy(e):lu.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(_l,lu,this.up):Da.lookAt(lu,_l,this.up),this.quaternion.setFromRotationMatrix(Da),o&&(Da.extractRotation(o.matrixWorld),Qs.setFromRotationMatrix(Da),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C_),Js.child=e,this.dispatchEvent(Js),Js.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jT),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Da.multiply(e.parent.matrixWorld)),e.applyMatrix4(Da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C_),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e,WT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,qT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),g=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}fi.DEFAULT_UP=new K(0,1,0);fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new K,Ua=new K,Mh=new K,Na=new K,$s=new K,eo=new K,D_=new K,Eh=new K,Th=new K,Ah=new K,Rh=new cn,wh=new cn,Ch=new cn;class Wi{constructor(e=new K,n=new K,r=new K){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Xi.subVectors(e,n),o.cross(Xi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Xi.subVectors(o,n),Ua.subVectors(r,n),Mh.subVectors(e,n);const u=Xi.dot(Xi),d=Xi.dot(Ua),p=Xi.dot(Mh),m=Ua.dot(Ua),v=Ua.dot(Mh),g=u*m-d*d;if(g===0)return c.set(0,0,0),null;const _=1/g,y=(m*p-d*v)*_,M=(u*v-d*p)*_;return c.set(1-y-M,M,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(e,n,r,o,c,u,d,p){return this.getBarycoord(e,n,r,o,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Na.x),p.addScaledVector(u,Na.y),p.addScaledVector(d,Na.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return Rh.setScalar(0),wh.setScalar(0),Ch.setScalar(0),Rh.fromBufferAttribute(e,n),wh.fromBufferAttribute(e,r),Ch.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Rh,c.x),u.addScaledVector(wh,c.y),u.addScaledVector(Ch,c.z),u}static isFrontFacing(e,n,r,o){return Xi.subVectors(r,n),Ua.subVectors(e,n),Xi.cross(Ua).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Xi.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Wi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,d;$s.subVectors(o,r),eo.subVectors(c,r),Eh.subVectors(e,r);const p=$s.dot(Eh),m=eo.dot(Eh);if(p<=0&&m<=0)return n.copy(r);Th.subVectors(e,o);const v=$s.dot(Th),g=eo.dot(Th);if(v>=0&&g<=v)return n.copy(o);const _=p*g-v*m;if(_<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector($s,u);Ah.subVectors(e,c);const y=$s.dot(Ah),M=eo.dot(Ah);if(M>=0&&y<=M)return n.copy(c);const A=y*m-p*M;if(A<=0&&m>=0&&M<=0)return d=m/(m-M),n.copy(r).addScaledVector(eo,d);const b=v*M-y*g;if(b<=0&&g-v>=0&&y-M>=0)return D_.subVectors(c,o),d=(g-v)/(g-v+(y-M)),n.copy(o).addScaledVector(D_,d);const x=1/(b+A+_);return u=A*x,d=_*x,n.copy(r).addScaledVector($s,u).addScaledVector(eo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},cu={h:0,s:0,l:0};function Dh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Lt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Lt.workingColorSpace){if(e=OT(e,1),n=Et(n,0,1),r=Et(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Dh(u,c,e+1/3),this.g=Dh(u,c,e),this.b=Dh(u,c,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,n=$t){function r(c){c!==void 0&&parseFloat(c)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$t){const r=fy[e.toLowerCase()];return r!==void 0?this.setHex(r,n):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Lt.workingToColorSpace(Zn.copy(this),e),Math.round(Et(Zn.r*255,0,255))*65536+Math.round(Et(Zn.g*255,0,255))*256+Math.round(Et(Zn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.workingToColorSpace(Zn.copy(this),n);const r=Zn.r,o=Zn.g,c=Zn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let p,m;const v=(d+u)/2;if(d===u)p=0,m=0;else{const g=u-d;switch(m=v<=.5?g/(u+d):g/(2-u-d),u){case r:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-r)/g+2;break;case c:p=(r-o)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Lt.workingColorSpace){return Lt.workingToColorSpace(Zn.copy(this),n),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=$t){Lt.workingToColorSpace(Zn.copy(this),e);const n=Zn.r,r=Zn.g,o=Zn.b;return e!==$t?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(br),this.setHSL(br.h+e,br.s+n,br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(br),e.getHSL(cu);const r=dh(br.h,cu.h,n),o=dh(br.s,cu.s,n),c=dh(br.l,cu.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new Vt;Vt.NAMES=fy;let YT=0;class os extends ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=zl(),this.name="",this.type="Material",this.blending=ro,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){pt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(r.blending=this.blending),this.side!==Ia&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zh&&(r.blendSrc=this.blendSrc),this.blendDst!==Kh&&(r.blendDst=this.blendDst),this.blendEquation!==ts&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dy extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ga,this.combine=qx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bn=new K,uu=new qe;let ZT=0;class ti{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=g_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)uu.fromBufferAttribute(this,n),uu.applyMatrix3(e),this.setXY(n,uu.x,uu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix3(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ml(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ci(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ml(n,this.array)),n}setX(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ml(n,this.array)),n}setY(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ml(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ml(n,this.array)),n}setW(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array),o=ci(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array),o=ci(o,this.array),c=ci(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==g_&&(e.usage=this.usage),e}}class hy extends ti{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class py extends ti{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ni extends ti{constructor(e,n,r){super(new Float32Array(e),n,r)}}let KT=0;const Li=new pn,Uh=new fi,to=new K,Si=new Il,xl=new Il,Nn=new K;class di extends ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oy(e)?py:hy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new xt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,n,r){return Li.makeTranslation(e,n,r),this.applyMatrix4(Li),this}scale(e,n,r){return Li.makeScale(e,n,r),this.applyMatrix4(Li),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ni(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Il);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Si.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];xl.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(Si.min,xl.min),Si.expandByPoint(Nn),Nn.addVectors(Si.max,xl.max),Si.expandByPoint(Nn)):(Si.expandByPoint(xl.min),Si.expandByPoint(xl.max))}Si.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Nn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Nn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Nn.fromBufferAttribute(d,m),p&&(to.fromBufferAttribute(e,m),Nn.add(to)),o=Math.max(o,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let H=0;H<r.count;H++)d[H]=new K,p[H]=new K;const m=new K,v=new K,g=new K,_=new qe,y=new qe,M=new qe,A=new K,b=new K;function x(H,T,D){m.fromBufferAttribute(r,H),v.fromBufferAttribute(r,T),g.fromBufferAttribute(r,D),_.fromBufferAttribute(c,H),y.fromBufferAttribute(c,T),M.fromBufferAttribute(c,D),v.sub(m),g.sub(m),y.sub(_),M.sub(_);const X=1/(y.x*M.y-M.x*y.y);isFinite(X)&&(A.copy(v).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(X),b.copy(g).multiplyScalar(y.x).addScaledVector(v,-M.x).multiplyScalar(X),d[H].add(A),d[T].add(A),d[D].add(A),p[H].add(b),p[T].add(b),p[D].add(b))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let H=0,T=U.length;H<T;++H){const D=U[H],X=D.start,ee=D.count;for(let ae=X,he=X+ee;ae<he;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const R=new K,N=new K,L=new K,I=new K;function z(H){L.fromBufferAttribute(o,H),I.copy(L);const T=d[H];R.copy(T),R.sub(L.multiplyScalar(L.dot(T))).normalize(),N.crossVectors(I,T);const X=N.dot(p[H])<0?-1:1;u.setXYZW(H,R.x,R.y,R.z,X)}for(let H=0,T=U.length;H<T;++H){const D=U[H],X=D.start,ee=D.count;for(let ae=X,he=X+ee;ae<he;ae+=3)z(e.getX(ae+0)),z(e.getX(ae+1)),z(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const o=new K,c=new K,u=new K,d=new K,p=new K,m=new K,v=new K,g=new K;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),A=e.getX(_+1),b=e.getX(_+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,b),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,b),d.add(v),p.add(v),m.add(v),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(b,m.x,m.y,m.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Nn.fromBufferAttribute(e,n),Nn.normalize(),e.setXYZ(n,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,g=d.normalized,_=new m.constructor(p.length*v);let y=0,M=0;for(let A=0,b=p.length;A<b;A++){d.isInterleavedBufferAttribute?y=p[A]*d.data.stride+d.offset:y=p[A]*v;for(let x=0;x<v;x++)_[M++]=m[y++]}return new ti(_,v,g)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,g=m.length;v<g;v++){const _=m[v],y=e(_,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,_=m.length;g<_;g++){const y=m[g];v.push(y.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],g=c[m];for(let _=0,y=g.length;_<y;_++)v.push(g[_].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const g=u[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const U_=new pn,Kr=new cy,fu=new Wu,N_=new K,du=new K,hu=new K,pu=new K,Nh=new K,mu=new K,L_=new K,gu=new K;class $n extends fi{constructor(e=new di,n=new dy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){mu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],g=c[p];v!==0&&(Nh.fromBufferAttribute(g,e),u?mu.addScaledVector(Nh,v):mu.addScaledVector(Nh.sub(n),v))}n.add(mu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fu.copy(r.boundingSphere),fu.applyMatrix4(c),Kr.copy(e.ray).recast(e.near),!(fu.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(fu,N_)===null||Kr.origin.distanceToSquared(N_)>(e.far-e.near)**2))&&(U_.copy(c).invert(),Kr.copy(e.ray).applyMatrix4(U_),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Kr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,_=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,A=_.length;M<A;M++){const b=_[M],x=u[b.materialIndex],U=Math.max(b.start,y.start),R=Math.min(d.count,Math.min(b.start+b.count,y.start+y.count));for(let N=U,L=R;N<L;N+=3){const I=d.getX(N),z=d.getX(N+1),H=d.getX(N+2);o=vu(this,x,e,r,m,v,g,I,z,H),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let b=M,x=A;b<x;b+=3){const U=d.getX(b),R=d.getX(b+1),N=d.getX(b+2);o=vu(this,u,e,r,m,v,g,U,R,N),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,A=_.length;M<A;M++){const b=_[M],x=u[b.materialIndex],U=Math.max(b.start,y.start),R=Math.min(p.count,Math.min(b.start+b.count,y.start+y.count));for(let N=U,L=R;N<L;N+=3){const I=N,z=N+1,H=N+2;o=vu(this,x,e,r,m,v,g,I,z,H),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let b=M,x=A;b<x;b+=3){const U=b,R=b+1,N=b+2;o=vu(this,u,e,r,m,v,g,U,R,N),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}}}function QT(a,e,n,r,o,c,u,d){let p;if(e.side===Ln?p=r.intersectTriangle(u,c,o,!0,d):p=r.intersectTriangle(o,c,u,e.side===Ia,d),p===null)return null;gu.copy(d),gu.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(gu);return m<n.near||m>n.far?null:{distance:m,point:gu.clone(),object:a}}function vu(a,e,n,r,o,c,u,d,p,m){a.getVertexPosition(d,du),a.getVertexPosition(p,hu),a.getVertexPosition(m,pu);const v=QT(a,e,n,r,du,hu,pu,L_);if(v){const g=new K;Wi.getBarycoord(L_,du,hu,pu,g),o&&(v.uv=Wi.getInterpolatedAttribute(o,d,p,m,g,new qe)),c&&(v.uv1=Wi.getInterpolatedAttribute(c,d,p,m,g,new qe)),u&&(v.normal=Wi.getInterpolatedAttribute(u,d,p,m,g,new K),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:p,c:m,normal:new K,materialIndex:0};Wi.getNormal(du,hu,pu,_.normal),v.face=_,v.barycoord=g}return v}class Fl extends di{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],v=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,r,n,e,u,c,0),M("z","y","x",1,-1,r,n,-e,u,c,1),M("x","z","y",1,1,e,r,n,o,u,2),M("x","z","y",1,-1,e,r,-n,o,u,3),M("x","y","z",1,-1,e,n,r,o,c,4),M("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new ni(m,3)),this.setAttribute("normal",new ni(v,3)),this.setAttribute("uv",new ni(g,2));function M(A,b,x,U,R,N,L,I,z,H,T){const D=N/z,X=L/H,ee=N/2,ae=L/2,he=I/2,$=z+1,O=H+1;let F=0,k=0;const xe=new K;for(let ge=0;ge<O;ge++){const P=ge*X-ae;for(let ie=0;ie<$;ie++){const ue=ie*D-ee;xe[A]=ue*U,xe[b]=P*R,xe[x]=he,m.push(xe.x,xe.y,xe.z),xe[A]=0,xe[b]=0,xe[x]=I>0?1:-1,v.push(xe.x,xe.y,xe.z),g.push(ie/z),g.push(1-ge/H),F+=1}}for(let ge=0;ge<H;ge++)for(let P=0;P<z;P++){const ie=_+P+$*ge,ue=_+P+$*(ge+1),Se=_+(P+1)+$*(ge+1),Me=_+(P+1)+$*ge;p.push(ie,ue,Me),p.push(ue,Se,Me),k+=6}d.addGroup(y,k,T),y+=k,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Jn(a){const e={};for(let n=0;n<a.length;n++){const r=fo(a[n]);for(const o in r)e[o]=r[o]}return e}function JT(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function my(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const $T={clone:fo,merge:Jn};var eA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eA,this.fragmentShader=tA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=JT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class gy extends fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new K,O_=new qe,P_=new qe;class bi extends gy{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fp*2*Math.atan(Math.tan(fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,n){return this.getViewBounds(e,O_,P_),n.subVectors(P_,O_)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const no=-90,io=1;class nA extends fi{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new bi(no,io,e,n);o.layers=this.layers,this.add(o);const c=new bi(no,io,e,n);c.layers=this.layers,this.add(c);const u=new bi(no,io,e,n);u.layers=this.layers,this.add(u);const d=new bi(no,io,e,n);d.layers=this.layers,this.add(d);const p=new bi(no,io,e,n);p.layers=this.layers,this.add(p);const m=new bi(no,io,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===ra)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Iu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,v]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(g,_,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class vy extends Wn{constructor(e=[],n=as,r,o,c,u,d,p,m,v){super(e,n,r,o,c,u,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _y extends En{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new vy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Fl(5,5,5),c=new hn({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:ei});c.uniforms.tEquirect.value=n;const u=new $n(o,c),d=n.minFilter;return n.minFilter===is&&(n.minFilter=Mn),new nA(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}class El extends fi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iA={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const b=n.getJointPose(A,r),x=this._getHandJoint(m,A);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],_=v.position.distanceTo(g.position),y=.02,M=.005;m.inputState.pinching&&_>y+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=y-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iA)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new El;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Hu extends fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ga,this.environmentIntensity=1,this.environmentRotation=new Ga,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class aA extends Wn{constructor(e=null,n=1,r=1,o,c,u,d,p,m=Xn,v=Xn,g,_){super(null,u,d,p,m,v,o,c,g,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oh=new K,rA=new K,sA=new xt;class es{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Oh.subVectors(r,n).cross(rA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Oh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||sA.getNormalMatrix(e),o=this.coplanarPoint(Oh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Wu,oA=new qe(.5,.5),_u=new K;class xy{constructor(e=new es,n=new es,r=new es,o=new es,c=new es,u=new es){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ra,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],m=c[3],v=c[4],g=c[5],_=c[6],y=c[7],M=c[8],A=c[9],b=c[10],x=c[11],U=c[12],R=c[13],N=c[14],L=c[15];if(o[0].setComponents(m-u,y-v,x-M,L-U).normalize(),o[1].setComponents(m+u,y+v,x+M,L+U).normalize(),o[2].setComponents(m+d,y+g,x+A,L+R).normalize(),o[3].setComponents(m-d,y-g,x-A,L-R).normalize(),r)o[4].setComponents(p,_,b,N).normalize(),o[5].setComponents(m-p,y-_,x-b,L-N).normalize();else if(o[4].setComponents(m-p,y-_,x-b,L-N).normalize(),n===ra)o[5].setComponents(m+p,y+_,x+b,L+N).normalize();else if(n===Iu)o[5].setComponents(p,_,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const n=oA.distanceTo(e.center);return Qr.radius=.7071067811865476+n,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(_u.x=o.normal.x>0?e.max.x:e.min.x,_u.y=o.normal.y>0?e.max.y:e.min.y,_u.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_u)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lA extends os{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const z_=new pn,Hp=new cy,xu=new Wu,yu=new K;class cA extends fi{constructor(e=new di,n=new lA){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xu.copy(r.boundingSphere),xu.applyMatrix4(o),xu.radius+=c,e.ray.intersectsSphere(xu)===!1)return;z_.copy(o).invert(),Hp.copy(e.ray).applyMatrix4(z_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,g=r.attributes.position;if(m!==null){const _=Math.max(0,u.start),y=Math.min(m.count,u.start+u.count);for(let M=_,A=y;M<A;M++){const b=m.getX(M);yu.fromBufferAttribute(g,b),B_(yu,b,p,o,e,n,this)}}else{const _=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let M=_,A=y;M<A;M++)yu.fromBufferAttribute(g,M),B_(yu,M,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function B_(a,e,n,r,o,c,u){const d=Hp.distanceSqToPoint(a);if(d<n){const p=new K;Hp.closestPointToPoint(a,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class ho extends Wn{constructor(e,n,r=ji,o,c,u,d=Xn,p=Xn,m,v=Ha,g=1){if(v!==Ha&&v!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:g};super(_,o,c,u,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class uA extends ho{constructor(e,n=ji,r=as,o,c,u=Xn,d=Xn,p,m=Ha){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,n,r,o,c,u,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yy extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cm extends di{constructor(e=1,n=1,r=1,o=32,c=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const v=[],g=[],_=[],y=[];let M=0;const A=[],b=r/2;let x=0;U(),u===!1&&(e>0&&R(!0),n>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new ni(g,3)),this.setAttribute("normal",new ni(_,3)),this.setAttribute("uv",new ni(y,2));function U(){const N=new K,L=new K;let I=0;const z=(n-e)/r;for(let H=0;H<=c;H++){const T=[],D=H/c,X=D*(n-e)+e;for(let ee=0;ee<=o;ee++){const ae=ee/o,he=ae*p+d,$=Math.sin(he),O=Math.cos(he);L.x=X*$,L.y=-D*r+b,L.z=X*O,g.push(L.x,L.y,L.z),N.set($,z,O).normalize(),_.push(N.x,N.y,N.z),y.push(ae,1-D),T.push(M++)}A.push(T)}for(let H=0;H<o;H++)for(let T=0;T<c;T++){const D=A[T][H],X=A[T+1][H],ee=A[T+1][H+1],ae=A[T][H+1];(e>0||T!==0)&&(v.push(D,X,ae),I+=3),(n>0||T!==c-1)&&(v.push(X,ee,ae),I+=3)}m.addGroup(x,I,0),x+=I}function R(N){const L=M,I=new qe,z=new K;let H=0;const T=N===!0?e:n,D=N===!0?1:-1;for(let ee=1;ee<=o;ee++)g.push(0,b*D,0),_.push(0,D,0),y.push(.5,.5),M++;const X=M;for(let ee=0;ee<=o;ee++){const he=ee/o*p+d,$=Math.cos(he),O=Math.sin(he);z.x=T*O,z.y=b*D,z.z=T*$,g.push(z.x,z.y,z.z),_.push(0,D,0),I.x=$*.5+.5,I.y=O*.5*D+.5,y.push(I.x,I.y),M++}for(let ee=0;ee<o;ee++){const ae=L+ee,he=X+ee;N===!0?v.push(he,he+1,ae):v.push(he+1,he,ae),H+=3}m.addGroup(x,H,N===!0?1:2),x+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cm(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pt("Curve: .getPoint() not implemented.")}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),n.push(c),o=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const r=this.getLengths();let o=0;const c=r.length;let u;n?u=n:u=e*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(c-1);const v=r[o],_=r[o+1]-v,y=(u-v)/_;return(o+y)/(c-1)}getTangent(e,n){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),p=n||(u.isVector2?new qe:new K);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n=!1){const r=new K,o=[],c=[],u=[],d=new K,p=new pn;for(let y=0;y<=e;y++){const M=y/e;o[y]=this.getTangentAt(M,new K)}c[0]=new K,u[0]=new K;let m=Number.MAX_VALUE;const v=Math.abs(o[0].x),g=Math.abs(o[0].y),_=Math.abs(o[0].z);v<=m&&(m=v,r.set(1,0,0)),g<=m&&(m=g,r.set(0,1,0)),_<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let y=1;y<=e;y++){if(c[y]=c[y-1].clone(),u[y]=u[y-1].clone(),d.crossVectors(o[y-1],o[y]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(Et(o[y-1].dot(o[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(d,M))}u[y].crossVectors(o[y],c[y])}if(n===!0){let y=Math.acos(Et(c[0].dot(c[e]),-1,1));y/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(y=-y);for(let M=1;M<=e;M++)c[M].applyMatrix4(p.makeRotationAxis(o[M],y*M)),u[M].crossVectors(o[M],c[M])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sy extends Xa{constructor(e=0,n=0,r=1,o=1,c=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=r,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,n=new qe){const r=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const d=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=p-this.aX,y=m-this.aY;p=_*v-y*g+this.aX,m=_*g+y*v+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fA extends Sy{constructor(e,n,r,o,c,u){super(e,n,r,r,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function um(){let a=0,e=0,n=0,r=0;function o(c,u,d,p){a=c,e=d,n=-3*c+3*u-2*d-p,r=2*c-2*u+d+p}return{initCatmullRom:function(c,u,d,p,m){o(u,d,m*(d-c),m*(p-u))},initNonuniformCatmullRom:function(c,u,d,p,m,v,g){let _=(u-c)/m-(d-c)/(m+v)+(d-u)/v,y=(d-u)/v-(p-u)/(v+g)+(p-d)/g;_*=v,y*=v,o(u,d,_,y)},calc:function(c){const u=c*c,d=u*c;return a+e*c+n*u+r*d}}}const Su=new K,Ph=new um,zh=new um,Bh=new um;class Gp extends Xa{constructor(e=[],n=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=o}getPoint(e,n=new K){const r=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,v;this.closed||d>0?m=o[(d-1)%c]:(Su.subVectors(o[0],o[1]).add(o[0]),m=Su);const g=o[d%c],_=o[(d+1)%c];if(this.closed||d+2<c?v=o[(d+2)%c]:(Su.subVectors(o[c-1],o[c-2]).add(o[c-1]),v=Su),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(m.distanceToSquared(g),y),A=Math.pow(g.distanceToSquared(_),y),b=Math.pow(_.distanceToSquared(v),y);A<1e-4&&(A=1),M<1e-4&&(M=A),b<1e-4&&(b=A),Ph.initNonuniformCatmullRom(m.x,g.x,_.x,v.x,M,A,b),zh.initNonuniformCatmullRom(m.y,g.y,_.y,v.y,M,A,b),Bh.initNonuniformCatmullRom(m.z,g.z,_.z,v.z,M,A,b)}else this.curveType==="catmullrom"&&(Ph.initCatmullRom(m.x,g.x,_.x,v.x,this.tension),zh.initCatmullRom(m.y,g.y,_.y,v.y,this.tension),Bh.initCatmullRom(m.z,g.z,_.z,v.z,this.tension));return r.set(Ph.calc(p),zh.calc(p),Bh.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new K().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function I_(a,e,n,r,o){const c=(r-e)*.5,u=(o-n)*.5,d=a*a,p=a*d;return(2*n-2*r+c+u)*p+(-3*n+3*r-2*c-u)*d+c*a+n}function dA(a,e){const n=1-a;return n*n*e}function hA(a,e){return 2*(1-a)*a*e}function pA(a,e){return a*a*e}function Al(a,e,n,r){return dA(a,e)+hA(a,n)+pA(a,r)}function mA(a,e){const n=1-a;return n*n*n*e}function gA(a,e){const n=1-a;return 3*n*n*a*e}function vA(a,e){return 3*(1-a)*a*a*e}function _A(a,e){return a*a*a*e}function Rl(a,e,n,r,o){return mA(a,e)+gA(a,n)+vA(a,r)+_A(a,o)}class xA extends Xa{constructor(e=new qe,n=new qe,r=new qe,o=new qe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new qe){const r=n,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return r.set(Rl(e,o.x,c.x,u.x,d.x),Rl(e,o.y,c.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yA extends Xa{constructor(e=new K,n=new K,r=new K,o=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new K){const r=n,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return r.set(Rl(e,o.x,c.x,u.x,d.x),Rl(e,o.y,c.y,u.y,d.y),Rl(e,o.z,c.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class SA extends Xa{constructor(e=new qe,n=new qe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new qe){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new qe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bA extends Xa{constructor(e=new K,n=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new K){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new K){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class MA extends Xa{constructor(e=new qe,n=new qe,r=new qe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new qe){const r=n,o=this.v0,c=this.v1,u=this.v2;return r.set(Al(e,o.x,c.x,u.x),Al(e,o.y,c.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class by extends Xa{constructor(e=new K,n=new K,r=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new K){const r=n,o=this.v0,c=this.v1,u=this.v2;return r.set(Al(e,o.x,c.x,u.x),Al(e,o.y,c.y,u.y),Al(e,o.z,c.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class EA extends Xa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new qe){const r=n,o=this.points,c=(o.length-1)*e,u=Math.floor(c),d=c-u,p=o[u===0?u:u-1],m=o[u],v=o[u>o.length-2?o.length-1:u+1],g=o[u>o.length-3?o.length-1:u+2];return r.set(I_(d,p.x,m.x,v.x,g.x),I_(d,p.y,m.y,v.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new qe().fromArray(o))}return this}}var TA=Object.freeze({__proto__:null,ArcCurve:fA,CatmullRomCurve3:Gp,CubicBezierCurve:xA,CubicBezierCurve3:yA,EllipseCurve:Sy,LineCurve:SA,LineCurve3:bA,QuadraticBezierCurve:MA,QuadraticBezierCurve3:by,SplineCurve:EA});class Hl extends di{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,v=p+1,g=e/d,_=n/p,y=[],M=[],A=[],b=[];for(let x=0;x<v;x++){const U=x*_-u;for(let R=0;R<m;R++){const N=R*g-c;M.push(N,-U,0),A.push(0,0,1),b.push(R/d),b.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<d;U++){const R=U+m*x,N=U+m*(x+1),L=U+1+m*(x+1),I=U+1+m*x;y.push(R,N,I),y.push(N,L,I)}this.setIndex(y),this.setAttribute("position",new ni(M,3)),this.setAttribute("normal",new ni(A,3)),this.setAttribute("uv",new ni(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gu extends di{constructor(e=new by(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),n=64,r=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:r,radialSegments:o,closed:c};const u=e.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new K,p=new K,m=new qe;let v=new K;const g=[],_=[],y=[],M=[];A(),this.setIndex(M),this.setAttribute("position",new ni(g,3)),this.setAttribute("normal",new ni(_,3)),this.setAttribute("uv",new ni(y,2));function A(){for(let R=0;R<n;R++)b(R);b(c===!1?n:0),U(),x()}function b(R){v=e.getPointAt(R/n,v);const N=u.normals[R],L=u.binormals[R];for(let I=0;I<=o;I++){const z=I/o*Math.PI*2,H=Math.sin(z),T=-Math.cos(z);p.x=T*N.x+H*L.x,p.y=T*N.y+H*L.y,p.z=T*N.z+H*L.z,p.normalize(),_.push(p.x,p.y,p.z),d.x=v.x+r*p.x,d.y=v.y+r*p.y,d.z=v.z+r*p.z,g.push(d.x,d.y,d.z)}}function x(){for(let R=1;R<=n;R++)for(let N=1;N<=o;N++){const L=(o+1)*(R-1)+(N-1),I=(o+1)*R+(N-1),z=(o+1)*R+N,H=(o+1)*(R-1)+N;M.push(L,I,H),M.push(I,z,H)}}function U(){for(let R=0;R<=n;R++)for(let N=0;N<=o;N++)m.x=R/n,m.y=N/o,y.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gu(new TA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class AA extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class RA extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wA extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qu extends gy{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class CA extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class DA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Ot{constructor(e){this.value=e}clone(){return new Ot(this.value.clone===void 0?this.value:this.value.clone())}}function F_(a,e,n,r){const o=UA(r);switch(n){case ay:return a*e;case sy:return a*e/o.components*o.byteLength;case im:return a*e/o.components*o.byteLength;case uo:return a*e*2/o.components*o.byteLength;case am:return a*e*2/o.components*o.byteLength;case ry:return a*e*3/o.components*o.byteLength;case qi:return a*e*4/o.components*o.byteLength;case rm:return a*e*4/o.components*o.byteLength;case wu:case Cu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Du:case Uu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case lp:case up:return Math.max(a,16)*Math.max(e,8)/4;case op:case cp:return Math.max(a,8)*Math.max(e,8)/2;case fp:case dp:case pp:case mp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case hp:case gp:case vp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case _p:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case yp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case bp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Ap:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case wp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Dp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Up:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Np:case Lp:case Op:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Pp:case zp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Bp:case Ip:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function UA(a){switch(a){case wn:case ey:return{byteLength:1,components:1};case Cl:case ty:case Fa:return{byteLength:2,components:1};case tm:case nm:return{byteLength:2,components:4};case ji:case em:case aa:return{byteLength:4,components:1};case ny:case iy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);function My(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function NA(a){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,g=m.byteLength,_=a.createBuffer();a.bindBuffer(p,_),a.bufferData(p,m,v),d.onUploadCallback();let y;if(m instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=a.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=a.SHORT;else if(m instanceof Uint32Array)y=a.UNSIGNED_INT;else if(m instanceof Int32Array)y=a.INT;else if(m instanceof Int8Array)y=a.BYTE;else if(m instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const v=p.array,g=p.updateRanges;if(a.bindBuffer(m,d),g.length===0)a.bufferSubData(m,0,v);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],A=g[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++_,g[_]=A)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const A=g[y];a.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(a.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:c,update:u}}var LA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OA=`#ifdef USE_ALPHAHASH
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
#endif`,PA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FA=`#ifdef USE_AOMAP
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
#endif`,HA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GA=`#ifdef USE_BATCHING
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
#endif`,VA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qA=`#ifdef USE_IRIDESCENCE
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
#endif`,jA=`#ifdef USE_BUMPMAP
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
#endif`,YA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$A=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nR=`#define PI 3.141592653589793
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
} // validated`,iR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aR=`vec3 transformedNormal = objectNormal;
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
#endif`,rR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cR="gl_FragColor = linearToOutputTexel( gl_FragColor );",uR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fR=`#ifdef USE_ENVMAP
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
#endif`,dR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hR=`#ifdef USE_ENVMAP
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
#endif`,pR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mR=`#ifdef USE_ENVMAP
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
#endif`,gR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_R=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yR=`#ifdef USE_GRADIENTMAP
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
}`,SR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ER=`uniform bool receiveShadow;
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
#endif`,TR=`#ifdef USE_ENVMAP
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
#endif`,AR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DR=`PhysicalMaterial material;
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
#endif`,UR=`uniform sampler2D dfgLUT;
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
}`,NR=`
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
#endif`,LR=`#if defined( RE_IndirectDiffuse )
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
#endif`,OR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VR=`#if defined( USE_POINTS_UV )
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
#endif`,kR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YR=`#ifdef USE_MORPHTARGETS
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
#endif`,ZR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,JR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$R=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t2=`#ifdef USE_NORMALMAP
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
#endif`,n2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v2=`float getShadowMask() {
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
}`,_2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x2=`#ifdef USE_SKINNING
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
#endif`,y2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S2=`#ifdef USE_SKINNING
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
#endif`,b2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A2=`#ifdef USE_TRANSMISSION
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
#endif`,R2=`#ifdef USE_TRANSMISSION
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
#endif`,w2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L2=`uniform sampler2D t2D;
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
}`,O2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I2=`#include <common>
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
}`,F2=`#if DEPTH_PACKING == 3200
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
}`,H2=`#define DISTANCE
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
}`,G2=`#define DISTANCE
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
}`,V2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X2=`uniform float scale;
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
}`,W2=`uniform vec3 diffuse;
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
}`,q2=`#include <common>
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
}`,j2=`uniform vec3 diffuse;
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
}`,Y2=`#define LAMBERT
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
}`,Z2=`#define LAMBERT
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
}`,K2=`#define MATCAP
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
}`,Q2=`#define MATCAP
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
}`,J2=`#define NORMAL
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
}`,$2=`#define NORMAL
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
}`,ew=`#define PHONG
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
}`,tw=`#define PHONG
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
}`,nw=`#define STANDARD
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
}`,iw=`#define STANDARD
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
}`,aw=`#define TOON
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
}`,rw=`#define TOON
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
}`,sw=`uniform float size;
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
}`,ow=`uniform vec3 diffuse;
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
}`,lw=`#include <common>
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
}`,cw=`uniform vec3 color;
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
}`,uw=`uniform float rotation;
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
}`,fw=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:LA,alphahash_pars_fragment:OA,alphamap_fragment:PA,alphamap_pars_fragment:zA,alphatest_fragment:BA,alphatest_pars_fragment:IA,aomap_fragment:FA,aomap_pars_fragment:HA,batching_pars_vertex:GA,batching_vertex:VA,begin_vertex:kA,beginnormal_vertex:XA,bsdfs:WA,iridescence_fragment:qA,bumpmap_pars_fragment:jA,clipping_planes_fragment:YA,clipping_planes_pars_fragment:ZA,clipping_planes_pars_vertex:KA,clipping_planes_vertex:QA,color_fragment:JA,color_pars_fragment:$A,color_pars_vertex:eR,color_vertex:tR,common:nR,cube_uv_reflection_fragment:iR,defaultnormal_vertex:aR,displacementmap_pars_vertex:rR,displacementmap_vertex:sR,emissivemap_fragment:oR,emissivemap_pars_fragment:lR,colorspace_fragment:cR,colorspace_pars_fragment:uR,envmap_fragment:fR,envmap_common_pars_fragment:dR,envmap_pars_fragment:hR,envmap_pars_vertex:pR,envmap_physical_pars_fragment:TR,envmap_vertex:mR,fog_vertex:gR,fog_pars_vertex:vR,fog_fragment:_R,fog_pars_fragment:xR,gradientmap_pars_fragment:yR,lightmap_pars_fragment:SR,lights_lambert_fragment:bR,lights_lambert_pars_fragment:MR,lights_pars_begin:ER,lights_toon_fragment:AR,lights_toon_pars_fragment:RR,lights_phong_fragment:wR,lights_phong_pars_fragment:CR,lights_physical_fragment:DR,lights_physical_pars_fragment:UR,lights_fragment_begin:NR,lights_fragment_maps:LR,lights_fragment_end:OR,logdepthbuf_fragment:PR,logdepthbuf_pars_fragment:zR,logdepthbuf_pars_vertex:BR,logdepthbuf_vertex:IR,map_fragment:FR,map_pars_fragment:HR,map_particle_fragment:GR,map_particle_pars_fragment:VR,metalnessmap_fragment:kR,metalnessmap_pars_fragment:XR,morphinstance_vertex:WR,morphcolor_vertex:qR,morphnormal_vertex:jR,morphtarget_pars_vertex:YR,morphtarget_vertex:ZR,normal_fragment_begin:KR,normal_fragment_maps:QR,normal_pars_fragment:JR,normal_pars_vertex:$R,normal_vertex:e2,normalmap_pars_fragment:t2,clearcoat_normal_fragment_begin:n2,clearcoat_normal_fragment_maps:i2,clearcoat_pars_fragment:a2,iridescence_pars_fragment:r2,opaque_fragment:s2,packing:o2,premultiplied_alpha_fragment:l2,project_vertex:c2,dithering_fragment:u2,dithering_pars_fragment:f2,roughnessmap_fragment:d2,roughnessmap_pars_fragment:h2,shadowmap_pars_fragment:p2,shadowmap_pars_vertex:m2,shadowmap_vertex:g2,shadowmask_pars_fragment:v2,skinbase_vertex:_2,skinning_pars_vertex:x2,skinning_vertex:y2,skinnormal_vertex:S2,specularmap_fragment:b2,specularmap_pars_fragment:M2,tonemapping_fragment:E2,tonemapping_pars_fragment:T2,transmission_fragment:A2,transmission_pars_fragment:R2,uv_pars_fragment:w2,uv_pars_vertex:C2,uv_vertex:D2,worldpos_vertex:U2,background_vert:N2,background_frag:L2,backgroundCube_vert:O2,backgroundCube_frag:P2,cube_vert:z2,cube_frag:B2,depth_vert:I2,depth_frag:F2,distance_vert:H2,distance_frag:G2,equirect_vert:V2,equirect_frag:k2,linedashed_vert:X2,linedashed_frag:W2,meshbasic_vert:q2,meshbasic_frag:j2,meshlambert_vert:Y2,meshlambert_frag:Z2,meshmatcap_vert:K2,meshmatcap_frag:Q2,meshnormal_vert:J2,meshnormal_frag:$2,meshphong_vert:ew,meshphong_frag:tw,meshphysical_vert:nw,meshphysical_frag:iw,meshtoon_vert:aw,meshtoon_frag:rw,points_vert:sw,points_frag:ow,shadow_vert:lw,shadow_frag:cw,sprite_vert:uw,sprite_frag:fw},Ie={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},na={basic:{uniforms:Jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Vt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Jn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Jn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Vt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Jn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Jn([Ie.points,Ie.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Jn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Jn([Ie.common,Ie.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Jn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Jn([Ie.sprite,Ie.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Jn([Ie.common,Ie.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Jn([Ie.lights,Ie.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};na.physical={uniforms:Jn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const bu={r:0,b:0,g:0},Jr=new Ga,dw=new pn;function hw(a,e,n,r,o,c,u){const d=new Vt(0);let p=c===!0?0:1,m,v,g=null,_=0,y=null;function M(R){let N=R.isScene===!0?R.background:null;return N&&N.isTexture&&(N=(R.backgroundBlurriness>0?n:e).get(N)),N}function A(R){let N=!1;const L=M(R);L===null?x(d,p):L&&L.isColor&&(x(L,1),N=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(a.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(R,N){const L=M(N);L&&(L.isCubeTexture||L.mapping===Xu)?(v===void 0&&(v=new $n(new Fl(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:fo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(I,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Jr.copy(N.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),v.material.uniforms.envMap.value=L,v.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(dw.makeRotationFromEuler(Jr)),v.material.toneMapped=Lt.getTransfer(L.colorSpace)!==Zt,(g!==L||_!==L.version||y!==a.toneMapping)&&(v.material.needsUpdate=!0,g=L,_=L.version,y=a.toneMapping),v.layers.enableAll(),R.unshift(v,v.geometry,v.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new $n(new Hl(2,2),new hn({name:"BackgroundMaterial",uniforms:fo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Lt.getTransfer(L.colorSpace)!==Zt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||_!==L.version||y!==a.toneMapping)&&(m.material.needsUpdate=!0,g=L,_=L.version,y=a.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function x(R,N){R.getRGB(bu,my(a)),r.buffers.color.setClear(bu.r,bu.g,bu.b,N,u)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,N=1){d.set(R),p=N,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,x(d,p)},render:A,addToRenderList:b,dispose:U}}function pw(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function d(D,X,ee,ae,he){let $=!1;const O=g(ae,ee,X);c!==O&&(c=O,m(c.object)),$=y(D,ae,ee,he),$&&M(D,ae,ee,he),he!==null&&e.update(he,a.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,N(D,X,ee,ae),he!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function p(){return a.createVertexArray()}function m(D){return a.bindVertexArray(D)}function v(D){return a.deleteVertexArray(D)}function g(D,X,ee){const ae=ee.wireframe===!0;let he=r[D.id];he===void 0&&(he={},r[D.id]=he);let $=he[X.id];$===void 0&&($={},he[X.id]=$);let O=$[ae];return O===void 0&&(O=_(p()),$[ae]=O),O}function _(D){const X=[],ee=[],ae=[];for(let he=0;he<n;he++)X[he]=0,ee[he]=0,ae[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ee,attributeDivisors:ae,object:D,attributes:{},index:null}}function y(D,X,ee,ae){const he=c.attributes,$=X.attributes;let O=0;const F=ee.getAttributes();for(const k in F)if(F[k].location>=0){const ge=he[k];let P=$[k];if(P===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),ge===void 0||ge.attribute!==P||P&&ge.data!==P.data)return!0;O++}return c.attributesNum!==O||c.index!==ae}function M(D,X,ee,ae){const he={},$=X.attributes;let O=0;const F=ee.getAttributes();for(const k in F)if(F[k].location>=0){let ge=$[k];ge===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor));const P={};P.attribute=ge,ge&&ge.data&&(P.data=ge.data),he[k]=P,O++}c.attributes=he,c.attributesNum=O,c.index=ae}function A(){const D=c.newAttributes;for(let X=0,ee=D.length;X<ee;X++)D[X]=0}function b(D){x(D,0)}function x(D,X){const ee=c.newAttributes,ae=c.enabledAttributes,he=c.attributeDivisors;ee[D]=1,ae[D]===0&&(a.enableVertexAttribArray(D),ae[D]=1),he[D]!==X&&(a.vertexAttribDivisor(D,X),he[D]=X)}function U(){const D=c.newAttributes,X=c.enabledAttributes;for(let ee=0,ae=X.length;ee<ae;ee++)X[ee]!==D[ee]&&(a.disableVertexAttribArray(ee),X[ee]=0)}function R(D,X,ee,ae,he,$,O){O===!0?a.vertexAttribIPointer(D,X,ee,he,$):a.vertexAttribPointer(D,X,ee,ae,he,$)}function N(D,X,ee,ae){A();const he=ae.attributes,$=ee.getAttributes(),O=X.defaultAttributeValues;for(const F in $){const k=$[F];if(k.location>=0){let xe=he[F];if(xe===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),xe!==void 0){const ge=xe.normalized,P=xe.itemSize,ie=e.get(xe);if(ie===void 0)continue;const ue=ie.buffer,Se=ie.type,Me=ie.bytesPerElement,te=Se===a.INT||Se===a.UNSIGNED_INT||xe.gpuType===em;if(xe.isInterleavedBufferAttribute){const re=xe.data,De=re.stride,Fe=xe.offset;if(re.isInstancedInterleavedBuffer){for(let ze=0;ze<k.locationSize;ze++)x(k.location+ze,re.meshPerAttribute);D.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ze=0;ze<k.locationSize;ze++)b(k.location+ze);a.bindBuffer(a.ARRAY_BUFFER,ue);for(let ze=0;ze<k.locationSize;ze++)R(k.location+ze,P/k.locationSize,Se,ge,De*Me,(Fe+P/k.locationSize*ze)*Me,te)}else{if(xe.isInstancedBufferAttribute){for(let re=0;re<k.locationSize;re++)x(k.location+re,xe.meshPerAttribute);D.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let re=0;re<k.locationSize;re++)b(k.location+re);a.bindBuffer(a.ARRAY_BUFFER,ue);for(let re=0;re<k.locationSize;re++)R(k.location+re,P/k.locationSize,Se,ge,P*Me,P/k.locationSize*re*Me,te)}}else if(O!==void 0){const ge=O[F];if(ge!==void 0)switch(ge.length){case 2:a.vertexAttrib2fv(k.location,ge);break;case 3:a.vertexAttrib3fv(k.location,ge);break;case 4:a.vertexAttrib4fv(k.location,ge);break;default:a.vertexAttrib1fv(k.location,ge)}}}}U()}function L(){H();for(const D in r){const X=r[D];for(const ee in X){const ae=X[ee];for(const he in ae)v(ae[he].object),delete ae[he];delete X[ee]}delete r[D]}}function I(D){if(r[D.id]===void 0)return;const X=r[D.id];for(const ee in X){const ae=X[ee];for(const he in ae)v(ae[he].object),delete ae[he];delete X[ee]}delete r[D.id]}function z(D){for(const X in r){const ee=r[X];if(ee[D.id]===void 0)continue;const ae=ee[D.id];for(const he in ae)v(ae[he].object),delete ae[he];delete ee[D.id]}}function H(){T(),u=!0,c!==o&&(c=o,m(c.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:H,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:b,disableUnusedAttributes:U}}function mw(a,e,n){let r;function o(m){r=m}function c(m,v){a.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,g){g!==0&&(a.drawArraysInstanced(r,m,v,g),n.update(v,r,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,g);let y=0;for(let M=0;M<g;M++)y+=v[M];n.update(y,r,1)}function p(m,v,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<m.length;M++)u(m[M],v[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,v,0,_,0,g);let M=0;for(let A=0;A<g;A++)M+=v[A]*_[A];n.update(M,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function gw(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==qi&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const H=z===Fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==wn&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==aa&&!H)}function p(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(pt("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),R=a.getParameter(a.MAX_VARYING_VECTORS),N=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),I=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:U,maxVaryings:R,maxFragmentUniforms:N,maxSamples:L,samples:I}}function vw(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new es,d=new xt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||r!==0||o;return o=_,r=g.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){n=v(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,A=g.clipIntersection,b=g.clipShadows,x=a.get(g);if(!o||M===null||M.length===0||c&&!b)c?v(null):m();else{const U=c?0:r,R=U*4;let N=x.clippingState||null;p.value=N,N=v(M,_,R,y);for(let L=0;L!==R;++L)N[L]=n[L];x.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,_,y,M){const A=g!==null?g.length:0;let b=null;if(A!==0){if(b=p.value,M!==!0||b===null){const x=y+A*4,U=_.matrixWorldInverse;d.getNormalMatrix(U),(b===null||b.length<x)&&(b=new Float32Array(x));for(let R=0,N=y;R!==A;++R,N+=4)u.copy(g[R]).applyMatrix4(U,d),u.normal.toArray(b,N),b[N+3]=u.constant}p.value=b,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,b}}function _w(a){let e=new WeakMap;function n(u,d){return d===ip?u.mapping=as:d===ap&&(u.mapping=lo),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===ip||d===ap)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new _y(p.height);return m.fromEquirectangularTexture(a,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ar=4,H_=[.125,.215,.35,.446,.526,.582],ns=20,xw=256,yl=new qu,G_=new Vt;let Ih=null,Fh=0,Hh=0,Gh=!1;const yw=new K;class V_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:d=yw}=c;Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Fh,Hh),this._renderer.xr.enabled=Gh,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===as||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Fa,format:qi,colorSpace:wr,depthBuffer:!1},o=k_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sw(c)),this._blurMaterial=Mw(c,e,n),this._ggxMaterial=bw(c,e,n)}return o}_compileMaterial(e){const n=new $n(new di,e);this._renderer.compile(n,yl)}_sceneToCubeUV(e,n,r,o,c){const p=new bi(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(G_),g.toneMapping=oa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $n(new Fl,new dy({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,b=A.material;let x=!1;const U=e.background;U?U.isColor&&(b.color.copy(U),e.background=null,x=!0):(b.color.copy(G_),x=!0);for(let R=0;R<6;R++){const N=R%3;N===0?(p.up.set(0,m[R],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[R],c.y,c.z)):N===1?(p.up.set(0,0,m[R]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[R],c.z)):(p.up.set(0,m[R],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[R]));const L=this._cubeSize;ao(o,N*L,R>2?L:0,L,L),g.setRenderTarget(o),x&&g.render(A,p),g.render(e,p)}g.toneMapping=y,g.autoClear=_,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===as||e.mapping===lo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=W_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;ao(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,yl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),g=Math.sqrt(m*m-v*v),_=0+m*1.25,y=g*_,{_lodMax:M}=this,A=this._sizeLods[r],b=3*A*(r>M-Ar?r-M+Ar:0),x=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=M-n,ao(c,b,x,3*A,2*A),o.setRenderTarget(c),o.render(d,yl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=M-r,ao(e,b,x,3*A,2*A),o.setRenderTarget(e),o.render(d,yl)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[o];g.material=m;const _=m.uniforms,y=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ns-1),A=c/M,b=isFinite(c)?1+Math.floor(v*A):ns;b>ns&&pt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ns}`);const x=[];let U=0;for(let z=0;z<ns;++z){const H=z/A,T=Math.exp(-H*H/2);x.push(T),z===0?U+=T:z<b&&(U+=2*T)}for(let z=0;z<x.length;z++)x[z]=x[z]/U;_.envMap.value=e.texture,_.samples.value=b,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:R}=this;_.dTheta.value=M,_.mipInt.value=R-r;const N=this._sizeLods[o],L=3*N*(o>R-Ar?o-R+Ar:0),I=4*(this._cubeSize-N);ao(n,L,I,3*N,2*N),p.setRenderTarget(n),p.render(g,yl)}}function Sw(a){const e=[],n=[],r=[];let o=a;const c=a-Ar+1+H_.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>a-Ar?p=H_[u-a+Ar-1]:u===0&&(p=0),n.push(p);const m=1/(d-2),v=-m,g=1+m,_=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,M=6,A=3,b=2,x=1,U=new Float32Array(A*M*y),R=new Float32Array(b*M*y),N=new Float32Array(x*M*y);for(let I=0;I<y;I++){const z=I%3*2/3-1,H=I>2?0:-1,T=[z,H,0,z+2/3,H,0,z+2/3,H+1,0,z,H,0,z+2/3,H+1,0,z,H+1,0];U.set(T,A*M*I),R.set(_,b*M*I);const D=[I,I,I,I,I,I];N.set(D,x*M*I)}const L=new di;L.setAttribute("position",new ti(U,A)),L.setAttribute("uv",new ti(R,b)),L.setAttribute("faceIndex",new ti(N,x)),r.push(new $n(L,null)),o>Ar&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function k_(a,e,n){const r=new En(a,e,n);return r.texture.mapping=Xu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ao(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function bw(a,e,n){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ju(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Mw(a,e,n){const r=new Float32Array(ns),o=new K(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ju(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function X_(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function W_(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ju(){return`

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
	`}function Ew(a){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===ip||p===ap,v=p===as||p===lo;if(m||v){let g=e.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new V_(a)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return m&&y&&y.height>0||v&&y&&o(y)?(n===null&&(n=new V_(a)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function o(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Tw(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Dl("WebGLRenderer: "+r+" extension not supported."),o}}}function Aw(a,e,n,r){const o={},c=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(g,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(g){const _=g.attributes;for(const y in _)e.update(_[y],a.ARRAY_BUFFER)}function m(g){const _=[],y=g.index,M=g.attributes.position;let A=0;if(y!==null){const U=y.array;A=y.version;for(let R=0,N=U.length;R<N;R+=3){const L=U[R+0],I=U[R+1],z=U[R+2];_.push(L,I,I,z,z,L)}}else if(M!==void 0){const U=M.array;A=M.version;for(let R=0,N=U.length/3-1;R<N;R+=3){const L=R+0,I=R+1,z=R+2;_.push(L,I,I,z,z,L)}}else return;const b=new(oy(_)?py:hy)(_,1);b.version=A;const x=c.get(g);x&&e.remove(x),c.set(g,b)}function v(g){const _=c.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function Rw(a,e,n){let r;function o(_){r=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function p(_,y){a.drawElements(r,y,c,_*u),n.update(y,r,1)}function m(_,y,M){M!==0&&(a.drawElementsInstanced(r,y,c,_*u,M),n.update(y,r,M))}function v(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,_,0,M);let b=0;for(let x=0;x<M;x++)b+=y[x];n.update(b,r,1)}function g(_,y,M,A){if(M===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let x=0;x<_.length;x++)m(_[x]/u,y[x],A[x]);else{b.multiDrawElementsInstancedWEBGL(r,y,0,c,_,0,A,0,M);let x=0;for(let U=0;U<M;U++)x+=y[U]*A[U];n.update(x,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function ww(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:Bt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Cw(a,e,n){const r=new WeakMap,o=new cn;function c(u,d,p){const m=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let _=r.get(d);if(_===void 0||_.count!==g){let D=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var y=D;_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let N=0;M===!0&&(N=1),A===!0&&(N=2),b===!0&&(N=3);let L=d.attributes.position.count*N,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const z=new Float32Array(L*I*4*g),H=new ly(z,L,I,g);H.type=aa,H.needsUpdate=!0;const T=N*4;for(let X=0;X<g;X++){const ee=x[X],ae=U[X],he=R[X],$=L*I*4*X;for(let O=0;O<ee.count;O++){const F=O*T;M===!0&&(o.fromBufferAttribute(ee,O),z[$+F+0]=o.x,z[$+F+1]=o.y,z[$+F+2]=o.z,z[$+F+3]=0),A===!0&&(o.fromBufferAttribute(ae,O),z[$+F+4]=o.x,z[$+F+5]=o.y,z[$+F+6]=o.z,z[$+F+7]=0),b===!0&&(o.fromBufferAttribute(he,O),z[$+F+8]=o.x,z[$+F+9]=o.y,z[$+F+10]=o.z,z[$+F+11]=he.itemSize===4?o.w:1)}}_={count:g,texture:H,size:new qe(L,I)},r.set(d,_),d.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let M=0;for(let b=0;b<m.length;b++)M+=m[b];const A=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(a,"morphTargetBaseInfluence",A),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function Dw(a,e,n,r){let o=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,g=e.get(p,v);if(o.get(g)!==m&&(e.update(g),o.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return g}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}const Uw={[jx]:"LINEAR_TONE_MAPPING",[Yx]:"REINHARD_TONE_MAPPING",[Zx]:"CINEON_TONE_MAPPING",[$p]:"ACES_FILMIC_TONE_MAPPING",[Qx]:"AGX_TONE_MAPPING",[Jx]:"NEUTRAL_TONE_MAPPING",[Kx]:"CUSTOM_TONE_MAPPING"};function Nw(a,e,n,r,o){const c=new En(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),u=new En(e,n,{type:Fa,depthBuffer:!1,stencilBuffer:!1}),d=new di;d.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ni([0,2,0,0,2,0],2));const p=new AA({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new $n(d,p),v=new qu(-1,1,1,-1,0,1);let g=null,_=null,y=!1,M,A=null,b=[],x=!1;this.setSize=function(U,R){c.setSize(U,R),u.setSize(U,R);for(let N=0;N<b.length;N++){const L=b[N];L.setSize&&L.setSize(U,R)}},this.setEffects=function(U){b=U,x=b.length>0&&b[0].isRenderPass===!0;const R=c.width,N=c.height;for(let L=0;L<b.length;L++){const I=b[L];I.setSize&&I.setSize(R,N)}},this.begin=function(U,R){if(y||U.toneMapping===oa&&b.length===0)return!1;if(A=R,R!==null){const N=R.width,L=R.height;(c.width!==N||c.height!==L)&&this.setSize(N,L)}return x===!1&&U.setRenderTarget(c),M=U.toneMapping,U.toneMapping=oa,!0},this.hasRenderPass=function(){return x},this.end=function(U,R){U.toneMapping=M,y=!0;let N=c,L=u;for(let I=0;I<b.length;I++){const z=b[I];if(z.enabled!==!1&&(z.render(U,L,N,R),z.needsSwap!==!1)){const H=N;N=L,L=H}}if(g!==U.outputColorSpace||_!==U.toneMapping){g=U.outputColorSpace,_=U.toneMapping,p.defines={},Lt.getTransfer(g)===Zt&&(p.defines.SRGB_TRANSFER="");const I=Uw[_];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,U.setRenderTarget(A),U.render(m,v),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),d.dispose(),p.dispose()}}const Ey=new Wn,Vp=new ho(1,1),Ty=new ly,Ay=new HT,Ry=new vy,q_=[],j_=[],Y_=new Float32Array(16),Z_=new Float32Array(9),K_=new Float32Array(4);function _o(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=q_[o];if(c===void 0&&(c=new Float32Array(o),q_[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,a[u].toArray(c,d)}return c}function Cn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function Dn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Yu(a,e){let n=j_[e];n===void 0&&(n=new Int32Array(e),j_[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function Lw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function Ow(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;a.uniform2fv(this.addr,e),Dn(n,e)}}function Pw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Cn(n,e))return;a.uniform3fv(this.addr,e),Dn(n,e)}}function zw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;a.uniform4fv(this.addr,e),Dn(n,e)}}function Bw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Cn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Dn(n,e)}else{if(Cn(n,r))return;K_.set(r),a.uniformMatrix2fv(this.addr,!1,K_),Dn(n,r)}}function Iw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Cn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Dn(n,e)}else{if(Cn(n,r))return;Z_.set(r),a.uniformMatrix3fv(this.addr,!1,Z_),Dn(n,r)}}function Fw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Cn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Dn(n,e)}else{if(Cn(n,r))return;Y_.set(r),a.uniformMatrix4fv(this.addr,!1,Y_),Dn(n,r)}}function Hw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function Gw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;a.uniform2iv(this.addr,e),Dn(n,e)}}function Vw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;a.uniform3iv(this.addr,e),Dn(n,e)}}function kw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;a.uniform4iv(this.addr,e),Dn(n,e)}}function Xw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function Ww(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;a.uniform2uiv(this.addr,e),Dn(n,e)}}function qw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;a.uniform3uiv(this.addr,e),Dn(n,e)}}function jw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;a.uniform4uiv(this.addr,e),Dn(n,e)}}function Yw(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Vp.compareFunction=n.isReversedDepthBuffer()?om:sm,c=Vp):c=Ey,n.setTexture2D(e||c,o)}function Zw(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Ay,o)}function Kw(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Ry,o)}function Qw(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Ty,o)}function Jw(a){switch(a){case 5126:return Lw;case 35664:return Ow;case 35665:return Pw;case 35666:return zw;case 35674:return Bw;case 35675:return Iw;case 35676:return Fw;case 5124:case 35670:return Hw;case 35667:case 35671:return Gw;case 35668:case 35672:return Vw;case 35669:case 35673:return kw;case 5125:return Xw;case 36294:return Ww;case 36295:return qw;case 36296:return jw;case 35678:case 36198:case 36298:case 36306:case 35682:return Yw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Qw}}function $w(a,e){a.uniform1fv(this.addr,e)}function eC(a,e){const n=_o(e,this.size,2);a.uniform2fv(this.addr,n)}function tC(a,e){const n=_o(e,this.size,3);a.uniform3fv(this.addr,n)}function nC(a,e){const n=_o(e,this.size,4);a.uniform4fv(this.addr,n)}function iC(a,e){const n=_o(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function aC(a,e){const n=_o(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function rC(a,e){const n=_o(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function sC(a,e){a.uniform1iv(this.addr,e)}function oC(a,e){a.uniform2iv(this.addr,e)}function lC(a,e){a.uniform3iv(this.addr,e)}function cC(a,e){a.uniform4iv(this.addr,e)}function uC(a,e){a.uniform1uiv(this.addr,e)}function fC(a,e){a.uniform2uiv(this.addr,e)}function dC(a,e){a.uniform3uiv(this.addr,e)}function hC(a,e){a.uniform4uiv(this.addr,e)}function pC(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Vp:u=Ey;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function mC(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Ay,c[u])}function gC(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Ry,c[u])}function vC(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Ty,c[u])}function _C(a){switch(a){case 5126:return $w;case 35664:return eC;case 35665:return tC;case 35666:return nC;case 35674:return iC;case 35675:return aC;case 35676:return rC;case 5124:case 35670:return sC;case 35667:case 35671:return oC;case 35668:case 35672:return lC;case 35669:case 35673:return cC;case 5125:return uC;case 36294:return fC;case 36295:return dC;case 36296:return hC;case 35678:case 36198:case 36298:case 36306:case 35682:return pC;case 35679:case 36299:case 36307:return mC;case 35680:case 36300:case 36308:case 36293:return gC;case 36289:case 36303:case 36311:case 36292:return vC}}class xC{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Jw(n.type)}}class yC{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_C(n.type)}}class SC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function Q_(a,e){a.seq.push(e),a.map[e.id]=e}function bC(a,e,n){const r=a.name,o=r.length;for(Vh.lastIndex=0;;){const c=Vh.exec(r),u=Vh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){Q_(n,m===void 0?new xC(d,a,e):new yC(d,a,e));break}else{let g=n.map[d];g===void 0&&(g=new SC(d),Q_(n,g)),n=g}}}class Nu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);bC(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function J_(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const MC=37297;let EC=0;function TC(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const $_=new xt;function AC(a){Lt._getMatrix($_,Lt.workingColorSpace,a);const e=`mat3( ${$_.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(a)){case Bu:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function ex(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+TC(a.getShaderSource(e),d)}else return c}function RC(a,e){const n=AC(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const wC={[jx]:"Linear",[Yx]:"Reinhard",[Zx]:"Cineon",[$p]:"ACESFilmic",[Qx]:"AgX",[Jx]:"Neutral",[Kx]:"Custom"};function CC(a,e){const n=wC[e];return n===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Mu=new K;function DC(){Lt.getLuminanceCoefficients(Mu);const a=Mu.x.toFixed(4),e=Mu.y.toFixed(4),n=Mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UC(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function NC(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function LC(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return n}function Tl(a){return a!==""}function tx(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nx(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OC=/^[ \t]*#include +<([\w\d./]+)>/gm;function kp(a){return a.replace(OC,zC)}const PC=new Map;function zC(a,e){let n=yt[e];if(n===void 0){const r=PC.get(e);if(r!==void 0)n=yt[r],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kp(n)}const BC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ix(a){return a.replace(BC,IC)}function IC(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ax(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const FC={[Ru]:"SHADOWMAP_TYPE_PCF",[Ml]:"SHADOWMAP_TYPE_VSM"};function HC(a){return FC[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GC={[as]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE",[Xu]:"ENVMAP_TYPE_CUBE_UV"};function VC(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":GC[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const kC={[lo]:"ENVMAP_MODE_REFRACTION"};function XC(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":kC[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WC={[qx]:"ENVMAP_BLENDING_MULTIPLY",[ST]:"ENVMAP_BLENDING_MIX",[bT]:"ENVMAP_BLENDING_ADD"};function qC(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":WC[a.combine]||"ENVMAP_BLENDING_NONE"}function jC(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function YC(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=HC(n),m=VC(n),v=XC(n),g=qC(n),_=jC(n),y=UC(n),M=NC(c),A=o.createProgram();let b,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Tl).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Tl).join(`
`),x.length>0&&(x+=`
`)):(b=[ax(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),x=[ax(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oa?"#define TONE_MAPPING":"",n.toneMapping!==oa?yt.tonemapping_pars_fragment:"",n.toneMapping!==oa?CC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,RC("linearToOutputTexel",n.outputColorSpace),DC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Tl).join(`
`)),u=kp(u),u=tx(u,n),u=nx(u,n),d=kp(d),d=tx(d,n),d=nx(d,n),u=ix(u),d=ix(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",n.glslVersion===v_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===v_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=U+b+u,N=U+x+d,L=J_(o,o.VERTEX_SHADER,R),I=J_(o,o.FRAGMENT_SHADER,N);o.attachShader(A,L),o.attachShader(A,I),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function z(X){if(a.debug.checkShaderErrors){const ee=o.getProgramInfoLog(A)||"",ae=o.getShaderInfoLog(L)||"",he=o.getShaderInfoLog(I)||"",$=ee.trim(),O=ae.trim(),F=he.trim();let k=!0,xe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(k=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,A,L,I);else{const ge=ex(o,L,"vertex"),P=ex(o,I,"fragment");Bt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+$+`
`+ge+`
`+P)}else $!==""?pt("WebGLProgram: Program Info Log:",$):(O===""||F==="")&&(xe=!1);xe&&(X.diagnostics={runnable:k,programLog:$,vertexShader:{log:O,prefix:b},fragmentShader:{log:F,prefix:x}})}o.deleteShader(L),o.deleteShader(I),H=new Nu(o,A),T=LC(o,A)}let H;this.getUniforms=function(){return H===void 0&&z(this),H};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(A,MC)),D},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=EC++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=I,this}let ZC=0;class KC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new QC(e),n.set(e,r)),r}}class QC{constructor(e){this.id=ZC++,this.code=e,this.usedTimes=0}}function JC(a,e,n,r,o,c,u){const d=new uy,p=new KC,m=new Set,v=[],g=new Map,_=o.logarithmicDepthBuffer;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return m.add(T),T===0?"uv":`uv${T}`}function b(T,D,X,ee,ae){const he=ee.fog,$=ae.geometry,O=T.isMeshStandardMaterial?ee.environment:null,F=(T.isMeshStandardMaterial?n:e).get(T.envMap||O),k=F&&F.mapping===Xu?F.image.height:null,xe=M[T.type];T.precision!==null&&(y=o.getMaxPrecision(T.precision),y!==T.precision&&pt("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const ge=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,P=ge!==void 0?ge.length:0;let ie=0;$.morphAttributes.position!==void 0&&(ie=1),$.morphAttributes.normal!==void 0&&(ie=2),$.morphAttributes.color!==void 0&&(ie=3);let ue,Se,Me,te;if(xe){const Nt=na[xe];ue=Nt.vertexShader,Se=Nt.fragmentShader}else ue=T.vertexShader,Se=T.fragmentShader,p.update(T),Me=p.getVertexShaderID(T),te=p.getFragmentShaderID(T);const re=a.getRenderTarget(),De=a.state.buffers.depth.getReversed(),Fe=ae.isInstancedMesh===!0,ze=ae.isBatchedMesh===!0,at=!!T.map,Ct=!!T.matcap,rt=!!F,ct=!!T.aoMap,Ut=!!T.lightMap,dt=!!T.bumpMap,en=!!T.normalMap,W=!!T.displacementMap,sn=!!T.emissiveMap,Dt=!!T.metalnessMap,kt=!!T.roughnessMap,Je=T.anisotropy>0,B=T.clearcoat>0,E=T.dispersion>0,Y=T.iridescence>0,ve=T.sheen>0,Ee=T.transmission>0,pe=Je&&!!T.anisotropyMap,et=B&&!!T.clearcoatMap,Ne=B&&!!T.clearcoatNormalMap,Ze=B&&!!T.clearcoatRoughnessMap,ut=Y&&!!T.iridescenceMap,Re=Y&&!!T.iridescenceThicknessMap,we=ve&&!!T.sheenColorMap,Ve=ve&&!!T.sheenRoughnessMap,He=!!T.specularMap,Le=!!T.specularColorMap,vt=!!T.specularIntensityMap,j=Ee&&!!T.transmissionMap,Pe=Ee&&!!T.thicknessMap,Ce=!!T.gradientMap,Ge=!!T.alphaMap,Ae=T.alphaTest>0,be=!!T.alphaHash,Ue=!!T.extensions;let ft=oa;T.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ft=a.toneMapping);const Wt={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:ue,fragmentShader:Se,defines:T.defines,customVertexShaderID:Me,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:ze,batchingColor:ze&&ae._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&ae.instanceColor!==null,instancingMorph:Fe&&ae.morphTexture!==null,outputColorSpace:re===null?a.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:wr,alphaToCoverage:!!T.alphaToCoverage,map:at,matcap:Ct,envMap:rt,envMapMode:rt&&F.mapping,envMapCubeUVHeight:k,aoMap:ct,lightMap:Ut,bumpMap:dt,normalMap:en,displacementMap:W,emissiveMap:sn,normalMapObjectSpace:en&&T.normalMapType===TT,normalMapTangentSpace:en&&T.normalMapType===ET,metalnessMap:Dt,roughnessMap:kt,anisotropy:Je,anisotropyMap:pe,clearcoat:B,clearcoatMap:et,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ze,dispersion:E,iridescence:Y,iridescenceMap:ut,iridescenceThicknessMap:Re,sheen:ve,sheenColorMap:we,sheenRoughnessMap:Ve,specularMap:He,specularColorMap:Le,specularIntensityMap:vt,transmission:Ee,transmissionMap:j,thicknessMap:Pe,gradientMap:Ce,opaque:T.transparent===!1&&T.blending===ro&&T.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ae,alphaHash:be,combine:T.combine,mapUv:at&&A(T.map.channel),aoMapUv:ct&&A(T.aoMap.channel),lightMapUv:Ut&&A(T.lightMap.channel),bumpMapUv:dt&&A(T.bumpMap.channel),normalMapUv:en&&A(T.normalMap.channel),displacementMapUv:W&&A(T.displacementMap.channel),emissiveMapUv:sn&&A(T.emissiveMap.channel),metalnessMapUv:Dt&&A(T.metalnessMap.channel),roughnessMapUv:kt&&A(T.roughnessMap.channel),anisotropyMapUv:pe&&A(T.anisotropyMap.channel),clearcoatMapUv:et&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&A(T.sheenRoughnessMap.channel),specularMapUv:He&&A(T.specularMap.channel),specularColorMapUv:Le&&A(T.specularColorMap.channel),specularIntensityMapUv:vt&&A(T.specularIntensityMap.channel),transmissionMapUv:j&&A(T.transmissionMap.channel),thicknessMapUv:Pe&&A(T.thicknessMap.channel),alphaMapUv:Ge&&A(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(en||Je),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!$.attributes.uv&&(at||Ge),fog:!!he,useFog:T.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:De,skinning:ae.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ie,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&X.length>0,shadowMapType:a.shadowMap.type,toneMapping:ft,decodeVideoTexture:at&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Zt,decodeVideoTextureEmissive:sn&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===Zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ui,flipSided:T.side===Ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Wt.vertexUv1s=m.has(1),Wt.vertexUv2s=m.has(2),Wt.vertexUv3s=m.has(3),m.clear(),Wt}function x(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)D.push(X),D.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(U(D,T),R(D,T),D.push(a.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function U(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function R(T,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),T.push(d.mask)}function N(T){const D=M[T.type];let X;if(D){const ee=na[D];X=$T.clone(ee.uniforms)}else X=T.uniforms;return X}function L(T,D){let X=g.get(D);return X!==void 0?++X.usedTimes:(X=new YC(a,D,T,c),v.push(X),g.set(D,X)),X}function I(T){if(--T.usedTimes===0){const D=v.indexOf(T);v[D]=v[v.length-1],v.pop(),g.delete(T.cacheKey),T.destroy()}}function z(T){p.remove(T)}function H(){p.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:N,acquireProgram:L,releaseProgram:I,releaseShaderCache:z,programs:v,dispose:H}}function $C(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,p){a.get(u)[d]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function e3(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function rx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function sx(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(g,_,y,M,A,b){let x=a[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:A,group:b},a[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=A,x.group=b),e++,x}function d(g,_,y,M,A,b){const x=u(g,_,y,M,A,b);y.transmission>0?r.push(x):y.transparent===!0?o.push(x):n.push(x)}function p(g,_,y,M,A,b){const x=u(g,_,y,M,A,b);y.transmission>0?r.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function m(g,_){n.length>1&&n.sort(g||e3),r.length>1&&r.sort(_||rx),o.length>1&&o.sort(_||rx)}function v(){for(let g=e,_=a.length;g<_;g++){const y=a[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:p,finish:v,sort:m}}function t3(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new sx,a.set(r,[u])):o>=c.length?(u=new sx,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function n3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new Vt};break;case"SpotLight":n={position:new K,direction:new K,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new K,halfWidth:new K,halfHeight:new K};break}return a[e.id]=n,n}}}function i3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let a3=0;function r3(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function s3(a){const e=new n3,n=i3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const o=new K,c=new pn,u=new pn;function d(m){let v=0,g=0,_=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let y=0,M=0,A=0,b=0,x=0,U=0,R=0,N=0,L=0,I=0,z=0;m.sort(r3);for(let T=0,D=m.length;T<D;T++){const X=m[T],ee=X.color,ae=X.intensity,he=X.distance;let $=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===uo?$=X.shadow.map.texture:$=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)v+=ee.r*ae,g+=ee.g*ae,_+=ee.b*ae;else if(X.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(X.sh.coefficients[O],ae);z++}else if(X.isDirectionalLight){const O=e.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const F=X.shadow,k=n.get(X);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=$,r.directionalShadowMatrix[y]=X.shadow.matrix,U++}r.directional[y]=O,y++}else if(X.isSpotLight){const O=e.get(X);O.position.setFromMatrixPosition(X.matrixWorld),O.color.copy(ee).multiplyScalar(ae),O.distance=he,O.coneCos=Math.cos(X.angle),O.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),O.decay=X.decay,r.spot[A]=O;const F=X.shadow;if(X.map&&(r.spotLightMap[L]=X.map,L++,F.updateMatrices(X),X.castShadow&&I++),r.spotLightMatrix[A]=F.matrix,X.castShadow){const k=n.get(X);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,r.spotShadow[A]=k,r.spotShadowMap[A]=$,N++}A++}else if(X.isRectAreaLight){const O=e.get(X);O.color.copy(ee).multiplyScalar(ae),O.halfWidth.set(X.width*.5,0,0),O.halfHeight.set(0,X.height*.5,0),r.rectArea[b]=O,b++}else if(X.isPointLight){const O=e.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),O.distance=X.distance,O.decay=X.decay,X.castShadow){const F=X.shadow,k=n.get(X);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,r.pointShadow[M]=k,r.pointShadowMap[M]=$,r.pointShadowMatrix[M]=X.shadow.matrix,R++}r.point[M]=O,M++}else if(X.isHemisphereLight){const O=e.get(X);O.skyColor.copy(X.color).multiplyScalar(ae),O.groundColor.copy(X.groundColor).multiplyScalar(ae),r.hemi[x]=O,x++}}b>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=_;const H=r.hash;(H.directionalLength!==y||H.pointLength!==M||H.spotLength!==A||H.rectAreaLength!==b||H.hemiLength!==x||H.numDirectionalShadows!==U||H.numPointShadows!==R||H.numSpotShadows!==N||H.numSpotMaps!==L||H.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=b,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=N+L-I,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,H.directionalLength=y,H.pointLength=M,H.spotLength=A,H.rectAreaLength=b,H.hemiLength=x,H.numDirectionalShadows=U,H.numPointShadows=R,H.numSpotShadows=N,H.numSpotMaps=L,H.numLightProbes=z,r.version=a3++)}function p(m,v){let g=0,_=0,y=0,M=0,A=0;const b=v.matrixWorldInverse;for(let x=0,U=m.length;x<U;x++){const R=m[x];if(R.isDirectionalLight){const N=r.directional[g];N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(b),g++}else if(R.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(b),N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(b),y++}else if(R.isRectAreaLight){const N=r.rectArea[M];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(b),u.identity(),c.copy(R.matrixWorld),c.premultiply(b),u.extractRotation(c),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),M++}else if(R.isPointLight){const N=r.point[_];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(b),_++}else if(R.isHemisphereLight){const N=r.hemi[A];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(b),A++}}}return{setup:d,setupView:p,state:r}}function ox(a){const e=new s3(a),n=[],r=[];function o(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function o3(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new ox(a),e.set(o,[d])):c>=u.length?(d=new ox(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const l3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c3=`uniform sampler2D shadow_pass;
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
}`,u3=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],f3=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],lx=new pn,Sl=new K,kh=new K;function d3(a,e,n){let r=new xy;const o=new qe,c=new qe,u=new cn,d=new RA,p=new wA,m={},v=n.maxTextureSize,g={[Ia]:Ln,[Ln]:Ia,[ui]:ui},_=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:l3,fragmentShader:c3}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new di;M.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new $n(M,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let x=this.type;this.render=function(I,z,H){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||I.length===0)return;I.type===nT&&(pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Ru);const T=a.getRenderTarget(),D=a.getActiveCubeFace(),X=a.getActiveMipmapLevel(),ee=a.state;ee.setBlending(ei),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const ae=x!==this.type;ae&&z.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach($=>$.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,$=I.length;he<$;he++){const O=I[he],F=O.shadow;if(F===void 0){pt("WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const k=F.getFrameExtents();if(o.multiply(k),c.copy(F.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/k.x),o.x=c.x*k.x,F.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/k.y),o.y=c.y*k.y,F.mapSize.y=c.y)),F.map===null||ae===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ml){if(O.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new En(o.x,o.y,{format:uo,type:Fa,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),F.map.texture.name=O.name+".shadowMap",F.map.depthTexture=new ho(o.x,o.y,aa),F.map.depthTexture.name=O.name+".shadowMapDepth",F.map.depthTexture.format=Ha,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xn,F.map.depthTexture.magFilter=Xn}else{O.isPointLight?(F.map=new _y(o.x),F.map.depthTexture=new uA(o.x,ji)):(F.map=new En(o.x,o.y),F.map.depthTexture=new ho(o.x,o.y,ji)),F.map.depthTexture.name=O.name+".shadowMap",F.map.depthTexture.format=Ha;const ge=a.state.buffers.depth.getReversed();this.type===Ru?(F.map.depthTexture.compareFunction=ge?om:sm,F.map.depthTexture.minFilter=Mn,F.map.depthTexture.magFilter=Mn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xn,F.map.depthTexture.magFilter=Xn)}F.camera.updateProjectionMatrix()}const xe=F.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<xe;ge++){if(F.map.isWebGLCubeRenderTarget)a.setRenderTarget(F.map,ge),a.clear();else{ge===0&&(a.setRenderTarget(F.map),a.clear());const P=F.getViewport(ge);u.set(c.x*P.x,c.y*P.y,c.x*P.z,c.y*P.w),ee.viewport(u)}if(O.isPointLight){const P=F.camera,ie=F.matrix,ue=O.distance||P.far;ue!==P.far&&(P.far=ue,P.updateProjectionMatrix()),Sl.setFromMatrixPosition(O.matrixWorld),P.position.copy(Sl),kh.copy(P.position),kh.add(u3[ge]),P.up.copy(f3[ge]),P.lookAt(kh),P.updateMatrixWorld(),ie.makeTranslation(-Sl.x,-Sl.y,-Sl.z),lx.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),F._frustum.setFromProjectionMatrix(lx,P.coordinateSystem,P.reversedDepth)}else F.updateMatrices(O);r=F.getFrustum(),N(z,H,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===Ml&&U(F,H),F.needsUpdate=!1}x=this.type,b.needsUpdate=!1,a.setRenderTarget(T,D,X)};function U(I,z){const H=e.update(A);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new En(o.x,o.y,{format:uo,type:Fa})),_.uniforms.shadow_pass.value=I.map.depthTexture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,a.setRenderTarget(I.mapPass),a.clear(),a.renderBufferDirect(z,null,H,_,A,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,a.setRenderTarget(I.map),a.clear(),a.renderBufferDirect(z,null,H,y,A,null)}function R(I,z,H,T){let D=null;const X=H.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(X!==void 0)D=X;else if(D=H.isPointLight===!0?p:d,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ee=D.uuid,ae=z.uuid;let he=m[ee];he===void 0&&(he={},m[ee]=he);let $=he[ae];$===void 0&&($=D.clone(),he[ae]=$,z.addEventListener("dispose",L)),D=$}if(D.visible=z.visible,D.wireframe=z.wireframe,T===Ml?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:g[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,H.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ee=a.properties.get(D);ee.light=H}return D}function N(I,z,H,T,D){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===Ml)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,I.matrixWorld);const ae=e.update(I),he=I.material;if(Array.isArray(he)){const $=ae.groups;for(let O=0,F=$.length;O<F;O++){const k=$[O],xe=he[k.materialIndex];if(xe&&xe.visible){const ge=R(I,xe,T,D);I.onBeforeShadow(a,I,z,H,ae,ge,k),a.renderBufferDirect(H,null,ae,ge,I,k),I.onAfterShadow(a,I,z,H,ae,ge,k)}}}else if(he.visible){const $=R(I,he,T,D);I.onBeforeShadow(a,I,z,H,ae,$,null),a.renderBufferDirect(H,null,ae,$,I,null),I.onAfterShadow(a,I,z,H,ae,$,null)}}const ee=I.children;for(let ae=0,he=ee.length;ae<he;ae++)N(ee[ae],z,H,T,D)}function L(I){I.target.removeEventListener("dispose",L);for(const H in m){const T=m[H],D=I.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}const h3={[Qh]:zu,[Jh]:tp,[$h]:np,[oo]:ep,[zu]:Qh,[tp]:Jh,[np]:$h,[ep]:oo};function p3(a,e){function n(){let j=!1;const Pe=new cn;let Ce=null;const Ge=new cn(0,0,0,0);return{setMask:function(Ae){Ce!==Ae&&!j&&(a.colorMask(Ae,Ae,Ae,Ae),Ce=Ae)},setLocked:function(Ae){j=Ae},setClear:function(Ae,be,Ue,ft,Wt){Wt===!0&&(Ae*=ft,be*=ft,Ue*=ft),Pe.set(Ae,be,Ue,ft),Ge.equals(Pe)===!1&&(a.clearColor(Ae,be,Ue,ft),Ge.copy(Pe))},reset:function(){j=!1,Ce=null,Ge.set(-1,0,0,0)}}}function r(){let j=!1,Pe=!1,Ce=null,Ge=null,Ae=null;return{setReversed:function(be){if(Pe!==be){const Ue=e.get("EXT_clip_control");be?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Pe=be;const ft=Ae;Ae=null,this.setClear(ft)}},getReversed:function(){return Pe},setTest:function(be){be?re(a.DEPTH_TEST):De(a.DEPTH_TEST)},setMask:function(be){Ce!==be&&!j&&(a.depthMask(be),Ce=be)},setFunc:function(be){if(Pe&&(be=h3[be]),Ge!==be){switch(be){case Qh:a.depthFunc(a.NEVER);break;case zu:a.depthFunc(a.ALWAYS);break;case Jh:a.depthFunc(a.LESS);break;case oo:a.depthFunc(a.LEQUAL);break;case $h:a.depthFunc(a.EQUAL);break;case ep:a.depthFunc(a.GEQUAL);break;case tp:a.depthFunc(a.GREATER);break;case np:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ge=be}},setLocked:function(be){j=be},setClear:function(be){Ae!==be&&(Pe&&(be=1-be),a.clearDepth(be),Ae=be)},reset:function(){j=!1,Ce=null,Ge=null,Ae=null,Pe=!1}}}function o(){let j=!1,Pe=null,Ce=null,Ge=null,Ae=null,be=null,Ue=null,ft=null,Wt=null;return{setTest:function(Nt){j||(Nt?re(a.STENCIL_TEST):De(a.STENCIL_TEST))},setMask:function(Nt){Pe!==Nt&&!j&&(a.stencilMask(Nt),Pe=Nt)},setFunc:function(Nt,qn,zi){(Ce!==Nt||Ge!==qn||Ae!==zi)&&(a.stencilFunc(Nt,qn,zi),Ce=Nt,Ge=qn,Ae=zi)},setOp:function(Nt,qn,zi){(be!==Nt||Ue!==qn||ft!==zi)&&(a.stencilOp(Nt,qn,zi),be=Nt,Ue=qn,ft=zi)},setLocked:function(Nt){j=Nt},setClear:function(Nt){Wt!==Nt&&(a.clearStencil(Nt),Wt=Nt)},reset:function(){j=!1,Pe=null,Ce=null,Ge=null,Ae=null,be=null,Ue=null,ft=null,Wt=null}}}const c=new n,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let v={},g={},_=new WeakMap,y=[],M=null,A=!1,b=null,x=null,U=null,R=null,N=null,L=null,I=null,z=new Vt(0,0,0),H=0,T=!1,D=null,X=null,ee=null,ae=null,he=null;const $=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,F=0;const k=a.getParameter(a.VERSION);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=F>=2);let xe=null,ge={};const P=a.getParameter(a.SCISSOR_BOX),ie=a.getParameter(a.VIEWPORT),ue=new cn().fromArray(P),Se=new cn().fromArray(ie);function Me(j,Pe,Ce,Ge){const Ae=new Uint8Array(4),be=a.createTexture();a.bindTexture(j,be),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ue=0;Ue<Ce;Ue++)j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?a.texImage3D(Pe,0,a.RGBA,1,1,Ge,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(Pe+Ue,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return be}const te={};te[a.TEXTURE_2D]=Me(a.TEXTURE_2D,a.TEXTURE_2D,1),te[a.TEXTURE_CUBE_MAP]=Me(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[a.TEXTURE_2D_ARRAY]=Me(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),te[a.TEXTURE_3D]=Me(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),re(a.DEPTH_TEST),u.setFunc(oo),dt(!1),en(d_),re(a.CULL_FACE),ct(ei);function re(j){v[j]!==!0&&(a.enable(j),v[j]=!0)}function De(j){v[j]!==!1&&(a.disable(j),v[j]=!1)}function Fe(j,Pe){return g[j]!==Pe?(a.bindFramebuffer(j,Pe),g[j]=Pe,j===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Pe),j===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ze(j,Pe){let Ce=y,Ge=!1;if(j){Ce=_.get(Pe),Ce===void 0&&(Ce=[],_.set(Pe,Ce));const Ae=j.textures;if(Ce.length!==Ae.length||Ce[0]!==a.COLOR_ATTACHMENT0){for(let be=0,Ue=Ae.length;be<Ue;be++)Ce[be]=a.COLOR_ATTACHMENT0+be;Ce.length=Ae.length,Ge=!0}}else Ce[0]!==a.BACK&&(Ce[0]=a.BACK,Ge=!0);Ge&&a.drawBuffers(Ce)}function at(j){return M!==j?(a.useProgram(j),M=j,!0):!1}const Ct={[ts]:a.FUNC_ADD,[aT]:a.FUNC_SUBTRACT,[rT]:a.FUNC_REVERSE_SUBTRACT};Ct[sT]=a.MIN,Ct[oT]=a.MAX;const rt={[lT]:a.ZERO,[cT]:a.ONE,[uT]:a.SRC_COLOR,[Zh]:a.SRC_ALPHA,[gT]:a.SRC_ALPHA_SATURATE,[pT]:a.DST_COLOR,[dT]:a.DST_ALPHA,[fT]:a.ONE_MINUS_SRC_COLOR,[Kh]:a.ONE_MINUS_SRC_ALPHA,[mT]:a.ONE_MINUS_DST_COLOR,[hT]:a.ONE_MINUS_DST_ALPHA,[vT]:a.CONSTANT_COLOR,[_T]:a.ONE_MINUS_CONSTANT_COLOR,[xT]:a.CONSTANT_ALPHA,[yT]:a.ONE_MINUS_CONSTANT_ALPHA};function ct(j,Pe,Ce,Ge,Ae,be,Ue,ft,Wt,Nt){if(j===ei){A===!0&&(De(a.BLEND),A=!1);return}if(A===!1&&(re(a.BLEND),A=!0),j!==iT){if(j!==b||Nt!==T){if((x!==ts||N!==ts)&&(a.blendEquation(a.FUNC_ADD),x=ts,N=ts),Nt)switch(j){case ro:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Pu:a.blendFunc(a.ONE,a.ONE);break;case h_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case p_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Bt("WebGLState: Invalid blending: ",j);break}else switch(j){case ro:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Pu:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case h_:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p_:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",j);break}U=null,R=null,L=null,I=null,z.set(0,0,0),H=0,b=j,T=Nt}return}Ae=Ae||Pe,be=be||Ce,Ue=Ue||Ge,(Pe!==x||Ae!==N)&&(a.blendEquationSeparate(Ct[Pe],Ct[Ae]),x=Pe,N=Ae),(Ce!==U||Ge!==R||be!==L||Ue!==I)&&(a.blendFuncSeparate(rt[Ce],rt[Ge],rt[be],rt[Ue]),U=Ce,R=Ge,L=be,I=Ue),(ft.equals(z)===!1||Wt!==H)&&(a.blendColor(ft.r,ft.g,ft.b,Wt),z.copy(ft),H=Wt),b=j,T=!1}function Ut(j,Pe){j.side===ui?De(a.CULL_FACE):re(a.CULL_FACE);let Ce=j.side===Ln;Pe&&(Ce=!Ce),dt(Ce),j.blending===ro&&j.transparent===!1?ct(ei):ct(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),c.setMask(j.colorWrite);const Ge=j.stencilWrite;d.setTest(Ge),Ge&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),sn(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?re(a.SAMPLE_ALPHA_TO_COVERAGE):De(a.SAMPLE_ALPHA_TO_COVERAGE)}function dt(j){D!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),D=j)}function en(j){j!==eT?(re(a.CULL_FACE),j!==X&&(j===d_?a.cullFace(a.BACK):j===tT?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):De(a.CULL_FACE),X=j}function W(j){j!==ee&&(O&&a.lineWidth(j),ee=j)}function sn(j,Pe,Ce){j?(re(a.POLYGON_OFFSET_FILL),(ae!==Pe||he!==Ce)&&(a.polygonOffset(Pe,Ce),ae=Pe,he=Ce)):De(a.POLYGON_OFFSET_FILL)}function Dt(j){j?re(a.SCISSOR_TEST):De(a.SCISSOR_TEST)}function kt(j){j===void 0&&(j=a.TEXTURE0+$-1),xe!==j&&(a.activeTexture(j),xe=j)}function Je(j,Pe,Ce){Ce===void 0&&(xe===null?Ce=a.TEXTURE0+$-1:Ce=xe);let Ge=ge[Ce];Ge===void 0&&(Ge={type:void 0,texture:void 0},ge[Ce]=Ge),(Ge.type!==j||Ge.texture!==Pe)&&(xe!==Ce&&(a.activeTexture(Ce),xe=Ce),a.bindTexture(j,Pe||te[j]),Ge.type=j,Ge.texture=Pe)}function B(){const j=ge[xe];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function E(){try{a.compressedTexImage2D(...arguments)}catch(j){Bt("WebGLState:",j)}}function Y(){try{a.compressedTexImage3D(...arguments)}catch(j){Bt("WebGLState:",j)}}function ve(){try{a.texSubImage2D(...arguments)}catch(j){Bt("WebGLState:",j)}}function Ee(){try{a.texSubImage3D(...arguments)}catch(j){Bt("WebGLState:",j)}}function pe(){try{a.compressedTexSubImage2D(...arguments)}catch(j){Bt("WebGLState:",j)}}function et(){try{a.compressedTexSubImage3D(...arguments)}catch(j){Bt("WebGLState:",j)}}function Ne(){try{a.texStorage2D(...arguments)}catch(j){Bt("WebGLState:",j)}}function Ze(){try{a.texStorage3D(...arguments)}catch(j){Bt("WebGLState:",j)}}function ut(){try{a.texImage2D(...arguments)}catch(j){Bt("WebGLState:",j)}}function Re(){try{a.texImage3D(...arguments)}catch(j){Bt("WebGLState:",j)}}function we(j){ue.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),ue.copy(j))}function Ve(j){Se.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),Se.copy(j))}function He(j,Pe){let Ce=m.get(Pe);Ce===void 0&&(Ce=new WeakMap,m.set(Pe,Ce));let Ge=Ce.get(j);Ge===void 0&&(Ge=a.getUniformBlockIndex(Pe,j.name),Ce.set(j,Ge))}function Le(j,Pe){const Ge=m.get(Pe).get(j);p.get(Pe)!==Ge&&(a.uniformBlockBinding(Pe,Ge,j.__bindingPointIndex),p.set(Pe,Ge))}function vt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},xe=null,ge={},g={},_=new WeakMap,y=[],M=null,A=!1,b=null,x=null,U=null,R=null,N=null,L=null,I=null,z=new Vt(0,0,0),H=0,T=!1,D=null,X=null,ee=null,ae=null,he=null,ue.set(0,0,a.canvas.width,a.canvas.height),Se.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:re,disable:De,bindFramebuffer:Fe,drawBuffers:ze,useProgram:at,setBlending:ct,setMaterial:Ut,setFlipSided:dt,setCullFace:en,setLineWidth:W,setPolygonOffset:sn,setScissorTest:Dt,activeTexture:kt,bindTexture:Je,unbindTexture:B,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:ut,texImage3D:Re,updateUBOMapping:He,uniformBlockBinding:Le,texStorage2D:Ne,texStorage3D:Ze,texSubImage2D:ve,texSubImage3D:Ee,compressedTexSubImage2D:pe,compressedTexSubImage3D:et,scissor:we,viewport:Ve,reset:vt}}function m3(a,e,n,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new qe,v=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(B,E){return y?new OffscreenCanvas(B,E):Fu("canvas")}function A(B,E,Y){let ve=1;const Ee=Je(B);if((Ee.width>Y||Ee.height>Y)&&(ve=Y/Math.max(Ee.width,Ee.height)),ve<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const pe=Math.floor(ve*Ee.width),et=Math.floor(ve*Ee.height);g===void 0&&(g=M(pe,et));const Ne=E?M(pe,et):g;return Ne.width=pe,Ne.height=et,Ne.getContext("2d").drawImage(B,0,0,pe,et),pt("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+pe+"x"+et+")."),Ne}else return"data"in B&&pt("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),B;return B}function b(B){return B.generateMipmaps}function x(B){a.generateMipmap(B)}function U(B){return B.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?a.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(B,E,Y,ve,Ee=!1){if(B!==null){if(a[B]!==void 0)return a[B];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let pe=E;if(E===a.RED&&(Y===a.FLOAT&&(pe=a.R32F),Y===a.HALF_FLOAT&&(pe=a.R16F),Y===a.UNSIGNED_BYTE&&(pe=a.R8)),E===a.RED_INTEGER&&(Y===a.UNSIGNED_BYTE&&(pe=a.R8UI),Y===a.UNSIGNED_SHORT&&(pe=a.R16UI),Y===a.UNSIGNED_INT&&(pe=a.R32UI),Y===a.BYTE&&(pe=a.R8I),Y===a.SHORT&&(pe=a.R16I),Y===a.INT&&(pe=a.R32I)),E===a.RG&&(Y===a.FLOAT&&(pe=a.RG32F),Y===a.HALF_FLOAT&&(pe=a.RG16F),Y===a.UNSIGNED_BYTE&&(pe=a.RG8)),E===a.RG_INTEGER&&(Y===a.UNSIGNED_BYTE&&(pe=a.RG8UI),Y===a.UNSIGNED_SHORT&&(pe=a.RG16UI),Y===a.UNSIGNED_INT&&(pe=a.RG32UI),Y===a.BYTE&&(pe=a.RG8I),Y===a.SHORT&&(pe=a.RG16I),Y===a.INT&&(pe=a.RG32I)),E===a.RGB_INTEGER&&(Y===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),Y===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),Y===a.UNSIGNED_INT&&(pe=a.RGB32UI),Y===a.BYTE&&(pe=a.RGB8I),Y===a.SHORT&&(pe=a.RGB16I),Y===a.INT&&(pe=a.RGB32I)),E===a.RGBA_INTEGER&&(Y===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),Y===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),Y===a.UNSIGNED_INT&&(pe=a.RGBA32UI),Y===a.BYTE&&(pe=a.RGBA8I),Y===a.SHORT&&(pe=a.RGBA16I),Y===a.INT&&(pe=a.RGBA32I)),E===a.RGB&&(Y===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),Y===a.UNSIGNED_INT_10F_11F_11F_REV&&(pe=a.R11F_G11F_B10F)),E===a.RGBA){const et=Ee?Bu:Lt.getTransfer(ve);Y===a.FLOAT&&(pe=a.RGBA32F),Y===a.HALF_FLOAT&&(pe=a.RGBA16F),Y===a.UNSIGNED_BYTE&&(pe=et===Zt?a.SRGB8_ALPHA8:a.RGBA8),Y===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),Y===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(B,E){let Y;return B?E===null||E===ji||E===co?Y=a.DEPTH24_STENCIL8:E===aa?Y=a.DEPTH32F_STENCIL8:E===Cl&&(Y=a.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===co?Y=a.DEPTH_COMPONENT24:E===aa?Y=a.DEPTH_COMPONENT32F:E===Cl&&(Y=a.DEPTH_COMPONENT16),Y}function L(B,E){return b(B)===!0||B.isFramebufferTexture&&B.minFilter!==Xn&&B.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?E.mipmaps.length:1}function I(B){const E=B.target;E.removeEventListener("dispose",I),H(E),E.isVideoTexture&&v.delete(E)}function z(B){const E=B.target;E.removeEventListener("dispose",z),D(E)}function H(B){const E=r.get(B);if(E.__webglInit===void 0)return;const Y=B.source,ve=_.get(Y);if(ve){const Ee=ve[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&T(B),Object.keys(ve).length===0&&_.delete(Y)}r.remove(B)}function T(B){const E=r.get(B);a.deleteTexture(E.__webglTexture);const Y=B.source,ve=_.get(Y);delete ve[E.__cacheKey],u.memory.textures--}function D(B){const E=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(E.__webglFramebuffer[ve]))for(let Ee=0;Ee<E.__webglFramebuffer[ve].length;Ee++)a.deleteFramebuffer(E.__webglFramebuffer[ve][Ee]);else a.deleteFramebuffer(E.__webglFramebuffer[ve]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[ve])}else{if(Array.isArray(E.__webglFramebuffer))for(let ve=0;ve<E.__webglFramebuffer.length;ve++)a.deleteFramebuffer(E.__webglFramebuffer[ve]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ve=0;ve<E.__webglColorRenderbuffer.length;ve++)E.__webglColorRenderbuffer[ve]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[ve]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=B.textures;for(let ve=0,Ee=Y.length;ve<Ee;ve++){const pe=r.get(Y[ve]);pe.__webglTexture&&(a.deleteTexture(pe.__webglTexture),u.memory.textures--),r.remove(Y[ve])}r.remove(B)}let X=0;function ee(){X=0}function ae(){const B=X;return B>=o.maxTextures&&pt("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),X+=1,B}function he(B){const E=[];return E.push(B.wrapS),E.push(B.wrapT),E.push(B.wrapR||0),E.push(B.magFilter),E.push(B.minFilter),E.push(B.anisotropy),E.push(B.internalFormat),E.push(B.format),E.push(B.type),E.push(B.generateMipmaps),E.push(B.premultiplyAlpha),E.push(B.flipY),E.push(B.unpackAlignment),E.push(B.colorSpace),E.join()}function $(B,E){const Y=r.get(B);if(B.isVideoTexture&&Dt(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&Y.__version!==B.version){const ve=B.image;if(ve===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(Y,B,E);return}}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,Y.__webglTexture,a.TEXTURE0+E)}function O(B,E){const Y=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){te(Y,B,E);return}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,Y.__webglTexture,a.TEXTURE0+E)}function F(B,E){const Y=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){te(Y,B,E);return}n.bindTexture(a.TEXTURE_3D,Y.__webglTexture,a.TEXTURE0+E)}function k(B,E){const Y=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&Y.__version!==B.version){re(Y,B,E);return}n.bindTexture(a.TEXTURE_CUBE_MAP,Y.__webglTexture,a.TEXTURE0+E)}const xe={[rp]:a.REPEAT,[Oa]:a.CLAMP_TO_EDGE,[sp]:a.MIRRORED_REPEAT},ge={[Xn]:a.NEAREST,[MT]:a.NEAREST_MIPMAP_NEAREST,[tu]:a.NEAREST_MIPMAP_LINEAR,[Mn]:a.LINEAR,[uh]:a.LINEAR_MIPMAP_NEAREST,[is]:a.LINEAR_MIPMAP_LINEAR},P={[AT]:a.NEVER,[UT]:a.ALWAYS,[RT]:a.LESS,[sm]:a.LEQUAL,[wT]:a.EQUAL,[om]:a.GEQUAL,[CT]:a.GREATER,[DT]:a.NOTEQUAL};function ie(B,E){if(E.type===aa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Mn||E.magFilter===uh||E.magFilter===tu||E.magFilter===is||E.minFilter===Mn||E.minFilter===uh||E.minFilter===tu||E.minFilter===is)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(B,a.TEXTURE_WRAP_S,xe[E.wrapS]),a.texParameteri(B,a.TEXTURE_WRAP_T,xe[E.wrapT]),(B===a.TEXTURE_3D||B===a.TEXTURE_2D_ARRAY)&&a.texParameteri(B,a.TEXTURE_WRAP_R,xe[E.wrapR]),a.texParameteri(B,a.TEXTURE_MAG_FILTER,ge[E.magFilter]),a.texParameteri(B,a.TEXTURE_MIN_FILTER,ge[E.minFilter]),E.compareFunction&&(a.texParameteri(B,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(B,a.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xn||E.minFilter!==tu&&E.minFilter!==is||E.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");a.texParameterf(B,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ue(B,E){let Y=!1;B.__webglInit===void 0&&(B.__webglInit=!0,E.addEventListener("dispose",I));const ve=E.source;let Ee=_.get(ve);Ee===void 0&&(Ee={},_.set(ve,Ee));const pe=he(E);if(pe!==B.__cacheKey){Ee[pe]===void 0&&(Ee[pe]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Y=!0),Ee[pe].usedTimes++;const et=Ee[B.__cacheKey];et!==void 0&&(Ee[B.__cacheKey].usedTimes--,et.usedTimes===0&&T(E)),B.__cacheKey=pe,B.__webglTexture=Ee[pe].texture}return Y}function Se(B,E,Y){return Math.floor(Math.floor(B/Y)/E)}function Me(B,E,Y,ve){const pe=B.updateRanges;if(pe.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,Y,ve,E.data);else{pe.sort((Re,we)=>Re.start-we.start);let et=0;for(let Re=1;Re<pe.length;Re++){const we=pe[et],Ve=pe[Re],He=we.start+we.count,Le=Se(Ve.start,E.width,4),vt=Se(we.start,E.width,4);Ve.start<=He+1&&Le===vt&&Se(Ve.start+Ve.count-1,E.width,4)===Le?we.count=Math.max(we.count,Ve.start+Ve.count-we.start):(++et,pe[et]=Ve)}pe.length=et+1;const Ne=a.getParameter(a.UNPACK_ROW_LENGTH),Ze=a.getParameter(a.UNPACK_SKIP_PIXELS),ut=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Re=0,we=pe.length;Re<we;Re++){const Ve=pe[Re],He=Math.floor(Ve.start/4),Le=Math.ceil(Ve.count/4),vt=He%E.width,j=Math.floor(He/E.width),Pe=Le,Ce=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,vt),a.pixelStorei(a.UNPACK_SKIP_ROWS,j),n.texSubImage2D(a.TEXTURE_2D,0,vt,j,Pe,Ce,Y,ve,E.data)}B.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ne),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ze),a.pixelStorei(a.UNPACK_SKIP_ROWS,ut)}}function te(B,E,Y){let ve=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=a.TEXTURE_3D);const Ee=ue(B,E),pe=E.source;n.bindTexture(ve,B.__webglTexture,a.TEXTURE0+Y);const et=r.get(pe);if(pe.version!==et.__version||Ee===!0){n.activeTexture(a.TEXTURE0+Y);const Ne=Lt.getPrimaries(Lt.workingColorSpace),Ze=E.colorSpace===ia?null:Lt.getPrimaries(E.colorSpace),ut=E.colorSpace===ia||Ne===Ze?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Re=A(E.image,!1,o.maxTextureSize);Re=kt(E,Re);const we=c.convert(E.format,E.colorSpace),Ve=c.convert(E.type);let He=R(E.internalFormat,we,Ve,E.colorSpace,E.isVideoTexture);ie(ve,E);let Le;const vt=E.mipmaps,j=E.isVideoTexture!==!0,Pe=et.__version===void 0||Ee===!0,Ce=pe.dataReady,Ge=L(E,Re);if(E.isDepthTexture)He=N(E.format===Tr,E.type),Pe&&(j?n.texStorage2D(a.TEXTURE_2D,1,He,Re.width,Re.height):n.texImage2D(a.TEXTURE_2D,0,He,Re.width,Re.height,0,we,Ve,null));else if(E.isDataTexture)if(vt.length>0){j&&Pe&&n.texStorage2D(a.TEXTURE_2D,Ge,He,vt[0].width,vt[0].height);for(let Ae=0,be=vt.length;Ae<be;Ae++)Le=vt[Ae],j?Ce&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Le.width,Le.height,we,Ve,Le.data):n.texImage2D(a.TEXTURE_2D,Ae,He,Le.width,Le.height,0,we,Ve,Le.data);E.generateMipmaps=!1}else j?(Pe&&n.texStorage2D(a.TEXTURE_2D,Ge,He,Re.width,Re.height),Ce&&Me(E,Re,we,Ve)):n.texImage2D(a.TEXTURE_2D,0,He,Re.width,Re.height,0,we,Ve,Re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&Pe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ge,He,vt[0].width,vt[0].height,Re.depth);for(let Ae=0,be=vt.length;Ae<be;Ae++)if(Le=vt[Ae],E.format!==qi)if(we!==null)if(j){if(Ce)if(E.layerUpdates.size>0){const Ue=F_(Le.width,Le.height,E.format,E.type);for(const ft of E.layerUpdates){const Wt=Le.data.subarray(ft*Ue/Le.data.BYTES_PER_ELEMENT,(ft+1)*Ue/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,ft,Le.width,Le.height,1,we,Wt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Le.width,Le.height,Re.depth,we,Le.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ae,He,Le.width,Le.height,Re.depth,0,Le.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ce&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Le.width,Le.height,Re.depth,we,Ve,Le.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Ae,He,Le.width,Le.height,Re.depth,0,we,Ve,Le.data)}else{j&&Pe&&n.texStorage2D(a.TEXTURE_2D,Ge,He,vt[0].width,vt[0].height);for(let Ae=0,be=vt.length;Ae<be;Ae++)Le=vt[Ae],E.format!==qi?we!==null?j?Ce&&n.compressedTexSubImage2D(a.TEXTURE_2D,Ae,0,0,Le.width,Le.height,we,Le.data):n.compressedTexImage2D(a.TEXTURE_2D,Ae,He,Le.width,Le.height,0,Le.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ce&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Le.width,Le.height,we,Ve,Le.data):n.texImage2D(a.TEXTURE_2D,Ae,He,Le.width,Le.height,0,we,Ve,Le.data)}else if(E.isDataArrayTexture)if(j){if(Pe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ge,He,Re.width,Re.height,Re.depth),Ce)if(E.layerUpdates.size>0){const Ae=F_(Re.width,Re.height,E.format,E.type);for(const be of E.layerUpdates){const Ue=Re.data.subarray(be*Ae/Re.data.BYTES_PER_ELEMENT,(be+1)*Ae/Re.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,be,Re.width,Re.height,1,we,Ve,Ue)}E.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,we,Ve,Re.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,He,Re.width,Re.height,Re.depth,0,we,Ve,Re.data);else if(E.isData3DTexture)j?(Pe&&n.texStorage3D(a.TEXTURE_3D,Ge,He,Re.width,Re.height,Re.depth),Ce&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,we,Ve,Re.data)):n.texImage3D(a.TEXTURE_3D,0,He,Re.width,Re.height,Re.depth,0,we,Ve,Re.data);else if(E.isFramebufferTexture){if(Pe)if(j)n.texStorage2D(a.TEXTURE_2D,Ge,He,Re.width,Re.height);else{let Ae=Re.width,be=Re.height;for(let Ue=0;Ue<Ge;Ue++)n.texImage2D(a.TEXTURE_2D,Ue,He,Ae,be,0,we,Ve,null),Ae>>=1,be>>=1}}else if(vt.length>0){if(j&&Pe){const Ae=Je(vt[0]);n.texStorage2D(a.TEXTURE_2D,Ge,He,Ae.width,Ae.height)}for(let Ae=0,be=vt.length;Ae<be;Ae++)Le=vt[Ae],j?Ce&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,we,Ve,Le):n.texImage2D(a.TEXTURE_2D,Ae,He,we,Ve,Le);E.generateMipmaps=!1}else if(j){if(Pe){const Ae=Je(Re);n.texStorage2D(a.TEXTURE_2D,Ge,He,Ae.width,Ae.height)}Ce&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,we,Ve,Re)}else n.texImage2D(a.TEXTURE_2D,0,He,we,Ve,Re);b(E)&&x(ve),et.__version=pe.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function re(B,E,Y){if(E.image.length!==6)return;const ve=ue(B,E),Ee=E.source;n.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+Y);const pe=r.get(Ee);if(Ee.version!==pe.__version||ve===!0){n.activeTexture(a.TEXTURE0+Y);const et=Lt.getPrimaries(Lt.workingColorSpace),Ne=E.colorSpace===ia?null:Lt.getPrimaries(E.colorSpace),Ze=E.colorSpace===ia||et===Ne?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const ut=E.isCompressedTexture||E.image[0].isCompressedTexture,Re=E.image[0]&&E.image[0].isDataTexture,we=[];for(let be=0;be<6;be++)!ut&&!Re?we[be]=A(E.image[be],!0,o.maxCubemapSize):we[be]=Re?E.image[be].image:E.image[be],we[be]=kt(E,we[be]);const Ve=we[0],He=c.convert(E.format,E.colorSpace),Le=c.convert(E.type),vt=R(E.internalFormat,He,Le,E.colorSpace),j=E.isVideoTexture!==!0,Pe=pe.__version===void 0||ve===!0,Ce=Ee.dataReady;let Ge=L(E,Ve);ie(a.TEXTURE_CUBE_MAP,E);let Ae;if(ut){j&&Pe&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ge,vt,Ve.width,Ve.height);for(let be=0;be<6;be++){Ae=we[be].mipmaps;for(let Ue=0;Ue<Ae.length;Ue++){const ft=Ae[Ue];E.format!==qi?He!==null?j?Ce&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue,0,0,ft.width,ft.height,He,ft.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue,vt,ft.width,ft.height,0,ft.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue,0,0,ft.width,ft.height,He,Le,ft.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue,vt,ft.width,ft.height,0,He,Le,ft.data)}}}else{if(Ae=E.mipmaps,j&&Pe){Ae.length>0&&Ge++;const be=Je(we[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ge,vt,be.width,be.height)}for(let be=0;be<6;be++)if(Re){j?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,we[be].width,we[be].height,He,Le,we[be].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,vt,we[be].width,we[be].height,0,He,Le,we[be].data);for(let Ue=0;Ue<Ae.length;Ue++){const Wt=Ae[Ue].image[be].image;j?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue+1,0,0,Wt.width,Wt.height,He,Le,Wt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue+1,vt,Wt.width,Wt.height,0,He,Le,Wt.data)}}else{j?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,He,Le,we[be]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,vt,He,Le,we[be]);for(let Ue=0;Ue<Ae.length;Ue++){const ft=Ae[Ue];j?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue+1,0,0,He,Le,ft.image[be]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue+1,vt,He,Le,ft.image[be])}}}b(E)&&x(a.TEXTURE_CUBE_MAP),pe.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function De(B,E,Y,ve,Ee,pe){const et=c.convert(Y.format,Y.colorSpace),Ne=c.convert(Y.type),Ze=R(Y.internalFormat,et,Ne,Y.colorSpace),ut=r.get(E),Re=r.get(Y);if(Re.__renderTarget=E,!ut.__hasExternalTextures){const we=Math.max(1,E.width>>pe),Ve=Math.max(1,E.height>>pe);Ee===a.TEXTURE_3D||Ee===a.TEXTURE_2D_ARRAY?n.texImage3D(Ee,pe,Ze,we,Ve,E.depth,0,et,Ne,null):n.texImage2D(Ee,pe,Ze,we,Ve,0,et,Ne,null)}n.bindFramebuffer(a.FRAMEBUFFER,B),sn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,Ee,Re.__webglTexture,0,W(E)):(Ee===a.TEXTURE_2D||Ee>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ve,Ee,Re.__webglTexture,pe),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Fe(B,E,Y){if(a.bindRenderbuffer(a.RENDERBUFFER,B),E.depthBuffer){const ve=E.depthTexture,Ee=ve&&ve.isDepthTexture?ve.type:null,pe=N(E.stencilBuffer,Ee),et=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;sn(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,W(E),pe,E.width,E.height):Y?a.renderbufferStorageMultisample(a.RENDERBUFFER,W(E),pe,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,pe,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,et,a.RENDERBUFFER,B)}else{const ve=E.textures;for(let Ee=0;Ee<ve.length;Ee++){const pe=ve[Ee],et=c.convert(pe.format,pe.colorSpace),Ne=c.convert(pe.type),Ze=R(pe.internalFormat,et,Ne,pe.colorSpace);sn(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,W(E),Ze,E.width,E.height):Y?a.renderbufferStorageMultisample(a.RENDERBUFFER,W(E),Ze,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Ze,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ze(B,E,Y){const ve=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,B),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=r.get(E.depthTexture);if(Ee.__renderTarget=E,(!Ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ve){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),Ee.__webglTexture===void 0){Ee.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,Ee.__webglTexture),ie(a.TEXTURE_CUBE_MAP,E.depthTexture);const ut=c.convert(E.depthTexture.format),Re=c.convert(E.depthTexture.type);let we;E.depthTexture.format===Ha?we=a.DEPTH_COMPONENT24:E.depthTexture.format===Tr&&(we=a.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,we,E.width,E.height,0,ut,Re,null)}}else $(E.depthTexture,0);const pe=Ee.__webglTexture,et=W(E),Ne=ve?a.TEXTURE_CUBE_MAP_POSITIVE_X+Y:a.TEXTURE_2D,Ze=E.depthTexture.format===Tr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ha)sn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ze,Ne,pe,0,et):a.framebufferTexture2D(a.FRAMEBUFFER,Ze,Ne,pe,0);else if(E.depthTexture.format===Tr)sn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ze,Ne,pe,0,et):a.framebufferTexture2D(a.FRAMEBUFFER,Ze,Ne,pe,0);else throw new Error("Unknown depthTexture format")}function at(B){const E=r.get(B),Y=B.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==B.depthTexture){const ve=B.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ve){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ve.removeEventListener("dispose",Ee)};ve.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=ve}if(B.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let ve=0;ve<6;ve++)ze(E.__webglFramebuffer[ve],B,ve);else{const ve=B.texture.mipmaps;ve&&ve.length>0?ze(E.__webglFramebuffer[0],B,0):ze(E.__webglFramebuffer,B,0)}else if(Y){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]===void 0)E.__webglDepthbuffer[ve]=a.createRenderbuffer(),Fe(E.__webglDepthbuffer[ve],B,!1);else{const Ee=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer[ve];a.bindRenderbuffer(a.RENDERBUFFER,pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ee,a.RENDERBUFFER,pe)}}else{const ve=B.texture.mipmaps;if(ve&&ve.length>0?n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Fe(E.__webglDepthbuffer,B,!1);else{const Ee=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ee,a.RENDERBUFFER,pe)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ct(B,E,Y){const ve=r.get(B);E!==void 0&&De(ve.__webglFramebuffer,B,B.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Y!==void 0&&at(B)}function rt(B){const E=B.texture,Y=r.get(B),ve=r.get(E);B.addEventListener("dispose",z);const Ee=B.textures,pe=B.isWebGLCubeRenderTarget===!0,et=Ee.length>1;if(et||(ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture()),ve.__version=E.version,u.memory.textures++),pe){Y.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Ne]=[];for(let Ze=0;Ze<E.mipmaps.length;Ze++)Y.__webglFramebuffer[Ne][Ze]=a.createFramebuffer()}else Y.__webglFramebuffer[Ne]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)Y.__webglFramebuffer[Ne]=a.createFramebuffer()}else Y.__webglFramebuffer=a.createFramebuffer();if(et)for(let Ne=0,Ze=Ee.length;Ne<Ze;Ne++){const ut=r.get(Ee[Ne]);ut.__webglTexture===void 0&&(ut.__webglTexture=a.createTexture(),u.memory.textures++)}if(B.samples>0&&sn(B)===!1){Y.__webglMultisampledFramebuffer=a.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Ee.length;Ne++){const Ze=Ee[Ne];Y.__webglColorRenderbuffer[Ne]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Y.__webglColorRenderbuffer[Ne]);const ut=c.convert(Ze.format,Ze.colorSpace),Re=c.convert(Ze.type),we=R(Ze.internalFormat,ut,Re,Ze.colorSpace,B.isXRRenderTarget===!0),Ve=W(B);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ve,we,B.width,B.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,Y.__webglColorRenderbuffer[Ne])}a.bindRenderbuffer(a.RENDERBUFFER,null),B.depthBuffer&&(Y.__webglDepthRenderbuffer=a.createRenderbuffer(),Fe(Y.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(pe){n.bindTexture(a.TEXTURE_CUBE_MAP,ve.__webglTexture),ie(a.TEXTURE_CUBE_MAP,E);for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ze=0;Ze<E.mipmaps.length;Ze++)De(Y.__webglFramebuffer[Ne][Ze],B,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ze);else De(Y.__webglFramebuffer[Ne],B,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);b(E)&&x(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(et){for(let Ne=0,Ze=Ee.length;Ne<Ze;Ne++){const ut=Ee[Ne],Re=r.get(ut);let we=a.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(we=B.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(we,Re.__webglTexture),ie(we,ut),De(Y.__webglFramebuffer,B,ut,a.COLOR_ATTACHMENT0+Ne,we,0),b(ut)&&x(we)}n.unbindTexture()}else{let Ne=a.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ne=B.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ne,ve.__webglTexture),ie(Ne,E),E.mipmaps&&E.mipmaps.length>0)for(let Ze=0;Ze<E.mipmaps.length;Ze++)De(Y.__webglFramebuffer[Ze],B,E,a.COLOR_ATTACHMENT0,Ne,Ze);else De(Y.__webglFramebuffer,B,E,a.COLOR_ATTACHMENT0,Ne,0);b(E)&&x(Ne),n.unbindTexture()}B.depthBuffer&&at(B)}function ct(B){const E=B.textures;for(let Y=0,ve=E.length;Y<ve;Y++){const Ee=E[Y];if(b(Ee)){const pe=U(B),et=r.get(Ee).__webglTexture;n.bindTexture(pe,et),x(pe),n.unbindTexture()}}}const Ut=[],dt=[];function en(B){if(B.samples>0){if(sn(B)===!1){const E=B.textures,Y=B.width,ve=B.height;let Ee=a.COLOR_BUFFER_BIT;const pe=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,et=r.get(B),Ne=E.length>1;if(Ne)for(let ut=0;ut<E.length;ut++)n.bindFramebuffer(a.FRAMEBUFFER,et.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ut,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,et.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ut,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer);const Ze=B.texture.mipmaps;Ze&&Ze.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,et.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let ut=0;ut<E.length;ut++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Ee|=a.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Ee|=a.STENCIL_BUFFER_BIT)),Ne){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,et.__webglColorRenderbuffer[ut]);const Re=r.get(E[ut]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Re,0)}a.blitFramebuffer(0,0,Y,ve,0,0,Y,ve,Ee,a.NEAREST),p===!0&&(Ut.length=0,dt.length=0,Ut.push(a.COLOR_ATTACHMENT0+ut),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Ut.push(pe),dt.push(pe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,dt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ne)for(let ut=0;ut<E.length;ut++){n.bindFramebuffer(a.FRAMEBUFFER,et.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ut,a.RENDERBUFFER,et.__webglColorRenderbuffer[ut]);const Re=r.get(E[ut]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,et.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ut,a.TEXTURE_2D,Re,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const E=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function W(B){return Math.min(o.maxSamples,B.samples)}function sn(B){const E=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Dt(B){const E=u.render.frame;v.get(B)!==E&&(v.set(B,E),B.update())}function kt(B,E){const Y=B.colorSpace,ve=B.format,Ee=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||Y!==wr&&Y!==ia&&(Lt.getTransfer(Y)===Zt?(ve!==qi||Ee!==wn)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",Y)),E}function Je(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=ae,this.resetTextureUnits=ee,this.setTexture2D=$,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=k,this.rebindTextures=Ct,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=De,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function g3(a,e){function n(r,o=ia){let c;const u=Lt.getTransfer(o);if(r===wn)return a.UNSIGNED_BYTE;if(r===tm)return a.UNSIGNED_SHORT_4_4_4_4;if(r===nm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===ny)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===iy)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===ey)return a.BYTE;if(r===ty)return a.SHORT;if(r===Cl)return a.UNSIGNED_SHORT;if(r===em)return a.INT;if(r===ji)return a.UNSIGNED_INT;if(r===aa)return a.FLOAT;if(r===Fa)return a.HALF_FLOAT;if(r===ay)return a.ALPHA;if(r===ry)return a.RGB;if(r===qi)return a.RGBA;if(r===Ha)return a.DEPTH_COMPONENT;if(r===Tr)return a.DEPTH_STENCIL;if(r===sy)return a.RED;if(r===im)return a.RED_INTEGER;if(r===uo)return a.RG;if(r===am)return a.RG_INTEGER;if(r===rm)return a.RGBA_INTEGER;if(r===wu||r===Cu||r===Du||r===Uu)if(u===Zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===wu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===wu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===op||r===lp||r===cp||r===up)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===op)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===up)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===vp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===fp||r===dp)return u===Zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===hp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===pp)return c.COMPRESSED_R11_EAC;if(r===mp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===gp)return c.COMPRESSED_RG11_EAC;if(r===vp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===_p||r===xp||r===yp||r===Sp||r===bp||r===Mp||r===Ep||r===Tp||r===Ap||r===Rp||r===wp||r===Cp||r===Dp||r===Up)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===_p)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ep)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ap)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Up)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Np||r===Lp||r===Op)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Np)return u===Zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Lp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Op)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pp||r===zp||r===Bp||r===Ip)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Pp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===zp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ip)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===co?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const v3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_3=`
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

}`;class x3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new yy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new hn({vertexShader:v3,fragmentShader:_3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $n(new Hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y3 extends ka{constructor(e,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",p=1,m=null,v=null,g=null,_=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",b=new x3,x={},U=n.getContextAttributes();let R=null,N=null;const L=[],I=[],z=new qe;let H=null;const T=new bi;T.viewport=new cn;const D=new bi;D.viewport=new cn;const X=[T,D],ee=new CA;let ae=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let re=L[te];return re===void 0&&(re=new Lh,L[te]=re),re.getTargetRaySpace()},this.getControllerGrip=function(te){let re=L[te];return re===void 0&&(re=new Lh,L[te]=re),re.getGripSpace()},this.getHand=function(te){let re=L[te];return re===void 0&&(re=new Lh,L[te]=re),re.getHandSpace()};function $(te){const re=I.indexOf(te.inputSource);if(re===-1)return;const De=L[re];De!==void 0&&(De.update(te.inputSource,te.frame,m||u),De.dispatchEvent({type:te.type,data:te.inputSource}))}function O(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",O),o.removeEventListener("inputsourceschange",F);for(let te=0;te<L.length;te++){const re=I[te];re!==null&&(I[te]=null,L[te].disconnect(re))}ae=null,he=null,b.reset();for(const te in x)delete x[te];e.setRenderTarget(R),y=null,_=null,g=null,o=null,N=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",O),o.addEventListener("inputsourceschange",F),U.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Fe=null,ze=null;U.depth&&(ze=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,De=U.stencil?Tr:Ha,Fe=U.stencil?co:ji);const at={colorFormat:n.RGBA8,depthFormat:ze,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(at),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new En(_.textureWidth,_.textureHeight,{format:qi,type:wn,depthTexture:new ho(_.textureWidth,_.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const De={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,De),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new En(y.framebufferWidth,y.framebufferHeight,{format:qi,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),Me.setContext(o),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function F(te){for(let re=0;re<te.removed.length;re++){const De=te.removed[re],Fe=I.indexOf(De);Fe>=0&&(I[Fe]=null,L[Fe].disconnect(De))}for(let re=0;re<te.added.length;re++){const De=te.added[re];let Fe=I.indexOf(De);if(Fe===-1){for(let at=0;at<L.length;at++)if(at>=I.length){I.push(De),Fe=at;break}else if(I[at]===null){I[at]=De,Fe=at;break}if(Fe===-1)break}const ze=L[Fe];ze&&ze.connect(De)}}const k=new K,xe=new K;function ge(te,re,De){k.setFromMatrixPosition(re.matrixWorld),xe.setFromMatrixPosition(De.matrixWorld);const Fe=k.distanceTo(xe),ze=re.projectionMatrix.elements,at=De.projectionMatrix.elements,Ct=ze[14]/(ze[10]-1),rt=ze[14]/(ze[10]+1),ct=(ze[9]+1)/ze[5],Ut=(ze[9]-1)/ze[5],dt=(ze[8]-1)/ze[0],en=(at[8]+1)/at[0],W=Ct*dt,sn=Ct*en,Dt=Fe/(-dt+en),kt=Dt*-dt;if(re.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(kt),te.translateZ(Dt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ze[10]===-1)te.projectionMatrix.copy(re.projectionMatrix),te.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Je=Ct+Dt,B=rt+Dt,E=W-kt,Y=sn+(Fe-kt),ve=ct*rt/B*Je,Ee=Ut*rt/B*Je;te.projectionMatrix.makePerspective(E,Y,ve,Ee,Je,B),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function P(te,re){re===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(re.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let re=te.near,De=te.far;b.texture!==null&&(b.depthNear>0&&(re=b.depthNear),b.depthFar>0&&(De=b.depthFar)),ee.near=D.near=T.near=re,ee.far=D.far=T.far=De,(ae!==ee.near||he!==ee.far)&&(o.updateRenderState({depthNear:ee.near,depthFar:ee.far}),ae=ee.near,he=ee.far),ee.layers.mask=te.layers.mask|6,T.layers.mask=ee.layers.mask&3,D.layers.mask=ee.layers.mask&5;const Fe=te.parent,ze=ee.cameras;P(ee,Fe);for(let at=0;at<ze.length;at++)P(ze[at],Fe);ze.length===2?ge(ee,T,D):ee.projectionMatrix.copy(T.projectionMatrix),ie(te,ee,Fe)};function ie(te,re,De){De===null?te.matrix.copy(re.matrixWorld):(te.matrix.copy(De.matrixWorld),te.matrix.invert(),te.matrix.multiply(re.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(re.projectionMatrix),te.projectionMatrixInverse.copy(re.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Fp*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(te){p=te,_!==null&&(_.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(ee)},this.getCameraTexture=function(te){return x[te]};let ue=null;function Se(te,re){if(v=re.getViewerPose(m||u),M=re,v!==null){const De=v.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Fe=!1;De.length!==ee.cameras.length&&(ee.cameras.length=0,Fe=!0);for(let rt=0;rt<De.length;rt++){const ct=De[rt];let Ut=null;if(y!==null)Ut=y.getViewport(ct);else{const en=g.getViewSubImage(_,ct);Ut=en.viewport,rt===0&&(e.setRenderTargetTextures(N,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(N))}let dt=X[rt];dt===void 0&&(dt=new bi,dt.layers.enable(rt),dt.viewport=new cn,X[rt]=dt),dt.matrix.fromArray(ct.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ct.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),rt===0&&(ee.matrix.copy(dt.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Fe===!0&&ee.cameras.push(dt)}const ze=o.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const rt=g.getDepthInformation(De[0]);rt&&rt.isValid&&rt.texture&&b.init(rt,o.renderState)}if(ze&&ze.includes("camera-access")&&A){e.state.unbindTexture(),g=r.getBinding();for(let rt=0;rt<De.length;rt++){const ct=De[rt].camera;if(ct){let Ut=x[ct];Ut||(Ut=new yy,x[ct]=Ut);const dt=g.getCameraImage(ct);Ut.sourceTexture=dt}}}}for(let De=0;De<L.length;De++){const Fe=I[De],ze=L[De];Fe!==null&&ze!==void 0&&ze.update(Fe,re,m||u)}ue&&ue(te,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),M=null}const Me=new My;Me.setAnimationLoop(Se),this.setAnimationLoop=function(te){ue=te},this.dispose=function(){}}}const $r=new Ga,S3=new pn;function b3(a,e){function n(b,x){b.matrixAutoUpdate===!0&&b.updateMatrix(),x.value.copy(b.matrix)}function r(b,x){x.color.getRGB(b.fogColor.value,my(a)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function o(b,x,U,R,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(b,x):x.isMeshToonMaterial?(c(b,x),g(b,x)):x.isMeshPhongMaterial?(c(b,x),v(b,x)):x.isMeshStandardMaterial?(c(b,x),_(b,x),x.isMeshPhysicalMaterial&&y(b,x,N)):x.isMeshMatcapMaterial?(c(b,x),M(b,x)):x.isMeshDepthMaterial?c(b,x):x.isMeshDistanceMaterial?(c(b,x),A(b,x)):x.isMeshNormalMaterial?c(b,x):x.isLineBasicMaterial?(u(b,x),x.isLineDashedMaterial&&d(b,x)):x.isPointsMaterial?p(b,x,U,R):x.isSpriteMaterial?m(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map,n(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.bumpMap&&(b.bumpMap.value=x.bumpMap,n(x.bumpMap,b.bumpMapTransform),b.bumpScale.value=x.bumpScale,x.side===Ln&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,n(x.normalMap,b.normalMapTransform),b.normalScale.value.copy(x.normalScale),x.side===Ln&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,n(x.displacementMap,b.displacementMapTransform),b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,b.emissiveMapTransform)),x.specularMap&&(b.specularMap.value=x.specularMap,n(x.specularMap,b.specularMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);const U=e.get(x),R=U.envMap,N=U.envMapRotation;R&&(b.envMap.value=R,$r.copy(N),$r.x*=-1,$r.y*=-1,$r.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),b.envMapRotation.value.setFromMatrix4(S3.makeRotationFromEuler($r)),b.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,b.lightMapTransform)),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,b.aoMapTransform))}function u(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,x.map&&(b.map.value=x.map,n(x.map,b.mapTransform))}function d(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function p(b,x,U,R){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*U,b.scale.value=R*.5,x.map&&(b.map.value=x.map,n(x.map,b.uvTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function m(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map,n(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function v(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}function g(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}function _(b,x){b.metalness.value=x.metalness,x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,b.metalnessMapTransform)),b.roughness.value=x.roughness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,b.roughnessMapTransform)),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function y(b,x,U){b.ior.value=x.ior,x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,b.sheenColorMapTransform)),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,b.sheenRoughnessMapTransform))),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,b.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(b.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Ln&&b.clearcoatNormalScale.value.negate())),x.dispersion>0&&(b.dispersion.value=x.dispersion),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,b.iridescenceMapTransform)),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=U.texture,b.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,b.transmissionMapTransform)),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(b.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(b.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,b.specularColorMapTransform)),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,b.specularIntensityMapTransform))}function M(b,x){x.matcap&&(b.matcap.value=x.matcap)}function A(b,x){const U=e.get(x).light;b.referencePosition.value.setFromMatrixPosition(U.matrixWorld),b.nearDistance.value=U.shadow.camera.near,b.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function M3(a,e,n,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,R){const N=R.program;r.uniformBlockBinding(U,N)}function m(U,R){let N=o[U.id];N===void 0&&(M(U),N=v(U),o[U.id]=N,U.addEventListener("dispose",b));const L=R.program;r.updateUBOMapping(U,L);const I=e.render.frame;c[U.id]!==I&&(_(U),c[U.id]=I)}function v(U){const R=g();U.__bindingPointIndex=R;const N=a.createBuffer(),L=U.__size,I=U.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,L,I),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,R,N),N}function g(){for(let U=0;U<d;U++)if(u.indexOf(U)===-1)return u.push(U),U;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const R=o[U.id],N=U.uniforms,L=U.__cache;a.bindBuffer(a.UNIFORM_BUFFER,R);for(let I=0,z=N.length;I<z;I++){const H=Array.isArray(N[I])?N[I]:[N[I]];for(let T=0,D=H.length;T<D;T++){const X=H[T];if(y(X,I,T,L)===!0){const ee=X.__offset,ae=Array.isArray(X.value)?X.value:[X.value];let he=0;for(let $=0;$<ae.length;$++){const O=ae[$],F=A(O);typeof O=="number"||typeof O=="boolean"?(X.__data[0]=O,a.bufferSubData(a.UNIFORM_BUFFER,ee+he,X.__data)):O.isMatrix3?(X.__data[0]=O.elements[0],X.__data[1]=O.elements[1],X.__data[2]=O.elements[2],X.__data[3]=0,X.__data[4]=O.elements[3],X.__data[5]=O.elements[4],X.__data[6]=O.elements[5],X.__data[7]=0,X.__data[8]=O.elements[6],X.__data[9]=O.elements[7],X.__data[10]=O.elements[8],X.__data[11]=0):(O.toArray(X.__data,he),he+=F.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ee,X.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(U,R,N,L){const I=U.value,z=R+"_"+N;if(L[z]===void 0)return typeof I=="number"||typeof I=="boolean"?L[z]=I:L[z]=I.clone(),!0;{const H=L[z];if(typeof I=="number"||typeof I=="boolean"){if(H!==I)return L[z]=I,!0}else if(H.equals(I)===!1)return H.copy(I),!0}return!1}function M(U){const R=U.uniforms;let N=0;const L=16;for(let z=0,H=R.length;z<H;z++){const T=Array.isArray(R[z])?R[z]:[R[z]];for(let D=0,X=T.length;D<X;D++){const ee=T[D],ae=Array.isArray(ee.value)?ee.value:[ee.value];for(let he=0,$=ae.length;he<$;he++){const O=ae[he],F=A(O),k=N%L,xe=k%F.boundary,ge=k+xe;N+=xe,ge!==0&&L-ge<F.storage&&(N+=L-ge),ee.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=N,N+=F.storage}}}const I=N%L;return I>0&&(N+=L-I),U.__size=N,U.__cache={},this}function A(U){const R={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pt("WebGLRenderer: Unsupported uniform value type.",U),R}function b(U){const R=U.target;R.removeEventListener("dispose",b);const N=u.indexOf(R.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(o[R.id]),delete o[R.id],delete c[R.id]}function x(){for(const U in o)a.deleteBuffer(o[U]);u=[],o={},c={}}return{bind:p,update:m,dispose:x}}const E3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ta=null;function T3(){return ta===null&&(ta=new aA(E3,16,16,uo,Fa),ta.name="DFG_LUT",ta.minFilter=Mn,ta.magFilter=Mn,ta.wrapS=Oa,ta.wrapT=Oa,ta.generateMipmaps=!1,ta.needsUpdate=!0),ta}class A3{constructor(e={}){const{canvas:n=NT(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:y=wn}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=y,b=new Set([rm,am,im]),x=new Set([wn,ji,Cl,co,tm,nm]),U=new Uint32Array(4),R=new Int32Array(4);let N=null,L=null;const I=[],z=[];let H=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=$t;let X=0,ee=0,ae=null,he=-1,$=null;const O=new cn,F=new cn;let k=null;const xe=new Vt(0);let ge=0,P=n.width,ie=n.height,ue=1,Se=null,Me=null;const te=new cn(0,0,P,ie),re=new cn(0,0,P,ie);let De=!1;const Fe=new xy;let ze=!1,at=!1;const Ct=new pn,rt=new K,ct=new cn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function en(){return ae===null?ue:1}let W=r;function sn(C,Z){return n.getContext(C,Z)}try{const C={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ol}`),n.addEventListener("webglcontextlost",ft,!1),n.addEventListener("webglcontextrestored",Wt,!1),n.addEventListener("webglcontextcreationerror",Nt,!1),W===null){const Z="webgl2";if(W=sn(Z,C),W===null)throw sn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Bt("WebGLRenderer: "+C.message),C}let Dt,kt,Je,B,E,Y,ve,Ee,pe,et,Ne,Ze,ut,Re,we,Ve,He,Le,vt,j,Pe,Ce,Ge,Ae;function be(){Dt=new Tw(W),Dt.init(),Ce=new g3(W,Dt),kt=new gw(W,Dt,e,Ce),Je=new p3(W,Dt),kt.reversedDepthBuffer&&_&&Je.buffers.depth.setReversed(!0),B=new ww(W),E=new $C,Y=new m3(W,Dt,Je,E,kt,Ce,B),ve=new _w(T),Ee=new Ew(T),pe=new NA(W),Ge=new pw(W,pe),et=new Aw(W,pe,B,Ge),Ne=new Dw(W,et,pe,B),vt=new Cw(W,kt,Y),Ve=new vw(E),Ze=new JC(T,ve,Ee,Dt,kt,Ge,Ve),ut=new b3(T,E),Re=new t3,we=new o3(Dt),Le=new hw(T,ve,Ee,Je,Ne,M,p),He=new d3(T,Ne,kt),Ae=new M3(W,B,kt,Je),j=new mw(W,Dt,B),Pe=new Rw(W,Dt,B),B.programs=Ze.programs,T.capabilities=kt,T.extensions=Dt,T.properties=E,T.renderLists=Re,T.shadowMap=He,T.state=Je,T.info=B}be(),A!==wn&&(H=new Nw(A,n.width,n.height,o,c));const Ue=new y3(T,W);this.xr=Ue,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=Dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(C){C!==void 0&&(ue=C,this.setSize(P,ie,!1))},this.getSize=function(C){return C.set(P,ie)},this.setSize=function(C,Z,fe=!0){if(Ue.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,ie=Z,n.width=Math.floor(C*ue),n.height=Math.floor(Z*ue),fe===!0&&(n.style.width=C+"px",n.style.height=Z+"px"),H!==null&&H.setSize(n.width,n.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(P*ue,ie*ue).floor()},this.setDrawingBufferSize=function(C,Z,fe){P=C,ie=Z,ue=fe,n.width=Math.floor(C*fe),n.height=Math.floor(Z*fe),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(A===wn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(te)},this.setViewport=function(C,Z,fe,le){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,Z,fe,le),Je.viewport(O.copy(te).multiplyScalar(ue).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,Z,fe,le){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,Z,fe,le),Je.scissor(F.copy(re).multiplyScalar(ue).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){Je.setScissorTest(De=C)},this.setOpaqueSort=function(C){Se=C},this.setTransparentSort=function(C){Me=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,fe=!0){let le=0;if(C){let ne=!1;if(ae!==null){const Oe=ae.texture.format;ne=b.has(Oe)}if(ne){const Oe=ae.texture.type,ke=x.has(Oe),Be=Le.getClearColor(),Xe=Le.getClearAlpha(),Ke=Be.r,st=Be.g,Qe=Be.b;ke?(U[0]=Ke,U[1]=st,U[2]=Qe,U[3]=Xe,W.clearBufferuiv(W.COLOR,0,U)):(R[0]=Ke,R[1]=st,R[2]=Qe,R[3]=Xe,W.clearBufferiv(W.COLOR,0,R))}else le|=W.COLOR_BUFFER_BIT}Z&&(le|=W.DEPTH_BUFFER_BIT),fe&&(le|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",Wt,!1),n.removeEventListener("webglcontextcreationerror",Nt,!1),Le.dispose(),Re.dispose(),we.dispose(),E.dispose(),ve.dispose(),Ee.dispose(),Ne.dispose(),Ge.dispose(),Ae.dispose(),Ze.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",cs),Ue.removeEventListener("sessionend",So),Zi.stop()};function ft(C){C.preventDefault(),x_("WebGLRenderer: Context Lost."),D=!0}function Wt(){x_("WebGLRenderer: Context Restored."),D=!1;const C=B.autoReset,Z=He.enabled,fe=He.autoUpdate,le=He.needsUpdate,ne=He.type;be(),B.autoReset=C,He.enabled=Z,He.autoUpdate=fe,He.needsUpdate=le,He.type=ne}function Nt(C){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function qn(C){const Z=C.target;Z.removeEventListener("dispose",qn),zi(Z)}function zi(C){Gl(C),E.remove(C)}function Gl(C){const Z=E.get(C).programs;Z!==void 0&&(Z.forEach(function(fe){Ze.releaseProgram(fe)}),C.isShaderMaterial&&Ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,fe,le,ne,Oe){Z===null&&(Z=Ut);const ke=ne.isMesh&&ne.matrixWorld.determinant()<0,Be=Cr(C,Z,fe,le,ne);Je.setMaterial(le,ke);let Xe=fe.index,Ke=1;if(le.wireframe===!0){if(Xe=et.getWireframeAttribute(fe),Xe===void 0)return;Ke=2}const st=fe.drawRange,Qe=fe.attributes.position;let ot=st.start*Ke,Ft=(st.start+st.count)*Ke;Oe!==null&&(ot=Math.max(ot,Oe.start*Ke),Ft=Math.min(Ft,(Oe.start+Oe.count)*Ke)),Xe!==null?(ot=Math.max(ot,0),Ft=Math.min(Ft,Xe.count)):Qe!=null&&(ot=Math.max(ot,0),Ft=Math.min(Ft,Qe.count));const on=Ft-ot;if(on<0||on===1/0)return;Ge.setup(ne,le,Be,fe,Xe);let nn,Xt=j;if(Xe!==null&&(nn=pe.get(Xe),Xt=Pe,Xt.setIndex(nn)),ne.isMesh)le.wireframe===!0?(Je.setLineWidth(le.wireframeLinewidth*en()),Xt.setMode(W.LINES)):Xt.setMode(W.TRIANGLES);else if(ne.isLine){let tt=le.linewidth;tt===void 0&&(tt=1),Je.setLineWidth(tt*en()),ne.isLineSegments?Xt.setMode(W.LINES):ne.isLineLoop?Xt.setMode(W.LINE_LOOP):Xt.setMode(W.LINE_STRIP)}else ne.isPoints?Xt.setMode(W.POINTS):ne.isSprite&&Xt.setMode(W.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)Dl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const tt=ne._multiDrawStarts,Ht=ne._multiDrawCounts,ht=ne._multiDrawCount,Pn=Xe?pe.get(Xe).bytesPerElement:1,la=E.get(le).currentProgram.getUniforms();for(let zn=0;zn<ht;zn++)la.setValue(W,"_gl_DrawID",zn),Xt.render(tt[zn]/Pn,Ht[zn])}else if(ne.isInstancedMesh)Xt.renderInstances(ot,on,ne.count);else if(fe.isInstancedBufferGeometry){const tt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ht=Math.min(fe.instanceCount,tt);Xt.renderInstances(ot,on,Ht)}else Xt.render(ot,on)};function xo(C,Z,fe){C.transparent===!0&&C.side===ui&&C.forceSinglePass===!1?(C.side=Ln,C.needsUpdate=!0,fs(C,Z,fe),C.side=Ia,C.needsUpdate=!0,fs(C,Z,fe),C.side=ui):fs(C,Z,fe)}this.compile=function(C,Z,fe=null){fe===null&&(fe=C),L=we.get(fe),L.init(Z),z.push(L),fe.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),C!==fe&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const le=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Oe=ne.material;if(Oe)if(Array.isArray(Oe))for(let ke=0;ke<Oe.length;ke++){const Be=Oe[ke];xo(Be,fe,ne),le.add(Be)}else xo(Oe,fe,ne),le.add(Oe)}),L=z.pop(),le},this.compileAsync=function(C,Z,fe=null){const le=this.compile(C,Z,fe);return new Promise(ne=>{function Oe(){if(le.forEach(function(ke){E.get(ke).currentProgram.isReady()&&le.delete(ke)}),le.size===0){ne(C);return}setTimeout(Oe,10)}Dt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let ls=null;function yo(C){ls&&ls(C)}function cs(){Zi.stop()}function So(){Zi.start()}const Zi=new My;Zi.setAnimationLoop(yo),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(C){ls=C,Ue.setAnimationLoop(C),C===null?Zi.stop():Zi.start()},Ue.addEventListener("sessionstart",cs),Ue.addEventListener("sessionend",So),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const fe=Ue.enabled===!0&&Ue.isPresenting===!0,le=H!==null&&(ae===null||fe)&&H.begin(T,ae);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(Z),Z=Ue.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,Z,ae),L=we.get(C,z.length),L.init(Z),z.push(L),Ct.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Fe.setFromProjectionMatrix(Ct,ra,Z.reversedDepth),at=this.localClippingEnabled,ze=Ve.init(this.clippingPlanes,at),N=Re.get(C,I.length),N.init(),I.push(N),Ue.enabled===!0&&Ue.isPresenting===!0){const ke=T.xr.getDepthSensingMesh();ke!==null&&Mi(ke,Z,-1/0,T.sortObjects)}Mi(C,Z,0,T.sortObjects),N.finish(),T.sortObjects===!0&&N.sort(Se,Me),dt=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,dt&&Le.addToRenderList(N,C),this.info.render.frame++,ze===!0&&Ve.beginShadows();const ne=L.state.shadowsArray;if(He.render(ne,C,Z),ze===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&H.hasRenderPass())===!1){const ke=N.opaque,Be=N.transmissive;if(L.setupLights(),Z.isArrayCamera){const Xe=Z.cameras;if(Be.length>0)for(let Ke=0,st=Xe.length;Ke<st;Ke++){const Qe=Xe[Ke];On(ke,Be,C,Qe)}dt&&Le.render(C);for(let Ke=0,st=Xe.length;Ke<st;Ke++){const Qe=Xe[Ke];vn(N,C,Qe,Qe.viewport)}}else Be.length>0&&On(ke,Be,C,Z),dt&&Le.render(C),vn(N,C,Z)}ae!==null&&ee===0&&(Y.updateMultisampleRenderTarget(ae),Y.updateRenderTargetMipmap(ae)),le&&H.end(T),C.isScene===!0&&C.onAfterRender(T,C,Z),Ge.resetDefaultState(),he=-1,$=null,z.pop(),z.length>0?(L=z[z.length-1],ze===!0&&Ve.setGlobalState(T.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function Mi(C,Z,fe,le){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Fe.intersectsSprite(C)){le&&ct.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const ke=Ne.update(C),Be=C.material;Be.visible&&N.push(C,ke,Be,fe,ct.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Fe.intersectsObject(C))){const ke=Ne.update(C),Be=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ct.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ct.copy(ke.boundingSphere.center)),ct.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Be)){const Xe=ke.groups;for(let Ke=0,st=Xe.length;Ke<st;Ke++){const Qe=Xe[Ke],ot=Be[Qe.materialIndex];ot&&ot.visible&&N.push(C,ke,ot,fe,ct.z,Qe)}}else Be.visible&&N.push(C,ke,Be,fe,ct.z,null)}}const Oe=C.children;for(let ke=0,Be=Oe.length;ke<Be;ke++)Mi(Oe[ke],Z,fe,le)}function vn(C,Z,fe,le){const{opaque:ne,transmissive:Oe,transparent:ke}=C;L.setupLightsView(fe),ze===!0&&Ve.setGlobalState(T.clippingPlanes,fe),le&&Je.viewport(O.copy(le)),ne.length>0&&Bi(ne,Z,fe),Oe.length>0&&Bi(Oe,Z,fe),ke.length>0&&Bi(ke,Z,fe),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function On(C,Z,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[le.id]===void 0){const ot=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[le.id]=new En(1,1,{generateMipmaps:!0,type:ot?Fa:wn,minFilter:is,samples:kt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Oe=L.state.transmissionRenderTarget[le.id],ke=le.viewport||O;Oe.setSize(ke.z*T.transmissionResolutionScale,ke.w*T.transmissionResolutionScale);const Be=T.getRenderTarget(),Xe=T.getActiveCubeFace(),Ke=T.getActiveMipmapLevel();T.setRenderTarget(Oe),T.getClearColor(xe),ge=T.getClearAlpha(),ge<1&&T.setClearColor(16777215,.5),T.clear(),dt&&Le.render(fe);const st=T.toneMapping;T.toneMapping=oa;const Qe=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),L.setupLightsView(le),ze===!0&&Ve.setGlobalState(T.clippingPlanes,le),Bi(C,fe,le),Y.updateMultisampleRenderTarget(Oe),Y.updateRenderTargetMipmap(Oe),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ft=0,on=Z.length;Ft<on;Ft++){const nn=Z[Ft],{object:Xt,geometry:tt,material:Ht,group:ht}=nn;if(Ht.side===ui&&Xt.layers.test(le.layers)){const Pn=Ht.side;Ht.side=Ln,Ht.needsUpdate=!0,us(Xt,fe,le,tt,Ht,ht),Ht.side=Pn,Ht.needsUpdate=!0,ot=!0}}ot===!0&&(Y.updateMultisampleRenderTarget(Oe),Y.updateRenderTargetMipmap(Oe))}T.setRenderTarget(Be,Xe,Ke),T.setClearColor(xe,ge),Qe!==void 0&&(le.viewport=Qe),T.toneMapping=st}function Bi(C,Z,fe){const le=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,Oe=C.length;ne<Oe;ne++){const ke=C[ne],{object:Be,geometry:Xe,group:Ke}=ke;let st=ke.material;st.allowOverride===!0&&le!==null&&(st=le),Be.layers.test(fe.layers)&&us(Be,Z,fe,Xe,st,Ke)}}function us(C,Z,fe,le,ne,Oe){C.onBeforeRender(T,Z,fe,le,ne,Oe),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(T,Z,fe,le,C,Oe),ne.transparent===!0&&ne.side===ui&&ne.forceSinglePass===!1?(ne.side=Ln,ne.needsUpdate=!0,T.renderBufferDirect(fe,Z,le,ne,C,Oe),ne.side=Ia,ne.needsUpdate=!0,T.renderBufferDirect(fe,Z,le,ne,C,Oe),ne.side=ui):T.renderBufferDirect(fe,Z,le,ne,C,Oe),C.onAfterRender(T,Z,fe,le,ne,Oe)}function fs(C,Z,fe){Z.isScene!==!0&&(Z=Ut);const le=E.get(C),ne=L.state.lights,Oe=L.state.shadowsArray,ke=ne.state.version,Be=Ze.getParameters(C,ne.state,Oe,Z,fe),Xe=Ze.getProgramCacheKey(Be);let Ke=le.programs;le.environment=C.isMeshStandardMaterial?Z.environment:null,le.fog=Z.fog,le.envMap=(C.isMeshStandardMaterial?Ee:ve).get(C.envMap||le.environment),le.envMapRotation=le.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",qn),Ke=new Map,le.programs=Ke);let st=Ke.get(Xe);if(st!==void 0){if(le.currentProgram===st&&le.lightsStateVersion===ke)return bo(C,Be),st}else Be.uniforms=Ze.getUniforms(C),C.onBeforeCompile(Be,T),st=Ze.acquireProgram(Be,Xe),Ke.set(Xe,st),le.uniforms=Be.uniforms;const Qe=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Ve.uniform),bo(C,Be),le.needsLights=Wa(C),le.lightsStateVersion=ke,le.needsLights&&(Qe.ambientLightColor.value=ne.state.ambient,Qe.lightProbe.value=ne.state.probe,Qe.directionalLights.value=ne.state.directional,Qe.directionalLightShadows.value=ne.state.directionalShadow,Qe.spotLights.value=ne.state.spot,Qe.spotLightShadows.value=ne.state.spotShadow,Qe.rectAreaLights.value=ne.state.rectArea,Qe.ltc_1.value=ne.state.rectAreaLTC1,Qe.ltc_2.value=ne.state.rectAreaLTC2,Qe.pointLights.value=ne.state.point,Qe.pointLightShadows.value=ne.state.pointShadow,Qe.hemisphereLights.value=ne.state.hemi,Qe.directionalShadowMap.value=ne.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Qe.spotShadowMap.value=ne.state.spotShadowMap,Qe.spotLightMatrix.value=ne.state.spotLightMatrix,Qe.spotLightMap.value=ne.state.spotLightMap,Qe.pointShadowMap.value=ne.state.pointShadowMap,Qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),le.currentProgram=st,le.uniformsList=null,st}function Vl(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Nu.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function bo(C,Z){const fe=E.get(C);fe.outputColorSpace=Z.outputColorSpace,fe.batching=Z.batching,fe.batchingColor=Z.batchingColor,fe.instancing=Z.instancing,fe.instancingColor=Z.instancingColor,fe.instancingMorph=Z.instancingMorph,fe.skinning=Z.skinning,fe.morphTargets=Z.morphTargets,fe.morphNormals=Z.morphNormals,fe.morphColors=Z.morphColors,fe.morphTargetsCount=Z.morphTargetsCount,fe.numClippingPlanes=Z.numClippingPlanes,fe.numIntersection=Z.numClipIntersection,fe.vertexAlphas=Z.vertexAlphas,fe.vertexTangents=Z.vertexTangents,fe.toneMapping=Z.toneMapping}function Cr(C,Z,fe,le,ne){Z.isScene!==!0&&(Z=Ut),Y.resetTextureUnits();const Oe=Z.fog,ke=le.isMeshStandardMaterial?Z.environment:null,Be=ae===null?T.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:wr,Xe=(le.isMeshStandardMaterial?Ee:ve).get(le.envMap||ke),Ke=le.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,st=!!fe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Qe=!!fe.morphAttributes.position,ot=!!fe.morphAttributes.normal,Ft=!!fe.morphAttributes.color;let on=oa;le.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(on=T.toneMapping);const nn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Xt=nn!==void 0?nn.length:0,tt=E.get(le),Ht=L.state.lights;if(ze===!0&&(at===!0||C!==$)){const In=C===$&&le.id===he;Ve.setState(le,C,In)}let ht=!1;le.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Ht.state.version||tt.outputColorSpace!==Be||ne.isBatchedMesh&&tt.batching===!1||!ne.isBatchedMesh&&tt.batching===!0||ne.isBatchedMesh&&tt.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&tt.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&tt.instancing===!1||!ne.isInstancedMesh&&tt.instancing===!0||ne.isSkinnedMesh&&tt.skinning===!1||!ne.isSkinnedMesh&&tt.skinning===!0||ne.isInstancedMesh&&tt.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&tt.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&tt.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&tt.instancingMorph===!1&&ne.morphTexture!==null||tt.envMap!==Xe||le.fog===!0&&tt.fog!==Oe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ve.numPlanes||tt.numIntersection!==Ve.numIntersection)||tt.vertexAlphas!==Ke||tt.vertexTangents!==st||tt.morphTargets!==Qe||tt.morphNormals!==ot||tt.morphColors!==Ft||tt.toneMapping!==on||tt.morphTargetsCount!==Xt)&&(ht=!0):(ht=!0,tt.__version=le.version);let Pn=tt.currentProgram;ht===!0&&(Pn=fs(le,Z,ne));let la=!1,zn=!1,Ei=!1;const qt=Pn.getUniforms(),Bn=tt.uniforms;if(Je.useProgram(Pn.program)&&(la=!0,zn=!0,Ei=!0),le.id!==he&&(he=le.id,zn=!0),la||$!==C){Je.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),qt.setValue(W,"projectionMatrix",C.projectionMatrix),qt.setValue(W,"viewMatrix",C.matrixWorldInverse);const Fn=qt.map.cameraPosition;Fn!==void 0&&Fn.setValue(W,rt.setFromMatrixPosition(C.matrixWorld)),kt.logarithmicDepthBuffer&&qt.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&qt.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),$!==C&&($=C,zn=!0,Ei=!0)}if(tt.needsLights&&(Ht.state.directionalShadowMap.length>0&&qt.setValue(W,"directionalShadowMap",Ht.state.directionalShadowMap,Y),Ht.state.spotShadowMap.length>0&&qt.setValue(W,"spotShadowMap",Ht.state.spotShadowMap,Y),Ht.state.pointShadowMap.length>0&&qt.setValue(W,"pointShadowMap",Ht.state.pointShadowMap,Y)),ne.isSkinnedMesh){qt.setOptional(W,ne,"bindMatrix"),qt.setOptional(W,ne,"bindMatrixInverse");const In=ne.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),qt.setValue(W,"boneTexture",In.boneTexture,Y))}ne.isBatchedMesh&&(qt.setOptional(W,ne,"batchingTexture"),qt.setValue(W,"batchingTexture",ne._matricesTexture,Y),qt.setOptional(W,ne,"batchingIdTexture"),qt.setValue(W,"batchingIdTexture",ne._indirectTexture,Y),qt.setOptional(W,ne,"batchingColorTexture"),ne._colorsTexture!==null&&qt.setValue(W,"batchingColorTexture",ne._colorsTexture,Y));const Tn=fe.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&vt.update(ne,fe,Pn),(zn||tt.receiveShadow!==ne.receiveShadow)&&(tt.receiveShadow=ne.receiveShadow,qt.setValue(W,"receiveShadow",ne.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Bn.envMap.value=Xe,Bn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&Z.environment!==null&&(Bn.envMapIntensity.value=Z.environmentIntensity),Bn.dfgLUT!==void 0&&(Bn.dfgLUT.value=T3()),zn&&(qt.setValue(W,"toneMappingExposure",T.toneMappingExposure),tt.needsLights&&Mo(Bn,Ei),Oe&&le.fog===!0&&ut.refreshFogUniforms(Bn,Oe),ut.refreshMaterialUniforms(Bn,le,ue,ie,L.state.transmissionRenderTarget[C.id]),Nu.upload(W,Vl(tt),Bn,Y)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Nu.upload(W,Vl(tt),Bn,Y),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&qt.setValue(W,"center",ne.center),qt.setValue(W,"modelViewMatrix",ne.modelViewMatrix),qt.setValue(W,"normalMatrix",ne.normalMatrix),qt.setValue(W,"modelMatrix",ne.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const In=le.uniformsGroups;for(let Fn=0,ds=In.length;Fn<ds;Fn++){const Ii=In[Fn];Ae.update(Ii,Pn),Ae.bind(Ii,Pn)}}return Pn}function Mo(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Wa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(C,Z,fe){const le=E.get(C);le.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=Z,E.get(C.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:fe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const fe=E.get(C);fe.__webglFramebuffer=Z,fe.__useDefaultFramebuffer=Z===void 0};const qa=W.createFramebuffer();this.setRenderTarget=function(C,Z=0,fe=0){ae=C,X=Z,ee=fe;let le=null,ne=!1,Oe=!1;if(C){const Be=E.get(C);if(Be.__useDefaultFramebuffer!==void 0){Je.bindFramebuffer(W.FRAMEBUFFER,Be.__webglFramebuffer),O.copy(C.viewport),F.copy(C.scissor),k=C.scissorTest,Je.viewport(O),Je.scissor(F),Je.setScissorTest(k),he=-1;return}else if(Be.__webglFramebuffer===void 0)Y.setupRenderTarget(C);else if(Be.__hasExternalTextures)Y.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const st=C.depthTexture;if(Be.__boundDepthTexture!==st){if(st!==null&&E.has(st)&&(C.width!==st.image.width||C.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const Ke=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ke[Z])?le=Ke[Z][fe]:le=Ke[Z],ne=!0):C.samples>0&&Y.useMultisampledRTT(C)===!1?le=E.get(C).__webglMultisampledFramebuffer:Array.isArray(Ke)?le=Ke[fe]:le=Ke,O.copy(C.viewport),F.copy(C.scissor),k=C.scissorTest}else O.copy(te).multiplyScalar(ue).floor(),F.copy(re).multiplyScalar(ue).floor(),k=De;if(fe!==0&&(le=qa),Je.bindFramebuffer(W.FRAMEBUFFER,le)&&Je.drawBuffers(C,le),Je.viewport(O),Je.scissor(F),Je.setScissorTest(k),ne){const Be=E.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Be.__webglTexture,fe)}else if(Oe){const Be=Z;for(let Xe=0;Xe<C.textures.length;Xe++){const Ke=E.get(C.textures[Xe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Xe,Ke.__webglTexture,fe,Be)}}else if(C!==null&&fe!==0){const Be=E.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Be.__webglTexture,fe)}he=-1},this.readRenderTargetPixels=function(C,Z,fe,le,ne,Oe,ke,Be=0){if(!(C&&C.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){Je.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const Ke=C.textures[Be],st=Ke.format,Qe=Ke.type;if(!kt.textureFormatReadable(st)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Qe)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-le&&fe>=0&&fe<=C.height-ne&&(C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be),W.readPixels(Z,fe,le,ne,Ce.convert(st),Ce.convert(Qe),Oe))}finally{const Ke=ae!==null?E.get(ae).__webglFramebuffer:null;Je.bindFramebuffer(W.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(C,Z,fe,le,ne,Oe,ke,Be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe)if(Z>=0&&Z<=C.width-le&&fe>=0&&fe<=C.height-ne){Je.bindFramebuffer(W.FRAMEBUFFER,Xe);const Ke=C.textures[Be],st=Ke.format,Qe=Ke.type;if(!kt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ot),W.bufferData(W.PIXEL_PACK_BUFFER,Oe.byteLength,W.STREAM_READ),C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be),W.readPixels(Z,fe,le,ne,Ce.convert(st),Ce.convert(Qe),0);const Ft=ae!==null?E.get(ae).__webglFramebuffer:null;Je.bindFramebuffer(W.FRAMEBUFFER,Ft);const on=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await LT(W,on,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ot),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Oe),W.deleteBuffer(ot),W.deleteSync(on),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,fe=0){const le=Math.pow(2,-fe),ne=Math.floor(C.image.width*le),Oe=Math.floor(C.image.height*le),ke=Z!==null?Z.x:0,Be=Z!==null?Z.y:0;Y.setTexture2D(C,0),W.copyTexSubImage2D(W.TEXTURE_2D,fe,0,0,ke,Be,ne,Oe),Je.unbindTexture()};const Dr=W.createFramebuffer(),ja=W.createFramebuffer();this.copyTextureToTexture=function(C,Z,fe=null,le=null,ne=0,Oe=null){Oe===null&&(ne!==0?(Dl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=ne,ne=0):Oe=0);let ke,Be,Xe,Ke,st,Qe,ot,Ft,on;const nn=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(fe!==null)ke=fe.max.x-fe.min.x,Be=fe.max.y-fe.min.y,Xe=fe.isBox3?fe.max.z-fe.min.z:1,Ke=fe.min.x,st=fe.min.y,Qe=fe.isBox3?fe.min.z:0;else{const Tn=Math.pow(2,-ne);ke=Math.floor(nn.width*Tn),Be=Math.floor(nn.height*Tn),C.isDataArrayTexture?Xe=nn.depth:C.isData3DTexture?Xe=Math.floor(nn.depth*Tn):Xe=1,Ke=0,st=0,Qe=0}le!==null?(ot=le.x,Ft=le.y,on=le.z):(ot=0,Ft=0,on=0);const Xt=Ce.convert(Z.format),tt=Ce.convert(Z.type);let Ht;Z.isData3DTexture?(Y.setTexture3D(Z,0),Ht=W.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Y.setTexture2DArray(Z,0),Ht=W.TEXTURE_2D_ARRAY):(Y.setTexture2D(Z,0),Ht=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);const ht=W.getParameter(W.UNPACK_ROW_LENGTH),Pn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),la=W.getParameter(W.UNPACK_SKIP_PIXELS),zn=W.getParameter(W.UNPACK_SKIP_ROWS),Ei=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,nn.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,nn.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ke),W.pixelStorei(W.UNPACK_SKIP_ROWS,st),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Qe);const qt=C.isDataArrayTexture||C.isData3DTexture,Bn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Tn=E.get(C),In=E.get(Z),Fn=E.get(Tn.__renderTarget),ds=E.get(In.__renderTarget);Je.bindFramebuffer(W.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Je.bindFramebuffer(W.DRAW_FRAMEBUFFER,ds.__webglFramebuffer);for(let Ii=0;Ii<Xe;Ii++)qt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,E.get(C).__webglTexture,ne,Qe+Ii),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,Oe,on+Ii)),W.blitFramebuffer(Ke,st,ke,Be,ot,Ft,ke,Be,W.DEPTH_BUFFER_BIT,W.NEAREST);Je.bindFramebuffer(W.READ_FRAMEBUFFER,null),Je.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||E.has(C)){const Tn=E.get(C),In=E.get(Z);Je.bindFramebuffer(W.READ_FRAMEBUFFER,Dr),Je.bindFramebuffer(W.DRAW_FRAMEBUFFER,ja);for(let Fn=0;Fn<Xe;Fn++)qt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Tn.__webglTexture,ne,Qe+Fn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Tn.__webglTexture,ne),Bn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,In.__webglTexture,Oe,on+Fn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,In.__webglTexture,Oe),ne!==0?W.blitFramebuffer(Ke,st,ke,Be,ot,Ft,ke,Be,W.COLOR_BUFFER_BIT,W.NEAREST):Bn?W.copyTexSubImage3D(Ht,Oe,ot,Ft,on+Fn,Ke,st,ke,Be):W.copyTexSubImage2D(Ht,Oe,ot,Ft,Ke,st,ke,Be);Je.bindFramebuffer(W.READ_FRAMEBUFFER,null),Je.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Bn?C.isDataTexture||C.isData3DTexture?W.texSubImage3D(Ht,Oe,ot,Ft,on,ke,Be,Xe,Xt,tt,nn.data):Z.isCompressedArrayTexture?W.compressedTexSubImage3D(Ht,Oe,ot,Ft,on,ke,Be,Xe,Xt,nn.data):W.texSubImage3D(Ht,Oe,ot,Ft,on,ke,Be,Xe,Xt,tt,nn):C.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Oe,ot,Ft,ke,Be,Xt,tt,nn.data):C.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Oe,ot,Ft,nn.width,nn.height,Xt,nn.data):W.texSubImage2D(W.TEXTURE_2D,Oe,ot,Ft,ke,Be,Xt,tt,nn);W.pixelStorei(W.UNPACK_ROW_LENGTH,ht),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Pn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,la),W.pixelStorei(W.UNPACK_SKIP_ROWS,zn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ei),Oe===0&&Z.generateMipmaps&&W.generateMipmap(Ht),Je.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&Y.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Y.setTextureCube(C,0):C.isData3DTexture?Y.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Y.setTexture2DArray(C,0):Y.setTexture2D(C,0),Je.unbindTexture()},this.resetState=function(){X=0,ee=0,ae=null,Je.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}var Xh=1/1e3,R3=1e3,w3=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*Xh}get fixedDelta(){return this._fixedDelta*Xh}set fixedDelta(a){this._fixedDelta=a*R3}get elapsed(){return this._elapsed*Xh}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},C3=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new di;return n.setAttribute("position",new ti(a,3)),n.setAttribute("uv",new ti(e,2)),n})(),Yi=class Xp{static get fullscreenGeometry(){return C3}constructor(e="Pass",n=new Hu,r=new qu){this.name=e,this.renderer=null,this.scene=n,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new $n(Xp.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Hu),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Pl){}render(e,n,r,o,c){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,r){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof En||n instanceof os||n instanceof Wn||n instanceof Xp)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},D3=class extends Yi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,n,r,o){const c=a.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},U3=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,wy="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Cy=class extends hn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Ot(null),depthBuffer:new Ot(null),channelWeights:new Ot(null),opacity:new Ot(1)},blending:ei,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:U3,vertexShader:wy}),this.depthFunc=zu}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(a){const e=a!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){const e=a!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=a}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(a){this.colorSpaceConversion!==a&&(a?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(a){a!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=a):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},N3=class extends Yi{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new Cy,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new En(1,1,{minFilter:Mn,magFilter:Mn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,n,r,o){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==wn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===$t&&(this.renderTarget.texture.colorSpace=$t))}},cx=new Vt,Dy=class extends Yi{constructor(a=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,n){this.color=a,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,n,r,o){const c=this.overrideClearColor,u=this.overrideClearAlpha,d=a.getClearAlpha(),p=c!==null,m=u>=0;p?(a.getClearColor(cx),a.setClearColor(c,m?u:d)):m&&a.setClearAlpha(u),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),p?a.setClearColor(cx,d):m&&a.setClearAlpha(d)}},L3=class extends Yi{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new Dy(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,n,r,o){const c=a.getContext(),u=a.state.buffers,d=this.scene,p=this.camera,m=this.clearPass,v=this.inverted?0:1,g=1-v;u.color.setMask(!1),u.depth.setMask(!1),u.color.setLocked(!0),u.depth.setLocked(!0),u.stencil.setTest(!0),u.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),u.stencil.setFunc(c.ALWAYS,v,4294967295),u.stencil.setClear(g),u.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(a,null):(m.render(a,e),m.render(a,n))),this.renderToScreen?(a.setRenderTarget(null),a.render(d,p)):(a.setRenderTarget(e),a.render(d,p),a.setRenderTarget(n),a.render(d,p)),u.color.setLocked(!1),u.depth.setLocked(!1),u.stencil.setLocked(!1),u.stencil.setFunc(c.EQUAL,1,4294967295),u.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),u.stencil.setLocked(!0)}},O3=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:r=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,o,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new N3,this.depthTexture=null,this.passes=[],this.timer=new w3,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(a){const e=this.inputBuffer,n=this.multisampling;n>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new qe),n=a.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===wn&&a.outputColorSpace===$t&&(this.inputBuffer.texture.colorSpace=$t,this.outputBuffer.texture.colorSpace=$t,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const o of this.passes)o.initialize(a,n,r)}}replaceRenderer(a,e=!0){const n=this.renderer,r=n.domElement.parentNode;return this.setRenderer(a),e&&r!==null&&(r.removeChild(n.domElement),r.appendChild(a.domElement)),n}createDepthTexture(){const a=this.depthTexture=new ho;return this.inputBuffer.depthTexture=a,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(a.format=Tr,a.type=co):a.type=ji,a}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,n,r){const o=this.renderer,c=o===null?new qe:o.getDrawingBufferSize(new qe),u={minFilter:Mn,magFilter:Mn,stencilBuffer:e,depthBuffer:a,type:n},d=new En(c.width,c.height,u);return r>0&&(d.samples=r),n===wn&&o!==null&&o.outputColorSpace===$t&&(d.texture.colorSpace=$t),d.texture.name="EffectComposer.Buffer",d.texture.generateMipmaps=!1,d}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const n=this.passes,r=this.renderer,o=r.getDrawingBufferSize(new qe),c=r.getContext().getContextAttributes().alpha,u=this.inputBuffer.texture.type;if(a.setRenderer(r),a.setSize(o.width,o.height),a.initialize(r,c,u),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,a):n.push(a),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const d=this.createDepthTexture();for(a of n)a.setDepthTexture(d)}else a.setDepthTexture(this.depthTexture)}removePass(a){const e=this.passes,n=e.indexOf(a);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const c=(d,p)=>d||p.needsDepthTexture;e.reduce(c,!1)||(a.getDepthTexture()===this.depthTexture&&a.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,n=this.copyPass;let r=this.inputBuffer,o=this.outputBuffer,c=!1,u,d,p;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const m of this.passes)m.enabled&&(m.render(e,r,o,a,c),m.needsSwap&&(c&&(n.renderToScreen=m.renderToScreen,u=e.getContext(),d=e.state.buffers.stencil,d.setFunc(u.NOTEQUAL,1,4294967295),n.render(e,r,o,a,c),d.setFunc(u.EQUAL,1,4294967295)),p=r,r=o,o=p),m instanceof L3?c=!0:m instanceof D3&&(c=!1))}setSize(a,e,n){const r=this.renderer,o=r.getSize(new qe);(a===void 0||e===void 0)&&(a=o.width,e=o.height),(o.width!==a||o.height!==e)&&r.setSize(a,e,n);const c=r.getDrawingBufferSize(new qe);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const u of this.passes)u.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Yi.fullscreenGeometry.dispose()}},Rr={NONE:0,DEPTH:1,CONVOLUTION:2},It={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},P3=class{constructor(){this.shaderParts=new Map([[It.FRAGMENT_HEAD,null],[It.FRAGMENT_MAIN_UV,null],[It.FRAGMENT_MAIN_IMAGE,null],[It.VERTEX_HEAD,null],[It.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Rr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=wr}},Wh=!1,ux=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case ui:n=this.materialsFlatShadedDoubleSide;break;case Ln:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case ui:n=this.materialsDoubleSide;break;case Ln:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof hn))return a.clone();const e=a.uniforms,n=new Map;for(const o in e){const c=e[o].value;c.isRenderTargetTexture&&(e[o].value=null,n.set(o,c))}const r=a.clone();for(const o of n)e[o[0]].value=o[1],r.uniforms[o[0]].value=o[1];return r}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const n of e)n.uniforms=Object.assign({},a.uniforms),n.side=Ia;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.side=Ln,r}),this.materialsDoubleSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.side=ui,r}),this.materialsFlatShaded=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.flatShading=!0,r.side=Ln,r}),this.materialsFlatShadedDoubleSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.flatShading=!0,r.side=ui,r})}}render(a,e,n){const r=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,Wh){const o=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,n);for(const c of o)c[0].material=c[1];this.meshCount!==o.size&&o.clear()}else{const o=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,n),e.overrideMaterial=o}a.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Wh}static set workaroundEnabled(a){Wh=a}},Er=-1,sa=class extends ka{constructor(a,e=Er,n=Er,r=1){super(),this.resizable=a,this.baseSize=new qe(1,1),this.preferredSize=new qe(e,n),this.target=this.preferredSize,this.s=r,this.effectiveSize=new qe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const a=this.baseSize,e=this.preferredSize,n=this.effectiveSize,r=this.scale;e.width!==Er?n.width=e.width:e.height!==Er?n.width=Math.round(e.height*(a.width/Math.max(a.height,1))):n.width=Math.round(a.width*r),e.height!==Er?n.height=e.height:e.width!==Er?n.height=Math.round(e.width/Math.max(a.width/Math.max(a.height,1),1)):n.height=Math.round(a.height*r)}get width(){return this.effectiveSize.width}set width(a){this.preferredWidth=a}get height(){return this.effectiveSize.height}set height(a){this.preferredHeight=a}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(a){this.s!==a&&(this.s=a,this.preferredSize.setScalar(Er),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(a){this.scale=a}get baseWidth(){return this.baseSize.width}set baseWidth(a){this.baseSize.width!==a&&(this.baseSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(a){this.baseWidth=a}get baseHeight(){return this.baseSize.height}set baseHeight(a){this.baseSize.height!==a&&(this.baseSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(a){this.baseHeight=a}setBaseSize(a,e){(this.baseSize.width!==a||this.baseSize.height!==e)&&(this.baseSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(a){this.preferredSize.width!==a&&(this.preferredSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(a){this.preferredWidth=a}get preferredHeight(){return this.preferredSize.height}set preferredHeight(a){this.preferredSize.height!==a&&(this.preferredSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(a){this.preferredHeight=a}setPreferredSize(a,e){(this.preferredSize.width!==a||this.preferredSize.height!==e)&&(this.preferredSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(a){this.s=a.scale,this.baseSize.set(a.baseWidth,a.baseHeight),this.preferredSize.set(a.preferredWidth,a.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Er}},Rt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},z3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",B3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",I3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",F3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",H3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",G3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",V3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",k3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",X3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",W3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",q3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",j3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Y3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Z3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",K3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Q3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",J3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",rD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",dD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pD=new Map([[Rt.ADD,z3],[Rt.ALPHA,B3],[Rt.AVERAGE,I3],[Rt.COLOR,F3],[Rt.COLOR_BURN,H3],[Rt.COLOR_DODGE,G3],[Rt.DARKEN,V3],[Rt.DIFFERENCE,k3],[Rt.DIVIDE,X3],[Rt.DST,null],[Rt.EXCLUSION,W3],[Rt.HARD_LIGHT,q3],[Rt.HARD_MIX,j3],[Rt.HUE,Y3],[Rt.INVERT,Z3],[Rt.INVERT_RGB,K3],[Rt.LIGHTEN,Q3],[Rt.LINEAR_BURN,J3],[Rt.LINEAR_DODGE,$3],[Rt.LINEAR_LIGHT,eD],[Rt.LUMINOSITY,tD],[Rt.MULTIPLY,nD],[Rt.NEGATION,iD],[Rt.NORMAL,aD],[Rt.OVERLAY,rD],[Rt.PIN_LIGHT,sD],[Rt.REFLECT,oD],[Rt.SATURATION,lD],[Rt.SCREEN,cD],[Rt.SOFT_LIGHT,uD],[Rt.SRC,fD],[Rt.SUBTRACT,dD],[Rt.VIVID_LIGHT,hD]]),mD=class extends ka{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new Ot(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return pD.get(this.blendFunction)}},Uy=class extends ka{constructor(a,e,{attributes:n=Rr.NONE,blendFunction:r=Rt.NORMAL,defines:o=new Map,uniforms:c=new Map,extensions:u=null,vertexShader:d=null}={}){super(),this.name=a,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=d,this.defines=o,this.uniforms=c,this.extensions=u,this.blendMode=new mD(r),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=wr,this._outputColorSpace=ia}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=Pl){}update(a,e,n){}setSize(a,e){}initialize(a,e,n){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof En||e instanceof os||e instanceof Wn||e instanceof Yi)&&this[a].dispose()}}},fm={MEDIUM:2,LARGE:3},gD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,vD="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",_D=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],xD=class extends hn{constructor(a=new cn){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Ot(null),texelSize:new Ot(new cn),scale:new Ot(1),kernel:new Ot(0)},blending:ei,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:gD,vertexShader:vD}),this.setTexelSize(a.x,a.y),this.kernelSize=fm.MEDIUM}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.inputBuffer=a}get kernelSequence(){return _D[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(a){this.uniforms.scale.value=a}getScale(){return this.uniforms.scale.value}setScale(a){this.uniforms.scale.value=a}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(a){this.uniforms.kernel.value=a}setKernel(a){this.kernel=a}setTexelSize(a,e){this.uniforms.texelSize.value.set(a,e,a*.5,e*.5)}setSize(a,e){const n=1/a,r=1/e;this.uniforms.texelSize.value.set(n,r,n*.5,r*.5)}},yD=class extends Yi{constructor({kernelSize:a=fm.MEDIUM,resolutionScale:e=.5,width:n=sa.AUTO_SIZE,height:r=sa.AUTO_SIZE,resolutionX:o=n,resolutionY:c=r}={}){super("KawaseBlurPass"),this.renderTargetA=new En(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const u=this.resolution=new sa(this,o,c,e);u.addEventListener("change",d=>this.setSize(u.baseWidth,u.baseHeight)),this._blurMaterial=new xD,this._blurMaterial.kernelSize=a,this.copyMaterial=new Cy}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(a){this._blurMaterial=a}get dithering(){return this.copyMaterial.dithering}set dithering(a){this.copyMaterial.dithering=a}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(a){this.blurMaterial.kernelSize=a}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get scale(){return this.blurMaterial.scale}set scale(a){this.blurMaterial.scale=a}getScale(){return this.blurMaterial.scale}setScale(a){this.blurMaterial.scale=a}getKernelSize(){return this.kernelSize}setKernelSize(a){this.kernelSize=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}render(a,e,n,r,o){const c=this.scene,u=this.camera,d=this.renderTargetA,p=this.renderTargetB,m=this.blurMaterial,v=m.kernelSequence;let g=e;this.fullscreenMaterial=m;for(let _=0,y=v.length;_<y;++_){const M=(_&1)===0?d:p;m.kernel=v[_],m.inputBuffer=g.texture,a.setRenderTarget(M),a.render(c,u),g=M}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=g.texture,a.setRenderTarget(this.renderToScreen?null:n),a.render(c,u)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e);const r=n.width,o=n.height;this.renderTargetA.setSize(r,o),this.renderTargetB.setSize(r,o),this.blurMaterial.setSize(a,e)}initialize(a,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==wn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):a!==null&&a.outputColorSpace===$t&&(this.renderTargetA.texture.colorSpace=$t,this.renderTargetB.texture.colorSpace=$t))}static get AUTO_SIZE(){return sa.AUTO_SIZE}},SD=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,bD=class extends hn{constructor(a=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Ol.replace(/\D+/g,"")},uniforms:{inputBuffer:new Ot(null),threshold:new Ot(0),smoothing:new Ot(1),range:new Ot(null)},blending:ei,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:SD,vertexShader:wy}),this.colorOutput=a,this.luminanceRange=e}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get threshold(){return this.uniforms.threshold.value}set threshold(a){this.smoothing>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=a}getThreshold(){return this.threshold}setThreshold(a){this.threshold=a}get smoothing(){return this.uniforms.smoothing.value}set smoothing(a){this.threshold>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=a}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(a){this.smoothing=a}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(a){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(a){a?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(a){return this.colorOutput}setColorOutputEnabled(a){this.colorOutput=a}get useRange(){return this.luminanceRange!==null}set useRange(a){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(a){a!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=a,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(a){this.luminanceRange=a}},MD=class extends Yi{constructor({renderTarget:a,luminanceRange:e,colorOutput:n,resolutionScale:r=1,width:o=sa.AUTO_SIZE,height:c=sa.AUTO_SIZE,resolutionX:u=o,resolutionY:d=c}={}){super("LuminancePass"),this.fullscreenMaterial=new bD(n,e),this.needsSwap=!1,this.renderTarget=a,this.renderTarget===void 0&&(this.renderTarget=new En(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const p=this.resolution=new sa(this,u,d,r);p.addEventListener("change",m=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(a,e,n,r,o){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e),this.renderTarget.setSize(n.width,n.height)}initialize(a,e,n){n!==void 0&&n!==wn&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},ED=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,TD="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",AD=class extends hn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Ot(null),texelSize:new Ot(new qe)},blending:ei,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ED,vertexShader:TD})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},RD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,wD="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",CD=class extends hn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Ot(null),supportBuffer:new Ot(null),texelSize:new Ot(new qe),radius:new Ot(.85)},blending:ei,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:RD,vertexShader:wD})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}set supportBuffer(a){this.uniforms.supportBuffer.value=a}get radius(){return this.uniforms.radius.value}set radius(a){this.uniforms.radius.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},DD=class extends Yi{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new En(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new AD,this.upsamplingMaterial=new CD,this.resolution=new qe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(a){if(this.levels!==a){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<a;++n){const r=e.clone();r.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(r)}this.upsamplingMipmaps.push(e);for(let n=1,r=a-1;n<r;++n){const o=e.clone();o.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(o)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(a){this.upsamplingMaterial.radius=a}render(a,e,n,r,o){const{scene:c,camera:u}=this,{downsamplingMaterial:d,upsamplingMaterial:p}=this,{downsamplingMipmaps:m,upsamplingMipmaps:v}=this;let g=e;this.fullscreenMaterial=d;for(let _=0,y=m.length;_<y;++_){const M=m[_];d.setSize(g.width,g.height),d.inputBuffer=g.texture,a.setRenderTarget(M),a.render(c,u),g=M}this.fullscreenMaterial=p;for(let _=v.length-1;_>=0;--_){const y=v[_];p.setSize(g.width,g.height),p.inputBuffer=g.texture,p.supportBuffer=m[_].texture,a.setRenderTarget(y),a.render(c,u),g=y}}setSize(a,e){const n=this.resolution;n.set(a,e);let r=n.width,o=n.height;for(let c=0,u=this.downsamplingMipmaps.length;c<u;++c)r=Math.round(r*.5),o=Math.round(o*.5),this.downsamplingMipmaps[c].setSize(r,o),c<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[c].setSize(r,o)}initialize(a,e,n){if(n!==void 0){const r=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const o of r)o.texture.type=n;if(n!==wn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(a!==null&&a.outputColorSpace===$t)for(const o of r)o.texture.colorSpace=$t}}dispose(){super.dispose();for(const a of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))a.dispose()}},UD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,ND=class extends Uy{constructor({blendFunction:a=Rt.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:n=.03,mipmapBlur:r=!0,intensity:o=1,radius:c=.85,levels:u=8,kernelSize:d=fm.LARGE,resolutionScale:p=.5,width:m=sa.AUTO_SIZE,height:v=sa.AUTO_SIZE,resolutionX:g=m,resolutionY:_=v}={}){super("BloomEffect",UD,{blendFunction:a,uniforms:new Map([["map",new Ot(null)],["intensity",new Ot(o)]])}),this.renderTarget=new En(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new yD({kernelSize:d}),this.luminancePass=new MD({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new DD,this.mipmapBlurPass.enabled=r,this.mipmapBlurPass.radius=c,this.mipmapBlurPass.levels=u,this.uniforms.get("map").value=r?this.mipmapBlurPass.texture:this.renderTarget.texture;const y=this.resolution=new sa(this,g,_,p);y.addEventListener("change",M=>this.setSize(y.baseWidth,y.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get dithering(){return this.blurPass.dithering}set dithering(a){this.blurPass.dithering=a}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(a){this.blurPass.kernelSize=a}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(a){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(a){this.uniforms.get("intensity").value=a}getIntensity(){return this.intensity}setIntensity(a){this.intensity=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}update(a,e,n){const r=this.renderTarget,o=this.luminancePass;o.enabled?(o.render(a,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,o.renderTarget):this.blurPass.render(a,o.renderTarget,r)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,e):this.blurPass.render(a,e,r)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(a,e),this.mipmapBlurPass.setSize(a,e)}initialize(a,e,n){this.blurPass.initialize(a,e,n),this.luminancePass.initialize(a,e,n),this.mipmapBlurPass.initialize(a,e,n),n!==void 0&&(this.renderTarget.texture.type=n,a!==null&&a.outputColorSpace===$t&&(this.renderTarget.texture.colorSpace=$t))}},LD=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,OD="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",PD=class extends Uy{constructor({offset:a=new qe(.001,5e-4),radialModulation:e=!1,modulationOffset:n=.15}={}){super("ChromaticAberrationEffect",LD,{vertexShader:OD,attributes:Rr.CONVOLUTION,uniforms:new Map([["offset",new Ot(a)],["modulationOffset",new Ot(n)]])}),this.radialModulation=e}get offset(){return this.uniforms.get("offset").value}set offset(a){this.uniforms.get("offset").value=a}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(a){a?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(a){this.uniforms.get("modulationOffset").value=a}getOffset(){return this.offset}setOffset(a){this.offset=a}},zD=class extends Yi{constructor(a,e,n=null){super("RenderPass",a,e),this.needsSwap=!1,this.clearPass=new Dy,this.overrideMaterialManager=n===null?null:new ux(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new ux(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,n,r,o){const c=this.scene,u=this.camera,d=this.selection,p=u.layers.mask,m=c.background,v=a.shadowMap.autoUpdate,g=this.renderToScreen?null:e;d!==null&&u.layers.set(d.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(g),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,c,u):a.render(c,u),u.layers.mask=p,c.background=m,a.shadowMap.autoUpdate=v}},BD=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,ID="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",FD=class extends hn{constructor(a,e,n,r,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Ol.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Ot(null),depthBuffer:new Ot(null),resolution:new Ot(new qe),texelSize:new Ot(new qe),cameraNear:new Ot(.3),cameraFar:new Ot(1e3),aspect:new Ot(1),time:new Ot(0)},blending:ei,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),a&&this.setShaderParts(a),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(r)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=Pl){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=BD.replace(It.FRAGMENT_HEAD,a.get(It.FRAGMENT_HEAD)||"").replace(It.FRAGMENT_MAIN_UV,a.get(It.FRAGMENT_MAIN_UV)||"").replace(It.FRAGMENT_MAIN_IMAGE,a.get(It.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=ID.replace(It.VERTEX_HEAD,a.get(It.VERTEX_HEAD)||"").replace(It.VERTEX_MAIN_SUPPORT,a.get(It.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof bi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const n=this.uniforms;n.resolution.value.set(a,e),n.texelSize.value.set(1/a,1/e),n.aspect.value=a/e}static get Section(){return It}};function fx(a,e,n){for(const r of e){const o="$1"+a+r.charAt(0).toUpperCase()+r.slice(1),c=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const u of n.entries())u[1]!==null&&n.set(u[0],u[1].replace(c,o))}}function HD(a,e,n){let r=e.getFragmentShader(),o=e.getVertexShader();const c=r!==void 0&&/mainImage/.test(r),u=r!==void 0&&/mainUv/.test(r);if(n.attributes|=e.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(u&&(n.attributes&Rr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!u)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=n.shaderParts;let m=p.get(It.FRAGMENT_HEAD)||"",v=p.get(It.FRAGMENT_MAIN_UV)||"",g=p.get(It.FRAGMENT_MAIN_IMAGE)||"",_=p.get(It.VERTEX_HEAD)||"",y=p.get(It.VERTEX_MAIN_SUPPORT)||"";const M=new Set,A=new Set;if(u&&(v+=`	${a}MainUv(UV);
`,n.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const U=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);y+=`	${a}MainSupport(`,y+=U?`vUv);
`:`);
`;for(const R of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const N of R[1].split(/\s*,\s*/))n.varyings.add(N),M.add(N),A.add(N);for(const R of o.matchAll(d))A.add(R[1])}for(const U of r.matchAll(d))A.add(U[1]);for(const U of e.defines.keys())A.add(U.replace(/\([\w\s,]*\)/g,""));for(const U of e.uniforms.keys())A.add(U);A.delete("while"),A.delete("for"),A.delete("if"),e.uniforms.forEach((U,R)=>n.uniforms.set(a+R.charAt(0).toUpperCase()+R.slice(1),U)),e.defines.forEach((U,R)=>n.defines.set(a+R.charAt(0).toUpperCase()+R.slice(1),U));const b=new Map([["fragment",r],["vertex",o]]);fx(a,A,n.defines),fx(a,A,b),r=b.get("fragment"),o=b.get("vertex");const x=e.blendMode;if(n.blendModes.set(x.blendFunction,x),c){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(g+=e.inputColorSpace===$t?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==ia?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const U=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;g+=`${a}MainImage(color0, UV, `,(n.attributes&Rr.DEPTH)!==0&&U.test(r)&&(g+="depth, ",n.readDepth=!0),g+=`color1);
	`;const R=a+"BlendOpacity";n.uniforms.set(R,x.opacity),g+=`color0 = blend${x.blendFunction}(color0, color1, ${R});

	`,m+=`uniform float ${R};

`}if(m+=r+`
`,o!==null&&(_+=o+`
`),p.set(It.FRAGMENT_HEAD,m),p.set(It.FRAGMENT_MAIN_UV,v),p.set(It.FRAGMENT_MAIN_IMAGE,g),p.set(It.VERTEX_HEAD,_),p.set(It.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const U of e.extensions)n.extensions.add(U)}}var GD=class extends Yi{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new FD(null,null,null,a),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new P3;let e=0;for(const u of this.effects)if(u.blendMode.blendFunction===Rt.DST)a.attributes|=u.getAttributes()&Rr.DEPTH;else{if((a.attributes&u.getAttributes()&Rr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${u.name})`);HD("e"+e++,u,a)}let n=a.shaderParts.get(It.FRAGMENT_HEAD),r=a.shaderParts.get(It.FRAGMENT_MAIN_IMAGE),o=a.shaderParts.get(It.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const u of a.blendModes.values())n+=u.getShaderCode().replace(c,`blend${u.blendFunction}`)+`
`;(a.attributes&Rr.DEPTH)!==0?(a.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===$t&&(r+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(It.FRAGMENT_HEAD,n),a.shaderParts.set(It.FRAGMENT_MAIN_IMAGE,r),a.shaderParts.set(It.FRAGMENT_MAIN_UV,o);for(const[u,d]of a.shaderParts)d!==null&&a.shaderParts.set(u,d.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=Pl){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(a,e)}render(a,e,n,r,o){for(const c of this.effects)c.update(a,e,r);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=r*this.timeScale,a.setRenderTarget(this.renderToScreen?null:n),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const n of this.effects)n.setSize(a,e)}initialize(a,e,n){this.renderer=a;for(const r of this.effects)r.initialize(a,e,n);this.updateMaterial(),n!==void 0&&n!==wn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){a.type==="change"&&this.recompile()}};const Ny=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`,VD=`
${Ny}

uniform float uTime;
uniform float uBass;
uniform float uMid;
uniform float uHigh;
uniform float uAudioLevel;
uniform vec2 uOrientation;

attribute float aSize;
attribute float aRandom;

varying vec3 vColor;
varying float vAlpha;
varying float vDistance;

void main() {
  vec3 pos = position;

  // Calculate distance from center for effects
  float dist = length(pos.xz);
  vDistance = dist;

  // Multi-layered noise displacement
  float noise1 = snoise(pos * 0.1 + uTime * 0.2) * uBass * 8.0;
  float noise2 = snoise(pos * 0.3 + uTime * 0.5) * uMid * 4.0;
  float noise3 = snoise(pos * 0.8 + uTime * 1.0) * uHigh * 2.0;

  // Vertical wave based on distance and audio
  float wave = sin(dist * 0.3 - uTime * 2.0) * uBass * 5.0;

  // Apply displacement
  pos.y += noise1 + noise2 + wave;
  pos.x += noise2 * 0.5;
  pos.z += noise3 * 0.5;

  // Spiral twist based on audio
  float angle = atan(pos.z, pos.x);
  float newAngle = angle + uAudioLevel * 0.5 + uTime * 0.1;
  float radius = length(pos.xz);
  pos.x = cos(newAngle) * radius;
  pos.z = sin(newAngle) * radius;

  // Orientation-based rotation
  pos.xz = mat2(cos(uOrientation.y * 0.3), -sin(uOrientation.y * 0.3),
                sin(uOrientation.y * 0.3), cos(uOrientation.y * 0.3)) * pos.xz;
  pos.yz = mat2(cos(uOrientation.x * 0.3), -sin(uOrientation.x * 0.3),
                sin(uOrientation.x * 0.3), cos(uOrientation.x * 0.3)) * pos.yz;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  // Size based on audio and distance
  float sizeMod = 1.0 + uBass * 2.0 + uHigh * sin(aRandom * 100.0 + uTime * 5.0);
  gl_PointSize = aSize * sizeMod * (200.0 / -mvPosition.z);

  // Color: cycle through hues based on position, time, and audio
  float hue = fract(dist * 0.02 + uTime * 0.1 + uAudioLevel * 0.5);
  float saturation = 0.8 + uMid * 0.2;
  float lightness = 0.5 + uHigh * 0.3;

  // HSL to RGB conversion
  float c = (1.0 - abs(2.0 * lightness - 1.0)) * saturation;
  float x = c * (1.0 - abs(mod(hue * 6.0, 2.0) - 1.0));
  float m = lightness - c / 2.0;
  vec3 rgb;
  if (hue < 1.0/6.0) rgb = vec3(c, x, 0.0);
  else if (hue < 2.0/6.0) rgb = vec3(x, c, 0.0);
  else if (hue < 3.0/6.0) rgb = vec3(0.0, c, x);
  else if (hue < 4.0/6.0) rgb = vec3(0.0, x, c);
  else if (hue < 5.0/6.0) rgb = vec3(x, 0.0, c);
  else rgb = vec3(c, 0.0, x);
  vColor = rgb + m;

  vAlpha = 0.6 + uAudioLevel * 0.4;
}
`,kD=`
varying vec3 vColor;
varying float vAlpha;
varying float vDistance;

void main() {
  // Circular particle with soft edges
  vec2 center = gl_PointCoord - 0.5;
  float dist = length(center);
  if (dist > 0.5) discard;

  float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;

  // Add glow
  vec3 glow = vColor * (1.0 - dist * 1.5);

  gl_FragColor = vec4(glow, alpha);
}
`,XD=`
${Ny}

uniform float uTime;
uniform float uBass;
uniform float uMid;
uniform float uHigh;
uniform float uAudioLevel;
uniform vec2 uOrientation;
uniform float uFrequencyData[64];

varying vec3 vNormal;
varying vec3 vPosition;
varying float vFreq;
varying float vIndex;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vIndex = position.y;

  vec3 pos = position;

  // Get frequency for this vertex based on Y position
  int freqIndex = int(mod(abs(position.y) * 2.0, 64.0));
  float freq = uFrequencyData[freqIndex];
  vFreq = freq;

  // Pulse outward based on frequency
  float pulse = 1.0 + freq * 0.5 + uBass * 0.3;
  pos.x *= pulse;
  pos.z *= pulse;

  // Wave distortion
  float wave = sin(position.y * 0.5 + uTime * 3.0) * uMid * 2.0;
  pos.x += wave;
  pos.z += cos(position.y * 0.5 + uTime * 3.0) * uMid * 2.0;

  // Noise displacement
  float noise = snoise(pos * 0.2 + uTime * 0.5) * uHigh * 3.0;
  pos += normal * noise;

  // Orientation-based rotation
  pos.xz = mat2(cos(uOrientation.y * 0.5), -sin(uOrientation.y * 0.5),
                sin(uOrientation.y * 0.5), cos(uOrientation.y * 0.5)) * pos.xz;
  pos.yz = mat2(cos(uOrientation.x * 0.3), -sin(uOrientation.x * 0.3),
                sin(uOrientation.x * 0.3), cos(uOrientation.x * 0.3)) * pos.yz;

  vPosition = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,WD=`
uniform float uTime;
uniform float uBass;
uniform float uMid;
uniform float uHigh;
uniform float uAudioLevel;
uniform vec3 uCameraPosition;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vFreq;
varying float vIndex;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec3 viewDir = normalize(uCameraPosition - vPosition);

  // Fresnel effect
  float fresnel = pow(1.0 - max(0.0, dot(viewDir, vNormal)), 3.0);

  // Iridescent color based on view angle and position
  float hue = fract(
    fresnel * 0.5 +
    vIndex * 0.02 +
    uTime * 0.2 +
    uAudioLevel * 0.3
  );

  float saturation = 0.8 + vFreq * 0.2;
  float brightness = 0.6 + fresnel * 0.4 + vFreq * 0.3;

  vec3 color = hsv2rgb(vec3(hue, saturation, brightness));

  // Add rim glow
  vec3 rimColor = hsv2rgb(vec3(fract(hue + 0.3), 1.0, 1.0));
  color += rimColor * fresnel * (0.5 + uBass);

  // Pulsing alpha
  float alpha = 0.7 + fresnel * 0.3 + uAudioLevel * 0.2;

  gl_FragColor = vec4(color, alpha);
}
`,qD=`
uniform sampler2D tDiffuse;
uniform float uSegments;
uniform float uTime;
uniform float uAudioLevel;

varying vec2 vUv;

void main() {
  vec2 uv = vUv - 0.5;

  // Convert to polar coordinates
  float angle = atan(uv.y, uv.x);
  float radius = length(uv);

  // Add rotation based on time and audio
  angle += uTime * 0.2 + uAudioLevel * 0.5;

  // Kaleidoscope effect
  float segmentAngle = 3.14159 * 2.0 / uSegments;
  angle = mod(angle, segmentAngle);
  if (mod(floor(atan(uv.y, uv.x) / segmentAngle), 2.0) == 1.0) {
    angle = segmentAngle - angle;
  }

  // Convert back to cartesian
  vec2 newUv = vec2(cos(angle), sin(angle)) * radius + 0.5;

  // Add slight distortion based on audio
  newUv += vec2(
    sin(newUv.y * 10.0 + uTime) * uAudioLevel * 0.02,
    cos(newUv.x * 10.0 + uTime) * uAudioLevel * 0.02
  );

  gl_FragColor = texture2D(tDiffuse, newUv);
}
`,jD=`
uniform sampler2D tDiffuse;
uniform sampler2D tFeedback;
uniform float uFeedbackAmount;
uniform float uTime;

varying vec2 vUv;

void main() {
  vec4 current = texture2D(tDiffuse, vUv);

  // Slight zoom/rotation for feedback
  vec2 feedbackUv = (vUv - 0.5) * 0.99 + 0.5;
  feedbackUv = mat2(
    cos(0.005), -sin(0.005),
    sin(0.005), cos(0.005)
  ) * (feedbackUv - 0.5) + 0.5;

  vec4 feedback = texture2D(tFeedback, feedbackUv);

  // Color shift on feedback
  feedback.rgb = feedback.gbr * 0.99;

  // Blend
  gl_FragColor = mix(current, feedback, uFeedbackAmount);
}
`;function YD(){const a=J.useRef(null),e=J.useRef(null),n=J.useRef(null),r=J.useRef(null),o=J.useRef(null),c=J.useRef(null),u=J.useRef(null),d=J.useRef(0),p=J.useRef(null),m=J.useRef(null),v=J.useRef(new DA),g=J.useRef({x:0,y:0}),_=J.useRef(null),y=J.useRef(null),M=J.useRef(null),A=J.useRef(null),b=J.useRef(null),x=J.useRef(null),[U,R]=J.useState(!1),[N,L]=J.useState("galaxy"),[I,z]=J.useState(null),H=J.useCallback(()=>{if(!a.current)return;const $=new Hu;$.background=new Vt(5),r.current=$;const O=new bi(75,a.current.clientWidth/a.current.clientHeight,.1,1e3);O.position.z=60,o.current=O;const F=new A3({antialias:!0,powerPreference:"high-performance"});F.setSize(a.current.clientWidth,a.current.clientHeight),F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.toneMapping=$p,F.toneMappingExposure=1.5,a.current.appendChild(F.domElement),e.current=F;const k=new En(a.current.clientWidth,a.current.clientHeight),xe=new En(a.current.clientWidth,a.current.clientHeight);_.current=k,y.current=xe;const ge=new Hu,P=new qu(-1,1,1,-1,0,1);b.current=ge,x.current=P;const ie=new hn({uniforms:{tDiffuse:{value:null},uSegments:{value:6},uTime:{value:0},uAudioLevel:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:qD});M.current=ie;const ue=new hn({uniforms:{tDiffuse:{value:null},tFeedback:{value:null},uFeedbackAmount:{value:.85},uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:jD});A.current=ue;const Se=new $n(new Hl(2,2),ue);ge.add(Se);const Me=new O3(F),te=new zD($,O);Me.addPass(te);const re=new ND({luminanceThreshold:.1,luminanceSmoothing:.9,intensity:2,mipmapBlur:!0}),De=new PD({offset:new qe(.002,.002)}),Fe=new GD(O,re,De);Me.addPass(Fe),n.current=Me,T($),D($);const ze=()=>{if(!a.current||!O||!F||!Me)return;const rt=a.current.clientWidth,ct=a.current.clientHeight;O.aspect=rt/ct,O.updateProjectionMatrix(),F.setSize(rt,ct),Me.setSize(rt,ct),k.setSize(rt,ct),xe.setSize(rt,ct)};window.addEventListener("resize",ze);const at=rt=>{rt.beta!==null&&rt.gamma!==null&&(g.current={x:(rt.beta-45)/90,y:rt.gamma/90})};return(async()=>{if(typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()==="granted"&&window.addEventListener("deviceorientation",at)}catch{}else window.addEventListener("deviceorientation",at)})(),()=>{window.removeEventListener("resize",ze),window.removeEventListener("deviceorientation",at)}},[]),T=$=>{const F=new Float32Array(45e3),k=new Float32Array(15e3),xe=new Float32Array(15e3);for(let ue=0;ue<15e3;ue++){const Se=Math.random()*50+2,Me=Se*.3,te=ue%5/5*Math.PI*2,re=(Math.random()-.5)*(Se*.4)*Math.random(),De=(Math.random()-.5)*(Se*.15)*Math.random(),Fe=(Math.random()-.5)*(Se*.4)*Math.random();F[ue*3]=Math.cos(te+Me)*Se+re,F[ue*3+1]=De,F[ue*3+2]=Math.sin(te+Me)*Se+Fe,k[ue]=Math.random()*3+1,xe[ue]=Math.random()}const ge=new di;ge.setAttribute("position",new ti(F,3)),ge.setAttribute("aSize",new ti(k,1)),ge.setAttribute("aRandom",new ti(xe,1));const P=new hn({uniforms:{uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uAudioLevel:{value:0},uOrientation:{value:new qe(0,0)}},vertexShader:VD,fragmentShader:kD,transparent:!0,blending:Pu,depthWrite:!1}),ie=new cA(ge,P);ie.visible=!0,$.add(ie),p.current=ie},D=$=>{const O=new El,F=200,k=10,xe=80,ge=.8,P=[],ie=[];for(let at=0;at<F;at++){const Ct=at/F,rt=(Ct-.5)*xe,ct=Ct*Math.PI*8;P.push(new K(Math.cos(ct)*k,rt,Math.sin(ct)*k)),ie.push(new K(Math.cos(ct+Math.PI)*k,rt,Math.sin(ct+Math.PI)*k))}const ue=new Gp(P),Se=new Gp(ie),Me=new Gu(ue,200,ge,16,!1),te=new Gu(Se,200,ge,16,!1),re=new Float32Array(64).fill(0),De=new hn({uniforms:{uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uAudioLevel:{value:0},uOrientation:{value:new qe(0,0)},uCameraPosition:{value:new K},uFrequencyData:{value:re}},vertexShader:XD,fragmentShader:WD,transparent:!0,side:ui,blending:Pu}),Fe=new $n(Me,De),ze=new $n(te,De.clone());O.add(Fe),O.add(ze);for(let at=0;at<F;at+=4){const Ct=at/F,rt=(Ct-.5)*xe,ct=Ct*Math.PI*8,Ut=new cm(.3,.3,k*2,8),dt=De.clone(),en=new $n(Ut,dt);en.position.y=rt,en.rotation.z=Math.PI/2,en.rotation.y=ct,O.add(en)}O.visible=!1,$.add(O),m.current=O},X=async()=>{try{if(typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()}catch{}const $=await navigator.mediaDevices.getUserMedia({audio:!0}),O=new AudioContext,F=O.createMediaStreamSource($),k=O.createAnalyser();k.fftSize=256,k.smoothingTimeConstant=.8,F.connect(k),u.current=O,c.current=k,R(!0),z(null)}catch($){z("Microphone access denied"),console.error("Audio error:",$)}},ee=()=>{u.current&&(u.current.close(),u.current=null,c.current=null),R(!1)},ae=()=>{L($=>$==="galaxy"?"dna":"galaxy")},he=J.useCallback(()=>{if(!r.current||!o.current||!e.current||!n.current)return;const $=v.current.getElapsedTime();let O=new Uint8Array(128),F=.3,k=.3,xe=.2,ge=.3;c.current?(c.current.getByteFrequencyData(O),F=O.slice(0,10).reduce((Me,te)=>Me+te,0)/10/255,k=O.slice(10,50).reduce((Me,te)=>Me+te,0)/40/255,xe=O.slice(50,128).reduce((Me,te)=>Me+te,0)/78/255,ge=(F+k+xe)/3):(F=.4+Math.sin($*1.5)*.3+Math.sin($*.7)*.2,k=.3+Math.sin($*2.5)*.25+Math.cos($*1.2)*.15,xe=.2+Math.sin($*4)*.2+Math.sin($*2.1)*.1,ge=(F+k+xe)/3);const P=g.current;if(p.current&&(p.current.visible=N==="galaxy",N==="galaxy")){const Me=p.current.material;Me.uniforms.uTime.value=$,Me.uniforms.uBass.value=F,Me.uniforms.uMid.value=k,Me.uniforms.uHigh.value=xe,Me.uniforms.uAudioLevel.value=ge,Me.uniforms.uOrientation.value.set(P.x,P.y),p.current.rotation.y=$*.05}m.current&&(m.current.visible=N==="dna",N==="dna"&&(m.current.rotation.y=$*.3+F*.5,m.current.traverse(Me=>{if(Me instanceof $n&&Me.material instanceof hn&&(Me.material.uniforms.uTime.value=$,Me.material.uniforms.uBass.value=F,Me.material.uniforms.uMid.value=k,Me.material.uniforms.uHigh.value=xe,Me.material.uniforms.uAudioLevel.value=ge,Me.material.uniforms.uOrientation.value.set(P.x,P.y),Me.material.uniforms.uCameraPosition.value.copy(o.current.position),c.current)){const te=new Float32Array(64);for(let re=0;re<64;re++)te[re]=O[re*2]/255;Me.material.uniforms.uFrequencyData.value=te}})));const ie=P.y*30+Math.sin($*.5)*10,ue=P.x*20+Math.cos($*.3)*5+F*10,Se=60+ge*20;o.current.position.x+=(ie-o.current.position.x)*.05,o.current.position.y+=(ue-o.current.position.y)*.05,o.current.position.z+=(Se-o.current.position.z)*.05,o.current.lookAt(0,0,0),M.current&&(M.current.uniforms.uTime.value=$,M.current.uniforms.uAudioLevel.value=ge,M.current.uniforms.uSegments.value=4+Math.floor(F*8)),n.current.render(),d.current=requestAnimationFrame(he)},[N]);return J.useEffect(()=>{const $=H();return()=>{$?.(),d.current&&cancelAnimationFrame(d.current),e.current&&a.current&&(a.current.removeChild(e.current.domElement),e.current.dispose()),_.current&&_.current.dispose(),y.current&&y.current.dispose(),ee()}},[H]),J.useEffect(()=>(he(),()=>{d.current&&cancelAnimationFrame(d.current)}),[he]),G.jsxs("div",{className:"min-h-screen flex flex-col bg-black",children:[G.jsx("div",{className:"absolute top-4 left-4 z-20",children:G.jsx(mo,{to:"/",className:"w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all",children:G.jsx(Jp,{className:"w-5 h-5"})})}),G.jsx("button",{onClick:ae,className:"absolute top-4 right-16 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all",children:N==="galaxy"?G.jsx(Z1,{className:"w-5 h-5"}):G.jsx(R1,{className:"w-5 h-5"})}),G.jsx("button",{onClick:U?ee:X,className:La("absolute top-4 right-4 z-20 w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all",U?"bg-accent-green/30 text-accent-green":"bg-black/50 text-white/70 hover:text-white hover:bg-black/70"),children:U?G.jsx(P1,{className:"w-5 h-5 animate-pulse"}):G.jsx(L1,{className:"w-5 h-5"})}),I&&G.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-red-500/20 backdrop-blur-sm text-red-400 px-4 py-2 rounded-full text-sm",children:I}),!U&&G.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/30 text-sm",children:"Tap mic for audio • Tilt phone to control"}),G.jsx("div",{ref:a,className:"flex-1 w-full"})]})}const Eu=[{id:"1",minutesBefore:90,duration:15,title:"Season & Prep",component:"all",description:"Season the steak, make the chimichurri",details:["Remove ribeye from fridge, season all sides with 1 tsp kosher salt per pound","Leave uncovered on wire rack at room temperature","Finely chop ½ cup parsley and ¼ cup cilantro","Mix herbs with minced garlic, vinegar, oregano, red pepper flakes, salt","Stir in ½ cup olive oil, set aside"]},{id:"2",minutesBefore:75,duration:20,title:"Boil Potatoes",component:"potatoes",description:"Get those spuds tender",details:["Add 1.5 lbs baby potatoes to pot with cold water","Add 1 tbsp kosher salt","Bring to boil, then simmer 15–20 min until fork-tender","Preheat oven to 450°F with sheet pan inside"]},{id:"3",minutesBefore:55,duration:5,title:"Drain & Dry",component:"potatoes",description:"Let potatoes steam off",details:["Drain potatoes in colander","Let steam dry for 5 minutes","Mix 3 tbsp olive oil + 2 tbsp melted butter"]},{id:"4",minutesBefore:50,duration:15,title:"Smash & Roast",component:"potatoes",description:"Get crispy edges going",details:["Brush hot pan with half the oil-butter","Arrange potatoes with space between","Smash to ½ inch thick with glass bottom","Brush tops, season with salt & pepper","Roast at 450°F for 25–30 min total"]},{id:"5",minutesBefore:35,duration:10,title:"Rotate Pan",component:"potatoes",description:"Even browning time",details:["Rotate sheet pan 180°","Continue roasting until golden"]},{id:"6",minutesBefore:25,duration:5,title:"Heat Cast Iron",component:"steak",description:"Get it screaming hot",details:["Place cast iron over high heat","Let preheat 5 full minutes until smoking","Smash 3 garlic cloves","Have butter, thyme, rosemary ready"]},{id:"7",minutesBefore:20,duration:5,title:"Sear Side One",component:"steak",description:"Build that beautiful crust",details:["Add 2 tbsp avocado oil to pan","Lay ribeye away from you","Sear 4–5 min without moving","Check potatoes—should be golden"]},{id:"8",minutesBefore:15,duration:5,title:"Flip & Baste",component:"steak",description:"Butter bath time",details:["Flip the ribeye","Add 3 tbsp butter, garlic, thyme, rosemary","Tilt pan and baste continuously 3–4 min","Pull at 120–125°F for medium-rare","Brush potatoes with garlic butter, 2 more min"]},{id:"9",minutesBefore:10,duration:8,title:"Rest & Garnish",component:"all",description:"Patience pays off",details:["Transfer steak to cutting board","Rest 5–8 minutes (don't skip!)","Remove potatoes from oven","Top with flaky salt, parsley, chives"]},{id:"10",minutesBefore:2,duration:2,title:"Slice & Serve",component:"all",description:"The grand finale",details:["Slice ribeye against the grain","Drizzle with pan juices","Finish with flaky salt","Spoon chimichurri over everything","Dig in!"]}],ZD=[{name:"The Ribeye",emoji:"🥩",items:[{name:"Ribeye steak",amount:"12–16 oz"},{name:"Kosher salt",amount:"1 tsp/lb"},{name:"Black pepper",amount:"to taste"},{name:"Avocado oil",amount:"2 tbsp"},{name:"Butter",amount:"3 tbsp"},{name:"Garlic, smashed",amount:"3 cloves"},{name:"Fresh thyme",amount:"2–3 sprigs"},{name:"Fresh rosemary",amount:"1 sprig"}]},{name:"Smashed Potatoes",emoji:"🥔",items:[{name:"Baby potatoes",amount:"1.5 lbs"},{name:"Kosher salt",amount:"1 tbsp+"},{name:"Olive oil",amount:"3 tbsp"},{name:"Butter, melted",amount:"2 tbsp"},{name:"Garlic, minced",amount:"4 cloves"},{name:"Parsley",amount:"2 tbsp"},{name:"Chives",amount:"1 tbsp"}]},{name:"Chimichurri",emoji:"🌿",items:[{name:"Parsley, chopped",amount:"½ cup"},{name:"Cilantro, chopped",amount:"¼ cup"},{name:"Garlic, minced",amount:"3 cloves"},{name:"Red wine vinegar",amount:"2 tbsp"},{name:"Dried oregano",amount:"1 tsp"},{name:"Red pepper flakes",amount:"½ tsp"},{name:"Olive oil",amount:"½ cup"},{name:"Kosher salt",amount:"½ tsp"}]}],it={cream:"#FDF6E3",orange:"#E85D04",brown:"#6B4423",avocado:"#7CB518",mustard:"#E09F3E",rust:"#9C4A1A",olive:"#606C38"};function KD(){const[a,e]=J.useState(new Set),[n,r]=J.useState("18:30"),[o,c]=J.useState(!1),[u,d]=J.useState(new Date),[p,m]=J.useState(null);J.useEffect(()=>{if(!o)return;const R=setInterval(()=>d(new Date),1e3);return()=>clearInterval(R)},[o]);const v=J.useCallback(()=>{const[R,N]=n.split(":").map(Number),L=new Date;return L.setHours(R,N,0,0),L<new Date&&L.setDate(L.getDate()+1),L},[n]),g=J.useCallback(R=>new Date(v().getTime()-R*60*1e3),[v]),_=R=>R.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),y=R=>{const L=g(R).getTime()-u.getTime();if(L<=0){const T=Math.abs(L),D=Math.floor(T/6e4);return D<1?"NOW!":`${D}m ago`}const I=Math.floor(L/6e4),z=Math.floor(I/60),H=I%60;return z>0?`${z}h ${H}m`:`${H}m`},M=(R,N)=>{const L=g(R),I=new Date(L.getTime()+N*60*1e3);return u>=L&&u<I},A=(R,N)=>{const L=new Date(g(R).getTime()+N*60*1e3);return u>=L},b=R=>{e(N=>{const L=new Set(N);return L.has(R)?L.delete(R):L.add(R),L})},x=R=>{switch(R){case"steak":return{bg:it.rust,text:"#fff"};case"potatoes":return{bg:it.mustard,text:it.brown};case"chimichurri":return{bg:it.avocado,text:"#fff"};default:return{bg:it.orange,text:"#fff"}}},U=a.size/Eu.length*100;return G.jsxs("div",{className:"min-h-screen",style:{backgroundColor:it.cream},children:[G.jsx("header",{className:"sticky top-0 z-20 border-b-4",style:{backgroundColor:it.cream,borderColor:it.brown},children:G.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-4",children:[G.jsxs(mo,{to:"/",className:"inline-flex items-center gap-2 mb-3 text-sm font-medium transition-colors",style:{color:it.brown},children:[G.jsx(Jp,{className:"w-4 h-4"}),"Back to Apps"]}),G.jsxs("div",{className:"text-center mb-4",children:[G.jsx("h1",{className:"text-4xl md:text-5xl font-bold italic mb-1",style:{fontFamily:"Playfair Display, serif",color:it.brown},children:"Ribeye Dinner"}),G.jsx("p",{className:"text-lg",style:{fontFamily:"Libre Baskerville, serif",color:it.rust},children:"with Smashed Potatoes & Chimichurri"})]}),G.jsxs("div",{className:"rounded-xl p-4 border-2",style:{backgroundColor:"#fff",borderColor:it.orange},children:[G.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[G.jsxs("div",{className:"flex items-center gap-3",children:[G.jsx("label",{className:"text-sm font-semibold",style:{color:it.brown},children:"Dinner at:"}),G.jsx("input",{type:"time",value:n,onChange:R=>r(R.target.value),className:"border-2 rounded-lg px-3 py-2 font-mono text-lg",style:{borderColor:it.mustard,color:it.brown}})]}),G.jsxs("div",{className:"flex items-center gap-2",children:[G.jsxs("button",{onClick:()=>c(!o),className:"flex items-center gap-2 px-5 py-2 rounded-full font-bold text-white transition-transform hover:scale-105",style:{backgroundColor:o?it.avocado:it.orange},children:[o?G.jsx(G1,{className:"w-4 h-4"}):G.jsx(k1,{className:"w-4 h-4"}),o?"Pause":"Start"]}),G.jsx("button",{onClick:()=>{e(new Set),c(!1)},className:"p-2 rounded-full transition-colors",style:{color:it.brown},title:"Reset",children:G.jsx(W1,{className:"w-5 h-5"})})]})]}),o&&G.jsx("div",{className:"mt-3 text-center",children:G.jsx("span",{style:{color:it.rust},className:"font-mono text-2xl font-bold",children:_(u)})}),G.jsx("div",{className:"mt-3 h-2 rounded-full overflow-hidden",style:{backgroundColor:it.mustard+"40"},children:G.jsx("div",{className:"h-full transition-all duration-300 rounded-full",style:{width:`${U}%`,backgroundColor:it.avocado}})}),G.jsxs("p",{className:"text-center text-sm mt-1",style:{color:it.brown},children:[a.size," of ",Eu.length," steps complete"]})]})]})}),G.jsxs("main",{className:"max-w-2xl mx-auto px-4 py-6",children:[G.jsxs("section",{className:"mb-8",children:[G.jsx("h2",{className:"text-2xl font-bold italic mb-4 text-center",style:{fontFamily:"Playfair Display, serif",color:it.brown},children:"~ Ingredients ~"}),G.jsx("div",{className:"grid gap-3",children:ZD.map(R=>G.jsxs("div",{className:"border-2 rounded-xl overflow-hidden",style:{backgroundColor:"#fff",borderColor:it.mustard},children:[G.jsxs("button",{onClick:()=>m(p===R.name?null:R.name),className:"w-full px-4 py-3 flex items-center justify-between",style:{backgroundColor:it.mustard+"20"},children:[G.jsxs("span",{className:"font-bold flex items-center gap-2",style:{fontFamily:"Libre Baskerville, serif",color:it.brown},children:[G.jsx("span",{className:"text-2xl",children:R.emoji}),R.name]}),G.jsx("span",{className:"text-sm",style:{color:it.rust},children:p===R.name?"▲":"▼"})]}),p===R.name&&G.jsx("div",{className:"px-4 py-3 grid grid-cols-2 gap-2",children:R.items.map(N=>G.jsxs("div",{className:"flex justify-between text-sm py-1 border-b",style:{borderColor:it.mustard+"30"},children:[G.jsx("span",{style:{color:it.brown},children:N.name}),G.jsx("span",{className:"font-mono text-xs",style:{color:it.rust},children:N.amount})]},N.name))})]},R.name))})]}),G.jsxs("section",{children:[G.jsx("h2",{className:"text-2xl font-bold italic mb-4 text-center",style:{fontFamily:"Playfair Display, serif",color:it.brown},children:"~ The Timeline ~"}),G.jsx("div",{className:"space-y-4",children:Eu.map((R,N)=>{const L=a.has(R.id),I=o&&M(R.minutesBefore,R.duration);o&&A(R.minutesBefore,R.duration);const z=x(R.component),H=g(R.minutesBefore);return G.jsxs("div",{className:La("relative border-2 rounded-xl overflow-hidden transition-all",I&&"ring-4 ring-offset-2 scale-[1.02]"),style:{backgroundColor:L?it.avocado+"15":"#fff",borderColor:I?it.orange:it.brown+"40",ringColor:it.orange,opacity:L&&!I?.7:1},children:[G.jsxs("div",{className:"flex items-center justify-between px-4 py-3",style:{backgroundColor:I?it.orange+"20":it.cream},children:[G.jsxs("div",{className:"flex items-center gap-3",children:[G.jsx("button",{onClick:()=>b(R.id),className:La("w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all",L?"scale-110":"hover:scale-105"),style:{backgroundColor:L?it.avocado:"transparent",borderColor:L?it.avocado:it.brown},children:L&&G.jsx(S1,{className:"w-4 h-4 text-white"})}),G.jsxs("div",{children:[G.jsx("span",{className:"text-xs font-bold px-2 py-0.5 rounded-full mr-2",style:{backgroundColor:z.bg,color:z.text},children:R.component==="all"?"ALL":R.component.toUpperCase()}),G.jsx("span",{className:La("font-bold",L&&"line-through"),style:{fontFamily:"Libre Baskerville, serif",color:it.brown},children:R.title})]})]}),G.jsxs("div",{className:"text-right",children:[G.jsx("div",{className:"font-mono text-sm",style:{color:it.rust},children:_(H)}),o&&!L&&G.jsx("div",{className:La("text-xs font-bold",I&&"animate-pulse"),style:{color:I?it.orange:it.olive},children:y(R.minutesBefore)})]})]}),G.jsxs("div",{className:"px-4 py-3",children:[G.jsx("p",{className:"italic mb-3",style:{fontFamily:"Libre Baskerville, serif",color:it.rust},children:R.description}),G.jsx("ul",{className:"space-y-1",children:R.details.map((T,D)=>G.jsxs("li",{className:"text-sm flex items-start gap-2",style:{color:it.brown},children:[G.jsx("span",{style:{color:it.orange},children:"•"}),T]},D))}),G.jsxs("div",{className:"mt-3 inline-block text-xs font-mono px-2 py-1 rounded",style:{backgroundColor:it.mustard+"30",color:it.brown},children:["~",R.duration," min"]})]})]},R.id)})}),a.size===Eu.length&&G.jsxs("div",{className:"mt-8 text-center py-8 rounded-xl border-4",style:{borderColor:it.avocado,backgroundColor:it.avocado+"10"},children:[G.jsx("div",{className:"text-6xl mb-4",children:"🥩🥔🌿"}),G.jsx("h3",{className:"text-3xl font-bold italic mb-2",style:{fontFamily:"Playfair Display, serif",color:it.brown},children:"Dinner is Served!"}),G.jsx("p",{style:{color:it.rust},children:"Enjoy your perfectly cooked ribeye"})]})]}),G.jsx("footer",{className:"mt-12 text-center py-6 border-t-2",style:{borderColor:it.brown+"30"},children:G.jsx("p",{className:"text-sm italic",style:{fontFamily:"Libre Baskerville, serif",color:it.rust},children:"90 minutes from start to plate • Serves 1–2"})})]})]})}qb.createRoot(document.getElementById("root")).render(G.jsx(J.StrictMode,{children:G.jsx(pE,{children:G.jsxs(XM,{children:[G.jsx(bl,{path:"/",element:G.jsx(J1,{})}),G.jsx(bl,{path:"/sensors",element:G.jsx($1,{})}),G.jsx(bl,{path:"/audio",element:G.jsx(YD,{})}),G.jsx(bl,{path:"/ribeye",element:G.jsx(KD,{})})]})})}));
