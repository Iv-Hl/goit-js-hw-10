import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as p,i as b}from"./assets/vendor-77e16229.js";const u=document.getElementById("datetime-picker"),n=document.getElementById("start-button"),a={days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};let c=null,l=null;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(b.error({title:"Error!",message:"Please choose a date in the future."}),n.disabled=!0):(c=t,n.disabled=!1)}};p(u,D);n.addEventListener("click",()=>{c&&(n.disabled=!0,u.disabled=!0,l=setInterval(()=>{const t=c-new Date;if(t<=0){clearInterval(l),u.disabled=!1,n.disabled=!0,m(0,0,0,0);return}const{days:o,hours:s,minutes:i,seconds:d}=S(t);m(o,s,i,d)},1e3))});function S(e){const d=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:f,minutes:h,seconds:y}}function r(e){return String(e).padStart(2,"0")}function m(e,t,o,s){a.days.textContent=r(e),a.hours.textContent=r(t),a.minutes.textContent=r(o),a.seconds.textContent=r(s)}
//# sourceMappingURL=commonHelpers.js.map
