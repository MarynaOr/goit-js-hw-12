import{a as p,S as g,i as u}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="47645708-0e2c2a3797788683efa376261";async function L(a){const r=new URLSearchParams({key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return await p.get(`${y}?${r}`)}function w(a){return a.map(({id:r,largeImageURL:n,webformatURL:o,tags:e,likes:t,views:i,comments:m,downloads:d})=>`
      <li class='item-gallery' data-id='${r}'>
        <a class='link-gallery' href='${n}'>
          <img 
            class='img-gallery'
            src='${o}'
            alt='${e}'
            loading="lazy"
          >
          <ul>
            <li class='info-img'><span>Likes</span>${t}</li>
            <li class='info-img'><span>Views</span>${i}</li>
            <li class='info-img'><span>Comments</span>${m}</li>
            <li class='info-img'><span>Downloads</span>${d}</li>
          </ul>
        </a>
      </li>
      `).join("")}function S(a){a.style.display="block"}function f(a){a.style.display="none"}const $=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");let s="";const b=new g(".gallery a",{captionsData:"alt",captionDelay:300});$.addEventListener("submit",q);function q(a){if(a.preventDefault(),s=a.target.elements.search.value.trim(),s===""){u.warning({title:"Caution",message:"The field is empty, please type your request"});return}s&&S(c),L(s).then(r=>{if(r.total===0)throw l.innerHTML="",new Error;return f(c),r.data.hits}).then(r=>{l.innerHTML="",f(c),l.innerHTML=w(r),s="",b.refresh()}).catch(()=>{u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}
//# sourceMappingURL=index.js.map
