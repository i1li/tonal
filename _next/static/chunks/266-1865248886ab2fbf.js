"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{7735:function(e,r,t){t.d(r,{_9:function(){return i},gm:function(){return a}});var n=t(9860),o=t(7283),l=n.createContext(void 0),i=e=>{let{dir:r,children:t}=e;return(0,o.jsx)(l.Provider,{value:r,children:t})};function a(e){let r=n.useContext(l);return e||r||"ltr"}},5878:function(e,r,t){t.d(r,{xr:function(){return q},Bl:function(){return K},fK:function(){return G}});var n=t(6476),o=t(9860),l=t(9298),i=t(8464),a=t(9469),s=t(674),c=t(5436),d=t(7735),u=t(1832),f=t(9425),p=t(7283),h="ScrollArea",[v,w]=(0,a.b)(h),[m,b]=v(h),g=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,type:n="hover",dir:i,scrollHideDelay:a=600,...c}=e,[u,f]=o.useState(null),[h,v]=o.useState(null),[w,b]=o.useState(null),[g,x]=o.useState(null),[S,y]=o.useState(null),[E,C]=o.useState(0),[R,T]=o.useState(0),[P,L]=o.useState(!1),[j,_]=o.useState(!1),N=(0,s.e)(r,e=>f(e)),D=(0,d.gm)(i);return(0,p.jsx)(m,{scope:t,type:n,dir:D,scrollHideDelay:a,scrollArea:u,viewport:h,onViewportChange:v,content:w,onContentChange:b,scrollbarX:g,onScrollbarXChange:x,scrollbarXEnabled:P,onScrollbarXEnabledChange:L,scrollbarY:S,onScrollbarYChange:y,scrollbarYEnabled:j,onScrollbarYEnabledChange:_,onCornerWidthChange:C,onCornerHeightChange:T,children:(0,p.jsx)(l.WV.div,{dir:D,...c,ref:N,style:{position:"relative","--radix-scroll-area-corner-width":E+"px","--radix-scroll-area-corner-height":R+"px",...e.style}})})});g.displayName=h;var x="ScrollAreaViewport",S=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,children:n,nonce:i,...a}=e,c=b(x,t),d=o.useRef(null),u=(0,s.e)(r,d,c.onViewportChange);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),(0,p.jsx)(l.WV.div,{"data-radix-scroll-area-viewport":"",...a,ref:u,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,p.jsx)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:n})})]})});S.displayName=x;var y="ScrollAreaScrollbar",E=o.forwardRef((e,r)=>{let{forceMount:t,...n}=e,l=b(y,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:a}=l,s="horizontal"===e.orientation;return o.useEffect(()=>(s?i(!0):a(!0),()=>{s?i(!1):a(!1)}),[s,i,a]),"hover"===l.type?(0,p.jsx)(C,{...n,ref:r,forceMount:t}):"scroll"===l.type?(0,p.jsx)(R,{...n,ref:r,forceMount:t}):"auto"===l.type?(0,p.jsx)(T,{...n,ref:r,forceMount:t}):"always"===l.type?(0,p.jsx)(P,{...n,ref:r}):null});E.displayName=y;var C=o.forwardRef((e,r)=>{let{forceMount:t,...n}=e,l=b(y,e.__scopeScrollArea),[a,s]=o.useState(!1);return o.useEffect(()=>{let e=l.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),s(!0)},n=()=>{r=window.setTimeout(()=>s(!1),l.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",n)}}},[l.scrollArea,l.scrollHideDelay]),(0,p.jsx)(i.z,{present:t||a,children:(0,p.jsx)(T,{"data-state":a?"visible":"hidden",...n,ref:r})})}),R=o.forwardRef((e,r)=>{var t,n;let{forceMount:l,...a}=e,s=b(y,e.__scopeScrollArea),c="horizontal"===e.orientation,d=B(()=>h("SCROLL_END"),100),[u,h]=(t="hidden",n={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},o.useReducer((e,r)=>{let t=n[e][r];return null!=t?t:e},t));return o.useEffect(()=>{if("idle"===u){let e=window.setTimeout(()=>h("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,s.scrollHideDelay,h]),o.useEffect(()=>{let e=s.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],n=()=>{let n=e[r];t!==n&&(h("SCROLL"),d()),t=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[s.viewport,c,h,d]),(0,p.jsx)(i.z,{present:l||"hidden"!==u,children:(0,p.jsx)(P,{"data-state":"hidden"===u?"hidden":"visible",...a,ref:r,onPointerEnter:(0,f.M)(e.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:(0,f.M)(e.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),T=o.forwardRef((e,r)=>{let t=b(y,e.__scopeScrollArea),{forceMount:n,...l}=e,[a,s]=o.useState(!1),c="horizontal"===e.orientation,d=B(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;s(c?e:r)}},10);return F(t.viewport,d),F(t.content,d),(0,p.jsx)(i.z,{present:n||a,children:(0,p.jsx)(P,{"data-state":a?"visible":"hidden",...l,ref:r})})}),P=o.forwardRef((e,r)=>{let{orientation:t="vertical",...n}=e,l=b(y,e.__scopeScrollArea),i=o.useRef(null),a=o.useRef(0),[s,c]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=Y(s.viewport,s.content),u={...n,sizes:s,onSizesChange:c,hasThumb:!!(d>0&&d<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:e=>a.current=e};function f(e,r){return function(e,r,t){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=X(t),l=r||o/2,i=t.scrollbar.paddingStart+l,a=t.scrollbar.size-t.scrollbar.paddingEnd-(o-l),s=t.content-t.viewport;return U([i,a],"ltr"===n?[0,s]:[-1*s,0])(e)}(e,a.current,s,r)}return"horizontal"===t?(0,p.jsx)(L,{...u,ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=k(l.viewport.scrollLeft,s,l.dir);i.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=f(e,l.dir))}}):"vertical"===t?(0,p.jsx)(j,{...u,ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=k(l.viewport.scrollTop,s);i.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=f(e))}}):null}),L=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:n,...l}=e,i=b(y,e.__scopeScrollArea),[a,c]=o.useState(),d=o.useRef(null),u=(0,s.e)(r,d,i.onScrollbarXChange);return o.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,p.jsx)(D,{"data-orientation":"horizontal",...l,ref:u,sizes:t,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":X(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(i.viewport){let n=i.viewport.scrollLeft+r.deltaX;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&i.viewport&&a&&n({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:O(a.paddingLeft),paddingEnd:O(a.paddingRight)}})}})}),j=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:n,...l}=e,i=b(y,e.__scopeScrollArea),[a,c]=o.useState(),d=o.useRef(null),u=(0,s.e)(r,d,i.onScrollbarYChange);return o.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,p.jsx)(D,{"data-orientation":"vertical",...l,ref:u,sizes:t,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":X(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(i.viewport){let n=i.viewport.scrollTop+r.deltaY;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&i.viewport&&a&&n({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:O(a.paddingTop),paddingEnd:O(a.paddingBottom)}})}})}),[_,N]=v(y),D=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,sizes:n,hasThumb:i,onThumbChange:a,onThumbPointerUp:d,onThumbPointerDown:u,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:w,onResize:m,...g}=e,x=b(y,t),[S,E]=o.useState(null),C=(0,s.e)(r,e=>E(e)),R=o.useRef(null),T=o.useRef(""),P=x.viewport,L=n.content-n.viewport,j=(0,c.W)(w),N=(0,c.W)(h),D=B(m,10);function W(e){R.current&&v({x:e.clientX-R.current.left,y:e.clientY-R.current.top})}return o.useEffect(()=>{let e=e=>{let r=e.target;(null==S?void 0:S.contains(r))&&j(e,L)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[P,S,L,j]),o.useEffect(N,[n,N]),F(S,D),F(x.content,D),(0,p.jsx)(_,{scope:t,scrollbar:S,hasThumb:i,onThumbChange:(0,c.W)(a),onThumbPointerUp:(0,c.W)(d),onThumbPositionChange:N,onThumbPointerDown:(0,c.W)(u),children:(0,p.jsx)(l.WV.div,{...g,ref:C,style:{position:"absolute",...g.style},onPointerDown:(0,f.M)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),R.current=S.getBoundingClientRect(),T.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",x.viewport&&(x.viewport.style.scrollBehavior="auto"),W(e))}),onPointerMove:(0,f.M)(e.onPointerMove,W),onPointerUp:(0,f.M)(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=T.current,x.viewport&&(x.viewport.style.scrollBehavior=""),R.current=null})})})}),W="ScrollAreaThumb",A=o.forwardRef((e,r)=>{let{forceMount:t,...n}=e,o=N(W,e.__scopeScrollArea);return(0,p.jsx)(i.z,{present:t||o.hasThumb,children:(0,p.jsx)(z,{ref:r,...n})})}),z=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,style:n,...i}=e,a=b(W,t),c=N(W,t),{onThumbPositionChange:d}=c,u=(0,s.e)(r,e=>c.onThumbChange(e)),h=o.useRef(),v=B(()=>{h.current&&(h.current(),h.current=void 0)},100);return o.useEffect(()=>{let e=a.viewport;if(e){let r=()=>{if(v(),!h.current){let r=V(e,d);h.current=r,d()}};return d(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[a.viewport,v,d]),(0,p.jsx)(l.WV.div,{"data-state":c.hasThumb?"visible":"hidden",...i,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...n},onPointerDownCapture:(0,f.M)(e.onPointerDownCapture,e=>{let r=e.target.getBoundingClientRect(),t=e.clientX-r.left,n=e.clientY-r.top;c.onThumbPointerDown({x:t,y:n})}),onPointerUp:(0,f.M)(e.onPointerUp,c.onThumbPointerUp)})});A.displayName=W;var M="ScrollAreaCorner",H=o.forwardRef((e,r)=>{let t=b(M,e.__scopeScrollArea),n=!!(t.scrollbarX&&t.scrollbarY);return"scroll"!==t.type&&n?(0,p.jsx)(I,{...e,ref:r}):null});H.displayName=M;var I=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,...n}=e,i=b(M,t),[a,s]=o.useState(0),[c,d]=o.useState(0),u=!!(a&&c);return F(i.scrollbarX,()=>{var e;let r=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(r),d(r)}),F(i.scrollbarY,()=>{var e;let r=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(r),s(r)}),u?(0,p.jsx)(l.WV.div,{...n,ref:r,style:{width:a,height:c,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}}):null});function O(e){return e?parseInt(e,10):0}function Y(e,r){let t=e/r;return isNaN(t)?0:t}function X(e){let r=Y(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-t)*r,18)}function k(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=X(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-o,i=r.content-r.viewport,a=function(e,[r,t]){return Math.min(t,Math.max(r,e))}(e,"ltr"===t?[0,i]:[-1*i,0]);return U([0,i],[0,l-n])(a)}function U(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let n=(r[1]-r[0])/(e[1]-e[0]);return r[0]+n*(t-e[0])}}var V=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},t={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=t.left!==l.left,a=t.top!==l.top;(i||a)&&r(),t=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function B(e,r){let t=(0,c.W)(e),n=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(n.current),[]),o.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(t,r)},[t,r])}function F(e,r){let t=(0,c.W)(r);(0,u.b)(()=>{let r=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,t])}var q=o.forwardRef(({className:e,children:r,...t},o)=>(0,p.jsxs)(g,{ref:o,className:(0,n.m6)("overflow-hidden",e),...t,children:[r,(0,p.jsx)(H,{}),(0,p.jsx)(K,{orientation:"vertical"})]}));q.displayName=g.displayName;var G=o.forwardRef(({className:e,children:r,...t},o)=>(0,p.jsx)(S,{ref:o,className:(0,n.m6)("size-full rounded-[inherit]",e),...t,children:r}));G.displayName=S.displayName;var K=o.forwardRef(({className:e,orientation:r="vertical",...t},o)=>(0,p.jsx)(E,{ref:o,orientation:r,className:(0,n.m6)("flex select-none data-[state=hidden]:animate-fd-fade-out","vertical"===r&&"h-full w-1.5","horizontal"===r&&"h-1.5 flex-col",e),...t,children:(0,p.jsx)(A,{className:"relative flex-1 rounded-full bg-fd-border"})}));K.displayName=E.displayName},8572:function(e,r,t){t.d(r,{G:function(){return s},W:function(){return c}});var n=t(3908),o=t(6303),l=t(9860),i=t(7283),a=(0,l.createContext)(void 0);function s({children:e,tree:r}){let t=(0,o.usePathname)(),s=(0,l.useMemo)(()=>{let e=function e(r,t){for(let o of r)if("folder"===o.type){let r=e(o.children,t);if(r)return r;if(!0===o.root&&(0,n.$M)(o.children,t))return o}}(r.children,t)??r,o=function e(r){return r.flatMap(r=>{if("separator"===r.type)return[];if("folder"===r.type){let t=e(r.children);return!r.root&&r.index&&t.unshift(r.index),t}return r.external?[]:[r]})}(e.children);return{root:e,navigation:o,tree:r}},[t,r]);return(0,i.jsx)(a.Provider,{value:s,children:e})}function c(){let e=(0,l.useContext)(a);if(!e)throw Error("You must wrap this component under <DocsLayout />");return e}}}]);