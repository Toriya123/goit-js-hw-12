import{a as P,S,i}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const q="23881814-4fbf0e1aa0af3ee5c2b937608",M="https://pixabay.com/api/";async function u(a,t=1){const o={key:q,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await P.get(M,{params:o})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),B=new S(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const t=a.map(({webformatURL:o,largeImageURL:r,tags:e,likes:s,views:l,comments:b,downloads:w})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${s}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${l}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${b}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${w}</span>
          </div>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function R(){f.innerHTML=""}function h(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}function v(){m.classList.remove("is-hidden")}function c(){m.classList.add("is-hidden")}const $=document.querySelector(".form"),O=document.querySelector(".load-more");let d="",n=1;const L=15;$.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements.query.value.trim();if(!t){i.warning({message:"Please enter a search query!",position:"topRight"});return}d=t,n=1,R(),c(),h();try{const o=await u(d,n);if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits);const r=Math.ceil(o.totalHits/L);n>=r?i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):v()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}});O.addEventListener("click",async()=>{n+=1,c(),h();try{const a=await u(d,n);g(a.hits);const t=document.querySelector(".gallery-item");if(t){const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}const o=Math.ceil(a.totalHits/L);n>=o?(c(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}});
//# sourceMappingURL=index.js.map
