import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-77e16229.js";document.querySelector(".notification-form").addEventListener("submit",function(e){e.preventDefault();const i=document.querySelector('input[name="delay"]').value,r=document.querySelector('input[name="state"]:checked').value;n(i,r).then(t=>{s.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{s.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})})});function n(e,i){return new Promise((r,t)=>{setTimeout(()=>{i==="fulfilled"?r(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
