import{g as t}from"./validateAuth.CUuyyvYq.js";const o=await t();o||(location.href="/auth/login");const e=document.getElementById("btn-logout");e?.addEventListener("click",async()=>{localStorage.removeItem("user"),location.href="/auth/login"});
