(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[98158],{64938:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=t(39768)},39768:(e,n,t)=>{"use strict";t.r(n),t.d(n,{capitalize:()=>r,createChainedFunction:()=>i,createSvgIcon:()=>x,debounce:()=>E,deprecatedPropType:()=>z,isMuiElement:()=>R,ownerDocument:()=>C,ownerWindow:()=>I,requirePropFactory:()=>T,setRef:()=>M,unstable_ClassNameGenerator:()=>H,unstable_useEnhancedEffect:()=>_,unstable_useId:()=>F,unsupportedProp:()=>L,useControlled:()=>V,useEventCallback:()=>$,useForkRef:()=>j,useIsFocusVisible:()=>X});var o=t(37078);const r=t(28320).Z;const i=function(...e){return e.reduce(((e,n)=>null==n?e:function(...t){e.apply(this,t),n.apply(this,t)}),(()=>{}))};var l=t(87462),u=t(67294),c=t.t(u,2),s=t(63366),a=t(86010),d=t(94780),f=t(54502),m=t(11496),v=t(1588),p=t(34867);function h(e){return(0,p.Z)("MuiSvgIcon",e)}(0,v.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var w=t(85893);const S=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],y=(0,m.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,"inherit"!==t.color&&n[`color${r(t.color)}`],n[`fontSize${r(t.fontSize)}`]]}})((({theme:e,ownerState:n})=>{var t,o,r,i,l,u,c,s,a,d,f,m,v,p,h,w,S;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=e.transitions)||null==(o=t.create)?void 0:o.call(t,"fill",{duration:null==(r=e.transitions)||null==(i=r.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(l=e.typography)||null==(u=l.pxToRem)?void 0:u.call(l,20))||"1.25rem",medium:(null==(c=e.typography)||null==(s=c.pxToRem)?void 0:s.call(c,24))||"1.5rem",large:(null==(a=e.typography)||null==(d=a.pxToRem)?void 0:d.call(a,35))||"2.1875rem"}[n.fontSize],color:null!=(f=null==(m=(e.vars||e).palette)||null==(v=m[n.color])?void 0:v.main)?f:{action:null==(p=(e.vars||e).palette)||null==(h=p.action)?void 0:h.active,disabled:null==(w=(e.vars||e).palette)||null==(S=w.action)?void 0:S.disabled,inherit:void 0}[n.color]}})),b=u.forwardRef((function(e,n){const t=(0,f.Z)({props:e,name:"MuiSvgIcon"}),{children:o,className:i,color:u="inherit",component:c="svg",fontSize:m="medium",htmlColor:v,inheritViewBox:p=!1,titleAccess:b,viewBox:g="0 0 24 24"}=t,x=(0,s.Z)(t,S),E=(0,l.Z)({},t,{color:u,component:c,fontSize:m,instanceFontSize:e.fontSize,inheritViewBox:p,viewBox:g}),z={};p||(z.viewBox=g);const R=(e=>{const{color:n,fontSize:t,classes:o}=e,i={root:["root","inherit"!==n&&`color${r(n)}`,`fontSize${r(t)}`]};return(0,d.Z)(i,h,o)})(E);return(0,w.jsxs)(y,(0,l.Z)({as:c,className:(0,a.Z)(R.root,i),focusable:"false",color:v,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:n},z,x,{ownerState:E,children:[o,b?(0,w.jsx)("title",{children:b}):null]}))}));b.muiName="SvgIcon";const g=b;function x(e,n){function t(t,o){return(0,w.jsx)(g,(0,l.Z)({"data-testid":`${n}Icon`,ref:o},t,{children:e}))}return t.muiName=g.muiName,u.memo(u.forwardRef(t))}const E=function(e,n=166){let t;function o(...o){clearTimeout(t),t=setTimeout((()=>{e.apply(this,o)}),n)}return o.clear=()=>{clearTimeout(t)},o};const z=function(e,n){return()=>null};const R=function(e,n){return u.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)};function k(e){return e&&e.ownerDocument||document}const C=k;const I=function(e){return k(e).defaultView||window};const T=function(e,n){return()=>null};function Z(e,n){"function"==typeof e?e(n):e&&(e.current=n)}const M=Z,N="undefined"!=typeof window?u.useLayoutEffect:u.useEffect,_=N;let B=0;const P=c.useId;const F=function(e){if(void 0!==P){const n=P();return null!=e?e:n}return function(e){const[n,t]=u.useState(e),o=e||n;return u.useEffect((()=>{null==n&&(B+=1,t(`mui-${B}`))}),[n]),o}(e)};const L=function(e,n,t,o,r){return null};const V=function({controlled:e,default:n,name:t,state:o="value"}){const{current:r}=u.useRef(void 0!==e),[i,l]=u.useState(n);return[r?e:i,u.useCallback((e=>{r||l(e)}),[])]};const $=function(e){const n=u.useRef(e);return N((()=>{n.current=e})),u.useCallback(((...e)=>(0,n.current)(...e)),[])};const j=function(...e){return u.useMemo((()=>e.every((e=>null==e))?null:n=>{e.forEach((e=>{Z(e,n)}))}),e)};let A,O=!0,D=!1;const K={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function q(e){e.metaKey||e.altKey||e.ctrlKey||(O=!0)}function G(){O=!1}function U(){"hidden"===this.visibilityState&&D&&(O=!0)}function W(e){const{target:n}=e;try{return n.matches(":focus-visible")}catch(t){}return O||function(e){const{type:n,tagName:t}=e;return!("INPUT"!==t||!K[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}const X=function(){const e=u.useCallback((e=>{var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",q,!0),n.addEventListener("mousedown",G,!0),n.addEventListener("pointerdown",G,!0),n.addEventListener("touchstart",G,!0),n.addEventListener("visibilitychange",U,!0))}),[]),n=u.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!W(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(D=!0,window.clearTimeout(A),A=window.setTimeout((()=>{D=!1}),100),n.current=!1,!0)},ref:e}},H={configure:e=>{o.Z.configure(e)}}},64836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);