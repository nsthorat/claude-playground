import{c as pe,r as g,j as z,a as Ze}from"./createLucideIcon-ZXCzeNeO.js";import{V as E,U as $,S as U,D as Qe,a as Ye,b as Je,c as et,W as j,L as oe,d as p,B as ce,e as le,O as Be,M as Y,C as Ae,f as ae,g as se,h as F,F as tt,E as me,i as Ce,N as ze,j as J,R as De,P as Ie,A as st,k as Oe,T as Pe,l as Ne,m as ie,n as ye,o as it,p as rt,q as nt,r as at,s as Ee,t as ot,G as lt,u as Me,v as we,w as de,x as ct}from"./three.module-M2NU5-hk.js";import{c as ut}from"./utils-fNskMoFt.js";import{A as dt}from"./arrow-left-C8E7sycf.js";import{S as ht}from"./sparkles-Bpduj-sv.js";const ft=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],vt=pe("dna",ft);const pt=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],mt=pe("mic-off",pt);const gt=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],xt=pe("mic",gt);var he=1/1e3,St=1e3,bt=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(e){typeof document<"u"&&document.hidden!==void 0&&(e?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=e)}get delta(){return this._delta*he}get fixedDelta(){return this._fixedDelta*he}set fixedDelta(e){this._fixedDelta=e*St}get elapsed(){return this._elapsed*he}update(e){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(e!==void 0?e:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(e){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Tt=(()=>{const e=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),s=new Ne;return s.setAttribute("position",new ie(e,3)),s.setAttribute("uv",new ie(t,2)),s})(),k=class ve{static get fullscreenGeometry(){return Tt}constructor(t="Pass",s=new le,i=new Be){this.name=t,this.renderer=null,this.scene=s,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(t){if(this.rtt===t){const s=this.fullscreenMaterial;s!==null&&(s.needsUpdate=!0),this.rtt=!t}}set mainScene(t){}set mainCamera(t){}setRenderer(t){this.renderer=t}isEnabled(){return this.enabled}setEnabled(t){this.enabled=t}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(t){let s=this.screen;s!==null?s.material=t:(s=new Y(ve.fullscreenGeometry,t),s.frustumCulled=!1,this.scene===null&&(this.scene=new le),this.scene.add(s),this.screen=s)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(t){this.fullscreenMaterial=t}getDepthTexture(){return null}setDepthTexture(t,s=ce){}render(t,s,i,r,n){throw new Error("Render method not implemented!")}setSize(t,s){}initialize(t,s,i){}dispose(){for(const t of Object.keys(this)){const s=this[t];(s instanceof j||s instanceof Oe||s instanceof Pe||s instanceof ve)&&this[t].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},yt=class extends k{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(e,t,s,i,r){const n=e.state.buffers.stencil;n.setLocked(!1),n.setTest(!1)}},Et=`#ifdef COLOR_WRITE
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
}`,Fe="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",He=class extends F{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new p(null),depthBuffer:new p(null),channelWeights:new p(null),opacity:new p(1)},blending:J,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Et,vertexShader:Fe}),this.depthFunc=st}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(e){const t=e!==null;this.colorWrite!==t&&(t?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=t,this.needsUpdate=!0),this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){const t=e!==null;this.depthWrite!==t&&(t?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=t,this.depthWrite=t,this.needsUpdate=!0),this.uniforms.depthBuffer.value=e}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(e){this.colorSpaceConversion!==e&&(e?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(e){e!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=e):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(e){this.uniforms.inputBuffer.value=e}getOpacity(e){return this.uniforms.opacity.value}setOpacity(e){this.uniforms.opacity.value=e}},Mt=class extends k{constructor(e,t=!0){super("CopyPass"),this.fullscreenMaterial=new He,this.needsSwap=!1,this.renderTarget=e,e===void 0&&(this.renderTarget=new j(1,1,{minFilter:oe,magFilter:oe,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(e){this.autoResize=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(e){this.autoResize=e}render(e,t,s,i,r){this.fullscreenMaterial.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){this.autoResize&&this.renderTarget.setSize(e,t)}initialize(e,t,s){s!==void 0&&(this.renderTarget.texture.type=s,s!==$?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":e!==null&&e.outputColorSpace===U&&(this.renderTarget.texture.colorSpace=U))}},Re=new Ae,ke=class extends k{constructor(e=!0,t=!0,s=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=e,this.depth=t,this.stencil=s,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(e,t,s){this.color=e,this.depth=t,this.stencil=s}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(e){this.overrideClearColor=e}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(e){this.overrideClearAlpha=e}render(e,t,s,i,r){const n=this.overrideClearColor,a=this.overrideClearAlpha,o=e.getClearAlpha(),l=n!==null,c=a>=0;l?(e.getClearColor(Re),e.setClearColor(n,c?a:o)):c&&e.setClearAlpha(a),e.setRenderTarget(this.renderToScreen?null:t),e.clear(this.color,this.depth,this.stencil),l?e.setClearColor(Re,o):c&&e.setClearAlpha(o)}},wt=class extends k{constructor(e,t){super("MaskPass",e,t),this.needsSwap=!1,this.clearPass=new ke(!1,!1,!0),this.inverse=!1}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get inverted(){return this.inverse}set inverted(e){this.inverse=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(e){this.inverted=e}render(e,t,s,i,r){const n=e.getContext(),a=e.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,M=this.inverted?0:1,m=1-M;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.stencil.setFunc(n.ALWAYS,M,4294967295),a.stencil.setClear(m),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(e,null):(c.render(e,t),c.render(e,s))),this.renderToScreen?(e.setRenderTarget(null),e.render(o,l)):(e.setRenderTarget(t),e.render(o,l),e.setRenderTarget(s),e.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(n.EQUAL,1,4294967295),a.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.stencil.setLocked(!0)}},Rt=class{constructor(e=null,{depthBuffer:t=!0,stencilBuffer:s=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,s,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Mt,this.depthTexture=null,this.passes=[],this.timer=new bt,this.autoRenderToScreen=!0,this.setRenderer(e)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(e){const t=this.inputBuffer,s=this.multisampling;s>0&&e>0?(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose()):s!==e&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,e),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,e!==null){const t=e.getSize(new E),s=e.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===$&&e.outputColorSpace===U&&(this.inputBuffer.texture.colorSpace=U,this.outputBuffer.texture.colorSpace=U,this.inputBuffer.dispose(),this.outputBuffer.dispose()),e.autoClear=!1,this.setSize(t.width,t.height);for(const r of this.passes)r.initialize(e,s,i)}}replaceRenderer(e,t=!0){const s=this.renderer,i=s.domElement.parentNode;return this.setRenderer(e),t&&i!==null&&(i.removeChild(s.domElement),i.appendChild(e.domElement)),s}createDepthTexture(){const e=this.depthTexture=new Qe;return this.inputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(e.format=Ye,e.type=Je):e.type=et,e}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const e of this.passes)e.setDepthTexture(null)}}createBuffer(e,t,s,i){const r=this.renderer,n=r===null?new E:r.getDrawingBufferSize(new E),a={minFilter:oe,magFilter:oe,stencilBuffer:t,depthBuffer:e,type:s},o=new j(n.width,n.height,a);return i>0&&(o.samples=i),s===$&&r!==null&&r.outputColorSpace===U&&(o.texture.colorSpace=U),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(e){for(const t of this.passes)t.mainScene=e}setMainCamera(e){for(const t of this.passes)t.mainCamera=e}addPass(e,t){const s=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new E),n=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(e.setRenderer(i),e.setSize(r.width,r.height),e.initialize(i,n,a),this.autoRenderToScreen&&(s.length>0&&(s[s.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?s.splice(t,0,e):s.push(e),this.autoRenderToScreen&&(s[s.length-1].renderToScreen=!0),e.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(e of s)e.setDepthTexture(o)}else e.setDepthTexture(this.depthTexture)}removePass(e){const t=this.passes,s=t.indexOf(e);if(s!==-1&&t.splice(s,1).length>0){if(this.depthTexture!==null){const n=(o,l)=>o||l.needsDepthTexture;t.reduce(n,!1)||(e.getDepthTexture()===this.depthTexture&&e.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&s===t.length&&(e.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const e=this.passes;this.deleteDepthTexture(),e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){const t=this.renderer,s=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,n=!1,a,o,l;e===void 0&&(this.timer.update(),e=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(t,i,r,e,n),c.needsSwap&&(n&&(s.renderToScreen=c.renderToScreen,a=t.getContext(),o=t.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),s.render(t,i,r,e,n),o.setFunc(a.EQUAL,1,4294967295)),l=i,i=r,r=l),c instanceof wt?n=!0:c instanceof yt&&(n=!1))}setSize(e,t,s){const i=this.renderer,r=i.getSize(new E);(e===void 0||t===void 0)&&(e=r.width,t=r.height),(r.width!==e||r.height!==t)&&i.setSize(e,t,s);const n=i.getDrawingBufferSize(new E);this.inputBuffer.setSize(n.width,n.height),this.outputBuffer.setSize(n.width,n.height);for(const a of this.passes)a.setSize(n.width,n.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const e of this.passes)e.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),k.fullscreenGeometry.dispose()}},K={NONE:0,DEPTH:1,CONVOLUTION:2},h={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},_t=class{constructor(){this.shaderParts=new Map([[h.FRAGMENT_HEAD,null],[h.FRAGMENT_MAIN_UV,null],[h.FRAGMENT_MAIN_IMAGE,null],[h.VERTEX_HEAD,null],[h.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=K.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Ce}},fe=!1,_e=class{constructor(e=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(e),this.meshCount=0,this.replaceMaterial=t=>{if(t.isMesh){let s;if(t.material.flatShading)switch(t.material.side){case se:s=this.materialsFlatShadedDoubleSide;break;case ae:s=this.materialsFlatShadedBackSide;break;default:s=this.materialsFlatShaded;break}else switch(t.material.side){case se:s=this.materialsDoubleSide;break;case ae:s=this.materialsBackSide;break;default:s=this.materials;break}this.originalMaterials.set(t,t.material),t.isSkinnedMesh?t.material=s[2]:t.isInstancedMesh?t.material=s[1]:t.material=s[0],++this.meshCount}}}cloneMaterial(e){if(!(e instanceof F))return e.clone();const t=e.uniforms,s=new Map;for(const r in t){const n=t[r].value;n.isRenderTargetTexture&&(t[r].value=null,s.set(r,n))}const i=e.clone();for(const r of s)t[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(e){if(this.disposeMaterials(),this.material=e,e!==null){const t=this.materials=[this.cloneMaterial(e),this.cloneMaterial(e),this.cloneMaterial(e)];for(const s of t)s.uniforms=Object.assign({},e.uniforms),s.side=tt;t[2].skinning=!0,this.materialsBackSide=t.map(s=>{const i=this.cloneMaterial(s);return i.uniforms=Object.assign({},e.uniforms),i.side=ae,i}),this.materialsDoubleSide=t.map(s=>{const i=this.cloneMaterial(s);return i.uniforms=Object.assign({},e.uniforms),i.side=se,i}),this.materialsFlatShaded=t.map(s=>{const i=this.cloneMaterial(s);return i.uniforms=Object.assign({},e.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=t.map(s=>{const i=this.cloneMaterial(s);return i.uniforms=Object.assign({},e.uniforms),i.flatShading=!0,i.side=ae,i}),this.materialsFlatShadedDoubleSide=t.map(s=>{const i=this.cloneMaterial(s);return i.uniforms=Object.assign({},e.uniforms),i.flatShading=!0,i.side=se,i})}}render(e,t,s){const i=e.shadowMap.enabled;if(e.shadowMap.enabled=!1,fe){const r=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),e.render(t,s);for(const n of r)n[0].material=n[1];this.meshCount!==r.size&&r.clear()}else{const r=t.overrideMaterial;t.overrideMaterial=this.material,e.render(t,s),t.overrideMaterial=r}e.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const e=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const t of e)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return fe}static set workaroundEnabled(e){fe=e}},q=-1,W=class extends me{constructor(e,t=q,s=q,i=1){super(),this.resizable=e,this.baseSize=new E(1,1),this.preferredSize=new E(t,s),this.target=this.preferredSize,this.s=i,this.effectiveSize=new E,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const e=this.baseSize,t=this.preferredSize,s=this.effectiveSize,i=this.scale;t.width!==q?s.width=t.width:t.height!==q?s.width=Math.round(t.height*(e.width/Math.max(e.height,1))):s.width=Math.round(e.width*i),t.height!==q?s.height=t.height:t.width!==q?s.height=Math.round(t.width/Math.max(e.width/Math.max(e.height,1),1)):s.height=Math.round(e.height*i)}get width(){return this.effectiveSize.width}set width(e){this.preferredWidth=e}get height(){return this.effectiveSize.height}set height(e){this.preferredHeight=e}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(e){this.s!==e&&(this.s=e,this.preferredSize.setScalar(q),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(e){this.scale=e}get baseWidth(){return this.baseSize.width}set baseWidth(e){this.baseSize.width!==e&&(this.baseSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(e){this.baseWidth=e}get baseHeight(){return this.baseSize.height}set baseHeight(e){this.baseSize.height!==e&&(this.baseSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(e){this.baseHeight=e}setBaseSize(e,t){(this.baseSize.width!==e||this.baseSize.height!==t)&&(this.baseSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(e){this.preferredSize.width!==e&&(this.preferredSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(e){this.preferredWidth=e}get preferredHeight(){return this.preferredSize.height}set preferredHeight(e){this.preferredSize.height!==e&&(this.preferredSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(e){this.preferredHeight=e}setPreferredSize(e,t){(this.preferredSize.width!==e||this.preferredSize.height!==t)&&(this.preferredSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(e){this.s=e.scale,this.baseSize.set(e.baseWidth,e.baseHeight),this.preferredSize.set(e.preferredWidth,e.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return q}},u={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Ut="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",At="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ct="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Dt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",It="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ot="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ft="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ht="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Lt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Kt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$t="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Qt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Jt="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",es="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ts="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ss="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",is="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",rs="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ns="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",as=new Map([[u.ADD,Ut],[u.ALPHA,Bt],[u.AVERAGE,At],[u.COLOR,Ct],[u.COLOR_BURN,zt],[u.COLOR_DODGE,Dt],[u.DARKEN,It],[u.DIFFERENCE,Ot],[u.DIVIDE,Pt],[u.DST,null],[u.EXCLUSION,Nt],[u.HARD_LIGHT,Ft],[u.HARD_MIX,Ht],[u.HUE,kt],[u.INVERT,Lt],[u.INVERT_RGB,Gt],[u.LIGHTEN,Vt],[u.LINEAR_BURN,Wt],[u.LINEAR_DODGE,jt],[u.LINEAR_LIGHT,qt],[u.LUMINOSITY,Kt],[u.MULTIPLY,Xt],[u.NEGATION,$t],[u.NORMAL,Zt],[u.OVERLAY,Qt],[u.PIN_LIGHT,Yt],[u.REFLECT,Jt],[u.SATURATION,es],[u.SCREEN,ts],[u.SOFT_LIGHT,ss],[u.SRC,is],[u.SUBTRACT,rs],[u.VIVID_LIGHT,ns]]),os=class extends me{constructor(e,t=1){super(),this._blendFunction=e,this.opacity=new p(t)}getOpacity(){return this.opacity.value}setOpacity(e){this.opacity.value=e}get blendFunction(){return this._blendFunction}set blendFunction(e){this._blendFunction=e,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e}getShaderCode(){return as.get(this.blendFunction)}},Le=class extends me{constructor(e,t,{attributes:s=K.NONE,blendFunction:i=u.NORMAL,defines:r=new Map,uniforms:n=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=e,this.renderer=null,this.attributes=s,this.fragmentShader=t,this.vertexShader=o,this.defines=r,this.uniforms=n,this.extensions=a,this.blendMode=new os(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Ce,this._outputColorSpace=ze}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(e){this._inputColorSpace=e,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e,this.setChanged()}set mainScene(e){}set mainCamera(e){}getName(){return this.name}setRenderer(e){this.renderer=e}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(e){this.attributes=e,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(e){this.fragmentShader=e,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(e){this.vertexShader=e,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(e,t=ce){}update(e,t,s){}setSize(e,t){}initialize(e,t,s){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof j||t instanceof Oe||t instanceof Pe||t instanceof k)&&this[e].dispose()}}},ge={MEDIUM:2,LARGE:3},ls=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,cs="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",us=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],ds=class extends F{constructor(e=new ye){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new p(null),texelSize:new p(new ye),scale:new p(1),kernel:new p(0)},blending:J,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ls,vertexShader:cs}),this.setTexelSize(e.x,e.y),this.kernelSize=ge.MEDIUM}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.inputBuffer=e}get kernelSequence(){return us[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(e){this.uniforms.scale.value=e}getScale(){return this.uniforms.scale.value}setScale(e){this.uniforms.scale.value=e}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(e){this.uniforms.kernel.value=e}setKernel(e){this.kernel=e}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t,e*.5,t*.5)}setSize(e,t){const s=1/e,i=1/t;this.uniforms.texelSize.value.set(s,i,s*.5,i*.5)}},hs=class extends k{constructor({kernelSize:e=ge.MEDIUM,resolutionScale:t=.5,width:s=W.AUTO_SIZE,height:i=W.AUTO_SIZE,resolutionX:r=s,resolutionY:n=i}={}){super("KawaseBlurPass"),this.renderTargetA=new j(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new W(this,r,n,t);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new ds,this._blurMaterial.kernelSize=e,this.copyMaterial=new He}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(e){this._blurMaterial=e}get dithering(){return this.copyMaterial.dithering}set dithering(e){this.copyMaterial.dithering=e}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(e){this.blurMaterial.kernelSize=e}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get scale(){return this.blurMaterial.scale}set scale(e){this.blurMaterial.scale=e}getScale(){return this.blurMaterial.scale}setScale(e){this.blurMaterial.scale=e}getKernelSize(){return this.kernelSize}setKernelSize(e){this.kernelSize=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,s,i,r){const n=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,M=c.kernelSequence;let m=t;this.fullscreenMaterial=c;for(let b=0,y=M.length;b<y;++b){const D=(b&1)===0?o:l;c.kernel=M[b],c.inputBuffer=m.texture,e.setRenderTarget(D),e.render(n,a),m=D}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=m.texture,e.setRenderTarget(this.renderToScreen?null:s),e.render(n,a)}setSize(e,t){const s=this.resolution;s.setBaseSize(e,t);const i=s.width,r=s.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(e,t)}initialize(e,t,s){s!==void 0&&(this.renderTargetA.texture.type=s,this.renderTargetB.texture.type=s,s!==$?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):e!==null&&e.outputColorSpace===U&&(this.renderTargetA.texture.colorSpace=U,this.renderTargetB.texture.colorSpace=U))}static get AUTO_SIZE(){return W.AUTO_SIZE}},fs=`#include <common>
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
}`,vs=class extends F{constructor(e=!1,t=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:De.replace(/\D+/g,"")},uniforms:{inputBuffer:new p(null),threshold:new p(0),smoothing:new p(1),range:new p(null)},blending:J,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:fs,vertexShader:Fe}),this.colorOutput=e,this.luminanceRange=t}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get threshold(){return this.uniforms.threshold.value}set threshold(e){this.smoothing>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=e}getThreshold(){return this.threshold}setThreshold(e){this.threshold=e}get smoothing(){return this.uniforms.smoothing.value}set smoothing(e){this.threshold>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=e}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(e){this.smoothing=e}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(e){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(e){e?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(e){return this.colorOutput}setColorOutputEnabled(e){this.colorOutput=e}get useRange(){return this.luminanceRange!==null}set useRange(e){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(e){e!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=e,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(e){this.luminanceRange=e}},ps=class extends k{constructor({renderTarget:e,luminanceRange:t,colorOutput:s,resolutionScale:i=1,width:r=W.AUTO_SIZE,height:n=W.AUTO_SIZE,resolutionX:a=r,resolutionY:o=n}={}){super("LuminancePass"),this.fullscreenMaterial=new vs(s,t),this.needsSwap=!1,this.renderTarget=e,this.renderTarget===void 0&&(this.renderTarget=new j(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new W(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(e,t,s,i,r){const n=this.fullscreenMaterial;n.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){const s=this.resolution;s.setBaseSize(e,t),this.renderTarget.setSize(s.width,s.height)}initialize(e,t,s){s!==void 0&&s!==$&&(this.renderTarget.texture.type=s,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},ms=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,gs="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",xs=class extends F{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new p(null),texelSize:new p(new E)},blending:J,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ms,vertexShader:gs})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},Ss=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,bs="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Ts=class extends F{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new p(null),supportBuffer:new p(null),texelSize:new p(new E),radius:new p(.85)},blending:J,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ss,vertexShader:bs})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}set supportBuffer(e){this.uniforms.supportBuffer.value=e}get radius(){return this.uniforms.radius.value}set radius(e){this.uniforms.radius.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},ys=class extends k{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new j(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new xs,this.upsamplingMaterial=new Ts,this.resolution=new E}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(e){if(this.levels!==e){const t=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let s=0;s<e;++s){const i=t.clone();i.texture.name="Downsampling.Mipmap"+s,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(t);for(let s=1,i=e-1;s<i;++s){const r=t.clone();r.texture.name="Upsampling.Mipmap"+s,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(e){this.upsamplingMaterial.radius=e}render(e,t,s,i,r){const{scene:n,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:M}=this;let m=t;this.fullscreenMaterial=o;for(let b=0,y=c.length;b<y;++b){const D=c[b];o.setSize(m.width,m.height),o.inputBuffer=m.texture,e.setRenderTarget(D),e.render(n,a),m=D}this.fullscreenMaterial=l;for(let b=M.length-1;b>=0;--b){const y=M[b];l.setSize(m.width,m.height),l.inputBuffer=m.texture,l.supportBuffer=c[b].texture,e.setRenderTarget(y),e.render(n,a),m=y}}setSize(e,t){const s=this.resolution;s.set(e,t);let i=s.width,r=s.height;for(let n=0,a=this.downsamplingMipmaps.length;n<a;++n)i=Math.round(i*.5),r=Math.round(r*.5),this.downsamplingMipmaps[n].setSize(i,r),n<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[n].setSize(i,r)}initialize(e,t,s){if(s!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of i)r.texture.type=s;if(s!==$)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(e!==null&&e.outputColorSpace===U)for(const r of i)r.texture.colorSpace=U}}dispose(){super.dispose();for(const e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))e.dispose()}},Es=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,Ms=class extends Le{constructor({blendFunction:e=u.SCREEN,luminanceThreshold:t=1,luminanceSmoothing:s=.03,mipmapBlur:i=!0,intensity:r=1,radius:n=.85,levels:a=8,kernelSize:o=ge.LARGE,resolutionScale:l=.5,width:c=W.AUTO_SIZE,height:M=W.AUTO_SIZE,resolutionX:m=c,resolutionY:b=M}={}){super("BloomEffect",Es,{blendFunction:e,uniforms:new Map([["map",new p(null)],["intensity",new p(r)]])}),this.renderTarget=new j(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new hs({kernelSize:o}),this.luminancePass=new ps({colorOutput:!0}),this.luminanceMaterial.threshold=t,this.luminanceMaterial.smoothing=s,this.mipmapBlurPass=new ys,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=n,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const y=this.resolution=new W(this,m,b,l);y.addEventListener("change",D=>this.setSize(y.baseWidth,y.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get dithering(){return this.blurPass.dithering}set dithering(e){this.blurPass.dithering=e}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(e){this.blurPass.kernelSize=e}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(e){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(e){this.uniforms.get("intensity").value=e}getIntensity(){return this.intensity}setIntensity(e){this.intensity=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}update(e,t,s){const i=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(e,t),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,r.renderTarget):this.blurPass.render(e,r.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,t):this.blurPass.render(e,t,i)}setSize(e,t){const s=this.resolution;s.setBaseSize(e,t),this.renderTarget.setSize(s.width,s.height),this.blurPass.resolution.copy(s),this.luminancePass.setSize(e,t),this.mipmapBlurPass.setSize(e,t)}initialize(e,t,s){this.blurPass.initialize(e,t,s),this.luminancePass.initialize(e,t,s),this.mipmapBlurPass.initialize(e,t,s),s!==void 0&&(this.renderTarget.texture.type=s,e!==null&&e.outputColorSpace===U&&(this.renderTarget.texture.colorSpace=U))}},ws=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,Rs="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",_s=class extends Le{constructor({offset:e=new E(.001,5e-4),radialModulation:t=!1,modulationOffset:s=.15}={}){super("ChromaticAberrationEffect",ws,{vertexShader:Rs,attributes:K.CONVOLUTION,uniforms:new Map([["offset",new p(e)],["modulationOffset",new p(s)]])}),this.radialModulation=t}get offset(){return this.uniforms.get("offset").value}set offset(e){this.uniforms.get("offset").value=e}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(e){e?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(e){this.uniforms.get("modulationOffset").value=e}getOffset(){return this.offset}setOffset(e){this.offset=e}},Us=class extends k{constructor(e,t,s=null){super("RenderPass",e,t),this.needsSwap=!1,this.clearPass=new ke,this.overrideMaterialManager=s===null?null:new _e(s),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get renderToScreen(){return super.renderToScreen}set renderToScreen(e){super.renderToScreen=e,this.clearPass.renderToScreen=e}get overrideMaterial(){const e=this.overrideMaterialManager;return e!==null?e.material:null}set overrideMaterial(e){const t=this.overrideMaterialManager;e!==null?t!==null?t.setMaterial(e):this.overrideMaterialManager=new _e(e):t!==null&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(e){this.overrideMaterial=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getSelection(){return this.selection}setSelection(e){this.selection=e}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(e){this.ignoreBackground=e}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(e){this.skipShadowMapUpdate=e}getClearPass(){return this.clearPass}render(e,t,s,i,r){const n=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=n.background,M=e.shadowMap.autoUpdate,m=this.renderToScreen?null:t;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(e.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(n.background=null),this.clearPass.enabled&&this.clearPass.render(e,t),e.setRenderTarget(m),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(e,n,a):e.render(n,a),a.layers.mask=l,n.background=c,e.shadowMap.autoUpdate=M}},Bs=`#include <common>
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
}`,As="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Cs=class extends F{constructor(e,t,s,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:De.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new p(null),depthBuffer:new p(null),resolution:new p(new E),texelSize:new p(new E),cameraNear:new p(.3),cameraFar:new p(1e3),aspect:new p(1),time:new p(0)},blending:J,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),e&&this.setShaderParts(e),t&&this.setDefines(t),s&&this.setUniforms(s),this.copyCameraSettings(i)}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=ce){this.depthBuffer=e,this.depthPacking=t}setShaderData(e){this.setShaderParts(e.shaderParts),this.setDefines(e.defines),this.setUniforms(e.uniforms),this.setExtensions(e.extensions)}setShaderParts(e){return this.fragmentShader=Bs.replace(h.FRAGMENT_HEAD,e.get(h.FRAGMENT_HEAD)||"").replace(h.FRAGMENT_MAIN_UV,e.get(h.FRAGMENT_MAIN_UV)||"").replace(h.FRAGMENT_MAIN_IMAGE,e.get(h.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=As.replace(h.VERTEX_HEAD,e.get(h.VERTEX_HEAD)||"").replace(h.VERTEX_MAIN_SUPPORT,e.get(h.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(e){for(const t of e.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(e){for(const t of e.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(e){this.extensions={};for(const t of e)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(e){this.encodeOutput!==e&&(e?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(e){return this.encodeOutput}setOutputEncodingEnabled(e){this.encodeOutput=e}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}setDeltaTime(e){this.uniforms.time.value+=e}adoptCameraSettings(e){this.copyCameraSettings(e)}copyCameraSettings(e){e&&(this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,e instanceof Ie?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(e,t){const s=this.uniforms;s.resolution.value.set(e,t),s.texelSize.value.set(1/e,1/t),s.aspect.value=e/t}static get Section(){return h}};function Ue(e,t,s){for(const i of t){const r="$1"+e+i.charAt(0).toUpperCase()+i.slice(1),n=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of s.entries())a[1]!==null&&s.set(a[0],a[1].replace(n,r))}}function zs(e,t,s){let i=t.getFragmentShader(),r=t.getVertexShader();const n=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(s.attributes|=t.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${t.name})`);if(a&&(s.attributes&K.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!n&&!a)throw new Error(`Could not find mainImage or mainUv function (${t.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=s.shaderParts;let c=l.get(h.FRAGMENT_HEAD)||"",M=l.get(h.FRAGMENT_MAIN_UV)||"",m=l.get(h.FRAGMENT_MAIN_IMAGE)||"",b=l.get(h.VERTEX_HEAD)||"",y=l.get(h.VERTEX_MAIN_SUPPORT)||"";const D=new Set,O=new Set;if(a&&(M+=`	${e}MainUv(UV);
`,s.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const T=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);y+=`	${e}MainSupport(`,y+=T?`vUv);
`:`);
`;for(const R of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const L of R[1].split(/\s*,\s*/))s.varyings.add(L),D.add(L),O.add(L);for(const R of r.matchAll(o))O.add(R[1])}for(const T of i.matchAll(o))O.add(T[1]);for(const T of t.defines.keys())O.add(T.replace(/\([\w\s,]*\)/g,""));for(const T of t.uniforms.keys())O.add(T);O.delete("while"),O.delete("for"),O.delete("if"),t.uniforms.forEach((T,R)=>s.uniforms.set(e+R.charAt(0).toUpperCase()+R.slice(1),T)),t.defines.forEach((T,R)=>s.defines.set(e+R.charAt(0).toUpperCase()+R.slice(1),T));const ee=new Map([["fragment",i],["vertex",r]]);Ue(e,O,s.defines),Ue(e,O,ee),i=ee.get("fragment"),r=ee.get("vertex");const Z=t.blendMode;if(s.blendModes.set(Z.blendFunction,Z),n){t.inputColorSpace!==null&&t.inputColorSpace!==s.colorSpace&&(m+=t.inputColorSpace===U?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace!==ze?s.colorSpace=t.outputColorSpace:t.inputColorSpace!==null&&(s.colorSpace=t.inputColorSpace);const T=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;m+=`${e}MainImage(color0, UV, `,(s.attributes&K.DEPTH)!==0&&T.test(i)&&(m+="depth, ",s.readDepth=!0),m+=`color1);
	`;const R=e+"BlendOpacity";s.uniforms.set(R,Z.opacity),m+=`color0 = blend${Z.blendFunction}(color0, color1, ${R});

	`,c+=`uniform float ${R};

`}if(c+=i+`
`,r!==null&&(b+=r+`
`),l.set(h.FRAGMENT_HEAD,c),l.set(h.FRAGMENT_MAIN_UV,M),l.set(h.FRAGMENT_MAIN_IMAGE,m),l.set(h.VERTEX_HEAD,b),l.set(h.VERTEX_MAIN_SUPPORT,y),t.extensions!==null)for(const T of t.extensions)s.extensions.add(T)}}var Ds=class extends k{constructor(e,...t){super("EffectPass"),this.fullscreenMaterial=new Cs(null,null,null,e),this.listener=s=>this.handleEvent(s),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(e){for(const t of this.effects)t.mainScene=e}set mainCamera(e){this.fullscreenMaterial.copyCameraSettings(e);for(const t of this.effects)t.mainCamera=e}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(e){this.fullscreenMaterial.encodeOutput=e}get dithering(){return this.fullscreenMaterial.dithering}set dithering(e){const t=this.fullscreenMaterial;t.dithering=e,t.needsUpdate=!0}setEffects(e){for(const t of this.effects)t.removeEventListener("change",this.listener);this.effects=e.sort((t,s)=>s.attributes-t.attributes);for(const t of this.effects)t.addEventListener("change",this.listener)}updateMaterial(){const e=new _t;let t=0;for(const a of this.effects)if(a.blendMode.blendFunction===u.DST)e.attributes|=a.getAttributes()&K.DEPTH;else{if((e.attributes&a.getAttributes()&K.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);zs("e"+t++,a,e)}let s=e.shaderParts.get(h.FRAGMENT_HEAD),i=e.shaderParts.get(h.FRAGMENT_MAIN_IMAGE),r=e.shaderParts.get(h.FRAGMENT_MAIN_UV);const n=/\bblend\b/g;for(const a of e.blendModes.values())s+=a.getShaderCode().replace(n,`blend${a.blendFunction}`)+`
`;(e.attributes&K.DEPTH)!==0?(e.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,e.colorSpace===U&&(i+=`color0 = sRGBToLinear(color0);
	`),e.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,e.defines.set("UV","transformedUv")):e.defines.set("UV","vUv"),e.shaderParts.set(h.FRAGMENT_HEAD,s),e.shaderParts.set(h.FRAGMENT_MAIN_IMAGE,i),e.shaderParts.set(h.FRAGMENT_MAIN_UV,r);for(const[a,o]of e.shaderParts)o!==null&&e.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(e)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(e,t=ce){this.fullscreenMaterial.depthBuffer=e,this.fullscreenMaterial.depthPacking=t;for(const s of this.effects)s.setDepthTexture(e,t)}render(e,t,s,i,r){for(const n of this.effects)n.update(e,t,i);if(!this.skipRendering||this.renderToScreen){const n=this.fullscreenMaterial;n.inputBuffer=t.texture,n.time+=i*this.timeScale,e.setRenderTarget(this.renderToScreen?null:s),e.render(this.scene,this.camera)}}setSize(e,t){this.fullscreenMaterial.setSize(e,t);for(const s of this.effects)s.setSize(e,t)}initialize(e,t,s){this.renderer=e;for(const i of this.effects)i.initialize(e,t,s);this.updateMaterial(),s!==void 0&&s!==$&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const e of this.effects)e.removeEventListener("change",this.listener),e.dispose()}handleEvent(e){e.type==="change"&&this.recompile()}};const Is="/claude-playground",Ge=`
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
`,Os=`
${Ge}

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
`,Ps=`
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
`,Ns=`
${Ge}

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
`,Fs=`
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
`,Hs=`
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
`,ks=`
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
`;function Ls(){const e=g.useRef(null),t=g.useRef(null),s=g.useRef(null),i=g.useRef(null),r=g.useRef(null),n=g.useRef(null),a=g.useRef(null),o=g.useRef(0),l=g.useRef(null),c=g.useRef(null),M=g.useRef(new it),m=g.useRef({x:0,y:0}),b=g.useRef(null),y=g.useRef(null),D=g.useRef(null),O=g.useRef(null),ee=g.useRef(null),Z=g.useRef(null),[T,R]=g.useState(!1),[L,Ve]=g.useState("galaxy"),[xe,Se]=g.useState(null),be=g.useCallback(()=>{if(!e.current)return;const f=new le;f.background=new Ae(5),i.current=f;const x=new Ie(75,e.current.clientWidth/e.current.clientHeight,.1,1e3);x.position.z=60,r.current=x;const v=new rt({antialias:!0,powerPreference:"high-performance"});v.setSize(e.current.clientWidth,e.current.clientHeight),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.toneMapping=nt,v.toneMappingExposure=1.5,e.current.appendChild(v.domElement),t.current=v;const S=new j(e.current.clientWidth,e.current.clientHeight),B=new j(e.current.clientWidth,e.current.clientHeight);b.current=S,y.current=B;const w=new le,I=new Be(-1,1,1,-1,0,1);ee.current=w,Z.current=I;const G=new F({uniforms:{tDiffuse:{value:null},uSegments:{value:6},uTime:{value:0},uAudioLevel:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:Hs});D.current=G;const A=new F({uniforms:{tDiffuse:{value:null},tFeedback:{value:null},uFeedbackAmount:{value:.85},uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:ks});O.current=A;const P=new Y(new at(2,2),A);w.add(P);const d=new Rt(v),C=new Us(f,x);d.addPass(C);const V=new Ms({luminanceThreshold:.1,luminanceSmoothing:.9,intensity:2,mipmapBlur:!0}),X=new _s({offset:new E(.002,.002)}),te=new Ds(x,V,X);d.addPass(te),s.current=d,We(f),je(f);const re=()=>{if(!e.current||!x||!v||!d)return;const _=e.current.clientWidth,N=e.current.clientHeight;x.aspect=_/N,x.updateProjectionMatrix(),v.setSize(_,N),d.setSize(_,N),S.setSize(_,N),B.setSize(_,N)};window.addEventListener("resize",re);const H=_=>{_.beta!==null&&_.gamma!==null&&(m.current={x:(_.beta-45)/90,y:_.gamma/90})};return(async()=>{if(typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()==="granted"&&window.addEventListener("deviceorientation",H)}catch{}else window.addEventListener("deviceorientation",H)})(),()=>{window.removeEventListener("resize",re),window.removeEventListener("deviceorientation",H)}},[]),We=f=>{const v=new Float32Array(45e3),S=new Float32Array(15e3),B=new Float32Array(15e3);for(let A=0;A<15e3;A++){const P=Math.random()*50+2,d=P*.3,C=A%5/5*Math.PI*2,V=(Math.random()-.5)*(P*.4)*Math.random(),X=(Math.random()-.5)*(P*.15)*Math.random(),te=(Math.random()-.5)*(P*.4)*Math.random();v[A*3]=Math.cos(C+d)*P+V,v[A*3+1]=X,v[A*3+2]=Math.sin(C+d)*P+te,S[A]=Math.random()*3+1,B[A]=Math.random()}const w=new Ne;w.setAttribute("position",new ie(v,3)),w.setAttribute("aSize",new ie(S,1)),w.setAttribute("aRandom",new ie(B,1));const I=new F({uniforms:{uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uAudioLevel:{value:0},uOrientation:{value:new E(0,0)}},vertexShader:Os,fragmentShader:Ps,transparent:!0,blending:Ee,depthWrite:!1}),G=new ot(w,I);G.visible=!0,f.add(G),l.current=G},je=f=>{const x=new lt,v=200,S=10,B=80,w=.8,I=[],G=[];for(let H=0;H<v;H++){const Q=H/v,_=(Q-.5)*B,N=Q*Math.PI*8;I.push(new de(Math.cos(N)*S,_,Math.sin(N)*S)),G.push(new de(Math.cos(N+Math.PI)*S,_,Math.sin(N+Math.PI)*S))}const A=new Me(I),P=new Me(G),d=new we(A,200,w,16,!1),C=new we(P,200,w,16,!1),V=new Float32Array(64).fill(0),X=new F({uniforms:{uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uAudioLevel:{value:0},uOrientation:{value:new E(0,0)},uCameraPosition:{value:new de},uFrequencyData:{value:V}},vertexShader:Ns,fragmentShader:Fs,transparent:!0,side:se,blending:Ee}),te=new Y(d,X),re=new Y(C,X.clone());x.add(te),x.add(re);for(let H=0;H<v;H+=4){const Q=H/v,_=(Q-.5)*B,N=Q*Math.PI*8,Xe=new ct(.3,.3,S*2,8),$e=X.clone(),ne=new Y(Xe,$e);ne.position.y=_,ne.rotation.z=Math.PI/2,ne.rotation.y=N,x.add(ne)}x.visible=!1,f.add(x),c.current=x},qe=async()=>{try{if(typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()}catch{}const f=await navigator.mediaDevices.getUserMedia({audio:!0}),x=new AudioContext,v=x.createMediaStreamSource(f),S=x.createAnalyser();S.fftSize=256,S.smoothingTimeConstant=.8,v.connect(S),a.current=x,n.current=S,R(!0),Se(null)}catch(f){Se("Microphone access denied"),console.error("Audio error:",f)}},Te=()=>{a.current&&(a.current.close(),a.current=null,n.current=null),R(!1)},Ke=()=>{Ve(f=>f==="galaxy"?"dna":"galaxy")},ue=g.useCallback(()=>{if(!i.current||!r.current||!t.current||!s.current)return;const f=M.current.getElapsedTime();let x=new Uint8Array(128),v=.3,S=.3,B=.2,w=.3;n.current?(n.current.getByteFrequencyData(x),v=x.slice(0,10).reduce((d,C)=>d+C,0)/10/255,S=x.slice(10,50).reduce((d,C)=>d+C,0)/40/255,B=x.slice(50,128).reduce((d,C)=>d+C,0)/78/255,w=(v+S+B)/3):(v=.4+Math.sin(f*1.5)*.3+Math.sin(f*.7)*.2,S=.3+Math.sin(f*2.5)*.25+Math.cos(f*1.2)*.15,B=.2+Math.sin(f*4)*.2+Math.sin(f*2.1)*.1,w=(v+S+B)/3);const I=m.current;if(l.current&&(l.current.visible=L==="galaxy",L==="galaxy")){const d=l.current.material;d.uniforms.uTime.value=f,d.uniforms.uBass.value=v,d.uniforms.uMid.value=S,d.uniforms.uHigh.value=B,d.uniforms.uAudioLevel.value=w,d.uniforms.uOrientation.value.set(I.x,I.y),l.current.rotation.y=f*.05}c.current&&(c.current.visible=L==="dna",L==="dna"&&(c.current.rotation.y=f*.3+v*.5,c.current.traverse(d=>{if(d instanceof Y&&d.material instanceof F&&(d.material.uniforms.uTime.value=f,d.material.uniforms.uBass.value=v,d.material.uniforms.uMid.value=S,d.material.uniforms.uHigh.value=B,d.material.uniforms.uAudioLevel.value=w,d.material.uniforms.uOrientation.value.set(I.x,I.y),d.material.uniforms.uCameraPosition.value.copy(r.current.position),n.current)){const C=new Float32Array(64);for(let V=0;V<64;V++)C[V]=x[V*2]/255;d.material.uniforms.uFrequencyData.value=C}})));const G=I.y*30+Math.sin(f*.5)*10,A=I.x*20+Math.cos(f*.3)*5+v*10,P=60+w*20;r.current.position.x+=(G-r.current.position.x)*.05,r.current.position.y+=(A-r.current.position.y)*.05,r.current.position.z+=(P-r.current.position.z)*.05,r.current.lookAt(0,0,0),D.current&&(D.current.uniforms.uTime.value=f,D.current.uniforms.uAudioLevel.value=w,D.current.uniforms.uSegments.value=4+Math.floor(v*8)),s.current.render(),o.current=requestAnimationFrame(ue)},[L]);return g.useEffect(()=>{const f=be();return()=>{f?.(),o.current&&cancelAnimationFrame(o.current),t.current&&e.current&&(e.current.removeChild(t.current.domElement),t.current.dispose()),b.current&&b.current.dispose(),y.current&&y.current.dispose(),Te()}},[be]),g.useEffect(()=>(ue(),()=>{o.current&&cancelAnimationFrame(o.current)}),[ue]),z.jsxs("div",{className:"min-h-screen flex flex-col bg-black",children:[z.jsx("div",{className:"absolute top-4 left-4 z-20",children:z.jsx("a",{href:`${Is}/`,className:"w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all",children:z.jsx(dt,{className:"w-5 h-5"})})}),z.jsx("button",{onClick:Ke,className:"absolute top-4 right-16 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all",children:L==="galaxy"?z.jsx(ht,{className:"w-5 h-5"}):z.jsx(vt,{className:"w-5 h-5"})}),z.jsx("button",{onClick:T?Te:qe,className:ut("absolute top-4 right-4 z-20 w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all",T?"bg-accent-green/30 text-accent-green":"bg-black/50 text-white/70 hover:text-white hover:bg-black/70"),children:T?z.jsx(xt,{className:"w-5 h-5 animate-pulse"}):z.jsx(mt,{className:"w-5 h-5"})}),xe&&z.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-red-500/20 backdrop-blur-sm text-red-400 px-4 py-2 rounded-full text-sm",children:xe}),!T&&z.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/30 text-sm",children:"Tap mic for audio • Tilt phone to control"}),z.jsx("div",{ref:e,className:"flex-1 w-full"})]})}Ze.createRoot(document.getElementById("root")).render(z.jsx(g.StrictMode,{children:z.jsx(Ls,{})}));
