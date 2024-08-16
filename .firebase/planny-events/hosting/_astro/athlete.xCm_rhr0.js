import{r as u}from"./index.DhYZZe0J.js";import{g as m}from"./validateAuth.CUuyyvYq.js";var p={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=u,d=Symbol.for("react.element"),f=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function c(a,t,o){var r,e={},s=null,i=null;o!==void 0&&(s=""+o),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)h.call(t,r)&&!_.hasOwnProperty(r)&&(e[r]=t[r]);if(a&&a.defaultProps)for(r in t=a.defaultProps,t)e[r]===void 0&&(e[r]=t[r]);return{$$typeof:d,type:a,key:s,ref:i,props:e,_owner:y.current}}n.Fragment=f;n.jsx=c;n.jsxs=c;p.exports=n;var E=p.exports;class x{async createAthlete(t){const o=await m(),r=await fetch("https://planny-432016.uc.r.appspot.com/api/athletes",{method:"POST",headers:{Authorization:`Bearer ${o}`},body:t});if(!r.ok)throw new Error("Error creating athlete");const e=await r.json();return{birthDate:e.birthDate,email:e.email,documentNumber:e.documentNumber,documentType:e.documentType,fullName:e.fullName,id:e.id}}async getAllAthletes(){const t=await m(),o=await fetch("https://planny-432016.uc.r.appspot.com/api/athletes",{headers:{Authorization:`Bearer ${t}`},method:"GET"});if(!o.ok)throw new Error("Error fetching athletes");return(await o.json()).map(e=>({birthDate:e.birthDate,email:e.email,documentNumber:e.documentNumber,documentType:e.documentType,fullName:e.fullName,id:e.id}))}}export{x as A,E as j};
