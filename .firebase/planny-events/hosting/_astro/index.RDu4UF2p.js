import{r as u}from"./index.DhYZZe0J.js";import{s as _,a as c}from"./firstEvent.c71c698c.Cvy-jAXS.js";var f={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=u,m=Symbol.for("react.element"),y=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,v=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function p(t,r,s){var e,o={},l=null,i=null;s!==void 0&&(l=""+s),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(i=r.ref);for(e in r)x.call(r,e)&&!j.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:m,type:t,key:l,ref:i,props:o,_owner:v.current}}n.Fragment=y;n.jsx=p;n.jsxs=p;f.exports=n;var a=f.exports;const R=({color:t})=>a.jsx("div",{className:_.loader,style:{borderRightColor:t||"#FFF"}}),O=({label:t,isLoading:r,href:s,onClick:e})=>{const o=()=>{if(typeof e=="function"){e();return}s&&(window.location.href=s)};return a.jsx("button",{className:c.button,disabled:r,onClick:o,children:r?a.jsx(R,{}):t})};export{O as B,R as L,a as j};
