(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Qd={exports:{}},ll={};var G0;function Pb(){if(G0)return ll;G0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return ll.Fragment=e,ll.jsx=n,ll.jsxs=n,ll}var V0;function zb(){return V0||(V0=1,Qd.exports=Pb()),Qd.exports}var ne=zb(),Jd={exports:{}},pt={};var k0;function Bb(){if(k0)return pt;k0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,b={};function x(O,ie,ue){this.props=O,this.context=ie,this.refs=b,this.updater=ue||M}x.prototype.isReactComponent={},x.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function w(){}w.prototype=x.prototype;function U(O,ie,ue){this.props=O,this.context=ie,this.refs=b,this.updater=ue||M}var N=U.prototype=new w;N.constructor=U,A(N,x.prototype),N.isPureReactComponent=!0;var B=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function T(O,ie,ue){var Se=ue.ref;return{$$typeof:a,type:O,key:ie,ref:Se!==void 0?Se:null,props:ue}}function D(O,ie){return T(O.type,ie,O.props)}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function J(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ue){return ie[ue]})}var ae=/\/+/g;function he(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?J(""+O.key):ie.toString(36)}function Q(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,ie,ue,Se,Me){var $=typeof O;($==="undefined"||$==="boolean")&&(O=null);var re=!1;if(O===null)re=!0;else switch($){case"bigint":case"string":case"number":re=!0;break;case"object":switch(O.$$typeof){case a:case e:re=!0;break;case v:return re=O._init,L(re(O._payload),ie,ue,Se,Me)}}if(re)return Me=Me(O),re=Se===""?"."+he(O,0):Se,B(Me)?(ue="",re!=null&&(ue=re.replace(ae,"$&/")+"/"),L(Me,ie,ue,"",function(ze){return ze})):Me!=null&&(k(Me)&&(Me=D(Me,ue+(Me.key==null||O&&O.key===Me.key?"":(""+Me.key).replace(ae,"$&/")+"/")+re)),ie.push(Me)),1;re=0;var De=Se===""?".":Se+":";if(B(O))for(var Fe=0;Fe<O.length;Fe++)Se=O[Fe],$=De+he(Se,Fe),re+=L(Se,ie,ue,$,Me);else if(Fe=y(O),typeof Fe=="function")for(O=Fe.call(O),Fe=0;!(Se=O.next()).done;)Se=Se.value,$=De+he(Se,Fe++),re+=L(Se,ie,ue,$,Me);else if($==="object"){if(typeof O.then=="function")return L(Q(O),ie,ue,Se,Me);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return re}function I(O,ie,ue){if(O==null)return O;var Se=[],Me=0;return L(O,Se,"","",function($){return ie.call(ue,$,Me++)}),Se}function V(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=ue)},function(ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=ue)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var xe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ge={map:I,forEach:function(O,ie,ue){I(O,function(){ie.apply(this,arguments)},ue)},count:function(O){var ie=0;return I(O,function(){ie++}),ie},toArray:function(O){return I(O,function(ie){return ie})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return pt.Activity=g,pt.Children=ge,pt.Component=x,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=U,pt.StrictMode=r,pt.Suspense=p,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,pt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},pt.cache=function(O){return function(){return O.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(O,ie,ue){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Se=A({},O.props),Me=O.key;if(ie!=null)for($ in ie.key!==void 0&&(Me=""+ie.key),ie)!H.call(ie,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&ie.ref===void 0||(Se[$]=ie[$]);var $=arguments.length-2;if($===1)Se.children=ue;else if(1<$){for(var re=Array($),De=0;De<$;De++)re[De]=arguments[De+2];Se.children=re}return T(O.type,Me,Se)},pt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},pt.createElement=function(O,ie,ue){var Se,Me={},$=null;if(ie!=null)for(Se in ie.key!==void 0&&($=""+ie.key),ie)H.call(ie,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Me[Se]=ie[Se]);var re=arguments.length-2;if(re===1)Me.children=ue;else if(1<re){for(var De=Array(re),Fe=0;Fe<re;Fe++)De[Fe]=arguments[Fe+2];Me.children=De}if(O&&O.defaultProps)for(Se in re=O.defaultProps,re)Me[Se]===void 0&&(Me[Se]=re[Se]);return T(O,$,Me)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(O){return{$$typeof:d,render:O}},pt.isValidElement=k,pt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:V}},pt.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},pt.startTransition=function(O){var ie=z.T,ue={};z.T=ue;try{var Se=O(),Me=z.S;Me!==null&&Me(ue,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(F,xe)}catch($){xe($)}finally{ie!==null&&ue.types!==null&&(ie.types=ue.types),z.T=ie}},pt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},pt.use=function(O){return z.H.use(O)},pt.useActionState=function(O,ie,ue){return z.H.useActionState(O,ie,ue)},pt.useCallback=function(O,ie){return z.H.useCallback(O,ie)},pt.useContext=function(O){return z.H.useContext(O)},pt.useDebugValue=function(){},pt.useDeferredValue=function(O,ie){return z.H.useDeferredValue(O,ie)},pt.useEffect=function(O,ie){return z.H.useEffect(O,ie)},pt.useEffectEvent=function(O){return z.H.useEffectEvent(O)},pt.useId=function(){return z.H.useId()},pt.useImperativeHandle=function(O,ie,ue){return z.H.useImperativeHandle(O,ie,ue)},pt.useInsertionEffect=function(O,ie){return z.H.useInsertionEffect(O,ie)},pt.useLayoutEffect=function(O,ie){return z.H.useLayoutEffect(O,ie)},pt.useMemo=function(O,ie){return z.H.useMemo(O,ie)},pt.useOptimistic=function(O,ie){return z.H.useOptimistic(O,ie)},pt.useReducer=function(O,ie,ue){return z.H.useReducer(O,ie,ue)},pt.useRef=function(O){return z.H.useRef(O)},pt.useState=function(O){return z.H.useState(O)},pt.useSyncExternalStore=function(O,ie,ue){return z.H.useSyncExternalStore(O,ie,ue)},pt.useTransition=function(){return z.H.useTransition()},pt.version="19.2.3",pt}var X0;function kp(){return X0||(X0=1,Jd.exports=Bb()),Jd.exports}var ee=kp(),$d={exports:{}},cl={},eh={exports:{}},th={};var W0;function Ib(){return W0||(W0=1,(function(a){function e(L,I){var V=L.length;L.push(I);e:for(;0<V;){var xe=V-1>>>1,ge=L[xe];if(0<o(ge,I))L[xe]=I,L[V]=ge,V=xe;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var I=L[0],V=L.pop();if(V!==I){L[0]=V;e:for(var xe=0,ge=L.length,O=ge>>>1;xe<O;){var ie=2*(xe+1)-1,ue=L[ie],Se=ie+1,Me=L[Se];if(0>o(ue,V))Se<ge&&0>o(Me,ue)?(L[xe]=Me,L[Se]=V,xe=Se):(L[xe]=ue,L[ie]=V,xe=ie);else if(Se<ge&&0>o(Me,V))L[xe]=Me,L[Se]=V,xe=Se;else break e}}return I}function o(L,I){var V=L.sortIndex-I.sortIndex;return V!==0?V:L.id-I.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var p=[],m=[],v=1,g=null,_=3,y=!1,M=!1,A=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var I=n(m);I!==null;){if(I.callback===null)r(m);else if(I.startTime<=L)r(m),I.sortIndex=I.expirationTime,e(p,I);else break;I=n(m)}}function B(L){if(A=!1,N(L),!M)if(n(p)!==null)M=!0,F||(F=!0,J());else{var I=n(m);I!==null&&Q(B,I.startTime-L)}}var F=!1,z=-1,H=5,T=-1;function D(){return b?!0:!(a.unstable_now()-T<H)}function k(){if(b=!1,F){var L=a.unstable_now();T=L;var I=!0;try{e:{M=!1,A&&(A=!1,w(z),z=-1),y=!0;var V=_;try{t:{for(N(L),g=n(p);g!==null&&!(g.expirationTime>L&&D());){var xe=g.callback;if(typeof xe=="function"){g.callback=null,_=g.priorityLevel;var ge=xe(g.expirationTime<=L);if(L=a.unstable_now(),typeof ge=="function"){g.callback=ge,N(L),I=!0;break t}g===n(p)&&r(p),N(L)}else r(p);g=n(p)}if(g!==null)I=!0;else{var O=n(m);O!==null&&Q(B,O.startTime-L),I=!1}}break e}finally{g=null,_=V,y=!1}I=void 0}}finally{I?J():F=!1}}}var J;if(typeof U=="function")J=function(){U(k)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,he=ae.port2;ae.port1.onmessage=k,J=function(){he.postMessage(null)}}else J=function(){x(k,0)};function Q(L,I){z=x(function(){L(a.unstable_now())},I)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(L){switch(_){case 1:case 2:case 3:var I=3;break;default:I=_}var V=_;_=I;try{return L()}finally{_=V}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var V=_;_=L;try{return I()}finally{_=V}},a.unstable_scheduleCallback=function(L,I,V){var xe=a.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?xe+V:xe):V=xe,L){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=V+ge,L={id:v++,callback:I,priorityLevel:L,startTime:V,expirationTime:ge,sortIndex:-1},V>xe?(L.sortIndex=V,e(m,L),n(p)===null&&L===n(m)&&(A?(w(z),z=-1):A=!0,Q(B,V-xe))):(L.sortIndex=ge,e(p,L),M||y||(M=!0,F||(F=!0,J()))),L},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(L){var I=_;return function(){var V=_;_=I;try{return L.apply(this,arguments)}finally{_=V}}}})(th)),th}var q0;function Fb(){return q0||(q0=1,eh.exports=Ib()),eh.exports}var nh={exports:{}},qn={};var Y0;function Hb(){if(Y0)return qn;Y0=1;var a=kp();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:m,implementation:v}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,qn.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,v)},qn.flushSync=function(p){var m=u.T,v=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=m,r.p=v,r.d.f()}},qn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},qn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},qn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,g=d(v,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:y}):v==="script"&&r.d.X(p,{crossOrigin:g,integrity:_,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},qn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},qn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,g=d(v,m.crossOrigin);r.d.L(p,v,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},qn.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},qn.requestFormReset=function(p){r.d.r(p)},qn.unstable_batchedUpdates=function(p,m){return p(m)},qn.useFormState=function(p,m,v){return u.H.useFormState(p,m,v)},qn.useFormStatus=function(){return u.H.useHostTransitionStatus()},qn.version="19.2.3",qn}var j0;function Gb(){if(j0)return nh.exports;j0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),nh.exports=Hb(),nh.exports}var Z0;function Vb(){if(Z0)return cl;Z0=1;var a=Fb(),e=kp(),n=Gb();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return p(f),t;if(h===l)return p(f),i;h=h.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=h;else{for(var S=!1,R=f.child;R;){if(R===s){S=!0,s=f,l=h;break}if(R===l){S=!0,l=f,s=h;break}R=R.sibling}if(!S){for(R=h.child;R;){if(R===s){S=!0,s=h,l=f;break}if(R===l){S=!0,l=h,s=f;break}R=R.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function v(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=v(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case B:return"Suspense";case F:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case N:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case H:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}var Q=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},xe=[],ge=-1;function O(t){return{current:t}}function ie(t){0>ge||(t.current=xe[ge],xe[ge]=null,ge--)}function ue(t,i){ge++,xe[ge]=t.current,t.current=i}var Se=O(null),Me=O(null),$=O(null),re=O(null);function De(t,i){switch(ue($,i),ue(Me,t),ue(Se,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?u0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=u0(i),t=f0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Se),ue(Se,t)}function Fe(){ie(Se),ie(Me),ie($)}function ze(t){t.memoizedState!==null&&ue(re,t);var i=Se.current,s=f0(i,t.type);i!==s&&(ue(Me,t),ue(Se,s))}function it(t){Me.current===t&&(ie(Se),ie(Me)),re.current===t&&(ie(re),al._currentValue=V)}var Ct,at;function lt(t){if(Ct===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ct=i&&i[1]||"",at=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+t+at}var Dt=!1;function ft(t,i){if(!t||Dt)return"";Dt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(de){var ce=de}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(de){ce=de}t.call(ye.prototype)}}else{try{throw Error()}catch(de){ce=de}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(de){if(de&&ce&&typeof de.stack=="string")return[de.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),S=h[0],R=h[1];if(S&&R){var G=S.split(`
`),oe=R.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===oe.length)for(l=G.length-1,f=oe.length-1;1<=l&&0<=f&&G[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==oe[f]){var me=`
`+G[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=f);break}}}finally{Dt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?lt(s):""}function $t(t,i){switch(t.tag){case 26:case 27:case 5:return lt(t.type);case 16:return lt("Lazy");case 13:return t.child!==i&&i!==null?lt("Suspense Fallback"):lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return lt("Activity");default:return""}}function X(t){try{var i="",s=null;do i+=$t(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var rn=Object.prototype.hasOwnProperty,wt=a.unstable_scheduleCallback,Vt=a.unstable_cancelCallback,Je=a.unstable_shouldYield,P=a.unstable_requestPaint,E=a.unstable_now,Y=a.unstable_getCurrentPriorityLevel,ve=a.unstable_ImmediatePriority,Ee=a.unstable_UserBlockingPriority,pe=a.unstable_NormalPriority,et=a.unstable_LowPriority,Ne=a.unstable_IdlePriority,Ze=a.log,ct=a.unstable_setDisableYieldValue,Re=null,Ce=null;function Ve(t){if(typeof Ze=="function"&&ct(t),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Re,t)}catch{}}var He=Math.clz32?Math.clz32:q,Le=Math.log,gt=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(Le(t)/gt|0)|0}var Pe=256,we=262144,Ge=4194304;function Ae(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~h,l!==0?f=Ae(l):(S&=R,S!==0?f=Ae(S):s||(s=R&~t,s!==0&&(f=Ae(s))))):(R=l&~h,R!==0?f=Ae(R):S!==0?f=Ae(S):s||(s=l&~t,s!==0&&(f=Ae(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Ue(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ut(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xt(){var t=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),t}function Ut(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Wn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Oi(t,i,s,l,f,h){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,oe=t.hiddenUpdates;for(s=S&~s;0<s;){var me=31-He(s),ye=1<<me;R[me]=0,G[me]=-1;var ce=oe[me];if(ce!==null)for(oe[me]=null,me=0;me<ce.length;me++){var de=ce[me];de!==null&&(de.lane&=-536870913)}s&=~ye}l!==0&&Fl(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~i))}function Fl(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-He(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function go(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-He(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function ss(t,i){var s=i&-i;return s=(s&42)!==0?1:vo(s),(s&(t.suspendedLanes|i))!==0?0:s}function vo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function os(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _o(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:O0(t.type))}function ji(t,i){var s=I.p;try{return I.p=t,i()}finally{I.p=s}}var Si=Math.random().toString(36).slice(2),gn="__reactFiber$"+Si,Ln="__reactProps$"+Si,Pi="__reactContainer$"+Si,ls="__reactEvents$"+Si,cs="__reactListeners$"+Si,Hl="__reactHandles$"+Si,xo="__reactResources$"+Si,Rr="__reactMarker$"+Si;function yo(t){delete t[gn],delete t[Ln],delete t[ls],delete t[cs],delete t[Hl]}function ka(t){var i=t[gn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Pi]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=_0(t);t!==null;){if(s=t[gn])return s;t=_0(t)}return i}t=s,s=t.parentNode}return null}function Xa(t){if(t=t[gn]||t[Pi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Cr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Wa(t){var i=t[xo];return i||(i=t[xo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function C(t){t[Rr]=!0}var j=new Set,fe={};function le(t,i){te(t,i),te(t+"Capture",i)}function te(t,i){for(fe[t]=i,t=0;t<i.length;t++)j.add(i[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Be={};function Xe(t){return rn.call(Be,t)?!0:rn.call(ke,t)?!1:Oe.test(t)?Be[t]=!0:(ke[t]=!0,!1)}function Ke(t,i,s){if(Xe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function rt(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Qe(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function st(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function It(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function sn(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function tn(t){if(!t._valueTracker){var i=It(t)?"checked":"value";t._valueTracker=sn(t,i,""+t[i])}}function kt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=It(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function tt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function dt(t){return t.replace(Ft,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function On(t,i,s,l,f,h,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+st(i)):t.value!==""+st(i)&&(t.value=""+st(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?Pn(t,S,st(i)):s!=null?Pn(t,S,st(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+st(R):t.removeAttribute("name")}function oa(t,i,s,l,f,h,S,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){tn(t);return}s=s!=null?""+st(s):"",i=i!=null?""+st(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),tn(t)}function Pn(t,i,s){i==="number"&&tt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function bi(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+st(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Wt(t,i,s){if(i!=null&&(i=""+st(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+st(s):""}function zn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(Q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=st(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),tn(t)}function En(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function In(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Bn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function us(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&In(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&In(t,h,i[h])}function zi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ny=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(t){return Ny.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function la(){}var Yu=null;function ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fs=null,ds=null;function cm(t){var i=Xa(t);if(i&&(t=i.stateNode)){var s=t[Ln]||null;e:switch(t=i.stateNode,i.type){case"input":if(On(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+dt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Ln]||null;if(!f)throw Error(r(90));On(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&kt(l)}break e;case"textarea":Wt(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&bi(t,!!s.multiple,i,!1)}}}var Zu=!1;function um(t,i,s){if(Zu)return t(i,s);Zu=!0;try{var l=t(i);return l}finally{if(Zu=!1,(fs!==null||ds!==null)&&(Cc(),fs&&(i=fs,t=ds,ds=fs=null,cm(i),t)))for(i=0;i<t.length;i++)cm(t[i])}}function So(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Ln]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=!1;if(ca)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{Ku=!1}var qa=null,Qu=null,Vl=null;function fm(){if(Vl)return Vl;var t,i=Qu,s=i.length,l,f="value"in qa?qa.value:qa.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===f[h-l];l++);return Vl=f.slice(t,1<l?1-l:void 0)}function kl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function dm(){return!1}function ti(t){function i(s,l,f,h,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Xl:dm,this.isPropagationStopped=dm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),i}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=ti(wr),Mo=g({},wr,{view:0,detail:0}),Ly=ti(Mo),Ju,$u,Eo,ql=g({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(Ju=t.screenX-Eo.screenX,$u=t.screenY-Eo.screenY):$u=Ju=0,Eo=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:$u}}),hm=ti(ql),Oy=g({},ql,{dataTransfer:0}),Py=ti(Oy),zy=g({},Mo,{relatedTarget:0}),ef=ti(zy),By=g({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Iy=ti(By),Fy=g({},wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hy=ti(Fy),Gy=g({},wr,{data:0}),pm=ti(Gy),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Xy[t])?!!i[t]:!1}function tf(){return Wy}var qy=g({},Mo,{key:function(t){if(t.key){var i=Vy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ky[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Yy=ti(qy),jy=g({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=ti(jy),Zy=g({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),Ky=ti(Zy),Qy=g({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jy=ti(Qy),$y=g({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eS=ti($y),tS=g({},wr,{newState:0,oldState:0}),nS=ti(tS),iS=[9,13,27,32],nf=ca&&"CompositionEvent"in window,To=null;ca&&"documentMode"in document&&(To=document.documentMode);var aS=ca&&"TextEvent"in window&&!To,gm=ca&&(!nf||To&&8<To&&11>=To),vm=" ",_m=!1;function xm(t,i){switch(t){case"keyup":return iS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ym(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function rS(t,i){switch(t){case"compositionend":return ym(i);case"keypress":return i.which!==32?null:(_m=!0,vm);case"textInput":return t=i.data,t===vm&&_m?null:t;default:return null}}function sS(t,i){if(hs)return t==="compositionend"||!nf&&xm(t,i)?(t=fm(),Vl=Qu=qa=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return gm&&i.locale!=="ko"?null:i.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!oS[t.type]:i==="textarea"}function bm(t,i,s,l){fs?ds?ds.push(l):ds=[l]:fs=l,i=Pc(i,"onChange"),0<i.length&&(s=new Wl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Ao=null,Ro=null;function lS(t){a0(t,0)}function Yl(t){var i=Cr(t);if(kt(i))return t}function Mm(t,i){if(t==="change")return i}var Em=!1;if(ca){var af;if(ca){var rf="oninput"in document;if(!rf){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),rf=typeof Tm.oninput=="function"}af=rf}else af=!1;Em=af&&(!document.documentMode||9<document.documentMode)}function Am(){Ao&&(Ao.detachEvent("onpropertychange",Rm),Ro=Ao=null)}function Rm(t){if(t.propertyName==="value"&&Yl(Ro)){var i=[];bm(i,Ro,t,ju(t)),um(lS,i)}}function cS(t,i,s){t==="focusin"?(Am(),Ao=i,Ro=s,Ao.attachEvent("onpropertychange",Rm)):t==="focusout"&&Am()}function uS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Ro)}function fS(t,i){if(t==="click")return Yl(i)}function dS(t,i){if(t==="input"||t==="change")return Yl(i)}function hS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var fi=typeof Object.is=="function"?Object.is:hS;function Co(t,i){if(fi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!rn.call(i,f)||!fi(t[f],i[f]))return!1}return!0}function Cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wm(t,i){var s=Cm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Cm(s)}}function Dm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Um(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=tt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=tt(t.document)}return i}function sf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var pS=ca&&"documentMode"in document&&11>=document.documentMode,ps=null,of=null,wo=null,lf=!1;function Nm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;lf||ps==null||ps!==tt(l)||(l=ps,"selectionStart"in l&&sf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),wo&&Co(wo,l)||(wo=l,l=Pc(of,"onSelect"),0<l.length&&(i=new Wl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ps)))}function Dr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ms={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionrun:Dr("Transition","TransitionRun"),transitionstart:Dr("Transition","TransitionStart"),transitioncancel:Dr("Transition","TransitionCancel"),transitionend:Dr("Transition","TransitionEnd")},cf={},Lm={};ca&&(Lm=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Ur(t){if(cf[t])return cf[t];if(!ms[t])return t;var i=ms[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Lm)return cf[t]=i[s];return t}var Om=Ur("animationend"),Pm=Ur("animationiteration"),zm=Ur("animationstart"),mS=Ur("transitionrun"),gS=Ur("transitionstart"),vS=Ur("transitioncancel"),Bm=Ur("transitionend"),Im=new Map,uf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uf.push("scrollEnd");function Bi(t,i){Im.set(t,i),le(i,[t])}var jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Mi=[],gs=0,ff=0;function Zl(){for(var t=gs,i=ff=gs=0;i<t;){var s=Mi[i];Mi[i++]=null;var l=Mi[i];Mi[i++]=null;var f=Mi[i];Mi[i++]=null;var h=Mi[i];if(Mi[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}h!==0&&Fm(s,f,h)}}function Kl(t,i,s,l){Mi[gs++]=t,Mi[gs++]=i,Mi[gs++]=s,Mi[gs++]=l,ff|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function df(t,i,s,l){return Kl(t,i,s,l),Ql(t)}function Nr(t,i){return Kl(t,null,null,i),Ql(t)}function Fm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-He(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function Ql(t){if(50<Qo)throw Qo=0,Sd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var vs={};function _S(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(t,i,s,l){return new _S(t,i,s,l)}function hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,i){var s=t.alternate;return s===null?(s=di(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Hm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Jl(t,i,s,l,f,h){var S=0;if(l=t,typeof t=="function")hf(t)&&(S=1);else if(typeof t=="string")S=Mb(t,s,Se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case T:return t=di(31,s,i,f),t.elementType=T,t.lanes=h,t;case A:return Lr(s.children,f,h,i);case b:S=8,f|=24;break;case x:return t=di(12,s,i,f|2),t.elementType=x,t.lanes=h,t;case B:return t=di(13,s,i,f),t.elementType=B,t.lanes=h,t;case F:return t=di(19,s,i,f),t.elementType=F,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:S=10;break e;case w:S=9;break e;case N:S=11;break e;case z:S=14;break e;case H:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=di(S,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Lr(t,i,s,l){return t=di(7,t,l,i),t.lanes=s,t}function pf(t,i,s){return t=di(6,t,null,i),t.lanes=s,t}function Gm(t){var i=di(18,null,null,0);return i.stateNode=t,i}function mf(t,i,s){return i=di(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Vm=new WeakMap;function Ei(t,i){if(typeof t=="object"&&t!==null){var s=Vm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:X(i)},Vm.set(t,i),i)}return{value:t,source:i,stack:X(i)}}var _s=[],xs=0,$l=null,Do=0,Ti=[],Ai=0,Ya=null,Zi=1,Ki="";function fa(t,i){_s[xs++]=Do,_s[xs++]=$l,$l=t,Do=i}function km(t,i,s){Ti[Ai++]=Zi,Ti[Ai++]=Ki,Ti[Ai++]=Ya,Ya=t;var l=Zi;t=Ki;var f=32-He(l)-1;l&=~(1<<f),s+=1;var h=32-He(i)+f;if(30<h){var S=f-f%5;h=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Zi=1<<32-He(i)+f|s<<f|l,Ki=h+t}else Zi=1<<h|s<<f|l,Ki=t}function gf(t){t.return!==null&&(fa(t,1),km(t,1,0))}function vf(t){for(;t===$l;)$l=_s[--xs],_s[xs]=null,Do=_s[--xs],_s[xs]=null;for(;t===Ya;)Ya=Ti[--Ai],Ti[Ai]=null,Ki=Ti[--Ai],Ti[Ai]=null,Zi=Ti[--Ai],Ti[Ai]=null}function Xm(t,i){Ti[Ai++]=Zi,Ti[Ai++]=Ki,Ti[Ai++]=Ya,Zi=i.id,Ki=i.overflow,Ya=t}var Fn=null,nn=null,Rt=!1,ja=null,Ri=!1,_f=Error(r(519));function Za(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(Ei(i,t)),_f}function Wm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[gn]=t,i[Ln]=l,s){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(s=0;s<$o.length;s++)bt($o[s],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":bt("invalid",i),oa(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":bt("invalid",i);break;case"textarea":bt("invalid",i),zn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||l0(i.textContent,s)?(l.popover!=null&&(bt("beforetoggle",i),bt("toggle",i)),l.onScroll!=null&&bt("scroll",i),l.onScrollEnd!=null&&bt("scrollend",i),l.onClick!=null&&(i.onclick=la),i=!0):i=!1,i||Za(t,!0)}function qm(t){for(Fn=t.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Fn=Fn.return}}function ys(t){if(t!==Fn)return!1;if(!Rt)return qm(t),Rt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||zd(t.type,t.memoizedProps)),s=!s),s&&nn&&Za(t),qm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=v0(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=v0(t)}else i===27?(i=nn,cr(t.type)?(t=Gd,Gd=null,nn=t):nn=i):nn=Fn?wi(t.stateNode.nextSibling):null;return!0}function Or(){nn=Fn=null,Rt=!1}function xf(){var t=ja;return t!==null&&(ri===null?ri=t:ri.push.apply(ri,t),ja=null),t}function Uo(t){ja===null?ja=[t]:ja.push(t)}var yf=O(null),Pr=null,da=null;function Ka(t,i,s){ue(yf,i._currentValue),i._currentValue=s}function ha(t){t._currentValue=yf.current,ie(yf)}function Sf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function bf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var S=f.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=f;for(var G=0;G<i.length;G++)if(R.context===i[G]){h.lanes|=s,R=h.alternate,R!==null&&(R.lanes|=s),Sf(h.return,s,t),l||(S=null);break e}h=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,h=S.alternate,h!==null&&(h.lanes|=s),Sf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Ss(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=f.type;fi(f.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(f===re.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(al):t=[al])}f=f.return}t!==null&&bf(i,t,s,l),i.flags|=262144}function ec(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zr(t){Pr=t,da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Hn(t){return Ym(Pr,t)}function tc(t,i){return Pr===null&&zr(t),Ym(t,i)}function Ym(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},da===null){if(t===null)throw Error(r(308));da=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else da=da.next=i;return s}var xS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},yS=a.unstable_scheduleCallback,SS=a.unstable_NormalPriority,vn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mf(){return{controller:new xS,data:new Map,refCount:0}}function No(t){t.refCount--,t.refCount===0&&yS(SS,function(){t.controller.abort()})}var Lo=null,Ef=0,bs=0,Ms=null;function bS(t,i){if(Lo===null){var s=Lo=[];Ef=0,bs=Rd(),Ms={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ef++,i.then(jm,jm),i}function jm(){if(--Ef===0&&Lo!==null){Ms!==null&&(Ms.status="fulfilled");var t=Lo;Lo=null,bs=0,Ms=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function MS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Zm=L.S;L.S=function(t,i){Nv=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&bS(t,i),Zm!==null&&Zm(t,i)};var Br=O(null);function Tf(){var t=Br.current;return t!==null?t:en.pooledCache}function nc(t,i){i===null?ue(Br,Br.current):ue(Br,i.pool)}function Km(){var t=Tf();return t===null?null:{parent:vn._currentValue,pool:t}}var Es=Error(r(460)),Af=Error(r(474)),ic=Error(r(542)),ac={then:function(){}};function Qm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(la,la),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,eg(t),t;default:if(typeof i.status=="string")i.then(la,la);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,eg(t),t}throw Fr=i,Es}}function Ir(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Fr=s,Es):s}}var Fr=null;function $m(){if(Fr===null)throw Error(r(459));var t=Fr;return Fr=null,t}function eg(t){if(t===Es||t===ic)throw Error(r(483))}var Ts=null,Oo=0;function rc(t){var i=Oo;return Oo+=1,Ts===null&&(Ts=[]),Jm(Ts,t,i)}function Po(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function sc(t,i){throw i.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function tg(t){function i(K,W){if(t){var se=K.deletions;se===null?(K.deletions=[W],K.flags|=16):se.push(W)}}function s(K,W){if(!t)return null;for(;W!==null;)i(K,W),W=W.sibling;return null}function l(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function f(K,W){return K=ua(K,W),K.index=0,K.sibling=null,K}function h(K,W,se){return K.index=se,t?(se=K.alternate,se!==null?(se=se.index,se<W?(K.flags|=67108866,W):se):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function S(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,W,se,_e){return W===null||W.tag!==6?(W=pf(se,K.mode,_e),W.return=K,W):(W=f(W,se),W.return=K,W)}function G(K,W,se,_e){var nt=se.type;return nt===A?me(K,W,se.props.children,_e,se.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===H&&Ir(nt)===W.type)?(W=f(W,se.props),Po(W,se),W.return=K,W):(W=Jl(se.type,se.key,se.props,null,K.mode,_e),Po(W,se),W.return=K,W)}function oe(K,W,se,_e){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=mf(se,K.mode,_e),W.return=K,W):(W=f(W,se.children||[]),W.return=K,W)}function me(K,W,se,_e,nt){return W===null||W.tag!==7?(W=Lr(se,K.mode,_e,nt),W.return=K,W):(W=f(W,se),W.return=K,W)}function ye(K,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=pf(""+W,K.mode,se),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return se=Jl(W.type,W.key,W.props,null,K.mode,se),Po(se,W),se.return=K,se;case M:return W=mf(W,K.mode,se),W.return=K,W;case H:return W=Ir(W),ye(K,W,se)}if(Q(W)||J(W))return W=Lr(W,K.mode,se,null),W.return=K,W;if(typeof W.then=="function")return ye(K,rc(W),se);if(W.$$typeof===U)return ye(K,tc(K,W),se);sc(K,W)}return null}function ce(K,W,se,_e){var nt=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return nt!==null?null:R(K,W,""+se,_e);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case y:return se.key===nt?G(K,W,se,_e):null;case M:return se.key===nt?oe(K,W,se,_e):null;case H:return se=Ir(se),ce(K,W,se,_e)}if(Q(se)||J(se))return nt!==null?null:me(K,W,se,_e,null);if(typeof se.then=="function")return ce(K,W,rc(se),_e);if(se.$$typeof===U)return ce(K,W,tc(K,se),_e);sc(K,se)}return null}function de(K,W,se,_e,nt){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return K=K.get(se)||null,R(W,K,""+_e,nt);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case y:return K=K.get(_e.key===null?se:_e.key)||null,G(W,K,_e,nt);case M:return K=K.get(_e.key===null?se:_e.key)||null,oe(W,K,_e,nt);case H:return _e=Ir(_e),de(K,W,se,_e,nt)}if(Q(_e)||J(_e))return K=K.get(se)||null,me(W,K,_e,nt,null);if(typeof _e.then=="function")return de(K,W,se,rc(_e),nt);if(_e.$$typeof===U)return de(K,W,se,tc(W,_e),nt);sc(W,_e)}return null}function We(K,W,se,_e){for(var nt=null,Ot=null,$e=W,vt=W=0,Tt=null;$e!==null&&vt<se.length;vt++){$e.index>vt?(Tt=$e,$e=null):Tt=$e.sibling;var Pt=ce(K,$e,se[vt],_e);if(Pt===null){$e===null&&($e=Tt);break}t&&$e&&Pt.alternate===null&&i(K,$e),W=h(Pt,W,vt),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt,$e=Tt}if(vt===se.length)return s(K,$e),Rt&&fa(K,vt),nt;if($e===null){for(;vt<se.length;vt++)$e=ye(K,se[vt],_e),$e!==null&&(W=h($e,W,vt),Ot===null?nt=$e:Ot.sibling=$e,Ot=$e);return Rt&&fa(K,vt),nt}for($e=l($e);vt<se.length;vt++)Tt=de($e,K,vt,se[vt],_e),Tt!==null&&(t&&Tt.alternate!==null&&$e.delete(Tt.key===null?vt:Tt.key),W=h(Tt,W,vt),Ot===null?nt=Tt:Ot.sibling=Tt,Ot=Tt);return t&&$e.forEach(function(pr){return i(K,pr)}),Rt&&fa(K,vt),nt}function ot(K,W,se,_e){if(se==null)throw Error(r(151));for(var nt=null,Ot=null,$e=W,vt=W=0,Tt=null,Pt=se.next();$e!==null&&!Pt.done;vt++,Pt=se.next()){$e.index>vt?(Tt=$e,$e=null):Tt=$e.sibling;var pr=ce(K,$e,Pt.value,_e);if(pr===null){$e===null&&($e=Tt);break}t&&$e&&pr.alternate===null&&i(K,$e),W=h(pr,W,vt),Ot===null?nt=pr:Ot.sibling=pr,Ot=pr,$e=Tt}if(Pt.done)return s(K,$e),Rt&&fa(K,vt),nt;if($e===null){for(;!Pt.done;vt++,Pt=se.next())Pt=ye(K,Pt.value,_e),Pt!==null&&(W=h(Pt,W,vt),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt);return Rt&&fa(K,vt),nt}for($e=l($e);!Pt.done;vt++,Pt=se.next())Pt=de($e,K,vt,Pt.value,_e),Pt!==null&&(t&&Pt.alternate!==null&&$e.delete(Pt.key===null?vt:Pt.key),W=h(Pt,W,vt),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt);return t&&$e.forEach(function(Ob){return i(K,Ob)}),Rt&&fa(K,vt),nt}function Qt(K,W,se,_e){if(typeof se=="object"&&se!==null&&se.type===A&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case y:e:{for(var nt=se.key;W!==null;){if(W.key===nt){if(nt=se.type,nt===A){if(W.tag===7){s(K,W.sibling),_e=f(W,se.props.children),_e.return=K,K=_e;break e}}else if(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===H&&Ir(nt)===W.type){s(K,W.sibling),_e=f(W,se.props),Po(_e,se),_e.return=K,K=_e;break e}s(K,W);break}else i(K,W);W=W.sibling}se.type===A?(_e=Lr(se.props.children,K.mode,_e,se.key),_e.return=K,K=_e):(_e=Jl(se.type,se.key,se.props,null,K.mode,_e),Po(_e,se),_e.return=K,K=_e)}return S(K);case M:e:{for(nt=se.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){s(K,W.sibling),_e=f(W,se.children||[]),_e.return=K,K=_e;break e}else{s(K,W);break}else i(K,W);W=W.sibling}_e=mf(se,K.mode,_e),_e.return=K,K=_e}return S(K);case H:return se=Ir(se),Qt(K,W,se,_e)}if(Q(se))return We(K,W,se,_e);if(J(se)){if(nt=J(se),typeof nt!="function")throw Error(r(150));return se=nt.call(se),ot(K,W,se,_e)}if(typeof se.then=="function")return Qt(K,W,rc(se),_e);if(se.$$typeof===U)return Qt(K,W,tc(K,se),_e);sc(K,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,W!==null&&W.tag===6?(s(K,W.sibling),_e=f(W,se),_e.return=K,K=_e):(s(K,W),_e=pf(se,K.mode,_e),_e.return=K,K=_e),S(K)):s(K,W)}return function(K,W,se,_e){try{Oo=0;var nt=Qt(K,W,se,_e);return Ts=null,nt}catch($e){if($e===Es||$e===ic)throw $e;var Ot=di(29,$e,null,K.mode);return Ot.lanes=_e,Ot.return=K,Ot}}}var Hr=tg(!0),ng=tg(!1),Qa=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Ql(t),Fm(t,null,s),i}return Kl(t,l,i,s),Ql(t)}function zo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,go(t,s)}}function wf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=S:h=h.next=S,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Df=!1;function Bo(){if(Df){var t=Ms;if(t!==null)throw t}}function Io(t,i,s,l){Df=!1;var f=t.updateQueue;Qa=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var G=R,oe=G.next;G.next=null,S===null?h=oe:S.next=oe,S=G;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==S&&(R===null?me.firstBaseUpdate=oe:R.next=oe,me.lastBaseUpdate=G))}if(h!==null){var ye=f.baseState;S=0,me=oe=G=null,R=h;do{var ce=R.lane&-536870913,de=ce!==R.lane;if(de?(Et&ce)===ce:(l&ce)===ce){ce!==0&&ce===bs&&(Df=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=t,ot=R;ce=i;var Qt=s;switch(ot.tag){case 1:if(We=ot.payload,typeof We=="function"){ye=We.call(Qt,ye,ce);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=ot.payload,ce=typeof We=="function"?We.call(Qt,ye,ce):We,ce==null)break e;ye=g({},ye,ce);break e;case 2:Qa=!0}}ce=R.callback,ce!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[ce]:de.push(ce))}else de={lane:ce,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(oe=me=de,G=ye):me=me.next=de,S|=ce;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;de=R,R=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);me===null&&(G=ye),f.baseState=G,f.firstBaseUpdate=oe,f.lastBaseUpdate=me,h===null&&(f.shared.lanes=0),ar|=S,t.lanes=S,t.memoizedState=ye}}function ig(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function ag(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)ig(s[t],i)}var As=O(null),oc=O(0);function rg(t,i){t=ba,ue(oc,t),ue(As,i),ba=t|i.baseLanes}function Uf(){ue(oc,ba),ue(As,As.current)}function Nf(){ba=oc.current,ie(As),ie(oc)}var hi=O(null),Ci=null;function er(t){var i=t.alternate;ue(pn,pn.current&1),ue(hi,t),Ci===null&&(i===null||As.current!==null||i.memoizedState!==null)&&(Ci=t)}function Lf(t){ue(pn,pn.current),ue(hi,t),Ci===null&&(Ci=t)}function sg(t){t.tag===22?(ue(pn,pn.current),ue(hi,t),Ci===null&&(Ci=t)):tr()}function tr(){ue(pn,pn.current),ue(hi,hi.current)}function pi(t){ie(hi),Ci===t&&(Ci=null),ie(pn)}var pn=O(0);function lc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Fd(s)||Hd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pa=0,mt=null,Zt=null,_n=null,cc=!1,Rs=!1,Gr=!1,uc=0,Fo=0,Cs=null,ES=0;function un(){throw Error(r(321))}function Of(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!fi(t[s],i[s]))return!1;return!0}function Pf(t,i,s,l,f,h){return pa=h,mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,L.H=t===null||t.memoizedState===null?kg:Kf,Gr=!1,h=s(l,f),Gr=!1,Rs&&(h=lg(i,s,l,f)),og(t),h}function og(t){L.H=Vo;var i=Zt!==null&&Zt.next!==null;if(pa=0,_n=Zt=mt=null,cc=!1,Fo=0,Cs=null,i)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&ec(t)&&(xn=!0))}function lg(t,i,s,l){mt=t;var f=0;do{if(Rs&&(Cs=null),Fo=0,Rs=!1,25<=f)throw Error(r(301));if(f+=1,_n=Zt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}L.H=Xg,h=i(s,l)}while(Rs);return h}function TS(){var t=L.H,i=t.useState()[0];return i=typeof i.then=="function"?Ho(i):i,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(mt.flags|=1024),i}function zf(){var t=uc!==0;return uc=0,t}function Bf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function If(t){if(cc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}cc=!1}pa=0,_n=Zt=mt=null,Rs=!1,Fo=uc=0,Cs=null}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?mt.memoizedState=_n=t:_n=_n.next=t,_n}function mn(){if(Zt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=_n===null?mt.memoizedState:_n.next;if(i!==null)_n=i,Zt=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},_n===null?mt.memoizedState=_n=t:_n=_n.next=t}return _n}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(t){var i=Fo;return Fo+=1,Cs===null&&(Cs=[]),t=Jm(Cs,t,i),i=mt,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,L.H=i===null||i.memoizedState===null?kg:Kf),t}function dc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ho(t);if(t.$$typeof===U)return Hn(t)}throw Error(r(438,String(t)))}function Ff(t){var i=null,s=mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=fc(),mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=D;return i.index++,s}function ma(t,i){return typeof i=="function"?i(t):i}function hc(t){var i=mn();return Hf(i,Zt,t)}function Hf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var R=S=null,G=null,oe=i,me=!1;do{var ye=oe.lane&-536870913;if(ye!==oe.lane?(Et&ye)===ye:(pa&ye)===ye){var ce=oe.revertLane;if(ce===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),ye===bs&&(me=!0);else if((pa&ce)===ce){oe=oe.next,ce===bs&&(me=!0);continue}else ye={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(R=G=ye,S=h):G=G.next=ye,mt.lanes|=ce,ar|=ce;ye=oe.action,Gr&&s(h,ye),h=oe.hasEagerState?oe.eagerState:s(h,ye)}else ce={lane:ye,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(R=G=ce,S=h):G=G.next=ce,mt.lanes|=ye,ar|=ye;oe=oe.next}while(oe!==null&&oe!==i);if(G===null?S=h:G.next=R,!fi(h,t.memoizedState)&&(xn=!0,me&&(s=Ms,s!==null)))throw s;t.memoizedState=h,t.baseState=S,t.baseQueue=G,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Gf(t){var i=mn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);fi(h,i.memoizedState)||(xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function cg(t,i,s){var l=mt,f=mn(),h=Rt;if(h){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!fi((Zt||f).memoizedState,s);if(S&&(f.memoizedState=s,xn=!0),f=f.queue,Xf(dg.bind(null,l,f,t),[t]),f.getSnapshot!==i||S||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,ws(9,{destroy:void 0},fg.bind(null,l,f,s,i),null),en===null)throw Error(r(349));h||(pa&127)!==0||ug(l,i,s)}return s}function ug(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=mt.updateQueue,i===null?(i=fc(),mt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function fg(t,i,s,l){i.value=s,i.getSnapshot=l,hg(i)&&pg(t)}function dg(t,i,s){return s(function(){hg(i)&&pg(t)})}function hg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!fi(t,s)}catch{return!0}}function pg(t){var i=Nr(t,2);i!==null&&si(i,t,2)}function Vf(t){var i=Zn();if(typeof t=="function"){var s=t;if(t=s(),Gr){Ve(!0);try{s()}finally{Ve(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},i}function mg(t,i,s,l){return t.baseState=s,Hf(t,Zt,typeof l=="function"?l:ma)}function AS(t,i,s,l,f){if(gc(t))throw Error(r(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};L.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,gg(i,h)):(h.next=s.next,i.pending=s.next=h)}}function gg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=L.T,S={};L.T=S;try{var R=s(f,l),G=L.S;G!==null&&G(S,R),vg(t,i,R)}catch(oe){kf(t,i,oe)}finally{h!==null&&S.types!==null&&(h.types=S.types),L.T=h}}else try{h=s(f,l),vg(t,i,h)}catch(oe){kf(t,i,oe)}}function vg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){_g(t,i,l)},function(l){return kf(t,i,l)}):_g(t,i,s)}function _g(t,i,s){i.status="fulfilled",i.value=s,xg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,gg(t,s)))}function kf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,xg(i),i=i.next;while(i!==l)}t.action=null}function xg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function yg(t,i){return i}function Sg(t,i){if(Rt){var s=en.formState;if(s!==null){e:{var l=mt;if(Rt){if(nn){t:{for(var f=nn,h=Ri;f.nodeType!==8;){if(!h){f=null;break t}if(f=wi(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){nn=wi(f.nextSibling),l=f.data==="F!";break e}}Za(l)}l=!1}l&&(i=s[0])}}return s=Zn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yg,lastRenderedState:i},s.queue=l,s=Hg.bind(null,mt,l),l.dispatch=s,l=Vf(!1),h=Zf.bind(null,mt,!1,l.queue),l=Zn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=AS.bind(null,mt,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function bg(t){var i=mn();return Mg(i,Zt,t)}function Mg(t,i,s){if(i=Hf(t,i,yg)[0],t=hc(ma)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ho(i)}catch(S){throw S===Es?ic:S}else l=i;i=mn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(mt.flags|=2048,ws(9,{destroy:void 0},RS.bind(null,f,s),null)),[l,h,t]}function RS(t,i){t.action=i}function Eg(t){var i=mn(),s=Zt;if(s!==null)return Mg(i,s,t);mn(),i=i.memoizedState,s=mn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function ws(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=mt.updateQueue,i===null&&(i=fc(),mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Tg(){return mn().memoizedState}function pc(t,i,s,l){var f=Zn();mt.flags|=t,f.memoizedState=ws(1|i,{destroy:void 0},s,l===void 0?null:l)}function mc(t,i,s,l){var f=mn();l=l===void 0?null:l;var h=f.memoizedState.inst;Zt!==null&&l!==null&&Of(l,Zt.memoizedState.deps)?f.memoizedState=ws(i,h,s,l):(mt.flags|=t,f.memoizedState=ws(1|i,h,s,l))}function Ag(t,i){pc(8390656,8,t,i)}function Xf(t,i){mc(2048,8,t,i)}function CS(t){mt.flags|=4;var i=mt.updateQueue;if(i===null)i=fc(),mt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Rg(t){var i=mn().memoizedState;return CS({ref:i,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function Cg(t,i){return mc(4,2,t,i)}function wg(t,i){return mc(4,4,t,i)}function Dg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ug(t,i,s){s=s!=null?s.concat([t]):null,mc(4,4,Dg.bind(null,i,t),s)}function Wf(){}function Ng(t,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Of(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Lg(t,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Of(i,l[1]))return l[0];if(l=t(),Gr){Ve(!0);try{t()}finally{Ve(!1)}}return s.memoizedState=[l,i],l}function qf(t,i,s){return s===void 0||(pa&1073741824)!==0&&(Et&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Ov(),mt.lanes|=t,ar|=t,s)}function Og(t,i,s,l){return fi(s,i)?s:As.current!==null?(t=qf(t,s,l),fi(t,i)||(xn=!0),t):(pa&42)===0||(pa&1073741824)!==0&&(Et&261930)===0?(xn=!0,t.memoizedState=s):(t=Ov(),mt.lanes|=t,ar|=t,i)}function Pg(t,i,s,l,f){var h=I.p;I.p=h!==0&&8>h?h:8;var S=L.T,R={};L.T=R,Zf(t,!1,i,s);try{var G=f(),oe=L.S;if(oe!==null&&oe(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var me=MS(G,l);Go(t,i,me,vi(t))}else Go(t,i,l,vi(t))}catch(ye){Go(t,i,{then:function(){},status:"rejected",reason:ye},vi())}finally{I.p=h,S!==null&&R.types!==null&&(S.types=R.types),L.T=S}}function wS(){}function Yf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=zg(t).queue;Pg(t,f,i,V,s===null?wS:function(){return Bg(t),s(l)})}function zg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:V},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Bg(t){var i=zg(t);i.next===null&&(i=t.alternate.memoizedState),Go(t,i.next.queue,{},vi())}function jf(){return Hn(al)}function Ig(){return mn().memoizedState}function Fg(){return mn().memoizedState}function DS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=vi();t=Ja(s);var l=$a(i,t,s);l!==null&&(si(l,i,s),zo(l,i,s)),i={cache:Mf()},t.payload=i;return}i=i.return}}function US(t,i,s){var l=vi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},gc(t)?Gg(i,s):(s=df(t,i,s,l),s!==null&&(si(s,t,l),Vg(s,i,l)))}function Hg(t,i,s){var l=vi();Go(t,i,s,l)}function Go(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(gc(t))Gg(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,R=h(S,s);if(f.hasEagerState=!0,f.eagerState=R,fi(R,S))return Kl(t,i,f,0),en===null&&Zl(),!1}catch{}if(s=df(t,i,f,l),s!==null)return si(s,t,l),Vg(s,i,l),!0}return!1}function Zf(t,i,s,l){if(l={lane:2,revertLane:Rd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},gc(t)){if(i)throw Error(r(479))}else i=df(t,s,l,2),i!==null&&si(i,t,2)}function gc(t){var i=t.alternate;return t===mt||i!==null&&i===mt}function Gg(t,i){Rs=cc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Vg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,go(t,s)}}var Vo={readContext:Hn,use:dc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};Vo.useEffectEvent=un;var kg={readContext:Hn,use:dc,useCallback:function(t,i){return Zn().memoizedState=[t,i===void 0?null:i],t},useContext:Hn,useEffect:Ag,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,pc(4194308,4,Dg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return pc(4194308,4,t,i)},useInsertionEffect:function(t,i){pc(4,2,t,i)},useMemo:function(t,i){var s=Zn();i=i===void 0?null:i;var l=t();if(Gr){Ve(!0);try{t()}finally{Ve(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Zn();if(s!==void 0){var f=s(i);if(Gr){Ve(!0);try{s(i)}finally{Ve(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=US.bind(null,mt,t),[l.memoizedState,t]},useRef:function(t){var i=Zn();return t={current:t},i.memoizedState=t},useState:function(t){t=Vf(t);var i=t.queue,s=Hg.bind(null,mt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Wf,useDeferredValue:function(t,i){var s=Zn();return qf(s,t,i)},useTransition:function(){var t=Vf(!1);return t=Pg.bind(null,mt,t.queue,!0,!1),Zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=mt,f=Zn();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),en===null)throw Error(r(349));(Et&127)!==0||ug(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,Ag(dg.bind(null,l,h,t),[t]),l.flags|=2048,ws(9,{destroy:void 0},fg.bind(null,l,h,s,i),null),s},useId:function(){var t=Zn(),i=en.identifierPrefix;if(Rt){var s=Ki,l=Zi;s=(l&~(1<<32-He(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=uc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=ES++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:jf,useFormState:Sg,useActionState:Sg,useOptimistic:function(t){var i=Zn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Zf.bind(null,mt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Ff,useCacheRefresh:function(){return Zn().memoizedState=DS.bind(null,mt)},useEffectEvent:function(t){var i=Zn(),s={impl:t};return i.memoizedState=s,function(){if((Ht&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Kf={readContext:Hn,use:dc,useCallback:Ng,useContext:Hn,useEffect:Xf,useImperativeHandle:Ug,useInsertionEffect:Cg,useLayoutEffect:wg,useMemo:Lg,useReducer:hc,useRef:Tg,useState:function(){return hc(ma)},useDebugValue:Wf,useDeferredValue:function(t,i){var s=mn();return Og(s,Zt.memoizedState,t,i)},useTransition:function(){var t=hc(ma)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:Ho(t),i]},useSyncExternalStore:cg,useId:Ig,useHostTransitionStatus:jf,useFormState:bg,useActionState:bg,useOptimistic:function(t,i){var s=mn();return mg(s,Zt,t,i)},useMemoCache:Ff,useCacheRefresh:Fg};Kf.useEffectEvent=Rg;var Xg={readContext:Hn,use:dc,useCallback:Ng,useContext:Hn,useEffect:Xf,useImperativeHandle:Ug,useInsertionEffect:Cg,useLayoutEffect:wg,useMemo:Lg,useReducer:Gf,useRef:Tg,useState:function(){return Gf(ma)},useDebugValue:Wf,useDeferredValue:function(t,i){var s=mn();return Zt===null?qf(s,t,i):Og(s,Zt.memoizedState,t,i)},useTransition:function(){var t=Gf(ma)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:Ho(t),i]},useSyncExternalStore:cg,useId:Ig,useHostTransitionStatus:jf,useFormState:Eg,useActionState:Eg,useOptimistic:function(t,i){var s=mn();return Zt!==null?mg(s,Zt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Ff,useCacheRefresh:Fg};Xg.useEffectEvent=Rg;function Qf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Jf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=vi(),f=Ja(l);f.payload=i,s!=null&&(f.callback=s),i=$a(t,f,l),i!==null&&(si(i,t,l),zo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=vi(),f=Ja(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=$a(t,f,l),i!==null&&(si(i,t,l),zo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=vi(),l=Ja(s);l.tag=2,i!=null&&(l.callback=i),i=$a(t,l,s),i!==null&&(si(i,t,s),zo(i,t,s))}};function Wg(t,i,s,l,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!Co(s,l)||!Co(f,h):!0}function qg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Jf.enqueueReplaceState(i,i.state,null)}function Vr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Yg(t){jl(t)}function jg(t){console.error(t)}function Zg(t){jl(t)}function vc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Kg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(t,i,s){return s=Ja(s),s.tag=3,s.payload={element:null},s.callback=function(){vc(t,i)},s}function Qg(t){return t=Ja(t),t.tag=3,t}function Jg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){Kg(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Kg(i,s,l),typeof f!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function NS(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Ss(i,s,f,!0),s=hi.current,s!==null){switch(s.tag){case 31:case 13:return Ci===null?wc():s.alternate===null&&fn===0&&(fn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===ac?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Ed(t,l,f)),!1;case 22:return s.flags|=65536,l===ac?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Ed(t,l,f)),!1}throw Error(r(435,s.tag))}return Ed(t,l,f),wc(),!1}if(Rt)return i=hi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==_f&&(t=Error(r(422),{cause:l}),Uo(Ei(t,s)))):(l!==_f&&(i=Error(r(423),{cause:l}),Uo(Ei(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ei(l,s),f=$f(t.stateNode,l,f),wf(t,f),fn!==4&&(fn=2)),!1;var h=Error(r(520),{cause:l});if(h=Ei(h,s),Ko===null?Ko=[h]:Ko.push(h),fn!==4&&(fn=2),i===null)return!0;l=Ei(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=$f(s.stateNode,l,t),wf(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(rr===null||!rr.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Qg(f),Jg(f,t,s,l),wf(s,f),!1}s=s.return}while(s!==null);return!1}var ed=Error(r(461)),xn=!1;function Gn(t,i,s,l){i.child=t===null?ng(i,null,s,l):Hr(i,t.child,s,l)}function $g(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return zr(i),l=Pf(t,i,s,S,h,f),R=zf(),t!==null&&!xn?(Bf(t,i,f),ga(t,i,f)):(Rt&&R&&gf(i),i.flags|=1,Gn(t,i,l,f),i.child)}function ev(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!hf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,tv(t,i,h,l,f)):(t=Jl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!ld(t,f)){var S=h.memoizedProps;if(s=s.compare,s=s!==null?s:Co,s(S,l)&&t.ref===i.ref)return ga(t,i,f)}return i.flags|=1,t=ua(h,l),t.ref=i.ref,t.return=i,i.child=t}function tv(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(Co(h,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=h,ld(t,f))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,ga(t,i,f)}return td(t,i,s,l,f)}function nv(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return iv(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&nc(i,h!==null?h.cachePool:null),h!==null?rg(i,h):Uf(),sg(i);else return l=i.lanes=536870912,iv(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(nc(i,h.cachePool),rg(i,h),tr(),i.memoizedState=null):(t!==null&&nc(i,null),Uf(),tr());return Gn(t,i,f,s),i.child}function ko(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function iv(t,i,s,l,f){var h=Tf();return h=h===null?null:{parent:vn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&nc(i,null),Uf(),sg(i),t!==null&&Ss(t,i,l,!0),i.childLanes=f,null}function _c(t,i){return i=yc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function av(t,i,s){return Hr(i,t.child,null,s),t=_c(i,i.pendingProps),t.flags|=2,pi(i),i.memoizedState=null,t}function LS(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=_c(i,l),i.lanes=536870912,ko(null,t);if(Lf(i),(t=nn)?(t=g0(t,Ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},s=Gm(t),s.return=i,i.child=s,Fn=i,nn=null)):t=null,t===null)throw Za(i);return i.lanes=536870912,null}return _c(i,l)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(Lf(i),f)if(i.flags&256)i.flags&=-257,i=av(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(xn||Ss(t,i,s,!1),f=(s&t.childLanes)!==0,xn||f){if(l=en,l!==null&&(S=ss(l,s),S!==0&&S!==h.retryLane))throw h.retryLane=S,Nr(t,S),si(l,t,S),ed;wc(),i=av(t,i,s)}else t=h.treeContext,nn=wi(S.nextSibling),Fn=i,Rt=!0,ja=null,Ri=!1,t!==null&&Xm(i,t),i=_c(i,l),i.flags|=4096;return i}return t=ua(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function xc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function td(t,i,s,l,f){return zr(i),s=Pf(t,i,s,l,void 0,f),l=zf(),t!==null&&!xn?(Bf(t,i,f),ga(t,i,f)):(Rt&&l&&gf(i),i.flags|=1,Gn(t,i,s,f),i.child)}function rv(t,i,s,l,f,h){return zr(i),i.updateQueue=null,s=lg(i,l,s,f),og(t),l=zf(),t!==null&&!xn?(Bf(t,i,h),ga(t,i,h)):(Rt&&l&&gf(i),i.flags|=1,Gn(t,i,s,h),i.child)}function sv(t,i,s,l,f){if(zr(i),i.stateNode===null){var h=vs,S=s.contextType;typeof S=="object"&&S!==null&&(h=Hn(S)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Jf,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},Rf(i),S=s.contextType,h.context=typeof S=="object"&&S!==null?Hn(S):vs,h.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Qf(i,s,S,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Jf.enqueueReplaceState(h,h.state,null),Io(i,l,h,f),Bo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var R=i.memoizedProps,G=Vr(s,R);h.props=G;var oe=h.context,me=s.contextType;S=vs,typeof me=="object"&&me!==null&&(S=Hn(me));var ye=s.getDerivedStateFromProps;me=typeof ye=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||oe!==S)&&qg(i,h,l,S),Qa=!1;var ce=i.memoizedState;h.state=ce,Io(i,l,h,f),Bo(),oe=i.memoizedState,R||ce!==oe||Qa?(typeof ye=="function"&&(Qf(i,s,ye,l),oe=i.memoizedState),(G=Qa||Wg(i,s,G,l,ce,oe,S))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=oe),h.props=l,h.state=oe,h.context=S,l=G):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,Cf(t,i),S=i.memoizedProps,me=Vr(s,S),h.props=me,ye=i.pendingProps,ce=h.context,oe=s.contextType,G=vs,typeof oe=="object"&&oe!==null&&(G=Hn(oe)),R=s.getDerivedStateFromProps,(oe=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==ye||ce!==G)&&qg(i,h,l,G),Qa=!1,ce=i.memoizedState,h.state=ce,Io(i,l,h,f),Bo();var de=i.memoizedState;S!==ye||ce!==de||Qa||t!==null&&t.dependencies!==null&&ec(t.dependencies)?(typeof R=="function"&&(Qf(i,s,R,l),de=i.memoizedState),(me=Qa||Wg(i,s,me,l,ce,de,G)||t!==null&&t.dependencies!==null&&ec(t.dependencies))?(oe||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,de,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,de,G)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=de),h.props=l,h.state=de,h.context=G,l=me):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,xc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Hr(i,t.child,null,f),i.child=Hr(i,null,s,f)):Gn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=ga(t,i,f),t}function ov(t,i,s,l){return Or(),i.flags|=256,Gn(t,i,s,l),i.child}var nd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function id(t){return{baseLanes:t,cachePool:Km()}}function ad(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=gi),t}function lv(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Rt){if(f?er(i):tr(),(t=nn)?(t=g0(t,Ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},s=Gm(t),s.return=i,i.child=s,Fn=i,nn=null)):t=null,t===null)throw Za(i);return Hd(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(tr(),f=i.mode,R=yc({mode:"hidden",children:R},f),l=Lr(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=id(s),l.childLanes=ad(t,S,s),i.memoizedState=nd,ko(null,l)):(er(i),rd(i,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(h)i.flags&256?(er(i),i.flags&=-257,i=sd(t,i,s)):i.memoizedState!==null?(tr(),i.child=t.child,i.flags|=128,i=null):(tr(),R=l.fallback,f=i.mode,l=yc({mode:"visible",children:l.children},f),R=Lr(R,f,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Hr(i,t.child,null,s),l=i.child,l.memoizedState=id(s),l.childLanes=ad(t,S,s),i.memoizedState=nd,i=ko(null,l));else if(er(i),Hd(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var oe=S.dgst;S=oe,l=Error(r(419)),l.stack="",l.digest=S,Uo({value:l,source:null,stack:null}),i=sd(t,i,s)}else if(xn||Ss(t,i,s,!1),S=(s&t.childLanes)!==0,xn||S){if(S=en,S!==null&&(l=ss(S,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Nr(t,l),si(S,t,l),ed;Fd(R)||wc(),i=sd(t,i,s)}else Fd(R)?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,nn=wi(R.nextSibling),Fn=i,Rt=!0,ja=null,Ri=!1,t!==null&&Xm(i,t),i=rd(i,l.children),i.flags|=4096);return i}return f?(tr(),R=l.fallback,f=i.mode,G=t.child,oe=G.sibling,l=ua(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,oe!==null?R=ua(oe,R):(R=Lr(R,f,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,ko(null,l),l=i.child,R=t.child.memoizedState,R===null?R=id(s):(f=R.cachePool,f!==null?(G=vn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=Km(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=ad(t,S,s),i.memoizedState=nd,ko(t.child,l)):(er(i),s=t.child,t=s.sibling,s=ua(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function rd(t,i){return i=yc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function yc(t,i){return t=di(22,t,null,i),t.lanes=0,t}function sd(t,i,s){return Hr(i,t.child,null,s),t=rd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function cv(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Sf(t.return,i,s)}function od(t,i,s,l,f,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=h)}function uv(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var S=pn.current,R=(S&2)!==0;if(R?(S=S&1|2,i.flags|=128):S&=1,ue(pn,S),Gn(t,i,l,s),l=Rt?Do:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cv(t,s,i);else if(t.tag===19)cv(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&lc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),od(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&lc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}od(i,!0,s,null,h,l);break;case"together":od(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ga(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ar|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Ss(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ua(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ua(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function ld(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ec(t)))}function OS(t,i,s){switch(i.tag){case 3:De(i,i.stateNode.containerInfo),Ka(i,vn,t.memoizedState.cache),Or();break;case 27:case 5:ze(i);break;case 4:De(i,i.stateNode.containerInfo);break;case 10:Ka(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Lf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(er(i),i.flags|=128,null):(s&i.child.childLanes)!==0?lv(t,i,s):(er(i),t=ga(t,i,s),t!==null?t.sibling:null);er(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Ss(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return uv(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ue(pn,pn.current),l)break;return null;case 22:return i.lanes=0,nv(t,i,s,i.pendingProps);case 24:Ka(i,vn,t.memoizedState.cache)}return ga(t,i,s)}function fv(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!ld(t,s)&&(i.flags&128)===0)return xn=!1,OS(t,i,s);xn=(t.flags&131072)!==0}else xn=!1,Rt&&(i.flags&1048576)!==0&&km(i,Do,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ir(i.elementType),i.type=t,typeof t=="function")hf(t)?(l=Vr(t,l),i.tag=1,i=sv(null,i,t,l,s)):(i.tag=0,i=td(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===N){i.tag=11,i=$g(null,i,t,l,s);break e}else if(f===z){i.tag=14,i=ev(null,i,t,l,s);break e}}throw i=he(t)||t,Error(r(306,i,""))}}return i;case 0:return td(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Vr(l,i.pendingProps),sv(t,i,l,f,s);case 3:e:{if(De(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,Cf(t,i),Io(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Ka(i,vn,l),l!==h.cache&&bf(i,[vn],s,!0),Bo(),l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=ov(t,i,l,s);break e}else if(l!==f){f=Ei(Error(r(424)),i),Uo(f),i=ov(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,nn=wi(t.firstChild),Fn=i,Rt=!0,ja=null,Ri=!0,s=ng(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Or(),l===f){i=ga(t,i,s);break e}Gn(t,i,l,s)}i=i.child}return i;case 26:return xc(t,i),t===null?(s=b0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Rt||(s=i.type,t=i.pendingProps,l=zc($.current).createElement(s),l[gn]=i,l[Ln]=t,Vn(l,s,t),C(l),i.stateNode=l):i.memoizedState=b0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ze(i),t===null&&Rt&&(l=i.stateNode=x0(i.type,i.pendingProps,$.current),Fn=i,Ri=!0,f=nn,cr(i.type)?(Gd=f,nn=wi(l.firstChild)):nn=f),Gn(t,i,i.pendingProps.children,s),xc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Rt&&((f=l=nn)&&(l=ub(l,i.type,i.pendingProps,Ri),l!==null?(i.stateNode=l,Fn=i,nn=wi(l.firstChild),Ri=!1,f=!0):f=!1),f||Za(i)),ze(i),f=i.type,h=i.pendingProps,S=t!==null?t.memoizedProps:null,l=h.children,zd(f,h)?l=null:S!==null&&zd(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Pf(t,i,TS,null,null,s),al._currentValue=f),xc(t,i),Gn(t,i,l,s),i.child;case 6:return t===null&&Rt&&((t=s=nn)&&(s=fb(s,i.pendingProps,Ri),s!==null?(i.stateNode=s,Fn=i,nn=null,t=!0):t=!1),t||Za(i)),null;case 13:return lv(t,i,s);case 4:return De(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Hr(i,null,l,s):Gn(t,i,l,s),i.child;case 11:return $g(t,i,i.type,i.pendingProps,s);case 7:return Gn(t,i,i.pendingProps,s),i.child;case 8:return Gn(t,i,i.pendingProps.children,s),i.child;case 12:return Gn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ka(i,i.type,l.value),Gn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,zr(i),f=Hn(f),l=l(f),i.flags|=1,Gn(t,i,l,s),i.child;case 14:return ev(t,i,i.type,i.pendingProps,s);case 15:return tv(t,i,i.type,i.pendingProps,s);case 19:return uv(t,i,s);case 31:return LS(t,i,s);case 22:return nv(t,i,s,i.pendingProps);case 24:return zr(i),l=Hn(vn),t===null?(f=Tf(),f===null&&(f=en,h=Mf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},Rf(i),Ka(i,vn,f)):((t.lanes&s)!==0&&(Cf(t,i),Io(i,null,null,s),Bo()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ka(i,vn,l)):(l=h.cache,Ka(i,vn,l),l!==f.cache&&bf(i,[vn],s,!0))),Gn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function va(t){t.flags|=4}function cd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Iv())t.flags|=8192;else throw Fr=ac,Af}else t.flags&=-16777217}function dv(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!R0(i))if(Iv())t.flags|=8192;else throw Fr=ac,Af}function Sc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Xt():536870912,t.lanes|=i,Ls|=i)}function Xo(t,i){if(!Rt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function an(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function PS(t,i,s){var l=i.pendingProps;switch(vf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return an(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ha(vn),Fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(ys(i)?va(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xf())),an(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(va(i),h!==null?(an(i),dv(i,h)):(an(i),cd(i,f,null,l,s))):h?h!==t.memoizedState?(va(i),an(i),dv(i,h)):(an(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&va(i),an(i),cd(i,f,t,l,s)),null;case 27:if(it(i),s=$.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&va(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return an(i),null}t=Se.current,ys(i)?Wm(i):(t=x0(f,l,s),i.stateNode=t,va(i))}return an(i),null;case 5:if(it(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&va(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return an(i),null}if(h=Se.current,ys(i))Wm(i);else{var S=zc($.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}h[gn]=i,h[Ln]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=h;e:switch(Vn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&va(i)}}return an(i),cd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&va(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=$.current,ys(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Fn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[gn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||l0(t.nodeValue,s)),t||Za(i,!0)}else t=zc(t).createTextNode(l),t[gn]=i,i.stateNode=t}return an(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=ys(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[gn]=i}else Or(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),t=!1}else s=xf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(pi(i),i):(pi(i),null);if((i.flags&128)!==0)throw Error(r(558))}return an(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=ys(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[gn]=i}else Or(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),f=!1}else f=xf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(pi(i),i):(pi(i),null)}return pi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Sc(i,i.updateQueue),an(i),null);case 4:return Fe(),t===null&&Ud(i.stateNode.containerInfo),an(i),null;case 10:return ha(i.type),an(i),null;case 19:if(ie(pn),l=i.memoizedState,l===null)return an(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)Xo(l,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=lc(t),h!==null){for(i.flags|=128,Xo(l,!1),t=h.updateQueue,i.updateQueue=t,Sc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Hm(s,t),s=s.sibling;return ue(pn,pn.current&1|2),Rt&&fa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&E()>Ac&&(i.flags|=128,f=!0,Xo(l,!1),i.lanes=4194304)}else{if(!f)if(t=lc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Sc(i,t),Xo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Rt)return an(i),null}else 2*E()-l.renderingStartTime>Ac&&s!==536870912&&(i.flags|=128,f=!0,Xo(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=E(),t.sibling=null,s=pn.current,ue(pn,f?s&1|2:s&1),Rt&&fa(i,l.treeForkCount),t):(an(i),null);case 22:case 23:return pi(i),Nf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),s=i.updateQueue,s!==null&&Sc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ie(Br),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ha(vn),an(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function zS(t,i){switch(vf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ha(vn),Fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return it(i),null;case 31:if(i.memoizedState!==null){if(pi(i),i.alternate===null)throw Error(r(340));Or()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(pi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Or()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(pn),null;case 4:return Fe(),null;case 10:return ha(i.type),null;case 22:case 23:return pi(i),Nf(),t!==null&&ie(Br),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ha(vn),null;case 25:return null;default:return null}}function hv(t,i){switch(vf(i),i.tag){case 3:ha(vn),Fe();break;case 26:case 27:case 5:it(i);break;case 4:Fe();break;case 31:i.memoizedState!==null&&pi(i);break;case 13:pi(i);break;case 19:ie(pn);break;case 10:ha(i.type);break;case 22:case 23:pi(i),Nf(),t!==null&&ie(Br);break;case 24:ha(vn)}}function Wo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,S=s.inst;l=h(),S.destroy=l}s=s.next}while(s!==f)}}catch(R){Yt(i,i.return,R)}}function nr(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=i;var G=s,oe=R;try{oe()}catch(me){Yt(f,G,me)}}}l=l.next}while(l!==h)}}catch(me){Yt(i,i.return,me)}}function pv(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{ag(i,s)}catch(l){Yt(t,t.return,l)}}}function mv(t,i,s){s.props=Vr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Yt(t,i,l)}}function qo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Yt(t,i,f)}}function Qi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Yt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Yt(t,i,f)}else s.current=null}function gv(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Yt(t,t.return,f)}}function ud(t,i,s){try{var l=t.stateNode;ab(l,t.type,s,i),l[Ln]=i}catch(f){Yt(t,t.return,f)}}function vv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&cr(t.type)||t.tag===4}function fd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&cr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=la));else if(l!==4&&(l===27&&cr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(dd(t,i,s),t=t.sibling;t!==null;)dd(t,i,s),t=t.sibling}function bc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&cr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(bc(t,i,s),t=t.sibling;t!==null;)bc(t,i,s),t=t.sibling}function _v(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Vn(i,l,s),i[gn]=t,i[Ln]=s}catch(h){Yt(t,t.return,h)}}var _a=!1,yn=!1,hd=!1,xv=typeof WeakSet=="function"?WeakSet:Set,Dn=null;function BS(t,i){if(t=t.containerInfo,Od=kc,t=Um(t),sf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var S=0,R=-1,G=-1,oe=0,me=0,ye=t,ce=null;t:for(;;){for(var de;ye!==s||f!==0&&ye.nodeType!==3||(R=S+f),ye!==h||l!==0&&ye.nodeType!==3||(G=S+l),ye.nodeType===3&&(S+=ye.nodeValue.length),(de=ye.firstChild)!==null;)ce=ye,ye=de;for(;;){if(ye===t)break t;if(ce===s&&++oe===f&&(R=S),ce===h&&++me===l&&(G=S),(de=ye.nextSibling)!==null)break;ye=ce,ce=ye.parentNode}ye=de}s=R===-1||G===-1?null:{start:R,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Pd={focusedElem:t,selectionRange:s},kc=!1,Dn=i;Dn!==null;)if(i=Dn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Dn=t;else for(;Dn!==null;){switch(i=Dn,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var We=Vr(s.type,f);t=l.getSnapshotBeforeUpdate(We,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Yt(s,s.return,ot)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Id(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Id(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Dn=t;break}Dn=i.return}}function yv(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ya(t,s),l&4&&Wo(5,s);break;case 1:if(ya(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){Yt(s,s.return,S)}else{var f=Vr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Yt(s,s.return,S)}}l&64&&pv(s),l&512&&qo(s,s.return);break;case 3:if(ya(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{ag(t,i)}catch(S){Yt(s,s.return,S)}}break;case 27:i===null&&l&4&&_v(s);case 26:case 5:ya(t,s),i===null&&l&4&&gv(s),l&512&&qo(s,s.return);break;case 12:ya(t,s);break;case 31:ya(t,s),l&4&&Mv(t,s);break;case 13:ya(t,s),l&4&&Ev(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=qS.bind(null,s),db(t,s))));break;case 22:if(l=s.memoizedState!==null||_a,!l){i=i!==null&&i.memoizedState!==null||yn,f=_a;var h=yn;_a=l,(yn=i)&&!h?Sa(t,s,(s.subtreeFlags&8772)!==0):ya(t,s),_a=f,yn=h}break;case 30:break;default:ya(t,s)}}function Sv(t){var i=t.alternate;i!==null&&(t.alternate=null,Sv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&yo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,ni=!1;function xa(t,i,s){for(s=s.child;s!==null;)bv(t,i,s),s=s.sibling}function bv(t,i,s){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Re,s)}catch{}switch(s.tag){case 26:yn||Qi(s,i),xa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||Qi(s,i);var l=on,f=ni;cr(s.type)&&(on=s.stateNode,ni=!1),xa(t,i,s),tl(s.stateNode),on=l,ni=f;break;case 5:yn||Qi(s,i);case 6:if(l=on,f=ni,on=null,xa(t,i,s),on=l,ni=f,on!==null)if(ni)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(h){Yt(s,i,h)}else try{on.removeChild(s.stateNode)}catch(h){Yt(s,i,h)}break;case 18:on!==null&&(ni?(t=on,p0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Gs(t)):p0(on,s.stateNode));break;case 4:l=on,f=ni,on=s.stateNode.containerInfo,ni=!0,xa(t,i,s),on=l,ni=f;break;case 0:case 11:case 14:case 15:nr(2,s,i),yn||nr(4,s,i),xa(t,i,s);break;case 1:yn||(Qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&mv(s,i,l)),xa(t,i,s);break;case 21:xa(t,i,s);break;case 22:yn=(l=yn)||s.memoizedState!==null,xa(t,i,s),yn=l;break;default:xa(t,i,s)}}function Mv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Gs(t)}catch(s){Yt(i,i.return,s)}}}function Ev(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gs(t)}catch(s){Yt(i,i.return,s)}}function IS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new xv),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new xv),i;default:throw Error(r(435,t.tag))}}function Mc(t,i){var s=IS(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=YS.bind(null,t,l);l.then(f,f)}})}function ii(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,S=i,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(cr(R.type)){on=R.stateNode,ni=!1;break e}break;case 5:on=R.stateNode,ni=!1;break e;case 3:case 4:on=R.stateNode.containerInfo,ni=!0;break e}R=R.return}if(on===null)throw Error(r(160));bv(h,S,f),on=null,ni=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Tv(i,t),i=i.sibling}var Ii=null;function Tv(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ii(i,t),ai(t),l&4&&(nr(3,t,t.return),Wo(3,t),nr(5,t,t.return));break;case 1:ii(i,t),ai(t),l&512&&(yn||s===null||Qi(s,s.return)),l&64&&_a&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ii;if(ii(i,t),ai(t),l&512&&(yn||s===null||Qi(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[Rr]||h[gn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Vn(h,l,s),h[gn]=t,C(h),l=h;break e;case"link":var S=T0("link","href",f).get(l+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(h=S[R],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break t}}h=f.createElement(l),Vn(h,l,s),f.head.appendChild(h);break;case"meta":if(S=T0("meta","content",f).get(l+(s.content||""))){for(R=0;R<S.length;R++)if(h=S[R],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break t}}h=f.createElement(l),Vn(h,l,s),f.head.appendChild(h);break;default:throw Error(r(468,l))}h[gn]=t,C(h),l=h}t.stateNode=l}else A0(f,t.type,t.stateNode);else t.stateNode=E0(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?A0(f,t.type,t.stateNode):E0(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&ud(t,t.memoizedProps,s.memoizedProps)}break;case 27:ii(i,t),ai(t),l&512&&(yn||s===null||Qi(s,s.return)),s!==null&&l&4&&ud(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ii(i,t),ai(t),l&512&&(yn||s===null||Qi(s,s.return)),t.flags&32){f=t.stateNode;try{En(f,"")}catch(We){Yt(t,t.return,We)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,ud(t,f,s!==null?s.memoizedProps:f)),l&1024&&(hd=!0);break;case 6:if(ii(i,t),ai(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(We){Yt(t,t.return,We)}}break;case 3:if(Fc=null,f=Ii,Ii=Bc(i.containerInfo),ii(i,t),Ii=f,ai(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Gs(i.containerInfo)}catch(We){Yt(t,t.return,We)}hd&&(hd=!1,Av(t));break;case 4:l=Ii,Ii=Bc(t.stateNode.containerInfo),ii(i,t),ai(t),Ii=l;break;case 12:ii(i,t),ai(t);break;case 31:ii(i,t),ai(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Mc(t,l)));break;case 13:ii(i,t),ai(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Tc=E()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Mc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,oe=_a,me=yn;if(_a=oe||f,yn=me||G,ii(i,t),yn=me,_a=oe,ai(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||G||_a||yn||kr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(h=G.stateNode,f)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=G.stateNode;var ye=G.memoizedProps.style,ce=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;R.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(We){Yt(G,G.return,We)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(We){Yt(G,G.return,We)}}}else if(i.tag===18){if(s===null){G=i;try{var de=G.stateNode;f?m0(de,!0):m0(G.stateNode,!1)}catch(We){Yt(G,G.return,We)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Mc(t,s))));break;case 19:ii(i,t),ai(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Mc(t,l)));break;case 30:break;case 21:break;default:ii(i,t),ai(t)}}function ai(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(vv(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,h=fd(t);bc(t,h,f);break;case 5:var S=s.stateNode;s.flags&32&&(En(S,""),s.flags&=-33);var R=fd(t);bc(t,R,S);break;case 3:case 4:var G=s.stateNode.containerInfo,oe=fd(t);dd(t,oe,G);break;default:throw Error(r(161))}}catch(me){Yt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Av(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Av(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ya(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)yv(t,i.alternate,i),i=i.sibling}function kr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:nr(4,i,i.return),kr(i);break;case 1:Qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&mv(i,i.return,s),kr(i);break;case 27:tl(i.stateNode);case 26:case 5:Qi(i,i.return),kr(i);break;case 22:i.memoizedState===null&&kr(i);break;case 30:kr(i);break;default:kr(i)}t=t.sibling}}function Sa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,S=h.flags;switch(h.tag){case 0:case 11:case 15:Sa(f,h,s),Wo(4,h);break;case 1:if(Sa(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(oe){Yt(l,l.return,oe)}if(l=h,f=l.updateQueue,f!==null){var R=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)ig(G[f],R)}catch(oe){Yt(l,l.return,oe)}}s&&S&64&&pv(h),qo(h,h.return);break;case 27:_v(h);case 26:case 5:Sa(f,h,s),s&&l===null&&S&4&&gv(h),qo(h,h.return);break;case 12:Sa(f,h,s);break;case 31:Sa(f,h,s),s&&S&4&&Mv(f,h);break;case 13:Sa(f,h,s),s&&S&4&&Ev(f,h);break;case 22:h.memoizedState===null&&Sa(f,h,s),qo(h,h.return);break;case 30:break;default:Sa(f,h,s)}i=i.sibling}}function pd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&No(s))}function md(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&No(t))}function Fi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Rv(t,i,s,l),i=i.sibling}function Rv(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(t,i,s,l),f&2048&&Wo(9,i);break;case 1:Fi(t,i,s,l);break;case 3:Fi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&No(t)));break;case 12:if(f&2048){Fi(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,S=h.id,R=h.onPostCommit;typeof R=="function"&&R(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Yt(i,i.return,G)}}else Fi(t,i,s,l);break;case 31:Fi(t,i,s,l);break;case 13:Fi(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,S=i.alternate,i.memoizedState!==null?h._visibility&2?Fi(t,i,s,l):Yo(t,i):h._visibility&2?Fi(t,i,s,l):(h._visibility|=2,Ds(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&pd(S,i);break;case 24:Fi(t,i,s,l),f&2048&&md(i.alternate,i);break;default:Fi(t,i,s,l)}}function Ds(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,S=i,R=s,G=l,oe=S.flags;switch(S.tag){case 0:case 11:case 15:Ds(h,S,R,G,f),Wo(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?Ds(h,S,R,G,f):Yo(h,S):(me._visibility|=2,Ds(h,S,R,G,f)),f&&oe&2048&&pd(S.alternate,S);break;case 24:Ds(h,S,R,G,f),f&&oe&2048&&md(S.alternate,S);break;default:Ds(h,S,R,G,f)}i=i.sibling}}function Yo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Yo(s,l),f&2048&&pd(l.alternate,l);break;case 24:Yo(s,l),f&2048&&md(l.alternate,l);break;default:Yo(s,l)}i=i.sibling}}var jo=8192;function Us(t,i,s){if(t.subtreeFlags&jo)for(t=t.child;t!==null;)Cv(t,i,s),t=t.sibling}function Cv(t,i,s){switch(t.tag){case 26:Us(t,i,s),t.flags&jo&&t.memoizedState!==null&&Eb(s,Ii,t.memoizedState,t.memoizedProps);break;case 5:Us(t,i,s);break;case 3:case 4:var l=Ii;Ii=Bc(t.stateNode.containerInfo),Us(t,i,s),Ii=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=jo,jo=16777216,Us(t,i,s),jo=l):Us(t,i,s));break;default:Us(t,i,s)}}function wv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Zo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Dn=l,Uv(l,t)}wv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dv(t),t=t.sibling}function Dv(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&nr(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ec(t)):Zo(t);break;default:Zo(t)}}function Ec(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Dn=l,Uv(l,t)}wv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:nr(8,i,i.return),Ec(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Ec(i));break;default:Ec(i)}t=t.sibling}}function Uv(t,i){for(;Dn!==null;){var s=Dn;switch(s.tag){case 0:case 11:case 15:nr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:No(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Dn=l;else e:for(s=t;Dn!==null;){l=Dn;var f=l.sibling,h=l.return;if(Sv(l),l===s){Dn=null;break e}if(f!==null){f.return=h,Dn=f;break e}Dn=h}}}var FS={getCacheForType:function(t){var i=Hn(vn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Hn(vn).controller.signal}},HS=typeof WeakMap=="function"?WeakMap:Map,Ht=0,en=null,St=null,Et=0,qt=0,mi=null,ir=!1,Ns=!1,gd=!1,ba=0,fn=0,ar=0,Xr=0,vd=0,gi=0,Ls=0,Ko=null,ri=null,_d=!1,Tc=0,Nv=0,Ac=1/0,Rc=null,rr=null,Tn=0,sr=null,Os=null,Ma=0,xd=0,yd=null,Lv=null,Qo=0,Sd=null;function vi(){return(Ht&2)!==0&&Et!==0?Et&-Et:L.T!==null?Rd():_o()}function Ov(){if(gi===0)if((Et&536870912)===0||Rt){var t=we;we<<=1,(we&3932160)===0&&(we=262144),gi=t}else gi=536870912;return t=hi.current,t!==null&&(t.flags|=32),gi}function si(t,i,s){(t===en&&(qt===2||qt===9)||t.cancelPendingCommit!==null)&&(Ps(t,0),or(t,Et,gi,!1)),Wn(t,s),((Ht&2)===0||t!==en)&&(t===en&&((Ht&2)===0&&(Xr|=s),fn===4&&or(t,Et,gi,!1)),Ji(t))}function Pv(t,i,s){if((Ht&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ue(t,i),f=l?kS(t,i):Md(t,i,!0),h=l;do{if(f===0){Ns&&!l&&or(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!GS(s)){f=Md(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var R=t;f=Ko;var G=R.current.memoizedState.isDehydrated;if(G&&(Ps(R,S).flags|=256),S=Md(R,S,!1),S!==2){if(gd&&!G){R.errorRecoveryDisabledLanes|=h,Xr|=h,f=4;break e}h=ri,ri=f,h!==null&&(ri===null?ri=h:ri.push.apply(ri,h))}f=S}if(h=!1,f!==2)continue}}if(f===1){Ps(t,0),or(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:or(l,i,gi,!ir);break e;case 2:ri=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=Tc+300-E(),10<f)){if(or(l,i,gi,!ir),be(l,0,!0)!==0)break e;Ma=i,l.timeoutHandle=d0(zv.bind(null,l,s,ri,Rc,_d,i,gi,Xr,Ls,ir,h,"Throttled",-0,0),f);break e}zv(l,s,ri,Rc,_d,i,gi,Xr,Ls,ir,h,null,-0,0)}}break}while(!0);Ji(t)}function zv(t,i,s,l,f,h,S,R,G,oe,me,ye,ce,de){if(t.timeoutHandle=-1,ye=i.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},Cv(i,h,ye);var We=(h&62914560)===h?Tc-E():(h&4194048)===h?Nv-E():0;if(We=Tb(ye,We),We!==null){Ma=h,t.cancelPendingCommit=We(Xv.bind(null,t,i,h,s,l,f,S,R,G,me,ye,null,ce,de)),or(t,h,S,!oe);return}}Xv(t,i,h,s,l,f,S,R,G)}function GS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!fi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i,s,l){i&=~vd,i&=~Xr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-He(f),S=1<<h;l[h]=-1,f&=~S}s!==0&&Fl(t,s,i)}function Cc(){return(Ht&6)===0?(Jo(0),!1):!0}function bd(){if(St!==null){if(qt===0)var t=St.return;else t=St,da=Pr=null,If(t),Ts=null,Oo=0,t=St;for(;t!==null;)hv(t.alternate,t),t=t.return;St=null}}function Ps(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,ob(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ma=0,bd(),en=t,St=s=ua(t.current,null),Et=i,qt=0,mi=null,ir=!1,Ns=Ue(t,i),gd=!1,Ls=gi=vd=Xr=ar=fn=0,ri=Ko=null,_d=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-He(l),h=1<<f;i|=t[f],l&=~h}return ba=i,Zl(),s}function Bv(t,i){mt=null,L.H=Vo,i===Es||i===ic?(i=$m(),qt=3):i===Af?(i=$m(),qt=4):qt=i===ed?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mi=i,St===null&&(fn=1,vc(t,Ei(i,t.current)))}function Iv(){var t=hi.current;return t===null?!0:(Et&4194048)===Et?Ci===null:(Et&62914560)===Et||(Et&536870912)!==0?t===Ci:!1}function Fv(){var t=L.H;return L.H=Vo,t===null?Vo:t}function Hv(){var t=L.A;return L.A=FS,t}function wc(){fn=4,ir||(Et&4194048)!==Et&&hi.current!==null||(Ns=!0),(ar&134217727)===0&&(Xr&134217727)===0||en===null||or(en,Et,gi,!1)}function Md(t,i,s){var l=Ht;Ht|=2;var f=Fv(),h=Hv();(en!==t||Et!==i)&&(Rc=null,Ps(t,i)),i=!1;var S=fn;e:do try{if(qt!==0&&St!==null){var R=St,G=mi;switch(qt){case 8:bd(),S=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(i=!0);var oe=qt;if(qt=0,mi=null,zs(t,R,G,oe),s&&Ns){S=0;break e}break;default:oe=qt,qt=0,mi=null,zs(t,R,G,oe)}}VS(),S=fn;break}catch(me){Bv(t,me)}while(!0);return i&&t.shellSuspendCounter++,da=Pr=null,Ht=l,L.H=f,L.A=h,St===null&&(en=null,Et=0,Zl()),S}function VS(){for(;St!==null;)Gv(St)}function kS(t,i){var s=Ht;Ht|=2;var l=Fv(),f=Hv();en!==t||Et!==i?(Rc=null,Ac=E()+500,Ps(t,i)):Ns=Ue(t,i);e:do try{if(qt!==0&&St!==null){i=St;var h=mi;t:switch(qt){case 1:qt=0,mi=null,zs(t,i,h,1);break;case 2:case 9:if(Qm(h)){qt=0,mi=null,Vv(i);break}i=function(){qt!==2&&qt!==9||en!==t||(qt=7),Ji(t)},h.then(i,i);break e;case 3:qt=7;break e;case 4:qt=5;break e;case 7:Qm(h)?(qt=0,mi=null,Vv(i)):(qt=0,mi=null,zs(t,i,h,7));break;case 5:var S=null;switch(St.tag){case 26:S=St.memoizedState;case 5:case 27:var R=St;if(S?R0(S):R.stateNode.complete){qt=0,mi=null;var G=R.sibling;if(G!==null)St=G;else{var oe=R.return;oe!==null?(St=oe,Dc(oe)):St=null}break t}}qt=0,mi=null,zs(t,i,h,5);break;case 6:qt=0,mi=null,zs(t,i,h,6);break;case 8:bd(),fn=6;break e;default:throw Error(r(462))}}XS();break}catch(me){Bv(t,me)}while(!0);return da=Pr=null,L.H=l,L.A=f,Ht=s,St!==null?0:(en=null,Et=0,Zl(),fn)}function XS(){for(;St!==null&&!Je();)Gv(St)}function Gv(t){var i=fv(t.alternate,t,ba);t.memoizedProps=t.pendingProps,i===null?Dc(t):St=i}function Vv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=rv(s,i,i.pendingProps,i.type,void 0,Et);break;case 11:i=rv(s,i,i.pendingProps,i.type.render,i.ref,Et);break;case 5:If(i);default:hv(s,i),i=St=Hm(i,ba),i=fv(s,i,ba)}t.memoizedProps=t.pendingProps,i===null?Dc(t):St=i}function zs(t,i,s,l){da=Pr=null,If(i),Ts=null,Oo=0;var f=i.return;try{if(NS(t,f,i,s,Et)){fn=1,vc(t,Ei(s,t.current)),St=null;return}}catch(h){if(f!==null)throw St=f,h;fn=1,vc(t,Ei(s,t.current)),St=null;return}i.flags&32768?(Rt||l===1?t=!0:Ns||(Et&536870912)!==0?t=!1:(ir=t=!0,(l===2||l===9||l===3||l===6)&&(l=hi.current,l!==null&&l.tag===13&&(l.flags|=16384))),kv(i,t)):Dc(i)}function Dc(t){var i=t;do{if((i.flags&32768)!==0){kv(i,ir);return}t=i.return;var s=PS(i.alternate,i,ba);if(s!==null){St=s;return}if(i=i.sibling,i!==null){St=i;return}St=i=t}while(i!==null);fn===0&&(fn=5)}function kv(t,i){do{var s=zS(t.alternate,t);if(s!==null){s.flags&=32767,St=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){St=t;return}St=t=s}while(t!==null);fn=6,St=null}function Xv(t,i,s,l,f,h,S,R,G){t.cancelPendingCommit=null;do Uc();while(Tn!==0);if((Ht&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(h=i.lanes|i.childLanes,h|=ff,Oi(t,s,h,S,R,G),t===en&&(St=en=null,Et=0),Os=i,sr=t,Ma=s,xd=h,yd=f,Lv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,jS(pe,function(){return Zv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,f=I.p,I.p=2,S=Ht,Ht|=4;try{BS(t,i,s)}finally{Ht=S,I.p=f,L.T=l}}Tn=1,Wv(),qv(),Yv()}}function Wv(){if(Tn===1){Tn=0;var t=sr,i=Os,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=L.T,L.T=null;var l=I.p;I.p=2;var f=Ht;Ht|=4;try{Tv(i,t);var h=Pd,S=Um(t.containerInfo),R=h.focusedElem,G=h.selectionRange;if(S!==R&&R&&R.ownerDocument&&Dm(R.ownerDocument.documentElement,R)){if(G!==null&&sf(R)){var oe=G.start,me=G.end;if(me===void 0&&(me=oe),"selectionStart"in R)R.selectionStart=oe,R.selectionEnd=Math.min(me,R.value.length);else{var ye=R.ownerDocument||document,ce=ye&&ye.defaultView||window;if(ce.getSelection){var de=ce.getSelection(),We=R.textContent.length,ot=Math.min(G.start,We),Qt=G.end===void 0?ot:Math.min(G.end,We);!de.extend&&ot>Qt&&(S=Qt,Qt=ot,ot=S);var K=wm(R,ot),W=wm(R,Qt);if(K&&W&&(de.rangeCount!==1||de.anchorNode!==K.node||de.anchorOffset!==K.offset||de.focusNode!==W.node||de.focusOffset!==W.offset)){var se=ye.createRange();se.setStart(K.node,K.offset),de.removeAllRanges(),ot>Qt?(de.addRange(se),de.extend(W.node,W.offset)):(se.setEnd(W.node,W.offset),de.addRange(se))}}}}for(ye=[],de=R;de=de.parentNode;)de.nodeType===1&&ye.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var _e=ye[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}kc=!!Od,Pd=Od=null}finally{Ht=f,I.p=l,L.T=s}}t.current=i,Tn=2}}function qv(){if(Tn===2){Tn=0;var t=sr,i=Os,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=L.T,L.T=null;var l=I.p;I.p=2;var f=Ht;Ht|=4;try{yv(t,i.alternate,i)}finally{Ht=f,I.p=l,L.T=s}}Tn=3}}function Yv(){if(Tn===4||Tn===3){Tn=0,P();var t=sr,i=Os,s=Ma,l=Lv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,Os=sr=null,jv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(rr=null),os(s),i=i.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Re,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=L.T,f=I.p,I.p=2,L.T=null;try{for(var h=t.onRecoverableError,S=0;S<l.length;S++){var R=l[S];h(R.value,{componentStack:R.stack})}}finally{L.T=i,I.p=f}}(Ma&3)!==0&&Uc(),Ji(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Sd?Qo++:(Qo=0,Sd=t):Qo=0,Jo(0)}}function jv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,No(i)))}function Uc(){return Wv(),qv(),Yv(),Zv()}function Zv(){if(Tn!==5)return!1;var t=sr,i=xd;xd=0;var s=os(Ma),l=L.T,f=I.p;try{I.p=32>s?32:s,L.T=null,s=yd,yd=null;var h=sr,S=Ma;if(Tn=0,Os=sr=null,Ma=0,(Ht&6)!==0)throw Error(r(331));var R=Ht;if(Ht|=4,Dv(h.current),Rv(h,h.current,S,s),Ht=R,Jo(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Re,h)}catch{}return!0}finally{I.p=f,L.T=l,jv(t,i)}}function Kv(t,i,s){i=Ei(s,i),i=$f(t.stateNode,i,2),t=$a(t,i,2),t!==null&&(Wn(t,2),Ji(t))}function Yt(t,i,s){if(t.tag===3)Kv(t,t,s);else for(;i!==null;){if(i.tag===3){Kv(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=Ei(s,t),s=Qg(2),l=$a(i,s,2),l!==null&&(Jg(s,l,i,t),Wn(l,2),Ji(l));break}}i=i.return}}function Ed(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new HS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(gd=!0,f.add(s),t=WS.bind(null,t,i,s),i.then(t,t))}function WS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(Et&s)===s&&(fn===4||fn===3&&(Et&62914560)===Et&&300>E()-Tc?(Ht&2)===0&&Ps(t,0):vd|=s,Ls===Et&&(Ls=0)),Ji(t)}function Qv(t,i){i===0&&(i=Xt()),t=Nr(t,i),t!==null&&(Wn(t,i),Ji(t))}function qS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Qv(t,s)}function YS(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),Qv(t,s)}function jS(t,i){return wt(t,i)}var Nc=null,Bs=null,Td=!1,Lc=!1,Ad=!1,lr=0;function Ji(t){t!==Bs&&t.next===null&&(Bs===null?Nc=Bs=t:Bs=Bs.next=t),Lc=!0,Td||(Td=!0,KS())}function Jo(t,i){if(!Ad&&Lc){Ad=!0;do for(var s=!1,l=Nc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var S=l.suspendedLanes,R=l.pingedLanes;h=(1<<31-He(42|t)+1)-1,h&=f&~(S&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,t0(l,h))}else h=Et,h=be(l,l===en?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ue(l,h)||(s=!0,t0(l,h));l=l.next}while(s);Ad=!1}}function ZS(){Jv()}function Jv(){Lc=Td=!1;var t=0;lr!==0&&sb()&&(t=lr);for(var i=E(),s=null,l=Nc;l!==null;){var f=l.next,h=$v(l,i);h===0?(l.next=null,s===null?Nc=f:s.next=f,f===null&&(Bs=s)):(s=l,(t!==0||(h&3)!==0)&&(Lc=!0)),l=f}Tn!==0&&Tn!==5||Jo(t),lr!==0&&(lr=0)}function $v(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-He(h),R=1<<S,G=f[S];G===-1?((R&s)===0||(R&l)!==0)&&(f[S]=ut(R,i)):G<=i&&(t.expiredLanes|=R),h&=~R}if(i=en,s=Et,s=be(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(qt===2||qt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Vt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Vt(l),os(s)){case 2:case 8:s=Ee;break;case 32:s=pe;break;case 268435456:s=Ne;break;default:s=pe}return l=e0.bind(null,t),s=wt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Vt(l),t.callbackPriority=2,t.callbackNode=null,2}function e0(t,i){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Uc()&&t.callbackNode!==s)return null;var l=Et;return l=be(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Pv(t,l,i),$v(t,E()),t.callbackNode!=null&&t.callbackNode===s?e0.bind(null,t):null)}function t0(t,i){if(Uc())return null;Pv(t,i,!0)}function KS(){lb(function(){(Ht&6)!==0?wt(ve,ZS):Jv()})}function Rd(){if(lr===0){var t=bs;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),lr=t}return lr}function n0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gl(""+t)}function i0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function QS(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=n0((f[Ln]||null).action),S=l.submitter;S&&(i=(i=S[Ln]||null)?n0(i.formAction):S.getAttribute("formAction"),i!==null&&(h=i,S=null));var R=new Wl("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(lr!==0){var G=S?i0(f,S):new FormData(f);Yf(s,{pending:!0,data:G,method:f.method,action:h},null,G)}}else typeof h=="function"&&(R.preventDefault(),G=S?i0(f,S):new FormData(f),Yf(s,{pending:!0,data:G,method:f.method,action:h},h,G))},currentTarget:f}]})}}for(var Cd=0;Cd<uf.length;Cd++){var wd=uf[Cd],JS=wd.toLowerCase(),$S=wd[0].toUpperCase()+wd.slice(1);Bi(JS,"on"+$S)}Bi(Om,"onAnimationEnd"),Bi(Pm,"onAnimationIteration"),Bi(zm,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(mS,"onTransitionRun"),Bi(gS,"onTransitionStart"),Bi(vS,"onTransitionCancel"),Bi(Bm,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function a0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var R=l[S],G=R.instance,oe=R.currentTarget;if(R=R.listener,G!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=oe;try{h(f)}catch(me){jl(me)}f.currentTarget=null,h=G}else for(S=0;S<l.length;S++){if(R=l[S],G=R.instance,oe=R.currentTarget,R=R.listener,G!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=oe;try{h(f)}catch(me){jl(me)}f.currentTarget=null,h=G}}}}function bt(t,i){var s=i[ls];s===void 0&&(s=i[ls]=new Set);var l=t+"__bubble";s.has(l)||(r0(i,t,2,!1),s.add(l))}function Dd(t,i,s){var l=0;i&&(l|=4),r0(s,t,l,i)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Ud(t){if(!t[Oc]){t[Oc]=!0,j.forEach(function(s){s!=="selectionchange"&&(eb.has(s)||Dd(s,!1,t),Dd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Oc]||(i[Oc]=!0,Dd("selectionchange",!1,i))}}function r0(t,i,s,l){switch(O0(i)){case 2:var f=Cb;break;case 8:f=wb;break;default:f=qd}s=f.bind(null,i,s,t),f=void 0,!Ku||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Nd(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=ka(R),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=h=S;continue e}R=R.parentNode}}l=l.return}um(function(){var oe=h,me=ju(s),ye=[];e:{var ce=Im.get(t);if(ce!==void 0){var de=Wl,We=t;switch(t){case"keypress":if(kl(s)===0)break e;case"keydown":case"keyup":de=Yy;break;case"focusin":We="focus",de=ef;break;case"focusout":We="blur",de=ef;break;case"beforeblur":case"afterblur":de=ef;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Ky;break;case Om:case Pm:case zm:de=Iy;break;case Bm:de=Jy;break;case"scroll":case"scrollend":de=Ly;break;case"wheel":de=eS;break;case"copy":case"cut":case"paste":de=Hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=mm;break;case"toggle":case"beforetoggle":de=nS}var ot=(i&4)!==0,Qt=!ot&&(t==="scroll"||t==="scrollend"),K=ot?ce!==null?ce+"Capture":null:ce;ot=[];for(var W=oe,se;W!==null;){var _e=W;if(se=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||se===null||K===null||(_e=So(W,K),_e!=null&&ot.push(el(W,_e,se))),Qt)break;W=W.return}0<ot.length&&(ce=new de(ce,We,null,s,me),ye.push({event:ce,listeners:ot}))}}if((i&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ce&&s!==Yu&&(We=s.relatedTarget||s.fromElement)&&(ka(We)||We[Pi]))break e;if((de||ce)&&(ce=me.window===me?me:(ce=me.ownerDocument)?ce.defaultView||ce.parentWindow:window,de?(We=s.relatedTarget||s.toElement,de=oe,We=We?ka(We):null,We!==null&&(Qt=c(We),ot=We.tag,We!==Qt||ot!==5&&ot!==27&&ot!==6)&&(We=null)):(de=null,We=oe),de!==We)){if(ot=hm,_e="onMouseLeave",K="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(ot=mm,_e="onPointerLeave",K="onPointerEnter",W="pointer"),Qt=de==null?ce:Cr(de),se=We==null?ce:Cr(We),ce=new ot(_e,W+"leave",de,s,me),ce.target=Qt,ce.relatedTarget=se,_e=null,ka(me)===oe&&(ot=new ot(K,W+"enter",We,s,me),ot.target=se,ot.relatedTarget=Qt,_e=ot),Qt=_e,de&&We)t:{for(ot=tb,K=de,W=We,se=0,_e=K;_e;_e=ot(_e))se++;_e=0;for(var nt=W;nt;nt=ot(nt))_e++;for(;0<se-_e;)K=ot(K),se--;for(;0<_e-se;)W=ot(W),_e--;for(;se--;){if(K===W||W!==null&&K===W.alternate){ot=K;break t}K=ot(K),W=ot(W)}ot=null}else ot=null;de!==null&&s0(ye,ce,de,ot,!1),We!==null&&Qt!==null&&s0(ye,Qt,We,ot,!0)}}e:{if(ce=oe?Cr(oe):window,de=ce.nodeName&&ce.nodeName.toLowerCase(),de==="select"||de==="input"&&ce.type==="file")var Ot=Mm;else if(Sm(ce))if(Em)Ot=dS;else{Ot=uS;var $e=cS}else de=ce.nodeName,!de||de.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?oe&&zi(oe.elementType)&&(Ot=Mm):Ot=fS;if(Ot&&(Ot=Ot(t,oe))){bm(ye,Ot,s,me);break e}$e&&$e(t,ce,oe),t==="focusout"&&oe&&ce.type==="number"&&oe.memoizedProps.value!=null&&Pn(ce,"number",ce.value)}switch($e=oe?Cr(oe):window,t){case"focusin":(Sm($e)||$e.contentEditable==="true")&&(ps=$e,of=oe,wo=null);break;case"focusout":wo=of=ps=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,Nm(ye,s,me);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":Nm(ye,s,me)}var vt;if(nf)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else hs?xm(t,s)&&(Tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Tt="onCompositionStart");Tt&&(gm&&s.locale!=="ko"&&(hs||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&hs&&(vt=fm()):(qa=me,Qu="value"in qa?qa.value:qa.textContent,hs=!0)),$e=Pc(oe,Tt),0<$e.length&&(Tt=new pm(Tt,t,null,s,me),ye.push({event:Tt,listeners:$e}),vt?Tt.data=vt:(vt=ym(s),vt!==null&&(Tt.data=vt)))),(vt=aS?rS(t,s):sS(t,s))&&(Tt=Pc(oe,"onBeforeInput"),0<Tt.length&&($e=new pm("onBeforeInput","beforeinput",null,s,me),ye.push({event:$e,listeners:Tt}),$e.data=vt)),QS(ye,t,oe,s,me)}a0(ye,i)})}function el(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Pc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=So(t,s),f!=null&&l.unshift(el(t,f,h)),f=So(t,i),f!=null&&l.push(el(t,f,h))),t.tag===3)return l;t=t.return}return[]}function tb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s0(t,i,s,l,f){for(var h=i._reactName,S=[];s!==null&&s!==l;){var R=s,G=R.alternate,oe=R.stateNode;if(R=R.tag,G!==null&&G===l)break;R!==5&&R!==26&&R!==27||oe===null||(G=oe,f?(oe=So(s,h),oe!=null&&S.unshift(el(s,oe,G))):f||(oe=So(s,h),oe!=null&&S.push(el(s,oe,G)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var nb=/\r\n?/g,ib=/\u0000|\uFFFD/g;function o0(t){return(typeof t=="string"?t:""+t).replace(nb,`
`).replace(ib,"")}function l0(t,i){return i=o0(i),o0(t)===i}function Kt(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||En(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&En(t,""+l);break;case"className":rt(t,"class",l);break;case"tabIndex":rt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":rt(t,s,l);break;case"style":us(t,l,h);break;case"data":if(i!=="object"){rt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Gl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Kt(t,i,"name",f.name,f,null),Kt(t,i,"formEncType",f.formEncType,f,null),Kt(t,i,"formMethod",f.formMethod,f,null),Kt(t,i,"formTarget",f.formTarget,f,null)):(Kt(t,i,"encType",f.encType,f,null),Kt(t,i,"method",f.method,f,null),Kt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Gl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=la);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Gl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":bt("beforetoggle",t),bt("toggle",t),Ke(t,"popover",l);break;case"xlinkActuate":Qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ke(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Uy.get(s)||s,Ke(t,s,l))}}function Ld(t,i,s,l,f,h){switch(s){case"style":us(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?En(t,l):(typeof l=="number"||typeof l=="bigint")&&En(t,""+l);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fe.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[Ln]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ke(t,s,l)}}}function Vn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var S=s[h];if(S!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Kt(t,i,h,S,s,null)}}f&&Kt(t,i,"srcSet",s.srcSet,s,null),l&&Kt(t,i,"src",s.src,s,null);return;case"input":bt("invalid",t);var R=h=S=f=null,G=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":f=me;break;case"type":S=me;break;case"checked":G=me;break;case"defaultChecked":oe=me;break;case"value":h=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,i));break;default:Kt(t,i,l,me,s,null)}}oa(t,h,R,G,oe,S,f,!1);return;case"select":bt("invalid",t),l=S=h=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":h=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:Kt(t,i,f,R,s,null)}i=h,s=S,t.multiple=!!l,i!=null?bi(t,!!l,i,!1):s!=null&&bi(t,!!l,s,!0);return;case"textarea":bt("invalid",t),h=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":f=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Kt(t,i,S,R,s,null)}zn(t,l,f,h);return;case"option":for(G in s)s.hasOwnProperty(G)&&(l=s[G],l!=null)&&(G==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Kt(t,i,G,l,s,null));return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(l=0;l<$o.length;l++)bt($o[l],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Kt(t,i,oe,l,s,null)}return;default:if(zi(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&Ld(t,i,me,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Kt(t,i,R,l,s,null))}function ab(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,S=null,R=null,G=null,oe=null,me=null;for(de in s){var ye=s[de];if(s.hasOwnProperty(de)&&ye!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":G=ye;default:l.hasOwnProperty(de)||Kt(t,i,de,null,l,ye)}}for(var ce in l){var de=l[ce];if(ye=s[ce],l.hasOwnProperty(ce)&&(de!=null||ye!=null))switch(ce){case"type":h=de;break;case"name":f=de;break;case"checked":oe=de;break;case"defaultChecked":me=de;break;case"value":S=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,i));break;default:de!==ye&&Kt(t,i,ce,de,l,ye)}}On(t,S,R,G,oe,me,h,f);return;case"select":de=S=R=ce=null;for(h in s)if(G=s[h],s.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":de=G;default:l.hasOwnProperty(h)||Kt(t,i,h,null,l,G)}for(f in l)if(h=l[f],G=s[f],l.hasOwnProperty(f)&&(h!=null||G!=null))switch(f){case"value":ce=h;break;case"defaultValue":R=h;break;case"multiple":S=h;default:h!==G&&Kt(t,i,f,h,l,G)}i=R,s=S,l=de,ce!=null?bi(t,!!s,ce,!1):!!l!=!!s&&(i!=null?bi(t,!!s,i,!0):bi(t,!!s,s?[]:"",!1));return;case"textarea":de=ce=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Kt(t,i,R,null,l,f)}for(S in l)if(f=l[S],h=s[S],l.hasOwnProperty(S)&&(f!=null||h!=null))switch(S){case"value":ce=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==h&&Kt(t,i,S,f,l,h)}Wt(t,ce,de);return;case"option":for(var We in s)ce=s[We],s.hasOwnProperty(We)&&ce!=null&&!l.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:Kt(t,i,We,null,l,ce));for(G in l)ce=l[G],de=s[G],l.hasOwnProperty(G)&&ce!==de&&(ce!=null||de!=null)&&(G==="selected"?t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol":Kt(t,i,G,ce,l,de));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in s)ce=s[ot],s.hasOwnProperty(ot)&&ce!=null&&!l.hasOwnProperty(ot)&&Kt(t,i,ot,null,l,ce);for(oe in l)if(ce=l[oe],de=s[oe],l.hasOwnProperty(oe)&&ce!==de&&(ce!=null||de!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,i));break;default:Kt(t,i,oe,ce,l,de)}return;default:if(zi(i)){for(var Qt in s)ce=s[Qt],s.hasOwnProperty(Qt)&&ce!==void 0&&!l.hasOwnProperty(Qt)&&Ld(t,i,Qt,void 0,l,ce);for(me in l)ce=l[me],de=s[me],!l.hasOwnProperty(me)||ce===de||ce===void 0&&de===void 0||Ld(t,i,me,ce,l,de);return}}for(var K in s)ce=s[K],s.hasOwnProperty(K)&&ce!=null&&!l.hasOwnProperty(K)&&Kt(t,i,K,null,l,ce);for(ye in l)ce=l[ye],de=s[ye],!l.hasOwnProperty(ye)||ce===de||ce==null&&de==null||Kt(t,i,ye,ce,l,de)}function c0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,S=f.initiatorType,R=f.duration;if(h&&R&&c0(S)){for(S=0,R=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],oe=G.startTime;if(oe>R)break;var me=G.transferSize,ye=G.initiatorType;me&&c0(ye)&&(G=G.responseEnd,S+=me*(G<R?1:(R-oe)/(G-oe)))}if(--l,i+=8*(h+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Od=null,Pd=null;function zc(t){return t.nodeType===9?t:t.ownerDocument}function u0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function zd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bd=null;function sb(){var t=window.event;return t&&t.type==="popstate"?t===Bd?!1:(Bd=t,!0):(Bd=null,!1)}var d0=typeof setTimeout=="function"?setTimeout:void 0,ob=typeof clearTimeout=="function"?clearTimeout:void 0,h0=typeof Promise=="function"?Promise:void 0,lb=typeof queueMicrotask=="function"?queueMicrotask:typeof h0<"u"?function(t){return h0.resolve(null).then(t).catch(cb)}:d0;function cb(t){setTimeout(function(){throw t})}function cr(t){return t==="head"}function p0(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Gs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")tl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,tl(s);for(var h=s.firstChild;h;){var S=h.nextSibling,R=h.nodeName;h[Rr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=S}}else s==="body"&&tl(t.ownerDocument.body);s=f}while(s);Gs(i)}function m0(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Id(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Id(s),yo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function ub(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Rr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=wi(t.nextSibling),t===null)break}return null}function fb(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=wi(t.nextSibling),t===null))return null;return t}function g0(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=wi(t.nextSibling),t===null))return null;return t}function Fd(t){return t.data==="$?"||t.data==="$~"}function Hd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function db(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function wi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Gd=null;function v0(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return wi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function _0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function x0(t,i,s){switch(i=zc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function tl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);yo(t)}var Di=new Map,y0=new Set;function Bc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ea=I.d;I.d={f:hb,r:pb,D:mb,C:gb,L:vb,m:_b,X:yb,S:xb,M:Sb};function hb(){var t=Ea.f(),i=Cc();return t||i}function pb(t){var i=Xa(t);i!==null&&i.tag===5&&i.type==="form"?Bg(i):Ea.r(t)}var Is=typeof document>"u"?null:document;function S0(t,i,s){var l=Is;if(l&&typeof i=="string"&&i){var f=dt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),y0.has(f)||(y0.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Vn(i,"link",t),C(i),l.head.appendChild(i)))}}function mb(t){Ea.D(t),S0("dns-prefetch",t,null)}function gb(t,i){Ea.C(t,i),S0("preconnect",t,i)}function vb(t,i,s){Ea.L(t,i,s);var l=Is;if(l&&t&&i){var f='link[rel="preload"][as="'+dt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+dt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+dt(s.imageSizes)+'"]')):f+='[href="'+dt(t)+'"]';var h=f;switch(i){case"style":h=Fs(t);break;case"script":h=Hs(t)}Di.has(h)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Di.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(nl(h))||i==="script"&&l.querySelector(il(h))||(i=l.createElement("link"),Vn(i,"link",t),C(i),l.head.appendChild(i)))}}function _b(t,i){Ea.m(t,i);var s=Is;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+dt(l)+'"][href="'+dt(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Hs(t)}if(!Di.has(h)&&(t=g({rel:"modulepreload",href:t},i),Di.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(il(h)))return}l=s.createElement("link"),Vn(l,"link",t),C(l),s.head.appendChild(l)}}}function xb(t,i,s){Ea.S(t,i,s);var l=Is;if(l&&t){var f=Wa(l).hoistableStyles,h=Fs(t);i=i||"default";var S=f.get(h);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(nl(h)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Di.get(h))&&Vd(t,s);var G=S=l.createElement("link");C(G),Vn(G,"link",t),G._p=new Promise(function(oe,me){G.onload=oe,G.onerror=me}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ic(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(h,S)}}}function yb(t,i){Ea.X(t,i);var s=Is;if(s&&t){var l=Wa(s).hoistableScripts,f=Hs(t),h=l.get(f);h||(h=s.querySelector(il(f)),h||(t=g({src:t,async:!0},i),(i=Di.get(f))&&kd(t,i),h=s.createElement("script"),C(h),Vn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function Sb(t,i){Ea.M(t,i);var s=Is;if(s&&t){var l=Wa(s).hoistableScripts,f=Hs(t),h=l.get(f);h||(h=s.querySelector(il(f)),h||(t=g({src:t,async:!0,type:"module"},i),(i=Di.get(f))&&kd(t,i),h=s.createElement("script"),C(h),Vn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function b0(t,i,s,l){var f=(f=$.current)?Bc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Fs(s.href),s=Wa(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Fs(s.href);var h=Wa(f).hoistableStyles,S=h.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=f.querySelector(nl(t)))&&!h._p&&(S.instance=h,S.state.loading=5),Di.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Di.set(t,s),h||bb(f,t,s,S.state))),i&&l===null)throw Error(r(528,""));return S}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Hs(s),s=Wa(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Fs(t){return'href="'+dt(t)+'"'}function nl(t){return'link[rel="stylesheet"]['+t+"]"}function M0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function bb(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Vn(i,"link",s),C(i),t.head.appendChild(i))}function Hs(t){return'[src="'+dt(t)+'"]'}function il(t){return"script[async]"+t}function E0(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+dt(s.href)+'"]');if(l)return i.instance=l,C(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),C(l),Vn(l,"style",f),Ic(l,s.precedence,t),i.instance=l;case"stylesheet":f=Fs(s.href);var h=t.querySelector(nl(f));if(h)return i.state.loading|=4,i.instance=h,C(h),h;l=M0(s),(f=Di.get(f))&&Vd(l,f),h=(t.ownerDocument||t).createElement("link"),C(h);var S=h;return S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),Vn(h,"link",l),i.state.loading|=4,Ic(h,s.precedence,t),i.instance=h;case"script":return h=Hs(s.src),(f=t.querySelector(il(h)))?(i.instance=f,C(f),f):(l=s,(f=Di.get(h))&&(l=g({},s),kd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),C(f),Vn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ic(l,s.precedence,t));return i.instance}function Ic(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===i)h=R;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Vd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function kd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Fc=null;function T0(t,i,s){if(Fc===null){var l=new Map,f=Fc=new Map;f.set(s,l)}else f=Fc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[Rr]||h[gn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(i)||"";S=t+S;var R=l.get(S);R?R.push(h):l.set(S,[h])}}return l}function A0(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Mb(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function R0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Eb(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Fs(l.href),h=i.querySelector(nl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Hc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,C(h);return}h=i.ownerDocument||i,l=M0(l),(f=Di.get(f))&&Vd(l,f),h=h.createElement("link"),C(h);var S=h;S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),Vn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Hc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Xd=0;function Tb(t,i){return t.stylesheets&&t.count===0&&Vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&Xd===0&&(Xd=62500*rb());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Xd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gc=null;function Vc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gc=new Map,i.forEach(Ab,t),Gc=null,Hc.call(t))}function Ab(t,i){if(!(i.state.loading&4)){var s=Gc.get(t);if(s)var l=s.get(null);else{s=new Map,Gc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var S=f[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),h=s.get(S)||l,h===l&&s.set(null,f),s.set(S,f),this.count++,l=Hc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var al={$$typeof:U,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Rb(t,i,s,l,f,h,S,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ut(0),this.hiddenUpdates=Ut(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function C0(t,i,s,l,f,h,S,R,G,oe,me,ye){return t=new Rb(t,i,s,S,G,oe,me,ye,R),i=1,h===!0&&(i|=24),h=di(3,null,null,i),t.current=h,h.stateNode=t,i=Mf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},Rf(h),t}function w0(t){return t?(t=vs,t):vs}function D0(t,i,s,l,f,h){f=w0(f),l.context===null?l.context=f:l.pendingContext=f,l=Ja(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=$a(t,l,i),s!==null&&(si(s,t,i),zo(s,t,i))}function U0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Wd(t,i){U0(t,i),(t=t.alternate)&&U0(t,i)}function N0(t){if(t.tag===13||t.tag===31){var i=Nr(t,67108864);i!==null&&si(i,t,67108864),Wd(t,67108864)}}function L0(t){if(t.tag===13||t.tag===31){var i=vi();i=vo(i);var s=Nr(t,i);s!==null&&si(s,t,i),Wd(t,i)}}var kc=!0;function Cb(t,i,s,l){var f=L.T;L.T=null;var h=I.p;try{I.p=2,qd(t,i,s,l)}finally{I.p=h,L.T=f}}function wb(t,i,s,l){var f=L.T;L.T=null;var h=I.p;try{I.p=8,qd(t,i,s,l)}finally{I.p=h,L.T=f}}function qd(t,i,s,l){if(kc){var f=Yd(l);if(f===null)Nd(t,i,l,Xc,s),P0(t,l);else if(Ub(f,t,i,s,l))l.stopPropagation();else if(P0(t,l),i&4&&-1<Db.indexOf(t)){for(;f!==null;){var h=Xa(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Ae(h.pendingLanes);if(S!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var G=1<<31-He(S);R.entanglements[1]|=G,S&=~G}Ji(h),(Ht&6)===0&&(Ac=E()+500,Jo(0))}}break;case 31:case 13:R=Nr(h,2),R!==null&&si(R,h,2),Cc(),Wd(h,2)}if(h=Yd(l),h===null&&Nd(t,i,l,Xc,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else Nd(t,i,l,null,s)}}function Yd(t){return t=ju(t),jd(t)}var Xc=null;function jd(t){if(Xc=null,t=ka(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Xc=t,null}function O0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case ve:return 2;case Ee:return 8;case pe:case et:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Zd=!1,ur=null,fr=null,dr=null,rl=new Map,sl=new Map,hr=[],Db="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P0(t,i){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":rl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(i.pointerId)}}function ol(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Xa(i),i!==null&&N0(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Ub(t,i,s,l,f){switch(i){case"focusin":return ur=ol(ur,t,i,s,l,f),!0;case"dragenter":return fr=ol(fr,t,i,s,l,f),!0;case"mouseover":return dr=ol(dr,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return rl.set(h,ol(rl.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,sl.set(h,ol(sl.get(h)||null,t,i,s,l,f)),!0}return!1}function z0(t){var i=ka(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,ji(t.priority,function(){L0(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,ji(t.priority,function(){L0(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Yd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Yu=l,s.target.dispatchEvent(l),Yu=null}else return i=Xa(s),i!==null&&N0(i),t.blockedOn=s,!1;i.shift()}return!0}function B0(t,i,s){Wc(t)&&s.delete(i)}function Nb(){Zd=!1,ur!==null&&Wc(ur)&&(ur=null),fr!==null&&Wc(fr)&&(fr=null),dr!==null&&Wc(dr)&&(dr=null),rl.forEach(B0),sl.forEach(B0)}function qc(t,i){t.blockedOn===i&&(t.blockedOn=null,Zd||(Zd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Nb)))}var Yc=null;function I0(t){Yc!==t&&(Yc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(jd(l||s)===null)continue;break}var h=Xa(s);h!==null&&(t.splice(i,3),i-=3,Yf(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Gs(t){function i(G){return qc(G,t)}ur!==null&&qc(ur,t),fr!==null&&qc(fr,t),dr!==null&&qc(dr,t),rl.forEach(i),sl.forEach(i);for(var s=0;s<hr.length;s++){var l=hr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<hr.length&&(s=hr[0],s.blockedOn===null);)z0(s),s.blockedOn===null&&hr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],S=f[Ln]||null;if(typeof h=="function")S||I0(s);else if(S){var R=null;if(h&&h.hasAttribute("formAction")){if(f=h,S=h[Ln]||null)R=S.formAction;else if(jd(f)!==null)continue}else R=S.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),I0(s)}}}function F0(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Kd(t){this._internalRoot=t}jc.prototype.render=Kd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=vi();D0(s,l,t,i,null,null)},jc.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;D0(t.current,2,null,t,null,null),Cc(),i[Pi]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var i=_o();t={blockedOn:null,target:t,priority:i};for(var s=0;s<hr.length&&i!==0&&i<hr[s].priority;s++);hr.splice(s,0,t),s===0&&z0(t)}};var H0=e.version;if(H0!=="19.2.3")throw Error(r(527,H0,"19.2.3"));I.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(i),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Lb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{Re=Zc.inject(Lb),Ce=Zc}catch{}}return cl.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=Yg,h=jg,S=Zg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=C0(t,1,!1,null,null,s,l,null,f,h,S,F0),t[Pi]=i.current,Ud(t),new Kd(i)},cl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",h=Yg,S=jg,R=Zg,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=C0(t,1,!0,i,s??null,l,f,G,h,S,R,F0),i.context=w0(null),s=i.current,l=vi(),l=vo(l),f=Ja(l),f.callback=null,$a(s,f,l),s=l,i.current.lanes=s,Wn(i,s),Ji(i),t[Pi]=i.current,Ud(t),new jc(i)},cl.version="19.2.3",cl}var K0;function kb(){if(K0)return $d.exports;K0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),$d.exports=Vb(),$d.exports}var Xb=kb();var Q0="popstate";function Wb(a={}){function e(o,c){let{pathname:u="/",search:d="",hash:p=""}=is(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Xh("",{pathname:u,search:d,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let u=o.document.querySelector("base"),d="";if(u&&u.getAttribute("href")){let p=o.location.href,m=p.indexOf("#");d=m===-1?p:p.slice(0,m)}return d+"#"+(typeof c=="string"?c:Tl(c))}function r(o,c){Ni(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Yb(e,n,r,a)}function cn(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Ni(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qb(){return Math.random().toString(36).substring(2,10)}function J0(a,e){return{usr:a.state,key:a.key,idx:e}}function Xh(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?is(e):e,state:n,key:e&&e.key||r||qb()}}function Tl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function is(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function Yb(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,u=o.history,d="POP",p=null,m=v();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function v(){return(u.state||{idx:null}).idx}function g(){d="POP";let b=v(),x=b==null?null:b-m;m=b,p&&p({action:d,location:A.location,delta:x})}function _(b,x){d="PUSH";let w=Xh(A.location,b,x);n&&n(w,b),m=v()+1;let U=J0(w,m),N=A.createHref(w);try{u.pushState(U,"",N)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;o.location.assign(N)}c&&p&&p({action:d,location:A.location,delta:1})}function y(b,x){d="REPLACE";let w=Xh(A.location,b,x);n&&n(w,b),m=v();let U=J0(w,m),N=A.createHref(w);u.replaceState(U,"",N),c&&p&&p({action:d,location:A.location,delta:0})}function M(b){return jb(b)}let A={get action(){return d},get location(){return a(o,u)},listen(b){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Q0,g),p=b,()=>{o.removeEventListener(Q0,g),p=null}},createHref(b){return e(o,b)},createURL:M,encodeLocation(b){let x=M(b);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:y,go(b){return u.go(b)}};return A}function jb(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),cn(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:Tl(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function cx(a,e,n="/"){return Zb(a,e,n,!1)}function Zb(a,e,n,r){let o=typeof e=="string"?is(e):e,c=Pa(o.pathname||"/",n);if(c==null)return null;let u=ux(a);Kb(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let m=oM(c);d=rM(u[p],m,r)}return d}function ux(a,e=[],n=[],r="",o=!1){let c=(u,d,p=o,m)=>{let v={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&p)return;cn(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let g=La([r,v.relativePath]),_=n.concat(v);u.children&&u.children.length>0&&(cn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),ux(u.children,e,_,g,p)),!(u.path==null&&!u.index)&&e.push({path:g,score:iM(g,u.index),routesMeta:_})};return a.forEach((u,d)=>{if(u.path===""||!u.path?.includes("?"))c(u,d);else for(let p of fx(u.path))c(u,d,!0,p)}),e}function fx(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let u=fx(r.join("/")),d=[];return d.push(...u.map(p=>p===""?c:[c,p].join("/"))),o&&d.push(...u),d.map(p=>a.startsWith("/")&&p===""?"/":p)}function Kb(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:aM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Qb=/^:[\w-]+$/,Jb=3,$b=2,eM=1,tM=10,nM=-2,$0=a=>a==="*";function iM(a,e){let n=a.split("/"),r=n.length;return n.some($0)&&(r+=nM),e&&(r+=$b),n.filter(o=>!$0(o)).reduce((o,c)=>o+(Qb.test(c)?Jb:c===""?eM:tM),r)}function aM(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function rM(a,e,n=!1){let{routesMeta:r}=a,o={},c="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=Uu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},v),_=p.route;if(!g&&m&&n&&!r[r.length-1].route.index&&(g=Uu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:La([c,g.pathname]),pathnameBase:fM(La([c,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(c=La([c,g.pathnameBase]))}return u}function Uu(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=sM(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((m,{paramName:v,isOptional:g},_)=>{if(v==="*"){let M=d[_]||"";u=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const y=d[_];return g&&!y?m[v]=void 0:m[v]=(y||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:u,pattern:a}}function sM(a,e=!1,n=!0){Ni(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function oM(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ni(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Pa(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}var dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lM=a=>dx.test(a);function cM(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?is(a):a,c;if(n)if(lM(n))c=n;else{if(n.includes("//")){let u=n;n=n.replace(/\/\/+/g,"/"),Ni(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${n}`)}n.startsWith("/")?c=e_(n.substring(1),"/"):c=e_(n,e)}else c=e;return{pathname:c,search:dM(r),hash:hM(o)}}function e_(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ih(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uM(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hx(a){let e=uM(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function px(a,e,n,r=!1){let o;typeof a=="string"?o=is(a):(o={...a},cn(!o.pathname||!o.pathname.includes("?"),ih("?","pathname","search",o)),cn(!o.pathname||!o.pathname.includes("#"),ih("#","pathname","hash",o)),cn(!o.search||!o.search.includes("#"),ih("#","search","hash",o)));let c=a===""||o.pathname==="",u=c?"/":o.pathname,d;if(u==null)d=n;else{let g=e.length-1;if(!r&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),g-=1;o.pathname=_.join("/")}d=g>=0?e[g]:"/"}let p=cM(o,d),m=u&&u!=="/"&&u.endsWith("/"),v=(c||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||v)&&(p.pathname+="/"),p}var La=a=>a.join("/").replace(/\/\/+/g,"/"),fM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),dM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,hM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,pM=class{constructor(a,e,n,r=!1){this.status=a,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function mM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function gM(a){return a.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var mx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function gx(a,e){let n=a;if(typeof n!="string"||!dx.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(mx)try{let c=new URL(window.location.href),u=n.startsWith("//")?new URL(c.protocol+n):new URL(n),d=Pa(u.pathname,e);u.origin===c.origin&&d!=null?n=d+u.search+u.hash:o=!0}catch{Ni(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vx=["POST","PUT","PATCH","DELETE"];new Set(vx);var vM=["GET",...vx];new Set(vM);var fo=ee.createContext(null);fo.displayName="DataRouter";var Hu=ee.createContext(null);Hu.displayName="DataRouterState";var _M=ee.createContext(!1),_x=ee.createContext({isTransitioning:!1});_x.displayName="ViewTransition";var xM=ee.createContext(new Map);xM.displayName="Fetchers";var yM=ee.createContext(null);yM.displayName="Await";var Li=ee.createContext(null);Li.displayName="Navigation";var Cl=ee.createContext(null);Cl.displayName="Location";var Ha=ee.createContext({outlet:null,matches:[],isDataRoute:!1});Ha.displayName="Route";var Xp=ee.createContext(null);Xp.displayName="RouteError";var xx="REACT_ROUTER_ERROR",SM="REDIRECT",bM="ROUTE_ERROR_RESPONSE";function MM(a){if(a.startsWith(`${xx}:${SM}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function EM(a){if(a.startsWith(`${xx}:${bM}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new pM(e.status,e.statusText,e.data)}catch{}}function TM(a,{relative:e}={}){cn(wl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=ee.useContext(Li),{hash:o,pathname:c,search:u}=Dl(a,{relative:e}),d=c;return n!=="/"&&(d=c==="/"?n:La([n,c])),r.createHref({pathname:d,search:u,hash:o})}function wl(){return ee.useContext(Cl)!=null}function as(){return cn(wl(),"useLocation() may be used only in the context of a <Router> component."),ee.useContext(Cl).location}var yx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sx(a){ee.useContext(Li).static||ee.useLayoutEffect(a)}function AM(){let{isDataRoute:a}=ee.useContext(Ha);return a?FM():RM()}function RM(){cn(wl(),"useNavigate() may be used only in the context of a <Router> component.");let a=ee.useContext(fo),{basename:e,navigator:n}=ee.useContext(Li),{matches:r}=ee.useContext(Ha),{pathname:o}=as(),c=JSON.stringify(hx(r)),u=ee.useRef(!1);return Sx(()=>{u.current=!0}),ee.useCallback((p,m={})=>{if(Ni(u.current,yx),!u.current)return;if(typeof p=="number"){n.go(p);return}let v=px(p,JSON.parse(c),o,m.relative==="path");a==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:La([e,v.pathname])),(m.replace?n.replace:n.push)(v,m.state,m)},[e,n,c,o,a])}ee.createContext(null);function Dl(a,{relative:e}={}){let{matches:n}=ee.useContext(Ha),{pathname:r}=as(),o=JSON.stringify(hx(n));return ee.useMemo(()=>px(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function CM(a,e){return bx(a,e)}function bx(a,e,n,r,o){cn(wl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ee.useContext(Li),{matches:u}=ee.useContext(Ha),d=u[u.length-1],p=d?d.params:{},m=d?d.pathname:"/",v=d?d.pathnameBase:"/",g=d&&d.route;{let w=g&&g.path||"";Ex(m,!g||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let _=as(),y;if(e){let w=typeof e=="string"?is(e):e;cn(v==="/"||w.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${w.pathname}" was given in the \`location\` prop.`),y=w}else y=_;let M=y.pathname||"/",A=M;if(v!=="/"){let w=v.replace(/^\//,"").split("/");A="/"+M.replace(/^\//,"").split("/").slice(w.length).join("/")}let b=cx(a,{pathname:A});Ni(g||b!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ni(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=LM(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},p,w.params),pathname:La([v,c.encodeLocation?c.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?v:La([v,c.encodeLocation?c.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),u,n,r,o);return e&&x?ee.createElement(Cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},x):x}function wM(){let a=IM(),e=mM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",a),u=ee.createElement(ee.Fragment,null,ee.createElement("p",null,"💿 Hey developer 👋"),ee.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ee.createElement("code",{style:c},"ErrorBoundary")," or"," ",ee.createElement("code",{style:c},"errorElement")," prop on your route.")),ee.createElement(ee.Fragment,null,ee.createElement("h2",null,"Unexpected Application Error!"),ee.createElement("h3",{style:{fontStyle:"italic"}},e),n?ee.createElement("pre",{style:o},n):null,u)}var DM=ee.createElement(wM,null),Mx=class extends ee.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const n=EM(a.digest);n&&(a=n)}let e=a!==void 0?ee.createElement(Ha.Provider,{value:this.props.routeContext},ee.createElement(Xp.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?ee.createElement(UM,{error:a},e):e}};Mx.contextType=_M;var ah=new WeakMap;function UM({children:a,error:e}){let{basename:n}=ee.useContext(Li);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=MM(e.digest);if(r){let o=ah.get(e);if(o)throw o;let c=gx(r.location,n);if(mx&&!ah.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw ah.set(e,u),u}return ee.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return a}function NM({routeContext:a,match:e,children:n}){let r=ee.useContext(fo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ee.createElement(Ha.Provider,{value:a},n)}function LM(a,e=[],n=null,r=null,o=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let c=a,u=n?.errors;if(u!=null){let v=c.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);cn(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let d=!1,p=-1;if(n)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=v),g.route.id){let{loaderData:_,errors:y}=n,M=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||M){d=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}let m=n&&r?(v,g)=>{r(v,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:gM(n.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,_)=>{let y,M=!1,A=null,b=null;n&&(y=u&&g.route.id?u[g.route.id]:void 0,A=g.route.errorElement||DM,d&&(p<0&&_===0?(Ex("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,b=null):p===_&&(M=!0,b=g.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,_+1)),w=()=>{let U;return y?U=A:M?U=b:g.route.Component?U=ee.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=v,ee.createElement(NM,{match:g,routeContext:{outlet:v,matches:x,isDataRoute:n!=null},children:U})};return n&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?ee.createElement(Mx,{location:n.location,revalidation:n.revalidation,component:A,error:y,children:w(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:m}):w()},null)}function Wp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function OM(a){let e=ee.useContext(fo);return cn(e,Wp(a)),e}function PM(a){let e=ee.useContext(Hu);return cn(e,Wp(a)),e}function zM(a){let e=ee.useContext(Ha);return cn(e,Wp(a)),e}function qp(a){let e=zM(a),n=e.matches[e.matches.length-1];return cn(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function BM(){return qp("useRouteId")}function IM(){let a=ee.useContext(Xp),e=PM("useRouteError"),n=qp("useRouteError");return a!==void 0?a:e.errors?.[n]}function FM(){let{router:a}=OM("useNavigate"),e=qp("useNavigate"),n=ee.useRef(!1);return Sx(()=>{n.current=!0}),ee.useCallback(async(o,c={})=>{Ni(n.current,yx),n.current&&(typeof o=="number"?await a.navigate(o):await a.navigate(o,{fromRouteId:e,...c}))},[a,e])}var t_={};function Ex(a,e,n){!e&&!t_[a]&&(t_[a]=!0,Ni(!1,n))}ee.memo(HM);function HM({routes:a,future:e,state:n,onError:r}){return bx(a,void 0,n,r,e)}function bu(a){cn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function GM({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:c=!1,unstable_useTransitions:u}){cn(!wl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),p=ee.useMemo(()=>({basename:d,navigator:o,static:c,unstable_useTransitions:u,future:{}}),[d,o,c,u]);typeof n=="string"&&(n=is(n));let{pathname:m="/",search:v="",hash:g="",state:_=null,key:y="default"}=n,M=ee.useMemo(()=>{let A=Pa(m,d);return A==null?null:{location:{pathname:A,search:v,hash:g,state:_,key:y},navigationType:r}},[d,m,v,g,_,y,r]);return Ni(M!=null,`<Router basename="${d}"> is not able to match the URL "${m}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:ee.createElement(Li.Provider,{value:p},ee.createElement(Cl.Provider,{children:e,value:M}))}function VM({children:a,location:e}){return CM(Wh(a),e)}function Wh(a,e=[]){let n=[];return ee.Children.forEach(a,(r,o)=>{if(!ee.isValidElement(r))return;let c=[...e,o];if(r.type===ee.Fragment){n.push.apply(n,Wh(r.props.children,c));return}cn(r.type===bu,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),cn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Wh(r.props.children,c)),n.push(u)}),n}var Mu="get",Eu="application/x-www-form-urlencoded";function Gu(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function kM(a){return Gu(a)&&a.tagName.toLowerCase()==="button"}function XM(a){return Gu(a)&&a.tagName.toLowerCase()==="form"}function WM(a){return Gu(a)&&a.tagName.toLowerCase()==="input"}function qM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function YM(a,e){return a.button===0&&(!e||e==="_self")&&!qM(a)}var Kc=null;function jM(){if(Kc===null)try{new FormData(document.createElement("form"),0),Kc=!1}catch{Kc=!0}return Kc}var ZM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rh(a){return a!=null&&!ZM.has(a)?(Ni(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Eu}"`),null):a}function KM(a,e){let n,r,o,c,u;if(XM(a)){let d=a.getAttribute("action");r=d?Pa(d,e):null,n=a.getAttribute("method")||Mu,o=rh(a.getAttribute("enctype"))||Eu,c=new FormData(a)}else if(kM(a)||WM(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||d.getAttribute("action");if(r=p?Pa(p,e):null,n=a.getAttribute("formmethod")||d.getAttribute("method")||Mu,o=rh(a.getAttribute("formenctype"))||rh(d.getAttribute("enctype"))||Eu,c=new FormData(d,a),!jM()){let{name:m,type:v,value:g}=a;if(v==="image"){let _=m?`${m}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else m&&c.append(m,g)}}else{if(Gu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Mu,r=null,o=Eu,u=a}return c&&o==="text/plain"&&(u=c,c=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Yp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function QM(a,e,n){let r=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Pa(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function JM(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $M(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function eE(a,e,n){let r=await Promise.all(a.map(async o=>{let c=e.routes[o.route.id];if(c){let u=await JM(c,n);return u.links?u.links():[]}return[]}));return aE(r.flat(1).filter($M).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function n_(a,e,n,r,o,c){let u=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,d=(p,m)=>n[m].pathname!==p.pathname||n[m].route.path?.endsWith("*")&&n[m].params["*"]!==p.params["*"];return c==="assets"?e.filter((p,m)=>u(p,m)||d(p,m)):c==="data"?e.filter((p,m)=>{let v=r.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(u(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let g=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function tE(a,e,{includeHydrateFallback:n}={}){return nE(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function nE(a){return[...new Set(a)]}function iE(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function aE(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let c=JSON.stringify(iE(o));return n.has(c)||(n.add(c),r.push({key:c,link:o})),r},[])}function Tx(){let a=ee.useContext(fo);return Yp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function rE(){let a=ee.useContext(Hu);return Yp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var jp=ee.createContext(void 0);jp.displayName="FrameworkContext";function Ax(){let a=ee.useContext(jp);return Yp(a,"You must render this element inside a <HydratedRouter> element"),a}function sE(a,e){let n=ee.useContext(jp),[r,o]=ee.useState(!1),[c,u]=ee.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:v,onTouchStart:g}=e,_=ee.useRef(null);ee.useEffect(()=>{if(a==="render"&&u(!0),a==="viewport"){let A=x=>{x.forEach(w=>{u(w.isIntersecting)})},b=new IntersectionObserver(A,{threshold:.5});return _.current&&b.observe(_.current),()=>{b.disconnect()}}},[a]),ee.useEffect(()=>{if(r){let A=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(A)}}},[r]);let y=()=>{o(!0)},M=()=>{o(!1),u(!1)};return n?a!=="intent"?[c,_,{}]:[c,_,{onFocus:ul(d,y),onBlur:ul(p,M),onMouseEnter:ul(m,y),onMouseLeave:ul(v,M),onTouchStart:ul(g,y)}]:[!1,_,{}]}function ul(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function oE({page:a,...e}){let{router:n}=Tx(),r=ee.useMemo(()=>cx(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?ee.createElement(cE,{page:a,matches:r,...e}):null}function lE(a){let{manifest:e,routeModules:n}=Ax(),[r,o]=ee.useState([]);return ee.useEffect(()=>{let c=!1;return eE(a,e,n).then(u=>{c||o(u)}),()=>{c=!0}},[a,e,n]),r}function cE({page:a,matches:e,...n}){let r=as(),{manifest:o,routeModules:c}=Ax(),{basename:u}=Tx(),{loaderData:d,matches:p}=rE(),m=ee.useMemo(()=>n_(a,e,p,o,r,"data"),[a,e,p,o,r]),v=ee.useMemo(()=>n_(a,e,p,o,r,"assets"),[a,e,p,o,r]),g=ee.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let M=new Set,A=!1;if(e.forEach(x=>{let w=o.routes[x.route.id];!w||!w.hasLoader||(!m.some(U=>U.route.id===x.route.id)&&x.route.id in d&&c[x.route.id]?.shouldRevalidate||w.hasClientLoader?A=!0:M.add(x.route.id))}),M.size===0)return[];let b=QM(a,u,"data");return A&&M.size>0&&b.searchParams.set("_routes",e.filter(x=>M.has(x.route.id)).map(x=>x.route.id).join(",")),[b.pathname+b.search]},[u,d,r,o,m,e,a,c]),_=ee.useMemo(()=>tE(v,o),[v,o]),y=lE(v);return ee.createElement(ee.Fragment,null,g.map(M=>ee.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),_.map(M=>ee.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),y.map(({key:M,link:A})=>ee.createElement("link",{key:M,nonce:n.nonce,...A})))}function uE(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var fE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{fE&&(window.__reactRouterVersion="7.11.0")}catch{}function dE({basename:a,children:e,unstable_useTransitions:n,window:r}){let o=ee.useRef();o.current==null&&(o.current=Wb({window:r,v5Compat:!0}));let c=o.current,[u,d]=ee.useState({action:c.action,location:c.location}),p=ee.useCallback(m=>{n===!1?d(m):ee.startTransition(()=>d(m))},[n]);return ee.useLayoutEffect(()=>c.listen(p),[c,p]),ee.createElement(GM,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:c,unstable_useTransitions:n})}var Rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ul=ee.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:c,replace:u,state:d,target:p,to:m,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_,...y},M){let{basename:A,unstable_useTransitions:b}=ee.useContext(Li),x=typeof m=="string"&&Rx.test(m),w=gx(m,A);m=w.to;let U=TM(m,{relative:o}),[N,B,F]=sE(r,y),z=gE(m,{replace:u,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:_,unstable_useTransitions:b});function H(D){e&&e(D),D.defaultPrevented||z(D)}let T=ee.createElement("a",{...y,...F,href:w.absoluteURL||U,onClick:w.isExternal||c?e:H,ref:uE(M,B),target:p,"data-discover":!x&&n==="render"?"true":void 0});return N&&!x?ee.createElement(ee.Fragment,null,T,ee.createElement(oE,{page:U})):T});Ul.displayName="Link";var hE=ee.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:c,to:u,viewTransition:d,children:p,...m},v){let g=Dl(u,{relative:m.relative}),_=as(),y=ee.useContext(Hu),{navigator:M,basename:A}=ee.useContext(Li),b=y!=null&&SE(g)&&d===!0,x=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,w=_.pathname,U=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(w=w.toLowerCase(),U=U?U.toLowerCase():null,x=x.toLowerCase()),U&&A&&(U=Pa(U,A)||U);const N=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let B=w===x||!o&&w.startsWith(x)&&w.charAt(N)==="/",F=U!=null&&(U===x||!o&&U.startsWith(x)&&U.charAt(x.length)==="/"),z={isActive:B,isPending:F,isTransitioning:b},H=B?e:void 0,T;typeof r=="function"?T=r(z):T=[r,B?"active":null,F?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(z):c;return ee.createElement(Ul,{...m,"aria-current":H,className:T,ref:v,style:D,to:u,viewTransition:d},typeof p=="function"?p(z):p)});hE.displayName="NavLink";var pE=ee.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:c,method:u=Mu,action:d,onSubmit:p,relative:m,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_,...y},M)=>{let{unstable_useTransitions:A}=ee.useContext(Li),b=xE(),x=yE(d,{relative:m}),w=u.toLowerCase()==="get"?"get":"post",U=typeof d=="string"&&Rx.test(d),N=B=>{if(p&&p(B),B.defaultPrevented)return;B.preventDefault();let F=B.nativeEvent.submitter,z=F?.getAttribute("formmethod")||u,H=()=>b(F||B.currentTarget,{fetcherKey:e,method:z,navigate:n,replace:o,state:c,relative:m,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_});A&&n!==!1?ee.startTransition(()=>H()):H()};return ee.createElement("form",{ref:M,method:w,action:x,onSubmit:r?p:N,...y,"data-discover":!U&&a==="render"?"true":void 0})});pE.displayName="Form";function mE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cx(a){let e=ee.useContext(fo);return cn(e,mE(a)),e}function gE(a,{target:e,replace:n,state:r,preventScrollReset:o,relative:c,viewTransition:u,unstable_defaultShouldRevalidate:d,unstable_useTransitions:p}={}){let m=AM(),v=as(),g=Dl(a,{relative:c});return ee.useCallback(_=>{if(YM(_,e)){_.preventDefault();let y=n!==void 0?n:Tl(v)===Tl(g),M=()=>m(a,{replace:y,state:r,preventScrollReset:o,relative:c,viewTransition:u,unstable_defaultShouldRevalidate:d});p?ee.startTransition(()=>M()):M()}},[v,m,g,n,r,e,a,o,c,u,d,p])}var vE=0,_E=()=>`__${String(++vE)}__`;function xE(){let{router:a}=Cx("useSubmit"),{basename:e}=ee.useContext(Li),n=BM(),r=a.fetch,o=a.navigate;return ee.useCallback(async(c,u={})=>{let{action:d,method:p,encType:m,formData:v,body:g}=KM(c,e);if(u.navigate===!1){let _=u.fetcherKey||_E();await r(_,n,u.action||d,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:g,formMethod:u.method||p,formEncType:u.encType||m,flushSync:u.flushSync})}else await o(u.action||d,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:g,formMethod:u.method||p,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:n,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,o,e,n])}function yE(a,{relative:e}={}){let{basename:n}=ee.useContext(Li),r=ee.useContext(Ha);cn(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...Dl(a||".",{relative:e})},u=as();if(a==null){c.search=u.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(g=>g).forEach(g=>d.append("index",g));let v=d.toString();c.search=v?`?${v}`:""}}return(!a||a===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:La([n,c.pathname])),Tl(c)}function SE(a,{relative:e}={}){let n=ee.useContext(_x);cn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Cx("useViewTransitionState"),o=Dl(a,{relative:e});if(!n.isTransitioning)return!1;let c=Pa(n.currentLocation.pathname,r)||n.currentLocation.pathname,u=Pa(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Uu(o.pathname,u)!=null||Uu(o.pathname,c)!=null}function wx(a){var e,n,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var o=a.length;for(e=0;e<o;e++)a[e]&&(n=wx(a[e]))&&(r&&(r+=" "),r+=n)}else for(n in a)a[n]&&(r&&(r+=" "),r+=n);return r}function bE(){for(var a,e,n=0,r="",o=arguments.length;n<o;n++)(a=arguments[n])&&(e=wx(a))&&(r&&(r+=" "),r+=e);return r}const ME=(a,e)=>{const n=new Array(a.length+e.length);for(let r=0;r<a.length;r++)n[r]=a[r];for(let r=0;r<e.length;r++)n[a.length+r]=e[r];return n},EE=(a,e)=>({classGroupId:a,validator:e}),Dx=(a=new Map,e=null,n)=>({nextPart:a,validators:e,classGroupId:n}),Nu="-",i_=[],TE="arbitrary..",AE=a=>{const e=CE(a),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=a;return{getClassGroupId:u=>{if(u.startsWith("[")&&u.endsWith("]"))return RE(u);const d=u.split(Nu),p=d[0]===""&&d.length>1?1:0;return Ux(d,p,e)},getConflictingClassGroupIds:(u,d)=>{if(d){const p=r[u],m=n[u];return p?m?ME(m,p):p:m||i_}return n[u]||i_}}},Ux=(a,e,n)=>{if(a.length-e===0)return n.classGroupId;const o=a[e],c=n.nextPart.get(o);if(c){const m=Ux(a,e+1,c);if(m)return m}const u=n.validators;if(u===null)return;const d=e===0?a.join(Nu):a.slice(e).join(Nu),p=u.length;for(let m=0;m<p;m++){const v=u[m];if(v.validator(d))return v.classGroupId}},RE=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=a.slice(1,-1),n=e.indexOf(":"),r=e.slice(0,n);return r?TE+r:void 0})(),CE=a=>{const{theme:e,classGroups:n}=a;return wE(n,e)},wE=(a,e)=>{const n=Dx();for(const r in a){const o=a[r];Zp(o,n,r,e)}return n},Zp=(a,e,n,r)=>{const o=a.length;for(let c=0;c<o;c++){const u=a[c];DE(u,e,n,r)}},DE=(a,e,n,r)=>{if(typeof a=="string"){UE(a,e,n);return}if(typeof a=="function"){NE(a,e,n,r);return}LE(a,e,n,r)},UE=(a,e,n)=>{const r=a===""?e:Nx(e,a);r.classGroupId=n},NE=(a,e,n,r)=>{if(OE(a)){Zp(a(r),e,n,r);return}e.validators===null&&(e.validators=[]),e.validators.push(EE(n,a))},LE=(a,e,n,r)=>{const o=Object.entries(a),c=o.length;for(let u=0;u<c;u++){const[d,p]=o[u];Zp(p,Nx(e,d),n,r)}},Nx=(a,e)=>{let n=a;const r=e.split(Nu),o=r.length;for(let c=0;c<o;c++){const u=r[c];let d=n.nextPart.get(u);d||(d=Dx(),n.nextPart.set(u,d)),n=d}return n},OE=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,PE=a=>{if(a<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),r=Object.create(null);const o=(c,u)=>{n[c]=u,e++,e>a&&(e=0,r=n,n=Object.create(null))};return{get(c){let u=n[c];if(u!==void 0)return u;if((u=r[c])!==void 0)return o(c,u),u},set(c,u){c in n?n[c]=u:o(c,u)}}},qh="!",a_=":",zE=[],r_=(a,e,n,r,o)=>({modifiers:a,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:r,isExternal:o}),BE=a=>{const{prefix:e,experimentalParseClassName:n}=a;let r=o=>{const c=[];let u=0,d=0,p=0,m;const v=o.length;for(let A=0;A<v;A++){const b=o[A];if(u===0&&d===0){if(b===a_){c.push(o.slice(p,A)),p=A+1;continue}if(b==="/"){m=A;continue}}b==="["?u++:b==="]"?u--:b==="("?d++:b===")"&&d--}const g=c.length===0?o:o.slice(p);let _=g,y=!1;g.endsWith(qh)?(_=g.slice(0,-1),y=!0):g.startsWith(qh)&&(_=g.slice(1),y=!0);const M=m&&m>p?m-p:void 0;return r_(c,y,_,M)};if(e){const o=e+a_,c=r;r=u=>u.startsWith(o)?c(u.slice(o.length)):r_(zE,!1,u,void 0,!0)}if(n){const o=r;r=c=>n({className:c,parseClassName:o})}return r},IE=a=>{const e=new Map;return a.orderSensitiveModifiers.forEach((n,r)=>{e.set(n,1e6+r)}),n=>{const r=[];let o=[];for(let c=0;c<n.length;c++){const u=n[c],d=u[0]==="[",p=e.has(u);d||p?(o.length>0&&(o.sort(),r.push(...o),o=[]),r.push(u)):o.push(u)}return o.length>0&&(o.sort(),r.push(...o)),r}},FE=a=>({cache:PE(a.cacheSize),parseClassName:BE(a),sortModifiers:IE(a),...AE(a)}),HE=/\s+/,GE=(a,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:c}=e,u=[],d=a.trim().split(HE);let p="";for(let m=d.length-1;m>=0;m-=1){const v=d[m],{isExternal:g,modifiers:_,hasImportantModifier:y,baseClassName:M,maybePostfixModifierPosition:A}=n(v);if(g){p=v+(p.length>0?" "+p:p);continue}let b=!!A,x=r(b?M.substring(0,A):M);if(!x){if(!b){p=v+(p.length>0?" "+p:p);continue}if(x=r(M),!x){p=v+(p.length>0?" "+p:p);continue}b=!1}const w=_.length===0?"":_.length===1?_[0]:c(_).join(":"),U=y?w+qh:w,N=U+x;if(u.indexOf(N)>-1)continue;u.push(N);const B=o(x,b);for(let F=0;F<B.length;++F){const z=B[F];u.push(U+z)}p=v+(p.length>0?" "+p:p)}return p},VE=(...a)=>{let e=0,n,r,o="";for(;e<a.length;)(n=a[e++])&&(r=Lx(n))&&(o&&(o+=" "),o+=r);return o},Lx=a=>{if(typeof a=="string")return a;let e,n="";for(let r=0;r<a.length;r++)a[r]&&(e=Lx(a[r]))&&(n&&(n+=" "),n+=e);return n},kE=(a,...e)=>{let n,r,o,c;const u=p=>{const m=e.reduce((v,g)=>g(v),a());return n=FE(m),r=n.cache.get,o=n.cache.set,c=d,d(p)},d=p=>{const m=r(p);if(m)return m;const v=GE(p,n);return o(p,v),v};return c=u,(...p)=>c(VE(...p))},XE=[],An=a=>{const e=n=>n[a]||XE;return e.isThemeGetter=!0,e},Ox=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Px=/^\((?:(\w[\w-]*):)?(.+)\)$/i,WE=/^\d+\/\d+$/,qE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,YE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,jE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,ZE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,KE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Vs=a=>WE.test(a),yt=a=>!!a&&!Number.isNaN(Number(a)),mr=a=>!!a&&Number.isInteger(Number(a)),sh=a=>a.endsWith("%")&&yt(a.slice(0,-1)),Ta=a=>qE.test(a),QE=()=>!0,JE=a=>YE.test(a)&&!jE.test(a),zx=()=>!1,$E=a=>ZE.test(a),eT=a=>KE.test(a),tT=a=>!Ye(a)&&!je(a),nT=a=>ho(a,Fx,zx),Ye=a=>Ox.test(a),Wr=a=>ho(a,Hx,JE),oh=a=>ho(a,oT,yt),s_=a=>ho(a,Bx,zx),iT=a=>ho(a,Ix,eT),Qc=a=>ho(a,Gx,$E),je=a=>Px.test(a),fl=a=>po(a,Hx),aT=a=>po(a,lT),o_=a=>po(a,Bx),rT=a=>po(a,Fx),sT=a=>po(a,Ix),Jc=a=>po(a,Gx,!0),ho=(a,e,n)=>{const r=Ox.exec(a);return r?r[1]?e(r[1]):n(r[2]):!1},po=(a,e,n=!1)=>{const r=Px.exec(a);return r?r[1]?e(r[1]):n:!1},Bx=a=>a==="position"||a==="percentage",Ix=a=>a==="image"||a==="url",Fx=a=>a==="length"||a==="size"||a==="bg-size",Hx=a=>a==="length",oT=a=>a==="number",lT=a=>a==="family-name",Gx=a=>a==="shadow",cT=()=>{const a=An("color"),e=An("font"),n=An("text"),r=An("font-weight"),o=An("tracking"),c=An("leading"),u=An("breakpoint"),d=An("container"),p=An("spacing"),m=An("radius"),v=An("shadow"),g=An("inset-shadow"),_=An("text-shadow"),y=An("drop-shadow"),M=An("blur"),A=An("perspective"),b=An("aspect"),x=An("ease"),w=An("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],B=()=>[...N(),je,Ye],F=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto","contain","none"],H=()=>[je,Ye,p],T=()=>[Vs,"full","auto",...H()],D=()=>[mr,"none","subgrid",je,Ye],k=()=>["auto",{span:["full",mr,je,Ye]},mr,je,Ye],J=()=>[mr,"auto",je,Ye],ae=()=>["auto","min","max","fr",je,Ye],he=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Q=()=>["start","end","center","stretch","center-safe","end-safe"],L=()=>["auto",...H()],I=()=>[Vs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...H()],V=()=>[a,je,Ye],xe=()=>[...N(),o_,s_,{position:[je,Ye]}],ge=()=>["no-repeat",{repeat:["","x","y","space","round"]}],O=()=>["auto","cover","contain",rT,nT,{size:[je,Ye]}],ie=()=>[sh,fl,Wr],ue=()=>["","none","full",m,je,Ye],Se=()=>["",yt,fl,Wr],Me=()=>["solid","dashed","dotted","double"],$=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],re=()=>[yt,sh,o_,s_],De=()=>["","none",M,je,Ye],Fe=()=>["none",yt,je,Ye],ze=()=>["none",yt,je,Ye],it=()=>[yt,je,Ye],Ct=()=>[Vs,"full",...H()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ta],breakpoint:[Ta],color:[QE],container:[Ta],"drop-shadow":[Ta],ease:["in","out","in-out"],font:[tT],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ta],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ta],shadow:[Ta],spacing:["px",yt],text:[Ta],"text-shadow":[Ta],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Vs,Ye,je,b]}],container:["container"],columns:[{columns:[yt,Ye,je,d]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:B()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{start:T()}],end:[{end:T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:["visible","invisible","collapse"],z:[{z:[mr,"auto",je,Ye]}],basis:[{basis:[Vs,"full","auto",d,...H()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[yt,Vs,"auto","initial","none",Ye]}],grow:[{grow:["",yt,je,Ye]}],shrink:[{shrink:["",yt,je,Ye]}],order:[{order:[mr,"first","last","none",je,Ye]}],"grid-cols":[{"grid-cols":D()}],"col-start-end":[{col:k()}],"col-start":[{"col-start":J()}],"col-end":[{"col-end":J()}],"grid-rows":[{"grid-rows":D()}],"row-start-end":[{row:k()}],"row-start":[{"row-start":J()}],"row-end":[{"row-end":J()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ae()}],"auto-rows":[{"auto-rows":ae()}],gap:[{gap:H()}],"gap-x":[{"gap-x":H()}],"gap-y":[{"gap-y":H()}],"justify-content":[{justify:[...he(),"normal"]}],"justify-items":[{"justify-items":[...Q(),"normal"]}],"justify-self":[{"justify-self":["auto",...Q()]}],"align-content":[{content:["normal",...he()]}],"align-items":[{items:[...Q(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Q(),{baseline:["","last"]}]}],"place-content":[{"place-content":he()}],"place-items":[{"place-items":[...Q(),"baseline"]}],"place-self":[{"place-self":["auto",...Q()]}],p:[{p:H()}],px:[{px:H()}],py:[{py:H()}],ps:[{ps:H()}],pe:[{pe:H()}],pt:[{pt:H()}],pr:[{pr:H()}],pb:[{pb:H()}],pl:[{pl:H()}],m:[{m:L()}],mx:[{mx:L()}],my:[{my:L()}],ms:[{ms:L()}],me:[{me:L()}],mt:[{mt:L()}],mr:[{mr:L()}],mb:[{mb:L()}],ml:[{ml:L()}],"space-x":[{"space-x":H()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":H()}],"space-y-reverse":["space-y-reverse"],size:[{size:I()}],w:[{w:[d,"screen",...I()]}],"min-w":[{"min-w":[d,"screen","none",...I()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[u]},...I()]}],h:[{h:["screen","lh",...I()]}],"min-h":[{"min-h":["screen","lh","none",...I()]}],"max-h":[{"max-h":["screen","lh",...I()]}],"font-size":[{text:["base",n,fl,Wr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,je,oh]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",sh,Ye]}],"font-family":[{font:[aT,Ye,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,je,Ye]}],"line-clamp":[{"line-clamp":[yt,"none",je,oh]}],leading:[{leading:[c,...H()]}],"list-image":[{"list-image":["none",je,Ye]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",je,Ye]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:V()}],"text-color":[{text:V()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Me(),"wavy"]}],"text-decoration-thickness":[{decoration:[yt,"from-font","auto",je,Wr]}],"text-decoration-color":[{decoration:V()}],"underline-offset":[{"underline-offset":[yt,"auto",je,Ye]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",je,Ye]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",je,Ye]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:xe()}],"bg-repeat":[{bg:ge()}],"bg-size":[{bg:O()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},mr,je,Ye],radial:["",je,Ye],conic:[mr,je,Ye]},sT,iT]}],"bg-color":[{bg:V()}],"gradient-from-pos":[{from:ie()}],"gradient-via-pos":[{via:ie()}],"gradient-to-pos":[{to:ie()}],"gradient-from":[{from:V()}],"gradient-via":[{via:V()}],"gradient-to":[{to:V()}],rounded:[{rounded:ue()}],"rounded-s":[{"rounded-s":ue()}],"rounded-e":[{"rounded-e":ue()}],"rounded-t":[{"rounded-t":ue()}],"rounded-r":[{"rounded-r":ue()}],"rounded-b":[{"rounded-b":ue()}],"rounded-l":[{"rounded-l":ue()}],"rounded-ss":[{"rounded-ss":ue()}],"rounded-se":[{"rounded-se":ue()}],"rounded-ee":[{"rounded-ee":ue()}],"rounded-es":[{"rounded-es":ue()}],"rounded-tl":[{"rounded-tl":ue()}],"rounded-tr":[{"rounded-tr":ue()}],"rounded-br":[{"rounded-br":ue()}],"rounded-bl":[{"rounded-bl":ue()}],"border-w":[{border:Se()}],"border-w-x":[{"border-x":Se()}],"border-w-y":[{"border-y":Se()}],"border-w-s":[{"border-s":Se()}],"border-w-e":[{"border-e":Se()}],"border-w-t":[{"border-t":Se()}],"border-w-r":[{"border-r":Se()}],"border-w-b":[{"border-b":Se()}],"border-w-l":[{"border-l":Se()}],"divide-x":[{"divide-x":Se()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Se()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Me(),"hidden","none"]}],"divide-style":[{divide:[...Me(),"hidden","none"]}],"border-color":[{border:V()}],"border-color-x":[{"border-x":V()}],"border-color-y":[{"border-y":V()}],"border-color-s":[{"border-s":V()}],"border-color-e":[{"border-e":V()}],"border-color-t":[{"border-t":V()}],"border-color-r":[{"border-r":V()}],"border-color-b":[{"border-b":V()}],"border-color-l":[{"border-l":V()}],"divide-color":[{divide:V()}],"outline-style":[{outline:[...Me(),"none","hidden"]}],"outline-offset":[{"outline-offset":[yt,je,Ye]}],"outline-w":[{outline:["",yt,fl,Wr]}],"outline-color":[{outline:V()}],shadow:[{shadow:["","none",v,Jc,Qc]}],"shadow-color":[{shadow:V()}],"inset-shadow":[{"inset-shadow":["none",g,Jc,Qc]}],"inset-shadow-color":[{"inset-shadow":V()}],"ring-w":[{ring:Se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:V()}],"ring-offset-w":[{"ring-offset":[yt,Wr]}],"ring-offset-color":[{"ring-offset":V()}],"inset-ring-w":[{"inset-ring":Se()}],"inset-ring-color":[{"inset-ring":V()}],"text-shadow":[{"text-shadow":["none",_,Jc,Qc]}],"text-shadow-color":[{"text-shadow":V()}],opacity:[{opacity:[yt,je,Ye]}],"mix-blend":[{"mix-blend":[...$(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":$()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[yt]}],"mask-image-linear-from-pos":[{"mask-linear-from":re()}],"mask-image-linear-to-pos":[{"mask-linear-to":re()}],"mask-image-linear-from-color":[{"mask-linear-from":V()}],"mask-image-linear-to-color":[{"mask-linear-to":V()}],"mask-image-t-from-pos":[{"mask-t-from":re()}],"mask-image-t-to-pos":[{"mask-t-to":re()}],"mask-image-t-from-color":[{"mask-t-from":V()}],"mask-image-t-to-color":[{"mask-t-to":V()}],"mask-image-r-from-pos":[{"mask-r-from":re()}],"mask-image-r-to-pos":[{"mask-r-to":re()}],"mask-image-r-from-color":[{"mask-r-from":V()}],"mask-image-r-to-color":[{"mask-r-to":V()}],"mask-image-b-from-pos":[{"mask-b-from":re()}],"mask-image-b-to-pos":[{"mask-b-to":re()}],"mask-image-b-from-color":[{"mask-b-from":V()}],"mask-image-b-to-color":[{"mask-b-to":V()}],"mask-image-l-from-pos":[{"mask-l-from":re()}],"mask-image-l-to-pos":[{"mask-l-to":re()}],"mask-image-l-from-color":[{"mask-l-from":V()}],"mask-image-l-to-color":[{"mask-l-to":V()}],"mask-image-x-from-pos":[{"mask-x-from":re()}],"mask-image-x-to-pos":[{"mask-x-to":re()}],"mask-image-x-from-color":[{"mask-x-from":V()}],"mask-image-x-to-color":[{"mask-x-to":V()}],"mask-image-y-from-pos":[{"mask-y-from":re()}],"mask-image-y-to-pos":[{"mask-y-to":re()}],"mask-image-y-from-color":[{"mask-y-from":V()}],"mask-image-y-to-color":[{"mask-y-to":V()}],"mask-image-radial":[{"mask-radial":[je,Ye]}],"mask-image-radial-from-pos":[{"mask-radial-from":re()}],"mask-image-radial-to-pos":[{"mask-radial-to":re()}],"mask-image-radial-from-color":[{"mask-radial-from":V()}],"mask-image-radial-to-color":[{"mask-radial-to":V()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":N()}],"mask-image-conic-pos":[{"mask-conic":[yt]}],"mask-image-conic-from-pos":[{"mask-conic-from":re()}],"mask-image-conic-to-pos":[{"mask-conic-to":re()}],"mask-image-conic-from-color":[{"mask-conic-from":V()}],"mask-image-conic-to-color":[{"mask-conic-to":V()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:xe()}],"mask-repeat":[{mask:ge()}],"mask-size":[{mask:O()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",je,Ye]}],filter:[{filter:["","none",je,Ye]}],blur:[{blur:De()}],brightness:[{brightness:[yt,je,Ye]}],contrast:[{contrast:[yt,je,Ye]}],"drop-shadow":[{"drop-shadow":["","none",y,Jc,Qc]}],"drop-shadow-color":[{"drop-shadow":V()}],grayscale:[{grayscale:["",yt,je,Ye]}],"hue-rotate":[{"hue-rotate":[yt,je,Ye]}],invert:[{invert:["",yt,je,Ye]}],saturate:[{saturate:[yt,je,Ye]}],sepia:[{sepia:["",yt,je,Ye]}],"backdrop-filter":[{"backdrop-filter":["","none",je,Ye]}],"backdrop-blur":[{"backdrop-blur":De()}],"backdrop-brightness":[{"backdrop-brightness":[yt,je,Ye]}],"backdrop-contrast":[{"backdrop-contrast":[yt,je,Ye]}],"backdrop-grayscale":[{"backdrop-grayscale":["",yt,je,Ye]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[yt,je,Ye]}],"backdrop-invert":[{"backdrop-invert":["",yt,je,Ye]}],"backdrop-opacity":[{"backdrop-opacity":[yt,je,Ye]}],"backdrop-saturate":[{"backdrop-saturate":[yt,je,Ye]}],"backdrop-sepia":[{"backdrop-sepia":["",yt,je,Ye]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":H()}],"border-spacing-x":[{"border-spacing-x":H()}],"border-spacing-y":[{"border-spacing-y":H()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",je,Ye]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[yt,"initial",je,Ye]}],ease:[{ease:["linear","initial",x,je,Ye]}],delay:[{delay:[yt,je,Ye]}],animate:[{animate:["none",w,je,Ye]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,je,Ye]}],"perspective-origin":[{"perspective-origin":B()}],rotate:[{rotate:Fe()}],"rotate-x":[{"rotate-x":Fe()}],"rotate-y":[{"rotate-y":Fe()}],"rotate-z":[{"rotate-z":Fe()}],scale:[{scale:ze()}],"scale-x":[{"scale-x":ze()}],"scale-y":[{"scale-y":ze()}],"scale-z":[{"scale-z":ze()}],"scale-3d":["scale-3d"],skew:[{skew:it()}],"skew-x":[{"skew-x":it()}],"skew-y":[{"skew-y":it()}],transform:[{transform:[je,Ye,"","none","gpu","cpu"]}],"transform-origin":[{origin:B()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ct()}],"translate-x":[{"translate-x":Ct()}],"translate-y":[{"translate-y":Ct()}],"translate-z":[{"translate-z":Ct()}],"translate-none":["translate-none"],accent:[{accent:V()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:V()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",je,Ye]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",je,Ye]}],fill:[{fill:["none",...V()]}],"stroke-w":[{stroke:[yt,fl,Wr,oh]}],stroke:[{stroke:["none",...V()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},uT=kE(cT);function bl(...a){return uT(bE(a))}function fT({children:a,className:e,gradientSize:n=200,gradientColor:r="#00d4ff",gradientOpacity:o=.15}){const c=ee.useRef(null),[u,d]=ee.useState({x:0,y:0}),[p,m]=ee.useState(0),v=ee.useCallback(y=>{if(!c.current)return;const M=c.current.getBoundingClientRect();d({x:y.clientX-M.left,y:y.clientY-M.top})},[]),g=ee.useCallback(()=>{m(1)},[]),_=ee.useCallback(()=>{m(0)},[]);return ne.jsxs("div",{ref:c,onMouseMove:v,onMouseEnter:g,onMouseLeave:_,className:bl("relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card transition-all duration-300","hover:border-border-accent hover:bg-bg-card-hover",e),children:[ne.jsx("div",{className:"pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",style:{opacity:p,background:`radial-gradient(${n}px circle at ${u.x}px ${u.y}px, ${r}${Math.round(o*255).toString(16).padStart(2,"0")}, transparent 40%)`}}),ne.jsx("div",{className:"relative z-10",children:a})]})}const dT=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hT=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),l_=a=>{const e=hT(a);return e.charAt(0).toUpperCase()+e.slice(1)},Vx=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),pT=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var mT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const gT=ee.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...d},p)=>ee.createElement("svg",{ref:p,...mT,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:Vx("lucide",o),...!c&&!pT(d)&&{"aria-hidden":"true"},...d},[...u.map(([m,v])=>ee.createElement(m,v)),...Array.isArray(c)?c:[c]]));const qi=(a,e)=>{const n=ee.forwardRef(({className:r,...o},c)=>ee.createElement(gT,{ref:c,iconNode:e,className:Vx(`lucide-${dT(l_(a))}`,`lucide-${a}`,r),...o}));return n.displayName=l_(a),n};const vT=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],kx=qi("arrow-left",vT);const _T=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xT=qi("clock",_T);const yT=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],ST=qi("dna",yT);const bT=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],MT=qi("file-text",bT);const ET=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],TT=qi("gamepad-2",ET);const AT=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],RT=qi("mic-off",AT);const CT=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],wT=qi("mic",CT);const DT=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],UT=qi("music",DT);const NT=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],LT=qi("palette",NT);const OT=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],PT=qi("smartphone",OT);const zT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],BT=qi("sparkles",zT),IT=[{id:"sensors",title:"Sensor Diagnostics",description:"Test iOS web sensor APIs including motion, orientation, geolocation, and camera.",icon:ne.jsx(PT,{className:"w-8 h-8"}),path:"/sensors",status:"available",gradient:"from-accent-cyan/20 to-accent-purple/20",size:"large"},{id:"colors",title:"Color Picker",description:"EyeDropper API demo",icon:ne.jsx(LT,{className:"w-6 h-6"}),path:"/colors",status:"coming-soon",gradient:"from-accent-green/20 to-accent-cyan/20",size:"small"},{id:"audio",title:"Audio Visualizer",description:"3D audio visualizations with Galaxy & DNA modes",icon:ne.jsx(UT,{className:"w-6 h-6"}),path:"/audio",status:"available",gradient:"from-accent-purple/20 to-accent-red/20",size:"small"},{id:"timer",title:"Timer",description:"Precision timing APIs",icon:ne.jsx(xT,{className:"w-6 h-6"}),path:"/timer",status:"coming-soon",gradient:"from-accent-yellow/20 to-accent-green/20",size:"small"},{id:"clipboard",title:"Clipboard",description:"Clipboard API demo",icon:ne.jsx(MT,{className:"w-6 h-6"}),path:"/clipboard",status:"coming-soon",gradient:"from-accent-cyan/20 to-accent-green/20",size:"small"},{id:"gamepad",title:"Gamepad",description:"Gamepad API tester",icon:ne.jsx(TT,{className:"w-6 h-6"}),path:"/gamepad",status:"coming-soon",gradient:"from-accent-red/20 to-accent-yellow/20",size:"small"}];function FT({app:a,index:e}){const n=a.status==="available",r=ne.jsx(fT,{className:bl("group cursor-pointer",a.size==="large"?"col-span-2 row-span-2":"",!n&&"opacity-60 cursor-not-allowed"),gradientColor:a.gradient.includes("cyan")?"#00d4ff":"#aa66ff",children:ne.jsxs("div",{className:bl("p-6 h-full flex flex-col",a.size==="large"?"min-h-[200px]":"min-h-[120px]"),style:{animation:`fadeInUp 0.5s ease-out ${e*.1}s both`},children:[ne.jsx("div",{className:bl("w-12 h-12 rounded-xl flex items-center justify-center mb-4","bg-gradient-to-br",a.gradient,"text-text-primary","group-hover:scale-110 transition-transform duration-300"),children:a.icon}),ne.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors",children:a.title}),ne.jsx("p",{className:"text-sm text-text-secondary flex-1",children:a.description}),!n&&ne.jsx("span",{className:"mt-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-text-muted/20 text-text-muted w-fit",children:"Coming Soon"}),n&&ne.jsx("span",{className:"mt-3 inline-flex items-center text-xs font-medium text-accent-cyan group-hover:translate-x-1 transition-transform",children:"Open →"})]})});return n?ne.jsx(Ul,{to:a.path,className:"contents",children:r}):r}function HT(){return ne.jsx("div",{className:"min-h-screen p-4 md:p-8",children:ne.jsxs("div",{className:"max-w-4xl mx-auto",children:[ne.jsxs("header",{className:"text-center mb-12",style:{animation:"fadeInUp 0.6s ease-out"},children:[ne.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-4",children:"Nikhil's Apps"}),ne.jsx("p",{className:"text-text-secondary text-lg",children:"A collection of mini apps and experiments"})]}),ne.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:IT.map((a,e)=>ne.jsx(FT,{app:a,index:e},a.id))}),ne.jsx("footer",{className:"text-center mt-12 text-text-muted text-sm",style:{animation:"fadeInUp 0.6s ease-out 0.8s both"},children:ne.jsx("p",{className:"font-mono",children:"Built with React + Vite + Tailwind"})})]})})}const Te={container:{padding:"16px",paddingBottom:"48px",maxWidth:"600px",margin:"0 auto"},backLink:{display:"inline-flex",alignItems:"center",gap:"8px",color:"var(--color-text-secondary)",textDecoration:"none",fontSize:"0.875rem",marginBottom:"16px",transition:"color 0.2s"},header:{textAlign:"center",marginBottom:"32px",animation:"fadeInUp 0.6s ease-out"},title:{fontSize:"clamp(1.75rem, 6vw, 2.5rem)",fontWeight:700,margin:0,background:"linear-gradient(135deg, #00d4ff, #aa66ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"-0.02em"},subtitle:{color:"var(--color-text-secondary)",fontSize:"0.9rem",marginTop:"8px",fontWeight:300},section:{marginBottom:"24px"},sectionTitle:{fontSize:"0.7rem",fontWeight:600,color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"12px",paddingLeft:"4px"},card:{background:"var(--color-bg-card)",borderRadius:"16px",padding:"20px",border:"1px solid var(--color-border-subtle)",marginBottom:"12px",transition:"all 0.2s ease"},cardHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},cardTitle:{fontSize:"1rem",fontWeight:600,margin:0,display:"flex",alignItems:"center",gap:"10px"},statusBadge:{padding:"4px 10px",borderRadius:"20px",fontSize:"0.7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},dataGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px",marginTop:"12px"},dataItem:{background:"var(--color-bg-secondary)",borderRadius:"8px",padding:"10px",textAlign:"center"},dataLabel:{fontSize:"0.65rem",color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},dataValue:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.85rem",fontWeight:700,color:"var(--color-accent-cyan)"},button:{width:"100%",padding:"14px 20px",borderRadius:"12px",border:"none",background:"linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(170, 102, 255, 0.15))",color:"var(--color-text-primary)",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",transition:"all 0.2s ease",fontFamily:"inherit",marginTop:"8px"},icon:{fontSize:"1.25rem"},description:{fontSize:"0.8rem",color:"var(--color-text-secondary)",lineHeight:1.5},unavailableNote:{fontSize:"0.75rem",color:"var(--color-text-muted)",fontStyle:"italic",marginTop:"8px"}},Aa=a=>{const e={unknown:{bg:"rgba(85, 85, 102, 0.3)",color:"#888"},checking:{bg:"rgba(255, 204, 0, 0.2)",color:"#ffcc00"},available:{bg:"rgba(0, 255, 136, 0.15)",color:"#00ff88"},unavailable:{bg:"rgba(255, 68, 102, 0.15)",color:"#ff4466"},granted:{bg:"rgba(0, 255, 136, 0.15)",color:"#00ff88"},denied:{bg:"rgba(255, 68, 102, 0.15)",color:"#ff4466"},prompt:{bg:"rgba(0, 212, 255, 0.15)",color:"#00d4ff"}};return{...Te.statusBadge,background:e[a].bg,color:e[a].color}},$i=(a,e=1)=>a===null?"—":a.toFixed(e);function GT(){const[a,e]=ee.useState("unknown"),[n,r]=ee.useState("unknown"),[o,c]=ee.useState("unknown"),[u,d]=ee.useState("unknown"),[p,m]=ee.useState("unknown"),[v,g]=ee.useState("unknown"),[_,y]=ee.useState("unknown"),[M,A]=ee.useState("unknown"),[b,x]=ee.useState("unknown"),[w,U]=ee.useState({motion:{acceleration:{x:null,y:null,z:null},rotationRate:{alpha:null,beta:null,gamma:null}},orientation:{alpha:null,beta:null,gamma:null,compass:null},geolocation:{latitude:null,longitude:null,accuracy:null},touch:{force:null,touches:0}});ee.useEffect(()=>{g("vibrate"in navigator?"available":"unavailable"),y("bluetooth"in navigator?"available":"unavailable"),A("NDEFReader"in window?"available":"unavailable"),x("getBattery"in navigator?"available":"unavailable"),m("ontouchstart"in window?"available":"unavailable"),"DeviceMotionEvent"in window?e("prompt"):e("unavailable"),"DeviceOrientationEvent"in window?r("prompt"):r("unavailable"),"geolocation"in navigator?c("prompt"):c("unavailable"),"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices?d("prompt"):d("unavailable")},[]),ee.useEffect(()=>{const T=k=>{const J=k.touches[0];U(ae=>({...ae,touch:{force:J?.force??null,touches:k.touches.length}}))},D=()=>{U(k=>({...k,touch:{force:null,touches:0}}))};return window.addEventListener("touchstart",T,{passive:!0}),window.addEventListener("touchmove",T,{passive:!0}),window.addEventListener("touchend",D,{passive:!0}),()=>{window.removeEventListener("touchstart",T),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",D)}},[]);const N=ee.useCallback(async()=>{e("checking");try{typeof DeviceMotionEvent.requestPermission=="function"?await DeviceMotionEvent.requestPermission()==="granted"?(e("granted"),window.addEventListener("devicemotion",D=>{U(k=>({...k,motion:{acceleration:{x:D.acceleration?.x??null,y:D.acceleration?.y??null,z:D.acceleration?.z??null},rotationRate:{alpha:D.rotationRate?.alpha??null,beta:D.rotationRate?.beta??null,gamma:D.rotationRate?.gamma??null}}}))})):e("denied"):(e("granted"),window.addEventListener("devicemotion",T=>{U(D=>({...D,motion:{acceleration:{x:T.acceleration?.x??null,y:T.acceleration?.y??null,z:T.acceleration?.z??null},rotationRate:{alpha:T.rotationRate?.alpha??null,beta:T.rotationRate?.beta??null,gamma:T.rotationRate?.gamma??null}}}))}))}catch{e("denied")}},[]),B=ee.useCallback(async()=>{r("checking");try{typeof DeviceOrientationEvent.requestPermission=="function"?await DeviceOrientationEvent.requestPermission()==="granted"?(r("granted"),window.addEventListener("deviceorientation",D=>{U(k=>({...k,orientation:{alpha:D.alpha,beta:D.beta,gamma:D.gamma,compass:D.webkitCompassHeading??null}}))})):r("denied"):(r("granted"),window.addEventListener("deviceorientation",T=>{U(D=>({...D,orientation:{alpha:T.alpha,beta:T.beta,gamma:T.gamma,compass:T.webkitCompassHeading??null}}))}))}catch{r("denied")}},[]),F=ee.useCallback(()=>{c("checking"),navigator.geolocation.getCurrentPosition(T=>{c("granted"),U(D=>({...D,geolocation:{latitude:T.coords.latitude,longitude:T.coords.longitude,accuracy:T.coords.accuracy}}))},()=>{c("denied")},{enableHighAccuracy:!0})},[]),z=ee.useCallback(async()=>{d("checking");try{const T=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});d("granted"),T.getTracks().forEach(D=>D.stop())}catch{d("denied")}},[]),H=T=>({animation:`fadeInUp 0.5s ease-out ${T*.08}s both`});return ne.jsxs("div",{style:Te.container,children:[ne.jsxs(Ul,{to:"/",style:Te.backLink,className:"hover:text-accent-cyan",children:[ne.jsx(kx,{className:"w-4 h-4"}),"Back to Home"]}),ne.jsxs("header",{style:Te.header,children:[ne.jsx("h1",{style:Te.title,children:"Sensor Diagnostics"}),ne.jsx("p",{style:Te.subtitle,children:"iOS Web API Compatibility Test"})]}),ne.jsxs("section",{style:{...Te.section,...H(0)},children:[ne.jsx("h2",{style:Te.sectionTitle,children:"Requires Permission"}),ne.jsxs("div",{style:{...Te.card,...H(1)},children:[ne.jsxs("div",{style:Te.cardHeader,children:[ne.jsxs("h3",{style:Te.cardTitle,children:[ne.jsx("span",{style:Te.icon,children:"📱"}),"Motion (Accelerometer)"]}),ne.jsx("span",{style:Aa(a),children:a})]}),ne.jsx("p",{style:Te.description,children:"Device acceleration and rotation rate from gyroscope."}),a==="granted"&&ne.jsxs("div",{style:Te.dataGrid,children:[ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Accel X"}),ne.jsx("div",{style:Te.dataValue,children:$i(w.motion.acceleration.x)})]}),ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Accel Y"}),ne.jsx("div",{style:Te.dataValue,children:$i(w.motion.acceleration.y)})]}),ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Accel Z"}),ne.jsx("div",{style:Te.dataValue,children:$i(w.motion.acceleration.z)})]})]}),(a==="prompt"||a==="unknown")&&ne.jsx("button",{style:Te.button,onClick:N,children:"Request Permission"})]}),ne.jsxs("div",{style:{...Te.card,...H(2)},children:[ne.jsxs("div",{style:Te.cardHeader,children:[ne.jsxs("h3",{style:Te.cardTitle,children:[ne.jsx("span",{style:Te.icon,children:"🧭"}),"Orientation & Compass"]}),ne.jsx("span",{style:Aa(n),children:n})]}),ne.jsx("p",{style:Te.description,children:"Device orientation angles and compass heading."}),n==="granted"&&ne.jsxs("div",{style:Te.dataGrid,children:[ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Alpha"}),ne.jsxs("div",{style:Te.dataValue,children:[$i(w.orientation.alpha),"°"]})]}),ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Beta"}),ne.jsxs("div",{style:Te.dataValue,children:[$i(w.orientation.beta),"°"]})]}),ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Compass"}),ne.jsxs("div",{style:Te.dataValue,children:[$i(w.orientation.compass),"°"]})]})]}),(n==="prompt"||n==="unknown")&&ne.jsx("button",{style:Te.button,onClick:B,children:"Request Permission"})]}),ne.jsxs("div",{style:{...Te.card,...H(3)},children:[ne.jsxs("div",{style:Te.cardHeader,children:[ne.jsxs("h3",{style:Te.cardTitle,children:[ne.jsx("span",{style:Te.icon,children:"📍"}),"Geolocation"]}),ne.jsx("span",{style:Aa(o),children:o})]}),ne.jsx("p",{style:Te.description,children:"GPS coordinates and location accuracy."}),o==="granted"&&ne.jsxs("div",{style:Te.dataGrid,children:[ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Lat"}),ne.jsx("div",{style:Te.dataValue,children:$i(w.geolocation.latitude,4)})]}),ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Lng"}),ne.jsx("div",{style:Te.dataValue,children:$i(w.geolocation.longitude,4)})]}),ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Accuracy"}),ne.jsxs("div",{style:Te.dataValue,children:[$i(w.geolocation.accuracy,0),"m"]})]})]}),(o==="prompt"||o==="unknown")&&ne.jsx("button",{style:Te.button,onClick:F,children:"Request Permission"})]}),ne.jsxs("div",{style:{...Te.card,...H(4)},children:[ne.jsxs("div",{style:Te.cardHeader,children:[ne.jsxs("h3",{style:Te.cardTitle,children:[ne.jsx("span",{style:Te.icon,children:"📷"}),"Camera & Microphone"]}),ne.jsx("span",{style:Aa(u),children:u})]}),ne.jsx("p",{style:Te.description,children:"WebRTC getUserMedia for video and audio capture."}),(u==="prompt"||u==="unknown")&&ne.jsx("button",{style:Te.button,onClick:z,children:"Request Permission"})]})]}),ne.jsxs("section",{style:{...Te.section,...H(5)},children:[ne.jsx("h2",{style:Te.sectionTitle,children:"Always Available"}),ne.jsxs("div",{style:{...Te.card,...H(6)},children:[ne.jsxs("div",{style:Te.cardHeader,children:[ne.jsxs("h3",{style:Te.cardTitle,children:[ne.jsx("span",{style:Te.icon,children:"👆"}),"Touch & Force"]}),ne.jsx("span",{style:Aa(p),children:p})]}),ne.jsx("p",{style:Te.description,children:"Touch events with 3D Touch / Haptic Touch pressure."}),p==="available"&&ne.jsxs("div",{style:Te.dataGrid,children:[ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Touches"}),ne.jsx("div",{style:Te.dataValue,children:w.touch.touches})]}),ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Force"}),ne.jsx("div",{style:Te.dataValue,children:$i(w.touch.force,2)})]}),ne.jsxs("div",{style:Te.dataItem,children:[ne.jsx("div",{style:Te.dataLabel,children:"Status"}),ne.jsx("div",{style:Te.dataValue,children:w.touch.touches>0?"Active":"Idle"})]})]}),ne.jsx("p",{style:Te.unavailableNote,children:"Touch anywhere to see live data"})]})]}),ne.jsxs("section",{style:{...Te.section,...H(7)},children:[ne.jsx("h2",{style:Te.sectionTitle,children:"Not Supported on iOS Safari"}),ne.jsxs("div",{style:{...Te.card,opacity:.7,...H(8)},children:[ne.jsxs("div",{style:Te.cardHeader,children:[ne.jsxs("h3",{style:Te.cardTitle,children:[ne.jsx("span",{style:Te.icon,children:"📳"}),"Vibration API"]}),ne.jsx("span",{style:Aa(v),children:v})]}),ne.jsx("p",{style:Te.description,children:"Haptic feedback through navigator.vibrate()"}),ne.jsx("p",{style:Te.unavailableNote,children:"Apple declined due to privacy concerns"})]}),ne.jsxs("div",{style:{...Te.card,opacity:.7,...H(9)},children:[ne.jsxs("div",{style:Te.cardHeader,children:[ne.jsxs("h3",{style:Te.cardTitle,children:[ne.jsx("span",{style:Te.icon,children:"📶"}),"Web Bluetooth"]}),ne.jsx("span",{style:Aa(_),children:_})]}),ne.jsx("p",{style:Te.description,children:"Connect to nearby Bluetooth devices"}),ne.jsx("p",{style:Te.unavailableNote,children:"Apple declined due to fingerprinting risks"})]}),ne.jsxs("div",{style:{...Te.card,opacity:.7,...H(10)},children:[ne.jsxs("div",{style:Te.cardHeader,children:[ne.jsxs("h3",{style:Te.cardTitle,children:[ne.jsx("span",{style:Te.icon,children:"📡"}),"Web NFC"]}),ne.jsx("span",{style:Aa(M),children:M})]}),ne.jsx("p",{style:Te.description,children:"Read/write NFC tags"}),ne.jsx("p",{style:Te.unavailableNote,children:"Not exposed to web apps on iOS"})]}),ne.jsxs("div",{style:{...Te.card,opacity:.7,...H(11)},children:[ne.jsxs("div",{style:Te.cardHeader,children:[ne.jsxs("h3",{style:Te.cardTitle,children:[ne.jsx("span",{style:Te.icon,children:"🔋"}),"Battery Status"]}),ne.jsx("span",{style:Aa(b),children:b})]}),ne.jsx("p",{style:Te.description,children:"Battery level and charging status"}),ne.jsx("p",{style:Te.unavailableNote,children:"Apple declined due to fingerprinting risks"})]})]}),ne.jsxs("footer",{style:{textAlign:"center",marginTop:"40px",color:"var(--color-text-muted)",fontSize:"0.75rem",...H(12)},children:[ne.jsx("p",{children:"Built for iOS Safari sensor testing"}),ne.jsx("p",{style:{fontFamily:"'JetBrains Mono', monospace",marginTop:"4px"},children:new Date().toLocaleDateString()})]})]})}const Nl="182",VT=0,c_=1,kT=2,Tu=1,XT=2,xl=3,za=0,Nn=1,li=2,Jn=0,io=1,Lu=2,u_=3,f_=4,WT=5,$r=100,qT=101,YT=102,jT=103,ZT=104,KT=200,QT=201,JT=202,$T=203,Yh=204,jh=205,e1=206,t1=207,n1=208,i1=209,a1=210,r1=211,s1=212,o1=213,l1=214,Zh=0,Ou=1,Kh=2,ro=3,Qh=4,Jh=5,$h=6,ep=7,Xx=0,c1=1,u1=2,sa=0,Wx=1,qx=2,Yx=3,Kp=4,jx=5,Zx=6,Kx=7,Qx=300,ns=301,so=302,tp=303,np=304,Vu=306,ip=1e3,Na=1001,ap=1002,kn=1003,f1=1004,$c=1005,bn=1006,lh=1007,ts=1008,Rn=1009,Jx=1010,$x=1011,Al=1012,Qp=1013,Wi=1014,ia=1015,Ba=1016,Jp=1017,$p=1018,oo=1020,ey=35902,ty=35899,ny=1021,iy=1022,Xi=1023,Ia=1026,Mr=1027,ay=1028,em=1029,lo=1030,tm=1031,nm=1033,Au=33776,Ru=33777,Cu=33778,wu=33779,rp=35840,sp=35841,op=35842,lp=35843,cp=36196,up=37492,fp=37496,dp=37488,hp=37489,pp=37490,mp=37491,gp=37808,vp=37809,_p=37810,xp=37811,yp=37812,Sp=37813,bp=37814,Mp=37815,Ep=37816,Tp=37817,Ap=37818,Rp=37819,Cp=37820,wp=37821,Dp=36492,Up=36494,Np=36495,Lp=36283,Op=36284,Pp=36285,zp=36286,Ll=3200,d1=0,h1=1,na="",Jt="srgb",Ar="srgb-linear",Pu="linear",jt="srgb",ks=7680,d_=519,p1=512,m1=513,g1=514,im=515,v1=516,_1=517,am=518,x1=519,h_=35044,p_="300 es",aa=2e3,zu=2001;function ry(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Bu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function y1(){const a=Bu("canvas");return a.style.display="block",a}const m_={};function g_(...a){const e="THREE."+a.shift();console.log(e,...a)}function ht(...a){const e="THREE."+a.shift();console.warn(e,...a)}function zt(...a){const e="THREE."+a.shift();console.error(e,...a)}function Rl(...a){const e=a.join(" ");e in m_||(m_[e]=!0,ht(...a))}function S1(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class Ga{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=Math.PI/180,Bp=180/Math.PI;function Ol(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yn[a&255]+Yn[a>>8&255]+Yn[a>>16&255]+Yn[a>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[n&63|128]+Yn[n>>8&255]+"-"+Yn[n>>16&255]+Yn[n>>24&255]+Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]).toLowerCase()}function Mt(a,e,n){return Math.max(e,Math.min(n,a))}function b1(a,e){return(a%e+e)%e}function uh(a,e,n){return(1-n)*a+n*e}function dl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function oi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pl{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,d){let p=r[o+0],m=r[o+1],v=r[o+2],g=r[o+3],_=c[u+0],y=c[u+1],M=c[u+2],A=c[u+3];if(d<=0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g;return}if(d>=1){e[n+0]=_,e[n+1]=y,e[n+2]=M,e[n+3]=A;return}if(g!==A||p!==_||m!==y||v!==M){let b=p*_+m*y+v*M+g*A;b<0&&(_=-_,y=-y,M=-M,A=-A,b=-b);let x=1-d;if(b<.9995){const w=Math.acos(b),U=Math.sin(w);x=Math.sin(x*w)/U,d=Math.sin(d*w)/U,p=p*x+_*d,m=m*x+y*d,v=v*x+M*d,g=g*x+A*d}else{p=p*x+_*d,m=m*x+y*d,v=v*x+M*d,g=g*x+A*d;const w=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=w,m*=w,v*=w,g*=w}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,c,u){const d=r[o],p=r[o+1],m=r[o+2],v=r[o+3],g=c[u],_=c[u+1],y=c[u+2],M=c[u+3];return e[n]=d*M+v*g+p*y-m*_,e[n+1]=p*M+v*_+m*g-d*y,e[n+2]=m*M+v*y+d*_-p*g,e[n+3]=v*M-d*g-p*_-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(o/2),g=d(c/2),_=p(r/2),y=p(o/2),M=p(c/2);switch(u){case"XYZ":this._x=_*v*g+m*y*M,this._y=m*y*g-_*v*M,this._z=m*v*M+_*y*g,this._w=m*v*g-_*y*M;break;case"YXZ":this._x=_*v*g+m*y*M,this._y=m*y*g-_*v*M,this._z=m*v*M-_*y*g,this._w=m*v*g+_*y*M;break;case"ZXY":this._x=_*v*g-m*y*M,this._y=m*y*g+_*v*M,this._z=m*v*M+_*y*g,this._w=m*v*g-_*y*M;break;case"ZYX":this._x=_*v*g-m*y*M,this._y=m*y*g+_*v*M,this._z=m*v*M-_*y*g,this._w=m*v*g+_*y*M;break;case"YZX":this._x=_*v*g+m*y*M,this._y=m*y*g+_*v*M,this._z=m*v*M-_*y*g,this._w=m*v*g-_*y*M;break;case"XZY":this._x=_*v*g-m*y*M,this._y=m*y*g-_*v*M,this._z=m*v*M+_*y*g,this._w=m*v*g+_*y*M;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],v=n[6],g=n[10],_=r+d+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(v-p)*y,this._y=(c-m)*y,this._z=(u-o)*y}else if(r>d&&r>g){const y=2*Math.sqrt(1+r-d-g);this._w=(v-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+m)/y}else if(d>g){const y=2*Math.sqrt(1+d-r-g);this._w=(c-m)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+g-r-d);this._w=(u-o)/y,this._x=(c+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+u*d+o*m-c*p,this._y=o*v+u*p+c*d-r*m,this._z=c*v+u*m+r*p-o*d,this._w=u*v-r*d-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,n=Math.sin(n*m)/v,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(v_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(v_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),v=2*(d*n-c*o),g=2*(c*r-u*n);return this.x=n+p*m+u*g-d*v,this.y=r+p*v+d*m-c*g,this.z=o+p*g+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new Z,v_=new Pl;class _t{constructor(e,n,r,o,c,u,d,p,m){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m)}set(e,n,r,o,c,u,d,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],v=r[4],g=r[7],_=r[2],y=r[5],M=r[8],A=o[0],b=o[3],x=o[6],w=o[1],U=o[4],N=o[7],B=o[2],F=o[5],z=o[8];return c[0]=u*A+d*w+p*B,c[3]=u*b+d*U+p*F,c[6]=u*x+d*N+p*z,c[1]=m*A+v*w+g*B,c[4]=m*b+v*U+g*F,c[7]=m*x+v*N+g*z,c[2]=_*A+y*w+M*B,c[5]=_*b+y*U+M*F,c[8]=_*x+y*N+M*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*u*v-n*d*m-r*c*v+r*d*p+o*c*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=v*u-d*m,_=d*p-v*c,y=m*c-u*p,M=n*g+r*_+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=g*A,e[1]=(o*m-v*r)*A,e[2]=(d*r-o*u)*A,e[3]=_*A,e[4]=(v*n-o*p)*A,e[5]=(o*c-d*n)*A,e[6]=y*A,e[7]=(r*p-m*n)*A,e[8]=(u*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(dh.makeScale(e,n)),this}rotate(e){return this.premultiply(dh.makeRotation(-e)),this}translate(e,n){return this.premultiply(dh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dh=new _t,__=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x_=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function M1(){const a={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===jt&&(o.r=Oa(o.r),o.g=Oa(o.g),o.b=Oa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===jt&&(o.r=ao(o.r),o.g=ao(o.g),o.b=ao(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===na?Pu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Ar]:{primaries:e,whitePoint:r,transfer:Pu,toXYZ:__,fromXYZ:x_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:__,fromXYZ:x_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),a}const Nt=M1();function Oa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ao(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Xs;class E1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Xs===void 0&&(Xs=Bu("canvas")),Xs.width=e.width,Xs.height=e.height;const o=Xs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Xs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Oa(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Oa(n[r]/255)*255):n[r]=Oa(n[r]);return{data:n,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T1=0;class rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=Ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(hh(o[u].image)):c.push(hh(o[u]))}else c=hh(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function hh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?E1.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let A1=0;const ph=new Z;class Xn extends Ga{constructor(e=Xn.DEFAULT_IMAGE,n=Xn.DEFAULT_MAPPING,r=Na,o=Na,c=bn,u=ts,d=Xi,p=Rn,m=Xn.DEFAULT_ANISOTROPY,v=na){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=Ol(),this.name="",this.source=new rm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ht(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ht(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ip:e.x=e.x-Math.floor(e.x);break;case Na:e.x=e.x<0?0:1;break;case ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ip:e.y=e.y-Math.floor(e.y);break;case Na:e.y=e.y<0?0:1;break;case ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Qx;Xn.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,n=0,r=0,o=1){ln.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],v=p[4],g=p[8],_=p[1],y=p[5],M=p[9],A=p[2],b=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(g-A)<.01&&Math.abs(M-b)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+A)<.1&&Math.abs(M+b)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(m+1)/2,N=(y+1)/2,B=(x+1)/2,F=(v+_)/4,z=(g+A)/4,H=(M+b)/4;return U>N&&U>B?U<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(U),o=F/r,c=z/r):N>B?N<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(N),r=F/o,c=H/o):B<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(B),r=z/c,o=H/c),this.set(r,o,c,n),this}let w=Math.sqrt((b-M)*(b-M)+(g-A)*(g-A)+(_-v)*(_-v));return Math.abs(w)<.001&&(w=1),this.x=(b-M)/w,this.y=(g-A)/w,this.z=(_-v)/w,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R1 extends Ga{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new ln(0,0,e,n),this.scissorTest=!1,this.viewport=new ln(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Xn(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new rm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends R1{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class sy extends Xn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C1 extends Xn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Hi):Hi.fromBufferAttribute(c,u),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),eu.copy(r.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hl),tu.subVectors(this.max,hl),Ws.subVectors(e.a,hl),qs.subVectors(e.b,hl),Ys.subVectors(e.c,hl),gr.subVectors(qs,Ws),vr.subVectors(Ys,qs),qr.subVectors(Ws,Ys);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-qr.z,qr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,qr.z,0,-qr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-qr.y,qr.x,0];return!mh(n,Ws,qs,Ys,tu)||(n=[1,0,0,0,1,0,0,0,1],!mh(n,Ws,qs,Ys,tu))?!1:(nu.crossVectors(gr,vr),n=[nu.x,nu.y,nu.z],mh(n,Ws,qs,Ys,tu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Hi=new Z,eu=new zl,Ws=new Z,qs=new Z,Ys=new Z,gr=new Z,vr=new Z,qr=new Z,hl=new Z,tu=new Z,nu=new Z,Yr=new Z;function mh(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Yr.fromArray(a,c);const d=o.x*Math.abs(Yr.x)+o.y*Math.abs(Yr.y)+o.z*Math.abs(Yr.z),p=e.dot(Yr),m=n.dot(Yr),v=r.dot(Yr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const w1=new zl,pl=new Z,gh=new Z;class ku{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):w1.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);const n=pl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(pl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(gh)),this.expandByPoint(pl.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ca=new Z,vh=new Z,iu=new Z,_r=new Z,_h=new Z,au=new Z,xh=new Z;class oy{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ca.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,n),Ca.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){vh.copy(e).add(n).multiplyScalar(.5),iu.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(vh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(iu),d=_r.dot(this.direction),p=-_r.dot(iu),m=_r.lengthSq(),v=Math.abs(1-u*u);let g,_,y,M;if(v>0)if(g=u*p-d,_=u*d-p,M=c*v,g>=0)if(_>=-M)if(_<=M){const A=1/v;g*=A,_*=A,y=g*(g+u*_+2*d)+_*(u*g+_+2*p)+m}else _=c,g=Math.max(0,-(u*_+d)),y=-g*g+_*(_+2*p)+m;else _=-c,g=Math.max(0,-(u*_+d)),y=-g*g+_*(_+2*p)+m;else _<=-M?(g=Math.max(0,-(-u*c+d)),_=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+_*(_+2*p)+m):_<=M?(g=0,_=Math.min(Math.max(-c,-p),c),y=_*(_+2*p)+m):(g=Math.max(0,-(u*c+d)),_=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+_*(_+2*p)+m);else _=u>0?-c:c,g=Math.max(0,-(u*_+d)),y=-g*g+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(vh).addScaledVector(iu,_),y}intersectSphere(e,n){Ca.subVectors(e.center,this.origin);const r=Ca.dot(this.direction),o=Ca.dot(Ca)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),v>=0?(c=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),g>=0?(d=(e.min.z-_.z)*g,p=(e.max.z-_.z)*g):(d=(e.max.z-_.z)*g,p=(e.min.z-_.z)*g),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,n,r,o,c){_h.subVectors(n,e),au.subVectors(r,e),xh.crossVectors(_h,au);let u=this.direction.dot(xh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;_r.subVectors(this.origin,e);const p=d*this.direction.dot(au.crossVectors(_r,au));if(p<0)return null;const m=d*this.direction.dot(_h.cross(_r));if(m<0||p+m>u)return null;const v=-d*_r.dot(xh);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,n,r,o,c,u,d,p,m,v,g,_,y,M,A,b){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m,v,g,_,y,M,A,b)}set(e,n,r,o,c,u,d,p,m,v,g,_,y,M,A,b){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=d,x[13]=p,x[2]=m,x[6]=v,x[10]=g,x[14]=_,x[3]=y,x[7]=M,x[11]=A,x[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/js.setFromMatrixColumn(e,0).length(),c=1/js.setFromMatrixColumn(e,1).length(),u=1/js.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const _=u*v,y=u*g,M=d*v,A=d*g;n[0]=p*v,n[4]=-p*g,n[8]=m,n[1]=y+M*m,n[5]=_-A*m,n[9]=-d*p,n[2]=A-_*m,n[6]=M+y*m,n[10]=u*p}else if(e.order==="YXZ"){const _=p*v,y=p*g,M=m*v,A=m*g;n[0]=_+A*d,n[4]=M*d-y,n[8]=u*m,n[1]=u*g,n[5]=u*v,n[9]=-d,n[2]=y*d-M,n[6]=A+_*d,n[10]=u*p}else if(e.order==="ZXY"){const _=p*v,y=p*g,M=m*v,A=m*g;n[0]=_-A*d,n[4]=-u*g,n[8]=M+y*d,n[1]=y+M*d,n[5]=u*v,n[9]=A-_*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const _=u*v,y=u*g,M=d*v,A=d*g;n[0]=p*v,n[4]=M*m-y,n[8]=_*m+A,n[1]=p*g,n[5]=A*m+_,n[9]=y*m-M,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const _=u*p,y=u*m,M=d*p,A=d*m;n[0]=p*v,n[4]=A-_*g,n[8]=M*g+y,n[1]=g,n[5]=u*v,n[9]=-d*v,n[2]=-m*v,n[6]=y*g+M,n[10]=_-A*g}else if(e.order==="XZY"){const _=u*p,y=u*m,M=d*p,A=d*m;n[0]=p*v,n[4]=-g,n[8]=m*v,n[1]=_*g+A,n[5]=u*v,n[9]=y*g-M,n[2]=M*g-y,n[6]=d*v,n[10]=A*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D1,e,U1)}lookAt(e,n,r){const o=this.elements;return _i.subVectors(e,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),xr.crossVectors(r,_i),xr.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),xr.crossVectors(r,_i)),xr.normalize(),ru.crossVectors(_i,xr),o[0]=xr.x,o[4]=ru.x,o[8]=_i.x,o[1]=xr.y,o[5]=ru.y,o[9]=_i.y,o[2]=xr.z,o[6]=ru.z,o[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],v=r[1],g=r[5],_=r[9],y=r[13],M=r[2],A=r[6],b=r[10],x=r[14],w=r[3],U=r[7],N=r[11],B=r[15],F=o[0],z=o[4],H=o[8],T=o[12],D=o[1],k=o[5],J=o[9],ae=o[13],he=o[2],Q=o[6],L=o[10],I=o[14],V=o[3],xe=o[7],ge=o[11],O=o[15];return c[0]=u*F+d*D+p*he+m*V,c[4]=u*z+d*k+p*Q+m*xe,c[8]=u*H+d*J+p*L+m*ge,c[12]=u*T+d*ae+p*I+m*O,c[1]=v*F+g*D+_*he+y*V,c[5]=v*z+g*k+_*Q+y*xe,c[9]=v*H+g*J+_*L+y*ge,c[13]=v*T+g*ae+_*I+y*O,c[2]=M*F+A*D+b*he+x*V,c[6]=M*z+A*k+b*Q+x*xe,c[10]=M*H+A*J+b*L+x*ge,c[14]=M*T+A*ae+b*I+x*O,c[3]=w*F+U*D+N*he+B*V,c[7]=w*z+U*k+N*Q+B*xe,c[11]=w*H+U*J+N*L+B*ge,c[15]=w*T+U*ae+N*I+B*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],v=e[2],g=e[6],_=e[10],y=e[14],M=e[3],A=e[7],b=e[11],x=e[15],w=p*y-m*_,U=d*y-m*g,N=d*_-p*g,B=u*y-m*v,F=u*_-p*v,z=u*g-d*v;return n*(A*w-b*U+x*N)-r*(M*w-b*B+x*F)+o*(M*U-A*B+x*z)-c*(M*N-A*F+b*z)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=e[9],_=e[10],y=e[11],M=e[12],A=e[13],b=e[14],x=e[15],w=g*b*m-A*_*m+A*p*y-d*b*y-g*p*x+d*_*x,U=M*_*m-v*b*m-M*p*y+u*b*y+v*p*x-u*_*x,N=v*A*m-M*g*m+M*d*y-u*A*y-v*d*x+u*g*x,B=M*g*p-v*A*p-M*d*_+u*A*_+v*d*b-u*g*b,F=n*w+r*U+o*N+c*B;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=w*z,e[1]=(A*_*c-g*b*c-A*o*y+r*b*y+g*o*x-r*_*x)*z,e[2]=(d*b*c-A*p*c+A*o*m-r*b*m-d*o*x+r*p*x)*z,e[3]=(g*p*c-d*_*c-g*o*m+r*_*m+d*o*y-r*p*y)*z,e[4]=U*z,e[5]=(v*b*c-M*_*c+M*o*y-n*b*y-v*o*x+n*_*x)*z,e[6]=(M*p*c-u*b*c-M*o*m+n*b*m+u*o*x-n*p*x)*z,e[7]=(u*_*c-v*p*c+v*o*m-n*_*m-u*o*y+n*p*y)*z,e[8]=N*z,e[9]=(M*g*c-v*A*c-M*r*y+n*A*y+v*r*x-n*g*x)*z,e[10]=(u*A*c-M*d*c+M*r*m-n*A*m-u*r*x+n*d*x)*z,e[11]=(v*d*c-u*g*c-v*r*m+n*g*m+u*r*y-n*d*y)*z,e[12]=B*z,e[13]=(v*A*o-M*g*o+M*r*_-n*A*_-v*r*b+n*g*b)*z,e[14]=(M*d*o-u*A*o-M*r*p+n*A*p+u*r*b-n*d*b)*z,e[15]=(u*g*o-v*d*o+v*r*p-n*g*p-u*r*_+n*d*_)*z,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,v=c*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+r,v*p-o*u,0,m*p-o*d,v*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,v=u+u,g=d+d,_=c*m,y=c*v,M=c*g,A=u*v,b=u*g,x=d*g,w=p*m,U=p*v,N=p*g,B=r.x,F=r.y,z=r.z;return o[0]=(1-(A+x))*B,o[1]=(y+N)*B,o[2]=(M-U)*B,o[3]=0,o[4]=(y-N)*F,o[5]=(1-(_+x))*F,o[6]=(b+w)*F,o[7]=0,o[8]=(M+U)*z,o[9]=(b-w)*z,o[10]=(1-(_+A))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let c=js.set(o[0],o[1],o[2]).length();const u=js.set(o[4],o[5],o[6]).length(),d=js.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Gi.copy(this);const m=1/c,v=1/u,g=1/d;return Gi.elements[0]*=m,Gi.elements[1]*=m,Gi.elements[2]*=m,Gi.elements[4]*=v,Gi.elements[5]*=v,Gi.elements[6]*=v,Gi.elements[8]*=g,Gi.elements[9]*=g,Gi.elements[10]*=g,n.setFromRotationMatrix(Gi),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,o,c,u,d=aa,p=!1){const m=this.elements,v=2*c/(n-e),g=2*c/(r-o),_=(n+e)/(n-e),y=(r+o)/(r-o);let M,A;if(p)M=c/(u-c),A=u*c/(u-c);else if(d===aa)M=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===zu)M=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,u,d=aa,p=!1){const m=this.elements,v=2/(n-e),g=2/(r-o),_=-(n+e)/(n-e),y=-(r+o)/(r-o);let M,A;if(p)M=1/(u-c),A=u/(u-c);else if(d===aa)M=-2/(u-c),A=-(u+c)/(u-c);else if(d===zu)M=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=g,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const js=new Z,Gi=new hn,D1=new Z(0,0,0),U1=new Z(1,1,1),xr=new Z,ru=new Z,_i=new Z,y_=new hn,S_=new Pl;class Fa{constructor(e=0,n=0,r=0,o=Fa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],m=o[5],v=o[9],g=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return S_.setFromEuler(this),this.setFromQuaternion(S_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fa.DEFAULT_ORDER="XYZ";class ly{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N1=0;const b_=new Z,Zs=new Pl,wa=new hn,su=new Z,ml=new Z,L1=new Z,O1=new Pl,M_=new Z(1,0,0),E_=new Z(0,1,0),T_=new Z(0,0,1),A_={type:"added"},P1={type:"removed"},Ks={type:"childadded",child:null},yh={type:"childremoved",child:null};class ci extends Ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=Ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const e=new Z,n=new Fa,r=new Pl,o=new Z(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new hn},normalMatrix:{value:new _t}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ly,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(M_,e)}rotateY(e){return this.rotateOnAxis(E_,e)}rotateZ(e){return this.rotateOnAxis(T_,e)}translateOnAxis(e,n){return b_.copy(e).applyQuaternion(this.quaternion),this.position.add(b_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(M_,e)}translateY(e){return this.translateOnAxis(E_,e)}translateZ(e){return this.translateOnAxis(T_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?su.copy(e):su.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(ml,su,this.up):wa.lookAt(su,ml,this.up),this.quaternion.setFromRotationMatrix(wa),o&&(wa.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(wa),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A_),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(P1),yh.child=e,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A_),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,e,L1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,O1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),g=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ci.DEFAULT_UP=new Z(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new Z,Da=new Z,Sh=new Z,Ua=new Z,Qs=new Z,Js=new Z,R_=new Z,bh=new Z,Mh=new Z,Eh=new Z,Th=new ln,Ah=new ln,Rh=new ln;class ki{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Vi.subVectors(e,n),o.cross(Vi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Vi.subVectors(o,n),Da.subVectors(r,n),Sh.subVectors(e,n);const u=Vi.dot(Vi),d=Vi.dot(Da),p=Vi.dot(Sh),m=Da.dot(Da),v=Da.dot(Sh),g=u*m-d*d;if(g===0)return c.set(0,0,0),null;const _=1/g,y=(m*p-d*v)*_,M=(u*v-d*p)*_;return c.set(1-y-M,M,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,n,r,o,c,u,d,p){return this.getBarycoord(e,n,r,o,Ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ua.x),p.addScaledVector(u,Ua.y),p.addScaledVector(d,Ua.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return Th.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),Th.fromBufferAttribute(e,n),Ah.fromBufferAttribute(e,r),Rh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Th,c.x),u.addScaledVector(Ah,c.y),u.addScaledVector(Rh,c.z),u}static isFrontFacing(e,n,r,o){return Vi.subVectors(r,n),Da.subVectors(e,n),Vi.cross(Da).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),Vi.cross(Da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ki.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return ki.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,d;Qs.subVectors(o,r),Js.subVectors(c,r),bh.subVectors(e,r);const p=Qs.dot(bh),m=Js.dot(bh);if(p<=0&&m<=0)return n.copy(r);Mh.subVectors(e,o);const v=Qs.dot(Mh),g=Js.dot(Mh);if(v>=0&&g<=v)return n.copy(o);const _=p*g-v*m;if(_<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector(Qs,u);Eh.subVectors(e,c);const y=Qs.dot(Eh),M=Js.dot(Eh);if(M>=0&&y<=M)return n.copy(c);const A=y*m-p*M;if(A<=0&&m>=0&&M<=0)return d=m/(m-M),n.copy(r).addScaledVector(Js,d);const b=v*M-y*g;if(b<=0&&g-v>=0&&y-M>=0)return R_.subVectors(c,o),d=(g-v)/(g-v+(y-M)),n.copy(o).addScaledVector(R_,d);const x=1/(b+A+_);return u=A*x,d=_*x,n.copy(r).addScaledVector(Qs,u).addScaledVector(Js,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},ou={h:0,s:0,l:0};function Ch(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Gt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Nt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Nt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Nt.workingColorSpace){if(e=b1(e,1),n=Mt(n,0,1),r=Mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Ch(u,c,e+1/3),this.g=Ch(u,c,e),this.b=Ch(u,c,e-1/3)}return Nt.colorSpaceToWorking(this,o),this}setStyle(e,n=Jt){function r(c){c!==void 0&&parseFloat(c)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ht("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jt){const r=cy[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Nt.workingToColorSpace(jn.copy(this),e),Math.round(Mt(jn.r*255,0,255))*65536+Math.round(Mt(jn.g*255,0,255))*256+Math.round(Mt(jn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Nt.workingColorSpace){Nt.workingToColorSpace(jn.copy(this),n);const r=jn.r,o=jn.g,c=jn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let p,m;const v=(d+u)/2;if(d===u)p=0,m=0;else{const g=u-d;switch(m=v<=.5?g/(u+d):g/(2-u-d),u){case r:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-r)/g+2;break;case c:p=(r-o)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Nt.workingColorSpace){return Nt.workingToColorSpace(jn.copy(this),n),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Jt){Nt.workingToColorSpace(jn.copy(this),e);const n=jn.r,r=jn.g,o=jn.b;return e!==Jt?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+n,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(yr),e.getHSL(ou);const r=uh(yr.h,ou.h,n),o=uh(yr.s,ou.s,n),c=uh(yr.l,ou.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new Gt;Gt.NAMES=cy;let z1=0;class rs extends Ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Ol(),this.name="",this.type="Material",this.blending=io,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=jh,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ht(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ht(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(r.blending=this.blending),this.side!==za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yh&&(r.blendSrc=this.blendSrc),this.blendDst!==jh&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uy extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fa,this.combine=Xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sn=new Z,lu=new qe;let B1=0;class $n{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=h_,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)lu.fromBufferAttribute(this,n),lu.applyMatrix3(e),this.setXY(n,lu.x,lu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=dl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=oi(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=dl(n,this.array)),n}setX(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=dl(n,this.array)),n}setY(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=dl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=dl(n,this.array)),n}setW(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),r=oi(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),r=oi(r,this.array),o=oi(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),r=oi(r,this.array),o=oi(o,this.array),c=oi(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==h_&&(e.usage=this.usage),e}}class fy extends $n{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class dy extends $n{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ei extends $n{constructor(e,n,r){super(new Float32Array(e),n,r)}}let I1=0;const Ui=new hn,wh=new ci,$s=new Z,xi=new zl,gl=new zl,Un=new Z;class ui extends Ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ry(e)?dy:fy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new _t().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,n,r){return Ui.makeTranslation(e,n,r),this.applyMatrix4(Ui),this}scale(e,n,r){return Ui.makeScale(e,n,r),this.applyMatrix4(Ui),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ei(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];xi.setFromBufferAttribute(c),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ku);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];gl.setFromBufferAttribute(d),this.morphTargetsRelative?(Un.addVectors(xi.min,gl.min),xi.expandByPoint(Un),Un.addVectors(xi.max,gl.max),xi.expandByPoint(Un)):(xi.expandByPoint(gl.min),xi.expandByPoint(gl.max))}xi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Un.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Un));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Un.fromBufferAttribute(d,m),p&&($s.fromBufferAttribute(e,m),Un.add($s)),o=Math.max(o,r.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let H=0;H<r.count;H++)d[H]=new Z,p[H]=new Z;const m=new Z,v=new Z,g=new Z,_=new qe,y=new qe,M=new qe,A=new Z,b=new Z;function x(H,T,D){m.fromBufferAttribute(r,H),v.fromBufferAttribute(r,T),g.fromBufferAttribute(r,D),_.fromBufferAttribute(c,H),y.fromBufferAttribute(c,T),M.fromBufferAttribute(c,D),v.sub(m),g.sub(m),y.sub(_),M.sub(_);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(A.copy(v).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(k),b.copy(g).multiplyScalar(y.x).addScaledVector(v,-M.x).multiplyScalar(k),d[H].add(A),d[T].add(A),d[D].add(A),p[H].add(b),p[T].add(b),p[D].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let H=0,T=w.length;H<T;++H){const D=w[H],k=D.start,J=D.count;for(let ae=k,he=k+J;ae<he;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const U=new Z,N=new Z,B=new Z,F=new Z;function z(H){B.fromBufferAttribute(o,H),F.copy(B);const T=d[H];U.copy(T),U.sub(B.multiplyScalar(B.dot(T))).normalize(),N.crossVectors(F,T);const k=N.dot(p[H])<0?-1:1;u.setXYZW(H,U.x,U.y,U.z,k)}for(let H=0,T=w.length;H<T;++H){const D=w[H],k=D.start,J=D.count;for(let ae=k,he=k+J;ae<he;ae+=3)z(e.getX(ae+0)),z(e.getX(ae+1)),z(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const o=new Z,c=new Z,u=new Z,d=new Z,p=new Z,m=new Z,v=new Z,g=new Z;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),A=e.getX(_+1),b=e.getX(_+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,b),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,b),d.add(v),p.add(v),m.add(v),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(b,m.x,m.y,m.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Un.fromBufferAttribute(e,n),Un.normalize(),e.setXYZ(n,Un.x,Un.y,Un.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,g=d.normalized,_=new m.constructor(p.length*v);let y=0,M=0;for(let A=0,b=p.length;A<b;A++){d.isInterleavedBufferAttribute?y=p[A]*d.data.stride+d.offset:y=p[A]*v;for(let x=0;x<v;x++)_[M++]=m[y++]}return new $n(_,v,g)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ui,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,g=m.length;v<g;v++){const _=m[v],y=e(_,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,_=m.length;g<_;g++){const y=m[g];v.push(y.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],g=c[m];for(let _=0,y=g.length;_<y;_++)v.push(g[_].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const g=u[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C_=new hn,jr=new oy,cu=new ku,w_=new Z,uu=new Z,fu=new Z,du=new Z,Dh=new Z,hu=new Z,D_=new Z,pu=new Z;class Qn extends ci{constructor(e=new ui,n=new uy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){hu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],g=c[p];v!==0&&(Dh.fromBufferAttribute(g,e),u?hu.addScaledVector(Dh,v):hu.addScaledVector(Dh.sub(n),v))}n.add(hu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cu.copy(r.boundingSphere),cu.applyMatrix4(c),jr.copy(e.ray).recast(e.near),!(cu.containsPoint(jr.origin)===!1&&(jr.intersectSphere(cu,w_)===null||jr.origin.distanceToSquared(w_)>(e.far-e.near)**2))&&(C_.copy(c).invert(),jr.copy(e.ray).applyMatrix4(C_),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,_=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,A=_.length;M<A;M++){const b=_[M],x=u[b.materialIndex],w=Math.max(b.start,y.start),U=Math.min(d.count,Math.min(b.start+b.count,y.start+y.count));for(let N=w,B=U;N<B;N+=3){const F=d.getX(N),z=d.getX(N+1),H=d.getX(N+2);o=mu(this,x,e,r,m,v,g,F,z,H),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let b=M,x=A;b<x;b+=3){const w=d.getX(b),U=d.getX(b+1),N=d.getX(b+2);o=mu(this,u,e,r,m,v,g,w,U,N),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,A=_.length;M<A;M++){const b=_[M],x=u[b.materialIndex],w=Math.max(b.start,y.start),U=Math.min(p.count,Math.min(b.start+b.count,y.start+y.count));for(let N=w,B=U;N<B;N+=3){const F=N,z=N+1,H=N+2;o=mu(this,x,e,r,m,v,g,F,z,H),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let b=M,x=A;b<x;b+=3){const w=b,U=b+1,N=b+2;o=mu(this,u,e,r,m,v,g,w,U,N),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}}}function F1(a,e,n,r,o,c,u,d){let p;if(e.side===Nn?p=r.intersectTriangle(u,c,o,!0,d):p=r.intersectTriangle(o,c,u,e.side===za,d),p===null)return null;pu.copy(d),pu.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(pu);return m<n.near||m>n.far?null:{distance:m,point:pu.clone(),object:a}}function mu(a,e,n,r,o,c,u,d,p,m){a.getVertexPosition(d,uu),a.getVertexPosition(p,fu),a.getVertexPosition(m,du);const v=F1(a,e,n,r,uu,fu,du,D_);if(v){const g=new Z;ki.getBarycoord(D_,uu,fu,du,g),o&&(v.uv=ki.getInterpolatedAttribute(o,d,p,m,g,new qe)),c&&(v.uv1=ki.getInterpolatedAttribute(c,d,p,m,g,new qe)),u&&(v.normal=ki.getInterpolatedAttribute(u,d,p,m,g,new Z),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:p,c:m,normal:new Z,materialIndex:0};ki.getNormal(uu,fu,du,_.normal),v.face=_,v.barycoord=g}return v}class Bl extends ui{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],v=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,r,n,e,u,c,0),M("z","y","x",1,-1,r,n,-e,u,c,1),M("x","z","y",1,1,e,r,n,o,u,2),M("x","z","y",1,-1,e,r,-n,o,u,3),M("x","y","z",1,-1,e,n,r,o,c,4),M("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new ei(m,3)),this.setAttribute("normal",new ei(v,3)),this.setAttribute("uv",new ei(g,2));function M(A,b,x,w,U,N,B,F,z,H,T){const D=N/z,k=B/H,J=N/2,ae=B/2,he=F/2,Q=z+1,L=H+1;let I=0,V=0;const xe=new Z;for(let ge=0;ge<L;ge++){const O=ge*k-ae;for(let ie=0;ie<Q;ie++){const ue=ie*D-J;xe[A]=ue*w,xe[b]=O*U,xe[x]=he,m.push(xe.x,xe.y,xe.z),xe[A]=0,xe[b]=0,xe[x]=F>0?1:-1,v.push(xe.x,xe.y,xe.z),g.push(ie/z),g.push(1-ge/H),I+=1}}for(let ge=0;ge<H;ge++)for(let O=0;O<z;O++){const ie=_+O+Q*ge,ue=_+O+Q*(ge+1),Se=_+(O+1)+Q*(ge+1),Me=_+(O+1)+Q*ge;p.push(ie,ue,Me),p.push(ue,Se,Me),V+=6}d.addGroup(y,V,T),y+=V,_+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Kn(a){const e={};for(let n=0;n<a.length;n++){const r=co(a[n]);for(const o in r)e[o]=r[o]}return e}function H1(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function hy(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const G1={clone:co,merge:Kn};var V1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V1,this.fragmentShader=k1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=H1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class py extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new Z,U_=new qe,N_=new qe;class yi extends py{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ch*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bp*2*Math.atan(Math.tan(ch*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,n){return this.getViewBounds(e,U_,N_),n.subVectors(N_,U_)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ch*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const eo=-90,to=1;class X1 extends ci{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new yi(eo,to,e,n);o.layers=this.layers,this.add(o);const c=new yi(eo,to,e,n);c.layers=this.layers,this.add(c);const u=new yi(eo,to,e,n);u.layers=this.layers,this.add(u);const d=new yi(eo,to,e,n);d.layers=this.layers,this.add(d);const p=new yi(eo,to,e,n);p.layers=this.layers,this.add(p);const m=new yi(eo,to,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===aa)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,v]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(g,_,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class my extends Xn{constructor(e=[],n=ns,r,o,c,u,d,p,m,v){super(e,n,r,o,c,u,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gy extends Mn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new my(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Bl(5,5,5),c=new dn({name:"CubemapFromEquirect",uniforms:co(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:Jn});c.uniforms.tEquirect.value=n;const u=new Qn(o,c),d=n.minFilter;return n.minFilter===ts&&(n.minFilter=bn),new X1(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}class yl extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W1={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const b=n.getJointPose(A,r),x=this._getHandJoint(m,A);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],_=v.position.distanceTo(g.position),y=.02,M=.005;m.inputState.pinching&&_>y+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=y-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(W1)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new yl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Iu extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fa,this.environmentIntensity=1,this.environmentRotation=new Fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class q1 extends Xn{constructor(e=null,n=1,r=1,o,c,u,d,p,m=kn,v=kn,g,_){super(null,u,d,p,m,v,o,c,g,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nh=new Z,Y1=new Z,j1=new _t;class Jr{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Nh.subVectors(r,n).cross(Y1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Nh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||j1.getNormalMatrix(e),o=this.coplanarPoint(Nh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new ku,Z1=new qe(.5,.5),gu=new Z;class vy{constructor(e=new Jr,n=new Jr,r=new Jr,o=new Jr,c=new Jr,u=new Jr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=aa,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],m=c[3],v=c[4],g=c[5],_=c[6],y=c[7],M=c[8],A=c[9],b=c[10],x=c[11],w=c[12],U=c[13],N=c[14],B=c[15];if(o[0].setComponents(m-u,y-v,x-M,B-w).normalize(),o[1].setComponents(m+u,y+v,x+M,B+w).normalize(),o[2].setComponents(m+d,y+g,x+A,B+U).normalize(),o[3].setComponents(m-d,y-g,x-A,B-U).normalize(),r)o[4].setComponents(p,_,b,N).normalize(),o[5].setComponents(m-p,y-_,x-b,B-N).normalize();else if(o[4].setComponents(m-p,y-_,x-b,B-N).normalize(),n===aa)o[5].setComponents(m+p,y+_,x+b,B+N).normalize();else if(n===zu)o[5].setComponents(p,_,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const n=Z1.distanceTo(e.center);return Zr.radius=.7071067811865476+n,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(gu.x=o.normal.x>0?e.max.x:e.min.x,gu.y=o.normal.y>0?e.max.y:e.min.y,gu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class K1 extends rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const L_=new hn,Ip=new oy,vu=new ku,_u=new Z;class Q1 extends ci{constructor(e=new ui,n=new K1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),vu.copy(r.boundingSphere),vu.applyMatrix4(o),vu.radius+=c,e.ray.intersectsSphere(vu)===!1)return;L_.copy(o).invert(),Ip.copy(e.ray).applyMatrix4(L_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,g=r.attributes.position;if(m!==null){const _=Math.max(0,u.start),y=Math.min(m.count,u.start+u.count);for(let M=_,A=y;M<A;M++){const b=m.getX(M);_u.fromBufferAttribute(g,b),O_(_u,b,p,o,e,n,this)}}else{const _=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let M=_,A=y;M<A;M++)_u.fromBufferAttribute(g,M),O_(_u,M,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function O_(a,e,n,r,o,c,u){const d=Ip.distanceSqToPoint(a);if(d<n){const p=new Z;Ip.closestPointToPoint(a,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class uo extends Xn{constructor(e,n,r=Wi,o,c,u,d=kn,p=kn,m,v=Ia,g=1){if(v!==Ia&&v!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:g};super(_,o,c,u,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class J1 extends uo{constructor(e,n=Wi,r=ns,o,c,u=kn,d=kn,p,m=Ia){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,n,r,o,c,u,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _y extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sm extends ui{constructor(e=1,n=1,r=1,o=32,c=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const v=[],g=[],_=[],y=[];let M=0;const A=[],b=r/2;let x=0;w(),u===!1&&(e>0&&U(!0),n>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new ei(g,3)),this.setAttribute("normal",new ei(_,3)),this.setAttribute("uv",new ei(y,2));function w(){const N=new Z,B=new Z;let F=0;const z=(n-e)/r;for(let H=0;H<=c;H++){const T=[],D=H/c,k=D*(n-e)+e;for(let J=0;J<=o;J++){const ae=J/o,he=ae*p+d,Q=Math.sin(he),L=Math.cos(he);B.x=k*Q,B.y=-D*r+b,B.z=k*L,g.push(B.x,B.y,B.z),N.set(Q,z,L).normalize(),_.push(N.x,N.y,N.z),y.push(ae,1-D),T.push(M++)}A.push(T)}for(let H=0;H<o;H++)for(let T=0;T<c;T++){const D=A[T][H],k=A[T+1][H],J=A[T+1][H+1],ae=A[T][H+1];(e>0||T!==0)&&(v.push(D,k,ae),F+=3),(n>0||T!==c-1)&&(v.push(k,J,ae),F+=3)}m.addGroup(x,F,0),x+=F}function U(N){const B=M,F=new qe,z=new Z;let H=0;const T=N===!0?e:n,D=N===!0?1:-1;for(let J=1;J<=o;J++)g.push(0,b*D,0),_.push(0,D,0),y.push(.5,.5),M++;const k=M;for(let J=0;J<=o;J++){const he=J/o*p+d,Q=Math.cos(he),L=Math.sin(he);z.x=T*L,z.y=b*D,z.z=T*Q,g.push(z.x,z.y,z.z),_.push(0,D,0),F.x=Q*.5+.5,F.y=L*.5*D+.5,y.push(F.x,F.y),M++}for(let J=0;J<o;J++){const ae=B+J,he=k+J;N===!0?v.push(he,he+1,ae):v.push(he+1,he,ae),H+=3}m.addGroup(x,H,N===!0?1:2),x+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sm(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Va{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ht("Curve: .getPoint() not implemented.")}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),n.push(c),o=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const r=this.getLengths();let o=0;const c=r.length;let u;n?u=n:u=e*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(c-1);const v=r[o],_=r[o+1]-v,y=(u-v)/_;return(o+y)/(c-1)}getTangent(e,n){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),p=n||(u.isVector2?new qe:new Z);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n=!1){const r=new Z,o=[],c=[],u=[],d=new Z,p=new hn;for(let y=0;y<=e;y++){const M=y/e;o[y]=this.getTangentAt(M,new Z)}c[0]=new Z,u[0]=new Z;let m=Number.MAX_VALUE;const v=Math.abs(o[0].x),g=Math.abs(o[0].y),_=Math.abs(o[0].z);v<=m&&(m=v,r.set(1,0,0)),g<=m&&(m=g,r.set(0,1,0)),_<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let y=1;y<=e;y++){if(c[y]=c[y-1].clone(),u[y]=u[y-1].clone(),d.crossVectors(o[y-1],o[y]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(Mt(o[y-1].dot(o[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(d,M))}u[y].crossVectors(o[y],c[y])}if(n===!0){let y=Math.acos(Mt(c[0].dot(c[e]),-1,1));y/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(y=-y);for(let M=1;M<=e;M++)c[M].applyMatrix4(p.makeRotationAxis(o[M],y*M)),u[M].crossVectors(o[M],c[M])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xy extends Va{constructor(e=0,n=0,r=1,o=1,c=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=r,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,n=new qe){const r=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const d=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=p-this.aX,y=m-this.aY;p=_*v-y*g+this.aX,m=_*g+y*v+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $1 extends xy{constructor(e,n,r,o,c,u){super(e,n,r,r,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function om(){let a=0,e=0,n=0,r=0;function o(c,u,d,p){a=c,e=d,n=-3*c+3*u-2*d-p,r=2*c-2*u+d+p}return{initCatmullRom:function(c,u,d,p,m){o(u,d,m*(d-c),m*(p-u))},initNonuniformCatmullRom:function(c,u,d,p,m,v,g){let _=(u-c)/m-(d-c)/(m+v)+(d-u)/v,y=(d-u)/v-(p-u)/(v+g)+(p-d)/g;_*=v,y*=v,o(u,d,_,y)},calc:function(c){const u=c*c,d=u*c;return a+e*c+n*u+r*d}}}const xu=new Z,Lh=new om,Oh=new om,Ph=new om;class Fp extends Va{constructor(e=[],n=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=o}getPoint(e,n=new Z){const r=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,v;this.closed||d>0?m=o[(d-1)%c]:(xu.subVectors(o[0],o[1]).add(o[0]),m=xu);const g=o[d%c],_=o[(d+1)%c];if(this.closed||d+2<c?v=o[(d+2)%c]:(xu.subVectors(o[c-1],o[c-2]).add(o[c-1]),v=xu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(m.distanceToSquared(g),y),A=Math.pow(g.distanceToSquared(_),y),b=Math.pow(_.distanceToSquared(v),y);A<1e-4&&(A=1),M<1e-4&&(M=A),b<1e-4&&(b=A),Lh.initNonuniformCatmullRom(m.x,g.x,_.x,v.x,M,A,b),Oh.initNonuniformCatmullRom(m.y,g.y,_.y,v.y,M,A,b),Ph.initNonuniformCatmullRom(m.z,g.z,_.z,v.z,M,A,b)}else this.curveType==="catmullrom"&&(Lh.initCatmullRom(m.x,g.x,_.x,v.x,this.tension),Oh.initCatmullRom(m.y,g.y,_.y,v.y,this.tension),Ph.initCatmullRom(m.z,g.z,_.z,v.z,this.tension));return r.set(Lh.calc(p),Oh.calc(p),Ph.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new Z().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function P_(a,e,n,r,o){const c=(r-e)*.5,u=(o-n)*.5,d=a*a,p=a*d;return(2*n-2*r+c+u)*p+(-3*n+3*r-2*c-u)*d+c*a+n}function eA(a,e){const n=1-a;return n*n*e}function tA(a,e){return 2*(1-a)*a*e}function nA(a,e){return a*a*e}function Ml(a,e,n,r){return eA(a,e)+tA(a,n)+nA(a,r)}function iA(a,e){const n=1-a;return n*n*n*e}function aA(a,e){const n=1-a;return 3*n*n*a*e}function rA(a,e){return 3*(1-a)*a*a*e}function sA(a,e){return a*a*a*e}function El(a,e,n,r,o){return iA(a,e)+aA(a,n)+rA(a,r)+sA(a,o)}class oA extends Va{constructor(e=new qe,n=new qe,r=new qe,o=new qe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new qe){const r=n,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return r.set(El(e,o.x,c.x,u.x,d.x),El(e,o.y,c.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lA extends Va{constructor(e=new Z,n=new Z,r=new Z,o=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new Z){const r=n,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return r.set(El(e,o.x,c.x,u.x,d.x),El(e,o.y,c.y,u.y,d.y),El(e,o.z,c.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cA extends Va{constructor(e=new qe,n=new qe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new qe){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new qe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uA extends Va{constructor(e=new Z,n=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new Z){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Z){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fA extends Va{constructor(e=new qe,n=new qe,r=new qe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new qe){const r=n,o=this.v0,c=this.v1,u=this.v2;return r.set(Ml(e,o.x,c.x,u.x),Ml(e,o.y,c.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yy extends Va{constructor(e=new Z,n=new Z,r=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new Z){const r=n,o=this.v0,c=this.v1,u=this.v2;return r.set(Ml(e,o.x,c.x,u.x),Ml(e,o.y,c.y,u.y),Ml(e,o.z,c.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dA extends Va{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new qe){const r=n,o=this.points,c=(o.length-1)*e,u=Math.floor(c),d=c-u,p=o[u===0?u:u-1],m=o[u],v=o[u>o.length-2?o.length-1:u+1],g=o[u>o.length-3?o.length-1:u+2];return r.set(P_(d,p.x,m.x,v.x,g.x),P_(d,p.y,m.y,v.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new qe().fromArray(o))}return this}}var hA=Object.freeze({__proto__:null,ArcCurve:$1,CatmullRomCurve3:Fp,CubicBezierCurve:oA,CubicBezierCurve3:lA,EllipseCurve:xy,LineCurve:cA,LineCurve3:uA,QuadraticBezierCurve:fA,QuadraticBezierCurve3:yy,SplineCurve:dA});class Il extends ui{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,v=p+1,g=e/d,_=n/p,y=[],M=[],A=[],b=[];for(let x=0;x<v;x++){const w=x*_-u;for(let U=0;U<m;U++){const N=U*g-c;M.push(N,-w,0),A.push(0,0,1),b.push(U/d),b.push(1-x/p)}}for(let x=0;x<p;x++)for(let w=0;w<d;w++){const U=w+m*x,N=w+m*(x+1),B=w+1+m*(x+1),F=w+1+m*x;y.push(U,N,F),y.push(N,B,F)}this.setIndex(y),this.setAttribute("position",new ei(M,3)),this.setAttribute("normal",new ei(A,3)),this.setAttribute("uv",new ei(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fu extends ui{constructor(e=new yy(new Z(-1,-1,0),new Z(-1,1,0),new Z(1,1,0)),n=64,r=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:r,radialSegments:o,closed:c};const u=e.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new Z,p=new Z,m=new qe;let v=new Z;const g=[],_=[],y=[],M=[];A(),this.setIndex(M),this.setAttribute("position",new ei(g,3)),this.setAttribute("normal",new ei(_,3)),this.setAttribute("uv",new ei(y,2));function A(){for(let U=0;U<n;U++)b(U);b(c===!1?n:0),w(),x()}function b(U){v=e.getPointAt(U/n,v);const N=u.normals[U],B=u.binormals[U];for(let F=0;F<=o;F++){const z=F/o*Math.PI*2,H=Math.sin(z),T=-Math.cos(z);p.x=T*N.x+H*B.x,p.y=T*N.y+H*B.y,p.z=T*N.z+H*B.z,p.normalize(),_.push(p.x,p.y,p.z),d.x=v.x+r*p.x,d.y=v.y+r*p.y,d.z=v.z+r*p.z,g.push(d.x,d.y,d.z)}}function x(){for(let U=1;U<=n;U++)for(let N=1;N<=o;N++){const B=(o+1)*(U-1)+(N-1),F=(o+1)*U+(N-1),z=(o+1)*U+N,H=(o+1)*(U-1)+N;M.push(B,F,H),M.push(F,z,H)}}function w(){for(let U=0;U<=n;U++)for(let N=0;N<=o;N++)m.x=U/n,m.y=N/o,y.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Fu(new hA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class pA extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mA extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ll,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gA extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xu extends py{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class vA extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _A{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Lt{constructor(e){this.value=e}clone(){return new Lt(this.value.clone===void 0?this.value:this.value.clone())}}function z_(a,e,n,r){const o=xA(r);switch(n){case ny:return a*e;case ay:return a*e/o.components*o.byteLength;case em:return a*e/o.components*o.byteLength;case lo:return a*e*2/o.components*o.byteLength;case tm:return a*e*2/o.components*o.byteLength;case iy:return a*e*3/o.components*o.byteLength;case Xi:return a*e*4/o.components*o.byteLength;case nm:return a*e*4/o.components*o.byteLength;case Au:case Ru:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Cu:case wu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case sp:case lp:return Math.max(a,16)*Math.max(e,8)/4;case rp:case op:return Math.max(a,8)*Math.max(e,8)/2;case cp:case up:case dp:case hp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case fp:case pp:case mp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case vp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case _p:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case xp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case yp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case bp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Ep:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Cp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case wp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Dp:case Up:case Np:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Lp:case Op:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Pp:case zp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function xA(a){switch(a){case Rn:case Jx:return{byteLength:1,components:1};case Al:case $x:case Ba:return{byteLength:2,components:1};case Jp:case $p:return{byteLength:2,components:4};case Wi:case Qp:case ia:return{byteLength:4,components:1};case ey:case ty:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);function Sy(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function yA(a){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,g=m.byteLength,_=a.createBuffer();a.bindBuffer(p,_),a.bufferData(p,m,v),d.onUploadCallback();let y;if(m instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=a.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=a.SHORT;else if(m instanceof Uint32Array)y=a.UNSIGNED_INT;else if(m instanceof Int32Array)y=a.INT;else if(m instanceof Int8Array)y=a.BYTE;else if(m instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const v=p.array,g=p.updateRanges;if(a.bindBuffer(m,d),g.length===0)a.bufferSubData(m,0,v);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],A=g[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++_,g[_]=A)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const A=g[y];a.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(a.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:c,update:u}}var SA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bA=`#ifdef USE_ALPHAHASH
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
#endif`,MA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RA=`#ifdef USE_AOMAP
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
#endif`,CA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wA=`#ifdef USE_BATCHING
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
#endif`,DA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OA=`#ifdef USE_IRIDESCENCE
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
#endif`,PA=`#ifdef USE_BUMPMAP
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
#endif`,zA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,XA=`#define PI 3.141592653589793
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
} // validated`,WA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qA=`vec3 transformedNormal = objectNormal;
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
#endif`,YA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QA="gl_FragColor = linearToOutputTexel( gl_FragColor );",JA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$A=`#ifdef USE_ENVMAP
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
#endif`,eR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tR=`#ifdef USE_ENVMAP
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
#endif`,nR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iR=`#ifdef USE_ENVMAP
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
#endif`,aR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lR=`#ifdef USE_GRADIENTMAP
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
}`,cR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dR=`uniform bool receiveShadow;
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
#endif`,hR=`#ifdef USE_ENVMAP
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
#endif`,pR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_R=`PhysicalMaterial material;
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
#endif`,xR=`uniform sampler2D dfgLUT;
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
}`,yR=`
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
#endif`,SR=`#if defined( RE_IndirectDiffuse )
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
#endif`,bR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ER=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DR=`#if defined( USE_POINTS_UV )
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
#endif`,UR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zR=`#ifdef USE_MORPHTARGETS
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
#endif`,BR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kR=`#ifdef USE_NORMALMAP
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
#endif`,XR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$R=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r2=`float getShadowMask() {
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
}`,s2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o2=`#ifdef USE_SKINNING
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
#endif`,l2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c2=`#ifdef USE_SKINNING
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
#endif`,u2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p2=`#ifdef USE_TRANSMISSION
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
#endif`,m2=`#ifdef USE_TRANSMISSION
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
#endif`,g2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S2=`uniform sampler2D t2D;
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
}`,b2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A2=`#include <common>
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
}`,R2=`#if DEPTH_PACKING == 3200
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
}`,C2=`#define DISTANCE
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
}`,w2=`#define DISTANCE
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
}`,D2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N2=`uniform float scale;
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
}`,L2=`uniform vec3 diffuse;
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
}`,O2=`#include <common>
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
}`,P2=`uniform vec3 diffuse;
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
}`,z2=`#define LAMBERT
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
}`,B2=`#define LAMBERT
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
}`,I2=`#define MATCAP
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
}`,F2=`#define MATCAP
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
}`,H2=`#define NORMAL
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
}`,G2=`#define NORMAL
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
}`,V2=`#define PHONG
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
}`,k2=`#define PHONG
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
}`,X2=`#define STANDARD
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
}`,W2=`#define STANDARD
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
}`,q2=`#define TOON
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
}`,Y2=`#define TOON
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
}`,j2=`uniform float size;
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
}`,Z2=`uniform vec3 diffuse;
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
}`,K2=`#include <common>
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
}`,Q2=`uniform vec3 color;
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
}`,J2=`uniform float rotation;
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
}`,$2=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:SA,alphahash_pars_fragment:bA,alphamap_fragment:MA,alphamap_pars_fragment:EA,alphatest_fragment:TA,alphatest_pars_fragment:AA,aomap_fragment:RA,aomap_pars_fragment:CA,batching_pars_vertex:wA,batching_vertex:DA,begin_vertex:UA,beginnormal_vertex:NA,bsdfs:LA,iridescence_fragment:OA,bumpmap_pars_fragment:PA,clipping_planes_fragment:zA,clipping_planes_pars_fragment:BA,clipping_planes_pars_vertex:IA,clipping_planes_vertex:FA,color_fragment:HA,color_pars_fragment:GA,color_pars_vertex:VA,color_vertex:kA,common:XA,cube_uv_reflection_fragment:WA,defaultnormal_vertex:qA,displacementmap_pars_vertex:YA,displacementmap_vertex:jA,emissivemap_fragment:ZA,emissivemap_pars_fragment:KA,colorspace_fragment:QA,colorspace_pars_fragment:JA,envmap_fragment:$A,envmap_common_pars_fragment:eR,envmap_pars_fragment:tR,envmap_pars_vertex:nR,envmap_physical_pars_fragment:hR,envmap_vertex:iR,fog_vertex:aR,fog_pars_vertex:rR,fog_fragment:sR,fog_pars_fragment:oR,gradientmap_pars_fragment:lR,lightmap_pars_fragment:cR,lights_lambert_fragment:uR,lights_lambert_pars_fragment:fR,lights_pars_begin:dR,lights_toon_fragment:pR,lights_toon_pars_fragment:mR,lights_phong_fragment:gR,lights_phong_pars_fragment:vR,lights_physical_fragment:_R,lights_physical_pars_fragment:xR,lights_fragment_begin:yR,lights_fragment_maps:SR,lights_fragment_end:bR,logdepthbuf_fragment:MR,logdepthbuf_pars_fragment:ER,logdepthbuf_pars_vertex:TR,logdepthbuf_vertex:AR,map_fragment:RR,map_pars_fragment:CR,map_particle_fragment:wR,map_particle_pars_fragment:DR,metalnessmap_fragment:UR,metalnessmap_pars_fragment:NR,morphinstance_vertex:LR,morphcolor_vertex:OR,morphnormal_vertex:PR,morphtarget_pars_vertex:zR,morphtarget_vertex:BR,normal_fragment_begin:IR,normal_fragment_maps:FR,normal_pars_fragment:HR,normal_pars_vertex:GR,normal_vertex:VR,normalmap_pars_fragment:kR,clearcoat_normal_fragment_begin:XR,clearcoat_normal_fragment_maps:WR,clearcoat_pars_fragment:qR,iridescence_pars_fragment:YR,opaque_fragment:jR,packing:ZR,premultiplied_alpha_fragment:KR,project_vertex:QR,dithering_fragment:JR,dithering_pars_fragment:$R,roughnessmap_fragment:e2,roughnessmap_pars_fragment:t2,shadowmap_pars_fragment:n2,shadowmap_pars_vertex:i2,shadowmap_vertex:a2,shadowmask_pars_fragment:r2,skinbase_vertex:s2,skinning_pars_vertex:o2,skinning_vertex:l2,skinnormal_vertex:c2,specularmap_fragment:u2,specularmap_pars_fragment:f2,tonemapping_fragment:d2,tonemapping_pars_fragment:h2,transmission_fragment:p2,transmission_pars_fragment:m2,uv_pars_fragment:g2,uv_pars_vertex:v2,uv_vertex:_2,worldpos_vertex:x2,background_vert:y2,background_frag:S2,backgroundCube_vert:b2,backgroundCube_frag:M2,cube_vert:E2,cube_frag:T2,depth_vert:A2,depth_frag:R2,distance_vert:C2,distance_frag:w2,equirect_vert:D2,equirect_frag:U2,linedashed_vert:N2,linedashed_frag:L2,meshbasic_vert:O2,meshbasic_frag:P2,meshlambert_vert:z2,meshlambert_frag:B2,meshmatcap_vert:I2,meshmatcap_frag:F2,meshnormal_vert:H2,meshnormal_frag:G2,meshphong_vert:V2,meshphong_frag:k2,meshphysical_vert:X2,meshphysical_frag:W2,meshtoon_vert:q2,meshtoon_frag:Y2,points_vert:j2,points_frag:Z2,shadow_vert:K2,shadow_frag:Q2,sprite_vert:J2,sprite_frag:$2},Ie={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},ta={basic:{uniforms:Kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Kn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Kn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Kn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Kn([Ie.points,Ie.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Kn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Kn([Ie.common,Ie.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Kn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Kn([Ie.sprite,Ie.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Kn([Ie.common,Ie.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Kn([Ie.lights,Ie.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ta.physical={uniforms:Kn([ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const yu={r:0,b:0,g:0},Kr=new Fa,eC=new hn;function tC(a,e,n,r,o,c,u){const d=new Gt(0);let p=c===!0?0:1,m,v,g=null,_=0,y=null;function M(U){let N=U.isScene===!0?U.background:null;return N&&N.isTexture&&(N=(U.backgroundBlurriness>0?n:e).get(N)),N}function A(U){let N=!1;const B=M(U);B===null?x(d,p):B&&B.isColor&&(x(B,1),N=!0);const F=a.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(a.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(U,N){const B=M(N);B&&(B.isCubeTexture||B.mapping===Vu)?(v===void 0&&(v=new Qn(new Bl(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:co(ta.backgroundCube.uniforms),vertexShader:ta.backgroundCube.vertexShader,fragmentShader:ta.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Kr.copy(N.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),v.material.uniforms.envMap.value=B,v.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(eC.makeRotationFromEuler(Kr)),v.material.toneMapped=Nt.getTransfer(B.colorSpace)!==jt,(g!==B||_!==B.version||y!==a.toneMapping)&&(v.material.needsUpdate=!0,g=B,_=B.version,y=a.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new Qn(new Il(2,2),new dn({name:"BackgroundMaterial",uniforms:co(ta.background.uniforms),vertexShader:ta.background.vertexShader,fragmentShader:ta.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Nt.getTransfer(B.colorSpace)!==jt,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||_!==B.version||y!==a.toneMapping)&&(m.material.needsUpdate=!0,g=B,_=B.version,y=a.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function x(U,N){U.getRGB(yu,hy(a)),r.buffers.color.setClear(yu.r,yu.g,yu.b,N,u)}function w(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,N=1){d.set(U),p=N,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(d,p)},render:A,addToRenderList:b,dispose:w}}function nC(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function d(D,k,J,ae,he){let Q=!1;const L=g(ae,J,k);c!==L&&(c=L,m(c.object)),Q=y(D,ae,J,he),Q&&M(D,ae,J,he),he!==null&&e.update(he,a.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,N(D,k,J,ae),he!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function p(){return a.createVertexArray()}function m(D){return a.bindVertexArray(D)}function v(D){return a.deleteVertexArray(D)}function g(D,k,J){const ae=J.wireframe===!0;let he=r[D.id];he===void 0&&(he={},r[D.id]=he);let Q=he[k.id];Q===void 0&&(Q={},he[k.id]=Q);let L=Q[ae];return L===void 0&&(L=_(p()),Q[ae]=L),L}function _(D){const k=[],J=[],ae=[];for(let he=0;he<n;he++)k[he]=0,J[he]=0,ae[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:ae,object:D,attributes:{},index:null}}function y(D,k,J,ae){const he=c.attributes,Q=k.attributes;let L=0;const I=J.getAttributes();for(const V in I)if(I[V].location>=0){const ge=he[V];let O=Q[V];if(O===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(O=D.instanceColor)),ge===void 0||ge.attribute!==O||O&&ge.data!==O.data)return!0;L++}return c.attributesNum!==L||c.index!==ae}function M(D,k,J,ae){const he={},Q=k.attributes;let L=0;const I=J.getAttributes();for(const V in I)if(I[V].location>=0){let ge=Q[V];ge===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor));const O={};O.attribute=ge,ge&&ge.data&&(O.data=ge.data),he[V]=O,L++}c.attributes=he,c.attributesNum=L,c.index=ae}function A(){const D=c.newAttributes;for(let k=0,J=D.length;k<J;k++)D[k]=0}function b(D){x(D,0)}function x(D,k){const J=c.newAttributes,ae=c.enabledAttributes,he=c.attributeDivisors;J[D]=1,ae[D]===0&&(a.enableVertexAttribArray(D),ae[D]=1),he[D]!==k&&(a.vertexAttribDivisor(D,k),he[D]=k)}function w(){const D=c.newAttributes,k=c.enabledAttributes;for(let J=0,ae=k.length;J<ae;J++)k[J]!==D[J]&&(a.disableVertexAttribArray(J),k[J]=0)}function U(D,k,J,ae,he,Q,L){L===!0?a.vertexAttribIPointer(D,k,J,he,Q):a.vertexAttribPointer(D,k,J,ae,he,Q)}function N(D,k,J,ae){A();const he=ae.attributes,Q=J.getAttributes(),L=k.defaultAttributeValues;for(const I in Q){const V=Q[I];if(V.location>=0){let xe=he[I];if(xe===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),xe!==void 0){const ge=xe.normalized,O=xe.itemSize,ie=e.get(xe);if(ie===void 0)continue;const ue=ie.buffer,Se=ie.type,Me=ie.bytesPerElement,$=Se===a.INT||Se===a.UNSIGNED_INT||xe.gpuType===Qp;if(xe.isInterleavedBufferAttribute){const re=xe.data,De=re.stride,Fe=xe.offset;if(re.isInstancedInterleavedBuffer){for(let ze=0;ze<V.locationSize;ze++)x(V.location+ze,re.meshPerAttribute);D.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ze=0;ze<V.locationSize;ze++)b(V.location+ze);a.bindBuffer(a.ARRAY_BUFFER,ue);for(let ze=0;ze<V.locationSize;ze++)U(V.location+ze,O/V.locationSize,Se,ge,De*Me,(Fe+O/V.locationSize*ze)*Me,$)}else{if(xe.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)x(V.location+re,xe.meshPerAttribute);D.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let re=0;re<V.locationSize;re++)b(V.location+re);a.bindBuffer(a.ARRAY_BUFFER,ue);for(let re=0;re<V.locationSize;re++)U(V.location+re,O/V.locationSize,Se,ge,O*Me,O/V.locationSize*re*Me,$)}}else if(L!==void 0){const ge=L[I];if(ge!==void 0)switch(ge.length){case 2:a.vertexAttrib2fv(V.location,ge);break;case 3:a.vertexAttrib3fv(V.location,ge);break;case 4:a.vertexAttrib4fv(V.location,ge);break;default:a.vertexAttrib1fv(V.location,ge)}}}}w()}function B(){H();for(const D in r){const k=r[D];for(const J in k){const ae=k[J];for(const he in ae)v(ae[he].object),delete ae[he];delete k[J]}delete r[D]}}function F(D){if(r[D.id]===void 0)return;const k=r[D.id];for(const J in k){const ae=k[J];for(const he in ae)v(ae[he].object),delete ae[he];delete k[J]}delete r[D.id]}function z(D){for(const k in r){const J=r[k];if(J[D.id]===void 0)continue;const ae=J[D.id];for(const he in ae)v(ae[he].object),delete ae[he];delete J[D.id]}}function H(){T(),u=!0,c!==o&&(c=o,m(c.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:H,resetDefaultState:T,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:b,disableUnusedAttributes:w}}function iC(a,e,n){let r;function o(m){r=m}function c(m,v){a.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,g){g!==0&&(a.drawArraysInstanced(r,m,v,g),n.update(v,r,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,g);let y=0;for(let M=0;M<g;M++)y+=v[M];n.update(y,r,1)}function p(m,v,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<m.length;M++)u(m[M],v[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,v,0,_,0,g);let M=0;for(let A=0;A<g;A++)M+=v[A]*_[A];n.update(M,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function aC(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==Xi&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const H=z===Ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Rn&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ia&&!H)}function p(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(ht("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),w=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),N=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),B=a.getParameter(a.MAX_SAMPLES),F=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:N,maxSamples:B,samples:F}}function rC(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Jr,d=new _t,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||r!==0||o;return o=_,r=g.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){n=v(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,A=g.clipIntersection,b=g.clipShadows,x=a.get(g);if(!o||M===null||M.length===0||c&&!b)c?v(null):m();else{const w=c?0:r,U=w*4;let N=x.clippingState||null;p.value=N,N=v(M,_,U,y);for(let B=0;B!==U;++B)N[B]=n[B];x.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,_,y,M){const A=g!==null?g.length:0;let b=null;if(A!==0){if(b=p.value,M!==!0||b===null){const x=y+A*4,w=_.matrixWorldInverse;d.getNormalMatrix(w),(b===null||b.length<x)&&(b=new Float32Array(x));for(let U=0,N=y;U!==A;++U,N+=4)u.copy(g[U]).applyMatrix4(w,d),u.normal.toArray(b,N),b[N+3]=u.constant}p.value=b,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,b}}function sC(a){let e=new WeakMap;function n(u,d){return d===tp?u.mapping=ns:d===np&&(u.mapping=so),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===tp||d===np)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new gy(p.height);return m.fromEquirectangularTexture(a,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Er=4,B_=[.125,.215,.35,.446,.526,.582],es=20,oC=256,vl=new Xu,I_=new Gt;let zh=null,Bh=0,Ih=0,Fh=!1;const lC=new Z;class F_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:d=lC}=c;zh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zh,Bh,Ih),this._renderer.xr.enabled=Fh,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Ba,format:Xi,colorSpace:Ar,depthBuffer:!1},o=H_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cC(c)),this._blurMaterial=fC(c,e,n),this._ggxMaterial=uC(c,e,n)}return o}_compileMaterial(e){const n=new Qn(new ui,e);this._renderer.compile(n,vl)}_sceneToCubeUV(e,n,r,o,c){const p=new yi(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(I_),g.toneMapping=sa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qn(new Bl,new uy({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,b=A.material;let x=!1;const w=e.background;w?w.isColor&&(b.color.copy(w),e.background=null,x=!0):(b.color.copy(I_),x=!0);for(let U=0;U<6;U++){const N=U%3;N===0?(p.up.set(0,m[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[U],c.y,c.z)):N===1?(p.up.set(0,0,m[U]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[U],c.z)):(p.up.set(0,m[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[U]));const B=this._cubeSize;no(o,N*B,U>2?B:0,B,B),g.setRenderTarget(o),x&&g.render(A,p),g.render(e,p)}g.toneMapping=y,g.autoClear=_,e.background=w}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ns||e.mapping===so;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=V_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;no(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,vl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),g=Math.sqrt(m*m-v*v),_=0+m*1.25,y=g*_,{_lodMax:M}=this,A=this._sizeLods[r],b=3*A*(r>M-Er?r-M+Er:0),x=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=M-n,no(c,b,x,3*A,2*A),o.setRenderTarget(c),o.render(d,vl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=M-r,no(e,b,x,3*A,2*A),o.setRenderTarget(e),o.render(d,vl)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&zt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[o];g.material=m;const _=m.uniforms,y=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*es-1),A=c/M,b=isFinite(c)?1+Math.floor(v*A):es;b>es&&ht(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${es}`);const x=[];let w=0;for(let z=0;z<es;++z){const H=z/A,T=Math.exp(-H*H/2);x.push(T),z===0?w+=T:z<b&&(w+=2*T)}for(let z=0;z<x.length;z++)x[z]=x[z]/w;_.envMap.value=e.texture,_.samples.value=b,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:U}=this;_.dTheta.value=M,_.mipInt.value=U-r;const N=this._sizeLods[o],B=3*N*(o>U-Er?o-U+Er:0),F=4*(this._cubeSize-N);no(n,B,F,3*N,2*N),p.setRenderTarget(n),p.render(g,vl)}}function cC(a){const e=[],n=[],r=[];let o=a;const c=a-Er+1+B_.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>a-Er?p=B_[u-a+Er-1]:u===0&&(p=0),n.push(p);const m=1/(d-2),v=-m,g=1+m,_=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,M=6,A=3,b=2,x=1,w=new Float32Array(A*M*y),U=new Float32Array(b*M*y),N=new Float32Array(x*M*y);for(let F=0;F<y;F++){const z=F%3*2/3-1,H=F>2?0:-1,T=[z,H,0,z+2/3,H,0,z+2/3,H+1,0,z,H,0,z+2/3,H+1,0,z,H+1,0];w.set(T,A*M*F),U.set(_,b*M*F);const D=[F,F,F,F,F,F];N.set(D,x*M*F)}const B=new ui;B.setAttribute("position",new $n(w,A)),B.setAttribute("uv",new $n(U,b)),B.setAttribute("faceIndex",new $n(N,x)),r.push(new Qn(B,null)),o>Er&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function H_(a,e,n){const r=new Mn(a,e,n);return r.texture.mapping=Vu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function no(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function uC(a,e,n){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function fC(a,e,n){const r=new Float32Array(es),o=new Z(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function G_(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function V_(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Wu(){return`

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
	`}function dC(a){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===tp||p===np,v=p===ns||p===so;if(m||v){let g=e.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new F_(a)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return m&&y&&y.height>0||v&&y&&o(y)?(n===null&&(n=new F_(a)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function o(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function hC(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Rl("WebGLRenderer: "+r+" extension not supported."),o}}}function pC(a,e,n,r){const o={},c=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(g,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(g){const _=g.attributes;for(const y in _)e.update(_[y],a.ARRAY_BUFFER)}function m(g){const _=[],y=g.index,M=g.attributes.position;let A=0;if(y!==null){const w=y.array;A=y.version;for(let U=0,N=w.length;U<N;U+=3){const B=w[U+0],F=w[U+1],z=w[U+2];_.push(B,F,F,z,z,B)}}else if(M!==void 0){const w=M.array;A=M.version;for(let U=0,N=w.length/3-1;U<N;U+=3){const B=U+0,F=U+1,z=U+2;_.push(B,F,F,z,z,B)}}else return;const b=new(ry(_)?dy:fy)(_,1);b.version=A;const x=c.get(g);x&&e.remove(x),c.set(g,b)}function v(g){const _=c.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function mC(a,e,n){let r;function o(_){r=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function p(_,y){a.drawElements(r,y,c,_*u),n.update(y,r,1)}function m(_,y,M){M!==0&&(a.drawElementsInstanced(r,y,c,_*u,M),n.update(y,r,M))}function v(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,_,0,M);let b=0;for(let x=0;x<M;x++)b+=y[x];n.update(b,r,1)}function g(_,y,M,A){if(M===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let x=0;x<_.length;x++)m(_[x]/u,y[x],A[x]);else{b.multiDrawElementsInstancedWEBGL(r,y,0,c,_,0,A,0,M);let x=0;for(let w=0;w<M;w++)x+=y[w]*A[w];n.update(x,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function gC(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:zt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function vC(a,e,n){const r=new WeakMap,o=new ln;function c(u,d,p){const m=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let _=r.get(d);if(_===void 0||_.count!==g){let D=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var y=D;_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let N=0;M===!0&&(N=1),A===!0&&(N=2),b===!0&&(N=3);let B=d.attributes.position.count*N,F=1;B>e.maxTextureSize&&(F=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*F*4*g),H=new sy(z,B,F,g);H.type=ia,H.needsUpdate=!0;const T=N*4;for(let k=0;k<g;k++){const J=x[k],ae=w[k],he=U[k],Q=B*F*4*k;for(let L=0;L<J.count;L++){const I=L*T;M===!0&&(o.fromBufferAttribute(J,L),z[Q+I+0]=o.x,z[Q+I+1]=o.y,z[Q+I+2]=o.z,z[Q+I+3]=0),A===!0&&(o.fromBufferAttribute(ae,L),z[Q+I+4]=o.x,z[Q+I+5]=o.y,z[Q+I+6]=o.z,z[Q+I+7]=0),b===!0&&(o.fromBufferAttribute(he,L),z[Q+I+8]=o.x,z[Q+I+9]=o.y,z[Q+I+10]=o.z,z[Q+I+11]=he.itemSize===4?o.w:1)}}_={count:g,texture:H,size:new qe(B,F)},r.set(d,_),d.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let M=0;for(let b=0;b<m.length;b++)M+=m[b];const A=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(a,"morphTargetBaseInfluence",A),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function _C(a,e,n,r){let o=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,g=e.get(p,v);if(o.get(g)!==m&&(e.update(g),o.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return g}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}const xC={[Wx]:"LINEAR_TONE_MAPPING",[qx]:"REINHARD_TONE_MAPPING",[Yx]:"CINEON_TONE_MAPPING",[Kp]:"ACES_FILMIC_TONE_MAPPING",[Zx]:"AGX_TONE_MAPPING",[Kx]:"NEUTRAL_TONE_MAPPING",[jx]:"CUSTOM_TONE_MAPPING"};function yC(a,e,n,r,o){const c=new Mn(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),u=new Mn(e,n,{type:Ba,depthBuffer:!1,stencilBuffer:!1}),d=new ui;d.setAttribute("position",new ei([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ei([0,2,0,0,2,0],2));const p=new pA({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Qn(d,p),v=new Xu(-1,1,1,-1,0,1);let g=null,_=null,y=!1,M,A=null,b=[],x=!1;this.setSize=function(w,U){c.setSize(w,U),u.setSize(w,U);for(let N=0;N<b.length;N++){const B=b[N];B.setSize&&B.setSize(w,U)}},this.setEffects=function(w){b=w,x=b.length>0&&b[0].isRenderPass===!0;const U=c.width,N=c.height;for(let B=0;B<b.length;B++){const F=b[B];F.setSize&&F.setSize(U,N)}},this.begin=function(w,U){if(y||w.toneMapping===sa&&b.length===0)return!1;if(A=U,U!==null){const N=U.width,B=U.height;(c.width!==N||c.height!==B)&&this.setSize(N,B)}return x===!1&&w.setRenderTarget(c),M=w.toneMapping,w.toneMapping=sa,!0},this.hasRenderPass=function(){return x},this.end=function(w,U){w.toneMapping=M,y=!0;let N=c,B=u;for(let F=0;F<b.length;F++){const z=b[F];if(z.enabled!==!1&&(z.render(w,B,N,U),z.needsSwap!==!1)){const H=N;N=B,B=H}}if(g!==w.outputColorSpace||_!==w.toneMapping){g=w.outputColorSpace,_=w.toneMapping,p.defines={},Nt.getTransfer(g)===jt&&(p.defines.SRGB_TRANSFER="");const F=xC[_];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,w.setRenderTarget(A),w.render(m,v),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),d.dispose(),p.dispose()}}const by=new Xn,Hp=new uo(1,1),My=new sy,Ey=new C1,Ty=new my,k_=[],X_=[],W_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function mo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=k_[o];if(c===void 0&&(c=new Float32Array(o),k_[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,a[u].toArray(c,d)}return c}function Cn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function wn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function qu(a,e){let n=X_[e];n===void 0&&(n=new Int32Array(e),X_[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function SC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function bC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;a.uniform2fv(this.addr,e),wn(n,e)}}function MC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Cn(n,e))return;a.uniform3fv(this.addr,e),wn(n,e)}}function EC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;a.uniform4fv(this.addr,e),wn(n,e)}}function TC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Cn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(n,e)}else{if(Cn(n,r))return;Y_.set(r),a.uniformMatrix2fv(this.addr,!1,Y_),wn(n,r)}}function AC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Cn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(n,e)}else{if(Cn(n,r))return;q_.set(r),a.uniformMatrix3fv(this.addr,!1,q_),wn(n,r)}}function RC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Cn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(n,e)}else{if(Cn(n,r))return;W_.set(r),a.uniformMatrix4fv(this.addr,!1,W_),wn(n,r)}}function CC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function wC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;a.uniform2iv(this.addr,e),wn(n,e)}}function DC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;a.uniform3iv(this.addr,e),wn(n,e)}}function UC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;a.uniform4iv(this.addr,e),wn(n,e)}}function NC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function LC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;a.uniform2uiv(this.addr,e),wn(n,e)}}function OC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;a.uniform3uiv(this.addr,e),wn(n,e)}}function PC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;a.uniform4uiv(this.addr,e),wn(n,e)}}function zC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Hp.compareFunction=n.isReversedDepthBuffer()?am:im,c=Hp):c=by,n.setTexture2D(e||c,o)}function BC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Ey,o)}function IC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Ty,o)}function FC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||My,o)}function HC(a){switch(a){case 5126:return SC;case 35664:return bC;case 35665:return MC;case 35666:return EC;case 35674:return TC;case 35675:return AC;case 35676:return RC;case 5124:case 35670:return CC;case 35667:case 35671:return wC;case 35668:case 35672:return DC;case 35669:case 35673:return UC;case 5125:return NC;case 36294:return LC;case 36295:return OC;case 36296:return PC;case 35678:case 36198:case 36298:case 36306:case 35682:return zC;case 35679:case 36299:case 36307:return BC;case 35680:case 36300:case 36308:case 36293:return IC;case 36289:case 36303:case 36311:case 36292:return FC}}function GC(a,e){a.uniform1fv(this.addr,e)}function VC(a,e){const n=mo(e,this.size,2);a.uniform2fv(this.addr,n)}function kC(a,e){const n=mo(e,this.size,3);a.uniform3fv(this.addr,n)}function XC(a,e){const n=mo(e,this.size,4);a.uniform4fv(this.addr,n)}function WC(a,e){const n=mo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function qC(a,e){const n=mo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function YC(a,e){const n=mo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function jC(a,e){a.uniform1iv(this.addr,e)}function ZC(a,e){a.uniform2iv(this.addr,e)}function KC(a,e){a.uniform3iv(this.addr,e)}function QC(a,e){a.uniform4iv(this.addr,e)}function JC(a,e){a.uniform1uiv(this.addr,e)}function $C(a,e){a.uniform2uiv(this.addr,e)}function ew(a,e){a.uniform3uiv(this.addr,e)}function tw(a,e){a.uniform4uiv(this.addr,e)}function nw(a,e,n){const r=this.cache,o=e.length,c=qu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Hp:u=by;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function iw(a,e,n){const r=this.cache,o=e.length,c=qu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Ey,c[u])}function aw(a,e,n){const r=this.cache,o=e.length,c=qu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Ty,c[u])}function rw(a,e,n){const r=this.cache,o=e.length,c=qu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||My,c[u])}function sw(a){switch(a){case 5126:return GC;case 35664:return VC;case 35665:return kC;case 35666:return XC;case 35674:return WC;case 35675:return qC;case 35676:return YC;case 5124:case 35670:return jC;case 35667:case 35671:return ZC;case 35668:case 35672:return KC;case 35669:case 35673:return QC;case 5125:return JC;case 36294:return $C;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return rw}}class ow{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=HC(n.type)}}class lw{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sw(n.type)}}class cw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const Hh=/(\w+)(\])?(\[|\.)?/g;function j_(a,e){a.seq.push(e),a.map[e.id]=e}function uw(a,e,n){const r=a.name,o=r.length;for(Hh.lastIndex=0;;){const c=Hh.exec(r),u=Hh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){j_(n,m===void 0?new ow(d,a,e):new lw(d,a,e));break}else{let g=n.map[d];g===void 0&&(g=new cw(d),j_(n,g)),n=g}}}class Du{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);uw(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Z_(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const fw=37297;let dw=0;function hw(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const K_=new _t;function pw(a){Nt._getMatrix(K_,Nt.workingColorSpace,a);const e=`mat3( ${K_.elements.map(n=>n.toFixed(4))} )`;switch(Nt.getTransfer(a)){case Pu:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Q_(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+hw(a.getShaderSource(e),d)}else return c}function mw(a,e){const n=pw(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const gw={[Wx]:"Linear",[qx]:"Reinhard",[Yx]:"Cineon",[Kp]:"ACESFilmic",[Zx]:"AgX",[Kx]:"Neutral",[jx]:"Custom"};function vw(a,e){const n=gw[e];return n===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Su=new Z;function _w(){Nt.getLuminanceCoefficients(Su);const a=Su.x.toFixed(4),e=Su.y.toFixed(4),n=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function yw(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function Sw(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return n}function Sl(a){return a!==""}function J_(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gp(a){return a.replace(bw,Ew)}const Mw=new Map;function Ew(a,e){let n=xt[e];if(n===void 0){const r=Mw.get(e);if(r!==void 0)n=xt[r],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Gp(n)}const Tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ex(a){return a.replace(Tw,Aw)}function Aw(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function tx(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const Rw={[Tu]:"SHADOWMAP_TYPE_PCF",[xl]:"SHADOWMAP_TYPE_VSM"};function Cw(a){return Rw[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ww={[ns]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE",[Vu]:"ENVMAP_TYPE_CUBE_UV"};function Dw(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":ww[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Uw={[so]:"ENVMAP_MODE_REFRACTION"};function Nw(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Uw[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Lw={[Xx]:"ENVMAP_BLENDING_MULTIPLY",[c1]:"ENVMAP_BLENDING_MIX",[u1]:"ENVMAP_BLENDING_ADD"};function Ow(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Lw[a.combine]||"ENVMAP_BLENDING_NONE"}function Pw(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function zw(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=Cw(n),m=Dw(n),v=Nw(n),g=Ow(n),_=Pw(n),y=xw(n),M=yw(c),A=o.createProgram();let b,x,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Sl).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Sl).join(`
`),x.length>0&&(x+=`
`)):(b=[tx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),x=[tx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sa?"#define TONE_MAPPING":"",n.toneMapping!==sa?xt.tonemapping_pars_fragment:"",n.toneMapping!==sa?vw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,mw("linearToOutputTexel",n.outputColorSpace),_w(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sl).join(`
`)),u=Gp(u),u=J_(u,n),u=$_(u,n),d=Gp(d),d=J_(d,n),d=$_(d,n),u=ex(u),d=ex(d),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",n.glslVersion===p_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===p_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=w+b+u,N=w+x+d,B=Z_(o,o.VERTEX_SHADER,U),F=Z_(o,o.FRAGMENT_SHADER,N);o.attachShader(A,B),o.attachShader(A,F),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function z(k){if(a.debug.checkShaderErrors){const J=o.getProgramInfoLog(A)||"",ae=o.getShaderInfoLog(B)||"",he=o.getShaderInfoLog(F)||"",Q=J.trim(),L=ae.trim(),I=he.trim();let V=!0,xe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(V=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,A,B,F);else{const ge=Q_(o,B,"vertex"),O=Q_(o,F,"fragment");zt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Q+`
`+ge+`
`+O)}else Q!==""?ht("WebGLProgram: Program Info Log:",Q):(L===""||I==="")&&(xe=!1);xe&&(k.diagnostics={runnable:V,programLog:Q,vertexShader:{log:L,prefix:b},fragmentShader:{log:I,prefix:x}})}o.deleteShader(B),o.deleteShader(F),H=new Du(o,A),T=Sw(o,A)}let H;this.getUniforms=function(){return H===void 0&&z(this),H};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(A,fw)),D},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=F,this}let Bw=0;class Iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new Fw(e),n.set(e,r)),r}}class Fw{constructor(e){this.id=Bw++,this.code=e,this.usedTimes=0}}function Hw(a,e,n,r,o,c,u){const d=new ly,p=new Iw,m=new Set,v=[],g=new Map,_=o.logarithmicDepthBuffer;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return m.add(T),T===0?"uv":`uv${T}`}function b(T,D,k,J,ae){const he=J.fog,Q=ae.geometry,L=T.isMeshStandardMaterial?J.environment:null,I=(T.isMeshStandardMaterial?n:e).get(T.envMap||L),V=I&&I.mapping===Vu?I.image.height:null,xe=M[T.type];T.precision!==null&&(y=o.getMaxPrecision(T.precision),y!==T.precision&&ht("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,O=ge!==void 0?ge.length:0;let ie=0;Q.morphAttributes.position!==void 0&&(ie=1),Q.morphAttributes.normal!==void 0&&(ie=2),Q.morphAttributes.color!==void 0&&(ie=3);let ue,Se,Me,$;if(xe){const Ut=ta[xe];ue=Ut.vertexShader,Se=Ut.fragmentShader}else ue=T.vertexShader,Se=T.fragmentShader,p.update(T),Me=p.getVertexShaderID(T),$=p.getFragmentShaderID(T);const re=a.getRenderTarget(),De=a.state.buffers.depth.getReversed(),Fe=ae.isInstancedMesh===!0,ze=ae.isBatchedMesh===!0,it=!!T.map,Ct=!!T.matcap,at=!!I,lt=!!T.aoMap,Dt=!!T.lightMap,ft=!!T.bumpMap,$t=!!T.normalMap,X=!!T.displacementMap,rn=!!T.emissiveMap,wt=!!T.metalnessMap,Vt=!!T.roughnessMap,Je=T.anisotropy>0,P=T.clearcoat>0,E=T.dispersion>0,Y=T.iridescence>0,ve=T.sheen>0,Ee=T.transmission>0,pe=Je&&!!T.anisotropyMap,et=P&&!!T.clearcoatMap,Ne=P&&!!T.clearcoatNormalMap,Ze=P&&!!T.clearcoatRoughnessMap,ct=Y&&!!T.iridescenceMap,Re=Y&&!!T.iridescenceThicknessMap,Ce=ve&&!!T.sheenColorMap,Ve=ve&&!!T.sheenRoughnessMap,He=!!T.specularMap,Le=!!T.specularColorMap,gt=!!T.specularIntensityMap,q=Ee&&!!T.transmissionMap,Pe=Ee&&!!T.thicknessMap,we=!!T.gradientMap,Ge=!!T.alphaMap,Ae=T.alphaTest>0,be=!!T.alphaHash,Ue=!!T.extensions;let ut=sa;T.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ut=a.toneMapping);const Xt={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:ue,fragmentShader:Se,defines:T.defines,customVertexShaderID:Me,customFragmentShaderID:$,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:ze,batchingColor:ze&&ae._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&ae.instanceColor!==null,instancingMorph:Fe&&ae.morphTexture!==null,outputColorSpace:re===null?a.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ar,alphaToCoverage:!!T.alphaToCoverage,map:it,matcap:Ct,envMap:at,envMapMode:at&&I.mapping,envMapCubeUVHeight:V,aoMap:lt,lightMap:Dt,bumpMap:ft,normalMap:$t,displacementMap:X,emissiveMap:rn,normalMapObjectSpace:$t&&T.normalMapType===h1,normalMapTangentSpace:$t&&T.normalMapType===d1,metalnessMap:wt,roughnessMap:Vt,anisotropy:Je,anisotropyMap:pe,clearcoat:P,clearcoatMap:et,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ze,dispersion:E,iridescence:Y,iridescenceMap:ct,iridescenceThicknessMap:Re,sheen:ve,sheenColorMap:Ce,sheenRoughnessMap:Ve,specularMap:He,specularColorMap:Le,specularIntensityMap:gt,transmission:Ee,transmissionMap:q,thicknessMap:Pe,gradientMap:we,opaque:T.transparent===!1&&T.blending===io&&T.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ae,alphaHash:be,combine:T.combine,mapUv:it&&A(T.map.channel),aoMapUv:lt&&A(T.aoMap.channel),lightMapUv:Dt&&A(T.lightMap.channel),bumpMapUv:ft&&A(T.bumpMap.channel),normalMapUv:$t&&A(T.normalMap.channel),displacementMapUv:X&&A(T.displacementMap.channel),emissiveMapUv:rn&&A(T.emissiveMap.channel),metalnessMapUv:wt&&A(T.metalnessMap.channel),roughnessMapUv:Vt&&A(T.roughnessMap.channel),anisotropyMapUv:pe&&A(T.anisotropyMap.channel),clearcoatMapUv:et&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&A(T.sheenRoughnessMap.channel),specularMapUv:He&&A(T.specularMap.channel),specularColorMapUv:Le&&A(T.specularColorMap.channel),specularIntensityMapUv:gt&&A(T.specularIntensityMap.channel),transmissionMapUv:q&&A(T.transmissionMap.channel),thicknessMapUv:Pe&&A(T.thicknessMap.channel),alphaMapUv:Ge&&A(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&($t||Je),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!Q.attributes.uv&&(it||Ge),fog:!!he,useFog:T.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:De,skinning:ae.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:ut,decodeVideoTexture:it&&T.map.isVideoTexture===!0&&Nt.getTransfer(T.map.colorSpace)===jt,decodeVideoTextureEmissive:rn&&T.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(T.emissiveMap.colorSpace)===jt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===li,flipSided:T.side===Nn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function x(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)D.push(k),D.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(w(D,T),U(D,T),D.push(a.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function w(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function U(T,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),T.push(d.mask)}function N(T){const D=M[T.type];let k;if(D){const J=ta[D];k=G1.clone(J.uniforms)}else k=T.uniforms;return k}function B(T,D){let k=g.get(D);return k!==void 0?++k.usedTimes:(k=new zw(a,D,T,c),v.push(k),g.set(D,k)),k}function F(T){if(--T.usedTimes===0){const D=v.indexOf(T);v[D]=v[v.length-1],v.pop(),g.delete(T.cacheKey),T.destroy()}}function z(T){p.remove(T)}function H(){p.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:N,acquireProgram:B,releaseProgram:F,releaseShaderCache:z,programs:v,dispose:H}}function Gw(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,p){a.get(u)[d]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function Vw(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function nx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ix(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(g,_,y,M,A,b){let x=a[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:A,group:b},a[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=A,x.group=b),e++,x}function d(g,_,y,M,A,b){const x=u(g,_,y,M,A,b);y.transmission>0?r.push(x):y.transparent===!0?o.push(x):n.push(x)}function p(g,_,y,M,A,b){const x=u(g,_,y,M,A,b);y.transmission>0?r.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function m(g,_){n.length>1&&n.sort(g||Vw),r.length>1&&r.sort(_||nx),o.length>1&&o.sort(_||nx)}function v(){for(let g=e,_=a.length;g<_;g++){const y=a[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:p,finish:v,sort:m}}function kw(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new ix,a.set(r,[u])):o>=c.length?(u=new ix,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function Xw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Gt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":n={color:new Gt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return a[e.id]=n,n}}}function Ww(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let qw=0;function Yw(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function jw(a){const e=new Xw,n=Ww(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const o=new Z,c=new hn,u=new hn;function d(m){let v=0,g=0,_=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let y=0,M=0,A=0,b=0,x=0,w=0,U=0,N=0,B=0,F=0,z=0;m.sort(Yw);for(let T=0,D=m.length;T<D;T++){const k=m[T],J=k.color,ae=k.intensity,he=k.distance;let Q=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===lo?Q=k.shadow.map.texture:Q=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=J.r*ae,g+=J.g*ae,_+=J.b*ae;else if(k.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(k.sh.coefficients[L],ae);z++}else if(k.isDirectionalLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const I=k.shadow,V=n.get(k);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,r.directionalShadow[y]=V,r.directionalShadowMap[y]=Q,r.directionalShadowMatrix[y]=k.shadow.matrix,w++}r.directional[y]=L,y++}else if(k.isSpotLight){const L=e.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(J).multiplyScalar(ae),L.distance=he,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,r.spot[A]=L;const I=k.shadow;if(k.map&&(r.spotLightMap[B]=k.map,B++,I.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[A]=I.matrix,k.castShadow){const V=n.get(k);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,r.spotShadow[A]=V,r.spotShadowMap[A]=Q,N++}A++}else if(k.isRectAreaLight){const L=e.get(k);L.color.copy(J).multiplyScalar(ae),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),r.rectArea[b]=L,b++}else if(k.isPointLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),L.distance=k.distance,L.decay=k.decay,k.castShadow){const I=k.shadow,V=n.get(k);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,V.shadowCameraNear=I.camera.near,V.shadowCameraFar=I.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=Q,r.pointShadowMatrix[M]=k.shadow.matrix,U++}r.point[M]=L,M++}else if(k.isHemisphereLight){const L=e.get(k);L.skyColor.copy(k.color).multiplyScalar(ae),L.groundColor.copy(k.groundColor).multiplyScalar(ae),r.hemi[x]=L,x++}}b>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=_;const H=r.hash;(H.directionalLength!==y||H.pointLength!==M||H.spotLength!==A||H.rectAreaLength!==b||H.hemiLength!==x||H.numDirectionalShadows!==w||H.numPointShadows!==U||H.numSpotShadows!==N||H.numSpotMaps!==B||H.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=b,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=N+B-F,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=z,H.directionalLength=y,H.pointLength=M,H.spotLength=A,H.rectAreaLength=b,H.hemiLength=x,H.numDirectionalShadows=w,H.numPointShadows=U,H.numSpotShadows=N,H.numSpotMaps=B,H.numLightProbes=z,r.version=qw++)}function p(m,v){let g=0,_=0,y=0,M=0,A=0;const b=v.matrixWorldInverse;for(let x=0,w=m.length;x<w;x++){const U=m[x];if(U.isDirectionalLight){const N=r.directional[g];N.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(b),g++}else if(U.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(b),N.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(b),y++}else if(U.isRectAreaLight){const N=r.rectArea[M];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(b),u.identity(),c.copy(U.matrixWorld),c.premultiply(b),u.extractRotation(c),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const N=r.point[_];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(b),_++}else if(U.isHemisphereLight){const N=r.hemi[A];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(b),A++}}}return{setup:d,setupView:p,state:r}}function ax(a){const e=new jw(a),n=[],r=[];function o(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function Zw(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new ax(a),e.set(o,[d])):c>=u.length?(d=new ax(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const Kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qw=`uniform sampler2D shadow_pass;
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
}`,Jw=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],$w=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],rx=new hn,_l=new Z,Gh=new Z;function e3(a,e,n){let r=new vy;const o=new qe,c=new qe,u=new ln,d=new mA,p=new gA,m={},v=n.maxTextureSize,g={[za]:Nn,[Nn]:za,[li]:li},_=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Kw,fragmentShader:Qw}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new ui;M.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Qn(M,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let x=this.type;this.render=function(F,z,H){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||F.length===0)return;F.type===XT&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Tu);const T=a.getRenderTarget(),D=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),J=a.state;J.setBlending(Jn),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ae=x!==this.type;ae&&z.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(Q=>Q.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,Q=F.length;he<Q;he++){const L=F[he],I=L.shadow;if(I===void 0){ht("WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;o.copy(I.mapSize);const V=I.getFrameExtents();if(o.multiply(V),c.copy(I.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/V.x),o.x=c.x*V.x,I.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/V.y),o.y=c.y*V.y,I.mapSize.y=c.y)),I.map===null||ae===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===xl){if(L.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Mn(o.x,o.y,{format:lo,type:Ba,minFilter:bn,magFilter:bn,generateMipmaps:!1}),I.map.texture.name=L.name+".shadowMap",I.map.depthTexture=new uo(o.x,o.y,ia),I.map.depthTexture.name=L.name+".shadowMapDepth",I.map.depthTexture.format=Ia,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=kn,I.map.depthTexture.magFilter=kn}else{L.isPointLight?(I.map=new gy(o.x),I.map.depthTexture=new J1(o.x,Wi)):(I.map=new Mn(o.x,o.y),I.map.depthTexture=new uo(o.x,o.y,Wi)),I.map.depthTexture.name=L.name+".shadowMap",I.map.depthTexture.format=Ia;const ge=a.state.buffers.depth.getReversed();this.type===Tu?(I.map.depthTexture.compareFunction=ge?am:im,I.map.depthTexture.minFilter=bn,I.map.depthTexture.magFilter=bn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=kn,I.map.depthTexture.magFilter=kn)}I.camera.updateProjectionMatrix()}const xe=I.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<xe;ge++){if(I.map.isWebGLCubeRenderTarget)a.setRenderTarget(I.map,ge),a.clear();else{ge===0&&(a.setRenderTarget(I.map),a.clear());const O=I.getViewport(ge);u.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),J.viewport(u)}if(L.isPointLight){const O=I.camera,ie=I.matrix,ue=L.distance||O.far;ue!==O.far&&(O.far=ue,O.updateProjectionMatrix()),_l.setFromMatrixPosition(L.matrixWorld),O.position.copy(_l),Gh.copy(O.position),Gh.add(Jw[ge]),O.up.copy($w[ge]),O.lookAt(Gh),O.updateMatrixWorld(),ie.makeTranslation(-_l.x,-_l.y,-_l.z),rx.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),I._frustum.setFromProjectionMatrix(rx,O.coordinateSystem,O.reversedDepth)}else I.updateMatrices(L);r=I.getFrustum(),N(z,H,I.camera,L,this.type)}I.isPointLightShadow!==!0&&this.type===xl&&w(I,H),I.needsUpdate=!1}x=this.type,b.needsUpdate=!1,a.setRenderTarget(T,D,k)};function w(F,z){const H=e.update(A);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Mn(o.x,o.y,{format:lo,type:Ba})),_.uniforms.shadow_pass.value=F.map.depthTexture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,a.setRenderTarget(F.mapPass),a.clear(),a.renderBufferDirect(z,null,H,_,A,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,a.setRenderTarget(F.map),a.clear(),a.renderBufferDirect(z,null,H,y,A,null)}function U(F,z,H,T){let D=null;const k=H.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)D=k;else if(D=H.isPointLight===!0?p:d,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const J=D.uuid,ae=z.uuid;let he=m[J];he===void 0&&(he={},m[J]=he);let Q=he[ae];Q===void 0&&(Q=D.clone(),he[ae]=Q,z.addEventListener("dispose",B)),D=Q}if(D.visible=z.visible,D.wireframe=z.wireframe,T===xl?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:g[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,H.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const J=a.properties.get(D);J.light=H}return D}function N(F,z,H,T,D){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&D===xl)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,F.matrixWorld);const ae=e.update(F),he=F.material;if(Array.isArray(he)){const Q=ae.groups;for(let L=0,I=Q.length;L<I;L++){const V=Q[L],xe=he[V.materialIndex];if(xe&&xe.visible){const ge=U(F,xe,T,D);F.onBeforeShadow(a,F,z,H,ae,ge,V),a.renderBufferDirect(H,null,ae,ge,F,V),F.onAfterShadow(a,F,z,H,ae,ge,V)}}}else if(he.visible){const Q=U(F,he,T,D);F.onBeforeShadow(a,F,z,H,ae,Q,null),a.renderBufferDirect(H,null,ae,Q,F,null),F.onAfterShadow(a,F,z,H,ae,Q,null)}}const J=F.children;for(let ae=0,he=J.length;ae<he;ae++)N(J[ae],z,H,T,D)}function B(F){F.target.removeEventListener("dispose",B);for(const H in m){const T=m[H],D=F.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}const t3={[Zh]:Ou,[Kh]:$h,[Qh]:ep,[ro]:Jh,[Ou]:Zh,[$h]:Kh,[ep]:Qh,[Jh]:ro};function n3(a,e){function n(){let q=!1;const Pe=new ln;let we=null;const Ge=new ln(0,0,0,0);return{setMask:function(Ae){we!==Ae&&!q&&(a.colorMask(Ae,Ae,Ae,Ae),we=Ae)},setLocked:function(Ae){q=Ae},setClear:function(Ae,be,Ue,ut,Xt){Xt===!0&&(Ae*=ut,be*=ut,Ue*=ut),Pe.set(Ae,be,Ue,ut),Ge.equals(Pe)===!1&&(a.clearColor(Ae,be,Ue,ut),Ge.copy(Pe))},reset:function(){q=!1,we=null,Ge.set(-1,0,0,0)}}}function r(){let q=!1,Pe=!1,we=null,Ge=null,Ae=null;return{setReversed:function(be){if(Pe!==be){const Ue=e.get("EXT_clip_control");be?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Pe=be;const ut=Ae;Ae=null,this.setClear(ut)}},getReversed:function(){return Pe},setTest:function(be){be?re(a.DEPTH_TEST):De(a.DEPTH_TEST)},setMask:function(be){we!==be&&!q&&(a.depthMask(be),we=be)},setFunc:function(be){if(Pe&&(be=t3[be]),Ge!==be){switch(be){case Zh:a.depthFunc(a.NEVER);break;case Ou:a.depthFunc(a.ALWAYS);break;case Kh:a.depthFunc(a.LESS);break;case ro:a.depthFunc(a.LEQUAL);break;case Qh:a.depthFunc(a.EQUAL);break;case Jh:a.depthFunc(a.GEQUAL);break;case $h:a.depthFunc(a.GREATER);break;case ep:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ge=be}},setLocked:function(be){q=be},setClear:function(be){Ae!==be&&(Pe&&(be=1-be),a.clearDepth(be),Ae=be)},reset:function(){q=!1,we=null,Ge=null,Ae=null,Pe=!1}}}function o(){let q=!1,Pe=null,we=null,Ge=null,Ae=null,be=null,Ue=null,ut=null,Xt=null;return{setTest:function(Ut){q||(Ut?re(a.STENCIL_TEST):De(a.STENCIL_TEST))},setMask:function(Ut){Pe!==Ut&&!q&&(a.stencilMask(Ut),Pe=Ut)},setFunc:function(Ut,Wn,Oi){(we!==Ut||Ge!==Wn||Ae!==Oi)&&(a.stencilFunc(Ut,Wn,Oi),we=Ut,Ge=Wn,Ae=Oi)},setOp:function(Ut,Wn,Oi){(be!==Ut||Ue!==Wn||ut!==Oi)&&(a.stencilOp(Ut,Wn,Oi),be=Ut,Ue=Wn,ut=Oi)},setLocked:function(Ut){q=Ut},setClear:function(Ut){Xt!==Ut&&(a.clearStencil(Ut),Xt=Ut)},reset:function(){q=!1,Pe=null,we=null,Ge=null,Ae=null,be=null,Ue=null,ut=null,Xt=null}}}const c=new n,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let v={},g={},_=new WeakMap,y=[],M=null,A=!1,b=null,x=null,w=null,U=null,N=null,B=null,F=null,z=new Gt(0,0,0),H=0,T=!1,D=null,k=null,J=null,ae=null,he=null;const Q=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,I=0;const V=a.getParameter(a.VERSION);V.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(V)[1]),L=I>=1):V.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),L=I>=2);let xe=null,ge={};const O=a.getParameter(a.SCISSOR_BOX),ie=a.getParameter(a.VIEWPORT),ue=new ln().fromArray(O),Se=new ln().fromArray(ie);function Me(q,Pe,we,Ge){const Ae=new Uint8Array(4),be=a.createTexture();a.bindTexture(q,be),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ue=0;Ue<we;Ue++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Pe,0,a.RGBA,1,1,Ge,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(Pe+Ue,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return be}const $={};$[a.TEXTURE_2D]=Me(a.TEXTURE_2D,a.TEXTURE_2D,1),$[a.TEXTURE_CUBE_MAP]=Me(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[a.TEXTURE_2D_ARRAY]=Me(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),$[a.TEXTURE_3D]=Me(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),re(a.DEPTH_TEST),u.setFunc(ro),ft(!1),$t(c_),re(a.CULL_FACE),lt(Jn);function re(q){v[q]!==!0&&(a.enable(q),v[q]=!0)}function De(q){v[q]!==!1&&(a.disable(q),v[q]=!1)}function Fe(q,Pe){return g[q]!==Pe?(a.bindFramebuffer(q,Pe),g[q]=Pe,q===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Pe),q===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ze(q,Pe){let we=y,Ge=!1;if(q){we=_.get(Pe),we===void 0&&(we=[],_.set(Pe,we));const Ae=q.textures;if(we.length!==Ae.length||we[0]!==a.COLOR_ATTACHMENT0){for(let be=0,Ue=Ae.length;be<Ue;be++)we[be]=a.COLOR_ATTACHMENT0+be;we.length=Ae.length,Ge=!0}}else we[0]!==a.BACK&&(we[0]=a.BACK,Ge=!0);Ge&&a.drawBuffers(we)}function it(q){return M!==q?(a.useProgram(q),M=q,!0):!1}const Ct={[$r]:a.FUNC_ADD,[qT]:a.FUNC_SUBTRACT,[YT]:a.FUNC_REVERSE_SUBTRACT};Ct[jT]=a.MIN,Ct[ZT]=a.MAX;const at={[KT]:a.ZERO,[QT]:a.ONE,[JT]:a.SRC_COLOR,[Yh]:a.SRC_ALPHA,[a1]:a.SRC_ALPHA_SATURATE,[n1]:a.DST_COLOR,[e1]:a.DST_ALPHA,[$T]:a.ONE_MINUS_SRC_COLOR,[jh]:a.ONE_MINUS_SRC_ALPHA,[i1]:a.ONE_MINUS_DST_COLOR,[t1]:a.ONE_MINUS_DST_ALPHA,[r1]:a.CONSTANT_COLOR,[s1]:a.ONE_MINUS_CONSTANT_COLOR,[o1]:a.CONSTANT_ALPHA,[l1]:a.ONE_MINUS_CONSTANT_ALPHA};function lt(q,Pe,we,Ge,Ae,be,Ue,ut,Xt,Ut){if(q===Jn){A===!0&&(De(a.BLEND),A=!1);return}if(A===!1&&(re(a.BLEND),A=!0),q!==WT){if(q!==b||Ut!==T){if((x!==$r||N!==$r)&&(a.blendEquation(a.FUNC_ADD),x=$r,N=$r),Ut)switch(q){case io:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Lu:a.blendFunc(a.ONE,a.ONE);break;case u_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case f_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:zt("WebGLState: Invalid blending: ",q);break}else switch(q){case io:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Lu:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case u_:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case f_:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",q);break}w=null,U=null,B=null,F=null,z.set(0,0,0),H=0,b=q,T=Ut}return}Ae=Ae||Pe,be=be||we,Ue=Ue||Ge,(Pe!==x||Ae!==N)&&(a.blendEquationSeparate(Ct[Pe],Ct[Ae]),x=Pe,N=Ae),(we!==w||Ge!==U||be!==B||Ue!==F)&&(a.blendFuncSeparate(at[we],at[Ge],at[be],at[Ue]),w=we,U=Ge,B=be,F=Ue),(ut.equals(z)===!1||Xt!==H)&&(a.blendColor(ut.r,ut.g,ut.b,Xt),z.copy(ut),H=Xt),b=q,T=!1}function Dt(q,Pe){q.side===li?De(a.CULL_FACE):re(a.CULL_FACE);let we=q.side===Nn;Pe&&(we=!we),ft(we),q.blending===io&&q.transparent===!1?lt(Jn):lt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ge=q.stencilWrite;d.setTest(Ge),Ge&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),rn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?re(a.SAMPLE_ALPHA_TO_COVERAGE):De(a.SAMPLE_ALPHA_TO_COVERAGE)}function ft(q){D!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),D=q)}function $t(q){q!==VT?(re(a.CULL_FACE),q!==k&&(q===c_?a.cullFace(a.BACK):q===kT?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):De(a.CULL_FACE),k=q}function X(q){q!==J&&(L&&a.lineWidth(q),J=q)}function rn(q,Pe,we){q?(re(a.POLYGON_OFFSET_FILL),(ae!==Pe||he!==we)&&(a.polygonOffset(Pe,we),ae=Pe,he=we)):De(a.POLYGON_OFFSET_FILL)}function wt(q){q?re(a.SCISSOR_TEST):De(a.SCISSOR_TEST)}function Vt(q){q===void 0&&(q=a.TEXTURE0+Q-1),xe!==q&&(a.activeTexture(q),xe=q)}function Je(q,Pe,we){we===void 0&&(xe===null?we=a.TEXTURE0+Q-1:we=xe);let Ge=ge[we];Ge===void 0&&(Ge={type:void 0,texture:void 0},ge[we]=Ge),(Ge.type!==q||Ge.texture!==Pe)&&(xe!==we&&(a.activeTexture(we),xe=we),a.bindTexture(q,Pe||$[q]),Ge.type=q,Ge.texture=Pe)}function P(){const q=ge[xe];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{a.compressedTexImage2D(...arguments)}catch(q){zt("WebGLState:",q)}}function Y(){try{a.compressedTexImage3D(...arguments)}catch(q){zt("WebGLState:",q)}}function ve(){try{a.texSubImage2D(...arguments)}catch(q){zt("WebGLState:",q)}}function Ee(){try{a.texSubImage3D(...arguments)}catch(q){zt("WebGLState:",q)}}function pe(){try{a.compressedTexSubImage2D(...arguments)}catch(q){zt("WebGLState:",q)}}function et(){try{a.compressedTexSubImage3D(...arguments)}catch(q){zt("WebGLState:",q)}}function Ne(){try{a.texStorage2D(...arguments)}catch(q){zt("WebGLState:",q)}}function Ze(){try{a.texStorage3D(...arguments)}catch(q){zt("WebGLState:",q)}}function ct(){try{a.texImage2D(...arguments)}catch(q){zt("WebGLState:",q)}}function Re(){try{a.texImage3D(...arguments)}catch(q){zt("WebGLState:",q)}}function Ce(q){ue.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),ue.copy(q))}function Ve(q){Se.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),Se.copy(q))}function He(q,Pe){let we=m.get(Pe);we===void 0&&(we=new WeakMap,m.set(Pe,we));let Ge=we.get(q);Ge===void 0&&(Ge=a.getUniformBlockIndex(Pe,q.name),we.set(q,Ge))}function Le(q,Pe){const Ge=m.get(Pe).get(q);p.get(Pe)!==Ge&&(a.uniformBlockBinding(Pe,Ge,q.__bindingPointIndex),p.set(Pe,Ge))}function gt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},xe=null,ge={},g={},_=new WeakMap,y=[],M=null,A=!1,b=null,x=null,w=null,U=null,N=null,B=null,F=null,z=new Gt(0,0,0),H=0,T=!1,D=null,k=null,J=null,ae=null,he=null,ue.set(0,0,a.canvas.width,a.canvas.height),Se.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:re,disable:De,bindFramebuffer:Fe,drawBuffers:ze,useProgram:it,setBlending:lt,setMaterial:Dt,setFlipSided:ft,setCullFace:$t,setLineWidth:X,setPolygonOffset:rn,setScissorTest:wt,activeTexture:Vt,bindTexture:Je,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:ct,texImage3D:Re,updateUBOMapping:He,uniformBlockBinding:Le,texStorage2D:Ne,texStorage3D:Ze,texSubImage2D:ve,texSubImage3D:Ee,compressedTexSubImage2D:pe,compressedTexSubImage3D:et,scissor:Ce,viewport:Ve,reset:gt}}function i3(a,e,n,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new qe,v=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,E){return y?new OffscreenCanvas(P,E):Bu("canvas")}function A(P,E,Y){let ve=1;const Ee=Je(P);if((Ee.width>Y||Ee.height>Y)&&(ve=Y/Math.max(Ee.width,Ee.height)),ve<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const pe=Math.floor(ve*Ee.width),et=Math.floor(ve*Ee.height);g===void 0&&(g=M(pe,et));const Ne=E?M(pe,et):g;return Ne.width=pe,Ne.height=et,Ne.getContext("2d").drawImage(P,0,0,pe,et),ht("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+pe+"x"+et+")."),Ne}else return"data"in P&&ht("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),P;return P}function b(P){return P.generateMipmaps}function x(P){a.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(P,E,Y,ve,Ee=!1){if(P!==null){if(a[P]!==void 0)return a[P];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=E;if(E===a.RED&&(Y===a.FLOAT&&(pe=a.R32F),Y===a.HALF_FLOAT&&(pe=a.R16F),Y===a.UNSIGNED_BYTE&&(pe=a.R8)),E===a.RED_INTEGER&&(Y===a.UNSIGNED_BYTE&&(pe=a.R8UI),Y===a.UNSIGNED_SHORT&&(pe=a.R16UI),Y===a.UNSIGNED_INT&&(pe=a.R32UI),Y===a.BYTE&&(pe=a.R8I),Y===a.SHORT&&(pe=a.R16I),Y===a.INT&&(pe=a.R32I)),E===a.RG&&(Y===a.FLOAT&&(pe=a.RG32F),Y===a.HALF_FLOAT&&(pe=a.RG16F),Y===a.UNSIGNED_BYTE&&(pe=a.RG8)),E===a.RG_INTEGER&&(Y===a.UNSIGNED_BYTE&&(pe=a.RG8UI),Y===a.UNSIGNED_SHORT&&(pe=a.RG16UI),Y===a.UNSIGNED_INT&&(pe=a.RG32UI),Y===a.BYTE&&(pe=a.RG8I),Y===a.SHORT&&(pe=a.RG16I),Y===a.INT&&(pe=a.RG32I)),E===a.RGB_INTEGER&&(Y===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),Y===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),Y===a.UNSIGNED_INT&&(pe=a.RGB32UI),Y===a.BYTE&&(pe=a.RGB8I),Y===a.SHORT&&(pe=a.RGB16I),Y===a.INT&&(pe=a.RGB32I)),E===a.RGBA_INTEGER&&(Y===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),Y===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),Y===a.UNSIGNED_INT&&(pe=a.RGBA32UI),Y===a.BYTE&&(pe=a.RGBA8I),Y===a.SHORT&&(pe=a.RGBA16I),Y===a.INT&&(pe=a.RGBA32I)),E===a.RGB&&(Y===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),Y===a.UNSIGNED_INT_10F_11F_11F_REV&&(pe=a.R11F_G11F_B10F)),E===a.RGBA){const et=Ee?Pu:Nt.getTransfer(ve);Y===a.FLOAT&&(pe=a.RGBA32F),Y===a.HALF_FLOAT&&(pe=a.RGBA16F),Y===a.UNSIGNED_BYTE&&(pe=et===jt?a.SRGB8_ALPHA8:a.RGBA8),Y===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),Y===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(P,E){let Y;return P?E===null||E===Wi||E===oo?Y=a.DEPTH24_STENCIL8:E===ia?Y=a.DEPTH32F_STENCIL8:E===Al&&(Y=a.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===oo?Y=a.DEPTH_COMPONENT24:E===ia?Y=a.DEPTH_COMPONENT32F:E===Al&&(Y=a.DEPTH_COMPONENT16),Y}function B(P,E){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==kn&&P.minFilter!==bn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function F(P){const E=P.target;E.removeEventListener("dispose",F),H(E),E.isVideoTexture&&v.delete(E)}function z(P){const E=P.target;E.removeEventListener("dispose",z),D(E)}function H(P){const E=r.get(P);if(E.__webglInit===void 0)return;const Y=P.source,ve=_.get(Y);if(ve){const Ee=ve[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&T(P),Object.keys(ve).length===0&&_.delete(Y)}r.remove(P)}function T(P){const E=r.get(P);a.deleteTexture(E.__webglTexture);const Y=P.source,ve=_.get(Y);delete ve[E.__cacheKey],u.memory.textures--}function D(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(E.__webglFramebuffer[ve]))for(let Ee=0;Ee<E.__webglFramebuffer[ve].length;Ee++)a.deleteFramebuffer(E.__webglFramebuffer[ve][Ee]);else a.deleteFramebuffer(E.__webglFramebuffer[ve]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[ve])}else{if(Array.isArray(E.__webglFramebuffer))for(let ve=0;ve<E.__webglFramebuffer.length;ve++)a.deleteFramebuffer(E.__webglFramebuffer[ve]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ve=0;ve<E.__webglColorRenderbuffer.length;ve++)E.__webglColorRenderbuffer[ve]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[ve]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=P.textures;for(let ve=0,Ee=Y.length;ve<Ee;ve++){const pe=r.get(Y[ve]);pe.__webglTexture&&(a.deleteTexture(pe.__webglTexture),u.memory.textures--),r.remove(Y[ve])}r.remove(P)}let k=0;function J(){k=0}function ae(){const P=k;return P>=o.maxTextures&&ht("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),k+=1,P}function he(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Q(P,E){const Y=r.get(P);if(P.isVideoTexture&&wt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){const ve=P.image;if(ve===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{$(Y,P,E);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,Y.__webglTexture,a.TEXTURE0+E)}function L(P,E){const Y=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){$(Y,P,E);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,Y.__webglTexture,a.TEXTURE0+E)}function I(P,E){const Y=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){$(Y,P,E);return}n.bindTexture(a.TEXTURE_3D,Y.__webglTexture,a.TEXTURE0+E)}function V(P,E){const Y=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Y.__version!==P.version){re(Y,P,E);return}n.bindTexture(a.TEXTURE_CUBE_MAP,Y.__webglTexture,a.TEXTURE0+E)}const xe={[ip]:a.REPEAT,[Na]:a.CLAMP_TO_EDGE,[ap]:a.MIRRORED_REPEAT},ge={[kn]:a.NEAREST,[f1]:a.NEAREST_MIPMAP_NEAREST,[$c]:a.NEAREST_MIPMAP_LINEAR,[bn]:a.LINEAR,[lh]:a.LINEAR_MIPMAP_NEAREST,[ts]:a.LINEAR_MIPMAP_LINEAR},O={[p1]:a.NEVER,[x1]:a.ALWAYS,[m1]:a.LESS,[im]:a.LEQUAL,[g1]:a.EQUAL,[am]:a.GEQUAL,[v1]:a.GREATER,[_1]:a.NOTEQUAL};function ie(P,E){if(E.type===ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bn||E.magFilter===lh||E.magFilter===$c||E.magFilter===ts||E.minFilter===bn||E.minFilter===lh||E.minFilter===$c||E.minFilter===ts)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,xe[E.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,xe[E.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,xe[E.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,ge[E.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,ge[E.minFilter]),E.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===kn||E.minFilter!==$c&&E.minFilter!==ts||E.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ue(P,E){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",F));const ve=E.source;let Ee=_.get(ve);Ee===void 0&&(Ee={},_.set(ve,Ee));const pe=he(E);if(pe!==P.__cacheKey){Ee[pe]===void 0&&(Ee[pe]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Y=!0),Ee[pe].usedTimes++;const et=Ee[P.__cacheKey];et!==void 0&&(Ee[P.__cacheKey].usedTimes--,et.usedTimes===0&&T(E)),P.__cacheKey=pe,P.__webglTexture=Ee[pe].texture}return Y}function Se(P,E,Y){return Math.floor(Math.floor(P/Y)/E)}function Me(P,E,Y,ve){const pe=P.updateRanges;if(pe.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,Y,ve,E.data);else{pe.sort((Re,Ce)=>Re.start-Ce.start);let et=0;for(let Re=1;Re<pe.length;Re++){const Ce=pe[et],Ve=pe[Re],He=Ce.start+Ce.count,Le=Se(Ve.start,E.width,4),gt=Se(Ce.start,E.width,4);Ve.start<=He+1&&Le===gt&&Se(Ve.start+Ve.count-1,E.width,4)===Le?Ce.count=Math.max(Ce.count,Ve.start+Ve.count-Ce.start):(++et,pe[et]=Ve)}pe.length=et+1;const Ne=a.getParameter(a.UNPACK_ROW_LENGTH),Ze=a.getParameter(a.UNPACK_SKIP_PIXELS),ct=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Re=0,Ce=pe.length;Re<Ce;Re++){const Ve=pe[Re],He=Math.floor(Ve.start/4),Le=Math.ceil(Ve.count/4),gt=He%E.width,q=Math.floor(He/E.width),Pe=Le,we=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,gt),a.pixelStorei(a.UNPACK_SKIP_ROWS,q),n.texSubImage2D(a.TEXTURE_2D,0,gt,q,Pe,we,Y,ve,E.data)}P.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ne),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ze),a.pixelStorei(a.UNPACK_SKIP_ROWS,ct)}}function $(P,E,Y){let ve=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=a.TEXTURE_3D);const Ee=ue(P,E),pe=E.source;n.bindTexture(ve,P.__webglTexture,a.TEXTURE0+Y);const et=r.get(pe);if(pe.version!==et.__version||Ee===!0){n.activeTexture(a.TEXTURE0+Y);const Ne=Nt.getPrimaries(Nt.workingColorSpace),Ze=E.colorSpace===na?null:Nt.getPrimaries(E.colorSpace),ct=E.colorSpace===na||Ne===Ze?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Re=A(E.image,!1,o.maxTextureSize);Re=Vt(E,Re);const Ce=c.convert(E.format,E.colorSpace),Ve=c.convert(E.type);let He=U(E.internalFormat,Ce,Ve,E.colorSpace,E.isVideoTexture);ie(ve,E);let Le;const gt=E.mipmaps,q=E.isVideoTexture!==!0,Pe=et.__version===void 0||Ee===!0,we=pe.dataReady,Ge=B(E,Re);if(E.isDepthTexture)He=N(E.format===Mr,E.type),Pe&&(q?n.texStorage2D(a.TEXTURE_2D,1,He,Re.width,Re.height):n.texImage2D(a.TEXTURE_2D,0,He,Re.width,Re.height,0,Ce,Ve,null));else if(E.isDataTexture)if(gt.length>0){q&&Pe&&n.texStorage2D(a.TEXTURE_2D,Ge,He,gt[0].width,gt[0].height);for(let Ae=0,be=gt.length;Ae<be;Ae++)Le=gt[Ae],q?we&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Le.width,Le.height,Ce,Ve,Le.data):n.texImage2D(a.TEXTURE_2D,Ae,He,Le.width,Le.height,0,Ce,Ve,Le.data);E.generateMipmaps=!1}else q?(Pe&&n.texStorage2D(a.TEXTURE_2D,Ge,He,Re.width,Re.height),we&&Me(E,Re,Ce,Ve)):n.texImage2D(a.TEXTURE_2D,0,He,Re.width,Re.height,0,Ce,Ve,Re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&Pe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ge,He,gt[0].width,gt[0].height,Re.depth);for(let Ae=0,be=gt.length;Ae<be;Ae++)if(Le=gt[Ae],E.format!==Xi)if(Ce!==null)if(q){if(we)if(E.layerUpdates.size>0){const Ue=z_(Le.width,Le.height,E.format,E.type);for(const ut of E.layerUpdates){const Xt=Le.data.subarray(ut*Ue/Le.data.BYTES_PER_ELEMENT,(ut+1)*Ue/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,ut,Le.width,Le.height,1,Ce,Xt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Le.width,Le.height,Re.depth,Ce,Le.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ae,He,Le.width,Le.height,Re.depth,0,Le.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?we&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Le.width,Le.height,Re.depth,Ce,Ve,Le.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Ae,He,Le.width,Le.height,Re.depth,0,Ce,Ve,Le.data)}else{q&&Pe&&n.texStorage2D(a.TEXTURE_2D,Ge,He,gt[0].width,gt[0].height);for(let Ae=0,be=gt.length;Ae<be;Ae++)Le=gt[Ae],E.format!==Xi?Ce!==null?q?we&&n.compressedTexSubImage2D(a.TEXTURE_2D,Ae,0,0,Le.width,Le.height,Ce,Le.data):n.compressedTexImage2D(a.TEXTURE_2D,Ae,He,Le.width,Le.height,0,Le.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?we&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Le.width,Le.height,Ce,Ve,Le.data):n.texImage2D(a.TEXTURE_2D,Ae,He,Le.width,Le.height,0,Ce,Ve,Le.data)}else if(E.isDataArrayTexture)if(q){if(Pe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ge,He,Re.width,Re.height,Re.depth),we)if(E.layerUpdates.size>0){const Ae=z_(Re.width,Re.height,E.format,E.type);for(const be of E.layerUpdates){const Ue=Re.data.subarray(be*Ae/Re.data.BYTES_PER_ELEMENT,(be+1)*Ae/Re.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,be,Re.width,Re.height,1,Ce,Ve,Ue)}E.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ce,Ve,Re.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,He,Re.width,Re.height,Re.depth,0,Ce,Ve,Re.data);else if(E.isData3DTexture)q?(Pe&&n.texStorage3D(a.TEXTURE_3D,Ge,He,Re.width,Re.height,Re.depth),we&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ce,Ve,Re.data)):n.texImage3D(a.TEXTURE_3D,0,He,Re.width,Re.height,Re.depth,0,Ce,Ve,Re.data);else if(E.isFramebufferTexture){if(Pe)if(q)n.texStorage2D(a.TEXTURE_2D,Ge,He,Re.width,Re.height);else{let Ae=Re.width,be=Re.height;for(let Ue=0;Ue<Ge;Ue++)n.texImage2D(a.TEXTURE_2D,Ue,He,Ae,be,0,Ce,Ve,null),Ae>>=1,be>>=1}}else if(gt.length>0){if(q&&Pe){const Ae=Je(gt[0]);n.texStorage2D(a.TEXTURE_2D,Ge,He,Ae.width,Ae.height)}for(let Ae=0,be=gt.length;Ae<be;Ae++)Le=gt[Ae],q?we&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Ce,Ve,Le):n.texImage2D(a.TEXTURE_2D,Ae,He,Ce,Ve,Le);E.generateMipmaps=!1}else if(q){if(Pe){const Ae=Je(Re);n.texStorage2D(a.TEXTURE_2D,Ge,He,Ae.width,Ae.height)}we&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ce,Ve,Re)}else n.texImage2D(a.TEXTURE_2D,0,He,Ce,Ve,Re);b(E)&&x(ve),et.__version=pe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function re(P,E,Y){if(E.image.length!==6)return;const ve=ue(P,E),Ee=E.source;n.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+Y);const pe=r.get(Ee);if(Ee.version!==pe.__version||ve===!0){n.activeTexture(a.TEXTURE0+Y);const et=Nt.getPrimaries(Nt.workingColorSpace),Ne=E.colorSpace===na?null:Nt.getPrimaries(E.colorSpace),Ze=E.colorSpace===na||et===Ne?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const ct=E.isCompressedTexture||E.image[0].isCompressedTexture,Re=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let be=0;be<6;be++)!ct&&!Re?Ce[be]=A(E.image[be],!0,o.maxCubemapSize):Ce[be]=Re?E.image[be].image:E.image[be],Ce[be]=Vt(E,Ce[be]);const Ve=Ce[0],He=c.convert(E.format,E.colorSpace),Le=c.convert(E.type),gt=U(E.internalFormat,He,Le,E.colorSpace),q=E.isVideoTexture!==!0,Pe=pe.__version===void 0||ve===!0,we=Ee.dataReady;let Ge=B(E,Ve);ie(a.TEXTURE_CUBE_MAP,E);let Ae;if(ct){q&&Pe&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ge,gt,Ve.width,Ve.height);for(let be=0;be<6;be++){Ae=Ce[be].mipmaps;for(let Ue=0;Ue<Ae.length;Ue++){const ut=Ae[Ue];E.format!==Xi?He!==null?q?we&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue,0,0,ut.width,ut.height,He,ut.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue,gt,ut.width,ut.height,0,ut.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?we&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue,0,0,ut.width,ut.height,He,Le,ut.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue,gt,ut.width,ut.height,0,He,Le,ut.data)}}}else{if(Ae=E.mipmaps,q&&Pe){Ae.length>0&&Ge++;const be=Je(Ce[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ge,gt,be.width,be.height)}for(let be=0;be<6;be++)if(Re){q?we&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ce[be].width,Ce[be].height,He,Le,Ce[be].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,gt,Ce[be].width,Ce[be].height,0,He,Le,Ce[be].data);for(let Ue=0;Ue<Ae.length;Ue++){const Xt=Ae[Ue].image[be].image;q?we&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue+1,0,0,Xt.width,Xt.height,He,Le,Xt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue+1,gt,Xt.width,Xt.height,0,He,Le,Xt.data)}}else{q?we&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,He,Le,Ce[be]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,gt,He,Le,Ce[be]);for(let Ue=0;Ue<Ae.length;Ue++){const ut=Ae[Ue];q?we&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue+1,0,0,He,Le,ut.image[be]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue+1,gt,He,Le,ut.image[be])}}}b(E)&&x(a.TEXTURE_CUBE_MAP),pe.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function De(P,E,Y,ve,Ee,pe){const et=c.convert(Y.format,Y.colorSpace),Ne=c.convert(Y.type),Ze=U(Y.internalFormat,et,Ne,Y.colorSpace),ct=r.get(E),Re=r.get(Y);if(Re.__renderTarget=E,!ct.__hasExternalTextures){const Ce=Math.max(1,E.width>>pe),Ve=Math.max(1,E.height>>pe);Ee===a.TEXTURE_3D||Ee===a.TEXTURE_2D_ARRAY?n.texImage3D(Ee,pe,Ze,Ce,Ve,E.depth,0,et,Ne,null):n.texImage2D(Ee,pe,Ze,Ce,Ve,0,et,Ne,null)}n.bindFramebuffer(a.FRAMEBUFFER,P),rn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,Ee,Re.__webglTexture,0,X(E)):(Ee===a.TEXTURE_2D||Ee>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ve,Ee,Re.__webglTexture,pe),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Fe(P,E,Y){if(a.bindRenderbuffer(a.RENDERBUFFER,P),E.depthBuffer){const ve=E.depthTexture,Ee=ve&&ve.isDepthTexture?ve.type:null,pe=N(E.stencilBuffer,Ee),et=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;rn(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(E),pe,E.width,E.height):Y?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(E),pe,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,pe,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,et,a.RENDERBUFFER,P)}else{const ve=E.textures;for(let Ee=0;Ee<ve.length;Ee++){const pe=ve[Ee],et=c.convert(pe.format,pe.colorSpace),Ne=c.convert(pe.type),Ze=U(pe.internalFormat,et,Ne,pe.colorSpace);rn(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(E),Ze,E.width,E.height):Y?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(E),Ze,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Ze,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ze(P,E,Y){const ve=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=r.get(E.depthTexture);if(Ee.__renderTarget=E,(!Ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ve){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),Ee.__webglTexture===void 0){Ee.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,Ee.__webglTexture),ie(a.TEXTURE_CUBE_MAP,E.depthTexture);const ct=c.convert(E.depthTexture.format),Re=c.convert(E.depthTexture.type);let Ce;E.depthTexture.format===Ia?Ce=a.DEPTH_COMPONENT24:E.depthTexture.format===Mr&&(Ce=a.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ce,E.width,E.height,0,ct,Re,null)}}else Q(E.depthTexture,0);const pe=Ee.__webglTexture,et=X(E),Ne=ve?a.TEXTURE_CUBE_MAP_POSITIVE_X+Y:a.TEXTURE_2D,Ze=E.depthTexture.format===Mr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ia)rn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ze,Ne,pe,0,et):a.framebufferTexture2D(a.FRAMEBUFFER,Ze,Ne,pe,0);else if(E.depthTexture.format===Mr)rn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ze,Ne,pe,0,et):a.framebufferTexture2D(a.FRAMEBUFFER,Ze,Ne,pe,0);else throw new Error("Unknown depthTexture format")}function it(P){const E=r.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ve=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ve){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ve.removeEventListener("dispose",Ee)};ve.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=ve}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let ve=0;ve<6;ve++)ze(E.__webglFramebuffer[ve],P,ve);else{const ve=P.texture.mipmaps;ve&&ve.length>0?ze(E.__webglFramebuffer[0],P,0):ze(E.__webglFramebuffer,P,0)}else if(Y){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]===void 0)E.__webglDepthbuffer[ve]=a.createRenderbuffer(),Fe(E.__webglDepthbuffer[ve],P,!1);else{const Ee=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer[ve];a.bindRenderbuffer(a.RENDERBUFFER,pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ee,a.RENDERBUFFER,pe)}}else{const ve=P.texture.mipmaps;if(ve&&ve.length>0?n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Fe(E.__webglDepthbuffer,P,!1);else{const Ee=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ee,a.RENDERBUFFER,pe)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ct(P,E,Y){const ve=r.get(P);E!==void 0&&De(ve.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Y!==void 0&&it(P)}function at(P){const E=P.texture,Y=r.get(P),ve=r.get(E);P.addEventListener("dispose",z);const Ee=P.textures,pe=P.isWebGLCubeRenderTarget===!0,et=Ee.length>1;if(et||(ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture()),ve.__version=E.version,u.memory.textures++),pe){Y.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Ne]=[];for(let Ze=0;Ze<E.mipmaps.length;Ze++)Y.__webglFramebuffer[Ne][Ze]=a.createFramebuffer()}else Y.__webglFramebuffer[Ne]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)Y.__webglFramebuffer[Ne]=a.createFramebuffer()}else Y.__webglFramebuffer=a.createFramebuffer();if(et)for(let Ne=0,Ze=Ee.length;Ne<Ze;Ne++){const ct=r.get(Ee[Ne]);ct.__webglTexture===void 0&&(ct.__webglTexture=a.createTexture(),u.memory.textures++)}if(P.samples>0&&rn(P)===!1){Y.__webglMultisampledFramebuffer=a.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Ee.length;Ne++){const Ze=Ee[Ne];Y.__webglColorRenderbuffer[Ne]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Y.__webglColorRenderbuffer[Ne]);const ct=c.convert(Ze.format,Ze.colorSpace),Re=c.convert(Ze.type),Ce=U(Ze.internalFormat,ct,Re,Ze.colorSpace,P.isXRRenderTarget===!0),Ve=X(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ve,Ce,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,Y.__webglColorRenderbuffer[Ne])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=a.createRenderbuffer(),Fe(Y.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(pe){n.bindTexture(a.TEXTURE_CUBE_MAP,ve.__webglTexture),ie(a.TEXTURE_CUBE_MAP,E);for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ze=0;Ze<E.mipmaps.length;Ze++)De(Y.__webglFramebuffer[Ne][Ze],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ze);else De(Y.__webglFramebuffer[Ne],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);b(E)&&x(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(et){for(let Ne=0,Ze=Ee.length;Ne<Ze;Ne++){const ct=Ee[Ne],Re=r.get(ct);let Ce=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ce,Re.__webglTexture),ie(Ce,ct),De(Y.__webglFramebuffer,P,ct,a.COLOR_ATTACHMENT0+Ne,Ce,0),b(ct)&&x(Ce)}n.unbindTexture()}else{let Ne=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ne=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ne,ve.__webglTexture),ie(Ne,E),E.mipmaps&&E.mipmaps.length>0)for(let Ze=0;Ze<E.mipmaps.length;Ze++)De(Y.__webglFramebuffer[Ze],P,E,a.COLOR_ATTACHMENT0,Ne,Ze);else De(Y.__webglFramebuffer,P,E,a.COLOR_ATTACHMENT0,Ne,0);b(E)&&x(Ne),n.unbindTexture()}P.depthBuffer&&it(P)}function lt(P){const E=P.textures;for(let Y=0,ve=E.length;Y<ve;Y++){const Ee=E[Y];if(b(Ee)){const pe=w(P),et=r.get(Ee).__webglTexture;n.bindTexture(pe,et),x(pe),n.unbindTexture()}}}const Dt=[],ft=[];function $t(P){if(P.samples>0){if(rn(P)===!1){const E=P.textures,Y=P.width,ve=P.height;let Ee=a.COLOR_BUFFER_BIT;const pe=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,et=r.get(P),Ne=E.length>1;if(Ne)for(let ct=0;ct<E.length;ct++)n.bindFramebuffer(a.FRAMEBUFFER,et.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,et.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer);const Ze=P.texture.mipmaps;Ze&&Ze.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,et.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let ct=0;ct<E.length;ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Ee|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Ee|=a.STENCIL_BUFFER_BIT)),Ne){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,et.__webglColorRenderbuffer[ct]);const Re=r.get(E[ct]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Re,0)}a.blitFramebuffer(0,0,Y,ve,0,0,Y,ve,Ee,a.NEAREST),p===!0&&(Dt.length=0,ft.length=0,Dt.push(a.COLOR_ATTACHMENT0+ct),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Dt.push(pe),ft.push(pe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ft)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Dt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ne)for(let ct=0;ct<E.length;ct++){n.bindFramebuffer(a.FRAMEBUFFER,et.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.RENDERBUFFER,et.__webglColorRenderbuffer[ct]);const Re=r.get(E[ct]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,et.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.TEXTURE_2D,Re,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const E=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function X(P){return Math.min(o.maxSamples,P.samples)}function rn(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function wt(P){const E=u.render.frame;v.get(P)!==E&&(v.set(P,E),P.update())}function Vt(P,E){const Y=P.colorSpace,ve=P.format,Ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Ar&&Y!==na&&(Nt.getTransfer(Y)===jt?(ve!==Xi||Ee!==Rn)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",Y)),E}function Je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=ae,this.resetTextureUnits=J,this.setTexture2D=Q,this.setTexture2DArray=L,this.setTexture3D=I,this.setTextureCube=V,this.rebindTextures=Ct,this.setupRenderTarget=at,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=De,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function a3(a,e){function n(r,o=na){let c;const u=Nt.getTransfer(o);if(r===Rn)return a.UNSIGNED_BYTE;if(r===Jp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===$p)return a.UNSIGNED_SHORT_5_5_5_1;if(r===ey)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===ty)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Jx)return a.BYTE;if(r===$x)return a.SHORT;if(r===Al)return a.UNSIGNED_SHORT;if(r===Qp)return a.INT;if(r===Wi)return a.UNSIGNED_INT;if(r===ia)return a.FLOAT;if(r===Ba)return a.HALF_FLOAT;if(r===ny)return a.ALPHA;if(r===iy)return a.RGB;if(r===Xi)return a.RGBA;if(r===Ia)return a.DEPTH_COMPONENT;if(r===Mr)return a.DEPTH_STENCIL;if(r===ay)return a.RED;if(r===em)return a.RED_INTEGER;if(r===lo)return a.RG;if(r===tm)return a.RG_INTEGER;if(r===nm)return a.RGBA_INTEGER;if(r===Au||r===Ru||r===Cu||r===wu)if(u===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ru)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rp||r===sp||r===op||r===lp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===rp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===op)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===cp||r===up)return u===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===fp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===dp)return c.COMPRESSED_R11_EAC;if(r===hp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===pp)return c.COMPRESSED_RG11_EAC;if(r===mp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===gp||r===vp||r===_p||r===xp||r===yp||r===Sp||r===bp||r===Mp||r===Ep||r===Tp||r===Ap||r===Rp||r===Cp||r===wp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_p)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ep)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ap)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dp||r===Up||r===Np)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Dp)return u===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Up)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Np)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lp||r===Op||r===Pp||r===zp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Lp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Op)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===oo?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const r3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s3=`
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

}`;class o3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new _y(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new dn({vertexShader:r3,fragmentShader:s3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qn(new Il(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l3 extends Ga{constructor(e,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",p=1,m=null,v=null,g=null,_=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",b=new o3,x={},w=n.getContextAttributes();let U=null,N=null;const B=[],F=[],z=new qe;let H=null;const T=new yi;T.viewport=new ln;const D=new yi;D.viewport=new ln;const k=[T,D],J=new vA;let ae=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=B[$];return re===void 0&&(re=new Uh,B[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=B[$];return re===void 0&&(re=new Uh,B[$]=re),re.getGripSpace()},this.getHand=function($){let re=B[$];return re===void 0&&(re=new Uh,B[$]=re),re.getHandSpace()};function Q($){const re=F.indexOf($.inputSource);if(re===-1)return;const De=B[re];De!==void 0&&(De.update($.inputSource,$.frame,m||u),De.dispatchEvent({type:$.type,data:$.inputSource}))}function L(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",L),o.removeEventListener("inputsourceschange",I);for(let $=0;$<B.length;$++){const re=F[$];re!==null&&(F[$]=null,B[$].disconnect(re))}ae=null,he=null,b.reset();for(const $ in x)delete x[$];e.setRenderTarget(U),y=null,_=null,g=null,o=null,N=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",L),o.addEventListener("inputsourceschange",I),w.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Fe=null,ze=null;w.depth&&(ze=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,De=w.stencil?Mr:Ia,Fe=w.stencil?oo:Wi);const it={colorFormat:n.RGBA8,depthFormat:ze,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(it),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Mn(_.textureWidth,_.textureHeight,{format:Xi,type:Rn,depthTexture:new uo(_.textureWidth,_.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const De={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,De),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Mn(y.framebufferWidth,y.framebufferHeight,{format:Xi,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),Me.setContext(o),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function I($){for(let re=0;re<$.removed.length;re++){const De=$.removed[re],Fe=F.indexOf(De);Fe>=0&&(F[Fe]=null,B[Fe].disconnect(De))}for(let re=0;re<$.added.length;re++){const De=$.added[re];let Fe=F.indexOf(De);if(Fe===-1){for(let it=0;it<B.length;it++)if(it>=F.length){F.push(De),Fe=it;break}else if(F[it]===null){F[it]=De,Fe=it;break}if(Fe===-1)break}const ze=B[Fe];ze&&ze.connect(De)}}const V=new Z,xe=new Z;function ge($,re,De){V.setFromMatrixPosition(re.matrixWorld),xe.setFromMatrixPosition(De.matrixWorld);const Fe=V.distanceTo(xe),ze=re.projectionMatrix.elements,it=De.projectionMatrix.elements,Ct=ze[14]/(ze[10]-1),at=ze[14]/(ze[10]+1),lt=(ze[9]+1)/ze[5],Dt=(ze[9]-1)/ze[5],ft=(ze[8]-1)/ze[0],$t=(it[8]+1)/it[0],X=Ct*ft,rn=Ct*$t,wt=Fe/(-ft+$t),Vt=wt*-ft;if(re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Vt),$.translateZ(wt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ze[10]===-1)$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Je=Ct+wt,P=at+wt,E=X-Vt,Y=rn+(Fe-Vt),ve=lt*at/P*Je,Ee=Dt*at/P*Je;$.projectionMatrix.makePerspective(E,Y,ve,Ee,Je,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function O($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;let re=$.near,De=$.far;b.texture!==null&&(b.depthNear>0&&(re=b.depthNear),b.depthFar>0&&(De=b.depthFar)),J.near=D.near=T.near=re,J.far=D.far=T.far=De,(ae!==J.near||he!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),ae=J.near,he=J.far),J.layers.mask=$.layers.mask|6,T.layers.mask=J.layers.mask&3,D.layers.mask=J.layers.mask&5;const Fe=$.parent,ze=J.cameras;O(J,Fe);for(let it=0;it<ze.length;it++)O(ze[it],Fe);ze.length===2?ge(J,T,D):J.projectionMatrix.copy(T.projectionMatrix),ie($,J,Fe)};function ie($,re,De){De===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(De.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Bp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function($){p=$,_!==null&&(_.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(J)},this.getCameraTexture=function($){return x[$]};let ue=null;function Se($,re){if(v=re.getViewerPose(m||u),M=re,v!==null){const De=v.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Fe=!1;De.length!==J.cameras.length&&(J.cameras.length=0,Fe=!0);for(let at=0;at<De.length;at++){const lt=De[at];let Dt=null;if(y!==null)Dt=y.getViewport(lt);else{const $t=g.getViewSubImage(_,lt);Dt=$t.viewport,at===0&&(e.setRenderTargetTextures(N,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(N))}let ft=k[at];ft===void 0&&(ft=new yi,ft.layers.enable(at),ft.viewport=new ln,k[at]=ft),ft.matrix.fromArray(lt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(lt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),at===0&&(J.matrix.copy(ft.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Fe===!0&&J.cameras.push(ft)}const ze=o.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const at=g.getDepthInformation(De[0]);at&&at.isValid&&at.texture&&b.init(at,o.renderState)}if(ze&&ze.includes("camera-access")&&A){e.state.unbindTexture(),g=r.getBinding();for(let at=0;at<De.length;at++){const lt=De[at].camera;if(lt){let Dt=x[lt];Dt||(Dt=new _y,x[lt]=Dt);const ft=g.getCameraImage(lt);Dt.sourceTexture=ft}}}}for(let De=0;De<B.length;De++){const Fe=F[De],ze=B[De];Fe!==null&&ze!==void 0&&ze.update(Fe,re,m||u)}ue&&ue($,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),M=null}const Me=new Sy;Me.setAnimationLoop(Se),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}}const Qr=new Fa,c3=new hn;function u3(a,e){function n(b,x){b.matrixAutoUpdate===!0&&b.updateMatrix(),x.value.copy(b.matrix)}function r(b,x){x.color.getRGB(b.fogColor.value,hy(a)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function o(b,x,w,U,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(b,x):x.isMeshToonMaterial?(c(b,x),g(b,x)):x.isMeshPhongMaterial?(c(b,x),v(b,x)):x.isMeshStandardMaterial?(c(b,x),_(b,x),x.isMeshPhysicalMaterial&&y(b,x,N)):x.isMeshMatcapMaterial?(c(b,x),M(b,x)):x.isMeshDepthMaterial?c(b,x):x.isMeshDistanceMaterial?(c(b,x),A(b,x)):x.isMeshNormalMaterial?c(b,x):x.isLineBasicMaterial?(u(b,x),x.isLineDashedMaterial&&d(b,x)):x.isPointsMaterial?p(b,x,w,U):x.isSpriteMaterial?m(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map,n(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.bumpMap&&(b.bumpMap.value=x.bumpMap,n(x.bumpMap,b.bumpMapTransform),b.bumpScale.value=x.bumpScale,x.side===Nn&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,n(x.normalMap,b.normalMapTransform),b.normalScale.value.copy(x.normalScale),x.side===Nn&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,n(x.displacementMap,b.displacementMapTransform),b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,b.emissiveMapTransform)),x.specularMap&&(b.specularMap.value=x.specularMap,n(x.specularMap,b.specularMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);const w=e.get(x),U=w.envMap,N=w.envMapRotation;U&&(b.envMap.value=U,Qr.copy(N),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),b.envMapRotation.value.setFromMatrix4(c3.makeRotationFromEuler(Qr)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,b.lightMapTransform)),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,b.aoMapTransform))}function u(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,x.map&&(b.map.value=x.map,n(x.map,b.mapTransform))}function d(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function p(b,x,w,U){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*w,b.scale.value=U*.5,x.map&&(b.map.value=x.map,n(x.map,b.uvTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function m(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map,n(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function v(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}function g(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}function _(b,x){b.metalness.value=x.metalness,x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,b.metalnessMapTransform)),b.roughness.value=x.roughness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,b.roughnessMapTransform)),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function y(b,x,w){b.ior.value=x.ior,x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,b.sheenColorMapTransform)),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,b.sheenRoughnessMapTransform))),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,b.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(b.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Nn&&b.clearcoatNormalScale.value.negate())),x.dispersion>0&&(b.dispersion.value=x.dispersion),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,b.iridescenceMapTransform)),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=w.texture,b.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,b.transmissionMapTransform)),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(b.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(b.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,b.specularColorMapTransform)),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,b.specularIntensityMapTransform))}function M(b,x){x.matcap&&(b.matcap.value=x.matcap)}function A(b,x){const w=e.get(x).light;b.referencePosition.value.setFromMatrixPosition(w.matrixWorld),b.nearDistance.value=w.shadow.camera.near,b.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function f3(a,e,n,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,U){const N=U.program;r.uniformBlockBinding(w,N)}function m(w,U){let N=o[w.id];N===void 0&&(M(w),N=v(w),o[w.id]=N,w.addEventListener("dispose",b));const B=U.program;r.updateUBOMapping(w,B);const F=e.render.frame;c[w.id]!==F&&(_(w),c[w.id]=F)}function v(w){const U=g();w.__bindingPointIndex=U;const N=a.createBuffer(),B=w.__size,F=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,B,F),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,N),N}function g(){for(let w=0;w<d;w++)if(u.indexOf(w)===-1)return u.push(w),w;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const U=o[w.id],N=w.uniforms,B=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let F=0,z=N.length;F<z;F++){const H=Array.isArray(N[F])?N[F]:[N[F]];for(let T=0,D=H.length;T<D;T++){const k=H[T];if(y(k,F,T,B)===!0){const J=k.__offset,ae=Array.isArray(k.value)?k.value:[k.value];let he=0;for(let Q=0;Q<ae.length;Q++){const L=ae[Q],I=A(L);typeof L=="number"||typeof L=="boolean"?(k.__data[0]=L,a.bufferSubData(a.UNIFORM_BUFFER,J+he,k.__data)):L.isMatrix3?(k.__data[0]=L.elements[0],k.__data[1]=L.elements[1],k.__data[2]=L.elements[2],k.__data[3]=0,k.__data[4]=L.elements[3],k.__data[5]=L.elements[4],k.__data[6]=L.elements[5],k.__data[7]=0,k.__data[8]=L.elements[6],k.__data[9]=L.elements[7],k.__data[10]=L.elements[8],k.__data[11]=0):(L.toArray(k.__data,he),he+=I.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,J,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(w,U,N,B){const F=w.value,z=U+"_"+N;if(B[z]===void 0)return typeof F=="number"||typeof F=="boolean"?B[z]=F:B[z]=F.clone(),!0;{const H=B[z];if(typeof F=="number"||typeof F=="boolean"){if(H!==F)return B[z]=F,!0}else if(H.equals(F)===!1)return H.copy(F),!0}return!1}function M(w){const U=w.uniforms;let N=0;const B=16;for(let z=0,H=U.length;z<H;z++){const T=Array.isArray(U[z])?U[z]:[U[z]];for(let D=0,k=T.length;D<k;D++){const J=T[D],ae=Array.isArray(J.value)?J.value:[J.value];for(let he=0,Q=ae.length;he<Q;he++){const L=ae[he],I=A(L),V=N%B,xe=V%I.boundary,ge=V+xe;N+=xe,ge!==0&&B-ge<I.storage&&(N+=B-ge),J.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=I.storage}}}const F=N%B;return F>0&&(N+=B-F),w.__size=N,w.__cache={},this}function A(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ht("WebGLRenderer: Unsupported uniform value type.",w),U}function b(w){const U=w.target;U.removeEventListener("dispose",b);const N=u.indexOf(U.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function x(){for(const w in o)a.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:p,update:m,dispose:x}}const d3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function h3(){return ea===null&&(ea=new q1(d3,16,16,lo,Ba),ea.name="DFG_LUT",ea.minFilter=bn,ea.magFilter=bn,ea.wrapS=Na,ea.wrapT=Na,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class p3{constructor(e={}){const{canvas:n=y1(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:y=Rn}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=y,b=new Set([nm,tm,em]),x=new Set([Rn,Wi,Al,oo,Jp,$p]),w=new Uint32Array(4),U=new Int32Array(4);let N=null,B=null;const F=[],z=[];let H=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=Jt;let k=0,J=0,ae=null,he=-1,Q=null;const L=new ln,I=new ln;let V=null;const xe=new Gt(0);let ge=0,O=n.width,ie=n.height,ue=1,Se=null,Me=null;const $=new ln(0,0,O,ie),re=new ln(0,0,O,ie);let De=!1;const Fe=new vy;let ze=!1,it=!1;const Ct=new hn,at=new Z,lt=new ln,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function $t(){return ae===null?ue:1}let X=r;function rn(C,j){return n.getContext(C,j)}try{const C={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nl}`),n.addEventListener("webglcontextlost",ut,!1),n.addEventListener("webglcontextrestored",Xt,!1),n.addEventListener("webglcontextcreationerror",Ut,!1),X===null){const j="webgl2";if(X=rn(j,C),X===null)throw rn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw zt("WebGLRenderer: "+C.message),C}let wt,Vt,Je,P,E,Y,ve,Ee,pe,et,Ne,Ze,ct,Re,Ce,Ve,He,Le,gt,q,Pe,we,Ge,Ae;function be(){wt=new hC(X),wt.init(),we=new a3(X,wt),Vt=new aC(X,wt,e,we),Je=new n3(X,wt),Vt.reversedDepthBuffer&&_&&Je.buffers.depth.setReversed(!0),P=new gC(X),E=new Gw,Y=new i3(X,wt,Je,E,Vt,we,P),ve=new sC(T),Ee=new dC(T),pe=new yA(X),Ge=new nC(X,pe),et=new pC(X,pe,P,Ge),Ne=new _C(X,et,pe,P),gt=new vC(X,Vt,Y),Ve=new rC(E),Ze=new Hw(T,ve,Ee,wt,Vt,Ge,Ve),ct=new u3(T,E),Re=new kw,Ce=new Zw(wt),Le=new tC(T,ve,Ee,Je,Ne,M,p),He=new e3(T,Ne,Vt),Ae=new f3(X,P,Vt,Je),q=new iC(X,wt,P),Pe=new mC(X,wt,P),P.programs=Ze.programs,T.capabilities=Vt,T.extensions=wt,T.properties=E,T.renderLists=Re,T.shadowMap=He,T.state=Je,T.info=P}be(),A!==Rn&&(H=new yC(A,n.width,n.height,o,c));const Ue=new l3(T,X);this.xr=Ue,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=wt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=wt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(C){C!==void 0&&(ue=C,this.setSize(O,ie,!1))},this.getSize=function(C){return C.set(O,ie)},this.setSize=function(C,j,fe=!0){if(Ue.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,ie=j,n.width=Math.floor(C*ue),n.height=Math.floor(j*ue),fe===!0&&(n.style.width=C+"px",n.style.height=j+"px"),H!==null&&H.setSize(n.width,n.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(O*ue,ie*ue).floor()},this.setDrawingBufferSize=function(C,j,fe){O=C,ie=j,ue=fe,n.width=Math.floor(C*fe),n.height=Math.floor(j*fe),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(A===Rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,j,fe,le){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,j,fe,le),Je.viewport(L.copy($).multiplyScalar(ue).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,j,fe,le){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,j,fe,le),Je.scissor(I.copy(re).multiplyScalar(ue).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){Je.setScissorTest(De=C)},this.setOpaqueSort=function(C){Se=C},this.setTransparentSort=function(C){Me=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,fe=!0){let le=0;if(C){let te=!1;if(ae!==null){const Oe=ae.texture.format;te=b.has(Oe)}if(te){const Oe=ae.texture.type,ke=x.has(Oe),Be=Le.getClearColor(),Xe=Le.getClearAlpha(),Ke=Be.r,rt=Be.g,Qe=Be.b;ke?(w[0]=Ke,w[1]=rt,w[2]=Qe,w[3]=Xe,X.clearBufferuiv(X.COLOR,0,w)):(U[0]=Ke,U[1]=rt,U[2]=Qe,U[3]=Xe,X.clearBufferiv(X.COLOR,0,U))}else le|=X.COLOR_BUFFER_BIT}j&&(le|=X.DEPTH_BUFFER_BIT),fe&&(le|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",Xt,!1),n.removeEventListener("webglcontextcreationerror",Ut,!1),Le.dispose(),Re.dispose(),Ce.dispose(),E.dispose(),ve.dispose(),Ee.dispose(),Ne.dispose(),Ge.dispose(),Ae.dispose(),Ze.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",os),Ue.removeEventListener("sessionend",_o),ji.stop()};function ut(C){C.preventDefault(),g_("WebGLRenderer: Context Lost."),D=!0}function Xt(){g_("WebGLRenderer: Context Restored."),D=!1;const C=P.autoReset,j=He.enabled,fe=He.autoUpdate,le=He.needsUpdate,te=He.type;be(),P.autoReset=C,He.enabled=j,He.autoUpdate=fe,He.needsUpdate=le,He.type=te}function Ut(C){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Wn(C){const j=C.target;j.removeEventListener("dispose",Wn),Oi(j)}function Oi(C){Fl(C),E.remove(C)}function Fl(C){const j=E.get(C).programs;j!==void 0&&(j.forEach(function(fe){Ze.releaseProgram(fe)}),C.isShaderMaterial&&Ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,fe,le,te,Oe){j===null&&(j=Dt);const ke=te.isMesh&&te.matrixWorld.determinant()<0,Be=Rr(C,j,fe,le,te);Je.setMaterial(le,ke);let Xe=fe.index,Ke=1;if(le.wireframe===!0){if(Xe=et.getWireframeAttribute(fe),Xe===void 0)return;Ke=2}const rt=fe.drawRange,Qe=fe.attributes.position;let st=rt.start*Ke,It=(rt.start+rt.count)*Ke;Oe!==null&&(st=Math.max(st,Oe.start*Ke),It=Math.min(It,(Oe.start+Oe.count)*Ke)),Xe!==null?(st=Math.max(st,0),It=Math.min(It,Xe.count)):Qe!=null&&(st=Math.max(st,0),It=Math.min(It,Qe.count));const sn=It-st;if(sn<0||sn===1/0)return;Ge.setup(te,le,Be,fe,Xe);let tn,kt=q;if(Xe!==null&&(tn=pe.get(Xe),kt=Pe,kt.setIndex(tn)),te.isMesh)le.wireframe===!0?(Je.setLineWidth(le.wireframeLinewidth*$t()),kt.setMode(X.LINES)):kt.setMode(X.TRIANGLES);else if(te.isLine){let tt=le.linewidth;tt===void 0&&(tt=1),Je.setLineWidth(tt*$t()),te.isLineSegments?kt.setMode(X.LINES):te.isLineLoop?kt.setMode(X.LINE_LOOP):kt.setMode(X.LINE_STRIP)}else te.isPoints?kt.setMode(X.POINTS):te.isSprite&&kt.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Rl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),kt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))kt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const tt=te._multiDrawStarts,Ft=te._multiDrawCounts,dt=te._multiDrawCount,On=Xe?pe.get(Xe).bytesPerElement:1,oa=E.get(le).currentProgram.getUniforms();for(let Pn=0;Pn<dt;Pn++)oa.setValue(X,"_gl_DrawID",Pn),kt.render(tt[Pn]/On,Ft[Pn])}else if(te.isInstancedMesh)kt.renderInstances(st,sn,te.count);else if(fe.isInstancedBufferGeometry){const tt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ft=Math.min(fe.instanceCount,tt);kt.renderInstances(st,sn,Ft)}else kt.render(st,sn)};function go(C,j,fe){C.transparent===!0&&C.side===li&&C.forceSinglePass===!1?(C.side=Nn,C.needsUpdate=!0,cs(C,j,fe),C.side=za,C.needsUpdate=!0,cs(C,j,fe),C.side=li):cs(C,j,fe)}this.compile=function(C,j,fe=null){fe===null&&(fe=C),B=Ce.get(fe),B.init(j),z.push(B),fe.traverseVisible(function(te){te.isLight&&te.layers.test(j.layers)&&(B.pushLight(te),te.castShadow&&B.pushShadow(te))}),C!==fe&&C.traverseVisible(function(te){te.isLight&&te.layers.test(j.layers)&&(B.pushLight(te),te.castShadow&&B.pushShadow(te))}),B.setupLights();const le=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Oe=te.material;if(Oe)if(Array.isArray(Oe))for(let ke=0;ke<Oe.length;ke++){const Be=Oe[ke];go(Be,fe,te),le.add(Be)}else go(Oe,fe,te),le.add(Oe)}),B=z.pop(),le},this.compileAsync=function(C,j,fe=null){const le=this.compile(C,j,fe);return new Promise(te=>{function Oe(){if(le.forEach(function(ke){E.get(ke).currentProgram.isReady()&&le.delete(ke)}),le.size===0){te(C);return}setTimeout(Oe,10)}wt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let ss=null;function vo(C){ss&&ss(C)}function os(){ji.stop()}function _o(){ji.start()}const ji=new Sy;ji.setAnimationLoop(vo),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(C){ss=C,Ue.setAnimationLoop(C),C===null?ji.stop():ji.start()},Ue.addEventListener("sessionstart",os),Ue.addEventListener("sessionend",_o),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const fe=Ue.enabled===!0&&Ue.isPresenting===!0,le=H!==null&&(ae===null||fe)&&H.begin(T,ae);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(j),j=Ue.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,j,ae),B=Ce.get(C,z.length),B.init(j),z.push(B),Ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Fe.setFromProjectionMatrix(Ct,aa,j.reversedDepth),it=this.localClippingEnabled,ze=Ve.init(this.clippingPlanes,it),N=Re.get(C,F.length),N.init(),F.push(N),Ue.enabled===!0&&Ue.isPresenting===!0){const ke=T.xr.getDepthSensingMesh();ke!==null&&Si(ke,j,-1/0,T.sortObjects)}Si(C,j,0,T.sortObjects),N.finish(),T.sortObjects===!0&&N.sort(Se,Me),ft=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,ft&&Le.addToRenderList(N,C),this.info.render.frame++,ze===!0&&Ve.beginShadows();const te=B.state.shadowsArray;if(He.render(te,C,j),ze===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&H.hasRenderPass())===!1){const ke=N.opaque,Be=N.transmissive;if(B.setupLights(),j.isArrayCamera){const Xe=j.cameras;if(Be.length>0)for(let Ke=0,rt=Xe.length;Ke<rt;Ke++){const Qe=Xe[Ke];Ln(ke,Be,C,Qe)}ft&&Le.render(C);for(let Ke=0,rt=Xe.length;Ke<rt;Ke++){const Qe=Xe[Ke];gn(N,C,Qe,Qe.viewport)}}else Be.length>0&&Ln(ke,Be,C,j),ft&&Le.render(C),gn(N,C,j)}ae!==null&&J===0&&(Y.updateMultisampleRenderTarget(ae),Y.updateRenderTargetMipmap(ae)),le&&H.end(T),C.isScene===!0&&C.onAfterRender(T,C,j),Ge.resetDefaultState(),he=-1,Q=null,z.pop(),z.length>0?(B=z[z.length-1],ze===!0&&Ve.setGlobalState(T.clippingPlanes,B.state.camera)):B=null,F.pop(),F.length>0?N=F[F.length-1]:N=null};function Si(C,j,fe,le){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)B.pushLight(C),C.castShadow&&B.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Fe.intersectsSprite(C)){le&&lt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const ke=Ne.update(C),Be=C.material;Be.visible&&N.push(C,ke,Be,fe,lt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Fe.intersectsObject(C))){const ke=Ne.update(C),Be=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),lt.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),lt.copy(ke.boundingSphere.center)),lt.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Be)){const Xe=ke.groups;for(let Ke=0,rt=Xe.length;Ke<rt;Ke++){const Qe=Xe[Ke],st=Be[Qe.materialIndex];st&&st.visible&&N.push(C,ke,st,fe,lt.z,Qe)}}else Be.visible&&N.push(C,ke,Be,fe,lt.z,null)}}const Oe=C.children;for(let ke=0,Be=Oe.length;ke<Be;ke++)Si(Oe[ke],j,fe,le)}function gn(C,j,fe,le){const{opaque:te,transmissive:Oe,transparent:ke}=C;B.setupLightsView(fe),ze===!0&&Ve.setGlobalState(T.clippingPlanes,fe),le&&Je.viewport(L.copy(le)),te.length>0&&Pi(te,j,fe),Oe.length>0&&Pi(Oe,j,fe),ke.length>0&&Pi(ke,j,fe),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function Ln(C,j,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[le.id]===void 0){const st=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[le.id]=new Mn(1,1,{generateMipmaps:!0,type:st?Ba:Rn,minFilter:ts,samples:Vt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Oe=B.state.transmissionRenderTarget[le.id],ke=le.viewport||L;Oe.setSize(ke.z*T.transmissionResolutionScale,ke.w*T.transmissionResolutionScale);const Be=T.getRenderTarget(),Xe=T.getActiveCubeFace(),Ke=T.getActiveMipmapLevel();T.setRenderTarget(Oe),T.getClearColor(xe),ge=T.getClearAlpha(),ge<1&&T.setClearColor(16777215,.5),T.clear(),ft&&Le.render(fe);const rt=T.toneMapping;T.toneMapping=sa;const Qe=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),B.setupLightsView(le),ze===!0&&Ve.setGlobalState(T.clippingPlanes,le),Pi(C,fe,le),Y.updateMultisampleRenderTarget(Oe),Y.updateRenderTargetMipmap(Oe),wt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let It=0,sn=j.length;It<sn;It++){const tn=j[It],{object:kt,geometry:tt,material:Ft,group:dt}=tn;if(Ft.side===li&&kt.layers.test(le.layers)){const On=Ft.side;Ft.side=Nn,Ft.needsUpdate=!0,ls(kt,fe,le,tt,Ft,dt),Ft.side=On,Ft.needsUpdate=!0,st=!0}}st===!0&&(Y.updateMultisampleRenderTarget(Oe),Y.updateRenderTargetMipmap(Oe))}T.setRenderTarget(Be,Xe,Ke),T.setClearColor(xe,ge),Qe!==void 0&&(le.viewport=Qe),T.toneMapping=rt}function Pi(C,j,fe){const le=j.isScene===!0?j.overrideMaterial:null;for(let te=0,Oe=C.length;te<Oe;te++){const ke=C[te],{object:Be,geometry:Xe,group:Ke}=ke;let rt=ke.material;rt.allowOverride===!0&&le!==null&&(rt=le),Be.layers.test(fe.layers)&&ls(Be,j,fe,Xe,rt,Ke)}}function ls(C,j,fe,le,te,Oe){C.onBeforeRender(T,j,fe,le,te,Oe),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(T,j,fe,le,C,Oe),te.transparent===!0&&te.side===li&&te.forceSinglePass===!1?(te.side=Nn,te.needsUpdate=!0,T.renderBufferDirect(fe,j,le,te,C,Oe),te.side=za,te.needsUpdate=!0,T.renderBufferDirect(fe,j,le,te,C,Oe),te.side=li):T.renderBufferDirect(fe,j,le,te,C,Oe),C.onAfterRender(T,j,fe,le,te,Oe)}function cs(C,j,fe){j.isScene!==!0&&(j=Dt);const le=E.get(C),te=B.state.lights,Oe=B.state.shadowsArray,ke=te.state.version,Be=Ze.getParameters(C,te.state,Oe,j,fe),Xe=Ze.getProgramCacheKey(Be);let Ke=le.programs;le.environment=C.isMeshStandardMaterial?j.environment:null,le.fog=j.fog,le.envMap=(C.isMeshStandardMaterial?Ee:ve).get(C.envMap||le.environment),le.envMapRotation=le.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",Wn),Ke=new Map,le.programs=Ke);let rt=Ke.get(Xe);if(rt!==void 0){if(le.currentProgram===rt&&le.lightsStateVersion===ke)return xo(C,Be),rt}else Be.uniforms=Ze.getUniforms(C),C.onBeforeCompile(Be,T),rt=Ze.acquireProgram(Be,Xe),Ke.set(Xe,rt),le.uniforms=Be.uniforms;const Qe=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Ve.uniform),xo(C,Be),le.needsLights=ka(C),le.lightsStateVersion=ke,le.needsLights&&(Qe.ambientLightColor.value=te.state.ambient,Qe.lightProbe.value=te.state.probe,Qe.directionalLights.value=te.state.directional,Qe.directionalLightShadows.value=te.state.directionalShadow,Qe.spotLights.value=te.state.spot,Qe.spotLightShadows.value=te.state.spotShadow,Qe.rectAreaLights.value=te.state.rectArea,Qe.ltc_1.value=te.state.rectAreaLTC1,Qe.ltc_2.value=te.state.rectAreaLTC2,Qe.pointLights.value=te.state.point,Qe.pointLightShadows.value=te.state.pointShadow,Qe.hemisphereLights.value=te.state.hemi,Qe.directionalShadowMap.value=te.state.directionalShadowMap,Qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Qe.spotShadowMap.value=te.state.spotShadowMap,Qe.spotLightMatrix.value=te.state.spotLightMatrix,Qe.spotLightMap.value=te.state.spotLightMap,Qe.pointShadowMap.value=te.state.pointShadowMap,Qe.pointShadowMatrix.value=te.state.pointShadowMatrix),le.currentProgram=rt,le.uniformsList=null,rt}function Hl(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Du.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function xo(C,j){const fe=E.get(C);fe.outputColorSpace=j.outputColorSpace,fe.batching=j.batching,fe.batchingColor=j.batchingColor,fe.instancing=j.instancing,fe.instancingColor=j.instancingColor,fe.instancingMorph=j.instancingMorph,fe.skinning=j.skinning,fe.morphTargets=j.morphTargets,fe.morphNormals=j.morphNormals,fe.morphColors=j.morphColors,fe.morphTargetsCount=j.morphTargetsCount,fe.numClippingPlanes=j.numClippingPlanes,fe.numIntersection=j.numClipIntersection,fe.vertexAlphas=j.vertexAlphas,fe.vertexTangents=j.vertexTangents,fe.toneMapping=j.toneMapping}function Rr(C,j,fe,le,te){j.isScene!==!0&&(j=Dt),Y.resetTextureUnits();const Oe=j.fog,ke=le.isMeshStandardMaterial?j.environment:null,Be=ae===null?T.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ar,Xe=(le.isMeshStandardMaterial?Ee:ve).get(le.envMap||ke),Ke=le.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,rt=!!fe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Qe=!!fe.morphAttributes.position,st=!!fe.morphAttributes.normal,It=!!fe.morphAttributes.color;let sn=sa;le.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(sn=T.toneMapping);const tn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,kt=tn!==void 0?tn.length:0,tt=E.get(le),Ft=B.state.lights;if(ze===!0&&(it===!0||C!==Q)){const Bn=C===Q&&le.id===he;Ve.setState(le,C,Bn)}let dt=!1;le.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Ft.state.version||tt.outputColorSpace!==Be||te.isBatchedMesh&&tt.batching===!1||!te.isBatchedMesh&&tt.batching===!0||te.isBatchedMesh&&tt.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&tt.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&tt.instancing===!1||!te.isInstancedMesh&&tt.instancing===!0||te.isSkinnedMesh&&tt.skinning===!1||!te.isSkinnedMesh&&tt.skinning===!0||te.isInstancedMesh&&tt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&tt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&tt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&tt.instancingMorph===!1&&te.morphTexture!==null||tt.envMap!==Xe||le.fog===!0&&tt.fog!==Oe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ve.numPlanes||tt.numIntersection!==Ve.numIntersection)||tt.vertexAlphas!==Ke||tt.vertexTangents!==rt||tt.morphTargets!==Qe||tt.morphNormals!==st||tt.morphColors!==It||tt.toneMapping!==sn||tt.morphTargetsCount!==kt)&&(dt=!0):(dt=!0,tt.__version=le.version);let On=tt.currentProgram;dt===!0&&(On=cs(le,j,te));let oa=!1,Pn=!1,bi=!1;const Wt=On.getUniforms(),zn=tt.uniforms;if(Je.useProgram(On.program)&&(oa=!0,Pn=!0,bi=!0),le.id!==he&&(he=le.id,Pn=!0),oa||Q!==C){Je.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Wt.setValue(X,"projectionMatrix",C.projectionMatrix),Wt.setValue(X,"viewMatrix",C.matrixWorldInverse);const In=Wt.map.cameraPosition;In!==void 0&&In.setValue(X,at.setFromMatrixPosition(C.matrixWorld)),Vt.logarithmicDepthBuffer&&Wt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Wt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),Q!==C&&(Q=C,Pn=!0,bi=!0)}if(tt.needsLights&&(Ft.state.directionalShadowMap.length>0&&Wt.setValue(X,"directionalShadowMap",Ft.state.directionalShadowMap,Y),Ft.state.spotShadowMap.length>0&&Wt.setValue(X,"spotShadowMap",Ft.state.spotShadowMap,Y),Ft.state.pointShadowMap.length>0&&Wt.setValue(X,"pointShadowMap",Ft.state.pointShadowMap,Y)),te.isSkinnedMesh){Wt.setOptional(X,te,"bindMatrix"),Wt.setOptional(X,te,"bindMatrixInverse");const Bn=te.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Wt.setValue(X,"boneTexture",Bn.boneTexture,Y))}te.isBatchedMesh&&(Wt.setOptional(X,te,"batchingTexture"),Wt.setValue(X,"batchingTexture",te._matricesTexture,Y),Wt.setOptional(X,te,"batchingIdTexture"),Wt.setValue(X,"batchingIdTexture",te._indirectTexture,Y),Wt.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Wt.setValue(X,"batchingColorTexture",te._colorsTexture,Y));const En=fe.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&gt.update(te,fe,On),(Pn||tt.receiveShadow!==te.receiveShadow)&&(tt.receiveShadow=te.receiveShadow,Wt.setValue(X,"receiveShadow",te.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(zn.envMap.value=Xe,zn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&j.environment!==null&&(zn.envMapIntensity.value=j.environmentIntensity),zn.dfgLUT!==void 0&&(zn.dfgLUT.value=h3()),Pn&&(Wt.setValue(X,"toneMappingExposure",T.toneMappingExposure),tt.needsLights&&yo(zn,bi),Oe&&le.fog===!0&&ct.refreshFogUniforms(zn,Oe),ct.refreshMaterialUniforms(zn,le,ue,ie,B.state.transmissionRenderTarget[C.id]),Du.upload(X,Hl(tt),zn,Y)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Du.upload(X,Hl(tt),zn,Y),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Wt.setValue(X,"center",te.center),Wt.setValue(X,"modelViewMatrix",te.modelViewMatrix),Wt.setValue(X,"normalMatrix",te.normalMatrix),Wt.setValue(X,"modelMatrix",te.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Bn=le.uniformsGroups;for(let In=0,us=Bn.length;In<us;In++){const zi=Bn[In];Ae.update(zi,On),Ae.bind(zi,On)}}return On}function yo(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function ka(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(C,j,fe){const le=E.get(C);le.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=j,E.get(C.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:fe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const fe=E.get(C);fe.__webglFramebuffer=j,fe.__useDefaultFramebuffer=j===void 0};const Xa=X.createFramebuffer();this.setRenderTarget=function(C,j=0,fe=0){ae=C,k=j,J=fe;let le=null,te=!1,Oe=!1;if(C){const Be=E.get(C);if(Be.__useDefaultFramebuffer!==void 0){Je.bindFramebuffer(X.FRAMEBUFFER,Be.__webglFramebuffer),L.copy(C.viewport),I.copy(C.scissor),V=C.scissorTest,Je.viewport(L),Je.scissor(I),Je.setScissorTest(V),he=-1;return}else if(Be.__webglFramebuffer===void 0)Y.setupRenderTarget(C);else if(Be.__hasExternalTextures)Y.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const rt=C.depthTexture;if(Be.__boundDepthTexture!==rt){if(rt!==null&&E.has(rt)&&(C.width!==rt.image.width||C.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const Ke=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ke[j])?le=Ke[j][fe]:le=Ke[j],te=!0):C.samples>0&&Y.useMultisampledRTT(C)===!1?le=E.get(C).__webglMultisampledFramebuffer:Array.isArray(Ke)?le=Ke[fe]:le=Ke,L.copy(C.viewport),I.copy(C.scissor),V=C.scissorTest}else L.copy($).multiplyScalar(ue).floor(),I.copy(re).multiplyScalar(ue).floor(),V=De;if(fe!==0&&(le=Xa),Je.bindFramebuffer(X.FRAMEBUFFER,le)&&Je.drawBuffers(C,le),Je.viewport(L),Je.scissor(I),Je.setScissorTest(V),te){const Be=E.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,Be.__webglTexture,fe)}else if(Oe){const Be=j;for(let Xe=0;Xe<C.textures.length;Xe++){const Ke=E.get(C.textures[Xe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xe,Ke.__webglTexture,fe,Be)}}else if(C!==null&&fe!==0){const Be=E.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Be.__webglTexture,fe)}he=-1},this.readRenderTargetPixels=function(C,j,fe,le,te,Oe,ke,Be=0){if(!(C&&C.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){Je.bindFramebuffer(X.FRAMEBUFFER,Xe);try{const Ke=C.textures[Be],rt=Ke.format,Qe=Ke.type;if(!Vt.textureFormatReadable(rt)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Qe)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-le&&fe>=0&&fe<=C.height-te&&(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Be),X.readPixels(j,fe,le,te,we.convert(rt),we.convert(Qe),Oe))}finally{const Ke=ae!==null?E.get(ae).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(C,j,fe,le,te,Oe,ke,Be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe)if(j>=0&&j<=C.width-le&&fe>=0&&fe<=C.height-te){Je.bindFramebuffer(X.FRAMEBUFFER,Xe);const Ke=C.textures[Be],rt=Ke.format,Qe=Ke.type;if(!Vt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,st),X.bufferData(X.PIXEL_PACK_BUFFER,Oe.byteLength,X.STREAM_READ),C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Be),X.readPixels(j,fe,le,te,we.convert(rt),we.convert(Qe),0);const It=ae!==null?E.get(ae).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,It);const sn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await S1(X,sn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,st),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Oe),X.deleteBuffer(st),X.deleteSync(sn),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,fe=0){const le=Math.pow(2,-fe),te=Math.floor(C.image.width*le),Oe=Math.floor(C.image.height*le),ke=j!==null?j.x:0,Be=j!==null?j.y:0;Y.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,fe,0,0,ke,Be,te,Oe),Je.unbindTexture()};const Cr=X.createFramebuffer(),Wa=X.createFramebuffer();this.copyTextureToTexture=function(C,j,fe=null,le=null,te=0,Oe=null){Oe===null&&(te!==0?(Rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=te,te=0):Oe=0);let ke,Be,Xe,Ke,rt,Qe,st,It,sn;const tn=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(fe!==null)ke=fe.max.x-fe.min.x,Be=fe.max.y-fe.min.y,Xe=fe.isBox3?fe.max.z-fe.min.z:1,Ke=fe.min.x,rt=fe.min.y,Qe=fe.isBox3?fe.min.z:0;else{const En=Math.pow(2,-te);ke=Math.floor(tn.width*En),Be=Math.floor(tn.height*En),C.isDataArrayTexture?Xe=tn.depth:C.isData3DTexture?Xe=Math.floor(tn.depth*En):Xe=1,Ke=0,rt=0,Qe=0}le!==null?(st=le.x,It=le.y,sn=le.z):(st=0,It=0,sn=0);const kt=we.convert(j.format),tt=we.convert(j.type);let Ft;j.isData3DTexture?(Y.setTexture3D(j,0),Ft=X.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Y.setTexture2DArray(j,0),Ft=X.TEXTURE_2D_ARRAY):(Y.setTexture2D(j,0),Ft=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);const dt=X.getParameter(X.UNPACK_ROW_LENGTH),On=X.getParameter(X.UNPACK_IMAGE_HEIGHT),oa=X.getParameter(X.UNPACK_SKIP_PIXELS),Pn=X.getParameter(X.UNPACK_SKIP_ROWS),bi=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,tn.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,tn.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ke),X.pixelStorei(X.UNPACK_SKIP_ROWS,rt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Qe);const Wt=C.isDataArrayTexture||C.isData3DTexture,zn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const En=E.get(C),Bn=E.get(j),In=E.get(En.__renderTarget),us=E.get(Bn.__renderTarget);Je.bindFramebuffer(X.READ_FRAMEBUFFER,In.__webglFramebuffer),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,us.__webglFramebuffer);for(let zi=0;zi<Xe;zi++)Wt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(C).__webglTexture,te,Qe+zi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(j).__webglTexture,Oe,sn+zi)),X.blitFramebuffer(Ke,rt,ke,Be,st,It,ke,Be,X.DEPTH_BUFFER_BIT,X.NEAREST);Je.bindFramebuffer(X.READ_FRAMEBUFFER,null),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||E.has(C)){const En=E.get(C),Bn=E.get(j);Je.bindFramebuffer(X.READ_FRAMEBUFFER,Cr),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,Wa);for(let In=0;In<Xe;In++)Wt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,En.__webglTexture,te,Qe+In):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,En.__webglTexture,te),zn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Bn.__webglTexture,Oe,sn+In):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Bn.__webglTexture,Oe),te!==0?X.blitFramebuffer(Ke,rt,ke,Be,st,It,ke,Be,X.COLOR_BUFFER_BIT,X.NEAREST):zn?X.copyTexSubImage3D(Ft,Oe,st,It,sn+In,Ke,rt,ke,Be):X.copyTexSubImage2D(Ft,Oe,st,It,Ke,rt,ke,Be);Je.bindFramebuffer(X.READ_FRAMEBUFFER,null),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else zn?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Ft,Oe,st,It,sn,ke,Be,Xe,kt,tt,tn.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(Ft,Oe,st,It,sn,ke,Be,Xe,kt,tn.data):X.texSubImage3D(Ft,Oe,st,It,sn,ke,Be,Xe,kt,tt,tn):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Oe,st,It,ke,Be,kt,tt,tn.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Oe,st,It,tn.width,tn.height,kt,tn.data):X.texSubImage2D(X.TEXTURE_2D,Oe,st,It,ke,Be,kt,tt,tn);X.pixelStorei(X.UNPACK_ROW_LENGTH,dt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,On),X.pixelStorei(X.UNPACK_SKIP_PIXELS,oa),X.pixelStorei(X.UNPACK_SKIP_ROWS,Pn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,bi),Oe===0&&j.generateMipmaps&&X.generateMipmap(Ft),Je.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&Y.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Y.setTextureCube(C,0):C.isData3DTexture?Y.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Y.setTexture2DArray(C,0):Y.setTexture2D(C,0),Je.unbindTexture()},this.resetState=function(){k=0,J=0,ae=null,Je.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Nt._getUnpackColorSpace()}}var Vh=1/1e3,m3=1e3,g3=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*Vh}get fixedDelta(){return this._fixedDelta*Vh}set fixedDelta(a){this._fixedDelta=a*m3}get elapsed(){return this._elapsed*Vh}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},v3=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new ui;return n.setAttribute("position",new $n(a,3)),n.setAttribute("uv",new $n(e,2)),n})(),Yi=class Vp{static get fullscreenGeometry(){return v3}constructor(e="Pass",n=new Iu,r=new Xu){this.name=e,this.renderer=null,this.scene=n,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new Qn(Vp.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Iu),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Ll){}render(e,n,r,o,c){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,r){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof Mn||n instanceof rs||n instanceof Xn||n instanceof Vp)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},_3=class extends Yi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,n,r,o){const c=a.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},x3=`#ifdef COLOR_WRITE
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
}`,Ay="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Ry=class extends dn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Lt(null),depthBuffer:new Lt(null),channelWeights:new Lt(null),opacity:new Lt(1)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:x3,vertexShader:Ay}),this.depthFunc=Ou}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(a){const e=a!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){const e=a!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=a}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(a){this.colorSpaceConversion!==a&&(a?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(a){a!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=a):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},y3=class extends Yi{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new Ry,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new Mn(1,1,{minFilter:bn,magFilter:bn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,n,r,o){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==Rn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===Jt&&(this.renderTarget.texture.colorSpace=Jt))}},sx=new Gt,Cy=class extends Yi{constructor(a=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,n){this.color=a,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,n,r,o){const c=this.overrideClearColor,u=this.overrideClearAlpha,d=a.getClearAlpha(),p=c!==null,m=u>=0;p?(a.getClearColor(sx),a.setClearColor(c,m?u:d)):m&&a.setClearAlpha(u),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),p?a.setClearColor(sx,d):m&&a.setClearAlpha(d)}},S3=class extends Yi{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new Cy(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,n,r,o){const c=a.getContext(),u=a.state.buffers,d=this.scene,p=this.camera,m=this.clearPass,v=this.inverted?0:1,g=1-v;u.color.setMask(!1),u.depth.setMask(!1),u.color.setLocked(!0),u.depth.setLocked(!0),u.stencil.setTest(!0),u.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),u.stencil.setFunc(c.ALWAYS,v,4294967295),u.stencil.setClear(g),u.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(a,null):(m.render(a,e),m.render(a,n))),this.renderToScreen?(a.setRenderTarget(null),a.render(d,p)):(a.setRenderTarget(e),a.render(d,p),a.setRenderTarget(n),a.render(d,p)),u.color.setLocked(!1),u.depth.setLocked(!1),u.stencil.setLocked(!1),u.stencil.setFunc(c.EQUAL,1,4294967295),u.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),u.stencil.setLocked(!0)}},b3=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:r=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,o,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new y3,this.depthTexture=null,this.passes=[],this.timer=new g3,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(a){const e=this.inputBuffer,n=this.multisampling;n>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new qe),n=a.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===Rn&&a.outputColorSpace===Jt&&(this.inputBuffer.texture.colorSpace=Jt,this.outputBuffer.texture.colorSpace=Jt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const o of this.passes)o.initialize(a,n,r)}}replaceRenderer(a,e=!0){const n=this.renderer,r=n.domElement.parentNode;return this.setRenderer(a),e&&r!==null&&(r.removeChild(n.domElement),r.appendChild(a.domElement)),n}createDepthTexture(){const a=this.depthTexture=new uo;return this.inputBuffer.depthTexture=a,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(a.format=Mr,a.type=oo):a.type=Wi,a}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,n,r){const o=this.renderer,c=o===null?new qe:o.getDrawingBufferSize(new qe),u={minFilter:bn,magFilter:bn,stencilBuffer:e,depthBuffer:a,type:n},d=new Mn(c.width,c.height,u);return r>0&&(d.samples=r),n===Rn&&o!==null&&o.outputColorSpace===Jt&&(d.texture.colorSpace=Jt),d.texture.name="EffectComposer.Buffer",d.texture.generateMipmaps=!1,d}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const n=this.passes,r=this.renderer,o=r.getDrawingBufferSize(new qe),c=r.getContext().getContextAttributes().alpha,u=this.inputBuffer.texture.type;if(a.setRenderer(r),a.setSize(o.width,o.height),a.initialize(r,c,u),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,a):n.push(a),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const d=this.createDepthTexture();for(a of n)a.setDepthTexture(d)}else a.setDepthTexture(this.depthTexture)}removePass(a){const e=this.passes,n=e.indexOf(a);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const c=(d,p)=>d||p.needsDepthTexture;e.reduce(c,!1)||(a.getDepthTexture()===this.depthTexture&&a.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,n=this.copyPass;let r=this.inputBuffer,o=this.outputBuffer,c=!1,u,d,p;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const m of this.passes)m.enabled&&(m.render(e,r,o,a,c),m.needsSwap&&(c&&(n.renderToScreen=m.renderToScreen,u=e.getContext(),d=e.state.buffers.stencil,d.setFunc(u.NOTEQUAL,1,4294967295),n.render(e,r,o,a,c),d.setFunc(u.EQUAL,1,4294967295)),p=r,r=o,o=p),m instanceof S3?c=!0:m instanceof _3&&(c=!1))}setSize(a,e,n){const r=this.renderer,o=r.getSize(new qe);(a===void 0||e===void 0)&&(a=o.width,e=o.height),(o.width!==a||o.height!==e)&&r.setSize(a,e,n);const c=r.getDrawingBufferSize(new qe);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const u of this.passes)u.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Yi.fullscreenGeometry.dispose()}},Tr={NONE:0,DEPTH:1,CONVOLUTION:2},Bt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},M3=class{constructor(){this.shaderParts=new Map([[Bt.FRAGMENT_HEAD,null],[Bt.FRAGMENT_MAIN_UV,null],[Bt.FRAGMENT_MAIN_IMAGE,null],[Bt.VERTEX_HEAD,null],[Bt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Tr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Ar}},kh=!1,ox=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case li:n=this.materialsFlatShadedDoubleSide;break;case Nn:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case li:n=this.materialsDoubleSide;break;case Nn:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof dn))return a.clone();const e=a.uniforms,n=new Map;for(const o in e){const c=e[o].value;c.isRenderTargetTexture&&(e[o].value=null,n.set(o,c))}const r=a.clone();for(const o of n)e[o[0]].value=o[1],r.uniforms[o[0]].value=o[1];return r}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const n of e)n.uniforms=Object.assign({},a.uniforms),n.side=za;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.side=Nn,r}),this.materialsDoubleSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.side=li,r}),this.materialsFlatShaded=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.flatShading=!0,r.side=Nn,r}),this.materialsFlatShadedDoubleSide=e.map(n=>{const r=this.cloneMaterial(n);return r.uniforms=Object.assign({},a.uniforms),r.flatShading=!0,r.side=li,r})}}render(a,e,n){const r=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,kh){const o=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,n);for(const c of o)c[0].material=c[1];this.meshCount!==o.size&&o.clear()}else{const o=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,n),e.overrideMaterial=o}a.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return kh}static set workaroundEnabled(a){kh=a}},br=-1,ra=class extends Ga{constructor(a,e=br,n=br,r=1){super(),this.resizable=a,this.baseSize=new qe(1,1),this.preferredSize=new qe(e,n),this.target=this.preferredSize,this.s=r,this.effectiveSize=new qe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const a=this.baseSize,e=this.preferredSize,n=this.effectiveSize,r=this.scale;e.width!==br?n.width=e.width:e.height!==br?n.width=Math.round(e.height*(a.width/Math.max(a.height,1))):n.width=Math.round(a.width*r),e.height!==br?n.height=e.height:e.width!==br?n.height=Math.round(e.width/Math.max(a.width/Math.max(a.height,1),1)):n.height=Math.round(a.height*r)}get width(){return this.effectiveSize.width}set width(a){this.preferredWidth=a}get height(){return this.effectiveSize.height}set height(a){this.preferredHeight=a}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(a){this.s!==a&&(this.s=a,this.preferredSize.setScalar(br),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(a){this.scale=a}get baseWidth(){return this.baseSize.width}set baseWidth(a){this.baseSize.width!==a&&(this.baseSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(a){this.baseWidth=a}get baseHeight(){return this.baseSize.height}set baseHeight(a){this.baseSize.height!==a&&(this.baseSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(a){this.baseHeight=a}setBaseSize(a,e){(this.baseSize.width!==a||this.baseSize.height!==e)&&(this.baseSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(a){this.preferredSize.width!==a&&(this.preferredSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(a){this.preferredWidth=a}get preferredHeight(){return this.preferredSize.height}set preferredHeight(a){this.preferredSize.height!==a&&(this.preferredSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(a){this.preferredHeight=a}setPreferredSize(a,e){(this.preferredSize.width!==a||this.preferredSize.height!==e)&&(this.preferredSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(a){this.s=a.scale,this.baseSize.set(a.baseWidth,a.baseHeight),this.preferredSize.set(a.preferredWidth,a.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return br}},At={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},E3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",T3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",A3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",R3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",C3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",w3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",D3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",U3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",N3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",L3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",O3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",P3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",z3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",B3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",I3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",F3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",H3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",G3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",V3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",k3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",X3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",W3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",q3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Y3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",j3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Z3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",K3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Q3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",J3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",eD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nD=new Map([[At.ADD,E3],[At.ALPHA,T3],[At.AVERAGE,A3],[At.COLOR,R3],[At.COLOR_BURN,C3],[At.COLOR_DODGE,w3],[At.DARKEN,D3],[At.DIFFERENCE,U3],[At.DIVIDE,N3],[At.DST,null],[At.EXCLUSION,L3],[At.HARD_LIGHT,O3],[At.HARD_MIX,P3],[At.HUE,z3],[At.INVERT,B3],[At.INVERT_RGB,I3],[At.LIGHTEN,F3],[At.LINEAR_BURN,H3],[At.LINEAR_DODGE,G3],[At.LINEAR_LIGHT,V3],[At.LUMINOSITY,k3],[At.MULTIPLY,X3],[At.NEGATION,W3],[At.NORMAL,q3],[At.OVERLAY,Y3],[At.PIN_LIGHT,j3],[At.REFLECT,Z3],[At.SATURATION,K3],[At.SCREEN,Q3],[At.SOFT_LIGHT,J3],[At.SRC,$3],[At.SUBTRACT,eD],[At.VIVID_LIGHT,tD]]),iD=class extends Ga{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new Lt(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return nD.get(this.blendFunction)}},wy=class extends Ga{constructor(a,e,{attributes:n=Tr.NONE,blendFunction:r=At.NORMAL,defines:o=new Map,uniforms:c=new Map,extensions:u=null,vertexShader:d=null}={}){super(),this.name=a,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=d,this.defines=o,this.uniforms=c,this.extensions=u,this.blendMode=new iD(r),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=Ar,this._outputColorSpace=na}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=Ll){}update(a,e,n){}setSize(a,e){}initialize(a,e,n){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof Mn||e instanceof rs||e instanceof Xn||e instanceof Yi)&&this[a].dispose()}}},lm={MEDIUM:2,LARGE:3},aD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,rD="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",sD=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],oD=class extends dn{constructor(a=new ln){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Lt(null),texelSize:new Lt(new ln),scale:new Lt(1),kernel:new Lt(0)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:aD,vertexShader:rD}),this.setTexelSize(a.x,a.y),this.kernelSize=lm.MEDIUM}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.inputBuffer=a}get kernelSequence(){return sD[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(a){this.uniforms.scale.value=a}getScale(){return this.uniforms.scale.value}setScale(a){this.uniforms.scale.value=a}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(a){this.uniforms.kernel.value=a}setKernel(a){this.kernel=a}setTexelSize(a,e){this.uniforms.texelSize.value.set(a,e,a*.5,e*.5)}setSize(a,e){const n=1/a,r=1/e;this.uniforms.texelSize.value.set(n,r,n*.5,r*.5)}},lD=class extends Yi{constructor({kernelSize:a=lm.MEDIUM,resolutionScale:e=.5,width:n=ra.AUTO_SIZE,height:r=ra.AUTO_SIZE,resolutionX:o=n,resolutionY:c=r}={}){super("KawaseBlurPass"),this.renderTargetA=new Mn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const u=this.resolution=new ra(this,o,c,e);u.addEventListener("change",d=>this.setSize(u.baseWidth,u.baseHeight)),this._blurMaterial=new oD,this._blurMaterial.kernelSize=a,this.copyMaterial=new Ry}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(a){this._blurMaterial=a}get dithering(){return this.copyMaterial.dithering}set dithering(a){this.copyMaterial.dithering=a}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(a){this.blurMaterial.kernelSize=a}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get scale(){return this.blurMaterial.scale}set scale(a){this.blurMaterial.scale=a}getScale(){return this.blurMaterial.scale}setScale(a){this.blurMaterial.scale=a}getKernelSize(){return this.kernelSize}setKernelSize(a){this.kernelSize=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}render(a,e,n,r,o){const c=this.scene,u=this.camera,d=this.renderTargetA,p=this.renderTargetB,m=this.blurMaterial,v=m.kernelSequence;let g=e;this.fullscreenMaterial=m;for(let _=0,y=v.length;_<y;++_){const M=(_&1)===0?d:p;m.kernel=v[_],m.inputBuffer=g.texture,a.setRenderTarget(M),a.render(c,u),g=M}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=g.texture,a.setRenderTarget(this.renderToScreen?null:n),a.render(c,u)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e);const r=n.width,o=n.height;this.renderTargetA.setSize(r,o),this.renderTargetB.setSize(r,o),this.blurMaterial.setSize(a,e)}initialize(a,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==Rn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):a!==null&&a.outputColorSpace===Jt&&(this.renderTargetA.texture.colorSpace=Jt,this.renderTargetB.texture.colorSpace=Jt))}static get AUTO_SIZE(){return ra.AUTO_SIZE}},cD=`#include <common>
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
}`,uD=class extends dn{constructor(a=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Nl.replace(/\D+/g,"")},uniforms:{inputBuffer:new Lt(null),threshold:new Lt(0),smoothing:new Lt(1),range:new Lt(null)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:cD,vertexShader:Ay}),this.colorOutput=a,this.luminanceRange=e}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get threshold(){return this.uniforms.threshold.value}set threshold(a){this.smoothing>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=a}getThreshold(){return this.threshold}setThreshold(a){this.threshold=a}get smoothing(){return this.uniforms.smoothing.value}set smoothing(a){this.threshold>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=a}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(a){this.smoothing=a}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(a){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(a){a?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(a){return this.colorOutput}setColorOutputEnabled(a){this.colorOutput=a}get useRange(){return this.luminanceRange!==null}set useRange(a){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(a){a!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=a,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(a){this.luminanceRange=a}},fD=class extends Yi{constructor({renderTarget:a,luminanceRange:e,colorOutput:n,resolutionScale:r=1,width:o=ra.AUTO_SIZE,height:c=ra.AUTO_SIZE,resolutionX:u=o,resolutionY:d=c}={}){super("LuminancePass"),this.fullscreenMaterial=new uD(n,e),this.needsSwap=!1,this.renderTarget=a,this.renderTarget===void 0&&(this.renderTarget=new Mn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const p=this.resolution=new ra(this,u,d,r);p.addEventListener("change",m=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(a,e,n,r,o){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e),this.renderTarget.setSize(n.width,n.height)}initialize(a,e,n){n!==void 0&&n!==Rn&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},dD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,hD="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",pD=class extends dn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Lt(null),texelSize:new Lt(new qe)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:dD,vertexShader:hD})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},mD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,gD="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",vD=class extends dn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Lt(null),supportBuffer:new Lt(null),texelSize:new Lt(new qe),radius:new Lt(.85)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:mD,vertexShader:gD})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}set supportBuffer(a){this.uniforms.supportBuffer.value=a}get radius(){return this.uniforms.radius.value}set radius(a){this.uniforms.radius.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},_D=class extends Yi{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Mn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new pD,this.upsamplingMaterial=new vD,this.resolution=new qe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(a){if(this.levels!==a){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<a;++n){const r=e.clone();r.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(r)}this.upsamplingMipmaps.push(e);for(let n=1,r=a-1;n<r;++n){const o=e.clone();o.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(o)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(a){this.upsamplingMaterial.radius=a}render(a,e,n,r,o){const{scene:c,camera:u}=this,{downsamplingMaterial:d,upsamplingMaterial:p}=this,{downsamplingMipmaps:m,upsamplingMipmaps:v}=this;let g=e;this.fullscreenMaterial=d;for(let _=0,y=m.length;_<y;++_){const M=m[_];d.setSize(g.width,g.height),d.inputBuffer=g.texture,a.setRenderTarget(M),a.render(c,u),g=M}this.fullscreenMaterial=p;for(let _=v.length-1;_>=0;--_){const y=v[_];p.setSize(g.width,g.height),p.inputBuffer=g.texture,p.supportBuffer=m[_].texture,a.setRenderTarget(y),a.render(c,u),g=y}}setSize(a,e){const n=this.resolution;n.set(a,e);let r=n.width,o=n.height;for(let c=0,u=this.downsamplingMipmaps.length;c<u;++c)r=Math.round(r*.5),o=Math.round(o*.5),this.downsamplingMipmaps[c].setSize(r,o),c<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[c].setSize(r,o)}initialize(a,e,n){if(n!==void 0){const r=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const o of r)o.texture.type=n;if(n!==Rn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(a!==null&&a.outputColorSpace===Jt)for(const o of r)o.texture.colorSpace=Jt}}dispose(){super.dispose();for(const a of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))a.dispose()}},xD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,yD=class extends wy{constructor({blendFunction:a=At.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:n=.03,mipmapBlur:r=!0,intensity:o=1,radius:c=.85,levels:u=8,kernelSize:d=lm.LARGE,resolutionScale:p=.5,width:m=ra.AUTO_SIZE,height:v=ra.AUTO_SIZE,resolutionX:g=m,resolutionY:_=v}={}){super("BloomEffect",xD,{blendFunction:a,uniforms:new Map([["map",new Lt(null)],["intensity",new Lt(o)]])}),this.renderTarget=new Mn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new lD({kernelSize:d}),this.luminancePass=new fD({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new _D,this.mipmapBlurPass.enabled=r,this.mipmapBlurPass.radius=c,this.mipmapBlurPass.levels=u,this.uniforms.get("map").value=r?this.mipmapBlurPass.texture:this.renderTarget.texture;const y=this.resolution=new ra(this,g,_,p);y.addEventListener("change",M=>this.setSize(y.baseWidth,y.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get dithering(){return this.blurPass.dithering}set dithering(a){this.blurPass.dithering=a}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(a){this.blurPass.kernelSize=a}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(a){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(a){this.uniforms.get("intensity").value=a}getIntensity(){return this.intensity}setIntensity(a){this.intensity=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}update(a,e,n){const r=this.renderTarget,o=this.luminancePass;o.enabled?(o.render(a,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,o.renderTarget):this.blurPass.render(a,o.renderTarget,r)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,e):this.blurPass.render(a,e,r)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(a,e),this.mipmapBlurPass.setSize(a,e)}initialize(a,e,n){this.blurPass.initialize(a,e,n),this.luminancePass.initialize(a,e,n),this.mipmapBlurPass.initialize(a,e,n),n!==void 0&&(this.renderTarget.texture.type=n,a!==null&&a.outputColorSpace===Jt&&(this.renderTarget.texture.colorSpace=Jt))}},SD=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,bD="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",MD=class extends wy{constructor({offset:a=new qe(.001,5e-4),radialModulation:e=!1,modulationOffset:n=.15}={}){super("ChromaticAberrationEffect",SD,{vertexShader:bD,attributes:Tr.CONVOLUTION,uniforms:new Map([["offset",new Lt(a)],["modulationOffset",new Lt(n)]])}),this.radialModulation=e}get offset(){return this.uniforms.get("offset").value}set offset(a){this.uniforms.get("offset").value=a}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(a){a?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(a){this.uniforms.get("modulationOffset").value=a}getOffset(){return this.offset}setOffset(a){this.offset=a}},ED=class extends Yi{constructor(a,e,n=null){super("RenderPass",a,e),this.needsSwap=!1,this.clearPass=new Cy,this.overrideMaterialManager=n===null?null:new ox(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new ox(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,n,r,o){const c=this.scene,u=this.camera,d=this.selection,p=u.layers.mask,m=c.background,v=a.shadowMap.autoUpdate,g=this.renderToScreen?null:e;d!==null&&u.layers.set(d.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(g),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,c,u):a.render(c,u),u.layers.mask=p,c.background=m,a.shadowMap.autoUpdate=v}},TD=`#include <common>
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
}`,AD="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",RD=class extends dn{constructor(a,e,n,r,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Nl.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Lt(null),depthBuffer:new Lt(null),resolution:new Lt(new qe),texelSize:new Lt(new qe),cameraNear:new Lt(.3),cameraFar:new Lt(1e3),aspect:new Lt(1),time:new Lt(0)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),a&&this.setShaderParts(a),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(r)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=Ll){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=TD.replace(Bt.FRAGMENT_HEAD,a.get(Bt.FRAGMENT_HEAD)||"").replace(Bt.FRAGMENT_MAIN_UV,a.get(Bt.FRAGMENT_MAIN_UV)||"").replace(Bt.FRAGMENT_MAIN_IMAGE,a.get(Bt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=AD.replace(Bt.VERTEX_HEAD,a.get(Bt.VERTEX_HEAD)||"").replace(Bt.VERTEX_MAIN_SUPPORT,a.get(Bt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof yi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const n=this.uniforms;n.resolution.value.set(a,e),n.texelSize.value.set(1/a,1/e),n.aspect.value=a/e}static get Section(){return Bt}};function lx(a,e,n){for(const r of e){const o="$1"+a+r.charAt(0).toUpperCase()+r.slice(1),c=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const u of n.entries())u[1]!==null&&n.set(u[0],u[1].replace(c,o))}}function CD(a,e,n){let r=e.getFragmentShader(),o=e.getVertexShader();const c=r!==void 0&&/mainImage/.test(r),u=r!==void 0&&/mainUv/.test(r);if(n.attributes|=e.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(u&&(n.attributes&Tr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!u)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=n.shaderParts;let m=p.get(Bt.FRAGMENT_HEAD)||"",v=p.get(Bt.FRAGMENT_MAIN_UV)||"",g=p.get(Bt.FRAGMENT_MAIN_IMAGE)||"",_=p.get(Bt.VERTEX_HEAD)||"",y=p.get(Bt.VERTEX_MAIN_SUPPORT)||"";const M=new Set,A=new Set;if(u&&(v+=`	${a}MainUv(UV);
`,n.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const w=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);y+=`	${a}MainSupport(`,y+=w?`vUv);
`:`);
`;for(const U of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const N of U[1].split(/\s*,\s*/))n.varyings.add(N),M.add(N),A.add(N);for(const U of o.matchAll(d))A.add(U[1])}for(const w of r.matchAll(d))A.add(w[1]);for(const w of e.defines.keys())A.add(w.replace(/\([\w\s,]*\)/g,""));for(const w of e.uniforms.keys())A.add(w);A.delete("while"),A.delete("for"),A.delete("if"),e.uniforms.forEach((w,U)=>n.uniforms.set(a+U.charAt(0).toUpperCase()+U.slice(1),w)),e.defines.forEach((w,U)=>n.defines.set(a+U.charAt(0).toUpperCase()+U.slice(1),w));const b=new Map([["fragment",r],["vertex",o]]);lx(a,A,n.defines),lx(a,A,b),r=b.get("fragment"),o=b.get("vertex");const x=e.blendMode;if(n.blendModes.set(x.blendFunction,x),c){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(g+=e.inputColorSpace===Jt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==na?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const w=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;g+=`${a}MainImage(color0, UV, `,(n.attributes&Tr.DEPTH)!==0&&w.test(r)&&(g+="depth, ",n.readDepth=!0),g+=`color1);
	`;const U=a+"BlendOpacity";n.uniforms.set(U,x.opacity),g+=`color0 = blend${x.blendFunction}(color0, color1, ${U});

	`,m+=`uniform float ${U};

`}if(m+=r+`
`,o!==null&&(_+=o+`
`),p.set(Bt.FRAGMENT_HEAD,m),p.set(Bt.FRAGMENT_MAIN_UV,v),p.set(Bt.FRAGMENT_MAIN_IMAGE,g),p.set(Bt.VERTEX_HEAD,_),p.set(Bt.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const w of e.extensions)n.extensions.add(w)}}var wD=class extends Yi{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new RD(null,null,null,a),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new M3;let e=0;for(const u of this.effects)if(u.blendMode.blendFunction===At.DST)a.attributes|=u.getAttributes()&Tr.DEPTH;else{if((a.attributes&u.getAttributes()&Tr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${u.name})`);CD("e"+e++,u,a)}let n=a.shaderParts.get(Bt.FRAGMENT_HEAD),r=a.shaderParts.get(Bt.FRAGMENT_MAIN_IMAGE),o=a.shaderParts.get(Bt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const u of a.blendModes.values())n+=u.getShaderCode().replace(c,`blend${u.blendFunction}`)+`
`;(a.attributes&Tr.DEPTH)!==0?(a.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===Jt&&(r+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(Bt.FRAGMENT_HEAD,n),a.shaderParts.set(Bt.FRAGMENT_MAIN_IMAGE,r),a.shaderParts.set(Bt.FRAGMENT_MAIN_UV,o);for(const[u,d]of a.shaderParts)d!==null&&a.shaderParts.set(u,d.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=Ll){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(a,e)}render(a,e,n,r,o){for(const c of this.effects)c.update(a,e,r);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=r*this.timeScale,a.setRenderTarget(this.renderToScreen?null:n),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const n of this.effects)n.setSize(a,e)}initialize(a,e,n){this.renderer=a;for(const r of this.effects)r.initialize(a,e,n);this.updateMaterial(),n!==void 0&&n!==Rn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){a.type==="change"&&this.recompile()}};const Dy=`
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
`,DD=`
${Dy}

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
`,UD=`
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
`,ND=`
${Dy}

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
`,LD=`
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
`,OD=`
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
`,PD=`
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
`;function zD(){const a=ee.useRef(null),e=ee.useRef(null),n=ee.useRef(null),r=ee.useRef(null),o=ee.useRef(null),c=ee.useRef(null),u=ee.useRef(null),d=ee.useRef(0),p=ee.useRef(null),m=ee.useRef(null),v=ee.useRef(new _A),g=ee.useRef({x:0,y:0}),_=ee.useRef(null),y=ee.useRef(null),M=ee.useRef(null),A=ee.useRef(null),b=ee.useRef(null),x=ee.useRef(null),[w,U]=ee.useState(!1),[N,B]=ee.useState("galaxy"),[F,z]=ee.useState(null),H=ee.useCallback(()=>{if(!a.current)return;const Q=new Iu;Q.background=new Gt(5),r.current=Q;const L=new yi(75,a.current.clientWidth/a.current.clientHeight,.1,1e3);L.position.z=60,o.current=L;const I=new p3({antialias:!0,powerPreference:"high-performance"});I.setSize(a.current.clientWidth,a.current.clientHeight),I.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.toneMapping=Kp,I.toneMappingExposure=1.5,a.current.appendChild(I.domElement),e.current=I;const V=new Mn(a.current.clientWidth,a.current.clientHeight),xe=new Mn(a.current.clientWidth,a.current.clientHeight);_.current=V,y.current=xe;const ge=new Iu,O=new Xu(-1,1,1,-1,0,1);b.current=ge,x.current=O;const ie=new dn({uniforms:{tDiffuse:{value:null},uSegments:{value:6},uTime:{value:0},uAudioLevel:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:OD});M.current=ie;const ue=new dn({uniforms:{tDiffuse:{value:null},tFeedback:{value:null},uFeedbackAmount:{value:.85},uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:PD});A.current=ue;const Se=new Qn(new Il(2,2),ue);ge.add(Se);const Me=new b3(I),$=new ED(Q,L);Me.addPass($);const re=new yD({luminanceThreshold:.1,luminanceSmoothing:.9,intensity:2,mipmapBlur:!0}),De=new MD({offset:new qe(.002,.002)}),Fe=new wD(L,re,De);Me.addPass(Fe),n.current=Me,T(Q),D(Q);const ze=()=>{if(!a.current||!L||!I||!Me)return;const at=a.current.clientWidth,lt=a.current.clientHeight;L.aspect=at/lt,L.updateProjectionMatrix(),I.setSize(at,lt),Me.setSize(at,lt),V.setSize(at,lt),xe.setSize(at,lt)};window.addEventListener("resize",ze);const it=at=>{at.beta!==null&&at.gamma!==null&&(g.current={x:(at.beta-45)/90,y:at.gamma/90})};return(async()=>{if(typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()==="granted"&&window.addEventListener("deviceorientation",it)}catch{}else window.addEventListener("deviceorientation",it)})(),()=>{window.removeEventListener("resize",ze),window.removeEventListener("deviceorientation",it)}},[]),T=Q=>{const I=new Float32Array(45e3),V=new Float32Array(15e3),xe=new Float32Array(15e3);for(let ue=0;ue<15e3;ue++){const Se=Math.random()*50+2,Me=Se*.3,$=ue%5/5*Math.PI*2,re=(Math.random()-.5)*(Se*.4)*Math.random(),De=(Math.random()-.5)*(Se*.15)*Math.random(),Fe=(Math.random()-.5)*(Se*.4)*Math.random();I[ue*3]=Math.cos($+Me)*Se+re,I[ue*3+1]=De,I[ue*3+2]=Math.sin($+Me)*Se+Fe,V[ue]=Math.random()*3+1,xe[ue]=Math.random()}const ge=new ui;ge.setAttribute("position",new $n(I,3)),ge.setAttribute("aSize",new $n(V,1)),ge.setAttribute("aRandom",new $n(xe,1));const O=new dn({uniforms:{uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uAudioLevel:{value:0},uOrientation:{value:new qe(0,0)}},vertexShader:DD,fragmentShader:UD,transparent:!0,blending:Lu,depthWrite:!1}),ie=new Q1(ge,O);ie.visible=!0,Q.add(ie),p.current=ie},D=Q=>{const L=new yl,I=200,V=10,xe=80,ge=.8,O=[],ie=[];for(let it=0;it<I;it++){const Ct=it/I,at=(Ct-.5)*xe,lt=Ct*Math.PI*8;O.push(new Z(Math.cos(lt)*V,at,Math.sin(lt)*V)),ie.push(new Z(Math.cos(lt+Math.PI)*V,at,Math.sin(lt+Math.PI)*V))}const ue=new Fp(O),Se=new Fp(ie),Me=new Fu(ue,200,ge,16,!1),$=new Fu(Se,200,ge,16,!1),re=new Float32Array(64).fill(0),De=new dn({uniforms:{uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uAudioLevel:{value:0},uOrientation:{value:new qe(0,0)},uCameraPosition:{value:new Z},uFrequencyData:{value:re}},vertexShader:ND,fragmentShader:LD,transparent:!0,side:li,blending:Lu}),Fe=new Qn(Me,De),ze=new Qn($,De.clone());L.add(Fe),L.add(ze);for(let it=0;it<I;it+=4){const Ct=it/I,at=(Ct-.5)*xe,lt=Ct*Math.PI*8,Dt=new sm(.3,.3,V*2,8),ft=De.clone(),$t=new Qn(Dt,ft);$t.position.y=at,$t.rotation.z=Math.PI/2,$t.rotation.y=lt,L.add($t)}L.visible=!1,Q.add(L),m.current=L},k=async()=>{try{if(typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()}catch{}const Q=await navigator.mediaDevices.getUserMedia({audio:!0}),L=new AudioContext,I=L.createMediaStreamSource(Q),V=L.createAnalyser();V.fftSize=256,V.smoothingTimeConstant=.8,I.connect(V),u.current=L,c.current=V,U(!0),z(null)}catch(Q){z("Microphone access denied"),console.error("Audio error:",Q)}},J=()=>{u.current&&(u.current.close(),u.current=null,c.current=null),U(!1)},ae=()=>{B(Q=>Q==="galaxy"?"dna":"galaxy")},he=ee.useCallback(()=>{if(!r.current||!o.current||!e.current||!n.current)return;const Q=v.current.getElapsedTime();let L=new Uint8Array(128),I=.3,V=.3,xe=.2,ge=.3;c.current?(c.current.getByteFrequencyData(L),I=L.slice(0,10).reduce((Me,$)=>Me+$,0)/10/255,V=L.slice(10,50).reduce((Me,$)=>Me+$,0)/40/255,xe=L.slice(50,128).reduce((Me,$)=>Me+$,0)/78/255,ge=(I+V+xe)/3):(I=.4+Math.sin(Q*1.5)*.3+Math.sin(Q*.7)*.2,V=.3+Math.sin(Q*2.5)*.25+Math.cos(Q*1.2)*.15,xe=.2+Math.sin(Q*4)*.2+Math.sin(Q*2.1)*.1,ge=(I+V+xe)/3);const O=g.current;if(p.current&&(p.current.visible=N==="galaxy",N==="galaxy")){const Me=p.current.material;Me.uniforms.uTime.value=Q,Me.uniforms.uBass.value=I,Me.uniforms.uMid.value=V,Me.uniforms.uHigh.value=xe,Me.uniforms.uAudioLevel.value=ge,Me.uniforms.uOrientation.value.set(O.x,O.y),p.current.rotation.y=Q*.05}m.current&&(m.current.visible=N==="dna",N==="dna"&&(m.current.rotation.y=Q*.3+I*.5,m.current.traverse(Me=>{if(Me instanceof Qn&&Me.material instanceof dn&&(Me.material.uniforms.uTime.value=Q,Me.material.uniforms.uBass.value=I,Me.material.uniforms.uMid.value=V,Me.material.uniforms.uHigh.value=xe,Me.material.uniforms.uAudioLevel.value=ge,Me.material.uniforms.uOrientation.value.set(O.x,O.y),Me.material.uniforms.uCameraPosition.value.copy(o.current.position),c.current)){const $=new Float32Array(64);for(let re=0;re<64;re++)$[re]=L[re*2]/255;Me.material.uniforms.uFrequencyData.value=$}})));const ie=O.y*30+Math.sin(Q*.5)*10,ue=O.x*20+Math.cos(Q*.3)*5+I*10,Se=60+ge*20;o.current.position.x+=(ie-o.current.position.x)*.05,o.current.position.y+=(ue-o.current.position.y)*.05,o.current.position.z+=(Se-o.current.position.z)*.05,o.current.lookAt(0,0,0),M.current&&(M.current.uniforms.uTime.value=Q,M.current.uniforms.uAudioLevel.value=ge,M.current.uniforms.uSegments.value=4+Math.floor(I*8)),n.current.render(),d.current=requestAnimationFrame(he)},[N]);return ee.useEffect(()=>{const Q=H();return()=>{Q?.(),d.current&&cancelAnimationFrame(d.current),e.current&&a.current&&(a.current.removeChild(e.current.domElement),e.current.dispose()),_.current&&_.current.dispose(),y.current&&y.current.dispose(),J()}},[H]),ee.useEffect(()=>(he(),()=>{d.current&&cancelAnimationFrame(d.current)}),[he]),ne.jsxs("div",{className:"min-h-screen flex flex-col bg-black",children:[ne.jsx("div",{className:"absolute top-4 left-4 z-20",children:ne.jsx(Ul,{to:"/",className:"w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all",children:ne.jsx(kx,{className:"w-5 h-5"})})}),ne.jsx("button",{onClick:ae,className:"absolute top-4 right-16 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all",children:N==="galaxy"?ne.jsx(BT,{className:"w-5 h-5"}):ne.jsx(ST,{className:"w-5 h-5"})}),ne.jsx("button",{onClick:w?J:k,className:bl("absolute top-4 right-4 z-20 w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all",w?"bg-accent-green/30 text-accent-green":"bg-black/50 text-white/70 hover:text-white hover:bg-black/70"),children:w?ne.jsx(wT,{className:"w-5 h-5 animate-pulse"}):ne.jsx(RT,{className:"w-5 h-5"})}),F&&ne.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-red-500/20 backdrop-blur-sm text-red-400 px-4 py-2 rounded-full text-sm",children:F}),!w&&ne.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/30 text-sm",children:"Tap mic for audio • Tilt phone to control"}),ne.jsx("div",{ref:a,className:"flex-1 w-full"})]})}Xb.createRoot(document.getElementById("root")).render(ne.jsx(ee.StrictMode,{children:ne.jsx(dE,{children:ne.jsxs(VM,{children:[ne.jsx(bu,{path:"/",element:ne.jsx(HT,{})}),ne.jsx(bu,{path:"/sensors",element:ne.jsx(GT,{})}),ne.jsx(bu,{path:"/audio",element:ne.jsx(zD,{})})]})})}));
