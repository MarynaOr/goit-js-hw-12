import{a as L,i as p,S as w}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const b="https://pixabay.com/api/",S="47645708-0e2c2a3797788683efa376261",g=async(e,t=1,n=15)=>{try{return(await L.get(b,{params:{key:S,q:e,page:t,per_page:n,image_type:"photo",orientation:"horizontal"}})).data}catch(r){console.error("Error fetching images:",r)}},h=e=>{const t=document.querySelector(".gallery"),n=e.map(r=>`
      <li class='item-gallery' data-id='${r.id}'>
      <a class='link-gallery' href='${r.largeImageURL}'>
        <img 
          class='img-gallery'
          src='${r.webformatURL}'
          alt='${r.tags}'
          loading="lazy"
          width='360'
          height='200'
        >
        <ul>
          <li class='info-img'><span>Likes</span>${r.likes}</li>
          <li class='info-img'><span>Views</span>${r.views}</li>
          <li class='info-img'><span>Comments</span>${r.comments}</li>
          <li class='info-img'><span>Downloads</span>${r.downloads}</li>
        </ul>
      </a>
    </li>
      `).join("");t.insertAdjacentHTML("beforeend",n)},l=e=>{const t=document.querySelector(".load-more");e?t.style.display="block":t.style.display="none"},d=e=>{const t=document.querySelector(".loader");e?t.style.display="block":t.style.display="none"},f=()=>{const e=document.querySelector(".load-more");e.style.display="none",p.warning({title:"No more results",message:"We're sorry, but you've reached the end of search results."})};let c="",a=1,i=0;const y=document.querySelector(".form"),q=document.querySelector(".load-more"),v=document.querySelector(".gallery");document.querySelector(".load-more");document.querySelector(".loader");let m=new w(".item-gallery a",{captionsData:"alt",captionDelay:300,className:"bg-color"});y.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.target.elements.search.value.trim(),!c){p.error({title:"Error",message:"nothing entered"});return}y.reset(),a=1,i=0,E(),d(!0);const t=await g(c,a);d(!1),t&&t.hits.length>0&&(h(t.hits),i=t.totalHits,l(!0),m.refresh()),i<=a*15&&(l(!1),f())});const E=()=>{v.innerHTML="",m.refresh()};q.addEventListener("click",async()=>{var t;d(!0),l(!1),a+=1;const e=await g(c,a);if(e&&e.hits.length>0&&(h(e.hits),i=e.totalHits,m.refresh()),a*15>=i&&(l(!1),f()),((t=e==null?void 0:e.hits)==null?void 0:t.length)===0){l(!1),f();return}window.scrollBy({top:1e3,left:0,behavior:"smooth"}),setTimeout(()=>{d(!1),l(!0)},1e3)});
//# sourceMappingURL=index.js.map
