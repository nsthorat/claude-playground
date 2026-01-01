(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var zd={exports:{}},tl={};var Sv;function sb(){if(Sv)return tl;Sv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return tl.Fragment=e,tl.jsx=i,tl.jsxs=i,tl}var bv;function ob(){return bv||(bv=1,zd.exports=sb()),zd.exports}var H=ob(),Fd={exports:{}},ct={};var Mv;function lb(){if(Mv)return ct;Mv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function b(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function _(F,te,fe){this.props=F,this.context=te,this.refs=S,this.updater=fe||E}_.prototype.isReactComponent={},_.prototype.setState=function(F,te){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,te,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function N(){}N.prototype=_.prototype;function w(F,te,fe){this.props=F,this.context=te,this.refs=S,this.updater=fe||E}var L=w.prototype=new N;L.constructor=w,A(L,_.prototype),L.isPureReactComponent=!0;var U=Array.isArray;function O(){}var P={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function T(F,te,fe){var Ee=fe.ref;return{$$typeof:r,type:F,key:te,ref:Ee!==void 0?Ee:null,props:fe}}function D(F,te){return T(F.type,te,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function q(F){var te={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(fe){return te[fe]})}var J=/\/+/g;function ne(F,te){return typeof F=="object"&&F!==null&&F.key!=null?q(""+F.key):te.toString(36)}function re(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(O,O):(F.status="pending",F.then(function(te){F.status==="pending"&&(F.status="fulfilled",F.value=te)},function(te){F.status==="pending"&&(F.status="rejected",F.reason=te)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function z(F,te,fe,Ee,Le){var se=typeof F;(se==="undefined"||se==="boolean")&&(F=null);var ue=!1;if(F===null)ue=!0;else switch(se){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(F.$$typeof){case r:case e:ue=!0;break;case v:return ue=F._init,z(ue(F._payload),te,fe,Ee,Le)}}if(ue)return Le=Le(F),ue=Ee===""?"."+ne(F,0):Ee,U(Le)?(fe="",ue!=null&&(fe=ue.replace(J,"$&/")+"/"),z(Le,te,fe,"",function(He){return He})):Le!=null&&(G(Le)&&(Le=D(Le,fe+(Le.key==null||F&&F.key===Le.key?"":(""+Le.key).replace(J,"$&/")+"/")+ue)),te.push(Le)),1;ue=0;var De=Ee===""?".":Ee+":";if(U(F))for(var ke=0;ke<F.length;ke++)Ee=F[ke],se=De+ne(Ee,ke),ue+=z(Ee,te,fe,se,Le);else if(ke=b(F),typeof ke=="function")for(F=ke.call(F),ke=0;!(Ee=F.next()).done;)Ee=Ee.value,se=De+ne(Ee,ke++),ue+=z(Ee,te,fe,se,Le);else if(se==="object"){if(typeof F.then=="function")return z(re(F),te,fe,Ee,Le);throw te=String(F),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ue}function V(F,te,fe){if(F==null)return F;var Ee=[],Le=0;return z(F,Ee,"","",function(se){return te.call(fe,se,Le++)}),Ee}function W(F){if(F._status===-1){var te=F._result;te=te(),te.then(function(fe){(F._status===0||F._status===-1)&&(F._status=1,F._result=fe)},function(fe){(F._status===0||F._status===-1)&&(F._status=2,F._result=fe)}),F._status===-1&&(F._status=0,F._result=te)}if(F._status===1)return F._result.default;throw F._result}var Se=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},xe={map:V,forEach:function(F,te,fe){V(F,function(){te.apply(this,arguments)},fe)},count:function(F){var te=0;return V(F,function(){te++}),te},toArray:function(F){return V(F,function(te){return te})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ct.Activity=g,ct.Children=xe,ct.Component=_,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=w,ct.StrictMode=s,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ct.__COMPILER_RUNTIME={__proto__:null,c:function(F){return P.H.useMemoCache(F)}},ct.cache=function(F){return function(){return F.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(F,te,fe){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Ee=A({},F.props),Le=F.key;if(te!=null)for(se in te.key!==void 0&&(Le=""+te.key),te)!B.call(te,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&te.ref===void 0||(Ee[se]=te[se]);var se=arguments.length-2;if(se===1)Ee.children=fe;else if(1<se){for(var ue=Array(se),De=0;De<se;De++)ue[De]=arguments[De+2];Ee.children=ue}return T(F.type,Le,Ee)},ct.createContext=function(F){return F={$$typeof:f,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},ct.createElement=function(F,te,fe){var Ee,Le={},se=null;if(te!=null)for(Ee in te.key!==void 0&&(se=""+te.key),te)B.call(te,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Le[Ee]=te[Ee]);var ue=arguments.length-2;if(ue===1)Le.children=fe;else if(1<ue){for(var De=Array(ue),ke=0;ke<ue;ke++)De[ke]=arguments[ke+2];Le.children=De}if(F&&F.defaultProps)for(Ee in ue=F.defaultProps,ue)Le[Ee]===void 0&&(Le[Ee]=ue[Ee]);return T(F,se,Le)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(F){return{$$typeof:h,render:F}},ct.isValidElement=G,ct.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:W}},ct.memo=function(F,te){return{$$typeof:p,type:F,compare:te===void 0?null:te}},ct.startTransition=function(F){var te=P.T,fe={};P.T=fe;try{var Ee=F(),Le=P.S;Le!==null&&Le(fe,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(O,Se)}catch(se){Se(se)}finally{te!==null&&fe.types!==null&&(te.types=fe.types),P.T=te}},ct.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ct.use=function(F){return P.H.use(F)},ct.useActionState=function(F,te,fe){return P.H.useActionState(F,te,fe)},ct.useCallback=function(F,te){return P.H.useCallback(F,te)},ct.useContext=function(F){return P.H.useContext(F)},ct.useDebugValue=function(){},ct.useDeferredValue=function(F,te){return P.H.useDeferredValue(F,te)},ct.useEffect=function(F,te){return P.H.useEffect(F,te)},ct.useEffectEvent=function(F){return P.H.useEffectEvent(F)},ct.useId=function(){return P.H.useId()},ct.useImperativeHandle=function(F,te,fe){return P.H.useImperativeHandle(F,te,fe)},ct.useInsertionEffect=function(F,te){return P.H.useInsertionEffect(F,te)},ct.useLayoutEffect=function(F,te){return P.H.useLayoutEffect(F,te)},ct.useMemo=function(F,te){return P.H.useMemo(F,te)},ct.useOptimistic=function(F,te){return P.H.useOptimistic(F,te)},ct.useReducer=function(F,te,fe){return P.H.useReducer(F,te,fe)},ct.useRef=function(F){return P.H.useRef(F)},ct.useState=function(F){return P.H.useState(F)},ct.useSyncExternalStore=function(F,te,fe){return P.H.useSyncExternalStore(F,te,fe)},ct.useTransition=function(){return P.H.useTransition()},ct.version="19.2.3",ct}var Ev;function Mp(){return Ev||(Ev=1,Fd.exports=lb()),Fd.exports}var ee=Mp(),Id={exports:{}},nl={},Bd={exports:{}},Hd={};var Tv;function cb(){return Tv||(Tv=1,(function(r){function e(z,V){var W=z.length;z.push(V);e:for(;0<W;){var Se=W-1>>>1,xe=z[Se];if(0<l(xe,V))z[Se]=V,z[W]=xe,W=Se;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var V=z[0],W=z.pop();if(W!==V){z[0]=W;e:for(var Se=0,xe=z.length,F=xe>>>1;Se<F;){var te=2*(Se+1)-1,fe=z[te],Ee=te+1,Le=z[Ee];if(0>l(fe,W))Ee<xe&&0>l(Le,fe)?(z[Se]=Le,z[Ee]=W,Se=Ee):(z[Se]=fe,z[te]=W,Se=te);else if(Ee<xe&&0>l(Le,W))z[Se]=Le,z[Ee]=W,Se=Ee;else break e}}return V}function l(z,V){var W=z.sortIndex-V.sortIndex;return W!==0?W:z.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,g=null,x=3,b=!1,E=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function L(z){for(var V=i(p);V!==null;){if(V.callback===null)s(p);else if(V.startTime<=z)s(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function U(z){if(A=!1,L(z),!E)if(i(m)!==null)E=!0,O||(O=!0,q());else{var V=i(p);V!==null&&re(U,V.startTime-z)}}var O=!1,P=-1,B=5,T=-1;function D(){return S?!0:!(r.unstable_now()-T<B)}function G(){if(S=!1,O){var z=r.unstable_now();T=z;var V=!0;try{e:{E=!1,A&&(A=!1,N(P),P=-1),b=!0;var W=x;try{t:{for(L(z),g=i(m);g!==null&&!(g.expirationTime>z&&D());){var Se=g.callback;if(typeof Se=="function"){g.callback=null,x=g.priorityLevel;var xe=Se(g.expirationTime<=z);if(z=r.unstable_now(),typeof xe=="function"){g.callback=xe,L(z),V=!0;break t}g===i(m)&&s(m),L(z)}else s(m);g=i(m)}if(g!==null)V=!0;else{var F=i(p);F!==null&&re(U,F.startTime-z),V=!1}}break e}finally{g=null,x=W,b=!1}V=void 0}}finally{V?q():O=!1}}}var q;if(typeof w=="function")q=function(){w(G)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ne=J.port2;J.port1.onmessage=G,q=function(){ne.postMessage(null)}}else q=function(){_(G,0)};function re(z,V){P=_(function(){z(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var W=x;x=V;try{return z()}finally{x=W}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=x;x=z;try{return V()}finally{x=W}},r.unstable_scheduleCallback=function(z,V,W){var Se=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Se+W:Se):W=Se,z){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=W+xe,z={id:v++,callback:V,priorityLevel:z,startTime:W,expirationTime:xe,sortIndex:-1},W>Se?(z.sortIndex=W,e(p,z),i(m)===null&&z===i(p)&&(A?(N(P),P=-1):A=!0,re(U,W-Se))):(z.sortIndex=xe,e(m,z),E||b||(E=!0,O||(O=!0,q()))),z},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(z){var V=x;return function(){var W=x;x=V;try{return z.apply(this,arguments)}finally{x=W}}}})(Hd)),Hd}var Av;function ub(){return Av||(Av=1,Bd.exports=cb()),Bd.exports}var Gd={exports:{}},Fn={};var Rv;function fb(){if(Rv)return Fn;Rv=1;var r=Mp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Fn.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},Fn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Fn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Fn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:b}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Fn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Fn.requestFormReset=function(m){s.d.r(m)},Fn.unstable_batchedUpdates=function(m,p){return m(p)},Fn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Fn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fn.version="19.2.3",Fn}var Cv;function db(){if(Cv)return Gd.exports;Cv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gd.exports=fb(),Gd.exports}var wv;function hb(){if(wv)return nl;wv=1;var r=ub(),e=Mp(),i=db();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=d;break}if(R===o){y=!0,o=u,a=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===a){y=!0,a=d,o=u;break}if(R===o){y=!0,o=d,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),w=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var J=Symbol.for("react.client.reference");function ne(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===J?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case U:return"Suspense";case O:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case w:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ne(t.type)||"Memo";case B:n=t._payload,t=t._init;try{return ne(t(n))}catch{}}return null}var re=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},Se=[],xe=-1;function F(t){return{current:t}}function te(t){0>xe||(t.current=Se[xe],Se[xe]=null,xe--)}function fe(t,n){xe++,Se[xe]=t.current,t.current=n}var Ee=F(null),Le=F(null),se=F(null),ue=F(null);function De(t,n){switch(fe(se,n),fe(Le,t),fe(Ee,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?X0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=X0(n),t=W0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Ee),fe(Ee,t)}function ke(){te(Ee),te(Le),te(se)}function He(t){t.memoizedState!==null&&fe(ue,t);var n=Ee.current,a=W0(n,t.type);n!==a&&(fe(Le,t),fe(Ee,a))}function ht(t){Le.current===t&&(te(Ee),te(Le)),ue.current===t&&(te(ue),Qo._currentValue=W)}var Zt,bt;function xt(t){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",bt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+t+bt}var Ot=!1;function ft(t,n){if(!t||Ot)return"";Ot=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(he){var le=he}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(he){le=he}t.call(_e.prototype)}}else{try{throw Error()}catch(he){le=he}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(he){if(he&&le&&typeof he.stack=="string")return[he.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var k=y.split(`
`),ae=R.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===ae.length)for(o=k.length-1,u=ae.length-1;1<=o&&0<=u&&k[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==ae[u]){var me=`
`+k[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{Ot=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function rn(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return xt("Activity");default:return""}}function X(t){try{var n="",a=null;do n+=rn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var en=Object.prototype.hasOwnProperty,Rt=r.unstable_scheduleCallback,It=r.unstable_cancelCallback,Qe=r.unstable_shouldYield,I=r.unstable_requestPaint,M=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,ge=r.unstable_ImmediatePriority,be=r.unstable_UserBlockingPriority,pe=r.unstable_NormalPriority,$e=r.unstable_LowPriority,Ue=r.unstable_IdlePriority,Ye=r.log,st=r.unstable_setDisableYieldValue,Ae=null,Re=null;function Ge(t){if(typeof Ye=="function"&&st(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ae,t)}catch{}}var Ie=Math.clz32?Math.clz32:Y,Ne=Math.log,pt=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(Ne(t)/pt|0)|0}var Pe=256,Ce=262144,Be=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Te(o):(y&=R,y!==0?u=Te(y):a||(a=R&~t,a!==0&&(u=Te(a))))):(R=o&~d,R!==0?u=Te(R):y!==0?u=Te(y):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ot(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var t=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),t}function Ct(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function zn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function wi(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,k=t.expirationTimes,ae=t.hiddenUpdates;for(a=y&~a;0<a;){var me=31-Ie(a),_e=1<<me;R[me]=0,k[me]=-1;var le=ae[me];if(le!==null)for(ae[me]=null,me=0;me<le.length;me++){var he=le[me];he!==null&&(he.lane&=-536870913)}a&=~_e}o!==0&&wl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function wl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ie(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function lo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ie(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Jr(t,n){var a=n&-n;return a=(a&42)!==0?1:co(a),(a&(t.suspendedLanes|n))!==0?0:a}function co(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $r(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function uo(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:pv(t.type))}function Gi(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var hi=Math.random().toString(36).slice(2),dn="__reactFiber$"+hi,Tn="__reactProps$"+hi,Di="__reactContainer$"+hi,es="__reactEvents$"+hi,ts="__reactListeners$"+hi,Dl="__reactHandles$"+hi,fo="__reactResources$"+hi,_r="__reactMarker$"+hi;function ho(t){delete t[dn],delete t[Tn],delete t[es],delete t[ts],delete t[Dl]}function za(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Di]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=J0(t);t!==null;){if(a=t[dn])return a;t=J0(t)}return n}t=a,a=t.parentNode}return null}function Fa(t){if(t=t[dn]||t[Di]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function xr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ia(t){var n=t[fo];return n||(n=t[fo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(t){t[_r]=!0}var K=new Set,de={};function oe(t,n){$(t,n),$(t+"Capture",n)}function $(t,n){for(de[t]=n,t=0;t<n.length;t++)K.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ve={},ze={};function Xe(t){return en.call(ze,t)?!0:en.call(Ve,t)?!1:Oe.test(t)?ze[t]=!0:(Ve[t]=!0,!1)}function Ze(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function it(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tn(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Qt(t){if(!t._valueTracker){var n=Pt(t)?"checked":"value";t._valueTracker=tn(t,n,""+t[n])}}function Bt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zt=/[\n"\\]/g;function lt(t){return t.replace(zt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(t,n,a,o,u,d,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Rn(t,y,at(n)):a!=null?Rn(t,y,at(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+at(R):t.removeAttribute("name")}function ta(t,n,a,o,u,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Qt(t);return}a=a!=null?""+at(a):"",n=n!=null?""+at(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Qt(t)}function Rn(t,n,a){n==="number"&&et(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function pi(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+at(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Gt(t,n,a){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+at(a):""}function Cn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(re(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=at(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Qt(t)}function _n(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var wn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||wn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ns(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Dn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Dn(t,d,n[d])}function Ui(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(t){return iy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function na(){}var Nu=null;function Lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var is=null,as=null;function kp(t){var n=Fa(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(An(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+lt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(s(90));An(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Bt(o)}break e;case"textarea":Gt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&pi(t,!!a.multiple,n,!1)}}}var Ou=!1;function Xp(t,n,a){if(Ou)return t(n,a);Ou=!0;try{var o=t(n);return o}finally{if(Ou=!1,(is!==null||as!==null)&&(_c(),is&&(n=is,t=as,as=is=null,kp(n),t)))for(n=0;n<t.length;n++)kp(t[n])}}function po(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=!1;if(ia)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Pu=!1}var Ba=null,zu=null,Nl=null;function Wp(){if(Nl)return Nl;var t,n=zu,a=n.length,o,u="value"in Ba?Ba.value:Ba.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return Nl=u.slice(t,1<o?1-o:void 0)}function Ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function jp(){return!1}function jn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ol:jp,this.isPropagationStopped=jp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=jn(yr),go=g({},yr,{view:0,detail:0}),ay=jn(go),Fu,Iu,vo,zl=g({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(Fu=t.screenX-vo.screenX,Iu=t.screenY-vo.screenY):Iu=Fu=0,vo=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),qp=jn(zl),ry=g({},zl,{dataTransfer:0}),sy=jn(ry),oy=g({},go,{relatedTarget:0}),Bu=jn(oy),ly=g({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=jn(ly),uy=g({},yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fy=jn(uy),dy=g({},yr,{data:0}),Yp=jn(dy),hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},my={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=my[t])?!!n[t]:!1}function Hu(){return gy}var vy=g({},go,{key:function(t){if(t.key){var n=hy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?py[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_y=jn(vy),xy=g({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=jn(xy),yy=g({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),Sy=jn(yy),by=g({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),My=jn(by),Ey=g({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ty=jn(Ey),Ay=g({},yr,{newState:0,oldState:0}),Ry=jn(Ay),Cy=[9,13,27,32],Gu=ia&&"CompositionEvent"in window,_o=null;ia&&"documentMode"in document&&(_o=document.documentMode);var wy=ia&&"TextEvent"in window&&!_o,Kp=ia&&(!Gu||_o&&8<_o&&11>=_o),Qp=" ",Jp=!1;function $p(t,n){switch(t){case"keyup":return Cy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function Dy(t,n){switch(t){case"compositionend":return em(n);case"keypress":return n.which!==32?null:(Jp=!0,Qp);case"textInput":return t=n.data,t===Qp&&Jp?null:t;default:return null}}function Uy(t,n){if(rs)return t==="compositionend"||!Gu&&$p(t,n)?(t=Wp(),Nl=zu=Ba=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kp&&n.locale!=="ko"?null:n.data;default:return null}}var Ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ny[t.type]:n==="textarea"}function nm(t,n,a,o){is?as?as.push(o):as=[o]:is=o,n=Tc(n,"onChange"),0<n.length&&(a=new Pl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var xo=null,yo=null;function Ly(t){I0(t,0)}function Fl(t){var n=xr(t);if(Bt(n))return t}function im(t,n){if(t==="change")return n}var am=!1;if(ia){var Vu;if(ia){var ku="oninput"in document;if(!ku){var rm=document.createElement("div");rm.setAttribute("oninput","return;"),ku=typeof rm.oninput=="function"}Vu=ku}else Vu=!1;am=Vu&&(!document.documentMode||9<document.documentMode)}function sm(){xo&&(xo.detachEvent("onpropertychange",om),yo=xo=null)}function om(t){if(t.propertyName==="value"&&Fl(yo)){var n=[];nm(n,yo,t,Lu(t)),Xp(Ly,n)}}function Oy(t,n,a){t==="focusin"?(sm(),xo=n,yo=a,xo.attachEvent("onpropertychange",om)):t==="focusout"&&sm()}function Py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(yo)}function zy(t,n){if(t==="click")return Fl(n)}function Fy(t,n){if(t==="input"||t==="change")return Fl(n)}function Iy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:Iy;function So(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!en.call(n,u)||!ti(t[u],n[u]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cm(t,n){var a=lm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lm(a)}}function um(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?um(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=et(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=et(t.document)}return n}function Xu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var By=ia&&"documentMode"in document&&11>=document.documentMode,ss=null,Wu=null,bo=null,ju=!1;function dm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ju||ss==null||ss!==et(o)||(o=ss,"selectionStart"in o&&Xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),bo&&So(bo,o)||(bo=o,o=Tc(Wu,"onSelect"),0<o.length&&(n=new Pl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=ss)))}function Sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var os={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},qu={},hm={};ia&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function br(t){if(qu[t])return qu[t];if(!os[t])return t;var n=os[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in hm)return qu[t]=n[a];return t}var pm=br("animationend"),mm=br("animationiteration"),gm=br("animationstart"),Hy=br("transitionrun"),Gy=br("transitionstart"),Vy=br("transitioncancel"),vm=br("transitionend"),_m=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function Ni(t,n){_m.set(t,n),oe(n,[t])}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],ls=0,Zu=0;function Bl(){for(var t=ls,n=Zu=ls=0;n<t;){var a=mi[n];mi[n++]=null;var o=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var d=mi[n];if(mi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&xm(a,u,d)}}function Hl(t,n,a,o){mi[ls++]=t,mi[ls++]=n,mi[ls++]=a,mi[ls++]=o,Zu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ku(t,n,a,o){return Hl(t,n,a,o),Gl(t)}function Mr(t,n){return Hl(t,null,null,n),Gl(t)}function xm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ie(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Gl(t){if(50<Xo)throw Xo=0,sd=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var cs={};function ky(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,n,a,o){return new ky(t,n,a,o)}function Qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,n){var a=t.alternate;return a===null?(a=ni(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ym(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Qu(t)&&(y=1);else if(typeof t=="string")y=YS(t,a,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case T:return t=ni(31,a,n,u),t.elementType=T,t.lanes=d,t;case A:return Er(a.children,u,d,n);case S:y=8,u|=24;break;case _:return t=ni(12,a,n,u|2),t.elementType=_,t.lanes=d,t;case U:return t=ni(13,a,n,u),t.elementType=U,t.lanes=d,t;case O:return t=ni(19,a,n,u),t.elementType=O,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:y=10;break e;case N:y=9;break e;case L:y=11;break e;case P:y=14;break e;case B:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ni(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Er(t,n,a,o){return t=ni(7,t,o,n),t.lanes=a,t}function Ju(t,n,a){return t=ni(6,t,null,n),t.lanes=a,t}function Sm(t){var n=ni(18,null,null,0);return n.stateNode=t,n}function $u(t,n,a){return n=ni(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var bm=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var a=bm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:X(n)},bm.set(t,n),n)}return{value:t,source:n,stack:X(n)}}var us=[],fs=0,kl=null,Mo=0,vi=[],_i=0,Ha=null,Vi=1,ki="";function ra(t,n){us[fs++]=Mo,us[fs++]=kl,kl=t,Mo=n}function Mm(t,n,a){vi[_i++]=Vi,vi[_i++]=ki,vi[_i++]=Ha,Ha=t;var o=Vi;t=ki;var u=32-Ie(o)-1;o&=~(1<<u),a+=1;var d=32-Ie(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Vi=1<<32-Ie(n)+u|a<<u|o,ki=d+t}else Vi=1<<d|a<<u|o,ki=t}function ef(t){t.return!==null&&(ra(t,1),Mm(t,1,0))}function tf(t){for(;t===kl;)kl=us[--fs],us[fs]=null,Mo=us[--fs],us[fs]=null;for(;t===Ha;)Ha=vi[--_i],vi[_i]=null,ki=vi[--_i],vi[_i]=null,Vi=vi[--_i],vi[_i]=null}function Em(t,n){vi[_i++]=Vi,vi[_i++]=ki,vi[_i++]=Ha,Vi=n.id,ki=n.overflow,Ha=t}var Un=null,Jt=null,Tt=!1,Ga=null,xi=!1,nf=Error(s(519));function Va(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(gi(n,t)),nf}function Tm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[Tn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<jo.length;a++)St(jo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),ta(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Cn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||V0(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=na),n=!0):n=!1,n||Va(t,!0)}function Am(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Un=Un.return}}function ds(t){if(t!==Un)return!1;if(!Tt)return Am(t),Tt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Sd(t.type,t.memoizedProps)),a=!a),a&&Jt&&Va(t),Am(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=Q0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=Q0(t)}else n===27?(n=Jt,nr(t.type)?(t=Ad,Ad=null,Jt=t):Jt=n):Jt=Un?Si(t.stateNode.nextSibling):null;return!0}function Tr(){Jt=Un=null,Tt=!1}function af(){var t=Ga;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Ga=null),t}function Eo(t){Ga===null?Ga=[t]:Ga.push(t)}var rf=F(null),Ar=null,sa=null;function ka(t,n,a){fe(rf,n._currentValue),n._currentValue=a}function oa(t){t._currentValue=rf.current,te(rf)}function sf(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function of(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var k=0;k<n.length;k++)if(R.context===n[k]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),sf(d.return,a,t),o||(y=null);break e}d=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),sf(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function hs(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;ti(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===ue.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Qo):t=[Qo])}u=u.return}t!==null&&of(n,t,a,o),n.flags|=262144}function Xl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rr(t){Ar=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Rm(Ar,t)}function Wl(t,n){return Ar===null&&Rr(t),Rm(t,n)}function Rm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(t===null)throw Error(s(308));sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else sa=sa.next=n;return a}var Xy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Wy=r.unstable_scheduleCallback,jy=r.unstable_NormalPriority,hn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new Xy,data:new Map,refCount:0}}function To(t){t.refCount--,t.refCount===0&&Wy(jy,function(){t.controller.abort()})}var Ao=null,cf=0,ps=0,ms=null;function qy(t,n){if(Ao===null){var a=Ao=[];cf=0,ps=dd(),ms={status:"pending",value:void 0,then:function(o){a.push(o)}}}return cf++,n.then(Cm,Cm),n}function Cm(){if(--cf===0&&Ao!==null){ms!==null&&(ms.status="fulfilled");var t=Ao;Ao=null,ps=0,ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Yy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var wm=z.S;z.S=function(t,n){d0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&qy(t,n),wm!==null&&wm(t,n)};var Cr=F(null);function uf(){var t=Cr.current;return t!==null?t:Kt.pooledCache}function jl(t,n){n===null?fe(Cr,Cr.current):fe(Cr,n.pool)}function Dm(){var t=uf();return t===null?null:{parent:hn._currentValue,pool:t}}var gs=Error(s(460)),ff=Error(s(474)),ql=Error(s(542)),Yl={then:function(){}};function Um(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(na,na),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t;default:if(typeof n.status=="string")n.then(na,na);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t}throw Dr=n,gs}}function wr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Dr=a,gs):a}}var Dr=null;function Lm(){if(Dr===null)throw Error(s(459));var t=Dr;return Dr=null,t}function Om(t){if(t===gs||t===ql)throw Error(s(483))}var vs=null,Ro=0;function Zl(t){var n=Ro;return Ro+=1,vs===null&&(vs=[]),Nm(vs,t,n)}function Co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Kl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Pm(t){function n(Q,j){if(t){var ie=Q.deletions;ie===null?(Q.deletions=[j],Q.flags|=16):ie.push(j)}}function a(Q,j){if(!t)return null;for(;j!==null;)n(Q,j),j=j.sibling;return null}function o(Q){for(var j=new Map;Q!==null;)Q.key!==null?j.set(Q.key,Q):j.set(Q.index,Q),Q=Q.sibling;return j}function u(Q,j){return Q=aa(Q,j),Q.index=0,Q.sibling=null,Q}function d(Q,j,ie){return Q.index=ie,t?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<j?(Q.flags|=67108866,j):ie):(Q.flags|=67108866,j)):(Q.flags|=1048576,j)}function y(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,j,ie,ve){return j===null||j.tag!==6?(j=Ju(ie,Q.mode,ve),j.return=Q,j):(j=u(j,ie),j.return=Q,j)}function k(Q,j,ie,ve){var tt=ie.type;return tt===A?me(Q,j,ie.props.children,ve,ie.key):j!==null&&(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===B&&wr(tt)===j.type)?(j=u(j,ie.props),Co(j,ie),j.return=Q,j):(j=Vl(ie.type,ie.key,ie.props,null,Q.mode,ve),Co(j,ie),j.return=Q,j)}function ae(Q,j,ie,ve){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=$u(ie,Q.mode,ve),j.return=Q,j):(j=u(j,ie.children||[]),j.return=Q,j)}function me(Q,j,ie,ve,tt){return j===null||j.tag!==7?(j=Er(ie,Q.mode,ve,tt),j.return=Q,j):(j=u(j,ie),j.return=Q,j)}function _e(Q,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Ju(""+j,Q.mode,ie),j.return=Q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case b:return ie=Vl(j.type,j.key,j.props,null,Q.mode,ie),Co(ie,j),ie.return=Q,ie;case E:return j=$u(j,Q.mode,ie),j.return=Q,j;case B:return j=wr(j),_e(Q,j,ie)}if(re(j)||q(j))return j=Er(j,Q.mode,ie,null),j.return=Q,j;if(typeof j.then=="function")return _e(Q,Zl(j),ie);if(j.$$typeof===w)return _e(Q,Wl(Q,j),ie);Kl(Q,j)}return null}function le(Q,j,ie,ve){var tt=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return tt!==null?null:R(Q,j,""+ie,ve);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case b:return ie.key===tt?k(Q,j,ie,ve):null;case E:return ie.key===tt?ae(Q,j,ie,ve):null;case B:return ie=wr(ie),le(Q,j,ie,ve)}if(re(ie)||q(ie))return tt!==null?null:me(Q,j,ie,ve,null);if(typeof ie.then=="function")return le(Q,j,Zl(ie),ve);if(ie.$$typeof===w)return le(Q,j,Wl(Q,ie),ve);Kl(Q,ie)}return null}function he(Q,j,ie,ve,tt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Q=Q.get(ie)||null,R(j,Q,""+ve,tt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case b:return Q=Q.get(ve.key===null?ie:ve.key)||null,k(j,Q,ve,tt);case E:return Q=Q.get(ve.key===null?ie:ve.key)||null,ae(j,Q,ve,tt);case B:return ve=wr(ve),he(Q,j,ie,ve,tt)}if(re(ve)||q(ve))return Q=Q.get(ie)||null,me(j,Q,ve,tt,null);if(typeof ve.then=="function")return he(Q,j,ie,Zl(ve),tt);if(ve.$$typeof===w)return he(Q,j,ie,Wl(j,ve),tt);Kl(j,ve)}return null}function We(Q,j,ie,ve){for(var tt=null,Ut=null,Je=j,mt=j=0,Et=null;Je!==null&&mt<ie.length;mt++){Je.index>mt?(Et=Je,Je=null):Et=Je.sibling;var Nt=le(Q,Je,ie[mt],ve);if(Nt===null){Je===null&&(Je=Et);break}t&&Je&&Nt.alternate===null&&n(Q,Je),j=d(Nt,j,mt),Ut===null?tt=Nt:Ut.sibling=Nt,Ut=Nt,Je=Et}if(mt===ie.length)return a(Q,Je),Tt&&ra(Q,mt),tt;if(Je===null){for(;mt<ie.length;mt++)Je=_e(Q,ie[mt],ve),Je!==null&&(j=d(Je,j,mt),Ut===null?tt=Je:Ut.sibling=Je,Ut=Je);return Tt&&ra(Q,mt),tt}for(Je=o(Je);mt<ie.length;mt++)Et=he(Je,Q,mt,ie[mt],ve),Et!==null&&(t&&Et.alternate!==null&&Je.delete(Et.key===null?mt:Et.key),j=d(Et,j,mt),Ut===null?tt=Et:Ut.sibling=Et,Ut=Et);return t&&Je.forEach(function(or){return n(Q,or)}),Tt&&ra(Q,mt),tt}function rt(Q,j,ie,ve){if(ie==null)throw Error(s(151));for(var tt=null,Ut=null,Je=j,mt=j=0,Et=null,Nt=ie.next();Je!==null&&!Nt.done;mt++,Nt=ie.next()){Je.index>mt?(Et=Je,Je=null):Et=Je.sibling;var or=le(Q,Je,Nt.value,ve);if(or===null){Je===null&&(Je=Et);break}t&&Je&&or.alternate===null&&n(Q,Je),j=d(or,j,mt),Ut===null?tt=or:Ut.sibling=or,Ut=or,Je=Et}if(Nt.done)return a(Q,Je),Tt&&ra(Q,mt),tt;if(Je===null){for(;!Nt.done;mt++,Nt=ie.next())Nt=_e(Q,Nt.value,ve),Nt!==null&&(j=d(Nt,j,mt),Ut===null?tt=Nt:Ut.sibling=Nt,Ut=Nt);return Tt&&ra(Q,mt),tt}for(Je=o(Je);!Nt.done;mt++,Nt=ie.next())Nt=he(Je,Q,mt,Nt.value,ve),Nt!==null&&(t&&Nt.alternate!==null&&Je.delete(Nt.key===null?mt:Nt.key),j=d(Nt,j,mt),Ut===null?tt=Nt:Ut.sibling=Nt,Ut=Nt);return t&&Je.forEach(function(rb){return n(Q,rb)}),Tt&&ra(Q,mt),tt}function Yt(Q,j,ie,ve){if(typeof ie=="object"&&ie!==null&&ie.type===A&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case b:e:{for(var tt=ie.key;j!==null;){if(j.key===tt){if(tt=ie.type,tt===A){if(j.tag===7){a(Q,j.sibling),ve=u(j,ie.props.children),ve.return=Q,Q=ve;break e}}else if(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===B&&wr(tt)===j.type){a(Q,j.sibling),ve=u(j,ie.props),Co(ve,ie),ve.return=Q,Q=ve;break e}a(Q,j);break}else n(Q,j);j=j.sibling}ie.type===A?(ve=Er(ie.props.children,Q.mode,ve,ie.key),ve.return=Q,Q=ve):(ve=Vl(ie.type,ie.key,ie.props,null,Q.mode,ve),Co(ve,ie),ve.return=Q,Q=ve)}return y(Q);case E:e:{for(tt=ie.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){a(Q,j.sibling),ve=u(j,ie.children||[]),ve.return=Q,Q=ve;break e}else{a(Q,j);break}else n(Q,j);j=j.sibling}ve=$u(ie,Q.mode,ve),ve.return=Q,Q=ve}return y(Q);case B:return ie=wr(ie),Yt(Q,j,ie,ve)}if(re(ie))return We(Q,j,ie,ve);if(q(ie)){if(tt=q(ie),typeof tt!="function")throw Error(s(150));return ie=tt.call(ie),rt(Q,j,ie,ve)}if(typeof ie.then=="function")return Yt(Q,j,Zl(ie),ve);if(ie.$$typeof===w)return Yt(Q,j,Wl(Q,ie),ve);Kl(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,j!==null&&j.tag===6?(a(Q,j.sibling),ve=u(j,ie),ve.return=Q,Q=ve):(a(Q,j),ve=Ju(ie,Q.mode,ve),ve.return=Q,Q=ve),y(Q)):a(Q,j)}return function(Q,j,ie,ve){try{Ro=0;var tt=Yt(Q,j,ie,ve);return vs=null,tt}catch(Je){if(Je===gs||Je===ql)throw Je;var Ut=ni(29,Je,null,Q.mode);return Ut.lanes=ve,Ut.return=Q,Ut}}}var Ur=Pm(!0),zm=Pm(!1),Xa=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ja(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Gl(t),xm(t,null,a),n}return Hl(t,o,n,a),Gl(t)}function wo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,lo(t,a)}}function pf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var mf=!1;function Do(){if(mf){var t=ms;if(t!==null)throw t}}function Uo(t,n,a,o){mf=!1;var u=t.updateQueue;Xa=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var k=R,ae=k.next;k.next=null,y===null?d=ae:y.next=ae,y=k;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==y&&(R===null?me.firstBaseUpdate=ae:R.next=ae,me.lastBaseUpdate=k))}if(d!==null){var _e=u.baseState;y=0,me=ae=k=null,R=d;do{var le=R.lane&-536870913,he=le!==R.lane;if(he?(Mt&le)===le:(o&le)===le){le!==0&&le===ps&&(mf=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=t,rt=R;le=n;var Yt=a;switch(rt.tag){case 1:if(We=rt.payload,typeof We=="function"){_e=We.call(Yt,_e,le);break e}_e=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=rt.payload,le=typeof We=="function"?We.call(Yt,_e,le):We,le==null)break e;_e=g({},_e,le);break e;case 2:Xa=!0}}le=R.callback,le!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[le]:he.push(le))}else he={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(ae=me=he,k=_e):me=me.next=he,y|=le;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;he=R,R=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);me===null&&(k=_e),u.baseState=k,u.firstBaseUpdate=ae,u.lastBaseUpdate=me,d===null&&(u.shared.lanes=0),Qa|=y,t.lanes=y,t.memoizedState=_e}}function Fm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Im(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Fm(a[t],n)}var _s=F(null),Ql=F(0);function Bm(t,n){t=ga,fe(Ql,t),fe(_s,n),ga=t|n.baseLanes}function gf(){fe(Ql,ga),fe(_s,_s.current)}function vf(){ga=Ql.current,te(_s),te(Ql)}var ii=F(null),yi=null;function qa(t){var n=t.alternate;fe(ln,ln.current&1),fe(ii,t),yi===null&&(n===null||_s.current!==null||n.memoizedState!==null)&&(yi=t)}function _f(t){fe(ln,ln.current),fe(ii,t),yi===null&&(yi=t)}function Hm(t){t.tag===22?(fe(ln,ln.current),fe(ii,t),yi===null&&(yi=t)):Ya()}function Ya(){fe(ln,ln.current),fe(ii,ii.current)}function ai(t){te(ii),yi===t&&(yi=null),te(ln)}var ln=F(0);function Jl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ed(a)||Td(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var la=0,dt=null,jt=null,pn=null,$l=!1,xs=!1,Nr=!1,ec=0,No=0,ys=null,Zy=0;function sn(){throw Error(s(321))}function xf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ti(t[a],n[a]))return!1;return!0}function yf(t,n,a,o,u,d){return la=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Mg:Pf,Nr=!1,d=a(o,u),Nr=!1,xs&&(d=Vm(n,a,o,u)),Gm(t),d}function Gm(t){z.H=Po;var n=jt!==null&&jt.next!==null;if(la=0,pn=jt=dt=null,$l=!1,No=0,ys=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&Xl(t)&&(mn=!0))}function Vm(t,n,a,o){dt=t;var u=0;do{if(xs&&(ys=null),No=0,xs=!1,25<=u)throw Error(s(301));if(u+=1,pn=jt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Eg,d=n(a,o)}while(xs);return d}function Ky(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Lo(n):n,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Sf(){var t=ec!==0;return ec=0,t}function bf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Mf(t){if($l){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}$l=!1}la=0,pn=jt=dt=null,xs=!1,No=ec=0,ys=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?dt.memoizedState=pn=t:pn=pn.next=t,pn}function cn(){if(jt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var n=pn===null?dt.memoizedState:pn.next;if(n!==null)pn=n,jt=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},pn===null?dt.memoizedState=pn=t:pn=pn.next=t}return pn}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(t){var n=No;return No+=1,ys===null&&(ys=[]),t=Nm(ys,t,n),n=dt,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Mg:Pf),t}function nc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Lo(t);if(t.$$typeof===w)return Nn(t)}throw Error(s(438,String(t)))}function Ef(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=tc(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function ca(t,n){return typeof n=="function"?n(t):n}function ic(t){var n=cn();return Tf(n,jt,t)}function Tf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=y=null,k=null,ae=n,me=!1;do{var _e=ae.lane&-536870913;if(_e!==ae.lane?(Mt&_e)===_e:(la&_e)===_e){var le=ae.revertLane;if(le===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),_e===ps&&(me=!0);else if((la&le)===le){ae=ae.next,le===ps&&(me=!0);continue}else _e={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},k===null?(R=k=_e,y=d):k=k.next=_e,dt.lanes|=le,Qa|=le;_e=ae.action,Nr&&a(d,_e),d=ae.hasEagerState?ae.eagerState:a(d,_e)}else le={lane:_e,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},k===null?(R=k=le,y=d):k=k.next=le,dt.lanes|=_e,Qa|=_e;ae=ae.next}while(ae!==null&&ae!==n);if(k===null?y=d:k.next=R,!ti(d,t.memoizedState)&&(mn=!0,me&&(a=ms,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=k,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Af(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);ti(d,n.memoizedState)||(mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function km(t,n,a){var o=dt,u=cn(),d=Tt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ti((jt||u).memoizedState,a);if(y&&(u.memoizedState=a,mn=!0),u=u.queue,wf(jm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,Ss(9,{destroy:void 0},Wm.bind(null,o,u,a,n),null),Kt===null)throw Error(s(349));d||(la&127)!==0||Xm(o,n,a)}return a}function Xm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=tc(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Wm(t,n,a,o){n.value=a,n.getSnapshot=o,qm(n)&&Ym(t)}function jm(t,n,a){return a(function(){qm(n)&&Ym(t)})}function qm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ti(t,a)}catch{return!0}}function Ym(t){var n=Mr(t,2);n!==null&&Qn(n,t,2)}function Rf(t){var n=Vn();if(typeof t=="function"){var a=t;if(t=a(),Nr){Ge(!0);try{a()}finally{Ge(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},n}function Zm(t,n,a,o){return t.baseState=a,Tf(t,jt,typeof o=="function"?o:ca)}function Qy(t,n,a,o,u){if(sc(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Km(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Km(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=z.T,y={};z.T=y;try{var R=a(u,o),k=z.S;k!==null&&k(y,R),Qm(t,n,R)}catch(ae){Cf(t,n,ae)}finally{d!==null&&y.types!==null&&(d.types=y.types),z.T=d}}else try{d=a(u,o),Qm(t,n,d)}catch(ae){Cf(t,n,ae)}}function Qm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Jm(t,n,o)},function(o){return Cf(t,n,o)}):Jm(t,n,a)}function Jm(t,n,a){n.status="fulfilled",n.value=a,$m(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Km(t,a)))}function Cf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,$m(n),n=n.next;while(n!==o)}t.action=null}function $m(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function eg(t,n){return n}function tg(t,n){if(Tt){var a=Kt.formState;if(a!==null){e:{var o=dt;if(Tt){if(Jt){t:{for(var u=Jt,d=xi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Si(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Jt=Si(u.nextSibling),o=u.data==="F!";break e}}Va(o)}o=!1}o&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eg,lastRenderedState:n},a.queue=o,a=yg.bind(null,dt,o),o.dispatch=a,o=Rf(!1),d=Of.bind(null,dt,!1,o.queue),o=Vn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Qy.bind(null,dt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function ng(t){var n=cn();return ig(n,jt,t)}function ig(t,n,a){if(n=Tf(t,n,eg)[0],t=ic(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Lo(n)}catch(y){throw y===gs?ql:y}else o=n;n=cn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,Ss(9,{destroy:void 0},Jy.bind(null,u,a),null)),[o,d,t]}function Jy(t,n){t.action=n}function ag(t){var n=cn(),a=jt;if(a!==null)return ig(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Ss(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=tc(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function rg(){return cn().memoizedState}function ac(t,n,a,o){var u=Vn();dt.flags|=t,u.memoizedState=Ss(1|n,{destroy:void 0},a,o===void 0?null:o)}function rc(t,n,a,o){var u=cn();o=o===void 0?null:o;var d=u.memoizedState.inst;jt!==null&&o!==null&&xf(o,jt.memoizedState.deps)?u.memoizedState=Ss(n,d,a,o):(dt.flags|=t,u.memoizedState=Ss(1|n,d,a,o))}function sg(t,n){ac(8390656,8,t,n)}function wf(t,n){rc(2048,8,t,n)}function $y(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=tc(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function og(t){var n=cn().memoizedState;return $y({ref:n,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function lg(t,n){return rc(4,2,t,n)}function cg(t,n){return rc(4,4,t,n)}function ug(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function fg(t,n,a){a=a!=null?a.concat([t]):null,rc(4,4,ug.bind(null,n,t),a)}function Df(){}function dg(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&xf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function hg(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&xf(n,o[1]))return o[0];if(o=t(),Nr){Ge(!0);try{t()}finally{Ge(!1)}}return a.memoizedState=[o,n],o}function Uf(t,n,a){return a===void 0||(la&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=p0(),dt.lanes|=t,Qa|=t,a)}function pg(t,n,a,o){return ti(a,n)?a:_s.current!==null?(t=Uf(t,a,o),ti(t,n)||(mn=!0),t):(la&42)===0||(la&1073741824)!==0&&(Mt&261930)===0?(mn=!0,t.memoizedState=a):(t=p0(),dt.lanes|=t,Qa|=t,n)}function mg(t,n,a,o,u){var d=V.p;V.p=d!==0&&8>d?d:8;var y=z.T,R={};z.T=R,Of(t,!1,n,a);try{var k=u(),ae=z.S;if(ae!==null&&ae(R,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var me=Yy(k,o);Oo(t,n,me,oi(t))}else Oo(t,n,o,oi(t))}catch(_e){Oo(t,n,{then:function(){},status:"rejected",reason:_e},oi())}finally{V.p=d,y!==null&&R.types!==null&&(y.types=R.types),z.T=y}}function eS(){}function Nf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=gg(t).queue;mg(t,u,n,W,a===null?eS:function(){return vg(t),a(o)})}function gg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function vg(t){var n=gg(t);n.next===null&&(n=t.alternate.memoizedState),Oo(t,n.next.queue,{},oi())}function Lf(){return Nn(Qo)}function _g(){return cn().memoizedState}function xg(){return cn().memoizedState}function tS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Wa(a);var o=ja(n,t,a);o!==null&&(Qn(o,n,a),wo(o,n,a)),n={cache:lf()},t.payload=n;return}n=n.return}}function nS(t,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sc(t)?Sg(n,a):(a=Ku(t,n,a,o),a!==null&&(Qn(a,t,o),bg(a,n,o)))}function yg(t,n,a){var o=oi();Oo(t,n,a,o)}function Oo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(sc(t))Sg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,R=d(y,a);if(u.hasEagerState=!0,u.eagerState=R,ti(R,y))return Hl(t,n,u,0),Kt===null&&Bl(),!1}catch{}if(a=Ku(t,n,u,o),a!==null)return Qn(a,t,o),bg(a,n,o),!0}return!1}function Of(t,n,a,o){if(o={lane:2,revertLane:dd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},sc(t)){if(n)throw Error(s(479))}else n=Ku(t,a,o,2),n!==null&&Qn(n,t,2)}function sc(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Sg(t,n){xs=$l=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function bg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,lo(t,a)}}var Po={readContext:Nn,use:nc,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};Po.useEffectEvent=sn;var Mg={readContext:Nn,use:nc,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:sg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ac(4194308,4,ug.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ac(4194308,4,t,n)},useInsertionEffect:function(t,n){ac(4,2,t,n)},useMemo:function(t,n){var a=Vn();n=n===void 0?null:n;var o=t();if(Nr){Ge(!0);try{t()}finally{Ge(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Vn();if(a!==void 0){var u=a(n);if(Nr){Ge(!0);try{a(n)}finally{Ge(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=nS.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=Rf(t);var n=t.queue,a=yg.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Df,useDeferredValue:function(t,n){var a=Vn();return Uf(a,t,n)},useTransition:function(){var t=Rf(!1);return t=mg.bind(null,dt,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=Vn();if(Tt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Kt===null)throw Error(s(349));(Mt&127)!==0||Xm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,sg(jm.bind(null,o,d,t),[t]),o.flags|=2048,Ss(9,{destroy:void 0},Wm.bind(null,o,d,a,n),null),a},useId:function(){var t=Vn(),n=Kt.identifierPrefix;if(Tt){var a=ki,o=Vi;a=(o&~(1<<32-Ie(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ec++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Zy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Lf,useFormState:tg,useActionState:tg,useOptimistic:function(t){var n=Vn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Of.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ef,useCacheRefresh:function(){return Vn().memoizedState=tS.bind(null,dt)},useEffectEvent:function(t){var n=Vn(),a={impl:t};return n.memoizedState=a,function(){if((Ft&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Pf={readContext:Nn,use:nc,useCallback:dg,useContext:Nn,useEffect:wf,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:hg,useReducer:ic,useRef:rg,useState:function(){return ic(ca)},useDebugValue:Df,useDeferredValue:function(t,n){var a=cn();return pg(a,jt.memoizedState,t,n)},useTransition:function(){var t=ic(ca)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:km,useId:_g,useHostTransitionStatus:Lf,useFormState:ng,useActionState:ng,useOptimistic:function(t,n){var a=cn();return Zm(a,jt,t,n)},useMemoCache:Ef,useCacheRefresh:xg};Pf.useEffectEvent=og;var Eg={readContext:Nn,use:nc,useCallback:dg,useContext:Nn,useEffect:wf,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:hg,useReducer:Af,useRef:rg,useState:function(){return Af(ca)},useDebugValue:Df,useDeferredValue:function(t,n){var a=cn();return jt===null?Uf(a,t,n):pg(a,jt.memoizedState,t,n)},useTransition:function(){var t=Af(ca)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:km,useId:_g,useHostTransitionStatus:Lf,useFormState:ag,useActionState:ag,useOptimistic:function(t,n){var a=cn();return jt!==null?Zm(a,jt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ef,useCacheRefresh:xg};Eg.useEffectEvent=og;function zf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ff={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=oi(),u=Wa(o);u.payload=n,a!=null&&(u.callback=a),n=ja(t,u,o),n!==null&&(Qn(n,t,o),wo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=oi(),u=Wa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ja(t,u,o),n!==null&&(Qn(n,t,o),wo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),o=Wa(a);o.tag=2,n!=null&&(o.callback=n),n=ja(t,o,a),n!==null&&(Qn(n,t,a),wo(n,t,a))}};function Tg(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!So(a,o)||!So(u,d):!0}function Ag(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Ff.enqueueReplaceState(n,n.state,null)}function Lr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Rg(t){Il(t)}function Cg(t){console.error(t)}function wg(t){Il(t)}function oc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Dg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function If(t,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){oc(t,n)},a}function Ug(t){return t=Wa(t),t.tag=3,t}function Ng(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){Dg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Dg(n,a,o),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function iS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&hs(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?xc():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),cd(t,o,u)),!1;case 22:return a.flags|=65536,o===Yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),cd(t,o,u)),!1}throw Error(s(435,a.tag))}return cd(t,o,u),xc(),!1}if(Tt)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==nf&&(t=Error(s(422),{cause:o}),Eo(gi(t,a)))):(o!==nf&&(n=Error(s(423),{cause:o}),Eo(gi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=gi(o,a),u=If(t.stateNode,o,u),pf(t,u),on!==4&&(on=2)),!1;var d=Error(s(520),{cause:o});if(d=gi(d,a),ko===null?ko=[d]:ko.push(d),on!==4&&(on=2),n===null)return!0;o=gi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=If(a.stateNode,o,t),pf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ja===null||!Ja.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ug(u),Ng(u,t,a,o),pf(a,u),!1}a=a.return}while(a!==null);return!1}var Bf=Error(s(461)),mn=!1;function Ln(t,n,a,o){n.child=t===null?zm(n,null,a,o):Ur(n,t.child,a,o)}function Lg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Rr(n),o=yf(t,n,a,y,d,u),R=Sf(),t!==null&&!mn?(bf(t,n,u),ua(t,n,u)):(Tt&&R&&ef(n),n.flags|=1,Ln(t,n,o,u),n.child)}function Og(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Qu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Pg(t,n,d,o,u)):(t=Vl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!qf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:So,a(y,o)&&t.ref===n.ref)return ua(t,n,u)}return n.flags|=1,t=aa(d,o),t.ref=n.ref,t.return=n,n.child=t}function Pg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(So(d,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=d,qf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ua(t,n,u)}return Hf(t,n,a,o,u)}function zg(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Fg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&jl(n,d!==null?d.cachePool:null),d!==null?Bm(n,d):gf(),Hm(n);else return o=n.lanes=536870912,Fg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(jl(n,d.cachePool),Bm(n,d),Ya(),n.memoizedState=null):(t!==null&&jl(n,null),gf(),Ya());return Ln(t,n,u,a),n.child}function zo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fg(t,n,a,o,u){var d=uf();return d=d===null?null:{parent:hn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&jl(n,null),gf(),Hm(n),t!==null&&hs(t,n,o,!0),n.childLanes=u,null}function lc(t,n){return n=uc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ig(t,n,a){return Ur(n,t.child,null,a),t=lc(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function aS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=lc(n,o),n.lanes=536870912,zo(null,t);if(_f(n),(t=Jt)?(t=K0(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=Sm(t),a.return=n,n.child=a,Un=n,Jt=null)):t=null,t===null)throw Va(n);return n.lanes=536870912,null}return lc(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(_f(n),u)if(n.flags&256)n.flags&=-257,n=Ig(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||hs(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=Kt,o!==null&&(y=Jr(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,Mr(t,y),Qn(o,t,y),Bf;xc(),n=Ig(t,n,a)}else t=d.treeContext,Jt=Si(y.nextSibling),Un=n,Tt=!0,Ga=null,xi=!1,t!==null&&Em(n,t),n=lc(n,o),n.flags|=4096;return n}return t=aa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function cc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Hf(t,n,a,o,u){return Rr(n),a=yf(t,n,a,o,void 0,u),o=Sf(),t!==null&&!mn?(bf(t,n,u),ua(t,n,u)):(Tt&&o&&ef(n),n.flags|=1,Ln(t,n,a,u),n.child)}function Bg(t,n,a,o,u,d){return Rr(n),n.updateQueue=null,a=Vm(n,o,a,u),Gm(t),o=Sf(),t!==null&&!mn?(bf(t,n,d),ua(t,n,d)):(Tt&&o&&ef(n),n.flags|=1,Ln(t,n,a,d),n.child)}function Hg(t,n,a,o,u){if(Rr(n),n.stateNode===null){var d=cs,y=a.contextType;typeof y=="object"&&y!==null&&(d=Nn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ff,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},df(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?Nn(y):cs,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(zf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Ff.enqueueReplaceState(d,d.state,null),Uo(n,o,d,u),Do(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,k=Lr(a,R);d.props=k;var ae=d.context,me=a.contextType;y=cs,typeof me=="object"&&me!==null&&(y=Nn(me));var _e=a.getDerivedStateFromProps;me=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ae!==y)&&Ag(n,d,o,y),Xa=!1;var le=n.memoizedState;d.state=le,Uo(n,o,d,u),Do(),ae=n.memoizedState,R||le!==ae||Xa?(typeof _e=="function"&&(zf(n,a,_e,o),ae=n.memoizedState),(k=Xa||Tg(n,a,k,o,le,ae,y))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),d.props=o,d.state=ae,d.context=y,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,hf(t,n),y=n.memoizedProps,me=Lr(a,y),d.props=me,_e=n.pendingProps,le=d.context,ae=a.contextType,k=cs,typeof ae=="object"&&ae!==null&&(k=Nn(ae)),R=a.getDerivedStateFromProps,(ae=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==_e||le!==k)&&Ag(n,d,o,k),Xa=!1,le=n.memoizedState,d.state=le,Uo(n,o,d,u),Do();var he=n.memoizedState;y!==_e||le!==he||Xa||t!==null&&t.dependencies!==null&&Xl(t.dependencies)?(typeof R=="function"&&(zf(n,a,R,o),he=n.memoizedState),(me=Xa||Tg(n,a,me,o,le,he,k)||t!==null&&t.dependencies!==null&&Xl(t.dependencies))?(ae||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,he,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,he,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),d.props=o,d.state=he,d.context=k,o=me):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,cc(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Ur(n,t.child,null,u),n.child=Ur(n,null,a,u)):Ln(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ua(t,n,u),t}function Gg(t,n,a,o){return Tr(),n.flags|=256,Ln(t,n,a,o),n.child}var Gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(t){return{baseLanes:t,cachePool:Dm()}}function kf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function Vg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(u?qa(n):Ya(),(t=Jt)?(t=K0(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=Sm(t),a.return=n,n.child=a,Un=n,Jt=null)):t=null,t===null)throw Va(n);return Td(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ya(),u=n.mode,R=uc({mode:"hidden",children:R},u),o=Er(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Vf(a),o.childLanes=kf(t,y,a),n.memoizedState=Gf,zo(null,o)):(qa(n),Xf(n,R))}var k=t.memoizedState;if(k!==null&&(R=k.dehydrated,R!==null)){if(d)n.flags&256?(qa(n),n.flags&=-257,n=Wf(t,n,a)):n.memoizedState!==null?(Ya(),n.child=t.child,n.flags|=128,n=null):(Ya(),R=o.fallback,u=n.mode,o=uc({mode:"visible",children:o.children},u),R=Er(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ur(n,t.child,null,a),o=n.child,o.memoizedState=Vf(a),o.childLanes=kf(t,y,a),n.memoizedState=Gf,n=zo(null,o));else if(qa(n),Td(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ae=y.dgst;y=ae,o=Error(s(419)),o.stack="",o.digest=y,Eo({value:o,source:null,stack:null}),n=Wf(t,n,a)}else if(mn||hs(t,n,a,!1),y=(a&t.childLanes)!==0,mn||y){if(y=Kt,y!==null&&(o=Jr(y,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,Mr(t,o),Qn(y,t,o),Bf;Ed(R)||xc(),n=Wf(t,n,a)}else Ed(R)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,Jt=Si(R.nextSibling),Un=n,Tt=!0,Ga=null,xi=!1,t!==null&&Em(n,t),n=Xf(n,o.children),n.flags|=4096);return n}return u?(Ya(),R=o.fallback,u=n.mode,k=t.child,ae=k.sibling,o=aa(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,ae!==null?R=aa(ae,R):(R=Er(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,zo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Vf(a):(u=R.cachePool,u!==null?(k=hn._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=Dm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=kf(t,y,a),n.memoizedState=Gf,zo(t.child,o)):(qa(n),a=t.child,t=a.sibling,a=aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Xf(t,n){return n=uc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function uc(t,n){return t=ni(22,t,null,n),t.lanes=0,t}function Wf(t,n,a){return Ur(n,t.child,null,a),t=Xf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function kg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),sf(t.return,n,a)}function jf(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function Xg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=ln.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,fe(ln,y),Ln(t,n,o,a),o=Tt?Mo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,a,n);else if(t.tag===19)kg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Jl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),jf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Jl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}jf(n,!0,a,null,d,o);break;case"together":jf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ua(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(hs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=aa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=aa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function qf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Xl(t)))}function rS(t,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),ka(n,hn,t.memoizedState.cache),Tr();break;case 27:case 5:He(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,_f(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vg(t,n,a):(qa(n),t=ua(t,n,a),t!==null?t.sibling:null);qa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(hs(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Xg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),fe(ln,ln.current),o)break;return null;case 22:return n.lanes=0,zg(t,n,a,n.pendingProps);case 24:ka(n,hn,t.memoizedState.cache)}return ua(t,n,a)}function Wg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!qf(t,a)&&(n.flags&128)===0)return mn=!1,rS(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Tt&&(n.flags&1048576)!==0&&Mm(n,Mo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=wr(n.elementType),n.type=t,typeof t=="function")Qu(t)?(o=Lr(t,o),n.tag=1,n=Hg(null,n,t,o,a)):(n.tag=0,n=Hf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=Lg(null,n,t,o,a);break e}else if(u===P){n.tag=14,n=Og(null,n,t,o,a);break e}}throw n=ne(t)||t,Error(s(306,n,""))}}return n;case 0:return Hf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Lr(o,n.pendingProps),Hg(t,n,o,u,a);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,hf(t,n),Uo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ka(n,hn,o),o!==d.cache&&of(n,[hn],a,!0),Do(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Gg(t,n,o,a);break e}else if(o!==u){u=gi(Error(s(424)),n),Eo(u),n=Gg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Jt=Si(t.firstChild),Un=n,Tt=!0,Ga=null,xi=!0,a=zm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Tr(),o===u){n=ua(t,n,a);break e}Ln(t,n,o,a)}n=n.child}return n;case 26:return cc(t,n),t===null?(a=nv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,t=n.pendingProps,o=Ac(se.current).createElement(a),o[dn]=n,o[Tn]=t,On(o,a,t),C(o),n.stateNode=o):n.memoizedState=nv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&Tt&&(o=n.stateNode=$0(n.type,n.pendingProps,se.current),Un=n,xi=!0,u=Jt,nr(n.type)?(Ad=u,Jt=Si(o.firstChild)):Jt=u),Ln(t,n,n.pendingProps.children,a),cc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Tt&&((u=o=Jt)&&(o=PS(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Un=n,Jt=Si(o.firstChild),xi=!1,u=!0):u=!1),u||Va(n)),He(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,Sd(u,d)?o=null:y!==null&&Sd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=yf(t,n,Ky,null,null,a),Qo._currentValue=u),cc(t,n),Ln(t,n,o,a),n.child;case 6:return t===null&&Tt&&((t=a=Jt)&&(a=zS(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Un=n,Jt=null,t=!0):t=!1),t||Va(n)),null;case 13:return Vg(t,n,a);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ur(n,null,o,a):Ln(t,n,o,a),n.child;case 11:return Lg(t,n,n.type,n.pendingProps,a);case 7:return Ln(t,n,n.pendingProps,a),n.child;case 8:return Ln(t,n,n.pendingProps.children,a),n.child;case 12:return Ln(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ka(n,n.type,o.value),Ln(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Rr(n),u=Nn(u),o=o(u),n.flags|=1,Ln(t,n,o,a),n.child;case 14:return Og(t,n,n.type,n.pendingProps,a);case 15:return Pg(t,n,n.type,n.pendingProps,a);case 19:return Xg(t,n,a);case 31:return aS(t,n,a);case 22:return zg(t,n,a,n.pendingProps);case 24:return Rr(n),o=Nn(hn),t===null?(u=uf(),u===null&&(u=Kt,d=lf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},df(n),ka(n,hn,u)):((t.lanes&a)!==0&&(hf(t,n),Uo(n,null,null,a),Do()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ka(n,hn,o)):(o=d.cache,ka(n,hn,o),o!==u.cache&&of(n,[hn],a,!0))),Ln(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function fa(t){t.flags|=4}function Yf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(_0())t.flags|=8192;else throw Dr=Yl,ff}else t.flags&=-16777217}function jg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ov(n))if(_0())t.flags|=8192;else throw Dr=Yl,ff}function fc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ht():536870912,t.lanes|=n,Ts|=n)}function Fo(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function $t(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function sS(t,n,a){var o=n.pendingProps;switch(tf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),oa(hn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ds(n)?fa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,af())),$t(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(fa(n),d!==null?($t(n),jg(n,d)):($t(n),Yf(n,u,null,o,a))):d?d!==t.memoizedState?(fa(n),$t(n),jg(n,d)):($t(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&fa(n),$t(n),Yf(n,u,t,o,a)),null;case 27:if(ht(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $t(n),null}t=Ee.current,ds(n)?Tm(n):(t=$0(u,o,a),n.stateNode=t,fa(n))}return $t(n),null;case 5:if(ht(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $t(n),null}if(d=Ee.current,ds(n))Tm(n);else{var y=Ac(se.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[dn]=n,d[Tn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(On(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&fa(n)}}return $t(n),Yf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&fa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=se.current,ds(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||V0(t.nodeValue,a)),t||Va(n,!0)}else t=Ac(t).createTextNode(o),t[dn]=n,n.stateNode=t}return $t(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ds(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[dn]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),t=!1}else a=af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $t(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ds(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),u=!1}else u=af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),fc(n,n.updateQueue),$t(n),null);case 4:return ke(),t===null&&gd(n.stateNode.containerInfo),$t(n),null;case 10:return oa(n.type),$t(n),null;case 19:if(te(ln),o=n.memoizedState,o===null)return $t(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Fo(o,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Jl(t),d!==null){for(n.flags|=128,Fo(o,!1),t=d.updateQueue,n.updateQueue=t,fc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ym(a,t),a=a.sibling;return fe(ln,ln.current&1|2),Tt&&ra(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&M()>gc&&(n.flags|=128,u=!0,Fo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Jl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,fc(n,t),Fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Tt)return $t(n),null}else 2*M()-o.renderingStartTime>gc&&a!==536870912&&(n.flags|=128,u=!0,Fo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=M(),t.sibling=null,a=ln.current,fe(ln,u?a&1|2:a&1),Tt&&ra(n,o.treeForkCount),t):($t(n),null);case 22:case 23:return ai(n),vf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&fc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&te(Cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),oa(hn),$t(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function oS(t,n){switch(tf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return oa(hn),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return te(ln),null;case 4:return ke(),null;case 10:return oa(n.type),null;case 22:case 23:return ai(n),vf(),t!==null&&te(Cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return oa(hn),null;case 25:return null;default:return null}}function qg(t,n){switch(tf(n),n.tag){case 3:oa(hn),ke();break;case 26:case 27:case 5:ht(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:te(ln);break;case 10:oa(n.type);break;case 22:case 23:ai(n),vf(),t!==null&&te(Cr);break;case 24:oa(hn)}}function Io(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function Za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var k=a,ae=R;try{ae()}catch(me){kt(u,k,me)}}}o=o.next}while(o!==d)}}catch(me){kt(n,n.return,me)}}function Yg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Im(n,a)}catch(o){kt(t,t.return,o)}}}function Zg(t,n,a){a.props=Lr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function Bo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Xi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function Kg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function Zf(t,n,a){try{var o=t.stateNode;wS(o,t.type,a,n),o[Tn]=n}catch(u){kt(t,t.return,u)}}function Qg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&nr(t.type)||t.tag===4}function Kf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&nr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=na));else if(o!==4&&(o===27&&nr(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Qf(t,n,a),t=t.sibling;t!==null;)Qf(t,n,a),t=t.sibling}function dc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&nr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(dc(t,n,a),t=t.sibling;t!==null;)dc(t,n,a),t=t.sibling}function Jg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,o,a),n[dn]=t,n[Tn]=a}catch(d){kt(t,t.return,d)}}var da=!1,gn=!1,Jf=!1,$g=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function lS(t,n){if(t=t.containerInfo,xd=Lc,t=fm(t),Xu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,R=-1,k=-1,ae=0,me=0,_e=t,le=null;t:for(;;){for(var he;_e!==a||u!==0&&_e.nodeType!==3||(R=y+u),_e!==d||o!==0&&_e.nodeType!==3||(k=y+o),_e.nodeType===3&&(y+=_e.nodeValue.length),(he=_e.firstChild)!==null;)le=_e,_e=he;for(;;){if(_e===t)break t;if(le===a&&++ae===u&&(R=y),le===d&&++me===o&&(k=y),(he=_e.nextSibling)!==null)break;_e=le,le=_e.parentNode}_e=he}a=R===-1||k===-1?null:{start:R,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(yd={focusedElem:t,selectionRange:a},Lc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var We=Lr(a.type,u);t=o.getSnapshotBeforeUpdate(We,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(rt){kt(a,a.return,rt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Md(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Md(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function e0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:pa(t,a),o&4&&Io(5,a);break;case 1:if(pa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){kt(a,a.return,y)}else{var u=Lr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){kt(a,a.return,y)}}o&64&&Yg(a),o&512&&Bo(a,a.return);break;case 3:if(pa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Im(t,n)}catch(y){kt(a,a.return,y)}}break;case 27:n===null&&o&4&&Jg(a);case 26:case 5:pa(t,a),n===null&&o&4&&Kg(a),o&512&&Bo(a,a.return);break;case 12:pa(t,a);break;case 31:pa(t,a),o&4&&i0(t,a);break;case 13:pa(t,a),o&4&&a0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=vS.bind(null,a),FS(t,a))));break;case 22:if(o=a.memoizedState!==null||da,!o){n=n!==null&&n.memoizedState!==null||gn,u=da;var d=gn;da=o,(gn=n)&&!d?ma(t,a,(a.subtreeFlags&8772)!==0):pa(t,a),da=u,gn=d}break;case 30:break;default:pa(t,a)}}function t0(t){var n=t.alternate;n!==null&&(t.alternate=null,t0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ho(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,qn=!1;function ha(t,n,a){for(a=a.child;a!==null;)n0(t,n,a),a=a.sibling}function n0(t,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:gn||Xi(a,n),ha(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Xi(a,n);var o=nn,u=qn;nr(a.type)&&(nn=a.stateNode,qn=!1),ha(t,n,a),Yo(a.stateNode),nn=o,qn=u;break;case 5:gn||Xi(a,n);case 6:if(o=nn,u=qn,nn=null,ha(t,n,a),nn=o,qn=u,nn!==null)if(qn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(d){kt(a,n,d)}else try{nn.removeChild(a.stateNode)}catch(d){kt(a,n,d)}break;case 18:nn!==null&&(qn?(t=nn,Y0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ls(t)):Y0(nn,a.stateNode));break;case 4:o=nn,u=qn,nn=a.stateNode.containerInfo,qn=!0,ha(t,n,a),nn=o,qn=u;break;case 0:case 11:case 14:case 15:Za(2,a,n),gn||Za(4,a,n),ha(t,n,a);break;case 1:gn||(Xi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Zg(a,n,o)),ha(t,n,a);break;case 21:ha(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,ha(t,n,a),gn=o;break;default:ha(t,n,a)}}function i0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ls(t)}catch(a){kt(n,n.return,a)}}}function a0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ls(t)}catch(a){kt(n,n.return,a)}}function cS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new $g),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new $g),n;default:throw Error(s(435,t.tag))}}function hc(t,n){var a=cS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=_S.bind(null,t,o);o.then(u,u)}})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(nr(R.type)){nn=R.stateNode,qn=!1;break e}break;case 5:nn=R.stateNode,qn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,qn=!0;break e}R=R.return}if(nn===null)throw Error(s(160));n0(d,y,u),nn=null,qn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)r0(n,t),n=n.sibling}var Li=null;function r0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),Zn(t),o&4&&(Za(3,t,t.return),Io(3,t),Za(5,t,t.return));break;case 1:Yn(n,t),Zn(t),o&512&&(gn||a===null||Xi(a,a.return)),o&64&&da&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Li;if(Yn(n,t),Zn(t),o&512&&(gn||a===null||Xi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[_r]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),On(d,o,a),d[dn]=t,C(d),o=d;break e;case"link":var y=rv("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}d=u.createElement(o),On(d,o,a),u.head.appendChild(d);break;case"meta":if(y=rv("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}d=u.createElement(o),On(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[dn]=t,C(d),o=d}t.stateNode=o}else sv(u,t.type,t.stateNode);else t.stateNode=av(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?sv(u,t.type,t.stateNode):av(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Zf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),Zn(t),o&512&&(gn||a===null||Xi(a,a.return)),a!==null&&o&4&&Zf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),Zn(t),o&512&&(gn||a===null||Xi(a,a.return)),t.flags&32){u=t.stateNode;try{_n(u,"")}catch(We){kt(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Zf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Jf=!0);break;case 6:if(Yn(n,t),Zn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){kt(t,t.return,We)}}break;case 3:if(wc=null,u=Li,Li=Rc(n.containerInfo),Yn(n,t),Li=u,Zn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ls(n.containerInfo)}catch(We){kt(t,t.return,We)}Jf&&(Jf=!1,s0(t));break;case 4:o=Li,Li=Rc(t.stateNode.containerInfo),Yn(n,t),Zn(t),Li=o;break;case 12:Yn(n,t),Zn(t);break;case 31:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 13:Yn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(mc=M()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 22:u=t.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,ae=da,me=gn;if(da=ae||u,gn=me||k,Yn(n,t),gn=me,da=ae,Zn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||da||gn||Or(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=k.stateNode;var _e=k.memoizedProps.style,le=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(We){kt(k,k.return,We)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(We){kt(k,k.return,We)}}}else if(n.tag===18){if(a===null){k=n;try{var he=k.stateNode;u?Z0(he,!0):Z0(k.stateNode,!1)}catch(We){kt(k,k.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,hc(t,a))));break;case 19:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 30:break;case 21:break;default:Yn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Qg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Kf(t);dc(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(_n(y,""),a.flags&=-33);var R=Kf(t);dc(t,R,y);break;case 3:case 4:var k=a.stateNode.containerInfo,ae=Kf(t);Qf(t,ae,k);break;default:throw Error(s(161))}}catch(me){kt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function s0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;s0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function pa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)e0(t,n.alternate,n),n=n.sibling}function Or(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Za(4,n,n.return),Or(n);break;case 1:Xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Zg(n,n.return,a),Or(n);break;case 27:Yo(n.stateNode);case 26:case 5:Xi(n,n.return),Or(n);break;case 22:n.memoizedState===null&&Or(n);break;case 30:Or(n);break;default:Or(n)}t=t.sibling}}function ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:ma(u,d,a),Io(4,d);break;case 1:if(ma(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){kt(o,o.return,ae)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)Fm(k[u],R)}catch(ae){kt(o,o.return,ae)}}a&&y&64&&Yg(d),Bo(d,d.return);break;case 27:Jg(d);case 26:case 5:ma(u,d,a),a&&o===null&&y&4&&Kg(d),Bo(d,d.return);break;case 12:ma(u,d,a);break;case 31:ma(u,d,a),a&&y&4&&i0(u,d);break;case 13:ma(u,d,a),a&&y&4&&a0(u,d);break;case 22:d.memoizedState===null&&ma(u,d,a),Bo(d,d.return);break;case 30:break;default:ma(u,d,a)}n=n.sibling}}function $f(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&To(a))}function ed(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&To(t))}function Oi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)o0(t,n,a,o),n=n.sibling}function o0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(t,n,a,o),u&2048&&Io(9,n);break;case 1:Oi(t,n,a,o);break;case 3:Oi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&To(t)));break;case 12:if(u&2048){Oi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){kt(n,n.return,k)}}else Oi(t,n,a,o);break;case 31:Oi(t,n,a,o);break;case 13:Oi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Oi(t,n,a,o):Ho(t,n):d._visibility&2?Oi(t,n,a,o):(d._visibility|=2,bs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&$f(y,n);break;case 24:Oi(t,n,a,o),u&2048&&ed(n.alternate,n);break;default:Oi(t,n,a,o)}}function bs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,R=a,k=o,ae=y.flags;switch(y.tag){case 0:case 11:case 15:bs(d,y,R,k,u),Io(8,y);break;case 23:break;case 22:var me=y.stateNode;y.memoizedState!==null?me._visibility&2?bs(d,y,R,k,u):Ho(d,y):(me._visibility|=2,bs(d,y,R,k,u)),u&&ae&2048&&$f(y.alternate,y);break;case 24:bs(d,y,R,k,u),u&&ae&2048&&ed(y.alternate,y);break;default:bs(d,y,R,k,u)}n=n.sibling}}function Ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ho(a,o),u&2048&&$f(o.alternate,o);break;case 24:Ho(a,o),u&2048&&ed(o.alternate,o);break;default:Ho(a,o)}n=n.sibling}}var Go=8192;function Ms(t,n,a){if(t.subtreeFlags&Go)for(t=t.child;t!==null;)l0(t,n,a),t=t.sibling}function l0(t,n,a){switch(t.tag){case 26:Ms(t,n,a),t.flags&Go&&t.memoizedState!==null&&ZS(a,Li,t.memoizedState,t.memoizedProps);break;case 5:Ms(t,n,a);break;case 3:case 4:var o=Li;Li=Rc(t.stateNode.containerInfo),Ms(t,n,a),Li=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Go,Go=16777216,Ms(t,n,a),Go=o):Ms(t,n,a));break;default:Ms(t,n,a)}}function c0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,f0(o,t)}c0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)u0(t),t=t.sibling}function u0(t){switch(t.tag){case 0:case 11:case 15:Vo(t),t.flags&2048&&Za(9,t,t.return);break;case 3:Vo(t);break;case 12:Vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,pc(t)):Vo(t);break;default:Vo(t)}}function pc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,f0(o,t)}c0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Za(8,n,n.return),pc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,pc(n));break;default:pc(n)}t=t.sibling}}function f0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:To(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if(t0(o),o===a){Mn=null;break e}if(u!==null){u.return=d,Mn=u;break e}Mn=d}}}var uS={getCacheForType:function(t){var n=Nn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Nn(hn).controller.signal}},fS=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Kt=null,yt=null,Mt=0,Vt=0,ri=null,Ka=!1,Es=!1,td=!1,ga=0,on=0,Qa=0,Pr=0,nd=0,si=0,Ts=0,ko=null,Kn=null,id=!1,mc=0,d0=0,gc=1/0,vc=null,Ja=null,xn=0,$a=null,As=null,va=0,ad=0,rd=null,h0=null,Xo=0,sd=null;function oi(){return(Ft&2)!==0&&Mt!==0?Mt&-Mt:z.T!==null?dd():uo()}function p0(){if(si===0)if((Mt&536870912)===0||Tt){var t=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),si=t}else si=536870912;return t=ii.current,t!==null&&(t.flags|=32),si}function Qn(t,n,a){(t===Kt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(Rs(t,0),er(t,Mt,si,!1)),zn(t,a),((Ft&2)===0||t!==Kt)&&(t===Kt&&((Ft&2)===0&&(Pr|=a),on===4&&er(t,Mt,si,!1)),Wi(t))}function m0(t,n,a){if((Ft&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?pS(t,n):ld(t,n,!0),d=o;do{if(u===0){Es&&!o&&er(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!dS(a)){u=ld(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=ko;var k=R.current.memoizedState.isDehydrated;if(k&&(Rs(R,y).flags|=256),y=ld(R,y,!1),y!==2){if(td&&!k){R.errorRecoveryDisabledLanes|=d,Pr|=d,u=4;break e}d=Kn,Kn=u,d!==null&&(Kn===null?Kn=d:Kn.push.apply(Kn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){Rs(t,0),er(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:er(o,n,si,!Ka);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=mc+300-M(),10<u)){if(er(o,n,si,!Ka),ye(o,0,!0)!==0)break e;va=n,o.timeoutHandle=j0(g0.bind(null,o,a,Kn,vc,id,n,si,Pr,Ts,Ka,d,"Throttled",-0,0),u);break e}g0(o,a,Kn,vc,id,n,si,Pr,Ts,Ka,d,null,-0,0)}}break}while(!0);Wi(t)}function g0(t,n,a,o,u,d,y,R,k,ae,me,_e,le,he){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},l0(n,d,_e);var We=(d&62914560)===d?mc-M():(d&4194048)===d?d0-M():0;if(We=KS(_e,We),We!==null){va=d,t.cancelPendingCommit=We(E0.bind(null,t,n,d,a,o,u,y,R,k,me,_e,null,le,he)),er(t,d,y,!ae);return}}E0(t,n,d,a,o,u,y,R,k)}function dS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ti(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function er(t,n,a,o){n&=~nd,n&=~Pr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ie(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&wl(t,a,n)}function _c(){return(Ft&6)===0?(Wo(0),!1):!0}function od(){if(yt!==null){if(Vt===0)var t=yt.return;else t=yt,sa=Ar=null,Mf(t),vs=null,Ro=0,t=yt;for(;t!==null;)qg(t.alternate,t),t=t.return;yt=null}}function Rs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,NS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),va=0,od(),Kt=t,yt=a=aa(t.current,null),Mt=n,Vt=0,ri=null,Ka=!1,Es=we(t,n),td=!1,Ts=si=nd=Pr=Qa=on=0,Kn=ko=null,id=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ie(o),d=1<<u;n|=t[u],o&=~d}return ga=n,Bl(),a}function v0(t,n){dt=null,z.H=Po,n===gs||n===ql?(n=Lm(),Vt=3):n===ff?(n=Lm(),Vt=4):Vt=n===Bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,yt===null&&(on=1,oc(t,gi(n,t.current)))}function _0(){var t=ii.current;return t===null?!0:(Mt&4194048)===Mt?yi===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===yi:!1}function x0(){var t=z.H;return z.H=Po,t===null?Po:t}function y0(){var t=z.A;return z.A=uS,t}function xc(){on=4,Ka||(Mt&4194048)!==Mt&&ii.current!==null||(Es=!0),(Qa&134217727)===0&&(Pr&134217727)===0||Kt===null||er(Kt,Mt,si,!1)}function ld(t,n,a){var o=Ft;Ft|=2;var u=x0(),d=y0();(Kt!==t||Mt!==n)&&(vc=null,Rs(t,n)),n=!1;var y=on;e:do try{if(Vt!==0&&yt!==null){var R=yt,k=ri;switch(Vt){case 8:od(),y=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var ae=Vt;if(Vt=0,ri=null,Cs(t,R,k,ae),a&&Es){y=0;break e}break;default:ae=Vt,Vt=0,ri=null,Cs(t,R,k,ae)}}hS(),y=on;break}catch(me){v0(t,me)}while(!0);return n&&t.shellSuspendCounter++,sa=Ar=null,Ft=o,z.H=u,z.A=d,yt===null&&(Kt=null,Mt=0,Bl()),y}function hS(){for(;yt!==null;)S0(yt)}function pS(t,n){var a=Ft;Ft|=2;var o=x0(),u=y0();Kt!==t||Mt!==n?(vc=null,gc=M()+500,Rs(t,n)):Es=we(t,n);e:do try{if(Vt!==0&&yt!==null){n=yt;var d=ri;t:switch(Vt){case 1:Vt=0,ri=null,Cs(t,n,d,1);break;case 2:case 9:if(Um(d)){Vt=0,ri=null,b0(n);break}n=function(){Vt!==2&&Vt!==9||Kt!==t||(Vt=7),Wi(t)},d.then(n,n);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Um(d)?(Vt=0,ri=null,b0(n)):(Vt=0,ri=null,Cs(t,n,d,7));break;case 5:var y=null;switch(yt.tag){case 26:y=yt.memoizedState;case 5:case 27:var R=yt;if(y?ov(y):R.stateNode.complete){Vt=0,ri=null;var k=R.sibling;if(k!==null)yt=k;else{var ae=R.return;ae!==null?(yt=ae,yc(ae)):yt=null}break t}}Vt=0,ri=null,Cs(t,n,d,5);break;case 6:Vt=0,ri=null,Cs(t,n,d,6);break;case 8:od(),on=6;break e;default:throw Error(s(462))}}mS();break}catch(me){v0(t,me)}while(!0);return sa=Ar=null,z.H=o,z.A=u,Ft=a,yt!==null?0:(Kt=null,Mt=0,Bl(),on)}function mS(){for(;yt!==null&&!Qe();)S0(yt)}function S0(t){var n=Wg(t.alternate,t,ga);t.memoizedProps=t.pendingProps,n===null?yc(t):yt=n}function b0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Bg(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=Bg(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:Mf(n);default:qg(a,n),n=yt=ym(n,ga),n=Wg(a,n,ga)}t.memoizedProps=t.pendingProps,n===null?yc(t):yt=n}function Cs(t,n,a,o){sa=Ar=null,Mf(n),vs=null,Ro=0;var u=n.return;try{if(iS(t,u,n,a,Mt)){on=1,oc(t,gi(a,t.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;on=1,oc(t,gi(a,t.current)),yt=null;return}n.flags&32768?(Tt||o===1?t=!0:Es||(Mt&536870912)!==0?t=!1:(Ka=t=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),M0(n,t)):yc(n)}function yc(t){var n=t;do{if((n.flags&32768)!==0){M0(n,Ka);return}t=n.return;var a=sS(n.alternate,n,ga);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);on===0&&(on=5)}function M0(t,n){do{var a=oS(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);on=6,yt=null}function E0(t,n,a,o,u,d,y,R,k){t.cancelPendingCommit=null;do Sc();while(xn!==0);if((Ft&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Zu,wi(t,a,d,y,R,k),t===Kt&&(yt=Kt=null,Mt=0),As=n,$a=t,va=a,ad=d,rd=u,h0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xS(pe,function(){return w0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=V.p,V.p=2,y=Ft,Ft|=4;try{lS(t,n,a)}finally{Ft=y,V.p=u,z.T=o}}xn=1,T0(),A0(),R0()}}function T0(){if(xn===1){xn=0;var t=$a,n=As,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=V.p;V.p=2;var u=Ft;Ft|=4;try{r0(n,t);var d=yd,y=fm(t.containerInfo),R=d.focusedElem,k=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&um(R.ownerDocument.documentElement,R)){if(k!==null&&Xu(R)){var ae=k.start,me=k.end;if(me===void 0&&(me=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(me,R.value.length);else{var _e=R.ownerDocument||document,le=_e&&_e.defaultView||window;if(le.getSelection){var he=le.getSelection(),We=R.textContent.length,rt=Math.min(k.start,We),Yt=k.end===void 0?rt:Math.min(k.end,We);!he.extend&&rt>Yt&&(y=Yt,Yt=rt,rt=y);var Q=cm(R,rt),j=cm(R,Yt);if(Q&&j&&(he.rangeCount!==1||he.anchorNode!==Q.node||he.anchorOffset!==Q.offset||he.focusNode!==j.node||he.focusOffset!==j.offset)){var ie=_e.createRange();ie.setStart(Q.node,Q.offset),he.removeAllRanges(),rt>Yt?(he.addRange(ie),he.extend(j.node,j.offset)):(ie.setEnd(j.node,j.offset),he.addRange(ie))}}}}for(_e=[],he=R;he=he.parentNode;)he.nodeType===1&&_e.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_e.length;R++){var ve=_e[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Lc=!!xd,yd=xd=null}finally{Ft=u,V.p=o,z.T=a}}t.current=n,xn=2}}function A0(){if(xn===2){xn=0;var t=$a,n=As,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=V.p;V.p=2;var u=Ft;Ft|=4;try{e0(t,n.alternate,n)}finally{Ft=u,V.p=o,z.T=a}}xn=3}}function R0(){if(xn===4||xn===3){xn=0,I();var t=$a,n=As,a=va,o=h0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,As=$a=null,C0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ja=null),$r(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=V.p,V.p=2,z.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];d(R.value,{componentStack:R.stack})}}finally{z.T=n,V.p=u}}(va&3)!==0&&Sc(),Wi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===sd?Xo++:(Xo=0,sd=t):Xo=0,Wo(0)}}function C0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,To(n)))}function Sc(){return T0(),A0(),R0(),w0()}function w0(){if(xn!==5)return!1;var t=$a,n=ad;ad=0;var a=$r(va),o=z.T,u=V.p;try{V.p=32>a?32:a,z.T=null,a=rd,rd=null;var d=$a,y=va;if(xn=0,As=$a=null,va=0,(Ft&6)!==0)throw Error(s(331));var R=Ft;if(Ft|=4,u0(d.current),o0(d,d.current,y,a),Ft=R,Wo(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ae,d)}catch{}return!0}finally{V.p=u,z.T=o,C0(t,n)}}function D0(t,n,a){n=gi(a,n),n=If(t.stateNode,n,2),t=ja(t,n,2),t!==null&&(zn(t,2),Wi(t))}function kt(t,n,a){if(t.tag===3)D0(t,t,a);else for(;n!==null;){if(n.tag===3){D0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ja===null||!Ja.has(o))){t=gi(a,t),a=Ug(2),o=ja(n,a,2),o!==null&&(Ng(a,o,n,t),zn(o,2),Wi(o));break}}n=n.return}}function cd(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new fS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(td=!0,u.add(a),t=gS.bind(null,t,n,a),n.then(t,t))}function gS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Kt===t&&(Mt&a)===a&&(on===4||on===3&&(Mt&62914560)===Mt&&300>M()-mc?(Ft&2)===0&&Rs(t,0):nd|=a,Ts===Mt&&(Ts=0)),Wi(t)}function U0(t,n){n===0&&(n=Ht()),t=Mr(t,n),t!==null&&(zn(t,n),Wi(t))}function vS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),U0(t,a)}function _S(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),U0(t,a)}function xS(t,n){return Rt(t,n)}var bc=null,ws=null,ud=!1,Mc=!1,fd=!1,tr=0;function Wi(t){t!==ws&&t.next===null&&(ws===null?bc=ws=t:ws=ws.next=t),Mc=!0,ud||(ud=!0,SS())}function Wo(t,n){if(!fd&&Mc){fd=!0;do for(var a=!1,o=bc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Ie(42|t)+1)-1,d&=u&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,P0(o,d))}else d=Mt,d=ye(o,o===Kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||we(o,d)||(a=!0,P0(o,d));o=o.next}while(a);fd=!1}}function yS(){N0()}function N0(){Mc=ud=!1;var t=0;tr!==0&&US()&&(t=tr);for(var n=M(),a=null,o=bc;o!==null;){var u=o.next,d=L0(o,n);d===0?(o.next=null,a===null?bc=u:a.next=u,u===null&&(ws=a)):(a=o,(t!==0||(d&3)!==0)&&(Mc=!0)),o=u}xn!==0&&xn!==5||Wo(t),tr!==0&&(tr=0)}function L0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Ie(d),R=1<<y,k=u[y];k===-1?((R&a)===0||(R&o)!==0)&&(u[y]=ot(R,n)):k<=n&&(t.expiredLanes|=R),d&=~R}if(n=Kt,a=Mt,a=ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&It(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&It(o),$r(a)){case 2:case 8:a=be;break;case 32:a=pe;break;case 268435456:a=Ue;break;default:a=pe}return o=O0.bind(null,t),a=Rt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&It(o),t.callbackPriority=2,t.callbackNode=null,2}function O0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Sc()&&t.callbackNode!==a)return null;var o=Mt;return o=ye(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(m0(t,o,n),L0(t,M()),t.callbackNode!=null&&t.callbackNode===a?O0.bind(null,t):null)}function P0(t,n){if(Sc())return null;m0(t,n,!0)}function SS(){LS(function(){(Ft&6)!==0?Rt(ge,yS):N0()})}function dd(){if(tr===0){var t=ps;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),tr=t}return tr}function z0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ul(""+t)}function F0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function bS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=z0((u[Tn]||null).action),y=o.submitter;y&&(n=(n=y[Tn]||null)?z0(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var R=new Pl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(tr!==0){var k=y?F0(u,y):new FormData(u);Nf(a,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(R.preventDefault(),k=y?F0(u,y):new FormData(u),Nf(a,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var hd=0;hd<Yu.length;hd++){var pd=Yu[hd],MS=pd.toLowerCase(),ES=pd[0].toUpperCase()+pd.slice(1);Ni(MS,"on"+ES)}Ni(pm,"onAnimationEnd"),Ni(mm,"onAnimationIteration"),Ni(gm,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Hy,"onTransitionRun"),Ni(Gy,"onTransitionStart"),Ni(Vy,"onTransitionCancel"),Ni(vm,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function I0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],k=R.instance,ae=R.currentTarget;if(R=R.listener,k!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ae;try{d(u)}catch(me){Il(me)}u.currentTarget=null,d=k}else for(y=0;y<o.length;y++){if(R=o[y],k=R.instance,ae=R.currentTarget,R=R.listener,k!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ae;try{d(u)}catch(me){Il(me)}u.currentTarget=null,d=k}}}}function St(t,n){var a=n[es];a===void 0&&(a=n[es]=new Set);var o=t+"__bubble";a.has(o)||(B0(n,t,2,!1),a.add(o))}function md(t,n,a){var o=0;n&&(o|=4),B0(a,t,o,n)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function gd(t){if(!t[Ec]){t[Ec]=!0,K.forEach(function(a){a!=="selectionchange"&&(TS.has(a)||md(a,!1,t),md(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ec]||(n[Ec]=!0,md("selectionchange",!1,n))}}function B0(t,n,a,o){switch(pv(n)){case 2:var u=$S;break;case 8:u=eb;break;default:u=Ud}a=u.bind(null,n,a,t),u=void 0,!Pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function vd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var k=y.tag;if((k===3||k===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=za(R),y===null)return;if(k=y.tag,k===5||k===6||k===26||k===27){o=d=y;continue e}R=R.parentNode}}o=o.return}Xp(function(){var ae=d,me=Lu(a),_e=[];e:{var le=_m.get(t);if(le!==void 0){var he=Pl,We=t;switch(t){case"keypress":if(Ll(a)===0)break e;case"keydown":case"keyup":he=_y;break;case"focusin":We="focus",he=Bu;break;case"focusout":We="blur",he=Bu;break;case"beforeblur":case"afterblur":he=Bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=Sy;break;case pm:case mm:case gm:he=cy;break;case vm:he=My;break;case"scroll":case"scrollend":he=ay;break;case"wheel":he=Ty;break;case"copy":case"cut":case"paste":he=fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Zp;break;case"toggle":case"beforetoggle":he=Ry}var rt=(n&4)!==0,Yt=!rt&&(t==="scroll"||t==="scrollend"),Q=rt?le!==null?le+"Capture":null:le;rt=[];for(var j=ae,ie;j!==null;){var ve=j;if(ie=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ie===null||Q===null||(ve=po(j,Q),ve!=null&&rt.push(qo(j,ve,ie))),Yt)break;j=j.return}0<rt.length&&(le=new he(le,We,null,a,me),_e.push({event:le,listeners:rt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",le&&a!==Nu&&(We=a.relatedTarget||a.fromElement)&&(za(We)||We[Di]))break e;if((he||le)&&(le=me.window===me?me:(le=me.ownerDocument)?le.defaultView||le.parentWindow:window,he?(We=a.relatedTarget||a.toElement,he=ae,We=We?za(We):null,We!==null&&(Yt=c(We),rt=We.tag,We!==Yt||rt!==5&&rt!==27&&rt!==6)&&(We=null)):(he=null,We=ae),he!==We)){if(rt=qp,ve="onMouseLeave",Q="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(rt=Zp,ve="onPointerLeave",Q="onPointerEnter",j="pointer"),Yt=he==null?le:xr(he),ie=We==null?le:xr(We),le=new rt(ve,j+"leave",he,a,me),le.target=Yt,le.relatedTarget=ie,ve=null,za(me)===ae&&(rt=new rt(Q,j+"enter",We,a,me),rt.target=ie,rt.relatedTarget=Yt,ve=rt),Yt=ve,he&&We)t:{for(rt=AS,Q=he,j=We,ie=0,ve=Q;ve;ve=rt(ve))ie++;ve=0;for(var tt=j;tt;tt=rt(tt))ve++;for(;0<ie-ve;)Q=rt(Q),ie--;for(;0<ve-ie;)j=rt(j),ve--;for(;ie--;){if(Q===j||j!==null&&Q===j.alternate){rt=Q;break t}Q=rt(Q),j=rt(j)}rt=null}else rt=null;he!==null&&H0(_e,le,he,rt,!1),We!==null&&Yt!==null&&H0(_e,Yt,We,rt,!0)}}e:{if(le=ae?xr(ae):window,he=le.nodeName&&le.nodeName.toLowerCase(),he==="select"||he==="input"&&le.type==="file")var Ut=im;else if(tm(le))if(am)Ut=Fy;else{Ut=Py;var Je=Oy}else he=le.nodeName,!he||he.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ae&&Ui(ae.elementType)&&(Ut=im):Ut=zy;if(Ut&&(Ut=Ut(t,ae))){nm(_e,Ut,a,me);break e}Je&&Je(t,le,ae),t==="focusout"&&ae&&le.type==="number"&&ae.memoizedProps.value!=null&&Rn(le,"number",le.value)}switch(Je=ae?xr(ae):window,t){case"focusin":(tm(Je)||Je.contentEditable==="true")&&(ss=Je,Wu=ae,bo=null);break;case"focusout":bo=Wu=ss=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,dm(_e,a,me);break;case"selectionchange":if(By)break;case"keydown":case"keyup":dm(_e,a,me)}var mt;if(Gu)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else rs?$p(t,a)&&(Et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Et="onCompositionStart");Et&&(Kp&&a.locale!=="ko"&&(rs||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&rs&&(mt=Wp()):(Ba=me,zu="value"in Ba?Ba.value:Ba.textContent,rs=!0)),Je=Tc(ae,Et),0<Je.length&&(Et=new Yp(Et,t,null,a,me),_e.push({event:Et,listeners:Je}),mt?Et.data=mt:(mt=em(a),mt!==null&&(Et.data=mt)))),(mt=wy?Dy(t,a):Uy(t,a))&&(Et=Tc(ae,"onBeforeInput"),0<Et.length&&(Je=new Yp("onBeforeInput","beforeinput",null,a,me),_e.push({event:Je,listeners:Et}),Je.data=mt)),bS(_e,t,ae,a,me)}I0(_e,n)})}function qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Tc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=po(t,a),u!=null&&o.unshift(qo(t,u,d)),u=po(t,n),u!=null&&o.push(qo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function AS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function H0(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var R=a,k=R.alternate,ae=R.stateNode;if(R=R.tag,k!==null&&k===o)break;R!==5&&R!==26&&R!==27||ae===null||(k=ae,u?(ae=po(a,d),ae!=null&&y.unshift(qo(a,ae,k))):u||(ae=po(a,d),ae!=null&&y.push(qo(a,ae,k)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var RS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function G0(t){return(typeof t=="string"?t:""+t).replace(RS,`
`).replace(CS,"")}function V0(t,n){return n=G0(n),G0(t)===n}function qt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||_n(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&_n(t,""+o);break;case"className":it(t,"class",o);break;case"tabIndex":it(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":it(t,a,o);break;case"style":ns(t,o,d);break;case"data":if(n!=="object"){it(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ul(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ul(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=na);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ul(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Ze(t,"popover",o);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ny.get(a)||a,Ze(t,a,o))}}function _d(t,n,a,o,u,d){switch(a){case"style":ns(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?_n(t,o):(typeof o=="number"||typeof o=="bigint")&&_n(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!de.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Tn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ze(t,a,o)}}}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,d,y,a,null)}}u&&qt(t,n,"srcSet",a.srcSet,a,null),o&&qt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var R=d=y=u=null,k=null,ae=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":y=me;break;case"checked":k=me;break;case"defaultChecked":ae=me;break;case"value":d=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:qt(t,n,o,me,a,null)}}ta(t,d,R,k,ae,y,u,!1);return;case"select":St("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:qt(t,n,u,R,a,null)}n=d,a=y,t.multiple=!!o,n!=null?pi(t,!!o,n,!1):a!=null&&pi(t,!!o,a,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:qt(t,n,y,R,a,null)}Cn(t,o,u,d);return;case"option":for(k in a)a.hasOwnProperty(k)&&(o=a[k],o!=null)&&(k==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":qt(t,n,k,o,a,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<jo.length;o++)St(jo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(o=a[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,ae,o,a,null)}return;default:if(Ui(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&_d(t,n,me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&qt(t,n,R,o,a,null))}function wS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,R=null,k=null,ae=null,me=null;for(he in a){var _e=a[he];if(a.hasOwnProperty(he)&&_e!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":k=_e;default:o.hasOwnProperty(he)||qt(t,n,he,null,o,_e)}}for(var le in o){var he=o[le];if(_e=a[le],o.hasOwnProperty(le)&&(he!=null||_e!=null))switch(le){case"type":d=he;break;case"name":u=he;break;case"checked":ae=he;break;case"defaultChecked":me=he;break;case"value":y=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:he!==_e&&qt(t,n,le,he,o,_e)}}An(t,y,R,k,ae,me,d,u);return;case"select":he=y=R=le=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":he=k;default:o.hasOwnProperty(d)||qt(t,n,d,null,o,k)}for(u in o)if(d=o[u],k=a[u],o.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":le=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==k&&qt(t,n,u,d,o,k)}n=R,a=y,o=he,le!=null?pi(t,!!a,le,!1):!!o!=!!a&&(n!=null?pi(t,!!a,n,!0):pi(t,!!a,a?[]:"",!1));return;case"textarea":he=le=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qt(t,n,R,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":le=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&qt(t,n,y,u,o,d)}Gt(t,le,he);return;case"option":for(var We in a)le=a[We],a.hasOwnProperty(We)&&le!=null&&!o.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:qt(t,n,We,null,o,le));for(k in o)le=o[k],he=a[k],o.hasOwnProperty(k)&&le!==he&&(le!=null||he!=null)&&(k==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":qt(t,n,k,le,o,he));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)le=a[rt],a.hasOwnProperty(rt)&&le!=null&&!o.hasOwnProperty(rt)&&qt(t,n,rt,null,o,le);for(ae in o)if(le=o[ae],he=a[ae],o.hasOwnProperty(ae)&&le!==he&&(le!=null||he!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:qt(t,n,ae,le,o,he)}return;default:if(Ui(n)){for(var Yt in a)le=a[Yt],a.hasOwnProperty(Yt)&&le!==void 0&&!o.hasOwnProperty(Yt)&&_d(t,n,Yt,void 0,o,le);for(me in o)le=o[me],he=a[me],!o.hasOwnProperty(me)||le===he||le===void 0&&he===void 0||_d(t,n,me,le,o,he);return}}for(var Q in a)le=a[Q],a.hasOwnProperty(Q)&&le!=null&&!o.hasOwnProperty(Q)&&qt(t,n,Q,null,o,le);for(_e in o)le=o[_e],he=a[_e],!o.hasOwnProperty(_e)||le===he||le==null&&he==null||qt(t,n,_e,le,o,he)}function k0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,R=u.duration;if(d&&R&&k0(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],ae=k.startTime;if(ae>R)break;var me=k.transferSize,_e=k.initiatorType;me&&k0(_e)&&(k=k.responseEnd,y+=me*(k<R?1:(R-ae)/(k-ae)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var xd=null,yd=null;function Ac(t){return t.nodeType===9?t:t.ownerDocument}function X0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function W0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Sd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bd=null;function US(){var t=window.event;return t&&t.type==="popstate"?t===bd?!1:(bd=t,!0):(bd=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(t){return q0.resolve(null).then(t).catch(OS)}:j0;function OS(t){setTimeout(function(){throw t})}function nr(t){return t==="head"}function Y0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ls(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Yo(a);for(var d=a.firstChild;d;){var y=d.nextSibling,R=d.nodeName;d[_r]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Yo(t.ownerDocument.body);a=u}while(a);Ls(n)}function Z0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Md(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Md(a),ho(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function PS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[_r])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function zS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function K0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Si(t.nextSibling),t===null))return null;return t}function Ed(t){return t.data==="$?"||t.data==="$~"}function Td(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function FS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ad=null;function Q0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function J0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function $0(t,n,a){switch(n=Ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ho(t)}var bi=new Map,ev=new Set;function Rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _a=V.d;V.d={f:IS,r:BS,D:HS,C:GS,L:VS,m:kS,X:WS,S:XS,M:jS};function IS(){var t=_a.f(),n=_c();return t||n}function BS(t){var n=Fa(t);n!==null&&n.tag===5&&n.type==="form"?vg(n):_a.r(t)}var Ds=typeof document>"u"?null:document;function tv(t,n,a){var o=Ds;if(o&&typeof n=="string"&&n){var u=lt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ev.has(u)||(ev.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),On(n,"link",t),C(n),o.head.appendChild(n)))}}function HS(t){_a.D(t),tv("dns-prefetch",t,null)}function GS(t,n){_a.C(t,n),tv("preconnect",t,n)}function VS(t,n,a){_a.L(t,n,a);var o=Ds;if(o&&t&&n){var u='link[rel="preload"][as="'+lt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+lt(a.imageSizes)+'"]')):u+='[href="'+lt(t)+'"]';var d=u;switch(n){case"style":d=Us(t);break;case"script":d=Ns(t)}bi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Zo(d))||n==="script"&&o.querySelector(Ko(d))||(n=o.createElement("link"),On(n,"link",t),C(n),o.head.appendChild(n)))}}function kS(t,n){_a.m(t,n);var a=Ds;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+lt(o)+'"][href="'+lt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ns(t)}if(!bi.has(d)&&(t=g({rel:"modulepreload",href:t},n),bi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ko(d)))return}o=a.createElement("link"),On(o,"link",t),C(o),a.head.appendChild(o)}}}function XS(t,n,a){_a.S(t,n,a);var o=Ds;if(o&&t){var u=Ia(o).hoistableStyles,d=Us(t);n=n||"default";var y=u.get(d);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Zo(d)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(d))&&Rd(t,a);var k=y=o.createElement("link");C(k),On(k,"link",t),k._p=new Promise(function(ae,me){k.onload=ae,k.onerror=me}),k.addEventListener("load",function(){R.loading|=1}),k.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Cc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(d,y)}}}function WS(t,n){_a.X(t,n);var a=Ds;if(a&&t){var o=Ia(a).hoistableScripts,u=Ns(t),d=o.get(u);d||(d=a.querySelector(Ko(u)),d||(t=g({src:t,async:!0},n),(n=bi.get(u))&&Cd(t,n),d=a.createElement("script"),C(d),On(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function jS(t,n){_a.M(t,n);var a=Ds;if(a&&t){var o=Ia(a).hoistableScripts,u=Ns(t),d=o.get(u);d||(d=a.querySelector(Ko(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&Cd(t,n),d=a.createElement("script"),C(d),On(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function nv(t,n,a,o){var u=(u=se.current)?Rc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Us(a.href),a=Ia(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Us(a.href);var d=Ia(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Zo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),bi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,a),d||qS(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ns(a),a=Ia(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Us(t){return'href="'+lt(t)+'"'}function Zo(t){return'link[rel="stylesheet"]['+t+"]"}function iv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function qS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),On(n,"link",a),C(n),t.head.appendChild(n))}function Ns(t){return'[src="'+lt(t)+'"]'}function Ko(t){return"script[async]"+t}function av(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+lt(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),C(o),On(o,"style",u),Cc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Us(a.href);var d=t.querySelector(Zo(u));if(d)return n.state.loading|=4,n.instance=d,C(d),d;o=iv(a),(u=bi.get(u))&&Rd(o,u),d=(t.ownerDocument||t).createElement("link"),C(d);var y=d;return y._p=new Promise(function(R,k){y.onload=R,y.onerror=k}),On(d,"link",o),n.state.loading|=4,Cc(d,a.precedence,t),n.instance=d;case"script":return d=Ns(a.src),(u=t.querySelector(Ko(d)))?(n.instance=u,C(u),u):(o=a,(u=bi.get(d))&&(o=g({},a),Cd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),C(u),On(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Cc(o,a.precedence,t));return n.instance}function Cc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Rd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var wc=null;function rv(t,n,a){if(wc===null){var o=new Map,u=wc=new Map;u.set(a,o)}else u=wc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[_r]||d[dn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(d):o.set(y,[d])}}return o}function sv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function YS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ov(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ZS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Us(o.href),d=n.querySelector(Zo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Dc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,C(d);return}d=n.ownerDocument||n,o=iv(o),(u=bi.get(u))&&Rd(o,u),d=d.createElement("link"),C(d);var y=d;y._p=new Promise(function(R,k){y.onload=R,y.onerror=k}),On(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Dc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var wd=0;function KS(t,n){return t.stylesheets&&t.count===0&&Nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Nc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&wd===0&&(wd=62500*DS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Nc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>wd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uc=null;function Nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uc=new Map,n.forEach(QS,t),Uc=null,Dc.call(t))}function QS(t,n){if(!(n.state.loading&4)){var a=Uc.get(t);if(a)var o=a.get(null);else{a=new Map,Uc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=Dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Qo={$$typeof:w,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function JS(t,n,a,o,u,d,y,R,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function lv(t,n,a,o,u,d,y,R,k,ae,me,_e){return t=new JS(t,n,a,y,k,ae,me,_e,R),n=1,d===!0&&(n|=24),d=ni(3,null,null,n),t.current=d,d.stateNode=t,n=lf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},df(d),t}function cv(t){return t?(t=cs,t):cs}function uv(t,n,a,o,u,d){u=cv(u),o.context===null?o.context=u:o.pendingContext=u,o=Wa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ja(t,o,n),a!==null&&(Qn(a,t,n),wo(a,t,n))}function fv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Dd(t,n){fv(t,n),(t=t.alternate)&&fv(t,n)}function dv(t){if(t.tag===13||t.tag===31){var n=Mr(t,67108864);n!==null&&Qn(n,t,67108864),Dd(t,67108864)}}function hv(t){if(t.tag===13||t.tag===31){var n=oi();n=co(n);var a=Mr(t,n);a!==null&&Qn(a,t,n),Dd(t,n)}}var Lc=!0;function $S(t,n,a,o){var u=z.T;z.T=null;var d=V.p;try{V.p=2,Ud(t,n,a,o)}finally{V.p=d,z.T=u}}function eb(t,n,a,o){var u=z.T;z.T=null;var d=V.p;try{V.p=8,Ud(t,n,a,o)}finally{V.p=d,z.T=u}}function Ud(t,n,a,o){if(Lc){var u=Nd(o);if(u===null)vd(t,n,o,Oc,a),mv(t,o);else if(nb(u,t,n,a,o))o.stopPropagation();else if(mv(t,o),n&4&&-1<tb.indexOf(t)){for(;u!==null;){var d=Fa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Te(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var k=1<<31-Ie(y);R.entanglements[1]|=k,y&=~k}Wi(d),(Ft&6)===0&&(gc=M()+500,Wo(0))}}break;case 31:case 13:R=Mr(d,2),R!==null&&Qn(R,d,2),_c(),Dd(d,2)}if(d=Nd(o),d===null&&vd(t,n,o,Oc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else vd(t,n,o,null,a)}}function Nd(t){return t=Lu(t),Ld(t)}var Oc=null;function Ld(t){if(Oc=null,t=za(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Oc=t,null}function pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case ge:return 2;case be:return 8;case pe:case $e:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Od=!1,ir=null,ar=null,rr=null,Jo=new Map,$o=new Map,sr=[],tb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mv(t,n){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(n.pointerId)}}function el(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Fa(n),n!==null&&dv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function nb(t,n,a,o,u){switch(n){case"focusin":return ir=el(ir,t,n,a,o,u),!0;case"dragenter":return ar=el(ar,t,n,a,o,u),!0;case"mouseover":return rr=el(rr,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Jo.set(d,el(Jo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,$o.set(d,el($o.get(d)||null,t,n,a,o,u)),!0}return!1}function gv(t){var n=za(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Gi(t.priority,function(){hv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Gi(t.priority,function(){hv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Nd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Nu=o,a.target.dispatchEvent(o),Nu=null}else return n=Fa(a),n!==null&&dv(n),t.blockedOn=a,!1;n.shift()}return!0}function vv(t,n,a){Pc(t)&&a.delete(n)}function ib(){Od=!1,ir!==null&&Pc(ir)&&(ir=null),ar!==null&&Pc(ar)&&(ar=null),rr!==null&&Pc(rr)&&(rr=null),Jo.forEach(vv),$o.forEach(vv)}function zc(t,n){t.blockedOn===n&&(t.blockedOn=null,Od||(Od=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ib)))}var Fc=null;function _v(t){Fc!==t&&(Fc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Fc===t&&(Fc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Ld(o||a)===null)continue;break}var d=Fa(a);d!==null&&(t.splice(n,3),n-=3,Nf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ls(t){function n(k){return zc(k,t)}ir!==null&&zc(ir,t),ar!==null&&zc(ar,t),rr!==null&&zc(rr,t),Jo.forEach(n),$o.forEach(n);for(var a=0;a<sr.length;a++){var o=sr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)gv(a),a.blockedOn===null&&sr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[Tn]||null;if(typeof d=="function")y||_v(a);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[Tn]||null)R=y.formAction;else if(Ld(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),_v(a)}}}function xv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Pd(t){this._internalRoot=t}Ic.prototype.render=Pd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=oi();uv(a,o,t,n,null,null)},Ic.prototype.unmount=Pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;uv(t.current,2,null,t,null,null),_c(),n[Di]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var n=uo();t={blockedOn:null,target:t,priority:n};for(var a=0;a<sr.length&&n!==0&&n<sr[a].priority;a++);sr.splice(a,0,t),a===0&&gv(t)}};var yv=e.version;if(yv!=="19.2.3")throw Error(s(527,yv,"19.2.3"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var ab={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{Ae=Bc.inject(ab),Re=Bc}catch{}}return nl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Rg,d=Cg,y=wg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=lv(t,1,!1,null,null,a,o,null,u,d,y,xv),t[Di]=n.current,gd(t),new Pd(n)},nl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=Rg,y=Cg,R=wg,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=lv(t,1,!0,n,a??null,o,u,k,d,y,R,xv),n.context=cv(null),a=n.current,o=oi(),o=co(o),u=Wa(o),u.callback=null,ja(a,u,o),a=o,n.current.lanes=a,zn(n,a),Wi(n),t[Di]=n.current,gd(t),new Ic(n)},nl.version="19.2.3",nl}var Dv;function pb(){if(Dv)return Id.exports;Dv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Id.exports=hb(),Id.exports}var mb=pb();var Uv="popstate";function gb(r={}){function e(l,c){let{pathname:f="/",search:h="",hash:m=""}=Kr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Eh("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:gl(c))}function s(l,c){Ri(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return _b(e,i,s,r)}function an(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ri(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vb(){return Math.random().toString(36).substring(2,10)}function Nv(r,e){return{usr:r.state,key:r.key,idx:e}}function Eh(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Kr(e):e,state:i,key:e&&e.key||s||vb()}}function gl({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Kr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function _b(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){h="POP";let S=v(),_=S==null?null:S-p;p=S,m&&m({action:h,location:A.location,delta:_})}function x(S,_){h="PUSH";let N=Eh(A.location,S,_);i&&i(N,S),p=v()+1;let w=Nv(N,p),L=A.createHref(N);try{f.pushState(w,"",L)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;l.location.assign(L)}c&&m&&m({action:h,location:A.location,delta:1})}function b(S,_){h="REPLACE";let N=Eh(A.location,S,_);i&&i(N,S),p=v();let w=Nv(N,p),L=A.createHref(N);f.replaceState(w,"",L),c&&m&&m({action:h,location:A.location,delta:0})}function E(S){return xb(S)}let A={get action(){return h},get location(){return r(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Uv,g),m=S,()=>{l.removeEventListener(Uv,g),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:b,go(S){return f.go(S)}};return A}function xb(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),an(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:gl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function B_(r,e,i="/"){return yb(r,e,i,!1)}function yb(r,e,i,s){let l=typeof e=="string"?Kr(e):e,c=Ua(l.pathname||"/",i);if(c==null)return null;let f=H_(r);Sb(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=Nb(c);h=Db(f[m],p,s)}return h}function H_(r,e=[],i=[],s="",l=!1){let c=(f,h,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&m)return;an(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let g=Ca([s,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(an(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),H_(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:Cb(g,f.index),routesMeta:x})};return r.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of G_(f.path))c(f,h,!0,m)}),e}function G_(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=G_(s.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function Sb(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:wb(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var bb=/^:[\w-]+$/,Mb=3,Eb=2,Tb=1,Ab=10,Rb=-2,Lv=r=>r==="*";function Cb(r,e){let i=r.split("/"),s=i.length;return i.some(Lv)&&(s+=Rb),e&&(s+=Eb),i.filter(l=>!Lv(l)).reduce((l,c)=>l+(bb.test(c)?Mb:c===""?Tb:Ab),s)}function wb(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function Db(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=yu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=yu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:Ca([c,g.pathname]),pathnameBase:zb(Ca([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=Ca([c,g.pathnameBase]))}return f}function yu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=Ub(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let E=h[x]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const b=h[x];return g&&!b?p[v]=void 0:p[v]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function Ub(r,e=!1,i=!0){Ri(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(s.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function Nb(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ri(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ua(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var V_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lb=r=>V_.test(r);function Ob(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Kr(r):r,c;if(i)if(Lb(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Ri(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=Ov(i.substring(1),"/"):c=Ov(i,e)}else c=e;return{pathname:c,search:Fb(s),hash:Ib(l)}}function Ov(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Vd(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pb(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function k_(r){let e=Pb(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function X_(r,e,i,s=!1){let l;typeof r=="string"?l=Kr(r):(l={...r},an(!l.pathname||!l.pathname.includes("?"),Vd("?","pathname","search",l)),an(!l.pathname||!l.pathname.includes("#"),Vd("#","pathname","hash",l)),an(!l.search||!l.search.includes("#"),Vd("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}h=g>=0?e[g]:"/"}let m=Ob(l,h),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var Ca=r=>r.join("/").replace(/\/\/+/g,"/"),zb=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Fb=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Ib=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Bb=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Hb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Gb(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var W_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function j_(r,e){let i=r;if(typeof i!="string"||!V_.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(W_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=Ua(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{Ri(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var q_=["POST","PUT","PATCH","DELETE"];new Set(q_);var Vb=["GET",...q_];new Set(Vb);var no=ee.createContext(null);no.displayName="DataRouter";var Tu=ee.createContext(null);Tu.displayName="DataRouterState";var kb=ee.createContext(!1),Y_=ee.createContext({isTransitioning:!1});Y_.displayName="ViewTransition";var Xb=ee.createContext(new Map);Xb.displayName="Fetchers";var Wb=ee.createContext(null);Wb.displayName="Await";var Ci=ee.createContext(null);Ci.displayName="Navigation";var Sl=ee.createContext(null);Sl.displayName="Location";var Pa=ee.createContext({outlet:null,matches:[],isDataRoute:!1});Pa.displayName="Route";var Ep=ee.createContext(null);Ep.displayName="RouteError";var Z_="REACT_ROUTER_ERROR",jb="REDIRECT",qb="ROUTE_ERROR_RESPONSE";function Yb(r){if(r.startsWith(`${Z_}:${jb}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Zb(r){if(r.startsWith(`${Z_}:${qb}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Bb(e.status,e.statusText,e.data)}catch{}}function Kb(r,{relative:e}={}){an(bl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=ee.useContext(Ci),{hash:l,pathname:c,search:f}=Ml(r,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:Ca([i,c])),s.createHref({pathname:h,search:f,hash:l})}function bl(){return ee.useContext(Sl)!=null}function Qr(){return an(bl(),"useLocation() may be used only in the context of a <Router> component."),ee.useContext(Sl).location}var K_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q_(r){ee.useContext(Ci).static||ee.useLayoutEffect(r)}function Qb(){let{isDataRoute:r}=ee.useContext(Pa);return r?uM():Jb()}function Jb(){an(bl(),"useNavigate() may be used only in the context of a <Router> component.");let r=ee.useContext(no),{basename:e,navigator:i}=ee.useContext(Ci),{matches:s}=ee.useContext(Pa),{pathname:l}=Qr(),c=JSON.stringify(k_(s)),f=ee.useRef(!1);return Q_(()=>{f.current=!0}),ee.useCallback((m,p={})=>{if(Ri(f.current,K_),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=X_(m,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Ca([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,r])}ee.createContext(null);function Ml(r,{relative:e}={}){let{matches:i}=ee.useContext(Pa),{pathname:s}=Qr(),l=JSON.stringify(k_(i));return ee.useMemo(()=>X_(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function $b(r,e){return J_(r,e)}function J_(r,e,i,s,l){an(bl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ee.useContext(Ci),{matches:f}=ee.useContext(Pa),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",v=h?h.pathnameBase:"/",g=h&&h.route;{let N=g&&g.path||"";ex(p,!g||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let x=Qr(),b;if(e){let N=typeof e=="string"?Kr(e):e;an(v==="/"||N.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${N.pathname}" was given in the \`location\` prop.`),b=N}else b=x;let E=b.pathname||"/",A=E;if(v!=="/"){let N=v.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(N.length).join("/")}let S=B_(r,{pathname:A});Ri(g||S!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Ri(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=aM(S&&S.map(N=>Object.assign({},N,{params:Object.assign({},m,N.params),pathname:Ca([v,c.encodeLocation?c.encodeLocation(N.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?v:Ca([v,c.encodeLocation?c.encodeLocation(N.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),f,i,s,l);return e&&_?ee.createElement(Sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},_):_}function eM(){let r=cM(),e=Hb(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=ee.createElement(ee.Fragment,null,ee.createElement("p",null,"💿 Hey developer 👋"),ee.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ee.createElement("code",{style:c},"ErrorBoundary")," or"," ",ee.createElement("code",{style:c},"errorElement")," prop on your route.")),ee.createElement(ee.Fragment,null,ee.createElement("h2",null,"Unexpected Application Error!"),ee.createElement("h3",{style:{fontStyle:"italic"}},e),i?ee.createElement("pre",{style:l},i):null,f)}var tM=ee.createElement(eM,null),$_=class extends ee.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=Zb(r.digest);i&&(r=i)}let e=r!==void 0?ee.createElement(Pa.Provider,{value:this.props.routeContext},ee.createElement(Ep.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ee.createElement(nM,{error:r},e):e}};$_.contextType=kb;var kd=new WeakMap;function nM({children:r,error:e}){let{basename:i}=ee.useContext(Ci);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Yb(e.digest);if(s){let l=kd.get(e);if(l)throw l;let c=j_(s.location,i);if(W_&&!kd.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw kd.set(e,f),f}return ee.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function iM({routeContext:r,match:e,children:i}){let s=ee.useContext(no);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ee.createElement(Pa.Provider,{value:r},i)}function aM(r,e=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);an(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,m=-1;if(i)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:x,errors:b}=i,E=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&s?(v,g)=>{s(v,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:Gb(i.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,x)=>{let b,E=!1,A=null,S=null;i&&(b=f&&g.route.id?f[g.route.id]:void 0,A=g.route.errorElement||tM,h&&(m<0&&x===0?(ex("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):m===x&&(E=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,x+1)),N=()=>{let w;return b?w=A:E?w=S:g.route.Component?w=ee.createElement(g.route.Component,null):g.route.element?w=g.route.element:w=v,ee.createElement(iM,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:i!=null},children:w})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?ee.createElement($_,{location:i.location,revalidation:i.revalidation,component:A,error:b,children:N(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):N()},null)}function Tp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rM(r){let e=ee.useContext(no);return an(e,Tp(r)),e}function sM(r){let e=ee.useContext(Tu);return an(e,Tp(r)),e}function oM(r){let e=ee.useContext(Pa);return an(e,Tp(r)),e}function Ap(r){let e=oM(r),i=e.matches[e.matches.length-1];return an(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function lM(){return Ap("useRouteId")}function cM(){let r=ee.useContext(Ep),e=sM("useRouteError"),i=Ap("useRouteError");return r!==void 0?r:e.errors?.[i]}function uM(){let{router:r}=rM("useNavigate"),e=Ap("useNavigate"),i=ee.useRef(!1);return Q_(()=>{i.current=!0}),ee.useCallback(async(l,c={})=>{Ri(i.current,K_),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var Pv={};function ex(r,e,i){!e&&!Pv[r]&&(Pv[r]=!0,Ri(!1,i))}ee.memo(fM);function fM({routes:r,future:e,state:i,onError:s}){return J_(r,void 0,i,s,e)}function dl(r){an(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){an(!bl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),m=ee.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Kr(i));let{pathname:p="/",search:v="",hash:g="",state:x=null,key:b="default"}=i,E=ee.useMemo(()=>{let A=Ua(p,h);return A==null?null:{location:{pathname:A,search:v,hash:g,state:x,key:b},navigationType:s}},[h,p,v,g,x,b,s]);return Ri(E!=null,`<Router basename="${h}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:ee.createElement(Ci.Provider,{value:m},ee.createElement(Sl.Provider,{children:e,value:E}))}function hM({children:r,location:e}){return $b(Th(r),e)}function Th(r,e=[]){let i=[];return ee.Children.forEach(r,(s,l)=>{if(!ee.isValidElement(s))return;let c=[...e,l];if(s.type===ee.Fragment){i.push.apply(i,Th(s.props.children,c));return}an(s.type===dl,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),an(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Th(s.props.children,c)),i.push(f)}),i}var du="get",hu="application/x-www-form-urlencoded";function Au(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function pM(r){return Au(r)&&r.tagName.toLowerCase()==="button"}function mM(r){return Au(r)&&r.tagName.toLowerCase()==="form"}function gM(r){return Au(r)&&r.tagName.toLowerCase()==="input"}function vM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function _M(r,e){return r.button===0&&(!e||e==="_self")&&!vM(r)}var Hc=null;function xM(){if(Hc===null)try{new FormData(document.createElement("form"),0),Hc=!1}catch{Hc=!0}return Hc}var yM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xd(r){return r!=null&&!yM.has(r)?(Ri(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hu}"`),null):r}function SM(r,e){let i,s,l,c,f;if(mM(r)){let h=r.getAttribute("action");s=h?Ua(h,e):null,i=r.getAttribute("method")||du,l=Xd(r.getAttribute("enctype"))||hu,c=new FormData(r)}else if(pM(r)||gM(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||h.getAttribute("action");if(s=m?Ua(m,e):null,i=r.getAttribute("formmethod")||h.getAttribute("method")||du,l=Xd(r.getAttribute("formenctype"))||Xd(h.getAttribute("enctype"))||hu,c=new FormData(h,r),!xM()){let{name:p,type:v,value:g}=r;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(Au(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=du,s=null,l=hu,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Rp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function bM(r,e,i){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${i}`:e&&Ua(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function MM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function EM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function TM(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await MM(c,i);return f.links?f.links():[]}return[]}));return wM(s.flat(1).filter(EM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function zv(r,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let v=s.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function AM(r,e,{includeHydrateFallback:i}={}){return RM(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function RM(r){return[...new Set(r)]}function CM(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function wM(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(CM(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function tx(){let r=ee.useContext(no);return Rp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function DM(){let r=ee.useContext(Tu);return Rp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Cp=ee.createContext(void 0);Cp.displayName="FrameworkContext";function nx(){let r=ee.useContext(Cp);return Rp(r,"You must render this element inside a <HydratedRouter> element"),r}function UM(r,e){let i=ee.useContext(Cp),[s,l]=ee.useState(!1),[c,f]=ee.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,x=ee.useRef(null);ee.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let A=_=>{_.forEach(N=>{f(N.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[r]),ee.useEffect(()=>{if(s){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[s]);let b=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,x,{}]:[c,x,{onFocus:il(h,b),onBlur:il(m,E),onMouseEnter:il(p,b),onMouseLeave:il(v,E),onTouchStart:il(g,b)}]:[!1,x,{}]}function il(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function NM({page:r,...e}){let{router:i}=tx(),s=ee.useMemo(()=>B_(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?ee.createElement(OM,{page:r,matches:s,...e}):null}function LM(r){let{manifest:e,routeModules:i}=nx(),[s,l]=ee.useState([]);return ee.useEffect(()=>{let c=!1;return TM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function OM({page:r,matches:e,...i}){let s=Qr(),{manifest:l,routeModules:c}=nx(),{basename:f}=tx(),{loaderData:h,matches:m}=DM(),p=ee.useMemo(()=>zv(r,e,m,l,s,"data"),[r,e,m,l,s]),v=ee.useMemo(()=>zv(r,e,m,l,s,"assets"),[r,e,m,l,s]),g=ee.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,A=!1;if(e.forEach(_=>{let N=l.routes[_.route.id];!N||!N.hasLoader||(!p.some(w=>w.route.id===_.route.id)&&_.route.id in h&&c[_.route.id]?.shouldRevalidate||N.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let S=bM(r,f,"data");return A&&E.size>0&&S.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,h,s,l,p,e,r,c]),x=ee.useMemo(()=>AM(v,l),[v,l]),b=LM(v);return ee.createElement(ee.Fragment,null,g.map(E=>ee.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>ee.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),b.map(({key:E,link:A})=>ee.createElement("link",{key:E,nonce:i.nonce,...A})))}function PM(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var zM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zM&&(window.__reactRouterVersion="7.11.0")}catch{}function FM({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=ee.useRef();l.current==null&&(l.current=gb({window:s,v5Compat:!0}));let c=l.current,[f,h]=ee.useState({action:c.action,location:c.location}),m=ee.useCallback(p=>{i===!1?h(p):ee.startTransition(()=>h(p))},[i]);return ee.useLayoutEffect(()=>c.listen(m),[c,m]),ee.createElement(dM,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var ix=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,io=ee.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...b},E){let{basename:A,unstable_useTransitions:S}=ee.useContext(Ci),_=typeof p=="string"&&ix.test(p),N=j_(p,A);p=N.to;let w=Kb(p,{relative:l}),[L,U,O]=UM(s,b),P=GM(p,{replace:f,state:h,target:m,preventScrollReset:v,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:S});function B(D){e&&e(D),D.defaultPrevented||P(D)}let T=ee.createElement("a",{...b,...O,href:N.absoluteURL||w,onClick:N.isExternal||c?e:B,ref:PM(E,U),target:m,"data-discover":!_&&i==="render"?"true":void 0});return L&&!_?ee.createElement(ee.Fragment,null,T,ee.createElement(NM,{page:w})):T});io.displayName="Link";var IM=ee.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},v){let g=Ml(f,{relative:p.relative}),x=Qr(),b=ee.useContext(Tu),{navigator:E,basename:A}=ee.useContext(Ci),S=b!=null&&jM(g)&&h===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,N=x.pathname,w=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(N=N.toLowerCase(),w=w?w.toLowerCase():null,_=_.toLowerCase()),w&&A&&(w=Ua(w,A)||w);const L=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let U=N===_||!l&&N.startsWith(_)&&N.charAt(L)==="/",O=w!=null&&(w===_||!l&&w.startsWith(_)&&w.charAt(_.length)==="/"),P={isActive:U,isPending:O,isTransitioning:S},B=U?e:void 0,T;typeof s=="function"?T=s(P):T=[s,U?"active":null,O?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(P):c;return ee.createElement(io,{...p,"aria-current":B,className:T,ref:v,style:D,to:f,viewTransition:h},typeof m=="function"?m(P):m)});IM.displayName="NavLink";var BM=ee.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=du,action:h,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...b},E)=>{let{unstable_useTransitions:A}=ee.useContext(Ci),S=XM(),_=WM(h,{relative:p}),N=f.toLowerCase()==="get"?"get":"post",w=typeof h=="string"&&ix.test(h),L=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let O=U.nativeEvent.submitter,P=O?.getAttribute("formmethod")||f,B=()=>S(O||U.currentTarget,{fetcherKey:e,method:P,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x});A&&i!==!1?ee.startTransition(()=>B()):B()};return ee.createElement("form",{ref:E,method:N,action:_,onSubmit:s?m:L,...b,"data-discover":!w&&r==="render"?"true":void 0})});BM.displayName="Form";function HM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ax(r){let e=ee.useContext(no);return an(e,HM(r)),e}function GM(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let p=Qb(),v=Qr(),g=Ml(r,{relative:c});return ee.useCallback(x=>{if(_M(x,e)){x.preventDefault();let b=i!==void 0?i:gl(v)===gl(g),E=()=>p(r,{replace:b,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});m?ee.startTransition(()=>E()):E()}},[v,p,g,i,s,e,r,l,c,f,h,m])}var VM=0,kM=()=>`__${String(++VM)}__`;function XM(){let{router:r}=ax("useSubmit"),{basename:e}=ee.useContext(Ci),i=lM(),s=r.fetch,l=r.navigate;return ee.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:v,body:g}=SM(c,e);if(f.navigate===!1){let x=f.fetcherKey||kM();await s(x,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function WM(r,{relative:e}={}){let{basename:i}=ee.useContext(Ci),s=ee.useContext(Pa);an(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...Ml(r||".",{relative:e})},f=Qr();if(r==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let v=h.toString();c.search=v?`?${v}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Ca([i,c.pathname])),gl(c)}function jM(r,{relative:e}={}){let i=ee.useContext(Y_);an(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ax("useViewTransitionState"),l=Ml(r,{relative:e});if(!i.isTransitioning)return!1;let c=Ua(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Ua(i.nextLocation.pathname,s)||i.nextLocation.pathname;return yu(l.pathname,f)!=null||yu(l.pathname,c)!=null}function rx(r){var e,i,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var l=r.length;for(e=0;e<l;e++)r[e]&&(i=rx(r[e]))&&(s&&(s+=" "),s+=i)}else for(i in r)r[i]&&(s&&(s+=" "),s+=i);return s}function qM(){for(var r,e,i=0,s="",l=arguments.length;i<l;i++)(r=arguments[i])&&(e=rx(r))&&(s&&(s+=" "),s+=e);return s}const YM=(r,e)=>{const i=new Array(r.length+e.length);for(let s=0;s<r.length;s++)i[s]=r[s];for(let s=0;s<e.length;s++)i[r.length+s]=e[s];return i},ZM=(r,e)=>({classGroupId:r,validator:e}),sx=(r=new Map,e=null,i)=>({nextPart:r,validators:e,classGroupId:i}),Su="-",Fv=[],KM="arbitrary..",QM=r=>{const e=$M(r),{conflictingClassGroups:i,conflictingClassGroupModifiers:s}=r;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return JM(f);const h=f.split(Su),m=h[0]===""&&h.length>1?1:0;return ox(h,m,e)},getConflictingClassGroupIds:(f,h)=>{if(h){const m=s[f],p=i[f];return m?p?YM(p,m):m:p||Fv}return i[f]||Fv}}},ox=(r,e,i)=>{if(r.length-e===0)return i.classGroupId;const l=r[e],c=i.nextPart.get(l);if(c){const p=ox(r,e+1,c);if(p)return p}const f=i.validators;if(f===null)return;const h=e===0?r.join(Su):r.slice(e).join(Su),m=f.length;for(let p=0;p<m;p++){const v=f[p];if(v.validator(h))return v.classGroupId}},JM=r=>r.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=r.slice(1,-1),i=e.indexOf(":"),s=e.slice(0,i);return s?KM+s:void 0})(),$M=r=>{const{theme:e,classGroups:i}=r;return eE(i,e)},eE=(r,e)=>{const i=sx();for(const s in r){const l=r[s];wp(l,i,s,e)}return i},wp=(r,e,i,s)=>{const l=r.length;for(let c=0;c<l;c++){const f=r[c];tE(f,e,i,s)}},tE=(r,e,i,s)=>{if(typeof r=="string"){nE(r,e,i);return}if(typeof r=="function"){iE(r,e,i,s);return}aE(r,e,i,s)},nE=(r,e,i)=>{const s=r===""?e:lx(e,r);s.classGroupId=i},iE=(r,e,i,s)=>{if(rE(r)){wp(r(s),e,i,s);return}e.validators===null&&(e.validators=[]),e.validators.push(ZM(i,r))},aE=(r,e,i,s)=>{const l=Object.entries(r),c=l.length;for(let f=0;f<c;f++){const[h,m]=l[f];wp(m,lx(e,h),i,s)}},lx=(r,e)=>{let i=r;const s=e.split(Su),l=s.length;for(let c=0;c<l;c++){const f=s[c];let h=i.nextPart.get(f);h||(h=sx(),i.nextPart.set(f,h)),i=h}return i},rE=r=>"isThemeGetter"in r&&r.isThemeGetter===!0,sE=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,i=Object.create(null),s=Object.create(null);const l=(c,f)=>{i[c]=f,e++,e>r&&(e=0,s=i,i=Object.create(null))};return{get(c){let f=i[c];if(f!==void 0)return f;if((f=s[c])!==void 0)return l(c,f),f},set(c,f){c in i?i[c]=f:l(c,f)}}},Ah="!",Iv=":",oE=[],Bv=(r,e,i,s,l)=>({modifiers:r,hasImportantModifier:e,baseClassName:i,maybePostfixModifierPosition:s,isExternal:l}),lE=r=>{const{prefix:e,experimentalParseClassName:i}=r;let s=l=>{const c=[];let f=0,h=0,m=0,p;const v=l.length;for(let A=0;A<v;A++){const S=l[A];if(f===0&&h===0){if(S===Iv){c.push(l.slice(m,A)),m=A+1;continue}if(S==="/"){p=A;continue}}S==="["?f++:S==="]"?f--:S==="("?h++:S===")"&&h--}const g=c.length===0?l:l.slice(m);let x=g,b=!1;g.endsWith(Ah)?(x=g.slice(0,-1),b=!0):g.startsWith(Ah)&&(x=g.slice(1),b=!0);const E=p&&p>m?p-m:void 0;return Bv(c,b,x,E)};if(e){const l=e+Iv,c=s;s=f=>f.startsWith(l)?c(f.slice(l.length)):Bv(oE,!1,f,void 0,!0)}if(i){const l=s;s=c=>i({className:c,parseClassName:l})}return s},cE=r=>{const e=new Map;return r.orderSensitiveModifiers.forEach((i,s)=>{e.set(i,1e6+s)}),i=>{const s=[];let l=[];for(let c=0;c<i.length;c++){const f=i[c],h=f[0]==="[",m=e.has(f);h||m?(l.length>0&&(l.sort(),s.push(...l),l=[]),s.push(f)):l.push(f)}return l.length>0&&(l.sort(),s.push(...l)),s}},uE=r=>({cache:sE(r.cacheSize),parseClassName:lE(r),sortModifiers:cE(r),...QM(r)}),fE=/\s+/,dE=(r,e)=>{const{parseClassName:i,getClassGroupId:s,getConflictingClassGroupIds:l,sortModifiers:c}=e,f=[],h=r.trim().split(fE);let m="";for(let p=h.length-1;p>=0;p-=1){const v=h[p],{isExternal:g,modifiers:x,hasImportantModifier:b,baseClassName:E,maybePostfixModifierPosition:A}=i(v);if(g){m=v+(m.length>0?" "+m:m);continue}let S=!!A,_=s(S?E.substring(0,A):E);if(!_){if(!S){m=v+(m.length>0?" "+m:m);continue}if(_=s(E),!_){m=v+(m.length>0?" "+m:m);continue}S=!1}const N=x.length===0?"":x.length===1?x[0]:c(x).join(":"),w=b?N+Ah:N,L=w+_;if(f.indexOf(L)>-1)continue;f.push(L);const U=l(_,S);for(let O=0;O<U.length;++O){const P=U[O];f.push(w+P)}m=v+(m.length>0?" "+m:m)}return m},hE=(...r)=>{let e=0,i,s,l="";for(;e<r.length;)(i=r[e++])&&(s=cx(i))&&(l&&(l+=" "),l+=s);return l},cx=r=>{if(typeof r=="string")return r;let e,i="";for(let s=0;s<r.length;s++)r[s]&&(e=cx(r[s]))&&(i&&(i+=" "),i+=e);return i},pE=(r,...e)=>{let i,s,l,c;const f=m=>{const p=e.reduce((v,g)=>g(v),r());return i=uE(p),s=i.cache.get,l=i.cache.set,c=h,h(m)},h=m=>{const p=s(m);if(p)return p;const v=dE(m,i);return l(m,v),v};return c=f,(...m)=>c(hE(...m))},mE=[],yn=r=>{const e=i=>i[r]||mE;return e.isThemeGetter=!0,e},ux=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,fx=/^\((?:(\w[\w-]*):)?(.+)\)$/i,gE=/^\d+\/\d+$/,vE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_E=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,xE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,yE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,SE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Os=r=>gE.test(r),_t=r=>!!r&&!Number.isNaN(Number(r)),lr=r=>!!r&&Number.isInteger(Number(r)),Wd=r=>r.endsWith("%")&&_t(r.slice(0,-1)),xa=r=>vE.test(r),bE=()=>!0,ME=r=>_E.test(r)&&!xE.test(r),dx=()=>!1,EE=r=>yE.test(r),TE=r=>SE.test(r),AE=r=>!je(r)&&!qe(r),RE=r=>ao(r,mx,dx),je=r=>ux.test(r),zr=r=>ao(r,gx,ME),jd=r=>ao(r,NE,_t),Hv=r=>ao(r,hx,dx),CE=r=>ao(r,px,TE),Gc=r=>ao(r,vx,EE),qe=r=>fx.test(r),al=r=>ro(r,gx),wE=r=>ro(r,LE),Gv=r=>ro(r,hx),DE=r=>ro(r,mx),UE=r=>ro(r,px),Vc=r=>ro(r,vx,!0),ao=(r,e,i)=>{const s=ux.exec(r);return s?s[1]?e(s[1]):i(s[2]):!1},ro=(r,e,i=!1)=>{const s=fx.exec(r);return s?s[1]?e(s[1]):i:!1},hx=r=>r==="position"||r==="percentage",px=r=>r==="image"||r==="url",mx=r=>r==="length"||r==="size"||r==="bg-size",gx=r=>r==="length",NE=r=>r==="number",LE=r=>r==="family-name",vx=r=>r==="shadow",OE=()=>{const r=yn("color"),e=yn("font"),i=yn("text"),s=yn("font-weight"),l=yn("tracking"),c=yn("leading"),f=yn("breakpoint"),h=yn("container"),m=yn("spacing"),p=yn("radius"),v=yn("shadow"),g=yn("inset-shadow"),x=yn("text-shadow"),b=yn("drop-shadow"),E=yn("blur"),A=yn("perspective"),S=yn("aspect"),_=yn("ease"),N=yn("animate"),w=()=>["auto","avoid","all","avoid-page","page","left","right","column"],L=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],U=()=>[...L(),qe,je],O=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto","contain","none"],B=()=>[qe,je,m],T=()=>[Os,"full","auto",...B()],D=()=>[lr,"none","subgrid",qe,je],G=()=>["auto",{span:["full",lr,qe,je]},lr,qe,je],q=()=>[lr,"auto",qe,je],J=()=>["auto","min","max","fr",qe,je],ne=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],re=()=>["start","end","center","stretch","center-safe","end-safe"],z=()=>["auto",...B()],V=()=>[Os,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...B()],W=()=>[r,qe,je],Se=()=>[...L(),Gv,Hv,{position:[qe,je]}],xe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],F=()=>["auto","cover","contain",DE,RE,{size:[qe,je]}],te=()=>[Wd,al,zr],fe=()=>["","none","full",p,qe,je],Ee=()=>["",_t,al,zr],Le=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ue=()=>[_t,Wd,Gv,Hv],De=()=>["","none",E,qe,je],ke=()=>["none",_t,qe,je],He=()=>["none",_t,qe,je],ht=()=>[_t,qe,je],Zt=()=>[Os,"full",...B()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[xa],breakpoint:[xa],color:[bE],container:[xa],"drop-shadow":[xa],ease:["in","out","in-out"],font:[AE],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[xa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[xa],shadow:[xa],spacing:["px",_t],text:[xa],"text-shadow":[xa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Os,je,qe,S]}],container:["container"],columns:[{columns:[_t,je,qe,h]}],"break-after":[{"break-after":w()}],"break-before":[{"break-before":w()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:U()}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{start:T()}],end:[{end:T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:["visible","invisible","collapse"],z:[{z:[lr,"auto",qe,je]}],basis:[{basis:[Os,"full","auto",h,...B()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[_t,Os,"auto","initial","none",je]}],grow:[{grow:["",_t,qe,je]}],shrink:[{shrink:["",_t,qe,je]}],order:[{order:[lr,"first","last","none",qe,je]}],"grid-cols":[{"grid-cols":D()}],"col-start-end":[{col:G()}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":D()}],"row-start-end":[{row:G()}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":J()}],"auto-rows":[{"auto-rows":J()}],gap:[{gap:B()}],"gap-x":[{"gap-x":B()}],"gap-y":[{"gap-y":B()}],"justify-content":[{justify:[...ne(),"normal"]}],"justify-items":[{"justify-items":[...re(),"normal"]}],"justify-self":[{"justify-self":["auto",...re()]}],"align-content":[{content:["normal",...ne()]}],"align-items":[{items:[...re(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...re(),{baseline:["","last"]}]}],"place-content":[{"place-content":ne()}],"place-items":[{"place-items":[...re(),"baseline"]}],"place-self":[{"place-self":["auto",...re()]}],p:[{p:B()}],px:[{px:B()}],py:[{py:B()}],ps:[{ps:B()}],pe:[{pe:B()}],pt:[{pt:B()}],pr:[{pr:B()}],pb:[{pb:B()}],pl:[{pl:B()}],m:[{m:z()}],mx:[{mx:z()}],my:[{my:z()}],ms:[{ms:z()}],me:[{me:z()}],mt:[{mt:z()}],mr:[{mr:z()}],mb:[{mb:z()}],ml:[{ml:z()}],"space-x":[{"space-x":B()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":B()}],"space-y-reverse":["space-y-reverse"],size:[{size:V()}],w:[{w:[h,"screen",...V()]}],"min-w":[{"min-w":[h,"screen","none",...V()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[f]},...V()]}],h:[{h:["screen","lh",...V()]}],"min-h":[{"min-h":["screen","lh","none",...V()]}],"max-h":[{"max-h":["screen","lh",...V()]}],"font-size":[{text:["base",i,al,zr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,qe,jd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Wd,je]}],"font-family":[{font:[wE,je,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,qe,je]}],"line-clamp":[{"line-clamp":[_t,"none",qe,jd]}],leading:[{leading:[c,...B()]}],"list-image":[{"list-image":["none",qe,je]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",qe,je]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:W()}],"text-color":[{text:W()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Le(),"wavy"]}],"text-decoration-thickness":[{decoration:[_t,"from-font","auto",qe,zr]}],"text-decoration-color":[{decoration:W()}],"underline-offset":[{"underline-offset":[_t,"auto",qe,je]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",qe,je]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",qe,je]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Se()}],"bg-repeat":[{bg:xe()}],"bg-size":[{bg:F()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},lr,qe,je],radial:["",qe,je],conic:[lr,qe,je]},UE,CE]}],"bg-color":[{bg:W()}],"gradient-from-pos":[{from:te()}],"gradient-via-pos":[{via:te()}],"gradient-to-pos":[{to:te()}],"gradient-from":[{from:W()}],"gradient-via":[{via:W()}],"gradient-to":[{to:W()}],rounded:[{rounded:fe()}],"rounded-s":[{"rounded-s":fe()}],"rounded-e":[{"rounded-e":fe()}],"rounded-t":[{"rounded-t":fe()}],"rounded-r":[{"rounded-r":fe()}],"rounded-b":[{"rounded-b":fe()}],"rounded-l":[{"rounded-l":fe()}],"rounded-ss":[{"rounded-ss":fe()}],"rounded-se":[{"rounded-se":fe()}],"rounded-ee":[{"rounded-ee":fe()}],"rounded-es":[{"rounded-es":fe()}],"rounded-tl":[{"rounded-tl":fe()}],"rounded-tr":[{"rounded-tr":fe()}],"rounded-br":[{"rounded-br":fe()}],"rounded-bl":[{"rounded-bl":fe()}],"border-w":[{border:Ee()}],"border-w-x":[{"border-x":Ee()}],"border-w-y":[{"border-y":Ee()}],"border-w-s":[{"border-s":Ee()}],"border-w-e":[{"border-e":Ee()}],"border-w-t":[{"border-t":Ee()}],"border-w-r":[{"border-r":Ee()}],"border-w-b":[{"border-b":Ee()}],"border-w-l":[{"border-l":Ee()}],"divide-x":[{"divide-x":Ee()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ee()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Le(),"hidden","none"]}],"divide-style":[{divide:[...Le(),"hidden","none"]}],"border-color":[{border:W()}],"border-color-x":[{"border-x":W()}],"border-color-y":[{"border-y":W()}],"border-color-s":[{"border-s":W()}],"border-color-e":[{"border-e":W()}],"border-color-t":[{"border-t":W()}],"border-color-r":[{"border-r":W()}],"border-color-b":[{"border-b":W()}],"border-color-l":[{"border-l":W()}],"divide-color":[{divide:W()}],"outline-style":[{outline:[...Le(),"none","hidden"]}],"outline-offset":[{"outline-offset":[_t,qe,je]}],"outline-w":[{outline:["",_t,al,zr]}],"outline-color":[{outline:W()}],shadow:[{shadow:["","none",v,Vc,Gc]}],"shadow-color":[{shadow:W()}],"inset-shadow":[{"inset-shadow":["none",g,Vc,Gc]}],"inset-shadow-color":[{"inset-shadow":W()}],"ring-w":[{ring:Ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:W()}],"ring-offset-w":[{"ring-offset":[_t,zr]}],"ring-offset-color":[{"ring-offset":W()}],"inset-ring-w":[{"inset-ring":Ee()}],"inset-ring-color":[{"inset-ring":W()}],"text-shadow":[{"text-shadow":["none",x,Vc,Gc]}],"text-shadow-color":[{"text-shadow":W()}],opacity:[{opacity:[_t,qe,je]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[_t]}],"mask-image-linear-from-pos":[{"mask-linear-from":ue()}],"mask-image-linear-to-pos":[{"mask-linear-to":ue()}],"mask-image-linear-from-color":[{"mask-linear-from":W()}],"mask-image-linear-to-color":[{"mask-linear-to":W()}],"mask-image-t-from-pos":[{"mask-t-from":ue()}],"mask-image-t-to-pos":[{"mask-t-to":ue()}],"mask-image-t-from-color":[{"mask-t-from":W()}],"mask-image-t-to-color":[{"mask-t-to":W()}],"mask-image-r-from-pos":[{"mask-r-from":ue()}],"mask-image-r-to-pos":[{"mask-r-to":ue()}],"mask-image-r-from-color":[{"mask-r-from":W()}],"mask-image-r-to-color":[{"mask-r-to":W()}],"mask-image-b-from-pos":[{"mask-b-from":ue()}],"mask-image-b-to-pos":[{"mask-b-to":ue()}],"mask-image-b-from-color":[{"mask-b-from":W()}],"mask-image-b-to-color":[{"mask-b-to":W()}],"mask-image-l-from-pos":[{"mask-l-from":ue()}],"mask-image-l-to-pos":[{"mask-l-to":ue()}],"mask-image-l-from-color":[{"mask-l-from":W()}],"mask-image-l-to-color":[{"mask-l-to":W()}],"mask-image-x-from-pos":[{"mask-x-from":ue()}],"mask-image-x-to-pos":[{"mask-x-to":ue()}],"mask-image-x-from-color":[{"mask-x-from":W()}],"mask-image-x-to-color":[{"mask-x-to":W()}],"mask-image-y-from-pos":[{"mask-y-from":ue()}],"mask-image-y-to-pos":[{"mask-y-to":ue()}],"mask-image-y-from-color":[{"mask-y-from":W()}],"mask-image-y-to-color":[{"mask-y-to":W()}],"mask-image-radial":[{"mask-radial":[qe,je]}],"mask-image-radial-from-pos":[{"mask-radial-from":ue()}],"mask-image-radial-to-pos":[{"mask-radial-to":ue()}],"mask-image-radial-from-color":[{"mask-radial-from":W()}],"mask-image-radial-to-color":[{"mask-radial-to":W()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":L()}],"mask-image-conic-pos":[{"mask-conic":[_t]}],"mask-image-conic-from-pos":[{"mask-conic-from":ue()}],"mask-image-conic-to-pos":[{"mask-conic-to":ue()}],"mask-image-conic-from-color":[{"mask-conic-from":W()}],"mask-image-conic-to-color":[{"mask-conic-to":W()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Se()}],"mask-repeat":[{mask:xe()}],"mask-size":[{mask:F()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",qe,je]}],filter:[{filter:["","none",qe,je]}],blur:[{blur:De()}],brightness:[{brightness:[_t,qe,je]}],contrast:[{contrast:[_t,qe,je]}],"drop-shadow":[{"drop-shadow":["","none",b,Vc,Gc]}],"drop-shadow-color":[{"drop-shadow":W()}],grayscale:[{grayscale:["",_t,qe,je]}],"hue-rotate":[{"hue-rotate":[_t,qe,je]}],invert:[{invert:["",_t,qe,je]}],saturate:[{saturate:[_t,qe,je]}],sepia:[{sepia:["",_t,qe,je]}],"backdrop-filter":[{"backdrop-filter":["","none",qe,je]}],"backdrop-blur":[{"backdrop-blur":De()}],"backdrop-brightness":[{"backdrop-brightness":[_t,qe,je]}],"backdrop-contrast":[{"backdrop-contrast":[_t,qe,je]}],"backdrop-grayscale":[{"backdrop-grayscale":["",_t,qe,je]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[_t,qe,je]}],"backdrop-invert":[{"backdrop-invert":["",_t,qe,je]}],"backdrop-opacity":[{"backdrop-opacity":[_t,qe,je]}],"backdrop-saturate":[{"backdrop-saturate":[_t,qe,je]}],"backdrop-sepia":[{"backdrop-sepia":["",_t,qe,je]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":B()}],"border-spacing-x":[{"border-spacing-x":B()}],"border-spacing-y":[{"border-spacing-y":B()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",qe,je]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[_t,"initial",qe,je]}],ease:[{ease:["linear","initial",_,qe,je]}],delay:[{delay:[_t,qe,je]}],animate:[{animate:["none",N,qe,je]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,qe,je]}],"perspective-origin":[{"perspective-origin":U()}],rotate:[{rotate:ke()}],"rotate-x":[{"rotate-x":ke()}],"rotate-y":[{"rotate-y":ke()}],"rotate-z":[{"rotate-z":ke()}],scale:[{scale:He()}],"scale-x":[{"scale-x":He()}],"scale-y":[{"scale-y":He()}],"scale-z":[{"scale-z":He()}],"scale-3d":["scale-3d"],skew:[{skew:ht()}],"skew-x":[{"skew-x":ht()}],"skew-y":[{"skew-y":ht()}],transform:[{transform:[qe,je,"","none","gpu","cpu"]}],"transform-origin":[{origin:U()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Zt()}],"translate-x":[{"translate-x":Zt()}],"translate-y":[{"translate-y":Zt()}],"translate-z":[{"translate-z":Zt()}],"translate-none":["translate-none"],accent:[{accent:W()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:W()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",qe,je]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",qe,je]}],fill:[{fill:["none",...W()]}],"stroke-w":[{stroke:[_t,al,zr,jd]}],stroke:[{stroke:["none",...W()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},PE=pE(OE);function Bi(...r){return PE(qM(r))}function zE({children:r,className:e,gradientSize:i=200,gradientColor:s="#00d4ff",gradientOpacity:l=.15}){const c=ee.useRef(null),[f,h]=ee.useState({x:0,y:0}),[m,p]=ee.useState(0),v=ee.useCallback(b=>{if(!c.current)return;const E=c.current.getBoundingClientRect();h({x:b.clientX-E.left,y:b.clientY-E.top})},[]),g=ee.useCallback(()=>{p(1)},[]),x=ee.useCallback(()=>{p(0)},[]);return H.jsxs("div",{ref:c,onMouseMove:v,onMouseEnter:g,onMouseLeave:x,className:Bi("relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card transition-all duration-300","hover:border-border-accent hover:bg-bg-card-hover",e),children:[H.jsx("div",{className:"pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",style:{opacity:m,background:`radial-gradient(${i}px circle at ${f.x}px ${f.y}px, ${s}${Math.round(l*255).toString(16).padStart(2,"0")}, transparent 40%)`}}),H.jsx("div",{className:"relative z-10",children:r})]})}const FE=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),IE=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),Vv=r=>{const e=IE(r);return e.charAt(0).toUpperCase()+e.slice(1)},_x=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),BE=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var HE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const GE=ee.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...h},m)=>ee.createElement("svg",{ref:m,...HE,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:_x("lucide",l),...!c&&!BE(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,v])=>ee.createElement(p,v)),...Array.isArray(c)?c:[c]]));const Gn=(r,e)=>{const i=ee.forwardRef(({className:s,...l},c)=>ee.createElement(GE,{ref:c,iconNode:e,className:_x(`lucide-${FE(Vv(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Vv(r),i};const VE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Dp=Gn("arrow-left",VE);const kE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],XE=Gn("check",kE);const WE=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],jE=Gn("chef-hat",WE);const qE=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],YE=Gn("clock",qE);const ZE=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],KE=Gn("dna",ZE);const QE=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],JE=Gn("file-text",QE);const $E=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],e1=Gn("gamepad-2",$E);const t1=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],n1=Gn("mic-off",t1);const i1=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],a1=Gn("mic",i1);const r1=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],xx=Gn("music",r1);const s1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],o1=Gn("palette",s1);const l1=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],c1=Gn("pause",l1);const u1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],f1=Gn("play",u1);const d1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],h1=Gn("rotate-ccw",d1);const p1=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],m1=Gn("smartphone",p1);const g1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],v1=Gn("sparkles",g1),_1=[{id:"sensors",title:"Sensor Diagnostics",description:"Test iOS web sensor APIs including motion, orientation, geolocation, and camera.",icon:H.jsx(m1,{className:"w-8 h-8"}),path:"/sensors",status:"available",gradient:"from-accent-cyan/20 to-accent-purple/20",size:"large"},{id:"colors",title:"Color Picker",description:"EyeDropper API demo",icon:H.jsx(o1,{className:"w-6 h-6"}),path:"/colors",status:"coming-soon",gradient:"from-accent-green/20 to-accent-cyan/20",size:"small"},{id:"audio",title:"Audio Visualizer",description:"3D audio visualizations with Galaxy & DNA modes",icon:H.jsx(xx,{className:"w-6 h-6"}),path:"/audio",status:"available",gradient:"from-accent-purple/20 to-accent-red/20",size:"small"},{id:"ribeye",title:"Ribeye Dinner",description:"70s cookbook-style cooking timer for the perfect steak dinner",icon:H.jsx(jE,{className:"w-6 h-6"}),path:"/ribeye",status:"available",gradient:"from-orange-500/20 to-yellow-500/20",size:"small"},{id:"timer",title:"Timer",description:"Precision timing APIs",icon:H.jsx(YE,{className:"w-6 h-6"}),path:"/timer",status:"coming-soon",gradient:"from-accent-yellow/20 to-accent-green/20",size:"small"},{id:"clipboard",title:"Clipboard",description:"Clipboard API demo",icon:H.jsx(JE,{className:"w-6 h-6"}),path:"/clipboard",status:"coming-soon",gradient:"from-accent-cyan/20 to-accent-green/20",size:"small"},{id:"gamepad",title:"Gamepad",description:"Gamepad API tester",icon:H.jsx(e1,{className:"w-6 h-6"}),path:"/gamepad",status:"coming-soon",gradient:"from-accent-red/20 to-accent-yellow/20",size:"small"}];function x1({app:r,index:e}){const i=r.status==="available",s=H.jsx(zE,{className:Bi("group cursor-pointer",r.size==="large"?"col-span-2 row-span-2":"",!i&&"opacity-60 cursor-not-allowed"),gradientColor:r.gradient.includes("cyan")?"#00d4ff":"#aa66ff",children:H.jsxs("div",{className:Bi("p-6 h-full flex flex-col",r.size==="large"?"min-h-[200px]":"min-h-[120px]"),style:{animation:`fadeInUp 0.5s ease-out ${e*.1}s both`},children:[H.jsx("div",{className:Bi("w-12 h-12 rounded-xl flex items-center justify-center mb-4","bg-gradient-to-br",r.gradient,"text-text-primary","group-hover:scale-110 transition-transform duration-300"),children:r.icon}),H.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors",children:r.title}),H.jsx("p",{className:"text-sm text-text-secondary flex-1",children:r.description}),!i&&H.jsx("span",{className:"mt-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-text-muted/20 text-text-muted w-fit",children:"Coming Soon"}),i&&H.jsx("span",{className:"mt-3 inline-flex items-center text-xs font-medium text-accent-cyan group-hover:translate-x-1 transition-transform",children:"Open →"})]})});return i?H.jsx(io,{to:r.path,className:"contents",children:s}):s}function y1(){return H.jsx("div",{className:"min-h-screen p-4 md:p-8",children:H.jsxs("div",{className:"max-w-4xl mx-auto",children:[H.jsxs("header",{className:"text-center mb-12",style:{animation:"fadeInUp 0.6s ease-out"},children:[H.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-4",children:"Nikhil's Apps"}),H.jsx("p",{className:"text-text-secondary text-lg",children:"A collection of mini apps and experiments"})]}),H.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:_1.map((r,e)=>H.jsx(x1,{app:r,index:e},r.id))}),H.jsx("footer",{className:"text-center mt-12 text-text-muted text-sm",style:{animation:"fadeInUp 0.6s ease-out 0.8s both"},children:H.jsx("p",{className:"font-mono",children:"Built with React + Vite + Tailwind"})})]})})}const Me={container:{padding:"16px",paddingBottom:"48px",maxWidth:"600px",margin:"0 auto"},backLink:{display:"inline-flex",alignItems:"center",gap:"8px",color:"var(--color-text-secondary)",textDecoration:"none",fontSize:"0.875rem",marginBottom:"16px",transition:"color 0.2s"},header:{textAlign:"center",marginBottom:"32px",animation:"fadeInUp 0.6s ease-out"},title:{fontSize:"clamp(1.75rem, 6vw, 2.5rem)",fontWeight:700,margin:0,background:"linear-gradient(135deg, #00d4ff, #aa66ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"-0.02em"},subtitle:{color:"var(--color-text-secondary)",fontSize:"0.9rem",marginTop:"8px",fontWeight:300},section:{marginBottom:"24px"},sectionTitle:{fontSize:"0.7rem",fontWeight:600,color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"12px",paddingLeft:"4px"},card:{background:"var(--color-bg-card)",borderRadius:"16px",padding:"20px",border:"1px solid var(--color-border-subtle)",marginBottom:"12px",transition:"all 0.2s ease"},cardHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},cardTitle:{fontSize:"1rem",fontWeight:600,margin:0,display:"flex",alignItems:"center",gap:"10px"},statusBadge:{padding:"4px 10px",borderRadius:"20px",fontSize:"0.7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},dataGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px",marginTop:"12px"},dataItem:{background:"var(--color-bg-secondary)",borderRadius:"8px",padding:"10px",textAlign:"center"},dataLabel:{fontSize:"0.65rem",color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},dataValue:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.85rem",fontWeight:700,color:"var(--color-accent-cyan)"},button:{width:"100%",padding:"14px 20px",borderRadius:"12px",border:"none",background:"linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(170, 102, 255, 0.15))",color:"var(--color-text-primary)",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",transition:"all 0.2s ease",fontFamily:"inherit",marginTop:"8px"},icon:{fontSize:"1.25rem"},description:{fontSize:"0.8rem",color:"var(--color-text-secondary)",lineHeight:1.5},unavailableNote:{fontSize:"0.75rem",color:"var(--color-text-muted)",fontStyle:"italic",marginTop:"8px"}},ya=r=>{const e={unknown:{bg:"rgba(85, 85, 102, 0.3)",color:"#888"},checking:{bg:"rgba(255, 204, 0, 0.2)",color:"#ffcc00"},available:{bg:"rgba(0, 255, 136, 0.15)",color:"#00ff88"},unavailable:{bg:"rgba(255, 68, 102, 0.15)",color:"#ff4466"},granted:{bg:"rgba(0, 255, 136, 0.15)",color:"#00ff88"},denied:{bg:"rgba(255, 68, 102, 0.15)",color:"#ff4466"},prompt:{bg:"rgba(0, 212, 255, 0.15)",color:"#00d4ff"}};return{...Me.statusBadge,background:e[r].bg,color:e[r].color}},ji=(r,e=1)=>r===null?"—":r.toFixed(e);function S1(){const[r,e]=ee.useState("unknown"),[i,s]=ee.useState("unknown"),[l,c]=ee.useState("unknown"),[f,h]=ee.useState("unknown"),[m,p]=ee.useState("unknown"),[v,g]=ee.useState("unknown"),[x,b]=ee.useState("unknown"),[E,A]=ee.useState("unknown"),[S,_]=ee.useState("unknown"),[N,w]=ee.useState({motion:{acceleration:{x:null,y:null,z:null},rotationRate:{alpha:null,beta:null,gamma:null}},orientation:{alpha:null,beta:null,gamma:null,compass:null},geolocation:{latitude:null,longitude:null,accuracy:null},touch:{force:null,touches:0}});ee.useEffect(()=>{g("vibrate"in navigator?"available":"unavailable"),b("bluetooth"in navigator?"available":"unavailable"),A("NDEFReader"in window?"available":"unavailable"),_("getBattery"in navigator?"available":"unavailable"),p("ontouchstart"in window?"available":"unavailable"),"DeviceMotionEvent"in window?e("prompt"):e("unavailable"),"DeviceOrientationEvent"in window?s("prompt"):s("unavailable"),"geolocation"in navigator?c("prompt"):c("unavailable"),"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices?h("prompt"):h("unavailable")},[]),ee.useEffect(()=>{const T=G=>{const q=G.touches[0];w(J=>({...J,touch:{force:q?.force??null,touches:G.touches.length}}))},D=()=>{w(G=>({...G,touch:{force:null,touches:0}}))};return window.addEventListener("touchstart",T,{passive:!0}),window.addEventListener("touchmove",T,{passive:!0}),window.addEventListener("touchend",D,{passive:!0}),()=>{window.removeEventListener("touchstart",T),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",D)}},[]);const L=ee.useCallback(async()=>{e("checking");try{typeof DeviceMotionEvent.requestPermission=="function"?await DeviceMotionEvent.requestPermission()==="granted"?(e("granted"),window.addEventListener("devicemotion",D=>{w(G=>({...G,motion:{acceleration:{x:D.acceleration?.x??null,y:D.acceleration?.y??null,z:D.acceleration?.z??null},rotationRate:{alpha:D.rotationRate?.alpha??null,beta:D.rotationRate?.beta??null,gamma:D.rotationRate?.gamma??null}}}))})):e("denied"):(e("granted"),window.addEventListener("devicemotion",T=>{w(D=>({...D,motion:{acceleration:{x:T.acceleration?.x??null,y:T.acceleration?.y??null,z:T.acceleration?.z??null},rotationRate:{alpha:T.rotationRate?.alpha??null,beta:T.rotationRate?.beta??null,gamma:T.rotationRate?.gamma??null}}}))}))}catch{e("denied")}},[]),U=ee.useCallback(async()=>{s("checking");try{typeof DeviceOrientationEvent.requestPermission=="function"?await DeviceOrientationEvent.requestPermission()==="granted"?(s("granted"),window.addEventListener("deviceorientation",D=>{w(G=>({...G,orientation:{alpha:D.alpha,beta:D.beta,gamma:D.gamma,compass:D.webkitCompassHeading??null}}))})):s("denied"):(s("granted"),window.addEventListener("deviceorientation",T=>{w(D=>({...D,orientation:{alpha:T.alpha,beta:T.beta,gamma:T.gamma,compass:T.webkitCompassHeading??null}}))}))}catch{s("denied")}},[]),O=ee.useCallback(()=>{c("checking"),navigator.geolocation.getCurrentPosition(T=>{c("granted"),w(D=>({...D,geolocation:{latitude:T.coords.latitude,longitude:T.coords.longitude,accuracy:T.coords.accuracy}}))},()=>{c("denied")},{enableHighAccuracy:!0})},[]),P=ee.useCallback(async()=>{h("checking");try{const T=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});h("granted"),T.getTracks().forEach(D=>D.stop())}catch{h("denied")}},[]),B=T=>({animation:`fadeInUp 0.5s ease-out ${T*.08}s both`});return H.jsxs("div",{style:Me.container,children:[H.jsxs(io,{to:"/",style:Me.backLink,className:"hover:text-accent-cyan",children:[H.jsx(Dp,{className:"w-4 h-4"}),"Back to Home"]}),H.jsxs("header",{style:Me.header,children:[H.jsx("h1",{style:Me.title,children:"Sensor Diagnostics"}),H.jsx("p",{style:Me.subtitle,children:"iOS Web API Compatibility Test"})]}),H.jsxs("section",{style:{...Me.section,...B(0)},children:[H.jsx("h2",{style:Me.sectionTitle,children:"Requires Permission"}),H.jsxs("div",{style:{...Me.card,...B(1)},children:[H.jsxs("div",{style:Me.cardHeader,children:[H.jsxs("h3",{style:Me.cardTitle,children:[H.jsx("span",{style:Me.icon,children:"📱"}),"Motion (Accelerometer)"]}),H.jsx("span",{style:ya(r),children:r})]}),H.jsx("p",{style:Me.description,children:"Device acceleration and rotation rate from gyroscope."}),r==="granted"&&H.jsxs("div",{style:Me.dataGrid,children:[H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Accel X"}),H.jsx("div",{style:Me.dataValue,children:ji(N.motion.acceleration.x)})]}),H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Accel Y"}),H.jsx("div",{style:Me.dataValue,children:ji(N.motion.acceleration.y)})]}),H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Accel Z"}),H.jsx("div",{style:Me.dataValue,children:ji(N.motion.acceleration.z)})]})]}),(r==="prompt"||r==="unknown")&&H.jsx("button",{style:Me.button,onClick:L,children:"Request Permission"})]}),H.jsxs("div",{style:{...Me.card,...B(2)},children:[H.jsxs("div",{style:Me.cardHeader,children:[H.jsxs("h3",{style:Me.cardTitle,children:[H.jsx("span",{style:Me.icon,children:"🧭"}),"Orientation & Compass"]}),H.jsx("span",{style:ya(i),children:i})]}),H.jsx("p",{style:Me.description,children:"Device orientation angles and compass heading."}),i==="granted"&&H.jsxs("div",{style:Me.dataGrid,children:[H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Alpha"}),H.jsxs("div",{style:Me.dataValue,children:[ji(N.orientation.alpha),"°"]})]}),H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Beta"}),H.jsxs("div",{style:Me.dataValue,children:[ji(N.orientation.beta),"°"]})]}),H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Compass"}),H.jsxs("div",{style:Me.dataValue,children:[ji(N.orientation.compass),"°"]})]})]}),(i==="prompt"||i==="unknown")&&H.jsx("button",{style:Me.button,onClick:U,children:"Request Permission"})]}),H.jsxs("div",{style:{...Me.card,...B(3)},children:[H.jsxs("div",{style:Me.cardHeader,children:[H.jsxs("h3",{style:Me.cardTitle,children:[H.jsx("span",{style:Me.icon,children:"📍"}),"Geolocation"]}),H.jsx("span",{style:ya(l),children:l})]}),H.jsx("p",{style:Me.description,children:"GPS coordinates and location accuracy."}),l==="granted"&&H.jsxs("div",{style:Me.dataGrid,children:[H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Lat"}),H.jsx("div",{style:Me.dataValue,children:ji(N.geolocation.latitude,4)})]}),H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Lng"}),H.jsx("div",{style:Me.dataValue,children:ji(N.geolocation.longitude,4)})]}),H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Accuracy"}),H.jsxs("div",{style:Me.dataValue,children:[ji(N.geolocation.accuracy,0),"m"]})]})]}),(l==="prompt"||l==="unknown")&&H.jsx("button",{style:Me.button,onClick:O,children:"Request Permission"})]}),H.jsxs("div",{style:{...Me.card,...B(4)},children:[H.jsxs("div",{style:Me.cardHeader,children:[H.jsxs("h3",{style:Me.cardTitle,children:[H.jsx("span",{style:Me.icon,children:"📷"}),"Camera & Microphone"]}),H.jsx("span",{style:ya(f),children:f})]}),H.jsx("p",{style:Me.description,children:"WebRTC getUserMedia for video and audio capture."}),(f==="prompt"||f==="unknown")&&H.jsx("button",{style:Me.button,onClick:P,children:"Request Permission"})]})]}),H.jsxs("section",{style:{...Me.section,...B(5)},children:[H.jsx("h2",{style:Me.sectionTitle,children:"Always Available"}),H.jsxs("div",{style:{...Me.card,...B(6)},children:[H.jsxs("div",{style:Me.cardHeader,children:[H.jsxs("h3",{style:Me.cardTitle,children:[H.jsx("span",{style:Me.icon,children:"👆"}),"Touch & Force"]}),H.jsx("span",{style:ya(m),children:m})]}),H.jsx("p",{style:Me.description,children:"Touch events with 3D Touch / Haptic Touch pressure."}),m==="available"&&H.jsxs("div",{style:Me.dataGrid,children:[H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Touches"}),H.jsx("div",{style:Me.dataValue,children:N.touch.touches})]}),H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Force"}),H.jsx("div",{style:Me.dataValue,children:ji(N.touch.force,2)})]}),H.jsxs("div",{style:Me.dataItem,children:[H.jsx("div",{style:Me.dataLabel,children:"Status"}),H.jsx("div",{style:Me.dataValue,children:N.touch.touches>0?"Active":"Idle"})]})]}),H.jsx("p",{style:Me.unavailableNote,children:"Touch anywhere to see live data"})]})]}),H.jsxs("section",{style:{...Me.section,...B(7)},children:[H.jsx("h2",{style:Me.sectionTitle,children:"Not Supported on iOS Safari"}),H.jsxs("div",{style:{...Me.card,opacity:.7,...B(8)},children:[H.jsxs("div",{style:Me.cardHeader,children:[H.jsxs("h3",{style:Me.cardTitle,children:[H.jsx("span",{style:Me.icon,children:"📳"}),"Vibration API"]}),H.jsx("span",{style:ya(v),children:v})]}),H.jsx("p",{style:Me.description,children:"Haptic feedback through navigator.vibrate()"}),H.jsx("p",{style:Me.unavailableNote,children:"Apple declined due to privacy concerns"})]}),H.jsxs("div",{style:{...Me.card,opacity:.7,...B(9)},children:[H.jsxs("div",{style:Me.cardHeader,children:[H.jsxs("h3",{style:Me.cardTitle,children:[H.jsx("span",{style:Me.icon,children:"📶"}),"Web Bluetooth"]}),H.jsx("span",{style:ya(x),children:x})]}),H.jsx("p",{style:Me.description,children:"Connect to nearby Bluetooth devices"}),H.jsx("p",{style:Me.unavailableNote,children:"Apple declined due to fingerprinting risks"})]}),H.jsxs("div",{style:{...Me.card,opacity:.7,...B(10)},children:[H.jsxs("div",{style:Me.cardHeader,children:[H.jsxs("h3",{style:Me.cardTitle,children:[H.jsx("span",{style:Me.icon,children:"📡"}),"Web NFC"]}),H.jsx("span",{style:ya(E),children:E})]}),H.jsx("p",{style:Me.description,children:"Read/write NFC tags"}),H.jsx("p",{style:Me.unavailableNote,children:"Not exposed to web apps on iOS"})]}),H.jsxs("div",{style:{...Me.card,opacity:.7,...B(11)},children:[H.jsxs("div",{style:Me.cardHeader,children:[H.jsxs("h3",{style:Me.cardTitle,children:[H.jsx("span",{style:Me.icon,children:"🔋"}),"Battery Status"]}),H.jsx("span",{style:ya(S),children:S})]}),H.jsx("p",{style:Me.description,children:"Battery level and charging status"}),H.jsx("p",{style:Me.unavailableNote,children:"Apple declined due to fingerprinting risks"})]})]}),H.jsxs("footer",{style:{textAlign:"center",marginTop:"40px",color:"var(--color-text-muted)",fontSize:"0.75rem",...B(12)},children:[H.jsx("p",{children:"Built for iOS Safari sensor testing"}),H.jsx("p",{style:{fontFamily:"'JetBrains Mono', monospace",marginTop:"4px"},children:new Date().toLocaleDateString()})]})]})}const Up="182",b1=0,kv=1,M1=2,pu=1,E1=2,hl=3,vr=0,$n=1,Aa=2,wa=0,Zs=1,Rh=2,Xv=3,Wv=4,T1=5,Xr=100,A1=101,R1=102,C1=103,w1=104,D1=200,U1=201,N1=202,L1=203,Ch=204,wh=205,O1=206,P1=207,z1=208,F1=209,I1=210,B1=211,H1=212,G1=213,V1=214,Dh=0,Uh=1,Nh=2,Qs=3,Lh=4,Oh=5,Ph=6,zh=7,yx=0,k1=1,X1=2,Qi=0,Sx=1,bx=2,Mx=3,Ex=4,Tx=5,Ax=6,Rx=7,Cx=300,Zr=301,Js=302,Fh=303,Ih=304,Ru=306,Bh=1e3,Ra=1001,Hh=1002,Pn=1003,W1=1004,kc=1005,Hn=1006,qd=1007,qr=1008,Ai=1009,wx=1010,Dx=1011,vl=1012,Np=1013,$i=1014,Zi=1015,Na=1016,Lp=1017,Op=1018,_l=1020,Ux=35902,Nx=35899,Lx=1021,Ox=1022,Hi=1023,La=1026,Yr=1027,Px=1028,Pp=1029,$s=1030,zp=1031,Fp=1033,mu=33776,gu=33777,vu=33778,_u=33779,Gh=35840,Vh=35841,kh=35842,Xh=35843,Wh=36196,jh=37492,qh=37496,Yh=37488,Zh=37489,Kh=37490,Qh=37491,Jh=37808,$h=37809,ep=37810,tp=37811,np=37812,ip=37813,ap=37814,rp=37815,sp=37816,op=37817,lp=37818,cp=37819,up=37820,fp=37821,dp=36492,hp=36494,pp=36495,mp=36283,gp=36284,vp=36285,_p=36286,j1=3200,q1=0,Y1=1,mr="",Ei="srgb",eo="srgb-linear",bu="linear",Xt="srgb",Ps=7680,jv=519,Z1=512,K1=513,Q1=514,Ip=515,J1=516,$1=517,Bp=518,eT=519,qv=35044,Yv="300 es",Ki=2e3,Mu=2001;function zx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Eu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tT(){const r=Eu("canvas");return r.style.display="block",r}const Zv={};function Kv(...r){const e="THREE."+r.shift();console.log(e,...r)}function ut(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Lt(...r){const e="THREE."+r.shift();console.error(e,...r)}function xl(...r){const e=r.join(" ");e in Zv||(Zv[e]=!0,ut(...r))}function nT(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class so{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=Math.PI/180,xp=180/Math.PI;function El(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function At(r,e,i){return Math.max(e,Math.min(i,r))}function iT(r,e){return(r%e+e)%e}function Zd(r,e,i){return(1-i)*r+i*e}function rl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Wt{constructor(e=0,i=0){Wt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],x=c[f+0],b=c[f+1],E=c[f+2],A=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(h>=1){e[i+0]=x,e[i+1]=b,e[i+2]=E,e[i+3]=A;return}if(g!==A||m!==x||p!==b||v!==E){let S=m*x+p*b+v*E+g*A;S<0&&(x=-x,b=-b,E=-E,A=-A,S=-S);let _=1-h;if(S<.9995){const N=Math.acos(S),w=Math.sin(N);_=Math.sin(_*N)/w,h=Math.sin(h*N)/w,m=m*_+x*h,p=p*_+b*h,v=v*_+E*h,g=g*_+A*h}else{m=m*_+x*h,p=p*_+b*h,v=v*_+E*h,g=g*_+A*h;const N=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=N,p*=N,v*=N,g*=N}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[f],x=c[f+1],b=c[f+2],E=c[f+3];return e[i]=h*E+v*g+m*b-p*x,e[i+1]=m*E+v*x+p*g-h*b,e[i+2]=p*E+v*b+h*x-m*g,e[i+3]=v*E-h*g-m*x-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),g=h(c/2),x=m(s/2),b=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*b*E,this._y=p*b*g-x*v*E,this._z=p*v*E+x*b*g,this._w=p*v*g-x*b*E;break;case"YXZ":this._x=x*v*g+p*b*E,this._y=p*b*g-x*v*E,this._z=p*v*E-x*b*g,this._w=p*v*g+x*b*E;break;case"ZXY":this._x=x*v*g-p*b*E,this._y=p*b*g+x*v*E,this._z=p*v*E+x*b*g,this._w=p*v*g-x*b*E;break;case"ZYX":this._x=x*v*g-p*b*E,this._y=p*b*g+x*v*E,this._z=p*v*E-x*b*g,this._w=p*v*g+x*b*E;break;case"YZX":this._x=x*v*g+p*b*E,this._y=p*b*g+x*v*E,this._z=p*v*E-x*b*g,this._w=p*v*g-x*b*E;break;case"XZY":this._x=x*v*g-p*b*E,this._y=p*b*g-x*v*E,this._z=p*v*E+x*b*g,this._w=p*v*g+x*b*E;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=s+h+g;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(v-m)*b,this._y=(c-p)*b,this._z=(f-l)*b}else if(s>h&&s>g){const b=2*Math.sqrt(1+s-h-g);this._w=(v-m)/b,this._x=.25*b,this._y=(l+f)/b,this._z=(c+p)/b}else if(h>g){const b=2*Math.sqrt(1+h-s-g);this._w=(c-p)/b,this._x=(l+f)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+g-s-h);this._w=(f-l)/b,this._x=(c+p)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-s*p,this._z=c*v+f*p+s*m-l*h,this._w=f*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,i=0,s=0){ce.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Qv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Qv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),v=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-h*v,this.y=s+m*v+h*p-c*g,this.z=l+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Kd.copy(this).projectOnVector(e),this.sub(Kd)}reflect(e){return this.sub(Kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kd=new ce,Qv=new Tl;class gt{constructor(e,i,s,l,c,f,h,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],v=s[4],g=s[7],x=s[2],b=s[5],E=s[8],A=l[0],S=l[3],_=l[6],N=l[1],w=l[4],L=l[7],U=l[2],O=l[5],P=l[8];return c[0]=f*A+h*N+m*U,c[3]=f*S+h*w+m*O,c[6]=f*_+h*L+m*P,c[1]=p*A+v*N+g*U,c[4]=p*S+v*w+g*O,c[7]=p*_+v*L+g*P,c[2]=x*A+b*N+E*U,c[5]=x*S+b*w+E*O,c[8]=x*_+b*L+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*h*p-s*c*v+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=v*f-h*p,x=h*m-v*c,b=p*c-f*m,E=i*g+s*x+l*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(l*p-v*s)*A,e[2]=(h*s-l*f)*A,e[3]=x*A,e[4]=(v*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=b*A,e[7]=(s*m-p*i)*A,e[8]=(f*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Qd.makeScale(e,i)),this}rotate(e){return this.premultiply(Qd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qd=new gt,Jv=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$v=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aT(){const r={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xt&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xt&&(l.r=Ks(l.r),l.g=Ks(l.g),l.b=Ks(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===mr?bu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return xl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return xl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[eo]:{primaries:e,whitePoint:s,transfer:bu,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:e,whitePoint:s,transfer:Xt,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),r}const wt=aT();function Da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zs;class rT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{zs===void 0&&(zs=Eu("canvas")),zs.width=e.width,zs.height=e.height;const l=zs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=zs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Eu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Da(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sT=0;class Hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=El(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Jd(l[f].image)):c.push(Jd(l[f]))}else c=Jd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Jd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let oT=0;const $d=new ce;class Xn extends so{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Ra,l=Ra,c=Hn,f=qr,h=Hi,m=Ai,p=Xn.DEFAULT_ANISOTROPY,v=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=El(),this.name="",this.source=new Hp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($d).x}get height(){return this.source.getSize($d).y}get depth(){return this.source.getSize($d).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case Ra:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case Ra:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Cx;Xn.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,i=0,s=0,l=1){un.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],b=m[5],E=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,L=(b+1)/2,U=(_+1)/2,O=(v+x)/4,P=(g+A)/4,B=(E+S)/4;return w>L&&w>U?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=O/s,c=P/s):L>U?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=O/l,c=B/l):U<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(U),s=P/c,l=B/c),this.set(s,l,c,i),this}let N=Math.sqrt((S-E)*(S-E)+(g-A)*(g-A)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(g-A)/N,this.z=(x-v)/N,this.w=Math.acos((p+b+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this.w=At(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this.w=At(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lT extends so{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Xn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Hp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends lT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Fx extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cT extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al{constructor(e=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Pi):Pi.fromBufferAttribute(c,f),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Xc.copy(s.boundingBox)),Xc.applyMatrix4(e.matrixWorld),this.union(Xc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sl),Wc.subVectors(this.max,sl),Fs.subVectors(e.a,sl),Is.subVectors(e.b,sl),Bs.subVectors(e.c,sl),cr.subVectors(Is,Fs),ur.subVectors(Bs,Is),Fr.subVectors(Fs,Bs);let i=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Fr.z,Fr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Fr.z,0,-Fr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Fr.y,Fr.x,0];return!eh(i,Fs,Is,Bs,Wc)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,Fs,Is,Bs,Wc))?!1:(jc.crossVectors(cr,ur),i=[jc.x,jc.y,jc.z],eh(i,Fs,Is,Bs,Wc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sa=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Pi=new ce,Xc=new Al,Fs=new ce,Is=new ce,Bs=new ce,cr=new ce,ur=new ce,Fr=new ce,sl=new ce,Wc=new ce,jc=new ce,Ir=new ce;function eh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ir.fromArray(r,c);const h=l.x*Math.abs(Ir.x)+l.y*Math.abs(Ir.y)+l.z*Math.abs(Ir.z),m=e.dot(Ir),p=i.dot(Ir),v=s.dot(Ir);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const uT=new Al,ol=new ce,th=new ce;class Cu{constructor(e=new ce,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):uT.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ol,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(th)),this.expandByPoint(ol.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ba=new ce,nh=new ce,qc=new ce,fr=new ce,ih=new ce,Yc=new ce,ah=new ce;class Ix{constructor(e=new ce,i=new ce(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ba)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ba.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){nh.copy(e).add(i).multiplyScalar(.5),qc.copy(i).sub(e).normalize(),fr.copy(this.origin).sub(nh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(qc),h=fr.dot(this.direction),m=-fr.dot(qc),p=fr.lengthSq(),v=Math.abs(1-f*f);let g,x,b,E;if(v>0)if(g=f*m-h,x=f*h-m,E=c*v,g>=0)if(x>=-E)if(x<=E){const A=1/v;g*=A,x*=A,b=g*(g+f*x+2*h)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+h)),b=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+h)),b=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-f*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),b=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-m),c),b=x*(x+2*m)+p):(g=Math.max(0,-(f*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),b=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+h)),b=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(nh).addScaledVector(qc,x),b}intersectSphere(e,i){ba.subVectors(e.center,this.origin);const s=ba.dot(this.direction),l=ba.dot(ba)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(h=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ba)!==null}intersectTriangle(e,i,s,l,c){ih.subVectors(i,e),Yc.subVectors(s,e),ah.crossVectors(ih,Yc);let f=this.direction.dot(ah),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;fr.subVectors(this.origin,e);const m=h*this.direction.dot(Yc.crossVectors(fr,Yc));if(m<0)return null;const p=h*this.direction.dot(ih.cross(fr));if(p<0||m+p>f)return null;const v=-h*fr.dot(ah);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,i,s,l,c,f,h,m,p,v,g,x,b,E,A,S){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,v,g,x,b,E,A,S)}set(e,i,s,l,c,f,h,m,p,v,g,x,b,E,A,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=b,_[7]=E,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Hs.setFromMatrixColumn(e,0).length(),c=1/Hs.setFromMatrixColumn(e,1).length(),f=1/Hs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,b=f*g,E=h*v,A=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=b+E*p,i[5]=x-A*p,i[9]=-h*m,i[2]=A-x*p,i[6]=E+b*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*v,b=m*g,E=p*v,A=p*g;i[0]=x+A*h,i[4]=E*h-b,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-h,i[2]=b*h-E,i[6]=A+x*h,i[10]=f*m}else if(e.order==="ZXY"){const x=m*v,b=m*g,E=p*v,A=p*g;i[0]=x-A*h,i[4]=-f*g,i[8]=E+b*h,i[1]=b+E*h,i[5]=f*v,i[9]=A-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const x=f*v,b=f*g,E=h*v,A=h*g;i[0]=m*v,i[4]=E*p-b,i[8]=x*p+A,i[1]=m*g,i[5]=A*p+x,i[9]=b*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,b=f*p,E=h*m,A=h*p;i[0]=m*v,i[4]=A-x*g,i[8]=E*g+b,i[1]=g,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=b*g+E,i[10]=x-A*g}else if(e.order==="XZY"){const x=f*m,b=f*p,E=h*m,A=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+A,i[5]=f*v,i[9]=b*g-E,i[2]=E*g-b,i[6]=h*v,i[10]=A*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fT,e,dT)}lookAt(e,i,s){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),dr.crossVectors(s,li),dr.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),dr.crossVectors(s,li)),dr.normalize(),Zc.crossVectors(li,dr),l[0]=dr.x,l[4]=Zc.x,l[8]=li.x,l[1]=dr.y,l[5]=Zc.y,l[9]=li.y,l[2]=dr.z,l[6]=Zc.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],v=s[1],g=s[5],x=s[9],b=s[13],E=s[2],A=s[6],S=s[10],_=s[14],N=s[3],w=s[7],L=s[11],U=s[15],O=l[0],P=l[4],B=l[8],T=l[12],D=l[1],G=l[5],q=l[9],J=l[13],ne=l[2],re=l[6],z=l[10],V=l[14],W=l[3],Se=l[7],xe=l[11],F=l[15];return c[0]=f*O+h*D+m*ne+p*W,c[4]=f*P+h*G+m*re+p*Se,c[8]=f*B+h*q+m*z+p*xe,c[12]=f*T+h*J+m*V+p*F,c[1]=v*O+g*D+x*ne+b*W,c[5]=v*P+g*G+x*re+b*Se,c[9]=v*B+g*q+x*z+b*xe,c[13]=v*T+g*J+x*V+b*F,c[2]=E*O+A*D+S*ne+_*W,c[6]=E*P+A*G+S*re+_*Se,c[10]=E*B+A*q+S*z+_*xe,c[14]=E*T+A*J+S*V+_*F,c[3]=N*O+w*D+L*ne+U*W,c[7]=N*P+w*G+L*re+U*Se,c[11]=N*B+w*q+L*z+U*xe,c[15]=N*T+w*J+L*V+U*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],b=e[14],E=e[3],A=e[7],S=e[11],_=e[15],N=m*b-p*x,w=h*b-p*g,L=h*x-m*g,U=f*b-p*v,O=f*x-m*v,P=f*g-h*v;return i*(A*N-S*w+_*L)-s*(E*N-S*U+_*O)+l*(E*w-A*U+_*P)-c*(E*L-A*O+S*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],b=e[11],E=e[12],A=e[13],S=e[14],_=e[15],N=g*S*p-A*x*p+A*m*b-h*S*b-g*m*_+h*x*_,w=E*x*p-v*S*p-E*m*b+f*S*b+v*m*_-f*x*_,L=v*A*p-E*g*p+E*h*b-f*A*b-v*h*_+f*g*_,U=E*g*m-v*A*m-E*h*x+f*A*x+v*h*S-f*g*S,O=i*N+s*w+l*L+c*U;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/O;return e[0]=N*P,e[1]=(A*x*c-g*S*c-A*l*b+s*S*b+g*l*_-s*x*_)*P,e[2]=(h*S*c-A*m*c+A*l*p-s*S*p-h*l*_+s*m*_)*P,e[3]=(g*m*c-h*x*c-g*l*p+s*x*p+h*l*b-s*m*b)*P,e[4]=w*P,e[5]=(v*S*c-E*x*c+E*l*b-i*S*b-v*l*_+i*x*_)*P,e[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*_-i*m*_)*P,e[7]=(f*x*c-v*m*c+v*l*p-i*x*p-f*l*b+i*m*b)*P,e[8]=L*P,e[9]=(E*g*c-v*A*c-E*s*b+i*A*b+v*s*_-i*g*_)*P,e[10]=(f*A*c-E*h*c+E*s*p-i*A*p-f*s*_+i*h*_)*P,e[11]=(v*h*c-f*g*c-v*s*p+i*g*p+f*s*b-i*h*b)*P,e[12]=U*P,e[13]=(v*A*l-E*g*l+E*s*x-i*A*x-v*s*S+i*g*S)*P,e[14]=(E*h*l-f*A*l-E*s*m+i*A*m+f*s*S-i*h*S)*P,e[15]=(f*g*l-v*h*l+v*s*m-i*g*m-f*s*x+i*h*x)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,v=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,g=h+h,x=c*p,b=c*v,E=c*g,A=f*v,S=f*g,_=h*g,N=m*p,w=m*v,L=m*g,U=s.x,O=s.y,P=s.z;return l[0]=(1-(A+_))*U,l[1]=(b+L)*U,l[2]=(E-w)*U,l[3]=0,l[4]=(b-L)*O,l[5]=(1-(x+_))*O,l[6]=(S+N)*O,l[7]=0,l[8]=(E+w)*P,l[9]=(S-N)*P,l[10]=(1-(x+A))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Hs.set(l[0],l[1],l[2]).length();const f=Hs.set(l[4],l[5],l[6]).length(),h=Hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),zi.copy(this);const p=1/c,v=1/f,g=1/h;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=v,zi.elements[5]*=v,zi.elements[6]*=v,zi.elements[8]*=g,zi.elements[9]*=g,zi.elements[10]*=g,i.setFromRotationMatrix(zi),s.x=c,s.y=f,s.z=h,this}makePerspective(e,i,s,l,c,f,h=Ki,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(s-l),x=(i+e)/(i-e),b=(s+l)/(s-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(h===Ki)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===Mu)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=Ki,m=!1){const p=this.elements,v=2/(i-e),g=2/(s-l),x=-(i+e)/(i-e),b=-(s+l)/(s-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(h===Ki)E=-2/(f-c),A=-(f+c)/(f-c);else if(h===Mu)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Hs=new ce,zi=new fn,fT=new ce(0,0,0),dT=new ce(1,1,1),dr=new ce,Zc=new ce,li=new ce,e_=new fn,t_=new Tl;class Oa{constructor(e=0,i=0,s=0,l=Oa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return e_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return t_.setFromEuler(this),this.setFromQuaternion(t_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oa.DEFAULT_ORDER="XYZ";class Bx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hT=0;const n_=new ce,Gs=new Tl,Ma=new fn,Kc=new ce,ll=new ce,pT=new ce,mT=new Tl,i_=new ce(1,0,0),a_=new ce(0,1,0),r_=new ce(0,0,1),s_={type:"added"},gT={type:"removed"},Vs={type:"childadded",child:null},rh={type:"childremoved",child:null};class ei extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=El(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new ce,i=new Oa,s=new Tl,l=new ce(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new gt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(i_,e)}rotateY(e){return this.rotateOnAxis(a_,e)}rotateZ(e){return this.rotateOnAxis(r_,e)}translateOnAxis(e,i){return n_.copy(e).applyQuaternion(this.quaternion),this.position.add(n_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(i_,e)}translateY(e){return this.translateOnAxis(a_,e)}translateZ(e){return this.translateOnAxis(r_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Kc.copy(e):Kc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(ll,Kc,this.up):Ma.lookAt(Kc,ll,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Gs.setFromRotationMatrix(Ma),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s_),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gT),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s_),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,e,pT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,mT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),b=f(e.animations),E=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),b.length>0&&(s.animations=b),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ei.DEFAULT_UP=new ce(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new ce,Ea=new ce,sh=new ce,Ta=new ce,ks=new ce,Xs=new ce,o_=new ce,oh=new ce,lh=new ce,ch=new ce,uh=new un,fh=new un,dh=new un;class Ii{constructor(e=new ce,i=new ce,s=new ce){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Fi.subVectors(e,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Fi.subVectors(l,i),Ea.subVectors(s,i),sh.subVectors(e,i);const f=Fi.dot(Fi),h=Fi.dot(Ea),m=Fi.dot(sh),p=Ea.dot(Ea),v=Ea.dot(sh),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,b=(p*m-h*v)*x,E=(f*v-h*m)*x;return c.set(1-b-E,E,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,Ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ta.x),m.addScaledVector(f,Ta.y),m.addScaledVector(h,Ta.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return uh.setScalar(0),fh.setScalar(0),dh.setScalar(0),uh.fromBufferAttribute(e,i),fh.fromBufferAttribute(e,s),dh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(uh,c.x),f.addScaledVector(fh,c.y),f.addScaledVector(dh,c.z),f}static isFrontFacing(e,i,s,l){return Fi.subVectors(s,i),Ea.subVectors(e,i),Fi.cross(Ea).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Fi.cross(Ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ii.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ii.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;ks.subVectors(l,s),Xs.subVectors(c,s),oh.subVectors(e,s);const m=ks.dot(oh),p=Xs.dot(oh);if(m<=0&&p<=0)return i.copy(s);lh.subVectors(e,l);const v=ks.dot(lh),g=Xs.dot(lh);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(ks,f);ch.subVectors(e,c);const b=ks.dot(ch),E=Xs.dot(ch);if(E>=0&&b<=E)return i.copy(c);const A=b*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Xs,h);const S=v*E-b*g;if(S<=0&&g-v>=0&&b-E>=0)return o_.subVectors(c,l),h=(g-v)/(g-v+(b-E)),i.copy(l).addScaledVector(o_,h);const _=1/(S+A+x);return f=A*_,h=x*_,i.copy(s).addScaledVector(ks,f).addScaledVector(Xs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},Qc={h:0,s:0,l:0};function hh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Dt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=wt.workingColorSpace){if(e=iT(e,1),i=At(i,0,1),s=At(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=hh(f,c,e+1/3),this.g=hh(f,c,e),this.b=hh(f,c,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=Ei){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ei){const s=Hx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return wt.workingToColorSpace(Bn.copy(this),e),Math.round(At(Bn.r*255,0,255))*65536+Math.round(At(Bn.g*255,0,255))*256+Math.round(At(Bn.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,l=Bn.g,c=Bn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=v<=.5?g/(f+h):g/(2-f-h),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Ei){wt.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,s=Bn.g,l=Bn.b;return e!==Ei?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+i,hr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(hr),e.getHSL(Qc);const s=Zd(hr.h,Qc.h,i),l=Zd(hr.s,Qc.s,i),c=Zd(hr.l,Qc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Dt;Dt.NAMES=Hx;let vT=0;class Rl extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=El(),this.name="",this.type="Material",this.blending=Zs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=wh,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(s.blending=this.blending),this.side!==vr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ch&&(s.blendSrc=this.blendSrc),this.blendDst!==wh&&(s.blendDst=this.blendDst),this.blendEquation!==Xr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wr extends Rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oa,this.combine=yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new ce,Jc=new Wt;let _T=0;class fi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_T++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=qv,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Jc.fromBufferAttribute(this,i),Jc.applyMatrix3(e),this.setXY(i,Jc.x,Jc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=rl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=rl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=rl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=rl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=rl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array),c=Jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qv&&(e.usage=this.usage),e}}class Gx extends fi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Vx extends fi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Wn extends fi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let xT=0;const Mi=new fn,ph=new ei,Ws=new ce,ci=new Al,cl=new Al,En=new ce;class di extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=El(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zx(e)?Vx:Gx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new gt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,s){return Mi.makeTranslation(e,i,s),this.applyMatrix4(Mi),this}scale(e,i,s){return Mi.makeScale(e,i,s),this.applyMatrix4(Mi),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Wn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];cl.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ci.min,cl.min),ci.expandByPoint(En),En.addVectors(ci.max,cl.max),ci.expandByPoint(En)):(ci.expandByPoint(cl.min),ci.expandByPoint(cl.max))}ci.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)En.fromBufferAttribute(h,p),m&&(Ws.fromBufferAttribute(e,p),En.add(Ws)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let B=0;B<s.count;B++)h[B]=new ce,m[B]=new ce;const p=new ce,v=new ce,g=new ce,x=new Wt,b=new Wt,E=new Wt,A=new ce,S=new ce;function _(B,T,D){p.fromBufferAttribute(s,B),v.fromBufferAttribute(s,T),g.fromBufferAttribute(s,D),x.fromBufferAttribute(c,B),b.fromBufferAttribute(c,T),E.fromBufferAttribute(c,D),v.sub(p),g.sub(p),b.sub(x),E.sub(x);const G=1/(b.x*E.y-E.x*b.y);isFinite(G)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(g,-b.y).multiplyScalar(G),S.copy(g).multiplyScalar(b.x).addScaledVector(v,-E.x).multiplyScalar(G),h[B].add(A),h[T].add(A),h[D].add(A),m[B].add(S),m[T].add(S),m[D].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let B=0,T=N.length;B<T;++B){const D=N[B],G=D.start,q=D.count;for(let J=G,ne=G+q;J<ne;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const w=new ce,L=new ce,U=new ce,O=new ce;function P(B){U.fromBufferAttribute(l,B),O.copy(U);const T=h[B];w.copy(T),w.sub(U.multiplyScalar(U.dot(T))).normalize(),L.crossVectors(O,T);const G=L.dot(m[B])<0?-1:1;f.setXYZW(B,w.x,w.y,w.z,G)}for(let B=0,T=N.length;B<T;++B){const D=N[B],G=D.start,q=D.count;for(let J=G,ne=G+q;J<ne;J+=3)P(e.getX(J+0)),P(e.getX(J+1)),P(e.getX(J+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new fi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,b=s.count;x<b;x++)s.setXYZ(x,0,0,0);const l=new ce,c=new ce,f=new ce,h=new ce,m=new ce,p=new ce,v=new ce,g=new ce;if(e)for(let x=0,b=e.count;x<b;x+=3){const E=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),h.add(v),m.add(v),p.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,b=i.count;x<b;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,g=h.normalized,x=new p.constructor(m.length*v);let b=0,E=0;for(let A=0,S=m.length;A<S;A++){h.isInterleavedBufferAttribute?b=m[A]*h.data.stride+h.offset:b=m[A]*v;for(let _=0;_<v;_++)x[E++]=p[b++]}return new fi(x,v,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new di,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const x=p[v],b=e(x,s);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const b=p[g];v.push(b.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,b=g.length;x<b;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const l_=new fn,Br=new Ix,$c=new Cu,c_=new ce,eu=new ce,tu=new ce,nu=new ce,mh=new ce,iu=new ce,u_=new ce,au=new ce;class ui extends ei{constructor(e=new di,i=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){iu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(mh.fromBufferAttribute(g,e),f?iu.addScaledVector(mh,v):iu.addScaledVector(mh.sub(i),v))}i.add(iu)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),$c.copy(s.boundingSphere),$c.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!($c.containsPoint(Br.origin)===!1&&(Br.intersectSphere($c,c_)===null||Br.origin.distanceToSquared(c_)>(e.far-e.near)**2))&&(l_.copy(c).invert(),Br.copy(e.ray).applyMatrix4(l_),!(s.boundingBox!==null&&Br.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Br)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const S=x[E],_=f[S.materialIndex],N=Math.max(S.start,b.start),w=Math.min(h.count,Math.min(S.start+S.count,b.start+b.count));for(let L=N,U=w;L<U;L+=3){const O=h.getX(L),P=h.getX(L+1),B=h.getX(L+2);l=ru(this,_,e,s,p,v,g,O,P,B),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),A=Math.min(h.count,b.start+b.count);for(let S=E,_=A;S<_;S+=3){const N=h.getX(S),w=h.getX(S+1),L=h.getX(S+2);l=ru(this,f,e,s,p,v,g,N,w,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const S=x[E],_=f[S.materialIndex],N=Math.max(S.start,b.start),w=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let L=N,U=w;L<U;L+=3){const O=L,P=L+1,B=L+2;l=ru(this,_,e,s,p,v,g,O,P,B),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),A=Math.min(m.count,b.start+b.count);for(let S=E,_=A;S<_;S+=3){const N=S,w=S+1,L=S+2;l=ru(this,f,e,s,p,v,g,N,w,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function yT(r,e,i,s,l,c,f,h){let m;if(e.side===$n?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===vr,h),m===null)return null;au.copy(h),au.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(au);return p<i.near||p>i.far?null:{distance:p,point:au.clone(),object:r}}function ru(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,eu),r.getVertexPosition(m,tu),r.getVertexPosition(p,nu);const v=yT(r,e,i,s,eu,tu,nu,u_);if(v){const g=new ce;Ii.getBarycoord(u_,eu,tu,nu,g),l&&(v.uv=Ii.getInterpolatedAttribute(l,h,m,p,g,new Wt)),c&&(v.uv1=Ii.getInterpolatedAttribute(c,h,m,p,g,new Wt)),f&&(v.normal=Ii.getInterpolatedAttribute(f,h,m,p,g,new ce),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new ce,materialIndex:0};Ii.getNormal(eu,tu,nu,x.normal),v.face=x,v.barycoord=g}return v}class Cl extends di{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,b=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Wn(p,3)),this.setAttribute("normal",new Wn(v,3)),this.setAttribute("uv",new Wn(g,2));function E(A,S,_,N,w,L,U,O,P,B,T){const D=L/P,G=U/B,q=L/2,J=U/2,ne=O/2,re=P+1,z=B+1;let V=0,W=0;const Se=new ce;for(let xe=0;xe<z;xe++){const F=xe*G-J;for(let te=0;te<re;te++){const fe=te*D-q;Se[A]=fe*N,Se[S]=F*w,Se[_]=ne,p.push(Se.x,Se.y,Se.z),Se[A]=0,Se[S]=0,Se[_]=O>0?1:-1,v.push(Se.x,Se.y,Se.z),g.push(te/P),g.push(1-xe/B),V+=1}}for(let xe=0;xe<B;xe++)for(let F=0;F<P;F++){const te=x+F+re*xe,fe=x+F+re*(xe+1),Ee=x+(F+1)+re*(xe+1),Le=x+(F+1)+re*xe;m.push(te,fe,Le),m.push(fe,Ee,Le),W+=6}h.addGroup(b,W,T),b+=W,x+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function kn(r){const e={};for(let i=0;i<r.length;i++){const s=to(r[i]);for(const l in s)e[l]=s[l]}return e}function ST(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function kx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const bT={clone:to,merge:kn};var MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ET=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MT,this.fragmentShader=ET,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=ST(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Xx extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new ce,f_=new Wt,d_=new Wt;class Ti extends Xx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=xp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xp*2*Math.atan(Math.tan(Yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,i){return this.getViewBounds(e,f_,d_),i.subVectors(d_,f_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Yd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const js=-90,qs=1;class TT extends ei{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(js,qs,e,i);l.layers=this.layers,this.add(l);const c=new Ti(js,qs,e,i);c.layers=this.layers,this.add(c);const f=new Ti(js,qs,e,i);f.layers=this.layers,this.add(f);const h=new Ti(js,qs,e,i);h.layers=this.layers,this.add(h);const m=new Ti(js,qs,e,i);m.layers=this.layers,this.add(m);const p=new Ti(js,qs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Mu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,x,b),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Wx extends Xn{constructor(e=[],i=Zr,s,l,c,f,h,m,p,v){super(e,i,s,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jx extends Ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Wx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Cl(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:wa});c.uniforms.tEquirect.value=i;const f=new ui(l,c),h=i.minFilter;return i.minFilter===qr&&(i.minFilter=Hn),new TT(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class pl extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AT={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,s),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),b=.02,E=.005;p.inputState.pinching&&x>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(AT)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new pl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class RT extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oa,this.environmentIntensity=1,this.environmentRotation=new Oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class CT extends Xn{constructor(e=null,i=1,s=1,l,c,f,h,m,p=Pn,v=Pn,g,x){super(null,f,h,m,p,v,l,c,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new ce,wT=new ce,DT=new gt;class kr{constructor(e=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=vh.subVectors(s,i).cross(wT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(vh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||DT.getNormalMatrix(e),l=this.coplanarPoint(vh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Cu,UT=new Wt(.5,.5),su=new ce;class qx{constructor(e=new kr,i=new kr,s=new kr,l=new kr,c=new kr,f=new kr){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ki,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],b=c[7],E=c[8],A=c[9],S=c[10],_=c[11],N=c[12],w=c[13],L=c[14],U=c[15];if(l[0].setComponents(p-f,b-v,_-E,U-N).normalize(),l[1].setComponents(p+f,b+v,_+E,U+N).normalize(),l[2].setComponents(p+h,b+g,_+A,U+w).normalize(),l[3].setComponents(p-h,b-g,_-A,U-w).normalize(),s)l[4].setComponents(m,x,S,L).normalize(),l[5].setComponents(p-m,b-x,_-S,U-L).normalize();else if(l[4].setComponents(p-m,b-x,_-S,U-L).normalize(),i===Ki)l[5].setComponents(p+m,b+x,_+S,U+L).normalize();else if(i===Mu)l[5].setComponents(m,x,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const i=UT.distanceTo(e.center);return Hr.radius=.7071067811865476+i,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(su.x=l.normal.x>0?e.max.x:e.min.x,su.y=l.normal.y>0?e.max.y:e.min.y,su.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(su)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yx extends Rl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const h_=new fn,yp=new Ix,ou=new Cu,lu=new ce;class NT extends ei{constructor(e=new di,i=new Yx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ou.copy(s.boundingSphere),ou.applyMatrix4(l),ou.radius+=c,e.ray.intersectsSphere(ou)===!1)return;h_.copy(l).invert(),yp.copy(e.ray).applyMatrix4(h_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const x=Math.max(0,f.start),b=Math.min(p.count,f.start+f.count);for(let E=x,A=b;E<A;E++){const S=p.getX(E);lu.fromBufferAttribute(g,S),p_(lu,S,m,l,e,i,this)}}else{const x=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let E=x,A=b;E<A;E++)lu.fromBufferAttribute(g,E),p_(lu,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function p_(r,e,i,s,l,c,f){const h=yp.distanceSqToPoint(r);if(h<i){const m=new ce;yp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class yl extends Xn{constructor(e,i,s=$i,l,c,f,h=Pn,m=Pn,p,v=La,g=1){if(v!==La&&v!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,c,f,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class LT extends yl{constructor(e,i=$i,s=Zr,l,c,f=Pn,h=Pn,m,p=La){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,i,s,l,c,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zx extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gp extends di{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],x=[],b=[];let E=0;const A=[],S=s/2;let _=0;N(),f===!1&&(e>0&&w(!0),i>0&&w(!1)),this.setIndex(v),this.setAttribute("position",new Wn(g,3)),this.setAttribute("normal",new Wn(x,3)),this.setAttribute("uv",new Wn(b,2));function N(){const L=new ce,U=new ce;let O=0;const P=(i-e)/s;for(let B=0;B<=c;B++){const T=[],D=B/c,G=D*(i-e)+e;for(let q=0;q<=l;q++){const J=q/l,ne=J*m+h,re=Math.sin(ne),z=Math.cos(ne);U.x=G*re,U.y=-D*s+S,U.z=G*z,g.push(U.x,U.y,U.z),L.set(re,P,z).normalize(),x.push(L.x,L.y,L.z),b.push(J,1-D),T.push(E++)}A.push(T)}for(let B=0;B<l;B++)for(let T=0;T<c;T++){const D=A[T][B],G=A[T+1][B],q=A[T+1][B+1],J=A[T][B+1];(e>0||T!==0)&&(v.push(D,G,J),O+=3),(i>0||T!==c-1)&&(v.push(G,q,J),O+=3)}p.addGroup(_,O,0),_+=O}function w(L){const U=E,O=new Wt,P=new ce;let B=0;const T=L===!0?e:i,D=L===!0?1:-1;for(let q=1;q<=l;q++)g.push(0,S*D,0),x.push(0,D,0),b.push(.5,.5),E++;const G=E;for(let q=0;q<=l;q++){const ne=q/l*m+h,re=Math.cos(ne),z=Math.sin(ne);P.x=T*z,P.y=S*D,P.z=T*re,g.push(P.x,P.y,P.z),x.push(0,D,0),O.x=re*.5+.5,O.y=z*.5*D+.5,b.push(O.x,O.y),E++}for(let q=0;q<l;q++){const J=U+q,ne=G+q;L===!0?v.push(ne,ne+1,J):v.push(ne+1,ne,J),B+=3}p.addGroup(_,B,L===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wu extends di{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,g=e/h,x=i/m,b=[],E=[],A=[],S=[];for(let _=0;_<v;_++){const N=_*x-f;for(let w=0;w<p;w++){const L=w*g-c;E.push(L,-N,0),A.push(0,0,1),S.push(w/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<h;N++){const w=N+p*_,L=N+p*(_+1),U=N+1+p*(_+1),O=N+1+p*_;b.push(w,L,O),b.push(L,U,O)}this.setIndex(b),this.setAttribute("position",new Wn(E,3)),this.setAttribute("normal",new Wn(A,3)),this.setAttribute("uv",new Wn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vp extends di{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const v=[],g=new ce,x=new ce,b=[],E=[],A=[],S=[];for(let _=0;_<=s;_++){const N=[],w=_/s;let L=0;_===0&&f===0?L=.5/i:_===s&&m===Math.PI&&(L=-.5/i);for(let U=0;U<=i;U++){const O=U/i;g.x=-e*Math.cos(l+O*c)*Math.sin(f+w*h),g.y=e*Math.cos(f+w*h),g.z=e*Math.sin(l+O*c)*Math.sin(f+w*h),E.push(g.x,g.y,g.z),x.copy(g).normalize(),A.push(x.x,x.y,x.z),S.push(O+L,1-w),N.push(p++)}v.push(N)}for(let _=0;_<s;_++)for(let N=0;N<i;N++){const w=v[_][N+1],L=v[_][N],U=v[_+1][N],O=v[_+1][N+1];(_!==0||f>0)&&b.push(w,L,O),(_!==s-1||m<Math.PI)&&b.push(L,U,O)}this.setIndex(b),this.setAttribute("position",new Wn(E,3)),this.setAttribute("normal",new Wn(A,3)),this.setAttribute("uv",new Wn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class OT extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class PT extends Rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zT extends Rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kx extends Xx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class FT extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function m_(r,e,i,s){const l=IT(s);switch(i){case Lx:return r*e;case Px:return r*e/l.components*l.byteLength;case Pp:return r*e/l.components*l.byteLength;case $s:return r*e*2/l.components*l.byteLength;case zp:return r*e*2/l.components*l.byteLength;case Ox:return r*e*3/l.components*l.byteLength;case Hi:return r*e*4/l.components*l.byteLength;case Fp:return r*e*4/l.components*l.byteLength;case mu:case gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vu:case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Xh:return Math.max(r,16)*Math.max(e,8)/4;case Gh:case kh:return Math.max(r,8)*Math.max(e,8)/2;case Wh:case jh:case Yh:case Zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qh:case Kh:case Qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ep:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case tp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case np:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ap:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case rp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case sp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case op:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case lp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case cp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case up:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case dp:case hp:case pp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case mp:case gp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vp:case _p:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IT(r){switch(r){case Ai:case wx:return{byteLength:1,components:1};case vl:case Dx:case Na:return{byteLength:2,components:1};case Lp:case Op:return{byteLength:2,components:4};case $i:case Np:case Zi:return{byteLength:4,components:1};case Ux:case Nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);function Qx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function BT(r){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,v),h.onUploadCallback();let b;if(p instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=r.SHORT;else if(p instanceof Uint32Array)b=r.UNSIGNED_INT;else if(p instanceof Int32Array)b=r.INT;else if(p instanceof Int8Array)b=r.BYTE;else if(p instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,v);else{g.sort((b,E)=>b.start-E.start);let x=0;for(let b=1;b<g.length;b++){const E=g[x],A=g[b];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,g[x]=A)}g.length=x+1;for(let b=0,E=g.length;b<E;b++){const A=g[b];r.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var HT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GT=`#ifdef USE_ALPHAHASH
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
#endif`,VT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jT=`#ifdef USE_AOMAP
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
#endif`,qT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YT=`#ifdef USE_BATCHING
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
#endif`,ZT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$T=`#ifdef USE_IRIDESCENCE
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
#endif`,eA=`#ifdef USE_BUMPMAP
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
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cA=`#define PI 3.141592653589793
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
} // validated`,uA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fA=`vec3 transformedNormal = objectNormal;
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
#endif`,dA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gA="gl_FragColor = linearToOutputTexel( gl_FragColor );",vA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_A=`#ifdef USE_ENVMAP
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
#endif`,xA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yA=`#ifdef USE_ENVMAP
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
#endif`,SA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bA=`#ifdef USE_ENVMAP
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
#endif`,MA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RA=`#ifdef USE_GRADIENTMAP
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
}`,CA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UA=`uniform bool receiveShadow;
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
#endif`,NA=`#ifdef USE_ENVMAP
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
#endif`,LA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FA=`PhysicalMaterial material;
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
#endif`,IA=`uniform sampler2D dfgLUT;
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
}`,BA=`
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
#endif`,HA=`#if defined( RE_IndirectDiffuse )
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
#endif`,GA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZA=`#if defined( USE_POINTS_UV )
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
#endif`,KA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$A=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tR=`#ifdef USE_MORPHTARGETS
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
#endif`,nR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lR=`#ifdef USE_NORMALMAP
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
#endif`,cR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_R=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ER=`float getShadowMask() {
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
}`,TR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AR=`#ifdef USE_SKINNING
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
#endif`,RR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CR=`#ifdef USE_SKINNING
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
#endif`,wR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LR=`#ifdef USE_TRANSMISSION
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
#endif`,OR=`#ifdef USE_TRANSMISSION
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
#endif`,PR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HR=`uniform sampler2D t2D;
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
}`,GR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WR=`#include <common>
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
}`,jR=`#if DEPTH_PACKING == 3200
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
}`,qR=`#define DISTANCE
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
}`,YR=`#define DISTANCE
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
}`,ZR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QR=`uniform float scale;
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
}`,JR=`uniform vec3 diffuse;
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
}`,$R=`#include <common>
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
}`,eC=`uniform vec3 diffuse;
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
}`,tC=`#define LAMBERT
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
}`,nC=`#define LAMBERT
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
}`,iC=`#define MATCAP
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
}`,aC=`#define MATCAP
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
}`,rC=`#define NORMAL
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
}`,sC=`#define NORMAL
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
}`,oC=`#define PHONG
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
}`,lC=`#define PHONG
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
}`,cC=`#define STANDARD
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
}`,uC=`#define STANDARD
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
}`,fC=`#define TOON
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
}`,dC=`#define TOON
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
}`,hC=`uniform float size;
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
}`,pC=`uniform vec3 diffuse;
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
}`,mC=`#include <common>
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
}`,gC=`uniform vec3 color;
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
}`,vC=`uniform float rotation;
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
}`,_C=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:HT,alphahash_pars_fragment:GT,alphamap_fragment:VT,alphamap_pars_fragment:kT,alphatest_fragment:XT,alphatest_pars_fragment:WT,aomap_fragment:jT,aomap_pars_fragment:qT,batching_pars_vertex:YT,batching_vertex:ZT,begin_vertex:KT,beginnormal_vertex:QT,bsdfs:JT,iridescence_fragment:$T,bumpmap_pars_fragment:eA,clipping_planes_fragment:tA,clipping_planes_pars_fragment:nA,clipping_planes_pars_vertex:iA,clipping_planes_vertex:aA,color_fragment:rA,color_pars_fragment:sA,color_pars_vertex:oA,color_vertex:lA,common:cA,cube_uv_reflection_fragment:uA,defaultnormal_vertex:fA,displacementmap_pars_vertex:dA,displacementmap_vertex:hA,emissivemap_fragment:pA,emissivemap_pars_fragment:mA,colorspace_fragment:gA,colorspace_pars_fragment:vA,envmap_fragment:_A,envmap_common_pars_fragment:xA,envmap_pars_fragment:yA,envmap_pars_vertex:SA,envmap_physical_pars_fragment:NA,envmap_vertex:bA,fog_vertex:MA,fog_pars_vertex:EA,fog_fragment:TA,fog_pars_fragment:AA,gradientmap_pars_fragment:RA,lightmap_pars_fragment:CA,lights_lambert_fragment:wA,lights_lambert_pars_fragment:DA,lights_pars_begin:UA,lights_toon_fragment:LA,lights_toon_pars_fragment:OA,lights_phong_fragment:PA,lights_phong_pars_fragment:zA,lights_physical_fragment:FA,lights_physical_pars_fragment:IA,lights_fragment_begin:BA,lights_fragment_maps:HA,lights_fragment_end:GA,logdepthbuf_fragment:VA,logdepthbuf_pars_fragment:kA,logdepthbuf_pars_vertex:XA,logdepthbuf_vertex:WA,map_fragment:jA,map_pars_fragment:qA,map_particle_fragment:YA,map_particle_pars_fragment:ZA,metalnessmap_fragment:KA,metalnessmap_pars_fragment:QA,morphinstance_vertex:JA,morphcolor_vertex:$A,morphnormal_vertex:eR,morphtarget_pars_vertex:tR,morphtarget_vertex:nR,normal_fragment_begin:iR,normal_fragment_maps:aR,normal_pars_fragment:rR,normal_pars_vertex:sR,normal_vertex:oR,normalmap_pars_fragment:lR,clearcoat_normal_fragment_begin:cR,clearcoat_normal_fragment_maps:uR,clearcoat_pars_fragment:fR,iridescence_pars_fragment:dR,opaque_fragment:hR,packing:pR,premultiplied_alpha_fragment:mR,project_vertex:gR,dithering_fragment:vR,dithering_pars_fragment:_R,roughnessmap_fragment:xR,roughnessmap_pars_fragment:yR,shadowmap_pars_fragment:SR,shadowmap_pars_vertex:bR,shadowmap_vertex:MR,shadowmask_pars_fragment:ER,skinbase_vertex:TR,skinning_pars_vertex:AR,skinning_vertex:RR,skinnormal_vertex:CR,specularmap_fragment:wR,specularmap_pars_fragment:DR,tonemapping_fragment:UR,tonemapping_pars_fragment:NR,transmission_fragment:LR,transmission_pars_fragment:OR,uv_pars_fragment:PR,uv_pars_vertex:zR,uv_vertex:FR,worldpos_vertex:IR,background_vert:BR,background_frag:HR,backgroundCube_vert:GR,backgroundCube_frag:VR,cube_vert:kR,cube_frag:XR,depth_vert:WR,depth_frag:jR,distance_vert:qR,distance_frag:YR,equirect_vert:ZR,equirect_frag:KR,linedashed_vert:QR,linedashed_frag:JR,meshbasic_vert:$R,meshbasic_frag:eC,meshlambert_vert:tC,meshlambert_frag:nC,meshmatcap_vert:iC,meshmatcap_frag:aC,meshnormal_vert:rC,meshnormal_frag:sC,meshphong_vert:oC,meshphong_frag:lC,meshphysical_vert:cC,meshphysical_frag:uC,meshtoon_vert:fC,meshtoon_frag:dC,points_vert:hC,points_frag:pC,shadow_vert:mC,shadow_frag:gC,sprite_vert:vC,sprite_frag:_C},Fe={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Yi={basic:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:kn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:kn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:kn([Fe.points,Fe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:kn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:kn([Fe.common,Fe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:kn([Fe.sprite,Fe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:kn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:kn([Fe.lights,Fe.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Yi.physical={uniforms:kn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const cu={r:0,b:0,g:0},Gr=new Oa,xC=new fn;function yC(r,e,i,s,l,c,f){const h=new Dt(0);let m=c===!0?0:1,p,v,g=null,x=0,b=null;function E(w){let L=w.isScene===!0?w.background:null;return L&&L.isTexture&&(L=(w.backgroundBlurriness>0?i:e).get(L)),L}function A(w){let L=!1;const U=E(w);U===null?_(h,m):U&&U.isColor&&(_(U,1),L=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(w,L){const U=E(L);U&&(U.isCubeTexture||U.mapping===Ru)?(v===void 0&&(v=new ui(new Cl(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:to(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(O,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Gr.copy(L.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(xC.makeRotationFromEuler(Gr)),v.material.toneMapped=wt.getTransfer(U.colorSpace)!==Xt,(g!==U||x!==U.version||b!==r.toneMapping)&&(v.material.needsUpdate=!0,g=U,x=U.version,b=r.toneMapping),v.layers.enableAll(),w.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new ui(new wu(2,2),new ea({name:"BackgroundMaterial",uniforms:to(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=wt.getTransfer(U.colorSpace)!==Xt,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||x!==U.version||b!==r.toneMapping)&&(p.material.needsUpdate=!0,g=U,x=U.version,b=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function _(w,L){w.getRGB(cu,kx(r)),s.buffers.color.setClear(cu.r,cu.g,cu.b,L,f)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,L=1){h.set(w),m=L,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,_(h,m)},render:A,addToRenderList:S,dispose:N}}function SC(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(D,G,q,J,ne){let re=!1;const z=g(J,q,G);c!==z&&(c=z,p(c.object)),re=b(D,J,q,ne),re&&E(D,J,q,ne),ne!==null&&e.update(ne,r.ELEMENT_ARRAY_BUFFER),(re||f)&&(f=!1,L(D,G,q,J),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function v(D){return r.deleteVertexArray(D)}function g(D,G,q){const J=q.wireframe===!0;let ne=s[D.id];ne===void 0&&(ne={},s[D.id]=ne);let re=ne[G.id];re===void 0&&(re={},ne[G.id]=re);let z=re[J];return z===void 0&&(z=x(m()),re[J]=z),z}function x(D){const G=[],q=[],J=[];for(let ne=0;ne<i;ne++)G[ne]=0,q[ne]=0,J[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:J,object:D,attributes:{},index:null}}function b(D,G,q,J){const ne=c.attributes,re=G.attributes;let z=0;const V=q.getAttributes();for(const W in V)if(V[W].location>=0){const xe=ne[W];let F=re[W];if(F===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(F=D.instanceColor)),xe===void 0||xe.attribute!==F||F&&xe.data!==F.data)return!0;z++}return c.attributesNum!==z||c.index!==J}function E(D,G,q,J){const ne={},re=G.attributes;let z=0;const V=q.getAttributes();for(const W in V)if(V[W].location>=0){let xe=re[W];xe===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor));const F={};F.attribute=xe,xe&&xe.data&&(F.data=xe.data),ne[W]=F,z++}c.attributes=ne,c.attributesNum=z,c.index=J}function A(){const D=c.newAttributes;for(let G=0,q=D.length;G<q;G++)D[G]=0}function S(D){_(D,0)}function _(D,G){const q=c.newAttributes,J=c.enabledAttributes,ne=c.attributeDivisors;q[D]=1,J[D]===0&&(r.enableVertexAttribArray(D),J[D]=1),ne[D]!==G&&(r.vertexAttribDivisor(D,G),ne[D]=G)}function N(){const D=c.newAttributes,G=c.enabledAttributes;for(let q=0,J=G.length;q<J;q++)G[q]!==D[q]&&(r.disableVertexAttribArray(q),G[q]=0)}function w(D,G,q,J,ne,re,z){z===!0?r.vertexAttribIPointer(D,G,q,ne,re):r.vertexAttribPointer(D,G,q,J,ne,re)}function L(D,G,q,J){A();const ne=J.attributes,re=q.getAttributes(),z=G.defaultAttributeValues;for(const V in re){const W=re[V];if(W.location>=0){let Se=ne[V];if(Se===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),Se!==void 0){const xe=Se.normalized,F=Se.itemSize,te=e.get(Se);if(te===void 0)continue;const fe=te.buffer,Ee=te.type,Le=te.bytesPerElement,se=Ee===r.INT||Ee===r.UNSIGNED_INT||Se.gpuType===Np;if(Se.isInterleavedBufferAttribute){const ue=Se.data,De=ue.stride,ke=Se.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<W.locationSize;He++)_(W.location+He,ue.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<W.locationSize;He++)S(W.location+He);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let He=0;He<W.locationSize;He++)w(W.location+He,F/W.locationSize,Ee,xe,De*Le,(ke+F/W.locationSize*He)*Le,se)}else{if(Se.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)_(W.location+ue,Se.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ue=0;ue<W.locationSize;ue++)S(W.location+ue);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let ue=0;ue<W.locationSize;ue++)w(W.location+ue,F/W.locationSize,Ee,xe,F*Le,F/W.locationSize*ue*Le,se)}}else if(z!==void 0){const xe=z[V];if(xe!==void 0)switch(xe.length){case 2:r.vertexAttrib2fv(W.location,xe);break;case 3:r.vertexAttrib3fv(W.location,xe);break;case 4:r.vertexAttrib4fv(W.location,xe);break;default:r.vertexAttrib1fv(W.location,xe)}}}}N()}function U(){B();for(const D in s){const G=s[D];for(const q in G){const J=G[q];for(const ne in J)v(J[ne].object),delete J[ne];delete G[q]}delete s[D]}}function O(D){if(s[D.id]===void 0)return;const G=s[D.id];for(const q in G){const J=G[q];for(const ne in J)v(J[ne].object),delete J[ne];delete G[q]}delete s[D.id]}function P(D){for(const G in s){const q=s[G];if(q[D.id]===void 0)continue;const J=q[D.id];for(const ne in J)v(J[ne].object),delete J[ne];delete q[D.id]}}function B(){T(),f=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:O,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:S,disableUnusedAttributes:N}}function bC(r,e,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function f(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function h(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let b=0;for(let E=0;E<g;E++)b+=v[E];i.update(b,s,1)}function m(p,v,g,x){if(g===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<p.length;E++)f(p[E],v[E],x[E]);else{b.multiDrawArraysInstancedWEBGL(s,p,0,v,0,x,0,g);let E=0;for(let A=0;A<g;A++)E+=v[A]*x[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function MC(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==Hi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const B=P===Na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ai&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Zi&&!B)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ut("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:b,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:N,maxVaryings:w,maxFragmentUniforms:L,maxSamples:U,samples:O}}function EC(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new kr,h=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const b=g.length!==0||x||s!==0||l;return l=x,s=g.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,b){const E=g.clippingPlanes,A=g.clipIntersection,S=g.clipShadows,_=r.get(g);if(!l||E===null||E.length===0||c&&!S)c?v(null):p();else{const N=c?0:s,w=N*4;let L=_.clippingState||null;m.value=L,L=v(E,x,w,b);for(let U=0;U!==w;++U)L[U]=i[U];_.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,x,b,E){const A=g!==null?g.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const _=b+A*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(S===null||S.length<_)&&(S=new Float32Array(_));for(let w=0,L=b;w!==A;++w,L+=4)f.copy(g[w]).applyMatrix4(N,h),f.normal.toArray(S,L),S[L+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function TC(r){let e=new WeakMap;function i(f,h){return h===Fh?f.mapping=Zr:h===Ih&&(f.mapping=Js),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Fh||h===Ih)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new jx(m.height);return p.fromEquirectangularTexture(r,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const gr=4,g_=[.125,.215,.35,.446,.526,.582],jr=20,AC=256,ul=new Kx,v_=new Dt;let _h=null,xh=0,yh=0,Sh=!1;const RC=new ce;class __{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=RC}=c;_h=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,xh,yh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Zr||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Na,format:Hi,colorSpace:eo,depthBuffer:!1},l=x_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CC(c)),this._blurMaterial=DC(c,e,i),this._ggxMaterial=wC(c,e,i)}return l}_compileMaterial(e){const i=new ui(new di,e);this._renderer.compile(i,ul)}_sceneToCubeUV(e,i,s,l,c){const m=new Ti(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,b=g.toneMapping;g.getClearColor(v_),g.toneMapping=Qi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ui(new Cl,new Wr({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let _=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,_=!0):(S.color.copy(v_),_=!0);for(let w=0;w<6;w++){const L=w%3;L===0?(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[w],c.y,c.z)):L===1?(m.up.set(0,0,p[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[w],c.z)):(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[w]));const U=this._cubeSize;Ys(l,L*U,w>2?U:0,U,U),g.setRenderTarget(l),_&&g.render(A,m),g.render(e,m)}g.toneMapping=b,g.autoClear=x,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Zr||e.mapping===Js;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=S_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ys(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,ul)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=0+p*1.25,b=g*x,{_lodMax:E}=this,A=this._sizeLods[s],S=3*A*(s>E-gr?s-E+gr:0),_=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=E-i,Ys(c,S,_,3*A,2*A),l.setRenderTarget(c),l.render(h,ul),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Ys(e,S,_,3*A,2*A),l.setRenderTarget(e),l.render(h,ul)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,b=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*jr-1),A=c/E,S=isFinite(c)?1+Math.floor(v*A):jr;S>jr&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${jr}`);const _=[];let N=0;for(let P=0;P<jr;++P){const B=P/A,T=Math.exp(-B*B/2);_.push(T),P===0?N+=T:P<S&&(N+=2*T)}for(let P=0;P<_.length;P++)_[P]=_[P]/N;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:w}=this;x.dTheta.value=E,x.mipInt.value=w-s;const L=this._sizeLods[l],U=3*L*(l>w-gr?l-w+gr:0),O=4*(this._cubeSize-L);Ys(i,U,O,3*L,2*L),m.setRenderTarget(i),m.render(g,ul)}}function CC(r){const e=[],i=[],s=[];let l=r;const c=r-gr+1+g_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-gr?m=g_[f-r+gr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],b=6,E=6,A=3,S=2,_=1,N=new Float32Array(A*E*b),w=new Float32Array(S*E*b),L=new Float32Array(_*E*b);for(let O=0;O<b;O++){const P=O%3*2/3-1,B=O>2?0:-1,T=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];N.set(T,A*E*O),w.set(x,S*E*O);const D=[O,O,O,O,O,O];L.set(D,_*E*O)}const U=new di;U.setAttribute("position",new fi(N,A)),U.setAttribute("uv",new fi(w,S)),U.setAttribute("faceIndex",new fi(L,_)),s.push(new ui(U,null)),l>gr&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function x_(r,e,i){const s=new Ji(r,e,i);return s.texture.mapping=Ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ys(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function wC(r,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function DC(r,e,i){const s=new Float32Array(jr),l=new ce(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Du(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function y_(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function S_(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

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
	`}function UC(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Fh||m===Ih,v=m===Zr||m===Js;if(p||v){let g=e.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new __(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const b=h.image;return p&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new __(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function NC(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&xl("WebGLRenderer: "+s+" extension not supported."),l}}}function LC(r,e,i,s){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const b=c.get(x);b&&(e.remove(b),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const b in x)e.update(x[b],r.ARRAY_BUFFER)}function p(g){const x=[],b=g.index,E=g.attributes.position;let A=0;if(b!==null){const N=b.array;A=b.version;for(let w=0,L=N.length;w<L;w+=3){const U=N[w+0],O=N[w+1],P=N[w+2];x.push(U,O,O,P,P,U)}}else if(E!==void 0){const N=E.array;A=E.version;for(let w=0,L=N.length/3-1;w<L;w+=3){const U=w+0,O=w+1,P=w+2;x.push(U,O,O,P,P,U)}}else return;const S=new(zx(x)?Vx:Gx)(x,1);S.version=A;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const x=c.get(g);if(x){const b=g.index;b!==null&&x.version<b.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function OC(r,e,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,b){r.drawElements(s,b,c,x*f),i.update(b,s,1)}function p(x,b,E){E!==0&&(r.drawElementsInstanced(s,b,c,x*f,E),i.update(b,s,E))}function v(x,b,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,c,x,0,E);let S=0;for(let _=0;_<E;_++)S+=b[_];i.update(S,s,1)}function g(x,b,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,b[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(s,b,0,c,x,0,A,0,E);let _=0;for(let N=0;N<E;N++)_+=b[N]*A[N];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function PC(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Lt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function zC(r,e,i){const s=new WeakMap,l=new un;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(h);if(x===void 0||x.count!==g){let D=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var b=D;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let L=0;E===!0&&(L=1),A===!0&&(L=2),S===!0&&(L=3);let U=h.attributes.position.count*L,O=1;U>e.maxTextureSize&&(O=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const P=new Float32Array(U*O*4*g),B=new Fx(P,U,O,g);B.type=Zi,B.needsUpdate=!0;const T=L*4;for(let G=0;G<g;G++){const q=_[G],J=N[G],ne=w[G],re=U*O*4*G;for(let z=0;z<q.count;z++){const V=z*T;E===!0&&(l.fromBufferAttribute(q,z),P[re+V+0]=l.x,P[re+V+1]=l.y,P[re+V+2]=l.z,P[re+V+3]=0),A===!0&&(l.fromBufferAttribute(J,z),P[re+V+4]=l.x,P[re+V+5]=l.y,P[re+V+6]=l.z,P[re+V+7]=0),S===!0&&(l.fromBufferAttribute(ne,z),P[re+V+8]=l.x,P[re+V+9]=l.y,P[re+V+10]=l.z,P[re+V+11]=ne.itemSize===4?l.w:1)}}x={count:g,texture:B,size:new Wt(U,O)},s.set(h,x),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function FC(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const IC={[Sx]:"LINEAR_TONE_MAPPING",[bx]:"REINHARD_TONE_MAPPING",[Mx]:"CINEON_TONE_MAPPING",[Ex]:"ACES_FILMIC_TONE_MAPPING",[Ax]:"AGX_TONE_MAPPING",[Rx]:"NEUTRAL_TONE_MAPPING",[Tx]:"CUSTOM_TONE_MAPPING"};function BC(r,e,i,s,l){const c=new Ji(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Ji(e,i,{type:Na,depthBuffer:!1,stencilBuffer:!1}),h=new di;h.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Wn([0,2,0,0,2,0],2));const m=new OT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ui(h,m),v=new Kx(-1,1,1,-1,0,1);let g=null,x=null,b=!1,E,A=null,S=[],_=!1;this.setSize=function(N,w){c.setSize(N,w),f.setSize(N,w);for(let L=0;L<S.length;L++){const U=S[L];U.setSize&&U.setSize(N,w)}},this.setEffects=function(N){S=N,_=S.length>0&&S[0].isRenderPass===!0;const w=c.width,L=c.height;for(let U=0;U<S.length;U++){const O=S[U];O.setSize&&O.setSize(w,L)}},this.begin=function(N,w){if(b||N.toneMapping===Qi&&S.length===0)return!1;if(A=w,w!==null){const L=w.width,U=w.height;(c.width!==L||c.height!==U)&&this.setSize(L,U)}return _===!1&&N.setRenderTarget(c),E=N.toneMapping,N.toneMapping=Qi,!0},this.hasRenderPass=function(){return _},this.end=function(N,w){N.toneMapping=E,b=!0;let L=c,U=f;for(let O=0;O<S.length;O++){const P=S[O];if(P.enabled!==!1&&(P.render(N,U,L,w),P.needsSwap!==!1)){const B=L;L=U,U=B}}if(g!==N.outputColorSpace||x!==N.toneMapping){g=N.outputColorSpace,x=N.toneMapping,m.defines={},wt.getTransfer(g)===Xt&&(m.defines.SRGB_TRANSFER="");const O=IC[x];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(A),N.render(p,v),A=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const Jx=new Xn,Sp=new yl(1,1),$x=new Fx,ey=new cT,ty=new Wx,b_=[],M_=[],E_=new Float32Array(16),T_=new Float32Array(9),A_=new Float32Array(4);function oo(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=b_[l];if(c===void 0&&(c=new Float32Array(l),b_[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function Sn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function bn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Uu(r,e){let i=M_[e];i===void 0&&(i=new Int32Array(e),M_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function HC(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function GC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2fv(this.addr,e),bn(i,e)}}function VC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;r.uniform3fv(this.addr,e),bn(i,e)}}function kC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4fv(this.addr,e),bn(i,e)}}function XC(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(Sn(i,s))return;A_.set(s),r.uniformMatrix2fv(this.addr,!1,A_),bn(i,s)}}function WC(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(Sn(i,s))return;T_.set(s),r.uniformMatrix3fv(this.addr,!1,T_),bn(i,s)}}function jC(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(Sn(i,s))return;E_.set(s),r.uniformMatrix4fv(this.addr,!1,E_),bn(i,s)}}function qC(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function YC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2iv(this.addr,e),bn(i,e)}}function ZC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;r.uniform3iv(this.addr,e),bn(i,e)}}function KC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4iv(this.addr,e),bn(i,e)}}function QC(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function JC(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2uiv(this.addr,e),bn(i,e)}}function $C(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;r.uniform3uiv(this.addr,e),bn(i,e)}}function e2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4uiv(this.addr,e),bn(i,e)}}function t2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Sp.compareFunction=i.isReversedDepthBuffer()?Bp:Ip,c=Sp):c=Jx,i.setTexture2D(e||c,l)}function n2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||ey,l)}function i2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||ty,l)}function a2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||$x,l)}function r2(r){switch(r){case 5126:return HC;case 35664:return GC;case 35665:return VC;case 35666:return kC;case 35674:return XC;case 35675:return WC;case 35676:return jC;case 5124:case 35670:return qC;case 35667:case 35671:return YC;case 35668:case 35672:return ZC;case 35669:case 35673:return KC;case 5125:return QC;case 36294:return JC;case 36295:return $C;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return a2}}function s2(r,e){r.uniform1fv(this.addr,e)}function o2(r,e){const i=oo(e,this.size,2);r.uniform2fv(this.addr,i)}function l2(r,e){const i=oo(e,this.size,3);r.uniform3fv(this.addr,i)}function c2(r,e){const i=oo(e,this.size,4);r.uniform4fv(this.addr,i)}function u2(r,e){const i=oo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function f2(r,e){const i=oo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function d2(r,e){const i=oo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function h2(r,e){r.uniform1iv(this.addr,e)}function p2(r,e){r.uniform2iv(this.addr,e)}function m2(r,e){r.uniform3iv(this.addr,e)}function g2(r,e){r.uniform4iv(this.addr,e)}function v2(r,e){r.uniform1uiv(this.addr,e)}function _2(r,e){r.uniform2uiv(this.addr,e)}function x2(r,e){r.uniform3uiv(this.addr,e)}function y2(r,e){r.uniform4uiv(this.addr,e)}function S2(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Sp:f=Jx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function b2(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||ey,c[f])}function M2(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||ty,c[f])}function E2(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||$x,c[f])}function T2(r){switch(r){case 5126:return s2;case 35664:return o2;case 35665:return l2;case 35666:return c2;case 35674:return u2;case 35675:return f2;case 35676:return d2;case 5124:case 35670:return h2;case 35667:case 35671:return p2;case 35668:case 35672:return m2;case 35669:case 35673:return g2;case 5125:return v2;case 36294:return _2;case 36295:return x2;case 36296:return y2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return M2;case 36289:case 36303:case 36311:case 36292:return E2}}class A2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=r2(i.type)}}class R2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=T2(i.type)}}class C2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function R_(r,e){r.seq.push(e),r.map[e.id]=e}function w2(r,e,i){const s=r.name,l=s.length;for(bh.lastIndex=0;;){const c=bh.exec(s),f=bh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){R_(i,p===void 0?new A2(h,r,e):new R2(h,r,e));break}else{let g=i.map[h];g===void 0&&(g=new C2(h),R_(i,g)),i=g}}}class xu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);w2(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function C_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const D2=37297;let U2=0;function N2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const w_=new gt;function L2(r){wt._getMatrix(w_,wt.workingColorSpace,r);const e=`mat3( ${w_.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(r)){case bu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function D_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+N2(r.getShaderSource(e),h)}else return c}function O2(r,e){const i=L2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const P2={[Sx]:"Linear",[bx]:"Reinhard",[Mx]:"Cineon",[Ex]:"ACESFilmic",[Ax]:"AgX",[Rx]:"Neutral",[Tx]:"Custom"};function z2(r,e){const i=P2[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const uu=new ce;function F2(){wt.getLuminanceCoefficients(uu);const r=uu.x.toFixed(4),e=uu.y.toFixed(4),i=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function B2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function H2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function ml(r){return r!==""}function U_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(r){return r.replace(G2,k2)}const V2=new Map;function k2(r,e){let i=vt[e];if(i===void 0){const s=V2.get(e);if(s!==void 0)i=vt[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return bp(i)}const X2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(r){return r.replace(X2,W2)}function W2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function O_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const j2={[pu]:"SHADOWMAP_TYPE_PCF",[hl]:"SHADOWMAP_TYPE_VSM"};function q2(r){return j2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Y2={[Zr]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[Ru]:"ENVMAP_TYPE_CUBE_UV"};function Z2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Y2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const K2={[Js]:"ENVMAP_MODE_REFRACTION"};function Q2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":K2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const J2={[yx]:"ENVMAP_BLENDING_MULTIPLY",[k1]:"ENVMAP_BLENDING_MIX",[X1]:"ENVMAP_BLENDING_ADD"};function $2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":J2[r.combine]||"ENVMAP_BLENDING_NONE"}function ew(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function tw(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=q2(i),p=Z2(i),v=Q2(i),g=$2(i),x=ew(i),b=I2(i),E=B2(c),A=l.createProgram();let S,_,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ml).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ml).join(`
`),_.length>0&&(_+=`
`)):(S=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),_=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qi?"#define TONE_MAPPING":"",i.toneMapping!==Qi?vt.tonemapping_pars_fragment:"",i.toneMapping!==Qi?z2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,O2("linearToOutputTexel",i.outputColorSpace),F2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ml).join(`
`)),f=bp(f),f=U_(f,i),f=N_(f,i),h=bp(h),h=U_(h,i),h=N_(h,i),f=L_(f),h=L_(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=N+S+f,L=N+_+h,U=C_(l,l.VERTEX_SHADER,w),O=C_(l,l.FRAGMENT_SHADER,L);l.attachShader(A,U),l.attachShader(A,O),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(G){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(A)||"",J=l.getShaderInfoLog(U)||"",ne=l.getShaderInfoLog(O)||"",re=q.trim(),z=J.trim(),V=ne.trim();let W=!0,Se=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,U,O);else{const xe=D_(l,U,"vertex"),F=D_(l,O,"fragment");Lt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+re+`
`+xe+`
`+F)}else re!==""?ut("WebGLProgram: Program Info Log:",re):(z===""||V==="")&&(Se=!1);Se&&(G.diagnostics={runnable:W,programLog:re,vertexShader:{log:z,prefix:S},fragmentShader:{log:V,prefix:_}})}l.deleteShader(U),l.deleteShader(O),B=new xu(l,A),T=H2(l,A)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(A,D2)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=U2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=O,this}let nw=0;class iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new aw(e),i.set(e,s)),s}}class aw{constructor(e){this.id=nw++,this.code=e,this.usedTimes=0}}function rw(r,e,i,s,l,c,f){const h=new Bx,m=new iw,p=new Set,v=[],g=new Map,x=l.logarithmicDepthBuffer;let b=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function S(T,D,G,q,J){const ne=q.fog,re=J.geometry,z=T.isMeshStandardMaterial?q.environment:null,V=(T.isMeshStandardMaterial?i:e).get(T.envMap||z),W=V&&V.mapping===Ru?V.image.height:null,Se=E[T.type];T.precision!==null&&(b=l.getMaxPrecision(T.precision),b!==T.precision&&ut("WebGLProgram.getParameters:",T.precision,"not supported, using",b,"instead."));const xe=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,F=xe!==void 0?xe.length:0;let te=0;re.morphAttributes.position!==void 0&&(te=1),re.morphAttributes.normal!==void 0&&(te=2),re.morphAttributes.color!==void 0&&(te=3);let fe,Ee,Le,se;if(Se){const Ct=Yi[Se];fe=Ct.vertexShader,Ee=Ct.fragmentShader}else fe=T.vertexShader,Ee=T.fragmentShader,m.update(T),Le=m.getVertexShaderID(T),se=m.getFragmentShaderID(T);const ue=r.getRenderTarget(),De=r.state.buffers.depth.getReversed(),ke=J.isInstancedMesh===!0,He=J.isBatchedMesh===!0,ht=!!T.map,Zt=!!T.matcap,bt=!!V,xt=!!T.aoMap,Ot=!!T.lightMap,ft=!!T.bumpMap,rn=!!T.normalMap,X=!!T.displacementMap,en=!!T.emissiveMap,Rt=!!T.metalnessMap,It=!!T.roughnessMap,Qe=T.anisotropy>0,I=T.clearcoat>0,M=T.dispersion>0,Z=T.iridescence>0,ge=T.sheen>0,be=T.transmission>0,pe=Qe&&!!T.anisotropyMap,$e=I&&!!T.clearcoatMap,Ue=I&&!!T.clearcoatNormalMap,Ye=I&&!!T.clearcoatRoughnessMap,st=Z&&!!T.iridescenceMap,Ae=Z&&!!T.iridescenceThicknessMap,Re=ge&&!!T.sheenColorMap,Ge=ge&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,Ne=!!T.specularColorMap,pt=!!T.specularIntensityMap,Y=be&&!!T.transmissionMap,Pe=be&&!!T.thicknessMap,Ce=!!T.gradientMap,Be=!!T.alphaMap,Te=T.alphaTest>0,ye=!!T.alphaHash,we=!!T.extensions;let ot=Qi;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ot=r.toneMapping);const Ht={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:fe,fragmentShader:Ee,defines:T.defines,customVertexShaderID:Le,customFragmentShaderID:se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:b,batching:He,batchingColor:He&&J._colorsTexture!==null,instancing:ke,instancingColor:ke&&J.instanceColor!==null,instancingMorph:ke&&J.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:eo,alphaToCoverage:!!T.alphaToCoverage,map:ht,matcap:Zt,envMap:bt,envMapMode:bt&&V.mapping,envMapCubeUVHeight:W,aoMap:xt,lightMap:Ot,bumpMap:ft,normalMap:rn,displacementMap:X,emissiveMap:en,normalMapObjectSpace:rn&&T.normalMapType===Y1,normalMapTangentSpace:rn&&T.normalMapType===q1,metalnessMap:Rt,roughnessMap:It,anisotropy:Qe,anisotropyMap:pe,clearcoat:I,clearcoatMap:$e,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ye,dispersion:M,iridescence:Z,iridescenceMap:st,iridescenceThicknessMap:Ae,sheen:ge,sheenColorMap:Re,sheenRoughnessMap:Ge,specularMap:Ie,specularColorMap:Ne,specularIntensityMap:pt,transmission:be,transmissionMap:Y,thicknessMap:Pe,gradientMap:Ce,opaque:T.transparent===!1&&T.blending===Zs&&T.alphaToCoverage===!1,alphaMap:Be,alphaTest:Te,alphaHash:ye,combine:T.combine,mapUv:ht&&A(T.map.channel),aoMapUv:xt&&A(T.aoMap.channel),lightMapUv:Ot&&A(T.lightMap.channel),bumpMapUv:ft&&A(T.bumpMap.channel),normalMapUv:rn&&A(T.normalMap.channel),displacementMapUv:X&&A(T.displacementMap.channel),emissiveMapUv:en&&A(T.emissiveMap.channel),metalnessMapUv:Rt&&A(T.metalnessMap.channel),roughnessMapUv:It&&A(T.roughnessMap.channel),anisotropyMapUv:pe&&A(T.anisotropyMap.channel),clearcoatMapUv:$e&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&A(T.sheenRoughnessMap.channel),specularMapUv:Ie&&A(T.specularMap.channel),specularColorMapUv:Ne&&A(T.specularColorMap.channel),specularIntensityMapUv:pt&&A(T.specularIntensityMap.channel),transmissionMapUv:Y&&A(T.transmissionMap.channel),thicknessMapUv:Pe&&A(T.thicknessMap.channel),alphaMapUv:Be&&A(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(rn||Qe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!re.attributes.uv&&(ht||Be),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:De,skinning:J.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:te,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:ht&&T.map.isVideoTexture===!0&&wt.getTransfer(T.map.colorSpace)===Xt,decodeVideoTextureEmissive:en&&T.emissiveMap.isVideoTexture===!0&&wt.getTransfer(T.emissiveMap.colorSpace)===Xt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Aa,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:we&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&T.extensions.multiDraw===!0||He)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function _(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)D.push(G),D.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(N(D,T),w(D,T),D.push(r.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function N(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function w(T,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),T.push(h.mask)}function L(T){const D=E[T.type];let G;if(D){const q=Yi[D];G=bT.clone(q.uniforms)}else G=T.uniforms;return G}function U(T,D){let G=g.get(D);return G!==void 0?++G.usedTimes:(G=new tw(r,D,T,c),v.push(G),g.set(D,G)),G}function O(T){if(--T.usedTimes===0){const D=v.indexOf(T);v[D]=v[v.length-1],v.pop(),g.delete(T.cacheKey),T.destroy()}}function P(T){m.remove(T)}function B(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:L,acquireProgram:U,releaseProgram:O,releaseShaderCache:P,programs:v,dispose:B}}function sw(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function ow(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function P_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function z_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,x,b,E,A,S){let _=r[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:b,groupOrder:E,renderOrder:g.renderOrder,z:A,group:S},r[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=b,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=A,_.group=S),e++,_}function h(g,x,b,E,A,S){const _=f(g,x,b,E,A,S);b.transmission>0?s.push(_):b.transparent===!0?l.push(_):i.push(_)}function m(g,x,b,E,A,S){const _=f(g,x,b,E,A,S);b.transmission>0?s.unshift(_):b.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||ow),s.length>1&&s.sort(x||P_),l.length>1&&l.sort(x||P_)}function v(){for(let g=e,x=r.length;g<x;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function lw(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new z_,r.set(s,[f])):l>=c.length?(f=new z_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function cw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ce,color:new Dt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":i={color:new Dt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=i,i}}}function uw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let fw=0;function dw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hw(r){const e=new cw,i=uw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ce);const l=new ce,c=new fn,f=new fn;function h(p){let v=0,g=0,x=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let b=0,E=0,A=0,S=0,_=0,N=0,w=0,L=0,U=0,O=0,P=0;p.sort(dw);for(let T=0,D=p.length;T<D;T++){const G=p[T],q=G.color,J=G.intensity,ne=G.distance;let re=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===$s?re=G.shadow.map.texture:re=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=q.r*J,g+=q.g*J,x+=q.b*J;else if(G.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(G.sh.coefficients[z],J);P++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const V=G.shadow,W=i.get(G);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,s.directionalShadow[b]=W,s.directionalShadowMap[b]=re,s.directionalShadowMatrix[b]=G.shadow.matrix,N++}s.directional[b]=z,b++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(q).multiplyScalar(J),z.distance=ne,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,s.spot[A]=z;const V=G.shadow;if(G.map&&(s.spotLightMap[U]=G.map,U++,V.updateMatrices(G),G.castShadow&&O++),s.spotLightMatrix[A]=V.matrix,G.castShadow){const W=i.get(G);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,s.spotShadow[A]=W,s.spotShadowMap[A]=re,L++}A++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(q).multiplyScalar(J),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=z,S++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const V=G.shadow,W=i.get(G);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,s.pointShadow[E]=W,s.pointShadowMap[E]=re,s.pointShadowMatrix[E]=G.shadow.matrix,w++}s.point[E]=z,E++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(J),z.groundColor.copy(G.groundColor).multiplyScalar(J),s.hemi[_]=z,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const B=s.hash;(B.directionalLength!==b||B.pointLength!==E||B.spotLength!==A||B.rectAreaLength!==S||B.hemiLength!==_||B.numDirectionalShadows!==N||B.numPointShadows!==w||B.numSpotShadows!==L||B.numSpotMaps!==U||B.numLightProbes!==P)&&(s.directional.length=b,s.spot.length=A,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=L+U-O,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=P,B.directionalLength=b,B.pointLength=E,B.spotLength=A,B.rectAreaLength=S,B.hemiLength=_,B.numDirectionalShadows=N,B.numPointShadows=w,B.numSpotShadows=L,B.numSpotMaps=U,B.numLightProbes=P,s.version=fw++)}function m(p,v){let g=0,x=0,b=0,E=0,A=0;const S=v.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const w=p[_];if(w.isDirectionalLight){const L=s.directional[g];L.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),g++}else if(w.isSpotLight){const L=s.spot[b];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),b++}else if(w.isRectAreaLight){const L=s.rectArea[E];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),f.identity(),c.copy(w.matrixWorld),c.premultiply(S),f.extractRotation(c),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),E++}else if(w.isPointLight){const L=s.point[x];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),x++}else if(w.isHemisphereLight){const L=s.hemi[A];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(S),A++}}}return{setup:h,setupView:m,state:s}}function F_(r){const e=new hw(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function f(v){s.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function pw(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new F_(r),e.set(l,[h])):c>=f.length?(h=new F_(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gw=`uniform sampler2D shadow_pass;
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
}`,vw=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],_w=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],I_=new fn,fl=new ce,Mh=new ce;function xw(r,e,i){let s=new qx;const l=new Wt,c=new Wt,f=new un,h=new PT,m=new zT,p={},v=i.maxTextureSize,g={[vr]:$n,[$n]:vr,[Aa]:Aa},x=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:mw,fragmentShader:gw}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const E=new di;E.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ui(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let _=this.type;this.render=function(O,P,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;O.type===E1&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=pu);const T=r.getRenderTarget(),D=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),q=r.state;q.setBlending(wa),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const J=_!==this.type;J&&P.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(re=>re.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,re=O.length;ne<re;ne++){const z=O[ne],V=z.shadow;if(V===void 0){ut("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const W=V.getFrameExtents();if(l.multiply(W),c.copy(V.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/W.x),l.x=c.x*W.x,V.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/W.y),l.y=c.y*W.y,V.mapSize.y=c.y)),V.map===null||J===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===hl){if(z.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ji(l.x,l.y,{format:$s,type:Na,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new yl(l.x,l.y,Zi),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=La,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn}else{z.isPointLight?(V.map=new jx(l.x),V.map.depthTexture=new LT(l.x,$i)):(V.map=new Ji(l.x,l.y),V.map.depthTexture=new yl(l.x,l.y,$i)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=La;const xe=r.state.buffers.depth.getReversed();this.type===pu?(V.map.depthTexture.compareFunction=xe?Bp:Ip,V.map.depthTexture.minFilter=Hn,V.map.depthTexture.magFilter=Hn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn)}V.camera.updateProjectionMatrix()}const Se=V.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<Se;xe++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,xe),r.clear();else{xe===0&&(r.setRenderTarget(V.map),r.clear());const F=V.getViewport(xe);f.set(c.x*F.x,c.y*F.y,c.x*F.z,c.y*F.w),q.viewport(f)}if(z.isPointLight){const F=V.camera,te=V.matrix,fe=z.distance||F.far;fe!==F.far&&(F.far=fe,F.updateProjectionMatrix()),fl.setFromMatrixPosition(z.matrixWorld),F.position.copy(fl),Mh.copy(F.position),Mh.add(vw[xe]),F.up.copy(_w[xe]),F.lookAt(Mh),F.updateMatrixWorld(),te.makeTranslation(-fl.x,-fl.y,-fl.z),I_.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V._frustum.setFromProjectionMatrix(I_,F.coordinateSystem,F.reversedDepth)}else V.updateMatrices(z);s=V.getFrustum(),L(P,B,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===hl&&N(V,B),V.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(T,D,G)};function N(O,P){const B=e.update(A);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,b.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ji(l.x,l.y,{format:$s,type:Na})),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(P,null,B,x,A,null),b.uniforms.shadow_pass.value=O.mapPass.texture,b.uniforms.resolution.value=O.mapSize,b.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(P,null,B,b,A,null)}function w(O,P,B,T){let D=null;const G=B.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)D=G;else if(D=B.isPointLight===!0?m:h,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const q=D.uuid,J=P.uuid;let ne=p[q];ne===void 0&&(ne={},p[q]=ne);let re=ne[J];re===void 0&&(re=D.clone(),ne[J]=re,P.addEventListener("dispose",U)),D=re}if(D.visible=P.visible,D.wireframe=P.wireframe,T===hl?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:g[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,B.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const q=r.properties.get(D);q.light=B}return D}function L(O,P,B,T,D){if(O.visible===!1)return;if(O.layers.test(P.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===hl)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,O.matrixWorld);const J=e.update(O),ne=O.material;if(Array.isArray(ne)){const re=J.groups;for(let z=0,V=re.length;z<V;z++){const W=re[z],Se=ne[W.materialIndex];if(Se&&Se.visible){const xe=w(O,Se,T,D);O.onBeforeShadow(r,O,P,B,J,xe,W),r.renderBufferDirect(B,null,J,xe,O,W),O.onAfterShadow(r,O,P,B,J,xe,W)}}}else if(ne.visible){const re=w(O,ne,T,D);O.onBeforeShadow(r,O,P,B,J,re,null),r.renderBufferDirect(B,null,J,re,O,null),O.onAfterShadow(r,O,P,B,J,re,null)}}const q=O.children;for(let J=0,ne=q.length;J<ne;J++)L(q[J],P,B,T,D)}function U(O){O.target.removeEventListener("dispose",U);for(const B in p){const T=p[B],D=O.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}const yw={[Dh]:Uh,[Nh]:Ph,[Lh]:zh,[Qs]:Oh,[Uh]:Dh,[Ph]:Nh,[zh]:Lh,[Oh]:Qs};function Sw(r,e){function i(){let Y=!1;const Pe=new un;let Ce=null;const Be=new un(0,0,0,0);return{setMask:function(Te){Ce!==Te&&!Y&&(r.colorMask(Te,Te,Te,Te),Ce=Te)},setLocked:function(Te){Y=Te},setClear:function(Te,ye,we,ot,Ht){Ht===!0&&(Te*=ot,ye*=ot,we*=ot),Pe.set(Te,ye,we,ot),Be.equals(Pe)===!1&&(r.clearColor(Te,ye,we,ot),Be.copy(Pe))},reset:function(){Y=!1,Ce=null,Be.set(-1,0,0,0)}}}function s(){let Y=!1,Pe=!1,Ce=null,Be=null,Te=null;return{setReversed:function(ye){if(Pe!==ye){const we=e.get("EXT_clip_control");ye?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Pe=ye;const ot=Te;Te=null,this.setClear(ot)}},getReversed:function(){return Pe},setTest:function(ye){ye?ue(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(ye){Ce!==ye&&!Y&&(r.depthMask(ye),Ce=ye)},setFunc:function(ye){if(Pe&&(ye=yw[ye]),Be!==ye){switch(ye){case Dh:r.depthFunc(r.NEVER);break;case Uh:r.depthFunc(r.ALWAYS);break;case Nh:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case Lh:r.depthFunc(r.EQUAL);break;case Oh:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case zh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=ye}},setLocked:function(ye){Y=ye},setClear:function(ye){Te!==ye&&(Pe&&(ye=1-ye),r.clearDepth(ye),Te=ye)},reset:function(){Y=!1,Ce=null,Be=null,Te=null,Pe=!1}}}function l(){let Y=!1,Pe=null,Ce=null,Be=null,Te=null,ye=null,we=null,ot=null,Ht=null;return{setTest:function(Ct){Y||(Ct?ue(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(Ct){Pe!==Ct&&!Y&&(r.stencilMask(Ct),Pe=Ct)},setFunc:function(Ct,zn,wi){(Ce!==Ct||Be!==zn||Te!==wi)&&(r.stencilFunc(Ct,zn,wi),Ce=Ct,Be=zn,Te=wi)},setOp:function(Ct,zn,wi){(ye!==Ct||we!==zn||ot!==wi)&&(r.stencilOp(Ct,zn,wi),ye=Ct,we=zn,ot=wi)},setLocked:function(Ct){Y=Ct},setClear:function(Ct){Ht!==Ct&&(r.clearStencil(Ct),Ht=Ct)},reset:function(){Y=!1,Pe=null,Ce=null,Be=null,Te=null,ye=null,we=null,ot=null,Ht=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,b=[],E=null,A=!1,S=null,_=null,N=null,w=null,L=null,U=null,O=null,P=new Dt(0,0,0),B=0,T=!1,D=null,G=null,q=null,J=null,ne=null;const re=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=V>=2);let Se=null,xe={};const F=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),fe=new un().fromArray(F),Ee=new un().fromArray(te);function Le(Y,Pe,Ce,Be){const Te=new Uint8Array(4),ye=r.createTexture();r.bindTexture(Y,ye),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<Ce;we++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(Pe+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return ye}const se={};se[r.TEXTURE_2D]=Le(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=Le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=Le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=Le(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ue(r.DEPTH_TEST),f.setFunc(Qs),ft(!1),rn(kv),ue(r.CULL_FACE),xt(wa);function ue(Y){v[Y]!==!0&&(r.enable(Y),v[Y]=!0)}function De(Y){v[Y]!==!1&&(r.disable(Y),v[Y]=!1)}function ke(Y,Pe){return g[Y]!==Pe?(r.bindFramebuffer(Y,Pe),g[Y]=Pe,Y===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Pe),Y===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function He(Y,Pe){let Ce=b,Be=!1;if(Y){Ce=x.get(Pe),Ce===void 0&&(Ce=[],x.set(Pe,Ce));const Te=Y.textures;if(Ce.length!==Te.length||Ce[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,we=Te.length;ye<we;ye++)Ce[ye]=r.COLOR_ATTACHMENT0+ye;Ce.length=Te.length,Be=!0}}else Ce[0]!==r.BACK&&(Ce[0]=r.BACK,Be=!0);Be&&r.drawBuffers(Ce)}function ht(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const Zt={[Xr]:r.FUNC_ADD,[A1]:r.FUNC_SUBTRACT,[R1]:r.FUNC_REVERSE_SUBTRACT};Zt[C1]=r.MIN,Zt[w1]=r.MAX;const bt={[D1]:r.ZERO,[U1]:r.ONE,[N1]:r.SRC_COLOR,[Ch]:r.SRC_ALPHA,[I1]:r.SRC_ALPHA_SATURATE,[z1]:r.DST_COLOR,[O1]:r.DST_ALPHA,[L1]:r.ONE_MINUS_SRC_COLOR,[wh]:r.ONE_MINUS_SRC_ALPHA,[F1]:r.ONE_MINUS_DST_COLOR,[P1]:r.ONE_MINUS_DST_ALPHA,[B1]:r.CONSTANT_COLOR,[H1]:r.ONE_MINUS_CONSTANT_COLOR,[G1]:r.CONSTANT_ALPHA,[V1]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(Y,Pe,Ce,Be,Te,ye,we,ot,Ht,Ct){if(Y===wa){A===!0&&(De(r.BLEND),A=!1);return}if(A===!1&&(ue(r.BLEND),A=!0),Y!==T1){if(Y!==S||Ct!==T){if((_!==Xr||L!==Xr)&&(r.blendEquation(r.FUNC_ADD),_=Xr,L=Xr),Ct)switch(Y){case Zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rh:r.blendFunc(r.ONE,r.ONE);break;case Xv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Xv:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wv:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",Y);break}N=null,w=null,U=null,O=null,P.set(0,0,0),B=0,S=Y,T=Ct}return}Te=Te||Pe,ye=ye||Ce,we=we||Be,(Pe!==_||Te!==L)&&(r.blendEquationSeparate(Zt[Pe],Zt[Te]),_=Pe,L=Te),(Ce!==N||Be!==w||ye!==U||we!==O)&&(r.blendFuncSeparate(bt[Ce],bt[Be],bt[ye],bt[we]),N=Ce,w=Be,U=ye,O=we),(ot.equals(P)===!1||Ht!==B)&&(r.blendColor(ot.r,ot.g,ot.b,Ht),P.copy(ot),B=Ht),S=Y,T=!1}function Ot(Y,Pe){Y.side===Aa?De(r.CULL_FACE):ue(r.CULL_FACE);let Ce=Y.side===$n;Pe&&(Ce=!Ce),ft(Ce),Y.blending===Zs&&Y.transparent===!1?xt(wa):xt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Be=Y.stencilWrite;h.setTest(Be),Be&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),en(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function ft(Y){D!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),D=Y)}function rn(Y){Y!==b1?(ue(r.CULL_FACE),Y!==G&&(Y===kv?r.cullFace(r.BACK):Y===M1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),G=Y}function X(Y){Y!==q&&(z&&r.lineWidth(Y),q=Y)}function en(Y,Pe,Ce){Y?(ue(r.POLYGON_OFFSET_FILL),(J!==Pe||ne!==Ce)&&(r.polygonOffset(Pe,Ce),J=Pe,ne=Ce)):De(r.POLYGON_OFFSET_FILL)}function Rt(Y){Y?ue(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function It(Y){Y===void 0&&(Y=r.TEXTURE0+re-1),Se!==Y&&(r.activeTexture(Y),Se=Y)}function Qe(Y,Pe,Ce){Ce===void 0&&(Se===null?Ce=r.TEXTURE0+re-1:Ce=Se);let Be=xe[Ce];Be===void 0&&(Be={type:void 0,texture:void 0},xe[Ce]=Be),(Be.type!==Y||Be.texture!==Pe)&&(Se!==Ce&&(r.activeTexture(Ce),Se=Ce),r.bindTexture(Y,Pe||se[Y]),Be.type=Y,Be.texture=Pe)}function I(){const Y=xe[Se];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function ge(){try{r.texSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function be(){try{r.texSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function pe(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function $e(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ue(){try{r.texStorage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ye(){try{r.texStorage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function st(){try{r.texImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ae(){try{r.texImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Re(Y){fe.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),fe.copy(Y))}function Ge(Y){Ee.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Ee.copy(Y))}function Ie(Y,Pe){let Ce=p.get(Pe);Ce===void 0&&(Ce=new WeakMap,p.set(Pe,Ce));let Be=Ce.get(Y);Be===void 0&&(Be=r.getUniformBlockIndex(Pe,Y.name),Ce.set(Y,Be))}function Ne(Y,Pe){const Be=p.get(Pe).get(Y);m.get(Pe)!==Be&&(r.uniformBlockBinding(Pe,Be,Y.__bindingPointIndex),m.set(Pe,Be))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Se=null,xe={},g={},x=new WeakMap,b=[],E=null,A=!1,S=null,_=null,N=null,w=null,L=null,U=null,O=null,P=new Dt(0,0,0),B=0,T=!1,D=null,G=null,q=null,J=null,ne=null,fe.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ue,disable:De,bindFramebuffer:ke,drawBuffers:He,useProgram:ht,setBlending:xt,setMaterial:Ot,setFlipSided:ft,setCullFace:rn,setLineWidth:X,setPolygonOffset:en,setScissorTest:Rt,activeTexture:It,bindTexture:Qe,unbindTexture:I,compressedTexImage2D:M,compressedTexImage3D:Z,texImage2D:st,texImage3D:Ae,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:Ue,texStorage3D:Ye,texSubImage2D:ge,texSubImage3D:be,compressedTexSubImage2D:pe,compressedTexSubImage3D:$e,scissor:Re,viewport:Ge,reset:pt}}function bw(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Wt,v=new WeakMap;let g;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,M){return b?new OffscreenCanvas(I,M):Eu("canvas")}function A(I,M,Z){let ge=1;const be=Qe(I);if((be.width>Z||be.height>Z)&&(ge=Z/Math.max(be.width,be.height)),ge<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pe=Math.floor(ge*be.width),$e=Math.floor(ge*be.height);g===void 0&&(g=E(pe,$e));const Ue=M?E(pe,$e):g;return Ue.width=pe,Ue.height=$e,Ue.getContext("2d").drawImage(I,0,0,pe,$e),ut("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+pe+"x"+$e+")."),Ue}else return"data"in I&&ut("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),I;return I}function S(I){return I.generateMipmaps}function _(I){r.generateMipmap(I)}function N(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(I,M,Z,ge,be=!1){if(I!==null){if(r[I]!==void 0)return r[I];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pe=M;if(M===r.RED&&(Z===r.FLOAT&&(pe=r.R32F),Z===r.HALF_FLOAT&&(pe=r.R16F),Z===r.UNSIGNED_BYTE&&(pe=r.R8)),M===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pe=r.R8UI),Z===r.UNSIGNED_SHORT&&(pe=r.R16UI),Z===r.UNSIGNED_INT&&(pe=r.R32UI),Z===r.BYTE&&(pe=r.R8I),Z===r.SHORT&&(pe=r.R16I),Z===r.INT&&(pe=r.R32I)),M===r.RG&&(Z===r.FLOAT&&(pe=r.RG32F),Z===r.HALF_FLOAT&&(pe=r.RG16F),Z===r.UNSIGNED_BYTE&&(pe=r.RG8)),M===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pe=r.RG8UI),Z===r.UNSIGNED_SHORT&&(pe=r.RG16UI),Z===r.UNSIGNED_INT&&(pe=r.RG32UI),Z===r.BYTE&&(pe=r.RG8I),Z===r.SHORT&&(pe=r.RG16I),Z===r.INT&&(pe=r.RG32I)),M===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),Z===r.UNSIGNED_INT&&(pe=r.RGB32UI),Z===r.BYTE&&(pe=r.RGB8I),Z===r.SHORT&&(pe=r.RGB16I),Z===r.INT&&(pe=r.RGB32I)),M===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),Z===r.UNSIGNED_INT&&(pe=r.RGBA32UI),Z===r.BYTE&&(pe=r.RGBA8I),Z===r.SHORT&&(pe=r.RGBA16I),Z===r.INT&&(pe=r.RGBA32I)),M===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),M===r.RGBA){const $e=be?bu:wt.getTransfer(ge);Z===r.FLOAT&&(pe=r.RGBA32F),Z===r.HALF_FLOAT&&(pe=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(pe=$e===Xt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function L(I,M){let Z;return I?M===null||M===$i||M===_l?Z=r.DEPTH24_STENCIL8:M===Zi?Z=r.DEPTH32F_STENCIL8:M===vl&&(Z=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$i||M===_l?Z=r.DEPTH_COMPONENT24:M===Zi?Z=r.DEPTH_COMPONENT32F:M===vl&&(Z=r.DEPTH_COMPONENT16),Z}function U(I,M){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pn&&I.minFilter!==Hn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function O(I){const M=I.target;M.removeEventListener("dispose",O),B(M),M.isVideoTexture&&v.delete(M)}function P(I){const M=I.target;M.removeEventListener("dispose",P),D(M)}function B(I){const M=s.get(I);if(M.__webglInit===void 0)return;const Z=I.source,ge=x.get(Z);if(ge){const be=ge[M.__cacheKey];be.usedTimes--,be.usedTimes===0&&T(I),Object.keys(ge).length===0&&x.delete(Z)}s.remove(I)}function T(I){const M=s.get(I);r.deleteTexture(M.__webglTexture);const Z=I.source,ge=x.get(Z);delete ge[M.__cacheKey],f.memory.textures--}function D(I){const M=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(M.__webglFramebuffer[ge]))for(let be=0;be<M.__webglFramebuffer[ge].length;be++)r.deleteFramebuffer(M.__webglFramebuffer[ge][be]);else r.deleteFramebuffer(M.__webglFramebuffer[ge]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ge])}else{if(Array.isArray(M.__webglFramebuffer))for(let ge=0;ge<M.__webglFramebuffer.length;ge++)r.deleteFramebuffer(M.__webglFramebuffer[ge]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ge=0;ge<M.__webglColorRenderbuffer.length;ge++)M.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ge]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Z=I.textures;for(let ge=0,be=Z.length;ge<be;ge++){const pe=s.get(Z[ge]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),f.memory.textures--),s.remove(Z[ge])}s.remove(I)}let G=0;function q(){G=0}function J(){const I=G;return I>=l.maxTextures&&ut("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),G+=1,I}function ne(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function re(I,M){const Z=s.get(I);if(I.isVideoTexture&&Rt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const ge=I.image;if(ge===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,I,M);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+M)}function z(I,M){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){se(Z,I,M);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+M)}function V(I,M){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){se(Z,I,M);return}i.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+M)}function W(I,M){const Z=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){ue(Z,I,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+M)}const Se={[Bh]:r.REPEAT,[Ra]:r.CLAMP_TO_EDGE,[Hh]:r.MIRRORED_REPEAT},xe={[Pn]:r.NEAREST,[W1]:r.NEAREST_MIPMAP_NEAREST,[kc]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[qd]:r.LINEAR_MIPMAP_NEAREST,[qr]:r.LINEAR_MIPMAP_LINEAR},F={[Z1]:r.NEVER,[eT]:r.ALWAYS,[K1]:r.LESS,[Ip]:r.LEQUAL,[Q1]:r.EQUAL,[Bp]:r.GEQUAL,[J1]:r.GREATER,[$1]:r.NOTEQUAL};function te(I,M){if(M.type===Zi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Hn||M.magFilter===qd||M.magFilter===kc||M.magFilter===qr||M.minFilter===Hn||M.minFilter===qd||M.minFilter===kc||M.minFilter===qr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Se[M.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Se[M.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Se[M.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,xe[M.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,F[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==kc&&M.minFilter!==qr||M.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function fe(I,M){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",O));const ge=M.source;let be=x.get(ge);be===void 0&&(be={},x.set(ge,be));const pe=ne(M);if(pe!==I.__cacheKey){be[pe]===void 0&&(be[pe]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),be[pe].usedTimes++;const $e=be[I.__cacheKey];$e!==void 0&&(be[I.__cacheKey].usedTimes--,$e.usedTimes===0&&T(M)),I.__cacheKey=pe,I.__webglTexture=be[pe].texture}return Z}function Ee(I,M,Z){return Math.floor(Math.floor(I/Z)/M)}function Le(I,M,Z,ge){const pe=I.updateRanges;if(pe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,Z,ge,M.data);else{pe.sort((Ae,Re)=>Ae.start-Re.start);let $e=0;for(let Ae=1;Ae<pe.length;Ae++){const Re=pe[$e],Ge=pe[Ae],Ie=Re.start+Re.count,Ne=Ee(Ge.start,M.width,4),pt=Ee(Re.start,M.width,4);Ge.start<=Ie+1&&Ne===pt&&Ee(Ge.start+Ge.count-1,M.width,4)===Ne?Re.count=Math.max(Re.count,Ge.start+Ge.count-Re.start):(++$e,pe[$e]=Ge)}pe.length=$e+1;const Ue=r.getParameter(r.UNPACK_ROW_LENGTH),Ye=r.getParameter(r.UNPACK_SKIP_PIXELS),st=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ae=0,Re=pe.length;Ae<Re;Ae++){const Ge=pe[Ae],Ie=Math.floor(Ge.start/4),Ne=Math.ceil(Ge.count/4),pt=Ie%M.width,Y=Math.floor(Ie/M.width),Pe=Ne,Ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,pt,Y,Pe,Ce,Z,ge,M.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,st)}}function se(I,M,Z){let ge=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ge=r.TEXTURE_3D);const be=fe(I,M),pe=M.source;i.bindTexture(ge,I.__webglTexture,r.TEXTURE0+Z);const $e=s.get(pe);if(pe.version!==$e.__version||be===!0){i.activeTexture(r.TEXTURE0+Z);const Ue=wt.getPrimaries(wt.workingColorSpace),Ye=M.colorSpace===mr?null:wt.getPrimaries(M.colorSpace),st=M.colorSpace===mr||Ue===Ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Ae=A(M.image,!1,l.maxTextureSize);Ae=It(M,Ae);const Re=c.convert(M.format,M.colorSpace),Ge=c.convert(M.type);let Ie=w(M.internalFormat,Re,Ge,M.colorSpace,M.isVideoTexture);te(ge,M);let Ne;const pt=M.mipmaps,Y=M.isVideoTexture!==!0,Pe=$e.__version===void 0||be===!0,Ce=pe.dataReady,Be=U(M,Ae);if(M.isDepthTexture)Ie=L(M.format===Yr,M.type),Pe&&(Y?i.texStorage2D(r.TEXTURE_2D,1,Ie,Ae.width,Ae.height):i.texImage2D(r.TEXTURE_2D,0,Ie,Ae.width,Ae.height,0,Re,Ge,null));else if(M.isDataTexture)if(pt.length>0){Y&&Pe&&i.texStorage2D(r.TEXTURE_2D,Be,Ie,pt[0].width,pt[0].height);for(let Te=0,ye=pt.length;Te<ye;Te++)Ne=pt[Te],Y?Ce&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Re,Ge,Ne.data):i.texImage2D(r.TEXTURE_2D,Te,Ie,Ne.width,Ne.height,0,Re,Ge,Ne.data);M.generateMipmaps=!1}else Y?(Pe&&i.texStorage2D(r.TEXTURE_2D,Be,Ie,Ae.width,Ae.height),Ce&&Le(M,Ae,Re,Ge)):i.texImage2D(r.TEXTURE_2D,0,Ie,Ae.width,Ae.height,0,Re,Ge,Ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Y&&Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Ie,pt[0].width,pt[0].height,Ae.depth);for(let Te=0,ye=pt.length;Te<ye;Te++)if(Ne=pt[Te],M.format!==Hi)if(Re!==null)if(Y){if(Ce)if(M.layerUpdates.size>0){const we=m_(Ne.width,Ne.height,M.format,M.type);for(const ot of M.layerUpdates){const Ht=Ne.data.subarray(ot*we/Ne.data.BYTES_PER_ELEMENT,(ot+1)*we/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,ot,Ne.width,Ne.height,1,Re,Ht)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,Ae.depth,Re,Ne.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,Ie,Ne.width,Ne.height,Ae.depth,0,Ne.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ce&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,Ae.depth,Re,Ge,Ne.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,Ie,Ne.width,Ne.height,Ae.depth,0,Re,Ge,Ne.data)}else{Y&&Pe&&i.texStorage2D(r.TEXTURE_2D,Be,Ie,pt[0].width,pt[0].height);for(let Te=0,ye=pt.length;Te<ye;Te++)Ne=pt[Te],M.format!==Hi?Re!==null?Y?Ce&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Re,Ne.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,Ie,Ne.width,Ne.height,0,Ne.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ce&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Re,Ge,Ne.data):i.texImage2D(r.TEXTURE_2D,Te,Ie,Ne.width,Ne.height,0,Re,Ge,Ne.data)}else if(M.isDataArrayTexture)if(Y){if(Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Ie,Ae.width,Ae.height,Ae.depth),Ce)if(M.layerUpdates.size>0){const Te=m_(Ae.width,Ae.height,M.format,M.type);for(const ye of M.layerUpdates){const we=Ae.data.subarray(ye*Te/Ae.data.BYTES_PER_ELEMENT,(ye+1)*Te/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,Ae.width,Ae.height,1,Re,Ge,we)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Re,Ge,Ae.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,Ae.width,Ae.height,Ae.depth,0,Re,Ge,Ae.data);else if(M.isData3DTexture)Y?(Pe&&i.texStorage3D(r.TEXTURE_3D,Be,Ie,Ae.width,Ae.height,Ae.depth),Ce&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Re,Ge,Ae.data)):i.texImage3D(r.TEXTURE_3D,0,Ie,Ae.width,Ae.height,Ae.depth,0,Re,Ge,Ae.data);else if(M.isFramebufferTexture){if(Pe)if(Y)i.texStorage2D(r.TEXTURE_2D,Be,Ie,Ae.width,Ae.height);else{let Te=Ae.width,ye=Ae.height;for(let we=0;we<Be;we++)i.texImage2D(r.TEXTURE_2D,we,Ie,Te,ye,0,Re,Ge,null),Te>>=1,ye>>=1}}else if(pt.length>0){if(Y&&Pe){const Te=Qe(pt[0]);i.texStorage2D(r.TEXTURE_2D,Be,Ie,Te.width,Te.height)}for(let Te=0,ye=pt.length;Te<ye;Te++)Ne=pt[Te],Y?Ce&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Re,Ge,Ne):i.texImage2D(r.TEXTURE_2D,Te,Ie,Re,Ge,Ne);M.generateMipmaps=!1}else if(Y){if(Pe){const Te=Qe(Ae);i.texStorage2D(r.TEXTURE_2D,Be,Ie,Te.width,Te.height)}Ce&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Ge,Ae)}else i.texImage2D(r.TEXTURE_2D,0,Ie,Re,Ge,Ae);S(M)&&_(ge),$e.__version=pe.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function ue(I,M,Z){if(M.image.length!==6)return;const ge=fe(I,M),be=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Z);const pe=s.get(be);if(be.version!==pe.__version||ge===!0){i.activeTexture(r.TEXTURE0+Z);const $e=wt.getPrimaries(wt.workingColorSpace),Ue=M.colorSpace===mr?null:wt.getPrimaries(M.colorSpace),Ye=M.colorSpace===mr||$e===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const st=M.isCompressedTexture||M.image[0].isCompressedTexture,Ae=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let ye=0;ye<6;ye++)!st&&!Ae?Re[ye]=A(M.image[ye],!0,l.maxCubemapSize):Re[ye]=Ae?M.image[ye].image:M.image[ye],Re[ye]=It(M,Re[ye]);const Ge=Re[0],Ie=c.convert(M.format,M.colorSpace),Ne=c.convert(M.type),pt=w(M.internalFormat,Ie,Ne,M.colorSpace),Y=M.isVideoTexture!==!0,Pe=pe.__version===void 0||ge===!0,Ce=be.dataReady;let Be=U(M,Ge);te(r.TEXTURE_CUBE_MAP,M);let Te;if(st){Y&&Pe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,pt,Ge.width,Ge.height);for(let ye=0;ye<6;ye++){Te=Re[ye].mipmaps;for(let we=0;we<Te.length;we++){const ot=Te[we];M.format!==Hi?Ie!==null?Y?Ce&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,0,0,ot.width,ot.height,Ie,ot.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,pt,ot.width,ot.height,0,ot.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,0,0,ot.width,ot.height,Ie,Ne,ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,pt,ot.width,ot.height,0,Ie,Ne,ot.data)}}}else{if(Te=M.mipmaps,Y&&Pe){Te.length>0&&Be++;const ye=Qe(Re[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,pt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ae){Y?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Re[ye].width,Re[ye].height,Ie,Ne,Re[ye].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,Re[ye].width,Re[ye].height,0,Ie,Ne,Re[ye].data);for(let we=0;we<Te.length;we++){const Ht=Te[we].image[ye].image;Y?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,0,0,Ht.width,Ht.height,Ie,Ne,Ht.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,pt,Ht.width,Ht.height,0,Ie,Ne,Ht.data)}}else{Y?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ie,Ne,Re[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,Ie,Ne,Re[ye]);for(let we=0;we<Te.length;we++){const ot=Te[we];Y?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,0,0,Ie,Ne,ot.image[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,pt,Ie,Ne,ot.image[ye])}}}S(M)&&_(r.TEXTURE_CUBE_MAP),pe.__version=be.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function De(I,M,Z,ge,be,pe){const $e=c.convert(Z.format,Z.colorSpace),Ue=c.convert(Z.type),Ye=w(Z.internalFormat,$e,Ue,Z.colorSpace),st=s.get(M),Ae=s.get(Z);if(Ae.__renderTarget=M,!st.__hasExternalTextures){const Re=Math.max(1,M.width>>pe),Ge=Math.max(1,M.height>>pe);be===r.TEXTURE_3D||be===r.TEXTURE_2D_ARRAY?i.texImage3D(be,pe,Ye,Re,Ge,M.depth,0,$e,Ue,null):i.texImage2D(be,pe,Ye,Re,Ge,0,$e,Ue,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),en(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,be,Ae.__webglTexture,0,X(M)):(be===r.TEXTURE_2D||be>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,be,Ae.__webglTexture,pe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(I,M,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,I),M.depthBuffer){const ge=M.depthTexture,be=ge&&ge.isDepthTexture?ge.type:null,pe=L(M.stencilBuffer,be),$e=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;en(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(M),pe,M.width,M.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(M),pe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,pe,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$e,r.RENDERBUFFER,I)}else{const ge=M.textures;for(let be=0;be<ge.length;be++){const pe=ge[be],$e=c.convert(pe.format,pe.colorSpace),Ue=c.convert(pe.type),Ye=w(pe.internalFormat,$e,Ue,pe.colorSpace);en(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(M),Ye,M.width,M.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(M),Ye,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ye,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function He(I,M,Z){const ge=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=s.get(M.depthTexture);if(be.__renderTarget=M,(!be.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ge){if(be.__webglInit===void 0&&(be.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),be.__webglTexture===void 0){be.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,be.__webglTexture),te(r.TEXTURE_CUBE_MAP,M.depthTexture);const st=c.convert(M.depthTexture.format),Ae=c.convert(M.depthTexture.type);let Re;M.depthTexture.format===La?Re=r.DEPTH_COMPONENT24:M.depthTexture.format===Yr&&(Re=r.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Re,M.width,M.height,0,st,Ae,null)}}else re(M.depthTexture,0);const pe=be.__webglTexture,$e=X(M),Ue=ge?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,Ye=M.depthTexture.format===Yr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===La)en(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ye,Ue,pe,0,$e):r.framebufferTexture2D(r.FRAMEBUFFER,Ye,Ue,pe,0);else if(M.depthTexture.format===Yr)en(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ye,Ue,pe,0,$e):r.framebufferTexture2D(r.FRAMEBUFFER,Ye,Ue,pe,0);else throw new Error("Unknown depthTexture format")}function ht(I){const M=s.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const ge=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ge){const be=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ge.removeEventListener("dispose",be)};ge.addEventListener("dispose",be),M.__depthDisposeCallback=be}M.__boundDepthTexture=ge}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(Z)for(let ge=0;ge<6;ge++)He(M.__webglFramebuffer[ge],I,ge);else{const ge=I.texture.mipmaps;ge&&ge.length>0?He(M.__webglFramebuffer[0],I,0):He(M.__webglFramebuffer,I,0)}else if(Z){M.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ge]),M.__webglDepthbuffer[ge]===void 0)M.__webglDepthbuffer[ge]=r.createRenderbuffer(),ke(M.__webglDepthbuffer[ge],I,!1);else{const be=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,pe)}}else{const ge=I.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ke(M.__webglDepthbuffer,I,!1);else{const be=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,pe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(I,M,Z){const ge=s.get(I);M!==void 0&&De(ge.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&ht(I)}function bt(I){const M=I.texture,Z=s.get(I),ge=s.get(M);I.addEventListener("dispose",P);const be=I.textures,pe=I.isWebGLCubeRenderTarget===!0,$e=be.length>1;if($e||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=M.version,f.memory.textures++),pe){Z.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer[Ue]=[];for(let Ye=0;Ye<M.mipmaps.length;Ye++)Z.__webglFramebuffer[Ue][Ye]=r.createFramebuffer()}else Z.__webglFramebuffer[Ue]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ue=0;Ue<M.mipmaps.length;Ue++)Z.__webglFramebuffer[Ue]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if($e)for(let Ue=0,Ye=be.length;Ue<Ye;Ue++){const st=s.get(be[Ue]);st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&en(I)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ue=0;Ue<be.length;Ue++){const Ye=be[Ue];Z.__webglColorRenderbuffer[Ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ue]);const st=c.convert(Ye.format,Ye.colorSpace),Ae=c.convert(Ye.type),Re=w(Ye.internalFormat,st,Ae,Ye.colorSpace,I.isXRRenderTarget===!0),Ge=X(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,Re,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(Z.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),te(r.TEXTURE_CUBE_MAP,M);for(let Ue=0;Ue<6;Ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ye=0;Ye<M.mipmaps.length;Ye++)De(Z.__webglFramebuffer[Ue][Ye],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ye);else De(Z.__webglFramebuffer[Ue],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(M)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if($e){for(let Ue=0,Ye=be.length;Ue<Ye;Ue++){const st=be[Ue],Ae=s.get(st);let Re=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Re,Ae.__webglTexture),te(Re,st),De(Z.__webglFramebuffer,I,st,r.COLOR_ATTACHMENT0+Ue,Re,0),S(st)&&_(Re)}i.unbindTexture()}else{let Ue=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ue=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,ge.__webglTexture),te(Ue,M),M.mipmaps&&M.mipmaps.length>0)for(let Ye=0;Ye<M.mipmaps.length;Ye++)De(Z.__webglFramebuffer[Ye],I,M,r.COLOR_ATTACHMENT0,Ue,Ye);else De(Z.__webglFramebuffer,I,M,r.COLOR_ATTACHMENT0,Ue,0);S(M)&&_(Ue),i.unbindTexture()}I.depthBuffer&&ht(I)}function xt(I){const M=I.textures;for(let Z=0,ge=M.length;Z<ge;Z++){const be=M[Z];if(S(be)){const pe=N(I),$e=s.get(be).__webglTexture;i.bindTexture(pe,$e),_(pe),i.unbindTexture()}}}const Ot=[],ft=[];function rn(I){if(I.samples>0){if(en(I)===!1){const M=I.textures,Z=I.width,ge=I.height;let be=r.COLOR_BUFFER_BIT;const pe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$e=s.get(I),Ue=M.length>1;if(Ue)for(let st=0;st<M.length;st++)i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ye=I.texture.mipmaps;Ye&&Ye.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let st=0;st<M.length;st++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(be|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(be|=r.STENCIL_BUFFER_BIT)),Ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$e.__webglColorRenderbuffer[st]);const Ae=s.get(M[st]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,be,r.NEAREST),m===!0&&(Ot.length=0,ft.length=0,Ot.push(r.COLOR_ATTACHMENT0+st),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ot.push(pe),ft.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ft)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ot))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ue)for(let st=0;st<M.length;st++){i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,$e.__webglColorRenderbuffer[st]);const Ae=s.get(M[st]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.TEXTURE_2D,Ae,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const M=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function X(I){return Math.min(l.maxSamples,I.samples)}function en(I){const M=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Rt(I){const M=f.render.frame;v.get(I)!==M&&(v.set(I,M),I.update())}function It(I,M){const Z=I.colorSpace,ge=I.format,be=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==eo&&Z!==mr&&(wt.getTransfer(Z)===Xt?(ge!==Hi||be!==Ai)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",Z)),M}function Qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=q,this.setTexture2D=re,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=Zt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=De,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Mw(r,e){function i(s,l=mr){let c;const f=wt.getTransfer(l);if(s===Ai)return r.UNSIGNED_BYTE;if(s===Lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Op)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ux)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Nx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===wx)return r.BYTE;if(s===Dx)return r.SHORT;if(s===vl)return r.UNSIGNED_SHORT;if(s===Np)return r.INT;if(s===$i)return r.UNSIGNED_INT;if(s===Zi)return r.FLOAT;if(s===Na)return r.HALF_FLOAT;if(s===Lx)return r.ALPHA;if(s===Ox)return r.RGB;if(s===Hi)return r.RGBA;if(s===La)return r.DEPTH_COMPONENT;if(s===Yr)return r.DEPTH_STENCIL;if(s===Px)return r.RED;if(s===Pp)return r.RED_INTEGER;if(s===$s)return r.RG;if(s===zp)return r.RG_INTEGER;if(s===Fp)return r.RGBA_INTEGER;if(s===mu||s===gu||s===vu||s===_u)if(f===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gh||s===Vh||s===kh||s===Xh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Gh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wh||s===jh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Wh||s===jh)return f===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===qh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Yh)return c.COMPRESSED_R11_EAC;if(s===Zh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Kh)return c.COMPRESSED_RG11_EAC;if(s===Qh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Jh||s===$h||s===ep||s===tp||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===cp||s===up||s===fp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Jh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$h)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ep)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===tp)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===np)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ip)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ap)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rp)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sp)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===op)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===lp)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cp)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===up)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fp)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dp||s===hp||s===pp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===dp)return f===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mp||s===gp||s===vp||s===_p)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===mp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===gp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_p)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_l?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const Ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tw=`
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

}`;class Aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Zx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ea({vertexShader:Ew,fragmentShader:Tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new wu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rw extends so{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,g=null,x=null,b=null,E=null;const A=typeof XRWebGLBinding<"u",S=new Aw,_={},N=i.getContextAttributes();let w=null,L=null;const U=[],O=[],P=new Wt;let B=null;const T=new Ti;T.viewport=new un;const D=new Ti;D.viewport=new un;const G=[T,D],q=new FT;let J=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ue=U[se];return ue===void 0&&(ue=new gh,U[se]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(se){let ue=U[se];return ue===void 0&&(ue=new gh,U[se]=ue),ue.getGripSpace()},this.getHand=function(se){let ue=U[se];return ue===void 0&&(ue=new gh,U[se]=ue),ue.getHandSpace()};function re(se){const ue=O.indexOf(se.inputSource);if(ue===-1)return;const De=U[ue];De!==void 0&&(De.update(se.inputSource,se.frame,p||f),De.dispatchEvent({type:se.type,data:se.inputSource}))}function z(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",V);for(let se=0;se<U.length;se++){const ue=O[se];ue!==null&&(O[se]=null,U[se].disconnect(ue))}J=null,ne=null,S.reset();for(const se in _)delete _[se];e.setRenderTarget(w),b=null,x=null,g=null,l=null,L=null,Le.stop(),s.isPresenting=!1,e.setPixelRatio(B),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(w=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",z),l.addEventListener("inputsourceschange",V),N.xrCompatible!==!0&&await i.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,ke=null,He=null;N.depth&&(He=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=N.stencil?Yr:La,ke=N.stencil?_l:$i);const ht={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(ht),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Ji(x.textureWidth,x.textureHeight,{format:Hi,type:Ai,depthTexture:new yl(x.textureWidth,x.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const De={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),L=new Ji(b.framebufferWidth,b.framebufferHeight,{format:Hi,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Le.setContext(l),Le.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function V(se){for(let ue=0;ue<se.removed.length;ue++){const De=se.removed[ue],ke=O.indexOf(De);ke>=0&&(O[ke]=null,U[ke].disconnect(De))}for(let ue=0;ue<se.added.length;ue++){const De=se.added[ue];let ke=O.indexOf(De);if(ke===-1){for(let ht=0;ht<U.length;ht++)if(ht>=O.length){O.push(De),ke=ht;break}else if(O[ht]===null){O[ht]=De,ke=ht;break}if(ke===-1)break}const He=U[ke];He&&He.connect(De)}}const W=new ce,Se=new ce;function xe(se,ue,De){W.setFromMatrixPosition(ue.matrixWorld),Se.setFromMatrixPosition(De.matrixWorld);const ke=W.distanceTo(Se),He=ue.projectionMatrix.elements,ht=De.projectionMatrix.elements,Zt=He[14]/(He[10]-1),bt=He[14]/(He[10]+1),xt=(He[9]+1)/He[5],Ot=(He[9]-1)/He[5],ft=(He[8]-1)/He[0],rn=(ht[8]+1)/ht[0],X=Zt*ft,en=Zt*rn,Rt=ke/(-ft+rn),It=Rt*-ft;if(ue.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(It),se.translateZ(Rt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),He[10]===-1)se.projectionMatrix.copy(ue.projectionMatrix),se.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Qe=Zt+Rt,I=bt+Rt,M=X-It,Z=en+(ke-It),ge=xt*bt/I*Qe,be=Ot*bt/I*Qe;se.projectionMatrix.makePerspective(M,Z,ge,be,Qe,I),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function F(se,ue){ue===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ue.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let ue=se.near,De=se.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(De=S.depthFar)),q.near=D.near=T.near=ue,q.far=D.far=T.far=De,(J!==q.near||ne!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),J=q.near,ne=q.far),q.layers.mask=se.layers.mask|6,T.layers.mask=q.layers.mask&3,D.layers.mask=q.layers.mask&5;const ke=se.parent,He=q.cameras;F(q,ke);for(let ht=0;ht<He.length;ht++)F(He[ht],ke);He.length===2?xe(q,T,D):q.projectionMatrix.copy(T.projectionMatrix),te(se,q,ke)};function te(se,ue,De){De===null?se.matrix.copy(ue.matrixWorld):(se.matrix.copy(De.matrixWorld),se.matrix.invert(),se.matrix.multiply(ue.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ue.projectionMatrix),se.projectionMatrixInverse.copy(ue.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=xp*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&b===null))return m},this.setFoveation=function(se){m=se,x!==null&&(x.fixedFoveation=se),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(se){return _[se]};let fe=null;function Ee(se,ue){if(v=ue.getViewerPose(p||f),E=ue,v!==null){const De=v.views;b!==null&&(e.setRenderTargetFramebuffer(L,b.framebuffer),e.setRenderTarget(L));let ke=!1;De.length!==q.cameras.length&&(q.cameras.length=0,ke=!0);for(let bt=0;bt<De.length;bt++){const xt=De[bt];let Ot=null;if(b!==null)Ot=b.getViewport(xt);else{const rn=g.getViewSubImage(x,xt);Ot=rn.viewport,bt===0&&(e.setRenderTargetTextures(L,rn.colorTexture,rn.depthStencilTexture),e.setRenderTarget(L))}let ft=G[bt];ft===void 0&&(ft=new Ti,ft.layers.enable(bt),ft.viewport=new un,G[bt]=ft),ft.matrix.fromArray(xt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(xt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),bt===0&&(q.matrix.copy(ft.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ke===!0&&q.cameras.push(ft)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=s.getBinding();const bt=g.getDepthInformation(De[0]);bt&&bt.isValid&&bt.texture&&S.init(bt,l.renderState)}if(He&&He.includes("camera-access")&&A){e.state.unbindTexture(),g=s.getBinding();for(let bt=0;bt<De.length;bt++){const xt=De[bt].camera;if(xt){let Ot=_[xt];Ot||(Ot=new Zx,_[xt]=Ot);const ft=g.getCameraImage(xt);Ot.sourceTexture=ft}}}}for(let De=0;De<U.length;De++){const ke=O[De],He=U[De];ke!==null&&He!==void 0&&He.update(ke,ue,p||f)}fe&&fe(se,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Le=new Qx;Le.setAnimationLoop(Ee),this.setAnimationLoop=function(se){fe=se},this.dispose=function(){}}}const Vr=new Oa,Cw=new fn;function ww(r,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,kx(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,N,w,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&b(S,_,L)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),A(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,N,w):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===$n&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===$n&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const N=e.get(_),w=N.envMap,L=N.envMapRotation;w&&(S.envMap.value=w,Vr.copy(L),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),S.envMapRotation.value.setFromMatrix4(Cw.makeRotationFromEuler(Vr)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,N,w){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*N,S.scale.value=w*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function b(S,_,N){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const N=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Dw(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,w){const L=w.program;s.uniformBlockBinding(N,L)}function p(N,w){let L=l[N.id];L===void 0&&(E(N),L=v(N),l[N.id]=L,N.addEventListener("dispose",S));const U=w.program;s.updateUBOMapping(N,U);const O=e.render.frame;c[N.id]!==O&&(x(N),c[N.id]=O)}function v(N){const w=g();N.__bindingPointIndex=w;const L=r.createBuffer(),U=N.__size,O=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,U,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,L),L}function g(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const w=l[N.id],L=N.uniforms,U=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let O=0,P=L.length;O<P;O++){const B=Array.isArray(L[O])?L[O]:[L[O]];for(let T=0,D=B.length;T<D;T++){const G=B[T];if(b(G,O,T,U)===!0){const q=G.__offset,J=Array.isArray(G.value)?G.value:[G.value];let ne=0;for(let re=0;re<J.length;re++){const z=J[re],V=A(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,q+ne,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,ne),ne+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(N,w,L,U){const O=N.value,P=w+"_"+L;if(U[P]===void 0)return typeof O=="number"||typeof O=="boolean"?U[P]=O:U[P]=O.clone(),!0;{const B=U[P];if(typeof O=="number"||typeof O=="boolean"){if(B!==O)return U[P]=O,!0}else if(B.equals(O)===!1)return B.copy(O),!0}return!1}function E(N){const w=N.uniforms;let L=0;const U=16;for(let P=0,B=w.length;P<B;P++){const T=Array.isArray(w[P])?w[P]:[w[P]];for(let D=0,G=T.length;D<G;D++){const q=T[D],J=Array.isArray(q.value)?q.value:[q.value];for(let ne=0,re=J.length;ne<re;ne++){const z=J[ne],V=A(z),W=L%U,Se=W%V.boundary,xe=W+Se;L+=Se,xe!==0&&U-xe<V.storage&&(L+=U-xe),q.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=L,L+=V.storage}}}const O=L%U;return O>0&&(L+=U-O),N.__size=L,N.__cache={},this}function A(N){const w={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(w.boundary=4,w.storage=4):N.isVector2?(w.boundary=8,w.storage=8):N.isVector3||N.isColor?(w.boundary=16,w.storage=12):N.isVector4?(w.boundary=16,w.storage=16):N.isMatrix3?(w.boundary=48,w.storage=48):N.isMatrix4?(w.boundary=64,w.storage=64):N.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",N),w}function S(N){const w=N.target;w.removeEventListener("dispose",S);const L=f.indexOf(w.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function _(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const Uw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function Nw(){return qi===null&&(qi=new CT(Uw,16,16,$s,Na),qi.name="DFG_LUT",qi.minFilter=Hn,qi.magFilter=Hn,qi.wrapS=Ra,qi.wrapT=Ra,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class Lw{constructor(e={}){const{canvas:i=tT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:b=Ai}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const A=b,S=new Set([Fp,zp,Pp]),_=new Set([Ai,$i,vl,_l,Lp,Op]),N=new Uint32Array(4),w=new Int32Array(4);let L=null,U=null;const O=[],P=[];let B=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=Ei;let G=0,q=0,J=null,ne=-1,re=null;const z=new un,V=new un;let W=null;const Se=new Dt(0);let xe=0,F=i.width,te=i.height,fe=1,Ee=null,Le=null;const se=new un(0,0,F,te),ue=new un(0,0,F,te);let De=!1;const ke=new qx;let He=!1,ht=!1;const Zt=new fn,bt=new ce,xt=new un,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function rn(){return J===null?fe:1}let X=s;function en(C,K){return i.getContext(C,K)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Up}`),i.addEventListener("webglcontextlost",ot,!1),i.addEventListener("webglcontextrestored",Ht,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),X===null){const K="webgl2";if(X=en(K,C),X===null)throw en(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Lt("WebGLRenderer: "+C.message),C}let Rt,It,Qe,I,M,Z,ge,be,pe,$e,Ue,Ye,st,Ae,Re,Ge,Ie,Ne,pt,Y,Pe,Ce,Be,Te;function ye(){Rt=new NC(X),Rt.init(),Ce=new Mw(X,Rt),It=new MC(X,Rt,e,Ce),Qe=new Sw(X,Rt),It.reversedDepthBuffer&&x&&Qe.buffers.depth.setReversed(!0),I=new PC(X),M=new sw,Z=new bw(X,Rt,Qe,M,It,Ce,I),ge=new TC(T),be=new UC(T),pe=new BT(X),Be=new SC(X,pe),$e=new LC(X,pe,I,Be),Ue=new FC(X,$e,pe,I),pt=new zC(X,It,Z),Ge=new EC(M),Ye=new rw(T,ge,be,Rt,It,Be,Ge),st=new ww(T,M),Ae=new lw,Re=new pw(Rt),Ne=new yC(T,ge,be,Qe,Ue,E,m),Ie=new xw(T,Ue,It),Te=new Dw(X,I,It,Qe),Y=new bC(X,Rt,I),Pe=new OC(X,Rt,I),I.programs=Ye.programs,T.capabilities=It,T.extensions=Rt,T.properties=M,T.renderLists=Ae,T.shadowMap=Ie,T.state=Qe,T.info=I}ye(),A!==Ai&&(B=new BC(A,i.width,i.height,l,c));const we=new Rw(T,X);this.xr=we,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=Rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(F,te,!1))},this.getSize=function(C){return C.set(F,te)},this.setSize=function(C,K,de=!0){if(we.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,te=K,i.width=Math.floor(C*fe),i.height=Math.floor(K*fe),de===!0&&(i.style.width=C+"px",i.style.height=K+"px"),B!==null&&B.setSize(i.width,i.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(F*fe,te*fe).floor()},this.setDrawingBufferSize=function(C,K,de){F=C,te=K,fe=de,i.width=Math.floor(C*de),i.height=Math.floor(K*de),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(A===Ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(se)},this.setViewport=function(C,K,de,oe){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,K,de,oe),Qe.viewport(z.copy(se).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(ue)},this.setScissor=function(C,K,de,oe){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,K,de,oe),Qe.scissor(V.copy(ue).multiplyScalar(fe).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){Qe.setScissorTest(De=C)},this.setOpaqueSort=function(C){Ee=C},this.setTransparentSort=function(C){Le=C},this.getClearColor=function(C){return C.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,de=!0){let oe=0;if(C){let $=!1;if(J!==null){const Oe=J.texture.format;$=S.has(Oe)}if($){const Oe=J.texture.type,Ve=_.has(Oe),ze=Ne.getClearColor(),Xe=Ne.getClearAlpha(),Ze=ze.r,it=ze.g,Ke=ze.b;Ve?(N[0]=Ze,N[1]=it,N[2]=Ke,N[3]=Xe,X.clearBufferuiv(X.COLOR,0,N)):(w[0]=Ze,w[1]=it,w[2]=Ke,w[3]=Xe,X.clearBufferiv(X.COLOR,0,w))}else oe|=X.COLOR_BUFFER_BIT}K&&(oe|=X.DEPTH_BUFFER_BIT),de&&(oe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ot,!1),i.removeEventListener("webglcontextrestored",Ht,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),Ne.dispose(),Ae.dispose(),Re.dispose(),M.dispose(),ge.dispose(),be.dispose(),Ue.dispose(),Be.dispose(),Te.dispose(),Ye.dispose(),we.dispose(),we.removeEventListener("sessionstart",$r),we.removeEventListener("sessionend",uo),Gi.stop()};function ot(C){C.preventDefault(),Kv("WebGLRenderer: Context Lost."),D=!0}function Ht(){Kv("WebGLRenderer: Context Restored."),D=!1;const C=I.autoReset,K=Ie.enabled,de=Ie.autoUpdate,oe=Ie.needsUpdate,$=Ie.type;ye(),I.autoReset=C,Ie.enabled=K,Ie.autoUpdate=de,Ie.needsUpdate=oe,Ie.type=$}function Ct(C){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function zn(C){const K=C.target;K.removeEventListener("dispose",zn),wi(K)}function wi(C){wl(C),M.remove(C)}function wl(C){const K=M.get(C).programs;K!==void 0&&(K.forEach(function(de){Ye.releaseProgram(de)}),C.isShaderMaterial&&Ye.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,de,oe,$,Oe){K===null&&(K=Ot);const Ve=$.isMesh&&$.matrixWorld.determinant()<0,ze=_r(C,K,de,oe,$);Qe.setMaterial(oe,Ve);let Xe=de.index,Ze=1;if(oe.wireframe===!0){if(Xe=$e.getWireframeAttribute(de),Xe===void 0)return;Ze=2}const it=de.drawRange,Ke=de.attributes.position;let at=it.start*Ze,Pt=(it.start+it.count)*Ze;Oe!==null&&(at=Math.max(at,Oe.start*Ze),Pt=Math.min(Pt,(Oe.start+Oe.count)*Ze)),Xe!==null?(at=Math.max(at,0),Pt=Math.min(Pt,Xe.count)):Ke!=null&&(at=Math.max(at,0),Pt=Math.min(Pt,Ke.count));const tn=Pt-at;if(tn<0||tn===1/0)return;Be.setup($,oe,ze,de,Xe);let Qt,Bt=Y;if(Xe!==null&&(Qt=pe.get(Xe),Bt=Pe,Bt.setIndex(Qt)),$.isMesh)oe.wireframe===!0?(Qe.setLineWidth(oe.wireframeLinewidth*rn()),Bt.setMode(X.LINES)):Bt.setMode(X.TRIANGLES);else if($.isLine){let et=oe.linewidth;et===void 0&&(et=1),Qe.setLineWidth(et*rn()),$.isLineSegments?Bt.setMode(X.LINES):$.isLineLoop?Bt.setMode(X.LINE_LOOP):Bt.setMode(X.LINE_STRIP)}else $.isPoints?Bt.setMode(X.POINTS):$.isSprite&&Bt.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)xl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))Bt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const et=$._multiDrawStarts,zt=$._multiDrawCounts,lt=$._multiDrawCount,An=Xe?pe.get(Xe).bytesPerElement:1,ta=M.get(oe).currentProgram.getUniforms();for(let Rn=0;Rn<lt;Rn++)ta.setValue(X,"_gl_DrawID",Rn),Bt.render(et[Rn]/An,zt[Rn])}else if($.isInstancedMesh)Bt.renderInstances(at,tn,$.count);else if(de.isInstancedBufferGeometry){const et=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,zt=Math.min(de.instanceCount,et);Bt.renderInstances(at,tn,zt)}else Bt.render(at,tn)};function lo(C,K,de){C.transparent===!0&&C.side===Aa&&C.forceSinglePass===!1?(C.side=$n,C.needsUpdate=!0,ts(C,K,de),C.side=vr,C.needsUpdate=!0,ts(C,K,de),C.side=Aa):ts(C,K,de)}this.compile=function(C,K,de=null){de===null&&(de=C),U=Re.get(de),U.init(K),P.push(U),de.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(U.pushLight($),$.castShadow&&U.pushShadow($))}),C!==de&&C.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(U.pushLight($),$.castShadow&&U.pushShadow($))}),U.setupLights();const oe=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Oe=$.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const ze=Oe[Ve];lo(ze,de,$),oe.add(ze)}else lo(Oe,de,$),oe.add(Oe)}),U=P.pop(),oe},this.compileAsync=function(C,K,de=null){const oe=this.compile(C,K,de);return new Promise($=>{function Oe(){if(oe.forEach(function(Ve){M.get(Ve).currentProgram.isReady()&&oe.delete(Ve)}),oe.size===0){$(C);return}setTimeout(Oe,10)}Rt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Jr=null;function co(C){Jr&&Jr(C)}function $r(){Gi.stop()}function uo(){Gi.start()}const Gi=new Qx;Gi.setAnimationLoop(co),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(C){Jr=C,we.setAnimationLoop(C),C===null?Gi.stop():Gi.start()},we.addEventListener("sessionstart",$r),we.addEventListener("sessionend",uo),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const de=we.enabled===!0&&we.isPresenting===!0,oe=B!==null&&(J===null||de)&&B.begin(T,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(K),K=we.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,K,J),U=Re.get(C,P.length),U.init(K),P.push(U),Zt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ke.setFromProjectionMatrix(Zt,Ki,K.reversedDepth),ht=this.localClippingEnabled,He=Ge.init(this.clippingPlanes,ht),L=Ae.get(C,O.length),L.init(),O.push(L),we.enabled===!0&&we.isPresenting===!0){const Ve=T.xr.getDepthSensingMesh();Ve!==null&&hi(Ve,K,-1/0,T.sortObjects)}hi(C,K,0,T.sortObjects),L.finish(),T.sortObjects===!0&&L.sort(Ee,Le),ft=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ft&&Ne.addToRenderList(L,C),this.info.render.frame++,He===!0&&Ge.beginShadows();const $=U.state.shadowsArray;if(Ie.render($,C,K),He===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&B.hasRenderPass())===!1){const Ve=L.opaque,ze=L.transmissive;if(U.setupLights(),K.isArrayCamera){const Xe=K.cameras;if(ze.length>0)for(let Ze=0,it=Xe.length;Ze<it;Ze++){const Ke=Xe[Ze];Tn(Ve,ze,C,Ke)}ft&&Ne.render(C);for(let Ze=0,it=Xe.length;Ze<it;Ze++){const Ke=Xe[Ze];dn(L,C,Ke,Ke.viewport)}}else ze.length>0&&Tn(Ve,ze,C,K),ft&&Ne.render(C),dn(L,C,K)}J!==null&&q===0&&(Z.updateMultisampleRenderTarget(J),Z.updateRenderTargetMipmap(J)),oe&&B.end(T),C.isScene===!0&&C.onAfterRender(T,C,K),Be.resetDefaultState(),ne=-1,re=null,P.pop(),P.length>0?(U=P[P.length-1],He===!0&&Ge.setGlobalState(T.clippingPlanes,U.state.camera)):U=null,O.pop(),O.length>0?L=O[O.length-1]:L=null};function hi(C,K,de,oe){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)de=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)U.pushLight(C),C.castShadow&&U.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){oe&&xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Zt);const Ve=Ue.update(C),ze=C.material;ze.visible&&L.push(C,Ve,ze,de,xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const Ve=Ue.update(C),ze=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xt.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),xt.copy(Ve.boundingSphere.center)),xt.applyMatrix4(C.matrixWorld).applyMatrix4(Zt)),Array.isArray(ze)){const Xe=Ve.groups;for(let Ze=0,it=Xe.length;Ze<it;Ze++){const Ke=Xe[Ze],at=ze[Ke.materialIndex];at&&at.visible&&L.push(C,Ve,at,de,xt.z,Ke)}}else ze.visible&&L.push(C,Ve,ze,de,xt.z,null)}}const Oe=C.children;for(let Ve=0,ze=Oe.length;Ve<ze;Ve++)hi(Oe[Ve],K,de,oe)}function dn(C,K,de,oe){const{opaque:$,transmissive:Oe,transparent:Ve}=C;U.setupLightsView(de),He===!0&&Ge.setGlobalState(T.clippingPlanes,de),oe&&Qe.viewport(z.copy(oe)),$.length>0&&Di($,K,de),Oe.length>0&&Di(Oe,K,de),Ve.length>0&&Di(Ve,K,de),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Tn(C,K,de,oe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[oe.id]===void 0){const at=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[oe.id]=new Ji(1,1,{generateMipmaps:!0,type:at?Na:Ai,minFilter:qr,samples:It.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Oe=U.state.transmissionRenderTarget[oe.id],Ve=oe.viewport||z;Oe.setSize(Ve.z*T.transmissionResolutionScale,Ve.w*T.transmissionResolutionScale);const ze=T.getRenderTarget(),Xe=T.getActiveCubeFace(),Ze=T.getActiveMipmapLevel();T.setRenderTarget(Oe),T.getClearColor(Se),xe=T.getClearAlpha(),xe<1&&T.setClearColor(16777215,.5),T.clear(),ft&&Ne.render(de);const it=T.toneMapping;T.toneMapping=Qi;const Ke=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),U.setupLightsView(oe),He===!0&&Ge.setGlobalState(T.clippingPlanes,oe),Di(C,de,oe),Z.updateMultisampleRenderTarget(Oe),Z.updateRenderTargetMipmap(Oe),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Pt=0,tn=K.length;Pt<tn;Pt++){const Qt=K[Pt],{object:Bt,geometry:et,material:zt,group:lt}=Qt;if(zt.side===Aa&&Bt.layers.test(oe.layers)){const An=zt.side;zt.side=$n,zt.needsUpdate=!0,es(Bt,de,oe,et,zt,lt),zt.side=An,zt.needsUpdate=!0,at=!0}}at===!0&&(Z.updateMultisampleRenderTarget(Oe),Z.updateRenderTargetMipmap(Oe))}T.setRenderTarget(ze,Xe,Ze),T.setClearColor(Se,xe),Ke!==void 0&&(oe.viewport=Ke),T.toneMapping=it}function Di(C,K,de){const oe=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Oe=C.length;$<Oe;$++){const Ve=C[$],{object:ze,geometry:Xe,group:Ze}=Ve;let it=Ve.material;it.allowOverride===!0&&oe!==null&&(it=oe),ze.layers.test(de.layers)&&es(ze,K,de,Xe,it,Ze)}}function es(C,K,de,oe,$,Oe){C.onBeforeRender(T,K,de,oe,$,Oe),C.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(T,K,de,oe,C,Oe),$.transparent===!0&&$.side===Aa&&$.forceSinglePass===!1?($.side=$n,$.needsUpdate=!0,T.renderBufferDirect(de,K,oe,$,C,Oe),$.side=vr,$.needsUpdate=!0,T.renderBufferDirect(de,K,oe,$,C,Oe),$.side=Aa):T.renderBufferDirect(de,K,oe,$,C,Oe),C.onAfterRender(T,K,de,oe,$,Oe)}function ts(C,K,de){K.isScene!==!0&&(K=Ot);const oe=M.get(C),$=U.state.lights,Oe=U.state.shadowsArray,Ve=$.state.version,ze=Ye.getParameters(C,$.state,Oe,K,de),Xe=Ye.getProgramCacheKey(ze);let Ze=oe.programs;oe.environment=C.isMeshStandardMaterial?K.environment:null,oe.fog=K.fog,oe.envMap=(C.isMeshStandardMaterial?be:ge).get(C.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",zn),Ze=new Map,oe.programs=Ze);let it=Ze.get(Xe);if(it!==void 0){if(oe.currentProgram===it&&oe.lightsStateVersion===Ve)return fo(C,ze),it}else ze.uniforms=Ye.getUniforms(C),C.onBeforeCompile(ze,T),it=Ye.acquireProgram(ze,Xe),Ze.set(Xe,it),oe.uniforms=ze.uniforms;const Ke=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=Ge.uniform),fo(C,ze),oe.needsLights=za(C),oe.lightsStateVersion=Ve,oe.needsLights&&(Ke.ambientLightColor.value=$.state.ambient,Ke.lightProbe.value=$.state.probe,Ke.directionalLights.value=$.state.directional,Ke.directionalLightShadows.value=$.state.directionalShadow,Ke.spotLights.value=$.state.spot,Ke.spotLightShadows.value=$.state.spotShadow,Ke.rectAreaLights.value=$.state.rectArea,Ke.ltc_1.value=$.state.rectAreaLTC1,Ke.ltc_2.value=$.state.rectAreaLTC2,Ke.pointLights.value=$.state.point,Ke.pointLightShadows.value=$.state.pointShadow,Ke.hemisphereLights.value=$.state.hemi,Ke.directionalShadowMap.value=$.state.directionalShadowMap,Ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ke.spotShadowMap.value=$.state.spotShadowMap,Ke.spotLightMatrix.value=$.state.spotLightMatrix,Ke.spotLightMap.value=$.state.spotLightMap,Ke.pointShadowMap.value=$.state.pointShadowMap,Ke.pointShadowMatrix.value=$.state.pointShadowMatrix),oe.currentProgram=it,oe.uniformsList=null,it}function Dl(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=xu.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function fo(C,K){const de=M.get(C);de.outputColorSpace=K.outputColorSpace,de.batching=K.batching,de.batchingColor=K.batchingColor,de.instancing=K.instancing,de.instancingColor=K.instancingColor,de.instancingMorph=K.instancingMorph,de.skinning=K.skinning,de.morphTargets=K.morphTargets,de.morphNormals=K.morphNormals,de.morphColors=K.morphColors,de.morphTargetsCount=K.morphTargetsCount,de.numClippingPlanes=K.numClippingPlanes,de.numIntersection=K.numClipIntersection,de.vertexAlphas=K.vertexAlphas,de.vertexTangents=K.vertexTangents,de.toneMapping=K.toneMapping}function _r(C,K,de,oe,$){K.isScene!==!0&&(K=Ot),Z.resetTextureUnits();const Oe=K.fog,Ve=oe.isMeshStandardMaterial?K.environment:null,ze=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:eo,Xe=(oe.isMeshStandardMaterial?be:ge).get(oe.envMap||Ve),Ze=oe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,it=!!de.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ke=!!de.morphAttributes.position,at=!!de.morphAttributes.normal,Pt=!!de.morphAttributes.color;let tn=Qi;oe.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(tn=T.toneMapping);const Qt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Bt=Qt!==void 0?Qt.length:0,et=M.get(oe),zt=U.state.lights;if(He===!0&&(ht===!0||C!==re)){const wn=C===re&&oe.id===ne;Ge.setState(oe,C,wn)}let lt=!1;oe.version===et.__version?(et.needsLights&&et.lightsStateVersion!==zt.state.version||et.outputColorSpace!==ze||$.isBatchedMesh&&et.batching===!1||!$.isBatchedMesh&&et.batching===!0||$.isBatchedMesh&&et.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&et.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&et.instancing===!1||!$.isInstancedMesh&&et.instancing===!0||$.isSkinnedMesh&&et.skinning===!1||!$.isSkinnedMesh&&et.skinning===!0||$.isInstancedMesh&&et.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&et.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&et.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&et.instancingMorph===!1&&$.morphTexture!==null||et.envMap!==Xe||oe.fog===!0&&et.fog!==Oe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ge.numPlanes||et.numIntersection!==Ge.numIntersection)||et.vertexAlphas!==Ze||et.vertexTangents!==it||et.morphTargets!==Ke||et.morphNormals!==at||et.morphColors!==Pt||et.toneMapping!==tn||et.morphTargetsCount!==Bt)&&(lt=!0):(lt=!0,et.__version=oe.version);let An=et.currentProgram;lt===!0&&(An=ts(oe,K,$));let ta=!1,Rn=!1,pi=!1;const Gt=An.getUniforms(),Cn=et.uniforms;if(Qe.useProgram(An.program)&&(ta=!0,Rn=!0,pi=!0),oe.id!==ne&&(ne=oe.id,Rn=!0),ta||re!==C){Qe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Gt.setValue(X,"projectionMatrix",C.projectionMatrix),Gt.setValue(X,"viewMatrix",C.matrixWorldInverse);const Dn=Gt.map.cameraPosition;Dn!==void 0&&Dn.setValue(X,bt.setFromMatrixPosition(C.matrixWorld)),It.logarithmicDepthBuffer&&Gt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Gt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),re!==C&&(re=C,Rn=!0,pi=!0)}if(et.needsLights&&(zt.state.directionalShadowMap.length>0&&Gt.setValue(X,"directionalShadowMap",zt.state.directionalShadowMap,Z),zt.state.spotShadowMap.length>0&&Gt.setValue(X,"spotShadowMap",zt.state.spotShadowMap,Z),zt.state.pointShadowMap.length>0&&Gt.setValue(X,"pointShadowMap",zt.state.pointShadowMap,Z)),$.isSkinnedMesh){Gt.setOptional(X,$,"bindMatrix"),Gt.setOptional(X,$,"bindMatrixInverse");const wn=$.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Gt.setValue(X,"boneTexture",wn.boneTexture,Z))}$.isBatchedMesh&&(Gt.setOptional(X,$,"batchingTexture"),Gt.setValue(X,"batchingTexture",$._matricesTexture,Z),Gt.setOptional(X,$,"batchingIdTexture"),Gt.setValue(X,"batchingIdTexture",$._indirectTexture,Z),Gt.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&Gt.setValue(X,"batchingColorTexture",$._colorsTexture,Z));const _n=de.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&pt.update($,de,An),(Rn||et.receiveShadow!==$.receiveShadow)&&(et.receiveShadow=$.receiveShadow,Gt.setValue(X,"receiveShadow",$.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Cn.envMap.value=Xe,Cn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&K.environment!==null&&(Cn.envMapIntensity.value=K.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=Nw()),Rn&&(Gt.setValue(X,"toneMappingExposure",T.toneMappingExposure),et.needsLights&&ho(Cn,pi),Oe&&oe.fog===!0&&st.refreshFogUniforms(Cn,Oe),st.refreshMaterialUniforms(Cn,oe,fe,te,U.state.transmissionRenderTarget[C.id]),xu.upload(X,Dl(et),Cn,Z)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(xu.upload(X,Dl(et),Cn,Z),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Gt.setValue(X,"center",$.center),Gt.setValue(X,"modelViewMatrix",$.modelViewMatrix),Gt.setValue(X,"normalMatrix",$.normalMatrix),Gt.setValue(X,"modelMatrix",$.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const wn=oe.uniformsGroups;for(let Dn=0,ns=wn.length;Dn<ns;Dn++){const Ui=wn[Dn];Te.update(Ui,An),Te.bind(Ui,An)}}return An}function ho(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function za(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,K,de){const oe=M.get(C);oe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=K,M.get(C.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:de,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const de=M.get(C);de.__webglFramebuffer=K,de.__useDefaultFramebuffer=K===void 0};const Fa=X.createFramebuffer();this.setRenderTarget=function(C,K=0,de=0){J=C,G=K,q=de;let oe=null,$=!1,Oe=!1;if(C){const ze=M.get(C);if(ze.__useDefaultFramebuffer!==void 0){Qe.bindFramebuffer(X.FRAMEBUFFER,ze.__webglFramebuffer),z.copy(C.viewport),V.copy(C.scissor),W=C.scissorTest,Qe.viewport(z),Qe.scissor(V),Qe.setScissorTest(W),ne=-1;return}else if(ze.__webglFramebuffer===void 0)Z.setupRenderTarget(C);else if(ze.__hasExternalTextures)Z.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(ze.__boundDepthTexture!==it){if(it!==null&&M.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const Ze=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[K])?oe=Ze[K][de]:oe=Ze[K],$=!0):C.samples>0&&Z.useMultisampledRTT(C)===!1?oe=M.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?oe=Ze[de]:oe=Ze,z.copy(C.viewport),V.copy(C.scissor),W=C.scissorTest}else z.copy(se).multiplyScalar(fe).floor(),V.copy(ue).multiplyScalar(fe).floor(),W=De;if(de!==0&&(oe=Fa),Qe.bindFramebuffer(X.FRAMEBUFFER,oe)&&Qe.drawBuffers(C,oe),Qe.viewport(z),Qe.scissor(V),Qe.setScissorTest(W),$){const ze=M.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,ze.__webglTexture,de)}else if(Oe){const ze=K;for(let Xe=0;Xe<C.textures.length;Xe++){const Ze=M.get(C.textures[Xe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,de,ze)}}else if(C!==null&&de!==0){const ze=M.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ze.__webglTexture,de)}ne=-1},this.readRenderTargetPixels=function(C,K,de,oe,$,Oe,Ve,ze=0){if(!(C&&C.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){Qe.bindFramebuffer(X.FRAMEBUFFER,Xe);try{const Ze=C.textures[ze],it=Ze.format,Ke=Ze.type;if(!It.textureFormatReadable(it)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Ke)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-oe&&de>=0&&de<=C.height-$&&(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ze),X.readPixels(K,de,oe,$,Ce.convert(it),Ce.convert(Ke),Oe))}finally{const Ze=J!==null?M.get(J).__webglFramebuffer:null;Qe.bindFramebuffer(X.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(C,K,de,oe,$,Oe,Ve,ze=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(K>=0&&K<=C.width-oe&&de>=0&&de<=C.height-$){Qe.bindFramebuffer(X.FRAMEBUFFER,Xe);const Ze=C.textures[ze],it=Ze.format,Ke=Ze.type;if(!It.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,at),X.bufferData(X.PIXEL_PACK_BUFFER,Oe.byteLength,X.STREAM_READ),C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ze),X.readPixels(K,de,oe,$,Ce.convert(it),Ce.convert(Ke),0);const Pt=J!==null?M.get(J).__webglFramebuffer:null;Qe.bindFramebuffer(X.FRAMEBUFFER,Pt);const tn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await nT(X,tn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,at),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Oe),X.deleteBuffer(at),X.deleteSync(tn),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,de=0){const oe=Math.pow(2,-de),$=Math.floor(C.image.width*oe),Oe=Math.floor(C.image.height*oe),Ve=K!==null?K.x:0,ze=K!==null?K.y:0;Z.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,de,0,0,Ve,ze,$,Oe),Qe.unbindTexture()};const xr=X.createFramebuffer(),Ia=X.createFramebuffer();this.copyTextureToTexture=function(C,K,de=null,oe=null,$=0,Oe=null){Oe===null&&($!==0?(xl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=$,$=0):Oe=0);let Ve,ze,Xe,Ze,it,Ke,at,Pt,tn;const Qt=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(de!==null)Ve=de.max.x-de.min.x,ze=de.max.y-de.min.y,Xe=de.isBox3?de.max.z-de.min.z:1,Ze=de.min.x,it=de.min.y,Ke=de.isBox3?de.min.z:0;else{const _n=Math.pow(2,-$);Ve=Math.floor(Qt.width*_n),ze=Math.floor(Qt.height*_n),C.isDataArrayTexture?Xe=Qt.depth:C.isData3DTexture?Xe=Math.floor(Qt.depth*_n):Xe=1,Ze=0,it=0,Ke=0}oe!==null?(at=oe.x,Pt=oe.y,tn=oe.z):(at=0,Pt=0,tn=0);const Bt=Ce.convert(K.format),et=Ce.convert(K.type);let zt;K.isData3DTexture?(Z.setTexture3D(K,0),zt=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Z.setTexture2DArray(K,0),zt=X.TEXTURE_2D_ARRAY):(Z.setTexture2D(K,0),zt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const lt=X.getParameter(X.UNPACK_ROW_LENGTH),An=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ta=X.getParameter(X.UNPACK_SKIP_PIXELS),Rn=X.getParameter(X.UNPACK_SKIP_ROWS),pi=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Qt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ze),X.pixelStorei(X.UNPACK_SKIP_ROWS,it),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ke);const Gt=C.isDataArrayTexture||C.isData3DTexture,Cn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const _n=M.get(C),wn=M.get(K),Dn=M.get(_n.__renderTarget),ns=M.get(wn.__renderTarget);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let Ui=0;Ui<Xe;Ui++)Gt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,M.get(C).__webglTexture,$,Ke+Ui),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,M.get(K).__webglTexture,Oe,tn+Ui)),X.blitFramebuffer(Ze,it,Ve,ze,at,Pt,Ve,ze,X.DEPTH_BUFFER_BIT,X.NEAREST);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||M.has(C)){const _n=M.get(C),wn=M.get(K);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,xr),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ia);for(let Dn=0;Dn<Xe;Dn++)Gt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,_n.__webglTexture,$,Ke+Dn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,_n.__webglTexture,$),Cn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,wn.__webglTexture,Oe,tn+Dn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,wn.__webglTexture,Oe),$!==0?X.blitFramebuffer(Ze,it,Ve,ze,at,Pt,Ve,ze,X.COLOR_BUFFER_BIT,X.NEAREST):Cn?X.copyTexSubImage3D(zt,Oe,at,Pt,tn+Dn,Ze,it,Ve,ze):X.copyTexSubImage2D(zt,Oe,at,Pt,Ze,it,Ve,ze);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Cn?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(zt,Oe,at,Pt,tn,Ve,ze,Xe,Bt,et,Qt.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(zt,Oe,at,Pt,tn,Ve,ze,Xe,Bt,Qt.data):X.texSubImage3D(zt,Oe,at,Pt,tn,Ve,ze,Xe,Bt,et,Qt):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Oe,at,Pt,Ve,ze,Bt,et,Qt.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Oe,at,Pt,Qt.width,Qt.height,Bt,Qt.data):X.texSubImage2D(X.TEXTURE_2D,Oe,at,Pt,Ve,ze,Bt,et,Qt);X.pixelStorei(X.UNPACK_ROW_LENGTH,lt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,An),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ta),X.pixelStorei(X.UNPACK_SKIP_ROWS,Rn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,pi),Oe===0&&K.generateMipmaps&&X.generateMipmap(zt),Qe.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&Z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Z.setTextureCube(C,0):C.isData3DTexture?Z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Z.setTexture2DArray(C,0):Z.setTexture2D(C,0),Qe.unbindTexture()},this.resetState=function(){G=0,q=0,J=null,Qe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}function Ow(){const r=ee.useRef(null),e=ee.useRef(null),i=ee.useRef(null),s=ee.useRef(null),l=ee.useRef(null),c=ee.useRef(null),f=ee.useRef(0),h=ee.useRef(null),m=ee.useRef(null),[p,v]=ee.useState(!1),[g,x]=ee.useState("galaxy"),[b,E]=ee.useState(null),A=ee.useCallback(()=>{if(!r.current)return;const U=new RT;U.background=new Dt(657935),i.current=U;const O=new Ti(75,r.current.clientWidth/r.current.clientHeight,.1,1e3);O.position.z=50,s.current=O;const P=new Lw({antialias:!0});P.setSize(r.current.clientWidth,r.current.clientHeight),P.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.current.appendChild(P.domElement),e.current=P,S(U),_(U);const B=()=>{!r.current||!O||!P||(O.aspect=r.current.clientWidth/r.current.clientHeight,O.updateProjectionMatrix(),P.setSize(r.current.clientWidth,r.current.clientHeight))};return window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B)}},[]),S=U=>{const P=new Float32Array(15e3),B=new Float32Array(5e3*3),T=new Float32Array(5e3),D=new Dt(54527),G=new Dt(11167487),q=new Dt(16737962);for(let z=0;z<5e3;z++){const V=Math.random()*40,W=V*.5,Se=z%3/3*Math.PI*2,xe=(Math.random()-.5)*(V*.3),F=(Math.random()-.5)*(V*.3),te=(Math.random()-.5)*(V*.3);P[z*3]=Math.cos(Se+W)*V+xe,P[z*3+1]=F,P[z*3+2]=Math.sin(Se+W)*V+te;const fe=D.clone();fe.lerp(G,V/40),Math.random()>.8&&fe.lerp(q,.5),B[z*3]=fe.r,B[z*3+1]=fe.g,B[z*3+2]=fe.b,T[z]=Math.random()*2+.5}const J=new di;J.setAttribute("position",new fi(P,3)),J.setAttribute("color",new fi(B,3)),J.setAttribute("size",new fi(T,1));const ne=new Yx({size:.5,vertexColors:!0,transparent:!0,opacity:.8,blending:Rh,sizeAttenuation:!0}),re=new NT(J,ne);re.visible=!0,U.add(re),h.current=re},_=U=>{const O=new pl,P=64,B=8,T=60,D=new Wr({color:54527}),G=new Wr({color:11167487}),q=new Wr({color:65416,transparent:!0,opacity:.6}),J=new Vp(.4,16,16);for(let ne=0;ne<P;ne++){const re=ne/P,z=(re-.5)*T,V=re*Math.PI*4,W=Math.cos(V)*B,Se=Math.sin(V)*B,xe=new ui(J,D);xe.position.set(W,z,Se),xe.userData={baseY:z,index:ne,strand:1},O.add(xe);const F=Math.cos(V+Math.PI)*B,te=Math.sin(V+Math.PI)*B,fe=new ui(J,G);if(fe.position.set(F,z,te),fe.userData={baseY:z,index:ne,strand:2},O.add(fe),ne%2===0){const Ee=new Gp(.15,.15,B*2,8),Le=new ui(Ee,q.clone());Le.position.set(0,z,0),Le.rotation.z=Math.PI/2,Le.rotation.y=V,Le.userData={baseScale:1,index:ne},O.add(Le)}}O.visible=!1,O.position.y=0,U.add(O),m.current=O},N=async()=>{try{const U=await navigator.mediaDevices.getUserMedia({audio:!0}),O=new AudioContext,P=O.createMediaStreamSource(U),B=O.createAnalyser();B.fftSize=256,B.smoothingTimeConstant=.8,P.connect(B),c.current=O,l.current=B,v(!0),E(null)}catch(U){E("Microphone access denied. Please allow microphone access to use the visualizer."),console.error("Audio error:",U)}},w=()=>{c.current&&(c.current.close(),c.current=null,l.current=null),v(!1)},L=ee.useCallback(()=>{if(!i.current||!s.current||!e.current)return;const U=Date.now()*.001;let O=new Uint8Array(128),P=0,B=0,T=0,D=0;if(l.current?(l.current.getByteFrequencyData(O),P=O.reduce((G,q)=>G+q,0)/O.length/255,B=O.slice(0,10).reduce((G,q)=>G+q,0)/10/255,T=O.slice(10,50).reduce((G,q)=>G+q,0)/40/255,D=O.slice(50,128).reduce((G,q)=>G+q,0)/78/255):(P=.3+Math.sin(U*2)*.2,B=.4+Math.sin(U*1.5)*.3,T=.3+Math.sin(U*3)*.2,D=.2+Math.sin(U*5)*.15),h.current&&g==="galaxy"){h.current.visible=!0,m.current&&(m.current.visible=!1);const G=h.current.geometry.attributes.position.array,q=h.current.geometry.attributes.color.array;for(let J=0;J<G.length/3;J++){const ne=J*3,re=G[ne],z=G[ne+1],V=G[ne+2],W=Math.sqrt(re*re+V*V),Se=B*5,xe=Math.atan2(V,re),F=Math.floor((xe+Math.PI)/(Math.PI*2)*128)%128,te=l.current?O[F]/255:.5+Math.sin(U*2+J*.01)*.3;G[ne+1]=z+Math.sin(U*2+W*.1)*te*Se;const fe=.5+P*.5;q[ne]=Math.min(1,q[ne]*fe+D*.3),q[ne+1]=Math.min(1,q[ne+1]*fe+T*.2),q[ne+2]=Math.min(1,q[ne+2]*fe+B*.2)}h.current.geometry.attributes.position.needsUpdate=!0,h.current.geometry.attributes.color.needsUpdate=!0,h.current.rotation.y+=.002+B*.01,s.current.position.y=Math.sin(U*.5)*10+P*10,s.current.lookAt(0,0,0)}m.current&&g==="dna"&&(m.current.visible=!0,h.current&&(h.current.visible=!1),m.current.rotation.y+=.01+B*.02,m.current.children.forEach(G=>{if(G instanceof ui){const q=G.userData;if(q.strand){const J=Math.floor(q.index/64*128)%128,ne=l.current?O[J]/255:.5+Math.sin(U*3+q.index*.1)*.3,re=1+ne*1.5;if(G.scale.setScalar(re),G.material instanceof Wr){const z=(q.strand===1?.5:.75)+ne*.1;G.material.color.setHSL(z,1,.5+ne*.3)}}else if(q.baseScale!==void 0){const J=1+T*.5;G.scale.y=J,G.material instanceof Wr&&(G.material.opacity=.3+D*.7)}}}),s.current.position.x=Math.sin(U*.3)*30,s.current.position.z=Math.cos(U*.3)*30,s.current.position.y=Math.sin(U*.2)*10,s.current.lookAt(0,0,0)),e.current.render(i.current,s.current),f.current=requestAnimationFrame(L)},[g]);return ee.useEffect(()=>{const U=A();return()=>{U?.(),f.current&&cancelAnimationFrame(f.current),e.current&&r.current&&(r.current.removeChild(e.current.domElement),e.current.dispose()),w()}},[A]),ee.useEffect(()=>(L(),()=>{f.current&&cancelAnimationFrame(f.current)}),[L]),H.jsxs("div",{className:"min-h-screen flex flex-col",children:[H.jsxs("header",{className:"p-4 flex items-center justify-between z-10 relative",children:[H.jsxs(io,{to:"/",className:"inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors",children:[H.jsx(Dp,{className:"w-4 h-4"}),"Back"]}),H.jsxs("h1",{className:"text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-red bg-clip-text text-transparent flex items-center gap-2",children:[H.jsx(xx,{className:"w-5 h-5 text-accent-purple"}),"Audio Visualizer"]}),H.jsx("div",{className:"w-16"})," "]}),H.jsxs("div",{className:"px-4 pb-4 flex flex-wrap items-center justify-center gap-4 z-10 relative",children:[H.jsxs("div",{className:"flex items-center bg-bg-card rounded-full p-1 border border-text-muted/20",children:[H.jsxs("button",{onClick:()=>x("galaxy"),className:Bi("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",g==="galaxy"?"bg-accent-cyan/20 text-accent-cyan":"text-text-secondary hover:text-text-primary"),children:[H.jsx(v1,{className:"w-4 h-4"}),"Galaxy"]}),H.jsxs("button",{onClick:()=>x("dna"),className:Bi("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",g==="dna"?"bg-accent-purple/20 text-accent-purple":"text-text-secondary hover:text-text-primary"),children:[H.jsx(KE,{className:"w-4 h-4"}),"DNA Helix"]})]}),H.jsx("button",{onClick:p?w:N,className:Bi("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border",p?"bg-accent-green/20 text-accent-green border-accent-green/30":"bg-bg-card text-text-secondary border-text-muted/20 hover:text-text-primary hover:border-text-muted/40"),children:p?H.jsxs(H.Fragment,{children:[H.jsx(a1,{className:"w-4 h-4 animate-pulse"}),"Listening..."]}):H.jsxs(H.Fragment,{children:[H.jsx(n1,{className:"w-4 h-4"}),"Enable Mic"]})})]}),b&&H.jsx("div",{className:"px-4 pb-4 z-10 relative",children:H.jsx("div",{className:"max-w-md mx-auto bg-accent-red/10 border border-accent-red/30 rounded-lg p-3 text-accent-red text-sm text-center",children:b})}),!p&&!b&&H.jsx("div",{className:"px-4 pb-2 z-10 relative",children:H.jsx("p",{className:"text-center text-text-muted text-sm",children:"Demo mode - Enable mic for real audio visualization"})}),H.jsx("div",{ref:r,className:"flex-1 relative"})]})}const fu=[{id:"1",minutesBefore:90,duration:15,title:"Season & Prep",component:"all",description:"Season the steak, make the chimichurri",details:["Remove ribeye from fridge, season all sides with 1 tsp kosher salt per pound","Leave uncovered on wire rack at room temperature","Finely chop ½ cup parsley and ¼ cup cilantro","Mix herbs with minced garlic, vinegar, oregano, red pepper flakes, salt","Stir in ½ cup olive oil, set aside"]},{id:"2",minutesBefore:75,duration:20,title:"Boil Potatoes",component:"potatoes",description:"Get those spuds tender",details:["Add 1.5 lbs baby potatoes to pot with cold water","Add 1 tbsp kosher salt","Bring to boil, then simmer 15–20 min until fork-tender","Preheat oven to 450°F with sheet pan inside"]},{id:"3",minutesBefore:55,duration:5,title:"Drain & Dry",component:"potatoes",description:"Let potatoes steam off",details:["Drain potatoes in colander","Let steam dry for 5 minutes","Mix 3 tbsp olive oil + 2 tbsp melted butter"]},{id:"4",minutesBefore:50,duration:15,title:"Smash & Roast",component:"potatoes",description:"Get crispy edges going",details:["Brush hot pan with half the oil-butter","Arrange potatoes with space between","Smash to ½ inch thick with glass bottom","Brush tops, season with salt & pepper","Roast at 450°F for 25–30 min total"]},{id:"5",minutesBefore:35,duration:10,title:"Rotate Pan",component:"potatoes",description:"Even browning time",details:["Rotate sheet pan 180°","Continue roasting until golden"]},{id:"6",minutesBefore:25,duration:5,title:"Heat Cast Iron",component:"steak",description:"Get it screaming hot",details:["Place cast iron over high heat","Let preheat 5 full minutes until smoking","Smash 3 garlic cloves","Have butter, thyme, rosemary ready"]},{id:"7",minutesBefore:20,duration:5,title:"Sear Side One",component:"steak",description:"Build that beautiful crust",details:["Add 2 tbsp avocado oil to pan","Lay ribeye away from you","Sear 4–5 min without moving","Check potatoes—should be golden"]},{id:"8",minutesBefore:15,duration:5,title:"Flip & Baste",component:"steak",description:"Butter bath time",details:["Flip the ribeye","Add 3 tbsp butter, garlic, thyme, rosemary","Tilt pan and baste continuously 3–4 min","Pull at 120–125°F for medium-rare","Brush potatoes with garlic butter, 2 more min"]},{id:"9",minutesBefore:10,duration:8,title:"Rest & Garnish",component:"all",description:"Patience pays off",details:["Transfer steak to cutting board","Rest 5–8 minutes (don't skip!)","Remove potatoes from oven","Top with flaky salt, parsley, chives"]},{id:"10",minutesBefore:2,duration:2,title:"Slice & Serve",component:"all",description:"The grand finale",details:["Slice ribeye against the grain","Drizzle with pan juices","Finish with flaky salt","Spoon chimichurri over everything","Dig in!"]}],Pw=[{name:"The Ribeye",emoji:"🥩",items:[{name:"Ribeye steak",amount:"12–16 oz"},{name:"Kosher salt",amount:"1 tsp/lb"},{name:"Black pepper",amount:"to taste"},{name:"Avocado oil",amount:"2 tbsp"},{name:"Butter",amount:"3 tbsp"},{name:"Garlic, smashed",amount:"3 cloves"},{name:"Fresh thyme",amount:"2–3 sprigs"},{name:"Fresh rosemary",amount:"1 sprig"}]},{name:"Smashed Potatoes",emoji:"🥔",items:[{name:"Baby potatoes",amount:"1.5 lbs"},{name:"Kosher salt",amount:"1 tbsp+"},{name:"Olive oil",amount:"3 tbsp"},{name:"Butter, melted",amount:"2 tbsp"},{name:"Garlic, minced",amount:"4 cloves"},{name:"Parsley",amount:"2 tbsp"},{name:"Chives",amount:"1 tbsp"}]},{name:"Chimichurri",emoji:"🌿",items:[{name:"Parsley, chopped",amount:"½ cup"},{name:"Cilantro, chopped",amount:"¼ cup"},{name:"Garlic, minced",amount:"3 cloves"},{name:"Red wine vinegar",amount:"2 tbsp"},{name:"Dried oregano",amount:"1 tsp"},{name:"Red pepper flakes",amount:"½ tsp"},{name:"Olive oil",amount:"½ cup"},{name:"Kosher salt",amount:"½ tsp"}]}],nt={cream:"#FDF6E3",orange:"#E85D04",brown:"#6B4423",avocado:"#7CB518",mustard:"#E09F3E",rust:"#9C4A1A",olive:"#606C38"};function zw(){const[r,e]=ee.useState(new Set),[i,s]=ee.useState("18:30"),[l,c]=ee.useState(!1),[f,h]=ee.useState(new Date),[m,p]=ee.useState(null);ee.useEffect(()=>{if(!l)return;const w=setInterval(()=>h(new Date),1e3);return()=>clearInterval(w)},[l]);const v=ee.useCallback(()=>{const[w,L]=i.split(":").map(Number),U=new Date;return U.setHours(w,L,0,0),U<new Date&&U.setDate(U.getDate()+1),U},[i]),g=ee.useCallback(w=>new Date(v().getTime()-w*60*1e3),[v]),x=w=>w.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),b=w=>{const U=g(w).getTime()-f.getTime();if(U<=0){const T=Math.abs(U),D=Math.floor(T/6e4);return D<1?"NOW!":`${D}m ago`}const O=Math.floor(U/6e4),P=Math.floor(O/60),B=O%60;return P>0?`${P}h ${B}m`:`${B}m`},E=(w,L)=>{const U=g(w),O=new Date(U.getTime()+L*60*1e3);return f>=U&&f<O},A=(w,L)=>{const U=new Date(g(w).getTime()+L*60*1e3);return f>=U},S=w=>{e(L=>{const U=new Set(L);return U.has(w)?U.delete(w):U.add(w),U})},_=w=>{switch(w){case"steak":return{bg:nt.rust,text:"#fff"};case"potatoes":return{bg:nt.mustard,text:nt.brown};case"chimichurri":return{bg:nt.avocado,text:"#fff"};default:return{bg:nt.orange,text:"#fff"}}},N=r.size/fu.length*100;return H.jsxs("div",{className:"min-h-screen",style:{backgroundColor:nt.cream},children:[H.jsx("header",{className:"sticky top-0 z-20 border-b-4",style:{backgroundColor:nt.cream,borderColor:nt.brown},children:H.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-4",children:[H.jsxs(io,{to:"/",className:"inline-flex items-center gap-2 mb-3 text-sm font-medium transition-colors",style:{color:nt.brown},children:[H.jsx(Dp,{className:"w-4 h-4"}),"Back to Apps"]}),H.jsxs("div",{className:"text-center mb-4",children:[H.jsx("h1",{className:"text-4xl md:text-5xl font-bold italic mb-1",style:{fontFamily:"Playfair Display, serif",color:nt.brown},children:"Ribeye Dinner"}),H.jsx("p",{className:"text-lg",style:{fontFamily:"Libre Baskerville, serif",color:nt.rust},children:"with Smashed Potatoes & Chimichurri"})]}),H.jsxs("div",{className:"rounded-xl p-4 border-2",style:{backgroundColor:"#fff",borderColor:nt.orange},children:[H.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[H.jsxs("div",{className:"flex items-center gap-3",children:[H.jsx("label",{className:"text-sm font-semibold",style:{color:nt.brown},children:"Dinner at:"}),H.jsx("input",{type:"time",value:i,onChange:w=>s(w.target.value),className:"border-2 rounded-lg px-3 py-2 font-mono text-lg",style:{borderColor:nt.mustard,color:nt.brown}})]}),H.jsxs("div",{className:"flex items-center gap-2",children:[H.jsxs("button",{onClick:()=>c(!l),className:"flex items-center gap-2 px-5 py-2 rounded-full font-bold text-white transition-transform hover:scale-105",style:{backgroundColor:l?nt.avocado:nt.orange},children:[l?H.jsx(c1,{className:"w-4 h-4"}):H.jsx(f1,{className:"w-4 h-4"}),l?"Pause":"Start"]}),H.jsx("button",{onClick:()=>{e(new Set),c(!1)},className:"p-2 rounded-full transition-colors",style:{color:nt.brown},title:"Reset",children:H.jsx(h1,{className:"w-5 h-5"})})]})]}),l&&H.jsx("div",{className:"mt-3 text-center",children:H.jsx("span",{style:{color:nt.rust},className:"font-mono text-2xl font-bold",children:x(f)})}),H.jsx("div",{className:"mt-3 h-2 rounded-full overflow-hidden",style:{backgroundColor:nt.mustard+"40"},children:H.jsx("div",{className:"h-full transition-all duration-300 rounded-full",style:{width:`${N}%`,backgroundColor:nt.avocado}})}),H.jsxs("p",{className:"text-center text-sm mt-1",style:{color:nt.brown},children:[r.size," of ",fu.length," steps complete"]})]})]})}),H.jsxs("main",{className:"max-w-2xl mx-auto px-4 py-6",children:[H.jsxs("section",{className:"mb-8",children:[H.jsx("h2",{className:"text-2xl font-bold italic mb-4 text-center",style:{fontFamily:"Playfair Display, serif",color:nt.brown},children:"~ Ingredients ~"}),H.jsx("div",{className:"grid gap-3",children:Pw.map(w=>H.jsxs("div",{className:"border-2 rounded-xl overflow-hidden",style:{backgroundColor:"#fff",borderColor:nt.mustard},children:[H.jsxs("button",{onClick:()=>p(m===w.name?null:w.name),className:"w-full px-4 py-3 flex items-center justify-between",style:{backgroundColor:nt.mustard+"20"},children:[H.jsxs("span",{className:"font-bold flex items-center gap-2",style:{fontFamily:"Libre Baskerville, serif",color:nt.brown},children:[H.jsx("span",{className:"text-2xl",children:w.emoji}),w.name]}),H.jsx("span",{className:"text-sm",style:{color:nt.rust},children:m===w.name?"▲":"▼"})]}),m===w.name&&H.jsx("div",{className:"px-4 py-3 grid grid-cols-2 gap-2",children:w.items.map(L=>H.jsxs("div",{className:"flex justify-between text-sm py-1 border-b",style:{borderColor:nt.mustard+"30"},children:[H.jsx("span",{style:{color:nt.brown},children:L.name}),H.jsx("span",{className:"font-mono text-xs",style:{color:nt.rust},children:L.amount})]},L.name))})]},w.name))})]}),H.jsxs("section",{children:[H.jsx("h2",{className:"text-2xl font-bold italic mb-4 text-center",style:{fontFamily:"Playfair Display, serif",color:nt.brown},children:"~ The Timeline ~"}),H.jsx("div",{className:"space-y-4",children:fu.map((w,L)=>{const U=r.has(w.id),O=l&&E(w.minutesBefore,w.duration);l&&A(w.minutesBefore,w.duration);const P=_(w.component),B=g(w.minutesBefore);return H.jsxs("div",{className:Bi("relative border-2 rounded-xl overflow-hidden transition-all",O&&"ring-4 ring-offset-2 scale-[1.02]"),style:{backgroundColor:U?nt.avocado+"15":"#fff",borderColor:O?nt.orange:nt.brown+"40",ringColor:nt.orange,opacity:U&&!O?.7:1},children:[H.jsxs("div",{className:"flex items-center justify-between px-4 py-3",style:{backgroundColor:O?nt.orange+"20":nt.cream},children:[H.jsxs("div",{className:"flex items-center gap-3",children:[H.jsx("button",{onClick:()=>S(w.id),className:Bi("w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all",U?"scale-110":"hover:scale-105"),style:{backgroundColor:U?nt.avocado:"transparent",borderColor:U?nt.avocado:nt.brown},children:U&&H.jsx(XE,{className:"w-4 h-4 text-white"})}),H.jsxs("div",{children:[H.jsx("span",{className:"text-xs font-bold px-2 py-0.5 rounded-full mr-2",style:{backgroundColor:P.bg,color:P.text},children:w.component==="all"?"ALL":w.component.toUpperCase()}),H.jsx("span",{className:Bi("font-bold",U&&"line-through"),style:{fontFamily:"Libre Baskerville, serif",color:nt.brown},children:w.title})]})]}),H.jsxs("div",{className:"text-right",children:[H.jsx("div",{className:"font-mono text-sm",style:{color:nt.rust},children:x(B)}),l&&!U&&H.jsx("div",{className:Bi("text-xs font-bold",O&&"animate-pulse"),style:{color:O?nt.orange:nt.olive},children:b(w.minutesBefore)})]})]}),H.jsxs("div",{className:"px-4 py-3",children:[H.jsx("p",{className:"italic mb-3",style:{fontFamily:"Libre Baskerville, serif",color:nt.rust},children:w.description}),H.jsx("ul",{className:"space-y-1",children:w.details.map((T,D)=>H.jsxs("li",{className:"text-sm flex items-start gap-2",style:{color:nt.brown},children:[H.jsx("span",{style:{color:nt.orange},children:"•"}),T]},D))}),H.jsxs("div",{className:"mt-3 inline-block text-xs font-mono px-2 py-1 rounded",style:{backgroundColor:nt.mustard+"30",color:nt.brown},children:["~",w.duration," min"]})]})]},w.id)})}),r.size===fu.length&&H.jsxs("div",{className:"mt-8 text-center py-8 rounded-xl border-4",style:{borderColor:nt.avocado,backgroundColor:nt.avocado+"10"},children:[H.jsx("div",{className:"text-6xl mb-4",children:"🥩🥔🌿"}),H.jsx("h3",{className:"text-3xl font-bold italic mb-2",style:{fontFamily:"Playfair Display, serif",color:nt.brown},children:"Dinner is Served!"}),H.jsx("p",{style:{color:nt.rust},children:"Enjoy your perfectly cooked ribeye"})]})]}),H.jsx("footer",{className:"mt-12 text-center py-6 border-t-2",style:{borderColor:nt.brown+"30"},children:H.jsx("p",{className:"text-sm italic",style:{fontFamily:"Libre Baskerville, serif",color:nt.rust},children:"90 minutes from start to plate • Serves 1–2"})})]})]})}mb.createRoot(document.getElementById("root")).render(H.jsx(ee.StrictMode,{children:H.jsx(FM,{children:H.jsxs(hM,{children:[H.jsx(dl,{path:"/",element:H.jsx(y1,{})}),H.jsx(dl,{path:"/sensors",element:H.jsx(S1,{})}),H.jsx(dl,{path:"/audio",element:H.jsx(Ow,{})}),H.jsx(dl,{path:"/ribeye",element:H.jsx(zw,{})})]})})}));
