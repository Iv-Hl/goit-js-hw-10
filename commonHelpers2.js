import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";document.querySelector(".notification-form").addEventListener("submit",function(e){e.preventDefault();const s=document.querySelector('input[name="delay"]').value,i=document.querySelector('input[name="state"]:checked').value;n(s,i).then(t=>{r.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{r.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})})});function n(e,s){return new Promise((i,t)=>{setTimeout(()=>{s==="fulfilled"?i(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
