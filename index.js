import{a as p,i as g}from"./assets/vendor-BB-yuAn6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const h="https://pixabay.com/api/",L="47645708-0e2c2a3797788683efa376261",y=async(e,t=1,a=15)=>{try{return(await p.get(h,{params:{key:L,q:e,page:t,per_page:a,image_type:"photo",orientation:"horizontal"}})).data}catch(s){console.error("Error fetching images:",s)}},m=e=>{const t=document.querySelector(".gallery"),a=e.map(s=>`
      <li class="gallery-item">
        <a href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}" />
        </a>
      </li>`).join("");t.insertAdjacentHTML("beforeend",a)},i=e=>{const t=document.querySelector(".load-more");e?t.style.display="block":t.style.display="none"},u=e=>{const t=document.querySelector(".loader");e?t.style.display="block":t.style.display="none"},f=()=>{const e=document.querySelector(".load-more");e.style.display="none",g.warning({title:"No more results",message:"We're sorry, but you've reached the end of search results."})};let c="",n=1,l=0;const b=document.querySelector(".form"),q=document.querySelector(".load-more"),S=document.querySelector(".gallery");b.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.target.elements.search.value.trim(),!c)return;n=1,l=0,M(),u(!0);const t=await y(c,n);u(!1),t&&t.hits.length>0&&(m(t.hits),l=t.totalHits,i(!0)),l<=n*15&&(i(!1),f())});const M=()=>{S.innerHTML=""};q.addEventListener("click",async()=>{var t;n+=1,u(!0);const e=await y(c,n);if(u(!1),e&&e.hits.length>0&&(m(e.hits),l=e.totalHits),n*15>=l&&(i(!1),f()),((t=e==null?void 0:e.hits)==null?void 0:t.length)===0){i(!1),f();return}});
//# sourceMappingURL=index.js.map
