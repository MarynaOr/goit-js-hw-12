import{a as h,i as y,S as L}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const b="https://pixabay.com/api/",w="47645708-0e2c2a3797788683efa376261",p=async(e,t=1,a=15)=>{try{return(await h.get(b,{params:{key:w,q:e,page:t,per_page:a,image_type:"photo",orientation:"horizontal"}})).data}catch(o){console.error("Error fetching images:",o)}},g=e=>{const t=document.querySelector(".gallery"),a=e.map(o=>`
      <li class='item-gallery' data-id='${o.id}'>
      <a class='link-gallery' href='${o.largeImageURL}'>
        <img 
          class='img-gallery'
          src='${o.webformatURL}'
          alt='${o.tags}'
          loading="lazy"
        >
        <ul>
          <li class='info-img'><span>Likes</span>${o.likes}</li>
          <li class='info-img'><span>Views</span>${o.views}</li>
          <li class='info-img'><span>Comments</span>${o.comments}</li>
          <li class='info-img'><span>Downloads</span>${o.downloads}</li>
        </ul>
      </a>
    </li>
      `).join("");t.insertAdjacentHTML("beforeend",a)},c=e=>{const t=document.querySelector(".load-more");e?t.style.display="block":t.style.display="none"},d=e=>{const t=document.querySelector(".loader");e?t.style.display="block":t.style.display="none"},f=()=>{const e=document.querySelector(".load-more");e.style.display="none",y.warning({title:"No more results",message:"We're sorry, but you've reached the end of search results."})};let i="",l=1,n=0;const S=document.querySelector(".form"),q=document.querySelector(".load-more"),v=document.querySelector(".gallery");let m=new L(".item-gallery a",{captionsData:"alt",captionDelay:300,className:"bg-color"});S.addEventListener("submit",async e=>{if(e.preventDefault(),i=e.target.elements.search.value.trim(),!i){y.error({title:"Error",message:"nothing entered"});return}l=1,n=0,E(),d(!0);const t=await p(i,l);d(!1),t&&t.hits.length>0&&(g(t.hits),n=t.totalHits,c(!0),m.refresh()),n<=l*15&&(c(!1),f())});const E=()=>{v.innerHTML="",m.refresh()};q.addEventListener("click",async()=>{var t;l+=1,d(!0);const e=await p(i,l);if(d(!1),e&&e.hits.length>0&&(g(e.hits),n=e.totalHits,m.refresh()),l*15>=n&&(c(!1),f()),((t=e==null?void 0:e.hits)==null?void 0:t.length)===0){c(!1),f();return}});
//# sourceMappingURL=index.js.map
