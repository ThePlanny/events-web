import"./hoisted.CC1l3W7K.js";import"./validateAuth.CUuyyvYq.js";const m=new Date("August 29, 2024 00:00:00").getTime(),n=()=>{const o=new Date().getTime(),t=m-o,s=Math.floor(t/(1e3*60*60*24)),c=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),r=Math.floor(t%(1e3*60*60)/(1e3*60)),a=Math.floor(t%(1e3*60)/1e3),e=document.getElementById("timer");if(e&&(e.innerHTML=`${s}d ${c}h ${r}m ${a}s`,t<0)){clearInterval(d);const i=document.getElementById("countdown");i.innerHTML="¡Inscripciones cerradas!"}};n();const d=setInterval(n,1e3);